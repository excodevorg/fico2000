package com.fas.svy.service;

import com.fas.svy.formVo.SurveyFormVo;
import com.fas.web.cmmn.dataaccess.util.JsonObjectModel;

public interface SurveySvc {

	//설문지 항목 조회 List - svyItemListSvc
	public JsonObjectModel svyItemListSvc(SurveyFormVo formVo) throws Exception;
	
	//설문지 응답 저장 - svyRepSaveSvc
	public JsonObjectModel svyRepSaveSvc(SurveyFormVo formVo) throws Exception;
	
	//설문지 응답 이력 - svyRepHisListSvc
	public JsonObjectModel svyRepHisListSvc(SurveyFormVo formVo) throws Exception;
}
