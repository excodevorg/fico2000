package com.fas.model.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.fas.model.com.domain.AuthCodeDomain;

public interface AuthCodeRepository extends JpaRepository<AuthCodeDomain, String> {

	public AuthCodeDomain findByAuthcode(String authcode);
	public List<AuthCodeDomain> findBySecurecode(String securecode);
	
}
