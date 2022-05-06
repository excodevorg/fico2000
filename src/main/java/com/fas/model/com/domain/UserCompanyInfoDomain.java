package com.fas.model.com.domain;

import java.io.Serializable;
import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

@Entity
@Table(name = "TB_USER_COMPANY_INFO")
public class UserCompanyInfoDomain implements Serializable {

	private static final long serialVersionUID = 1L;
	
	@Id
	@Column(name="bzn")
	private String bzn;
	
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
	
	@Column(name="companyNm")
	private String companyNm;
	
	@Column(name="representativeNm")
	private String representativeNm;
	
	@Column(name="uptae")
	private String uptae;
	
	@Column(name="jongmok")
	private String jongmok;
	
	@Column(name="dateOfEstablishment")
	private String dateOfEstablishment;
	
	@Column(name="companyAddr")
	private String companyAddr;

	public String getBzn() {
		return bzn;
	}

	public void setBzn(String bzn) {
		this.bzn = bzn;
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

	public String getCompanyNm() {
		return companyNm;
	}

	public void setCompanyNm(String companyNm) {
		this.companyNm = companyNm;
	}

	public String getRepresentativeNm() {
		return representativeNm;
	}

	public void setRepresentativeNm(String representativeNm) {
		this.representativeNm = representativeNm;
	}

	public String getUptae() {
		return uptae;
	}

	public void setUptae(String uptae) {
		this.uptae = uptae;
	}

	public String getJongmok() {
		return jongmok;
	}

	public void setJongmok(String jongmok) {
		this.jongmok = jongmok;
	}

	public String getDateOfEstablishment() {
		return dateOfEstablishment;
	}

	public void setDateOfEstablishment(String dateOfEstablishment) {
		this.dateOfEstablishment = dateOfEstablishment;
	}

	public String getCompanyAddr() {
		return companyAddr;
	}

	public void setCompanyAddr(String companyAddr) {
		this.companyAddr = companyAddr;
	}

	
	
}
