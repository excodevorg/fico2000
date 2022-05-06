package com.fas.model.fin.alys.cash;

import java.math.BigDecimal;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;

import com.fas.web.cmmn.util.BeanUtils;
import com.fas.web.cmmn.util.StringUtil;

public class BusinessWorkPattern extends CashFlowAlysis {
	
	private static Log logger = LogFactory.getLog(BusinessWorkPattern.class);

	@SuppressWarnings({ "rawtypes", "unchecked" })
	@Override
	public Map cal() throws Exception {
		// TODO Auto-generated method stub
		Map resultMap = new LinkedHashMap();
		BeanUtils beanUtil = new BeanUtils();
		
		logger.debug("businessWorkPattern start $$$$$$ ");
		logger.debug("qsrtInfo >>> " + qsrtInfo);
		
		BigDecimal dl = BigDecimal.ZERO; //회수율
		BigDecimal up = BigDecimal.ZERO; //매출채권 (100-회수율)
		BigDecimal totalAmt = BigDecimal.ZERO; 
		BigDecimal baseAmt = new BigDecimal(100);
		Map qsrt = null;
		Map rsv = null;
		List rsvList = null;
		String answer = "";
		
		//30일이내 회수
		qsrt = (Map) qsrtInfo.get("qsrtNo1");
		qsrt = (Map) qsrt.get("no1");
		
		if (!StringUtil.isEmpty("" + qsrt.get("rsltVl"))) {
			dl = new BigDecimal("" + qsrt.get("rsltVl"));
		} else {
			dl = BigDecimal.ZERO;
		}
		
		if (dl != null) totalAmt = totalAmt.add(dl);
		
		up = baseAmt.subtract(totalAmt);
		
		rsv = new LinkedHashMap();
		rsv.put("period", "30일내 회수");
		rsv.put("dl", ""+dl);
		rsv.put("up", ""+up);
		
		resultMap.put("rsv01", rsv);
		
		//60일이내 회수
		qsrt = (Map) qsrtInfo.get("qsrtNo1");
		qsrt = (Map) qsrt.get("no2");
		
		if (!StringUtil.isEmpty("" + qsrt.get("rsltVl"))) {
			dl = new BigDecimal("" + qsrt.get("rsltVl"));
		} else {
			dl = BigDecimal.ZERO;
		}
		
		if (dl != null) totalAmt = totalAmt.add(dl);
		
		up = baseAmt.subtract(totalAmt);
				
		rsv = new LinkedHashMap();
		rsv.put("period", "60일내 회수");
		rsv.put("dl", ""+dl);
		rsv.put("up", ""+up);
				
		resultMap.put("rsv02", rsv);
		
		//90일이내 회수
		qsrt = (Map) qsrtInfo.get("qsrtNo1");
		qsrt = (Map) qsrt.get("no3");
		if (!StringUtil.isEmpty("" + qsrt.get("rsltVl"))) {
			dl = new BigDecimal("" + qsrt.get("rsltVl"));
		} else {
			dl = BigDecimal.ZERO;
		}		
		
		if (dl != null) totalAmt = totalAmt.add(dl);
		
		up = baseAmt.subtract(totalAmt);
				
		rsv = new LinkedHashMap();
		rsv.put("period", "90일내 회수");
		rsv.put("dl", ""+dl);
		rsv.put("up", ""+up);
				
		resultMap.put("rsv03", rsv);
		
		int intTotalAmt = totalAmt.intValue();
		int compareAmt = 100;
		
		logger.debug("intTotalAmt >>> " + intTotalAmt);
		logger.debug("compareAmt >>> " + compareAmt);
		
		if (intTotalAmt == compareAmt ) {
			resultMap.put("rsv04", "OK");
		} else {
			resultMap.put("rsv04", "검토요");
		}
		
		
		//원재료와 부재료구입에 따른 현금 지출은  매출 후
		qsrt = (Map) qsrtInfo.get("qsrtNo2");
		qsrt = (Map) qsrt.get("no1");
		answer = StringUtil.nvl("" + qsrt.get("rsltVl"));
		
		resultMap.put("rsv05", answer);
		
		//원재료와 부재료구입에 따른 현금 지출은  매출 전
		qsrt = (Map) qsrtInfo.get("qsrtNo2");
		qsrt = (Map) qsrt.get("no2");
		answer = StringUtil.nvl("" + qsrt.get("rsltVl"));
		
		resultMap.put("rsv06", answer);
		
		//매출원가가 매출액에 차지하는 비율은 평균적으로 어느 정도 입니까?
		qsrt = (Map) qsrtInfo.get("qsrtNo3");
		qsrt = (Map) qsrt.get("no1");
		answer = StringUtil.nvl("" + qsrt.get("rsltVl"));
		
		resultMap.put("rsv07", answer);
		
		//고정적 지출
		//판매관리비
		qsrt = (Map) qsrtInfo.get("qsrtNo4");
		rsvList = (List) qsrt.get("no1");
		answer = StringUtil.nvl( "" + ((Map) rsvList.get(2)).get("rsltVl"));
		resultMap.put("rsv08", answer);
		
		//이자비용
		answer = StringUtil.nvl("" + ((Map) rsvList.get(1)).get("rsltVl"));
		resultMap.put("rsv09", answer);
		
		//작년도 법인세는 몇월에 ?
		qsrt = (Map) qsrtInfo.get("qsrtNo5");
		qsrt = (Map) qsrt.get("no1");
		answer = StringUtil.nvl("" + qsrt.get("rsltVl"));
		rsv = new LinkedHashMap();
		rsv.put("month", answer);
		
		//작년도 법인세 금액은 ?
		qsrt = (Map) qsrtInfo.get("qsrtNo6");
		qsrt = (Map) qsrt.get("no1");
		answer = StringUtil.nvl("" + qsrt.get("rsltVl"));
		rsv.put("amt", answer);
		resultMap.put("rsv10", rsv);

		//전년도 말 현금잔고는 ?
		qsrt = (Map) qsrtInfo.get("qsrtNo7");
		qsrt = (Map) qsrt.get("no1");
		answer = StringUtil.nvl("" + qsrt.get("rsltVl"));
		resultMap.put("rsv11", answer);
		
		//최저 현금잔고보유수준 ?
		qsrt = (Map) qsrtInfo.get("qsrtNo8");
		qsrt = (Map) qsrt.get("no1");
		answer = StringUtil.nvl("" + qsrt.get("rsltVl"));
		resultMap.put("rsv12", answer);
		
		//배당월 ? 
		qsrt = (Map) qsrtInfo.get("qsrtNo11");
		qsrt = (Map) qsrt.get("no1");
		answer = StringUtil.nvl("" + qsrt.get("rsltVl"));
		rsv = new LinkedHashMap();
		rsv.put("month", answer);

		//배당금액 ? 
		qsrt = (Map) qsrtInfo.get("qsrtNo11");
		qsrt = (Map) qsrt.get("no2");
		answer = StringUtil.nvl("" + qsrt.get("rsltVl"));
		rsv.put("amt", answer);
		resultMap.put("rsv13", rsv);
		
		beanUtil.toString(resultMap);
		
		return resultMap;
	}

}
