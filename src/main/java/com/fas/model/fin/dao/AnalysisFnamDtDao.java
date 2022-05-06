package com.fas.model.fin.dao;

import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.fas.model.fin.domain.AlyFnamDtDomain;
import com.fas.model.repository.AnalysisFnamDtRepository;

@Repository("AnalysisFnamDtDao")
public class AnalysisFnamDtDao {

	/** Repository */
    @Resource(name="analysisFnamDtRepository")
    private AnalysisFnamDtRepository analysisFnamDtRepository;

	//insert
    //1) insert
    @Transactional
    public void insert(AlyFnamDtDomain domain) throws Exception {
    	analysisFnamDtRepository.saveAndFlush(domain);
    }
	
	//update
    @Transactional
    public void update(AlyFnamDtDomain domain) throws Exception {
    	analysisFnamDtRepository.saveAndFlush(domain);
    }	
    
	//update
    @Transactional
    public void delete(AlyFnamDtDomain domain) throws Exception {
    	analysisFnamDtRepository.delete(domain);
    }	
    
	//update
    @Transactional
    public void delete(List<AlyFnamDtDomain> domainList) throws Exception {
    	analysisFnamDtRepository.delete(domainList);
    }
	
	//selectList
	public List<AlyFnamDtDomain> selectList(AlyFnamDtDomain domain) throws Exception {
		return analysisFnamDtRepository.findByAlyidAndUseridAndBznAndStacYyOrderByFinSmdcdAsc(domain.getAlyid(), domain.getUserid(), domain.getBzn(), domain.getStacYy());
	}
	
	//selectList
	public List<AlyFnamDtDomain> selectList01(AlyFnamDtDomain domain) throws Exception {
		return analysisFnamDtRepository.findByAlyidAndUseridAndBznOrderByStacYyDesc(domain.getAlyid(), domain.getUserid(), domain.getBzn());
	}
	
	//select
	public AlyFnamDtDomain select(AlyFnamDtDomain domain) throws Exception {
		return analysisFnamDtRepository.findByAlyidAndUseridAndBznAndStacYyAndFinSmdcd(domain.getAlyid(), domain.getUserid(), domain.getBzn(), domain.getStacYy(), domain.getFinSmdcd());
	}
	
}
