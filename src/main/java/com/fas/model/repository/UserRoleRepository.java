package com.fas.model.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.fas.model.com.domain.UserRoleDomain;

public interface UserRoleRepository  extends JpaRepository<UserRoleDomain, String> {
	
	@Query("select u from UserRoleDomain u where u.userid = ?1 and u.rolecode = ?2")
	public List<UserRoleDomain> findByUseridAndRolecode(String userid, String rolecode);
	
	@Query("select u from UserRoleDomain u where u.userid = ?1 order by u.rolecode desc")
	public List<UserRoleDomain> findByUseridOrderByRoleCodeDesc(String userid);
	
	@Query("delete from UserRoleDomain u where u.userid = ?1")
	public Long deleteByUserid(String userid);
}
