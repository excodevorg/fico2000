package com.fas.model.com.domain;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.IdClass;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import com.fas.model.repository.pk.BokTableListPK;

@Entity
@Table(name="TB_BOK_TABLELIST")
@IdClass(value=BokTableListPK.class)
public class BOKTableListDomain {

	@Id
	@Column(name="P_STAT_CODE")
	private String pStatCode;
	
	@Id
	@Column(name="STAT_CODE")
	private String statCode;
	
	@Column(name="frrgts", columnDefinition="DATETIME")
	@Temporal(TemporalType.TIMESTAMP)
	private Date frrgts; //최초등록일 
	
	@Column(name="lastts", columnDefinition="DATETIME")
	@Temporal(TemporalType.TIMESTAMP)
	private Date lastts; //최종수정일 
	
	@Column(name="STAT_NAME")
	private String statName;
	
	@Column(name="CYCLE")
	private String cycle;
	
	@Column(name="SRCH_YN")
	private String srchYn;
	
	@Column(name="ORG_NAME")
	private String orgName;

	public String getPStatCode() {
		return pStatCode;
	}

	public void setPStatCode(String pStatCode) {
		this.pStatCode = pStatCode;
	}

	public String getStatCode() {
		return statCode;
	}

	public void setStatCode(String statCode) {
		this.statCode = statCode;
	}

	public Date getFrrgts() {
		return frrgts;
	}

	public void setFrrgts(Date frrgts) {
		this.frrgts = frrgts;
	}

	public Date getLastts() {
		return lastts;
	}

	public void setLastts(Date lastts) {
		this.lastts = lastts;
	}

	public String getStatName() {
		return statName;
	}

	public void setStatName(String statName) {
		this.statName = statName;
	}

	public String getCycle() {
		return cycle;
	}

	public void setCycle(String cycle) {
		this.cycle = cycle;
	}

	public String getSrchYn() {
		return srchYn;
	}

	public void setSrchYn(String srchYn) {
		this.srchYn = srchYn;
	}

	public String getOrgName() {
		return orgName;
	}

	public void setOrgName(String orgName) {
		this.orgName = orgName;
	}
	
	
}
