package com.fas.model.com;

import java.util.List;

import javax.annotation.Resource;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.hsqldb.lib.StringUtil;
import org.springframework.stereotype.Component;

import com.fas.cmmn.util.FasDateUtil;
import com.fas.cmmn.util.FasPagingUtil;
import com.fas.model.com.dao.BoardDao;
import com.fas.model.com.domain.BoardInfoDomain;
import com.fas.web.cmmn.util.HttpUtil;

@Component("BoardManager")
public class BoardManager {
	
	@Resource(name="BoardDao")
	private BoardDao dao;
	
	 
	@Resource(name="HttpUtil")
	private HttpUtil httpUtil;
	
	private static Log logger = LogFactory.getLog(BoardManager.class);
	
	//내용 조회
	public List<BoardInfoDomain> boardList(BoardInfoDomain board, FasPagingUtil paging) throws Exception {
		return dao.selectList(board, paging);
	}
	
	//내용 조회
	public List<BoardInfoDomain> boardUserList(BoardInfoDomain board, FasPagingUtil paging) throws Exception {
		return dao.selectUserList(board, paging);
	}	
	
	public List<BoardInfoDomain> boardLcteList(BoardInfoDomain board, FasPagingUtil paging) throws Exception {
		return dao.selectList(board, paging);
	}
	
	public int totalCnt(BoardInfoDomain board) throws Exception {
		return dao.totalCount(board);
	}
	
	public int totalUserCnt(BoardInfoDomain board) throws Exception {
		return dao.totalUserCount(board);
	}
	
	public BoardInfoDomain boardDtl(BoardInfoDomain board) throws Exception {
		
		dao.hitCountUpdate(board);
		
		return dao.select(board);
	}
	
	//댓글 내용 조회 
	public List<BoardInfoDomain> boardReplyList(BoardInfoDomain board, FasPagingUtil paging) throws Exception {
		return dao.selectReplyList(board, paging);
	}
	
	public int totalReplyCnt(BoardInfoDomain board) throws Exception {
		return dao.totalReplyCnt(board);
	}
	
	//내용 등록
	public void boardRgsn(BoardInfoDomain board) throws Exception {
		board.setDate(FasDateUtil.getCurrentDate());
		
		if (StringUtil.isEmpty(board.getUserId())) {
			board.setUserId(httpUtil.getSessionUserId());
			board.setName(httpUtil.getSessionUserNm());
		}
		
		dao.insert(board);
	}
	
	//내용 삭제
	public void boardDelete(BoardInfoDomain board) throws Exception {
		dao.delete(board);
	}
	
	//내용 수정
	public void boardModfiy(BoardInfoDomain board) throws Exception {
		dao.update(board);
	}
	
	//강좌 내용 조회
	public List<BoardInfoDomain> lcteBoardList(BoardInfoDomain board, FasPagingUtil paging) throws Exception {
		return dao.selectLcteList(board, paging);
	}
	
	//강좌 내용 조회
	public List<BoardInfoDomain> lcteBoardAllList(BoardInfoDomain board) throws Exception {
		return dao.selectLcteAllList(board);
	}
	
	//강좌 내용 Cnt
	public int totalLcteBoardCnt(BoardInfoDomain board) throws Exception {
		return dao.totalLcteCnt(board);
	}
	
}
