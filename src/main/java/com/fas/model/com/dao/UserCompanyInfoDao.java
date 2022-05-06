package com.fas.model.com.dao;

import javax.annotation.Resource;

import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.fas.cmmn.util.FasDateUtil;
import com.fas.model.com.domain.UserCompanyInfoDomain;
import com.fas.model.repository.UserCompanyInfoRepository;
import com.fas.web.cmmn.util.HttpUtil;

@Repository("UserCompanyInfoDao")
public class UserCompanyInfoDao {

	/** Repository */
    @Resource(name="userCompanyInfoRepository")
    private UserCompanyInfoRepository userCompanyInfoRepository;
    
    @Resource(name="HttpUtil")
	private HttpUtil httpUtil;
    
    public UserCompanyInfoDomain select(UserCompanyInfoDomain domain) throws Exception {
    	return userCompanyInfoRepository.findByBzn(domain.getBzn());
    }
    
    //등록 및 수정
    @Transactional
    public synchronized void save(UserCompanyInfoDomain param) throws Exception {
    	
    	String userid = httpUtil.getSessionUserId();
    	if(select(param) == null) {
    		param.setFrrgts(FasDateUtil.getCurrentDate());
    		param.setFrrgUserId(userid);
    	}
    	param.setLastUserId(userid);
    	param.setLastts(FasDateUtil.getCurrentDate());
    	userCompanyInfoRepository.save(param);
    }
	
}
