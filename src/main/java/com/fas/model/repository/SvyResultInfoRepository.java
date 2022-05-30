package com.fas.model.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.fas.model.svy.domain.SvyResultInfoDomain;

public interface SvyResultInfoRepository  extends JpaRepository<SvyResultInfoDomain, String>{

	@Query("select u from SvyResultInfoDomain u where u.userId = ?1 and u.svyId = ?2 order by u.seq desc")
	public List<SvyResultInfoDomain> findByUserIdAndSvyIdOrderBySeqDesc(String userId, String svyId);
	
	@Query("select u from SvyResultInfoDomain u where u.svyId = ?1 and u.userId = ?2 and u.lastYn = 'Y' order by u.seq desc")
	public List<SvyResultInfoDomain> findBySvyIdAndUserIdOrderBySeq(String svyId, String userId);
	
}
