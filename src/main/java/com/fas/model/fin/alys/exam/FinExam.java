package com.fas.model.fin.alys.exam;

import java.math.BigDecimal;

public abstract class FinExam {
	
	protected BigDecimal finRatio = BigDecimal.ZERO;;
	
	protected BigDecimal finBokRatio = BigDecimal.ZERO;;
	
	public void setFinRatio(BigDecimal finRatio) {
		this.finRatio = finRatio;
	}
	
	public void setFinBokRatio(BigDecimal finBokRatio) {
		this.finBokRatio = finBokRatio;
	}
	
	public abstract boolean cal();
	
	public String exam() {
		
		if (cal()) {
			return "GOOD";
		} else {
			return "BAD";
		}
	}
}
