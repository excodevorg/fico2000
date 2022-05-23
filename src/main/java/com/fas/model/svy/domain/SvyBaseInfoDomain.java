package com.fas.model.svy.domain;

import java.math.BigDecimal;
import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

@Entity
@Table(name = "TB_SVY_BASE_INFO")
public class SvyBaseInfoDomain {
	
	private static final long serialVersionUID = 1L;
	
	@Id
	@Column(name="svyId")
	private String svyId;
	
	@Column(name="svyNm")
	private String svyNm;
	
	@Column(name="itmCnt")
	private BigDecimal itmCnt;

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

	public String getSvyId() {
		return svyId;
	}

	public void setSvyId(String svyId) {
		this.svyId = svyId;
	}

	public String getSvyNm() {
		return svyNm;
	}

	public void setSvyNm(String svyNm) {
		this.svyNm = svyNm;
	}

	public BigDecimal getItmCnt() {
		return itmCnt;
	}

	public void setItmCnt(BigDecimal itmCnt) {
		this.itmCnt = itmCnt;
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
