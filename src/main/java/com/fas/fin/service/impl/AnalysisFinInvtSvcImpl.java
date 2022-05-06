package com.fas.fin.service.impl;

import java.util.Map;

import javax.annotation.Resource;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.stereotype.Service;

import com.fas.fin.formVo.QsrtInfoFormVo;
import com.fas.fin.service.AnalysisFinInvtSvc;
import com.fas.model.fin.AnalysisFinInvtManager;
import com.fas.web.cmmn.dataaccess.util.JsonObjectModel;
import com.fas.web.cmmn.util.BeanUtils;
import com.fas.web.cmmn.util.HttpUtil;

@Service("AnalysisFinInvtSvc")
public class AnalysisFinInvtSvcImpl implements AnalysisFinInvtSvc {
	
	private static Log logger = LogFactory.getLog(AnalysisFinInvtSvcImpl.class);
	
	@Resource(name="HttpUtil")
	private HttpUtil httpUtil;
	
	@Resource(name="AnalysisFinInvtManager")
	private AnalysisFinInvtManager manager;

	public JsonObjectModel finInvtCashIncomeModify(QsrtInfoFormVo param) throws Exception {
		//1) 선언
		BeanUtils beanUtil = new BeanUtils();
		JsonObjectModel resultMap = new JsonObjectModel();
				
		Map result = manager.finInvtCashIncomeModify(param.getAlyid()
				                                   , param.getStacYy()
				                                   , param.getQsrtInfo());
				
		resultMap.putData("result", result);
				
		return resultMap;
	}
	
	public JsonObjectModel finInvtCashOutcomeModify(QsrtInfoFormVo param) throws Exception {
		
		BeanUtils beanUtil = new BeanUtils();
		JsonObjectModel resultMap = new JsonObjectModel();
				
		Map result = manager.finInvtCashOutcomeModify(param.getAlyid()
				                                   , param.getStacYy()
				                                   , param.getQsrtInfo());
				
		resultMap.putData("result", result);
				
		return resultMap;
	}
	
	public JsonObjectModel finCashBdgtAmt(QsrtInfoFormVo param) throws Exception {
		
		BeanUtils beanUtil = new BeanUtils();
		JsonObjectModel resultMap = new JsonObjectModel();
				
		Map result = manager.finCashBdgtAmt(param.getAlyid()
				                                   , param.getStacYy()
				                                   , param.getQsrtInfo());
				
		resultMap.putData("result", result);
				
		return resultMap;
	}
	
	public JsonObjectModel finEstmls(QsrtInfoFormVo param) throws Exception {

		BeanUtils beanUtil = new BeanUtils();
		JsonObjectModel resultMap = new JsonObjectModel();
				
		Map result = manager.finEstmls(param.getAlyid()
				                                   , param.getStacYy()
				                                   , param.getQsrtInfo());
				
		resultMap.putData("result", result);
				
		return resultMap;
		
	}
	
}
