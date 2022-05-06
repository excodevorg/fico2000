package com.fas.model.com.domain;

import java.math.BigDecimal;
import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.IdClass;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import javax.persistence.Id;

import com.fas.model.repository.pk.BokDataListPK;
@Entity
@Table(name="TB_BOK_DATALIST")
@IdClass(value=BokDataListPK.class)
public class BOKDataListDomain {
	
	@Id
	@Column(name="STAT_CODE")
	private String statCode;  
	
	@Id
	@Column(name="ITEM_CODE1")
	private String itemCode1;   
	
	@Id
	@Column(name="ITEM_CODE2")
	private String itemCode2;  
	
	@Id
	@Column(name="ITEM_CODE3")
	private String itemCode3;  
	
	@Column(name="frrgts", columnDefinition="DATETIME")
	@Temporal(TemporalType.TIMESTAMP)
	private Date frrgts; //최초등록일 
	
	@Column(name="lastts", columnDefinition="DATETIME")
	@Temporal(TemporalType.TIMESTAMP)
	private Date lastts; //최종수정일      
	
	@Column(name="STAT_NAME")
	private String statName;   
	
	@Column(name="ITEM_NAME1")
	private String itemName1;   
	
	@Column(name="ITEM_NAME2")
	private String itemName2;   
	
	@Column(name="ITEM_NAME3")
	private String itemName3;    
	
	@Column(name="UNIT_NAME")
	private String unitName;    
	
	@Id	
	@Column(name="TIME")
	private String time;  
	
	@Column(name="DATA_VALUE")
	private BigDecimal dataValue;

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

	public Date getFrrgts() {
		return frrgts;
	}

	public void setFrrgts(Date frrgts) {
		this.frrgts = frrgts;
	}

	public Date getLastts() {
		return lastts;
	}

	public void setLastts(Date lastts) {
		this.lastts = lastts;
	}

	public String getStatName() {
		return statName;
	}

	public void setStatName(String statName) {
		this.statName = statName;
	}

	public String getItemName1() {
		return itemName1;
	}

	public void setItemName1(String itemName1) {
		this.itemName1 = itemName1;
	}

	public String getItemName2() {
		return itemName2;
	}

	public void setItemName2(String itemName2) {
		this.itemName2 = itemName2;
	}

	public String getItemName3() {
		return itemName3;
	}

	public void setItemName3(String itemName3) {
		this.itemName3 = itemName3;
	}

	public String getUnitName() {
		return unitName;
	}

	public void setUnitName(String unitName) {
		this.unitName = unitName;
	}

	public String getTime() {
		return time;
	}

	public void setTime(String time) {
		this.time = time;
	}

	public BigDecimal getDataValue() {
		return dataValue;
	}

	public void setDataValue(BigDecimal dataValue) {
		this.dataValue = dataValue;
	}
	
	
	

}
