package com.fas.model.fin.domain;

import java.math.BigDecimal;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "TB_FIN_WALLTRANT")
public class FinWallTrantDomain {

	private static final long serialVersionUID = 1L;
	
	@Id
	@Column(name="itemCode")
	private String itemCode;
	
	@Column(name="bokItemCode")	
	private String bokItemCode;
	
	@Column(name="itemNm")	
	private String itemNm;
	
	@Column(name="bokItemNm")	
	private String bokItemNm;
	
	@Column(name="wall")	
	private BigDecimal wall;
	
	@Column(name="trant")	
	private BigDecimal trant;

	public String getItemCode() {
		return itemCode;
	}

	public void setItemCode(String itemCode) {
		this.itemCode = itemCode;
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

	public BigDecimal getWall() {
		return wall;
	}

	public void setWall(BigDecimal wall) {
		this.wall = wall;
	}

	public BigDecimal getTrant() {
		return trant;
	}

	public void setTrant(BigDecimal trant) {
		this.trant = trant;
	}
	
}
