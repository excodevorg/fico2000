package com.fas.model.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.fas.model.com.domain.UserCompanyInfoDomain;

public interface UserCompanyInfoRepository extends JpaRepository<UserCompanyInfoDomain, String> {
	
	public UserCompanyInfoDomain findByBzn(String bzn);

}
