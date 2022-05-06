package com.fas.model.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.fas.model.com.domain.BOKDataListDomain;

public interface BOKDataListRepository extends JpaRepository <BOKDataListDomain, String> {

	//Item1 : 업종코드 , Item2 : 항목코드 , Item3 : 기업분류코드
	@Query("select u from BOKDataListDomain u where u.statCode = ?1 and u.itemCode1 = ?2 and u.itemCode3 = ?3 order by u.itemCode2")
	public List<BOKDataListDomain> findByStatCodeAndItemCode1AndItemCode3OrderByItemCode2Asc(String statCode, String itemCode1, String itemCode3);	
	
	@Query("select u from BOKDataListDomain u where u.statCode = ?1 and u.itemCode1 = ?2 and u.itemCode2 = ?3 and u.itemCode3 = ?4 and u.time = ?5")
	public BOKDataListDomain findByStatCodeAndItemCode1AndItemCode2AndItemCode3AndTime(String statCode, String itemCode1, String itemCode2, String itemCode3, String time);

}
