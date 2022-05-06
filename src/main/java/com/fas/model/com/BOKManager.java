package com.fas.model.com;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
import java.util.Set;

import javax.annotation.Resource;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.apache.logging.log4j.core.Logger;
import org.hsqldb.lib.StringUtil;
import org.springframework.stereotype.Component;

import com.fas.cmmn.util.FasDateUtil;
import com.fas.cmmn.util.FasNumberUtil;
import com.fas.model.com.api.OpenAPI;
import com.fas.model.com.api.OpenAPIFactory;
import com.fas.model.com.dao.BOKDataListDao;
import com.fas.model.com.dao.BOKFinRatioDao;
import com.fas.model.com.dao.BOKItemListDao;
import com.fas.model.com.dao.BOKTableListDao;
import com.fas.model.com.domain.BOKDataListDomain;
import com.fas.model.com.domain.BOKFinRatioDomain;
import com.fas.model.com.domain.BOKItemListDomain;
import com.fas.model.com.domain.BOKTableListDomain;
import com.fas.web.cmmn.dataaccess.util.FasMap;
import com.fas.web.cmmn.util.BeanUtils;

@Component("BOKManager")
public class BOKManager {
	
	private static Log logger = LogFactory.getLog(BOKManager.class);
	
	@Resource(name="BOKDataListDao")
	private BOKDataListDao dataDao;
	
	@Resource(name="BOKItemListDao")
	private BOKItemListDao itemDao;
	
	@Resource(name="BOKTableListDao")
	private BOKTableListDao tableDao;
	
	@Resource(name="BOKFinRatioDao")
	private BOKFinRatioDao ratioDao;	
	
	public void bokFinRatioListSave() throws Exception {
		
		BeanUtils beanUtils = new BeanUtils();
		
		String toDay = FasDateUtil.getCurrentDay();
		String beDay = FasDateUtil.addYears(toDay, -2);
		String baseYear = beDay.substring(0,4);
		
		BOKFinRatioDomain param = new BOKFinRatioDomain();
		param.setBaseYear(baseYear);
		
		List<BOKFinRatioDomain> finRatioList = ratioDao.selectBokRatioBaseYearList(param);
		
		BOKDataListDomain bokData = null; 
		for (BOKFinRatioDomain finRatioDomain : finRatioList) {
			
			bokData = new BOKDataListDomain();
			bokData.setStatCode(finRatioDomain.getStatCode()); //통계코드
			bokData.setItemCode1(finRatioDomain.getTpbsClsfDcd()); //업종
			bokData.setItemCode2(finRatioDomain.getBokItemCode()); //은행 코드
			bokData.setItemCode3(finRatioDomain.getEnslDcd()); //기업규모
			bokData.setTime(finRatioDomain.getBaseYear()); //년도
			
			bokData = dataDao.select(bokData);
			
			if (bokData != null) {
				
				logger.debug("======================================");
				beanUtils.toString(bokData);
				
				if (!StringUtil.isEmpty(bokData.getStatCode())) {
					
					if (!FasNumberUtil.isEquals(bokData.getDataValue(), BigDecimal.ZERO)) {
						
						finRatioDomain.setBokItemNm(bokData.getItemName2());
						finRatioDomain.setStatValue(bokData.getDataValue());
						
						logger.debug("(((((((((((((((((((((((((((((((");
						beanUtils.toString(finRatioDomain);
						
						ratioDao.insert(finRatioDomain);
						
					}
					
				}
				
			} else {
				
				System.out.println("^^^^^^^^^^^^^^^^^^^^^^^^^^^");
				
				bokData = new BOKDataListDomain();
				bokData.setStatCode(finRatioDomain.getStatCode()); //통계코드
				bokData.setItemCode1(finRatioDomain.getTpbsClsfDcd()); //업종
				bokData.setItemCode2(finRatioDomain.getBokItemCode()); //은행 코드
				bokData.setItemCode3("A"); //기업규모
				bokData.setTime(finRatioDomain.getBaseYear()); //년도
				
				bokData = dataDao.select(bokData);
				
				if (bokData == null) {
					
					bokData = new BOKDataListDomain();
					bokData.setStatCode(finRatioDomain.getStatCode()); //통계코드
					bokData.setItemCode1(finRatioDomain.getTpbsClsfDcd()); //업종
					bokData.setItemCode2(finRatioDomain.getBokItemCode()); //은행 코드
					bokData.setItemCode3("L"); //기업규모
					bokData.setTime(finRatioDomain.getBaseYear()); //년도
					
					bokData = dataDao.select(bokData);
					
				}
				
				if (bokData == null) {
					
					bokData = new BOKDataListDomain();
					bokData.setStatCode(finRatioDomain.getStatCode()); //통계코드
					bokData.setItemCode1(finRatioDomain.getTpbsClsfDcd()); //업종
					bokData.setItemCode2(finRatioDomain.getBokItemCode()); //은행 코드
					bokData.setItemCode3("M"); //기업규모
					bokData.setTime(finRatioDomain.getBaseYear()); //년도
					
					bokData = dataDao.select(bokData);
					
				}
				
				if (bokData != null) {
					
					if (!StringUtil.isEmpty(bokData.getStatCode())) {
						
						if (!FasNumberUtil.isEquals(bokData.getDataValue(), BigDecimal.ZERO)) {
							
							finRatioDomain.setBokItemNm(bokData.getItemName2());
							finRatioDomain.setStatValue(bokData.getDataValue());
							
							logger.debug("(((((((((((((((((((((((((((((((");
							beanUtils.toString(finRatioDomain);
							
							ratioDao.insert(finRatioDomain);
							
						}
						
					}
					
				}
				
				
				
			}
			
		}
		
		

	}

	public void bokFinRatioInitListSave(String baseYear) throws Exception {
		
		BeanUtils beanUtils = new BeanUtils();
		
//		String toDay = FasDateUtil.getCurrentDay();
//		String beDay = FasDateUtil.addYears(toDay, -2);
//		String baseYear = beDay.substring(0,4);
		
		BOKFinRatioDomain param = new BOKFinRatioDomain();
		param.setBaseYear(baseYear);
		
		List<BOKFinRatioDomain> finRatioList = ratioDao.selectBokRatioBaseYearList(param);
		
		BOKDataListDomain bokData = null; 
		for (BOKFinRatioDomain finRatioDomain : finRatioList) {
			
			bokData = new BOKDataListDomain();
			bokData.setStatCode(finRatioDomain.getStatCode()); //통계코드
			bokData.setItemCode1(finRatioDomain.getTpbsClsfDcd()); //업종
			bokData.setItemCode2(finRatioDomain.getBokItemCode()); //은행 코드
			bokData.setItemCode3(finRatioDomain.getEnslDcd()); //기업규모
			bokData.setTime(finRatioDomain.getBaseYear()); //년도
			
			bokData = dataDao.select(bokData);
			
			if (bokData != null) {
				
				logger.debug("======================================");
				beanUtils.toString(bokData);
				
				if (!StringUtil.isEmpty(bokData.getStatCode())) {
					
					if (!FasNumberUtil.isEquals(bokData.getDataValue(), BigDecimal.ZERO)) {
						
						finRatioDomain.setBokItemNm(bokData.getItemName2());
						finRatioDomain.setStatValue(bokData.getDataValue());
						
						logger.debug("(((((((((((((((((((((((((((((((");
						beanUtils.toString(finRatioDomain);
						
						ratioDao.insert(finRatioDomain);
						
					}
					
				}
				
			} else {
				
				System.out.println("^^^^^^^^^^^^^^^^^^^^^^^^^^^");
				
				bokData = new BOKDataListDomain();
				bokData.setStatCode(finRatioDomain.getStatCode()); //통계코드
				bokData.setItemCode1(finRatioDomain.getTpbsClsfDcd()); //업종
				bokData.setItemCode2(finRatioDomain.getBokItemCode()); //은행 코드
				bokData.setItemCode3("A"); //기업규모
				bokData.setTime(finRatioDomain.getBaseYear()); //년도
				
				bokData = dataDao.select(bokData);
				
				if (bokData == null) {
					
					bokData = new BOKDataListDomain();
					bokData.setStatCode(finRatioDomain.getStatCode()); //통계코드
					bokData.setItemCode1(finRatioDomain.getTpbsClsfDcd()); //업종
					bokData.setItemCode2(finRatioDomain.getBokItemCode()); //은행 코드
					bokData.setItemCode3("L"); //기업규모
					bokData.setTime(finRatioDomain.getBaseYear()); //년도
					
					bokData = dataDao.select(bokData);
					
				}
				
				if (bokData == null) {
					
					bokData = new BOKDataListDomain();
					bokData.setStatCode(finRatioDomain.getStatCode()); //통계코드
					bokData.setItemCode1(finRatioDomain.getTpbsClsfDcd()); //업종
					bokData.setItemCode2(finRatioDomain.getBokItemCode()); //은행 코드
					bokData.setItemCode3("M"); //기업규모
					bokData.setTime(finRatioDomain.getBaseYear()); //년도
					
					bokData = dataDao.select(bokData);
					
				}
				
				if (bokData != null) {
					
					if (!StringUtil.isEmpty(bokData.getStatCode())) {
						
						if (!FasNumberUtil.isEquals(bokData.getDataValue(), BigDecimal.ZERO)) {
							
							finRatioDomain.setBokItemNm(bokData.getItemName2());
							finRatioDomain.setStatValue(bokData.getDataValue());
							
							logger.debug("(((((((((((((((((((((((((((((((");
							beanUtils.toString(finRatioDomain);
							
							ratioDao.insert(finRatioDomain);
							
						}
						
					}
					
				}
				
				
				
			}
			
		}
		
		

	}	
	
	public void bokTableListSave() throws Exception {
		
		OpenAPI api = OpenAPIFactory.createConnection("BOK");
		List<FasMap> apiMapList = api.getApiMapList("StatisticTableList", null);
		
		BeanUtils beanUtils = new BeanUtils();
		BOKTableListDomain domain = null;
		
		for (FasMap map : apiMapList) {
			domain = (BOKTableListDomain) beanUtils.maptoObjectCopy(map, new BOKTableListDomain());
			domain.setFrrgts(FasDateUtil.getCurrentDate());
			domain.setLastts(FasDateUtil.getCurrentDate());
			tableDao.insert(domain);
			domain = null;
		}
		
	}
	
	public void bokItemListSave(String pStatCd) throws Exception {
		
		Map searchMap = null;
		BeanUtils beanUtils = new BeanUtils();
		OpenAPI api = OpenAPIFactory.createConnection("BOK");
		
		List<Map> searchMapList = new ArrayList<Map>();
		
		BOKTableListDomain param = new BOKTableListDomain();
		param.setPStatCode(pStatCd);
		
		List<BOKTableListDomain> bokTableList = tableDao.selectList(param);
		
		for (BOKTableListDomain bokTable : bokTableList) {
			if ("N".equals(bokTable.getSrchYn())) {
				
				BOKTableListDomain subParam = new BOKTableListDomain();
				subParam.setPStatCode(bokTable.getStatCode()); 
				
				List<BOKTableListDomain> subBokTableList = tableDao.selectList(subParam);
				
				for (BOKTableListDomain subBokTable : subBokTableList) {
					searchMap = new HashMap();
					searchMap.put("statCode", subBokTable.getStatCode());
					searchMapList.add(searchMap);
				}
				
			} else {
				searchMap = new HashMap();
				searchMap.put("statCode", bokTable.getStatCode());
				searchMapList.add(searchMap);
			}
			
		}
		
		logger.debug("result***********");

		searchMap = null;
		for (Map reMap : searchMapList) {
			logger.debug(reMap);
			searchMap = new HashMap();
			searchMap.put("statCode", reMap.get("statCode"));
			List<FasMap> apiMapList = api.getApiMapList("StatisticItemList", searchMap);
			for (FasMap map : apiMapList) {
				BOKItemListDomain domain = (BOKItemListDomain)beanUtils.maptoObjectCopy(map, new BOKItemListDomain());
				domain.setFrrgts(FasDateUtil.getCurrentDate());
				domain.setLastts(FasDateUtil.getCurrentDate());
				itemDao.insert(domain);
			}
		}
		 
	}

	/*
	public void bokDataListSave(String pStatCd) throws Exception {
		
		
		Map searchMap = null;
		BeanUtils beanUtils = new BeanUtils();
		OpenAPI api = OpenAPIFactory.createConnection("BOK");
		
		List<Map> searchMapList = new ArrayList<Map>();
		
		BOKTableListDomain param = new BOKTableListDomain();
		param.setPStatCode(pStatCd);
		
		List<BOKTableListDomain> bokTableList = tableDao.selectList(param);
		
		for (BOKTableListDomain bokTable : bokTableList) {
			if ("Y".equals(bokTable.getSrchYn())) {
				
				BOKTableListDomain subParam = new BOKTableListDomain();
				subParam.setPStatCode(bokTable.getStatCode()); 
				
				List<BOKTableListDomain> subBokTableList = tableDao.selectList(subParam);
				
				for (BOKTableListDomain subBokTable : subBokTableList) {
					searchMap = new HashMap();
					searchMap.put("statCode", subBokTable.getStatCode());
					searchMapList.add(searchMap);
				}
				
			} else {
				searchMap = new HashMap();
				searchMap.put("statCode", bokTable.getStatCode());
				searchMapList.add(searchMap);
			}
			
		}
		BOKItemListDomain itemDomain = null;
		List<BOKItemListDomain> group1List = null;
		List<BOKItemListDomain> group2List = null;
		List<BOKItemListDomain> group3List = null;
		/////////////////////////// ////////////////////////////////////////////////////////////
		for (Map reMap : searchMapList) {
			
			itemDomain = new BOKItemListDomain();
			itemDomain.setStatCode((String)reMap.get("statCode"));
			itemDomain.setGrpName("Group1");
			group1List = itemDao.selectList(itemDomain);
			
			itemDomain = new BOKItemListDomain();
			itemDomain.setStatCode((String)reMap.get("statCode"));
			itemDomain.setGrpName("Group2");
			group2List = itemDao.selectList(itemDomain);
			
			itemDomain = new BOKItemListDomain();
			itemDomain.setStatCode((String)reMap.get("statCode"));
			itemDomain.setGrpName("Group3");
			group3List = itemDao.selectList(itemDomain);
			
		}
		
		searchMap = null;
		
		List<FasMap> apiMapList = null;
		
		for (BOKItemListDomain item : group1List) {
			searchMap = new HashMap();
			searchMap.put("statCode", item.getStatCode());
			searchMap.put("itemCode1", item.getItemCode());
			for (BOKItemListDomain item1 : group2List) {
				searchMap.put("itemCode2", item1.getItemCode());
				searchMap.put("startTime", item1.getStartTime());
				searchMap.put("endTime", item1.getEndTime());
				searchMap.put("cycle", item1.getCycle());
				if (group3List != null && group3List.size() > 0) {
					for (BOKItemListDomain item2 : group3List) {
						searchMap.put("itemCode3", item2.getItemCode());
						try {
							apiMapList = api.getApiMapList("StatisticSearch", searchMap);
						} catch (Exception ex) {
							ex.printStackTrace();
						}
						
						if (apiMapList != null && apiMapList.size() > 0) {
							for (FasMap map : apiMapList) {
								BOKDataListDomain domain = (BOKDataListDomain)beanUtils.maptoObjectCopy(map, new BOKDataListDomain());
								domain.setFrrgts(FasDateUtil.getCurrentDate());
								domain.setLastts(FasDateUtil.getCurrentDate());
								domain.setItemCode1((String) searchMap.get("itemCode1"));
								domain.setItemCode2((String) searchMap.get("itemCode2"));
								domain.setItemCode3((String) searchMap.get("itemCode3"));
								dataDao.insert(domain);
							}
						}
					}
				} else {
					try {
						apiMapList = api.getApiMapList("StatisticSearch", searchMap);
					} catch (Exception ex) {
						ex.printStackTrace();
					}
					
					if (apiMapList != null && apiMapList.size() > 0) {
						for (FasMap map : apiMapList) {
							BOKDataListDomain domain = (BOKDataListDomain)beanUtils.maptoObjectCopy(map, new BOKDataListDomain());
							domain.setFrrgts(FasDateUtil.getCurrentDate());
							domain.setLastts(FasDateUtil.getCurrentDate());
							domain.setItemCode1((String) searchMap.get("itemCode1"));
							domain.setItemCode2((String) searchMap.get("itemCode2"));
							domain.setItemCode3("*");
							dataDao.insert(domain);
						}
					}
				}
			}
		}
		
	}
	*/
	
	public void bokDataListSave() throws Exception {
		
		String toDay = FasDateUtil.getCurrentDay();
		String beDay = FasDateUtil.addYears(toDay, -2);
		String baseYear = beDay.substring(0,4);
		
		BOKFinRatioDomain param = new BOKFinRatioDomain();
		param.setBaseYear(baseYear);
		
		List<BOKFinRatioDomain> arrList = ratioDao.selectBokRatioBaseYearList(param);
		
		Map resultMap = new HashMap();
		Map arrMap = null;
		
		String key = "";
		
		for (BOKFinRatioDomain bokData : arrList) { 
			
			key = bokData.getStatCode() + bokData.getItemCode() + bokData.getTpbsClsfDcd() + bokData.getEnslDcd() + bokData.getBaseYear();
			if (FasNumberUtil.isEquals(bokData.getStatValue(), BigDecimal.ZERO)) {
				arrMap = new HashMap();
				arrMap.put("statCode", bokData.getStatCode());
				arrMap.put("cycle", "YY");
				arrMap.put("startTime", bokData.getBaseYear());
				arrMap.put("endTime", bokData.getBaseYear());
				arrMap.put("itemCode1", bokData.getTpbsClsfDcd());
				arrMap.put("itemCode2", bokData.getBokItemCode());
				arrMap.put("itemCode3", bokData.getEnslDcd());
				
				resultMap.put(key, arrMap);
			}
			
		}
		
		Set<String> keySet = resultMap.keySet();
		Iterator<String> itr = keySet.iterator();
		
		String keys = "";
		
		arrMap = null;
		
		OpenAPI api = OpenAPIFactory.createConnection("BOK");
		
		List<FasMap> apiMapList = null;
		
		BeanUtils beanUtils = new BeanUtils();
		BOKDataListDomain domain = null;
		
		while(itr.hasNext()) {
			
			keys = itr.next();
			
			arrMap = (Map) resultMap.get(keys);
			
			beanUtils.toString(arrMap);
			
			apiMapList = api.getApiMapList("StatisticSearch", arrMap);
			
			domain = null;
			
			String itemCode2 = "";
			String itemCode3 = "";
			String itemName2 = "";
			String itemName3 = "";
			
			if (apiMapList != null) {
			
				for (FasMap map : apiMapList) {
					
					System.out.println("#######################");
					
					beanUtils.toString(map);
					
					itemCode2 = (String) map.get("itemCode2");
					itemName2 = (String) map.get("itemName2");
					itemCode3 = (String) map.get("itemCode3");
					itemName3 = (String) map.get("itemName3");
					
					map.put("itemCode2", itemCode3);
					map.put("itemName2", itemName3);
					map.put("itemCode3", itemCode2);
					map.put("itemName3", itemName2);
					
					domain = (BOKDataListDomain) beanUtils.maptoObjectCopy(map, new BOKDataListDomain());
					domain.setFrrgts(FasDateUtil.getCurrentDate());
					domain.setLastts(FasDateUtil.getCurrentDate());
					dataDao.insert(domain);
					domain = null;
				}
			
			}
		}
		
	}
	
	public void bokDataInitListSave() throws Exception {
		
		String toDay = FasDateUtil.getCurrentDay();
		String beDay = FasDateUtil.addYears(toDay, -2);
		String baseYear = beDay.substring(0,4);
		
		BOKFinRatioDomain param = new BOKFinRatioDomain();
		param.setBaseYear(baseYear);
		
		List<BOKFinRatioDomain> arrList = ratioDao.selectBokRatioBaseYearList(param);
		
		Map resultMap = new HashMap();
		Map arrMap = null; 
		
		String key = "";
		
		for (BOKFinRatioDomain bokData : arrList) { 
			
			key = bokData.getStatCode() + bokData.getItemCode() + bokData.getTpbsClsfDcd() + bokData.getEnslDcd() + bokData.getBaseYear();
			if (FasNumberUtil.isEquals(bokData.getStatValue(), BigDecimal.ZERO)) {
				arrMap = new HashMap();
				arrMap.put("statCode", bokData.getStatCode());
				arrMap.put("cycle", "YY");
				arrMap.put("startTime", "2010");
				arrMap.put("endTime", bokData.getBaseYear());
				arrMap.put("itemCode1", bokData.getTpbsClsfDcd());
				arrMap.put("itemCode2", bokData.getBokItemCode());
				arrMap.put("itemCode3", bokData.getEnslDcd());
				
				resultMap.put(key, arrMap);
			}
			
		}
		
		Set<String> keySet = resultMap.keySet();
		Iterator<String> itr = keySet.iterator();
		
		String keys = "";
		
		arrMap = null;
		
		OpenAPI api = OpenAPIFactory.createConnection("BOK");
		
		List<FasMap> apiMapList = null;
		
		BeanUtils beanUtils = new BeanUtils();
		BOKDataListDomain domain = null;
		
		while(itr.hasNext()) {
			
			keys = itr.next();
			
			arrMap = (Map) resultMap.get(keys);
			
			beanUtils.toString(arrMap);
			
			apiMapList = api.getApiMapList("StatisticSearch", arrMap);
			
			domain = null;
			
			String itemCode2 = "";
			String itemCode3 = "";
			String itemName2 = "";
			String itemName3 = "";
			
			if (apiMapList != null) {
			
				for (FasMap map : apiMapList) {
					
					System.out.println("#######################");
					
					beanUtils.toString(map);
					
					itemCode2 = (String) map.get("itemCode2");
					itemName2 = (String) map.get("itemName2");
					itemCode3 = (String) map.get("itemCode3");
					itemName3 = (String) map.get("itemName3");
					
					map.put("itemCode2", itemCode3);
					map.put("itemName2", itemName3);
					map.put("itemCode3", itemCode2);
					map.put("itemName3", itemName2);
					
					domain = (BOKDataListDomain) beanUtils.maptoObjectCopy(map, new BOKDataListDomain());
					domain.setFrrgts(FasDateUtil.getCurrentDate());
					domain.setLastts(FasDateUtil.getCurrentDate());
					dataDao.insert(domain);
					domain = null;
				}
			
			}
		}
		
	}
	
	public void bokDataListInit(String baseYear) throws Exception {
		
		boolean Start = true;
		
		if (StringUtil.isEmpty(baseYear)) {
			baseYear = FasDateUtil.addYears(FasDateUtil.getCurrentDay(), -2);
			baseYear = baseYear.substring(0,4);
		}
		
		if (!StringUtil.isEmpty(baseYear)) {
			BOKFinRatioDomain param = new BOKFinRatioDomain();
			param.setBaseYear(baseYear.substring(0,4));
			
			List<BOKFinRatioDomain> arrList = ratioDao.selectBokRatioBaseYearList(param);
			
			if (arrList != null && arrList.size() > 0) Start = false;
			
			if (Start) {
				Map arrMap = new HashMap();
				//arrMap.put("statCode", "027Y416");
				arrMap.put("statCode", "027Y616");
				arrMap.put("cycle", "YY");
				arrMap.put("startTime", baseYear);
				arrMap.put("endTime", baseYear);
				arrMap.put("itemCode1", "ZZZ00");
				arrMap.put("itemCode2", "501");
				arrMap.put("itemCode3", "A");
				
				OpenAPI api = OpenAPIFactory.createConnection("BOK");
				
				List<FasMap> apiMapList = api.getApiMapList("StatisticSearch", arrMap);
				
				if (apiMapList == null || apiMapList.size() == 0) Start = false; 
			}
		} else {
			Start = false;
		}
		
		System.out.println("Start &&&&& >>>>> " + Start);
		
		if (Start) {
			
			String beforeBaseYear = FasDateUtil.addYears(baseYear + "0101", -1);
			
			BOKFinRatioDomain param = new BOKFinRatioDomain();
			param.setBaseYear(beforeBaseYear.substring(0,4));
			
			List<BOKFinRatioDomain> arrList = ratioDao.selectBokRatioBaseYearList(param);
			
			if (arrList != null && arrList.size() > 0) {
				
				BOKFinRatioDomain domain = null;
				
				for (BOKFinRatioDomain bokData : arrList) { 
					
					domain = new BOKFinRatioDomain();
					domain.setBaseYear(baseYear);
					domain.setStatCode(bokData.getStatCode());
					domain.setBokItemCode(bokData.getBokItemCode());
					domain.setBokItemNm(bokData.getBokItemNm());
					domain.setCycle(bokData.getCycle());
					domain.setEnslDcd(bokData.getEnslDcd());
					domain.setGroupCode(bokData.getGroupCode());
					domain.setItemNm(bokData.getItemNm());
					domain.setTpbsClsfDcd(bokData.getTpbsClsfDcd());
					domain.setType(bokData.getType());
					domain.setStatValue(BigDecimal.ZERO);
					domain.setItemCode(bokData.getItemCode());
					
					ratioDao.insert(domain);
					
				}
				
			} else {
				throw new Exception(beforeBaseYear.substring(0,4) +  "년도 Fin Ratio 내용이 없습니다.");
			}
		
		}
		
	}
	
	
	public BOKFinRatioDomain selectFinRatio(BOKFinRatioDomain ratioDomain) throws Exception {
		return ratioDao.selectRatio(ratioDomain);
	}
	public List<BOKFinRatioDomain> selectFinRatioAll() throws Exception {
		return ratioDao.selectAll();
	}
	
	public List<BOKFinRatioDomain> selectFinRatioLastest(BOKFinRatioDomain ratioDomain) throws Exception {
		return ratioDao.selectLastestRatio(ratioDomain);
	}	
	public List<BOKFinRatioDomain> selectRatioList(BOKFinRatioDomain ratioDomain) throws Exception {
		return ratioDao.selectRatioList(ratioDomain);
	}
	public List<BOKFinRatioDomain> selectBokRatioList(BOKFinRatioDomain ratioDomain) throws Exception {
		return ratioDao.selectBokRatioList(ratioDomain);
	}
	
}
