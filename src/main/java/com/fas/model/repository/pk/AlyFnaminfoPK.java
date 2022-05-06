package com.fas.model.repository.pk;

import java.io.Serializable;

import javax.persistence.Column;

public class AlyFnaminfoPK implements Serializable {
	
	@Column(name="alyid")	
	private String alyid;
	
	@Column(name="userid")
	private String userid;

	@Column(name="bzn")
	private String bzn;
	
	@Column(name="stacYy")
	private String stacYy;	


	@Override
    public boolean equals(Object obj) {
        if(obj instanceof AlyFnaminfoPK){
        	AlyFnaminfoPK pk = (AlyFnaminfoPK) obj;
        	
        	if (!pk.getAlyid().equals(alyid)) {
        		return false;
        	}
        	
        	if (!pk.getUserid().equals(userid)) {
        		return false;
        	}
        	
        	if (!pk.getBzn().equals(bzn)) {
        		return false;
        	}
        	
        	if (!pk.getStacYy().equals(stacYy)) {
        		return false;
        	}
        	
            return true;
        }
 
        return false;
    }
	
	@Override
    public int hashCode() {
        return alyid.hashCode() + userid.hashCode() + bzn.hashCode() + stacYy.hashCode();
    }

	public String getAlyid() {
		return alyid;
	}


	public void setAlyid(String alyid) {
		this.alyid = alyid;
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


	public void setBzn(String bzn) {
		this.bzn = bzn;
	}


	public String getStacYy() {
		return stacYy;
	}


	public void setStacYy(String stacYy) {
		this.stacYy = stacYy;
	}
	
}
