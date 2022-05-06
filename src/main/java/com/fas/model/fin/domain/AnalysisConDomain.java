package com.fas.model.fin.domain;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

@Entity
@Table(name = "TB_ALY_ALYCON")
public class AnalysisConDomain {

	private static final long serialVersionUID = 1L;
	
	@Id
	@Column(name="alyid")
	private String alyid; //분석 ID
	
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

	@Column(name="userid")
	private String userid; //사용자 ID

	@Column(name="bzn")
	private String bzn; //사업자번호
	
	@Column(name="alycon")	
	private String alycon; //분석명
	
	@Column(name="delyn")	
	private String delyn;   //삭제여부

	public String getAlyid() {
		return alyid;
	}

	public void setAlyid(String alyid) {
		this.alyid = alyid;
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

	public String getAlycon() {
		return alycon;
	}

	public void setAlycon(String alycon) {
		this.alycon = alycon;
	}

	public String getDelyn() {
		return delyn;
	}

	public void setDelyn(String delyn) {
		this.delyn = delyn;
	}
	
	
}
