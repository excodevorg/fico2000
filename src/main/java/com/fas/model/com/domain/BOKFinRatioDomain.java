package com.fas.model.com.domain;

import java.math.BigDecimal;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.IdClass;
import javax.persistence.Table;

import com.fas.model.repository.pk.BOKFinRatioPK;

@Entity
@Table(name="TB_BOK_FINRATIO")
@IdClass(value=BOKFinRatioPK.class)
public class BOKFinRatioDomain {

	@Id
	@Column(name="statCode")
	private String statCode;

	@Id
	@Column(name="itemCode")
	private String itemCode;
	
	@Id
	@Column(name="tpbsClsfDcd")	
	private String tpbsClsfDcd;
	
	@Id
	@Column(name="enslDcd")	
	private String enslDcd;
	
	@Id
	@Column(name="baseYear")
	private String baseYear;
	
	@Column(name="bokItemCode")
	private String bokItemCode;
	
	@Column(name="itemNm")
	private String itemNm;
	
	@Column(name="bokItemNm")
	private String bokItemNm;
	
	@Column(name="cycle")
	private String cycle;
	
	@Column(name="type")
	private String type;
	
	@Column(name="groupCode")
	private String groupCode;
	
	@Column(name="statValue")
	private BigDecimal statValue;
	
	public String getStatCode() {
		return statCode;
	}
	public void setStatCode(String statCode) {
		this.statCode = statCode;
	}
	public String getItemCode() {
		return itemCode;
	}
	public void setItemCode(String itemCode) {
		this.itemCode = itemCode;
	}
	public String getTpbsClsfDcd() {
		return tpbsClsfDcd;
	}
	public void setTpbsClsfDcd(String tpbsClsfDcd) {
		this.tpbsClsfDcd = tpbsClsfDcd;
	}
	public String getEnslDcd() {
		return enslDcd;
	}
	public void setEnslDcd(String enslDcd) {
		this.enslDcd = enslDcd;
	}
	public String getBaseYear() {
		return baseYear;
	}
	public void setBaseYear(String baseYear) {
		this.baseYear = baseYear;
	}
	public String getBokItemCode() {
		return bokItemCode;
	}
	public void setBokItemCode(String bokItemCode) {
		this.bokItemCode = bokItemCode;
	}
	public String getItemNm() {
		return itemNm;
	}
	public void setItemNm(String itemNm) {
		this.itemNm = itemNm;
	}
	public String getBokItemNm() {
		return bokItemNm;
	}
	public void setBokItemNm(String bokItemNm) {
		this.bokItemNm = bokItemNm;
	}
	public String getCycle() {
		return cycle;
	}
	public void setCycle(String cycle) {
		this.cycle = cycle;
	}
	public String getType() {
		return type;
	}
	public void setType(String type) {
		this.type = type;
	}
	public String getGroupCode() {
		return groupCode;
	}
	public void setGroupCode(String groupCode) {
		this.groupCode = groupCode;
	}
	public BigDecimal getStatValue() {
		return statValue;
	}
	public void setStatValue(BigDecimal statValue) {
		this.statValue = statValue;
	}	
	
}
