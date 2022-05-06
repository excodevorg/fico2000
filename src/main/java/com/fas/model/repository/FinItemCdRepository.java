package com.fas.model.repository;

import java.util.List;

import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.fas.model.fin.domain.FinItemCdDomain;

public interface FinItemCdRepository extends JpaRepository<FinItemCdDomain, String> {

	@Query("select u from FinItemCdDomain u where u.finSmdcd = ?1")
	public FinItemCdDomain findByFinSmdcd(String finSmdcd);
	
	@Query("select u from FinItemCdDomain u where u.finDcd = ?1")
	public List<FinItemCdDomain> findByFinDcd(String finDcd);
	
	@Query("select u from FinItemCdDomain u where u.finLrdvcd = ?1")
	public List<FinItemCdDomain> findByFinLrdvcd(String finLrdvcd);
	
	@Query("select u from FinItemCdDomain u where u.finMdvcd = ?1")
	public List<FinItemCdDomain> findByFinMdvcd(String finMdvcd);
	
	@Query("select u from FinItemCdDomain u where u.finSmdcd in (?1)")
	public List<FinItemCdDomain> findByFinSmdcd(List<String> finSmdcd);
	
	@Query("select u from FinItemCdDomain u where u.finSmdcd in (?1)")
	public List<FinItemCdDomain> findByFinSmdcd(List<String> finSmdcd, Pageable request);
}
