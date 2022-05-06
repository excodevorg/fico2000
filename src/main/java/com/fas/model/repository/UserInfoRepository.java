package com.fas.model.repository;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.repository.JpaRepository;

import com.fas.model.com.domain.UserInfoDomain;

public interface UserInfoRepository  extends JpaRepository<UserInfoDomain, String> {

	public final static String FIND_BY_USERID_QUERY = "SELECT p " +
	                                                   "FORM TB_USER_INFO p " +
			                                           "WHERE p.userId = :userId " +
	                                                   "  AND p.userPwd = :userPwd "; 
	
	public List<UserInfoDomain> findByUserIdContaining(String userId);
	
	public List<UserInfoDomain> findByUserNmContaining(String userNm);
	
	public Page<UserInfoDomain> findByUserNmContaining(String userNm, Pageable paramPageable);
	
	public List<UserInfoDomain> findByFacebookid(String facebookid);
	
	public List<UserInfoDomain> findByTwitterid(String twitterid);
	
	public List<UserInfoDomain> findByKakaoid(String kakaoid);
	
	public List<UserInfoDomain> findByGoogleid(String googleid);
	
	public UserInfoDomain findByUserId(String userId);
	
	
}
