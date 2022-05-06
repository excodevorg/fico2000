package com.fas.model.fin.alys.exam;

import java.math.BigDecimal;

public class FinExamFactory {

	public FinExam createExam(String code, BigDecimal finRatio, BigDecimal finBokRatio) throws Exception {
		
		String className = "com.fas.model.fin.alys.exam.FinExam" + code;
		Class c = Class.forName(className);
		
		FinExam exam = (FinExam) c.newInstance();
		
		exam.setFinBokRatio(finBokRatio);
		exam.setFinRatio(finRatio);
		
		return exam;
		
	}
	
}
