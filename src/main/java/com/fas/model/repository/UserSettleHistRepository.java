package com.fas.model.repository;

import java.math.BigDecimal;
import java.util.List;

import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.fas.model.com.domain.UserSettleHistDomain;

public interface UserSettleHistRepository extends JpaRepository<UserSettleHistDomain, String>{
	
	public UserSettleHistDomain findBySeqNo(BigDecimal seqNo);
	
	@Query("select u from UserSettleHistDomain u where u.userId = ?1")
	public List<UserSettleHistDomain> findByUserId(String userId);
	
	@Query("select u from UserSettleHistDomain u where u.userId = ?1 order by frrgTs desc")
	public List<UserSettleHistDomain> findByUserId(String userId, Pageable paramPageable);
	
	@Query("select u from UserSettleHistDomain u where u.storeOrderId = ?1")
	public UserSettleHistDomain findByOrderId(String storeOrderId);
	
	@Query("select max(u.seqNo) from UserSettleHistDomain u")
	public BigDecimal getMaxSeqNo();

}
