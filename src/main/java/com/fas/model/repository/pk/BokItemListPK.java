package com.fas.model.repository.pk;

import java.io.Serializable;

import javax.persistence.Column;

public class BokItemListPK implements Serializable {

	@Column(name = "STAT_CODE")
	private String statCode;
	
	@Column(name = "GRP_NAME")
	private String grpName;
	
	@Column(name = "ITEM_CODE")
	private String itemCode;
	

	public BokItemListPK () {
		
	}

	
	@Override
    public boolean equals(Object obj) {
        if(obj instanceof BokItemListPK){
        	BokItemListPK carPk = (BokItemListPK) obj;
 
            if(!carPk.getStatCode().equals(statCode)){
                return false;
            }
            
            if(!carPk.getGrpName().equals(grpName)){
                return false;
            }
            
            if(!carPk.getItemCode().equals(itemCode)){
                return false;
            }            
            
            return true;
        }
 
        return false;
    }

	
	@Override
    public int hashCode() {
        return statCode.hashCode() + grpName.hashCode() + itemCode.hashCode();
    }


	public String getStatCode() {
		return statCode;
	}


	public void setStatCode(String statCode) {
		this.statCode = statCode;
	}


	public String getGrpName() {
		return grpName;
	}


	public void setGrpName(String grpName) {
		this.grpName = grpName;
	}


	public String getItemCode() {
		return itemCode;
	}


	public void setItemCode(String itemCode) {
		this.itemCode = itemCode;
	}
	
}
