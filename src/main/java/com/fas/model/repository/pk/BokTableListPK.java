package com.fas.model.repository.pk;

import java.io.Serializable;

import javax.persistence.Column;

public class BokTableListPK implements Serializable {
	
	@Column(name = "P_STAT_CODE")
	private String pStatCode;
	
	@Column(name = "STAT_CODE")
	private String statCode;
	

	public BokTableListPK () {
		
	}

	
	@Override
    public boolean equals(Object obj) {
        if(obj instanceof BokTableListPK){
        	BokTableListPK carPk = (BokTableListPK) obj;
 
            if(!carPk.getPStatCode().equals(pStatCode)){
                return false;
            }
            
            if(!carPk.getStatCode().equals(statCode)){
                return false;
            }
            
            return true;
        }
 
        return false;
    }

	
	@Override
    public int hashCode() {
        return pStatCode.hashCode() + statCode.hashCode();
    }
	


	public String getPStatCode() {
		return pStatCode;
	}


	public void setPStatCode(String pStatCode) {
		this.pStatCode = pStatCode;
	}


	public String getStatCode() {
		return statCode;
	}


	public void setStatCode(String statCode) {
		this.statCode = statCode;
	}

}
