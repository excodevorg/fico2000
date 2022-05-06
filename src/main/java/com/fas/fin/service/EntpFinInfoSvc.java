package com.fas.fin.service;

import java.util.List;

import com.fas.fin.formVo.EntpFinInfoFormVo;
import com.fas.web.cmmn.dataaccess.util.JsonObjectModel;

public interface EntpFinInfoSvc {

	public JsonObjectModel entpFinInfoList(EntpFinInfoFormVo param) throws Exception;
	public JsonObjectModel entpFinInfoModel(EntpFinInfoFormVo param) throws Exception;
	public JsonObjectModel entpFinInfoTypeMap(EntpFinInfoFormVo param) throws Exception;
	public JsonObjectModel entpFinInfoRgsn(List<EntpFinInfoFormVo> param) throws Exception;
	
	
}
