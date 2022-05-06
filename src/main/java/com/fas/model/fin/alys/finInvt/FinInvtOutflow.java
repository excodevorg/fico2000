package com.fas.model.fin.alys.finInvt;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;

import com.fas.web.cmmn.util.BeanUtils;
import com.fas.web.cmmn.util.StringUtil;

public class FinInvtOutflow extends FinInvtAlysis {

	@Override
	public Map cal() throws Exception {
		// TODO Auto-generated method stub
		
		Map resultMap = new LinkedHashMap();
		BeanUtils beanUtil = new BeanUtils();
		
		Map qsrt = null;
		Map rsv = null;
		Map rsv1Month = null;
		List qrstList = new ArrayList();
		Map loanMap = null;

		for (int i = 1; i <= 12; i++) {
			rsv = new LinkedHashMap();
			rsv.put("month", StringUtil.lpad(i,2));
			rsv.put(FinInvtConst.운전자금내입금액, "0");
			rsv.put(FinInvtConst.시설자금상환금액, "0");
			rsv.put(FinInvtConst.차입금상환누계액, "0");
			rsv.put(FinInvtConst.비용감소분, "0");
			rsv.put(FinInvtConst.차입금상환총누계액, "0");
			rsv.put(FinInvtConst.당월이자금액, "0");
			rsv.put(FinInvtConst.연구비용, "0");
			rsv.put(FinInvtConst.고정자산시설증대금액, "0");
			rsv.put(FinInvtConst.회사채상환금액, "0");
			rsv.put(FinInvtConst.재고자산증가금액, "0");
			qrstList.add(rsv);
		}
		
		List loanList = new ArrayList();
		String baseYm = "";
		int intBaseYm = 0;
		int size = 0;
		BigDecimal interestRto = BigDecimal.ZERO;
		BigDecimal interestAmt = BigDecimal.ZERO;
		BigDecimal loanAmt = BigDecimal.ZERO;
		BigDecimal loan1MonthAmt = BigDecimal.ZERO;
		
		Map cashFlowQsrtMap = null;
		List cashFlowQsrtList = null;
		BigDecimal cashFlowAmt = BigDecimal.ZERO;
		String kindNm = "";
		
		//운전
		qsrt = (Map) this.qsrtInfo.get("qsrtNo1");
		loanList = (List) qsrt.get("no1");
		size = loanList.size();
		
		for (int i = 0; i < size; i++) {
			
			loanMap = (Map) loanList.get(i);
			
			baseYm = StringUtil.nvl("" + loanMap.get("baseYm"));
			if (baseYm.length() > 4) {
				intBaseYm = Integer.parseInt(baseYm.substring(4));
			} else {
				if (!StringUtil.isEmpty(baseYm)) {intBaseYm = Integer.parseInt(baseYm);} else {intBaseYm = 0;}
			}
			
			loanAmt = BigDecimal.ZERO;
			
			if (intBaseYm > 0) {
				rsv = (Map) qrstList.get(intBaseYm - 1);
				
				loanAmt = new BigDecimal(StringUtil.nvl("" + rsv.get(FinInvtConst.운전자금내입금액),"0"));
				loanAmt = loanAmt.add(new BigDecimal(StringUtil.nvl(""+loanMap.get("rsltVl"),"0")));
				rsv.put(FinInvtConst.운전자금내입금액, loanAmt);
			}
			
		}
		
		//시설자금상환금액
		qsrt = (Map) this.qsrtInfo.get("qsrtNo1");
		loanList = (List) qsrt.get("no2");
		size = loanList.size();
		
		for (int i = 0; i < size; i++) {
			
			loanMap = (Map) loanList.get(i);
			baseYm = StringUtil.nvl("" + loanMap.get("baseYm"));
			if (baseYm.length() > 4) {
				intBaseYm = Integer.parseInt(baseYm.substring(4));
			} else {
				if (!StringUtil.isEmpty(baseYm)) {intBaseYm = Integer.parseInt(baseYm);} else {intBaseYm = 0;}
			}
			
			loanAmt = BigDecimal.ZERO;
			
			if (intBaseYm > 0) {				
				rsv = (Map) qrstList.get(intBaseYm - 1);
				
				loanAmt = new BigDecimal(StringUtil.nvl("" + rsv.get(FinInvtConst.시설자금상환금액),"0"));
				loanAmt = loanAmt.add(new BigDecimal(StringUtil.nvl(""+loanMap.get("rsltVl"),"0")));
				rsv.put(FinInvtConst.시설자금상환금액, loanAmt);
			}
		}
		
		//소계
		size = qrstList.size();
		
		for (int i = 0; i < size; i++) {
			
			rsv = (Map) qrstList.get(i);
			
			loanAmt = new BigDecimal(StringUtil.nvl("" + rsv.get(FinInvtConst.운전자금내입금액),"0"));
			loanAmt = loanAmt.add(new BigDecimal(StringUtil.nvl("" + rsv.get(FinInvtConst.시설자금상환금액),"0")));
			
			rsv.put(FinInvtConst.차입금상환누계액, loanAmt);
			
		}
		
		//비용감소분
		qsrt = (Map) this.qsrtInfo.get("qsrtNo11");
		loanMap = (Map) qsrt.get("no1");
		size = qrstList.size();
		
		interestRto = new BigDecimal(StringUtil.nvl(""+loanMap.get("rsltVl"),"0"));
		interestRto = interestRto.divide(new BigDecimal(100), 6, BigDecimal.ROUND_HALF_UP);
		
		for (int i = 0; i < size; i++) {
			
			rsv = (Map) qrstList.get(i);
			
			loanAmt = new BigDecimal(StringUtil.nvl("" + rsv.get(FinInvtConst.차입금상환누계액),"0"));
			loanAmt = loanAmt.multiply(interestRto);
			loanAmt = loanAmt.setScale(0,BigDecimal.ROUND_HALF_UP);
			rsv.put(FinInvtConst.비용감소분, loanAmt);
			
		}

		//소계 및 당월 이자 비용
		qsrt = (Map) this.cashFlowQsrtInfo.get("qsrtNo4");
		cashFlowQsrtList = (List) qsrt.get("no1");
		//기존대출 이자비용
		cashFlowAmt = BigDecimal.ZERO;
		size = cashFlowQsrtList.size();
		for (int i = 0; i < size; i++) {
			cashFlowQsrtMap = (Map) cashFlowQsrtList.get(i);
			kindNm = "" + cashFlowQsrtMap.get("kindNm");
			if (kindNm == null) kindNm = "";
			if (kindNm.equals("이자비용")) {
				cashFlowAmt = cashFlowAmt.add(new BigDecimal(StringUtil.nvl("" + cashFlowQsrtMap.get("rsltVl"),"0")));
			}
		}
		
		size = qrstList.size();
		for (int i = 0; i < size; i++) {
			
			rsv = (Map) qrstList.get(i);
			loanAmt = BigDecimal.ZERO;
			interestAmt = BigDecimal.ZERO;
			
			if (i == 0) {
				loanAmt = new BigDecimal(StringUtil.nvl("" + rsv.get(FinInvtConst.차입금상환누계액),"0"));
				loanAmt = loanAmt.multiply(interestRto);
				interestAmt = cashFlowAmt.subtract(loanAmt);
				rsv.put(FinInvtConst.차입금상환총누계액, loanAmt.setScale(0,BigDecimal.ROUND_HALF_UP));
				rsv.put(FinInvtConst.차입금상환총누계액소수점, loanAmt);
			} else {
				rsv1Month = (Map) qrstList.get(i-1);
				loanAmt = new BigDecimal(StringUtil.nvl("" + rsv.get(FinInvtConst.차입금상환누계액),"0"));
				loanAmt = loanAmt.multiply(interestRto);	
				loanAmt = loanAmt.add(new BigDecimal(StringUtil.nvl("" + rsv1Month.get(FinInvtConst.차입금상환총누계액소수점),"0")));
				interestAmt = cashFlowAmt.subtract(loanAmt);
				rsv.put(FinInvtConst.차입금상환총누계액, loanAmt.setScale(0,BigDecimal.ROUND_HALF_UP));
				rsv.put(FinInvtConst.차입금상환총누계액소수점, loanAmt);
			}
			
			rsv.put(FinInvtConst.당월이자금액소수점, interestAmt);
			rsv.put(FinInvtConst.당월이자금액, interestAmt.setScale(0,BigDecimal.ROUND_HALF_UP));
		}	
		
		//R&D
		qsrt = (Map) this.qsrtInfo.get("qsrtNo3");
		loanList = (List) qsrt.get("no1");
		size = loanList.size();
		
		for (int i = 0; i < size; i++) {
			
			loanMap = (Map) loanList.get(i);
			baseYm = StringUtil.nvl("" + loanMap.get("baseYm"));
			if (baseYm.length() > 4) {
				intBaseYm = Integer.parseInt(baseYm.substring(4));
			} else {
				if (!StringUtil.isEmpty(baseYm)) {intBaseYm = Integer.parseInt(baseYm);} else {intBaseYm = 0;}
			}
			
			loanAmt = BigDecimal.ZERO;
			if (intBaseYm > 0) {
				rsv = (Map) qrstList.get(intBaseYm - 1);
				loanAmt = new BigDecimal(StringUtil.nvl("" + rsv.get(FinInvtConst.연구비용),"0"));
				loanAmt = loanAmt.add(new BigDecimal(StringUtil.nvl(""+loanMap.get("rsltVl"),"0")));
				rsv.put(FinInvtConst.연구비용, loanAmt);
				
			}
			
			
		}
		
		//고정자산시설증대금액
		qsrt = (Map) this.qsrtInfo.get("qsrtNo4");
		loanList = (List) qsrt.get("no1");
		size = loanList.size();
		
		for (int i = 0; i < size; i++) {
			
			loanMap = (Map) loanList.get(i);
			baseYm = StringUtil.nvl("" + loanMap.get("baseYm"));
			if (baseYm.length() > 4) {
				intBaseYm = Integer.parseInt(baseYm.substring(4));
			} else {
				if (!StringUtil.isEmpty(baseYm)) {intBaseYm = Integer.parseInt(baseYm);} else {intBaseYm = 0;}
			}
			
			loanAmt = BigDecimal.ZERO;
			if (intBaseYm > 0) {
				rsv = (Map) qrstList.get(intBaseYm - 1);				
				loanAmt = new BigDecimal(StringUtil.nvl("" + rsv.get(FinInvtConst.고정자산시설증대금액),"0"));
				loanAmt = loanAmt.add(new BigDecimal(StringUtil.nvl(""+loanMap.get("rsltVl"),"0")));				
				rsv.put(FinInvtConst.고정자산시설증대금액, loanAmt);
			}	
		}
		
		//회사채발행금액
		qsrt = (Map) this.qsrtInfo.get("qsrtNo6");
		loanList = (List) qsrt.get("no2");
		size = loanList.size();
		
		for (int i = 0; i < size; i++) {
			
			loanMap = (Map) loanList.get(i);
			baseYm = StringUtil.nvl("" + loanMap.get("baseYm"));
			if (baseYm.length() > 4) {
				intBaseYm = Integer.parseInt(baseYm.substring(4));
			} else {
				if (!StringUtil.isEmpty(baseYm)) {intBaseYm = Integer.parseInt(baseYm);} else {intBaseYm = 0;}
			}

			loanAmt = BigDecimal.ZERO;
			if (intBaseYm > 0) {
				rsv = (Map) qrstList.get(intBaseYm - 1);
				
				loanAmt = new BigDecimal("" + rsv.get(FinInvtConst.회사채상환금액));
				loanAmt = loanAmt.add(new BigDecimal(StringUtil.nvl(""+loanMap.get("rsltVl"),"0")));			
				rsv.put(FinInvtConst.회사채상환금액, loanAmt);
			}
			
		}	
		
		//재고자산
		Map storedAssetAmtMap = new LinkedHashMap();
		
		qsrt = (Map) this.qsrtInfo.get("qsrtNo7");
		storedAssetAmtMap = (Map) qsrt.get("no1");
		
		rsv = (Map) qrstList.get(11);
		BigDecimal fixAssetAmt = new BigDecimal(StringUtil.nvl("" + storedAssetAmtMap.get("rsltVl"),"0"));
		
		rsv.put(FinInvtConst.재고자산증가금액, "" + fixAssetAmt);
		
		resultMap.put(FinInvtConst.유출, qrstList);
		
		return resultMap;
	}

}
