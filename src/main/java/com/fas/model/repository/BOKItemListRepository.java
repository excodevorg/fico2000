package com.fas.model.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.fas.model.com.domain.BOKItemListDomain;

public interface BOKItemListRepository extends JpaRepository <BOKItemListDomain, String> {

	//grpName >>> Group1 : 산업분류, Group2 : 통계항목, Group3 : 기업분류
	@Query("select u from BOKItemListDomain u where u.statCode = ?1 and u.grpName = ?2 order by u.itemCode")
	public List<BOKItemListDomain> findByStatCodeAndGrpNameOrderByItemCodeAsc(String statCode, String grpName);	
	
	@Query("select u from BOKItemListDomain u where u.statCode = ?1 and u.grpName = ?2 and u.itemCode = ?3")
	public BOKItemListDomain findByStatCodeAndGrpNameAndItemCode(String statCode, String grpName, String itemCode);
	
}
