package com.fas.model.repository;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.jpa.repository.Query;

import com.fas.model.com.domain.CodeInfoDomain;
import com.fas.model.repository.pk.CodeInfoPK;

public interface CodeInfoRepository extends JpaRepository<CodeInfoDomain, String>{

	@Query("select u from CodeInfoDomain u where u.domainCode = ?1")
	public List<CodeInfoDomain> findByDomainCode(String domainCode);
	
	@Query("select u from CodeInfoDomain u where u.domainCode is not null")
	public List<CodeInfoDomain> findAll();
	public List<CodeInfoDomain> findByDomainCodeNmContaining(String domainCodeNm);
	public List<CodeInfoDomain> findByDomainCodeNmContaining(String domainCodeNm, Pageable paramPageable);
	
	@Query("select u from CodeInfoDomain u where u.domainCode = ?1 and u.code = ?2")
	public CodeInfoDomain findByDomainCodeAndCode(String domainCode, String Code);
	
	
}
