package com.fas.model.com.dao;

import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Repository;

import com.fas.model.com.domain.UserRoleDomain;
import com.fas.model.repository.UserRoleRepository;

@Repository("UserRoleDao")
public class UserRoleDao {

	/** Repository */
    @Resource(name="userRoleRepository")
    private UserRoleRepository userRoleRepository;
	
    //등록  
    public void insert(UserRoleDomain domain) throws Exception {
    	userRoleRepository.saveAndFlush(domain);
    }
    
    public void insert(List<UserRoleDomain> arrList) throws Exception {
    	for (UserRoleDomain roles : arrList) {
    		insert(roles);
    	}
    }
    
    //수정 
    public void update(UserRoleDomain domain) throws Exception {
    	userRoleRepository.saveAndFlush(domain);
    }
    
    //조회 (List)
    public List<UserRoleDomain> selectList(UserRoleDomain domain) throws Exception {
    	return userRoleRepository.findByUseridOrderByRoleCodeDesc(domain.getUserid());
    }
    
    //삭제
    public void deleteUserId(UserRoleDomain domain) throws Exception {
    	userRoleRepository.delete(domain);
    }
     
}
