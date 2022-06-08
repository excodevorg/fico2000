package com.fas.model.svy.dao;

import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.fas.model.repository.SvyItemInfoRepository;
import com.fas.model.svy.domain.SvyItemInfoDomain;

@Repository("SvyItemInfoDao")
public class SvyItemInfoDao {

	/** Repository */
    @Resource(name="svyItemInfoRepository")
    private SvyItemInfoRepository svyItemInfoRepository;
    
    //등록
    @Transactional
    public void insert(SvyItemInfoDomain domain) throws Exception {
    	svyItemInfoRepository.saveAndFlush(domain);
    }
    
    //수정
    @Transactional
    public void update(SvyItemInfoDomain domain) throws Exception {
    	svyItemInfoRepository.saveAndFlush(domain);
    }
    
    public List<SvyItemInfoDomain> selectSvyItemList(SvyItemInfoDomain domain) throws Exception {
    	//return svyItemInfoRepository.findBySvyIdOrderByOrdAsc(domain.getSvyId());
    	return null;
    }
	
}
