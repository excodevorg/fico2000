package com.fas.model.fin.alys.cash;

import java.util.Map;

public class CashFlowFactory {

	@SuppressWarnings("rawtypes")
	public Map getCashFlowAlysis(String className, Map qsrtInfo) throws Exception {
		String classFullName = "com.fas.model.fin.alys.cash." + className;
		Class c = Class.forName(classFullName);
		CashFlowAlysis ca = (CashFlowAlysis) c.newInstance();
		return ca.calculator(qsrtInfo);
	}
	
}
