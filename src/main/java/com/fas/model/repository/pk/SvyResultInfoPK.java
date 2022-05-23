package com.fas.model.repository.pk;

import java.io.Serializable;

import javax.persistence.Column;

public class SvyResultInfoPK implements Serializable {
	
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	@Column(name="svyRltUnqNo")
	private String svyRltUnqNo;
	
	@Column(name="svyId")
	private String svyId;
	
	@Column(name="seq")
	private int seq; 
	
	@Column(name="kolbCd")
	private String kolbCd;

	
	@Override
    public int hashCode() {
        return svyRltUnqNo.hashCode() + svyId.hashCode() + ("" + seq).hashCode() + kolbCd.hashCode();
    }
	
	public String getSvyRltUnqNo() {
		return svyRltUnqNo;
	}

	public void setSvyRltUnqNo(String svyRltUnqNo) {
		this.svyRltUnqNo = svyRltUnqNo;
	}

	public String getSvyId() {
		return svyId;
	}

	public void setSvyId(String svyId) {
		this.svyId = svyId;
	}

	public int getSeq() {
		return seq;
	}

	public void setSeq(int seq) {
		this.seq = seq;
	}

	public String getKolbCd() {
		return kolbCd;
	}

	public void setKolbCd(String kolbCd) {
		this.kolbCd = kolbCd;
	}
	
	
	

}
