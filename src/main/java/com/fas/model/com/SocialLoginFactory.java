package com.fas.model.com;

import com.fas.model.com.social.AbstractSocialLogin;
import com.fas.web.cmmn.util.SpringApplicationContext;

public class SocialLoginFactory {

	public static AbstractSocialLogin socialConnectFactory(String type) throws Exception {
		
		if ("google".equals(type)) {
			return (AbstractSocialLogin) SpringApplicationContext.getBean("GoogleSocialLogin");
		} else if ("facebook".equals(type)) {
			return (AbstractSocialLogin) SpringApplicationContext.getBean("FacebookSocialLogin");	
		} else if ("twitter".equals(type)) {
			return (AbstractSocialLogin) SpringApplicationContext.getBean("TwitterSocialLogin");
		} else if ("kakao".equals(type)) {
			return (AbstractSocialLogin) SpringApplicationContext.getBean("KakaoSocialLogin");	
		} else {
			throw new Exception("Social Type Error : [google, ttwiter, facebook, kakao ");
		}
		
	}
	
}
