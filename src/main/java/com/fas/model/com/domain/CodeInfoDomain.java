package com.fas.model.com.domain;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.IdClass;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.fas.model.repository.pk.CodeInfoPK;

@Entity
@Table(name = "TB_CODE_INFO")
@IdClass(value=CodeInfoPK.class)
public class CodeInfoDomain {

	@Id
	@Column(name="domainCode")
	private String domainCode;

	@Id
	@Column(name="code")
	private String code;
	
	@Column(name="domainCodeNm")
	private String domainCodeNm;
	
	@Column(name="codeNm")
	private String codeNm;
	
	@Column(name="groupCode")
	private String groupCode;
	
	@Column(name="codeCon")
	private String codeCon;
	
	@Column(name="useYn")
	private String useYn;

	public String getDomainCode() {
		return domainCode;
	}

	public void setDomainCode(String domainCode) {
		this.domainCode = domainCode;
	}

	public String getCode() {
		return code;
	}

	public void setCode(String code) {
		this.code = code;
	}

	public String getDomainCodeNm() {
		return domainCodeNm;
	}

	public void setDomainCodeNm(String domainCodeNm) {
		this.domainCodeNm = domainCodeNm;
	}

	public String getCodeNm() {
		return codeNm;
	}

	public void setCodeNm(String codeNm) {
		this.codeNm = codeNm;
	}

	public String getGroupCode() {
		return groupCode;
	}

	public void setGroupCode(String groupCode) {
		this.groupCode = groupCode;
	}

	public String getCodeCon() {
		return codeCon;
	}

	public void setCodeCon(String codeCon) {
		this.codeCon = codeCon;
	}

	public String getUseYn() {
		return useYn;
	}

	public void setUseYn(String useYn) {
		this.useYn = useYn;
	}
	
}


