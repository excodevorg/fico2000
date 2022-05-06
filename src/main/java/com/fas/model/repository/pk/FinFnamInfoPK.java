package com.fas.model.repository.pk;

import java.io.Serializable;

import javax.persistence.Column;

public class FinFnamInfoPK implements Serializable {

	@Column(name = "userid")
	private String userid;

	@Column(name = "bzn")
	private String bzn;

	@Column(name = "stacYy")
	private String stacYy;
	
	@Column(name = "finSmdcd")
	private String finSmdcd;
	
	@Override
    public boolean equals(Object obj) {
		
	       if(obj instanceof FinFnamInfoPK){
	    	   FinFnamInfoPK carPk = (FinFnamInfoPK) obj;
	 
	            if(!carPk.getUserid().equals(userid)){
	                return false;
	            }
	 
	            if(carPk.getBzn() != bzn){
	                return false;
	            } 
	            
	            if(carPk.getStacYy() != stacYy){
	                return false;
	            } 
	            
	            if(carPk.getFinSmdcd() != finSmdcd){
	                return false;
	            } 
	            return true;
	        }
	 
	        return false;		
		
	}
	
	@Override
    public int hashCode() {
        return userid.hashCode() + bzn.hashCode() + stacYy.hashCode() + finSmdcd.hashCode();
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

	public String getFinSmdcd() {
		return finSmdcd;
	}

	public void setFinSmdcd(String finSmdcd) {
		this.finSmdcd = finSmdcd;
	}

}
