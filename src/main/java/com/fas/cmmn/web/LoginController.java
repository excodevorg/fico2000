package com.fas.cmmn.web;

import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.fas.cmmn.formVo.UserInfoFormVo;
import com.fas.cmmn.service.LoginSvc;

@Controller
public class LoginController {

	@Resource(name="LoginSvc")
	private LoginSvc loginSvc;
	
	@RequestMapping(value="/login/LoginInfo.do")
	@ResponseBody
	public Map LoginInfoCtl(@RequestBody UserInfoFormVo formVo) throws Exception {
		return loginSvc.loginWithIdPwd(formVo).getMap();
	}
	
	@RequestMapping(value="/login/SocialLoginInfo.do")
	@ResponseBody
	public Map SocialLoginInfoCtl(@RequestBody UserInfoFormVo formVo) throws Exception {
		return loginSvc.loginWithSocial(formVo).getMap();
	}
	
	@RequestMapping(value="/user/UserLoginInfo.do")
	@ResponseBody
	public Map userLoginCtl(@RequestBody UserInfoFormVo formVo) throws Exception {
		return loginSvc.getSessionUserInfo(formVo).getMap();
	}
	
	@RequestMapping(value="/user/Logout.do")
	@ResponseBody
	public Map userLogOutCtl(@RequestBody UserInfoFormVo formVo) throws Exception {
		return loginSvc.logout(formVo).getMap();
	}
	
	@RequestMapping(value="/user/TempPassward.do")
	@ResponseBody
	public Map tempPasswardCtl(@RequestBody UserInfoFormVo formVo) throws Exception {
		return loginSvc.tempPasswdMake(formVo).getMap();
	}
	
	
}
