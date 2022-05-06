package com.fas.adm.web;

import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.fas.adm.formVo.CodeMngFormVo;
import com.fas.adm.service.CodeMngSvc;

@Controller
public class CodeMngController {

	@Resource(name="CodeMngSvc")
	private CodeMngSvc codeMngSvc;
	
	//1) Code Admin List
	@RequestMapping(value="/adm/CodeMngList.do")
	@ResponseBody
	public Map CodeMngListCtl(@RequestBody CodeMngFormVo formVo) throws Exception {
		return codeMngSvc.codeAdminList(formVo).getMap();
	}	
	
	//2) Menu Rgsn
	@RequestMapping(value="/adm/CodeMngCreate.do")
	@ResponseBody
	public Map CodeMngCreateCtl(@RequestBody CodeMngFormVo formVo) throws Exception {
		return codeMngSvc.codeAdminCreate(formVo).getMap();
	}	
	
	//3) Menu Modify
	@RequestMapping(value="/adm/CodeMngMdfc.do")
	@ResponseBody
	public Map CodeMngMdfcCtl(@RequestBody CodeMngFormVo formVo) throws Exception {
		return codeMngSvc.codeAdminMdfc(formVo).getMap();
	}	

	//4) Menu Delete
	@RequestMapping(value="/adm/CodeMngDelete.do")
	@ResponseBody
	public Map CodeMngDelCtl(@RequestBody CodeMngFormVo formVo) throws Exception {
		return codeMngSvc.codeAdminDel(formVo).getMap();
	}	
			
}
