package com.fas.model.svy;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Component;

import com.fas.model.svy.dao.SvyBaseInfoDao;
import com.fas.model.svy.dao.SvyItemDetailInfoDao;
import com.fas.model.svy.dao.SvyItemInfoDao;
import com.fas.model.svy.dao.SvyReponseInfoDao;
import com.fas.model.svy.dao.SvyResultInfoDao;
import com.fas.model.svy.domain.SvyItemDetailInfoDomain;
import com.fas.model.svy.domain.SvyItemInfoDomain;
import com.fas.svy.formVo.SurveyFormVo;

@Component("SvyManager")
public class SvyManager {

	@Resource(name="SvyBaseInfoDao")
	private SvyBaseInfoDao svyBaseInfoDao;
	
	@Resource(name="SvyItemDetailInfoDao")
	private SvyItemDetailInfoDao svyItemDetailInfoDao;
	
	@Resource(name="SvyItemInfoDao")
	private SvyItemInfoDao svyItemInfoDao;
	
	@Resource(name="SvyReponseInfoDao")
	private SvyReponseInfoDao svyReponseInfoDao;
	
	@Resource(name="SvyResultInfoDao")
	private SvyResultInfoDao svyResultInfoDao;
	
	public Map svyItemList(SurveyFormVo formVo) throws Exception {
		
		Map resultMap = new LinkedHashMap();		
		List<Map> itmList = new ArrayList<Map>(); 
		List<Map> svyItmList = null;
		Map itemMap = null;
		Map svyItemMap = null;
		
		SvyItemInfoDomain domain = new SvyItemInfoDomain();
		domain.setSvyId(formVo.getSvyId());
		
		SvyItemDetailInfoDomain detailDomain = new SvyItemDetailInfoDomain();
		detailDomain.setSvyId(formVo.getSvyId());
		
		List<SvyItemInfoDomain> svyItemInfoList = svyItemInfoDao.selectSvyItemList(domain);
		
		List<SvyItemDetailInfoDomain> svyItemDetailInfoList = null;
		
		resultMap.put("svyId", formVo.getSvyId());
		resultMap.put("itmList", itmList);
		
		if (svyItemInfoList != null && svyItemInfoList.size() > 0) {
			for (SvyItemInfoDomain itemInfo : svyItemInfoList) {
				itemMap = new LinkedHashMap();
				itemMap.put("svyItmId", itemInfo.getSvyItmId());
				itemMap.put("svyItmNm", itemInfo.getSvyItmNm());
				
				detailDomain.setSvyItmId(itemInfo.getSvyItmId());
				svyItemDetailInfoList = svyItemDetailInfoDao.selectSvyItemDetailList(detailDomain);
				svyItmList = new ArrayList<Map>();
				for (SvyItemDetailInfoDomain detailInfo : svyItemDetailInfoList) {
					svyItemMap = new LinkedHashMap();
					svyItemMap.put("svyItmDtId", detailInfo.getSvyItmDtId());
					svyItemMap.put("svyItmDtNm", detailInfo.getSvyItmDtNm());
					svyItmList.add(svyItemMap);
				}
				
				itemMap.put("svyItmList", svyItmList);				
				itmList.add(itemMap);
			}
		}
		
		return resultMap;
	}
	
	public Map svyRepSave(SurveyFormVo formVo) throws Exception {
	
		Map resultMap = new LinkedHashMap();
		
		return resultMap;
	}
	
	public Map svyRepHisList(SurveyFormVo formVo) throws Exception {
		
		Map resultMap = new HashMap();
		
		return resultMap;
	}
	
}
