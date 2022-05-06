package com.fas.fin.service;

import com.fas.fin.formVo.QsrtInfoFormVo;
import com.fas.web.cmmn.dataaccess.util.JsonObjectModel;

public interface AnalysisFinInvtSvc {
	
	public JsonObjectModel finInvtCashIncomeModify(QsrtInfoFormVo param) throws Exception;
	
	public JsonObjectModel finInvtCashOutcomeModify(QsrtInfoFormVo param) throws Exception;
	
	public JsonObjectModel finCashBdgtAmt(QsrtInfoFormVo param) throws Exception;
	
	public JsonObjectModel finEstmls(QsrtInfoFormVo param) throws Exception;
	

}
