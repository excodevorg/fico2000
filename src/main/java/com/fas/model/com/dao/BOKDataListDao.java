package com.fas.model.com.dao;

import java.util.List;

import javax.annotation.Resource;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.fas.cmmn.util.FasDateUtil;
import com.fas.model.com.domain.BOKDataListDomain;
import com.fas.model.repository.BOKDataListRepository;
import com.fas.web.cmmn.util.StringUtil;

@Repository("BOKDataListDao")
public class BOKDataListDao {


	private static Log logger = LogFactory.getLog(BOKTableListDao.class);
	
	@Resource(name="BOKDataListRepository")
	private BOKDataListRepository bokDataListRepository;
	
	//등록
    @Transactional
    public void insert(BOKDataListDomain param) throws Exception {
    	param.setFrrgts(FasDateUtil.getCurrentDate());
    	param.setLastts(FasDateUtil.getCurrentDate());
    	
    	param.setUnitName(StringUtil.nvl(param.getUnitName(),""));
    	
    	bokDataListRepository.save(param);
    }
    
	//등록
    @Transactional
    public void insert(List<BOKDataListDomain> param) throws Exception {
    	bokDataListRepository.save(param);
    }    
    
    //수정 
    @Transactional
    public void update(BOKDataListDomain param) throws Exception {
    	param.setLastts(FasDateUtil.getCurrentDate());
    	bokDataListRepository.save(param);
    }
    
    public List<BOKDataListDomain> selectList(BOKDataListDomain param) throws Exception {
    	return bokDataListRepository.findByStatCodeAndItemCode1AndItemCode3OrderByItemCode2Asc(param.getStatCode(), param.getItemCode1(), param.getItemCode3());
    }
    
    public BOKDataListDomain select(BOKDataListDomain param) throws Exception {
    	return bokDataListRepository.findByStatCodeAndItemCode1AndItemCode2AndItemCode3AndTime(param.getStatCode(), param.getItemCode1(), param.getItemCode2(), param.getItemCode3(), param.getTime());
    }	
    
    public void deleteAll() throws Exception {
    	bokDataListRepository.deleteAll();
    }
	
	
}
