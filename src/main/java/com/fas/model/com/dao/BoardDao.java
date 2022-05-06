package com.fas.model.com.dao;

import java.util.List;

import javax.annotation.Resource;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.fas.cmmn.util.FasPagingUtil;
import com.fas.model.com.domain.BoardInfoDomain;
import com.fas.model.repository.BoardInfoRepository;
import com.fas.web.cmmn.exception.BizException;
import com.fas.web.cmmn.util.HttpUtil;
import com.fas.web.cmmn.util.StringUtil;

@Repository("BoardDao")
public class BoardDao {

	private static Log logger = LogFactory.getLog(BoardDao.class);
	
	@Resource(name="boardInfoRepository")
	private BoardInfoRepository boardInfoRepository;
	
	@Resource(name="HttpUtil")
	private HttpUtil httpUtil;	
	
	//등록
    @Transactional
    public synchronized void insert(BoardInfoDomain param) throws Exception {
    	List<BoardInfoDomain> localDomainList = boardInfoRepository.findByCodeOrderByMainNoDesc(param.getCode());
    	BoardInfoDomain localDomain = null;
    	if (localDomainList != null && localDomainList.size() > 0) localDomain = localDomainList.get(0);
    	if (localDomain != null) {
    		logger.debug("size >>> " + localDomainList.size());
    		logger.debug("code >>> " + localDomain.getCode());
    		logger.debug("MainNo >>> " + localDomain.getMainNo());
    		param.setMainNo(localDomain.getMainNo() + 1);
    	} else {
    		param.setMainNo(1);
    	}
    	
    	if (param.getRelNo() == 0) param.setRelNo(param.getMainNo());
    	
    	boardInfoRepository.save(param);
    }
    
    //수정 
    @Transactional
    public void update(BoardInfoDomain param) throws Exception {
    	BoardInfoDomain localDomain = select(param);
    	
    	String userid = httpUtil.getSessionUserId();
    	
    	if (!httpUtil.isAdminRole()) {
	    	if (!userid.equals(localDomain.getUserId())) {
	    		throw new BizException("수정할 권한이 없습니다.");
	    	}
    	}
    	
    	param.setDate(localDomain.getDate());
    	param.setRelNo(localDomain.getRelNo());
    	param.setReplyNo(localDomain.getReplyNo());
    	param.setUserId(localDomain.getUserId());
    	param.setName(localDomain.getName());
    	param.setDelYn(localDomain.getDelYn());
    	param.setEmail(localDomain.getEmail());
    	param.setDepth(localDomain.getDepth());
    	param.setCount(localDomain.getCount());
    	
    	
    	boardInfoRepository.save(param);
    }
    
  //수정 
    @Transactional
    public void hitCount(BoardInfoDomain param) throws Exception {
    	BoardInfoDomain localDomain = select(param);    	
    	
    	param.setDate(localDomain.getDate());
    	param.setRelNo(localDomain.getRelNo());
    	param.setReplyNo(localDomain.getReplyNo());
    	param.setUserId(localDomain.getUserId());
    	param.setName(localDomain.getName());
    	param.setDelYn(localDomain.getDelYn());
    	param.setEmail(localDomain.getEmail());
    	param.setDepth(localDomain.getDepth());
    	param.setCount(localDomain.getCount() + 1);
    	
    	boardInfoRepository.save(param);
    }
    
    //삭제
    @Transactional
    public void delete(BoardInfoDomain param) throws Exception {
    	BoardInfoDomain localDomain = select(param);
    	
    	String userid = httpUtil.getSessionUserId();
    	
    	if (!httpUtil.isAdminRole()) {
	    	if (!userid.equals(localDomain.getUserId())) {
	    		throw new BizException("수정할 권한이 없습니다.");
	    	}
    	}
    	
    	if (localDomain != null) {
    		localDomain.setDelYn("Y");
    		update(localDomain);
    	}
    }
    
    //상세 조회  
    public BoardInfoDomain select(BoardInfoDomain param) throws Exception {
     	 return boardInfoRepository.findByCodeAndMainNo(param.getCode(), param.getMainNo());
    }
    
    //Hist Count Update
    @Transactional    
    public void hitCountUpdate(BoardInfoDomain param) throws Exception {
    	BoardInfoDomain localDomain = select(param);
    	localDomain.setCount(localDomain.getCount() + 1);
    	hitCount(localDomain);
    }
    
  //리스트 조회
    public List<BoardInfoDomain> selectList(BoardInfoDomain param, FasPagingUtil paging) throws Exception {
    	paging.setSort("relNo", FasPagingUtil.DESC);
    	paging.setSort("mainNo", FasPagingUtil.ASC);
    	
    	List<BoardInfoDomain> resultList = null;
    		
    	if (StringUtil.isEmpty(param.getTitle())) {
    		resultList = boardInfoRepository.findByCode(param.getCode(), paging.getPagingRequest());
    	} else {
    		resultList = boardInfoRepository.findByCodeAndTitleLike(param.getCode(), "%"+param.getTitle()+"%", paging.getPagingRequest());
    	}
    	
    	return resultList;
    }
    
    //리스트 조회
    public List<BoardInfoDomain> selectUserList(BoardInfoDomain param, FasPagingUtil paging) throws Exception {
    	paging.setSort("relNo", FasPagingUtil.DESC);
    	paging.setSort("mainNo", FasPagingUtil.ASC);
    	
    	List<BoardInfoDomain> resultList = null;
    		
    	if (StringUtil.isEmpty(param.getTitle())) {
    		resultList = boardInfoRepository.findByCodeAndUserId(param.getCode(), param.getUserId(), paging.getPagingRequest());
    	} else {
    		resultList = boardInfoRepository.findByCodeAndUserIdAndTitleLike(param.getCode(), param.getUserId(), "%"+param.getTitle()+"%", paging.getPagingRequest());
    	}
    	
    	return resultList;
    }    
    
    public int totalUserCount(BoardInfoDomain param) {
    	
    	List<BoardInfoDomain> resultList = null;
		
    	if (StringUtil.isEmpty(param.getTitle())) {
    		resultList = boardInfoRepository.findByCodeAndUserId(param.getCode(), param.getUserId());
    	} else {
    		resultList = boardInfoRepository.findByCodeAndUserIdAndTitleLike(param.getCode(), param.getUserId(), "%"+param.getTitle()+"%");
    	}
    	
    	if (resultList == null) {
    		return 0;
    	} else {
    		return resultList.size();
    	}
    	
    }    
        
    public int totalCount(BoardInfoDomain param) {
    	
    	List<BoardInfoDomain> resultList = null;
		
    	if (StringUtil.isEmpty(param.getTitle())) {
    		resultList = boardInfoRepository.findByCode(param.getCode());
    	} else {
    		resultList = boardInfoRepository.findByCodeAndTitleLike(param.getCode(), "%"+param.getTitle()+"%");
    	}
    	
    	if (resultList == null) {
    		return 0;
    	} else {
    		return resultList.size();
    	}
    	
    }
    
    //리스트 조회 (댓글) 
    public List<BoardInfoDomain> selectReplyList(BoardInfoDomain param, FasPagingUtil paging) throws Exception {
    	paging.setSort("replyNo", FasPagingUtil.DESC);
    	
    	List<BoardInfoDomain> resultList = boardInfoRepository.findByCodeAndReplyNo(param.getCode(), param.getMainNo(), paging.getPagingRequest());
    	
    	return resultList;
    }
    
    public int totalReplyCnt(BoardInfoDomain param) {
    	List<BoardInfoDomain> resultList = boardInfoRepository.findByCodeAndReplyNo(param.getCode(), param.getMainNo());
    	
    	if (resultList == null) {
    		return 0;
    	} else {
    		return resultList.size();
    	}
    }
    
    public List<BoardInfoDomain> selectLcteList(BoardInfoDomain param, FasPagingUtil paging) {
    	paging.setSort("relNo", FasPagingUtil.DESC);
    	paging.setSort("mainNo", FasPagingUtil.ASC);
    	List<BoardInfoDomain> resultList = null;
    	
    	if (StringUtil.isEmpty(param.getTitle())) {
    		resultList = boardInfoRepository.findByCodeAndLcteUnqId(param.getCode(), param.getLcteUnqId(),paging.getPagingRequest());
    	} else {
    		resultList = boardInfoRepository.findByCodeAndLcteUnqIdAndTitleLike(param.getCode(), param.getLcteUnqId(), param.getTitle(),paging.getPagingRequest());
    	}
    	
    	return resultList;
    }
    
    public List<BoardInfoDomain> selectLcteAllList(BoardInfoDomain param) {
    	List<BoardInfoDomain> resultList = boardInfoRepository.findByCodeAndLcteUnqId(param.getCode(), param.getLcteUnqId());
    	return resultList;
    }
    
    public int totalLcteCnt(BoardInfoDomain param) {
    	List<BoardInfoDomain> resultList = null;
    	
    	if (StringUtil.isEmpty(param.getTitle())) {
    		resultList = boardInfoRepository.findByCodeAndLcteUnqId(param.getCode(), param.getLcteUnqId());
    	} else {
    		resultList = boardInfoRepository.findByCodeAndLcteUnqIdAndTitleLike(param.getCode(), param.getLcteUnqId(), param.getTitle());
    	}
    	
        if (resultList == null) {
        	return 0;
        } else {
        	return resultList.size();
        }
    }
}
