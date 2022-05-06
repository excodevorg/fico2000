package com.fas.model.repository;

import java.util.List;

import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.fas.model.fin.domain.AnalysisConDomain;

public interface AnalysisConRepository extends JpaRepository<AnalysisConDomain, String> {

	@Query("select u from AnalysisConDomain u where u.alyid = ?1")
	public AnalysisConDomain findByAlyid (String alyid);
	
	@Query("select u from AnalysisConDomain u where u.bzn = ?1 and u.delyn = 'N' order by frrgTs desc")
	public List<AnalysisConDomain> findByBznOrderByFrrgTsDesc (String bzn);
	
	@Query("select u from AnalysisConDomain u where u.bzn = ?1 and u.delyn = 'N' order by frrgTs desc")
	public List<AnalysisConDomain> findByBznOrderByFrrgTsDesc (String bzn, Pageable paramPageable);
	
	@Query("select u from AnalysisConDomain u where u.bzn = ?1 and u.userid = ?2 and u.delyn = 'N' order by frrgTs desc")
	public List<AnalysisConDomain> findByBznAndUseridOrderByFrrgTsDesc (String bzn, String userid);
	
	@Query("select u from AnalysisConDomain u where u.bzn = ?1 and u.userid = ?2 and u.delyn = 'N' order by frrgTs desc")
	public List<AnalysisConDomain> findByBznAndUseridOrderByFrrgTsDesc (String bzn, String userid, Pageable paramPageable);
	
	@Query("select u from AnalysisConDomain u where u.userid = ?1 and u.delyn = 'N' order by frrgTs desc")
	public List<AnalysisConDomain> findByUseridOrderByFrrgTsDesc (String userid);
	
	@Query("select u from AnalysisConDomain u where u.userid = ?1 and u.delyn = 'N' order by frrgTs desc")
	public List<AnalysisConDomain> findByUseridOrderByFrrgTsDesc (String userid, Pageable paramPageable);
	
	@Query("select u from AnalysisConDomain u where u.delyn = ?1 order by frrgTs desc")
	public List<AnalysisConDomain> findByDelYnOrderByFrrgTsDesc (String delYn);
	
	@Query("select u from AnalysisConDomain u where u.delyn = ?1 order by frrgTs desc")
	public List<AnalysisConDomain> findByDelYnOrderByFrrgTsDesc (String delYn, Pageable paramPageable);
	
}
