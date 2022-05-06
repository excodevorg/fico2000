package com.fas.fin.service;

import com.fas.fin.formVo.QsrtInfoFormVo;
import com.fas.web.cmmn.dataaccess.util.JsonObjectModel;

public interface AnalysisCashFlowSvc {

	public JsonObjectModel businessWorkPattern(QsrtInfoFormVo param) throws Exception;
	
	public JsonObjectModel salesPredictList(QsrtInfoFormVo param) throws Exception;
	
	public JsonObjectModel cashIncomeList(QsrtInfoFormVo param) throws Exception;
	
	public JsonObjectModel salesCreditPredict(QsrtInfoFormVo param) throws Exception;
	
	public JsonObjectModel cashOutCome(QsrtInfoFormVo param) throws Exception;
	
	public JsonObjectModel CashNtFlow(QsrtInfoFormVo param) throws Exception;
	
	public JsonObjectModel CashBdgtAmt(QsrtInfoFormVo param) throws Exception;
	
	public JsonObjectModel EstmIs(QsrtInfoFormVo param) throws Exception;
	
}
