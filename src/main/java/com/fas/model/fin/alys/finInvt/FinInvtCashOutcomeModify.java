package com.fas.model.fin.alys.finInvt;

import java.math.BigDecimal;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;

import com.fas.model.fin.alys.cash.CashFlowConst;
import com.fas.model.fin.alys.cash.CashFlowFactory;
import com.fas.web.cmmn.util.StringUtil;

public class FinInvtCashOutcomeModify extends FinInvtAlysis {
	
	protected final static Log log = LogFactory.getLog(FinInvtCashOutcomeModify.class);

	@Override
	public Map cal() throws Exception {
		// TODO Auto-generated method stub
		
		Map resultMap = new LinkedHashMap();
		
		CashFlowFactory factory = new CashFlowFactory();
		
		FinInvtFactory factory01 = new FinInvtFactory();
		
		//매출예측
		Map salesPredictMap = factory.getCashFlowAlysis(CashFlowConst.매출액예측, cashFlowQsrtInfo);
		Map salesCostMap = null;
		Map salesCostBeforeMap = null;
		Map salesCostAfterMap = null;
		
		List salesCostList = (List) salesPredictMap.get("salesCost");
		List salesCostBeforeList = (List) salesPredictMap.get("salesCostBefore");
		List salesCostAfterList = (List) salesPredictMap.get("salesCostAfter");
			
		//현금지출
		Map cashOutComeMap = factory.getCashFlowAlysis(CashFlowConst.현금지출, cashFlowQsrtInfo);
		Map cashOutMap = null;
		List cashOutComeList = (List) cashOutComeMap.get("cashOutCome");
		
		//유출
		Map finInvtOutflowMap = factory01.getFinInvtAlysis(FinInvtConst.유출, qsrtInfo, cashFlowQsrtInfo);
		List finInvtOutflowList = (List) finInvtOutflowMap.get(FinInvtConst.유출);
		
		//현금지출-수정
		int size = 0;
		if (finInvtOutflowList != null) size = finInvtOutflowList.size();
		
		BigDecimal saleAmt = BigDecimal.ZERO; //매출액
		BigDecimal salesCostBeforeAmt = BigDecimal.ZERO; //매월원가(전);
		BigDecimal salesCostAfterAmt = BigDecimal.ZERO; //매월원가(후);
		BigDecimal mnepAmt = BigDecimal.ZERO; //판매비와관리비; 
		BigDecimal inepAmt = BigDecimal.ZERO; //이자비용;
		BigDecimal workingFundsAmt = BigDecimal.ZERO; //운전자금금액;
		BigDecimal equipMentAmt = BigDecimal.ZERO; //시설자금금액;
		BigDecimal rdAmt = BigDecimal.ZERO; //R&D금액;
		BigDecimal fixEquipAmt = BigDecimal.ZERO; //고정자산시설증대
		BigDecimal crtxAmt = BigDecimal.ZERO; //법인세
		BigDecimal cashDvdnAmt = BigDecimal.ZERO; //현금배당
		BigDecimal outComeTotal = BigDecimal.ZERO; //지출액의합계
		BigDecimal corOutBoundAmt = BigDecimal.ZERO; //회사채상환금액
		BigDecimal storedAssetIncAmt = BigDecimal.ZERO; //재고자산증대
		
		Map finMap = null;
		
		for (int i = 0; i < size; i++) {
			
			finMap = (Map) finInvtOutflowList.get(i);
			salesCostMap = (Map) salesCostList.get(i);
			salesCostBeforeMap = (Map) salesCostBeforeList.get(i);
			salesCostAfterMap = (Map) salesCostAfterList.get(i);
			cashOutMap = (Map) cashOutComeList.get(i);
			
			saleAmt = new BigDecimal(StringUtil.nvl("" + salesCostMap.get("amt"),"0"));
			salesCostBeforeAmt = new BigDecimal(StringUtil.nvl("" + salesCostBeforeMap.get("amt"),"0"));
			salesCostAfterAmt = new BigDecimal(StringUtil.nvl("" + salesCostAfterMap.get("amt"),"0"));
			
			mnepAmt = new BigDecimal(StringUtil.nvl("" + cashOutMap.get(CashFlowConst.판매비와관리비),"0"));
			inepAmt = new BigDecimal(StringUtil.nvl("" + finMap.get(FinInvtConst.당월이자금액소수점),"0"));
			workingFundsAmt = new BigDecimal(StringUtil.nvl("" + finMap.get(FinInvtConst.운전자금내입금액),"0"));
			equipMentAmt = new BigDecimal(StringUtil.nvl("" + finMap.get(FinInvtConst.시설자금상환금액),"0"));
			
			rdAmt = new BigDecimal(StringUtil.nvl("" + finMap.get(FinInvtConst.연구비용),"0"));
			fixEquipAmt = new BigDecimal(StringUtil.nvl("" + finMap.get(FinInvtConst.고정자산시설증대금액),"0"));
			
			crtxAmt = new BigDecimal(StringUtil.nvl("" + cashOutMap.get(CashFlowConst.법인세),"0"));
			cashDvdnAmt = new BigDecimal(StringUtil.nvl("" + cashOutMap.get(CashFlowConst.현금배당),"0"));
			
			corOutBoundAmt = new BigDecimal(StringUtil.nvl("" + finMap.get(FinInvtConst.회사채상환금액),"0"));
			storedAssetIncAmt = new BigDecimal(StringUtil.nvl("" + finMap.get(FinInvtConst.재고자산증가금액),"0"));
			
			outComeTotal = BigDecimal.ZERO;
			outComeTotal = outComeTotal.add(salesCostBeforeAmt);
			outComeTotal = outComeTotal.add(salesCostAfterAmt);
			
			outComeTotal = outComeTotal.add(mnepAmt);
			outComeTotal = outComeTotal.add(inepAmt);
			
			outComeTotal = outComeTotal.add(workingFundsAmt);
			outComeTotal = outComeTotal.add(equipMentAmt);
			outComeTotal = outComeTotal.add(rdAmt);
			outComeTotal = outComeTotal.add(fixEquipAmt);
			
			outComeTotal = outComeTotal.add(corOutBoundAmt);
			outComeTotal = outComeTotal.add(storedAssetIncAmt);
			outComeTotal = outComeTotal.add(crtxAmt);
			outComeTotal = outComeTotal.add(cashDvdnAmt);
			
			finMap.put("salesCostBefore", ""+salesCostBeforeAmt);
			finMap.put("salesCostAfter", ""+salesCostAfterAmt);
			finMap.put(CashFlowConst.판매비와관리비, ""+mnepAmt);
			finMap.put(FinInvtConst.당월이자금액, ""+inepAmt.setScale(0,BigDecimal.ROUND_HALF_UP));
			finMap.put(FinInvtConst.당월이자금액소수점, ""+inepAmt);
			
			finMap.put(FinInvtConst.회사채상환금액, ""+corOutBoundAmt);
			finMap.put(FinInvtConst.재고자산증가금액, ""+storedAssetIncAmt);
			
			finMap.put(CashFlowConst.법인세, ""+crtxAmt);
			finMap.put(CashFlowConst.현금배당, ""+cashDvdnAmt);
			
			finMap.put(FinInvtConst.지출액의합계소수점, ""+outComeTotal.setScale(10,BigDecimal.ROUND_HALF_UP));
			
			finMap.put(FinInvtConst.지출액의합계, ""+outComeTotal.setScale(0,BigDecimal.ROUND_HALF_UP));
		}
		
		resultMap.put(FinInvtConst.현금지출수정, finInvtOutflowList);
		
		return resultMap;
	}

}
