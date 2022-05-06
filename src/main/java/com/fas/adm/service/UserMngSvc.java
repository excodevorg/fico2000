package com.fas.adm.service;

import com.fas.adm.formVo.UserMngFormVo;
import com.fas.web.cmmn.dataaccess.util.JsonObjectModel;

public interface UserMngSvc {

	public JsonObjectModel UserMngList(UserMngFormVo param) throws Exception;
	public JsonObjectModel UserMngActiveRgsn(UserMngFormVo param) throws Exception;
	public JsonObjectModel UserMngActiveDel(UserMngFormVo param) throws Exception;
	public JsonObjectModel UserMngPwdInitial(UserMngFormVo param) throws Exception;
	public JsonObjectModel UserRoleInqList(UserMngFormVo param) throws Exception;
	public JsonObjectModel UserRoleRgsn(UserMngFormVo param) throws Exception;
	public JsonObjectModel UserRoleDel(UserMngFormVo param) throws Exception;
	
}
