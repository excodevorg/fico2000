package com.fas.model.fin.alys.finInvt;

import java.math.BigDecimal;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;

import com.fas.cmmn.util.FasNumberUtil;
import com.fas.web.cmmn.util.StringUtil;

public class FinInvtSuprtOutflow extends FinInvtAlysis {

	@Override
	public Map cal() throws Exception {
		// TODO Auto-generated method stub
		
		FinInvtFactory factory = new FinInvtFactory();
		
		Map resultMap = new LinkedHashMap();
		Map qsrt = null;
		Map rsv = null;
		List rsvList = null;
		String answer = "";
		
		Map FinInvtSuprtOutflowMap = factory.getFinInvtAlysis(FinInvtConst.유출, qsrtInfo, cashFlowQsrtInfo);
		List FinInvtSuprtOutflowList = (List) FinInvtSuprtOutflowMap.get(FinInvtConst.유출);
		Map finMap = null;
		Map interestMap = null;
		
		//운전
		qsrt = (Map) this.qsrtInfo.get("qsrtNo8");
		List workLoanList = (List) qsrt.get("no1");
		int size = 0;
		int size01 = 0;
		
		//시설
		qsrt = (Map) this.qsrtInfo.get("qsrtNo9");
		List equipLoanList = (List) qsrt.get("no1");
		
		BigDecimal interestIncAmt = BigDecimal.ZERO; //이자 증가분
		BigDecimal interestIncTotalAmt = BigDecimal.ZERO; //이자 증가분 
		BigDecimal rsvAmt = BigDecimal.ZERO; 
		BigDecimal rsvRatio = BigDecimal.ZERO;
		
		if (FinInvtSuprtOutflowList != null) size = FinInvtSuprtOutflowList.size();
		if (workLoanList != null) size01 = workLoanList.size();
		
		String baseYm = "";
		int intBaseYm = 0;
		
		for (int i = 0; i < size; i++) {
			finMap = (Map) FinInvtSuprtOutflowList.get(i);
			finMap.put(FinInvtConst.운전자금이자증가분, new BigDecimal("0"));
			finMap.put(FinInvtConst.시설자금이자증가분, new BigDecimal("0"));
			finMap.put(FinInvtConst.당월총이자금액, new BigDecimal("0"));
		}
		
		for (int i = 0; i < size01; i++) {
			interestMap = (Map) workLoanList.get(i);
			interestIncAmt = BigDecimal.ZERO;
			interestIncTotalAmt = BigDecimal.ZERO;
			
			baseYm = StringUtil.nvl("" + interestMap.get("baseYm"));
			if (baseYm.length() > 4) {
				intBaseYm = Integer.parseInt(baseYm.substring(4));
			} else {
				if (!StringUtil.isEmpty(baseYm)) {intBaseYm = Integer.parseInt(baseYm);} else {intBaseYm = 0;}
			}
			
			if (intBaseYm > 0) {
				finMap = (Map) FinInvtSuprtOutflowList.get(intBaseYm - 1);
					
				interestIncTotalAmt = new BigDecimal("" + finMap.get(FinInvtConst.운전자금이자증가분));
								
				rsvAmt = new BigDecimal(StringUtil.nvl("" + interestMap.get("rsltVl"),"0"));
				rsvRatio = new BigDecimal(StringUtil.nvl("" + interestMap.get("etcIrt"),"0"));
				rsvRatio = rsvRatio.divide(new BigDecimal(100), 10, BigDecimal.ROUND_HALF_UP);
				rsvRatio = rsvRatio.divide(new BigDecimal(12), 10, BigDecimal.ROUND_HALF_UP);
				
				interestIncAmt = rsvAmt.multiply(rsvRatio);
				interestIncTotalAmt = interestIncTotalAmt.add(interestIncAmt);
				
				finMap.put(FinInvtConst.운전자금이자증가분, "" + interestIncTotalAmt.setScale(0,BigDecimal.ROUND_HALF_UP));
			}
		}
		
		size01 = 0;
		if (equipLoanList != null) size01 = equipLoanList.size();
		
		for (int i = 0; i < size01; i++) {
			interestMap = (Map) equipLoanList.get(i);
			interestIncAmt = BigDecimal.ZERO;
			interestIncTotalAmt = BigDecimal.ZERO;
			
			baseYm = StringUtil.nvl("" + interestMap.get("baseYm"));
			if (baseYm.length() > 4) {
				intBaseYm = Integer.parseInt(baseYm.substring(4));
			} else {
				if (!StringUtil.isEmpty(baseYm)) {intBaseYm = Integer.parseInt(baseYm);} else {intBaseYm = 0;}
			}
			
			System.out.println(intBaseYm);
			
			if (intBaseYm > 0) {
				finMap = (Map) FinInvtSuprtOutflowList.get(intBaseYm - 1);
					
				interestIncTotalAmt = new BigDecimal(StringUtil.nvl("" + finMap.get(FinInvtConst.시설자금이자증가분),"0"));
									
				rsvAmt = new BigDecimal(StringUtil.nvl("" + interestMap.get("rsltVl"),"0"));
				rsvRatio = new BigDecimal(StringUtil.nvl("" + interestMap.get("etcIrt"),"0"));
				rsvRatio = rsvRatio.divide(new BigDecimal(100), 10, BigDecimal.ROUND_HALF_UP);
				rsvRatio = rsvRatio.divide(new BigDecimal(12), 10, BigDecimal.ROUND_HALF_UP);
				
				interestIncAmt = rsvAmt.multiply(rsvRatio);
				interestIncTotalAmt = interestIncTotalAmt.add(interestIncAmt);
				
				finMap.put(FinInvtConst.시설자금이자증가분, "" + interestIncTotalAmt.setScale(0,BigDecimal.ROUND_HALF_UP));
			}
		}
		
		interestIncTotalAmt = BigDecimal.ZERO;
		BigDecimal interestIncAmt01 = BigDecimal.ZERO;
		BigDecimal interestIncTotalAmt01 = BigDecimal.ZERO;
		
		BigDecimal interestIncTotalAmt02 = BigDecimal.ZERO;
		BigDecimal interestIncTotalAmt03 = BigDecimal.ZERO;
		
		for (int i = 0; i < size; i++) {
			finMap = (Map) FinInvtSuprtOutflowList.get(i);
			interestIncAmt = BigDecimal.ZERO;
			interestIncAmt = new BigDecimal(StringUtil.nvl("" + finMap.get(FinInvtConst.운전자금이자증가분),"0"));
			interestIncTotalAmt = interestIncTotalAmt.add(interestIncAmt);
			
			finMap.put(FinInvtConst.운전자금이자증가분, interestIncTotalAmt.setScale(0,BigDecimal.ROUND_HALF_UP));
			
			interestIncAmt01 = new BigDecimal(StringUtil.nvl("" + finMap.get(FinInvtConst.시설자금이자증가분),"0"));
			interestIncTotalAmt01 = interestIncTotalAmt01.add(interestIncAmt01);
			finMap.put(FinInvtConst.시설자금이자증가분, interestIncTotalAmt01.setScale(0,BigDecimal.ROUND_HALF_UP));
			
			interestIncTotalAmt02 = BigDecimal.ZERO;
			interestIncTotalAmt02 = interestIncTotalAmt02.add(interestIncTotalAmt);
			interestIncTotalAmt02 = interestIncTotalAmt02.add(interestIncTotalAmt01);
			finMap.put(FinInvtConst.이자증가분, interestIncTotalAmt02.setScale(0,BigDecimal.ROUND_HALF_UP));
			
			interestIncTotalAmt03 = new BigDecimal(StringUtil.nvl("" + finMap.get(FinInvtConst.당월이자금액소수점),"0"));
			interestIncTotalAmt03 = interestIncTotalAmt03.add(interestIncTotalAmt02);
			finMap.put(FinInvtConst.당월총이자금액, interestIncTotalAmt03.setScale(0,BigDecimal.ROUND_HALF_UP));
		}
		
		resultMap.put(FinInvtConst.공급시비용유출, FinInvtSuprtOutflowList);
			
		return resultMap;
	}
	
}
