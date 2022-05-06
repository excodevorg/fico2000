package com.fas.model.com.domain;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "TB_BOARD_ADM")
public class BoardAdmDomain {

	@Id
	@Column(name="num")
	private int num;
	
	@Column(name="code")
	private String code;

	@Column(name="bbsname")
	private String bbsname;
	
	@Column(name="passwd")
	private String passwd;

	@Column(name="readonly")
	private String readonly;

	public int getNum() {
		return num;
	}

	public void setNum(int num) {
		this.num = num;
	}

	public String getCode() {
		return code;
	}

	public void setCode(String code) {
		this.code = code;
	}

	public String getBbsname() {
		return bbsname;
	}

	public void setBbsname(String bbsname) {
		this.bbsname = bbsname;
	}

	public String getPasswd() {
		return passwd;
	}

	public void setPasswd(String passwd) {
		this.passwd = passwd;
	}

	public String getReadonly() {
		return readonly;
	}

	public void setReadonly(String readonly) {
		this.readonly = readonly;
	}
	
}
