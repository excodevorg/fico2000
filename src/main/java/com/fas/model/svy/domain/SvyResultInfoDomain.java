package com.fas.model.svy.domain;

import java.math.BigDecimal;
import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.IdClass;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import com.fas.model.repository.pk.SvyResultInfoPK;

@Entity
@Table(name = "TB_SVY_RESULT_INFO")
@IdClass(value=SvyResultInfoPK.class)
public class SvyResultInfoDomain {

	private static final long serialVersionUID = 1L;
	
	@Id
	@Column(name="svyRltUnqNo")
	private String svyRltUnqNo;	

	@Id
	@Column(name="svyId")
	private String svyId;
	
	@Id
	@Column(name="seq")
	private int seq;
	
	@Id
	@Column(name="kolbCd")
	private String kolbCd;
	
	@Column(name="userId")
	private String userId;
	
	@Column(name="bzn")
	private String bzn;
	
	@Column(name="svyRltYmd")
	private String svyRltYmd;	
	
	@Column(name="weightValueSum")
	private BigDecimal weightValueSum;
	
	@Column(name="lastYn")
	private String lastYn;	

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

	public String getSvyRltUnqNo() {
		return svyRltUnqNo;
	}

	public void setSvyRltUnqNo(String svyRltUnqNo) {
		this.svyRltUnqNo = svyRltUnqNo;
	}

	public String getSvyId() {
		return svyId;
	}

	public void setSvyId(String svyId) {
		this.svyId = svyId;
	}

	public int getSeq() {
		return seq;
	}

	public void setSeq(int seq) {
		this.seq = seq;
	}

	public String getKolbCd() {
		return kolbCd;
	}

	public void setKolbCd(String kolbCd) {
		this.kolbCd = kolbCd;
	}

	public String getUserId() {
		return userId;
	}

	public void setUserId(String userId) {
		this.userId = userId;
	}

	public String getBzn() {
		return bzn;
	}

	public void setBzn(String bzn) {
		this.bzn = bzn;
	}

	public String getSvyRltYmd() {
		return svyRltYmd;
	}

	public void setSvyRltYmd(String svyRltYmd) {
		this.svyRltYmd = svyRltYmd;
	}

	public BigDecimal getWeightValueSum() {
		return weightValueSum;
	}

	public void setWeightValueSum(BigDecimal weightValueSum) {
		this.weightValueSum = weightValueSum;
	}

	public String getLastYn() {
		return lastYn;
	}

	public void setLastYn(String lastYn) {
		this.lastYn = lastYn;
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
	
	
	
}
