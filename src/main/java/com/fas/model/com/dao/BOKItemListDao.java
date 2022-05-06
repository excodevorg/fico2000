package com.fas.model.com.dao;

import java.util.List;

import javax.annotation.Resource;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.fas.cmmn.util.FasDateUtil;
import com.fas.model.com.domain.BOKItemListDomain;
import com.fas.model.repository.BOKItemListRepository;

@Repository("BOKItemListDao")
public class BOKItemListDao {

	private static Log logger = LogFactory.getLog(BOKTableListDao.class);
	
	@Resource(name="BOKItemListRepository")
	private BOKItemListRepository bokItemListRepository;
	
	//등록
    @Transactional
    public void insert(BOKItemListDomain param) throws Exception {
    	param.setFrrgts(FasDateUtil.getCurrentDate());
    	param.setLastts(FasDateUtil.getCurrentDate());
    	bokItemListRepository.save(param);
    }
    
	//등록
    @Transactional
    public void insert(List<BOKItemListDomain> param) throws Exception {
    	bokItemListRepository.save(param);
    }    
    
    //수정 
    @Transactional
    public void update(BOKItemListDomain param) throws Exception {
    	param.setLastts(FasDateUtil.getCurrentDate());
    	bokItemListRepository.save(param);
    }
    
    public List<BOKItemListDomain> selectList(BOKItemListDomain param) throws Exception {
    	return bokItemListRepository.findByStatCodeAndGrpNameOrderByItemCodeAsc(param.getStatCode(), param.getGrpName());
    }
    
    public BOKItemListDomain select(BOKItemListDomain param) throws Exception {
    	return bokItemListRepository.findByStatCodeAndGrpNameAndItemCode(param.getStatCode(), param.getGrpName(), param.getItemCode());
    }	
	
}
