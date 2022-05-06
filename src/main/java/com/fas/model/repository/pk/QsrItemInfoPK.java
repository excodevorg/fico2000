package com.fas.model.repository.pk;

import java.io.Serializable;

import javax.persistence.Column;

public class QsrItemInfoPK implements Serializable {

	@Column(name="qstrId")
	private String qstrId;
	
	@Column(name="lsqsTcd")
	private String lsqsTcd;
	
	@Column(name="itemId")
	private String itemId;
	
	@Override
    public boolean equals(Object obj) {
		if(obj instanceof QsrItemInfoPK) {
			QsrItemInfoPK carPk = (QsrItemInfoPK) obj;
			
			if (!carPk.getQstrId().equals(qstrId)) {
				return false;
			}
			
			if (!carPk.getLsqsTcd().equals(lsqsTcd)) {
				return false;
			}
			
			if (!carPk.getItemId().equals(itemId)) {
				return false;
			}
			
			return true;
		}
		
		return false;
		
	}
	
	@Override
    public int hashCode() {
		return qstrId.hashCode() + lsqsTcd.hashCode() + itemId.hashCode();
	}	

	public String getQstrId() {
		return qstrId;
	}

	public void setQstrId(String qstrId) {
		this.qstrId = qstrId;
	}

	public String getLsqsTcd() {
		return lsqsTcd;
	}

	public void setLsqsTcd(String lsqsTcd) {
		this.lsqsTcd = lsqsTcd;
	}

	public String getItemId() {
		return itemId;
	}

	public void setItemId(String itemId) {
		this.itemId = itemId;
	}
	
	

}
