package com.fas.model.fin.alys.finInvt;

import java.math.BigDecimal;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;

import com.fas.model.fin.alys.cash.CashFlowConst;
import com.fas.model.fin.alys.cash.CashFlowFactory;
import com.fas.web.cmmn.util.StringUtil;

public class FinInvtCashIncomeModify extends FinInvtAlysis {

	@Override
	public Map cal() throws Exception {
		// TODO Auto-generated method stub
		
		CashFlowFactory factory = new CashFlowFactory();
		
		FinInvtFactory factory01 = new FinInvtFactory();
		
		Map resultMap = new LinkedHashMap();
		
		Map cashIncomeMap = factory.getCashFlowAlysis(CashFlowConst.현금수입, cashFlowQsrtInfo);
		List cashIncomeList = (List) cashIncomeMap.get("cashIncome"); //매출액
		List cashIncome0MonthList = (List) cashIncomeMap.get("cashIncome0Month"); //당월 현금매출중 수입
		List cashIncome1MonthList = (List) cashIncomeMap.get("cashIncome1Month"); //1월 현금매출중 수입
		List cashIncome2MonthList = (List) cashIncomeMap.get("cashIncome2Month"); //2월 현금매출중 수입
		List cashIncomeTotalList = (List) cashIncomeMap.get("cashIncomeTotal"); //총 당월 현금 수입
		
		Map finInvtInflow = factory01.getFinInvtAlysis(FinInvtConst.유입, qsrtInfo, cashFlowQsrtInfo);
		List finInvtflowList = (List) finInvtInflow.get(FinInvtConst.유입);
		
		Map finMap = null;
		Map saleMap = null;
		Map cashIncome0MonthMap = null;
		Map cashIncome1MonthMap = null;
		Map cashIncome2MonthMap = null;
		Map cashIncomeTotalMap = null;
		
		BigDecimal cashIncome0MonthAmt = BigDecimal.ZERO;
		BigDecimal cashIncome1MonthAmt = BigDecimal.ZERO;
		BigDecimal cashIncome2MonthAmt = BigDecimal.ZERO;
		BigDecimal saleAmt = BigDecimal.ZERO;
		BigDecimal cashIncomeTotalAmt = BigDecimal.ZERO;
		
		BigDecimal fixAssetAmt = BigDecimal.ZERO; //고정자산
		BigDecimal corBondAmt = BigDecimal.ZERO;  //회사채
		BigDecimal capitalAmt = BigDecimal.ZERO; //자본금
		BigDecimal storedAssetAmt = BigDecimal.ZERO; //재고자산
		
		BigDecimal cashIncomeTotal = BigDecimal.ZERO; //재고자산
		
		int size = 0;
				
		if (finInvtflowList != null) size = finInvtflowList.size();
		
		for (int i = 0; i < size; i++) {
			finMap = (Map) finInvtflowList.get(i);
			saleMap = (Map) cashIncomeList.get(i);
			cashIncome0MonthMap = (Map) cashIncome0MonthList.get(i);
			cashIncome1MonthMap = (Map) cashIncome1MonthList.get(i);
			cashIncome2MonthMap = (Map) cashIncome2MonthList.get(i);
			cashIncomeTotalMap = (Map) cashIncomeTotalList.get(i);
			
			saleAmt = new BigDecimal(StringUtil.nvl(""+saleMap.get("amt"),"0"));
			cashIncome0MonthAmt = new BigDecimal(StringUtil.nvl(""+cashIncome0MonthMap.get("amt"),"0"));
			cashIncome1MonthAmt = new BigDecimal(StringUtil.nvl(""+cashIncome1MonthMap.get("amt"),"0"));
			cashIncome2MonthAmt = new BigDecimal(StringUtil.nvl(""+cashIncome2MonthMap.get("amt"),"0"));
			cashIncomeTotalAmt = new BigDecimal(StringUtil.nvl(""+cashIncomeTotalMap.get("amt"),"0"));
			
			fixAssetAmt = new BigDecimal(StringUtil.nvl(""+finMap.get(FinInvtConst.고정자산매각금액),"0"));
			corBondAmt = new BigDecimal(StringUtil.nvl(""+finMap.get(FinInvtConst.회사채발행금액),"0"));
			capitalAmt = new BigDecimal(StringUtil.nvl(""+finMap.get(FinInvtConst.자본금액),"0"));
			storedAssetAmt = new BigDecimal(StringUtil.nvl(""+finMap.get(FinInvtConst.재고자산금액),"0"));
			
			finMap.put(FinInvtConst.매출액, ""+saleAmt);
			finMap.put(FinInvtConst.현금매출당월현금수입, "" + cashIncome0MonthAmt);
			finMap.put(FinInvtConst.현금매출1개월전현금수입, "" + cashIncome1MonthAmt);
			finMap.put(FinInvtConst.현금매출2개월전현금수입, "" + cashIncome2MonthAmt);
			
			cashIncomeTotal = BigDecimal.ZERO;
			cashIncomeTotal = cashIncomeTotal.add(fixAssetAmt);
			cashIncomeTotal = cashIncomeTotal.add(corBondAmt);
			cashIncomeTotal = cashIncomeTotal.add(capitalAmt);
			cashIncomeTotal = cashIncomeTotal.add(storedAssetAmt);
			cashIncomeTotal = cashIncomeTotal.add(cashIncome0MonthAmt);
			cashIncomeTotal = cashIncomeTotal.add(cashIncome1MonthAmt);
			cashIncomeTotal = cashIncomeTotal.add(cashIncome2MonthAmt);
			
			finMap.put(FinInvtConst.당월총현금수입, "" + cashIncomeTotal);
		}
		
		resultMap.put(FinInvtConst.현금수입수정, finInvtflowList);
		
		return resultMap;
	}

}
