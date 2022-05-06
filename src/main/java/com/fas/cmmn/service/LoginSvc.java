package com.fas.cmmn.service;

import com.fas.cmmn.formVo.UserInfoFormVo;
import com.fas.web.cmmn.dataaccess.util.JsonObjectModel;

public interface LoginSvc {

	public JsonObjectModel loginWithSocial(UserInfoFormVo param) throws Exception;
	public JsonObjectModel loginWithIdPwd(UserInfoFormVo param) throws Exception;
	public JsonObjectModel getSessionUserInfo(UserInfoFormVo param) throws Exception;
	public JsonObjectModel logout(UserInfoFormVo param) throws Exception;
	public JsonObjectModel tempPasswdMake(UserInfoFormVo param) throws Exception;
	
}
