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

import com.fas.model.repository.pk.FinFnamInfoPK;

@Entity
@Table(name = "TB_FIN_FNAMINFO")
@IdClass(value=FinFnamInfoPK.class)
public class FinFnamInfoDomain {

	@Id
	@Column(name="userid")
	private String userid;

	@Id
	@Column(name="bzn")
	private String bzn;
	
	@Id
	@Column(name="stacYy")
	private String stacYy;
	
	@Id
	@Column(name="finSmdcd")
	private String finSmdcd;
	
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
	
	@Column(name="finAmt")
	private BigDecimal finAmt;

	public String getUserid() {
		return userid;
	}

	public void setUserid(String userid) {
		this.userid = userid;
	}

	public String getBzn() {
		return bzn;
	}

	public void setBzn(String bzn) {
		this.bzn = bzn;
	}

	public String getStacYy() {
		return stacYy;
	}

	public void setStacYy(String stacYy) {
		this.stacYy = stacYy;
	}

	public String getFinSmdcd() {
		return finSmdcd;
	}

	public void setFinSmdcd(String finSmdcd) {
		this.finSmdcd = finSmdcd;
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

	public BigDecimal getFinAmt() {
		return finAmt;
	}

	public void setFinAmt(BigDecimal finAmt) {
		this.finAmt = finAmt;
	}
	
}
