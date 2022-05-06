package com.fas.model.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.fas.model.com.domain.StoreInfoDomain;

public interface StoreInfoRepository  extends JpaRepository<StoreInfoDomain, String> {
	
	public StoreInfoDomain findByStoreName(String storeName);

}
