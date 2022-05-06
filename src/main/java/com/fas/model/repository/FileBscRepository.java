package com.fas.model.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.fas.model.com.domain.FileBscDomain;

public interface FileBscRepository extends JpaRepository<FileBscDomain, String>{

	public FileBscDomain findByFlapMngmNo(String flapMngmNo);
	
}
