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
@Table(name = "TB_STORE_INFO")
public class StoreInfoDomain  implements Serializable {
		
    private static final long serialVersionUID = 7786029091283338176L;

	@Id
	@Column(name="storeName")
	private String storeName;

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
		
	@Column(name="vendorId")
	private String vendorId;
	
	@Column(name="appId")
	private String appId;
	
	@Column(name="pgServiceId")
	private String pgServiceId;
	
	@Column(name="storeUrl")
	private String storeUrl;
	
	@Column(name="apiSvrUrl")
	private String apiSvrUrl;
	
	@Column(name="siteUrl")
	private String siteUrl;
	
	public String getStoreName() {
		return storeName;
	}

	public void setStoreName(String storeName) {
		this.storeName = storeName;
	}

	public String getVendorId() {
		return vendorId;
	}

	public void setVendorId(String vendorId) {
		this.vendorId = vendorId;
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

	public String getAppId() {
		return appId;
	}

	public void setAppId(String appId) {
		this.appId = appId;
	}

	public String getPgServiceId() {
		return pgServiceId;
	}

	public void setPgServiceId(String pgServiceId) {
		this.pgServiceId = pgServiceId;
	}

	public String getStoreUrl() {
		return storeUrl;
	}

	public void setStoreUrl(String storeUrl) {
		this.storeUrl = storeUrl;
	}

	public String getApiSvrUrl() {
		return apiSvrUrl;
	}

	public void setApiSvrUrl(String apiSvrUrl) {
		this.apiSvrUrl = apiSvrUrl;
	}

	public String getSiteUrl() {
		return siteUrl;
	}

	public void setSiteUrl(String siteUrl) {
		this.siteUrl = siteUrl;
	}

}
