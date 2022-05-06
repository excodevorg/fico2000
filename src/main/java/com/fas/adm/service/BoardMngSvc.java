package com.fas.adm.service;

import com.fas.adm.formVo.BoardMngFormVo;
import com.fas.web.cmmn.dataaccess.util.JsonObjectModel;

public interface BoardMngSvc {
	public JsonObjectModel boardList(BoardMngFormVo param) throws Exception;
	public JsonObjectModel boardDtlInfo(BoardMngFormVo param) throws Exception;
	public JsonObjectModel boardMdfc(BoardMngFormVo param) throws Exception;
	public JsonObjectModel boardReplyList(BoardMngFormVo param) throws Exception;
	public JsonObjectModel boardDel(BoardMngFormVo param) throws Exception;
	public JsonObjectModel boardRgsn(BoardMngFormVo param) throws Exception;
	
	public JsonObjectModel boardLcteList(BoardMngFormVo param) throws Exception ;
}
