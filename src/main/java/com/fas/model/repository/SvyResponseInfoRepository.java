package com.fas.model.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.fas.model.svy.domain.SvyReponseInfoDomain;

public interface SvyResponseInfoRepository  extends JpaRepository<SvyReponseInfoDomain, String>{

	/***********
	@Query("select u from SvyReponseInfoDomain u where u.userId = ?1 and u.svyId = ?2 order by u.svyRepUnqNo desc")
	public List<SvyReponseInfoDomain> findByUserIdAndSvyIdOrderBySvyRepUnqNoDesc(String userId, String svyId);
	
	@Query("select u from SvyReponseInfoDomain u where u.svyRepUnqNo = ?1 and u.userId = ?2 order by u.svyItmId desc")
	public List<SvyReponseInfoDomain> findBySvyRepUnqNoAndUserIdOrderBySvyItmIdDesc(String svyRepUnqNo, String userId);
	*************/
}