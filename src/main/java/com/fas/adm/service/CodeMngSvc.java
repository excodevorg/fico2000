package com.fas.adm.service;

import com.fas.adm.formVo.CodeMngFormVo;
import com.fas.web.cmmn.dataaccess.util.JsonObjectModel;

public interface CodeMngSvc {

	public JsonObjectModel codeAdminList(CodeMngFormVo param) throws Exception;
	public JsonObjectModel codeAdminCreate(CodeMngFormVo param) throws Exception;
	public JsonObjectModel codeAdminMdfc(CodeMngFormVo param) throws Exception;
	public JsonObjectModel codeAdminDel(CodeMngFormVo param) throws Exception;
	
}
