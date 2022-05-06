package com.fas.cmmn.service.impl;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.Collections;
import java.util.Comparator;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.hsqldb.lib.StringUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.fas.cmmn.formVo.BoardFormVo;
import com.fas.cmmn.service.BoardSvc;
import com.fas.cmmn.util.FasDateUtil;
import com.fas.cmmn.util.FasPagingUtil;
import com.fas.model.com.BoardManager;
import com.fas.model.com.FileManager;
import com.fas.model.com.LcteInfoManager;
import com.fas.model.com.UserInfoManager;
import com.fas.model.com.domain.BoardInfoDomain;
import com.fas.model.com.domain.FileDtlDomain;
import com.fas.model.com.domain.LcteInfoDomain;
import com.fas.model.com.domain.UserInfoDomain;
import com.fas.web.cmmn.dataaccess.util.JsonObjectModel;
import com.fas.web.cmmn.util.BeanUtils;
import com.fas.web.cmmn.util.HttpUtil;

@Service("BoardSvc")
public class BoardSvcImpl implements BoardSvc {

	@Autowired
	private BoardManager manager;
	
	@Autowired
	private LcteInfoManager lcteManager;
	
	@Autowired
	private FileManager fileManager;	
	
	@Autowired
	private UserInfoManager userManager;	
	
	@Resource(name="HttpUtil")
	private HttpUtil httpUtil;
	
	private static Log logger = LogFactory.getLog(BoardSvcImpl.class);
	
	//글 리스트 조회 
	public JsonObjectModel boardList(BoardFormVo param) throws Exception {
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
		List<BoardFormVo> resultBoardList = new ArrayList<BoardFormVo>();
		BoardFormVo boardMng = null;
		
		String userId = httpUtil.getSessionUserId();
		
		if (totalCnt > 0) {	
			resultList = manager.boardList(domain, paging);
			
			int startNum = 0;
			int startPage = param.getPage();
			if (startPage == 0) startPage = 1;
			
			startNum = totalCnt - (param.getLimit() * (startPage-1));
			
			//OUTPUT SETTING
			for (BoardInfoDomain boardDomain : resultList) {
				boardMng = (BoardFormVo) beanUtil.toCopy(boardDomain, new BoardFormVo());
				boardMng.setWriteDate(FasDateUtil.transDateToString(boardDomain.getDate()));
				boardMng.setNumRow(startNum--);
				
				List<FileDtlDomain> fileList = fileManager.fileList(boardDomain.getFlapMngmNo());
				
				boardMng.setFileList(fileList);
				
				if (boardMng.getRelNo() != boardMng.getMainNo()) {
					
					String title = boardMng.getTitle();
					
					title = "<img src='/bootstrap/thema/fico2000/img/reply_arrow.png' width='16' height='16'/>" + title;
					
					boardMng.setTitleDisplay(title);
				}
				
				if (userId.equals(boardMng.getUserId())) {
					boardMng.setModifyAuthYn("Y");
				} else {
					boardMng.setModifyAuthYn("N");
				}
				
				resultBoardList.add(boardMng);
			}
		}
		
		resultMap.putData(resultBoardList, totalCnt);
		
		resultMap.putPageData(page,totalCnt);		
		
		return resultMap;
		
	}
	
	//글 리스트 조회 
	public JsonObjectModel boardNewsAndLcteList(BoardFormVo param) throws Exception {
		
		//1) 선언
		BeanUtils beanUtil = new BeanUtils();
		JsonObjectModel resultMap = new JsonObjectModel();
		
		int page = 1;
		int limit = 10;
		int totalCnt = 0;
		
		List<BoardInfoDomain> resultNoticeList = new ArrayList<BoardInfoDomain>();
		List<BoardInfoDomain> resultNewsList = new ArrayList<BoardInfoDomain>();
		List<LcteInfoDomain> resultLcteList = new ArrayList<LcteInfoDomain>();
		
		List<BoardFormVo> resultBoardList = new ArrayList<BoardFormVo>();
		BoardFormVo boardMng = null;
		
		FasPagingUtil paging = new FasPagingUtil(page, limit);
		
		//2) Parameter Setting
		BoardInfoDomain domain = (BoardInfoDomain) beanUtil.toCopy(param, new BoardInfoDomain());

		//1) 공지사항 
		domain.setCode("FAS900201");
		resultNoticeList = manager.boardList(domain, paging);
		//2) news
		domain.setCode("FAS900202");
		resultNewsList = manager.boardList(domain, paging);
		
		
		System.out.println("education");
		//3) 교육과정
		LcteInfoDomain lcteDomain = new LcteInfoDomain();
//		resultLcteList = lcteManager.lcteInfoInq(lcteDomain, paging);
		 
		String userId = httpUtil.getSessionUserId();
		//OUTPUT SETTING
		BoardInfoDomain boardDomain = null;
		
		//1) 공지사항
		int endIdx = 0;
		if (resultNoticeList != null) endIdx = resultNoticeList.size();
		if (endIdx > 10) endIdx = 10;
		
		for (int i = 0; i < endIdx; i++) {
			boardDomain = (BoardInfoDomain) resultNoticeList.get(i);
			boardMng = (BoardFormVo) beanUtil.toCopy(boardDomain, new BoardFormVo());
			
			boardMng.setWriteDate(FasDateUtil.transDateToString(boardDomain.getDate()));
			
			if (userId.equals(boardMng.getUserId())) {
				boardMng.setModifyAuthYn("Y");
			} else {
				boardMng.setModifyAuthYn("N");
			}
			
			resultBoardList.add(boardMng);
		}
		
		//2) News
		endIdx = 0;
		if (resultNewsList != null) endIdx = resultNewsList.size();
		if (endIdx > 10) endIdx = 10;
		
		for (int i = 0; i < endIdx; i++) {
			boardDomain = (BoardInfoDomain) resultNewsList.get(i);
			boardMng = (BoardFormVo) beanUtil.toCopy(boardDomain, new BoardFormVo());
			
			boardMng.setWriteDate(FasDateUtil.transDateToString(boardDomain.getDate()));
			
			if (userId.equals(boardMng.getUserId())) {
				boardMng.setModifyAuthYn("Y");
			} else {
				boardMng.setModifyAuthYn("N");
			}
			
			resultBoardList.add(boardMng);
		}
		
		//3) 교육과정
		endIdx = 0;
		if (resultLcteList != null) endIdx = resultLcteList.size();
		if (endIdx > 10) endIdx = 10;
		
		for (int i = 0; i < endIdx; i++) {
			
			lcteDomain = resultLcteList.get(i);
			boardMng = new BoardFormVo();
			
			boardMng.setCode("FAS0200");
			boardMng.setLcteUnqId(lcteDomain.getLctecUnqId());
			boardMng.setTitle(lcteDomain.getLcteNm());
			boardMng.setMainNo(0);
			boardMng.setUserId(lcteDomain.getFrrgUserId());
			
			boardMng.setWriteDate(FasDateUtil.transDateToString(lcteDomain.getFrrgts()));
			
			if (userId.equals(boardMng.getUserId())) {
				boardMng.setModifyAuthYn("Y");
			} else {
				boardMng.setModifyAuthYn("N");
			}
			
			resultBoardList.add(boardMng);
		}
		
		if (resultBoardList != null) {
			
			Collections.sort(resultBoardList, new Comparator<BoardFormVo>(){
				@Override
	            public int compare(BoardFormVo s1, BoardFormVo s2) {
				
					int s1_writedate = 0;
					int s2_writedate = 0;
					
					try {
						if (StringUtil.isEmpty(s1.getWriteDate())) {
							s1_writedate = Integer.parseInt(s1.getWriteDate().replaceAll("-", ""));
						}
					} catch(Exception ex) {
						ex.printStackTrace();
						s1_writedate = 0;
					}
					
					try {
						if (StringUtil.isEmpty(s2.getWriteDate())) {
							s2_writedate = Integer.parseInt(s2.getWriteDate().replaceAll("-", ""));
						}
					} catch(Exception ex) {
						ex.printStackTrace();
						s2_writedate = 0;
					}
					
					
					if (s1_writedate > s2_writedate) {
						return -1;
					} else if (s1_writedate < s2_writedate) {
						return 1;
					}
					
					return 0;
				}
			});
			
			if (resultBoardList.size() >= 10) {
				resultBoardList = resultBoardList.subList(0, 9);
			}
			
		} else {
			resultBoardList = new ArrayList();
		}
		
		resultMap.putData(resultBoardList, totalCnt);
		
		resultMap.putPageData(page,totalCnt);		
		
		return resultMap;
		
	}
	
	//글 리스트 조회 
	public JsonObjectModel boardUserList(BoardFormVo param) throws Exception {
		//1) 선언
		BeanUtils beanUtil = new BeanUtils();
		JsonObjectModel resultMap = new JsonObjectModel();
		
		int page = param.getPage();
		int limit = param.getLimit();
		int totalCnt = 0;
		
		//2) Parameter Setting
		BoardInfoDomain domain = (BoardInfoDomain) beanUtil.toCopy(param, new BoardInfoDomain());
		
		domain.setUserId(httpUtil.getSessionUserId());
		
		//3) Manager 호출
		totalCnt = manager.totalCnt(domain);
		FasPagingUtil paging = new FasPagingUtil(page, totalCnt);
		List<BoardInfoDomain> resultList = new ArrayList<BoardInfoDomain>();
		List<BoardFormVo> resultBoardList = new ArrayList<BoardFormVo>();
		List<BoardFormVo> resultBoardLimitList = new ArrayList<BoardFormVo>();
		BoardFormVo boardMng = null;
		if (totalCnt > 0) {	
			resultList = manager.boardList(domain, paging);
			
			int startNum = 0;
			int endNum = 0;
			int startPage = param.getPage();
			if (startPage == 0) startPage = 1;
			
			String writeUserId = "";
			
			for (BoardInfoDomain boardDomain : resultList) {
				
				if (boardDomain.getRelNo() == boardDomain.getMainNo()) {
					if (!StringUtil.isEmpty(boardDomain.getUserId())) {
						writeUserId = boardDomain.getUserId();
						logger.debug("writeUserId >>> " + writeUserId);
						logger.debug("getSessionUserId >>> " + httpUtil.getSessionUserId());						
						if (boardDomain.getUserId().trim().equals(httpUtil.getSessionUserId().trim())) {
							boardMng = (BoardFormVo) beanUtil.toCopy(boardDomain, new BoardFormVo());
							boardMng.setWriteDate(FasDateUtil.transDateToString(boardDomain.getDate()));
							if ("N".equals(boardMng.getDelYn())) {
								resultBoardList.add(boardMng);
							}
							
							logger.debug("getDelYn >>> " + boardMng.getDelYn());
						}
					} else {
						writeUserId = "";
					}
				} else {
					logger.debug("writeUserId111 >>> " + writeUserId);
					logger.debug("getSessionUserId111 >>> " + httpUtil.getSessionUserId());	
					if (writeUserId.equals(httpUtil.getSessionUserId())) {
						boardMng = (BoardFormVo) beanUtil.toCopy(boardDomain, new BoardFormVo());
						boardMng.setWriteDate(FasDateUtil.transDateToString(boardDomain.getDate()));
						if ("N".equals(boardMng.getDelYn())) {
							resultBoardList.add(boardMng);
						}
						
						logger.debug("getDelYn11111 >>> " + boardMng.getDelYn());
					}
				}
			}
			
			int size = 0;
			
			if (resultBoardList != null && resultBoardList.size() > 0) size = resultBoardList.size();
			
			logger.debug("totalSize >>> " + size);
			
			endNum = size - (param.getLimit() * (startPage-1));
			startNum = endNum - param.getLimit() + 1;
			
			if (startNum <= 0) startNum = 1;
			
			logger.debug("endNum >>> " + endNum);
			logger.debug("startNum >>> " + startNum);
			
			totalCnt = size;
			
			if (size > 0) {
				int numRow = endNum;
				for (int i = startNum; i <= endNum; i++) {
					boardMng = null;
					boardMng = (BoardFormVo) resultBoardList.get(i-1);
					boardMng.setNumRow(numRow--);
					resultBoardLimitList.add(boardMng);
				}
			}
	
		}
		
		resultMap.putData(resultBoardLimitList, totalCnt);
		
		resultMap.putPageData(page,totalCnt);		
		
		return resultMap;
		
	}
	
	
	//글 리스트 조회 
	public JsonObjectModel boardLcteList(BoardFormVo param) throws Exception {
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
		List<BoardFormVo> resultBoardList = new ArrayList<BoardFormVo>();
		BoardFormVo boardMng = null;
		if (totalCnt > 0) {	
			resultList = manager.lcteBoardList(domain, paging);
			
			int startNum = 0;
			int startPage = param.getPage();
			if (startPage == 0) startPage = 1;
			
			startNum = totalCnt - (param.getLimit() * (startPage-1));
			
			//OUTPUT SETTING
			for (BoardInfoDomain boardDomain : resultList) {
				boardMng = (BoardFormVo) beanUtil.toCopy(boardDomain, new BoardFormVo());
				boardMng.setWriteDate(FasDateUtil.transDateToString(boardDomain.getDate()));
				boardMng.setNumRow(startNum--);
				
				List<FileDtlDomain> fileList = fileManager.fileList(boardDomain.getFlapMngmNo());
				
				boardMng.setFileList(fileList);
				
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
	public JsonObjectModel boardLcteAllList(BoardFormVo param) throws Exception {
			//1) 선언
			BeanUtils beanUtil = new BeanUtils();
			JsonObjectModel resultMap = new JsonObjectModel();
			
			int page = param.getPage();
			int limit = param.getLimit();
			int totalCnt = 0;
			
			//2) Parameter Setting
			BoardInfoDomain domain = (BoardInfoDomain) beanUtil.toCopy(param, new BoardInfoDomain());
			
			//3) Manager 호출
			totalCnt = manager.totalLcteBoardCnt(domain);
			
			FasPagingUtil paging = new FasPagingUtil(page, totalCnt);
			
			List<BoardInfoDomain> resultList = new ArrayList<BoardInfoDomain>();
			List<BoardFormVo> resultBoardList = new ArrayList<BoardFormVo>();
			BoardFormVo boardMng = null;
			if (totalCnt > 0) {	
				resultList = manager.lcteBoardList(domain, paging);
				
				int startNum = 0;
				int startPage = param.getPage();
				if (startPage == 0) startPage = 1;
				
				startNum = totalCnt - (param.getLimit() * (startPage-1));
				
				//OUTPUT SETTING
				for (BoardInfoDomain boardDomain : resultList) {
					boardMng = (BoardFormVo) beanUtil.toCopy(boardDomain, new BoardFormVo());
					boardMng.setWriteDate(FasDateUtil.transDateToString(boardDomain.getDate()));
					boardMng.setNumRow(startNum--);
					
					List<FileDtlDomain> fileList = fileManager.fileList(boardDomain.getFlapMngmNo());
					
					boardMng.setFileList(fileList);
					
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
	public JsonObjectModel boardLcteUserAllList(BoardFormVo param) throws Exception {
			//1) 선언
			BeanUtils beanUtil = new BeanUtils();
			JsonObjectModel resultMap = new JsonObjectModel();
			
			int page = param.getPage();
			int limit = param.getLimit();
			int totalCnt = 0;
			
			//2) Parameter Setting
			BoardInfoDomain domain = (BoardInfoDomain) beanUtil.toCopy(param, new BoardInfoDomain());
			
			//3) Manager 호출
			totalCnt = manager.totalLcteBoardCnt(domain);
			
			FasPagingUtil paging = new FasPagingUtil(page, totalCnt);
			
			List<BoardInfoDomain> resultList = new ArrayList<BoardInfoDomain>();
			List<BoardFormVo> resultBoardList = new ArrayList<BoardFormVo>();
			BoardFormVo boardMng = null;
			if (totalCnt > 0) {	
				resultList = manager.lcteBoardList(domain, paging);
				
				int startNum = 0;
				int startPage = param.getPage();
				if (startPage == 0) startPage = 1;
				
				//OUTPUT SETTING
				for (BoardInfoDomain boardDomain : resultList) {
					if (httpUtil.getSessionUserId().equals(boardDomain.getUserId())) {
						boardMng = (BoardFormVo) beanUtil.toCopy(boardDomain, new BoardFormVo());
						boardMng.setWriteDate(FasDateUtil.transDateToString(boardDomain.getDate()));
						//boardMng.setNumRow(startNum--);
						
						List<FileDtlDomain> fileList = fileManager.fileList(boardDomain.getFlapMngmNo());
						
						boardMng.setFileList(fileList);
						
						if (boardMng.getRelNo() != boardMng.getMainNo()) {
							
							String title = boardMng.getTitle();
							
							title = "<img src='/bootstrap/thema/fico2000/img/reply_arrow.png' width='16' height='16'/>" + title;
							
							boardMng.setTitleDisplay(title);
						}
						
						resultBoardList.add(boardMng);
					}
				}
				
				if (resultBoardList != null) totalCnt = resultBoardList.size();
				
				startNum = totalCnt;
				
				for (BoardFormVo boardVo : resultBoardList) {
					boardVo.setNumRow(startNum--);
				}
			}
			
			resultMap.putData(resultBoardList, totalCnt);
			
			resultMap.putPageData(page,totalCnt);		
			
			return resultMap;
			
	}	
	
	
	//글 리스트 전체 조회 
	public JsonObjectModel boardAllList(BoardFormVo param) throws Exception {
			//1) 선언
			BeanUtils beanUtil = new BeanUtils();
			JsonObjectModel resultMap = new JsonObjectModel();
			
			int page = param.getPage();
			int limit = param.getLimit();
			int totalCnt = 0;
			
			//2) Parameter Setting
			BoardInfoDomain domain = (BoardInfoDomain) beanUtil.toCopy(param, new BoardInfoDomain());
			
			//3) Manager 호출
			totalCnt = manager.totalCnt(domain);
			List<BoardInfoDomain> resultList = new ArrayList<BoardInfoDomain>();
			List<BoardFormVo> resultBoardList = new ArrayList<BoardFormVo>();
			BoardFormVo boardMng = null;
			
			param.setLimit(totalCnt);
			
			if (totalCnt > 0) {	
				FasPagingUtil paging = new FasPagingUtil(page, totalCnt);
				resultList = manager.boardList(domain, paging);
				
				int startNum = 0;
				int startPage = param.getPage();
				if (startPage == 0) startPage = 1;
				
				startNum = totalCnt - (param.getLimit() * (startPage-1));
				
				
				//OUTPUT SETTING
				for (BoardInfoDomain boardDomain : resultList) {
					boardMng = (BoardFormVo) beanUtil.toCopy(boardDomain, new BoardFormVo());
					boardMng.setWriteDate(FasDateUtil.transDateToString(boardDomain.getDate()));
					boardMng.setNumRow(startNum--);
					
					List<FileDtlDomain> fileList = fileManager.fileList(boardDomain.getFlapMngmNo());
					
					boardMng.setFileList(fileList);
					
					if (boardMng.getRelNo() != boardMng.getMainNo()) {
						String title = boardMng.getTitle();
						title = "Y" + title;
						boardMng.setTitleDisplay(title);
					} else {
						String title = boardMng.getTitle();
						title = "N" + title;
						boardMng.setTitleDisplay(title);
					}
					
					resultBoardList.add(boardMng);
				}
			}
			
			resultMap.putData(resultBoardList, totalCnt);
			
			resultMap.putPageData(page,totalCnt);		
			
			return resultMap;
			
		}
	
	//글 상세 조회 
	public JsonObjectModel boardDtlInfo(BoardFormVo param) throws Exception {
		//1) 선언
		BeanUtils beanUtil = new BeanUtils();
		JsonObjectModel resultMap = new JsonObjectModel();
		
		//2) Parameter Setting
		BoardInfoDomain domain = (BoardInfoDomain) beanUtil.toCopy(param, new BoardInfoDomain());
		
		//3) Manager 호출
		domain = manager.boardDtl(domain);
		
		if (domain == null) domain = new BoardInfoDomain();
		
		BoardFormVo boardMng = (BoardFormVo) beanUtil.toCopy(domain, new BoardFormVo());
		boardMng.setWriteDate(FasDateUtil.transDateToString(domain.getDate()));
		resultMap.putData("board",boardMng);
		
		return resultMap;
	}
	
	//글 등록
	public JsonObjectModel boardRgsn(BoardFormVo param) throws Exception {
		//1) 선언
		BeanUtils beanUtil = new BeanUtils();
		JsonObjectModel resultMap = new JsonObjectModel();
				
		//2) Parameter Setting
		BoardInfoDomain domain = (BoardInfoDomain) beanUtil.toCopy(param, new BoardInfoDomain());
		
		String flapMngmNo = fileManager.fileRgsn(param.getFileList());
		
		domain.setFlapMngmNo(flapMngmNo);
		
		//session 값 
		domain.setUserId(httpUtil.getSessionUserId());
		domain.setName(httpUtil.getSessionUserNm());
		domain.setDelYn("N");
				
		//3) Manager 호출
		manager.boardRgsn(domain);
				
		resultMap.success();
				
		return resultMap;		
	}
	//글 수정 
	public JsonObjectModel boardMdfc(BoardFormVo param) throws Exception {
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
	public JsonObjectModel boardDel(BoardFormVo param) throws Exception {
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
	public JsonObjectModel boardReplyList(BoardFormVo param) throws Exception {
		//1) 선언
		BeanUtils beanUtil = new BeanUtils();
		JsonObjectModel resultMap = new JsonObjectModel();
		
		Map result = null;
		BoardInfoDomain domain = null;
		FasPagingUtil paging = null;
		
		int page = param.getPage(); 
		int limit = param.getLimit();
		int totalCnt = 0;
		
		paging = new FasPagingUtil(page, limit);
			
		//2) Parameter Setting
		domain = (BoardInfoDomain) beanUtil.toCopy(param, new BoardInfoDomain());
		result = new LinkedHashMap();
		List<BoardInfoDomain> arrList = null;
		List<BoardFormVo> resultList = new ArrayList<BoardFormVo>();
	
		//3) Manager 호출
		totalCnt = manager.totalReplyCnt(domain);
				
		arrList = new ArrayList<BoardInfoDomain>();
				
		if (totalCnt > 0) {
			arrList = manager.boardReplyList(domain, paging);
		}
		
		BoardFormVo vo = null;
		
		String userId = httpUtil.getSessionUserId();
		
		UserInfoDomain user = null;
		
		
		
		for (BoardInfoDomain board : arrList) {
			vo = (BoardFormVo) beanUtil.toCopy(board, new BoardFormVo());
			vo.setWriteDate(FasDateUtil.transDateToString(board.getDate()));
			
			user = new UserInfoDomain();
			user.setUserId(vo.getUserId());
			
			user = userManager.getUserInfo(user);
			
			if (userId.equals(vo.getUserId())) {
				vo.setModifyAuthYn("Y");
			} else {
				vo.setModifyAuthYn("N");
			}
			
			if (StringUtil.isEmpty(user.getImgUrl())) {
				vo.setImgUrl("1.png");
			} else {
				vo.setImgUrl(user.getImgUrl());
			}

			resultList.add(vo);
		}
		
		resultMap.putData(resultList, totalCnt);
		
		resultMap.putData("mainNo", param.getMainNo());
		
		return resultMap;
	}	
	
}
