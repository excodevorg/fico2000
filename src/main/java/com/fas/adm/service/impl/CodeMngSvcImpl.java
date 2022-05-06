package com.fas.adm.service.impl;

import java.util.List;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.fas.adm.formVo.CodeMngFormVo;
import com.fas.adm.service.CodeMngSvc;
import com.fas.cmmn.util.FasPagingUtil;
import com.fas.model.com.CodeInfoManager;
import com.fas.model.com.domain.CodeInfoDomain;
import com.fas.model.com.domain.MenuInfoDomain;
import com.fas.web.cmmn.dataaccess.util.JsonObjectModel;
import com.fas.web.cmmn.util.BeanUtils;
import com.fas.web.cmmn.util.StringUtil;

@Service("CodeMngSvc")
public class CodeMngSvcImpl implements CodeMngSvc {

	@Autowired
	private CodeInfoManager manager;
	
	private static Log logger = LogFactory.getLog(CodeMngSvcImpl.class);
	
	@Transactional	
	public JsonObjectModel codeAdminList(CodeMngFormVo param) throws Exception {
		//1) 선언
		BeanUtils beanUtil = new BeanUtils();
		JsonObjectModel resultMap = new JsonObjectModel();
		
		int page = param.getPage();
		int limit = param.getLimit();
		int totalCnt = 0;
		
		FasPagingUtil paging = new FasPagingUtil(page, limit);
		
		CodeInfoDomain domain = (CodeInfoDomain) beanUtil.toCopy(param, new CodeInfoDomain());
		
		List<CodeInfoDomain> resultList = manager.codeAdminList(domain, paging);
		
		if (resultList != null) {
			if (!StringUtil.isEmpty(param.getDomainCode())) {
				totalCnt = resultList.size();
				resultMap.putData(resultList, totalCnt);
			} else {
				totalCnt = manager.totalCnt(param.getCodeNm());
				resultMap.putData(resultList, totalCnt);
			}
		} else {
			resultMap.putData(resultList, 0);
		}
		
		resultMap.putPageData(page,totalCnt);
		
		return resultMap;
	}

	@Transactional	
	public JsonObjectModel codeAdminCreate(CodeMngFormVo param)
			throws Exception {
		
		//1) 선언
		BeanUtils beanUtil = new BeanUtils();
		JsonObjectModel resultMap = new JsonObjectModel();
		
		//2) Parameter Setting
		CodeInfoDomain domain = (CodeInfoDomain) beanUtil.toCopy(param, new CodeInfoDomain());

		manager.codeAdminCreate(domain);
		
		resultMap.success();
		
		return resultMap;
	}

	@Transactional	
	public JsonObjectModel codeAdminMdfc(CodeMngFormVo param) throws Exception {
		//1) 선언
		BeanUtils beanUtil = new BeanUtils();
		JsonObjectModel resultMap = new JsonObjectModel();
				
		//2) Parameter Setting
		CodeInfoDomain domain = (CodeInfoDomain) beanUtil.toCopy(param, new CodeInfoDomain());

		manager.codeAdminModify(domain);
				
		resultMap.success();
				
		return resultMap;
	}

	@Transactional	
	public JsonObjectModel codeAdminDel(CodeMngFormVo param) throws Exception {
		//1) 선언
		BeanUtils beanUtil = new BeanUtils();
		JsonObjectModel resultMap = new JsonObjectModel();
						
		//2) Parameter Setting
		CodeInfoDomain domain = (CodeInfoDomain) beanUtil.toCopy(param, new CodeInfoDomain());

		manager.codeAdminDelete(domain);
						
		resultMap.success();
						
		return resultMap;
	}

	
	
}
