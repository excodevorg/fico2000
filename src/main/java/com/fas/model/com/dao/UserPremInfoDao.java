package com.fas.model.com.dao;

import javax.annotation.Resource;

import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.fas.cmmn.util.FasDateUtil;
import com.fas.model.com.domain.UserPremInfoDomain;
import com.fas.model.repository.UserPremInfoRepository;
import com.fas.web.cmmn.util.HttpUtil;

@Repository("UserPremInfoDao")
public class UserPremInfoDao {

	/** Repository */
    @Resource(name="userPremInfoRepository")
    private UserPremInfoRepository userPremInfoRepository;
    
    @Resource(name="HttpUtil")
	private HttpUtil httpUtil;
    
    public UserPremInfoDomain select(UserPremInfoDomain domain) throws Exception {
    	return userPremInfoRepository.findByUserId(domain.getUserId());
    }
    
	//등록 및 수정
    @Transactional
    public synchronized void save(UserPremInfoDomain param) throws Exception {
    	
    	String userid = httpUtil.getSessionUserId();
    	if(select(param) == null) {
    		param.setFrrgts(FasDateUtil.getCurrentDate());
    		param.setFrrgUserId(userid);
    	}
    	param.setLastUserId(userid);
    	param.setLastts(FasDateUtil.getCurrentDate());
    	userPremInfoRepository.save(param);
    }

}
