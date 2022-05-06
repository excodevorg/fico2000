package com.fas.adm.web;

import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.fas.adm.service.UserMngSvc;
import com.fas.adm.formVo.UserMngFormVo;

@Controller
public class UserMngController {
	
	@Resource(name="UserMngSvc")
	UserMngSvc userMngSvc;
	
	//1) 회원 조회
	@RequestMapping(value="/adm/UserMngList.do")
	@ResponseBody
	public Map UserMngListCtl(@RequestBody UserMngFormVo formVo) throws Exception {
		return userMngSvc.UserMngList(formVo).getMap();
	}	
	
	//2) 사용 중지
	@RequestMapping(value="/adm/UserMngActiveRgsn.do")
	@ResponseBody
	public Map UserMngActiveRgsnCtl(@RequestBody List<UserMngFormVo> formVo) throws Exception {
		
		Map resultMap = null;
		
		for (UserMngFormVo param : formVo) {
			resultMap = userMngSvc.UserMngActiveRgsn(param).getMap();
		}
		
		return resultMap;
	}	

	//3) 회원 탈퇴 (삭제)
	@RequestMapping(value="/adm/UserActiveDel.do")
	@ResponseBody
	public Map UserMngActiveDelCtl(@RequestBody List<UserMngFormVo> formVo) throws Exception {
		Map resultMap = null;
		for (UserMngFormVo param : formVo) {
			resultMap = userMngSvc.UserMngActiveDel(param).getMap();
		}
		
		return resultMap;
	}	
	
	//4) 비밀번호 초기화
	@RequestMapping(value="/adm/UserMngPwdInitial.do")
	@ResponseBody
	public Map UserMngPwdInitialCtl(@RequestBody List<UserMngFormVo> formVo) throws Exception {
		Map resultMap = null;
		for (UserMngFormVo param : formVo) {
			resultMap = userMngSvc.UserMngPwdInitial(param).getMap();
		}
		
		return resultMap;

	}	
	
	//5) User 권한 조회
	@RequestMapping(value="/adm/UserRoleInqList.do")
	@ResponseBody
	public Map UserRoleInqListCtl(@RequestBody UserMngFormVo formVo) throws Exception {
		return userMngSvc.UserRoleInqList(formVo).getMap();
	}
	
	//6) User 권한 등록
	@RequestMapping(value="/adm/UserRoleRgsn.do")
	@ResponseBody
	public Map UserRoleRgsnCtl(@RequestBody UserMngFormVo formVo) throws Exception {
		return userMngSvc.UserRoleRgsn(formVo).getMap();
	}
	
	//7) User 권한 삭제 
	@RequestMapping(value="/adm/UserRoleDel.do")
	@ResponseBody
	public Map UserRoleDelCtl(@RequestBody UserMngFormVo formVo) throws Exception {
		return userMngSvc.UserRoleDel(formVo).getMap();
	}

	public UserMngSvc getUserMngSvc() {
		return userMngSvc;
	}

	public void setUserMngSvc(UserMngSvc userMngSvc) {
		this.userMngSvc = userMngSvc;
	}
	
	
}
