package com.fas.model.fin;

import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Component;

import com.fas.cmmn.util.FasDateUtil;
import com.fas.cmmn.util.FasPagingUtil;
import com.fas.model.fin.dao.CorporationDao;
import com.fas.model.fin.domain.CorporationDomain;
import com.fas.web.cmmn.exception.BizException;
import com.fas.web.cmmn.util.HttpUtil;

@Component("CoporationManager")
public class CoporationManager {
	
	@Resource(name="CorporationDao")	
	private CorporationDao dao;


	//저장
	public void corporationRgsn(CorporationDomain domain) throws Exception {
		if (domain.getFrrgTs() == null) domain.setFrrgTs(FasDateUtil.getCurrentDate());
		if (domain.getLastTs() == null) domain.setLastTs(FasDateUtil.getCurrentDate());
		
		CorporationDomain be = dao.selectCorporation(domain);
		
		if (be != null) throw new BizException("동일한 사업자번호 등록된 내용이 존재합니다.");
		
		dao.insert(domain);
	}
	
	//수정
	public void corporationMdfc(CorporationDomain domain) throws Exception {
		if (domain.getLastTs() == null) domain.setLastTs(FasDateUtil.getCurrentDate());
		
		CorporationDomain be = dao.selectCorporation(domain);
		
		if (be == null) throw new BizException("변경할 기업 정보가 존재하지 않습니다.");
		
		domain.setFrrgTs(be.getFrrgTs());
		domain.setFrrgUserId(be.getFrrgUserId());
		
		dao.update(domain);
	}
	
	//삭제
	public void corporationDel(CorporationDomain domain) throws Exception {
		
		CorporationDomain be = dao.selectCorporation(domain);
		
		if (be == null) throw new BizException("삭제할 기업 정보가 존재하지 않습니다.");
		
		if (!be.getUserid().trim().equals(domain.getUserid().trim())) {
			throw new BizException("삭제할 권한이 없습니다.");
		}
		
		dao.delete(domain);
	}	
	
	//조회
	public List<CorporationDomain> corporationList(CorporationDomain domain) throws Exception {
		return dao.selectCorporationList(domain);
	}
	
	public List<CorporationDomain> corporationList(CorporationDomain domain, FasPagingUtil paging) throws Exception {
		return dao.selectCorporationList(domain, paging);
	}	
	
	public CorporationDomain corporationInfo(CorporationDomain domain) throws Exception {
		return dao.selectCorporation(domain);
	}
	
	//조회
	public List<CorporationDomain> corporationAllList(CorporationDomain domain) throws Exception {
		return dao.selectCorporationAllList(domain);
	}
	
	//조회
	public List<CorporationDomain> corporationAllList(CorporationDomain domain, FasPagingUtil paging) throws Exception {
		return dao.selectCorporationAllList(domain, paging);
	}
	
}
