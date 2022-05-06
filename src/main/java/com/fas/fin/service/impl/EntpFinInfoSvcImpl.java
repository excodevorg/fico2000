package com.fas.fin.service.impl;

import java.util.ArrayList;
import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.fas.cmmn.util.FasDateUtil;
import com.fas.cmmn.util.FasPagingUtil;
import com.fas.fin.formVo.EntpFinInfoFormVo;
import com.fas.fin.service.EntpFinInfoSvc;
import com.fas.model.fin.EntpFinInfoManager;
import com.fas.model.fin.EntpFinInfoModel;
import com.fas.model.fin.EntpFinItemVo;
import com.fas.model.fin.domain.FinFnamInfoDomain;
import com.fas.web.cmmn.dataaccess.util.JsonObjectModel;
import com.fas.web.cmmn.util.BeanUtils;
import com.fas.web.cmmn.util.HttpUtil;
import com.fas.web.cmmn.util.StringUtil;

@Service("EntpFinInfoSvc")
public class EntpFinInfoSvcImpl implements EntpFinInfoSvc {

	@Resource(name="EntpFinInfoManager")
	private EntpFinInfoManager entpFinInfoManager;
	
	@Resource(name="EntpFinInfoModel")
	private EntpFinInfoModel entpFinInfoModel;	
	
	@Resource(name="HttpUtil")
	private HttpUtil httpUtil;

	
	//1) 재무정보 list 조회
	public JsonObjectModel entpFinInfoList(EntpFinInfoFormVo param) throws Exception {

		//1) 선언
		BeanUtils beanUtil = new BeanUtils();
		JsonObjectModel resultMap = new JsonObjectModel();
		
		FinFnamInfoDomain domain = (FinFnamInfoDomain) beanUtil.toCopy(param, new FinFnamInfoDomain());
		
		if (!httpUtil.isAdminRole()) {
			domain.setUserid(httpUtil.getSessionUserId());
		} 
		
		int page = param.getPage();
		int limit = param.getLimit();
		int totalCnt = 0;
		
		FasPagingUtil paging = new FasPagingUtil(page, limit);
		
		List<EntpFinItemVo> entpList = new ArrayList<EntpFinItemVo>();
		
		List<EntpFinInfoFormVo> resultList = new ArrayList<EntpFinInfoFormVo>();
		
		totalCnt = entpFinInfoManager.EntpFinFnamInfoListTotalCount(domain);
		
		if (totalCnt > 0) {
			entpList = entpFinInfoManager.EntpFinFnamInfoList(domain, paging);
			
			int startNum = 0;
			int startPage = param.getPage();
			if (startPage == 0) startPage = 1;
			
			startNum = totalCnt - (param.getLimit() * (startPage-1));
			
			for (EntpFinItemVo vo : entpList) {
				EntpFinInfoFormVo infoVo = (EntpFinInfoFormVo) beanUtil.toCopy(vo, new EntpFinInfoFormVo());
				infoVo.setNumRow(startNum--);
				infoVo.setBznDis(StringUtil.format(domain.getBzn(),"BZN"));
				resultList.add(infoVo);
			}
			
		}
		
		resultMap.putData(resultList, totalCnt);
		
		resultMap.putPageData(page,totalCnt);
		
		return resultMap;
		
	}
	
	
	//2) Model 조회
	public JsonObjectModel entpFinInfoModel(EntpFinInfoFormVo param) throws Exception {

		//1) 선언
		BeanUtils beanUtil = new BeanUtils();
		JsonObjectModel resultMap = new JsonObjectModel();
		
		entpFinInfoModel.makeModel();
		
		resultMap.putData(entpFinInfoModel.getMap());
		
		return resultMap;
		
	}
	
	
	//3) Value 조회
	public JsonObjectModel entpFinInfoTypeMap(EntpFinInfoFormVo param) throws Exception {

		//1) 선언
		BeanUtils beanUtil = new BeanUtils();
		JsonObjectModel resultMap = new JsonObjectModel();
		
		FinFnamInfoDomain domain = (FinFnamInfoDomain) beanUtil.toCopy(param, new FinFnamInfoDomain());
		
		if (!httpUtil.isAdminRole()) {
			domain.setUserid(httpUtil.getSessionUserId());
		} 
		
		resultMap.putData(entpFinInfoManager.finFnamTypeMap(domain));
		
		return resultMap;
		
	}	
	
	
	//4) 등록	
	public JsonObjectModel entpFinInfoRgsn(List<EntpFinInfoFormVo> params) throws Exception {
		
		//1) 선언
		BeanUtils beanUtil = new BeanUtils();
		JsonObjectModel resultMap = new JsonObjectModel();
		
		FinFnamInfoDomain domain = null;
		
		for (EntpFinInfoFormVo param : params) {
			domain = (FinFnamInfoDomain) beanUtil.toCopy(param, new FinFnamInfoDomain());
			
			domain.setFrrgUserId(domain.getUserid());
			
			if (!httpUtil.isAdminRole()) {
				domain.setUserid(httpUtil.getSessionUserId());				
			}
			
			domain.setLastUserId(httpUtil.getSessionUserId());
			domain.setFrrgTs(FasDateUtil.getCurrentDate());
			domain.setLastTs(FasDateUtil.getCurrentDate());
			
			entpFinInfoManager.EntpFinInfoRgsn(domain);	
		}
		
		resultMap.success();
		
		return resultMap;
		
		
	}
	
	
}
