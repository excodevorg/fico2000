package com.fas.cmmn.web;

import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.servlet.view.RedirectView;

import com.fas.cmmn.formVo.UserInfoFormVo;
import com.fas.cmmn.service.UserRegisterSvc;

@Controller
public class UserRegisterController {

	@Resource(name="UserRegisterSvc")
	UserRegisterSvc userRegisterSvc;
	
	@RequestMapping(value="/user/UserRegister.do" , method=RequestMethod.POST)
	@ResponseBody
	public Map UserRegisterCtl(@RequestBody UserInfoFormVo formVo) throws Exception {
		return userRegisterSvc.UserRgsnSvc(formVo).getMap();
	}
	
	@RequestMapping(value="/user/UserInfo.do" , method=RequestMethod.POST)
	@ResponseBody
	public Map UserInfoCtl(@RequestBody UserInfoFormVo formVo) throws Exception {
		return userRegisterSvc.UserInfoSvc(formVo).getMap();
	}	
	
	@RequestMapping(value="/user/UserMdfc.do" , method=RequestMethod.POST)
	@ResponseBody
	public Map UserModifyCtl(@RequestBody UserInfoFormVo formVo) throws Exception {
		return userRegisterSvc.UserMdfcSvc(formVo).getMap();
	}
	
	@RequestMapping(value="/user/EmailDpltChk.do" , method=RequestMethod.POST)
	@ResponseBody
	public Map UserEmailDpltChkCtl(@RequestBody UserInfoFormVo formVo) throws Exception {
		return userRegisterSvc.UserEmailDpltChkSvc(formVo).getMap();
	}
	
	@RequestMapping(value="/user/UserActive.do")
	public String UserActive(@RequestParam("secureCode") String secureCode, Model model) throws Exception {
		System.out.println("Start UserActive....");
		
		UserInfoFormVo formVo = new UserInfoFormVo();
		formVo.setSecurecode(secureCode);
		
		Map resultMap = userRegisterSvc.UserActiveRev(formVo).getMap();
		
		String successYn = (String)((Map)(resultMap.get("data"))).get("successYn");
		
		model.addAttribute("activeSuccess", successYn);
		model.addAttribute("msg", resultMap.get("msg"));
		model.addAttribute("movePage", "MAIN01000M00");
		
		RedirectView redirect = new RedirectView("/"); 
	    
		return "com/userActive";
	}
	
}
