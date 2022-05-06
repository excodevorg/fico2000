package com.fas.model.repository;

import java.util.List;

import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.fas.model.fin.domain.CorporationDomain;

public interface CorporationRepository extends JpaRepository<CorporationDomain, String> {
	
	@Query("select u from CorporationDomain u where u.userid = ?1 and u.bzn = ?2")
	public CorporationDomain findByUseridAndBzn (String userid, String bzn);
	@Query("select u from CorporationDomain u where u.enslDcd != ?1 order by frrgTs desc")
	public List<CorporationDomain> findByEnslDcdOrderByFrrgTs(String enslDcd);
	@Query("select u from CorporationDomain u where u.enslDcd != ?1 order by frrgTs desc")
	public List<CorporationDomain> findByEnslDcdOrderByFrrgTs(String enslDcd, Pageable paramPageable);
	public List<CorporationDomain> findByNameContaining (String name, Pageable paramPageable);
	public List<CorporationDomain> findByNameContaining (Pageable paramPageable);
	public List<CorporationDomain> findByNameContaining (String name);
	@Query("select u from CorporationDomain u where u.userid = ?1 order by frrgTs desc")
	public List<CorporationDomain> findByUseridOrderByFrrgTs(String userid);
	@Query("select u from CorporationDomain u where u.userid = ?1 order by frrgTs desc")
	public List<CorporationDomain> findByUseridOrderByFrrgTs(String userid, Pageable paramPageable);
	@Query("select u from CorporationDomain u where u.userid = ?1 and u.name like '%?2%' order by frrgTs desc")
	public List<CorporationDomain> findByUseridAndNameLikeOrderByFrrgTs(String userid, String name);
	@Query("select u from CorporationDomain u where u.userid = ?1 and u.name like '%?2%' order by frrgTs desc")
	public List<CorporationDomain> findByUseridAndNameLikeOrderByFrrgTs(String userid, String name, Pageable paramPageable);
}
