package com.fas.model.fin.dao;

import java.util.ArrayList;
import java.util.List;

import javax.annotation.Resource;

import org.springframework.data.domain.Page;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.fas.cmmn.util.FasPagingUtil;
import com.fas.model.fin.domain.CorporationDomain;
import com.fas.model.repository.CorporationRepository;
import com.fas.web.cmmn.util.StringUtil;

@Repository("CorporationDao")
public class CorporationDao {

	/** Repository */  
    @Resource(name="corporationRepository")
    private CorporationRepository corporationRepository;	
     
    //등록
    @Transactional
    public void insert(CorporationDomain domain) throws Exception {
    	corporationRepository.saveAndFlush(domain);
    }
    
    //수정
    @Transactional
    public void update(CorporationDomain domain) throws Exception {
    	corporationRepository.saveAndFlush(domain);
    }
    
    //삭제
    @Transactional
    public void delete(CorporationDomain domain) throws Exception {
    	corporationRepository.delete(domain);
    }   
    
    //조회
    public CorporationDomain selectCorporation(CorporationDomain domain) throws Exception {
    	CorporationDomain re = null;
    	
    	re = corporationRepository.findByUseridAndBzn(domain.getUserid(), domain.getBzn());
    	
    	return re; 
    }
    
    public List<CorporationDomain> selectCorporationList(CorporationDomain domain) throws Exception {
    	if (StringUtil.isEmpty(domain.getName())) {
    		return corporationRepository.findByUseridOrderByFrrgTs(domain.getUserid());
    	} else {
    		return corporationRepository.findByUseridAndNameLikeOrderByFrrgTs(domain.getUserid(), domain.getName());
    	}
    	
    }
    
    public List<CorporationDomain> selectCorporationList(CorporationDomain domain, FasPagingUtil paging) throws Exception {
    	paging.setSort("frrgTs", FasPagingUtil.DESC);
    	
    	if (StringUtil.isEmpty(domain.getName())) {
    		return corporationRepository.findByUseridOrderByFrrgTs(domain.getUserid(), paging.getPagingRequest());
    	} else {
    		return corporationRepository.findByUseridAndNameLikeOrderByFrrgTs(domain.getUserid(), domain.getName(), paging.getPagingRequest());
    	}
    	
    }
    
    public List<CorporationDomain> selectCorporationAllList(CorporationDomain domain) throws Exception {
    	if (StringUtil.isEmpty(domain.getName())) {
    		return corporationRepository.findByEnslDcdOrderByFrrgTs("K");
    	} else {
    		return corporationRepository.findByNameContaining(domain.getName());
    	}
    }
    
    public List<CorporationDomain> selectCorporationAllList(CorporationDomain domain, FasPagingUtil paging) throws Exception {
    	paging.setSort("frrgTs", FasPagingUtil.DESC);
    	
    	if (StringUtil.isEmpty(domain.getName())) {
    		return corporationRepository.findByEnslDcdOrderByFrrgTs("K",paging.getPagingRequest());
    	} else {
    		return corporationRepository.findByNameContaining(domain.getName(), paging.getPagingRequest());
    	}
    }
	
}
