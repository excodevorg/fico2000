package com.fas.model.repository.pk;

import java.io.Serializable;
import java.math.BigDecimal;

import javax.persistence.Column;

public class FileDtlPK implements Serializable {
	
	@Column(name = "flapMngmNo")
	private String flapMngmNo;
	
	@Column(name = "flapDtlSrn")
	private int flapDtlSrn;
	
	public FileDtlPK () {
		
	}
	
	@Override
    public boolean equals(Object obj) {
        if(obj instanceof FileDtlPK){
        	FileDtlPK carPk = (FileDtlPK) obj;
 
            if(!carPk.getFlapMngmNo().equals(flapMngmNo)){
                return false;
            }
 
            if(carPk.getFlapDtlSrn() != flapDtlSrn){
                return false;
            } 
            return true;
        }
 
        return false;
    }

	
	@Override
    public int hashCode() {
        return flapMngmNo.hashCode() + (""+flapDtlSrn).hashCode();
    }

	public String getFlapMngmNo() {
		return flapMngmNo;
	}

	public void setFlapMngmNo(String flapMngmNo) {
		this.flapMngmNo = flapMngmNo;
	}

	public int getFlapDtlSrn() {
		return flapDtlSrn;
	}

	public void setFlapDtlSrn(int flapDtlSrn) {
		this.flapDtlSrn = flapDtlSrn;
	}
		
}
