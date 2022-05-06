package com.fas.model.repository.pk;

import java.io.Serializable;

import javax.persistence.Column;

public class BOKFinRatioPK implements Serializable {

	@Column(name="statCode")
	private String statCode;
	
	@Column(name="itemCode")
	private String itemCode;
	
	@Column(name="tpbsClsfDcd")	
	private String tpbsClsfDcd;
	
	@Column(name="enslDcd")	
	private String enslDcd;
	
	@Column(name="baseYear")
	private String baseYear;
	
	public BOKFinRatioPK() {
		
	}
	
	@Override
    public boolean equals(Object obj) {
		
		if(obj instanceof BOKFinRatioPK) {
			BOKFinRatioPK carPk = (BOKFinRatioPK) obj;
		
			if(!carPk.getStatCode().equals(statCode)){
	            return false;
	        }
	
	        if(!carPk.getItemCode().equals(itemCode)){
	            return false;
	        }  
	        
	        if(!carPk.getTpbsClsfDcd().equals(tpbsClsfDcd)){
	            return false;
	        }  
	        
	        if(!carPk.getEnslDcd().equals(enslDcd)){
	            return false;
	        }  
	        
	        if(!carPk.getBaseYear().equals(baseYear)){
	            return false;
	        }    
			
		}
        
        return true;
		
	}
	
	@Override
    public int hashCode() {
        return statCode.hashCode() + itemCode.hashCode() + tpbsClsfDcd.hashCode() + enslDcd.hashCode() + baseYear.hashCode();
    }

	public String getStatCode() {
		return statCode;
	}

	public void setStatCode(String statCode) {
		this.statCode = statCode;
	}

	public String getItemCode() {
		return itemCode;
	}

	public void setItemCode(String itemCode) {
		this.itemCode = itemCode;
	}

	public String getTpbsClsfDcd() {
		return tpbsClsfDcd;
	}

	public void setTpbsClsfDcd(String tpbsClsfDcd) {
		this.tpbsClsfDcd = tpbsClsfDcd;
	}

	public String getEnslDcd() {
		return enslDcd;
	}

	public void setEnslDcd(String enslDcd) {
		this.enslDcd = enslDcd;
	}

	public String getBaseYear() {
		return baseYear;
	}

	public void setBaseYear(String baseYear) {
		this.baseYear = baseYear;
	}
	
}
