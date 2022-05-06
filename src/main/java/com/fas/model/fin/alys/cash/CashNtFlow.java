package com.fas.model.fin.alys.cash;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;

import com.fas.web.cmmn.util.BeanUtils;
import com.fas.web.cmmn.util.StringUtil;

//순현금흐름
public class CashNtFlow extends CashFlowAlysis {

	@Override
	public Map cal() throws Exception {
		// TODO Auto-generated method stub
		
		Map resultMap = new LinkedHashMap();
		BeanUtils beanUtil = new BeanUtils();
		
		Map qsrt = null;
		Map rsv = null;
		List rsvList = null;
		String answer = "";
		
		String stacYy = ""; //평가 추측년도
		
		Map cashNtFlowMap = new LinkedHashMap();
		List cashNtFlowList = new ArrayList(); 
		
		//1) 현금지출
		CashFlowFactory factory = new CashFlowFactory();
		Map cashOutComeMap = factory.getCashFlowAlysis(CashFlowConst.현금지출, qsrtInfo);
		List cashOutComeList = (List) cashOutComeMap.get("cashOutCome");
		
		//2) 현금수입
		factory = new CashFlowFactory();
		Map cashIncomeMap = factory.getCashFlowAlysis(CashFlowConst.현금수입, qsrtInfo);
		List cashIncomeList = (List) cashIncomeMap.get("cashIncomeTotal");
		Map cashIncome = new LinkedHashMap();
		
		BigDecimal cashIncomeTotal = BigDecimal.ZERO; //현금수입합계
		BigDecimal cashOutcomeTotal = BigDecimal.ZERO; //현금지출합계
		BigDecimal cashNtFlowAmt = BigDecimal.ZERO; //순현금흐름합계
		
		int end = 0;
		if (cashOutComeList != null) end = cashOutComeList.size();
		for (int i = 0; i < end; i++) {
			cashIncome = (Map) cashIncomeList.get(i);
			cashNtFlowMap = (Map) cashOutComeList.get(i);
			
			cashNtFlowAmt = BigDecimal.ZERO;
			if (!StringUtil.isEmpty(""+cashIncome.get("amt"))) {
				cashIncomeTotal = new BigDecimal("" + cashIncome.get("amt"));
			} else {
				cashIncomeTotal = BigDecimal.ZERO;
			}
			if (!StringUtil.isEmpty(""+cashNtFlowMap.get("cashOutComeTotalAmt"))) {
				cashOutcomeTotal = new BigDecimal("" + cashNtFlowMap.get("cashOutComeTotalAmt"));
			} else {
				cashOutcomeTotal = BigDecimal.ZERO;
			}
			
			cashNtFlowAmt = cashIncomeTotal.subtract(cashOutcomeTotal);
			
			cashNtFlowMap.put("cashNtFlowAmt", ""+cashNtFlowAmt);
			cashNtFlowMap.put("cashIncomeTotalAmt", ""+cashIncomeTotal);
			
		}
		
		resultMap.put("cashNtFlow", cashOutComeList);
		
		return resultMap;
	}
	
}
