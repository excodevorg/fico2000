package com.fas.model.com.dao;

import javax.annotation.Resource;

import com.fas.model.com.domain.ProdFeatureInfoDomain;
import com.fas.model.repository.ProdFeatureInfoRepository;

public class ProdFeatureInfoDao {

	/** Repository */
    @Resource(name="prodFeatureInfoRepository")
    private ProdFeatureInfoRepository prodFeatureInfoRepository;
    
    public ProdFeatureInfoDomain select(ProdFeatureInfoDomain domain) throws Exception {
    	return prodFeatureInfoRepository.findByProductId(domain.getProductId());
    }
	
}
