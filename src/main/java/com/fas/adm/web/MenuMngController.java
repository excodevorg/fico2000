package com.fas.adm.web;

import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.fas.adm.formVo.MenuMngFormVo;
import com.fas.adm.service.MenuMngSvc;

@Controller
public class MenuMngController {

	@Resource(name="MenuMngSvc")
	private MenuMngSvc menuMngSvc;
	
	//1) Menu Admin List
	@RequestMapping(value="/adm/MenuMngList.do")
	@ResponseBody
	public Map MenuMngListCtl(@RequestBody MenuMngFormVo formVo) throws Exception {
		return menuMngSvc.menuAdminList(formVo).getMap();
	}	
	
	@RequestMapping(value="/adm/MenuMngAllList.do")
	@ResponseBody
	public Map MenuMngAllListCtl(@RequestBody MenuMngFormVo formVo) throws Exception {
		return menuMngSvc.menuAdminAllList(formVo).getMap();
	}
	
	//2) Menu Rgsn
	@RequestMapping(value="/adm/MenuMngCreate.do")
	@ResponseBody
	public Map MenuMngCreateCtl(@RequestBody MenuMngFormVo formVo) throws Exception {
		return menuMngSvc.menuAdminCreate(formVo).getMap();
	}	
	
	//3) Menu Modify
	@RequestMapping(value="/adm/MenuMngMdfc.do")
	@ResponseBody
	public Map MenuMngMdfcCtl(@RequestBody MenuMngFormVo formVo) throws Exception {
		return menuMngSvc.menuAdminMdfc(formVo).getMap();
	}	
	
	//4) Menu Use Yn Rgsn
	@RequestMapping(value="/adm/MenuActiveRgsn.do")
	@ResponseBody
	public Map MenuActiveRgsnCtl(@RequestBody MenuMngFormVo formVo) throws Exception {
		return menuMngSvc.menuAdminActive(formVo).getMap();
	}	

	//5) Menu Delete
	@RequestMapping(value="/adm/MenuMngDelete.do")
	@ResponseBody
	public Map MenuMngDelCtl(@RequestBody MenuMngFormVo formVo) throws Exception {
		return menuMngSvc.menuAdminDel(formVo).getMap();
	}	

	
}
