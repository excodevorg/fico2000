package com.fas.model.fin.dao;

import java.util.List;

import javax.annotation.Resource;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.fas.model.fin.domain.QsrRsltInfoDomain;
import com.fas.model.repository.QsrRsltInfoRepository;
import com.fas.web.cmmn.util.BeanUtils;

@Repository("QsrRsltInfoDao")
public class QsrRsltInfoDao {

	private static Log logger = LogFactory.getLog(QsrRsltInfoDao.class);
	
	/** Repository */
    @Resource(name="qsrRsltInfoRepository")
    private QsrRsltInfoRepository qsrRsltInfoRepository;
    
    @Transactional
    public void insert(QsrRsltInfoDomain domain) throws Exception {
   		qsrRsltInfoRepository.saveAndFlush(domain);
    }
    
    @Transactional
    public void update(QsrRsltInfoDomain domain) throws Exception {
    	
    	BeanUtils beanUtil = new BeanUtils();
    	
    	logger.debug("==================== update ===================");
    	
    	beanUtil.toString(domain);
    	
    	qsrRsltInfoRepository.saveAndFlush(domain);
    }
    
    @Transactional
    public void delete(QsrRsltInfoDomain domain) throws Exception {
    	qsrRsltInfoRepository.delete(domain);
    }
    
    @Transactional
    public void delete(List<QsrRsltInfoDomain> domainList) throws Exception {
    	qsrRsltInfoRepository.delete(domainList);
    }
    
    public List<QsrRsltInfoDomain> selectQsrRsltList(QsrRsltInfoDomain domain)  throws Exception {
    	return qsrRsltInfoRepository.findByAlyidAndQstrIdAndLsqsTcdAndItemIdAndDelYnOrderByLprbmNoAscSprbmNoAscBaseYmAsc(domain.getAlyid(), domain.getQstrId(), domain.getLsqsTcd(), domain.getItemId(), domain.getDelYn());
    }
    
    public List<QsrRsltInfoDomain> selectAlyidQsrRsltList(QsrRsltInfoDomain domain)  throws Exception {
    	return qsrRsltInfoRepository.findByAlyidAndLsqsTcdAndDelYnOrderByLprbmNoAscSprbmNoAscBaseYmAsc(domain.getAlyid(), domain.getLsqsTcd(), domain.getDelYn());
    }
	
    public QsrRsltInfoDomain selectQsrRsltInfo(QsrRsltInfoDomain domain)  throws Exception {
    	return qsrRsltInfoRepository.findByAlyidAndQstrIdAndLsqsTcdAndItemIdAndRsltId(domain.getAlyid(), domain.getQstrId(), domain.getLsqsTcd(), domain.getItemId(), domain.getRsltId());
    }
    
    public List<QsrRsltInfoDomain> selectAlyidQsrRsltItemList(QsrRsltInfoDomain domain)  throws Exception {
    	return qsrRsltInfoRepository.findByAlyidAndQstrIdAndLsqsTcdAndItemIdOrderByKindNmAscBaseYmAsc(domain.getAlyid(), domain.getQstrId(), domain.getLsqsTcd(), domain.getItemId());
    }
    
}
