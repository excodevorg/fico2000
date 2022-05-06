package com.fas.fin.web;

import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.fas.fin.formVo.QsrtInfoFormVo;
import com.fas.fin.service.QsrtInfoSvc;

@Controller
public class QsrtInfoController {

	@Resource(name="QsrtInfoSvc")
	private QsrtInfoSvc svc;
	
	@RequestMapping(value="/fin/QsrtMngRsltInfoList.do")
	@ResponseBody	
	public Map QsrtMngRsltInfoListCtl(@RequestBody QsrtInfoFormVo formVo) throws Exception {
		return svc.qsrtMngRsltInfoList(formVo).getMap();
	}
	
	@RequestMapping(value="/fin/QsrtMngRsltInfoRgsn.do")
	@ResponseBody	
	public Map QsrtMngRsltInfoRgsnCtl(@RequestBody QsrtInfoFormVo formVo) throws Exception {
		return svc.qsrtMngRsltInfoRgsn(formVo).getMap();
	}	
	
	@RequestMapping(value="/fin/QsrtFinRsltInfoList.do")
	@ResponseBody	
	public Map QsrtFinRsltInfoListCtl(@RequestBody QsrtInfoFormVo formVo) throws Exception {
		return svc.qsrtFinRsltInfoList(formVo).getMap();
	}
	
	@RequestMapping(value="/fin/QsrtFinRsltInfoRgsn.do")
	@ResponseBody	
	public Map QsrtFinRsltInfoRgsnCtl(@RequestBody QsrtInfoFormVo formVo) throws Exception {
		return svc.qsrtFinRsltInfoRgsn(formVo).getMap();
	}	
}
