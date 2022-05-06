package com.fas.adm.formVo;

import java.util.Date;

import com.fas.cmmn.formVo.CmmFormVo;

public class MenuAuthFormVo extends CmmFormVo {

	private String rolecode;
	
	private int menuId;

	private Date frrgts;
	
	private String frrgUserId; 
	
	private Date lastts;

	private String lastUserId;
	
	private String domainCode;
	
	private String code;
	
	private String domainCodeNm;
	
	private String codeNm;
	
	private String groupCode;
	
	private String codeCon;
	
	private String useYn;
	
	private String checkYn;
	
	private String menuNm;
	
	private String menuAuthList;
	
	public String getMenuAuthList() {
		return menuAuthList;
	}

	public void setMenuAuthList(String menuAuthList) {
		this.menuAuthList = menuAuthList;
	}

	public String getMenuNm() {
		return menuNm;
	}

	public void setMenuNm(String menuNm) {
		this.menuNm = menuNm;
	}

	public String getRolecode() {
		return rolecode;
	}

	public void setRolecode(String rolecode) {
		this.rolecode = rolecode;
	}

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

	public String getDomainCode() {
		return domainCode;
	}

	public void setDomainCode(String domainCode) {
		this.domainCode = domainCode;
	}

	public String getCode() {
		return code;
	}

	public void setCode(String code) {
		this.code = code;
	}

	public String getDomainCodeNm() {
		return domainCodeNm;
	}

	public void setDomainCodeNm(String domainCodeNm) {
		this.domainCodeNm = domainCodeNm;
	}

	public String getCodeNm() {
		return codeNm;
	}

	public void setCodeNm(String codeNm) {
		this.codeNm = codeNm;
	}

	public String getGroupCode() {
		return groupCode;
	}

	public void setGroupCode(String groupCode) {
		this.groupCode = groupCode;
	}

	public String getCodeCon() {
		return codeCon;
	}

	public void setCodeCon(String codeCon) {
		this.codeCon = codeCon;
	}

	public String getUseYn() {
		return useYn;
	}

	public void setUseYn(String useYn) {
		this.useYn = useYn;
	}

	public String getCheckYn() {
		return checkYn;
	}

	public void setCheckYn(String checkYn) {
		this.checkYn = checkYn;
	}	
	
}
