package com.fas.model.repository.pk;

import java.io.Serializable;

import javax.persistence.Column;

public class ApplyMnkPK implements Serializable {

	@Column(name = "lcteUnqId")
	private String lcteUnqId;
	
	@Column(name = "userId")
	private String userId;
	
	@Override
    public boolean equals(Object obj) {
        if(obj instanceof ApplyMnkPK){
        	ApplyMnkPK pk = (ApplyMnkPK) obj;
        	
        	if (!pk.getLcteUnqId().equals(lcteUnqId)) {
        		return false;
        	}
        	
        	if (!pk.getUserId().equals(userId)) {
        		return false;
        	}
        	
            return true;
        }
 
        return false;
    }

	
	@Override
    public int hashCode() {
        return lcteUnqId.hashCode() + userId.hashCode();
    }

	public String getLcteUnqId() {
		return lcteUnqId;
	}

	public void setLcteUnqId(String lcteUnqId) {
		this.lcteUnqId = lcteUnqId;
	}

	public String getUserId() {
		return userId;
	}

	public void setUserId(String userId) {
		this.userId = userId;
	}

}
