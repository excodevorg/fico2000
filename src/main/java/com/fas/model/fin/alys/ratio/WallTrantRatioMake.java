package com.fas.model.fin.alys.ratio;

import java.math.BigDecimal;
import java.util.Iterator;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;
import java.util.Set;

import com.fas.model.fin.AnalysisFnamManager;
import com.fas.model.fin.EntpFinItemVo;
import com.fas.model.fin.alys.FinStatement;
import com.fas.model.fin.alys.FinStatementBuilder;
import com.fas.model.fin.bok.ratio.WallTrantBokRatioMake;
import com.fas.web.cmmn.util.BeanUtils;

public class WallTrantRatioMake {

	private String stacYy;
	
	private String bzn;
	
	private String userid;
	
	private String alyid;
	
	private List<FinStatement> finStateList;
	
	private Map<String, EntpFinItemVo> finFnamInfoMap;
	
	private AnalysisFnamManager manager;
	
	private Map<String, Map> resultMap = new LinkedHashMap<String, Map>();
	
	//Wall-Trant
	private String[] finCode01 = {
		"702","704","706","802","805","807","810","811"
	};
	
	public WallTrantRatioMake setAlyid(String alyid) {
		this.alyid = alyid;
		return this;
	}
	
	public WallTrantRatioMake setStacYy(String stacYy) {
		this.stacYy = stacYy;
		return this;
	}
	
	public WallTrantRatioMake setBzn(String bzn) {
		this.bzn = bzn;
		return this;
	}
	
	public WallTrantRatioMake setUserid(String userid) {
		this.userid = userid;
		return this;
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
		
		System.out.println("$$$$$ >>>> size >>> " + finStateList.size());
		
//		for (int j = 0; j < finStateList.size(); j++) {
//			
//			beanUtil.toString(finStateList.get(j));
//			
//		}
		
		for (String code : finCode01) {
			finRatio = factory.createRate(code, finStateList,0);
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
		
		return resultMap;
		
	}
	
	public static void main(String args[]) throws Exception {
		
		WallTrantRatioMake ratio = new WallTrantRatioMake();
		
		ratio.setAlyid("20170220162949613000")
	         .setBzn("2035789169")
	         .setUserid("jepul96@gmail.com");
		
		Map re = ratio.finRatioMake();
		BeanUtils beanUtil = new BeanUtils();
		beanUtil.toString(re);
		
	}
	
}
