package com.fas.model.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.fas.model.fin.domain.AlyFnamInfoDomain;

public interface AnalysisFnamInfoRepository extends JpaRepository<AlyFnamInfoDomain, String> {

	//1) User ID, BZN로 분석 내용 조회
	@Query("select u from AlyFnamInfoDomain u where u.alyid = ?1 and u.userid = ?2 and u.bzn = ?3 and u.delyn = 'N' order by stacYy DESC")
	public List<AlyFnamInfoDomain> findByAlyidAndUseridAndBznOrderByStacYyDesc(String alyid, String userid, String bzn);
	
	@Query("select u from AlyFnamInfoDomain u where u.alyid = ?1 and u.userid = ?2 and u.bzn = ?3 and u.stacYy = ?4")
	public AlyFnamInfoDomain findByAlyidAndUseridAndBznAndStacYy(String alyid,String userid, String bzn, String stacYy);	
	
	
}
