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

import com.fas.model.repository.pk.QsrItemInfoPK;

@Entity
@Table(name = "TB_QSR_ITEMINFO")
@IdClass(value=QsrItemInfoPK.class)
public class QsrItemInfoDomain {

	private static final long serialVersionUID = 1L;
	
	@Id	
	@Column(name="qstrId")
	private String qstrId;
	
	@Id	
	@Column(name="lsqsTcd")
	private String lsqsTcd;
	
	@Id	
	@Column(name="itemId")
	private String itemId;
	
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
	
	@Column(name="rsvlType")
	private String rsvlType;
	
	@Column(name="rplyType")
	private String rplyType;

	@Column(name="itemNm")
	private String itemNm;
	
	@Column(name="delYn")
	private String delYn;

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

	public String getDelYn() {
		return delYn;
	}

	public void setDelYn(String delYn) {
		this.delYn = delYn;
	}
	
}
