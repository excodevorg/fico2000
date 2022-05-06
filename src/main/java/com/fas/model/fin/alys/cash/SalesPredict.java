package com.fas.model.fin.alys.cash;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;
import java.util.Set;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;

import com.fas.cmmn.util.FasDateUtil;
import com.fas.web.cmmn.util.BeanUtils;
import com.fas.web.cmmn.util.StringUtil;

public class SalesPredict extends CashFlowAlysis {
	
	private static Log logger = LogFactory.getLog(SalesPredict.class);
	
	@Override
	public Map cal() throws Exception {
		
		Map resultMap = new LinkedHashMap();
		BeanUtils beanUtil = new BeanUtils();
		
		Map qsrt = null;
		Map rsv = null;
		Map salesCostMapBefore = new LinkedHashMap();
		Map salesCostMapAfter = new LinkedHashMap();
		Map salesCostMap = new LinkedHashMap();
		
		List salesCostListBefore = new ArrayList();
		List salesCostListAfter = new ArrayList();
		List salesCostList = new ArrayList();
		String stacYy = ""; //평가 추측년도
		
		int beforeSalesMonth = 0;
		int afterSalesMonth = 0;
		BigDecimal salesRatio = BigDecimal.ZERO;
		
		Map salesMap = salesList();
		
		//평가 추측 년도
		qsrt = (Map) qsrtInfo.get("qsrtNo0");
		qsrt = (Map) qsrt.get("no1");
		stacYy = "" + qsrt.get("rsltVl");
		
		if (StringUtil.isEmpty(stacYy)) {
			stacYy = FasDateUtil.getCurrentDay().substring(0,4);
		}
		
		//2.생산에 따른 원재료와 부재료 등의 구입 대금지급은 매출 후		
		qsrt = (Map) qsrtInfo.get("qsrtNo2");
		qsrt = (Map) qsrt.get("no1");
		afterSalesMonth = Integer.parseInt(StringUtil.nvl("" + qsrt.get("rsltVl"),"0"));
		
		//2.생산에 따른 원재료와 부재료 등의 구입 대금지급은 매출 전
		qsrt = (Map) qsrtInfo.get("qsrtNo2");
		qsrt = (Map) qsrt.get("no2");
		beforeSalesMonth = Integer.parseInt(StringUtil.nvl("" + qsrt.get("rsltVl"),"0"));
		
		logger.debug("afterSalesMonth >> " + afterSalesMonth);
		logger.debug("beforeSalesMonth >> " + beforeSalesMonth);

		//3.매출원가 비중
		qsrt = (Map) qsrtInfo.get("qsrtNo3");
		qsrt = (Map) qsrt.get("no1");
		salesRatio = new BigDecimal(StringUtil.nvl(""+qsrt.get("rsltVl"),"0"));
		salesRatio = salesRatio.divide(new BigDecimal(100));
		
		//1) 매출원가 후
		if (afterSalesMonth == 0) {
			for (int i = 1; i <= 12; i++) {
				salesCostMapAfter = new LinkedHashMap();
				salesCostMapAfter.put("month", stacYy +"-"+StringUtil.lpad(i,2));
				salesCostMapAfter.put("amt", "0");
				salesCostListAfter.add(salesCostMapAfter);
			}
		} else {
			
			//Keys
			Set setKey = salesMap.keySet();
			Iterator itr = setKey.iterator();
			
			int idx = 0;
			int startIdx = 3 - afterSalesMonth;
			int endIdx = startIdx + 12;
			String key = "";
			String strAmt = "0";
			int intYear = 1;
			BigDecimal salesCostAmt = BigDecimal.ZERO;
			
			while(itr.hasNext()) {
				
				key = (String) itr.next();
				
				if (idx >= startIdx && idx < endIdx) {
					strAmt = "" + salesMap.get(key);
					salesCostAmt = new BigDecimal(strAmt);
					salesCostAmt = salesCostAmt.multiply(salesRatio);
					salesCostAmt = salesCostAmt.setScale(0, BigDecimal.ROUND_HALF_DOWN);
					
					salesCostMapAfter = new LinkedHashMap();
					salesCostMapAfter.put("month", stacYy +"-"+StringUtil.lpad(intYear,2));
					salesCostMapAfter.put("amt", "" + salesCostAmt);
					salesCostListAfter.add(salesCostMapAfter);
					
				}
				
				idx++;
				intYear++;
			}
		}
		
		//2) 매출원가 전
		if (beforeSalesMonth == 0) {
			for (int i = 1; i <= 12; i++) {
				salesCostMapBefore.put(stacYy +"-"+StringUtil.lpad(i,2), "0");
				
				salesCostMapBefore = new LinkedHashMap();
				salesCostMapBefore.put("month", stacYy +"-"+StringUtil.lpad(i,2));
				salesCostMapBefore.put("amt", "0");
				salesCostListBefore.add(salesCostMapBefore);
			}			
		} else {
			
			//Keys
			Set setKey = salesMap.keySet();
			Iterator itr = setKey.iterator();
			
			int idx = 0;
			int startIdx = 3 + beforeSalesMonth;
			int endIdx = startIdx + 12;
			String key = "";
			String strAmt = "0";
			int intYear = 1;
			BigDecimal salesCostAmt = BigDecimal.ZERO;
			while(itr.hasNext()) {
				
				key = (String) itr.next();
				
				if (idx >= startIdx && idx < endIdx) {
					strAmt = "" + salesMap.get(key);
					salesCostAmt = new BigDecimal(strAmt);
					salesCostAmt = salesCostAmt.multiply(salesRatio);
					salesCostAmt = salesCostAmt.setScale(0, BigDecimal.ROUND_HALF_DOWN);
					
					salesCostMapBefore = new LinkedHashMap();
					salesCostMapBefore.put("month", stacYy +"-"+StringUtil.lpad(intYear,2));
					salesCostMapBefore.put("amt", "" + salesCostAmt);
					salesCostListBefore.add(salesCostMapBefore);
					
				}
				
				idx++;
				intYear++;
			}
		}
		
		//3) 매출 예측
		//Keys
		Set setKey = salesMap.keySet();
		Iterator itr = setKey.iterator();
		
		int idx = 0;
		int startIdx = 3;
		int endIdx = startIdx + 12;
		String key = "";
		String strAmt = "0";
		int intYear = 1;
		BigDecimal salesCostAmt = BigDecimal.ZERO;
		while(itr.hasNext()) {
			
			key = (String) itr.next();
			
			if (idx >= startIdx && idx < endIdx) {
				strAmt = "" + salesMap.get(key);
				
				salesCostMap = new LinkedHashMap();
				salesCostMap.put("month", key);
				salesCostMap.put("amt", strAmt);
				salesCostList.add(salesCostMap);
				
			}
			
			idx++;
		}
		
		resultMap.put("salesCost", salesCostList);
		resultMap.put("salesCostBefore", salesCostListBefore);
		resultMap.put("salesCostAfter", salesCostListAfter);

		
		logger.debug("===============salesPredict start ====================");
		beanUtil.toString(resultMap);
		logger.debug("==================salesPredict End=====================");
				
		
		return resultMap;
	}

}
