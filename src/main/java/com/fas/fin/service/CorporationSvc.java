package com.fas.fin.service;

import com.fas.fin.formVo.CorporationFormVo;
import com.fas.web.cmmn.dataaccess.util.JsonObjectModel;

public interface CorporationSvc {

	public JsonObjectModel coporationRgsn(CorporationFormVo param) throws Exception;
	public JsonObjectModel coporationMdfc(CorporationFormVo param) throws Exception;
	public JsonObjectModel coporationDel(CorporationFormVo param) throws Exception;
	public JsonObjectModel coporationList(CorporationFormVo param) throws Exception;
	
}
