package com.fas.model.svy.dao;

import javax.annotation.Resource;

import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.fas.model.repository.SvyBaseInfoRepository;
import com.fas.model.svy.domain.SvyBaseInfoDomain;

@Repository("SvyBaseInfoDao")
public class SvyBaseInfoDao {
	
	/** Repository */
    @Resource(name="svyBaseInfoRepository")
    private SvyBaseInfoRepository svyBaseInfoRepository;
    
    //등록
    @Transactional
    public void insert(SvyBaseInfoDomain domain) throws Exception {
    	svyBaseInfoRepository.saveAndFlush(domain);
    }
    
    //수정
    @Transactional
    public void update(SvyBaseInfoDomain domain) throws Exception {
    	svyBaseInfoRepository.saveAndFlush(domain);
    }
    
    public SvyBaseInfoDomain selectSvyBaseInfo(SvyBaseInfoDomain domain)  throws Exception {
    	//return svyBaseInfoRepository.findBySvyId(domain.getSvyId());
    	return null;
    }

}
