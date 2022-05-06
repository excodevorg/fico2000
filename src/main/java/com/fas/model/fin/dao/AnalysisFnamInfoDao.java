package com.fas.model.fin.dao;

import java.util.List;

import javax.annotation.Resource;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.fas.model.fin.domain.AlyFnamInfoDomain;
import com.fas.model.repository.AnalysisFnamInfoRepository;
import com.fas.web.cmmn.util.BeanUtils;

@Repository("AnalysisFnamInfoDao")
public class AnalysisFnamInfoDao {
	
	private static Log logger = LogFactory.getLog(AnalysisFnamInfoDao.class);

	/** Repository */
    @Resource(name="analysisFnamInfoRepository")
    private AnalysisFnamInfoRepository analysisFnamInfoRepository;
	
    //1) insert
    @Transactional
    public void insert(AlyFnamInfoDomain domain) throws Exception {
    	
    	BeanUtils beanUtil = new BeanUtils();
    	
    	logger.debug(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>");
    	
    	beanUtil.toString(domain);
    	
    	try {
    	
    	if (domain != null) {
    		if (domain.getBzn() != null) {
    			analysisFnamInfoRepository.saveAndFlush(domain);
    		} else {
    			logger.debug("domain bz is null >>>> " + domain.getBzn() + " : " + domain.getAlyid());
    		}
    	} else {
    		logger.debug("domain is null");
    	}
    	
    	} catch(Exception  ex) {
    		logger.debug("insert error " + ex.getMessage());
    		ex.printStackTrace();
    		throw ex;
    	}
    }
    
    //2) update
    @Transactional
    public void update(AlyFnamInfoDomain domain) throws Exception {
    	analysisFnamInfoRepository.saveAndFlush(domain);
    }
    
    //3) delete
    @Transactional
    public void delete(AlyFnamInfoDomain domain) throws Exception {
    	analysisFnamInfoRepository.delete(domain);
    }
    
    //3) delete List
    @Transactional
    public void delete(List<AlyFnamInfoDomain> domainList) throws Exception {
    	analysisFnamInfoRepository.delete(domainList);
    }
    
    //3) selectlist (userid, bzn)
    public List<AlyFnamInfoDomain> selectList(AlyFnamInfoDomain domain) throws Exception {
    	return analysisFnamInfoRepository.findByAlyidAndUseridAndBznOrderByStacYyDesc(domain.getAlyid(), domain.getUserid(), domain.getBzn());
    }
    
    //4) select (alyid, userid, bzn, stacYy)
    public AlyFnamInfoDomain select(AlyFnamInfoDomain domain) throws Exception {
    	return analysisFnamInfoRepository.findByAlyidAndUseridAndBznAndStacYy(domain.getAlyid(), domain.getUserid(), domain.getBzn(), domain.getStacYy());
    }
    
}
