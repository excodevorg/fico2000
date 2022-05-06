package com.fas.model.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.fas.model.fin.domain.QsrBaseInfoDomain;

public interface QsrBaseInfoRepository extends JpaRepository<QsrBaseInfoDomain, String> {

	//1) 검색조건 : 설문지유형코드, 삭제여부 -> 단건만 조회 되도록 구현 (설문지 유형 : 현금흐름분석설문지(FAS030401), 재무투자분석설문지(FAS030402))
	@Query("select u from QsrBaseInfoDomain u where u.lsqsTcd = ?1 and u.delYn = ?2")
	public QsrBaseInfoDomain findByLsqsTcdAndDelYn(String lsqsTcd, String delYn);
}
