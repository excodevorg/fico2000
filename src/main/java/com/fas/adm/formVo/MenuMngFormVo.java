package com.fas.adm.formVo;

import java.util.Date;

import com.fas.cmmn.formVo.CmmFormVo;

public class MenuMngFormVo extends CmmFormVo {

	private int menuId;
	
	private Date frrgts;

	private String frrgUserId;
	
	private Date lastts;

	private String lastUserId;

	private String menuNm;

	private String menuPath;

	private String menuCon;

	private String menuType;
	
	private int upperMenuId;

	private String upperMenuNm;

	private int menuOrder;
	
	private String useYn;
	
	private int menuLevel;
	
	public int getMenuId() {
		return menuId;
	}

	public void setMenuId(int menuId) {
		this.menuId = menuId;
	}

	public Date getFrrgts() {
		return frrgts;
	}

	public void setFrrgts(Date frrgts) {
		this.frrgts = frrgts;
	}

	public String getFrrgUserId() {
		return frrgUserId;
	}

	public void setFrrgUserId(String frrgUserId) {
		this.frrgUserId = frrgUserId;
	}

	public Date getLastts() {
		return lastts;
	}

	public void setLastts(Date lastts) {
		this.lastts = lastts;
	}

	public String getLastUserId() {
		return lastUserId;
	}

	public void setLastUserId(String lastUserId) {
		this.lastUserId = lastUserId;
	}

	public String getMenuNm() {
		return menuNm;
	}

	public void setMenuNm(String menuNm) {
		this.menuNm = menuNm;
	}

	public String getMenuPath() {
		return menuPath;
	}

	public void setMenuPath(String menuPath) {
		this.menuPath = menuPath;
	}

	public String getMenuCon() {
		return menuCon;
	}

	public void setMenuCon(String menuCon) {
		this.menuCon = menuCon;
	}

	public String getMenuType() {
		return menuType;
	}

	public void setMenuType(String menuType) {
		this.menuType = menuType;
	}

	public int getUpperMenuId() {
		return upperMenuId;
	}

	public void setUpperMenuId(int upperMenuId) {
		this.upperMenuId = upperMenuId;
	}

	public String getUpperMenuNm() {
		return upperMenuNm;
	}

	public void setUpperMenuNm(String upperMenuNm) {
		this.upperMenuNm = upperMenuNm;
	}

	public int getMenuOrder() {
		return menuOrder;
	}

	public void setMenuOrder(int menuOrder) {
		this.menuOrder = menuOrder;
	}

	public String getUseYn() {
		return useYn;
	}

	public void setUseYn(String useYn) {
		this.useYn = useYn;
	}

	public int getMenuLevel() {
		return menuLevel;
	}

	public void setMenuLevel(int menuLevel) {
		this.menuLevel = menuLevel;
	}

	
	
}
