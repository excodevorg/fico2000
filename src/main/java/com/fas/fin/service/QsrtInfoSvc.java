package com.fas.fin.service;

import com.fas.fin.formVo.QsrtInfoFormVo;
import com.fas.web.cmmn.dataaccess.util.JsonObjectModel;

public interface QsrtInfoSvc {
	public JsonObjectModel qsrtMngRsltInfoList(QsrtInfoFormVo param) throws Exception;
	public JsonObjectModel qsrtMngRsltInfoRgsn(QsrtInfoFormVo param) throws Exception;
	public JsonObjectModel qsrtFinRsltInfoList(QsrtInfoFormVo param) throws Exception;
	public JsonObjectModel qsrtFinRsltInfoRgsn(QsrtInfoFormVo param) throws Exception;
}
