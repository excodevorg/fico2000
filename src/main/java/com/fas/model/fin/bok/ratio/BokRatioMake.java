package com.fas.model.fin.bok.ratio;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Iterator;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;
import java.util.Set;

import org.hsqldb.lib.StringUtil;
import org.springframework.context.ApplicationContext;

import com.fas.model.com.BOKManager;
import com.fas.model.com.domain.BOKFinRatioDomain;
import com.fas.model.fin.AnalysisFnamManager;
import com.fas.model.fin.EntpFinItemVo;
import com.fas.model.fin.alys.FinStatement;
import com.fas.model.fin.alys.FinStatementBuilder;
import com.fas.model.fin.alys.ratio.FinRatio;
import com.fas.model.fin.alys.ratio.FinRatioFactory;
import com.fas.web.cmmn.exception.BizException;
import com.fas.web.cmmn.util.ApplicationContextStart;
import com.fas.web.cmmn.util.BeanUtils;
import com.fas.web.cmmn.util.SpringApplicationContext;

public class BokRatioMake {

	private String stacYy;
	
	private String bzn;
	
	private String userid;
	
	private String alyid;
	
	private String tpbsClsfDcd; //업종
	
	private String enslDcd; //기업규모
	
	private List<FinStatement> finStateList;
	
	private Map<String, EntpFinItemVo> finFnamInfoMap;
	
	private BOKManager manager;
	
	private boolean lastest = false; //최신여부
	
	private Map<String, Map> resultMap = new LinkedHashMap<String, Map>();
	
	private Map<String, String> bokRatioNameMap = new LinkedHashMap<String, String> ();
	

	private String[] finCodes = {
		"501","502","503","504","505","506","701","702","703","704","705","706","707","708","709","710","713","601","602","603","604","606","607","610","611","612","622","624","907","908","909","910","911","801","802","805","806","807","810","811"	
	};
	
	public BokRatioMake setFinCodes(String[] finCodes) {
		this.finCodes = finCodes;
		return this;
	}

	public BokRatioMake setAlyid(String alyid) {
		this.alyid = alyid;
		return this;
	}
	
	public BokRatioMake setStacYy(String stacYy) {
		this.stacYy = stacYy;
		return this;
	}
	
	public BokRatioMake setBzn(String bzn) {
		this.bzn = bzn;
		return this;
	}
	
	public BokRatioMake setUserid(String userid) {
		this.userid = userid;
		return this;
	}
	
	public BokRatioMake setTpbsClsfDcd(String tpbsClsfDcd) {
		this.tpbsClsfDcd = tpbsClsfDcd;
		return this;
	}
	
	public BokRatioMake setEnslDcd(String enslDcd) {
		this.enslDcd = enslDcd;
		return this;
	}
	
	public BokRatioMake setLastest(boolean lastest) {
		this.lastest = lastest;
		return this;
	}
	
	public Map<String, String> getBokRatioNameMap() {
		return this.bokRatioNameMap;
	}
	
	public Map<String, Map> finRatioMake() throws Exception {
		
		BeanUtils beanUtil = new BeanUtils();
		
		FinStatementBuilder builder = new FinStatementBuilder();
		
		builder.setAlyid(this.alyid)
	       	   .setBzn(this.bzn)
	           .setUserid(this.userid);
		
		finStateList = builder.buildList();
		
		FinRatioFactory factory = new FinRatioFactory();
		
		Map<String, BigDecimal> finRatioMap = null;
		Map<String, Map> finMap = null;
		FinRatio finRatio = null;
		
		List<String> stacYys = builder.stacYys();

		for (String stacYy : stacYys) {
			finRatioMap = new LinkedHashMap<String, BigDecimal>();
			resultMap.put("Fin"+stacYy, finRatioMap);
			System.out.println("Fin"+stacYy);
		}
		
		try {
			manager = (BOKManager) SpringApplicationContext.getBean("BOKManager");
		} catch (Exception ex) {
			ApplicationContext applicationContext = ApplicationContextStart.getInstance();
			manager = (BOKManager) applicationContext.getBean("BOKManager");
		}
		
		//BOK 조회
		BOKFinRatioDomain ratioDomain = null;
		
		List<BOKFinRatioDomain> ratioList = null;
		
		String[] baseYears = {};
		
		ratioDomain = new BOKFinRatioDomain();
		ratioDomain.setItemCode(finCodes[0]);
		ratioDomain.setTpbsClsfDcd(this.tpbsClsfDcd);
		ratioDomain.setEnslDcd(this.enslDcd);
		
		ratioList = manager.selectFinRatioLastest(ratioDomain);
		
		baseYears = new String[ratioList.size()];
		
		int indx = 0;
		
		for (BOKFinRatioDomain d : ratioList) {
			baseYears[indx++] = d.getBaseYear();
		}
		
		ratioDomain = new BOKFinRatioDomain();
		ratioDomain.setTpbsClsfDcd(this.tpbsClsfDcd);
		ratioDomain.setEnslDcd(this.enslDcd);
		
		List<BOKFinRatioDomain> bokFinRatioList = manager.selectRatioList(ratioDomain);
		Map<String, Map> bokFinRatioMap = new LinkedHashMap<String, Map>();
		Map<String, String> bokMap = null;
		String bokkey = "";
		BigDecimal bokAmt = BigDecimal.ZERO;
		for (BOKFinRatioDomain bok : bokFinRatioList) {
			bokkey = bok.getItemCode() + bok.getTpbsClsfDcd() + bok.getEnslDcd() + bok.getBaseYear();
			bokMap = new LinkedHashMap<String, String>();
			bokMap.put("name", bok.getItemNm());
			bokAmt = BigDecimal.ZERO;
			if (bok.getStatValue() != null) bokAmt = bok.getStatValue();
			
			bokMap.put("value", ""+bokAmt.setScale(2, BigDecimal.ROUND_HALF_UP));
			
			bokFinRatioMap.put(bokkey, bokMap);
		}
		
		bokMap = null;
		bokkey = "";
		
		for (String code : finCodes) {
			
			Set<String> keys = resultMap.keySet();
			Iterator<String> itrs = keys.iterator();
			
			while (itrs.hasNext()) {
				
				String key = itrs.next();
				System.out.println("key >>> " + key);
				
				finRatioMap = resultMap.get(key);
//				System.out.println("finRatioMap -------------------------------------------->");
//				beanUtil.toString(finRatioMap);
				
				ratioDomain = new BOKFinRatioDomain();
				ratioDomain.setItemCode(code);
				ratioDomain.setTpbsClsfDcd(this.tpbsClsfDcd);
				ratioDomain.setEnslDcd(this.enslDcd);
				ratioDomain.setBaseYear(checkBaseYear(baseYears, key.substring(3)));
				
				bokkey = ratioDomain.getItemCode() + ratioDomain.getTpbsClsfDcd() + ratioDomain.getEnslDcd() + ratioDomain.getBaseYear();
				bokMap = (Map<String, String>) bokFinRatioMap.get(bokkey);
				
				//System.out.println("before -------------------------------------------->");
				//beanUtil.toString(ratioDomain);
				
				//ratioDomain = manager.selectFinRatio(ratioDomain);
				
				
				
				
//				System.out.println("after -------------------------------------------->");
//				beanUtil.toString(ratioDomain);
				
				//finRatioMap.put(code, ratioDomain.getStatValue());
				//bokRatioNameMap.put(code, ratioDomain.getItemNm());
				if (bokMap.get("value") != null) {
					finRatioMap.put(code, new BigDecimal(bokMap.get("value")));
				} else {
					finRatioMap.put(code, new BigDecimal("0"));
				}
				
				bokRatioNameMap.put(code, bokMap.get("name"));
				
			}
		}
		
		return resultMap;
	}
	
	private String checkBaseYear(String [] bokYears, String baseYear) throws Exception {
		
		String baseYYYY = "";
		
		if (baseYear == null) return null;
		
		if (bokYears == null) return null;
		
		Arrays.sort(bokYears);
		
		if (this.lastest) {
			
			String maxYear = bokYears[bokYears.length - 1];
			String minYear = bokYears[0];
			
			int intMaxYear = Integer.parseInt(maxYear);
			int intMinYear = Integer.parseInt(minYear);
			
			int intBaseYear = Integer.parseInt(baseYear);
			
			if (intBaseYear <= intMinYear) {
				baseYYYY = minYear;
			} else if (intBaseYear >= intMaxYear) {
				baseYYYY = maxYear;
			} else {
			
				for (String year : bokYears) {
					int intYear = Integer.parseInt(year);					
					if (intBaseYear <= intYear) {
						baseYYYY = year;
						break;
					}
				}
				
			}
			
		} else {
			
			for (String year : bokYears) {
				if (baseYear.equals(year)) {
					baseYYYY = year;
				}
			}
			
			if (StringUtil.isEmpty(baseYYYY)) {
				throw new BizException(baseYear + " 년에 기준값이 존재 하지 않습니다.");
			}
		}
		
		return baseYYYY; 
		
	}
	
	public static void main(String args[]) throws Exception {
		
		BeanUtils beanUtil = new BeanUtils();
		
		BokRatioMake ratio = new BokRatioMake();
		
		ratio.setAlyid("20170220162949613000")
        	 .setBzn("2035789169")
        	 .setUserid("jepul96@gmail.com")
			 .setEnslDcd("M")
			 .setTpbsClsfDcd("ZZZ00")
		     .setLastest(true);
		
		Map result = ratio.finRatioMake();
		
		beanUtil.toString(result);
		
		beanUtil.toString(ratio.getBokRatioNameMap());
		
	}
	
}
