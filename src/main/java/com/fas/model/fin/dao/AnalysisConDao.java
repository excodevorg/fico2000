package com.fas.model.fin.dao;

import java.util.ArrayList;
import java.util.List;

import javax.annotation.Resource;

import org.springframework.data.domain.Page;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.fas.cmmn.util.FasPagingUtil;
import com.fas.model.fin.domain.AnalysisConDomain;
import com.fas.model.repository.AnalysisConRepository;

@Repository("AnalysisConDao")
public class AnalysisConDao {

	/** Repository */
    @Resource(name="analysisConRepository")
    private AnalysisConRepository analysisConRepository;	
    
    //등록
    @Transactional
    public void insert(AnalysisConDomain domain) throws Exception {
    	analysisConRepository.saveAndFlush(domain);
    }  
    
    //수정
    @Transactional
    public void update(AnalysisConDomain domain) throws Exception {
    	analysisConRepository.saveAndFlush(domain);
    }
    
    //조회
    public AnalysisConDomain selectAnalysisCon(AnalysisConDomain domain) throws Exception {
    	AnalysisConDomain re = null;
    	re = analysisConRepository.findByAlyid(domain.getAlyid());
    	return re; 
    }
    
    public List<AnalysisConDomain> selectAnalysisConBznList(AnalysisConDomain domain) throws Exception {
    	return analysisConRepository.findByBznOrderByFrrgTsDesc(domain.getBzn());
    }
    
    public List<AnalysisConDomain> selectAnalysisConBznList(AnalysisConDomain domain, FasPagingUtil paging) throws Exception {
    	return analysisConRepository.findByBznOrderByFrrgTsDesc(domain.getBzn(), paging.getPagingRequest());
    }
    
    public List<AnalysisConDomain> selectAnalysisConBznUseridList(AnalysisConDomain domain) throws Exception {
    	return analysisConRepository.findByBznAndUseridOrderByFrrgTsDesc(domain.getBzn(), domain.getUserid());
    }
    
    public List<AnalysisConDomain> selectAnalysisConBznUseridList(AnalysisConDomain domain, FasPagingUtil paging) throws Exception {
    	return analysisConRepository.findByBznAndUseridOrderByFrrgTsDesc(domain.getBzn(), domain.getUserid(), paging.getPagingRequest());
    }
    
    public List<AnalysisConDomain> selectAnalysisConUseridList(AnalysisConDomain domain) throws Exception {
    	return analysisConRepository.findByUseridOrderByFrrgTsDesc(domain.getUserid());
    }
    
    public List<AnalysisConDomain> selectAnalysisConUseridList(AnalysisConDomain domain, FasPagingUtil paging) throws Exception {
    	return analysisConRepository.findByUseridOrderByFrrgTsDesc(domain.getUserid(), paging.getPagingRequest());
    }    
    
    public List<AnalysisConDomain> selectAnalysisConAllList(AnalysisConDomain domain) throws Exception {
    	return analysisConRepository.findByDelYnOrderByFrrgTsDesc("N");
    }
    
    public List<AnalysisConDomain> selectAnalysisConAllList(AnalysisConDomain domain, FasPagingUtil paging) throws Exception {
    	return analysisConRepository.findByDelYnOrderByFrrgTsDesc("N", paging.getPagingRequest());
    }
	
}
