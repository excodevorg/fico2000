package com.fas.model.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

import com.fas.model.com.domain.FileDtlDomain;

public interface FileDtlRepository extends JpaRepository<FileDtlDomain, String>{
	
	@Query("select u from FileDtlDomain u where u.delYn != 'Y' and u.flapMngmNo = ?1")
	public List<FileDtlDomain> findByFlapMngmNo(String flapMngmNo);
	
	@Query("select u from FileDtlDomain u where u.delYn != 'Y' and u.flapMngmNo = ?1 and u.flapDtlSrn = ?2")
	public FileDtlDomain findByFlapMngmNoAndFlapDtlSrn(String flapMngmNo, int flapDtlSrn);
	
	@Query("select u from FileDtlDomain u where u.flapMngmNo = ?1 order by u.flapDtlSrn desc limit 1")
	public List<FileDtlDomain> findTopByFlapMngmNoOrderByFlapDtlSrnDesc(String flapMngmNo);
	
	@Modifying
	@Query("delete from FileDtlDomain u where u.flapMngmNo = ?1")
	public int deleteByFlapMngmNo(String flapMngmNo);
	
}
