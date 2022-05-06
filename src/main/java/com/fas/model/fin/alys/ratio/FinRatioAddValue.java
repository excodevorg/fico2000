package com.fas.model.fin.alys.ratio;

import java.math.BigDecimal;
import java.util.LinkedHashMap;

import com.fas.model.fin.alys.FinAddedValueItemConst;
import com.fas.model.fin.alys.FinCostConst;
import com.fas.model.fin.alys.FinIncomeItemConst;
import com.fas.model.fin.alys.FinStatement;

//부가가치금액
public class FinRatioAddValue  extends FinRatio {
	
	@Override
	public void cal() {
		// TODO Auto-generated method stub
		this.code = "AddValue";
		
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
			beforeAmt = BigDecimal.ZERO;
			try {
				beforeAmt = beforeFin.get(FinAddedValueItemConst.부가가치합계).getValue();
			} catch(Exception ex) {
				beforeAmt = BigDecimal.ZERO; 
			}
			
			this.resultMap.put(beforeFin.getStacYy(), beforeAmt);
		}
	}
	
}
