package com.fas.model.fin.alys.ratio;

import java.math.BigDecimal;
import java.util.LinkedHashMap;

import com.fas.model.fin.alys.FinAddedValueItemConst;
import com.fas.model.fin.alys.FinBalanceItemConst;
import com.fas.model.fin.alys.FinCostConst;
import com.fas.model.fin.alys.FinIncomeItemConst;
import com.fas.model.fin.alys.FinStatement;

//기계투자효율
public class FinRatio909  extends FinRatio {
	
	@Override
	public void cal() {
		// TODO Auto-generated method stub
		this.code = "909";
		
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
			
			try {
				beforeAmt = beforeFin.get(FinAddedValueItemConst.부가가치합계).getValue();
				afterAmt = afterFin.get(FinBalanceItemConst.기계장치).getValue();
				
				ratio = beforeAmt.divide(afterAmt, 10, BigDecimal.ROUND_HALF_UP);
				ratio = ratio.multiply(new BigDecimal(100));
				ratio = ratio.setScale(2, BigDecimal.ROUND_HALF_UP);				
				
			} catch(Exception ex) {
				ratio = BigDecimal.ZERO; 
			}
			
			this.resultMap.put(afterFin.getStacYy(), ratio);
		}
	}
	
	
}
