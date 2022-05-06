package com.fas.model.com.domain;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

@Entity
@Table(name = "TB_FILEBSC_INFO")
public class FileBscDomain {

	@Id
	@Column(name="flapMngmNo")
	private String flapMngmNo;
	
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
	
	@Column(name="flapMngTtlNm")	
	private String flapMngTtlNm;
	
	@Column(name="flapMngCon")	
	private String flapMngCon;
	
	@Column(name="delYn")		
	private String delYn;

	public String getFlapMngmNo() {
		return flapMngmNo;
	}

	public void setFlapMngmNo(String flapMngmNo) {
		this.flapMngmNo = flapMngmNo;
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

	public String getFlapMngTtlNm() {
		return flapMngTtlNm;
	}

	public void setFlapMngTtlNm(String flapMngTtlNm) {
		this.flapMngTtlNm = flapMngTtlNm;
	}

	public String getFlapMngCon() {
		return flapMngCon;
	}

	public void setFlapMngCon(String flapMngCon) {
		this.flapMngCon = flapMngCon;
	}

	public String getDelYn() {
		return delYn;
	}

	public void setDelYn(String delYn) {
		this.delYn = delYn;
	}
	
}
