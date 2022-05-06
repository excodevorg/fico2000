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

//현금지출
public class CashOutCome extends CashFlowAlysis {
	
	private static Log logger = LogFactory.getLog(CashOutCome.class);

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
		
		Map cashOutComeMap = new LinkedHashMap();
		List cashOutComeList = new ArrayList();
		
		BigDecimal salesAmt = BigDecimal.ZERO; //매출액
		BigDecimal salesCostAmt = BigDecimal.ZERO; //매출액 원가
		BigDecimal mnepAmt = BigDecimal.ZERO; //판매비와 관리비
		BigDecimal inepAmt = BigDecimal.ZERO; //이자비용금액
		String crtxMonth = "";
		BigDecimal crtxAmt = BigDecimal.ZERO; //법인세금액
		BigDecimal cashDvdnAmt = BigDecimal.ZERO; //현금배당금액
		String cashDvdnMonth = ""; 
		
		BigDecimal cashOutComeTotalAmt = BigDecimal.ZERO; //총지출금액 
		
		//평가 추측 년도
		qsrt = (Map) qsrtInfo.get("qsrtNo0");
		qsrt = (Map) qsrt.get("no1");
		stacYy = "" + qsrt.get("rsltVl");
		
		if (StringUtil.isEmpty(stacYy)) {
			stacYy = FasDateUtil.getCurrentDay().substring(0,4);
		}
		
		//고정적 지출
		//판매관리비
		qsrt = (Map) qsrtInfo.get("qsrtNo4");
		rsvList = (List) qsrt.get("no1");
		answer = "" + ((Map) rsvList.get(2)).get("rsltVl");
		
		mnepAmt = new BigDecimal(StringUtil.nvl(answer,"0"));
		
		//이자비용
		answer = "" + ((Map) rsvList.get(1)).get("rsltVl");
		inepAmt = new BigDecimal(StringUtil.nvl(answer,"0"));
		
		//작년도 법인세는 몇월에 ?
		qsrt = (Map) qsrtInfo.get("qsrtNo5");
		qsrt = (Map) qsrt.get("no1");
		answer = StringUtil.nvl("" + qsrt.get("rsltVl"),"0");
		logger.debug("crtxMonth1 >>> " + answer);
		
		if (answer != null && answer.length() > 0) crtxMonth = StringUtil.lpad(Integer.parseInt(answer),2);
		crtxMonth = stacYy + "-" + crtxMonth;
		
		logger.debug("crtxMonth2 >>> " + crtxMonth);
		
		//작년도 법인세 금액은 ?
		qsrt = (Map) qsrtInfo.get("qsrtNo6");
		qsrt = (Map) qsrt.get("no1");
		answer = "" + qsrt.get("rsltVl");
		crtxAmt = new BigDecimal(StringUtil.nvl(answer,"0"));

		//배당월 ? 
		qsrt = (Map) qsrtInfo.get("qsrtNo11");
		qsrt = (Map) qsrt.get("no1");
		if (qsrt.get("rsltVl") != null) {
			answer = "" + qsrt.get("rsltVl");
		} else {
			answer = "";
		}
		logger.debug("cashDvdnMonth1 >>> " + answer);
		
		if (answer != null && answer.length() > 0) cashDvdnMonth = StringUtil.lpad(Integer.parseInt(answer),2);
		cashDvdnMonth = stacYy + "-" + cashDvdnMonth;
		
		logger.debug("cashDvdnMonth2 >>> " + cashDvdnMonth);
		
		//배당금액 ? 
		qsrt = (Map) qsrtInfo.get("qsrtNo11");
		qsrt = (Map) qsrt.get("no2");
		if (qsrt.get("rsltVl") != null) {
			answer = "" + qsrt.get("rsltVl");
		} else {
			answer = "0";
		}
		
		cashDvdnAmt = new BigDecimal(answer);
		
		//전체 매출액 예측
		Map salesMap = salesList();
		
		Set setKey = salesMap.keySet();
		Iterator itr = setKey.iterator();
		
		int idx = 0;
		int startIdx = 3;
		int endIdx = startIdx + 12;
		String key = "";
		String strAmt = "0";
		int intYear = 0;
		
		//매출원가
		CashFlowFactory factory = new CashFlowFactory();
		Map salesPredictMap = factory.getCashFlowAlysis(CashFlowConst.매출액예측, qsrtInfo);
		
		List salesCostListBefore = (List) salesPredictMap.get("salesCostBefore");
		List salesCostListAfter = (List) salesPredictMap.get("salesCostAfter");
		
		logger.debug(">>> OutCome1 >>> " + salesCostListBefore);
		logger.debug(">>> OutCome2 >>> " + salesCostListAfter);
		
		beanUtil.toString(salesPredictMap);
		
		Map salesCostMap = null;
		String salesCostMonth = "";
		
		while(itr.hasNext()) {
			
			key = (String) itr.next();
			
			if (idx >= startIdx && idx < endIdx) {
				strAmt = "" + salesMap.get(key);
				
				if (StringUtil.isEmpty(strAmt)) {
					strAmt = "0";
				}
				
				cashOutComeMap = new LinkedHashMap();
				cashOutComeMap.put("month", key);
				cashOutComeMap.put(CashFlowConst.매출액, strAmt);
				
				int salesIntAmt = 0;
				if (salesCostListAfter != null && salesCostListAfter.size() > 0) {
					salesCostAmt = BigDecimal.ZERO;
					salesCostMap = (Map) salesCostListAfter.get(intYear);
					if (!StringUtil.isEmpty(""+salesCostMap.get("amt"))) {
						salesCostAmt = new BigDecimal(""+salesCostMap.get("amt"));
					} else {
						salesCostAmt = BigDecimal.ZERO;
					}
					salesIntAmt = salesCostAmt.intValue();
				}
				
				if (salesIntAmt > 0) {
					cashOutComeMap.put(CashFlowConst.매출원가, "" + salesCostAmt); //매출원가
				} else {
					if (salesCostListBefore != null && salesCostListBefore.size() > 0) {
						salesCostMap = (Map) salesCostListBefore.get(intYear);
						if (!StringUtil.isEmpty(""+salesCostMap.get("amt"))) {
							salesCostAmt = new BigDecimal(""+salesCostMap.get("amt"));
						} else {
							salesCostAmt = BigDecimal.ZERO;
						}
						
						salesIntAmt = salesCostAmt.intValue();
						if (salesIntAmt > 0) {
							cashOutComeMap.put(CashFlowConst.매출원가, "" + salesCostAmt); //매출원가
						}
					} else {
						cashOutComeMap.put(CashFlowConst.매출원가, "0"); //매출원가
					}
				}
				
				cashOutComeMap.put(CashFlowConst.판매비와관리비, "" + mnepAmt); //판매비와 관리비 (고정비용)
				cashOutComeMap.put(CashFlowConst.이자비용, "" + inepAmt); //이자비용(고정비용)
				
				cashOutComeTotalAmt = BigDecimal.ZERO; //총지출금액 
				cashOutComeTotalAmt = cashOutComeTotalAmt.add(salesCostAmt);
				cashOutComeTotalAmt = cashOutComeTotalAmt.add(mnepAmt);
				cashOutComeTotalAmt = cashOutComeTotalAmt.add(inepAmt);
				
				//logger.debug("crtxMonth >>>> " + key + " : " + crtxMonth);
				
				//법인세 월
				if (key.equals(crtxMonth)) {
					cashOutComeMap.put(CashFlowConst.법인세, "" + crtxAmt);
					cashOutComeTotalAmt = cashOutComeTotalAmt.add(crtxAmt);
				} else {
					cashOutComeMap.put(CashFlowConst.법인세, "0");
				}
				
				//logger.debug("cashDvdnMonth >>>> " + key + " : " + cashDvdnMonth);
				
				//현금배당금액
				if (key.equals(cashDvdnMonth)) {
					cashOutComeMap.put(CashFlowConst.현금배당, "" + cashDvdnAmt);
					cashOutComeTotalAmt = cashOutComeTotalAmt.add(cashDvdnAmt);
				} else {
					cashOutComeMap.put(CashFlowConst.현금배당, "0");
				}				
				
				//총지출비용
				cashOutComeMap.put(CashFlowConst.지출액의합계, ""+cashOutComeTotalAmt);
				cashOutComeList.add(cashOutComeMap);
				intYear++;
			}
			
			idx++;
		}
		
		resultMap.put("cashOutCome", cashOutComeList);
		
		return resultMap;
	}
	
	
	
}
