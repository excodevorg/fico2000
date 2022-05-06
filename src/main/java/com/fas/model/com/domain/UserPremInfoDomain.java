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
@Table(name = "TB_USER_PREM_INFO")
public class UserPremInfoDomain implements Serializable {
	
	private static final long serialVersionUID = 1L;
	
	@Id
	@Column(name="userId")
	private String userId;
	
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
	
	@Column(name="productId")
	private String productId;
	
	@Column(name="acceptTheTerms1")
	private String acceptTheTerms1;
	
	@Column(name="acceptTheTerms2")
	private String acceptTheTerms2;
	
	@Column(name="phoneNumber")
	private String phoneNumber;
	
	@Column(name="phoneCertifyYN")
	private String phoneCertifyYN;
	
	@Column(name="receiptOfTaxBill")
	private String receiptOfTaxBill;
	
	@Column(name="companyBizNo")
	private String companyBizNo;
	
	@Column(name="taxBillBizNo")
	private String taxBillBizNo;
	
	@Column(name="useStartYmd")
	private String useStartYmd;
	
	@Column(name="useEndYmd")
	private String useEndYmd;
	
	@Column(name="email")
	private String email;
	
	@Column(name="mktSmsYn")
	private String mktSmsYn;
	
	@Column(name="mktEmailYn")
	private String mktEmailYn;

	public String getUserId() {
		return userId;
	}

	public void setUserId(String userId) {
		this.userId = userId;
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

	public String getProductId() {
		return productId;
	}

	public void setProductId(String productId) {
		this.productId = productId;
	}

	public String getAcceptTheTerms1() {
		return acceptTheTerms1;
	}

	public void setAcceptTheTerms1(String acceptTheTerms1) {
		this.acceptTheTerms1 = acceptTheTerms1;
	}

	public String getAcceptTheTerms2() {
		return acceptTheTerms2;
	}

	public void setAcceptTheTerms2(String acceptTheTerms2) {
		this.acceptTheTerms2 = acceptTheTerms2;
	}

	public String getPhoneNumber() {
		return phoneNumber;
	}

	public void setPhoneNumber(String phoneNumber) {
		this.phoneNumber = phoneNumber;
	}

	public String getPhoneCertifyYN() {
		return phoneCertifyYN;
	}

	public void setPhoneCertifyYN(String phoneCertifyYN) {
		this.phoneCertifyYN = phoneCertifyYN;
	}

	public String getReceiptOfTaxBill() {
		return receiptOfTaxBill;
	}

	public void setReceiptOfTaxBill(String receiptOfTaxBill) {
		this.receiptOfTaxBill = receiptOfTaxBill;
	}

	public String getCompanyBizNo() {
		return companyBizNo;
	}

	public void setCompanyBizNo(String companyBizNo) {
		this.companyBizNo = companyBizNo;
	}

	public String getTaxBillBizNo() {
		return taxBillBizNo;
	}

	public void setTaxBillBizNo(String taxBillBizNo) {
		this.taxBillBizNo = taxBillBizNo;
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

	public void setUseEndYmd(String userEndYmd) {
		this.useEndYmd = userEndYmd;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getMktSmsYn() {
		return mktSmsYn;
	}

	public void setMktSmsYn(String mktSmsYn) {
		this.mktSmsYn = mktSmsYn;
	}

	public String getMktEmailYn() {
		return mktEmailYn;
	}

	public void setMktEmailYn(String mktEmailYn) {
		this.mktEmailYn = mktEmailYn;
	}

}
