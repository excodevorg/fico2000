package com.fas.model.repository;

import java.util.List;

import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.fas.model.com.domain.BOKTableListDomain;

public interface BOKTableListRepository extends JpaRepository <BOKTableListDomain, String> {

	//부모코드 : 000Y127 (기업경영분석) 조회
	@Query("select u from BOKTableListDomain u where u.pStatCode = ?1 order by u.statCode")
	public List<BOKTableListDomain> findByPStatCodeOrderByStatCodeAsc(String pStatCode);
	
	@Query("select u from BOKTableListDomain u where u.pStatCode = ?1 and u.statCode = ?2")
	public BOKTableListDomain findByPStatCodeAndStatCode(String pStatCode, String statCode);
	
}
