package com.fas.model.repository;

import java.util.List;

import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

import com.fas.model.com.domain.BoardAdmDomain;

public interface BoardAdmRepository extends JpaRepository <BoardAdmDomain, String>{

	public List<BoardAdmDomain> findByBbsnameContaining(String bbsname, Pageable paramPageable);
	
	public List<BoardAdmDomain> findByBbsnameContaining(String bbsname);
	
	public BoardAdmDomain findByNum(int num);
}
