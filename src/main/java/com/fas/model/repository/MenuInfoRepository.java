package com.fas.model.repository;

import java.util.List;

import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

import com.fas.model.com.domain.MenuInfoDomain;

public interface MenuInfoRepository extends JpaRepository<MenuInfoDomain, String>{

	public List<MenuInfoDomain> findByMenuNmContaining(String menuNm, Pageable p);
	
	public List<MenuInfoDomain> findByMenuNmContaining(String menuNm);
	
	public MenuInfoDomain findByMenuId(int menuId); 
	
	public List<MenuInfoDomain> findByUpperMenuId(int upperMenuId);
	
	
}
 