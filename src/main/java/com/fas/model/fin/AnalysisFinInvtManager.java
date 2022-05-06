package com.fas.model.fin;

import java.util.LinkedHashMap;
import java.util.Map;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.stereotype.Component;

import com.fas.model.fin.alys.finInvt.FinInvtConst;
import com.fas.model.fin.alys.finInvt.FinInvtFactory;
import com.fas.web.cmmn.util.BeanUtils;

@Component("AnalysisFinInvtManager")
public class AnalysisFinInvtManager {

	private static Log logger = LogFactory.getLog(AnalysisFinInvtManager.class);
	 
	//현금수입
	public Map finInvtCashIncomeModify(String alyid, String stacYy, Map qsrtInfo) throws Exception {
		Map cashMap = QsrtFinInfo(alyid, "FAS030401", stacYy);
		FinInvtFactory factory = new FinInvtFactory();
		return factory.getFinInvtAlysis(FinInvtConst.현금수입수정, qsrtInfo, cashMap);
	}
	//현금지출
	public Map finInvtCashOutcomeModify(String alyid, String stacYy, Map qsrtInfo) throws Exception {
		Map cashMap = QsrtFinInfo(alyid, "FAS030401", stacYy);
		FinInvtFactory factory = new FinInvtFactory();
		return factory.getFinInvtAlysis(FinInvtConst.현금지출수정, qsrtInfo, cashMap);
	}
	//현금예산
	public Map finCashBdgtAmt(String alyid, String stacYy, Map qsrtInfo) throws Exception {
		Map cashMap = QsrtFinInfo(alyid, "FAS030401", stacYy);
		FinInvtFactory factory = new FinInvtFactory();
		return factory.getFinInvtAlysis(FinInvtConst.현금예산, qsrtInfo, cashMap);
	}	
	//최종 결과
	public Map finEstmls(String alyid, String stacYy, Map qsrtInfo) throws Exception {
		Map cashMap = QsrtFinInfo(alyid, "FAS030401", stacYy);
		FinInvtFactory factory = new FinInvtFactory();
		return factory.getFinInvtAlysis(FinInvtConst.추정손익계산서, qsrtInfo, cashMap);
	}	
	
	public Map QsrtFinInfo(String alyid, String lsqsTcd, String stacYy) throws Exception {

		QsrtInfoFactory qsrtFactory = new QsrtInfoFactory();
		BeanUtils beanUtil = new BeanUtils();
		
		QsrtInfoConsult qsrtInfo = qsrtFactory.createInstance(alyid, lsqsTcd, stacYy);
		
		QsrtInfoVo qsrtInfoVo = qsrtInfo.getQsrtVo();
		
		Map qsrtInfoMap = new LinkedHashMap();
		
		qsrtInfoMap.put("qsrtNo0", beanUtil.objectToMap(qsrtInfoVo.getQsrtNo0()));
		qsrtInfoMap.put("qsrtNo1", beanUtil.objectToMap(qsrtInfoVo.getQsrtNo1()));
		qsrtInfoMap.put("qsrtNo2", beanUtil.objectToMap(qsrtInfoVo.getQsrtNo2()));
		qsrtInfoMap.put("qsrtNo3", beanUtil.objectToMap(qsrtInfoVo.getQsrtNo3()));
		qsrtInfoMap.put("qsrtNo4", beanUtil.objectToMap(qsrtInfoVo.getQsrtNo4()));
		qsrtInfoMap.put("qsrtNo5", beanUtil.objectToMap(qsrtInfoVo.getQsrtNo5()));
		qsrtInfoMap.put("qsrtNo6", beanUtil.objectToMap(qsrtInfoVo.getQsrtNo6()));
		qsrtInfoMap.put("qsrtNo7", beanUtil.objectToMap(qsrtInfoVo.getQsrtNo7()));
		qsrtInfoMap.put("qsrtNo8", beanUtil.objectToMap(qsrtInfoVo.getQsrtNo8()));
		qsrtInfoMap.put("qsrtNo9", beanUtil.objectToMap(qsrtInfoVo.getQsrtNo9()));
		qsrtInfoMap.put("qsrtNo10", beanUtil.objectToMap(qsrtInfoVo.getQsrtNo10()));
		qsrtInfoMap.put("qsrtNo11", beanUtil.objectToMap(qsrtInfoVo.getQsrtNo11()));		
		qsrtInfoMap.put("qsrtNo12", beanUtil.objectToMap(qsrtInfoVo.getQsrtNo12()));
		qsrtInfoMap.put("qsrtNo13", beanUtil.objectToMap(qsrtInfoVo.getQsrtNo13()));
		
		return qsrtInfoMap;
		
	}
}
