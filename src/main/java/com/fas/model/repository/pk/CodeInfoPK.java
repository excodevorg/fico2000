package com.fas.model.repository.pk;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Embeddable;

public class CodeInfoPK implements Serializable {
	
	@Column(name = "domainCode")
	private String domainCode;
	
	@Column(name = "code")
	private String code;
	
	public CodeInfoPK () {
		
	}
	
	@Override
    public boolean equals(Object obj) {
        if(obj instanceof CodeInfoPK){
        	CodeInfoPK carPk = (CodeInfoPK) obj;
 
            if(!carPk.getDomainCode().equals(domainCode)){
                return false;
            }
 
            if(carPk.getCode() != null && !carPk.getCode().equals(code)){
                return false;
            } else if (carPk.getCode() == null) {
            	return false;
            }
 
            return true;
        }
 
        return false;
    }

	
	@Override
    public int hashCode() {
        return domainCode.hashCode() + code.hashCode();
    }

	public String getDomainCode() {
		return domainCode;
	}

	public void setDomainCode(String domainCode) {
		this.domainCode = domainCode;
	}

	public String getCode() {
		return code;
	}

	public void setCode(String code) {
		this.code = code;
	}

}
