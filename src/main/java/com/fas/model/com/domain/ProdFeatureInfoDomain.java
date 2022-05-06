package com.fas.model.com.domain;

import java.io.Serializable;
import java.math.BigDecimal;
import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

@Entity
@Table(name = "TB_PROD_FEATURE_INFO")
public class ProdFeatureInfoDomain implements Serializable {

	private static final long serialVersionUID = 1L;
	
	@Id
	@Column(name="productId")
	private String productId;

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
	
	@Column(name="alyCorpCnt")
	private BigDecimal alyCorpCnt;
	
	@Column(name="alySenarioCnt")
	private BigDecimal alySenarioCnt;

	public String getProductId() {
		return productId;
	}

	public void setProductId(String productId) {
		this.productId = productId;
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

	public BigDecimal getAlyCorpCnt() {
		return alyCorpCnt;
	}

	public void setAlyCorpCnt(BigDecimal alyCorpCnt) {
		this.alyCorpCnt = alyCorpCnt;
	}

	public BigDecimal getAlySenarioCnt() {
		return alySenarioCnt;
	}

	public void setAlySenarioCnt(BigDecimal alySenarioCnt) {
		this.alySenarioCnt = alySenarioCnt;
	}

}
