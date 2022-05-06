package com.fas.model.com.dao;

import java.util.ArrayList;
import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Repository;

import com.fas.model.com.domain.MenuAuthDomain;
import com.fas.model.repository.MenuAuthRepository;

@Repository("MenuAuthDao")
public class MenuAuthDao {
	
	/** Repository */
    @Resource(name="menuAuthRepository")
    private MenuAuthRepository menuAuthRepository;
	
	public void insert(MenuAuthDomain param) {
		menuAuthRepository.saveAndFlush(param);
	}
	
	public void insert(List<MenuAuthDomain> param) {
		menuAuthRepository.save(param);
	}
	
	public void update(MenuAuthDomain param) {
		menuAuthRepository.saveAndFlush(param);
	}
	
	public List<MenuAuthDomain> selectRolecodeList(MenuAuthDomain param) {
		return menuAuthRepository.findByRolecode(param.getRolecode());
	}
	
	public void delete(MenuAuthDomain param) {
		menuAuthRepository.delete(param);
	}
	
	public void deleteRolecode(MenuAuthDomain param) {
		menuAuthRepository.deleteByRolecode(param.getRolecode());
	}
}
