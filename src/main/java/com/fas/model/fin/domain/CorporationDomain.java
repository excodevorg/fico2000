package com.fas.model.fin.domain;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.IdClass;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import com.fas.model.repository.pk.CorporationPK;

@Entity
@Table(name = "TB_FIN_CORPORATION")
@IdClass(value=CorporationPK.class)
public class CorporationDomain {

	private static final long serialVersionUID = 1L;

	@Id
	@Column(name="userid")
	private String userid;

	@Id
	@Column(name="bzn")
	private String bzn;
	
	@Column(name="name")
	private String name;
	
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
	
	@Column(name="enslDcd")
	private String enslDcd;  //기업 규모
	
	@Column(name="tpbsClsfDcd")
	private String tpbsClsfDcd; //업종 종류
	
	@Column(name="amtUnit")
	private String amtUnit; //업종 종류
	
	public String getAmtUnit() {
		return amtUnit;
	}

	public void setAmtUnit(String amtUnit) {
		this.amtUnit = amtUnit;
	}

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

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
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

	public String getEnslDcd() {
		return enslDcd;
	}

	public void setEnslDcd(String enslDcd) {
		this.enslDcd = enslDcd;
	}

	public String getTpbsClsfDcd() {
		return tpbsClsfDcd;
	}

	public void setTpbsClsfDcd(String tpbsClsfDcd) {
		this.tpbsClsfDcd = tpbsClsfDcd;
	}
	
}
