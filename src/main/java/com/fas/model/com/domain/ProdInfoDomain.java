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
@Table(name = "TB_PROD_INFO")
public class ProdInfoDomain  implements Serializable {

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
	
	@Column(name="name")
	private String name;
	
	@Column(name="price")
	private BigDecimal price;
	
	@Column(name="storeProductId")
	private String storeProductId;
	
	@Column(name="storeUnitProductId")
	private String storeUnitProductId;
	
	@Column(name="upgradeable")
	private String upgradeable;

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

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public BigDecimal getPrice() {
		return price;
	}

	public void setPrice(BigDecimal price) {
		this.price = price;
	}

	public String getStoreProductId() {
		return storeProductId;
	}

	public void setStoreProductId(String storeProductId) {
		this.storeProductId = storeProductId;
	}

	public String getStoreUnitProductId() {
		return storeUnitProductId;
	}

	public void setStoreUnitProductId(String storeUnitProductId) {
		this.storeUnitProductId = storeUnitProductId;
	}

	public String getUpgradeable() {
		return upgradeable;
	}

	public void setUpgradeable(String upgradeable) {
		this.upgradeable = upgradeable;
	}
	
}
