package com.fas.model.repository.pk;

import java.io.Serializable;

import javax.persistence.Column;

public class SvyReponseInfoPK implements Serializable {
	
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	
	@Column(name="svyRepUnqNo")
	private String svyRepUnqNo;
	
	@Column(name="svyId")
	private String svyId;
	
	@Column(name="svyItmId")
	private String svyItmId;
	 
	@Column(name="svyItmDtId")
	private String svyItmDtId;
	
	@Override
    public boolean equals(Object obj) {
		
		if(obj instanceof SvyReponseInfoPK) {
			
			SvyReponseInfoPK responseInfo = (SvyReponseInfoPK) obj;
			
			if (!responseInfo.getSvyRepUnqNo().equals(svyRepUnqNo)) {
				return false;
			}
			
			if (!responseInfo.getSvyId().equals(svyId)) {
				return false;
			}

			if (!responseInfo.getSvyItmId().equals(svyItmId)) {
				return false;
			}
			
			if (!responseInfo.getSvyItmDtId().equals(svyItmDtId)) {
				return false;
			}		
			
			return true;
			
		}
		
		return false;
	}
	
	@Override
    public int hashCode() {
        return svyRepUnqNo.hashCode() + svyId.hashCode() + svyItmId.hashCode() + svyItmDtId.hashCode();
    }

	public String getSvyRepUnqNo() {
		return svyRepUnqNo;
	}

	public void setSvyRepUnqNo(String svyRepUnqNo) {
		this.svyRepUnqNo = svyRepUnqNo;
	}

	public String getSvyId() {
		return svyId;
	}

	public void setSvyId(String svyId) {
		this.svyId = svyId;
	}

	public String getSvyItmId() {
		return svyItmId;
	}

	public void setSvyItmId(String svyItmId) {
		this.svyItmId = svyItmId;
	}

	public String getSvyItmDtId() {
		return svyItmDtId;
	}

	public void setSvyItmDtId(String svyItmDtId) {
		this.svyItmDtId = svyItmDtId;
	}
	
	

}
