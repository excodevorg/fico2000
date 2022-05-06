package com.fas.model.repository.pk;

import java.io.Serializable;

import javax.persistence.Column;

public class UserRolePK implements Serializable {
	
	@Column(name = "userid")
	private String userid;
	
	@Column(name = "rolecode")
	private String rolecode;
	
	@Override
    public boolean equals(Object obj) {
        if(obj instanceof UserRolePK){
        	UserRolePK carPk = (UserRolePK) obj;
 
            if(!carPk.getUserid().equals(userid)){
                return false;
            }
 
            if(carPk.getRolecode() != null && !carPk.getRolecode().equals(rolecode)){
                return false;
            } else if (carPk.getRolecode() == null) {
            	return false;
            }
 
            return true;
        }
 
        return false;
    }
	
	@Override
    public int hashCode() {
        return userid.hashCode() + rolecode.hashCode();
    }

	public String getUserid() {
		return userid;
	}

	public void setUserid(String userid) {
		this.userid = userid;
	}

	public String getRolecode() {
		return rolecode;
	}

	public void setRolecode(String rolecode) {
		this.rolecode = rolecode;
	}

}
