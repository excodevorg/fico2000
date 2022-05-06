package com.fas.model.repository.pk;

import java.io.Serializable;

import javax.persistence.Column;

public class MenuAuthPK implements Serializable {
	
	@Column(name = "rolecode")
	private String rolecode;
	
	@Column(name = "menuId")
	private int menuId;
	
	public MenuAuthPK () {
		
	}
	
	@Override
    public boolean equals(Object obj) {
        if(obj instanceof MenuAuthPK){
        	MenuAuthPK carPk = (MenuAuthPK) obj;
 
            if(!carPk.getRolecode().equals(rolecode)){
                return false;
            }
 
            if(carPk.getMenuId() != menuId){
                return false;
            }
 
            return true;
        }
 
        return false;
    }

	
	@Override
    public int hashCode() {
        return rolecode.hashCode() + (""+menuId).hashCode();
    }

	public String getRolecode() {
		return rolecode;
	}

	public void setRolecode(String rolecode) {
		this.rolecode = rolecode;
	}

	public int getMenuId() {
		return menuId;
	}

	public void setMenuId(int menuId) {
		this.menuId = menuId;
	}
	
}

