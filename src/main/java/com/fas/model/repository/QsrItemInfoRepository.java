package com.fas.model.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.fas.model.fin.domain.QsrItemInfoDomain;

public interface QsrItemInfoRepository extends JpaRepository<QsrItemInfoDomain, String> {

	//1) 검색조건 : 분석ID, 설문ID, 설문지유형코드, 삭제여부  (설문지 유형 : 현금흐름분석설문지(FAS030401), 재무투자분석설문지(FAS030402))
	@Query("select u from QsrItemInfoDomain u where u.qstrId = ?1 and u.lsqsTcd = ?2 and u.delYn = ?3 order by lprbmNo asc, sprbmNo asc")
	public List<QsrItemInfoDomain> findByQstrIdAndLsqsTcdAndDelYnOrderByLprbmNoAscSprbmNoAsc(String qstrId, String lsqsTcd, String delYn);
	
	//2) 검색조건 : 설문ID, 설문지유형코드, 아이템ID -> 단건만 조회 되도록 구현 (설문지 유형 : 현금흐름분석설문지(FAS030401), 재무투자분석설문지(FAS030402))
	@Query("select u from QsrItemInfoDomain u where u.qstrId = ?1 and u.lsqsTcd = ?2 and u.itemId = ?3")
	public QsrItemInfoDomain findByQstrIdAndLsqsTcdAndItemId(String qstrId, String lsqsTcd, String itemId);
	
}
