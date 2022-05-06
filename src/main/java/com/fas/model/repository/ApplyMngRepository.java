package com.fas.model.repository;

import java.util.List;

import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.fas.model.edu.domain.ApplyMngDomain;

public interface ApplyMngRepository extends JpaRepository <ApplyMngDomain, String> {
	
	@Query("select u from ApplyMngDomain u where u.lcteUnqId = ?1 order by frrgTs desc")
	public List<ApplyMngDomain> findByLcteUnqIdOrderByFrrgTsDesc(String lcteUnqId);
	
	@Query("select u from ApplyMngDomain u where u.lcteUnqId = ?1")
	public List<ApplyMngDomain> findByLcteUnqId(String lcteUnqId, Pageable paramPageable);
	
	@Query("select u from ApplyMngDomain u where u.userId = ?1 order by frrgTs desc")
	public List<ApplyMngDomain> findByUserIdOrderByFrrgTsDesc(String userId);
	
	@Query("select u from ApplyMngDomain u where u.userId = ?1 and applyPrgScd = ?2 and completeYn = ?3 order by frrgTs desc")
	public List<ApplyMngDomain> findByUserIdAndApplyPrgScdAndCompleteYnOrderByFrrgTsDesc(String userId, String applyPrgScd, String completeYn);	
	
	@Query("select u from ApplyMngDomain u where u.userId = ?1 and completeYn = ?2 order by frrgTs desc")
	public List<ApplyMngDomain> findByUserIdAndApplyCompleteYnOrderByFrrgTsDesc(String userId, String completeYn);
	
	@Query("select u from ApplyMngDomain u where u.lcteUnqId = ?1 and u.userId = ?2")
	public ApplyMngDomain findByLcteUnqIdAndUserId(String lcteUnqId, String userId);
	
}
