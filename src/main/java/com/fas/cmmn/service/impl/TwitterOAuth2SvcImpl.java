package com.fas.cmmn.service.impl;

import java.util.Map;

import org.springframework.stereotype.Service;

import com.fas.cmmn.service.OAuth2Svc;
import com.fas.model.com.SocialLoginFactory;
import com.fas.model.com.social.AbstractSocialLogin;

@Service("TwitterOAuth2Svc")
public class TwitterOAuth2SvcImpl implements OAuth2Svc {

	public String oauth2CallUrl() throws Exception {
		AbstractSocialLogin socialLogin = SocialLoginFactory.socialConnectFactory("twitter");
		return socialLogin.oauth2CallUrl();
	}
	
	public Map oauth2callback(String code) throws Exception {
		return null;
	}
	
	public Map oauth2callback(String oauthtoken, String oauthVerifier) throws Exception {
		AbstractSocialLogin socialLogin = SocialLoginFactory.socialConnectFactory("twitter");
		return socialLogin.oauth2callback(oauthtoken, oauthVerifier);
	}
	
	public Map socialLoginInfo() throws Exception {
		AbstractSocialLogin socialLogin = SocialLoginFactory.socialConnectFactory("twitter");
		return socialLogin.socialLoginInfo();
	}
	
}
