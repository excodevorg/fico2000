package com.fas.model.com;

import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Component;

import com.fas.cmmn.util.FasDateUtil;
import com.fas.cmmn.util.FasPagingUtil;
import com.fas.model.com.dao.LcteInfoDao;
import com.fas.model.com.domain.LcteInfoDomain;
import com.fas.web.cmmn.util.HttpUtil;
import com.fas.web.cmmn.util.StringUtil;

@Component("LcteInfoManager")
public class LcteInfoManager {

	 @Resource(name="LcteInfoDao")
	 private LcteInfoDao lcteInfoDao;
	 
	 @Resource(name="HttpUtil")
	 private HttpUtil httpUtil;
	 
	//1) 과정명 or 전체 조회
	public List<LcteInfoDomain> lcteInfoInq(LcteInfoDomain domain, FasPagingUtil paging) throws Exception {
		
		if (!StringUtil.isEmpty(domain.getLcteNm())) {
			return lcteInfoDao.selectLcteNmList(domain, paging);
		} else {
			return lcteInfoDao.selectAllList(paging);
		}
		
	}
	
	//2) 강의 상세 조회
	public LcteInfoDomain lcteInfoDtl(LcteInfoDomain domain) throws Exception {
		return lcteInfoDao.select(domain);
	}
	
	//2) 강의 등록
	public void lcteInfoRgsn(LcteInfoDomain domain) throws Exception {
		
		domain.setFrrgts(FasDateUtil.getCurrentDate());
		domain.setLastts(FasDateUtil.getCurrentDate());
		domain.setFrrgUserId(httpUtil.getSessionUserId());
		domain.setLastUserId(httpUtil.getSessionUserId());
		
		lcteInfoDao.insert(domain);
		
	}
	
	//3) 강의 변경
	public void lcteInfoMdfc(LcteInfoDomain domain) throws Exception {
		
		domain.setLastts(FasDateUtil.getCurrentDate());
		domain.setLastUserId(httpUtil.getSessionUserId());
		
		lcteInfoDao.update(domain);
		
	}
	
	//4) 강의 삭제
	public void lcteInfoDel(LcteInfoDomain domain) throws Exception {
		lcteInfoDao.delete(domain);
	}
	
	//5) total Count
	public int totalCnt(LcteInfoDomain domain) throws Exception {
		return lcteInfoDao.totalCnt(domain.getLcteNm());
	}
	
}
