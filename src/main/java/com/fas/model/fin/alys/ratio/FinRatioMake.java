package com.fas.model.fin.alys.ratio;

import java.math.BigDecimal;
import java.util.Collections;
import java.util.Comparator;
import java.util.Iterator;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;
import java.util.Set;

import com.fas.model.fin.AnalysisFnamManager;
import com.fas.model.fin.EntpFinItemVo;
import com.fas.model.fin.alys.FinStatement;
import com.fas.model.fin.alys.FinStatementBuilder;

public class FinRatioMake {
	
	private String stacYy;
	
	private String bzn;
	
	private String userid;
	
	private String alyid;
	
	private List<FinStatement> finStateList;
	
	private Map<String, EntpFinItemVo> finFnamInfoMap;
	
	private AnalysisFnamManager manager;
	
	private Map<String, Map> resultMap = new LinkedHashMap<String, Map>();
	
	//성장성
	private String[] finCode01 = {
		"501","502","503","504","505","506"	
	};
	
	//안정상
	private String[] finCode02 = {
			"701","702","703","704","705","706","707","708","709","710","713"
	};
	
	//수익성
	private String[] finCode03 = {
			"601","602","603","604","606","607","610","611","612","622","624"
	};	
	
	//생산성
	private String[] finCode04 = {
			"907","908","909","910","911"
	};	
	
	//활동성
	private String[] finCode05 = {
			"801","802","805","806","807","810","811"
	};	
	
	public FinRatioMake setAlyid(String alyid) {
		this.alyid = alyid;
		return this;
	}
	
	public FinRatioMake setStacYy(String stacYy) {
		this.stacYy = stacYy;
		return this;
	}
	
	public FinRatioMake setBzn(String bzn) {
		this.bzn = bzn;
		return this;
	}
	
	public FinRatioMake setUserid(String userid) {
		this.userid = userid;
		return this;
	}
	
	public Map<String, Map> finRatioMake() throws Exception {
		
		FinStatementBuilder builder = new FinStatementBuilder();
		
		builder.setAlyid(this.alyid)
		       .setBzn(this.bzn)
		       .setUserid(this.userid);

		finStateList = builder.buildList();
		
		System.out.println(this.alyid);
		System.out.println(this.bzn);
		System.out.println(this.userid);
		
		System.out.println("finStateList size >>>> " + finStateList.size());
		
		FinRatioFactory factory = new FinRatioFactory();
		
		Map<String, BigDecimal> finRatioMap = null;
		Map<String, Map> finMap = null;
		FinRatio finRatio = null;
		
		List<String> stacYys = builder.stacYys();
		
		int i = 0;
		for (String stacYy : stacYys) {
			if ( i > 0) {
				finRatioMap = new LinkedHashMap<String, BigDecimal>();
				resultMap.put("Fin"+stacYy, finRatioMap);
				System.out.println("Fin"+stacYy);
			}
			
			i++;
		}
		
		for (String code : finCode01) {
			finRatio = factory.createRate(code, finStateList);
			finMap = finRatio.getRatioMapValue();
			Set<String> keys = finMap.keySet();
			Iterator<String> itrs = keys.iterator();
			while (itrs.hasNext()) {
				String key = itrs.next();
				
				System.out.println("key >>> " + key);
				
				Map<String, BigDecimal> localratioMap = finMap.get(key);
				finRatioMap = resultMap.get("Fin"+key);
				finRatioMap.put(code, localratioMap.get(code));
			}
		}
		
		
		for (String code : finCode02) {
			finRatio = factory.createRate(code, finStateList);
			finMap = finRatio.getRatioMapValue();
			Set<String> keys = finMap.keySet();
			Iterator<String> itrs = keys.iterator();
			while (itrs.hasNext()) {
				String key = itrs.next();
				Map<String, BigDecimal> localratioMap = finMap.get(key);
				finRatioMap = resultMap.get("Fin"+key);
				finRatioMap.put(code, localratioMap.get(code));
			}
		}
		
		for (String code : finCode03) {
			finRatio = factory.createRate(code, finStateList);
			finMap = finRatio.getRatioMapValue();
			Set<String> keys = finMap.keySet();
			Iterator<String> itrs = keys.iterator();
			while (itrs.hasNext()) {
				String key = itrs.next();
				Map<String, BigDecimal> localratioMap = finMap.get(key);
				finRatioMap = resultMap.get("Fin"+key);
				finRatioMap.put(code, localratioMap.get(code));
			}
		}
		
		for (String code : finCode04) {
			finRatio = factory.createRate(code, finStateList);
			finMap = finRatio.getRatioMapValue();
			Set<String> keys = finMap.keySet();
			Iterator<String> itrs = keys.iterator();
			while (itrs.hasNext()) {
				String key = itrs.next();
				Map<String, BigDecimal> localratioMap = finMap.get(key);
				finRatioMap = resultMap.get("Fin"+key);
				finRatioMap.put(code, localratioMap.get(code));
			}
		}
		
		for (String code : finCode05) {
			finRatio = factory.createRate(code, finStateList);
			finMap = finRatio.getRatioMapValue();
			Set<String> keys = finMap.keySet();
			Iterator<String> itrs = keys.iterator();
			while (itrs.hasNext()) {
				String key = itrs.next();
				Map<String, BigDecimal> localratioMap = finMap.get(key);
				finRatioMap = resultMap.get("Fin"+key);
				finRatioMap.put(code, localratioMap.get(code));
			}
		}
		
		
		finRatio = factory.createRate("ROA", finStateList);
		finMap = finRatio.getRatioMapValue();
		Set<String> keys = finMap.keySet();
		Iterator<String> itrs = keys.iterator();
		while (itrs.hasNext()) {
			String key = itrs.next();
			Map<String, BigDecimal> localratioMap = finMap.get(key);
			finRatioMap = resultMap.get("Fin"+key);
			finRatioMap.put("ROA", localratioMap.get("ROA"));
		}
		
		finRatio = factory.createRate("AddValue", finStateList);
		finMap = finRatio.getRatioMapValue();
		keys = finMap.keySet();
		itrs = keys.iterator();
		while (itrs.hasNext()) {
			String key = itrs.next();
			Map<String, BigDecimal> localratioMap = finMap.get(key);
			finRatioMap = resultMap.get("Fin"+key);
			finRatioMap.put("AddValue", localratioMap.get("AddValue"));
		}
		
		return this.resultMap;
		
	}
	
	public static void main(String args[]) throws Exception {

		FinRatioMake ratioMake = new FinRatioMake();
		
		ratioMake.setAlyid("20170220162949613000")
  		         .setBzn("2035789169")
		         .setUserid("jepul96@gmail.com");
	
		
		
		
		Map<String, Map> map = ratioMake.finRatioMake();
		
		Set<String> keys = map.keySet();
		
		Iterator<String> itrs = keys.iterator();
		
		while(itrs.hasNext()) {
			
			String key =itrs.next();
			
			Map param = map.get(key);
			
			Set keys1 = param.keySet();
			Iterator itrs1 = keys1.iterator();
			
			System.out.println("########### [ " + key + " ] #############");
			
			while(itrs1.hasNext()) {
				String key1 = (String) itrs1.next();
				System.out.println(key1 + " : " + param.get(key1));
			}
			
		}
		
	}
}
