package com.fas.model.fin.dao;

import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.fas.model.fin.domain.QsrItemInfoDomain;
import com.fas.model.repository.QsrItemInfoRepository;

@Repository("QsrItemInfoDao")
public class QsrItemInfoDao {

	/** Repository */
    @Resource(name="qsrItemInfoRepository")
    private QsrItemInfoRepository qsrItemInfoRepository;
    
    //등록
    @Transactional
    public void insert(QsrItemInfoDomain domain) throws Exception {
    	qsrItemInfoRepository.saveAndFlush(domain);
    }
    
    //등록
    @Transactional
    public void update(QsrItemInfoDomain domain) throws Exception {
    	qsrItemInfoRepository.saveAndFlush(domain);
    }
    
    public List<QsrItemInfoDomain> selectQsrItemList(QsrItemInfoDomain domain) throws Exception {
    	return qsrItemInfoRepository.findByQstrIdAndLsqsTcdAndDelYnOrderByLprbmNoAscSprbmNoAsc(domain.getQstrId(), domain.getLsqsTcd(), domain.getDelYn());
    }
    
    public QsrItemInfoDomain electQsrItem(QsrItemInfoDomain domain) throws Exception {
    	return qsrItemInfoRepository.findByQstrIdAndLsqsTcdAndItemId(domain.getQstrId(), domain.getLsqsTcd(), domain.getItemId());
    }
    
}
