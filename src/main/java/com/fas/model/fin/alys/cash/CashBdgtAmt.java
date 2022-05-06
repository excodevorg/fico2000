package com.fas.model.fin.alys.cash;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;

import com.fas.cmmn.util.FasNumberUtil;
import com.fas.web.cmmn.util.BeanUtils;

//현금예산
public class CashBdgtAmt extends CashFlowAlysis {
	
	private static Log logger = LogFactory.getLog(CashBdgtAmt.class);

	@Override
	public Map cal() throws Exception {
		
		Map resultMap = new LinkedHashMap();
		BeanUtils beanUtil = new BeanUtils();
		
		Map qsrt = null;
		Map rsv = null;
		List rsvList = null;
		
		Map cashBdgtAmtMap = new LinkedHashMap();
		Map cashNtFlowMap = new LinkedHashMap();
		
		List cashBdgtAmtList = new ArrayList();
		
		String answer = "";
		
		String stacYy = ""; //평가 추측년도
		
		CashFlowFactory factory = new CashFlowFactory();
		
		Map salesCashNtFlowMap = factory.getCashFlowAlysis(CashFlowConst.순현금흐름, qsrtInfo);
		
		List cashNtFlowList = (List) salesCashNtFlowMap.get("cashNtFlow");
		
		//최저 현금잔고보유수준 ?
		qsrt = (Map) qsrtInfo.get("qsrtNo8");
		qsrt = (Map) qsrt.get("no1");
		answer = "" + qsrt.get("rsltVl");
		BigDecimal mnmmCashHoldAmt = BigDecimal.ZERO; //최소현금보유액
		
		if (answer != null && answer != "") {
			mnmmCashHoldAmt = new BigDecimal(answer);
		}
		
		int size = 0;
		if (cashNtFlowList != null) size = cashNtFlowList.size();
		BigDecimal ttchBalnFrcsAmt = BigDecimal.ZERO; //총현금잔고예측치
		BigDecimal lcatFilafSmexFndsAcmlAmt = BigDecimal.ZERO; //부족액 충당 후 여유자금 누적액
		BigDecimal smamtSbafInsfFndsAcmlAmt = BigDecimal.ZERO; //여유액차감후부족자금누적액
		BigDecimal pmnhNtFndsPramOverSmexAmt = BigDecimal.ZERO; //월별순자금조달액및여유액
		BigDecimal cashNtFlowAmt = BigDecimal.ZERO; //순현금흐름액
		BigDecimal lastSmexAmt = BigDecimal.ZERO; //최종여유액
		BigDecimal lastInsfAmt = BigDecimal.ZERO; //최종부족금액
		
		
		for (int i = 0; i < size; i++) {
			
			cashNtFlowMap = (Map) cashNtFlowList.get(i);
			
			//최소현금 보유액
			cashNtFlowMap.put(CashFlowConst.최소현금보유액, "" + mnmmCashHoldAmt);

			if (cashNtFlowMap != null) {
				if (cashNtFlowMap.get(CashFlowConst.순현금흐름금액) != null) {
					cashNtFlowAmt = new BigDecimal((String) cashNtFlowMap.get(CashFlowConst.순현금흐름금액));
				}
			}
			
			if (i == 0) {
				ttchBalnFrcsAmt = cashNtFlowAmt;
				ttchBalnFrcsAmt = ttchBalnFrcsAmt.add(mnmmCashHoldAmt);
			} else {
				ttchBalnFrcsAmt = ttchBalnFrcsAmt.add(cashNtFlowAmt);
			}
			
			cashNtFlowMap.put(CashFlowConst.총현금잔고예측치, ""+ttchBalnFrcsAmt);
			
			//부족액 충당 후 여유자금 누적액
			if (FasNumberUtil.isSecondGreater(mnmmCashHoldAmt, ttchBalnFrcsAmt)) {
				lcatFilafSmexFndsAcmlAmt = ttchBalnFrcsAmt.subtract(mnmmCashHoldAmt);
			}
			cashNtFlowMap.put(CashFlowConst.부족액충당후여유자금누적액, lcatFilafSmexFndsAcmlAmt);
			
			//여유액 차감 후 부족자금 누적액
			if (FasNumberUtil.isFirstGreater(mnmmCashHoldAmt, ttchBalnFrcsAmt)) {
				smamtSbafInsfFndsAcmlAmt = mnmmCashHoldAmt.subtract(ttchBalnFrcsAmt);
			}
			
			cashNtFlowMap.put(CashFlowConst.여유액차감후부족자금누적액, smamtSbafInsfFndsAcmlAmt);
			
			//월별순자금조달액및여유액
			pmnhNtFndsPramOverSmexAmt = cashNtFlowAmt.multiply(new BigDecimal("-1"));
			cashNtFlowMap.put(CashFlowConst.월별순자금조달액및여유액, ""+pmnhNtFndsPramOverSmexAmt);
			
			//최종 여유액
			if (FasNumberUtil.isFirstGreater(cashNtFlowAmt, new BigDecimal("0"))) {
				cashNtFlowMap.put(CashFlowConst.최종여유액, ""+cashNtFlowAmt);
			} else {
				cashNtFlowMap.put(CashFlowConst.최종여유액, "0");
			}
			
			//최종 부족액
			if (FasNumberUtil.isSecondGreater(cashNtFlowAmt, new BigDecimal("0"))) {
				cashNtFlowMap.put(CashFlowConst.최종부족금액, ""+cashNtFlowAmt.multiply(new BigDecimal("-1")));
			} else {
				cashNtFlowMap.put(CashFlowConst.최종부족금액, "0");
			}
			
			cashBdgtAmtList.add(cashNtFlowMap);
		}
		
		resultMap.put("cashBdgt", cashBdgtAmtList);
		
		return resultMap;
	}
	
	
		
}
