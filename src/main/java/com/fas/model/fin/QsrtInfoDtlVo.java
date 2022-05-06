package com.fas.model.fin;

import java.math.BigDecimal;

import com.fas.web.cmmn.util.StringUtil;

public class QsrtInfoDtlVo {
	
	private String alyid;
	private String stacYy;
	private String qstrId;
	private String lsqsTcd;
	private String itemId;
	private String rsltId;
	private BigDecimal lprbmNo;
	private BigDecimal sprbmNo;
	private String rsvlType;
	private String rplyType;
	
	public String getTrmDsncNm() {
		return trmDsncNm;
	}

	public void setTrmDsncNm(String trmDsncNm) {
		this.trmDsncNm = trmDsncNm;
	}

	public String getEtcNm() {
		return etcNm;
	}

	public void setEtcNm(String etcNm) {
		this.etcNm = etcNm;
	}

	public String getEtcIrt() {
		return etcIrt;
	}

	public void setEtcIrt(String etcIrt) {
		this.etcIrt = etcIrt;
	}
	private String itemNm;
	private String baseYm;
	private String kindNm;
	private String rsltVl;
	private String delYn;
	private String trmDsncNm;
	private String etcNm;
	private String etcIrt;
	
	public void initial() {
		this.alyid = StringUtil.nvl(this.alyid,"");
		this.stacYy = StringUtil.nvl(this.stacYy,"");
		this.qstrId = StringUtil.nvl(this.qstrId,"");
		this.lsqsTcd = StringUtil.nvl(this.lsqsTcd,"");
		this.itemId = StringUtil.nvl(this.itemId,"");
		this.rsltId = StringUtil.nvl(this.rsltId,"");
		this.rsvlType = StringUtil.nvl(this.rsvlType,"");
		this.rplyType = StringUtil.nvl(this.rplyType,"");
		this.itemNm = StringUtil.nvl(this.itemNm,"");
		this.baseYm = StringUtil.nvl(this.baseYm,"");
		this.kindNm = StringUtil.nvl(this.kindNm,"");
		this.rsltVl = StringUtil.nvl(this.rsltVl,"");
		this.delYn = StringUtil.nvl(this.delYn,"");
		this.trmDsncNm = StringUtil.nvl(this.trmDsncNm,"");
		this.etcNm = StringUtil.nvl(this.etcNm,"");
		this.etcIrt = StringUtil.nvl(this.etcIrt,"");
		
		if (this.lprbmNo == null) this.lprbmNo = BigDecimal.ZERO;
		if (this.sprbmNo == null) this.sprbmNo = BigDecimal.ZERO;
	}
	
	public String getStacYy() {
		return stacYy;
	}
	public void setStacYy(String stacYy) {
		this.stacYy = stacYy;
	}
	public String getAlyid() {
		return alyid;
	}
	public void setAlyid(String alyid) {
		this.alyid = alyid;
	}
	public String getQstrId() {
		return qstrId;
	}
	public void setQstrId(String qstrId) {
		this.qstrId = qstrId;
	}
	public String getLsqsTcd() {
		return lsqsTcd;
	}
	public void setLsqsTcd(String lsqsTcd) {
		this.lsqsTcd = lsqsTcd;
	}
	public String getItemId() {
		return itemId;
	}
	public void setItemId(String itemId) {
		this.itemId = itemId;
	}
	public String getRsltId() {
		return rsltId;
	}
	public void setRsltId(String rsltId) {
		this.rsltId = rsltId;
	}
	public BigDecimal getLprbmNo() {
		return lprbmNo;
	}
	public void setLprbmNo(BigDecimal lprbmNo) {
		this.lprbmNo = lprbmNo;
	}
	public BigDecimal getSprbmNo() {
		return sprbmNo;
	}
	public void setSprbmNo(BigDecimal sprbmNo) {
		this.sprbmNo = sprbmNo;
	}
	public String getRsvlType() {
		return rsvlType;
	}
	public void setRsvlType(String rsvlType) {
		this.rsvlType = rsvlType;
	}
	public String getRplyType() {
		return rplyType;
	}
	public void setRplyType(String rplyType) {
		this.rplyType = rplyType;
	}
	public String getItemNm() {
		return itemNm;
	}
	public void setItemNm(String itemNm) {
		this.itemNm = itemNm;
	}
	public String getBaseYm() {
		return baseYm;
	}
	public void setBaseYm(String baseYm) {
		this.baseYm = baseYm;
	}
	public String getKindNm() {
		return kindNm;
	}
	public void setKindNm(String kindNm) {
		this.kindNm = kindNm;
	}
	public String getRsltVl() {
		return rsltVl;
	}
	public void setRsltVl(String rsltVl) {
		this.rsltVl = rsltVl;
	}
	public String getDelYn() {
		return delYn;
	}
	public void setDelYn(String delYn) {
		this.delYn = delYn;
	}

}
