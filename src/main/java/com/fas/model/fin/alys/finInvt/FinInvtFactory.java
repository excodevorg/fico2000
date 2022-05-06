package com.fas.model.fin.alys.finInvt;

import java.util.Map;

public class FinInvtFactory {

	public Map getFinInvtAlysis(String className, Map qsrtInfo) throws Exception {
		String classFullName = "com.fas.model.fin.alys.finInvt." + className;
		Class c = Class.forName(classFullName);
		FinInvtAlysis finInvt = (FinInvtAlysis) c.newInstance();
		return finInvt.calculator(qsrtInfo);
	}
	
	public Map getFinInvtAlysis(String className, Map qsrtInfo, Map finQsrtInfo) throws Exception {
		String classFullName = "com.fas.model.fin.alys.finInvt." + className;
		Class c = Class.forName(classFullName);
		FinInvtAlysis finInvt = (FinInvtAlysis) c.newInstance();
		return finInvt.calculator(qsrtInfo, finQsrtInfo);
	}	
	
}
