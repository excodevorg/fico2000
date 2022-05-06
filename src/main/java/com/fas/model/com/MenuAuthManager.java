package com.fas.model.com;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Component;

import com.fas.adm.formVo.MenuAuthFormVo;
import com.fas.cmmn.util.FasDateUtil;
import com.fas.cmmn.util.FasPagingUtil;
import com.fas.model.com.dao.CodeInfoDao;
import com.fas.model.com.dao.MenuAuthDao;
import com.fas.model.com.domain.CodeInfoDomain;
import com.fas.model.com.domain.MenuAuthDomain;
import com.fas.model.com.domain.MenuInfoDomain;
import com.fas.web.cmmn.util.BeanUtils;

@Component("MenuAuthManager")
public class MenuAuthManager {

	 @Resource(name="CodeInfoDao")
	 private CodeInfoDao codeInfoDao;
	 
	 @Resource(name="MenuAuthDao")
	 private MenuAuthDao menuAuthDao;
	 
	 @Resource(name="MenuInfoManager")
	 private MenuInfoManager menuInfoManager;
	 
	 //1) Auth Code List
	 public List<CodeInfoDomain> menuAuthCodeList(CodeInfoDomain domain) throws Exception {
		 return codeInfoDao.selectDomainCodeList(domain);
	 }
	 
	 public List<CodeInfoDomain> menuAuthCodeList(CodeInfoDomain domain, FasPagingUtil paging) throws Exception {
		 return codeInfoDao.selectDomainCodeList(domain);
	 }
	 
	 //2) Menu Auth List
	 public List<MenuAuthDomain> menuAuthList(MenuAuthDomain domain) throws Exception {
		 
		 List<MenuAuthDomain> menuAuthList = menuAuthDao.selectRolecodeList(domain);
		 
		 return menuAuthList;
		 
	 }
	 
	 //3) Menu Auth Rgsn
	 public void menuAuthRgsn(MenuAuthFormVo domain) throws Exception {
		 
		 BeanUtils beanUtil = new BeanUtils();
		 List<Map> menuAuthMapList = beanUtil.parseJsonArrayObject(domain.getMenuAuthList());
		 
		 MenuAuthDomain menuAuthDomain = null;
		 
		 List<MenuAuthDomain> menuAuthList = new ArrayList<MenuAuthDomain>();
		 
		 for (Map menuAuthMap : menuAuthMapList) {
			 menuAuthDomain = new MenuAuthDomain();
			 menuAuthDomain.setRolecode(""+menuAuthMap.get("rolecode"));
			 menuAuthDomain.setMenuId(Integer.parseInt("" + menuAuthMap.get("menuId")));
			 menuAuthDomain.setFrrgts(FasDateUtil.getCurrentDate());
			 menuAuthDomain.setFrrgUserId("ADMIN");
			 menuAuthDomain.setLastts(FasDateUtil.getCurrentDate());
			 menuAuthDomain.setLastUserId("ADMIN");
			 menuAuthDomain.setUseYn("Y");
			 
			 menuAuthList.add(menuAuthDomain);
		 }
		 
		 if (menuAuthList != null) {
			 MenuAuthDomain menuAuthRoleCode = new MenuAuthDomain();
			 menuAuthRoleCode.setRolecode(domain.getRolecode());
			 menuAuthDao.delete(menuAuthRoleCode);
			 menuAuthDao.insert(menuAuthList);
		 }
	 }
	 
	//3) Menu Auth Rgsn
	 public void menuAuthRgsn(List<MenuAuthFormVo> domainList) throws Exception {
			 
			 BeanUtils beanUtil = new BeanUtils();
			 MenuAuthDomain menuAuthDomain = null;
			 
			 List<MenuAuthDomain> menuAuthList = new ArrayList<MenuAuthDomain>();
			 
			 if (domainList != null) {
				 
				 if (domainList.size() > 0) {
					 
					 MenuAuthFormVo vo  = domainList.get(0);
					 menuAuthDomain = new MenuAuthDomain();
					 menuAuthDomain.setRolecode(vo.getRolecode());
					 
					 menuAuthDao.deleteRolecode(menuAuthDomain);
			 
					 for (MenuAuthFormVo menuAuthMap : domainList) {
						 if (menuAuthMap.getMenuId() != 0) {
							 menuAuthDomain = new MenuAuthDomain();
							 menuAuthDomain.setRolecode(""+menuAuthMap.getRolecode());
							 menuAuthDomain.setMenuId(Integer.parseInt("" + menuAuthMap.getMenuId()));
							 menuAuthDomain.setFrrgts(FasDateUtil.getCurrentDate());
							 menuAuthDomain.setFrrgUserId("ADMIN");
							 menuAuthDomain.setLastts(FasDateUtil.getCurrentDate());
							 menuAuthDomain.setLastUserId("ADMIN");
							 menuAuthDomain.setUseYn("Y");
						 
							 menuAuthList.add(menuAuthDomain);
						 }
					 }
					 
					 for (MenuAuthDomain domain : menuAuthList) {
						 menuAuthDao.insert(domain);
					 }
					 
				 }
			 
			 }
				
	 	}
	 
	
}
