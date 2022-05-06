package com.fas.cmmn.util;

import java.util.ArrayList;
import java.util.Collections;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.beans.factory.annotation.Autowired;

import com.fas.model.com.MenuAuthManager;
import com.fas.model.com.MenuInfoManager;
import com.fas.model.com.dao.CodeInfoDao;
import com.fas.model.com.domain.CodeInfoDomain;
import com.fas.model.com.domain.MenuAuthDomain;
import com.fas.model.com.domain.MenuInfoDomain;
import com.fas.web.cmmn.dataaccess.util.FasMap;
import com.fas.web.cmmn.util.SpringApplicationContext;

public class FasStaticMenuList {
	
	private static Log logger = LogFactory.getLog(FasStaticMenuList.class);
	
	private static Map<String, Object> menuListMap;
	
	private MenuInfoManager menuManager;
	
	private MenuAuthManager menuAuthManager;	
	
	public FasStaticMenuList() {
		
		menuListMap = new HashMap<String, Object>();
		
		try {
		
			List<FasMap> menuList = new ArrayList<FasMap>();
			ArrayList<Integer> menuIdList = new ArrayList<Integer>();
			List<MenuInfoDomain> menuInfoList = new ArrayList<MenuInfoDomain>();
			FasMap menu = null;
			
			CodeInfoDao codeInfo = (CodeInfoDao) SpringApplicationContext.getBean("CodeInfoDao");
			
			menuManager = (MenuInfoManager) SpringApplicationContext.getBean("MenuInfoManager");
			
			menuAuthManager = (MenuAuthManager) SpringApplicationContext.getBean("MenuAuthManager");
			
			logger.debug("start1 >>> " + codeInfo);
			logger.debug("start2 >>> " + menuManager);
			logger.debug("start3 >>> " + menuAuthManager);
			
			CodeInfoDomain codeDomain = new CodeInfoDomain();
			codeDomain.setDomainCode("FAS9001");
			List<CodeInfoDomain> codeInfoList = codeInfo.selectDomainCodeList(codeDomain);
			
			for (CodeInfoDomain code : codeInfoList) {
				
				menuList = new ArrayList<FasMap>();
				menuIdList = new ArrayList<Integer>();
				menuInfoList = new ArrayList<MenuInfoDomain>();
				menu = null;
				
				//2) 권한 조회
				String roleCode = code.getCode();
				
				//3) 권한으로 메뉴 조회
				MenuAuthDomain menuAuth = new MenuAuthDomain();
				menuAuth.setRolecode(roleCode);
				List<MenuAuthDomain> menuAuthList = menuAuthManager.menuAuthList(menuAuth);
				
				Map menuIds = new HashMap();
				
				for (MenuAuthDomain auth : menuAuthList) {
					menuIdList.add(auth.getMenuId());
				}
				
				//if (menuIdList != null) Collections.sort(menuIdList);
				//4) 메뉴정보 조회
				MenuInfoDomain menuInfo = null;
				for (int menuId : menuIdList) {
					menuInfo = new MenuInfoDomain();
					menuInfo.setMenuId(menuId);
					menuInfo = menuManager.menuAdminDetail(menuInfo);
					if (menuInfo != null) {
						if ("Y".equals(menuInfo.getUseYn())) {
							if (menuInfo.getMenuLevel() == 2) {
								menuInfoList.add(menuInfo);
							}
						}
					}
				}
				
				Collections.sort(menuInfoList, FasComparaTor.MenuIdComparator);
				
				List<MenuInfoDomain> menu3LevelList = null;
				
				List<MenuInfoDomain> menu4LevelList = null;
				
				MenuInfoDomain menu3LevelInfo = null;
				
				MenuInfoDomain menu4LevelInfo = null;
				
				for (MenuInfoDomain menus : menuInfoList) {
					
					String menuId = "" + menus.getMenuId();
					menuId = menuId.substring(1);
					int intMenuId = Integer.parseInt(menuId);
					int level = 2;
					
					if (intMenuId > 0) {
						menu = new FasMap();
						int menuID = menus.getMenuId();
						
						String topMenuId = ""+menus.getUpperMenuId();
						
						menu.put("topMenuId",topMenuId.substring(0,1)+"0000");
						menu.put("menuId",""+menus.getMenuId());
						menu.put("menuNm",menus.getMenuNm());
						menu.put("menuPath",menus.getMenuPath());
						menu.put("menuLevel","" + menus.getMenuLevel());
						menu.put("iconCls","fa fa-bar-chart-o fa-fw");
						menu.put("menuMidNm",menus.getUpperMenuNm());
						menu.put("menuOrder", "" + menus.getMenuOrder());
						menuList.add(menu);
						
						//3Level 메뉴가 있는 경우
						menu3LevelList = null;
						menu3LevelInfo = new MenuInfoDomain();
						menu3LevelInfo.setUpperMenuId(menus.getMenuId());
						menu3LevelList = menuManager.menuAdminList(menu3LevelInfo, new FasPagingUtil());
						
						
						
						if (menu3LevelList != null && menu3LevelList.size() > 0) {
							
							Collections.sort(menu3LevelList, FasComparaTor.MenuIdComparator);
							
							for (MenuInfoDomain menu3 : menu3LevelList) {
								
								if ("F".equals(menu3.getMenuType())) {
									menu = new FasMap();
									
									topMenuId = ""+menu3.getUpperMenuId();
									
									menu.put("topMenuId",topMenuId.substring(0,1)+"0000");
									menu.put("menuId",""+menu3.getMenuId());
									menu.put("menuNm",menu3.getMenuNm());
									menu.put("menuPath",menu3.getMenuPath());
									menu.put("menuLevel","" + menu3.getMenuLevel());
									menu.put("iconCls","fa fa-bar-chart-o fa-fw");
									menu.put("menuMidNm",menu3.getUpperMenuNm());
									menu.put("menuOrder", "" + menu3.getMenuOrder());
									menuList.add(menu);
									
								} else {
									
									menu = new FasMap();
									
									topMenuId = ""+menu3.getUpperMenuId();
									
									menu.put("topMenuId",topMenuId.substring(0,1)+"0000");
									menu.put("menuId",""+menu3.getMenuId());
									menu.put("menuNm",menu3.getMenuNm());
									menu.put("menuPath",menu3.getMenuPath());
									menu.put("menuLevel","" + menu3.getMenuLevel());
									menu.put("iconCls","fa fa-bar-chart-o fa-fw");
									menu.put("menuMidNm",menu3.getUpperMenuNm());
									menu.put("upperMenuId", ""+menu3.getUpperMenuId());
									menu.put("menuOrder", "" + menu3.getMenuOrder());
									menuList.add(menu);
									
									menu4LevelList = null;
									menu4LevelInfo = new MenuInfoDomain();
									menu4LevelInfo.setUpperMenuId(menu3.getMenuId());
									menu4LevelList = menuManager.menuAdminList(menu4LevelInfo, new FasPagingUtil());
									
									Collections.sort(menu4LevelList, FasComparaTor.MenuIdComparator);
									
									for (MenuInfoDomain menu4 : menu4LevelList) {
										
										menu = new FasMap();
										
										topMenuId = ""+menu4.getUpperMenuId();
										
										menu.put("topMenuId",topMenuId.substring(0,1)+"0000");
										menu.put("menuId",""+menu4.getMenuId());
										menu.put("menuNm",menu4.getMenuNm());
										menu.put("menuPath",menu4.getMenuPath());
										menu.put("menuLevel","" + menu4.getMenuLevel());
										menu.put("iconCls","fa fa-bar-chart-o fa-fw");
										menu.put("menuMidNm",menu4.getUpperMenuNm());
										menu.put("upperMenuId", ""+menu4.getUpperMenuId());
										menu.put("menuOrder", "" + menu4.getMenuOrder());
										menuList.add(menu);
										
									}
									
								}
							}
						}
					}					
				}
				
				menuListMap.put(code.getCode(), menuList);
		}
		
		} catch(Exception ex) {
			logger.debug("error : " + ex.toString());
			ex.printStackTrace();
		}
	}
	
	public static Map<String, Object> getMenuListMap() {
		return menuListMap;
	}
	
}
