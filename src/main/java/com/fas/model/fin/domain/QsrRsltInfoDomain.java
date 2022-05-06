package com.fas.model.fin.domain;

import java.math.BigDecimal;
import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.IdClass;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import com.fas.model.repository.pk.QsrRsltInfoPK;

@Entity
@Table(name = "TB_QSR_RSLTINFO")
@IdClass(value=QsrRsltInfoPK.class)
public class QsrRsltInfoDomain {

	private static final long serialVersionUID = 1L;

	@Id	
	@Column(name="alyid")
	private String alyid;
	
	@Id		
	@Column(name="qstrId")
	private String qstrId;
	
	@Id		
	@Column(name="lsqsTcd")
	private String lsqsTcd;
	
	@Id		
	@Column(name="itemId")
	private String itemId;
	
	@Id		
	@Column(name="rsltId")
	private String rsltId;
	
	@Column(name="frrgts", columnDefinition="DATETIME")
	@Temporal(TemporalType.TIMESTAMP)
	private Date frrgTs;
	
	@Column(name="frrgUserId")
	private String frrgUserId;
	
	@Column(name="lastTs", columnDefinition="DATETIME")
	@Temporal(TemporalType.TIMESTAMP)
	private Date lastTs;
	
	@Column(name="lastUserId")
	private String lastUserId;
	
	@Column(name="lprbmNo")
	private BigDecimal lprbmNo;
	
	@Column(name="sprbmNo")
	private BigDecimal sprbmNo;
	
	@Column(name="baseYm")
	private String baseYm;
	
	@Column(name="kindNm")
	private String kindNm;
	
	@Column(name="rsltVl")
	private String rsltVl;
	
	@Column(name="delYn")
	private String delYn;
	
	@Column(name="trmDsncNm")
	private String trmDsncNm;
	
	@Column(name="etcNm")
	private String etcNm;
	
	@Column(name="etcIrt")
	private String etcIrt;
	
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

	public Date getFrrgTs() {
		return frrgTs;
	}

	public void setFrrgTs(Date frrgTs) {
		this.frrgTs = frrgTs;
	}

	public String getFrrgUserId() {
		return frrgUserId;
	}

	public void setFrrgUserId(String frrgUserId) {
		this.frrgUserId = frrgUserId;
	}

	public Date getLastTs() {
		return lastTs;
	}

	public void setLastTs(Date lastTs) {
		this.lastTs = lastTs;
	}

	public String getLastUserId() {
		return lastUserId;
	}

	public void setLastUserId(String lastUserId) {
		this.lastUserId = lastUserId;
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
