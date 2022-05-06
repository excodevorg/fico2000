package com.fas.model.repository;

import java.util.List;

import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.jpa.repository.Query;

import com.fas.model.com.domain.LcteInfoDomain;

public interface LcteInfoRepository  extends JpaRepository<LcteInfoDomain, String> {

	public List<LcteInfoDomain> findByLcteNmContaining(String lcteNm);
	public List<LcteInfoDomain> findByLcteNmContaining(String lcteNm, Pageable paramPageable);
	
	public LcteInfoDomain findByLcteUnqId(String lcteUnqId);
	
}
