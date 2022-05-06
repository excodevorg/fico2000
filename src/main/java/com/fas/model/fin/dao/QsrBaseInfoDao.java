package com.fas.model.fin.dao;

import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.fas.model.fin.domain.QsrBaseInfoDomain;
import com.fas.model.repository.QsrBaseInfoRepository;

@Repository("QsrBaseInfoDao")
public class QsrBaseInfoDao {

	/** Repository */
    @Resource(name="qsrBaseInfoRepository")
    private QsrBaseInfoRepository qsrBaseInfoRepository;
    
    //등록
    @Transactional
    public void insert(QsrBaseInfoDomain domain) throws Exception {
    	qsrBaseInfoRepository.saveAndFlush(domain);
    }  
    
    //수정
    @Transactional
    public void update(QsrBaseInfoDomain domain) throws Exception {
    	qsrBaseInfoRepository.saveAndFlush(domain);
    }
    
    //조회
    public QsrBaseInfoDomain selectBaseInfo(QsrBaseInfoDomain domain) throws Exception {
    	QsrBaseInfoDomain re = null;
    	re = qsrBaseInfoRepository.findByLsqsTcdAndDelYn(domain.getLsqsTcd(), domain.getDelYn());
    	return re; 
    }
    
}
