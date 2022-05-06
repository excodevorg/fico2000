package com.fas.model.fin;

import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Component;

import com.fas.cmmn.util.FasDateUtil;
import com.fas.cmmn.util.FasPagingUtil;
import com.fas.model.fin.dao.AnalysisConDao;
import com.fas.model.fin.domain.AnalysisConDomain;

@Component("AnalysisConManager")
public class AnalysisConManager {

	@Resource(name="AnalysisConDao")
	private AnalysisConDao analysisConDao;
	
	//1) 분석 목록 Manager List
	public List<AnalysisConDomain> analysisConList(AnalysisConDomain domain) throws Exception {
		return analysisConDao.selectAnalysisConBznUseridList(domain);
	}

	//1) 분석 목록 Manager List
	public List<AnalysisConDomain> analysisConList(AnalysisConDomain domain, FasPagingUtil paging) throws Exception {
		return analysisConDao.selectAnalysisConBznUseridList(domain, paging);
	}
	
	//1) 분석 목록 Manager List
	public List<AnalysisConDomain> analysisConBznList(AnalysisConDomain domain) throws Exception {
		return analysisConDao.selectAnalysisConBznList(domain);
	}

	//1) 분석 목록 Manager List
	public List<AnalysisConDomain> analysisConBznList(AnalysisConDomain domain, FasPagingUtil paging) throws Exception {
		return analysisConDao.selectAnalysisConBznList(domain, paging);
	}
	
	//1) 분석 목록 Manager List
	public List<AnalysisConDomain> analysisUserConList(AnalysisConDomain domain) throws Exception {
		return analysisConDao.selectAnalysisConUseridList(domain);
	}
	
	public List<AnalysisConDomain> analysisUserConList(AnalysisConDomain domain, FasPagingUtil paging) throws Exception {
		return analysisConDao.selectAnalysisConUseridList(domain, paging);
	}	
	
	//1) 분석 목록 Manager All List
	public List<AnalysisConDomain> analysisConAllList(AnalysisConDomain domain) throws Exception {
		return analysisConDao.selectAnalysisConAllList(domain);
	}
	
	//1) 분석 목록 Manager All List
	public List<AnalysisConDomain> analysisConAllList(AnalysisConDomain domain, FasPagingUtil paging) throws Exception {
		return analysisConDao.selectAnalysisConAllList(domain, paging);
	}	
	
	//2) 분석 목록 select
	public AnalysisConDomain analysisInfo(AnalysisConDomain domain) throws Exception {
		return analysisConDao.selectAnalysisCon(domain);
	}
	
	//3) 분석 목록 insert
	public void analysisRgsn(AnalysisConDomain domain) throws Exception {
		if (analysisInfo(domain) != null) {
			domain.setDelyn("Y");
			analysisConDao.update(domain);
		} else {
			domain.setDelyn("N");
			analysisConDao.insert(domain);
		}
	}
	
	//4) 분석 목록 update
	public void analysisMdfc(AnalysisConDomain domain) throws Exception {
		AnalysisConDomain be = analysisInfo(domain);
		
		domain.setFrrgTs(be.getFrrgTs());
		domain.setFrrgUserId(be.getFrrgUserId());
		domain.setDelyn(be.getDelyn());
		domain.setLastTs(FasDateUtil.getCurrentDate());
		
		analysisConDao.update(domain);
	}
	
	//5) 분석 목록 delete
	public void analysisDel(AnalysisConDomain domain) throws Exception {
		domain.setDelyn("Y");
		domain.setLastTs(FasDateUtil.getCurrentDate());
		analysisConDao.update(domain);
	}
	
}
