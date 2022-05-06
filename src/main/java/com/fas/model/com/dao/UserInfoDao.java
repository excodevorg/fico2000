package com.fas.model.com.dao;

import java.util.ArrayList;
import java.util.List;

import javax.annotation.Resource;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.hsqldb.lib.StringUtil;
import org.springframework.data.domain.Page;
import org.springframework.stereotype.Repository;

import com.fas.cmmn.service.impl.UserRegisterSvcImpl;
import com.fas.cmmn.util.FasPagingUtil;
import com.fas.model.com.domain.UserInfoDomain;
import com.fas.model.repository.UserInfoRepository;

@Repository("UserInfoDao")
public class UserInfoDao {

	/** Repository */
    @Resource(name="userInfoRepository")
    private UserInfoRepository userInfoRepository;
    
    private static Log logger = LogFactory.getLog(UserInfoDao.class);
    
    public void insert(UserInfoDomain param) throws Exception {
    	
    	logger.debug(">>> dao domain1 >>> " + param.getUserId());
    	logger.debug(">>> dao domain2 >>> " + param.getUserNm());
    	logger.debug(">>> dao domain3 >>> " + param.getFrrgts());
    	
    	userInfoRepository.saveAndFlush(param);
    	
    	logger.debug("&&&&&&&&&&&&&&&&&&&&&&&&&& insert end &&&&&&&&&&&&&&&&&&&&&&&&");
    }
    
    public void update(UserInfoDomain param) throws Exception {
    	userInfoRepository.saveAndFlush(param);
    }
    
    public List<UserInfoDomain> list(UserInfoDomain param) throws Exception {
    	FasPagingUtil paging = new FasPagingUtil();
    	paging.setSort("frrgts", FasPagingUtil.DESC);
    	Page<UserInfoDomain> pageList = userInfoRepository.findByUserNmContaining(param.getUserNm(), paging.getPagingRequest());
    	return pageList.getContent();
    }
    
    public List<UserInfoDomain> list(String userNm) throws Exception {
    	List<UserInfoDomain> pageList = userInfoRepository.findByUserNmContaining(userNm);
    	return pageList;
    }
    
    public UserInfoDomain select(UserInfoDomain param) throws Exception {
    	
    	logger.debug("select Start ******** " + param.getUserId());
    	
    	List<UserInfoDomain> reusltList = new ArrayList<UserInfoDomain>();
    	
    	if (!StringUtil.isEmpty(param.getUserId())) {
    		return userInfoRepository.findByUserId(param.getUserId());
    	} else if (!StringUtil.isEmpty(param.getFacebookid())) {
    		reusltList = userInfoRepository.findByFacebookid(param.getFacebookid());
    	} else if (!StringUtil.isEmpty(param.getGoogleid())) {
    		reusltList = userInfoRepository.findByGoogleid(param.getGoogleid());
    	} else if (!StringUtil.isEmpty(param.getTwitterid())) {
    		reusltList = userInfoRepository.findByTwitterid(param.getTwitterid());
    	} else if (!StringUtil.isEmpty(param.getKakaoid())) {
    		reusltList = userInfoRepository.findByKakaoid(param.getKakaoid());
    	} else {
    		reusltList = null;
    	}
    	
    	if (reusltList == null) {
    		return null;
    	} else {
    		if (reusltList.size() > 0) {
    			return reusltList.get(0);
    		} else {
    			return null;
    		}
    	}
    	
    }
    
    public List<UserInfoDomain> listUserNm(UserInfoDomain param) throws Exception {
    	
    	List<UserInfoDomain> reusltList = new ArrayList<UserInfoDomain>();
    	if (!StringUtil.isEmpty(param.getUserNm())) {
    		reusltList = userInfoRepository.findByUserNmContaining(param.getUserNm());
    	}
    	
    	return reusltList;
    	
    }
    
    public List<UserInfoDomain> listUserNm(UserInfoDomain param, FasPagingUtil paging) throws Exception {
    	paging.setSort("frrgts", FasPagingUtil.DESC);
    	Page<UserInfoDomain> reusltList = null;
    	List<UserInfoDomain> arrList = new ArrayList<UserInfoDomain>();
    	if (!StringUtil.isEmpty(param.getUserNm())) {
    		reusltList = userInfoRepository.findByUserNmContaining(param.getUserNm(), paging.getPagingRequest());
    	}
    	
    	if (reusltList != null) {
    		arrList = reusltList.getContent();
    	}
    	return arrList;
    }
    
    public List<UserInfoDomain> listAll(FasPagingUtil paging) throws Exception {
    	paging.setSort("frrgts", FasPagingUtil.DESC);
    	Page<UserInfoDomain> pageList = userInfoRepository.findAll(paging.getPagingRequest());
    	return pageList.getContent();
    }
    
    public List<UserInfoDomain> listAll() throws Exception {
    	FasPagingUtil paging = new FasPagingUtil(1, Integer.parseInt("" + totalCount()));
    	paging.setSort("frrgts", FasPagingUtil.DESC);
    	Page<UserInfoDomain> pageList = userInfoRepository.findAll(paging.getPagingRequest());
    	return pageList.getContent();
    }
    
    public long totalCount() throws Exception {
    	return userInfoRepository.count();
    }
    
    public void delete(UserInfoDomain param) throws Exception {
    	userInfoRepository.delete(param);
    }
    
	
}
