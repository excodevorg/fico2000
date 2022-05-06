package com.fas.model.fin.alys.finInvt;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;

import com.fas.web.cmmn.util.BeanUtils;
import com.fas.web.cmmn.util.StringUtil;

//유입
public class FinInvtInflow extends FinInvtAlysis {

	@Override
	public Map cal() throws Exception {
		// TODO Auto-generated method stub
		
		Map resultMap = new LinkedHashMap();
		BeanUtils beanUtil = new BeanUtils();
		
		Map qsrt = null;
		Map rsv = null;
		List qrstList = new ArrayList();
		
		Map fixAssetMap = new LinkedHashMap();
		List fixAssetList = new ArrayList();
		
		Map corBondMap = new LinkedHashMap();
		List corBondList = new ArrayList();		
		
		Map capitalAmtMap = new LinkedHashMap();
		List capitalAmtList = new ArrayList();

		Map storedAssetAmtMap = new LinkedHashMap();
		
		for (int i = 1; i <= 12; i++) {
			rsv = new LinkedHashMap();
			rsv.put("month", StringUtil.lpad(i,2));
			rsv.put(FinInvtConst.고정자산매각금액, "0");
			rsv.put(FinInvtConst.회사채발행금액, "0");
			rsv.put(FinInvtConst.자본금액, "0");
			rsv.put(FinInvtConst.재고자산금액, "0");
			qrstList.add(rsv);
		}
				
		qsrt = (Map) this.qsrtInfo.get("qsrtNo5");
		fixAssetList = (List) qsrt.get("no1");
		
		qsrt = (Map) this.qsrtInfo.get("qsrtNo6");
		corBondList = (List) qsrt.get("no1");
		
		qsrt = (Map) this.qsrtInfo.get("qsrtNo2");
		capitalAmtList = (List) qsrt.get("no1");		
		
		qsrt = (Map) this.qsrtInfo.get("qsrtNo7");
		storedAssetAmtMap = (Map) qsrt.get("no2");
				
		int size = 0;
		String baseYm = "";
		int intBaseYm = 0;
		String month = "";
		int intMonth = 0;
		BigDecimal rsltVlAmt = BigDecimal.ZERO;
		
		if (fixAssetList != null) size = fixAssetList.size();
		for (int i = 0; i < size; i++) {
			fixAssetMap = (Map) fixAssetList.get(i);
			baseYm = StringUtil.nvl("" + fixAssetMap.get("baseYm"));
			if (baseYm.length() > 4) {
				intBaseYm = Integer.parseInt(baseYm.substring(4));
			} else {
				if (!StringUtil.isEmpty(baseYm)) {intBaseYm = Integer.parseInt(baseYm);} else {intBaseYm = 0;}
			}
			rsltVlAmt = new BigDecimal(StringUtil.nvl("" + fixAssetMap.get("rsltVl"),"0"));
			for (int j = 1; j <= 12; j++) {
				rsv = (Map) qrstList.get(j-1);
				if (j == intBaseYm) {
					BigDecimal fixAssetAmt = new BigDecimal(StringUtil.nvl(""+rsv.get(FinInvtConst.고정자산매각금액),"0"));
					fixAssetAmt = fixAssetAmt.add(rsltVlAmt);
					rsv.put(FinInvtConst.고정자산매각금액, ""+fixAssetAmt);
				}
			}

		}
		
		if (corBondList != null) size = corBondList.size();
		for (int i = 0; i < size; i++) {
			fixAssetMap = (Map) corBondList.get(i);
			baseYm = StringUtil.nvl("" + fixAssetMap.get("baseYm"));
			if (baseYm.length() > 4) {
				intBaseYm = Integer.parseInt(baseYm.substring(4));
			} else {
				if (!StringUtil.isEmpty(baseYm)) {intBaseYm = Integer.parseInt(baseYm);} else {intBaseYm = 0;}
			}
			rsltVlAmt = new BigDecimal(StringUtil.nvl("" + fixAssetMap.get("rsltVl"),"0"));
			for (int j = 1; j <= 12; j++) {
				rsv = (Map) qrstList.get(j-1);
				if (j == intBaseYm) {
					BigDecimal fixAssetAmt = new BigDecimal(StringUtil.nvl(""+rsv.get(FinInvtConst.회사채발행금액),"0"));
					fixAssetAmt = fixAssetAmt.add(rsltVlAmt);
					rsv.put(FinInvtConst.회사채발행금액, ""+fixAssetAmt);
				}
			}

		}
		
		if (capitalAmtList != null) size = capitalAmtList.size();
		for (int i = 0; i < size; i++) {
			fixAssetMap = (Map) capitalAmtList.get(i);
			baseYm = StringUtil.nvl("" + fixAssetMap.get("baseYm"));
			if (baseYm.length() > 4) {
				intBaseYm = Integer.parseInt(baseYm.substring(4));
			} else {
				if (!StringUtil.isEmpty(baseYm)) {intBaseYm = Integer.parseInt(baseYm);} else {intBaseYm = 0;}
			}
			rsltVlAmt = new BigDecimal(StringUtil.nvl("" + fixAssetMap.get("rsltVl"),"0"));
			for (int j = 1; j <= 12; j++) {
				rsv = (Map) qrstList.get(j-1);
				if (j == intBaseYm) {
					BigDecimal fixAssetAmt = new BigDecimal(""+rsv.get(FinInvtConst.자본금액));
					fixAssetAmt = fixAssetAmt.add(rsltVlAmt);
					rsv.put(FinInvtConst.자본금액, ""+fixAssetAmt);
				}
			}
		} 
		
		rsv = (Map) qrstList.get(11);
		BigDecimal fixAssetAmt = new BigDecimal(StringUtil.nvl("" + storedAssetAmtMap.get("rsltVl"),"0"));
		
		rsv.put(FinInvtConst.재고자산금액, "" + fixAssetAmt);
		
		resultMap.put(FinInvtConst.유입, qrstList);
		
		return resultMap;
	}
	
}
