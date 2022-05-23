package com.fas.model.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.fas.model.svy.domain.SvyItemInfoDomain;

public interface SvyItemInfoRepository extends JpaRepository<SvyItemInfoDomain, String> {

	@Query("select u from SvyItemInfoDomain u where u.useYn = 'Y' and u.svyId = ?1 order by u.ord asc")
	public List<SvyItemInfoDomain> findBySvyIdOrderByOrdAsc(String svyId);
	
}
