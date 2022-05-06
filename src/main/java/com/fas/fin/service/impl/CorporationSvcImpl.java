package com.fas.fin.service.impl;

import java.util.ArrayList;
import java.util.List;

import javax.annotation.Resource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.fas.cmmn.util.FasComUtil;
import com.fas.cmmn.util.FasDateUtil;
import com.fas.cmmn.util.FasPagingUtil;
import com.fas.fin.formVo.CorporationFormVo;
import com.fas.fin.service.CorporationSvc;
import com.fas.model.fin.CoporationManager;
import com.fas.model.fin.domain.CorporationDomain;
import com.fas.web.cmmn.dataaccess.util.JsonObjectModel;
import com.fas.web.cmmn.util.BeanUtils;
import com.fas.web.cmmn.util.HttpUtil;
import com.fas.web.cmmn.util.StringUtil;

@Service("CorporationSvc")
public class CorporationSvcImpl implements CorporationSvc {

	@Resource(name="HttpUtil")
	private HttpUtil httpUtil;
	
	@Resource(name="FasComUtil")
	private FasComUtil fasComUtil;

	@Autowired
	private CoporationManager coporationManager;
	
	//등록
	public JsonObjectModel coporationRgsn(CorporationFormVo param) throws Exception {

		//1) 선언
		BeanUtils beanUtil = new BeanUtils();
		JsonObjectModel resultMap = new JsonObjectModel();
		
		CorporationDomain corVo = (CorporationDomain) beanUtil.toCopy(param, new CorporationDomain());
		
		corVo.setFrrgUserId(httpUtil.getSessionUserId());
		corVo.setLastUserId(httpUtil.getSessionUserId());
		corVo.setUserid(httpUtil.getSessionUserId());
		
		coporationManager.corporationRgsn(corVo);
		
		resultMap.success();
		
		return resultMap;
		
	}
	
	//변경
	public JsonObjectModel coporationMdfc(CorporationFormVo param) throws Exception {

		//1) 선언
		BeanUtils beanUtil = new BeanUtils();
		JsonObjectModel resultMap = new JsonObjectModel();
		
		CorporationDomain corVo = (CorporationDomain) beanUtil.toCopy(param, new CorporationDomain());
		
		corVo.setLastUserId(httpUtil.getSessionUserId());
		
		if (!httpUtil.isAdminRole()) {
			corVo.setUserid(httpUtil.getSessionUserId());
		}
		
		coporationManager.corporationMdfc(corVo);
		
		resultMap.success();
		
		return resultMap;
		
	}

	//삭제
	public JsonObjectModel coporationDel(CorporationFormVo param) throws Exception {

		//1) 선언
		BeanUtils beanUtil = new BeanUtils();
		JsonObjectModel resultMap = new JsonObjectModel();
		
		CorporationDomain corVo = (CorporationDomain) beanUtil.toCopy(param, new CorporationDomain());
		
		corVo.setLastUserId(httpUtil.getSessionUserId());
		
		if (!httpUtil.isAdminRole()) {
			corVo.setUserid(httpUtil.getSessionUserId());
		}
		
		coporationManager.corporationDel(corVo);
		
		resultMap.success();
		
		return resultMap;
		
	}	
	
	//조회
	public JsonObjectModel coporationList(CorporationFormVo param) throws Exception {

		//1) 선언
		BeanUtils beanUtil = new BeanUtils();
		JsonObjectModel resultMap = new JsonObjectModel();
			
		CorporationDomain corVo = (CorporationDomain) beanUtil.toCopy(param, new CorporationDomain());
		
		if (!httpUtil.isAdminRole()) {
			corVo.setUserid(httpUtil.getSessionUserId());
		}
		
		int page = param.getPage();
		int limit = param.getLimit();
		int totalCnt = 0;
		
		List<CorporationDomain> arrList = new ArrayList<CorporationDomain>();
		
		List<CorporationDomain> resultArrList = new ArrayList<CorporationDomain>();
		
		List<CorporationFormVo> resultList = new ArrayList<CorporationFormVo>();
		
		if (!httpUtil.isAdminRole()) {
			arrList = coporationManager.corporationList(corVo);
		} else {
			arrList = coporationManager.corporationAllList(corVo);
		}
		
		totalCnt = arrList.size();
		
		FasPagingUtil paging = new FasPagingUtil(page, limit);
		
		if (totalCnt > 0) {	
			
			if (!httpUtil.isAdminRole()) {
				resultArrList = coporationManager.corporationList(corVo, paging);
			} else {
				resultArrList = coporationManager.corporationAllList(corVo, paging);
			}
			
			int startNum = 0;
			int startPage = param.getPage();
			if (startPage == 0) startPage = 1;
			
			startNum = totalCnt - (param.getLimit() * (startPage-1));
			
			CorporationFormVo vo = null;
			
			for (CorporationDomain domain : resultArrList) {
				vo = new CorporationFormVo();
				vo.setBznDis(StringUtil.format(domain.getBzn(),"BZN"));
				vo.setBzn(domain.getBzn());
				vo.setName(domain.getName());
				vo.setFrrgTs(FasDateUtil.transDateToString(domain.getFrrgTs()));
				vo.setUserid(domain.getUserid());
				vo.setEnslDcd(StringUtil.nvl(domain.getEnslDcd(),"").trim());
				vo.setEnslDcdDis(StringUtil.nvl(fasComUtil.codeName(domain.getEnslDcd()), ""));
				vo.setTpbsClsfDcd(StringUtil.nvl(domain.getTpbsClsfDcd(), "").trim());
				vo.setTpbsClsfDcdDis(StringUtil.nvl(fasComUtil.codeName("FAS0302", domain.getTpbsClsfDcd()), "").trim());
				vo.setAmtUnit(domain.getAmtUnit());
				vo.setAmtUnitDis(StringUtil.nvl(fasComUtil.codeName(domain.getAmtUnit()), "").trim());
				vo.setNumRow(startNum--);
				
				resultList.add(vo);
			}
			
		}
		
		resultMap.putData(resultList, totalCnt);
		
		resultMap.putPageData(page,totalCnt);		
		
		return resultMap;
			
	}	

}
