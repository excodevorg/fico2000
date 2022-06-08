package com.fas.model.svy.dao;

import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.fas.model.repository.SvyResultInfoRepository;
import com.fas.model.svy.domain.SvyResultInfoDomain;

@Repository("SvyResultInfoDao")
public class SvyResultInfoDao { 

	/** Repository */
    @Resource(name="svyResultInfoRepository")
    private SvyResultInfoRepository svyResultInfoRepository;
    
    //등록
    @Transactional
    public void insert(SvyResultInfoDomain domain) throws Exception {
    	svyResultInfoRepository.saveAndFlush(domain);
    }
    
    //등록
    @Transactional
    public void update(SvyResultInfoDomain domain) throws Exception {
    	svyResultInfoRepository.saveAndFlush(domain);
    }
	
    public List<SvyResultInfoDomain> selectSvyResultDetailList(SvyResultInfoDomain domain) throws Exception {
    	//return svyResultInfoRepository.findByUserIdAndSvyIdOrderBySeqDesc(domain.getUserId(), domain.getSvyId());
    	return null;
    }
    
    public List<SvyResultInfoDomain> selectSvyResultList(SvyResultInfoDomain domain) throws Exception {
    	//return svyResultInfoRepository.findBySvyIdAndUserIdOrderBySeq(domain.getSvyId(), domain.getUserId());
    	return null;
    }
}
