package com.fas.model.fin.domain;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

@Entity
@Table(name = "TB_FIN_ITEMCD")
public class FinItemCdDomain {
	
	private static final long serialVersionUID = 1L;

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
	
	@Column(name="finSmdcdNm")
	private String finSmdcdNm;
	
	@Column(name="finDcd")
	private String finDcd;
	
	@Column(name="finDcdNm")
	private String finDcdNm;
	
	@Column(name="finLrdvcd")
	private String finLrdvcd;
	
	@Column(name="finLrdvcdNm")
	private String finLrdvcdNm;
	
	@Column(name="finMdvcd")
	private String finMdvcd;
	
	@Column(name="finMdvcdNm")
	private String finMdvcdNm;
	
	@Column(name="seqord")
	private int seqord;

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

	public String getFinSmdcdNm() {
		return finSmdcdNm;
	}

	public void setFinSmdcdNm(String finSmdcdNm) {
		this.finSmdcdNm = finSmdcdNm;
	}

	public String getFinDcd() {
		return finDcd;
	}

	public void setFinDcd(String finDcd) {
		this.finDcd = finDcd;
	}

	public String getFinDcdNm() {
		return finDcdNm;
	}

	public void setFinDcdNm(String finDcdNm) {
		this.finDcdNm = finDcdNm;
	}

	public String getFinLrdvcd() {
		return finLrdvcd;
	}

	public void setFinLrdvcd(String finLrdvcd) {
		this.finLrdvcd = finLrdvcd;
	}

	public String getFinLrdvcdNm() {
		return finLrdvcdNm;
	}

	public void setFinLrdvcdNm(String finLrdvcdNm) {
		this.finLrdvcdNm = finLrdvcdNm;
	}

	public String getFinMdvcd() {
		return finMdvcd;
	}

	public void setFinMdvcd(String finMdvcd) {
		this.finMdvcd = finMdvcd;
	}

	public String getFinMdvcdNm() {
		return finMdvcdNm;
	}

	public void setFinMdvcdNm(String finMdvcdNm) {
		this.finMdvcdNm = finMdvcdNm;
	}

	public int getSeqord() {
		return seqord;
	}

	public void setSeqord(int seqord) {
		this.seqord = seqord;
	}
		
}
