package com.fas.model.fin.alys.ratio;

import java.util.List;

import com.fas.model.fin.alys.FinStatement;

public class FinRatioFactory {

	public FinRatio createRate(String code, List<FinStatement> finList) throws Exception {
		
		String className = "com.fas.model.fin.alys.ratio.FinRatio" + code;
		
		Class c = Class.forName(className);
		
		FinRatio finRatio = (FinRatio) c.newInstance();
		
		finRatio.setFinStateMent(finList);
		
		finRatio.cal();
		
		return finRatio;
	}
	
	public FinRatio createRate(String code, List<FinStatement> finList, int startIdx) throws Exception {
		
		String className = "com.fas.model.fin.alys.ratio.FinRatio" + code;
		
		Class c = Class.forName(className);
		
		FinRatio finRatio = (FinRatio) c.newInstance();
		
		finRatio.setFinStateMent(finList);
		
		finRatio.setStartIdx(startIdx);
		
		finRatio.cal();
		
		return finRatio;
	}
	
}
	

