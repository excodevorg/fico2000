package com.fas.cmmn.web;

import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.fas.cmmn.formVo.BoardFormVo;
import com.fas.cmmn.service.BoardSvc;

@Controller
public class BoardController {

	@Resource(name="BoardSvc")
	private BoardSvc boardSvc;
	
	@RequestMapping(value="/com/BoardList.do")
	@ResponseBody
	public Map BoardListCtl(@RequestBody BoardFormVo formVo) throws Exception {
		return boardSvc.boardList(formVo).getMap();
	}
	
	@RequestMapping(value="/com/BoardUserList.do")
	@ResponseBody
	public Map BoardUserListCtl(@RequestBody BoardFormVo formVo) throws Exception {
		return boardSvc.boardUserList(formVo).getMap();
	}
	
	@RequestMapping(value="/com/BoardLcteAllList.do")
	@ResponseBody
	public Map BoardLcteAllListCtl(@RequestBody BoardFormVo formVo) throws Exception {
		return boardSvc.boardLcteAllList(formVo).getMap();
	}
	
	@RequestMapping(value="/com/BoardLcteUserAllList.do")
	@ResponseBody
	public Map BoardLcteUserAllListCtl(@RequestBody BoardFormVo formVo) throws Exception {
		return boardSvc.boardLcteUserAllList(formVo).getMap();
	}
	
	@RequestMapping(value="/com/BoardAllList.do")
	@ResponseBody
	public Map BoardAllListCtl(@RequestBody BoardFormVo formVo) throws Exception {
		return boardSvc.boardAllList(formVo).getMap();
	}
	
	@RequestMapping(value="/com/BoardDtl.do")
	@ResponseBody
	public Map BoardDtlCtl(@RequestBody BoardFormVo formVo) throws Exception {
		return boardSvc.boardDtlInfo(formVo).getMap();
	}
	
	@RequestMapping(value="/com/BoardRgsn.do")
	@ResponseBody
	public Map BoardRgsnCtl(@RequestBody BoardFormVo formVo) throws Exception {
		return boardSvc.boardRgsn(formVo).getMap();
	}
	
	@RequestMapping(value="/com/BoardMdfc.do")
	@ResponseBody
	public Map BoardMdfcCtl(@RequestBody BoardFormVo formVo) throws Exception {
		return boardSvc.boardMdfc(formVo).getMap();
	}
	
	@RequestMapping(value="/com/BoardDel.do")
	@ResponseBody
	public Map BoardDelCtl(@RequestBody BoardFormVo formVo) throws Exception {
		return boardSvc.boardDel(formVo).getMap();
	}
	
	@RequestMapping(value="/com/BoardReplyList.do")
	@ResponseBody
	public Map BoardReplyListCtl(@RequestBody BoardFormVo formVo) throws Exception {
		return boardSvc.boardReplyList(formVo).getMap();
	}
	
	@RequestMapping(value="/com/BoardNewsAndLcteList.do")
	@ResponseBody
	public Map BoardNewsAndLcteListCtl(@RequestBody BoardFormVo formVo) throws Exception {
		return boardSvc.boardNewsAndLcteList(formVo).getMap();
	}
	
	
}
