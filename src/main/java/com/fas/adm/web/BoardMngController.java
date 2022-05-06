package com.fas.adm.web;

import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.fas.adm.formVo.BoardMngFormVo;
import com.fas.adm.service.BoardMngSvc;

@Controller 
public class BoardMngController {

	@Resource(name="BoardMngSvc")
	private BoardMngSvc boardMngSvc;
	
	@RequestMapping(value="/adm/BoardMngList.do")
	@ResponseBody
	public Map BoardMngListCtl(@RequestBody BoardMngFormVo formVo) throws Exception {
		return boardMngSvc.boardList(formVo).getMap();
	}
	
	@RequestMapping(value="/adm/BoardMngLcteList.do")
	@ResponseBody
	public Map BoardMngLcteListCtl(@RequestBody BoardMngFormVo formVo) throws Exception {
		return boardMngSvc.boardLcteList(formVo).getMap();
	}
	
	@RequestMapping(value="/adm/BoardDtl.do")
	@ResponseBody
	public Map BoardMngDtlCtl(@RequestBody BoardMngFormVo formVo) throws Exception {
		return boardMngSvc.boardDtlInfo(formVo).getMap();
	}
	
	@RequestMapping(value="/adm/BoardRgsn.do")
	@ResponseBody
	public Map BoardMngRgsnCtl(@RequestBody BoardMngFormVo formVo) throws Exception {
		return boardMngSvc.boardRgsn(formVo).getMap();
	}
	
	@RequestMapping(value="/adm/BoardMdfc.do")
	@ResponseBody
	public Map BoardMngMdfcCtl(@RequestBody BoardMngFormVo formVo) throws Exception {
		return boardMngSvc.boardMdfc(formVo).getMap();
	}
	
	@RequestMapping(value="/adm/BoardDel.do")
	@ResponseBody
	public Map BoardMngDelCtl(@RequestBody BoardMngFormVo formVo) throws Exception {
		return boardMngSvc.boardDel(formVo).getMap();
	}
	
	@RequestMapping(value="/adm/BoardReplyMngList.do")
	@ResponseBody
	public Map BoardReplyMngListCtl(@RequestBody BoardMngFormVo formVo) throws Exception {
		return boardMngSvc.boardReplyList(formVo).getMap();
	}
	
}
