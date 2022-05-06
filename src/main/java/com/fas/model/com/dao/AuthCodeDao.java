package com.fas.model.com.dao;

import java.util.Date;
import java.util.List;

import javax.annotation.Resource;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.fas.cmmn.service.impl.UserRegisterSvcImpl;
import com.fas.cmmn.util.FasDateUtil;
import com.fas.model.com.domain.AuthCodeDomain;
import com.fas.model.repository.AuthCodeRepository;
import com.fas.web.cmmn.util.DateUtil;

@Repository("AuthCodeDao")
public class AuthCodeDao {

	private static Log logger = LogFactory.getLog(AuthCodeDao.class);
	
	
	/** Repository */
    @Resource(name="authCodeRepository")
    private AuthCodeRepository authCodeRepository;
    
	//등록
    @Transactional
    public void insert(AuthCodeDomain domain) throws Exception {
    	
    	logger.debug("$$$$$$ insert start $$$$$$ >>> " + domain.getAuthcode() + ":" + domain.getFrrgts());
    	
    	authCodeRepository.saveAndFlush(domain);
    	
    	logger.debug("$$$$$$ insert start end return $$$$$$ >>> " + domain.getAuthcode());
    }
    
    //수정
    @Transactional
    public void update(AuthCodeDomain domain) throws Exception {
    	authCodeRepository.saveAndFlush(domain);
    }
    
    //조회
    public AuthCodeDomain selectAuthCode(AuthCodeDomain domain) throws Exception {
    	AuthCodeDomain re = null;
    	
    	logger.debug(">>>>> authcode >>>> " + domain.getAuthcode());
    	
    	try {
    		re = authCodeRepository.findByAuthcode(domain.getAuthcode());
    	} catch(Exception ex) {
    		logger.debug("$$$$$$ error $$$$$$");
    		ex.printStackTrace();
    	}
    	
    	logger.debug(">>>>> re >>>> " + re);
    	
    	return re; 
    }
    
    public List<AuthCodeDomain> selectSecurecodeList(AuthCodeDomain domain) throws Exception {
    	return authCodeRepository.findBySecurecode(domain.getSecurecode());
    }
	
}
