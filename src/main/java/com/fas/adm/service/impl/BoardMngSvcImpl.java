package com.fas.adm.service.impl;

import java.util.ArrayList;
import java.util.List;

import javax.annotation.Resource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.fas.adm.formVo.BoardMngFormVo;
import com.fas.adm.service.BoardMngSvc;
import com.fas.cmmn.util.FasDateUtil;
import com.fas.cmmn.util.FasPagingUtil;
import com.fas.model.com.BoardManager;
import com.fas.model.com.FileManager;
import com.fas.model.com.domain.BoardInfoDomain;
import com.fas.web.cmmn.dataaccess.util.JsonObjectModel;
import com.fas.web.cmmn.util.BeanUtils;
import com.fas.web.cmmn.util.HttpUtil;

@Service("BoardMngSvc")
public class BoardMngSvcImpl implements BoardMngSvc {

	@Autowired
	private BoardManager manager;
	
	@Autowired
	private FileManager fileManager;	
	
	@Resource(name="HttpUtil")
	private HttpUtil httpUtil;
	
	//글 리스트 조회 
	public JsonObjectModel boardList(BoardMngFormVo param) throws Exception {
		//1) 선언
		BeanUtils beanUtil = new BeanUtils();
		JsonObjectModel resultMap = new JsonObjectModel();
		
		int page = param.getPage();
		int limit = param.getLimit();
		int totalCnt = 0;
		
		FasPagingUtil paging = new FasPagingUtil(page, limit);
		
		//2) Parameter Setting
		BoardInfoDomain domain = (BoardInfoDomain) beanUtil.toCopy(param, new BoardInfoDomain());
		
		//3) Manager 호출
		totalCnt = manager.totalCnt(domain);
		List<BoardInfoDomain> resultList = new ArrayList<BoardInfoDomain>();
		List<BoardMngFormVo> resultBoardList = new ArrayList<BoardMngFormVo>();
		BoardMngFormVo boardMng = null;
		if (totalCnt > 0) {	
			resultList = manager.boardList(domain, paging);
			
			int startNum = 0;
			int startPage = param.getPage();
			if (startPage == 0) startPage = 1;
			
			startNum = totalCnt - (param.getLimit() * (startPage-1));
			
			//OUTPUT SETTING
			for (BoardInfoDomain boardDomain : resultList) {
				boardMng = (BoardMngFormVo) beanUtil.toCopy(boardDomain, new BoardMngFormVo());
				boardMng.setWriteDate(FasDateUtil.transDateToString(boardDomain.getDate()));
				boardMng.setNumRow(startNum--);
				
				if (boardMng.getRelNo() != boardMng.getMainNo()) {
					
					String title = boardMng.getTitle();
					
					title = "<img src='/bootstrap/thema/fico2000/img/reply_arrow.png' width='16' height='16'/>" + title;
					
					boardMng.setTitleDisplay(title);
				}
				
				resultBoardList.add(boardMng);
			}
		}
		
		resultMap.putData(resultBoardList, totalCnt);
		
		resultMap.putPageData(page,totalCnt);		
		
		return resultMap;
		
	}
	
	//글 리스트 조회 
	public JsonObjectModel boardLcteList(BoardMngFormVo param) throws Exception {
			//1) 선언
			BeanUtils beanUtil = new BeanUtils();
			JsonObjectModel resultMap = new JsonObjectModel();
			
			int page = param.getPage();
			int limit = param.getLimit();
			int totalCnt = 0;
			
			FasPagingUtil paging = new FasPagingUtil(page, limit);
			
			//2) Parameter Setting
			BoardInfoDomain domain = (BoardInfoDomain) beanUtil.toCopy(param, new BoardInfoDomain());
			
			//3) Manager 호출
			totalCnt = manager.totalLcteBoardCnt(domain);
			List<BoardInfoDomain> resultList = new ArrayList<BoardInfoDomain>();
			List<BoardMngFormVo> resultBoardList = new ArrayList<BoardMngFormVo>();
			BoardMngFormVo boardMng = null;
			if (totalCnt > 0) {	
				resultList = manager.lcteBoardList(domain, paging);
				
				int startNum = 0;
				int startPage = param.getPage();
				if (startPage == 0) startPage = 1;
				
				startNum = totalCnt - (param.getLimit() * (startPage-1));
				
				//OUTPUT SETTING
				for (BoardInfoDomain boardDomain : resultList) {
					boardMng = (BoardMngFormVo) beanUtil.toCopy(boardDomain, new BoardMngFormVo());
					boardMng.setWriteDate(FasDateUtil.transDateToString(boardDomain.getDate()));
					boardMng.setNumRow(startNum--);
					resultBoardList.add(boardMng);
				}
			}
			
			resultMap.putData(resultBoardList, totalCnt);
			
			resultMap.putPageData(page,totalCnt);		
			
			return resultMap;
			
	}
	
	//글 상세 조회 
	public JsonObjectModel boardDtlInfo(BoardMngFormVo param) throws Exception {
		//1) 선언
		BeanUtils beanUtil = new BeanUtils();
		JsonObjectModel resultMap = new JsonObjectModel();
		
		//2) Parameter Setting
		BoardInfoDomain domain = (BoardInfoDomain) beanUtil.toCopy(param, new BoardInfoDomain());
		
		//3) Manager 호출
		domain = manager.boardDtl(domain);
		
		if (domain == null) domain = new BoardInfoDomain();
		
		BoardMngFormVo boardMng = (BoardMngFormVo) beanUtil.toCopy(domain, new BoardMngFormVo());
		boardMng.setWriteDate(FasDateUtil.transDateToString(domain.getDate()));
		resultMap.putData("board",boardMng);
		
		return resultMap;
	}
	
	//글 등록
	public JsonObjectModel boardRgsn(BoardMngFormVo param) throws Exception {
		//1) 선언
		BeanUtils beanUtil = new BeanUtils();
		JsonObjectModel resultMap = new JsonObjectModel();
				
		//2) Parameter Setting
		BoardInfoDomain domain = (BoardInfoDomain) beanUtil.toCopy(param, new BoardInfoDomain());
		
		String flapMngmNo = fileManager.fileRgsn(param.getFileList());
		
		domain.setFlapMngmNo(flapMngmNo);
		
		//session 값 
		domain.setUserId(httpUtil.getSessionUserId());
		domain.setName("관리자");
		domain.setDelYn("N");
				
		//3) Manager 호출
		manager.boardRgsn(domain);
				
		resultMap.success();
				
		return resultMap;		
	}
	//글 수정 
	public JsonObjectModel boardMdfc(BoardMngFormVo param) throws Exception {
		//1) 선언
		BeanUtils beanUtil = new BeanUtils();
		JsonObjectModel resultMap = new JsonObjectModel();
					
		//2) Parameter Setting
		BoardInfoDomain domain = (BoardInfoDomain) beanUtil.toCopy(param, new BoardInfoDomain());
		
		String flapMngmNo = fileManager.fileRgsn(param.getFileList());
		
		domain.setFlapMngmNo(flapMngmNo);
					
		//3) Manager 호출
		manager.boardModfiy(domain);
					
		resultMap.success();
					
		return resultMap;		
	}
	//글 삭제
	public JsonObjectModel boardDel(BoardMngFormVo param) throws Exception {
		//1) 선언
		BeanUtils beanUtil = new BeanUtils();
		JsonObjectModel resultMap = new JsonObjectModel();
					
		//2) Parameter Setting
		BoardInfoDomain domain = (BoardInfoDomain) beanUtil.toCopy(param, new BoardInfoDomain());
					
		//3) Manager 호출
		manager.boardDelete(domain);
					
		resultMap.success();
					
		return resultMap;		
	}	
	//댓글 조회 
	public JsonObjectModel boardReplyList(BoardMngFormVo param) throws Exception {
		//1) 선언
		BeanUtils beanUtil = new BeanUtils();
		JsonObjectModel resultMap = new JsonObjectModel();
		
		int page = param.getPage();
		int limit = param.getLimit();
		int totalCnt = 0;
		
		FasPagingUtil paging = new FasPagingUtil(page, limit);
		
		//2) Parameter Setting
		BoardInfoDomain domain = (BoardInfoDomain) beanUtil.toCopy(param, new BoardInfoDomain());
		
		//3) Manager 호출
		totalCnt = manager.totalReplyCnt(domain);
		List<BoardInfoDomain> resultList = new ArrayList<BoardInfoDomain>();
		
		if (totalCnt > 0) {
			resultList = manager.boardReplyList(domain, paging);
		}
		
		resultMap.putData(resultList, totalCnt);
		
		return resultMap;
		
	}	
	
}
