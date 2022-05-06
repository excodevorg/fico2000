package com.fas.model.com.dao;

import java.util.ArrayList;
import java.util.List;

import javax.annotation.Resource;

import org.springframework.data.domain.Page;
import org.springframework.stereotype.Repository;

import com.fas.cmmn.util.FasPagingUtil;
import com.fas.cmmn.util.KeyGenerator;
import com.fas.model.com.domain.LcteInfoDomain;
import com.fas.model.repository.LcteInfoRepository;
import com.fas.web.cmmn.util.StringUtil;

@Repository("LcteInfoDao")
public class LcteInfoDao {
	
	/** Repository */
    @Resource(name="lcteInfoRepository")
	private LcteInfoRepository lcteInfoRepository;
    
	public void insert(LcteInfoDomain param) {
		param.setLcteUnqId(KeyGenerator.getKeyByDateFormat());
		lcteInfoRepository.saveAndFlush(param);
	}
	
	public void insert(List<LcteInfoDomain> param) {
		lcteInfoRepository.save(param);
	}
	
	public void update(LcteInfoDomain param) {
		lcteInfoRepository.save(param);
	}
	
	public void update(List<LcteInfoDomain> param) {
		lcteInfoRepository.save(param);
	}
	
	public List<LcteInfoDomain> selectLcteNmList(LcteInfoDomain param, FasPagingUtil paging) {
		paging.setSort("lcteUnqId", FasPagingUtil.DESC);
    	paging.setSort("frrgts", FasPagingUtil.DESC);
		return lcteInfoRepository.findByLcteNmContaining(param.getLcteNm(),paging.getPagingRequest());
	}
	
	public List<LcteInfoDomain> selectAllList(FasPagingUtil paging) {
		paging.setSort("lcteUnqId", FasPagingUtil.DESC);
    	paging.setSort("frrgts", FasPagingUtil.DESC);
    	Page<LcteInfoDomain> pageList = lcteInfoRepository.findAll(paging.getPagingRequest());
    	List<LcteInfoDomain> resultList = new ArrayList<LcteInfoDomain>();
    	
    	if (pageList != null) resultList = pageList.getContent();
    	
		return resultList;
	}
	
	public LcteInfoDomain select(LcteInfoDomain param) {
		return lcteInfoRepository.findByLcteUnqId(param.getLcteUnqId());
	}
	
	public void delete(LcteInfoDomain param) {
		lcteInfoRepository.delete(param);
	}
	
	public void delete(List<LcteInfoDomain> param) {
		lcteInfoRepository.delete(param);
	}
	
	public int totalCnt(String lcteNm) throws Exception {
		if (StringUtil.isEmpty(lcteNm)) {
    		return (int) lcteInfoRepository.count();
    	} else {
    		List<LcteInfoDomain> arrList = lcteInfoRepository.findByLcteNmContaining(lcteNm);
    		if (arrList == null) {return 0;} else {
    			return arrList.size();
    		}
    	}
	}
	
}
