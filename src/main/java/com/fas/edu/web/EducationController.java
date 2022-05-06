package com.fas.edu.web;

import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.fas.edu.formVo.EducationFormVo;
import com.fas.edu.service.EducationSvc;

@Controller
public class EducationController {

	@Resource(name="EducationSvc")
	private EducationSvc svc;
	
	@RequestMapping(value="/edu/EduInfoList.do")
	@ResponseBody	
	public Map EduInfoListCtl(@RequestBody EducationFormVo formVo) throws Exception {
		return svc.lcteInfoInq(formVo).getMap();
	}
	
	@RequestMapping(value="/edu/EduInfoDtl.do")
	@ResponseBody
	public Map EduInfoDtlCtl(@RequestBody EducationFormVo formVo) throws Exception {
		return svc.lcteInfoDtl(formVo).getMap();
	}
	
	@RequestMapping(value="/edu/ApplyRgsn.do")
	@ResponseBody
	public Map ApplyRgsnCtl(@RequestBody EducationFormVo formVo) throws Exception {
		return svc.applyRgsn(formVo).getMap();
	}
	
	@RequestMapping(value="/edu/MyEduInfoPgrsList.do")
	@ResponseBody
	public Map MyEduInfoPgrsListCtl(@RequestBody EducationFormVo formVo) throws Exception {
		return svc.myEduInfoPgrsList(formVo).getMap();
	}
	
	@RequestMapping(value="/edu/MyEduInfoPgrsUserList.do")
	@ResponseBody
	public Map MyEduInfoPgrsUserListCtl(@RequestBody EducationFormVo formVo) throws Exception {
		return svc.myEduInfoPrgScdUserList(formVo).getMap();
	}
	
}
