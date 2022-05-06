package com.fas.edu.service.impl;

import java.util.ArrayList;
import java.util.List;

import javax.annotation.Resource;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.fas.cmmn.util.FasDateUtil;
import com.fas.cmmn.util.FasPagingUtil;
import com.fas.edu.formVo.EducationFormVo;
import com.fas.edu.service.EducationSvc;
import com.fas.model.com.CodeInfoManager;
import com.fas.model.com.LcteInfoManager;
import com.fas.model.com.domain.CodeInfoDomain;
import com.fas.model.com.domain.LcteInfoDomain;
import com.fas.model.edu.ApplyMngManager;
import com.fas.model.edu.domain.ApplyMngDomain;
import com.fas.web.cmmn.dataaccess.util.JsonObjectModel;
import com.fas.web.cmmn.util.BeanUtils;
import com.fas.web.cmmn.util.HttpUtil;
import com.fas.web.cmmn.util.StringUtil;

@Service("EducationSvc")
public class EducationSvcImpl implements EducationSvc {
	
	private static Log logger = LogFactory.getLog(EducationSvcImpl.class);

	@Autowired
	private LcteInfoManager manager;
	
	@Autowired
	private CodeInfoManager codeManager;
	
	@Autowired
	private ApplyMngManager applyManager;
	
	@Resource(name="HttpUtil")
	private HttpUtil httpUtil;
	
	//교육과정 목록
	//1) 과정명 or 전체 조회
	@Transactional	
	public JsonObjectModel lcteInfoInq(EducationFormVo param) throws Exception {	
		
		//1) 선언
		BeanUtils beanUtil = new BeanUtils();
		JsonObjectModel resultMap = new JsonObjectModel();

		int page = param.getPage();
		int limit = param.getLimit();
		int totalCnt = 0;
		
		//2) param setting 
		LcteInfoDomain domain = (LcteInfoDomain) beanUtil.toCopy(param, new LcteInfoDomain());		
		
		totalCnt = manager.totalCnt(domain);
		
		FasPagingUtil paging = new FasPagingUtil(page, limit);
		
		//3) Manager 호출
		List<LcteInfoDomain> lcteList = manager.lcteInfoInq(domain, paging);
		
		List<EducationFormVo> resultList = new ArrayList<EducationFormVo>();
		
		EducationFormVo lcteMngFormVo = null;
		CodeInfoDomain codeinfo = new CodeInfoDomain();
		
		ApplyMngDomain applyDomain = null;
		
		if (lcteList != null) {
			
			int startNum = lcteList.size();
			
			for (LcteInfoDomain vo : lcteList) {
				
				lcteMngFormVo = (EducationFormVo) beanUtil.toCopy(vo, new EducationFormVo());
				lcteMngFormVo.setAtlcAplcAblYn(StringUtil.nvl(lcteMngFormVo.getAtlcAplcAblYn(),"Y"));
				lcteMngFormVo.setDelYn(StringUtil.nvl(lcteMngFormVo.getDelYn(),"N"));
				lcteMngFormVo.setFlapMngmNo(StringUtil.nvl(lcteMngFormVo.getFlapMngmNo()));
				lcteMngFormVo.setLcteCon(lcteMngFormVo.getLcteCon());
				lcteMngFormVo.setLcteYmd(lcteMngFormVo.getLcteSttgYmd() + "~" + lcteMngFormVo.getLcteFnshYmd());
				
				codeinfo = new CodeInfoDomain();
				codeinfo.setDomainCode("FAS0201");
				codeinfo.setCode(vo.getLctePgrsScd());
				codeinfo = codeManager.codeAdminInq(codeinfo);
				
				lcteMngFormVo.setLctePgrsScdNm(codeinfo.getCodeNm());
				
				//수강신청여부 조회
				applyDomain = new ApplyMngDomain();
				applyDomain.setLcteUnqId(vo.getLcteUnqId());
				applyDomain.setUserId(httpUtil.getSessionUserId());
				
				logger.debug(">>> applyDomain1 >>> " + applyDomain.getLcteUnqId());
				logger.debug(">>> applyDomain2 >>> " + applyDomain.getUserId());
				
				applyDomain = applyManager.applyInq(applyDomain);
				
				logger.debug(">>> applyDomain >>> " + applyDomain);
				
				
				if (applyDomain != null) {
					
					logger.debug(">>> applyDomain is not null>>> " + applyDomain.getUserId());
					
					codeinfo = new CodeInfoDomain();
					codeinfo.setDomainCode("FAS0202");
					codeinfo.setCode(applyDomain.getApplyPrgScd());
					codeinfo = codeManager.codeAdminInq(codeinfo);
					
					lcteMngFormVo.setApplyPrgScdNm(codeinfo.getCodeNm());
					
					lcteMngFormVo.setApplyYmd(FasDateUtil.transDateToString(applyDomain.getApplyTs()));
					
					lcteMngFormVo.setApplyYn("Y");
					
					
				} else {
					
					logger.debug(">>> applyDomain is null>>> ");
					
					lcteMngFormVo.setApplyPrgScdNm("");
					
					lcteMngFormVo.setApplyYn("N");
					
				}
				
				lcteMngFormVo.setNumRow(startNum--);
					
				resultList.add(lcteMngFormVo);
			}
			
			resultMap.putData(resultList, totalCnt);
		} else {
			resultMap.putData(resultList, 0);
		}
		
		resultMap.putPageData(page,totalCnt);
		
		return resultMap;	
		
	}
	
	//2) 교육과정 상세 조회
	@Transactional	
	public JsonObjectModel lcteInfoDtl(EducationFormVo param) throws Exception {
		
		//1) 선언
		BeanUtils beanUtil = new BeanUtils();
		JsonObjectModel resultMap = new JsonObjectModel();		

		//2) param setting 
		LcteInfoDomain domain = (LcteInfoDomain) beanUtil.toCopy(param, new LcteInfoDomain());	
		
		domain = manager.lcteInfoDtl(domain);
		
		ApplyMngDomain applyDomain = null;
		
		CodeInfoDomain codeinfo = null;
		
		EducationFormVo lcteMngFormVo = new EducationFormVo();
		
		if (domain != null) {
			
			lcteMngFormVo = (EducationFormVo) beanUtil.toCopy(domain, new EducationFormVo());
		
			//수강신청여부 조회
			applyDomain = new ApplyMngDomain();
			applyDomain.setLcteUnqId(domain.getLctecUnqId());
			applyDomain.setUserId(httpUtil.getSessionUserId());
			
			applyDomain = applyManager.applyInq(applyDomain);
			
			if (applyDomain != null) {
				codeinfo = new CodeInfoDomain();
				codeinfo.setDomainCode("FAS0202");
				codeinfo.setCode(applyDomain.getApplyPrgScd());
				codeinfo = codeManager.codeAdminInq(codeinfo);
				
				lcteMngFormVo.setApplyPrgScdNm(codeinfo.getCodeNm());
				
				lcteMngFormVo.setApplyYmd(FasDateUtil.transDateToString(applyDomain.getApplyTs()));
				
				lcteMngFormVo.setApplyYn("Y");			
			}
			
		}
			
		
		resultMap.putData("lcteInfo", lcteMngFormVo);
		
		return resultMap;
		
	}
	
	//3) 수강신청 등록
	@Transactional	
	public JsonObjectModel applyRgsn(EducationFormVo param) throws Exception {
		
		//1) 선언
		BeanUtils beanUtil = new BeanUtils();
		JsonObjectModel resultMap = new JsonObjectModel();
		
		ApplyMngDomain applyDomain = (ApplyMngDomain) beanUtil.toCopy(param, new ApplyMngDomain());
		
		applyManager.applyRgsn(applyDomain);
		
		resultMap.success("수강신청이 정상적으로 완료되었습니다.");
		
		return resultMap;
		
	}
	
	public JsonObjectModel myEduInfoPrgScdUserList(EducationFormVo param) throws Exception {
		
		//1) 선언
		BeanUtils beanUtil = new BeanUtils();
		JsonObjectModel resultMap = new JsonObjectModel();
		List<EducationFormVo> lcteAllList = new ArrayList<EducationFormVo>();
		
		List<EducationFormVo> lcteList = new ArrayList<EducationFormVo>();
		
		String userId = httpUtil.getSessionUserId();
		
		//1) 본인 수강신청한 내역 조회
		ApplyMngDomain apply = (ApplyMngDomain) beanUtil.toCopy(param, new ApplyMngDomain());
		apply.setUserId(userId);
		
		List<ApplyMngDomain> applyList = applyManager.applyUserLcteList(apply);
		
		if (applyList != null) {
			logger.debug(">>>>> applyList " + applyList.size());
		} else {
			logger.debug(">>>>> applyList is null ");
		}
		
		LcteInfoDomain lcteDomain = null;
		
		EducationFormVo lcteMngFormVo = null;
		
		CodeInfoDomain codeinfo = null;
		
		int startNum = 0;
		
		if (applyList != null) startNum = applyList.size();
		
		//2) 본인 수강신청한 리스트로 수강신청 과목의 내용을 조회
		for (ApplyMngDomain domain : applyList) {
			lcteDomain = new LcteInfoDomain();
			lcteDomain.setLcteUnqId(domain.getLcteUnqId());
			lcteDomain = manager.lcteInfoDtl(lcteDomain);
			logger.debug(">>>>> LcteUnqId is " + lcteDomain.getLcteUnqId());
			if (lcteDomain != null) {
				lcteMngFormVo = (EducationFormVo) beanUtil.toCopy(lcteDomain, new EducationFormVo());
//				codeinfo = new CodeInfoDomain();
//				codeinfo.setDomainCode("FAS0202");
//				codeinfo.setCode(domain.getApplyPrgScd());
//				codeinfo = codeManager.codeAdminInq(codeinfo);
//						
//				lcteMngFormVo.setApplyPrgScdNm(codeinfo.getCodeNm());
				lcteMngFormVo.setApplyPrgScd(domain.getApplyPrgScd());
				lcteMngFormVo.setCompleteYn(domain.getCompleteYn());
				
				lcteMngFormVo.setNumRow(startNum--);
				
				if ("Y".equals(lcteMngFormVo.getCompleteYn())) {
					lcteMngFormVo.setCompleteYnDis("수료");
					lcteMngFormVo.setStudyNm("복습하기");
				} else {
					lcteMngFormVo.setCompleteYnDis("미수료");
					lcteMngFormVo.setStudyNm("학습하기");
				}
				lcteMngFormVo.setLcteYmd(lcteMngFormVo.getLcteSttgYmd() + "~" + lcteMngFormVo.getLcteFnshYmd());
						
				lcteAllList.add(lcteMngFormVo);
						
			} else {
				logger.debug(">>>>> lcteDomain is null ");
			}
		}
		
		resultMap.putData(lcteAllList, lcteAllList.size());
		
		return resultMap;
		
	}
	
	public JsonObjectModel myEduInfoPgrsList(EducationFormVo param) throws Exception {
		
		//1) 선언
		BeanUtils beanUtil = new BeanUtils();
		JsonObjectModel resultMap = new JsonObjectModel();
		List<EducationFormVo> lcteAllList = new ArrayList<EducationFormVo>();
		
		List<EducationFormVo> lcteCompleteList = new ArrayList<EducationFormVo>();
		List<EducationFormVo> lcteProgressList = new ArrayList<EducationFormVo>();
		List<EducationFormVo> lcteStandbyList = new ArrayList<EducationFormVo>();
		
		String userId = httpUtil.getSessionUserId();
		
		//1) 본인 수강신청한 내역 조회
		ApplyMngDomain apply = new ApplyMngDomain();
		
		apply.setUserId(userId);
		
		logger.debug(">>>>> userId " + userId);
		
		List<ApplyMngDomain> applyList = applyManager.applyUserAllList(apply);
		if (applyList != null) {
			logger.debug(">>>>> applyList " + applyList.size());
		} else {
			logger.debug(">>>>> applyList is null ");
		}
		
		LcteInfoDomain lcteDomain = null;
		
		EducationFormVo lcteMngFormVo = null;
		
		CodeInfoDomain codeinfo = null;
		
		//2) 본인 수강신청한 리스트로 수강신청 과목의 내용을 조회
		for (ApplyMngDomain domain : applyList) {
			lcteDomain = new LcteInfoDomain();
			lcteDomain.setLcteUnqId(domain.getLcteUnqId());
			lcteDomain = manager.lcteInfoDtl(lcteDomain);
			logger.debug(">>>>> LcteUnqId is " + lcteDomain.getLcteUnqId());
			if (lcteDomain != null) {
				lcteMngFormVo = (EducationFormVo) beanUtil.toCopy(lcteDomain, new EducationFormVo());
				codeinfo = new CodeInfoDomain();
				codeinfo.setDomainCode("FAS0202");
				codeinfo.setCode(domain.getApplyPrgScd());
				codeinfo = codeManager.codeAdminInq(codeinfo);
				
				lcteMngFormVo.setApplyPrgScdNm(codeinfo.getCodeNm());
				lcteMngFormVo.setApplyPrgScd(domain.getApplyPrgScd());
				lcteMngFormVo.setCompleteYn(domain.getCompleteYn());
				
				lcteAllList.add(lcteMngFormVo);
				
			} else {
				logger.debug(">>>>> lcteDomain is null ");
			}
		}
		
		
		if (lcteAllList != null && lcteAllList.size() > 0) {
			
			for (EducationFormVo vo : lcteAllList) {
				logger.debug(">>>>> lcteDomain is " + vo.getCompleteYn() + " : " +  vo.getApplyPrgScd());
				//1) 수료완료 된건
				if ("Y".equals(vo.getCompleteYn())) {
					lcteCompleteList.add(vo);
				}
				
				//2) 대기중인 건
				if (!"Y".equals(vo.getCompleteYn()) && "FAS020201".equals(vo.getApplyPrgScd())) {
					lcteStandbyList.add(vo);
				}
				
				//3) 진행중인 건
				if (!"Y".equals(vo.getCompleteYn()) && "FAS020202".equals(vo.getApplyPrgScd())) {
					lcteProgressList.add(vo);
				}
			}
			
		} else {
			logger.debug(">>>> lcteAllList is null");
		}
		if (lcteProgressList == null) resultMap.putData(new ArrayList<EducationFormVo>(), 0);
		if (lcteStandbyList == null) resultMap.putData(new ArrayList<EducationFormVo>(), 0);
		if (lcteCompleteList == null) resultMap.putData(new ArrayList<EducationFormVo>(), 0);
		
		int startNum1 = lcteProgressList.size();
		int startNum2 = lcteStandbyList.size();
		int startNUm3 = lcteCompleteList.size();
		
		for (EducationFormVo vo : lcteProgressList) {
			vo.setNumRow(startNum1--);
			
			if ("Y".equals(vo.getCompleteYn())) {
				vo.setCompleteYnDis("수료");
			} else {
				vo.setCompleteYnDis("미수료");
			}
			vo.setLcteYmd(vo.getLcteSttgYmd() + "~" + vo.getLcteFnshYmd());
		}
		
		for (EducationFormVo vo : lcteStandbyList) {
			vo.setNumRow(startNum2--);
			vo.setLcteYmd(vo.getLcteSttgYmd() + "~" + vo.getLcteFnshYmd());
		}
		
		for (EducationFormVo vo : lcteCompleteList) {
			vo.setNumRow(startNUm3--);
			if ("Y".equals(vo.getCompleteYn())) {
				vo.setCompleteYnDis("수료");
			} 
			vo.setLcteYmd(vo.getLcteSttgYmd() + "~" + vo.getLcteFnshYmd());
		}

		resultMap.putData(lcteProgressList, lcteProgressList.size());
		resultMap.putData(lcteStandbyList, lcteStandbyList.size());
		resultMap.putData(lcteCompleteList, lcteCompleteList.size());
		
		return resultMap;
		
	}
	
	
}
