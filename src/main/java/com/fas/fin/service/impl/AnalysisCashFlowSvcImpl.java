package com.fas.fin.service.impl;

import java.util.Map;

import javax.annotation.Resource;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.hsqldb.lib.StringUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.fas.cmmn.util.FasComUtil;
import com.fas.fin.formVo.QsrtInfoFormVo;
import com.fas.fin.service.AnalysisCashFlowSvc;
import com.fas.model.fin.AnalysisCashManager;
import com.fas.model.fin.AnalysisConManager;
import com.fas.model.fin.CoporationManager;
import com.fas.model.fin.domain.AnalysisConDomain;
import com.fas.model.fin.domain.CorporationDomain;
import com.fas.web.cmmn.dataaccess.util.JsonObjectModel;
import com.fas.web.cmmn.util.BeanUtils;
import com.fas.web.cmmn.util.HttpUtil;

@Service("AnalysisCashFlowSvc")
public class AnalysisCashFlowSvcImpl implements AnalysisCashFlowSvc {

	private static Log logger = LogFactory.getLog(AnalysisCashFlowSvcImpl.class);

	@Resource(name="HttpUtil")
	private HttpUtil httpUtil;
	
	@Resource(name="AnalysisCashManager")
	private AnalysisCashManager analysisCashManager;
	
	@Resource(name="FasComUtil")
	private FasComUtil fasComUtil;

	@Autowired
	private CoporationManager coporationManager;
	
	@Resource(name="AnalysisConManager")
	private AnalysisConManager analysisConManager;

	//1. 영업활동 패턴
	public JsonObjectModel businessWorkPattern(QsrtInfoFormVo param) throws Exception {
		
		//1) 선언
		JsonObjectModel resultMap = new JsonObjectModel();
		
		Map result = analysisCashManager.businessWorkPattern(param.getQsrtInfo());
		
		resultMap.putData("result", result);
		
		return resultMap;
	}
	
	//2.매출액 예측
	public JsonObjectModel salesPredictList(QsrtInfoFormVo param) throws Exception {
		
		//1) 선언
		JsonObjectModel resultMap = new JsonObjectModel();
		
		Map result = analysisCashManager.salesPredictList(param.getQsrtInfo());
		
		resultMap.putData("result", result);
		
		return resultMap;		
		
	}
	
	//3.현금수입
	public JsonObjectModel cashIncomeList(QsrtInfoFormVo param) throws Exception {
		
		//1) 선언
		JsonObjectModel resultMap = new JsonObjectModel();
		
		Map result = analysisCashManager.cashIncomeList(param.getQsrtInfo());
		
		resultMap.putData("result", result);
		
		return resultMap;		
		
	}
	
	//4.매출채권
	public JsonObjectModel salesCreditPredict(QsrtInfoFormVo param) throws Exception {
		
		//1) 선언
		JsonObjectModel resultMap = new JsonObjectModel();
		
		Map result = analysisCashManager.salesCreditPredict(param.getQsrtInfo());
		
		resultMap.putData("result", result);
		
		return resultMap;		
	}
	
	//5.현금지출
	public JsonObjectModel cashOutCome(QsrtInfoFormVo param) throws Exception {
		
		//1) 선언
		JsonObjectModel resultMap = new JsonObjectModel();
		
		Map result = analysisCashManager.cashOutCome(param.getQsrtInfo());
		
		resultMap.putData("result", result);
		
		return resultMap;		
		
	}
	
	//6. 순현금흐름
	public JsonObjectModel CashNtFlow(QsrtInfoFormVo param) throws Exception {
		
		//1) 선언
		JsonObjectModel resultMap = new JsonObjectModel();
				
		Map result = analysisCashManager.CashNtFlow(param.getQsrtInfo());
				
		resultMap.putData("result", result);
				
		return resultMap;
		
	}
	
	//7. 현금예산
	public JsonObjectModel CashBdgtAmt(QsrtInfoFormVo param) throws Exception {
		
		//1) 선언
		JsonObjectModel resultMap = new JsonObjectModel();
				
		Map result = analysisCashManager.CashBdgtAmt(param.getQsrtInfo());
				
		resultMap.putData("result", result);
				
		return resultMap;
		
	}
	
	//8. 최종 결과
	public JsonObjectModel EstmIs(QsrtInfoFormVo param) throws Exception {
		
		//1) 선언
		JsonObjectModel resultMap = new JsonObjectModel();
						
		Map result = analysisCashManager.EstmIs(param.getQsrtInfo());
		
		
		AnalysisConDomain alyConDomain = new AnalysisConDomain();
		alyConDomain.setAlyid(param.getAlyid());
		
		alyConDomain = analysisConManager.analysisInfo(alyConDomain);
		
		String amtUnitNm = "";
		
		if (alyConDomain != null && !StringUtil.isEmpty(alyConDomain.getBzn())) {
			
			CorporationDomain corpDomain = new CorporationDomain();
			corpDomain.setBzn(alyConDomain.getBzn());
			corpDomain.setUserid(alyConDomain.getUserid());
			corpDomain = coporationManager.corporationInfo(corpDomain);
			
			if (corpDomain != null && !StringUtil.isEmpty(corpDomain.getAmtUnit())) {
				amtUnitNm = fasComUtil.codeName(corpDomain.getAmtUnit());
			}
			
		}
		
		if (result != null) result.put("amtUnitNm", amtUnitNm);
				
		resultMap.putData("result", result);
						
		return resultMap;		
		
	}
	
}
