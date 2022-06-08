package com.fas.model.svy.dao;

import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.fas.model.repository.SvyItemDetailInfoRepository;
import com.fas.model.svy.domain.SvyItemDetailInfoDomain;

@Repository("SvyItemDetailInfoDao")
public class SvyItemDetailInfoDao {

	/** Repository */
    @Resource(name="svyItemDetailInfoRepository")
    private SvyItemDetailInfoRepository svyItemDetailInfoRepository;
    
    //등록
    @Transactional
    public void insert(SvyItemDetailInfoDomain domain) throws Exception {
    	svyItemDetailInfoRepository.saveAndFlush(domain);
    }
    
    //수정
    @Transactional
    public void update(SvyItemDetailInfoDomain domain) throws Exception {
    	svyItemDetailInfoRepository.saveAndFlush(domain);
    }
    
    public List<SvyItemDetailInfoDomain> selectSvyItemDetailList(SvyItemDetailInfoDomain domain) throws Exception {
    	return svyItemDetailInfoRepository.findBySvyIdAndSvyItmIdOrderByOrdAsc(domain.getSvyId(), domain.getSvyItmId());
    }
	
}
