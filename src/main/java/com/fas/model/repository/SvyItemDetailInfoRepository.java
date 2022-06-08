package com.fas.model.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.fas.model.svy.domain.SvyItemDetailInfoDomain;

public interface SvyItemDetailInfoRepository  extends JpaRepository<SvyItemDetailInfoDomain, String> {

	@Query("select u from SvyItemDetailInfoDomain u where u.useYn = 'Y' and u.svyId = ?1 and u.svyItmId = ?2 order by u.ord asc")
	public List<SvyItemDetailInfoDomain> findBySvyIdAndSvyItmIdOrderByOrdAsc(String svyId, String svyItmId);
	
}
