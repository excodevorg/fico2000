package com.fas.model.repository.pk;

import java.io.Serializable;

import javax.persistence.Column;

public class BoardInfoPK implements Serializable {
	
	@Column(name = "code")
	private String code;
	
	@Column(name = "mainNo")
	private int mainNo;
	

	@Override
    public boolean equals(Object obj) {
        if(obj instanceof BoardInfoPK){
        	BoardInfoPK carPk = (BoardInfoPK) obj;
 
            if(!carPk.getCode().equals(code)){
                return false;
            }
 
            if(carPk.getMainNo() != mainNo){
                return false;
            } 
            return true;
        }
 
        return false;
    }

	
	@Override
    public int hashCode() {
        return code.hashCode() + (""+mainNo).hashCode();
    }
	
	public String getCode() {
		return code;
	}

	public void setCode(String code) {
		this.code = code;
	}

	public int getMainNo() {
		return mainNo;
	}

	public void setMainNo(int mainNo) {
		this.mainNo = mainNo;
	}

	public BoardInfoPK () {
		
	}
	
	
}
