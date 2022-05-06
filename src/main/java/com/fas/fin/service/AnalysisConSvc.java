package com.fas.fin.service;

import java.util.List;

import com.fas.fin.formVo.AnalysisConFormVo;
import com.fas.web.cmmn.dataaccess.util.JsonObjectModel;

public interface AnalysisConSvc {
	
	public JsonObjectModel analysisConList(AnalysisConFormVo param) throws Exception;
	public JsonObjectModel analysisUserConList(AnalysisConFormVo param) throws Exception;
	public JsonObjectModel analysisConRgsn(AnalysisConFormVo param) throws Exception;
	public JsonObjectModel analysisConMdfc(AnalysisConFormVo param) throws Exception;
	public JsonObjectModel analysisConDel(AnalysisConFormVo param) throws Exception;
	public JsonObjectModel analysisStacYyList(AnalysisConFormVo param) throws Exception;
	public JsonObjectModel analysisFnamStacYyList(AnalysisConFormVo param) throws Exception;
	public JsonObjectModel analysisFinDtTypeMap(AnalysisConFormVo param) throws Exception;
	public JsonObjectModel analysisFinDtTypeMaps(AnalysisConFormVo param) throws Exception;
	public JsonObjectModel analysisFinDtRgsn(List<AnalysisConFormVo> params) throws Exception;
	public JsonObjectModel analysisFinRatioMap(AnalysisConFormVo param) throws Exception;
	public JsonObjectModel analysisWallTrantMap(AnalysisConFormVo param) throws Exception;
	public JsonObjectModel analysisDecisionMap(AnalysisConFormVo param) throws Exception;
	public JsonObjectModel analysisBokFinRatioMap(AnalysisConFormVo param) throws Exception;
	public JsonObjectModel analysisBokFinStacYyMap(AnalysisConFormVo param) throws Exception;
	
	public JsonObjectModel analysisWallTrantList(AnalysisConFormVo param) throws Exception;
	public JsonObjectModel analysisWallTrantRgsn(AnalysisConFormVo param) throws Exception;
	public JsonObjectModel analysisWallTrantMdfc(AnalysisConFormVo param) throws Exception;
	
}
