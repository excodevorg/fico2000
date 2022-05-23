package com.fas.model.repository.pk;

import java.io.Serializable;

import javax.persistence.Column;

public class SysItemDetailInfoPK implements Serializable {
	
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	
	@Column(name="svyId")
	private String svyId;
	
	@Column(name="svyItmId")
	private String svyItmId;
	
	@Column(name="svyItmDtId")
	private String svyItmDtId;
	
	@Override
    public boolean equals(Object obj) {
		
		if(obj instanceof SysItemDetailInfoPK) {
			
			SysItemDetailInfoPK detailInfo = (SysItemDetailInfoPK) obj;
			
			if (!detailInfo.getSvyId().equals(svyId)) {
				return false;
			}
			
			if (!detailInfo.getSvyItmId().equals(svyItmId)) {
				return false;
			}

			if (!detailInfo.getSvyItmDtId().equals(svyItmDtId)) {
				return false;
			}
			
			return true;
		}
		
		return false;
	}

	@Override
    public int hashCode() {
        return svyId.hashCode() + svyItmId.hashCode() + svyItmDtId.hashCode();
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
