package com.fas.model.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.fas.model.svy.domain.SvyBaseInfoDomain;

public interface SvyBaseInfoRepository extends JpaRepository<SvyBaseInfoDomain, String> {

	/***
	@Query("select u from SvyBaseInfoDomain u where u.useYn = 'Y' and u.svyId = ?1")
	public SvyBaseInfoDomain findBySvyId(String svyId);
	****/
	
	
}
