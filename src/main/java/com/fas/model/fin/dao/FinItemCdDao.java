package com.fas.model.fin.dao;

import java.util.ArrayList;
import java.util.List;

import javax.annotation.Resource;

import org.springframework.data.domain.Page;
import org.springframework.stereotype.Repository;

import com.fas.cmmn.util.FasDateUtil;
import com.fas.cmmn.util.FasPagingUtil;
import com.fas.model.fin.domain.FinItemCdDomain;
import com.fas.model.repository.FinItemCdRepository;

@Repository("FinItemCdDao")
public class FinItemCdDao {

	/** Repository */  
    @Resource(name="finItemCdRepository")
    private FinItemCdRepository finItemCdRepository;
    
    public FinItemCdDomain selectFinItemCd(FinItemCdDomain domain) throws Exception {
    	return finItemCdRepository.findByFinSmdcd(domain.getFinSmdcd());
    }
    
    public int totalAllCnt() throws Exception {
    	return (int) finItemCdRepository.count();
    }
    
    public List<FinItemCdDomain> selectFinItemAllList() throws Exception {
    	
    	FasPagingUtil paging = new FasPagingUtil(0, (int) finItemCdRepository.count());
    	paging.setSort("finDcd", FasPagingUtil.ASC);
    	paging.setSort("finLrdvcd", FasPagingUtil.ASC);
    	paging.setSort("finMdvcd", FasPagingUtil.ASC);
    	paging.setSort("seqord", FasPagingUtil.ASC);
    	
    	Page<FinItemCdDomain> resultList = finItemCdRepository.findAll(paging.getPagingRequest());
    	
    	List<FinItemCdDomain> arrList = null;
    	
    	if (resultList != null) arrList = resultList.getContent();
    	
    	return arrList;
    	
    }
    
    public List<FinItemCdDomain> selectFinItemAllList(List<String> finSmdcdList) throws Exception {
    	
    	int size = 0;
    	
    	List<FinItemCdDomain> resultList = new ArrayList<FinItemCdDomain>();
    	
    	List<FinItemCdDomain> arrList = finItemCdRepository.findByFinSmdcd(finSmdcdList);
    	
    	if (arrList != null) size = arrList.size();
    	
    	if (size > 0) {
    		
    		FasPagingUtil paging = new FasPagingUtil(0, size);
        	paging.setSort("finDcd", FasPagingUtil.ASC);
        	paging.setSort("finLrdvcd", FasPagingUtil.ASC);
        	paging.setSort("finMdvcd", FasPagingUtil.ASC);
        	paging.setSort("seqord", FasPagingUtil.ASC);
    		
        	resultList = finItemCdRepository.findByFinSmdcd(finSmdcdList, paging.getPagingRequest());
    		
    	}
    	return resultList;
    }    
    
    //재무구분코드 
    public List<FinItemCdDomain> selectFinDcd(FinItemCdDomain domain) throws Exception {
    	return finItemCdRepository.findByFinDcd(domain.getFinDcd());
    }
    
    //대분류
    public List<FinItemCdDomain> seletFinLrdvcd(FinItemCdDomain domain) throws Exception {
    	return finItemCdRepository.findByFinLrdvcd(domain.getFinLrdvcd());
    }
    
    //중분류
    public List<FinItemCdDomain> selectFinMdvcd(FinItemCdDomain domain) throws Exception {
    	return finItemCdRepository.findByFinMdvcd(domain.getFinMdvcd());
    			
    }
    
    public void insertItemCd(FinItemCdDomain domain) throws Exception {
    	domain.setFrrgTs(FasDateUtil.getCurrentDate());
    	domain.setLastTs(FasDateUtil.getCurrentDate());
    	finItemCdRepository.saveAndFlush(domain);
    }
}
