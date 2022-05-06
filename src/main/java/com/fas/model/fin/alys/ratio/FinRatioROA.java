package com.fas.model.fin.alys.ratio;

import java.math.BigDecimal;
import java.util.LinkedHashMap;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;

import com.fas.model.fin.alys.FinAddedValueItemConst;
import com.fas.model.fin.alys.FinBalanceItemConst;
import com.fas.model.fin.alys.FinCostConst;
import com.fas.model.fin.alys.FinIncomeItemConst;
import com.fas.model.fin.alys.FinStatement;

//ROA
public class FinRatioROA  extends FinRatio {
	
	private static Log logger = LogFactory.getLog(FinRatioROA.class);
	
	@Override
	public void cal() {
		// TODO Auto-generated method stub
		this.code = "ROA";
		
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
		
		BigDecimal beforeAmt1 = BigDecimal.ZERO;
		BigDecimal afterAmt1 = BigDecimal.ZERO;
		BigDecimal ratio1 = BigDecimal.ZERO;
		
		
		for (int idx = startIdx; idx < size; idx++) {
			beforeFin = finArray[idx];
			afterFin = finArray[idx];
			
			beforeAmt = BigDecimal.ZERO;
			afterAmt = BigDecimal.ZERO;
			ratio = BigDecimal.ZERO; 
			
			try {			
				beforeAmt = beforeAmt.add(beforeFin.get(FinIncomeItemConst.영업손익).getValue());
				beforeAmt = beforeAmt.add(beforeFin.get(FinIncomeItemConst.영업외수익합계).getValue());
				beforeAmt = beforeAmt.subtract(beforeFin.get(FinIncomeItemConst.영업외비용합계).getValue());
				beforeAmt = beforeAmt.subtract(beforeFin.get(FinIncomeItemConst.법인세비용).getValue());
				
				logger.debug("당기순이익 >>> " + beforeAmt );
				
				afterAmt = afterAmt.add(afterFin.get(FinIncomeItemConst.매출액).getValue());
				
				logger.debug("매출액 >>> " + afterAmt );
				
				if (afterAmt != null && afterAmt.compareTo(BigDecimal.ZERO) != 0 ) {
						ratio = beforeAmt.divide(afterAmt, 10, BigDecimal.ROUND_HALF_UP);
						ratio = ratio.multiply(new BigDecimal(100));
				}
				
				logger.debug("ratio >>> " + ratio );
				
				
			} catch (Exception ex) {
				ex.printStackTrace();
				ratio = BigDecimal.ZERO; 
			}
			
			
			beforeAmt1 = BigDecimal.ZERO;
			afterAmt1 = BigDecimal.ZERO;
			ratio1 = BigDecimal.ZERO; 
			
			try {
				beforeAmt1 = beforeFin.get(FinIncomeItemConst.매출액).getValue();
				
				logger.debug("매출액 >>> " + beforeAmt1 );
				
				afterAmt1 = afterFin.get(FinBalanceItemConst.유동부채합계).getValue();
				afterAmt1 = afterAmt1.add(afterFin.get(FinBalanceItemConst.비유동부채합계).getValue());
				afterAmt1 = afterAmt1.add(afterFin.get(FinBalanceItemConst.자본합계).getValue());
				
				ratio1 = beforeAmt1.divide(afterAmt1, 10, BigDecimal.ROUND_HALF_UP);
				
				
			} catch(Exception ex) {
				ex.printStackTrace();
				ratio1 = BigDecimal.ZERO; 
			}
			
			ratio = ratio.multiply(ratio1);
			ratio = ratio.setScale(2, BigDecimal.ROUND_HALF_UP);
			
			this.resultMap.put(afterFin.getStacYy(), ratio);
		}
	}
	
}
