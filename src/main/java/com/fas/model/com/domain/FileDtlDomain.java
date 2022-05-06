package com.fas.model.com.domain;

import java.math.BigDecimal;
import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.IdClass;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import com.fas.model.repository.pk.FileDtlPK;

@Entity
@Table(name="TB_FILEDTL_INFO")
@IdClass(value=FileDtlPK.class)
public class FileDtlDomain {

	@Id
	@Column(name="flapMngmNo")
	private String flapMngmNo;

	@Id	
	@Column(name="flapDtlSrn")	
	private int flapDtlSrn;
	
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

	@Column(name="flapMngmDcd")	
	private String flapMngmDcd;
	
	@Column(name="flapMngFileNm")	
	private String flapMngFileNm;
	
	@Column(name="flapMngFileOrgNm")
	private String flapMngFileOrgNm;
	
	@Column(name="delYn")
	private String delYn;
	
	@Column(name="flapMngFileSzie")
	private BigDecimal flapMngFileSzie;

	public String getFlapMngmNo() {
		return flapMngmNo;
	}

	public void setFlapMngmNo(String flapMngmNo) {
		this.flapMngmNo = flapMngmNo;
	}

	public int getFlapDtlSrn() {
		return flapDtlSrn;
	}

	public void setFlapDtlSrn(int flapDtlSrn) {
		this.flapDtlSrn = flapDtlSrn;
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

	public String getFlapMngmDcd() {
		return flapMngmDcd;
	}

	public void setFlapMngmDcd(String flapMngmDcd) {
		this.flapMngmDcd = flapMngmDcd;
	}

	public String getFlapMngFileNm() {
		return flapMngFileNm;
	}

	public void setFlapMngFileNm(String flapMngFileNm) {
		this.flapMngFileNm = flapMngFileNm;
	}

	public String getFlapMngFileOrgNm() {
		return flapMngFileOrgNm;
	}

	public void setFlapMngFileOrgNm(String flapMngFileOrgNm) {
		this.flapMngFileOrgNm = flapMngFileOrgNm;
	}

	public String getDelYn() {
		return delYn;
	}

	public void setDelYn(String delYn) {
		this.delYn = delYn;
	}

	public BigDecimal getFlapMngFileSzie() {
		return flapMngFileSzie;
	}

	public void setFlapMngFileSzie(BigDecimal flapMngFileSzie) {
		this.flapMngFileSzie = flapMngFileSzie;
	}
	
	
}
