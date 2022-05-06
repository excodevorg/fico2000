package com.fas.model.fin.dao;

import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.fas.cmmn.util.FasDateUtil;
import com.fas.cmmn.util.FasPagingUtil;
import com.fas.model.fin.domain.FinFnamInfoDomain;
import com.fas.model.repository.FinFnamInfoRepository;

@Repository("FinFnamInfoDao")
public class FinFnamInfoDao {

	/** Repository */  
    @Resource(name="finFnamInfoRepository")
    private FinFnamInfoRepository finFnamInfoRepository;
   
    //등록
    @Transactional
    public void insert(FinFnamInfoDomain domain) throws Exception {
    	
    	if (domain.getFrrgTs() == null) domain.setFrrgTs(FasDateUtil.getCurrentDate());
    	
    	if (domain.getLastTs() == null) domain.setLastTs(FasDateUtil.getCurrentDate());
    	
    	finFnamInfoRepository.saveAndFlush(domain);
    	
    }
    
    //수정
    @Transactional
    public void update(FinFnamInfoDomain domain) throws Exception {
    	
    	if (domain.getLastTs() == null) domain.setLastTs(FasDateUtil.getCurrentDate());
    	finFnamInfoRepository.saveAndFlush(domain);
    	
    }
    
    //조회 (사업자번호, userid)
    public List<FinFnamInfoDomain> selectFinFnamStacYyList(FinFnamInfoDomain domain) throws Exception {
    	return finFnamInfoRepository.findByUseridAndBznOrderByStacYyDesc(domain.getUserid(), domain.getBzn());
    }
    
    //조회 (사업자번호, userid)
    public List<FinFnamInfoDomain> selectFinFnamStacYyList(FinFnamInfoDomain domain, FasPagingUtil paging) throws Exception {
    	return finFnamInfoRepository.findByUseridAndBznOrderByStacYyDesc(domain.getUserid(), domain.getBzn(), paging.getPagingRequest());
    }    
    
    //조회
    public List<FinFnamInfoDomain> selectFinFnamInfoList(FinFnamInfoDomain domain) throws Exception {
    	return finFnamInfoRepository.findByUseridAndBznAndStacYyOrderByFinSmdcdAsc(domain.getUserid(), domain.getBzn(), domain.getStacYy());
    }
    
    //조회 (단건)
    public FinFnamInfoDomain selectFinFnamInfo(FinFnamInfoDomain domain) throws Exception {
    	return finFnamInfoRepository.findByUseridAndBznAndStacYyAndFinSmdcd(domain.getUserid(), domain.getBzn(), domain.getStacYy(), domain.getFinSmdcd());
    }
    
    //삭제
    @Transactional
    public void delete(FinFnamInfoDomain domain) throws Exception {
    	finFnamInfoRepository.delete(domain);
    }
	
}
