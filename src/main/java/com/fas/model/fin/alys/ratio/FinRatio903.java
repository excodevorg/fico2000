package com.fas.model.fin.alys.ratio;

import java.math.BigDecimal;
import java.util.LinkedHashMap;

import com.fas.model.fin.alys.FinAddedValueItemConst;
import com.fas.model.fin.alys.FinBalanceItemConst;
import com.fas.model.fin.alys.FinCostConst;
import com.fas.model.fin.alys.FinIncomeItemConst;
import com.fas.model.fin.alys.FinStatement;

//1인당인건비증가율
public class FinRatio903  extends FinRatio {
	
	@Override
	public void cal() {
		// TODO Auto-generated method stub
		this.code = "903";
		
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
			beforeFin = finArray[idx-1];
			afterFin = finArray[idx];
			
			beforeAmt = BigDecimal.ZERO;
			afterAmt = BigDecimal.ZERO;
			
			try {
				beforeAmt = beforeFin.get(FinIncomeItemConst.급여).getValue().add(beforeFin.get(FinCostConst.노무비).getValue());
				beforeAmt = beforeAmt.divide((beforeFin.get(FinCostConst.인원수).getValue()), 6, BigDecimal.ROUND_HALF_UP);
				afterAmt = afterFin.get(FinIncomeItemConst.급여).getValue().add(afterFin.get(FinCostConst.노무비).getValue());
				afterAmt = afterAmt.divide((afterFin.get(FinCostConst.인원수).getValue()), 6, BigDecimal.ROUND_HALF_UP);
				
				ratio = afterAmt.divide(beforeAmt, 10, BigDecimal.ROUND_HALF_UP);
				ratio = ratio.multiply(new BigDecimal(100));
				ratio = ratio.subtract(new BigDecimal(100));
				ratio = ratio.setScale(2, BigDecimal.ROUND_HALF_UP);
				
			} catch(Exception ex) {
				ratio = BigDecimal.ZERO; 
			}
			
			this.resultMap.put(afterFin.getStacYy(), ratio);
		}
	}
	
	
}
