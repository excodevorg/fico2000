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
@Table(name = "TB_USER_SETTLE_HIST")
public class UserSettleHistDomain implements Serializable {
	
	private static final long serialVersionUID = 1L;
	
	@Id
	@Column(name="seqNo")
	private BigDecimal seqNo;
	
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

	@Column(name="userId")
	private String userId;
	
	@Column(name="productId")
	private String productId;
	
	@Column(name="settleTs", columnDefinition="DATETIME")
	@Temporal(TemporalType.TIMESTAMP)
	private Date settleTs;
	
	@Column(name="settleAmt")
	private BigDecimal settleAmt;
	
	@Column(name="settleMethod")
	private String settleMethod;
	
	@Column(name="useStartYmd")
	private String useStartYmd;
	
	@Column(name="useEndYmd")
	private String useEndYmd;
	
	@Column(name="storeOrderId")
	private String storeOrderId;
	
	@Column(name="completeYn")
	private String completeYn;
	
	@Column(name="orderYmd")
	private String orderYmd;
	
	@Column(name="trxNo")
	private String trxNo;
	
	@Column(name="apvNo")
	private String apvNo;
	
	@Column(name="apvYmd")
	private String apvYmd;

	public BigDecimal getSeqNo() {
		return seqNo;
	}

	public void setSeqNo(BigDecimal seqNo) {
		this.seqNo = seqNo;
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

	public String getUserId() {
		return userId;
	}

	public void setUserId(String userId) {
		this.userId = userId;
	}

	public String getProductId() {
		return productId;
	}

	public void setProductId(String productId) {
		this.productId = productId;
	}

	public Date getSettleTs() {
		return settleTs;
	}

	public void setSettleTs(Date settleTs) {
		this.settleTs = settleTs;
	}

	public BigDecimal getSettleAmt() {
		return settleAmt;
	}

	public void setSettleAmt(BigDecimal settleAmt) {
		this.settleAmt = settleAmt;
	}

	public String getSettleMethod() {
		return settleMethod;
	}

	public void setSettleMethod(String settleMethod) {
		this.settleMethod = settleMethod;
	}

	public String getUseStartYmd() {
		return useStartYmd;
	}

	public void setUseStartYmd(String useStartYmd) {
		this.useStartYmd = useStartYmd;
	}

	public String getUseEndYmd() {
		return useEndYmd;
	}

	public void setUseEndYmd(String useEndYmd) {
		this.useEndYmd = useEndYmd;
	}

	public String getStoreOrderId() {
		return storeOrderId;
	}

	public void setStoreOrderId(String storeOrderId) {
		this.storeOrderId = storeOrderId;
	}

	public String getCompleteYn() {
		return completeYn;
	}

	public void setCompleteYn(String completeYn) {
		this.completeYn = completeYn;
	}

	public String getOrderYmd() {
		return orderYmd;
	}

	public void setOrderYmd(String orderYmd) {
		this.orderYmd = orderYmd;
	}

	public String getTrxNo() {
		return trxNo;
	}

	public void setTrxNo(String trxNo) {
		this.trxNo = trxNo;
	}

	public String getApvNo() {
		return apvNo;
	}

	public void setApvNo(String apvNo) {
		this.apvNo = apvNo;
	}

	public String getApvYmd() {
		return apvYmd;
	}

	public void setApvYmd(String apvYmd) {
		this.apvYmd = apvYmd;
	}

}
