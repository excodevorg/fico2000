package com.fas.model.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.fas.model.com.domain.ProdFeatureInfoDomain;

public interface ProdFeatureInfoRepository extends JpaRepository<ProdFeatureInfoDomain, String> {

	public ProdFeatureInfoDomain findByProductId(String productId);
	
}
