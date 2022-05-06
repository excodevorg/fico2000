package com.fas.edu.service;

import com.fas.edu.formVo.EducationFormVo;
import com.fas.web.cmmn.dataaccess.util.JsonObjectModel;

public interface EducationSvc {

	public JsonObjectModel lcteInfoInq(EducationFormVo param) throws Exception;
	public JsonObjectModel lcteInfoDtl(EducationFormVo param) throws Exception;
	public JsonObjectModel applyRgsn(EducationFormVo param) throws Exception;
	public JsonObjectModel myEduInfoPgrsList(EducationFormVo param) throws Exception;
	public JsonObjectModel myEduInfoPrgScdUserList(EducationFormVo param) throws Exception;
	
}
