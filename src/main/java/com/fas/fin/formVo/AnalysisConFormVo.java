package com.fas.fin.formVo;

import java.math.BigDecimal;
import java.util.List;

import com.fas.cmmn.formVo.CmmFormVo;

public class AnalysisConFormVo extends CmmFormVo {
	
	private String alyid;
	
	private String userid;
	
	private String bzn;
	
	private String frrgTs;
	
	private String frrgTsDis;
	
	private String frrgUserId;
	
	private String lastTs;
	
	private String lastTsDis;
	
	private String lastUserId;
	
	private String alycon;
	
	private String delyn;
	
	private String name;
	
	private List<String> stacYys;
	
	private String lastestYn;
	
	private String tpbsClsfDcd;
	
	private String enslDcd;
	
	private String amtUnit;
	
	private String amtUnitNm;
	
	private String itemCode;
	
	private String bokItemCode;
	
	private String itemNm;
	
	private String bokItemNm;
	
	private BigDecimal wall;
	
	private BigDecimal trant;
	
	private int numRow;
	
	public int getNumRow() {
		return numRow;
	}

	public void setNumRow(int numRow) {
		this.numRow = numRow;
	}

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

	public String getAmtUnitNm() {
		return amtUnitNm;
	}

	public void setAmtUnitNm(String amtUnitNm) {
		this.amtUnitNm = amtUnitNm;
	}

	public String getAmtUnit() {
		return amtUnit;
	}

	public void setAmtUnit(String amtUnit) {
		this.amtUnit = amtUnit;
	}

	public String getEnslDcd() {
		return enslDcd;
	}

	public void setEnslDcd(String enslDcd) {
		this.enslDcd = enslDcd;
	}

	public String getTpbsClsfDcd() {
		return tpbsClsfDcd;
	}

	public void setTpbsClsfDcd(String tpbsClsfDcd) {
		this.tpbsClsfDcd = tpbsClsfDcd;
	}

	public String getLastestYn() {
		return lastestYn;
	}

	public void setLastestYn(String lastestYn) {
		this.lastestYn = lastestYn;
	}

	private String stacYy; //결산년
	private String finDcd; //재무구분코드
	private String finDcdNm; //재무구분명
	private String finLrdvcd; //재무대분류코드
	private String finLrdvcdNm; //재무대분류코드명
	private String finMdvcd; //재무중분류코드
	private String finMdvcdNm; //재무중분류코드명
	private String finSmdcd; //소분류코드
	private String finSmdcdNm; //소분류명
	private BigDecimal finAmt; //재무금액
	
	private String finTitle; //제목 (결산 + 재무정보)
	

	public String getAlyid() {
		return alyid;
	}

	public void setAlyid(String alyid) {
		this.alyid = alyid;
	}

	public String getUserid() {
		return userid;
	}

	public void setUserid(String userid) {
		this.userid = userid;
	}

	public String getBzn() {
		return bzn;
	}

	public void setBzn(String bzn) {
		this.bzn = bzn;
	}

	public String getFrrgTs() {
		return frrgTs;
	}

	public void setFrrgTs(String frrgTs) {
		this.frrgTs = frrgTs;
	}

	public String getFrrgTsDis() {
		return frrgTsDis;
	}

	public void setFrrgTsDis(String frrgTsDis) {
		this.frrgTsDis = frrgTsDis;
	}

	public String getFrrgUserId() {
		return frrgUserId;
	}

	public void setFrrgUserId(String frrgUserId) {
		this.frrgUserId = frrgUserId;
	}

	public String getLastTs() {
		return lastTs;
	}

	public void setLastTs(String lastTs) {
		this.lastTs = lastTs;
	}

	public String getLastTsDis() {
		return lastTsDis;
	}

	public void setLastTsDis(String lastTsDis) {
		this.lastTsDis = lastTsDis;
	}

	public String getLastUserId() {
		return lastUserId;
	}

	public void setLastUserId(String lastUserId) {
		this.lastUserId = lastUserId;
	}

	public String getAlycon() {
		return alycon;
	}

	public void setAlycon(String alycon) {
		this.alycon = alycon;
	}

	public String getDelyn() {
		return delyn;
	}

	public void setDelyn(String delyn) {
		this.delyn = delyn;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public List<String> getStacYys() {
		return stacYys;
	}

	public void setStacYys(List<String> stacYys) {
		this.stacYys = stacYys;
	}

	public String getStacYy() {
		return stacYy;
	}

	public void setStacYy(String stacYy) {
		this.stacYy = stacYy;
	}

	public String getFinDcd() {
		return finDcd;
	}

	public void setFinDcd(String finDcd) {
		this.finDcd = finDcd;
	}

	public String getFinDcdNm() {
		return finDcdNm;
	}

	public void setFinDcdNm(String finDcdNm) {
		this.finDcdNm = finDcdNm;
	}

	public String getFinLrdvcd() {
		return finLrdvcd;
	}

	public void setFinLrdvcd(String finLrdvcd) {
		this.finLrdvcd = finLrdvcd;
	}

	public String getFinLrdvcdNm() {
		return finLrdvcdNm;
	}

	public void setFinLrdvcdNm(String finLrdvcdNm) {
		this.finLrdvcdNm = finLrdvcdNm;
	}

	public String getFinMdvcd() {
		return finMdvcd;
	}

	public void setFinMdvcd(String finMdvcd) {
		this.finMdvcd = finMdvcd;
	}

	public String getFinMdvcdNm() {
		return finMdvcdNm;
	}

	public void setFinMdvcdNm(String finMdvcdNm) {
		this.finMdvcdNm = finMdvcdNm;
	}

	public String getFinSmdcd() {
		return finSmdcd;
	}

	public void setFinSmdcd(String finSmdcd) {
		this.finSmdcd = finSmdcd;
	}

	public String getFinSmdcdNm() {
		return finSmdcdNm;
	}

	public void setFinSmdcdNm(String finSmdcdNm) {
		this.finSmdcdNm = finSmdcdNm;
	}

	public BigDecimal getFinAmt() {
		return finAmt;
	}

	public void setFinAmt(BigDecimal finAmt) {
		this.finAmt = finAmt;
	}

	public String getFinTitle() {
		return finTitle;
	}

	public void setFinTitle(String finTitle) {
		this.finTitle = finTitle;
	}
}
