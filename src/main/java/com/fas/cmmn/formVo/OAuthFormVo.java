package com.fas.cmmn.formVo;

public class OAuthFormVo {

	private String OAuthUrl; //인증 Url
	
	private String code; //인증 후 받은 token

	public String getOAuthUrl() {
		return OAuthUrl;
	}

	public void setOAuthUrl(String oAuthUrl) {
		OAuthUrl = oAuthUrl;
	}

	public String getCode() {
		return code;
	}

	public void setCode(String code) {
		this.code = code;
	}
	
}
