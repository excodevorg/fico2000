package com.fas.cmmn.util;

import java.math.BigDecimal;
import java.util.Comparator;

import com.fas.model.com.domain.MenuInfoDomain;
import com.fas.web.cmmn.dataaccess.util.FasMap;
import com.fas.web.cmmn.util.StringUtil;

public class FasComparaTor {
	
	public static Comparator<FasMap> MenuOrderComparator = new Comparator<FasMap>() {
		
		public int compare(FasMap fasMap1, FasMap fasMap2) {
			
			int intCompare = -1;
			
			try {
			
				String menuId = (String) fasMap1.get("menuId");
				String menuLevel = (String) fasMap1.get("menuLevel");
				String menuOrder = (String) fasMap1.get("menuOrder");
				
				if ("2".equals(menuLevel)) {
					menuId = menuId + menuLevel + StringUtil.lpad(menuOrder, 3, "0") + "000";
				} else if ("3".equals(menuLevel)) {
					menuId = menuId + menuLevel + "999" + StringUtil.lpad(menuOrder, 3, "0") ;
				} else {
					menuId = menuId + menuLevel + "999" + StringUtil.lpad(menuOrder, 3, "0") ;
				}
				
				String menuId1 = (String) fasMap2.get("menuId");
				String menuLevel1 = (String) fasMap2.get("menuLevel");
				String menuOrder1 = (String) fasMap2.get("menuOrder");
				
				if ("2".equals(menuLevel1)) {
					menuId1 = menuId1 + menuLevel1 + StringUtil.lpad(menuOrder1, 3, "0") + "000";
				} else if ("3".equals(menuLevel)) {
					menuId1 = menuId1 + menuLevel1 + "999" + StringUtil.lpad(menuOrder1, 3, "0") ;
				} else {
					menuId1 = menuId1 + menuLevel1 + "999" + StringUtil.lpad(menuOrder1, 3, "0") ;
				}
				
				BigDecimal bigMenuId = new BigDecimal(menuId);
				
				BigDecimal bigMenuId1 = new BigDecimal(menuId1);
				
				BigDecimal bigComapre = bigMenuId.subtract(bigMenuId1);
				
				intCompare = bigComapre.intValue();
				
			} catch(Exception ex) {
				ex.printStackTrace();
			}
			
			return intCompare;
			
		}
		
	};
	
	public static Comparator<MenuInfoDomain> MenuIdComparator = new Comparator<MenuInfoDomain>() {
		public int compare(MenuInfoDomain fas1, MenuInfoDomain fas2) {
			
			int intComapre = -1;
			try {
			
				String menuId = "" + fas1.getUpperMenuId() + StringUtil.lpad(""+fas1.getMenuOrder(), 3, "0") ;
				String menuId1 = "" + fas2.getUpperMenuId() + StringUtil.lpad(""+fas2.getMenuOrder(), 3, "0") ;
				
				BigDecimal bigMenuId = new BigDecimal(menuId);
				
				BigDecimal bigMenuId1 = new BigDecimal(menuId1);
				
				BigDecimal bigComapre = bigMenuId.subtract(bigMenuId1);
				
				intComapre = bigComapre.intValue();
				
			} catch(Exception ex) {
				ex.printStackTrace();
			}
			
			return intComapre;
		}
	};
	
	
}
