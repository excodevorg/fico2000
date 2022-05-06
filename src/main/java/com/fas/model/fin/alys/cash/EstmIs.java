package com.fas.model.fin.alys.cash;

import java.math.BigDecimal;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;

import com.fas.cmmn.util.FasNumberUtil;
import com.fas.web.cmmn.util.BeanUtils;
import com.fas.web.cmmn.util.StringUtil;

//추정손익계산서
public class EstmIs extends CashFlowAlysis {
	
	private static Log logger = LogFactory.getLog(EstmIs.class);

	@Override
	public Map cal() throws Exception {
		// TODO Auto-generated method stub
		
		Map resultMap = new LinkedHashMap();
		BeanUtils beanUtil = new BeanUtils();
		
		Map qsrt = null;
		Map rsv = null;
		List rsvList = null;
		String answer = "";
		int size = 0;
		
		CashFlowFactory factory = new CashFlowFactory();
		
		//매출액 예측
		Map salesPredictMap = factory.getCashFlowAlysis(CashFlowConst.매출액예측, qsrtInfo);
		List salesCostList = (List) salesPredictMap.get("salesCost");
		List salesCostBeforeList = (List) salesPredictMap.get("salesCostBefore");
		List salesCostAfterList = (List) salesPredictMap.get("salesCostAfter");
		
		//현금지출
		Map cashOutComeMap = factory.getCashFlowAlysis(CashFlowConst.현금지출, qsrtInfo); 
		List cashOutComeList = (List) cashOutComeMap.get("cashOutCome");
		
		System.out.println("cashOutComeMap >>>> " + cashOutComeMap);
		System.out.println("cashOutComeList >>>> " + cashOutComeList);
		
		//현금수입
		Map cashInComeMap = factory.getCashFlowAlysis(CashFlowConst.PL현금수입, qsrtInfo); 
		List cashIncome0MonthList = (List)cashInComeMap.get("cashIncome0Month");
		List cashIncome1MonthList = (List)cashInComeMap.get("cashIncome1Month");
		List cashIncome2MonthList = (List)cashInComeMap.get("cashIncome2Month");
		
		//현금예산
		Map cashBdgtMap = factory.getCashFlowAlysis(CashFlowConst.현금예산, qsrtInfo); 
				
		List cashBdgtAmtList = (List) cashBdgtMap.get("cashBdgt");
		System.out.println("cashBdgtMap >> " + cashBdgtMap);
		System.out.println("cashBdgtAmtList >>>> " + cashBdgtAmtList);
		
		
		Map cashBdgtAmtMap = null; 
		BigDecimal lastSmexAmt = BigDecimal.ZERO; //최종여유액
		BigDecimal lastInsfAmt = BigDecimal.ZERO; //최종부족금액
		
		//1) 매출액
		size = salesCostList.size();
		Map salesMap = null;
		BigDecimal salesTotalAmt = BigDecimal.ZERO;
		
		//2) 매출원가
		Map salesCostMap = null;
		BigDecimal salesCostAmt = BigDecimal.ZERO;
		BigDecimal salesCostTotalAmt = BigDecimal.ZERO;
		
		//3) 판매비
		Map cashOutCome = null;
		BigDecimal mnepTotalAmt = BigDecimal.ZERO;
		
		//4) 이자비용
		BigDecimal inepTotalAmt = BigDecimal.ZERO;
		
		//5) 법인세
		BigDecimal crtxTotalAmt = BigDecimal.ZERO;
		
		BigDecimal ratio = BigDecimal.ZERO; 
		
		for (int i = 0; i < size; i++) {
			//매출금액
			salesMap = (Map) salesCostList.get(i);
			if (!StringUtil.isEmpty(""+salesMap.get("amt"))) {
				salesTotalAmt = salesTotalAmt.add(new BigDecimal(""+salesMap.get("amt")));
			}
			
			//매출원가
			salesCostMap = (Map) salesCostAfterList.get(i);
			if (!StringUtil.isEmpty(""+salesCostMap.get("amt"))) {
				salesCostAmt = new BigDecimal(""+salesCostMap.get("amt"));
			} else {
				salesCostAmt = BigDecimal.ZERO;
			}
			
			
			if (!FasNumberUtil.isEquals(salesCostAmt, BigDecimal.ZERO)) {
				salesCostTotalAmt = salesCostTotalAmt.add(salesCostAmt);
			} else {
				salesCostMap = (Map) salesCostBeforeList.get(i);
				if (!StringUtil.isEmpty(""+salesCostMap.get("amt"))) {
					salesCostAmt = new BigDecimal(""+salesCostMap.get("amt"));
				} else {
					salesCostAmt = BigDecimal.ZERO;
				}
				salesCostTotalAmt = salesCostTotalAmt.add(salesCostAmt);
			}
			

			cashOutCome = (Map) cashOutComeList.get(i);
			
			System.out.println("%&&&&&&&&&&&& >>>");
			System.out.println(cashOutCome);
			
			if (!StringUtil.isEmpty("" + cashOutCome.get(CashFlowConst.판매비와관리비))) mnepTotalAmt = mnepTotalAmt.add(new BigDecimal("" + cashOutCome.get(CashFlowConst.판매비와관리비)));
			if (!StringUtil.isEmpty("" + cashOutCome.get(CashFlowConst.이자비용))) inepTotalAmt = inepTotalAmt.add(new BigDecimal("" + cashOutCome.get(CashFlowConst.이자비용)));
			if (!StringUtil.isEmpty("" + cashOutCome.get(CashFlowConst.법인세))) crtxTotalAmt = crtxTotalAmt.add(new BigDecimal("" + cashOutCome.get(CashFlowConst.법인세)));
			
			cashBdgtAmtMap = (Map) cashBdgtAmtList.get(i);
			if (!StringUtil.isEmpty("" + cashBdgtAmtMap.get(CashFlowConst.최종여유액))) lastSmexAmt = lastSmexAmt.add(new BigDecimal("" + cashBdgtAmtMap.get(CashFlowConst.최종여유액)));
			if (!StringUtil.isEmpty("" + cashBdgtAmtMap.get(CashFlowConst.최종부족금액))) lastInsfAmt = lastInsfAmt.add(new BigDecimal("" + cashBdgtAmtMap.get(CashFlowConst.최종부족금액)));
		}
		
		System.out.println("lastInsfAmt >>> " + lastInsfAmt);
		System.out.println("lastSmexAmt >>> " + lastInsfAmt);
				
		//매출액
		resultMap.put("salesAmt", ""+salesTotalAmt);
		//비율
		if (!FasNumberUtil.isEquals(salesTotalAmt, BigDecimal.ZERO)) {
			ratio = salesTotalAmt.divide(salesTotalAmt, 6, BigDecimal.ROUND_HALF_UP);
			ratio = ratio.multiply(new BigDecimal(100));
			ratio = ratio.setScale(1, BigDecimal.ROUND_HALF_UP);
		} else {
			ratio = BigDecimal.ZERO;
		}
		resultMap.put("salesAmtRatio", ""+ratio);
		
		//매출원가
		resultMap.put("salesCostAmt", ""+salesCostTotalAmt);
		if (!FasNumberUtil.isEquals(salesTotalAmt, BigDecimal.ZERO)) {
			ratio = salesCostTotalAmt.divide(salesTotalAmt, 6, BigDecimal.ROUND_HALF_UP);
			ratio = ratio.multiply(new BigDecimal(100));
			ratio = ratio.setScale(1, BigDecimal.ROUND_HALF_UP);
		} else {
			ratio = BigDecimal.ZERO;
		}
		resultMap.put("salesCostAmtRatio", ""+ratio);
		
		//3) 매출이익
		BigDecimal amslPrftAmt = BigDecimal.ZERO;
		amslPrftAmt = salesTotalAmt.subtract(salesCostTotalAmt);
		resultMap.put("amslPrftAmt", ""+amslPrftAmt);
		if (!FasNumberUtil.isEquals(salesTotalAmt, BigDecimal.ZERO)) {
			ratio = amslPrftAmt.divide(salesTotalAmt, 6, BigDecimal.ROUND_HALF_UP);
			ratio = ratio.multiply(new BigDecimal(100));
			ratio = ratio.setScale(1, BigDecimal.ROUND_HALF_UP);
		} else {
			ratio = BigDecimal.ZERO;
		}
		resultMap.put("amslPrftAmtRatio", ""+ratio);
		
		//4) 일반관리비
		resultMap.put("mnepAmt", ""+mnepTotalAmt);
		if (!FasNumberUtil.isEquals(salesTotalAmt, BigDecimal.ZERO)) {
			ratio = mnepTotalAmt.divide(salesTotalAmt, 6, BigDecimal.ROUND_HALF_UP);
			ratio = ratio.multiply(new BigDecimal(100));
			ratio = ratio.setScale(1, BigDecimal.ROUND_HALF_UP);
		} else {
			ratio = BigDecimal.ZERO;
		}
		
		resultMap.put("mnepAmtRatio", ""+ratio);
		
		//5) 영업이익
		BigDecimal opprAmt = BigDecimal.ZERO;
		opprAmt = amslPrftAmt.subtract(mnepTotalAmt);
		resultMap.put("opprAmt", ""+opprAmt);
		
		if (!FasNumberUtil.isEquals(salesTotalAmt, BigDecimal.ZERO)) {
			ratio = opprAmt.divide(salesTotalAmt, 6, BigDecimal.ROUND_HALF_UP);
			ratio = ratio.multiply(new BigDecimal(100));
			ratio = ratio.setScale(1, BigDecimal.ROUND_HALF_UP);
		} else {
			ratio = BigDecimal.ZERO;
		}
		
		
		resultMap.put("opprAmtRatio", ""+ratio);
		
		//6) 금융비용
		resultMap.put("inepAmt", ""+inepTotalAmt);
		
		if (!FasNumberUtil.isEquals(salesTotalAmt, BigDecimal.ZERO)) {
			ratio = inepTotalAmt.divide(salesTotalAmt, 6, BigDecimal.ROUND_HALF_UP);
			ratio = ratio.multiply(new BigDecimal(100));
			ratio = ratio.setScale(1, BigDecimal.ROUND_HALF_UP);
		} else {
			ratio = BigDecimal.ZERO;
		}
		
		resultMap.put("inepAmtRatio", ""+ratio);
		
		//7) 경상이익
		BigDecimal orpfAmt = BigDecimal.ZERO;
		orpfAmt = opprAmt.subtract(inepTotalAmt);
		resultMap.put("orpfAmt", ""+orpfAmt);
		
		if (!FasNumberUtil.isEquals(salesTotalAmt, BigDecimal.ZERO)) {
			ratio = orpfAmt.divide(salesTotalAmt, 6, BigDecimal.ROUND_HALF_UP);
			ratio = ratio.multiply(new BigDecimal(100));
			ratio = ratio.setScale(1, BigDecimal.ROUND_HALF_UP);
		} else {
			ratio = BigDecimal.ZERO;
		}
				
		resultMap.put("orpfAmtRatio", ""+ratio);
		
		//8) 법인세
		resultMap.put("crtxAmt", ""+crtxTotalAmt);
		
		if (!FasNumberUtil.isEquals(salesTotalAmt, BigDecimal.ZERO)) {
			ratio = crtxTotalAmt.divide(salesTotalAmt, 6, BigDecimal.ROUND_HALF_UP);
			ratio = ratio.multiply(new BigDecimal(100));
			ratio = ratio.setScale(1, BigDecimal.ROUND_HALF_UP);
		} else {
			ratio = BigDecimal.ZERO;
		}
		resultMap.put("crtxAmtRatio", ""+ratio);
		
		//9) 당기순이이익
		BigDecimal ctnpAmt = BigDecimal.ZERO;
		ctnpAmt = orpfAmt.subtract(crtxTotalAmt);
		resultMap.put("ctnpAmt", ""+ctnpAmt);
		
		if (!FasNumberUtil.isEquals(salesTotalAmt, BigDecimal.ZERO)) {
			ratio = ctnpAmt.divide(salesTotalAmt, 6, BigDecimal.ROUND_HALF_UP);
			ratio = ratio.multiply(new BigDecimal(100));
			ratio = ratio.setScale(1, BigDecimal.ROUND_HALF_UP);
		} else {
			ratio = BigDecimal.ZERO;
		}
		
		resultMap.put("ctnpAmtRatio", ""+ratio);
		
		//10) 감가상각비금액  -> 나중에 확인
		BigDecimal dprcAmt = BigDecimal.ZERO;
		resultMap.put("dprcAmt", ""+dprcAmt);
		
		if (!FasNumberUtil.isEquals(salesTotalAmt, BigDecimal.ZERO)) {
			ratio = dprcAmt.divide(salesTotalAmt, 6, BigDecimal.ROUND_HALF_UP);
			ratio = ratio.multiply(new BigDecimal(100));
			ratio = ratio.setScale(1, BigDecimal.ROUND_HALF_UP);
		} else {
			ratio = BigDecimal.ZERO;
		}
				
		resultMap.put("dprcAmtRatio", ""+ratio);
		
		//12) 매출채권 증가 (내년 1,2,3월 수입금)
		Map cashIncome1MonthMap = (Map) cashIncome1MonthList.get(12);
		Map cashIncome2MonthMap = (Map) cashIncome2MonthList.get(12);
		BigDecimal ucmrAmt = new BigDecimal(StringUtil.nvl(""+cashIncome1MonthMap.get("amt"),"0"));
		ucmrAmt = ucmrAmt.add(new BigDecimal(StringUtil.nvl(""+cashIncome2MonthMap.get("amt"),"0")));
		
		cashIncome2MonthMap = (Map) cashIncome2MonthList.get(13);
		ucmrAmt = ucmrAmt.add(new BigDecimal(StringUtil.nvl(""+cashIncome2MonthMap.get("amt"),"0")));
		resultMap.put("ucmrAmt", ""+ucmrAmt);

		//13) 매출채권 감소 (올해 1,2,3월 수입금)		
		cashIncome1MonthMap = (Map) cashIncome1MonthList.get(0);
		cashIncome2MonthMap = (Map) cashIncome2MonthList.get(0);
		
		logger.debug("1 cashIncome1MonthMap >>>> " + cashIncome1MonthMap);
		logger.debug("1 cashIncome2MonthMap >>>> " + cashIncome2MonthMap);
		
		BigDecimal unamAmt = new BigDecimal(StringUtil.nvl(""+cashIncome1MonthMap.get("amt"),"0"));
		unamAmt = unamAmt.add(new BigDecimal(StringUtil.nvl(""+cashIncome2MonthMap.get("amt"),"0")));
		
		cashIncome2MonthMap = (Map) cashIncome2MonthList.get(1);
		
		logger.debug("2 cashIncome2MonthMap >>>> " + cashIncome2MonthMap);
		
		unamAmt = unamAmt.add(new BigDecimal(StringUtil.nvl(""+cashIncome2MonthMap.get("amt"),"0")));
		
		resultMap.put("unamAmt", ""+unamAmt);
		
		//14) 차액
		BigDecimal acrcDfam = ucmrAmt.subtract(unamAmt);
		resultMap.put("acrcDfam", ""+acrcDfam);
		
		//15) 현금흐름 금액
		BigDecimal cashFlowAmt = ctnpAmt; //당기순이익
		cashFlowAmt = cashFlowAmt.add(unamAmt); //매출채권감소
		cashFlowAmt = cashFlowAmt.subtract(ucmrAmt); //매출채권증가
		resultMap.put("cashFlowAmt", ""+cashFlowAmt);
		
		//16) 부족자금
		resultMap.put("lastInsfAmt", ""+lastInsfAmt);
		
		//17) 여유자금
		resultMap.put("lastSmexAmt", ""+lastSmexAmt);
		
		//18) 경영상태
		if (FasNumberUtil.isFirstGreater(lastSmexAmt, lastInsfAmt)) {
			resultMap.put("mnbsSttsCon", "경영정상");
			BigDecimal lastAmt = lastSmexAmt.subtract(lastInsfAmt);
			resultMap.put("mnbsAcvtRslt", "" + lastAmt);
			resultMap.put("mnbsAcvtRsltCon", "여유가 있습니다.");
		} else {
			resultMap.put("mnbsSttsCon", "경영위기");
			BigDecimal lastAmt = lastInsfAmt.subtract(lastSmexAmt);
			resultMap.put("mnbsAcvtRslt", "" + lastAmt);
			resultMap.put("mnbsAcvtRsltCon", "부족함.");
		}
		
		return resultMap;
	}
	
	

}


