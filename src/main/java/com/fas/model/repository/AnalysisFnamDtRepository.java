package com.fas.model.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.fas.model.fin.domain.AlyFnamDtDomain;

public interface AnalysisFnamDtRepository extends JpaRepository<AlyFnamDtDomain, String> {

	//1) Alyid, Userid, Bzn, StacYy 
	@Query("select u from AlyFnamDtDomain u where u.alyid = ?1 and u.userid = ?2 and u.bzn = ?3 and u.stacYy = ?4 order by stacYy DESC")
	public List<AlyFnamDtDomain> findByAlyidAndUseridAndBznAndStacYyOrderByFinSmdcdAsc(String alyid, String userid, String bzn, String stacYy);
	
	//2) Alyid, Userid, Bzn 
	@Query("select u from AlyFnamDtDomain u where u.alyid = ?1 and u.userid = ?2 and u.bzn = ?3 order by stacYy DESC")
	public List<AlyFnamDtDomain> findByAlyidAndUseridAndBznOrderByStacYyDesc(String alyid, String userid, String bzn);	
	
	//3) Alyid, Userid, Bzn, stacYy, finSmdcd
	@Query("select u from AlyFnamDtDomain u where u.alyid = ?1 and u.userid = ?2 and u.bzn = ?3 and u.stacYy = ?4 and u.finSmdcd = ?5")
	public AlyFnamDtDomain findByAlyidAndUseridAndBznAndStacYyAndFinSmdcd(String alyid, String userid, String bzn, String stacYy, String finSmdcd);
	
	
}
 