package com.fas.model.fin.alys.cash;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;
import java.util.Set;

import com.fas.cmmn.util.FasDateUtil;
import com.fas.web.cmmn.util.BeanUtils;
import com.fas.web.cmmn.util.StringUtil;

public class EstmIsCashIncome  extends CashFlowAlysis {

	@Override
	public Map cal() throws Exception {
		Map resultMap = new LinkedHashMap();
		BeanUtils beanUtil = new BeanUtils();		
		
		Map cashIncomeMap = new LinkedHashMap();
		Map cashIncome0MonthMap = new LinkedHashMap();
		Map cashIncome1MonthMap = new LinkedHashMap();
		Map cashIncome2MonthMap = new LinkedHashMap();
		Map cashIncomeTotalMap = new LinkedHashMap();
		
		List cashIncomeList = new ArrayList();
		List cashIncome0MonthList = new ArrayList();
		List cashIncome1MonthList = new ArrayList();
		List cashIncome2MonthList = new ArrayList();
		List cashIncomeTotalList = new ArrayList();
		
		BigDecimal cashIncome30Ratio = BigDecimal.ZERO;
		BigDecimal cashIncome60Ratio = BigDecimal.ZERO;
		BigDecimal cashIncome90Ratio = BigDecimal.ZERO;
		
		String stacYy = "";
		
		Map qsrt = null;
		
		//평가 추측 년도
		qsrt = (Map) qsrtInfo.get("qsrtNo0");
		qsrt = (Map) qsrt.get("no1");
		stacYy = "" + qsrt.get("rsltVl");
		
		if (StringUtil.isEmpty(stacYy)) {
			stacYy = FasDateUtil.getCurrentDay().substring(0,4);
		}
		
		//30일이내 회수되는 비율
		qsrt = (Map) qsrtInfo.get("qsrtNo1");
		qsrt = (Map) qsrt.get("no1");
		cashIncome30Ratio = new BigDecimal(StringUtil.nvl(""+qsrt.get("rsltVl"),"0"));
		cashIncome30Ratio = cashIncome30Ratio.divide(new BigDecimal(100));
		
		//60일이내 회수되는 비율
		qsrt = (Map) qsrtInfo.get("qsrtNo1");
		qsrt = (Map) qsrt.get("no2");
		cashIncome60Ratio = new BigDecimal(StringUtil.nvl(""+qsrt.get("rsltVl"),"0"));
		cashIncome60Ratio = cashIncome60Ratio.divide(new BigDecimal(100));
		
		//90일이내 회수되는 비율
		qsrt = (Map) qsrtInfo.get("qsrtNo1");
		qsrt = (Map) qsrt.get("no3");
		cashIncome90Ratio = new BigDecimal(StringUtil.nvl(""+qsrt.get("rsltVl"),"0"));
		cashIncome90Ratio = cashIncome90Ratio.divide(new BigDecimal(100));
		
		Map salesMap = salesList();
		
		//당월현금매출수입
		Set setKey = salesMap.keySet();
		Iterator itr = setKey.iterator();
		int idx = 0;
		int startIdx = 3;
		int endIdx = startIdx + 12 + 2;
		String key = "";
		String strAmt = "0";
		int intYear = 1;
		BigDecimal salesCostAmt = BigDecimal.ZERO;
		while(itr.hasNext()) {
			
			key = (String) itr.next();
			
			if (idx >= startIdx && idx < endIdx) {
				strAmt = StringUtil.nvl("" + salesMap.get(key),"0");
				
				cashIncomeMap = new LinkedHashMap();
				cashIncomeMap.put("month", key);
				cashIncomeMap.put("amt", strAmt);
				cashIncomeList.add(cashIncomeMap);
				
				cashIncome0MonthMap = new LinkedHashMap();
				
				salesCostAmt = new BigDecimal(strAmt);
				salesCostAmt = salesCostAmt.multiply(cashIncome30Ratio);
				salesCostAmt = salesCostAmt.setScale(0, BigDecimal.ROUND_HALF_UP);
				
				cashIncome0MonthMap.put("month", key);
				cashIncome0MonthMap.put("amt", "" + salesCostAmt);
				cashIncome0MonthList.add(cashIncome0MonthMap);
				
			}
			
			idx++;
		}
		
		//1개월전 현금매출 중 현금매출수입
		//Keys
		setKey = salesMap.keySet();
		itr = setKey.iterator();
		
		idx = 0;
		startIdx = 3 - 1;
		endIdx = startIdx + 12 + 2;
		key = "";
		strAmt = "0";
		intYear = 1;
		salesCostAmt = BigDecimal.ZERO;
		while(itr.hasNext()) {
			
			key = (String) itr.next();
			
			if (idx >= startIdx && idx < endIdx) {
				strAmt = StringUtil.nvl("" + salesMap.get(key),"0");
				salesCostAmt = new BigDecimal(strAmt);
				salesCostAmt = salesCostAmt.multiply(cashIncome60Ratio);
				salesCostAmt = salesCostAmt.setScale(0, BigDecimal.ROUND_HALF_DOWN);
				
				
				cashIncome1MonthMap = new LinkedHashMap();
				if (intYear > 12) {
					intYear = intYear - 12;
					int intStacYy = Integer.parseInt(stacYy);
					intStacYy = intStacYy + 1;
					stacYy = "" + intStacYy;
				} 
				cashIncome1MonthMap.put("month", stacYy +"-"+StringUtil.lpad(intYear,2));
				cashIncome1MonthMap.put("amt", "" + salesCostAmt);
				cashIncome1MonthList.add(cashIncome1MonthMap);
				
			}
			
			idx++;
			intYear++;
		}

		//2개월전 현금매출 중 현금매출수입
		//Keys
		setKey = salesMap.keySet();
		itr = setKey.iterator();
		
		idx = 0;
		startIdx = 3 - 2;
		endIdx = startIdx + 12 + 2;
		key = "";
		strAmt = "0";
		intYear = 1;
		salesCostAmt = BigDecimal.ZERO;
		while(itr.hasNext()) {
			
			key = (String) itr.next();
			
			if (idx >= startIdx && idx < endIdx) {
				strAmt = StringUtil.nvl("" + salesMap.get(key),"0");
				salesCostAmt = new BigDecimal(strAmt);
				salesCostAmt = salesCostAmt.multiply(cashIncome90Ratio);
				salesCostAmt = salesCostAmt.setScale(0, BigDecimal.ROUND_HALF_DOWN);
				
				cashIncome2MonthMap = new LinkedHashMap();
				if (intYear > 12) {
					intYear = intYear - 12;
					int intStacYy = Integer.parseInt(stacYy);
					intStacYy = intStacYy + 1;
					stacYy = "" + intStacYy;
				} 
				cashIncome2MonthMap.put("month", stacYy +"-"+StringUtil.lpad(intYear,2));
				cashIncome2MonthMap.put("amt", "" + salesCostAmt);
				cashIncome2MonthList.add(cashIncome2MonthMap);
				
			}
					
			idx++;
			intYear++;
		}
		
		//총금액
		idx = 0;
		endIdx = cashIncomeList.size();
		Map cashMap = null;
		BigDecimal salesCostTotalAmt = BigDecimal.ZERO;
		salesCostAmt = BigDecimal.ZERO;
		intYear = 1;
		for (int i = idx; i < endIdx; i++) {
			salesCostTotalAmt = BigDecimal.ZERO;
			
			cashMap = (Map) cashIncome0MonthList.get(i);
			salesCostAmt = BigDecimal.ZERO;
			salesCostAmt = new BigDecimal(StringUtil.nvl("" + cashMap.get("amt"),"0"));
			salesCostTotalAmt = salesCostTotalAmt.add(salesCostAmt);
			
			cashMap = (Map) cashIncome1MonthList.get(i);
			salesCostAmt = BigDecimal.ZERO;
			salesCostAmt = new BigDecimal(StringUtil.nvl("" + cashMap.get("amt"),"0"));
			salesCostTotalAmt = salesCostTotalAmt.add(salesCostAmt);
			
			cashMap = (Map) cashIncome2MonthList.get(i);
			salesCostAmt = BigDecimal.ZERO;
			salesCostAmt = new BigDecimal(StringUtil.nvl("" + cashMap.get("amt"),"0"));
			salesCostTotalAmt = salesCostTotalAmt.add(salesCostAmt);
			
			cashIncomeTotalMap = new LinkedHashMap();
			cashIncomeTotalMap.put("month", stacYy +"-"+StringUtil.lpad(intYear,2));
			cashIncomeTotalMap.put("amt", "" + salesCostTotalAmt);
			
			cashIncomeTotalList.add(cashIncomeTotalMap);
			
			intYear++;
		}
		
		resultMap.put("cashIncome", cashIncomeList);
		resultMap.put("cashIncome0Month", cashIncome0MonthList);
		resultMap.put("cashIncome1Month", cashIncome1MonthList);
		resultMap.put("cashIncome2Month", cashIncome2MonthList);
		resultMap.put("cashIncomeTotal", cashIncomeTotalList);
		
		return resultMap;
	}

}
