package com.fas.model.fin.alys.finInvt;

import java.util.Map;

public abstract class FinInvtAlysis {

	protected Map qsrtInfo;
	
	protected Map cashFlowQsrtInfo;
	
	public abstract Map cal() throws Exception;
	
	public Map calculator(Map param)  throws Exception {
		this.qsrtInfo = param;
		return cal(); 
	}
	
	public Map calculator(Map param, Map cashMap)  throws Exception {
		this.qsrtInfo = param;
		this.cashFlowQsrtInfo = cashMap;
		return cal(); 
	}
}
