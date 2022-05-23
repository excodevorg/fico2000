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

import com.fas.model.repository.pk.SvyReponseInfoPK;

@Entity
@Table(name = "TB_SVY_REPONSE_INFO")
@IdClass(value=SvyReponseInfoPK.class)
public class SvyReponseInfoDomain {

	private static final long serialVersionUID = 1L;
	
	@Id
	@Column(name="svyRepUnqNo")
	private String svyRepUnqNo;	

	@Id
	@Column(name="svyId")
	private String svyId;
	
	@Id
	@Column(name="svyItmId")
	private String svyItmId;
	
	@Id
	@Column(name="svyItmDtId")
	private String svyItmDtId;
	
	@Column(name="userId")
	private String userId;
	
	@Column(name="bzn")
	private String bzn;
	
	@Column(name="weightValue")
	private BigDecimal weightValue;
	
	@Column(name="svyRepYmd")
	private String svyRepYmd;

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

	public String getSvyRepUnqNo() {
		return svyRepUnqNo;
	}

	public void setSvyRepUnqNo(String svyRepUnqNo) {
		this.svyRepUnqNo = svyRepUnqNo;
	}

	public String getSvyId() {
		return svyId;
	}

	public void setSvyId(String svyId) {
		this.svyId = svyId;
	}

	public String getSvyItmId() {
		return svyItmId;
	}

	public void setSvyItmId(String svyItmId) {
		this.svyItmId = svyItmId;
	}

	public String getSvyItmDtId() {
		return svyItmDtId;
	}

	public void setSvyItmDtId(String svyItmDtId) {
		this.svyItmDtId = svyItmDtId;
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

	public BigDecimal getWeightValue() {
		return weightValue;
	}

	public void setWeightValue(BigDecimal weightValue) {
		this.weightValue = weightValue;
	}

	public String getSvyRepYmd() {
		return svyRepYmd;
	}

	public void setSvyRepYmd(String svyRepYmd) {
		this.svyRepYmd = svyRepYmd;
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
