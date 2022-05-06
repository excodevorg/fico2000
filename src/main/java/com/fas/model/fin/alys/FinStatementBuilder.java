package com.fas.model.fin.alys;

import java.util.ArrayList;
import java.util.Collections;
import java.util.Comparator;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;

import org.springframework.context.ApplicationContext;

import com.fas.model.fin.AnalysisFnamManager;
import com.fas.model.fin.EntpFinInfoManager;
import com.fas.model.fin.EntpFinItemVo;
import com.fas.model.fin.domain.AlyFnamDtDomain;
import com.fas.model.fin.domain.AlyFnamInfoDomain;
import com.fas.model.fin.domain.FinFnamInfoDomain;
import com.fas.web.cmmn.util.ApplicationContextStart;
import com.fas.web.cmmn.util.SpringApplicationContext;

//재무상태 (Balance, Income, Cost
public class FinStatementBuilder {

	private String stacYy;
	
	private String bzn;
	
	private String userid;
	
	private String alyid;
	
	private String finStateGb;
	
	private Map<String, EntpFinItemVo> finFnamInfoMap;
	
	private AnalysisFnamManager manager;
	
	private List<String> stacYys;
	
	public FinStatementBuilder setAlyid(String alyid) {
		this.alyid = alyid;
		return this;
	}
	
	public FinStatementBuilder setStacYy(String stacYy) {
		this.stacYy = stacYy;
		return this;
	}
	
	public FinStatementBuilder setBzn(String bzn) {
		this.bzn = bzn;
		return this;
	}
	
	public FinStatementBuilder setUserid(String userid) {
		this.userid = userid;
		return this;
	}
	
	public FinStatementBuilder setFinFnamInfoMap(LinkedHashMap finFnamInfoMap) {
		this.finFnamInfoMap = finFnamInfoMap;
		return this;
	}
	
	public FinStatementBuilder setFinStateGb(String finStateGb) {
		this.finStateGb = finStateGb;
		return this;
	}
	
	public FinStatement build() throws Exception {
		
		FinStatement finstate = null;
		
		try {
		
		manager = (AnalysisFnamManager) SpringApplicationContext.getBean("AnalysisFnamManager");
		
		} catch (Exception ex) {
			ApplicationContext applicationContext = ApplicationContextStart.getInstance();
			manager = (AnalysisFnamManager) applicationContext.getBean("AnalysisFnamManager");
			
		}
		
		
		AlyFnamDtDomain domain = new AlyFnamDtDomain();
		
		domain.setBzn(this.bzn);
		domain.setStacYy(this.stacYy);
		domain.setUserid(this.userid);
		domain.setAlyid(this.alyid);
		
		finFnamInfoMap = manager.finFnamTypeMapList(domain);
		
		finstate = new FinStatement(finFnamInfoMap);
		
		return finstate;
	}
	
	
	public List<String> stacYys() {
		return this.stacYys;
	}
	
	public List<FinStatement> buildList() throws Exception {
		
		List<FinStatement> finstateList = new ArrayList<FinStatement>();
		stacYys = new ArrayList<String>();
		
		try {
		
		manager = (AnalysisFnamManager) SpringApplicationContext.getBean("AnalysisFnamManager");
		
		} catch (Exception ex) {
			ApplicationContext applicationContext = ApplicationContextStart.getInstance();
			manager = (AnalysisFnamManager) applicationContext.getBean("AnalysisFnamManager");
			
		}
		
		
		AlyFnamDtDomain domain = null;
		AlyFnamInfoDomain alyFname = new AlyFnamInfoDomain();
		
		FinStatement finstate = null;
		 
		alyFname.setBzn(this.bzn);
		alyFname.setUserid(this.userid);
		alyFname.setAlyid(this.alyid);
		
		List<AlyFnamInfoDomain> arrList = manager.selectInfoList(alyFname);
		
		
		for (AlyFnamInfoDomain aly : arrList) {
			
			domain = new AlyFnamDtDomain();
			
			domain.setBzn(aly.getBzn());
			domain.setUserid(aly.getUserid());
			domain.setAlyid(aly.getAlyid());
			domain.setStacYy(aly.getStacYy());
			
			finFnamInfoMap = manager.finFnamTypeMapList(domain);
			finstate = new FinStatement(finFnamInfoMap);
			finstateList.add(finstate);
			
			stacYys.add(aly.getStacYy());
			
			System.out.println("$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$ >>> " + aly.getStacYy());
			
		}
		
		Collections.sort(stacYys, new StacYyAscCompare());
		
		Collections.sort(finstateList, new FinStateMentAscCompare());
		
		System.out.println("$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$11111111111 >>> " + this.alyid);
		
		System.out.println("$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$11111111111 >>> " + this.bzn);
		
		System.out.println("$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$11111111111 >>> " + this.userid);
		
		return finstateList;
	}
	
	/**
	  * 이름 오름차순
	  * @author falbb
	  *
	  */
	static class StacYyAscCompare implements Comparator<String> {

		@Override
		public int compare(String o1, String o2) {
			// TODO Auto-generated method stub
			return o1.compareTo(o2);
		}
		
	}
	
	/**
	  * 이름 오름차순
	  * @author falbb
	  *
	  */
	static class FinStateMentAscCompare implements Comparator<FinStatement> {

		@Override
		public int compare(FinStatement o1, FinStatement o2) {
			// TODO Auto-generated method stub
			return o1.get(FinBalanceItemConst.현금및현금성자산).getStacYy().compareTo(o2.get(FinBalanceItemConst.현금및현금성자산).getStacYy());
		}
		
	}
}
