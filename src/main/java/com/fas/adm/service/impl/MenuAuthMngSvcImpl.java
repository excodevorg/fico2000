package com.fas.adm.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.fas.adm.formVo.MenuAuthFormVo;
import com.fas.adm.service.MenuAuthMngSvc;
import com.fas.cmmn.util.FasPagingUtil;
import com.fas.model.com.MenuAuthManager;
import com.fas.model.com.domain.CodeInfoDomain;
import com.fas.model.com.domain.MenuAuthDomain;
import com.fas.web.cmmn.dataaccess.util.JsonObjectModel;
import com.fas.web.cmmn.util.BeanUtils;

@Service("MenuAuthMngSvc")
public class MenuAuthMngSvcImpl implements MenuAuthMngSvc {

	@Autowired
	private MenuAuthManager manager;
	
	//1) 메뉴 권한에 해당되는 코드 조회 (List)
	@Transactional	
	public JsonObjectModel menuAuthCodeList(MenuAuthFormVo param) throws Exception {
		//1) 선언
		BeanUtils beanUtil = new BeanUtils();
		JsonObjectModel resultMap = new JsonObjectModel();
		
		int page = param.getPage();
		int limit = param.getLimit();
		int totalCnt = 0;
		
		FasPagingUtil paging = new FasPagingUtil(page, limit);
		
		//2) Parameter Setting
		MenuAuthDomain domain = (MenuAuthDomain) beanUtil.toCopy(param, new MenuAuthDomain());
		
		CodeInfoDomain codeInfo = new CodeInfoDomain();
		
		codeInfo.setDomainCode(domain.getRolecode());
		
		//3) Manager 호출
		List<CodeInfoDomain> resultList = manager.menuAuthCodeList(codeInfo, paging);
		
		if (resultList != null) {
			resultMap.putData(resultList, resultList.size());
		} else {
			resultMap.putData(resultList, 0);
		}
		
		return resultMap;
	}
	
	//2) 메뉴 권한코드에 해당되는 메뉴 리스트 조회 (List)
	public JsonObjectModel menuAuthList(MenuAuthFormVo param) throws Exception {
		
		//1) 선언
		BeanUtils beanUtil = new BeanUtils();
		JsonObjectModel resultMap = new JsonObjectModel();
		
		int page = param.getPage();
		int limit = param.getLimit();
		int totalCnt = 0;
		
		//2) Parameter Setting
		MenuAuthDomain domain = (MenuAuthDomain) beanUtil.toCopy(param, new MenuAuthDomain());
		
		//3) Manager 호출
		List<MenuAuthDomain> resultList = manager.menuAuthList(domain);
		
		if (resultList != null) {
			resultMap.putData(resultList, resultList.size());
		} else {
			resultMap.putData(resultList, 0);
		}
		
		return resultMap;
		
	}
	
	//3) 등록 (삭제 후 등록)
	@Transactional	
	public JsonObjectModel menuAuthRgsn(List<MenuAuthFormVo> param) throws Exception {

		//1) 선언
		BeanUtils beanUtil = new BeanUtils();
		JsonObjectModel resultMap = new JsonObjectModel();

		//2) Manager 호출 
		manager.menuAuthRgsn(param);
		
		

		resultMap.success();
		
		return resultMap;
		
	}
	
	
}
