package com.fas.model.com.domain;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

@Entity
@Table(name = "TB_AUTHCODE_INFO")
public class AuthCodeDomain {

	private static final long serialVersionUID = 1L;
	
	@Id
	@Column(name="authcode")
	private String authcode; //승인코드 (내부적으로 쓰는 승인코드)
	
	@Column(name="securecode")
	private String securecode; //보안코드 -> 클라이언트에 발급하는 코드 (인증시 비교)
	
	@Column(name="frrgts", columnDefinition="DATETIME")
	@Temporal(TemporalType.TIMESTAMP)
	private Date frrgts; //최초등록일 
	
	@Column(name="lastts", columnDefinition="DATETIME")
	@Temporal(TemporalType.TIMESTAMP)
	private Date lastts; //최종수정일 
	
	@Column(name="isncts", columnDefinition="DATETIME")
	@Temporal(TemporalType.TIMESTAMP)
	private Date isncts; //발급일시 
	
	@Column(name="cnfats", columnDefinition="DATETIME")
	@Temporal(TemporalType.TIMESTAMP)
	private Date cnfats; //확인일시 
	
	@Column(name="cnfayn")
	private String cnfayn; //확인여부 
	
	@Column(name="valdts", columnDefinition="DATETIME")
	@Temporal(TemporalType.TIMESTAMP)
	private Date valdts; //유효일시 
	
	@Column(name="valdyn")
	private String valdyn; //유효여부  

	public String getAuthcode() {
		return authcode;
	}

	public void setAuthcode(String authcode) {
		this.authcode = authcode;
	}

	public String getSecurecode() {
		return securecode;
	}

	public void setSecurecode(String securecode) {
		this.securecode = securecode;
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

	public Date getIsncts() {
		return isncts;
	}

	public void setIsncts(Date isncts) {
		this.isncts = isncts;
	}

	public Date getCnfats() {
		return cnfats;
	}

	public void setCnfats(Date cnfats) {
		this.cnfats = cnfats;
	}

	public String getCnfayn() {
		return cnfayn;
	}

	public void setCnfayn(String cnfayn) {
		this.cnfayn = cnfayn;
	}

	public Date getValdts() {
		return valdts;
	}

	public void setValdts(Date valdts) {
		this.valdts = valdts;
	}

	public String getValdyn() {
		return valdyn;
	}

	public void setValdyn(String valdyn) {
		this.valdyn = valdyn;
	}
	
}
