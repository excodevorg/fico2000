package com.fas.model.fin.alys.ratio;

import java.math.BigDecimal;
import java.util.LinkedHashMap;

import com.fas.model.fin.alys.FinBalanceItemConst;
import com.fas.model.fin.alys.FinIncomeItemConst;
import com.fas.model.fin.alys.FinStatement;

//매출채권대매입채무비율
public class FinRatio710 extends FinRatio {
	

	@Override
	public void cal() {
		// TODO Auto-generated method stub
		this.code = "710";
		
		FinStatement finArray[] = new FinStatement[finList.size()];
		int indx = 0;
		for (FinStatement finstate : finList) {
			finArray[indx++] = finstate;
		}
		
		this.resultMap = new LinkedHashMap<String, BigDecimal>();
		
		int size = finArray.length;
		
		FinStatement beforeFin = null;
		FinStatement afterFin = null;
		
		BigDecimal beforeAmt = BigDecimal.ZERO;
		BigDecimal afterAmt = BigDecimal.ZERO;
		BigDecimal ratio = BigDecimal.ZERO; 
		
		for (int idx = startIdx; idx < size; idx++) {
			beforeFin = finArray[idx];
			afterFin = finArray[idx];
			
			beforeAmt = BigDecimal.ZERO;
			afterAmt = BigDecimal.ZERO;
			
			beforeAmt = beforeAmt.add(beforeFin.get(FinBalanceItemConst.매출채권).getValue());

			afterAmt = afterAmt.add(afterFin.get(FinBalanceItemConst.매입채무).getValue());
			
			if (afterAmt != null && afterAmt.compareTo(BigDecimal.ZERO) != 0) {
				ratio = beforeAmt.divide(afterAmt, 10, BigDecimal.ROUND_HALF_UP);
				ratio = ratio.multiply(new BigDecimal(100));
				ratio = ratio.setScale(2, BigDecimal.ROUND_HALF_UP);
			}
			
			this.resultMap.put(afterFin.getStacYy(), ratio);
		}
	}
	
	
}
