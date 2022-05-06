package com.fas.model.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.fas.model.com.domain.ProdInfoDomain;

public interface ProdInfoRepository  extends JpaRepository<ProdInfoDomain, String> {
	
	public ProdInfoDomain findByProductId(String productId);
	
	@Query("select p from ProdInfoDomain p")
	public List<ProdInfoDomain> findAll();
}
