package com.fas.adm.service.impl;

import java.util.List;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.fas.adm.formVo.MenuMngFormVo;
import com.fas.adm.service.MenuMngSvc;
import com.fas.cmmn.util.FasPagingUtil;
import com.fas.model.com.MenuInfoManager;
import com.fas.model.com.domain.MenuInfoDomain;
import com.fas.web.cmmn.dataaccess.util.JsonObjectModel;
import com.fas.web.cmmn.util.BeanUtils;

@Service("MenuMngSvc")
public class MenuMngSvcImpl implements MenuMngSvc{

	@Autowired
	private MenuInfoManager manager;
	
	private static Log logger = LogFactory.getLog(MenuMngSvcImpl.class);
	
	//1) Menu Admin List
	@Transactional	
	public JsonObjectModel menuAdminList(MenuMngFormVo param) throws Exception {
		//1) 선언
		BeanUtils beanUtil = new BeanUtils();
		JsonObjectModel resultMap = new JsonObjectModel();
		
		int page = param.getPage();
		int limit = param.getLimit();
		int totalCnt = 0;
		
		FasPagingUtil paging = new FasPagingUtil(page, limit);
		
		//2) Parameter Setting
		MenuInfoDomain domain = (MenuInfoDomain) beanUtil.toCopy(param, new MenuInfoDomain());
		
		//3) Manager 호출
		List<MenuInfoDomain> resultList = manager.menuAdminList(domain, paging);
		
		if (resultList != null) {
			totalCnt = manager.totalCnt(param.getMenuNm());
			resultMap.putData(resultList, totalCnt);
		} else {
			resultMap.putData(resultList, 0);
		}
		
		resultMap.putPageData(page,totalCnt);
		
		return resultMap;
	}
	
	//1) Menu Admin List
	@Transactional	
	public JsonObjectModel menuAdminAllList(MenuMngFormVo param) throws Exception {
		//1) 선언
		BeanUtils beanUtil = new BeanUtils();
		JsonObjectModel resultMap = new JsonObjectModel();
			
		int page = param.getPage();
		int limit = param.getLimit();
		int totalCnt = manager.totalCnt("");
		
		limit = totalCnt;
			
		FasPagingUtil paging = new FasPagingUtil(page, limit);
			
		//2) Parameter Setting
		MenuInfoDomain domain = (MenuInfoDomain) beanUtil.toCopy(param, new MenuInfoDomain());
			
		//3) Manager 호출
		List<MenuInfoDomain> resultList = manager.menuAdminList(domain, paging);
			
		if (resultList != null) {
			resultMap.putData(resultList, totalCnt);
		} else {
			resultMap.putData(resultList, 0);
		}
			
		return resultMap;
	}
	
	
	
	//2) Menu Rgsn
	public JsonObjectModel menuAdminCreate(MenuMngFormVo param) throws Exception {

		//1) 선언
		BeanUtils beanUtil = new BeanUtils();
		JsonObjectModel resultMap = new JsonObjectModel();
		
		//2) Parameter Setting
		MenuInfoDomain domain = (MenuInfoDomain) beanUtil.toCopy(param, new MenuInfoDomain());

		manager.menuAdminCreate(domain);
		
		resultMap.success();
		
		return resultMap;
		
		
	}
	//3) Menu Modify
	@Transactional	
	public JsonObjectModel menuAdminMdfc(MenuMngFormVo param) throws Exception {

		//1) 선언
		BeanUtils beanUtil = new BeanUtils();
		JsonObjectModel resultMap = new JsonObjectModel();
		
		//2) Parameter Setting
		MenuInfoDomain domain = (MenuInfoDomain) beanUtil.toCopy(param, new MenuInfoDomain());

		manager.menuAdminModify(domain);
		
		resultMap.success();
		
		return resultMap;
	}
	
	//4) Menu Use Yn Rgsn
	@Transactional	
	public JsonObjectModel menuAdminActive(MenuMngFormVo param) throws Exception {

		//1) 선언
		BeanUtils beanUtil = new BeanUtils();
		JsonObjectModel resultMap = new JsonObjectModel();
		
		//2) Parameter Setting
		MenuInfoDomain domain = (MenuInfoDomain) beanUtil.toCopy(param, new MenuInfoDomain());

		manager.menuAdminActiveRgsn(domain);
		
		resultMap.success();
		
		return resultMap;
	} 	
	
	//5) Menu Delete
	@Transactional	
	public JsonObjectModel menuAdminDel(MenuMngFormVo param) throws Exception {

		//1) 선언
		BeanUtils beanUtil = new BeanUtils();
		JsonObjectModel resultMap = new JsonObjectModel();
		
		//2) Parameter Setting
		MenuInfoDomain domain = (MenuInfoDomain) beanUtil.toCopy(param, new MenuInfoDomain());

		manager.menuAdminDelete(domain);
		
		resultMap.success();
		
		return resultMap;
	} 		
	
}
