package com.fas.adm.service;

import com.fas.adm.formVo.LcteMngFormVo;
import com.fas.web.cmmn.dataaccess.util.JsonObjectModel;

public interface LcteMngSvc {

	public JsonObjectModel lcteInfoInq(LcteMngFormVo param) throws Exception;
	public JsonObjectModel lcteInfoAllInq(LcteMngFormVo param) throws Exception;
	public JsonObjectModel lcteInfoRgsn(LcteMngFormVo param) throws Exception;
	public JsonObjectModel lcteInfoMdfc(LcteMngFormVo param) throws Exception;
	public JsonObjectModel lcteInfoDel(LcteMngFormVo param) throws Exception;
	
	public JsonObjectModel applyLcteList(LcteMngFormVo param) throws Exception;
	public JsonObjectModel applyPrgScdMdfc(LcteMngFormVo param) throws Exception;
	public JsonObjectModel applyCompleteMdfc(LcteMngFormVo param) throws Exception;
	public JsonObjectModel applyDel(LcteMngFormVo param) throws Exception;
}
