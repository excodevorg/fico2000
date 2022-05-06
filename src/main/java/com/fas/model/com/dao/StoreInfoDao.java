package com.fas.model.com.dao;

import javax.annotation.Resource;

import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.fas.cmmn.util.FasDateUtil;
import com.fas.model.com.domain.StoreInfoDomain;
import com.fas.model.repository.StoreInfoRepository;
import com.fas.web.cmmn.util.HttpUtil;

@Repository("StoreInfoDao")
public class StoreInfoDao {

	/** Repository */
    @Resource(name="storeInfoRepository")
    private StoreInfoRepository storeInfoRepository;
    
    @Resource(name="HttpUtil")
	private HttpUtil httpUtil;
    
    public StoreInfoDomain select(StoreInfoDomain domain) throws Exception {
    	return storeInfoRepository.findByStoreName(domain.getStoreName());
    }
    
	//등록 및 수정
    @Transactional
    public synchronized void save(StoreInfoDomain param) throws Exception {
    	
    	String userid = httpUtil.getSessionUserId();
    	if(select(param) == null) {
    		param.setFrrgts(FasDateUtil.getCurrentDate());
    		param.setFrrgUserId(userid);
    	}
    	param.setLastUserId(userid);
    	param.setLastts(FasDateUtil.getCurrentDate());
    	storeInfoRepository.save(param);
    }

}
