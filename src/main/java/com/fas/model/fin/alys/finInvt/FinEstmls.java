package com.fas.model.fin.alys.finInvt;

import java.math.BigDecimal;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;

import com.fas.cmmn.util.FasNumberUtil;
import com.fas.model.fin.alys.cash.CashFlowConst;
import com.fas.model.fin.alys.cash.CashFlowFactory;
import com.fas.web.cmmn.util.StringUtil;

public class FinEstmls extends FinInvtAlysis {

	@Override
	public Map cal() throws Exception {
		// TODO Auto-generated method stub
		
		CashFlowFactory factory = new CashFlowFactory();
		
		FinInvtFactory factory01 = new FinInvtFactory();
		
		Map cashFlowMap = factory.getCashFlowAlysis(CashFlowConst.추정손익계산서, cashFlowQsrtInfo);
		
		Map finFlowMap = factory01.getFinInvtAlysis(FinInvtConst.공급시비용유출, qsrtInfo, cashFlowQsrtInfo);
		
		List finFlowList = (List) finFlowMap.get(FinInvtConst.공급시비용유출);
		
		Map finFlowMap01 = factory01.getFinInvtAlysis(FinInvtConst.현금예산, qsrtInfo, cashFlowQsrtInfo);
		
		List finFlowList01 = (List) finFlowMap01.get(FinInvtConst.현금예산);
		
		Map finEstmlsMap = new LinkedHashMap();
		
		//영업이익
		BigDecimal opprAmt = BigDecimal.ZERO;
		//매출액
		BigDecimal salesTotalAmt = BigDecimal.ZERO;
		//매출원가
		BigDecimal salesCostAmt = BigDecimal.ZERO;
		BigDecimal salesCostTotalAmt = BigDecimal.ZERO;
		//이자비용
		BigDecimal inepTotalAmt = BigDecimal.ZERO;
		//판매비
		BigDecimal mnepTotalAmt = BigDecimal.ZERO;
		//법인세
		BigDecimal crtxTotalAmt = BigDecimal.ZERO;
		//
		BigDecimal ratio = BigDecimal.ZERO;
		//매출총이익
		BigDecimal amslPrftAmt = BigDecimal.ZERO;
		
		//영업외비용
		BigDecimal opprNoCostAmt = BigDecimal.ZERO;
		
		//매출액
		finEstmlsMap.put("salesAmt", StringUtil.nvl(""+cashFlowMap.get("salesAmt"),"0"));
		salesTotalAmt = new BigDecimal(StringUtil.nvl(""+cashFlowMap.get("salesAmt"),"0"));
		//비율
		finEstmlsMap.put("salesAmtRatio", StringUtil.nvl(""+cashFlowMap.get("salesAmtRatio"),"0"));
		
		//매출원가
		finEstmlsMap.put("salesCostAmt", StringUtil.nvl(""+cashFlowMap.get("salesCostAmt"),"0"));
		salesCostAmt = new BigDecimal(StringUtil.nvl(""+cashFlowMap.get("salesCostAmt"),"0"));
		
		//비율
		finEstmlsMap.put("salesCostAmtRatio", StringUtil.nvl(""+cashFlowMap.get("salesCostAmtRatio"),"0"));		
		
		//매출총이익
		finEstmlsMap.put("amslPrftAmt", StringUtil.nvl(""+cashFlowMap.get("amslPrftAmt"),"0"));
		amslPrftAmt = new BigDecimal(StringUtil.nvl(""+cashFlowMap.get("amslPrftAmt"),"0"));
		
		//비율
		finEstmlsMap.put("amslPrftAmtRatio", StringUtil.nvl(""+cashFlowMap.get("amslPrftAmtRatio"),"0"));		
		
		//판매관리비
		finEstmlsMap.put("mnepAmt", StringUtil.nvl(""+cashFlowMap.get("mnepAmt"),"0"));
		mnepTotalAmt = new BigDecimal(StringUtil.nvl(""+cashFlowMap.get("mnepAmt"),"0"));
		
		//비율
		finEstmlsMap.put("mnepAmtRatio", StringUtil.nvl(""+cashFlowMap.get("mnepAmtRatio"),"0"));
		
		//영업이익
		finEstmlsMap.put("opprAmt", StringUtil.nvl(""+cashFlowMap.get("opprAmt"),"0"));
		opprAmt = new BigDecimal(StringUtil.nvl(""+cashFlowMap.get("opprAmt"),"0"));
		
		//비율
		finEstmlsMap.put("opprAmtRatio", StringUtil.nvl(""+cashFlowMap.get("opprAmtRatio"),"0"));
		
		//영업외이익
		BigDecimal opprNoAmt = BigDecimal.ZERO;
		finEstmlsMap.put("opprNoAmt", "0");
		
		BigDecimal opprNoAmtRatio =  BigDecimal.ZERO;
		if (!FasNumberUtil.isEquals(salesTotalAmt, BigDecimal.ZERO)) {
			opprNoAmtRatio = opprNoAmt.divide(salesTotalAmt, 10, BigDecimal.ROUND_HALF_UP);
			opprNoAmtRatio = opprNoAmtRatio.multiply(new BigDecimal("100"));
		} else {
			opprNoAmtRatio = BigDecimal.ZERO;
		}
		finEstmlsMap.put("opprNoAmtRatio", StringUtil.nvl("" + opprNoAmtRatio.setScale(2, BigDecimal.ROUND_HALF_UP),"0"));
				
		int size = 0;
		
		if (finFlowList != null) size = finFlowList.size();
		opprNoCostAmt = BigDecimal.ZERO;
		BigDecimal lastSmexAmt = BigDecimal.ZERO; //최종여유액
		BigDecimal lastInsfAmt = BigDecimal.ZERO; //최종부족금액
		Map finMap = null;
		
		for (int i = 0; i < size; i++) {
			finMap = (Map) finFlowList.get(i);
			opprNoCostAmt = opprNoCostAmt.add(new BigDecimal(StringUtil.nvl("" + finMap.get(FinInvtConst.당월총이자금액),"0")));
		}
		
		size = 0;
		if (finFlowList01 != null) size = finFlowList01.size();
		
		for (int i =0; i < size; i++) {
			finMap = (Map) finFlowList01.get(i);
			lastSmexAmt = lastSmexAmt.add(new BigDecimal(StringUtil.nvl("" + finMap.get(FinInvtConst.최종여유액),"0")));
			lastInsfAmt = lastInsfAmt.add(new BigDecimal(StringUtil.nvl("" + finMap.get(FinInvtConst.최종부족금액),"0")));
		}
		
		//영업외비용
		finEstmlsMap.put("opprNoCostAmt", "" + opprNoCostAmt);
		BigDecimal opprNoCostAmtRatio = BigDecimal.ZERO;
		if (!FasNumberUtil.isEquals(salesTotalAmt, BigDecimal.ZERO)) {
			opprNoCostAmtRatio = opprNoCostAmt.divide(salesTotalAmt, 10, BigDecimal.ROUND_HALF_UP);
			opprNoCostAmtRatio = opprNoCostAmtRatio.multiply(new BigDecimal("100"));
		} else {
			opprNoCostAmtRatio = BigDecimal.ZERO;
		}
		
		//영업외비용비율
		finEstmlsMap.put("opprNoCostAmtRatio", StringUtil.nvl("" + opprNoCostAmtRatio.setScale(2, BigDecimal.ROUND_HALF_UP),"0"));
		
		//경상이익
		BigDecimal orpfAmt = BigDecimal.ZERO;
		orpfAmt = orpfAmt.add(opprAmt);
		orpfAmt = orpfAmt.add(opprNoAmt);
		orpfAmt = orpfAmt.subtract(opprNoCostAmt);
		finEstmlsMap.put("orpfAmt", StringUtil.nvl("" + orpfAmt,"0"));
		
		//경상이익 비율
		BigDecimal orpfAmtRatio = BigDecimal.ZERO;
		if (!FasNumberUtil.isEquals(salesTotalAmt, BigDecimal.ZERO)) {
			orpfAmtRatio = orpfAmt.divide(salesTotalAmt, 10, BigDecimal.ROUND_HALF_UP);
			orpfAmtRatio = orpfAmtRatio.multiply(new BigDecimal("100"));
		} else {
			orpfAmtRatio = BigDecimal.ZERO;
		}
		finEstmlsMap.put("orpfAmtRatio", StringUtil.nvl("" + orpfAmtRatio.setScale(2, BigDecimal.ROUND_HALF_UP),"0"));
		
		//법인세
		finEstmlsMap.put("crtxAmt", StringUtil.nvl(""+cashFlowMap.get("crtxAmt"),"0"));
		crtxTotalAmt = new BigDecimal(StringUtil.nvl(""+cashFlowMap.get("crtxAmt"),"0")) ;
		//비율
		finEstmlsMap.put("crtxAmtRatio", StringUtil.nvl(""+cashFlowMap.get("crtxAmtRatio"),"0"));
		
		//당기순이익
		BigDecimal ctnpAmt = BigDecimal.ZERO;
		ctnpAmt = orpfAmt.subtract(crtxTotalAmt);
		finEstmlsMap.put("ctnpAmt", "" + ctnpAmt);
		
		BigDecimal ctnpAmtRatio = BigDecimal.ZERO;
		if (!FasNumberUtil.isEquals(salesTotalAmt, BigDecimal.ZERO)) {
			ctnpAmtRatio = ctnpAmt.divide(salesTotalAmt, 10, BigDecimal.ROUND_HALF_UP);
			ctnpAmtRatio = ctnpAmtRatio.multiply(new BigDecimal("100"));
		} else {
			ctnpAmtRatio = BigDecimal.ZERO;
		}
		finEstmlsMap.put("ctnpAmtRatio", StringUtil.nvl("" + ctnpAmtRatio.setScale(2, BigDecimal.ROUND_HALF_UP),"0"));
		
		//18) 경영상태
		finEstmlsMap.put("lastSmexAmt", "" + lastSmexAmt);
		finEstmlsMap.put("lastInsfAmt", "" + lastInsfAmt);
		if (FasNumberUtil.isFirstGreater(lastSmexAmt, lastInsfAmt)) {
			finEstmlsMap.put("mnbsSttsCon", "경영정상");
			BigDecimal lastAmt = lastSmexAmt.subtract(lastInsfAmt);
			finEstmlsMap.put("mnbsAcvtRslt", "" + lastAmt);
			finEstmlsMap.put("mnbsAcvtRsltCon", "여유가 있습니다.");
		} else {
			finEstmlsMap.put("mnbsSttsCon", "경영위기");
			BigDecimal lastAmt = lastInsfAmt.subtract(lastSmexAmt);
			finEstmlsMap.put("mnbsAcvtRslt", "" + lastAmt);
			finEstmlsMap.put("mnbsAcvtRsltCon", "천원 부족함.");
		}
		
		return finEstmlsMap;
	}
	
}
