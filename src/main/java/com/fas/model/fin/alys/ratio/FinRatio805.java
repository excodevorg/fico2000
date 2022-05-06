package com.fas.model.fin.alys.ratio;

import java.math.BigDecimal;
import java.util.LinkedHashMap;

import com.fas.model.fin.alys.FinAddedValueItemConst;
import com.fas.model.fin.alys.FinBalanceItemConst;
import com.fas.model.fin.alys.FinCostConst;
import com.fas.model.fin.alys.FinIncomeItemConst;
import com.fas.model.fin.alys.FinStatement;

//유형고정자산회전율
public class FinRatio805  extends FinRatio {
	
	@Override
	public void cal() {
		// TODO Auto-generated method stub
		this.code = "805";
		
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
				beforeAmt = beforeFin.get(FinIncomeItemConst.매출액).getValue();
				
				afterAmt = afterAmt.add(afterFin.get(FinBalanceItemConst.비유동자산총합계).getValue());
				
				ratio = beforeAmt.divide(afterAmt, 10, BigDecimal.ROUND_HALF_UP);
				ratio = ratio.setScale(2, BigDecimal.ROUND_HALF_UP);
				
			} catch(Exception ex) {
				ratio = BigDecimal.ZERO; 
			}
			
			this.resultMap.put(afterFin.getStacYy(), ratio);
		}
	}
	
	
}
