package com.fas.model.fin;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Component;

import com.fas.model.fin.dao.FinItemCdDao;
import com.fas.model.fin.domain.FinItemCdDomain;

import org.apache.commons.collections.map.ListOrderedMap;

import com.fas.web.cmmn.util.BeanUtils;
import com.fas.web.cmmn.util.JsonResponseObject;

//기업 재무 정보 모델
@Component("EntpFinInfoModel")
public class EntpFinInfoModel {

	private static ListOrderedMap rootMap;
	
	private static int itemCount = 0;
	
	@Resource(name="FinItemCdDao")
	private FinItemCdDao dao;
	
	private List<FinItemCdDomain> finItemCdList;
	
	public void makeModel() throws Exception {
		
		int cnt = dao.totalAllCnt();
		
		//if (rootMap == null || cnt != itemCount) {
		
			rootMap = new ListOrderedMap();
			
			finItemCdList = dao.selectFinItemAllList();
			
			if (finItemCdList != null) {
				itemCount = finItemCdList.size();
			} else {
				itemCount = 0;
			}
			
			BeanUtils beanUtil = new BeanUtils();
			
			ListOrderedMap finDcd = null;
			ListOrderedMap finLrdvcd = null;
			ListOrderedMap finMdvcd = null;
			List finSmdcd = null;
			ListOrderedMap param = null;
			EntpFinItemVo itemVo = null;
			for (FinItemCdDomain itemCd : finItemCdList) {
				if (rootMap.get(itemCd.getFinDcd()) == null) {
					//1) 재무구분 : BS, Income, Cost
					param = new ListOrderedMap();
					param.put("accd", itemCd.getFinDcd());
					param.put("name", itemCd.getFinDcdNm());
					param.put("finLrdvcd", new ListOrderedMap());
					rootMap.put(itemCd.getFinDcd(), param);
				}
				
				//2) 대분류
				finDcd = (ListOrderedMap)rootMap.get(itemCd.getFinDcd());
				finLrdvcd = (ListOrderedMap)finDcd.get("finLrdvcd");
				if (finLrdvcd.get(itemCd.getFinLrdvcd()) == null) {
					param = new ListOrderedMap();
					param.put("accd", itemCd.getFinLrdvcd());
					param.put("name", itemCd.getFinLrdvcdNm());
					param.put("finMdvcd", new ListOrderedMap());
					finLrdvcd.put(itemCd.getFinLrdvcd(), param);
				}
				
				//3) 중분류
				finLrdvcd = (ListOrderedMap) finLrdvcd.get(itemCd.getFinLrdvcd());
				finMdvcd = (ListOrderedMap) finLrdvcd.get("finMdvcd");
				if (finMdvcd.get(itemCd.getFinMdvcd()) == null) {
					param = new ListOrderedMap();
					param.put("accd", itemCd.getFinMdvcd());
					param.put("name", itemCd.getFinMdvcdNm());
					param.put("finSmdcd", new ArrayList());
					finMdvcd.put(itemCd.getFinMdvcd(), param);
				}
				
				//4) ITEM 담기
				finMdvcd = (ListOrderedMap) finMdvcd.get(itemCd.getFinMdvcd());
				finSmdcd = (ArrayList) finMdvcd.get("finSmdcd");
				
				itemVo = (EntpFinItemVo) beanUtil.toCopy(itemCd, new EntpFinItemVo());
				itemVo.setFinAmt(BigDecimal.ZERO);
				finSmdcd.add(itemVo);
			}
		
		//}
		
		
	}
	
	public ListOrderedMap getMap() throws Exception {
		return rootMap;
	}
	
	public String getJsonString() throws Exception {
		return JsonResponseObject.getJsonString(rootMap);
	}
	
}
