package com.fas.cmmn.service;

import java.util.Map;

public interface OAuth2Svc {

	public String oauth2CallUrl() throws Exception;
	public Map oauth2callback(String code) throws Exception;
	public Map socialLoginInfo() throws Exception;
	public Map oauth2callback(String oauthtoken, String oauthVerifier) throws Exception;
	
}
