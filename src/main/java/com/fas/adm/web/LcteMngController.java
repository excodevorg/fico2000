package com.fas.adm.web;

import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartHttpServletRequest;

import com.fas.adm.formVo.LcteMngFormVo;
import com.fas.adm.service.LcteMngSvc;

@Controller
public class LcteMngController {

	@Resource(name="LcteMngSvc")
	private LcteMngSvc lcteMngSvc;

	@RequestMapping(value="/adm/LcteInfoInq.do")
	@ResponseBody
	public Map lcteInfoInqCtl(@RequestBody LcteMngFormVo formVo)  throws Exception {
		return lcteMngSvc.lcteInfoInq(formVo).getMap();
	}
	
	@RequestMapping(value="/adm/LcteInfoAllInq.do")
	@ResponseBody
	public Map lcteInfoAllInqCtl(@RequestBody LcteMngFormVo formVo)  throws Exception {
		return lcteMngSvc.lcteInfoAllInq(formVo).getMap();
	}
	
	@RequestMapping(value="/adm/LcteInfoRgsn.do")
	@ResponseBody	
	public Map lcteInfoRgsnCtl(@RequestBody LcteMngFormVo formVo)  throws Exception {
		return lcteMngSvc.lcteInfoRgsn(formVo).getMap();
	}
	
	@RequestMapping(value="/adm/LcteInfoMdfc.do")
	@ResponseBody	
	public Map lcteInfoMdfcCtl(@RequestBody LcteMngFormVo formVo)  throws Exception {
		return lcteMngSvc.lcteInfoMdfc(formVo).getMap();
	}
	
	@RequestMapping(value="/adm/LcteInfoDel.do")
	@ResponseBody	
	public Map lcteInfoDelCtl(@RequestBody LcteMngFormVo formVo)  throws Exception {
		return lcteMngSvc.lcteInfoDel(formVo).getMap();
	}
	
	@RequestMapping(value="/adm/ApplyLcteList.do")
	@ResponseBody	
	public Map applyLcteListCtl(@RequestBody LcteMngFormVo formVo)  throws Exception {
		return lcteMngSvc.applyLcteList(formVo).getMap();
	}
	
	@RequestMapping(value="/adm/ApplyPrgScdMdfc.do")
	@ResponseBody	
	public Map applyPrgScdMdfcCtl(@RequestBody List<LcteMngFormVo> formVo)  throws Exception {
		
		Map resultMap = null;
		
		for (LcteMngFormVo param : formVo) {
			resultMap = lcteMngSvc.applyPrgScdMdfc(param).getMap();
		}
		
		return resultMap;
	}
	
	@RequestMapping(value="/adm/ApplyCompleteMdfc.do")
	@ResponseBody	
	public Map applyCompleteMdfcCtl(@RequestBody List<LcteMngFormVo> formVo)  throws Exception {
		Map resultMap = null;
		
		for (LcteMngFormVo param : formVo) {
			resultMap = lcteMngSvc.applyCompleteMdfc(param).getMap();
		}
		
		return resultMap;
	}
	
	@RequestMapping(value="/adm/ApplyDel.do")
	@ResponseBody	
	public Map applyDelCtl(@RequestBody List<LcteMngFormVo> formVo)  throws Exception {
		
		Map resultMap = null;
		
		for (LcteMngFormVo param : formVo) {
			resultMap = lcteMngSvc.applyDel(param).getMap();
		}
		
		return resultMap;
	}
	
}
