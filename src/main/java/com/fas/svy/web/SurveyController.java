package com.fas.svy.web;

import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.fas.svy.formVo.SurveyFormVo;
import com.fas.svy.service.SurveySvc;

@Controller
public class SurveyController {

	@Resource(name="SurveySvc")
	private SurveySvc svc;
	
	@RequestMapping(value="/svy/SvyItemList.do")	
	@ResponseBody
	public Map svyItemListCtl(@RequestBody SurveyFormVo formVo) throws Exception {
		return svc.svyItemListSvc(formVo).getMap();
	}
	
	@RequestMapping(value="/svy/SvyRepSave.do")	
	@ResponseBody
	public Map svyRepSaveCtl(@RequestBody SurveyFormVo formVo) throws Exception {
		return svc.svyRepSaveSvc(formVo).getMap();
	}
	
	@RequestMapping(value="/svy/SvyRepHisList.do")	
	@ResponseBody
	public Map svyRepHisListCtl(@RequestBody SurveyFormVo formVo) throws Exception {
		return svc.svyRepHisListSvc(formVo).getMap();
	}
	
}
