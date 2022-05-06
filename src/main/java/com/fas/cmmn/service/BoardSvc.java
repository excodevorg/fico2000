package com.fas.cmmn.service;

import java.util.List;

import com.fas.adm.formVo.BoardMngFormVo;
import com.fas.cmmn.formVo.BoardFormVo;
import com.fas.web.cmmn.dataaccess.util.JsonObjectModel;

public interface BoardSvc {

	public JsonObjectModel boardList(BoardFormVo param) throws Exception;
	public JsonObjectModel boardUserList(BoardFormVo param) throws Exception;
	public JsonObjectModel boardDtlInfo(BoardFormVo param) throws Exception;
	public JsonObjectModel boardMdfc(BoardFormVo param) throws Exception;
	public JsonObjectModel boardReplyList(BoardFormVo params) throws Exception;
	public JsonObjectModel boardDel(BoardFormVo param) throws Exception;
	public JsonObjectModel boardRgsn(BoardFormVo param) throws Exception;
	public JsonObjectModel boardAllList(BoardFormVo param) throws Exception;
	
	public JsonObjectModel boardLcteList(BoardFormVo param) throws Exception;
	public JsonObjectModel boardLcteAllList(BoardFormVo param) throws Exception;
	public JsonObjectModel boardLcteUserAllList(BoardFormVo param) throws Exception;
	
	public JsonObjectModel boardNewsAndLcteList(BoardFormVo param) throws Exception;
	
}
