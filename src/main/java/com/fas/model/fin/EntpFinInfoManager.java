package com.fas.model.fin;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
import java.util.Set;

import javax.annotation.Resource;

import org.apache.commons.collections.map.ListOrderedMap;
import org.springframework.stereotype.Component;

import com.fas.cmmn.util.FasPagingUtil;
import com.fas.model.fin.alys.FinAddedValueItemConst;
import com.fas.model.fin.alys.FinBalanceItemConst;
import com.fas.model.fin.alys.FinCostConst;
import com.fas.model.fin.alys.FinIncomeItemConst;
import com.fas.model.fin.dao.CorporationDao;
import com.fas.model.fin.dao.FinFnamInfoDao;
import com.fas.model.fin.dao.FinItemCdDao;
import com.fas.model.fin.domain.CorporationDomain;
import com.fas.model.fin.domain.FinFnamInfoDomain;
import com.fas.model.fin.domain.FinItemCdDomain;
import com.fas.web.cmmn.util.BeanUtils;

@Component("EntpFinInfoManager")
public class EntpFinInfoManager {

	@Resource(name="EntpFinInfoModel")
	private EntpFinInfoModel entpFinInfoModel;
	
	@Resource(name="FinFnamInfoDao")
	private FinFnamInfoDao finFnamInfoDao;
	
	@Resource(name="FinItemCdDao")
	private FinItemCdDao finItemCdDao;
	
	@Resource(name="CorporationDao")	
	private CorporationDao corpDao;	
	
	//List형태로
	public List<EntpFinItemVo> finFnamTypeList(FinFnamInfoDomain domain) throws Exception {
		
		BeanUtils beanUtil = new BeanUtils();
		
		List<FinFnamInfoDomain> finList = finFnamInfoDao.selectFinFnamInfoList(domain);
		List<EntpFinItemVo> resultList = new ArrayList<EntpFinItemVo>();
		
		FinItemCdDomain finItemCd = null;
		EntpFinItemVo vo = null;
		for (FinFnamInfoDomain finDomain : finList) {
			
			finItemCd = new FinItemCdDomain();
			finItemCd.setFinSmdcd(finDomain.getFinSmdcd());
			
			finItemCd = finItemCdDao.selectFinItemCd(finItemCd);
			
			vo = (EntpFinItemVo) beanUtil.toCopy(finItemCd, new EntpFinItemVo());
			vo = (EntpFinItemVo) beanUtil.toCopy(finDomain, vo);
			
			resultList.add(vo);
		}
		
		return resultList;
	}
	
	//Map 형태로
	public ListOrderedMap finFnamTypeMap(FinFnamInfoDomain domain) throws Exception {
		
		BeanUtils beanUtil = new BeanUtils();
		
		entpFinInfoModel.makeModel();
		
		ListOrderedMap rootMap = entpFinInfoModel.getMap();
		
		String finDcd = "";
		String finLrdvcd = "";
		String finMdvcd = "";
		String finSmdcd = "";
		
		FinItemCdDomain finItemCd = null;
		FinFnamInfoDomain finFnamInfo = null;
		
		finFnamInfo = new FinFnamInfoDomain();
		
		finFnamInfo.setUserid(domain.getUserid());
		finFnamInfo.setBzn(domain.getBzn());		
		finFnamInfo.setStacYy(domain.getStacYy());
		
		List<FinFnamInfoDomain> finFamInfoList = finFnamInfoDao.selectFinFnamInfoList(finFnamInfo);
		
		Map<String, BigDecimal> finFamInfoMap = new HashMap<String, BigDecimal>();
		
		for (FinFnamInfoDomain finFnam : finFamInfoList) {
			finFamInfoMap.put(finFnam.getFinSmdcd(), finFnam.getFinAmt());
		}
		
		Set keySet = rootMap.keySet();
		Iterator itr = keySet.iterator();
		
		while(itr.hasNext()) {
			
			finDcd = (String) itr.next();
			
			ListOrderedMap finDcdMap = (ListOrderedMap) rootMap.get(finDcd);
			ListOrderedMap finLrdvcdMapList = (ListOrderedMap) finDcdMap.get("finLrdvcd");
			
			Set finLrdvcdKeySet = finLrdvcdMapList.keySet();
			Iterator finLrdvcdItr = finLrdvcdKeySet.iterator();
			
			while(finLrdvcdItr.hasNext()) {
				
				finLrdvcd = (String) finLrdvcdItr.next();
				ListOrderedMap finLrdvcdMap = (ListOrderedMap) finLrdvcdMapList.get(finLrdvcd);
				ListOrderedMap finMdvcdMapList = (ListOrderedMap) finLrdvcdMap.get("finMdvcd");
				
				Set finMdvcdKeySet = finMdvcdMapList.keySet();
				Iterator finMdvcdItr = finMdvcdKeySet.iterator();
				
				while(finMdvcdItr.hasNext()) {
					
					finMdvcd = (String) finMdvcdItr.next();
					ListOrderedMap finMdvcdMap = (ListOrderedMap) finMdvcdMapList.get(finMdvcd);
					List finSmdcdMapList = (ArrayList) finMdvcdMap.get("finSmdcd");
					
					int size = 0;
					
					if (finSmdcdMapList != null) size = finSmdcdMapList.size();
					
					for (int i = 0; i < size; i++) {
						
						EntpFinItemVo itemVo = (EntpFinItemVo) finSmdcdMapList.get(i);
						
						if (finFamInfoMap != null) {
							BigDecimal finAmt = BigDecimal.ZERO;
							if (finFamInfoMap.get(itemVo.getFinSmdcd()) != null) finAmt = finFamInfoMap.get(itemVo.getFinSmdcd());
							itemVo.setFinAmt(finAmt);							
						}
						
					}
				}
				
			}
			
		}
		
		System.out.println("finFamInfoMap >>> " + finFamInfoMap);
		
		return rootMap;
	}
	
	//Map 형태로
	public Map<String, EntpFinItemVo> finFnamTypeMapList(FinFnamInfoDomain domain) throws Exception {
		
		FinFnamInfoDomain finFnamInfo = null;
		FinItemCdDomain finItemCd = null;
		List<EntpFinItemVo> resultList = new ArrayList<EntpFinItemVo>();
		
		BeanUtils beanUtil = new BeanUtils();
		
		finFnamInfo = new FinFnamInfoDomain();
		
		finFnamInfo.setUserid(domain.getUserid());
		finFnamInfo.setBzn(domain.getBzn());		
		finFnamInfo.setStacYy(domain.getStacYy());
		
		List<FinFnamInfoDomain> finFamInfoList = finFnamInfoDao.selectFinFnamInfoList(finFnamInfo);
		
		Map<String, EntpFinItemVo> listMap = new HashMap<String, EntpFinItemVo>();
		
		EntpFinItemVo vo = null;
		
		for (FinFnamInfoDomain finFnam : finFamInfoList) {
			
			finItemCd = new FinItemCdDomain();
			finItemCd.setFinSmdcd(finFnam.getFinSmdcd());
			
			finItemCd = finItemCdDao.selectFinItemCd(finItemCd);
			
			vo = (EntpFinItemVo) beanUtil.toCopy(finItemCd, new EntpFinItemVo());
			vo = (EntpFinItemVo) beanUtil.toCopy(finFnam, vo);
			
			listMap.put(finFnam.getFinSmdcd(), vo);
		}
		
		//////////////////////////////////////////////////////////
		// BS
		//////////////////////////////////////////////////////////
		Set<String> keys = listMap.keySet();
		Iterator<String> itr = keys.iterator();
		EntpFinItemVo itemVo = null;
		EntpFinItemVo resultVo = null;
		BigDecimal totalAmt = BigDecimal.ZERO;
		//1) 당좌 자산 총계
		while (itr.hasNext()) {
			String key = itr.next();
			if (key.substring(0,11).equals(FinBalanceItemConst.당좌자산합계)) {
				itemVo = listMap.get(key);
				totalAmt = totalAmt.add(itemVo.getFinAmt());
			}
		}
		resultVo = new EntpFinItemVo();
		if (itemVo != null) {
			resultVo = (EntpFinItemVo) beanUtil.toCopy(itemVo, resultVo);
		}
		resultVo.setFinSmdcd(FinBalanceItemConst.당좌자산합계);
		resultVo.setFinSmdcdNm("당좌자산합계");
		resultVo.setFinAmt(totalAmt);
		listMap.put(FinBalanceItemConst.당좌자산합계, resultVo);
		
		//2) 재고 자산 총계
		itemVo = null;
		resultVo = null;
		totalAmt = BigDecimal.ZERO;
		while (itr.hasNext()) {
			String key = itr.next();
			if (key.substring(0,11).equals(FinBalanceItemConst.재고자산합계)) {
				itemVo = listMap.get(key);
				totalAmt = totalAmt.add(itemVo.getFinAmt());
			}
		}
		resultVo = new EntpFinItemVo();
		if (itemVo != null) {
			resultVo = (EntpFinItemVo) beanUtil.toCopy(itemVo, resultVo);
		}
		resultVo.setFinSmdcd(FinBalanceItemConst.재고자산합계);
		resultVo.setFinSmdcdNm("재고자산합계");
		resultVo.setFinAmt(totalAmt);
		listMap.put(FinBalanceItemConst.재고자산합계, resultVo);
		
		///////////////////////////////////////////////////////////////////////////////////
		//유동자산 합계
		///////////////////////////////////////////////////////////////////////////////////
		resultVo = new EntpFinItemVo();
		totalAmt = BigDecimal.ZERO;
		if (itemVo != null) {
			resultVo = (EntpFinItemVo) beanUtil.toCopy(itemVo, resultVo);
		}
		resultVo.setFinMdvcd(FinBalanceItemConst.유동자산총합계);
		resultVo.setFinMdvcdNm("유동자산총합계");
		resultVo.setFinSmdcd(FinBalanceItemConst.유동자산총합계);
		resultVo.setFinSmdcdNm("유동자산총합계");
		
		totalAmt = totalAmt.add((listMap.put(FinBalanceItemConst.당좌자산합계, resultVo)).getFinAmt());
		totalAmt = totalAmt.add((listMap.put(FinBalanceItemConst.재고자산합계, resultVo)).getFinAmt());
		
		resultVo.setFinAmt(totalAmt);
		listMap.put(FinBalanceItemConst.유동자산총합계, resultVo);
		
		//3) 투자 자산 총계
		itemVo = null;
		resultVo = null;
		totalAmt = BigDecimal.ZERO;
		while (itr.hasNext()) {
			String key = itr.next();
			if (key.equals(FinBalanceItemConst.투자자산)) {
				itemVo = listMap.get(key);
				totalAmt = totalAmt.add(itemVo.getFinAmt());
			}
		}
		resultVo = new EntpFinItemVo();
		if (itemVo != null) {
			resultVo = (EntpFinItemVo) beanUtil.toCopy(itemVo, resultVo);
		}
		resultVo.setFinSmdcd(FinBalanceItemConst.투자자산합계);
		resultVo.setFinSmdcdNm("투자자산합계");
		resultVo.setFinAmt(totalAmt);
		listMap.put(FinBalanceItemConst.투자자산합계, resultVo);
		
		//4) 유형 자산 총계
		itemVo = null;
		resultVo = null;
		totalAmt = BigDecimal.ZERO;
		while (itr.hasNext()) {
			String key = itr.next();
			if (key.substring(0,11).equals(FinBalanceItemConst.유형자산합계)) {
				if (!key.equals(FinBalanceItemConst.건물_건축물감가상각비) 
					&& !key.equals(FinBalanceItemConst.기계장치감가상각비)
					&& !key.equals(FinBalanceItemConst.선박_차량구_운반구감가상각비))
				itemVo = listMap.get(key);
				totalAmt = totalAmt.add(itemVo.getFinAmt());
			}
		}
		resultVo = new EntpFinItemVo();
		if (itemVo != null) {
			resultVo = (EntpFinItemVo) beanUtil.toCopy(itemVo, resultVo);
		}
		resultVo.setFinSmdcd(FinBalanceItemConst.유형자산합계);
		resultVo.setFinSmdcdNm("유형자산합계");
		resultVo.setFinAmt(totalAmt);
		listMap.put(FinBalanceItemConst.유형자산합계, resultVo);
		
		//5) 무형 자산 총계
		itemVo = null;
		resultVo = null;
		totalAmt = BigDecimal.ZERO;
		while (itr.hasNext()) {
			String key = itr.next();
			if (key.substring(0,11).equals(FinBalanceItemConst.무형자산합계)) {
				itemVo = listMap.get(key);
				totalAmt = totalAmt.add(itemVo.getFinAmt());
			}
		}
		resultVo = new EntpFinItemVo();
		if (itemVo != null) {
			resultVo = (EntpFinItemVo) beanUtil.toCopy(itemVo, resultVo);
		}
		resultVo.setFinSmdcd(FinBalanceItemConst.무형자산합계);
		resultVo.setFinSmdcdNm("무형자산합계");
		resultVo.setFinAmt(totalAmt);
		listMap.put(FinBalanceItemConst.무형자산합계, resultVo);
		
		///////////////////////////////////////////////////////////////////////////////////
		//비유동자산 합계
		///////////////////////////////////////////////////////////////////////////////////
		resultVo = new EntpFinItemVo();
		totalAmt = BigDecimal.ZERO;
		if (itemVo != null) {
			resultVo = (EntpFinItemVo) beanUtil.toCopy(itemVo, resultVo);
		}
		resultVo.setFinMdvcd(FinBalanceItemConst.비유동자산총합계);
		resultVo.setFinMdvcdNm("비유동자산총합계");
		resultVo.setFinSmdcd(FinBalanceItemConst.비유동자산총합계);
		resultVo.setFinSmdcdNm("비유동자산총합계");
		
		totalAmt = totalAmt.add((listMap.put(FinBalanceItemConst.투자자산합계, resultVo)).getFinAmt());
		totalAmt = totalAmt.add((listMap.put(FinBalanceItemConst.유형자산합계, resultVo)).getFinAmt());
		totalAmt = totalAmt.add((listMap.put(FinBalanceItemConst.무형자산합계, resultVo)).getFinAmt());
		
		resultVo.setFinAmt(totalAmt);
		listMap.put(FinBalanceItemConst.비유동자산총합계, resultVo);
		
		//6) 유동 부채 총계
		itemVo = null;
		resultVo = null;
		totalAmt = BigDecimal.ZERO;
		while (itr.hasNext()) {
			String key = itr.next();
			if (key.substring(0,11).equals(FinBalanceItemConst.유동부채합계)) {
				itemVo = listMap.get(key);
				totalAmt = totalAmt.add(itemVo.getFinAmt());
			}
		}
		resultVo = new EntpFinItemVo();
		if (itemVo != null) {
			resultVo = (EntpFinItemVo) beanUtil.toCopy(itemVo, resultVo);
		}
		resultVo.setFinSmdcd(FinBalanceItemConst.유동부채합계);
		resultVo.setFinSmdcdNm("유동부채합계");
		resultVo.setFinAmt(totalAmt);
		listMap.put(FinBalanceItemConst.유동부채합계, resultVo);
		
		///////////////////////////////////////////////////////////////////////////////////
		//유동부채 총합계
		///////////////////////////////////////////////////////////////////////////////////
		resultVo = new EntpFinItemVo();
		totalAmt = BigDecimal.ZERO;
		if (itemVo != null) {
			resultVo = (EntpFinItemVo) beanUtil.toCopy(itemVo, resultVo);
		}
		resultVo.setFinMdvcd(FinBalanceItemConst.유동부채총합계);
		resultVo.setFinMdvcdNm("유동부채총합계");
		resultVo.setFinSmdcd(FinBalanceItemConst.유동부채총합계);
		resultVo.setFinSmdcdNm("유동부채총합계");
		
		totalAmt = totalAmt.add((listMap.put(FinBalanceItemConst.유동부채합계, resultVo)).getFinAmt());
		
		resultVo.setFinAmt(totalAmt);
		listMap.put(FinBalanceItemConst.유동부채총합계, resultVo);		
		
		//7) 비유동 부채 총계
		itemVo = null;
		resultVo = null;
		totalAmt = BigDecimal.ZERO;
		while (itr.hasNext()) {
			String key = itr.next();
			if (key.substring(0,11).equals(FinBalanceItemConst.비유동부채합계)) {
				itemVo = listMap.get(key);
				totalAmt = totalAmt.add(itemVo.getFinAmt());
			}
		}
		resultVo = new EntpFinItemVo();
		if (itemVo != null) {
			resultVo = (EntpFinItemVo) beanUtil.toCopy(itemVo, resultVo);
		}
		resultVo.setFinSmdcd(FinBalanceItemConst.비유동부채합계);
		resultVo.setFinSmdcdNm("비유동부채합계");
		resultVo.setFinAmt(totalAmt);
		listMap.put(FinBalanceItemConst.비유동부채합계, resultVo);
		
		///////////////////////////////////////////////////////////////////////////////////
		//비유동부채합계
		///////////////////////////////////////////////////////////////////////////////////
		resultVo = new EntpFinItemVo();
		totalAmt = BigDecimal.ZERO;
		if (itemVo != null) {
			resultVo = (EntpFinItemVo) beanUtil.toCopy(itemVo, resultVo);
		}
		resultVo.setFinMdvcd(FinBalanceItemConst.비유동부채총합계);
		resultVo.setFinMdvcdNm("비유동부채총합계");
		resultVo.setFinSmdcd(FinBalanceItemConst.비유동부채총합계);
		resultVo.setFinSmdcdNm("비유동부채총합계");
		
		totalAmt = totalAmt.add((listMap.put(FinBalanceItemConst.비유동부채합계, resultVo)).getFinAmt());
		
		resultVo.setFinAmt(totalAmt);
		listMap.put(FinBalanceItemConst.비유동부채총합계, resultVo);				
		
		//8) 자본 총계
		itemVo = null;
		resultVo = null;
		totalAmt = BigDecimal.ZERO;
		while (itr.hasNext()) {
			String key = itr.next();
			if (key.substring(0,11).equals(FinBalanceItemConst.자본합계)) {
				itemVo = listMap.get(key);
				totalAmt = totalAmt.add(itemVo.getFinAmt());
			}
		}
		resultVo = new EntpFinItemVo();
		if (itemVo != null) {
			resultVo = (EntpFinItemVo) beanUtil.toCopy(itemVo, resultVo);
		}
		resultVo.setFinSmdcd(FinBalanceItemConst.자본합계);
		resultVo.setFinSmdcdNm("자본합계");
		resultVo.setFinAmt(totalAmt);
		listMap.put(FinBalanceItemConst.자본합계, resultVo);
		
		///////////////////////////////////////////////////////////////////////////////////
		//자본 총 합계
		///////////////////////////////////////////////////////////////////////////////////
		resultVo = new EntpFinItemVo();
		totalAmt = BigDecimal.ZERO;
		if (itemVo != null) {
			resultVo = (EntpFinItemVo) beanUtil.toCopy(itemVo, resultVo);
		}
		resultVo.setFinMdvcd(FinBalanceItemConst.자본총합계);
		resultVo.setFinMdvcdNm("자본총합계");
		resultVo.setFinSmdcd(FinBalanceItemConst.자본총합계);
		resultVo.setFinSmdcdNm("자본총합계");
		
		totalAmt = totalAmt.add((listMap.put(FinBalanceItemConst.자본합계, resultVo)).getFinAmt());
		
		resultVo.setFinAmt(totalAmt);
		listMap.put(FinBalanceItemConst.자본총합계, resultVo);			
		
		//////////////////////////////////////////////////////////
		// PL
		//////////////////////////////////////////////////////////
		//0) 영업손익
		//1) 판매비와 관리비 총계
		itemVo = null;
		resultVo = null;
		totalAmt = BigDecimal.ZERO;
		while (itr.hasNext()) {
			String key = itr.next();
			if (key.substring(0,11).equals(FinIncomeItemConst.판매와관리비합계)) {
				itemVo = listMap.get(key);
				totalAmt = totalAmt.add(itemVo.getFinAmt());
			}
		}
		resultVo = new EntpFinItemVo();
		if (itemVo != null) {
			resultVo = (EntpFinItemVo) beanUtil.toCopy(itemVo, resultVo);
		}
		resultVo.setFinSmdcd(FinIncomeItemConst.판매와관리비합계);
		resultVo.setFinSmdcdNm("판매와관리비합계");
		resultVo.setFinAmt(totalAmt);
		listMap.put(FinIncomeItemConst.판매와관리비합계, resultVo);
		
		//2) 영업외 수익 총계
		itemVo = null;
		resultVo = null;
		totalAmt = BigDecimal.ZERO;
		while (itr.hasNext()) {
			String key = itr.next();
			if (key.substring(0,11).equals(FinIncomeItemConst.영업외수익합계)) {
				itemVo = listMap.get(key);
				totalAmt = totalAmt.add(itemVo.getFinAmt());
			}
		}
		resultVo = new EntpFinItemVo();
		if (itemVo != null) {
			resultVo = (EntpFinItemVo) beanUtil.toCopy(itemVo, resultVo);
		}
		resultVo.setFinSmdcd(FinIncomeItemConst.영업외수익합계);
		resultVo.setFinSmdcdNm("영업외수익합계");
		resultVo.setFinAmt(totalAmt);
		listMap.put(FinIncomeItemConst.영업외수익합계, resultVo);
		
		//3) 영업외 비용 총계
		itemVo = null;
		resultVo = null;
		totalAmt = BigDecimal.ZERO;
		while (itr.hasNext()) {
			String key = itr.next();
			if (key.substring(0,11).equals(FinIncomeItemConst.영업외비용합계)) {
				itemVo = listMap.get(key);
				totalAmt = totalAmt.add(itemVo.getFinAmt());
			}
		}
		resultVo = new EntpFinItemVo();
		if (itemVo != null) {
			resultVo = (EntpFinItemVo) beanUtil.toCopy(itemVo, resultVo);
		}
		resultVo.setFinSmdcd(FinIncomeItemConst.영업외비용합계);
		resultVo.setFinSmdcdNm("영업외비용합계");
		resultVo.setFinAmt(totalAmt);
		listMap.put(FinIncomeItemConst.영업외비용합계, resultVo);
		//////////////////////////////////////////////////////////
		// COST
		//////////////////////////////////////////////////////////		
		//1) 경비 총계
		itemVo = null;
		resultVo = null;
		totalAmt = BigDecimal.ZERO;
		while (itr.hasNext()) {
			String key = itr.next();
			if (key.substring(0,11).equals(FinCostConst.경비합계)) {
				itemVo = listMap.get(key);
				totalAmt = totalAmt.add(itemVo.getFinAmt());
			}
		}
		resultVo = new EntpFinItemVo();
		if (itemVo != null) {
			resultVo = (EntpFinItemVo) beanUtil.toCopy(itemVo, resultVo);
		}
		resultVo.setFinSmdcd(FinCostConst.경비합계);
		resultVo.setFinSmdcdNm("경비합계");
		resultVo.setFinAmt(totalAmt);
		listMap.put(FinCostConst.경비합계, resultVo);
		
		//2) 총제조비용 (경비 + 재료비 + 노무비)
		itemVo = null;
		resultVo = null;
		while (itr.hasNext()) {
			String key = itr.next();
			if (key.substring(0,11).equals(FinCostConst.당기총제조비용합계)) {
				itemVo = listMap.get(key);
				totalAmt = totalAmt.add(itemVo.getFinAmt());
			}
		}
		resultVo = new EntpFinItemVo();
		if (itemVo != null) {
			resultVo = (EntpFinItemVo) beanUtil.toCopy(itemVo, resultVo);
		}
		resultVo.setFinSmdcd(FinCostConst.당기총제조비용합계);
		resultVo.setFinSmdcdNm("당기총제조비용합계");
		resultVo.setFinAmt(totalAmt);
		listMap.put(FinCostConst.당기총제조비용합계, resultVo);
		
		/////////////////////////////////////////////////////////////////////////
		// 부가가치
		/////////////////////////////////////////////////////////////////////////
		//1) 인건비합계
		itemVo = null;
		resultVo = null;
		totalAmt = BigDecimal.ZERO;
		while (itr.hasNext()) {
			String key = itr.next();
			if (key.substring(0,9).equals(FinAddedValueItemConst.인건비합계)) {
				itemVo = listMap.get(key);
				totalAmt = totalAmt.add(itemVo.getFinAmt());
			}
		}
		resultVo = new EntpFinItemVo();
		if (itemVo != null) {
			resultVo = (EntpFinItemVo) beanUtil.toCopy(itemVo, resultVo);
		}
		resultVo.setFinSmdcd(FinAddedValueItemConst.인건비합계);
		resultVo.setFinSmdcdNm("인건비합계");
		resultVo.setFinAmt(totalAmt);
		listMap.put(FinAddedValueItemConst.인건비합계, resultVo);
		
		//2) 금융비용 합계
		itemVo = null;
		resultVo = new EntpFinItemVo();
		totalAmt = BigDecimal.ZERO;
		itemVo = listMap.get(FinAddedValueItemConst.지급이자);
		
		if (itemVo != null) {
			totalAmt = totalAmt.add(itemVo.getFinAmt());
			resultVo = (EntpFinItemVo) beanUtil.toCopy(itemVo, resultVo);
		}
		
		itemVo = null;
		itemVo = listMap.get(FinAddedValueItemConst.할인료);
		
		if (itemVo != null) {
			totalAmt = totalAmt.add(itemVo.getFinAmt());
			resultVo = (EntpFinItemVo) beanUtil.toCopy(itemVo, resultVo);
		}
		
		itemVo = null;
		itemVo = listMap.get(FinAddedValueItemConst.사채이자);
		
		if (itemVo != null) {
			totalAmt = totalAmt.add(itemVo.getFinAmt());
			resultVo = (EntpFinItemVo) beanUtil.toCopy(itemVo, resultVo);
		}
		
		itemVo = null;
		itemVo = listMap.get(FinAddedValueItemConst.수입이자);
		
		if (itemVo != null) {
			totalAmt = totalAmt.subtract(itemVo.getFinAmt());
			resultVo = (EntpFinItemVo) beanUtil.toCopy(itemVo, resultVo);
		}
		
		resultVo.setFinSmdcd(FinAddedValueItemConst.금융비용합계);
		resultVo.setFinSmdcdNm("금융비용합계");
		resultVo.setFinAmt(totalAmt);
		listMap.put(FinAddedValueItemConst.금융비용합계, resultVo);	
		
		//3) 임차료 합계		
		itemVo = null;
		resultVo = null;
		totalAmt = BigDecimal.ZERO;
		while (itr.hasNext()) {
			String key = itr.next();
			if (key.substring(0,9).equals(FinAddedValueItemConst.임차료합계)) {
				itemVo = listMap.get(key);
				totalAmt = totalAmt.add(itemVo.getFinAmt());
			}
		}
		resultVo = new EntpFinItemVo();
		if (itemVo != null) {
			resultVo = (EntpFinItemVo) beanUtil.toCopy(itemVo, resultVo);
		}
		resultVo.setFinSmdcd(FinAddedValueItemConst.임차료합계);
		resultVo.setFinSmdcdNm("임차료합계");
		resultVo.setFinAmt(totalAmt);
		listMap.put(FinAddedValueItemConst.임차료합계, resultVo);
		
		//4) 부가가치 합계
		resultVo = new EntpFinItemVo();
		totalAmt = BigDecimal.ZERO;
		if (itemVo != null) {
			resultVo = (EntpFinItemVo) beanUtil.toCopy(itemVo, resultVo);
		}
		resultVo.setFinMdvcd(FinAddedValueItemConst.부가가치합계);
		resultVo.setFinMdvcdNm("부가가치합계");
		resultVo.setFinSmdcd(FinAddedValueItemConst.부가가치합계);
		resultVo.setFinSmdcdNm("부가가치합계");
		
		totalAmt = totalAmt.add((listMap.put(FinAddedValueItemConst.법인세차감전순이익, resultVo)).getFinAmt());
		totalAmt = totalAmt.add((listMap.put(FinAddedValueItemConst.인건비합계, resultVo)).getFinAmt());
		totalAmt = totalAmt.add((listMap.put(FinAddedValueItemConst.금융비용합계, resultVo)).getFinAmt());
		totalAmt = totalAmt.add((listMap.put(FinAddedValueItemConst.임차료합계, resultVo)).getFinAmt());
		totalAmt = totalAmt.add((listMap.put(FinAddedValueItemConst.조세공과, resultVo)).getFinAmt());
		totalAmt = totalAmt.add((listMap.put(FinAddedValueItemConst.감가상각비, resultVo)).getFinAmt());
		
		resultVo.setFinAmt(totalAmt);
		listMap.put(FinAddedValueItemConst.부가가치합계, resultVo);
		
		return listMap;
	}
	
	//기업별 재무정보 리스트
	public List<EntpFinItemVo> EntpFinFnamInfoList(FinFnamInfoDomain domain , FasPagingUtil paging) throws Exception {
		
		List<FinFnamInfoDomain> finList = finFnamInfoDao.selectFinFnamStacYyList(domain);
		
		List<EntpFinItemVo> resultList = new ArrayList<EntpFinItemVo>();
		
		ListOrderedMap listMap = new ListOrderedMap();
		
		for (FinFnamInfoDomain finDomain : finList) {
			listMap.put(finDomain.getStacYy(), finDomain);
		}
		
		Set keySet = listMap.keySet();
		Iterator itr = keySet.iterator();
		
		FinFnamInfoDomain finDomain = null;
		EntpFinItemVo itemVo = null;
		CorporationDomain corp = null;
		
		while(itr.hasNext()) {
			
			String stayY = (String) itr.next();
			
			finDomain = (FinFnamInfoDomain) listMap.get(stayY);
			
			itemVo = new EntpFinItemVo();
			
			corp = new CorporationDomain();
			corp.setBzn(finDomain.getBzn());
			corp.setUserid(finDomain.getUserid());
			
			corp = corpDao.selectCorporation(corp);
			
			itemVo.setUserid(finDomain.getUserid());
			itemVo.setBzn(finDomain.getBzn());
			if (corp != null) itemVo.setName(corp.getName());
			itemVo.setStacYy(finDomain.getStacYy());
			itemVo.setFinTitle(stayY + "년도 재무정보" );
			
			resultList.add(itemVo);
			
		}
		
		return resultList;
		
	}
	
	//기업별 재무정보 리스트
	public List<EntpFinItemVo> EntpFinFnamInfoList(FinFnamInfoDomain domain) throws Exception {
		
		List<FinFnamInfoDomain> finList = finFnamInfoDao.selectFinFnamStacYyList(domain);
		
		List<EntpFinItemVo> resultList = new ArrayList<EntpFinItemVo>();
		
		ListOrderedMap listMap = new ListOrderedMap();
		
		for (FinFnamInfoDomain finDomain : finList) {
			listMap.put(finDomain.getStacYy(), finDomain);
		}
		
		Set keySet = listMap.keySet();
		Iterator itr = keySet.iterator();
		
		FinFnamInfoDomain finDomain = null;
		EntpFinItemVo itemVo = null;
		CorporationDomain corp = null;
		
		while(itr.hasNext()) {
			
			String stayY = (String) itr.next();
			
			finDomain = (FinFnamInfoDomain) listMap.get(stayY);
			
			itemVo = new EntpFinItemVo();
			
			corp = new CorporationDomain();
			corp.setBzn(finDomain.getBzn());
			corp.setUserid(finDomain.getUserid());
			
			corp = corpDao.selectCorporation(corp);
			
			itemVo.setUserid(finDomain.getUserid());
			itemVo.setBzn(finDomain.getBzn());
			if (corp != null) itemVo.setName(corp.getName());
			itemVo.setStacYy(finDomain.getStacYy());
			itemVo.setFinTitle(stayY + "년도 재무정보" );
			
			resultList.add(itemVo);
			
		}
		
		return resultList;
		
	}
	
	//기업별 재무정보 리스트 Total Count
	public int EntpFinFnamInfoListTotalCount(FinFnamInfoDomain domain) throws Exception {
		List<FinFnamInfoDomain> finList = finFnamInfoDao.selectFinFnamStacYyList(domain);
		if (finList == null) {
			return 0;
		} else {
			
			ListOrderedMap listMap = new ListOrderedMap();
			
			for (FinFnamInfoDomain finDomain : finList) {
				listMap.put(finDomain.getStacYy(), finDomain);
			}
			
			return listMap.size();
		}
	}
	
	//기업별 재무정보 등록
	public void EntpFinInfoRgsn(FinFnamInfoDomain domain) throws Exception {
		finFnamInfoDao.insert(domain);
	}
	
	//기업별 재무정보 등록 (대량)
	public void EntpFinInfoRgsn(List<FinFnamInfoDomain> domainList) throws Exception {
		for (FinFnamInfoDomain domain : domainList) {
			finFnamInfoDao.insert(domain);
		}
	}
	
	//기업별 재무정보 변경
	public void EntpFinInfoMdfc(FinFnamInfoDomain domain) throws Exception {
		finFnamInfoDao.update(domain);
	}
		
	//기업별 재무정보 변경 (대량)
	public void EntpFinInfoMdfc(List<FinFnamInfoDomain> domainList) throws Exception {
		for (FinFnamInfoDomain domain : domainList) {
			finFnamInfoDao.update(domain);
		}
	}
	
	//기업별 재무정보 삭제
	public void EntpFinInfoDel(FinFnamInfoDomain domain) throws Exception {
		finFnamInfoDao.delete(domain);
	}
}
