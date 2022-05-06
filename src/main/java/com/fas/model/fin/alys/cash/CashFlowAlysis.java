package com.fas.model.fin.alys.cash;

import java.math.BigDecimal;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;

import com.fas.cmmn.util.FasDateUtil;
import com.fas.web.cmmn.util.BeanUtils;
import com.fas.web.cmmn.util.StringUtil;

public abstract class CashFlowAlysis {
	
	protected Map qsrtInfo;
	
	public abstract Map cal() throws Exception;
	
	public Map calculator(Map param)  throws Exception {
		this.qsrtInfo = param;
		return cal(); 
	}
	
	//전체 매출  리스트 (예측년도)
	public Map salesList() throws Exception {
		
		Map resultMap = new LinkedHashMap();
		BeanUtils beanUtil = new BeanUtils();
		
		BigDecimal amt = BigDecimal.ZERO;
		String month = "";
		Map qsrt = null;
		Map rsv = null;
		List rsvList = null;
		String answer = "";
		String stacYy = ""; //평가 추측년도
		String beforeStacYy = ""; //평가 추측 전년도
		String afterStacYy = ""; //평가 추측 후 년도
		String baseYm = "";
		
		//평가 추측 년도
		qsrt = (Map) qsrtInfo.get("qsrtNo0");
		qsrt = (Map) qsrt.get("no1");
		
		if (qsrt.get("rsltVl") == null || (""+qsrt.get("rsltVl")).length() == 0)  { 
			stacYy = FasDateUtil.getCurrentDay().substring(0,4);
		} else {
			stacYy = "" + qsrt.get("rsltVl");
		}
		
		int intStacYy = 0;
		//평가 추측 전 년도
		intStacYy = Integer.parseInt(stacYy) - 1;
		beforeStacYy = "" + intStacYy;
		
		//평가 추측 후 년도
		intStacYy = Integer.parseInt(stacYy) + 1;
		afterStacYy = "" + intStacYy;
		
		//9.평가추측 기준월 전월,2개월전, 3개월전 매출액은?
		//전월
		qsrt = (Map) qsrtInfo.get("qsrtNo9");
		qsrt = (Map) qsrt.get("no1");
		
		baseYm = StringUtil.nvl("" + qsrt.get("baseYm"),"");
		if (baseYm.length() >= 6) baseYm = baseYm.substring(4); 
		resultMap.put(beforeStacYy + "-" + baseYm,""+qsrt.get("rsltVl"));
		//2개월전
		qsrt = (Map) qsrtInfo.get("qsrtNo9");
		qsrt = (Map) qsrt.get("no2");
		
		baseYm = StringUtil.nvl("" + qsrt.get("baseYm"),"");
		if (baseYm.length() >= 6) baseYm = baseYm.substring(4);
		
		resultMap.put(beforeStacYy + "-" + baseYm,""+qsrt.get("rsltVl"));
		//3개월전
		qsrt = (Map) qsrtInfo.get("qsrtNo9");
		qsrt = (Map) qsrt.get("no3");
		
		baseYm = StringUtil.nvl("" + qsrt.get("baseYm"),"");
		if (baseYm.length() >= 6) baseYm = baseYm.substring(4);
		
		resultMap.put(beforeStacYy + "-" + baseYm,""+qsrt.get("rsltVl"));		
		
		//매출 예측
		qsrt = (Map) qsrtInfo.get("qsrtNo10");
		rsvList = (List) qsrt.get("no1");
		int size = rsvList.size();
		Map param = null;
		for (int i = 0; i < size; i++) {
			param = (Map) rsvList.get(i);
			
			baseYm = StringUtil.nvl("" + param.get("baseYm"),"");
			if (baseYm.length() >= 6) baseYm = baseYm.substring(4);
			
			resultMap.put(stacYy + "-" + baseYm,""+param.get("rsltVl"));		
		}
		
		//그후 년도
		for (int i = 0; i < 3; i++) {
			param = (Map) rsvList.get(i);
			
			baseYm = StringUtil.nvl("" + param.get("baseYm"),"");
			if (baseYm.length() >= 6) baseYm = baseYm.substring(4);
			
			resultMap.put(afterStacYy + "-" + baseYm,""+param.get("rsltVl"));		
		}

		return resultMap;
		
	}	
	
}
