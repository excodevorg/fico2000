package com.fas.model.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.fas.model.fin.domain.QsrRsltInfoDomain;

public interface QsrRsltInfoRepository extends JpaRepository<QsrRsltInfoDomain, String> {

	//1) 검색조건 : 분석ID, 설문ID, 설문지유형코드, 항목ID, 삭제여부, 항목ID  (설문지 유형 : 현금흐름분석설문지(FAS030401), 재무투자분석설문지(FAS030402))
	@Query("select u from QsrRsltInfoDomain u where u.alyid = ?1 and u.qstrId = ?2 and u.lsqsTcd = ?3 and u.itemId = ?4 and u.delYn = ?5 order by lprbmNo asc, sprbmNo asc, baseYm asc")
	public List<QsrRsltInfoDomain> findByAlyidAndQstrIdAndLsqsTcdAndItemIdAndDelYnOrderByLprbmNoAscSprbmNoAscBaseYmAsc(String alyid, String qstrId, String lsqsTcd, String itemId, String delYn); 

	//1) 검색조건 : 분석ID, 설문지유형코드, 삭제여부, 항 (설문지 유형 : 현금흐름분석설문지(FAS030401), 재무투자분석설문지(FAS030402))
	@Query("select u from QsrRsltInfoDomain u where u.alyid = ?1 and u.lsqsTcd = ?2 and u.delYn = ?3 order by lprbmNo asc, sprbmNo asc, baseYm asc")
	public List<QsrRsltInfoDomain> findByAlyidAndLsqsTcdAndDelYnOrderByLprbmNoAscSprbmNoAscBaseYmAsc(String alyid, String lsqsTcd, String delYn);
	
	//2) 검색조건 : 분석ID, 설문ID, 설문지유형코드, 항목ID, 삭제여부, 항목ID, 결과 ID (설문지 유형 : 현금흐름분석설문지(FAS030401), 재무투자분석설문지(FAS030402))
	@Query("select u from QsrRsltInfoDomain u where u.alyid = ?1 and u.qstrId = ?2 and u.lsqsTcd = ?3 and u.itemId = ?4 and u.rsltId = ?5")
	public QsrRsltInfoDomain findByAlyidAndQstrIdAndLsqsTcdAndItemIdAndRsltId(String alyid, String qstrId, String lsqsTcd, String itemId, String rsltId); 
	
	//3) 검색조건 : 분석ID, 설문ID, 설문지유형코드, 항목ID, 삭제여부, 항목ID, 결과 ID (설문지 유형 : 현금흐름분석설문지(FAS030401), 재무투자분석설문지(FAS030402))
	@Query("select u from QsrRsltInfoDomain u where u.alyid = ?1 and u.qstrId = ?2 and u.lsqsTcd = ?3 and u.itemId = ?4 order by kindNm asc, baseYm asc")
	public List<QsrRsltInfoDomain> findByAlyidAndQstrIdAndLsqsTcdAndItemIdOrderByKindNmAscBaseYmAsc(String alyid, String qstrId, String lsqsTcd, String itemId); 
				

}