package com.fas.model.com.domain;

import java.math.BigDecimal;
import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

@Entity
@Table(name = "TB_LCTE_INFO")
public class LcteInfoDomain {

	@Id
	@Column(name="lcteUnqId")
	private String lcteUnqId;

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
	
	@Column(name="lcteNm")
	private String lcteNm;
	
	@Column(name="lcteCon", columnDefinition="TEXT")
	private String lcteCon;
	
	@Column(name="lcteSttgYmd")
	private String lcteSttgYmd;
	
	@Column(name="lcteFnshYmd")
	private String lcteFnshYmd;
	
	@Column(name="lctePlac")
	private String lctePlac;
	
	@Column(name="atlcNmprCnt")
	private BigDecimal atlcNmprCnt;
	
	@Column(name="lcteFuncUseYn")
	private String lcteFuncUseYn;
	
	@Column(name="lctePgrsScd")
	private String lctePgrsScd;
	
	@Column(name="lctecUnqId")
	private String lctecUnqId;
	
	@Column(name="flapMngmNo")
	private String flapMngmNo;
	
	@Column(name="atlcAplcAblYn")
	private String atlcAplcAblYn;
	
	@Column(name="delYn")
	private String delYn;

	public String getLcteUnqId() {
		return lcteUnqId;
	}

	public void setLcteUnqId(String lcteUnqId) {
		this.lcteUnqId = lcteUnqId;
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

	public String getLcteNm() {
		return lcteNm;
	}

	public void setLcteNm(String lcteNm) {
		this.lcteNm = lcteNm;
	}

	public String getLcteCon() {
		return lcteCon;
	}

	public void setLcteCon(String lcteCon) {
		this.lcteCon = lcteCon;
	}

	public String getLcteSttgYmd() {
		return lcteSttgYmd;
	}

	public void setLcteSttgYmd(String lcteSttgYmd) {
		this.lcteSttgYmd = lcteSttgYmd;
	}

	public String getLcteFnshYmd() {
		return lcteFnshYmd;
	}

	public void setLcteFnshYmd(String lcteFnshYmd) {
		this.lcteFnshYmd = lcteFnshYmd;
	}

	public String getLctePlac() {
		return lctePlac;
	}

	public void setLctePlac(String lctePlac) {
		this.lctePlac = lctePlac;
	}

	public BigDecimal getAtlcNmprCnt() {
		return atlcNmprCnt;
	}

	public void setAtlcNmprCnt(BigDecimal atlcNmprCnt) {
		this.atlcNmprCnt = atlcNmprCnt;
	}

	public String getLcteFuncUseYn() {
		return lcteFuncUseYn;
	}

	public void setLcteFuncUseYn(String lcteFuncUseYn) {
		this.lcteFuncUseYn = lcteFuncUseYn;
	}

	public String getLctePgrsScd() {
		return lctePgrsScd;
	}

	public void setLctePgrsScd(String lctePgrsScd) {
		this.lctePgrsScd = lctePgrsScd;
	}

	public String getLctecUnqId() {
		return lctecUnqId;
	}

	public void setLctecUnqId(String lctecUnqId) {
		this.lctecUnqId = lctecUnqId;
	}

	public String getFlapMngmNo() {
		return flapMngmNo;
	}

	public void setFlapMngmNo(String flapMngmNo) {
		this.flapMngmNo = flapMngmNo;
	}

	public String getAtlcAplcAblYn() {
		return atlcAplcAblYn;
	}

	public void setAtlcAplcAblYn(String atlcAplcAblYn) {
		this.atlcAplcAblYn = atlcAplcAblYn;
	}

	public String getDelYn() {
		return delYn;
	}

	public void setDelYn(String delYn) {
		this.delYn = delYn;
	}
	
	
}
