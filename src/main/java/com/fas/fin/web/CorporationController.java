package com.fas.fin.web;

import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.fas.cmmn.formVo.BoardFormVo;
import com.fas.fin.formVo.CorporationFormVo;
import com.fas.fin.service.CorporationSvc;

@Controller
public class CorporationController {

	@Resource(name="CorporationSvc")
	private CorporationSvc svc;
	
	@RequestMapping(value="/fin/CoporationRgsn.do")
	@ResponseBody
	public Map CoporationRgsnCtl(@RequestBody CorporationFormVo formVo) throws Exception {
		return svc.coporationRgsn(formVo).getMap();
	}
	
	@RequestMapping(value="/fin/CoporationMdfc.do")
	@ResponseBody
	public Map CoporationMdfcCtl(@RequestBody CorporationFormVo formVo) throws Exception {
		return svc.coporationMdfc(formVo).getMap();
	}
	
	@RequestMapping(value="/fin/CoporationDel.do")
	@ResponseBody
	public Map CoporationDelCtl(@RequestBody CorporationFormVo formVo) throws Exception {
		return svc.coporationDel(formVo).getMap();
	}	
	
	@RequestMapping(value="/fin/CoporationList.do")
	@ResponseBody
	public Map CoporationListCtl(@RequestBody CorporationFormVo formVo) throws Exception {
		return svc.coporationList(formVo).getMap();
	}	
	
}
