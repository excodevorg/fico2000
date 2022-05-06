package com.fas.model.com.dao;

import java.util.List;

import javax.annotation.Resource;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Repository;

import com.fas.cmmn.util.FasPagingUtil;
import com.fas.model.com.domain.MenuInfoDomain;
import com.fas.model.repository.MenuInfoRepository;
import com.fas.web.cmmn.util.StringUtil;

@Repository("MenuInfoDao")
public class MenuInfoDao {

	/** Repository */
    @Resource(name="menuInfoRepository")
    private MenuInfoRepository menuInfoRepository;
    
    private static Log logger = LogFactory.getLog(MenuInfoDao.class);
    
    public void insert(MenuInfoDomain param) throws Exception {
    	menuInfoRepository.saveAndFlush(param);
    }
    
    public void update(MenuInfoDomain param) throws Exception {
    	menuInfoRepository.saveAndFlush(param);
    }
    
    public void delete(MenuInfoDomain param) throws Exception {
    	menuInfoRepository.delete(param);
    }
    
    public List<MenuInfoDomain> listMenuNm(String menuNm, FasPagingUtil paging) throws Exception {
    	paging.setSort("menuId", FasPagingUtil.DESC);
    	paging.setSort("frrgts", FasPagingUtil.DESC);
    	return menuInfoRepository.findByMenuNmContaining(menuNm, paging.getPagingRequest());
    }
    
    public MenuInfoDomain select(int menuId) throws Exception {
    	return menuInfoRepository.findByMenuId(menuId);
    }
    
    public List<MenuInfoDomain> listAll(FasPagingUtil paging) throws Exception {
    	paging.setSort("menuId", FasPagingUtil.DESC);
    	paging.setSort("frrgts", FasPagingUtil.DESC);
    	Page<MenuInfoDomain> pageDomain = menuInfoRepository.findAll(paging.getPagingRequest());
    	
    	List<MenuInfoDomain> resultList = null;
    	
    	if (pageDomain != null) resultList = pageDomain.getContent();
    	
    	return resultList;
    } 
    
    public List<MenuInfoDomain> listUpperMenuId(int upperMenuId) throws Exception {
    	return menuInfoRepository.findByUpperMenuId(upperMenuId);
    }
    
    public int totalCnt(String menuNm) throws Exception {
    	if (StringUtil.isEmpty(menuNm)) {
    		return (int) menuInfoRepository.count();
    	} else {
    		List<MenuInfoDomain> arrList = menuInfoRepository.findByMenuNmContaining(menuNm);
    		if (arrList == null) {return 0;} else {
    			return arrList.size();
    		}
    	}
    }
    
	
}
