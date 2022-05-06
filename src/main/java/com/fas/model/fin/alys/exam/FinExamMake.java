package com.fas.model.fin.alys.exam;

import java.math.BigDecimal;
import java.util.Iterator;
import java.util.LinkedHashMap;
import java.util.Map;
import java.util.Set;

import com.fas.model.fin.alys.ratio.FinRatioMake;
import com.fas.model.fin.bok.ratio.BokRatioMake;
import com.fas.web.cmmn.util.BeanUtils;

public class FinExamMake {

	private String stacYy;
	
	private String bzn;
	
	private String userid;
	
	private String alyid;
	
	private String tpbsClsfDcd; //업종
	
	private String enslDcd; //기업규모
	
	private boolean lastest = false; //최신여부
	
	private Map<String, String> bokRatioNameMap = new LinkedHashMap<String, String> ();
	
	public Map<String, String> getBokRatioNameMap() {
		return bokRatioNameMap;
	}

	public void setBokRatioNameMap(Map<String, String> bokRatioNameMap) {
		this.bokRatioNameMap = bokRatioNameMap;
	}

	public FinExamMake setStacYy(String stacYy) {
		this.stacYy = stacYy;
		return this;
	}

	public FinExamMake setBzn(String bzn) {
		this.bzn = bzn;
		return this;		
	}

	public FinExamMake setUserid(String userid) {
		this.userid = userid;
		return this;		
	}

	public FinExamMake setAlyid(String alyid) {
		this.alyid = alyid;
		return this;		
	}

	public FinExamMake setTpbsClsfDcd(String tpbsClsfDcd) {
		this.tpbsClsfDcd = tpbsClsfDcd;
		return this;		
	}

	public FinExamMake setEnslDcd(String enslDcd) {
		this.enslDcd = enslDcd;
		return this;		
	}

	public FinExamMake setLastest(boolean lastest) {
		this.lastest = lastest;
		return this;		
	}
	
	public Map<String, Map> finExamMake() throws Exception {
		
		Map<String, Map> finMap = null;
		Map<String, Map> finBokMap = null;
		Map<String, Map> finExamMap = new LinkedHashMap<String, Map>();
		
		Map<String, BigDecimal> finRatioMap = null;
		Map<String, BigDecimal> finBokRatioMap = null;
		
		Map<String, String> finExamRatioMap = null;
		
		FinRatioMake finRatioMake = new FinRatioMake();

		finRatioMake.setAlyid(this.alyid)
        			.setBzn(this.bzn)
        			.setUserid(this.userid);
		
		finMap = finRatioMake.finRatioMake();
		
		BokRatioMake bokRatioMake = new BokRatioMake();
		
		bokRatioMake.setAlyid(this.alyid)
					.setBzn(this.bzn)
					.setUserid(this.userid)
					.setEnslDcd(this.enslDcd)
					.setTpbsClsfDcd(this.tpbsClsfDcd)
					.setLastest(this.lastest);
		
		finBokMap = bokRatioMake.finRatioMake();
		
		this.setBokRatioNameMap(bokRatioMake.getBokRatioNameMap());
		
		Set<String> keySet = finMap.keySet();
		
		Iterator<String> itr = keySet.iterator();
		
		Set<String> localKeySet = null;
		Iterator<String> localItr = null;
		
		String key = "";
		String localKey = "";
		
		BigDecimal finRatio = BigDecimal.ZERO;
		BigDecimal finBokRatio = BigDecimal.ZERO;
		
		FinExam exam = null;
		
		FinExamFactory examFactory = new FinExamFactory();
		
		while(itr.hasNext()) {
			
			key = itr.next();
			
			System.out.println(">>>>>>>>>>>>>>>>> key >>>>>>>>>>>>> " + key);
			
			finRatioMap = (Map<String, BigDecimal>) finMap.get(key);
			finBokRatioMap = (Map<String, BigDecimal>) finBokMap.get(key);
			
			localKeySet = finBokRatioMap.keySet();
			localItr = localKeySet.iterator();
			
			finExamRatioMap = new LinkedHashMap<String, String>();
			
			while (localItr.hasNext()) {
				
				localKey = localItr.next();
				
				finRatio = finRatioMap.get(localKey);
				finBokRatio = finBokRatioMap.get(localKey);
				
				exam = examFactory.createExam(localKey, finRatio, finBokRatio);
				
				finExamRatioMap.put(localKey, exam.exam());
				
			}
			
			finExamMap.put(key, finExamRatioMap);
		}
		
		return finExamMap;
		
	}
	
	public static void main(String args[]) throws Exception {
		
		BeanUtils beanUtil = new BeanUtils();
		
		FinExamMake ratio = new FinExamMake();
		
		ratio.setAlyid("20170220162949613000")
   	 		 .setBzn("2035789169")
   	 		 .setUserid("jepul96@gmail.com")
   	 		 .setEnslDcd("M")
   	 		 .setTpbsClsfDcd("ZZZ00")
   	 		 .setLastest(true);
		
		
		Map result = ratio.finExamMake();
		
		beanUtil.toString(result);
		
	}
	
}
