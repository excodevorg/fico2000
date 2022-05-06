package com.fas.model.repository;

import java.util.List;

import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.fas.model.fin.domain.FinFnamInfoDomain;

public interface FinFnamInfoRepository extends JpaRepository<FinFnamInfoDomain, String> {

	//사용자 ID, 사업자번호, 결산년으로 조회
	@Query("select u from FinFnamInfoDomain u where u.userid = ?1 and bzn = ?2 and stacYy = ?3 order by finSmdcd asc")
	public List<FinFnamInfoDomain> findByUseridAndBznAndStacYyOrderByFinSmdcdAsc(String userid, String bzn, String stacYy);
	
	//사용자 ID, 사업자번호
	@Query("select u from FinFnamInfoDomain u where u.userid = ?1 and bzn = ?2 order by stacYy desc")
	public List<FinFnamInfoDomain> findByUseridAndBznOrderByStacYyDesc(String userid, String bzn);
	
	//사용자 ID, 사업자번호
	@Query("select u from FinFnamInfoDomain u where u.userid = ?1 and bzn = ?2 order by stacYy desc")
	public List<FinFnamInfoDomain> findByUseridAndBznOrderByStacYyDesc(String userid, String bzn, Pageable paramPageable);	
	
	@Query("select u from FinFnamInfoDomain u where u.userid = ?1 and bzn = ?2 and stacYy = ?3 and finSmdcd = ?4")
	public FinFnamInfoDomain findByUseridAndBznAndStacYyAndFinSmdcd(String userid, String bzn, String stacYy, String finSmdcd);
	
}
