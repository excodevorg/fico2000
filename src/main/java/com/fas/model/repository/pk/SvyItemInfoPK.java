package com.fas.model.repository.pk;

import java.io.Serializable;

import javax.persistence.Column;

public class SvyItemInfoPK  implements Serializable {
	
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	@Column(name="svyId")
	private String svyId;
	
	@Column(name="svyItmId")
	private String svyItmId;
	
	
	@Override
    public boolean equals(Object obj) {
		
		if(obj instanceof SvyItemInfoPK) {
			
			SvyItemInfoPK itemInfo = (SvyItemInfoPK)obj;
			if (!itemInfo.getSvyId().equals(svyId)) {
				return false;
			}
			
			if (!itemInfo.getSvyItmId().equals(svyItmId)) {
				return false;
			}			
			
			return true;
		}
		
		return false;
	}
	
	@Override
    public int hashCode() {
        return svyId.hashCode() + svyItmId.hashCode();
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
	


}
