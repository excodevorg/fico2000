package com.fas.model.fin;

import java.util.Map;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.stereotype.Component;

import com.fas.model.fin.alys.cash.CashFlowConst;
import com.fas.model.fin.alys.cash.CashFlowFactory;

@Component("AnalysisCashManager")
public class AnalysisCashManager {
	
	private static Log logger = LogFactory.getLog(AnalysisCashManager.class);
	
	//1.영업활동 패턴
	@SuppressWarnings("rawtypes")
	public Map businessWorkPattern(Map qsrtInfo) throws Exception {
		logger.info("initailize businessWorkPattern");
		CashFlowFactory factory = new CashFlowFactory();
		return factory.getCashFlowAlysis(CashFlowConst.영업활동패턴, qsrtInfo);
	}
	
	//2.매출액예측
	@SuppressWarnings("rawtypes")
	public Map salesPredictList(Map qsrtInfo) throws Exception {
		CashFlowFactory factory = new CashFlowFactory();
		return factory.getCashFlowAlysis(CashFlowConst.매출액예측, qsrtInfo);
	}
	
	//3.현금 수입
	@SuppressWarnings("rawtypes")
	public Map cashIncomeList(Map qsrtInfo) throws Exception {
		CashFlowFactory factory = new CashFlowFactory();
		return factory.getCashFlowAlysis(CashFlowConst.현금수입, qsrtInfo);
	}
	
	//4.매출채권
	@SuppressWarnings("rawtypes")
	public Map salesCreditPredict(Map qsrtInfo) throws Exception {
		CashFlowFactory factory = new CashFlowFactory();
		return factory.getCashFlowAlysis(CashFlowConst.매출채권예측, qsrtInfo);
	}
	
	//5.현금지출
	@SuppressWarnings("rawtypes")
	public Map cashOutCome(Map qsrtInfo) throws Exception {
		CashFlowFactory factory = new CashFlowFactory();
		return factory.getCashFlowAlysis(CashFlowConst.현금지출, qsrtInfo);
	}
	
	//6.순현금흐름
	@SuppressWarnings("rawtypes")
	public Map CashNtFlow(Map qsrtInfo) throws Exception {
		CashFlowFactory factory = new CashFlowFactory();
		return factory.getCashFlowAlysis(CashFlowConst.순현금흐름, qsrtInfo);
	}
	
	//7.현금예산
	@SuppressWarnings("rawtypes")
	public Map CashBdgtAmt(Map qsrtInfo) throws Exception {
		CashFlowFactory factory = new CashFlowFactory();
		return factory.getCashFlowAlysis(CashFlowConst.현금예산, qsrtInfo);
	}
	
	//8. 최종결과
	@SuppressWarnings("rawtypes")
	public Map EstmIs(Map qsrtInfo) throws Exception {
		CashFlowFactory factory = new CashFlowFactory();
		return factory.getCashFlowAlysis(CashFlowConst.추정손익계산서, qsrtInfo);
	}

}
