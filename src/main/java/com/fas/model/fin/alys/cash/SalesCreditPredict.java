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

import com.fas.web.cmmn.util.BeanUtils;
import com.fas.web.cmmn.util.StringUtil;

public class SalesCreditPredict  extends CashFlowAlysis {
	
	private static Log logger = LogFactory.getLog(SalesCreditPredict.class);
	
	@Override
	public Map cal() throws Exception {
		
		Map resultMap = new LinkedHashMap();
		BeanUtils beanUtil = new BeanUtils();
		
		Map qsrt = null;
		Map rsv = null;
		
		String stacYy = ""; //평가 추측년도
		
		Map salesAmtMap = new LinkedHashMap();
		Map revAmtMap = new LinkedHashMap();
		Map revAmt1MonthMap = new LinkedHashMap();
		Map salesCreditAmtMap = new LinkedHashMap();
		
		List salesAmtList = new ArrayList();   //매출액
		List revAmtList = new ArrayList();     //미수금(당월)
		List revAmt1MonthList = new ArrayList(); //미수금(1개월전)		 
		List salesCreditAmtList = new ArrayList(); //매출채권
		
		BigDecimal salesCreditRatio = BigDecimal.ZERO; //당월 매출 채권율
		BigDecimal salesCreditRatio1Month = BigDecimal.ZERO; //1개월전 매출 채권율
		
		BigDecimal dl = BigDecimal.ZERO; //회수율

		BigDecimal totalAmt = BigDecimal.ZERO; 
		BigDecimal baseAmt = new BigDecimal(100);
		
		//30일이내 회수
		qsrt = (Map) qsrtInfo.get("qsrtNo1");
		qsrt = (Map) qsrt.get("no1");
		dl = new BigDecimal(StringUtil.nvl("" + qsrt.get("rsltVl"),"0"));
			
		if (dl != null) totalAmt = totalAmt.add(dl);
				
		salesCreditRatio = baseAmt.subtract(totalAmt);
		salesCreditRatio = salesCreditRatio.divide(new BigDecimal(100));
		
		//60일이내 회수
		qsrt = (Map) qsrtInfo.get("qsrtNo1");
		qsrt = (Map) qsrt.get("no2");
		dl = new BigDecimal(StringUtil.nvl("" + qsrt.get("rsltVl"),"0"));
		
		if (dl != null) totalAmt = totalAmt.add(dl);
		
		salesCreditRatio1Month = baseAmt.subtract(totalAmt);
		salesCreditRatio1Month = salesCreditRatio1Month.divide(new BigDecimal(100));
		
		
		//전체 매출액 예측
		Map salesMap = salesList();
		
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
				
				salesAmtMap = new LinkedHashMap();
				salesAmtMap.put("month", key);
				salesAmtMap.put("amt", strAmt);
				salesAmtList.add(salesAmtMap);
				
				salesCostAmt = new BigDecimal(strAmt);
				salesCostAmt = salesCostAmt.multiply(salesCreditRatio);
				salesCostAmt = salesCostAmt.setScale(0, BigDecimal.ROUND_HALF_UP);
				
				revAmtMap = new LinkedHashMap();
				revAmtMap.put("month", key);
				revAmtMap.put("amt", "" + salesCostAmt);
				revAmtList.add(revAmtMap);
				
			}
			
			idx++;
		}
		
		//1개월전 매출액중 미수금
		//Keys
		setKey = salesMap.keySet();
		itr = setKey.iterator();
				
		idx = 0;
		startIdx = 3 - 1;
		endIdx = startIdx + 12;
		key = "";
		strAmt = "0";
		intYear = 1;
		salesCostAmt = BigDecimal.ZERO;
		while(itr.hasNext()) {
					
			key = (String) itr.next();
				
			if (idx >= startIdx && idx < endIdx) {
				strAmt = "" + salesMap.get(key);
				salesCostAmt = new BigDecimal(strAmt);
				salesCostAmt = salesCostAmt.multiply(salesCreditRatio1Month);
				salesCostAmt = salesCostAmt.setScale(0, BigDecimal.ROUND_HALF_DOWN);
						
				revAmt1MonthMap = new LinkedHashMap();
				revAmt1MonthMap.put("month", stacYy +"-"+StringUtil.lpad(intYear,2));
				revAmt1MonthMap.put("amt", "" + salesCostAmt);
				revAmt1MonthList.add(revAmt1MonthMap);
						
			}
					
			idx++;
			intYear++;
		}
		
		//매출채권
		int size = revAmtList.size();
		String mapkey = "";
		BigDecimal revAmtTotal = BigDecimal.ZERO;
		for (int i = 0; i < size; i++) {
			
			revAmtTotal = BigDecimal.ZERO;
			revAmtMap = (Map) revAmtList.get(i);
			revAmt1MonthMap = (Map) revAmt1MonthList.get(i);
			
			revAmtTotal = revAmtTotal.add(new BigDecimal(StringUtil.nvl("" + revAmtMap.get("amt"),"0")));
			revAmtTotal = revAmtTotal.add(new BigDecimal(StringUtil.nvl("" + revAmt1MonthMap.get("amt"),"0")));
			
			mapkey = (String) revAmtMap.get("month"); 
			
			salesCreditAmtMap = new LinkedHashMap();
			salesCreditAmtMap.put("month", mapkey);
			salesCreditAmtMap.put("amt", ""+revAmtTotal);
			
			salesCreditAmtList.add(salesCreditAmtMap);
		}
		
		resultMap.put(CashFlowConst.매출액, salesAmtList); //매출액
		resultMap.put(CashFlowConst.당월매출액중미수금, revAmtList); //미수금(당월)
		resultMap.put(CashFlowConst.일개월전매출액중미수금, revAmt1MonthList); //미수금(1개월전)	
		resultMap.put(CashFlowConst.매출채권, salesCreditAmtList); //매출채권
		
		return resultMap;
	}

}
