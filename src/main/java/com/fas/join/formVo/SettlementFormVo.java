package com.fas.join.formVo;

import com.fas.cmmn.formVo.CmmFormVo;

public class SettlementFormVo extends CmmFormVo {

	private static final long serialVersionUID = -6780370253789781278L;
	
	private String storeOrderId;
	private String trxNo;
	private String apvNo;
	private String apvYmd;
	public String getStoreOrderId() {
		return storeOrderId;
	}
	public void setStoreOrderId(String storeOrderId) {
		this.storeOrderId = storeOrderId;
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
