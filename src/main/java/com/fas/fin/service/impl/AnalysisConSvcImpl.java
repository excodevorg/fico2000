package com.fas.fin.service.impl;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;
import java.util.Set;

import javax.annotation.Resource;

import org.apache.commons.collections.map.ListOrderedMap;
import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.fas.cmmn.util.FasDateUtil;
import com.fas.cmmn.util.FasPagingUtil;
import com.fas.cmmn.util.KeyGenerator;
import com.fas.fin.formVo.AnalysisConFormVo;
import com.fas.fin.service.AnalysisConSvc;
import com.fas.model.com.BOKManager;
import com.fas.model.com.CodeInfoManager;
import com.fas.model.com.domain.BOKFinRatioDomain;
import com.fas.model.com.domain.CodeInfoDomain;
import com.fas.model.fin.AnalysisConManager;
import com.fas.model.fin.AnalysisFnamManager;
import com.fas.model.fin.CoporationManager;
import com.fas.model.fin.EntpFinInfoManager;
import com.fas.model.fin.EntpFinItemVo;
import com.fas.model.fin.alys.exam.FinExamMake;
import com.fas.model.fin.alys.ratio.FinRatioMake;
import com.fas.model.fin.bok.ratio.BokRatioMake;
import com.fas.model.fin.bok.ratio.WallTrantBokRatioMake;
import com.fas.model.fin.dao.FinWallTrantDao;
import com.fas.model.fin.domain.AlyFnamDtDomain;
import com.fas.model.fin.domain.AlyFnamInfoDomain;
import com.fas.model.fin.domain.AnalysisConDomain;
import com.fas.model.fin.domain.CorporationDomain;
import com.fas.model.fin.domain.FinFnamInfoDomain;
import com.fas.model.fin.domain.FinWallTrantDomain;
import com.fas.web.cmmn.dataaccess.util.JsonObjectModel;
import com.fas.web.cmmn.util.BeanUtils;
import com.fas.web.cmmn.util.HttpUtil;
import com.fas.web.cmmn.util.StringUtil;

@Service("AnalysisCorporationSvc")
public class AnalysisConSvcImpl implements AnalysisConSvc {
	
	private static Log logger = LogFactory.getLog(AnalysisConSvcImpl.class);

	@Resource(name="HttpUtil")
	private HttpUtil httpUtil;
	
	@Resource(name="AnalysisConManager")
	private AnalysisConManager analysisConManager;
	
	@Resource(name="AnalysisFnamManager")
	private AnalysisFnamManager analysisFnamManager;
	
	@Autowired
	private CoporationManager coporationManager;
	
	@Resource(name="EntpFinInfoManager")
	private EntpFinInfoManager entpFinInfoManager;
	
	@Resource(name="CodeInfoManager")
	private CodeInfoManager codeInfoManager;	
	
	@Resource(name="BOKManager")
	private BOKManager bokManager;
	
	@Resource(name="FinWallTrantDao")
	private FinWallTrantDao finWallTrantDao;
	
	
	//1) Userid , Bzn 으로 분석 히스트로 조회
	public JsonObjectModel analysisConList(AnalysisConFormVo param) throws Exception {
		
		//1) 선언
		JsonObjectModel resultMap = new JsonObjectModel();
		
		AnalysisConDomain domain = new AnalysisConDomain();
		domain.setAlycon(param.getAlycon());
		domain.setAlyid(param.getAlyid());
		domain.setBzn(param.getBzn());
		domain.setUserid(param.getUserid());
		
		if (!httpUtil.isAdminRole()) {
			domain.setUserid(httpUtil.getSessionUserId());
		} 
		
		int page = param.getPage();
		int limit = param.getLimit();
		int totalCnt = 0;
		
		FasPagingUtil paging = new FasPagingUtil(page, limit);
		
		List<AnalysisConDomain> arrList = new ArrayList<AnalysisConDomain>();
		List<AnalysisConFormVo> resultList = new ArrayList<AnalysisConFormVo>();
		if (!httpUtil.isAdminRole()) {
			arrList = analysisConManager.analysisConList(domain);
		} else {
			arrList = analysisConManager.analysisConBznList(domain);
		}
		
		if (arrList != null) totalCnt = arrList.size();
		
		if (totalCnt > 0) {
			arrList = new ArrayList<AnalysisConDomain>();
			if (!httpUtil.isAdminRole()) {
				arrList = analysisConManager.analysisConList(domain, paging);
			} else {
				arrList = analysisConManager.analysisConBznList(domain, paging);
			}
			
			int startNum = 0;
			int startPage = param.getPage();
			if (startPage == 0) startPage = 1;
			
			startNum = totalCnt - (param.getLimit() * (startPage-1));
		
			CorporationDomain corpVo = null;
			AnalysisConFormVo alyConVo = null;
			
			//업종명 조회
			CodeInfoDomain codDomain = null;
			
			for (AnalysisConDomain aly : arrList) {
				
				if ("N".equals(aly.getDelyn())) {
					
					alyConVo = new AnalysisConFormVo();
					alyConVo.setAlyid(aly.getAlyid());
					alyConVo.setAlycon(aly.getAlycon());
					alyConVo.setUserid(aly.getUserid());
					alyConVo.setBzn(aly.getBzn());
					alyConVo.setDelyn(aly.getDelyn());

					logger.debug("((((( aly.getFrrgTs() )))))" + aly.getFrrgTs() + " : " + aly.getAlyid());
					
					alyConVo.setFrrgTs(FasDateUtil.transDateToString(aly.getFrrgTs()));
					
					corpVo = new CorporationDomain();
					corpVo.setUserid(aly.getUserid());
					corpVo.setBzn(aly.getBzn());
					
					corpVo = coporationManager.corporationInfo(corpVo);
					
					if (corpVo != null) {
						
					
						codDomain = new CodeInfoDomain();
						
						codDomain.setDomainCode("FAS0305");
						codDomain.setCode(corpVo.getAmtUnit());
						codDomain = codeInfoManager.codeAdminInq(codDomain);
						
						//재무정보 단위
						alyConVo.setName(corpVo.getName());
						alyConVo.setAmtUnitNm(codDomain.getCodeNm());
						alyConVo.setAmtUnit(corpVo.getAmtUnit());
						
						alyConVo.setNumRow(startNum--);
						
						resultList.add(alyConVo);
					}
				
				}
			}
			
//			for (AnalysisConDomain aly : arrList) {
//				
//				corpVo = new CorporationDomain();
//				corpVo.setUserid(aly.getUserid());
//				corpVo.setBzn(aly.getBzn());
//				
//				corpVo = coporationManager.corporationInfo(corpVo);				
//				alyConVo = new AnalysisConFormVo();
//				alyConVo.setAlycon(aly.getAlycon());
//				alyConVo.setAlyid(aly.getAlyid());
//				alyConVo.setUserid(aly.getUserid());
//				alyConVo.setBzn(aly.getBzn());
//				alyConVo.setDelyn(aly.getDelyn());
//				
//				if (aly.getFrrgTs() != null) {
//					alyConVo.setFrrgTs(FasDateUtil.transDateToString(aly.getFrrgTs()));
//				} else {
//					alyConVo.setFrrgTs("-");
//				}
//				
//				alyConVo.setName(corpVo.getName());
//				
//				alyConVo.setNumRow(startNum--);
//				
//				resultList.add(alyConVo);
//				
//			}
		
		}
		
		resultMap.putData(resultList,totalCnt);
		resultMap.putPageData(page,totalCnt);
		
		return resultMap;
		
	}
	
	//1) Userid 으로 분석 히스트로 조회
	public JsonObjectModel analysisUserConList(AnalysisConFormVo param) throws Exception {
		
		//1) 선언
		JsonObjectModel resultMap = new JsonObjectModel();
		
		AnalysisConDomain domain = new AnalysisConDomain();
		domain.setUserid(param.getUserid());
		
		if (!httpUtil.isAdminRole()) {
			domain.setUserid(httpUtil.getSessionUserId());
		}
		
		int page = param.getPage();
		int limit = param.getLimit();
		int totalCnt = 0;
		
		FasPagingUtil paging = new FasPagingUtil(page, limit);
		
		List<AnalysisConDomain> arrList = new ArrayList<AnalysisConDomain>();
		List<AnalysisConDomain> resultArrList = new ArrayList<AnalysisConDomain>();
		
		if (httpUtil.isAdminRole()) {
			arrList = analysisConManager.analysisConAllList(domain);
		} else {
			arrList = analysisConManager.analysisUserConList(domain);
		}
		
		if (arrList != null) totalCnt = arrList.size();
		
		List<AnalysisConFormVo> resultList = new ArrayList<AnalysisConFormVo>();
		
		CorporationDomain corpVo = null;
		
		AnalysisConFormVo alyConVo = null;
		
		//업종명 조회
		CodeInfoDomain codDomain = null;
		
		if (totalCnt > 0) {
			
			int startNum = 0;
			int startPage = param.getPage();
			if (startPage == 0) startPage = 1;
			
			startNum = totalCnt - (param.getLimit() * (startPage-1));
			
			if (httpUtil.isAdminRole()) {
				resultArrList = analysisConManager.analysisConAllList(domain, paging);
			} else {
				resultArrList = analysisConManager.analysisUserConList(domain, paging);
			}
		
			for (AnalysisConDomain aly : resultArrList) {
				
				if ("N".equals(aly.getDelyn())) {
					
					alyConVo = new AnalysisConFormVo();
					alyConVo.setAlyid(aly.getAlyid());
					alyConVo.setAlycon(aly.getAlycon());
					alyConVo.setUserid(aly.getUserid());
					alyConVo.setBzn(aly.getBzn());
					alyConVo.setDelyn(aly.getDelyn());
					
					logger.debug("((((( aly.getFrrgTs() )))))" + aly.getFrrgTs() + " : " + aly.getAlyid());
					
					alyConVo.setFrrgTs(FasDateUtil.transDateToString(aly.getFrrgTs()));
					
					corpVo = new CorporationDomain();
					corpVo.setUserid(aly.getUserid());
					corpVo.setBzn(aly.getBzn());
					
					corpVo = coporationManager.corporationInfo(corpVo);
					
					if (corpVo != null) {
						
					
						codDomain = new CodeInfoDomain();
						
						codDomain.setDomainCode("FAS0305");
						codDomain.setCode(corpVo.getAmtUnit());
						codDomain = codeInfoManager.codeAdminInq(codDomain);
						
						//재무정보 단위
						alyConVo.setName(corpVo.getName());
						alyConVo.setAmtUnitNm(codDomain.getCodeNm());
						alyConVo.setAmtUnit(corpVo.getAmtUnit());
						
						alyConVo.setNumRow(startNum--);
						
						resultList.add(alyConVo);
					}
				
				}
			}
		
		}
		
		resultMap.putData(resultList,totalCnt);
		resultMap.putPageData(page,totalCnt);
		
		return resultMap;
		
	}
	
	//2) Analysis Con Rgsn
	public JsonObjectModel analysisConRgsn(AnalysisConFormVo param) throws Exception {

		//1) 선언
		JsonObjectModel resultMap = new JsonObjectModel();
		
		AnalysisConDomain domain = new AnalysisConDomain();
		domain.setAlycon(param.getAlycon());
		domain.setAlyid(param.getAlyid());
		domain.setBzn(param.getBzn());
		domain.setDelyn("N");
		domain.setUserid(param.getUserid());
		
		if (!httpUtil.isAdminRole()) {
			domain.setUserid(httpUtil.getSessionUserId());
		}
		
		domain.setFrrgUserId(httpUtil.getSessionUserId());
		domain.setLastUserId(httpUtil.getSessionUserId());
		domain.setFrrgTs(FasDateUtil.getCurrentDate());
		domain.setLastTs(FasDateUtil.getCurrentDate());
		
		domain.setAlyid(KeyGenerator.getKeyByDateFormat());
		
		//1) 등록
		analysisConManager.analysisRgsn(domain);
		
		List<String> stacYyList = param.getStacYys();
		
		List<AlyFnamInfoDomain> alyFnamList = new ArrayList<AlyFnamInfoDomain>();
		
		AlyFnamInfoDomain alyFnamDomain = null;
		
		if (stacYyList != null) { 
			logger.debug("$$$$$$$$ >> size : " + stacYyList.size());
		} else {
			logger.debug("$$$$$$$$ >>> stacYyList is null");
		}
		
		for (String stacYy : stacYyList) {
			
			logger.debug("$$$$$$$$ >> alyid : " + domain.getAlyid());
			logger.debug("$$$$$$$$ >> bzn : " + domain.getBzn());
			logger.debug("$$$$$$$$ >> Userid : " + domain.getUserid());
			logger.debug("$$$$$$$$ >> stacYy : " + stacYy);
			
			alyFnamDomain = new AlyFnamInfoDomain();
			alyFnamDomain.setAlyid(domain.getAlyid());
			alyFnamDomain.setBzn(domain.getBzn());
			alyFnamDomain.setUserid(domain.getUserid());
			alyFnamDomain.setStacYy(stacYy);
			alyFnamDomain.setFrrgUserId(httpUtil.getSessionUserId());
			alyFnamDomain.setLastUserId(httpUtil.getSessionUserId());
			alyFnamDomain.setDelyn("N");
			alyFnamDomain.setFrrgTs(FasDateUtil.getCurrentDate());
			alyFnamDomain.setLastTs(FasDateUtil.getCurrentDate());
			
			alyFnamList.add(alyFnamDomain);
			
		}
		
		if (alyFnamList != null) { 
			logger.debug("$$$$$$$$ >> size : " + alyFnamList.size());
		} else {
			logger.debug("$$$$$$$$ >>> alyFnamList is null");
		}
		
		analysisFnamManager.insertInfo(alyFnamList);
		
		resultMap.success();
		
		return resultMap;
		
	}
	
	//2) Analysis Con Mdfc
	public JsonObjectModel analysisConMdfc(AnalysisConFormVo param) throws Exception {

		//1) 선언
		JsonObjectModel resultMap = new JsonObjectModel();
		
		AnalysisConDomain domain = new AnalysisConDomain();
		domain.setAlycon(param.getAlycon());
		domain.setAlyid(param.getAlyid());
		domain.setBzn(param.getBzn());
		domain.setDelyn(param.getDelyn());
		domain.setUserid(param.getUserid());
		
		if (!httpUtil.isAdminRole()) {
			domain.setUserid(httpUtil.getSessionUserId());
		}
		
		domain.setFrrgUserId(httpUtil.getSessionUserId());
		domain.setLastUserId(httpUtil.getSessionUserId());
		domain.setFrrgTs(FasDateUtil.getCurrentDate());
		domain.setLastTs(FasDateUtil.getCurrentDate());
		
		//1) 등록
		analysisConManager.analysisMdfc(domain);
		
		List<String> stacYyList = param.getStacYys();
		
		List<AlyFnamInfoDomain> alyFnamList = new ArrayList<AlyFnamInfoDomain>();
		
		AlyFnamInfoDomain alyFnamDomain = null;
		
		for (String stacYy : stacYyList) {
			
			alyFnamDomain = new AlyFnamInfoDomain();
			alyFnamDomain.setAlyid(domain.getAlyid());
			alyFnamDomain.setBzn(domain.getBzn());
			alyFnamDomain.setUserid(domain.getUserid());
			alyFnamDomain.setStacYy(stacYy);
			alyFnamDomain.setFrrgUserId(httpUtil.getSessionUserId());
			alyFnamDomain.setLastUserId(httpUtil.getSessionUserId());
			alyFnamDomain.setDelyn("N");
			alyFnamDomain.setFrrgTs(FasDateUtil.getCurrentDate());
			alyFnamDomain.setLastTs(FasDateUtil.getCurrentDate());
			
			alyFnamList.add(alyFnamDomain);
			
		}
		
		alyFnamDomain = new AlyFnamInfoDomain();
		alyFnamDomain.setAlyid(domain.getAlyid());
		alyFnamDomain.setBzn(domain.getBzn());
		alyFnamDomain.setUserid(domain.getUserid());
		
		analysisFnamManager.updateInfo(alyFnamDomain, alyFnamList);
		
		resultMap.success();
		
		return resultMap;
		
	}

	//3) Analysis Con Del
	public JsonObjectModel analysisConDel(AnalysisConFormVo param) throws Exception {
		
		//1) 선언
		BeanUtils beanUtil = new BeanUtils();
		JsonObjectModel resultMap = new JsonObjectModel();
		
		AnalysisConDomain domain = new AnalysisConDomain();
		domain.setAlycon(param.getAlycon());
		domain.setAlyid(param.getAlyid());
		domain.setBzn(param.getBzn());
		domain.setUserid(param.getUserid());
		
		if (!httpUtil.isAdminRole()) {
			domain.setUserid(httpUtil.getSessionUserId());
		}
		
		domain.setFrrgUserId(httpUtil.getSessionUserId());
		domain.setLastUserId(httpUtil.getSessionUserId());
		domain.setFrrgTs(FasDateUtil.getCurrentDate());
		domain.setLastTs(FasDateUtil.getCurrentDate());
		
		analysisConManager.analysisDel(domain);
		
		AlyFnamInfoDomain alyFnam = new AlyFnamInfoDomain();
		alyFnam.setAlyid(domain.getAlyid());
		alyFnam.setBzn(domain.getBzn());
		alyFnam.setUserid(domain.getUserid());
		
		analysisFnamManager.deleteInfo(alyFnam);
		
		resultMap.success();
		
		return resultMap;
		
	}
	
	//4) StacYy List
	public JsonObjectModel analysisStacYyList(AnalysisConFormVo param) throws Exception {

		//1) 선언
		JsonObjectModel resultMap = new JsonObjectModel();
		
		AlyFnamInfoDomain alyFnamDomain = new AlyFnamInfoDomain();
		alyFnamDomain.setAlyid(param.getAlyid());
		alyFnamDomain.setBzn(param.getBzn());
		alyFnamDomain.setUserid(param.getUserid());
		
		List<EntpFinItemVo> entpFinList = null;
		ListOrderedMap listMap = new ListOrderedMap();
		List<AlyFnamInfoDomain> altFnamList = new ArrayList<AlyFnamInfoDomain>();
		
		FinFnamInfoDomain finFnamDomain = new FinFnamInfoDomain();
		finFnamDomain.setBzn(param.getBzn());
		finFnamDomain.setUserid(param.getUserid());
		
		logger.debug("Bzn >> " + finFnamDomain.getBzn());
		logger.debug("Userid >> " + finFnamDomain.getUserid());
		
		entpFinList = entpFinInfoManager.EntpFinFnamInfoList(finFnamDomain);
		
		if (entpFinList != null) { logger.debug("Size >> " + entpFinList.size()); } 
		else { logger.debug("entpFinList is null"); }
		
		for (EntpFinItemVo vo : entpFinList) {
			listMap.put(vo.getStacYy(), vo);
		}
		
		if(!StringUtil.isEmpty(alyFnamDomain.getAlyid())) {
			altFnamList = analysisFnamManager.selectInfoList(alyFnamDomain);
		}
		
		List<EntpFinItemVo> resultList = new ArrayList<EntpFinItemVo>();
		
		Set keySet = listMap.keySet();
		Iterator itr = keySet.iterator();
		
		EntpFinItemVo finDomain = null;
		EntpFinItemVo itemVo = null;
		ListOrderedMap beStacYyMap = null;
		ListOrderedMap afStacYyMap = null;
		List<ListOrderedMap> beStacYyList = new ArrayList<ListOrderedMap>();
		List<ListOrderedMap> afStacYyList = new ArrayList<ListOrderedMap>();
		
		boolean re = true;
		while(itr.hasNext()) {
			re = true;
			
			beStacYyMap = null;
			afStacYyMap = null;
			
			String stayY = (String) itr.next();
			
			finDomain = (EntpFinItemVo) listMap.get(stayY);
			
			for (AlyFnamInfoDomain alyfnamVo : altFnamList) {
				if (stayY.equals(alyfnamVo.getStacYy())) {
					afStacYyMap = new ListOrderedMap();
					afStacYyMap.put("name", alyfnamVo.getStacYy() + " 재무정보");
					afStacYyMap.put("value", alyfnamVo.getStacYy());
					re = false;
				}
			}
			
			if (re) {
				beStacYyMap = new ListOrderedMap();
				beStacYyMap.put("name", stayY + " 재무정보");
				beStacYyMap.put("value", stayY);
				beStacYyList.add(beStacYyMap);
			} else {
				if (afStacYyMap != null) {
					afStacYyList.add(afStacYyMap);
				}
			}
		}
		
		resultMap.putData(beStacYyList, beStacYyList.size());
		resultMap.putData(afStacYyList, afStacYyList.size());
		
		return resultMap;
		
	}

	//4) Fin StacYy List
	public JsonObjectModel analysisFnamStacYyList(AnalysisConFormVo param) throws Exception {
		
		//1) 선언
		JsonObjectModel resultMap = new JsonObjectModel();		
		
		AlyFnamInfoDomain alyFnamDomain = new AlyFnamInfoDomain();
		alyFnamDomain.setAlyid(param.getAlyid());
		alyFnamDomain.setBzn(param.getBzn());
		alyFnamDomain.setUserid(param.getUserid());
		
		if (!httpUtil.isAdminRole()) {
			alyFnamDomain.setUserid(httpUtil.getSessionUserId());
		}
		
		int page = param.getPage();
		int limit = param.getLimit();
		int totalCnt = 0;
		
		FasPagingUtil paging = new FasPagingUtil(page, limit);
		
		List<AlyFnamInfoDomain> altFnamList = new ArrayList<AlyFnamInfoDomain>();
		
		List<AnalysisConFormVo> analysisFinList = new ArrayList<AnalysisConFormVo>();
		
		AnalysisConFormVo analysisFinVo = null;
		
		CorporationDomain corpVo = null;
		
		altFnamList = analysisFnamManager.selectInfoList(alyFnamDomain);
		
		if (altFnamList != null) {
			totalCnt = altFnamList.size();
		}
		
		int startNum = 0;
		int startPage = param.getPage();
		if (startPage == 0) startPage = 1;
		
		startNum = totalCnt - (param.getLimit() * (startPage-1));
		int startIdx = 0;
		int endIdx = 0;
		
		if (totalCnt > 0) {
			startIdx = param.getLimit() * (startPage-1);
			endIdx = startIdx + param.getLimit();
			if (endIdx > totalCnt) endIdx = totalCnt;
		}
		
		AlyFnamInfoDomain alyFnam = null;
		
		for (int i = startIdx; i < endIdx; i++) {
			alyFnam = altFnamList.get(i);
			
			analysisFinVo = new AnalysisConFormVo();
			analysisFinVo.setBzn(alyFnam.getBzn());
			analysisFinVo.setFinTitle(alyFnam.getStacYy() + " 재무정보");
			analysisFinVo.setStacYy(alyFnam.getStacYy());
			analysisFinVo.setAlyid(alyFnam.getAlyid());
			analysisFinVo.setUserid(alyFnam.getUserid());
			
			corpVo = new CorporationDomain();
			corpVo.setUserid(alyFnam.getUserid());
			corpVo.setBzn(alyFnam.getBzn());
			
			corpVo = coporationManager.corporationInfo(corpVo);
			
			analysisFinVo.setName(corpVo.getName());
			
			analysisFinVo.setNumRow(startNum--);
			
			analysisFinList.add(analysisFinVo);
		}
		
		resultMap.putData(analysisFinList,totalCnt);
		resultMap.putPageData(page,totalCnt);
		
		return resultMap;
	}
	
	//3) Value 조회
	public JsonObjectModel analysisFinDtTypeMap(AnalysisConFormVo param) throws Exception {

		//1) 선언
		JsonObjectModel resultMap = new JsonObjectModel();
		
		AlyFnamDtDomain domain = new AlyFnamDtDomain();
		domain.setAlyid(param.getAlyid());
		domain.setBzn(param.getBzn());
		domain.setUserid(param.getUserid());
		
		if (!httpUtil.isAdminRole()) {
			domain.setUserid(httpUtil.getSessionUserId());
		}
		
		domain.setStacYy(param.getStacYy());;

		resultMap.putData(analysisFnamManager.finFnamTypeMap(domain));
		
		return resultMap;
		
	}
	
	//3) Value 조회
	public JsonObjectModel analysisFinDtTypeMaps(AnalysisConFormVo param) throws Exception {

		//1) 선언
		BeanUtils beanUtil = new BeanUtils();
		JsonObjectModel resultMap = new JsonObjectModel();
			
		AlyFnamDtDomain domain = (AlyFnamDtDomain) beanUtil.toCopy(param, new AlyFnamDtDomain());
		
		List<String> stacYys = param.getStacYys();
		
		List resultList = new ArrayList();
		
		Map finMap = null;
		
		for (String stacYy:stacYys) {
			
			domain.setStacYy(stacYy);
			
			finMap = new LinkedHashMap();
			finMap.put("stacYy", stacYy);
			finMap.put("finData", analysisFnamManager.finFnamTypeMap(domain));
			resultList.add(finMap);
		}
		
		resultMap.putData(resultList, resultList.size());
			
		return resultMap;
			
	}
	
	//4) 등록	
	public JsonObjectModel analysisFinDtRgsn(List<AnalysisConFormVo> params) throws Exception {
		//1) 선언
		BeanUtils beanUtil = new BeanUtils();
		JsonObjectModel resultMap = new JsonObjectModel();
		
		AlyFnamDtDomain domain = null;
		
		for (AnalysisConFormVo param : params) {
			domain = (AlyFnamDtDomain) beanUtil.toCopy(param, new AlyFnamDtDomain());
			
			if (!httpUtil.isAdminRole()) {
				domain.setUserid(httpUtil.getSessionUserId());				
			}
			
			domain.setFrrgUserId(httpUtil.getSessionUserId());
			domain.setLastUserId(httpUtil.getSessionUserId());
			domain.setFrrgTs(FasDateUtil.getCurrentDate());
			domain.setLastTs(FasDateUtil.getCurrentDate());
			
			analysisFnamManager.AnalysisFinDtRgsn(domain);	
		}
		
		resultMap.success();
		
		return resultMap;
		
		
	}
	
	//5) 기업 재무 비율	
	public JsonObjectModel analysisFinRatioMap(AnalysisConFormVo param) throws Exception {
		//1) 선언
		BeanUtils beanUtil = new BeanUtils();
		JsonObjectModel resultMap = new JsonObjectModel();
		
		CorporationDomain corpVo = new CorporationDomain();
		corpVo.setUserid(param.getUserid());
		corpVo.setBzn(param.getBzn());
		
		corpVo = coporationManager.corporationInfo(corpVo);
		
		if (!StringUtil.isEmpty(param.getEnslDcd())) {
			corpVo.setEnslDcd(param.getEnslDcd());
		}
		
		//업종명 조회
		CodeInfoDomain codDomain = new CodeInfoDomain();
		
		codDomain.setDomainCode("FAS0302");
		codDomain.setCode(corpVo.getTpbsClsfDcd());
		codDomain = codeInfoManager.codeAdminInq(codDomain);
		
		String tpbsClsfDcdNm = codDomain.getCodeNm(); //업종명
		
		String enslDcdNm = "중소기업";
		
		if ("L".equals(corpVo.getEnslDcd())) {
			enslDcdNm = "대기업";
		}
		
		FinRatioMake ratioMake = new FinRatioMake();
		
		ratioMake.setAlyid(param.getAlyid())
  		         .setBzn(param.getBzn())
		         .setUserid(param.getUserid());
		
		Map<String, Map> finRatioMap = ratioMake.finRatioMake();
		
		boolean lastest = true;
		
		if ("Y".equals(param.getLastestYn())) {
			lastest = true;
		} else {
			lastest = false;
		}
		
		//BOKRatio
		BokRatioMake ratio = new BokRatioMake();
		
		ratio.setAlyid(param.getAlyid())
        	 .setBzn(param.getBzn())
        	 .setUserid(param.getUserid())
			 .setEnslDcd(corpVo.getEnslDcd())
			 .setTpbsClsfDcd(corpVo.getTpbsClsfDcd())
		     .setLastest(lastest);
		
		Map<String, Map> bokRatioMap = ratio.finRatioMake();
		
		BokRatioMake ratioAll = new BokRatioMake();
		
		//전체 (ALL)
		ratioAll.setAlyid(param.getAlyid())
   	 		 .setBzn(param.getBzn())
   	 		 .setUserid(param.getUserid())
   	 		 .setEnslDcd("A")
   	 		 .setTpbsClsfDcd(corpVo.getTpbsClsfDcd())
   	 		 .setLastest(lastest);
		
		Map<String, Map> bokRatioAllMap = ratioAll.finRatioMake();
		
		//성장성
		Map<String, List<Map>> growthMap = new LinkedHashMap<String, List<Map>>();		
		//안전성
		Map<String, List<Map>> safeMap = new LinkedHashMap<String, List<Map>>();		
		//수익성
		Map<String, List<Map>> profitMap = new LinkedHashMap<String, List<Map>>();		
		//생산성
		Map<String, List<Map>> productMap = new LinkedHashMap<String, List<Map>>();		
		//활동성
		Map<String, List<Map>> activeMap = new LinkedHashMap<String, List<Map>>();
		//ROA
		Map<String, List<Map>> roaMap = new LinkedHashMap<String, List<Map>>();		
		//AddValue
		Map<String, List<Map>> addValueMap = new LinkedHashMap<String, List<Map>>();		
		
		
		Set<String> setKey = finRatioMap.keySet();
		Iterator<String> iterator = setKey.iterator();
		
		Set<String> localSetKey = null;
		Iterator<String> locaIterator = null;
		
		String key = "";
		String localkey = "";
		
		Map<String, Map> ratioAmtMap = null;
		Map<String, String> amtMap = null;
		Map<String, BigDecimal> ratioMap = null;
		Map<String, BigDecimal> bokMap = null;
		Map<String, BigDecimal> bokAllMap = null;
		List<Map> arrayGrowthRatioList = null;
		List<Map> arraySafeRatioList = null;
		List<Map> arrayProfitRatioList = null;
		List<Map> arrayProductRatioList = null;
		List<Map> arrayActiveRatioList = null;
		
		List<Map> arrayRoaRatioList = null;
		List<Map> arrayAddValueRatioList = null;
		
		List<Map> stacYyList = new ArrayList<Map>();
		Map stacYyMap = null;
		
		Map<String, String> bokRatioNameMap = ratio.getBokRatioNameMap();
		
		int index = 1;
		
		while (iterator.hasNext()) {
			key = iterator.next();
			ratioMap = (Map<String, BigDecimal>) finRatioMap.get(key);
			bokMap = (Map<String, BigDecimal>) bokRatioMap.get(key);
			bokAllMap = (Map<String, BigDecimal>) bokRatioAllMap.get(key);
			
			localSetKey = ratioMap.keySet();
			locaIterator = localSetKey.iterator();
			
			arrayGrowthRatioList = new ArrayList<Map>();
			arraySafeRatioList = new ArrayList<Map>();
			arrayProfitRatioList = new ArrayList<Map>();
			arrayProductRatioList = new ArrayList<Map>();
			arrayActiveRatioList = new ArrayList<Map>();
			arrayRoaRatioList = new ArrayList<Map>();
			arrayAddValueRatioList = new ArrayList<Map>();
			
			BigDecimal amt = BigDecimal.ZERO;
			
			while (locaIterator.hasNext()) {
				localkey = locaIterator.next();
				
				amtMap = new LinkedHashMap<String, String>();
				amtMap.put("itemCode", localkey);
				
				if ("ROA".equals(localkey)) {
					amtMap.put("itemNm", "ROA");
					amt = BigDecimal.ZERO;
					amt = ratioMap.get(localkey);
					if (amt == null) amt = BigDecimal.ZERO;
					
					amt = amt.setScale(2, BigDecimal.ROUND_HALF_UP);
					
					amtMap.put("finRatio", ""+amt);
					amtMap.put("bokRatio", "0");
					amtMap.put("bokAllRatio", "0");
					arrayRoaRatioList.add(amtMap);
				} else if ("AddValue".equals(localkey)) {
					amtMap.put("itemNm", "부가가치액");
					amt = BigDecimal.ZERO;
					amt = ratioMap.get(localkey);
					if (amt == null) amt = BigDecimal.ZERO;
					amtMap.put("finRatio", ""+amt);
					amtMap.put("bokRatio", "0");
					amtMap.put("bokAllRatio", "0");
					arrayAddValueRatioList.add(amtMap);
				} else {
					
					amtMap.put("itemNm", bokRatioNameMap.get(localkey));
					amt = BigDecimal.ZERO;
					amt = ratioMap.get(localkey);
					if (amt == null) amt = BigDecimal.ZERO;
					amt = amt.setScale(2, BigDecimal.ROUND_HALF_UP);
					amtMap.put("finRatio", ""+amt);
					
					amt = BigDecimal.ZERO;
					amt = bokMap.get(localkey);
					if (amt == null) amt = BigDecimal.ZERO;
					amt = amt.setScale(2, BigDecimal.ROUND_HALF_UP);
					amtMap.put("bokRatio", ""+amt);
					
					amt = BigDecimal.ZERO;
					amt = bokAllMap.get(localkey);
					if (amt == null) amt = BigDecimal.ZERO;
					amt = amt.setScale(2, BigDecimal.ROUND_HALF_UP);
					amtMap.put("bokAllRatio", ""+amt);
					
					int intKey = Integer.parseInt(localkey);
				
					if (intKey < 600) { //성장성
						arrayGrowthRatioList.add(amtMap);
					} else if (intKey >= 600 && intKey < 700) { //수익성
						arrayProfitRatioList.add(amtMap);
					} else if (intKey >= 700 && intKey < 800) { //안전성
						arraySafeRatioList.add(amtMap);
					} else if (intKey >= 800 && intKey < 900) { //활동성
						arrayActiveRatioList.add(amtMap);
					} else if (intKey >= 900) { //생산성
						arrayProductRatioList.add(amtMap);
					}
				}
			}
			
			growthMap.put(key.substring(3), arrayGrowthRatioList);
			safeMap.put(key.substring(3), arraySafeRatioList);
			profitMap.put(key.substring(3), arrayProfitRatioList);
			productMap.put(key.substring(3), arrayProductRatioList);
			activeMap.put(key.substring(3), arrayActiveRatioList);
			roaMap.put(key.substring(3), arrayRoaRatioList);
			addValueMap.put(key.substring(3), arrayAddValueRatioList);
			
			stacYyMap = new LinkedHashMap();
			stacYyMap.put("name", key.substring(3) + "년 재무비율");
			stacYyMap.put("value", key.substring(3));
			stacYyList.add(stacYyMap);
			index++;
		}
		
		resultMap.putData("growth",growthMap);
		resultMap.putData("safe",safeMap);
		resultMap.putData("profit",profitMap);
		resultMap.putData("product",productMap);
		resultMap.putData("active",activeMap);
		resultMap.putData("roa",roaMap);
		resultMap.putData("addValue",addValueMap);
		resultMap.putData("stacYys",stacYyList);
		resultMap.putData("tpbsClsfDcdNm",tpbsClsfDcdNm);
		resultMap.putData("enslDcdNm",enslDcdNm);
		
		return resultMap;
		
		
	}

	//5) 한국은행 재무 비율	
	public JsonObjectModel analysisBokFinStacYyMap(AnalysisConFormVo param) throws Exception {
		
		//1) 선언
		BeanUtils beanUtil = new BeanUtils();
		JsonObjectModel resultMap = new JsonObjectModel();		
		
		BOKFinRatioDomain ratioDomain = null;
		
		List<BOKFinRatioDomain> ratioList = null;
		
		String[] baseYears = {};
		
		ratioDomain = new BOKFinRatioDomain();
		ratioDomain.setItemCode("501");
		ratioDomain.setTpbsClsfDcd("ZZZ00");
		ratioDomain.setEnslDcd("A");
		
		ratioList = bokManager.selectFinRatioLastest(ratioDomain);
		
		baseYears = new String[ratioList.size()];
		
		int indx = 0;
		
		for (BOKFinRatioDomain d : ratioList) {
			baseYears[indx++] = d.getBaseYear();
		}
		
		resultMap.putData("baseYears", baseYears);
		
		
		return resultMap;
		
	}
	
	//5) 한국은행 재무 비율	
	public JsonObjectModel analysisBokFinRatioMap(AnalysisConFormVo param) throws Exception {
		//1) 선언
		BeanUtils beanUtil = new BeanUtils();
		JsonObjectModel resultMap = new JsonObjectModel();
	
		//업종명 조회
		CodeInfoDomain codDomain = new CodeInfoDomain();
		
		CodeInfoDomain codDomain01 = new CodeInfoDomain();
		
		String [] enslDcds = {"M", "L", "A"};
		
		Map bokMap = new LinkedHashMap();
		
		//BOK 조회
		BOKFinRatioDomain ratioDomain = null;
		
    	for (String enslDcd : enslDcds) {
    		bokMap = new LinkedHashMap();
    		
			codDomain = new CodeInfoDomain();
			codDomain.setDomainCode("FAS0303");
			codDomain.setCode(enslDcd);
			codDomain = codeInfoManager.codeAdminInq(codDomain);
			
			bokMap.put("enslDcdNm", codDomain.getCodeNm());//기업규모
			
			codDomain01 = new CodeInfoDomain();
			codDomain01.setDomainCode("FAS0302");
			codDomain01.setCode(param.getTpbsClsfDcd());
			codDomain01 = codeInfoManager.codeAdminInq(codDomain);
			
			bokMap.put("tpbsClsfDcdNm", codDomain01.getCodeNm());//기업규모			
			
			//성장성
			String finCodeGroup01 = "01";
			ratioDomain = new BOKFinRatioDomain();
			ratioDomain.setTpbsClsfDcd(param.getTpbsClsfDcd());
			ratioDomain.setEnslDcd(enslDcd);
			ratioDomain.setGroupCode(finCodeGroup01);
			ratioDomain.setBaseYear(param.getStacYy());
			List<BOKFinRatioDomain> growthList = bokManager.selectBokRatioList(ratioDomain);
			
			//안정상
			String finCodeGroup02 = "02";
			ratioDomain = new BOKFinRatioDomain();
			ratioDomain.setTpbsClsfDcd(param.getTpbsClsfDcd());
			ratioDomain.setEnslDcd(enslDcd);
			ratioDomain.setGroupCode(finCodeGroup02);
			ratioDomain.setBaseYear(param.getStacYy());
			List<BOKFinRatioDomain> safeList = bokManager.selectBokRatioList(ratioDomain);
			
			//수익성
			String finCodeGroup03 = "03";
			ratioDomain = new BOKFinRatioDomain();
			ratioDomain.setTpbsClsfDcd(param.getTpbsClsfDcd());
			ratioDomain.setEnslDcd(enslDcd);
			ratioDomain.setGroupCode(finCodeGroup03);
			ratioDomain.setBaseYear(param.getStacYy());
			List<BOKFinRatioDomain> profitList = bokManager.selectBokRatioList(ratioDomain);
			
			//생산성
			String finCodeGroup04 = "04";
			ratioDomain = new BOKFinRatioDomain();
			ratioDomain.setTpbsClsfDcd(param.getTpbsClsfDcd());
			ratioDomain.setEnslDcd(enslDcd);
			ratioDomain.setGroupCode(finCodeGroup04);
			ratioDomain.setBaseYear(param.getStacYy());
			List<BOKFinRatioDomain> productList = bokManager.selectBokRatioList(ratioDomain);
			
			//활동성
			String finCodeGroup05 = "05";
			ratioDomain = new BOKFinRatioDomain();
			ratioDomain.setTpbsClsfDcd(param.getTpbsClsfDcd());
			ratioDomain.setEnslDcd(enslDcd);
			ratioDomain.setGroupCode(finCodeGroup05);
			ratioDomain.setBaseYear(param.getStacYy());
			List<BOKFinRatioDomain> activeList = bokManager.selectBokRatioList(ratioDomain);
			
			bokMap.put("growth", growthList);
			bokMap.put("safe", safeList);
			bokMap.put("profit", profitList);
			bokMap.put("product", productList);
			bokMap.put("active", activeList);
			
			resultMap.putData(enslDcd, bokMap);
		}
		
		return resultMap;
		
		
	}	
	
	//6-1) wall-trant	
	public JsonObjectModel analysisWallTrantList(AnalysisConFormVo param) throws Exception {
		
		//1) 선언
		BeanUtils beanUtil = new BeanUtils();
		JsonObjectModel resultMap = new JsonObjectModel();
		
		List<FinWallTrantDomain> finWallTrantList = finWallTrantDao.selectAllList();
		
		if (finWallTrantList == null) finWallTrantList = new ArrayList<FinWallTrantDomain>();
		
		resultMap.putData(finWallTrantList, finWallTrantList.size());
		
		return resultMap;
	}
	
	//wall-trant insert
	public JsonObjectModel analysisWallTrantRgsn(AnalysisConFormVo param) throws Exception {
		
		//1) 선언
		BeanUtils beanUtil = new BeanUtils();
		JsonObjectModel resultMap = new JsonObjectModel();
		
		FinWallTrantDomain domain = (FinWallTrantDomain) beanUtil.toCopy(param, new FinWallTrantDomain());
		
		finWallTrantDao.insertFinWallTrant(domain);
		
		resultMap.success();
		
		return resultMap;
		
	}
	
	//wall-trant mdfc
	public JsonObjectModel analysisWallTrantMdfc(AnalysisConFormVo param) throws Exception {
		
		//1) 선언
		BeanUtils beanUtil = new BeanUtils();
		JsonObjectModel resultMap = new JsonObjectModel();
		
		FinWallTrantDomain domain = (FinWallTrantDomain) beanUtil.toCopy(param, new FinWallTrantDomain());
		
		finWallTrantDao.updateFinWallTrant(domain);
		
		resultMap.success();
		
		return resultMap;
		
	}	
	
	//6) wall-trant	
	public JsonObjectModel analysisWallTrantMap(AnalysisConFormVo param) throws Exception {	
		
		//1) 선언
		BeanUtils beanUtil = new BeanUtils();
		JsonObjectModel resultMap = new JsonObjectModel();
		
		CorporationDomain corpVo = new CorporationDomain();
		corpVo.setUserid(param.getUserid());
		corpVo.setBzn(param.getBzn());
		
		corpVo = coporationManager.corporationInfo(corpVo);
		
		if (!StringUtil.isEmpty(param.getEnslDcd())) {
			corpVo.setEnslDcd(param.getEnslDcd());
		}
		
		//업종명 조회
		CodeInfoDomain codDomain = new CodeInfoDomain();
		
		codDomain.setDomainCode("FAS0302");
		codDomain.setCode(corpVo.getTpbsClsfDcd());
		codDomain = codeInfoManager.codeAdminInq(codDomain);
		
		String tpbsClsfDcdNm = codDomain.getCodeNm(); //업종명
		
		String enslDcdNm = "중소기업";
		
		if ("L".equals(corpVo.getEnslDcd())) {
			enslDcdNm = "대기업";
		}		
		
		boolean lastest = true;
		
		if ("Y".equals(param.getLastestYn())) {
			lastest = true;
		} else {
			lastest = false;
		}
		
		WallTrantBokRatioMake ratio = new WallTrantBokRatioMake();
		
		ratio.setAlyid(param.getAlyid())
        	 .setBzn(param.getBzn())
        	 .setUserid(param.getUserid())
			 .setEnslDcd(corpVo.getEnslDcd())
			 .setTpbsClsfDcd(corpVo.getTpbsClsfDcd())
		     .setLastest(lastest);
		
		Map<String, Map> wallTrantDecisionMap = ratio.finWallTrantDecision();
		
		Map<String, String> bokItemNmMap = ratio.getBokRatioNameMap();
		
		Set<String> setKey = wallTrantDecisionMap.keySet();
		Iterator<String> iterator = setKey.iterator();
		
		Set<String> localSetKey = null;
		Iterator<String> locaIterator = null;
		
		String key = "";
		String localkey = "";
		
		Map<String, Map> wallTrantMap = null; 
		Map<String, String> wallMap = null;
		Map<String, String> trantMap = null;
		Map<String, List<Map>> resultWallTrantMap = new LinkedHashMap<String, List<Map>>();
		Map<String, List<Map>> resultSumMap = new LinkedHashMap<String, List<Map>>();
		Map<String, String> amtMap = null;
		Map<String, String> sumMap = null;
		
		
		BigDecimal amt = BigDecimal.ZERO;
		
		List<Map> arrayWallTrantList = null;
		List<Map> arraySumList = new ArrayList<Map>();
		
		List<Map> stacYyList = new ArrayList<Map>();
		Map stacYyMap = null;
		
		while (iterator.hasNext()) {
			key = iterator.next();
			wallTrantMap = (Map<String, Map>) wallTrantDecisionMap.get(key);
			wallMap = (Map<String, String>) wallTrantMap.get("wall");
			trantMap = (Map<String, String>) wallTrantMap.get("trant");
			
			localSetKey = wallMap.keySet();
			locaIterator = localSetKey.iterator();
			
			arrayWallTrantList = new ArrayList<Map>();
			
			while (locaIterator.hasNext()) {
				
				amtMap = new LinkedHashMap<String, String>();
				localkey = locaIterator.next();
				
				amtMap.put("itemCode", localkey);
				if ("sum".equals(localkey)) {
					amtMap.put("itemNm", "종합지수평점");
				} else if (("decision").equals(localkey)) {
					amtMap.put("itemNm", "판정");
				} else {
					amtMap.put("itemNm", bokItemNmMap.get(localkey));
				}
				
				amtMap.put("wallRatio", wallMap.get(localkey));
				amtMap.put("trantRatio", trantMap.get(localkey));
				
				if (!("decision").equals(localkey)) {
					arrayWallTrantList.add(amtMap);
				}
				
				if ("sum".equals(localkey)) {
					sumMap = new LinkedHashMap<String, String>();
					sumMap.put("stacYy", key.substring(3));
					sumMap.put("wallRatio", amtMap.get("wallRatio"));
					sumMap.put("trantRatio", amtMap.get("trantRatio"));
					arraySumList.add(sumMap);
				}
				
			}
			
			resultWallTrantMap.put(key.substring(3), arrayWallTrantList);
			
			stacYyMap = new LinkedHashMap();
			stacYyMap.put("name", key.substring(3) + "년 WALL-TRANT");
			stacYyMap.put("value", key.substring(3));
			stacYyList.add(stacYyMap);
		}
		
		resultMap.putData("walltrant", resultWallTrantMap);
		
		resultMap.putData(arraySumList, arraySumList.size());
		
		resultMap.putData("stacYys",stacYyList);
		
		resultMap.putData("tpbsClsfDcdNm",tpbsClsfDcdNm);
		resultMap.putData("enslDcdNm",enslDcdNm);		
		
		return resultMap;
		
		
	}
	
	//7) decision
	public JsonObjectModel analysisDecisionMap(AnalysisConFormVo param) throws Exception {
		
		BeanUtils beanUtil = new BeanUtils();
		JsonObjectModel resultMap = new JsonObjectModel();
		
		try {
		
		CorporationDomain corpVo = new CorporationDomain();
		corpVo.setUserid(param.getUserid());
		corpVo.setBzn(param.getBzn());
		
		corpVo = coporationManager.corporationInfo(corpVo);
		
		if (!StringUtil.isEmpty(param.getEnslDcd())) {
			corpVo.setEnslDcd(param.getEnslDcd());
		}
		
		//업종명 조회
		CodeInfoDomain codDomain = new CodeInfoDomain();
		
		codDomain.setDomainCode("FAS0302");
		codDomain.setCode(corpVo.getTpbsClsfDcd());
		codDomain = codeInfoManager.codeAdminInq(codDomain);
		
		logger.info("### corpVo.getTpbsClsfDcd() >>> " + corpVo.getTpbsClsfDcd());
		
		String tpbsClsfDcdNm = codDomain.getCodeNm(); //업종명
		
		logger.info("### codDomain.getCodeNm() >>> " + codDomain.getCodeNm());
		
		String enslDcdNm = "중소기업";
		
		if ("L".equals(corpVo.getEnslDcd())) {
			enslDcdNm = "대기업";
		}	
		
		logger.info("### corpVo.getEnslDcd() >>> " + corpVo.getEnslDcd());
		
		//성장성
		Map<String, List<Map>> growthMap = new LinkedHashMap<String, List<Map>>();		
		//안전성
		Map<String, List<Map>> safeMap = new LinkedHashMap<String, List<Map>>();		
		//수익성
		Map<String, List<Map>> profitMap = new LinkedHashMap<String, List<Map>>();		
		//생산성
		Map<String, List<Map>> productMap = new LinkedHashMap<String, List<Map>>();		
		//활동성
		Map<String, List<Map>> activeMap = new LinkedHashMap<String, List<Map>>();
		
		boolean lastest = true;
		
		logger.info("### param.getLastestYn() >>> " + param.getLastestYn());
		
		if ("Y".equals(param.getLastestYn())) {
			lastest = true;
		} else {
			lastest = false;
		}
		
		FinExamMake ratio = new FinExamMake();
		
		ratio.setAlyid(param.getAlyid())
   	 		 .setBzn(param.getBzn())
   	 		 .setUserid(param.getUserid())
   	 		 .setEnslDcd(corpVo.getEnslDcd())
			 .setTpbsClsfDcd(corpVo.getTpbsClsfDcd())
		     .setLastest(lastest);
		
		logger.info("### ratio >>> " + ratio);
		
		Map<String, Map> finDecisionMap = ratio.finExamMake();
		
		FinExamMake ratio01 = new FinExamMake();
		
		ratio01.setAlyid(param.getAlyid())
   	 		 .setBzn(param.getBzn())
   	 		 .setUserid(param.getUserid())
   	 		 .setEnslDcd("A")
			 .setTpbsClsfDcd(corpVo.getTpbsClsfDcd())
		     .setLastest(lastest);
		
		logger.info("### ratio01 >>> " + ratio01);
		
		Map<String, Map> bokAllDecisionMap = ratio01.finExamMake();
		
		Map<String, String> bokRatioNameMap = ratio01.getBokRatioNameMap();
		
		Set<String> setKey = finDecisionMap.keySet();
		Iterator<String> iterator = setKey.iterator();
		
		Set<String> localSetKey = null;
		Iterator<String> locaIterator = null;
		
		String key = "";
		String localkey = "";
		
		Map<String, List<Map>> resultDecisionMap = new LinkedHashMap<String, List<Map>>();
		List<Map> decisionList = new ArrayList<Map>();
		
		Map<String, String> decisionMap = null;
		Map<String, String> bokdecisionMap = null;
		
		Map<String, String> decisionMap01 = null;
		
		Map<String, String> stacYyMap = null;
		List<Map> stacYyList = new ArrayList<Map>();
		
		List<Map> arrayGrowthRatioList = null;
		List<Map> arraySafeRatioList = null;
		List<Map> arrayProfitRatioList = null;
		List<Map> arrayProductRatioList = null;
		List<Map> arrayActiveRatioList = null;
		
		while(iterator.hasNext()) {
			key = iterator.next();
			
			decisionMap = finDecisionMap.get(key);
			bokdecisionMap = bokAllDecisionMap.get(key);
			
			localSetKey = decisionMap.keySet();
			locaIterator = localSetKey.iterator();
			
			decisionList = new ArrayList<Map>();
			
			arrayGrowthRatioList = new ArrayList<Map>();
			arraySafeRatioList = new ArrayList<Map>();
			arrayProfitRatioList = new ArrayList<Map>();
			arrayProductRatioList = new ArrayList<Map>();
			arrayActiveRatioList = new ArrayList<Map>();
			
			while (locaIterator.hasNext()) {
				localkey = locaIterator.next();
				decisionMap01 = new LinkedHashMap<String, String>();
				decisionMap01.put("itemCode", localkey);
				decisionMap01.put("itemNm", bokRatioNameMap.get(localkey));
				decisionMap01.put("finresult", decisionMap.get(localkey));
				decisionMap01.put("bokresult", bokdecisionMap.get(localkey));
				
				int intKey = Integer.parseInt(localkey);
				
				if (intKey < 600) { //성장성
					arrayGrowthRatioList.add(decisionMap01);
				} else if (intKey >= 600 && intKey < 700) { //수익성
					arrayProfitRatioList.add(decisionMap01);
				} else if (intKey >= 700 && intKey < 800) { //안전성
					arraySafeRatioList.add(decisionMap01);
				} else if (intKey >= 800 && intKey < 900) { //활동성
					arrayActiveRatioList.add(decisionMap01);
				} else if (intKey >= 900) { //생산성
					arrayProductRatioList.add(decisionMap01);
				}
			}
			
			growthMap.put(key.substring(3), arrayGrowthRatioList);
			safeMap.put(key.substring(3), arraySafeRatioList);
			profitMap.put(key.substring(3), arrayProfitRatioList);
			productMap.put(key.substring(3), arrayProductRatioList);
			activeMap.put(key.substring(3), arrayActiveRatioList);
			
			stacYyMap = new LinkedHashMap();
			stacYyMap.put("name", key.substring(3) + "년 분석결과");
			stacYyMap.put("value", key.substring(3));
			stacYyList.add(stacYyMap);
		}
		
		resultMap.putData("growth",growthMap);
		resultMap.putData("safe",safeMap);
		resultMap.putData("profit",profitMap);
		resultMap.putData("product",productMap);
		resultMap.putData("active",activeMap);
		
		resultMap.putData("stacYys",stacYyList);
		
		resultMap.putData("tpbsClsfDcdNm",tpbsClsfDcdNm);
		resultMap.putData("enslDcdNm",enslDcdNm);
		
		
		} catch(Exception ex) {
			ex.printStackTrace();
			
			throw ex;
		}
		
		return resultMap;
		
	}
}
