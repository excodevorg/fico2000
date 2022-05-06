package com.fas.adm.web;

import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.fas.adm.formVo.MenuAuthFormVo;
import com.fas.adm.service.MenuAuthMngSvc;

@Controller
public class MenuAuthMngController {

	@Resource(name="MenuAuthMngSvc")
	private MenuAuthMngSvc menuAuthMngSvc;
	
	//1) 메뉴 권한에 해당되는 코드 조회 (List)
	@RequestMapping(value="/adm/MenuAuthCodeList.do")
	@ResponseBody	
	public Map menuAuthCodeListCtl(@RequestBody MenuAuthFormVo formVo) throws Exception {
		return menuAuthMngSvc.menuAuthCodeList(formVo).getMap();
	}
	//2) 메뉴 권한코드에 해당되는 메뉴 리스트 조회 (List)
	@RequestMapping(value="/adm/MenuAuthList.do")
	@ResponseBody	
	public Map menuAuthListCtl(@RequestBody MenuAuthFormVo formVo) throws Exception {
		return menuAuthMngSvc.menuAuthList(formVo).getMap();
	}
	
	//3) 등록 (삭제 후 등록)
	@RequestMapping(value="/adm/MenuAuthRgsn.do")
	@ResponseBody	
	public Map menuAuthRgsnCtl(@RequestBody List<MenuAuthFormVo> formVo) throws Exception {
		return menuAuthMngSvc.menuAuthRgsn(formVo).getMap();
	}
}
