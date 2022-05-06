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
import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.stereotype.Component;

import com.fas.cmmn.util.FasDateUtil;
import com.fas.model.fin.alys.FinAddedValueItemConst;
import com.fas.model.fin.alys.FinBalanceItemConst;
import com.fas.model.fin.alys.FinCostConst;
import com.fas.model.fin.alys.FinIncomeItemConst;
import com.fas.model.fin.dao.AnalysisFnamDtDao;
import com.fas.model.fin.dao.AnalysisFnamInfoDao;
import com.fas.model.fin.dao.FinFnamInfoDao;
import com.fas.model.fin.dao.FinItemCdDao;
import com.fas.model.fin.domain.AlyFnamDtDomain;
import com.fas.model.fin.domain.AlyFnamInfoDomain;
import com.fas.model.fin.domain.FinFnamInfoDomain;
import com.fas.model.fin.domain.FinItemCdDomain;
import com.fas.web.cmmn.util.BeanUtils;

@Component("AnalysisFnamManager")
public class AnalysisFnamManager {
	
	private static Log logger = LogFactory.getLog(AnalysisFnamManager.class);

	@Resource(name="AnalysisFnamInfoDao")
	private AnalysisFnamInfoDao analysisFnamInfoDao;
	
	@Resource(name="AnalysisFnamDtDao")
	private AnalysisFnamDtDao analysisFnamDtDao;
	
	@Resource(name="FinFnamInfoDao")
	private FinFnamInfoDao finFnamInfoDao;
	
	@Resource(name="FinItemCdDao")
	private FinItemCdDao finItemCdDao;
	
	@Resource(name="EntpFinInfoModel")
	private EntpFinInfoModel entpFinInfoModel;
	
	//1) 분석대상 년도별 재무정보 기본
	public List<AlyFnamInfoDomain> selectInfoList(AlyFnamInfoDomain domain) throws Exception {
		return analysisFnamInfoDao.selectList(domain);
	}
	
	public List<AlyFnamDtDomain> selectDtInfoList(AlyFnamDtDomain domain) throws Exception {
		return analysisFnamDtDao.selectList(domain);
	}
	
	//List형태로
	public List<EntpFinItemVo> finFnamTypeList(AlyFnamDtDomain domain) throws Exception {
		
		BeanUtils beanUtil = new BeanUtils();
		
		List<AlyFnamDtDomain> finList = analysisFnamDtDao.selectList(domain);
		List<EntpFinItemVo> resultList = new ArrayList<EntpFinItemVo>();
		
		FinItemCdDomain finItemCd = null;
		EntpFinItemVo vo = null;
		for (AlyFnamDtDomain finDomain : finList) {
			
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
	public ListOrderedMap finFnamTypeMap(AlyFnamDtDomain domain) throws Exception {
		
		BeanUtils beanUtil = new BeanUtils();
		
		entpFinInfoModel.makeModel();
		
		ListOrderedMap rootMap = entpFinInfoModel.getMap();
		
		String finDcd = "";
		String finLrdvcd = "";
		String finMdvcd = "";
		String finSmdcd = "";
		
		FinItemCdDomain finItemCd = null;
		AlyFnamDtDomain finFnamInfo = null;
		
		finFnamInfo = new AlyFnamDtDomain();
		
		finFnamInfo.setAlyid(domain.getAlyid());
		finFnamInfo.setUserid(domain.getUserid());
		finFnamInfo.setBzn(domain.getBzn());		
		finFnamInfo.setStacYy(domain.getStacYy());
		
		List<AlyFnamDtDomain> finFamInfoList = analysisFnamDtDao.selectList(finFnamInfo);
		
		Map<String, BigDecimal> finFamInfoMap = new HashMap<String, BigDecimal>();
		
		for (AlyFnamDtDomain finFnam : finFamInfoList) {
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
							itemVo.setFinAmt(finFamInfoMap.get(itemVo.getFinSmdcd()));							
						}
						
					}
				}
				
			}
			
		}
		
		System.out.println("finFamInfoMap >>> " + finFamInfoMap);
		
		return rootMap;
		
	}
	
	//Map 형태로
	public Map<String, EntpFinItemVo> finFnamTypeMapList(AlyFnamDtDomain domain) throws Exception {
		
		BeanUtils beanUtil = new BeanUtils();
		
		List<AlyFnamDtDomain> finList = analysisFnamDtDao.selectList(domain);
		List<EntpFinItemVo> resultList = new ArrayList<EntpFinItemVo>();
		
		Map<String, EntpFinItemVo> listMap = new HashMap<String, EntpFinItemVo>();
		
		FinItemCdDomain finItemCd = null;
		EntpFinItemVo vo = null;
		for (AlyFnamDtDomain finDomain : finList) {
			
			finItemCd = new FinItemCdDomain();
			finItemCd.setFinSmdcd(finDomain.getFinSmdcd());
			
			//finItemCd = finItemCdDao.selectFinItemCd(finItemCd);
			
			//vo = (EntpFinItemVo) beanUtil.toCopy(finItemCd, new EntpFinItemVo());
			if (finDomain.getFinAmt() == null) {
				finDomain.setFinAmt(BigDecimal.ZERO);
			}
			
			vo = (EntpFinItemVo) beanUtil.toCopy(finDomain, new EntpFinItemVo());
			
			listMap.put(finItemCd.getFinSmdcd(), vo);
		}
		
		//////////////////////////////////////////////////////////
		// BS
		//////////////////////////////////////////////////////////
		Set<String> keys = listMap.keySet();
		Iterator<String> itr = keys.iterator();
		EntpFinItemVo itemVo = null;
		EntpFinItemVo resultVo = null;
		BigDecimal totalAmt = BigDecimal.ZERO;
		BigDecimal totalAmt01 = BigDecimal.ZERO;
		//1) 당좌 자산 총계
		while (itr.hasNext()) {
			String key = itr.next();
			if (key.length() >= 13) {
				if (key.substring(0,11).equals(FinBalanceItemConst.당좌자산합계)) {
					itemVo = listMap.get(key);
					if (itemVo != null) {
						totalAmt01 = totalAmt01.add(itemVo.getFinAmt());
					}
				}
			}
		}
		resultVo = new EntpFinItemVo();
		if (itemVo != null) {
			resultVo = (EntpFinItemVo) beanUtil.toCopy(itemVo, resultVo);
		}
		resultVo.setBzn(domain.getBzn());
		resultVo.setStacYy(domain.getStacYy());
		resultVo.setUserid(domain.getUserid());
		resultVo.setAlyid(domain.getAlyid());
		
		resultVo.setFinSmdcd(FinBalanceItemConst.당좌자산합계);
		resultVo.setFinSmdcdNm("당좌자산합계");
		resultVo.setFinAmt(new BigDecimal(totalAmt01.toString()));
		listMap.put(FinBalanceItemConst.당좌자산합계, resultVo);
		
		//2) 재고 자산 총계
		keys = listMap.keySet();
		itr = keys.iterator();
		itemVo = null;
		resultVo = null;
		totalAmt = BigDecimal.ZERO;
		while (itr.hasNext()) {
			String key = itr.next();
			if (key.length() >= 13) {
				if (key.substring(0,11).equals(FinBalanceItemConst.재고자산합계)) {
					itemVo = listMap.get(key);
					if(itemVo != null) {
						totalAmt = totalAmt.add(itemVo.getFinAmt());
						System.out.println(key + " : " + itemVo.getFinAmt() + " : " + totalAmt);
					}
				}
			}
		}
		resultVo = new EntpFinItemVo();
		if (itemVo != null) {
			resultVo = (EntpFinItemVo) beanUtil.toCopy(itemVo, resultVo);
		}
		
		resultVo.setBzn(domain.getBzn());
		resultVo.setStacYy(domain.getStacYy());
		resultVo.setUserid(domain.getUserid());
		resultVo.setAlyid(domain.getAlyid());
		
		resultVo.setFinSmdcd(FinBalanceItemConst.재고자산합계);
		resultVo.setFinSmdcdNm("재고자산합계");
		resultVo.setFinAmt(new BigDecimal(totalAmt.toString()));
		listMap.put(FinBalanceItemConst.재고자산합계, resultVo);
		
		///////////////////////////////////////////////////////////////////////////////////
		//유동자산 합계
		///////////////////////////////////////////////////////////////////////////////////
		resultVo = new EntpFinItemVo();
		totalAmt = BigDecimal.ZERO;
		if (itemVo != null) {
			resultVo = (EntpFinItemVo) beanUtil.toCopy(itemVo, resultVo);
		}
		
		resultVo.setBzn(domain.getBzn());
		resultVo.setStacYy(domain.getStacYy());
		resultVo.setUserid(domain.getUserid());
		resultVo.setAlyid(domain.getAlyid());
		
		resultVo.setFinMdvcd(FinBalanceItemConst.유동자산총합계);
		resultVo.setFinMdvcdNm("유동자산총합계");
		resultVo.setFinSmdcd(FinBalanceItemConst.유동자산총합계);
		resultVo.setFinSmdcdNm("유동자산총합계");
		
		if (listMap.get(FinBalanceItemConst.당좌자산합계) != null) totalAmt = totalAmt.add((listMap.get(FinBalanceItemConst.당좌자산합계)).getFinAmt());
		if (listMap.get(FinBalanceItemConst.재고자산합계) != null) totalAmt = totalAmt.add((listMap.get(FinBalanceItemConst.재고자산합계)).getFinAmt());
		
		resultVo.setFinAmt(new BigDecimal(totalAmt.toString()));
		listMap.put(FinBalanceItemConst.유동자산총합계, resultVo);
		
		//3) 투자 자산 총계
		keys = listMap.keySet();
		itr = keys.iterator();
		itemVo = null;
		resultVo = null;
		totalAmt = BigDecimal.ZERO;
		while (itr.hasNext()) {
			String key = itr.next();
			if (key.equals(FinBalanceItemConst.투자자산)) {
				itemVo = listMap.get(key);
				if (itemVo != null) {
					totalAmt = totalAmt.add(itemVo.getFinAmt());
				}
			}
		}
		resultVo = new EntpFinItemVo();
		if (itemVo != null) {
			resultVo = (EntpFinItemVo) beanUtil.toCopy(itemVo, resultVo);
		}
		
		resultVo.setBzn(domain.getBzn());
		resultVo.setStacYy(domain.getStacYy());
		resultVo.setUserid(domain.getUserid());
		resultVo.setAlyid(domain.getAlyid());
		
		resultVo.setFinSmdcd(FinBalanceItemConst.투자자산합계);
		resultVo.setFinSmdcdNm("투자자산합계");
		resultVo.setFinAmt(new BigDecimal(totalAmt.toString()));
		listMap.put(FinBalanceItemConst.투자자산합계, resultVo);
		
		//4) 유형 자산 총계
		keys = listMap.keySet();
		itr = keys.iterator();
		itemVo = null;
		resultVo = null;
		totalAmt = BigDecimal.ZERO;
		while (itr.hasNext()) {
			String key = itr.next();
			if (key.length() >= 13) {
				if (key.substring(0,11).equals(FinBalanceItemConst.유형자산합계)) {
					if (key.equals(FinBalanceItemConst.건물_건축물감가상각비) 
						|| key.equals(FinBalanceItemConst.기계장치감가상각비)
						|| key.equals(FinBalanceItemConst.선박_차량구_운반구감가상각비)
						) {
						
					} else {
						itemVo = listMap.get(key);
						if (itemVo != null) {
							totalAmt = totalAmt.add(itemVo.getFinAmt());
						}
					}
				}
			}
		}
		resultVo = new EntpFinItemVo();
		if (itemVo != null) {
			resultVo = (EntpFinItemVo) beanUtil.toCopy(itemVo, resultVo);
		}
		
		resultVo.setBzn(domain.getBzn());
		resultVo.setStacYy(domain.getStacYy());
		resultVo.setUserid(domain.getUserid());
		resultVo.setAlyid(domain.getAlyid());
		
		resultVo.setFinSmdcd(FinBalanceItemConst.유형자산합계);
		resultVo.setFinSmdcdNm("유형자산합계");
		resultVo.setFinAmt(new BigDecimal(totalAmt.toString()));
		listMap.put(FinBalanceItemConst.유형자산합계, resultVo);
		
		//5) 무형 자산 총계
		keys = listMap.keySet();
		itr = keys.iterator();
		itemVo = null;
		resultVo = null;
		totalAmt = BigDecimal.ZERO;
		while (itr.hasNext()) {
			String key = itr.next();
			if (key.length() >= 13) {
				if (key.substring(0,11).equals(FinBalanceItemConst.무형자산합계)) {
					itemVo = listMap.get(key);
					if (itemVo != null) {
						totalAmt = totalAmt.add(itemVo.getFinAmt());
					}
				}
			}
		}
		resultVo = new EntpFinItemVo();
		if (itemVo != null) {
			resultVo = (EntpFinItemVo) beanUtil.toCopy(itemVo, resultVo);
		}
		
		resultVo.setBzn(domain.getBzn());
		resultVo.setStacYy(domain.getStacYy());
		resultVo.setUserid(domain.getUserid());
		resultVo.setAlyid(domain.getAlyid());
		
		resultVo.setFinSmdcd(FinBalanceItemConst.무형자산합계);
		resultVo.setFinSmdcdNm("무형자산합계");
		resultVo.setFinAmt(new BigDecimal(totalAmt.toString()));
		listMap.put(FinBalanceItemConst.무형자산합계, resultVo);
		
		//5-1) 기타비유동자산총계
		keys = listMap.keySet();
		itr = keys.iterator();
		itemVo = null;
		resultVo = null;
		totalAmt = BigDecimal.ZERO;
		while (itr.hasNext()) {
			String key = itr.next();
			if (key.length() >= 13) {
				if (key.substring(0,11).equals(FinBalanceItemConst.기타비유동자산합계)) {
					itemVo = listMap.get(key);
					if (itemVo != null) {
						totalAmt = totalAmt.add(itemVo.getFinAmt());
					}
				}
			}
		}
		resultVo = new EntpFinItemVo();
		if (itemVo != null) {
			resultVo = (EntpFinItemVo) beanUtil.toCopy(itemVo, resultVo);
		}
				
		resultVo.setBzn(domain.getBzn());
		resultVo.setStacYy(domain.getStacYy());
		resultVo.setUserid(domain.getUserid());
		resultVo.setAlyid(domain.getAlyid());
		
		resultVo.setFinSmdcd(FinBalanceItemConst.기타비유동자산합계);
		resultVo.setFinSmdcdNm("기타비유동자산합계");
		resultVo.setFinAmt(new BigDecimal(totalAmt.toString()));
		listMap.put(FinBalanceItemConst.기타비유동자산합계, resultVo);
		
		///////////////////////////////////////////////////////////////////////////////////
		//비유동자산 합계
		///////////////////////////////////////////////////////////////////////////////////
		resultVo = new EntpFinItemVo();
		totalAmt = BigDecimal.ZERO;
		if (itemVo != null) {
			resultVo = (EntpFinItemVo) beanUtil.toCopy(itemVo, resultVo);
		}
		
		resultVo.setBzn(domain.getBzn());
		resultVo.setStacYy(domain.getStacYy());
		resultVo.setUserid(domain.getUserid());
		resultVo.setAlyid(domain.getAlyid());
		
		resultVo.setFinMdvcd(FinBalanceItemConst.비유동자산총합계);
		resultVo.setFinMdvcdNm("비유동자산총합계");
		resultVo.setFinSmdcd(FinBalanceItemConst.비유동자산총합계);
		resultVo.setFinSmdcdNm("비유동자산총합계");
		
		if (listMap.get(FinBalanceItemConst.투자자산합계) != null) totalAmt = totalAmt.add((listMap.get(FinBalanceItemConst.투자자산합계)).getFinAmt());
		if (listMap.get(FinBalanceItemConst.유형자산합계) != null) totalAmt = totalAmt.add((listMap.get(FinBalanceItemConst.유형자산합계)).getFinAmt());
		if (listMap.get(FinBalanceItemConst.무형자산합계) != null) totalAmt = totalAmt.add((listMap.get(FinBalanceItemConst.무형자산합계)).getFinAmt());
		if (listMap.get(FinBalanceItemConst.기타비유동자산합계) != null) totalAmt = totalAmt.add((listMap.get(FinBalanceItemConst.기타비유동자산합계)).getFinAmt());
		
		resultVo.setFinAmt(new BigDecimal(totalAmt.toString()));
		listMap.put(FinBalanceItemConst.비유동자산총합계, resultVo);
		
		//6) 유동 부채 총계
		keys = listMap.keySet();
		itr = keys.iterator();
		itemVo = null;
		resultVo = null;
		totalAmt = BigDecimal.ZERO;
		while (itr.hasNext()) {
			String key = itr.next();
			if (key.length() >= 13) {
				if (key.substring(0,11).equals(FinBalanceItemConst.유동부채합계)) {
					itemVo = listMap.get(key);
					if (itemVo != null) {
						totalAmt = totalAmt.add(itemVo.getFinAmt());
					}
				}
			}
		}
		resultVo = new EntpFinItemVo();
		if (itemVo != null) {
			resultVo = (EntpFinItemVo) beanUtil.toCopy(itemVo, resultVo);
		}
		resultVo.setBzn(domain.getBzn());
		resultVo.setStacYy(domain.getStacYy());
		resultVo.setUserid(domain.getUserid());
		resultVo.setAlyid(domain.getAlyid());
		
		resultVo.setFinSmdcd(FinBalanceItemConst.유동부채합계);
		resultVo.setFinSmdcdNm("유동부채합계");
		resultVo.setFinAmt(new BigDecimal(totalAmt.toString()));
		listMap.put(FinBalanceItemConst.유동부채합계, resultVo);
		
		///////////////////////////////////////////////////////////////////////////////////
		//유동부채 총합계
		///////////////////////////////////////////////////////////////////////////////////
		resultVo = new EntpFinItemVo();
		totalAmt = BigDecimal.ZERO;
		if (itemVo != null) {
			resultVo = (EntpFinItemVo) beanUtil.toCopy(itemVo, resultVo);
		}
		resultVo.setBzn(domain.getBzn());
		resultVo.setStacYy(domain.getStacYy());
		resultVo.setUserid(domain.getUserid());
		resultVo.setAlyid(domain.getAlyid());
		
		resultVo.setFinMdvcd(FinBalanceItemConst.유동부채총합계);
		resultVo.setFinMdvcdNm("유동부채총합계");
		resultVo.setFinSmdcd(FinBalanceItemConst.유동부채총합계);
		resultVo.setFinSmdcdNm("유동부채총합계");
		
		if (listMap.get(FinBalanceItemConst.유동부채합계) != null) totalAmt = totalAmt.add((listMap.get(FinBalanceItemConst.유동부채합계)).getFinAmt());
		
		resultVo.setFinAmt(new BigDecimal(totalAmt.toString()));
		listMap.put(FinBalanceItemConst.유동부채총합계, resultVo);		
		
		//7) 비유동 부채 총계
		keys = listMap.keySet();
		itr = keys.iterator();
		itemVo = null;
		resultVo = null;
		totalAmt = BigDecimal.ZERO;
		while (itr.hasNext()) {
			String key = itr.next();
			if (key.length() >= 13) {
				if (key.substring(0,11).equals(FinBalanceItemConst.비유동부채합계)) {
					itemVo = listMap.get(key);
					if (itemVo != null) {
						totalAmt = totalAmt.add(itemVo.getFinAmt());
					}
				}
			}
		}
		resultVo = new EntpFinItemVo();
		if (itemVo != null) {
			resultVo = (EntpFinItemVo) beanUtil.toCopy(itemVo, resultVo);
		}
		
		resultVo.setBzn(domain.getBzn());
		resultVo.setStacYy(domain.getStacYy());
		resultVo.setUserid(domain.getUserid());
		resultVo.setAlyid(domain.getAlyid());
		
		resultVo.setFinSmdcd(FinBalanceItemConst.비유동부채합계);
		resultVo.setFinSmdcdNm("비유동부채합계");
		resultVo.setFinAmt(new BigDecimal(totalAmt.toString()));
		listMap.put(FinBalanceItemConst.비유동부채합계, resultVo);
		
		///////////////////////////////////////////////////////////////////////////////////
		//비유동부채합계
		///////////////////////////////////////////////////////////////////////////////////
		resultVo = new EntpFinItemVo();
		totalAmt = BigDecimal.ZERO;
		if (itemVo != null) {
			resultVo = (EntpFinItemVo) beanUtil.toCopy(itemVo, resultVo);
		}
		
		resultVo.setBzn(domain.getBzn());
		resultVo.setStacYy(domain.getStacYy());
		resultVo.setUserid(domain.getUserid());
		resultVo.setAlyid(domain.getAlyid());
		
		resultVo.setFinMdvcd(FinBalanceItemConst.비유동부채총합계);
		resultVo.setFinMdvcdNm("비유동부채총합계");
		resultVo.setFinSmdcd(FinBalanceItemConst.비유동부채총합계);
		resultVo.setFinSmdcdNm("비유동부채총합계");
		
		if (listMap.get(FinBalanceItemConst.비유동부채합계) != null) totalAmt = totalAmt.add((listMap.get(FinBalanceItemConst.비유동부채합계)).getFinAmt());
		
		resultVo.setFinAmt(new BigDecimal(totalAmt.toString()));
		listMap.put(FinBalanceItemConst.비유동부채총합계, resultVo);				
		
		//8) 자본 총계
		keys = listMap.keySet();
		itr = keys.iterator();
		itemVo = null;
		resultVo = null;
		totalAmt = BigDecimal.ZERO;
		while (itr.hasNext()) {
			String key = itr.next();
			if (key.length() >= 13) {
				if (key.substring(0,11).equals(FinBalanceItemConst.자본합계)) {
					itemVo = listMap.get(key);
					if (itemVo != null) {
						totalAmt = totalAmt.add(itemVo.getFinAmt());
					}
				}
			}
		}
		resultVo = new EntpFinItemVo();
		if (itemVo != null) {
			resultVo = (EntpFinItemVo) beanUtil.toCopy(itemVo, resultVo);
		}
		
		resultVo.setBzn(domain.getBzn());
		resultVo.setStacYy(domain.getStacYy());
		resultVo.setUserid(domain.getUserid());
		resultVo.setAlyid(domain.getAlyid());
		
		resultVo.setFinSmdcd(FinBalanceItemConst.자본합계);
		resultVo.setFinSmdcdNm("자본합계");
		resultVo.setFinAmt(new BigDecimal(totalAmt.toString()));
		listMap.put(FinBalanceItemConst.자본합계, resultVo);
		
		///////////////////////////////////////////////////////////////////////////////////
		//자본 총 합계
		///////////////////////////////////////////////////////////////////////////////////
		resultVo = new EntpFinItemVo();
		totalAmt = BigDecimal.ZERO;
		if (itemVo != null) {
			resultVo = (EntpFinItemVo) beanUtil.toCopy(itemVo, resultVo);
		}
		
		resultVo.setBzn(domain.getBzn());
		resultVo.setStacYy(domain.getStacYy());
		resultVo.setUserid(domain.getUserid());
		resultVo.setAlyid(domain.getAlyid());
		
		resultVo.setFinMdvcd(FinBalanceItemConst.자본총합계);
		resultVo.setFinMdvcdNm("자본총합계");
		resultVo.setFinSmdcd(FinBalanceItemConst.자본총합계);
		resultVo.setFinSmdcdNm("자본총합계");
		
		if (listMap.get(FinBalanceItemConst.자본합계) != null) totalAmt = totalAmt.add((listMap.get(FinBalanceItemConst.자본합계)).getFinAmt());
		
		resultVo.setFinAmt(new BigDecimal(totalAmt.toString()));
		listMap.put(FinBalanceItemConst.자본총합계, resultVo);			
		
		//////////////////////////////////////////////////////////
		// PL
		//////////////////////////////////////////////////////////
		//0) 영업손익
		//1) 판매비와 관리비 총계
		keys = listMap.keySet();
		itr = keys.iterator();
		itemVo = null;
		resultVo = null;
		totalAmt = BigDecimal.ZERO;
		while (itr.hasNext()) {
			String key = itr.next();
			if (key.length() >= 13) {
				if (key.substring(0,11).equals(FinIncomeItemConst.판매와관리비합계)) {
					itemVo = listMap.get(key);
					if (itemVo != null) {
						totalAmt = totalAmt.add(itemVo.getFinAmt());
					}
				}
			}
		}
		resultVo = new EntpFinItemVo();
		if (itemVo != null) {
			resultVo = (EntpFinItemVo) beanUtil.toCopy(itemVo, resultVo);
		}
		
		resultVo.setBzn(domain.getBzn());
		resultVo.setStacYy(domain.getStacYy());
		resultVo.setUserid(domain.getUserid());
		resultVo.setAlyid(domain.getAlyid());
		
		resultVo.setFinSmdcd(FinIncomeItemConst.판매와관리비합계);
		resultVo.setFinSmdcdNm("판매와관리비합계");
		resultVo.setFinAmt(new BigDecimal(totalAmt.toString()));
		listMap.put(FinIncomeItemConst.판매와관리비합계, resultVo);
		
		resultVo = new EntpFinItemVo();
		resultVo.setBzn(domain.getBzn());
		resultVo.setStacYy(domain.getStacYy());
		resultVo.setUserid(domain.getUserid());
		resultVo.setAlyid(domain.getAlyid());
		resultVo.setFinSmdcd(FinIncomeItemConst.영업손익);
		resultVo.setFinSmdcdNm("영업손익");
		
		totalAmt = BigDecimal.ZERO;
		
		if (listMap.get(FinIncomeItemConst.매출액) != null) totalAmt = (listMap.get(FinIncomeItemConst.매출액)).getFinAmt();
		if (listMap.get(FinIncomeItemConst.매출원가) != null) totalAmt = totalAmt.subtract((listMap.get(FinIncomeItemConst.매출원가)).getFinAmt());
		if (listMap.get(FinIncomeItemConst.판매와관리비합계) != null) totalAmt = totalAmt.subtract((listMap.get(FinIncomeItemConst.판매와관리비합계)).getFinAmt());
		resultVo.setFinAmt(new BigDecimal(totalAmt.toString()));
		listMap.put(FinIncomeItemConst.영업손익, resultVo);
		
		//2) 영업외 수익 총계
		keys = listMap.keySet();
		itr = keys.iterator();
		itemVo = null;
		resultVo = null;
		totalAmt = BigDecimal.ZERO;
		while (itr.hasNext()) {
			String key = itr.next();
			if (key.length() >= 13) {
				if (key.substring(0,11).equals(FinIncomeItemConst.영업외수익합계)) {
					itemVo = listMap.get(key);
					if (itemVo != null) {
						totalAmt = totalAmt.add(itemVo.getFinAmt());
					}
				}
			}
		}
		resultVo = new EntpFinItemVo();
		if (itemVo != null) {
			resultVo = (EntpFinItemVo) beanUtil.toCopy(itemVo, resultVo);
		}
		
		resultVo.setBzn(domain.getBzn());
		resultVo.setStacYy(domain.getStacYy());
		resultVo.setUserid(domain.getUserid());
		resultVo.setAlyid(domain.getAlyid());
		
		resultVo.setFinSmdcd(FinIncomeItemConst.영업외수익합계);
		resultVo.setFinSmdcdNm("영업외수익합계");
		resultVo.setFinAmt(new BigDecimal(totalAmt.toString()));
		listMap.put(FinIncomeItemConst.영업외수익합계, resultVo);
		
		//3) 영업외 비용 총계
		keys = listMap.keySet();
		itr = keys.iterator();
		itemVo = null;
		resultVo = null;
		totalAmt = BigDecimal.ZERO;
		while (itr.hasNext()) {
			String key = itr.next();
			if (key.length() >= 13) {
				if (key.substring(0,11).equals(FinIncomeItemConst.영업외비용합계)) {
					itemVo = listMap.get(key);
					if (itemVo != null) {
						totalAmt = totalAmt.add(itemVo.getFinAmt());
					}
				}
			}
		}
		resultVo = new EntpFinItemVo();
		if (itemVo != null) {
			resultVo = (EntpFinItemVo) beanUtil.toCopy(itemVo, resultVo);
		}
		
		resultVo.setBzn(domain.getBzn());
		resultVo.setStacYy(domain.getStacYy());
		resultVo.setUserid(domain.getUserid());
		resultVo.setAlyid(domain.getAlyid());
		
		resultVo.setFinSmdcd(FinIncomeItemConst.영업외비용합계);
		resultVo.setFinSmdcdNm("영업외비용합계");
		resultVo.setFinAmt(new BigDecimal(totalAmt.toString()));
		listMap.put(FinIncomeItemConst.영업외비용합계, resultVo);
		//////////////////////////////////////////////////////////
		// COST
		//////////////////////////////////////////////////////////		
		//1) 경비 총계
		keys = listMap.keySet();
		itr = keys.iterator();
		itemVo = null;
		resultVo = null;
		totalAmt = BigDecimal.ZERO;
		while (itr.hasNext()) {
			String key = itr.next();
			if (key.length() >= 13) {
				if (key.substring(0,11).equals(FinCostConst.경비합계)) {
					itemVo = listMap.get(key);
					if (itemVo != null) {
						totalAmt = totalAmt.add(itemVo.getFinAmt());
					}
				}
			}
		}
		resultVo = new EntpFinItemVo();
		if (itemVo != null) {
			resultVo = (EntpFinItemVo) beanUtil.toCopy(itemVo, resultVo);
		}
		
		resultVo.setBzn(domain.getBzn());
		resultVo.setStacYy(domain.getStacYy());
		resultVo.setUserid(domain.getUserid());
		resultVo.setAlyid(domain.getAlyid());
		
		resultVo.setFinSmdcd(FinCostConst.경비합계);
		resultVo.setFinSmdcdNm("경비합계");
		resultVo.setFinAmt(new BigDecimal(totalAmt.toString()));
		listMap.put(FinCostConst.경비합계, resultVo);
		
		//2) 총제조비용 (경비 + 재료비 + 노무비)
		keys = listMap.keySet();
		itr = keys.iterator();
		itemVo = null;
		resultVo = null;
		while (itr.hasNext()) {
			String key = itr.next();
			if (key.length() >= 13) {
				if (key.substring(0,11).equals(FinCostConst.당기총제조비용합계)) {
					itemVo = listMap.get(key);
					if (itemVo != null) {
						totalAmt = totalAmt.add(itemVo.getFinAmt());
					}
				}
			}
		}
		resultVo = new EntpFinItemVo();
		if (itemVo != null) {
			resultVo = (EntpFinItemVo) beanUtil.toCopy(itemVo, resultVo);
		}
		
		resultVo.setBzn(domain.getBzn());
		resultVo.setStacYy(domain.getStacYy());
		resultVo.setUserid(domain.getUserid());
		resultVo.setAlyid(domain.getAlyid());
		
		resultVo.setFinSmdcd(FinCostConst.당기총제조비용합계);
		resultVo.setFinSmdcdNm("당기총제조비용합계");
		resultVo.setFinAmt(new BigDecimal(totalAmt.toString()));
		listMap.put(FinCostConst.당기총제조비용합계, resultVo);
		
		/////////////////////////////////////////////////////////////////////////
		// 부가가치
		/////////////////////////////////////////////////////////////////////////
		//1) 인건비합계
		keys = listMap.keySet();
		itr = keys.iterator();
		itemVo = null;
		resultVo = null;
		totalAmt = BigDecimal.ZERO;
		while (itr.hasNext()) {
			String key = itr.next();
			if (key.substring(0,9).equals(FinAddedValueItemConst.인건비합계)) {
				itemVo = listMap.get(key);
				if (itemVo != null) {
					totalAmt = totalAmt.add(itemVo.getFinAmt());
				}
			}
		}
		resultVo = new EntpFinItemVo();
		if (itemVo != null) {
			resultVo = (EntpFinItemVo) beanUtil.toCopy(itemVo, resultVo);
		}
		
		resultVo.setBzn(domain.getBzn());
		resultVo.setStacYy(domain.getStacYy());
		resultVo.setUserid(domain.getUserid());
		resultVo.setAlyid(domain.getAlyid());
		
		resultVo.setFinSmdcd(FinAddedValueItemConst.인건비합계);
		resultVo.setFinSmdcdNm("인건비합계");
		resultVo.setFinAmt(new BigDecimal(totalAmt.toString()));
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
		
		resultVo.setBzn(domain.getBzn());
		resultVo.setStacYy(domain.getStacYy());
		resultVo.setUserid(domain.getUserid());
		resultVo.setAlyid(domain.getAlyid());
		
		resultVo.setFinSmdcd(FinAddedValueItemConst.금융비용합계);
		resultVo.setFinSmdcdNm("금융비용합계");
		resultVo.setFinAmt(new BigDecimal(totalAmt.toString()));
		listMap.put(FinAddedValueItemConst.금융비용합계, resultVo);	
		
		//3) 임차료 합계		
		keys = listMap.keySet();
		itr = keys.iterator();
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
		resultVo.setBzn(domain.getBzn());
		resultVo.setStacYy(domain.getStacYy());
		resultVo.setUserid(domain.getUserid());
		resultVo.setAlyid(domain.getAlyid());
		
		resultVo.setFinSmdcd(FinAddedValueItemConst.임차료합계);
		resultVo.setFinSmdcdNm("임차료합계");
		resultVo.setFinAmt(new BigDecimal(totalAmt.toString()));
		listMap.put(FinAddedValueItemConst.임차료합계, resultVo);
		
		//4) 부가가치 합계
		resultVo = new EntpFinItemVo();
		totalAmt = BigDecimal.ZERO;
		if (itemVo != null) {
			resultVo = (EntpFinItemVo) beanUtil.toCopy(itemVo, resultVo);
		}
		
		resultVo.setBzn(domain.getBzn());
		resultVo.setStacYy(domain.getStacYy());
		resultVo.setUserid(domain.getUserid());
		resultVo.setAlyid(domain.getAlyid());
		
		resultVo.setFinMdvcd(FinAddedValueItemConst.부가가치합계);
		resultVo.setFinMdvcdNm("부가가치합계");
		resultVo.setFinSmdcd(FinAddedValueItemConst.부가가치합계);
		resultVo.setFinSmdcdNm("부가가치합계");
		
		if (listMap != null) {
			if (listMap.get(FinAddedValueItemConst.법인세차감전순이익) != null) totalAmt = totalAmt.add((listMap.get(FinAddedValueItemConst.법인세차감전순이익)).getFinAmt());
			if (listMap.get(FinAddedValueItemConst.인건비합계) != null) totalAmt = totalAmt.add((listMap.get(FinAddedValueItemConst.인건비합계)).getFinAmt());
			if (listMap.get(FinAddedValueItemConst.금융비용합계) != null) totalAmt = totalAmt.add((listMap.get(FinAddedValueItemConst.금융비용합계)).getFinAmt());
			if (listMap.get(FinAddedValueItemConst.임차료합계) != null) totalAmt = totalAmt.add((listMap.get(FinAddedValueItemConst.임차료합계)).getFinAmt());
			if (listMap.get(FinAddedValueItemConst.조세공과) != null) totalAmt = totalAmt.add((listMap.get(FinAddedValueItemConst.조세공과)).getFinAmt());
			if (listMap.get(FinAddedValueItemConst.감가상각비) != null) totalAmt = totalAmt.add((listMap.get(FinAddedValueItemConst.감가상각비)).getFinAmt());
		}
		
		resultVo.setFinAmt(new BigDecimal(totalAmt.toString()));
		listMap.put(FinAddedValueItemConst.부가가치합계, resultVo);
		
		
		
		return listMap;		
		
	}
	
	public void AnalysisFinDtRgsn(AlyFnamDtDomain domain) throws Exception {
		analysisFnamDtDao.insert(domain);
	}
	
	public void AnalysisFinDtRgsn(List<AlyFnamDtDomain> domainList) throws Exception {
		for (AlyFnamDtDomain alys : domainList) {
			analysisFnamDtDao.insert(alys);
		}
	}
	
	public void AnalysisFinDtMdfc(AlyFnamDtDomain domain) throws Exception {
		analysisFnamDtDao.insert(domain);
	}
	
	public void AnalysisFinDtMdfc(List<AlyFnamDtDomain> domainList) throws Exception {
		for (AlyFnamDtDomain alys : domainList) {
			analysisFnamDtDao.insert(alys);
		}
	}

	//2) 분석대상 재무정보 등록
	public void insertInfo(List<AlyFnamInfoDomain> domainList) throws Exception {
		
		BeanUtils beanUtil = new BeanUtils();
		FinFnamInfoDomain finFnamInfo = null;
		AlyFnamDtDomain altFnamDt = null;
		List<FinFnamInfoDomain> finFnameList = null;
		
		for (AlyFnamInfoDomain aly : domainList) {
			
			//1) 기본정보 등록
			aly.setDelyn("N");
			aly.setFrrgUserId(aly.getUserid());
			aly.setFrrgTs(FasDateUtil.getCurrentDate());
			aly.setLastUserId(aly.getUserid());
			aly.setLastTs(FasDateUtil.getCurrentDate());
			
			System.out.println("Aly >>> " + aly.getBzn());
			
			logger.debug("$$$$$$$$$$$$$$$$$$$$$$$$$");
			
			beanUtil.toString(aly);
			
			analysisFnamInfoDao.insert(aly);
			

			 
			finFnamInfo = new FinFnamInfoDomain();
			finFnamInfo.setUserid(aly.getUserid());
			finFnamInfo.setBzn(aly.getBzn());
			finFnamInfo.setStacYy(aly.getStacYy());
			
			logger.debug("$$$$$$$$$$$$$$$$$$$$$$$$$111111111111");
			logger.debug("bzn >> " + finFnamInfo.getBzn());
			logger.debug("userid >> " + finFnamInfo.getUserid());
			
			finFnameList = finFnamInfoDao.selectFinFnamInfoList(finFnamInfo);
			
			if (finFnameList != null) {
				logger.debug("#>>>> " + finFnameList.size());
			} else {
				logger.debug("finFnameList is null");
			}
			
			for (FinFnamInfoDomain finFnamVo : finFnameList) {
			
				altFnamDt = (AlyFnamDtDomain) beanUtil.toCopy(finFnamVo, new AlyFnamDtDomain());
				
				//2) 상세 등록
				altFnamDt.setAlyid(aly.getAlyid());
				altFnamDt.setFrrgUserId(aly.getUserid());
				altFnamDt.setFrrgTs(FasDateUtil.getCurrentDate());
				altFnamDt.setLastUserId(aly.getUserid());
				altFnamDt.setLastTs(FasDateUtil.getCurrentDate());
				
				logger.debug("################################");
				logger.debug("alyid >> " + altFnamDt.getAlyid());
				logger.debug("bzn >> " + altFnamDt.getBzn());
				logger.debug("userid >> " + altFnamDt.getUserid());
				logger.debug("stacyy >> " + altFnamDt.getStacYy());
				logger.debug("finsmdcd >> " + altFnamDt.getFinSmdcd());
				logger.debug("finamt >> " + altFnamDt.getFinAmt());
			
				analysisFnamDtDao.insert(altFnamDt);
			
			}
			

		}
		
	}
	
	//3) 분석대상 재무정보 수정
	public void updateInfo(AlyFnamInfoDomain domain, List<AlyFnamInfoDomain> domainList) throws Exception {
		
		System.out.println("^^^^^^^ updateInfo Start ^^^^^^ ");
		
		deleteInfo(domain);
		
		System.out.println("^^^^^^^ insertInfo Start ^^^^^^ ");
		
		//등록
		insertInfo(domainList);
		
	}
	
	//4) 분석대상 재무정보 삭제
	public void deleteInfo(AlyFnamInfoDomain domain) throws Exception {
		
		AlyFnamDtDomain altFnamDt = new AlyFnamDtDomain();
		AlyFnamInfoDomain aly = new AlyFnamInfoDomain();
		BeanUtils beanUtil = new BeanUtils();
		
		aly.setAlyid(domain.getAlyid());
		aly.setBzn(domain.getBzn());
		aly.setUserid(domain.getUserid());
		
		List<AlyFnamInfoDomain> alyFnamList = analysisFnamInfoDao.selectList(aly);
		
		System.out.println("^^^^^^^ deleteInfo Start ^^^^^^ ");
		
		analysisFnamInfoDao.delete(alyFnamList);

		System.out.println("^^^^^^^ deleteInfo end1 ^^^^^^ ");
		
		altFnamDt.setAlyid(domain.getAlyid());
		altFnamDt.setBzn(domain.getBzn());
		altFnamDt.setUserid(domain.getUserid());
		
		List<AlyFnamDtDomain> alyFnamDtList = analysisFnamDtDao.selectList01(altFnamDt);
		
		analysisFnamDtDao.delete(alyFnamDtList);	
		
		System.out.println("^^^^^^^ deleteInfo end2 ^^^^^^ ");
		
	}
	
	
}
