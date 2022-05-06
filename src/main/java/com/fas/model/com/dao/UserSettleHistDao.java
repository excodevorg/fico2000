package com.fas.model.com.dao;

import java.math.BigDecimal;
import java.util.List;

import javax.annotation.Resource;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.fas.cmmn.util.FasDateUtil;
import com.fas.model.com.domain.UserSettleHistDomain;
import com.fas.model.repository.UserSettleHistRepository;
import com.fas.web.cmmn.util.HttpUtil;

@Repository("UserSettleHistDao")
public class UserSettleHistDao {
	
	private static Log logger = LogFactory.getLog(UserSettleHistDao.class);

	/** Repository */
    @Resource(name="userSettleHistRepository")
    private UserSettleHistRepository userSettleHistRepository;
    
    @Resource(name="HttpUtil")
	private HttpUtil httpUtil;
    
    public List<UserSettleHistDomain> selectByUserId(String userId) throws Exception {
    	return userSettleHistRepository.findByUserId(userId);
    }
    
    public UserSettleHistDomain select(UserSettleHistDomain domain) throws Exception {
    	return userSettleHistRepository.findBySeqNo(domain.getSeqNo());
    }
    
    public UserSettleHistDomain selectByOrderId(String storeOrderId) throws Exception {
    	return userSettleHistRepository.findByOrderId(storeOrderId);
    }
    
    @Transactional
    public synchronized void insert(UserSettleHistDomain param) throws Exception {
    	BigDecimal maxSeqNo = userSettleHistRepository.getMaxSeqNo();
    	logger.info("maxSeqNo="+maxSeqNo);
    	if (maxSeqNo != null) {
    		param.setSeqNo(maxSeqNo.add(new BigDecimal(1)));
    	} else {
    		param.setSeqNo(new BigDecimal(1));
    	}
    	userSettleHistRepository.save(param);
    }
    
    @Transactional
    public synchronized void save(UserSettleHistDomain param) throws Exception {
    	
    	String userid = httpUtil.getSessionUserId();
    	if(param.getSeqNo() == null || select(param) == null) {
    		param.setFrrgts(FasDateUtil.getCurrentDate());
    		param.setFrrgUserId(userid);
    		BigDecimal maxSeqNo = userSettleHistRepository.getMaxSeqNo();
        	logger.info("maxSeqNo="+maxSeqNo);
        	if (maxSeqNo != null) {
        		param.setSeqNo(maxSeqNo.add(new BigDecimal(1)));
        	} else {
        		param.setSeqNo(new BigDecimal(1));
        	}
    	}
    	param.setLastUserId(userid);
    	param.setLastts(FasDateUtil.getCurrentDate());
    	userSettleHistRepository.save(param);
    }
	
}
