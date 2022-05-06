package com.fas.model.fin.alys.ratio;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.LinkedHashMap;
import java.util.LinkedList;
import java.util.List;
import java.util.Map;
import java.util.Set;

import com.fas.model.fin.alys.FinStatement;

public abstract class FinRatio {

	protected List<FinStatement> finList;
	
	protected Map<String, BigDecimal> resultMap;
	
	protected String code;
	
	protected int startIdx = 1;
	
	public void setStartIdx(int idx) {
		this.startIdx = idx;
	}
	
	public void setFinStateMent(List<FinStatement> finList) {
		this.finList = finList;
	}

	public Map<String, Map> getRatioMapValue() {
		
		if (resultMap == null) return null;
		
		Set<String> keys = this.resultMap.keySet();
		
		Iterator<String> itrs = keys.iterator();
		
		Map<String, BigDecimal> ratioMap = null;
		
		Map<String, Map> listMap = new LinkedHashMap<String, Map>();
		
		while(itrs.hasNext()) {
			
			ratioMap = new LinkedHashMap<String, BigDecimal>();
			
			String key = itrs.next();
			
			ratioMap.put(code, resultMap.get(key));
			
			listMap.put(key, ratioMap);
		}
		
		return listMap;
	}
	
	public List<Map> getRatioListValue() {
		
		if (resultMap == null) return null;
		
		Set<String> keys = this.resultMap.keySet();
		
		Iterator<String> itrs = keys.iterator();
		
		Map<String, BigDecimal> ratioMap = null;
		
		List<Map> arrList = new ArrayList<Map>();
		
		while(itrs.hasNext()) {
			
			ratioMap = new LinkedHashMap<String, BigDecimal>();
			
			String key = itrs.next();
			
			ratioMap.put(code, resultMap.get(key));
			
			arrList.add(ratioMap);
		}
		
		
		return null;		
	}
	
	//시작 : 1 ~
	public BigDecimal getRatioValue(int idx) {
		if (this.resultMap == null) return BigDecimal.ZERO;
		
		Set<String> keys = this.resultMap.keySet();
		Iterator<String> itrs = keys.iterator();
		int index = 1;
		BigDecimal ratioAmt = BigDecimal.ZERO;
		
		while (itrs.hasNext()) {
			
			String key = itrs.next();
			
			ratioAmt = this.resultMap.get(key);
			
			if (index == idx) {
				break;
			}
			
			index++;
		}
		
		return ratioAmt;		
	}
	
	public BigDecimal getRatioValue(String stacYy) {
		return this.resultMap.get(stacYy);		
	}
	
	public int Size() {

		// TODO Auto-generated method stub
		int size = 0;
		if (this.resultMap != null) size = this.resultMap.size();
		return size;		
		
	}
	
	public abstract void cal();
	
	public List<String> getKeys() {
		// TODO Auto-generated method stub
		List<String> arrList = new LinkedList();
		
		if (this.resultMap != null) {
			Set<String> keys = this.resultMap.keySet();
			Iterator<String> itr = keys.iterator();
			
			while (itr.hasNext()) {
				arrList.add(itr.next());
			}
			
		}
		
		return arrList;		
	}	
	
}
