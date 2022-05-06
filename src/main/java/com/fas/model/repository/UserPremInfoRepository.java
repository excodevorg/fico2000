package com.fas.model.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.fas.model.com.domain.UserPremInfoDomain;

public interface UserPremInfoRepository extends JpaRepository<UserPremInfoDomain, String> {
	
	public UserPremInfoDomain findByUserId(String userId);
	
}
