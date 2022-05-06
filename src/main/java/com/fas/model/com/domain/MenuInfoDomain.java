package com.fas.model.com.domain;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

@Entity
@Table(name = "TB_MENU_INFO")
public class MenuInfoDomain {

	@Id
	@Column(name="menuId")
	private int menuId;
	
	@Column(name="frrgts", columnDefinition="DATETIME")
	@Temporal(TemporalType.TIMESTAMP)
	private Date frrgts;
	
	@Column(name="frrgUserId")
	private String frrgUserId;
	
	@Column(name="lastts", columnDefinition="DATETIME")
	@Temporal(TemporalType.TIMESTAMP)
	private Date lastts;

	@Column(name="lastUserId")
	private String lastUserId;

	@Column(name="menuNm")
	private String menuNm;

	@Column(name="menuPath")
	private String menuPath;

	@Column(name="menuCon")
	private String menuCon;

	@Column(name="menuType")
	private String menuType;
	
	@Column(name="upperMenuId")
	private int upperMenuId;

	@Column(name="upperMenuNm")
	private String upperMenuNm;
	
	@Column(name="menuOrder")
	private int menuOrder;
	
	@Column(name="useYn")	
	private String useYn;
	
	@Column(name="menuLevel")
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
