package com.fas.model.com.api.impl;

import java.net.URL;
import java.net.URLConnection;
import java.util.List;
import java.util.Map;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.stereotype.Component;

import com.fas.model.com.api.OpenAPI;
import com.fas.web.cmmn.dataaccess.util.FasMap;

public class BOKOpenAPI extends OpenAPI{
	
	private static Log logger = LogFactory.getLog(BOKOpenAPI.class);

	private String apiUrl;  //api URL
	
	private String authCd;  //인증키
	
	private String type;    //조회 타입 xml or json
	
	private int startNum;
	
	private int endNum;
	
	private String homeUrl;
	
	//XML에서 셋팅
	public String getAuthCd() {
		return authCd;
	}

	public void setAuthCd(String authCd) {
		this.authCd = authCd;
	}

	public String getType() {
		return type;
	}

	public void setType(String type) {
		this.type = type;
	}

	public int getStartNum() {
		return startNum;
	}

	public void setStartNum(int startNum) {
		this.startNum = startNum;
	}

	public int getEndNum() {
		return endNum;
	}

	public void setEndNum(int endNum) {
		this.endNum = endNum;
	}
	
	public String getHomeUrl() {
		return homeUrl;
	}

	public void setHomeUrl(String homeUrl) {
		this.homeUrl = homeUrl;
	}
	
	/////////////////////////////////////////////////////
	
	public List<FasMap> getApiMapList(String svcd, Map searchParam) throws Exception {
		
		parser = new BOKParser();
		
		if ("StatisticTableList".equals(svcd)) {
			apiUrl = homeUrl + "/" + svcd + "/" + authCd + "/" + type + "/kr/" + startNum + "/" + endNum + "/";
		} else if ("StatisticItemList".equals(svcd)) {
			apiUrl = homeUrl + "/" + svcd + "/" + authCd + "/" + type + "/kr/" + startNum + "/" + endNum + "/" + searchParam.get("statCode") + "/";
		} else if ("StatisticSearch".equals(svcd)) {
			apiUrl = homeUrl + "/" + svcd + "/" + authCd + "/" + type + "/kr/" + startNum + "/" + endNum 
					+ "/" + searchParam.get("statCode") 
					+ "/" + searchParam.get("cycle") 
					+ "/" + searchParam.get("startTime") 
					+ "/" + searchParam.get("endTime");
			
			if (searchParam.get("itemCode1") != null) apiUrl = apiUrl + "/" + searchParam.get("itemCode1");
			if (searchParam.get("itemCode3") != null) apiUrl = apiUrl + "/" + searchParam.get("itemCode3");
			if (searchParam.get("itemCode2") != null) apiUrl = apiUrl + "/" + searchParam.get("itemCode2");
			
		} else {
			throw new Exception("존재하지 않는 서비스 코드입니다.");
		}
		
		logger.debug(">>> apiUrl >> " + apiUrl);
		
		URL url = new URL(apiUrl);
        URLConnection connection = url.openConnection();
        
        List<FasMap> resultList = parser.parserXMLMapList(connection.getInputStream());
        
        logger.debug(">>>> " + parser.hasNext());
        
        int startNumRe = endNum;
        int endNumRe = endNum;
        
        while(parser.hasNext()) {
        	
        	startNumRe = startNumRe + 1;
        	endNumRe = endNumRe + endNumRe;
        	
        	if ("StatisticTableList".equals(svcd)) {
    			apiUrl = homeUrl + "/" + svcd + "/" + authCd + "/" + type + "/kr/" + startNumRe + "/" + endNumRe + "/";
    		} else if ("StatisticItemList".equals(svcd)) {
    			apiUrl = homeUrl + "/" + svcd + "/" + authCd + "/" + type + "/kr/" + startNumRe + "/" + endNumRe + "/" + searchParam.get("statCode") + "/";
    		} else if ("StatisticSearch".equals(svcd)) {
    			apiUrl = homeUrl + "/" + svcd + "/" + authCd + "/" + type + "/kr/" + startNum + "/" + endNum 
    					+ "/" + searchParam.get("statCode") 
    					+ "/" + searchParam.get("cycle") 
    					+ "/" + searchParam.get("startTime") 
    					+ "/" + searchParam.get("endTime");
    			
    			if (searchParam.get("itemCode1") != null) apiUrl = apiUrl + "/" + searchParam.get("itemCode1");
    			if (searchParam.get("itemCode3") != null) apiUrl = apiUrl + "/" + searchParam.get("itemCode3");
    			if (searchParam.get("itemCode2") != null) apiUrl = apiUrl + "/" + searchParam.get("itemCode2");
    		} else {
    			throw new Exception("존재하지 않는 서비스 코드입니다.");
    		}
        	
        	url = new URL(apiUrl);
        	connection = url.openConnection();
        	
        	
        	
        	List<FasMap> arrList = parser.parserXMLMapList(connection.getInputStream());
        	
        	for (FasMap map : arrList) {
        		resultList.add(map);
        	}
        	
        	logger.debug(">>> total >> " + resultList.size());
        	
        	logger.debug(">>> listtotal >> " + parser.totalCnt());
        	
        	logger.debug(">> result >> " + parser.hasNext());
        	
        }
        
        return resultList;
		 
		
	}
	
}
