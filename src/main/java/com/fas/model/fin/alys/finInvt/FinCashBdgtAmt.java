package com.fas.model.fin.alys.finInvt;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;

import com.fas.cmmn.util.FasNumberUtil;
import com.fas.web.cmmn.util.StringUtil;

public class FinCashBdgtAmt extends FinInvtAlysis {
	
	protected final static Log log = LogFactory.getLog(FinCashBdgtAmt.class);
	
	@Override
	public Map cal() throws Exception {
		// TODO Auto-generated method stub
		
		FinInvtFactory factory = new FinInvtFactory();
		
		Map resultMap = new LinkedHashMap();
		Map qsrt = null;
		Map rsv = null;
		List rsvList = null;
		String answer = "";
		
		Map FinInvtCashIncomeMap = factory.getFinInvtAlysis(FinInvtConst.현금수입수정, qsrtInfo, cashFlowQsrtInfo);
		List FinInvtCashIncomeList = (List) FinInvtCashIncomeMap.get(FinInvtConst.현금수입수정);
		
		Map FinInvtCashOutcomeMap = factory.getFinInvtAlysis(FinInvtConst.현금지출수정, qsrtInfo, cashFlowQsrtInfo);
		List FinInvtCashOutcomeList = (List) FinInvtCashOutcomeMap.get(FinInvtConst.현금지출수정);
		
		BigDecimal salesAmt = BigDecimal.ZERO;//매출액
		BigDecimal cashIncomeTotalAmt = BigDecimal.ZERO;//현금수입합계
		BigDecimal cashOutcomeTotalAmt = BigDecimal.ZERO;//현금지출합계
		BigDecimal cashNtFlowAmt = BigDecimal.ZERO;//순현금흐름금액
		BigDecimal mnmmCashHoldAmt = BigDecimal.ZERO;//최소현금보유액
		BigDecimal ttchBalnFrcsAmt = BigDecimal.ZERO;//총현금잔고예측치
		BigDecimal lcatFilafSmexFndsAcmlAmt = BigDecimal.ZERO; //부족액충당후여유자금누적액
		BigDecimal smamtSbafInsfFndsAcmlAmt = BigDecimal.ZERO; //여유액차감후부족자금누적액
		BigDecimal pmnhNtFndsPramOverSmexAmt = BigDecimal.ZERO; //월별순자금조달액및여유액
		BigDecimal lastSmexAmt = BigDecimal.ZERO; //최종여유액
		BigDecimal lastInsfAmt = BigDecimal.ZERO; //최종부족금액
		
		//최저 현금잔고보유수준 ?
		qsrt = (Map) cashFlowQsrtInfo.get("qsrtNo8");
		qsrt = (Map) qsrt.get("no1");
		answer = "" + qsrt.get("rsltVl");
		mnmmCashHoldAmt = BigDecimal.ZERO; //최소현금보유액
				
		if (answer != null && answer != "") {
			mnmmCashHoldAmt = new BigDecimal(answer);
		}
		
		Map finMap = null;
		List finList = new ArrayList();
		Map finOutMap = null;
		Map finInMap = null;
		
		int size = 0;
		
		if (FinInvtCashOutcomeList != null) size = FinInvtCashOutcomeList.size();
		
		for (int i = 0; i < size; i++) {
			finOutMap = (Map) FinInvtCashOutcomeList.get(i);
			log.debug("finOutMap ?>>>> " + finOutMap);
			finInMap = (Map) FinInvtCashIncomeList.get(i); 
			
			salesAmt = new BigDecimal(StringUtil.nvl("" + finInMap.get(FinInvtConst.매출액),"0"));
			cashIncomeTotalAmt = new BigDecimal(StringUtil.nvl("" + finInMap.get(FinInvtConst.당월총현금수입),"0"));
			
			cashOutcomeTotalAmt = new BigDecimal(StringUtil.nvl("" + finOutMap.get(FinInvtConst.지출액의합계),"0"));
			
			cashNtFlowAmt = cashIncomeTotalAmt.subtract(cashOutcomeTotalAmt);
			
			if (i == 0) {
				ttchBalnFrcsAmt = mnmmCashHoldAmt.add(cashNtFlowAmt);
			} else {
				ttchBalnFrcsAmt = ttchBalnFrcsAmt.add(cashNtFlowAmt);
			}
			
			if (FasNumberUtil.isFirstGreater(ttchBalnFrcsAmt, mnmmCashHoldAmt)) {
				smamtSbafInsfFndsAcmlAmt = ttchBalnFrcsAmt.subtract(mnmmCashHoldAmt);
			} else {
				smamtSbafInsfFndsAcmlAmt = BigDecimal.ZERO;
			}
			
			if (FasNumberUtil.isFirstGreater(mnmmCashHoldAmt, ttchBalnFrcsAmt)) {
				smamtSbafInsfFndsAcmlAmt = mnmmCashHoldAmt.subtract(ttchBalnFrcsAmt);
			} else {
				smamtSbafInsfFndsAcmlAmt = BigDecimal.ZERO;
			}
			
			pmnhNtFndsPramOverSmexAmt = cashNtFlowAmt.multiply(new BigDecimal("-1"));
			
			if (FasNumberUtil.isFirstGreater(cashNtFlowAmt, new BigDecimal("0"))) {
				lastSmexAmt = cashNtFlowAmt;
			} else {
				lastSmexAmt = BigDecimal.ZERO;
			}
			
			if (FasNumberUtil.isFirstGreater(new BigDecimal("0"), cashNtFlowAmt)) {
				lastInsfAmt = cashNtFlowAmt.multiply(new BigDecimal("-1"));
			} else {
				lastInsfAmt = BigDecimal.ZERO;
			}
						
			finMap = new LinkedHashMap();
			
			finMap.put("month", "" + finInMap.get("month"));
			finMap.put(FinInvtConst.매출액, salesAmt.setScale(0, BigDecimal.ROUND_HALF_UP));
			finMap.put(FinInvtConst.당월총현금수입, cashIncomeTotalAmt.setScale(0, BigDecimal.ROUND_HALF_UP));
			finMap.put(FinInvtConst.지출액의합계, cashOutcomeTotalAmt.setScale(0, BigDecimal.ROUND_HALF_UP));
			finMap.put(FinInvtConst.순현금흐름금액, cashNtFlowAmt.setScale(0, BigDecimal.ROUND_HALF_UP));
			finMap.put(FinInvtConst.최소현금보유액, mnmmCashHoldAmt.setScale(0, BigDecimal.ROUND_HALF_UP));
			finMap.put(FinInvtConst.총현금잔고예측치, ttchBalnFrcsAmt.setScale(0, BigDecimal.ROUND_HALF_UP));
			finMap.put(FinInvtConst.부족액충당후여유자금누적액, lcatFilafSmexFndsAcmlAmt.setScale(0, BigDecimal.ROUND_HALF_UP));
			finMap.put(FinInvtConst.여유액차감후부족자금누적액, smamtSbafInsfFndsAcmlAmt.setScale(0, BigDecimal.ROUND_HALF_UP));
			finMap.put(FinInvtConst.월별순자금조달액및여유액, pmnhNtFndsPramOverSmexAmt.setScale(0, BigDecimal.ROUND_HALF_UP));
			finMap.put(FinInvtConst.최종여유액, lastSmexAmt.setScale(0, BigDecimal.ROUND_HALF_UP));
			finMap.put(FinInvtConst.최종부족금액, lastInsfAmt.setScale(0, BigDecimal.ROUND_HALF_UP));
			
			finList.add(finMap);
			
		}
		
		resultMap.put(FinInvtConst.현금예산, finList);
		
		return resultMap;
	}

}
