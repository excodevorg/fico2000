package com.fas.model.edu.domain;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.IdClass;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import com.fas.model.repository.pk.ApplyMnkPK;

@Entity
@Table(name = "TB_APPLY_MNG")
@IdClass(value=ApplyMnkPK.class)
public class ApplyMngDomain {

	@Id
	@Column(name="lcteUnqId")
	private String lcteUnqId;

	@Id
	@Column(name="userId")
	private String userId;

	@Column(name="frrgTs", columnDefinition="DATETIME")
	@Temporal(TemporalType.TIMESTAMP)
	private Date frrgTs;
	
	@Column(name="frrgUserId")
	private String frrgUserId;

	@Column(name="lastTs", columnDefinition="DATETIME")
	@Temporal(TemporalType.TIMESTAMP)
	private Date lastTs;
	
	@Column(name="lastUserId")
	private String lastUserId;
	
	@Column(name="userNm")
	private String userNm;
	
	@Column(name="applyPrgScd")
	private String applyPrgScd;

	@Column(name="applyTs", columnDefinition="DATETIME")
	@Temporal(TemporalType.TIMESTAMP)
	private Date applyTs;
	
	@Column(name="completeYn")
	private String completeYn;
	
	public String getLcteUnqId() {
		return lcteUnqId;
	}
	public void setLcteUnqId(String lcteUnqId) {
		this.lcteUnqId = lcteUnqId;
	}
	public String getUserId() {
		return userId;
	}
	public void setUserId(String userId) {
		this.userId = userId;
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
	public String getUserNm() {
		return userNm;
	}
	public void setUserNm(String userNm) {
		this.userNm = userNm;
	}
	public String getApplyPrgScd() {
		return applyPrgScd;
	}
	public void setApplyPrgScd(String applyPrgScd) {
		this.applyPrgScd = applyPrgScd;
	}
	public Date getApplyTs() {
		return applyTs;
	}
	public void setApplyTs(Date applyTs) {
		this.applyTs = applyTs;
	}
	public String getCompleteYn() {
		return completeYn;
	}
	public void setCompleteYn(String completeYn) {
		this.completeYn = completeYn;
	}
	
}
