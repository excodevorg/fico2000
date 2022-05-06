package com.fas.model.repository;

import java.util.List;

import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.fas.model.com.domain.BoardInfoDomain;

public interface BoardInfoRepository extends JpaRepository <BoardInfoDomain, String>{
	
	@Query("select u from BoardInfoDomain u where u.delYn != 'Y' and u.replyNo = 0 and u.code = ?1 and u.title like ?2")
	public List<BoardInfoDomain> findByCodeAndTitleLike(String code, String title, Pageable paramPageable);
	
	@Query("select u from BoardInfoDomain u where u.delYn != 'Y' and u.replyNo = 0 and u.code = ?1 and u.userId = ?2 and u.title like ?3")
	public List<BoardInfoDomain> findByCodeAndUserIdAndTitleLike(String code, String userId, String title, Pageable paramPageable);
	
	@Query("select u from BoardInfoDomain u where u.delYn != 'Y' and u.replyNo = 0 and u.code = ?1 and u.userId = ?2 and u.title like ?3")
	public List<BoardInfoDomain> findByCodeAndUserIdAndTitleLike(String code, String userId, String title);	
	
	@Query("select u from BoardInfoDomain u where u.delYn != 'Y' and u.replyNo = 0 and u.code = ?1 and u.title like ?2")
	public List<BoardInfoDomain> findByCodeAndTitleLike(String code, String title);
		
	@Query("select u from BoardInfoDomain u where u.delYn != 'Y' and u.replyNo = 0 and u.code = ?1")
	public List<BoardInfoDomain> findByCode(String code, Pageable paramPageable);
	@Query("select u from BoardInfoDomain u where u.delYn != 'Y' and u.replyNo = 0 and u.code = ?1 and u.userId = ?2")
	public List<BoardInfoDomain> findByCodeAndUserId(String code, String userId, Pageable paramPageable);
	
	@Query("select u from BoardInfoDomain u where u.delYn != 'Y' and u.replyNo = 0 and u.code = ?1 and u.userId = ?2")
	public List<BoardInfoDomain> findByCodeAndUserId(String code, String userId);

	
	@Query("select u from BoardInfoDomain u where u.delYn != 'Y' and u.replyNo = 0 and u.code = ?1")
	public List<BoardInfoDomain> findByCode(String code);
	
	public List<BoardInfoDomain> findByTitleContaining(String title);
	
	public List<BoardInfoDomain> findByTitleContaining(String title, Pageable paramPageable);
	
	@Query("select u from BoardInfoDomain u where u.code = ?1 and u.mainNo = ?2")
	public BoardInfoDomain findByCodeAndMainNo(String code, int mainNo);
	
	@Query("select u from BoardInfoDomain u where u.delYn != 'Y' and u.code = ?1 and u.replyNo = ?2")
	public List<BoardInfoDomain> findByCodeAndReplyNo(String code, int replyNo, Pageable paramPageable);
	
	@Query("select u from BoardInfoDomain u where u.delYn != 'Y' and u.code = ?1 and u.replyNo = ?2")
	public List<BoardInfoDomain> findByCodeAndReplyNo(String code, int replyNo);
	
	@Query("select u from BoardInfoDomain u where u.code = ?1 order by u.mainNo desc")
	public List<BoardInfoDomain> findByCodeOrderByMainNoDesc(String code);
	
	@Query("select u from BoardInfoDomain u where u.delYn != 'Y' and u.code = ?1 and u.lcteUnqId = ?2")
	public List<BoardInfoDomain> findByCodeAndLcteUnqId(String code, String lcteUnqId);
	
	@Query("select u from BoardInfoDomain u where u.delYn != 'Y' and u.code = ?1 and u.lcteUnqId = ?2 and u.title like %?3%")
	public List<BoardInfoDomain> findByCodeAndLcteUnqIdAndTitleLike(String code, String lcteUnqId, String title);
	
	@Query("select u from BoardInfoDomain u where u.delYn != 'Y' and u.code = ?1 and u.lcteUnqId = ?2")
	public List<BoardInfoDomain> findByCodeAndLcteUnqId(String code, String lcteUnqId, Pageable paramPageable);
	
	@Query("select u from BoardInfoDomain u where u.delYn != 'Y' and u.code = ?1 and u.lcteUnqId = ?2 and u.title like %?3%")
	public List<BoardInfoDomain> findByCodeAndLcteUnqIdAndTitleLike(String code, String lcteUnqId, String title, Pageable paramPageable);
	
	
}


