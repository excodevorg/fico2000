package com.fas.model.repository.pk;

import java.io.Serializable;

import javax.persistence.Column;

public class BokDataListPK implements Serializable {
	
	@Column(name = "STAT_CODE")
	private String statCode;
	
	@Column(name = "ITEM_CODE1")
	private String itemCode1;
	
	@Column(name = "ITEM_CODE2")
	private String itemCode2;	
	
	@Column(name = "ITEM_CODE3")
	private String itemCode3;	
	
	@Column(name = "TIME")
	private String time;

	public BokDataListPK () {
		
	}

	
	@Override
    public boolean equals(Object obj) {
        if(obj instanceof BokDataListPK){
        	BokDataListPK carPk = (BokDataListPK) obj;
 
            if(!carPk.getStatCode().equals(statCode)){
                return false;
            }

            if(!carPk.getItemCode1().equals(itemCode1)){
                return false;
            }  
            
            if(!carPk.getItemCode2().equals(itemCode2)){
                return false;
            }  
            
            if(!carPk.getItemCode3().equals(itemCode3)){
                return false;
            }  
            
            if(!carPk.getTime().equals(time)){
                return false;
            }             
            
            return true;
        }
 
        return false;
    }

	
	@Override
    public int hashCode() {
        return statCode.hashCode() + itemCode1.hashCode() + itemCode2.hashCode() + itemCode3.hashCode() + time.hashCode();
    }


	public String getStatCode() {
		return statCode;
	}

	public void setStatCode(String statCode) {
		this.statCode = statCode;
	}

	public String getItemCode1() {
		return itemCode1;
	}


	public void setItemCode1(String itemCode1) {
		this.itemCode1 = itemCode1;
	}


	public String getItemCode2() {
		return itemCode2;
	}


	public void setItemCode2(String itemCode2) {
		this.itemCode2 = itemCode2;
	}


	public String getItemCode3() {
		return itemCode3;
	}


	public void setItemCode3(String itemCode3) {
		this.itemCode3 = itemCode3;
	}

	public String getTime() {
		return time;
	}


	public void setTime(String time) {
		this.time = time;
	}
	
}
