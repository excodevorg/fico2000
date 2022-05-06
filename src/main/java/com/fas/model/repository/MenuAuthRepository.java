package com.fas.model.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

import com.fas.model.com.domain.MenuAuthDomain;

public interface MenuAuthRepository extends JpaRepository<MenuAuthDomain, String>{

	@Query("select u from MenuAuthDomain u where u.rolecode = ?1")
	public List<MenuAuthDomain> findByRolecode(String rolecode);
	
	@Modifying
	@Query("delete from MenuAuthDomain u where u.rolecode = ?1")
	public int deleteByRolecode(String rolecode);
	
}
