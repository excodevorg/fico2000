package com.fas.svy.service.impl;

import javax.annotation.Resource;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.stereotype.Service;

import com.fas.cmmn.util.FasComUtil;
import com.fas.model.svy.SvyManager;
import com.fas.svy.formVo.SurveyFormVo;
import com.fas.svy.service.SurveySvc;
import com.fas.web.cmmn.dataaccess.util.JsonObjectModel;
import com.fas.web.cmmn.util.HttpUtil;

@Service("SurveySvc")
public class SurveySvcImpl implements SurveySvc{
	
	private static Log logger = LogFactory.getLog(SurveySvcImpl.class);
	
	@Resource(name="HttpUtil")
	private HttpUtil httpUtil;
	
	@Resource(name="FasComUtil")
	private FasComUtil fasComUtil;
	
	@Resource(name="SvyManager")
	private SvyManager manager;

	@Override
	public JsonObjectModel svyItemListSvc(SurveyFormVo formVo) throws Exception {
		// TODO Auto-generated method stub
	    JsonObjectModel resultMap = new JsonObjectModel();		
	    resultMap.putData("svyData", manager.svyItemList(formVo));	    
	    resultMap.success();	    
		return resultMap;
	}

	@Override
	public JsonObjectModel svyRepSaveSvc(SurveyFormVo formVo) throws Exception {
		// TODO Auto-generated method stub
	    JsonObjectModel resultMap = new JsonObjectModel();		
	    resultMap.putData("svyData", manager.svyRepSave(formVo));	    
	    resultMap.success();	    
		return resultMap;
	}

	@Override
	public JsonObjectModel svyRepHisListSvc(SurveyFormVo formVo) throws Exception {
		// TODO Auto-generated method stub
	    JsonObjectModel resultMap = new JsonObjectModel();		
	    resultMap.putData("svyData", manager.svyRepHisList(formVo));	    
	    resultMap.success();	    
		return resultMap;
	}

}
