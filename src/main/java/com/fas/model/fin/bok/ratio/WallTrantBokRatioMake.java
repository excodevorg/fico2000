package com.fas.model.fin.bok.ratio;

import java.math.BigDecimal;
import java.util.Arrays;
import java.util.Iterator;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;
import java.util.Set;

import org.hsqldb.lib.StringUtil;
import org.springframework.context.ApplicationContext;

import com.fas.cmmn.util.FasNumberUtil;
import com.fas.model.com.BOKManager;
import com.fas.model.com.domain.BOKFinRatioDomain;
import com.fas.model.fin.EntpFinItemVo;
import com.fas.model.fin.alys.FinStatement;
import com.fas.model.fin.alys.FinStatementBuilder;
import com.fas.model.fin.alys.ratio.FinRatio;
import com.fas.model.fin.alys.ratio.FinRatioFactory;
import com.fas.model.fin.alys.ratio.WallTrantRatioMake;
import com.fas.model.fin.dao.FinWallTrantDao;
import com.fas.model.fin.domain.FinWallTrantDomain;
import com.fas.web.cmmn.exception.BizException;
import com.fas.web.cmmn.util.ApplicationContextStart;
import com.fas.web.cmmn.util.BeanUtils;
import com.fas.web.cmmn.util.SpringApplicationContext;

public class WallTrantBokRatioMake {

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
			"702","704","706","802","805","807","810","811"	
	};
	
	public WallTrantBokRatioMake setFinCodes(String[] finCodes) {
		this.finCodes = finCodes;
		return this;
	}

	public WallTrantBokRatioMake setAlyid(String alyid) {
		this.alyid = alyid;
		return this;
	}
	
	public WallTrantBokRatioMake setStacYy(String stacYy) {
		this.stacYy = stacYy;
		return this;
	}
	
	public WallTrantBokRatioMake setBzn(String bzn) {
		this.bzn = bzn;
		return this;
	}
	
	public WallTrantBokRatioMake setUserid(String userid) {
		this.userid = userid;
		return this;
	}
	
	public WallTrantBokRatioMake setTpbsClsfDcd(String tpbsClsfDcd) {
		this.tpbsClsfDcd = tpbsClsfDcd;
		return this;
	}
	
	public WallTrantBokRatioMake setEnslDcd(String enslDcd) {
		this.enslDcd = enslDcd;
		return this;
	}
	
	public WallTrantBokRatioMake setLastest(boolean lastest) {
		this.lastest = lastest;
		return this;
	}
	
	public Map<String, Map> finWallTrantDecision() throws Exception {
		
		Map<String, FinWallTrantDomain> finWallTrantValues = null;
		Map<String, Map> finRelationMap = null;
		Map<String, Map> finWallTrantMap = new LinkedHashMap<String, Map>();
		Map<String, Map> finWallTrantDecisionMap = null;
		
		Map<String, BigDecimal> finWallTrantRatioMap = null;
		Map<String, String> finWallRatioDecisionMap = null;
		Map<String, String> finTrantRatioDecisionMap = null;
		FinWallTrantDomain finWallTrantDomain = null;
		
		finRelationMap = finRelationRatioMake();
		finWallTrantValues = wallTrantValues();
		
		Set<String> keySet = finRelationMap.keySet();
		Iterator<String> itr = keySet.iterator();
		
		BigDecimal finWallTrantRatio = BigDecimal.ZERO;
		BigDecimal finWallRatioDecion = BigDecimal.ZERO;
		BigDecimal finTrantRatioDecion = BigDecimal.ZERO;
		BigDecimal finWallRatioDecionSum = BigDecimal.ZERO;
		BigDecimal finTrantRatioDecionSum = BigDecimal.ZERO;
		
		Set<String> localKeySet = null;
		Iterator<String> localItr = null;
		
		String key = "";
		String localKey = "";
		
		while (itr.hasNext()) {
			key = itr.next();
			finWallTrantRatioMap = finRelationMap.get(key);
			
			finWallTrantDecisionMap = new LinkedHashMap<String, Map>();
			
			localKeySet = finWallTrantRatioMap.keySet();
			localItr = localKeySet.iterator();
			
			finWallRatioDecisionMap = new LinkedHashMap<String,String>();
			finTrantRatioDecisionMap = new LinkedHashMap<String, String>();
			
			finWallRatioDecionSum = BigDecimal.ZERO;
			finTrantRatioDecionSum = BigDecimal.ZERO;
	
			while (localItr.hasNext()) {
				localKey = localItr.next();
				finWallTrantRatio = finWallTrantRatioMap.get(localKey);
				finWallTrantDomain = finWallTrantValues.get(localKey);
				
				finWallRatioDecion = BigDecimal.ZERO;
				finWallRatioDecion = finWallTrantRatio.multiply(finWallTrantDomain.getWall());
				
				finTrantRatioDecion = BigDecimal.ZERO;
				finTrantRatioDecion = finWallTrantRatio.multiply(finWallTrantDomain.getTrant());
				
				finWallRatioDecion = finWallRatioDecion.setScale(2, BigDecimal.ROUND_HALF_UP);
				finTrantRatioDecion = finTrantRatioDecion.setScale(2, BigDecimal.ROUND_HALF_UP);
				
				finWallRatioDecionSum = finWallRatioDecionSum.add(finWallRatioDecion);
				finTrantRatioDecionSum = finTrantRatioDecionSum.add(finTrantRatioDecion);
				
				finWallRatioDecisionMap.put(localKey, ""+finWallRatioDecion);			
				finTrantRatioDecisionMap.put(localKey, ""+finTrantRatioDecion);
				
				bokRatioNameMap.put(finWallTrantDomain.getItemCode(), finWallTrantDomain.getItemNm());
				
			}
			
			finWallRatioDecisionMap.put("sum", ""+ finWallRatioDecionSum);
			finTrantRatioDecisionMap.put("sum", ""+ finTrantRatioDecionSum);
			
			if (FasNumberUtil.isFirstGreater(finWallRatioDecionSum, new BigDecimal("100"))) {
				finWallRatioDecisionMap.put("decision", "투자적격");
			} else {
				finWallRatioDecisionMap.put("decision", "투자부적격");
			}
			
			if (FasNumberUtil.isFirstGreater(finTrantRatioDecionSum, new BigDecimal("100"))) {
				finTrantRatioDecisionMap.put("decision", "사채적격");
			} else {
				finTrantRatioDecisionMap.put("decision", "사채부적격");
			}
			
			finWallTrantDecisionMap.put("wall", finWallRatioDecisionMap);
			finWallTrantDecisionMap.put("trant", finTrantRatioDecisionMap);
			
			finWallTrantMap.put(key, finWallTrantDecisionMap);
		}
		
		return finWallTrantMap;
		
	}
	
	public Map<String, Map> finRelationRatioMake() throws Exception {
		
		Map<String, BigDecimal> finRatioMap = null;
		Map<String, BigDecimal> finBokRatioMap = null;
		Map<String, BigDecimal> finRelationRatioMap = null;
		Map<String, Map> finMap = null;
		Map<String, Map> finBokMap = null;
		Map<String, Map> finRelationMap = new LinkedHashMap<String, Map>();
		
		//한국은행 지표
		finBokMap = finRatioMake();
		
		WallTrantRatioMake wallTrantBok = new WallTrantRatioMake();
		
		wallTrantBok.setAlyid(this.alyid)
   	 				.setBzn(this.bzn)
   	 				.setUserid(this.userid);
		
		//기업재무비율
		finMap = wallTrantBok.finRatioMake();
		
		Set<String> keySet = finMap.keySet();
		Iterator<String> itr = keySet.iterator();
		
		Set<String> localKeySet = null;
		Iterator<String> localItr = null;
		
		String key = "";
		String localKey = "";
		
		BigDecimal finRatio = BigDecimal.ZERO;
		BigDecimal bokRatio = BigDecimal.ZERO;
		BigDecimal relationRatio = BigDecimal.ZERO;
		
		while(itr.hasNext()) {
			key = itr.next();
			finRatioMap = (Map<String, BigDecimal>) finMap.get(key);
			finBokRatioMap = (Map<String, BigDecimal>) finBokMap.get(key);
			
			localKeySet = finRatioMap.keySet();
			localItr = localKeySet.iterator();
			
			finRelationRatioMap = new LinkedHashMap<String, BigDecimal>();
			
			while(localItr.hasNext()) {
				localKey = localItr.next();
				
				relationRatio = BigDecimal.ZERO;
				finRatio = BigDecimal.ZERO;
				bokRatio = BigDecimal.ZERO;
				
				finRatio = finRatioMap.get(localKey);
				bokRatio = finBokRatioMap.get(localKey);
				
				System.out.println("bokRatio >>>> "+ bokRatio);
				System.out.println("finBokRatioMap >>>> "+ finBokRatioMap);
				System.out.println("finBokMap >>>> "+ finBokMap);
				
				
				if (!FasNumberUtil.isEquals(bokRatio, BigDecimal.ZERO)) {
					relationRatio = finRatio.divide(bokRatio, 6, BigDecimal.ROUND_HALF_UP);
				} else {
					relationRatio = BigDecimal.ZERO;
				}
				
				finRelationRatioMap.put(localKey, relationRatio);
			}
			
			finRelationMap.put(key, finRelationRatioMap);
			
		}
		
		return finRelationMap;
		
	}
	
	public Map<String, FinWallTrantDomain> wallTrantValues() throws Exception {
	
		Map<String, FinWallTrantDomain> finMap = new LinkedHashMap<String, FinWallTrantDomain>();
		
		FinWallTrantDao dao = null;
				
		try {
			dao = (FinWallTrantDao) SpringApplicationContext.getBean("FinWallTrantDao");
		} catch (Exception ex) {
			//ApplicationContext applicationContext = ApplicationContextStart.getInstance();
			//dao = (FinWallTrantDao) applicationContext.getBean("FinWallTrantDao");
		}
		
		List<FinWallTrantDomain> finWallList = dao.selectAllList();
		
		int size = 0;
			
		for (FinWallTrantDomain fin : finWallList) {
			finMap.put(fin.getItemCode(), fin);
		}
		
		return finMap;
		
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
				System.out.println("finRatioMap -------------------------------------------->");
				//beanUtil.toString(finRatioMap);
				
				ratioDomain = new BOKFinRatioDomain();
				ratioDomain.setItemCode(code);
				ratioDomain.setTpbsClsfDcd(this.tpbsClsfDcd);
				ratioDomain.setEnslDcd(this.enslDcd);
				ratioDomain.setBaseYear(checkBaseYear(baseYears, key.substring(3)));
				
				bokkey = ratioDomain.getItemCode() + ratioDomain.getTpbsClsfDcd() + ratioDomain.getEnslDcd() + ratioDomain.getBaseYear();
				bokMap = (Map<String, String>) bokFinRatioMap.get(bokkey);
				
				if (bokMap.get("value") != null) {
					finRatioMap.put(code, new BigDecimal(bokMap.get("value")));
				} else {
					finRatioMap.put(code, new BigDecimal("0"));
				}	
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
		
		WallTrantBokRatioMake ratio = new WallTrantBokRatioMake();
		
		String fin [] = {"702","704","706","802","805","807","810","811"};
		
		ratio.setAlyid("20170220162949613000")
        	 .setBzn("2035789169")
        	 .setUserid("jepul96@gmail.com")
			 .setEnslDcd("L")
			 .setTpbsClsfDcd("B")
		     .setLastest(true);
		
//		WallTrantRatioMake wallTrantBok = new WallTrantRatioMake();
//		
//		wallTrantBok.setAlyid("20170220162949613000")
//   	 				.setBzn("2035789169")
//   	 				.setUserid("jepul96@gmail.com");
		
		Map result = ratio.finWallTrantDecision();
		
//		Map result1 = wallTrantBok.finRatioMake();
//		
//		Map result2 = ratio.finRatioMake();
//		
//		System.out.println("===================================");
//		beanUtil.toString(result1);
//		System.out.println("===================================");
//		beanUtil.toString(result2);
//		System.out.println("===================================");
		beanUtil.toString(result);
		
		//
		
	}

	public Map<String, String> getBokRatioNameMap() {
		return bokRatioNameMap;
	}

	public void setBokRatioNameMap(Map<String, String> bokRatioNameMap) {
		this.bokRatioNameMap = bokRatioNameMap;
	}
	
	
}
