package com.fas.model.com.social;

import java.util.Map;

public abstract class AbstractSocialLogin {

	public abstract String oauth2CallUrl() throws Exception;
	
	public abstract Map oauth2callback(String code) throws Exception;
	
	public abstract Map socialLoginInfo() throws Exception;
	
	public abstract Map oauth2callback(String oauthtoken, String oauthVerifier) throws Exception;
	
}
