package com.fas.model.svy.dao;

import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.fas.model.repository.SvyResponseInfoRepository;
import com.fas.model.svy.domain.SvyReponseInfoDomain;

@Repository("SvyReponseInfoDao")
public class SvyReponseInfoDao {

	/** Repository */
    @Resource(name="svyResponseInfoRepository")
    private SvyResponseInfoRepository svyResponseInfoRepository;
    
    //등록
    @Transactional
    public void insert(SvyReponseInfoDomain domain) throws Exception {
    	svyResponseInfoRepository.saveAndFlush(domain);
    }
    
    //수정
    @Transactional
    public void update(SvyReponseInfoDomain domain) throws Exception {
    	svyResponseInfoRepository.saveAndFlush(domain);
    }
    
    public List<SvyReponseInfoDomain> selectSvyResponseDetailList(SvyReponseInfoDomain domain) throws Exception {
    	//return svyResponseInfoRepository.findBySvyRepUnqNoAndUserIdOrderBySvyItmIdDesc(domain.getSvyRepUnqNo(), domain.getUserId());
    	return null;
    }
    
    public List<SvyReponseInfoDomain> selectSvyResponseList(SvyReponseInfoDomain domain) throws Exception {
    	//return svyResponseInfoRepository.findByUserIdAndSvyIdOrderBySvyRepUnqNoDesc(domain.getUserId(), domain.getSvyId());
    	return null;
    }
    
    
	
}
