package com.fas.model.repository.pk;

import java.io.Serializable;

import javax.persistence.Column;

public class CorporationPK implements Serializable {
	
	@Column(name="userid")
	private String userid;
	
	@Column(name="bzn")
	private String bzn;
	
	@Override
    public boolean equals(Object obj) {
        if(obj instanceof CorporationPK){
        	CorporationPK pk = (CorporationPK) obj;
        	
        	if (!pk.getUserid().equals(userid)) {
        		return false;
        	}
        	
        	if (!pk.getBzn().equals(bzn)) {
        		return false;
        	}
        	
            return true;
        }
 
        return false;
    }
	
	@Override
    public int hashCode() {
        return userid.hashCode() + bzn.hashCode();
    }	

	public String getUserid() {
		return userid;
	}

	public void setUserid(String userid) {
		this.userid = userid;
	}

	public String getBzn() {
		return bzn;
	}

	public void setBZN(String bzn) {
		this.bzn = bzn;
	}
	
	
	

}
