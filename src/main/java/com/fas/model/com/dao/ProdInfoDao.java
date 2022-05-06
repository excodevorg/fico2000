package com.fas.model.com.dao;

import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Repository;

import com.fas.model.com.domain.ProdInfoDomain;
import com.fas.model.repository.ProdInfoRepository;

@Repository("ProdInfoDao")
public class ProdInfoDao {

	/** Repository */
    @Resource(name="prodInfoRepository")
    private ProdInfoRepository prodInfoRepository;
    
    public ProdInfoDomain select(ProdInfoDomain domain) throws Exception {
    	return prodInfoRepository.findByProductId(domain.getProductId());
    }
    
    public List<ProdInfoDomain> selectAll() throws Exception {
    	return prodInfoRepository.findAll();
    }
	
}
