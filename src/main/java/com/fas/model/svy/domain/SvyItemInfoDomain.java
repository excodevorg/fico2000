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

import com.fas.model.repository.pk.SvyItemInfoPK;

@Entity
@Table(name = "TB_SVY_ITEM_INFO")
@IdClass(value=SvyItemInfoPK.class)
public class SvyItemInfoDomain {
	
	private static final long serialVersionUID = 1L;
	
	@Id
	@Column(name="svyId")
	private String svyId;
	
	@Id
	@Column(name="svyItmId")
	private String svyItmId;
	
	@Column(name="svyItmNm")
	private String svyItmNm;
	
	@Column(name="useYn")
	private String useYn;
	
	@Column(name="ord")
	private BigDecimal ord;
	
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

	public String getSvyItmId() {
		return svyItmId;
	}

	public void setSvyItmId(String svyItmId) {
		this.svyItmId = svyItmId;
	}

	public String getSvyItmNm() {
		return svyItmNm;
	}

	public void setSvyItmNm(String svyItmNm) {
		this.svyItmNm = svyItmNm;
	}

	public String getUseYn() {
		return useYn;
	}

	public void setUseYn(String useYn) {
		this.useYn = useYn;
	}

	public BigDecimal getOrd() {
		return ord;
	}

	public void setOrd(BigDecimal ord) {
		this.ord = ord;
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
