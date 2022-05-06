package com.fas.model.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.fas.model.com.domain.BOKFinRatioDomain;

public interface BOKFinRatioRepository extends JpaRepository <BOKFinRatioDomain, String> {

	//grpName >>> Group1 : 산업분류, Group2 : 통계항목, Group3 : 기업분류
	@Query("select u from BOKFinRatioDomain u where u.itemCode = ?1 and u.tpbsClsfDcd = ?2 and u.enslDcd = ?3 and u.baseYear = ?4")
	public List<BOKFinRatioDomain> findByItemCodeAndTpbsClsfDcdAndEnslDcdAndBaseYear(String itemCode, String tpbsClsfDcd, String enslDcd, String baseYear);
	
	@Query("select u from BOKFinRatioDomain u where u.itemCode = ?1 and u.tpbsClsfDcd = ?2 and u.enslDcd = ?3 order by groupCode Asc, itemCode Asc, baseYear Desc")
	public List<BOKFinRatioDomain> findByItemCodeAndTpbsClsfDcdAndEnslDcdOrderByGroupCodeAscAndItemCodeAscBaseYearDesc(String itemCode, String tpbsClsfDcd, String enslDcd);
	
	@Query("select u from BOKFinRatioDomain u where  u.tpbsClsfDcd = ?1 and u.enslDcd = ?2 order by baseYear Asc, groupCode Asc, itemCode Asc")
	public List<BOKFinRatioDomain> findByTpbsClsfDcdAndEnslDcdOrderByBaseYearAscGroupCodeAscAndItemCodeAsc(String tpbsClsfDcd, String enslDcd);	
	
	@Query("select u from BOKFinRatioDomain u where  u.tpbsClsfDcd = ?1 and u.enslDcd = ?2 and u.baseYear = ?3 and u.groupCode = ?4 order by itemCode Asc")
	public List<BOKFinRatioDomain> findByTpbsClsfDcdAndEnslDcdBaseYearAndGroupCodeOrderByItemCodeAsc(String tpbsClsfDcd, String enslDcd, String baseYear, String groupCode);
	
	@Query("select u from BOKFinRatioDomain u where  u.tpbsClsfDcd = ?1 and u.enslDcd = ?2 and u.baseYear = ?3 order by groupCode Asc, itemCode Asc")
	public List<BOKFinRatioDomain> findByTpbsClsfDcdAndEnslDcdBaseYearOrderByGroupCodeAscItemCodeAsc(String tpbsClsfDcd, String enslDcd, String baseYear, String groupCode);
	
	@Query("select u from BOKFinRatioDomain u where  u.baseYear = ?1  order by statCode Asc, itemCode Asc, tpbsClsfDcd Asc")
	public List<BOKFinRatioDomain> findByBaseYearOrderByStatCodeAscItemCodeAscTpbsClsfDcdAsc(String baseYear);
}
