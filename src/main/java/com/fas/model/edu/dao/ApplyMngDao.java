package com.fas.model.edu.dao;

import java.util.List;

import javax.annotation.Resource;

import org.hsqldb.lib.StringUtil;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.fas.cmmn.util.FasDateUtil;
import com.fas.model.edu.domain.ApplyMngDomain;
import com.fas.model.repository.ApplyMngRepository;
import com.fas.web.cmmn.exception.BizException;
import com.fas.web.cmmn.util.HttpUtil;

@Repository("ApplyMngDao")
public class ApplyMngDao {


	/** Repository */
    @Resource(name="applyMngRepository")
    private ApplyMngRepository repository;
    
    @Resource(name="HttpUtil")
    private HttpUtil httpUtil;
    
    //등록
    @Transactional
    public void insert(ApplyMngDomain apply) throws Exception {
    	apply.setFrrgTs(FasDateUtil.getCurrentDate());
    	apply.setLastTs(FasDateUtil.getCurrentDate());
    	
    	if (StringUtil.isEmpty(apply.getFrrgUserId())) {
    		apply.setFrrgUserId(httpUtil.getSessionUserId());
    	}
    	
    	if (StringUtil.isEmpty(apply.getLastUserId())) {
    		apply.setLastUserId(httpUtil.getSessionUserId());
    	}
    	
    	if (StringUtil.isEmpty(apply.getCompleteYn())) {
    		apply.setCompleteYn("N");
    	}
    	
    	apply.setApplyTs(FasDateUtil.getCurrentDate());
    	
    	if (StringUtil.isEmpty(apply.getUserNm())) {
    		apply.setUserNm(httpUtil.getSessionUserNm());
    	}
    	
    	if (StringUtil.isEmpty(apply.getUserId())) {
    		apply.setUserId(httpUtil.getSessionUserId());
    	}
    	
    	repository.saveAndFlush(apply);
    }
    
    //변경
    @Transactional
    public void update(ApplyMngDomain apply) throws Exception {
    	
    	
    	if (StringUtil.isEmpty(apply.getLastUserId())) {
    		apply.setLastUserId(httpUtil.getSessionUserId());
    	}
    	
    	ApplyMngDomain beforeDomain = select(apply);
    	
    	if (beforeDomain == null) throw new BizException("변경할 대상이 없습니다.");
    	
    	if (!StringUtil.isEmpty(apply.getApplyPrgScd())) {
    		beforeDomain.setApplyPrgScd(apply.getApplyPrgScd());
    	}
    	
    	if (!StringUtil.isEmpty(apply.getCompleteYn())) {
    		beforeDomain.setCompleteYn(apply.getCompleteYn());
    	}
    	
    	if (!StringUtil.isEmpty(apply.getUserId())) {
    		beforeDomain.setUserId(apply.getUserId());
    	}
    	
    	if (!StringUtil.isEmpty(apply.getUserNm())) {
    		beforeDomain.setUserNm(apply.getUserNm());
    	}
    	
    	beforeDomain.setLastTs(FasDateUtil.getCurrentDate());
    	
    	repository.saveAndFlush(beforeDomain);
    }	
    
    //상세 조회
    public ApplyMngDomain select(ApplyMngDomain apply) throws Exception {
    	
    	ApplyMngDomain beforeDomain = repository.findByLcteUnqIdAndUserId(apply.getLcteUnqId(), apply.getUserId());
    	
    	return beforeDomain;
    	
    }
    
    //강의고유 ID로 수강 신청자 조회
    public List<ApplyMngDomain> selectLcteList(ApplyMngDomain apply) throws Exception {
    	return repository.findByLcteUnqIdOrderByFrrgTsDesc(apply.getLcteUnqId());
    }
    
    //User ID로 수강 신청 내역 조회
	public List<ApplyMngDomain> selectUserList(ApplyMngDomain apply) throws Exception {
		return repository.findByUserIdOrderByFrrgTsDesc(apply.getUserId());
	}
	
	public List<ApplyMngDomain> selectUserApplyLcteList(ApplyMngDomain apply) throws Exception {
		if (StringUtil.isEmpty(apply.getApplyPrgScd()) && "Y".equals(apply.getCompleteYn())) {
			return repository.findByUserIdAndApplyCompleteYnOrderByFrrgTsDesc(apply.getUserId(), apply.getCompleteYn());
		}
		return repository.findByUserIdAndApplyPrgScdAndCompleteYnOrderByFrrgTsDesc(apply.getUserId(), apply.getApplyPrgScd(), apply.getCompleteYn());
	}
	
    @Transactional
	public void delete(ApplyMngDomain apply) throws Exception {
		repository.delete(apply);
	}
}
