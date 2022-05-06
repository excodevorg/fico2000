package com.fas.join.service;

import com.fas.join.formVo.JoinFormVo;
import com.fas.join.formVo.SettlementFormVo;
import com.fas.web.cmmn.dataaccess.util.JsonObjectModel;

public interface JoinSvc {

	public JsonObjectModel checkJoinStatus(JoinFormVo param) throws Exception;
	public JsonObjectModel acceptTheTerms(JoinFormVo param) throws Exception;
	public JsonObjectModel selectApcInfo(JoinFormVo param) throws Exception;
	public JsonObjectModel saveApcInfo(JoinFormVo param) throws Exception;
	public JsonObjectModel saveApcInfoComplete(JoinFormVo formVo) throws Exception;
	public JsonObjectModel getAuthCode(JoinFormVo formVo) throws Exception;
	public JsonObjectModel selectApcProduct(JoinFormVo formVo) throws Exception;
	public JsonObjectModel selectSettlHistory(JoinFormVo formVo) throws Exception;
	public JsonObjectModel prepareSettlement(JoinFormVo formVo) throws Exception;
	public JsonObjectModel saveSettlResult(SettlementFormVo formVo) throws Exception;
	public JsonObjectModel selectSettlement(SettlementFormVo formVo) throws Exception;
}
