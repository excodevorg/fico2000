package com.fas.adm.service.impl;

import java.util.ArrayList;
import java.util.List;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.fas.adm.formVo.LcteMngFormVo;
import com.fas.adm.service.LcteMngSvc;
import com.fas.cmmn.util.FasDateUtil;
import com.fas.cmmn.util.FasPagingUtil;
import com.fas.model.com.CodeInfoManager;
import com.fas.model.com.FileManager;
import com.fas.model.com.LcteInfoManager;
import com.fas.model.com.domain.CodeInfoDomain;
import com.fas.model.com.domain.LcteInfoDomain;
import com.fas.model.edu.ApplyMngManager;
import com.fas.model.edu.domain.ApplyMngDomain;
import com.fas.web.cmmn.dataaccess.util.FasMap;
import com.fas.web.cmmn.dataaccess.util.JsonObjectModel;
import com.fas.web.cmmn.util.BeanUtils;
import com.fas.web.cmmn.util.StringUtil;

@Service("LcteMngSvc")
public class LcteMngSvcImpl implements LcteMngSvc {

	@Autowired
	private LcteInfoManager manager;
	
	@Autowired
	private CodeInfoManager codeManager;
	
	@Autowired
	private ApplyMngManager applyManager;
	
	@Autowired
	private FileManager fileManager;
	
	private static Log logger = LogFactory.getLog(LcteMngSvcImpl.class);
	
	//1) 과정명 or 전체 조회
	@Transactional	
	public JsonObjectModel lcteInfoInq(LcteMngFormVo param) throws Exception {
		//1) 선언
		BeanUtils beanUtil = new BeanUtils();
		JsonObjectModel resultMap = new JsonObjectModel();
		
		int page = param.getPage();
		int limit = param.getLimit();
		int totalCnt = 0;
		
		FasPagingUtil paging = new FasPagingUtil(page, limit);
		
		//2) param setting 
		LcteInfoDomain domain = (LcteInfoDomain) beanUtil.toCopy(param, new LcteInfoDomain());
		
		totalCnt = manager.totalCnt(domain);

		//3) Manager 호출
		List<LcteInfoDomain> lcteList = manager.lcteInfoInq(domain, paging);
		
		List<LcteMngFormVo> resultList = new ArrayList<LcteMngFormVo>();
		
		LcteMngFormVo lcteMngFormVo = null;
		CodeInfoDomain codeinfo = new CodeInfoDomain();
		
		if (resultList != null) {
			
			for (LcteInfoDomain vo : lcteList) {
				
				lcteMngFormVo = (LcteMngFormVo) beanUtil.toCopy(vo, new LcteMngFormVo());
				lcteMngFormVo.setAtlcAplcAblYn(StringUtil.nvl(lcteMngFormVo.getAtlcAplcAblYn(),"Y"));
				lcteMngFormVo.setDelYn(StringUtil.nvl(lcteMngFormVo.getDelYn(),"N"));
				lcteMngFormVo.setFlapMngmNo(StringUtil.nvl(lcteMngFormVo.getFlapMngmNo()));
				lcteMngFormVo.setLcteCon(lcteMngFormVo.getLcteCon());
				lcteMngFormVo.setLcteYmd(lcteMngFormVo.getLcteSttgYmd() + "~" + lcteMngFormVo.getLcteFnshYmd());
				
				codeinfo = new CodeInfoDomain();
				codeinfo.setDomainCode("FAS0201");
				if (StringUtil.isEmpty(vo.getLctePgrsScd())) {
					codeinfo.setCode("FAS020101");
				} else {
					codeinfo.setCode(vo.getLctePgrsScd());
				}
				codeinfo = codeManager.codeAdminInq(codeinfo);
				
				lcteMngFormVo.setLctePgrsScdNm(codeinfo.getCodeNm());
					
				resultList.add(lcteMngFormVo);
			}
			
			resultMap.putData(resultList, totalCnt);
		} else {
			resultMap.putData(resultList, 0);
		}
		
		resultMap.putPageData(page,totalCnt);
		
		return resultMap;
	}
	
	//1-1) 과정명 or 전체 조회 
	@Transactional	
	public JsonObjectModel lcteInfoAllInq(LcteMngFormVo param) throws Exception {
		//1) 선언
		BeanUtils beanUtil = new BeanUtils();
		JsonObjectModel resultMap = new JsonObjectModel();
		
		int page = param.getPage();
		int limit = param.getLimit();
		int totalCnt = 0;
		
		//2) param setting 
		LcteInfoDomain domain = (LcteInfoDomain) beanUtil.toCopy(param, new LcteInfoDomain());
		
		totalCnt = manager.totalCnt(domain);
		
		FasPagingUtil paging = new FasPagingUtil(page, totalCnt);

		//3) Manager 호출
		List<LcteInfoDomain> lcteList = manager.lcteInfoInq(domain, paging);
		
		List<FasMap> lcteNameList = new ArrayList<FasMap>();
		FasMap lcteName = null;
		
		LcteMngFormVo lcteMngFormVo = null;
		CodeInfoDomain codeinfo = new CodeInfoDomain();
		
		logger.debug(">>> lcteList >>> " + lcteList);
		
		if (lcteList != null) {
			
			for (LcteInfoDomain vo : lcteList) {
				
				logger.debug(">>> vo.getDelYn() >>> " + vo.getDelYn());
				
				if (!"Y".equals(vo.getDelYn())) {
					
					lcteName = new FasMap();
					lcteName.put("name", vo.getLcteNm());
					lcteName.put("value", vo.getLcteUnqId());
					
					lcteNameList.add(lcteName);
				}
			}
			
			
		}
		
		logger.debug(">>> lcteNameList >>> " + lcteNameList);
		
		for (FasMap map : lcteNameList) {
			logger.debug(">>> map >>> " + map);
		}
		
		if (lcteNameList != null) {
			totalCnt = lcteNameList.size();
		} else {
			totalCnt = 0;
		}
		resultMap.putData(lcteNameList, totalCnt);
		
		resultMap.putPageData(page,totalCnt);
	
		return resultMap;
	}
	
	//2) 강의 등록
	@Transactional	
	public JsonObjectModel lcteInfoRgsn(LcteMngFormVo param) throws Exception {
		//1) 선언
		BeanUtils beanUtil = new BeanUtils();
		JsonObjectModel resultMap = new JsonObjectModel();
		
		//2) parameter setting
		LcteInfoDomain domain = (LcteInfoDomain) beanUtil.toCopy(param, new LcteInfoDomain());

		String flapMngmNo = fileManager.fileRgsn(param.getFileList());
		
		domain.setFlapMngmNo(flapMngmNo);
		
		//3) Manager 호출
		manager.lcteInfoRgsn(domain);
		
		resultMap.success();
		
		return resultMap;
		
	}
	
	//3) 강의 변경
	@Transactional	
	public JsonObjectModel lcteInfoMdfc(LcteMngFormVo param) throws Exception {
		//1) 선언
		BeanUtils beanUtil = new BeanUtils();
		JsonObjectModel resultMap = new JsonObjectModel();
		
		LcteInfoDomain domain = (LcteInfoDomain) beanUtil.toCopy(param, new LcteInfoDomain());

		String flapMngmNo = fileManager.fileRgsn(param.getFileList());
		
		domain.setFlapMngmNo(flapMngmNo);
		
		//3) Manager 호출
		manager.lcteInfoMdfc(domain);
		
		resultMap.success();		
		
		return resultMap;
		
	}
	
	//4) 강의 삭제 
	@Transactional	
	public JsonObjectModel lcteInfoDel(LcteMngFormVo param) throws Exception {
		//1) 선언
		BeanUtils beanUtil = new BeanUtils();
		JsonObjectModel resultMap = new JsonObjectModel();
		
		LcteInfoDomain domain = (LcteInfoDomain) beanUtil.toCopy(param, new LcteInfoDomain());

		//3) Manager 호출
		manager.lcteInfoDel(domain);
		
		resultMap.success();	
		
		return resultMap;
		
	}
	
	//5) 수강 신청자 조회
	public JsonObjectModel applyLcteList(LcteMngFormVo param) throws Exception {
		
		//1) 선언
		BeanUtils beanUtil = new BeanUtils();
		JsonObjectModel resultMap = new JsonObjectModel();
		
		ApplyMngDomain domain = (ApplyMngDomain) beanUtil.toCopy(param, new ApplyMngDomain());
		
		List<ApplyMngDomain> arrayList = applyManager.applyLcteList(domain);
		
		List<LcteMngFormVo> resultList = new ArrayList<LcteMngFormVo>();
		
		LcteMngFormVo result = null;
		
		CodeInfoDomain codeinfo = new CodeInfoDomain();
		
		for (ApplyMngDomain applyDomain : arrayList) {
			result = (LcteMngFormVo) beanUtil.toCopy(applyDomain, new LcteMngFormVo());
			
			codeinfo = new CodeInfoDomain();
			codeinfo.setDomainCode("FAS0202");
			codeinfo.setCode(applyDomain.getApplyPrgScd());
			codeinfo = codeManager.codeAdminInq(codeinfo);
			
			result.setApplyPrgScdNm(codeinfo.getCodeNm());
			result.setApplyYmd(FasDateUtil.transDateToString(applyDomain.getApplyTs()));
			
			resultList.add(result);
		}
		
		resultMap.putData(resultList, resultList.size());
		
		return resultMap;
		
	}
	
	//6) 수강 신청자 승인
	public JsonObjectModel applyPrgScdMdfc(LcteMngFormVo param) throws Exception {
		
		//1) 선언
		BeanUtils beanUtil = new BeanUtils();
		JsonObjectModel resultMap = new JsonObjectModel();
		
		ApplyMngDomain domain = (ApplyMngDomain) beanUtil.toCopy(param, new ApplyMngDomain());
		
		applyManager.applyMdfc(domain);
		
		resultMap.success();
		
		return resultMap;
		
	}
	
	//6) 수강 신청자 수료 여부 등록
	public JsonObjectModel applyCompleteMdfc(LcteMngFormVo param) throws Exception {
			
		//1) 선언
		BeanUtils beanUtil = new BeanUtils();
		JsonObjectModel resultMap = new JsonObjectModel();
			
		ApplyMngDomain domain = (ApplyMngDomain) beanUtil.toCopy(param, new ApplyMngDomain());
			
		applyManager.applyMdfc(domain);
			
		resultMap.success();
			
		return resultMap;
			
	}
	
	//7) 수강 신청자 삭제
	public JsonObjectModel applyDel(LcteMngFormVo param) throws Exception {
		
		//1) 선언
		BeanUtils beanUtil = new BeanUtils();
		JsonObjectModel resultMap = new JsonObjectModel();
			
		ApplyMngDomain domain = (ApplyMngDomain) beanUtil.toCopy(param, new ApplyMngDomain());
			
		applyManager.applyDel(domain);
			
		resultMap.success();
			
		return resultMap;
			
	}	
	
}
