package com.fas.model.repository.pk;

import java.io.Serializable;

import javax.persistence.Column;

public class QsrRsltInfoPK  implements Serializable {
	
	@Column(name="alyid")
	private String alyid;
	
	@Column(name="qstrId")
	private String qstrId;
	
	@Column(name="lsqsTcd")
	private String lsqsTcd;
	
	@Column(name="itemId")
	private String itemId;
	
	@Column(name="rsltId")
	private String rsltId;
	
	@Override
    public boolean equals(Object obj) {
		
		if(obj instanceof QsrRsltInfoPK) {
			QsrRsltInfoPK carPk = (QsrRsltInfoPK) obj;

			if(!carPk.getAlyid().equals(alyid)) {
				return false;
			}
			
			if (!carPk.getQstrId().equals(qstrId)) {
				return false;
			}
			
			if (!carPk.getLsqsTcd().equals(lsqsTcd)) {
				return false;
			}
			
			if (!carPk.getItemId().equals(itemId)) {
				return false;
			}	
			
			if (!carPk.getItemId().equals(itemId)) {
				return false;
			}	
			
			if (!carPk.getRsltId().equals(rsltId)) {
				return false;
			}
			
			return true;
		}
		
		return false;
	}

	public String getAlyid() {
		return alyid;
	}

	public void setAlyid(String alyid) {
		this.alyid = alyid;
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

	public String getRsltId() {
		return rsltId;
	}

	public void setRsltId(String rsltId) {
		this.rsltId = rsltId;
	}



}
