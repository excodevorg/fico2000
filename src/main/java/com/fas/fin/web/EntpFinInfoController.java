package com.fas.fin.web;

import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.fas.fin.formVo.EntpFinInfoFormVo;
import com.fas.fin.service.EntpFinInfoSvc;

@Controller
public class EntpFinInfoController {

	@Resource(name="EntpFinInfoSvc")
	private EntpFinInfoSvc svc;
	
	@RequestMapping(value="/fin/EntpFinInfoList.do")
	@ResponseBody	
	public Map EntpFinInfoListCtl(@RequestBody EntpFinInfoFormVo formVo) throws Exception {
		return svc.entpFinInfoList(formVo).getMap();
	}
	
	@RequestMapping(value="/fin/EntpFinInfoModel.do")
	@ResponseBody	
	public Map EntpFinInfoModelCtl(@RequestBody EntpFinInfoFormVo formVo) throws Exception {
		return svc.entpFinInfoModel(formVo).getMap();
	}
	
	@RequestMapping(value="/fin/EntpFinInfoTypeMap.do")
	@ResponseBody	
	public Map EntpFinInfoTypeMapCtl(@RequestBody EntpFinInfoFormVo formVo) throws Exception {
		return svc.entpFinInfoTypeMap(formVo).getMap();
	}
	
	@RequestMapping(value="/fin/EntpFinInfoRgsn.do")
	@ResponseBody	
	public Map EntpFinInfoRgsnCtl(@RequestBody List<EntpFinInfoFormVo> formVos) throws Exception {
		return svc.entpFinInfoRgsn(formVos).getMap();
	}	
	
	
}
