package com.fas.model.repository.pk;

import java.io.Serializable;

import javax.persistence.Column;

public class QsrBaseInfoPK implements Serializable {
	
	@Column(name="qstrId")
	private String qstrId;
	
	@Column(name="lsqsTcd")
	private String lsqsTcd;
	
	@Override
    public boolean equals(Object obj) {
		if(obj instanceof QsrBaseInfoPK) {
			QsrBaseInfoPK carPk = (QsrBaseInfoPK) obj;
			
			if (!carPk.getQstrId().equals(qstrId)) {
				return false;
			}
			
			if (!carPk.getLsqsTcd().equals(lsqsTcd)) {
				return false;
			}
			
			return true;
		}
		
		return false;
	}
	
	@Override
    public int hashCode() {
		return qstrId.hashCode() + lsqsTcd.hashCode();
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
	
}
