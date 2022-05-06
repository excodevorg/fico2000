package com.fas.model.com.dao;

import java.util.List;

import javax.annotation.Resource;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.fas.cmmn.util.FasDateUtil;
import com.fas.model.com.domain.BOKTableListDomain;
import com.fas.model.repository.BOKTableListRepository;

@Repository("BOKTableListDao")
public class BOKTableListDao {

	private static Log logger = LogFactory.getLog(BOKTableListDao.class);
	
	@Resource(name="BOKTableListRepository")
	private BOKTableListRepository bokTableListRepository;
	
	//등록
    @Transactional
    public void insert(BOKTableListDomain param) throws Exception {
    	param.setFrrgts(FasDateUtil.getCurrentDate());
    	param.setLastts(FasDateUtil.getCurrentDate());
    	bokTableListRepository.save(param);
    }
    
	//등록
    @Transactional
    public void insert(List<BOKTableListDomain> param) throws Exception {
    	bokTableListRepository.save(param);
    }    
    
    //수정 
    @Transactional
    public void update(BOKTableListDomain param) throws Exception {
    	param.setLastts(FasDateUtil.getCurrentDate());
    	bokTableListRepository.save(param);
    }
    
    public List<BOKTableListDomain> selectList(BOKTableListDomain param) throws Exception {
    	return bokTableListRepository.findByPStatCodeOrderByStatCodeAsc(param.getPStatCode());
    }
    
    public BOKTableListDomain select(BOKTableListDomain param) throws Exception {
    	return bokTableListRepository.findByPStatCodeAndStatCode(param.getPStatCode(), param.getStatCode());
    }
	
}
