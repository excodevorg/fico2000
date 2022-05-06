package com.fas.model.com;

import java.util.List;

import javax.annotation.Resource;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.stereotype.Component;

import com.fas.cmmn.util.FasDateUtil;
import com.fas.cmmn.util.FasPagingUtil;
import com.fas.model.com.dao.MenuInfoDao;
import com.fas.model.com.domain.MenuInfoDomain;
import com.fas.web.cmmn.util.HttpUtil;
import com.fas.web.cmmn.util.StringUtil;

@Component("MenuInfoManager")
public class MenuInfoManager {

	private static Log logger = LogFactory.getLog(MenuInfoManager.class);
	
	 @Resource(name="MenuInfoDao")
	 private MenuInfoDao menuInfoDao;
	 
	 @Resource(name="HttpUtil")
	 private HttpUtil httpUtil;
	 
	 //1) Menu Admin List 
	 public List<MenuInfoDomain> menuAdminList(MenuInfoDomain param, FasPagingUtil paging) throws Exception {
		 
		 //1) Menu Name List
		 if (!StringUtil.isEmpty(param.getMenuNm())) {
			return menuInfoDao.listMenuNm(param.getMenuNm(), paging); 
		 } else if (param.getUpperMenuId() > 0) {
			 return menuInfoDao.listUpperMenuId(param.getUpperMenuId());
		 } else {
			 return menuInfoDao.listAll(paging);
		 }
		 
	 }
	 //2) Menu Admin create 
	 public void menuAdminCreate(MenuInfoDomain param) throws Exception {
		 param.setFrrgts(FasDateUtil.getCurrentDate());
		 param.setLastts(FasDateUtil.getCurrentDate());
		 
		 param.setFrrgUserId(httpUtil.getSessionUserId());
		 param.setLastUserId(httpUtil.getSessionUserId());
		 
		 menuInfoDao.insert(param);
	 }
	 
	 //3) Menu Admin modify
	 public void menuAdminModify(MenuInfoDomain param) throws Exception {
		 param.setLastts(FasDateUtil.getCurrentDate());
		 param.setLastUserId(httpUtil.getSessionUserId());
		 menuInfoDao.update(param);
	 }
	 
	 //4) Menu Admin delete
	 public void menuAdminDelete(MenuInfoDomain param) throws Exception {
		 menuInfoDao.delete(param);
	 }
	 
	 //5) Menu Admin Detail Select
	 public MenuInfoDomain menuAdminDetail(MenuInfoDomain param) throws Exception {
		 return menuInfoDao.select(param.getMenuId());
	 }
	 
	 //6) Menu Use Stop
	 public void menuAdminActiveRgsn(MenuInfoDomain param) throws Exception {
		 
		 MenuInfoDomain domain = menuInfoDao.select(param.getMenuId());
		 
		 domain.setLastts(FasDateUtil.getCurrentDate());
		 domain.setLastUserId(httpUtil.getSessionUserId());
		 domain.setUseYn(param.getUseYn());
		 
		 menuInfoDao.update(domain);
		 
	 }
	 
	 public int totalCnt(String menuNm) throws Exception {
		 return menuInfoDao.totalCnt(menuNm);
	 }
	 
}
