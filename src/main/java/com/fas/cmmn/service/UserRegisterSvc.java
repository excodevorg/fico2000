package com.fas.cmmn.service;

import com.fas.cmmn.formVo.UserInfoFormVo;
import com.fas.web.cmmn.dataaccess.util.JsonObjectModel;

public interface UserRegisterSvc {

	public JsonObjectModel UserRgsnSvc(UserInfoFormVo param) throws Exception;
	public JsonObjectModel UserMdfcSvc(UserInfoFormVo param) throws Exception;
	public JsonObjectModel UserEmailDpltChkSvc(UserInfoFormVo param) throws Exception;
	public JsonObjectModel UserActiveRev(UserInfoFormVo param) throws Exception;
	public JsonObjectModel UserInfoSvc(UserInfoFormVo param) throws Exception;
}
