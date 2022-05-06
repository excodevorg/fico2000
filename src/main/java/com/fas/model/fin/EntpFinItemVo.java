package com.fas.model.fin;

import java.math.BigDecimal;

public class EntpFinItemVo {
	
	private String stacYy; //결산년
	private String userid; //사용자ID
	private String bzn; //사업자번호
	private String name; //기업명
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
	
	
	private String alyid;
	
	public String getAlyid() {
		return alyid;
	}
	public void setAlyid(String alyid) {
		this.alyid = alyid;
	}
	public String getBzn() {
		return bzn;
	}
	public void setBzn(String bzn) {
		this.bzn = bzn;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
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
		if (finAmt == null) return BigDecimal.ZERO;
		return finAmt;
	}
	public void setFinAmt(BigDecimal finAmt) {
		this.finAmt = finAmt;
	}
	public String getStacYy() {
		return stacYy;
	}
	public void setStacYy(String stacYy) {
		this.stacYy = stacYy;
	}
	public String getUserid() {
		return userid;
	}
	public void setUserid(String userid) {
		this.userid = userid;
	}
	public String getFinTitle() {
		return finTitle;
	}
	public void setFinTitle(String finTitle) {
		this.finTitle = finTitle;
	}
	
	
	
}
