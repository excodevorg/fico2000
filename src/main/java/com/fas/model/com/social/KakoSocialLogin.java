package com.fas.model.com.social;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.social.connect.Connection;
import org.springframework.social.kakao.api.Kakao;
import org.springframework.social.kakao.api.KakaoProfile;
import org.springframework.social.kakao.api.KakaoProfileProperties;
import org.springframework.social.kakao.api.impl.KakaoTemplate;
import org.springframework.social.kakao.connect.KakaoConnectionFactory;
import org.springframework.social.oauth2.AccessGrant;
import org.springframework.social.oauth2.GrantType;
import org.springframework.social.oauth2.OAuth2Operations;
import org.springframework.social.oauth2.OAuth2Parameters;
import org.springframework.stereotype.Repository;

import com.fas.cmmn.formVo.UserInfoFormVo;
import com.fas.cmmn.util.FasComUtil;
import com.fas.model.com.UserInfoManager;
import com.fas.model.com.UserRoleManager;
import com.fas.model.com.domain.UserInfoDomain;
import com.fas.model.com.domain.UserRoleDomain;
import com.fas.model.com.social.util.KakaoLogin;
import com.fas.web.cmmn.session.SessionIF;
import com.fas.web.cmmn.session.SessionMgr;
import com.fas.web.cmmn.util.BeanUtils;
import com.fas.web.cmmn.util.HttpUtil;
import com.fas.web.cmmn.util.StringUtil;
import com.fasterxml.jackson.databind.JsonNode;

@Repository("KakaoSocialLogin")
public class KakoSocialLogin extends AbstractSocialLogin {

	private static Log logger = LogFactory.getLog(KakoSocialLogin.class);

	@Autowired
	private UserInfoManager manager;

	@Resource(name="kakaoConnectionFactory")
	private KakaoConnectionFactory kakaoConnectionFactory;
	
	@Resource(name="kakaoOAuth2Parameters")
	private OAuth2Parameters kakaoOAuth2Parameters;

	@Resource(name="UserRoleManager")
	private UserRoleManager userRoleManager;	

	@Resource(name="HttpUtil")
	private HttpUtil httpUtil;
	
	@Resource(name="FasComUtil")
	private FasComUtil fasComUtil;	
	
	@Override
	public String oauth2CallUrl() throws Exception {
		OAuth2Operations oauthOperations = kakaoConnectionFactory.getOAuthOperations();
		String url = oauthOperations.buildAuthorizeUrl(GrantType.AUTHORIZATION_CODE, kakaoOAuth2Parameters);
		return url;
	}

	@Override 
	public Map oauth2callback(String code) throws Exception {
		
		//1) 선언
		BeanUtils beanUtil = new BeanUtils();		
		
		OAuth2Operations oauthOperations = kakaoConnectionFactory.getOAuthOperations();
		AccessGrant accessGrant = oauthOperations.exchangeForAccess(code, kakaoOAuth2Parameters.getRedirectUri(), null);		
		String accessToken = accessGrant.getAccessToken();
		
		Long expireTime =  accessGrant.getExpireTime();
		
		if (expireTime != null && expireTime < System.currentTimeMillis()) {
			accessToken = accessGrant.getRefreshToken();
			System.out.println("accessToken is expired. refresh token = {}" + accessToken);
				
		}
		
//		JsonNode token = KakaoLogin.getAccessToken(code);
//		
//		logger.debug("code >>> " + code);
//		logger.debug("token.path(access_token).toString() >>> " + token.path("access_token").toString());
		
//		JsonNode profile = KakaoLogin.getKakaoUserInfo(token.path("access_token").toString());
		
		JsonNode profile = KakaoLogin.getKakaoUserInfo(accessToken);		
		
		logger.debug("profile >>> " + profile.toString());
				
		String myId = profile.path("id").asText();
		String myEmail = "";
		String kakaotalkId = profile.path("id").asText();
		
		logger.debug("profile >>> " + profile.toString());
		
		logger.debug("kakaotalkId >>> " + kakaotalkId);
		
		if (profile.path("kaccount_email_verified").asText().equals("true")) { // 이메일 받기 허용 한 경우
			myEmail = profile.path("kaccount_email").asText(); // email -> vo 넣기
		} else { // 이메일 거부 할 경우 코드 추후 개발

		}
		
		JsonNode properties = profile.path("properties"); // 추가정보 받아오기
		String myName =  "";
		if (properties.has("nickname")) myName =   properties.path("nickname").asText();

        Map resultMap = new HashMap();
        
        resultMap.put("email", myEmail);
        resultMap.put("name", StringUtil.nvl(myName));
        resultMap.put("id", StringUtil.nvl(myId));
		
        if (StringUtil.isEmpty(StringUtil.nvl(myEmail))) {
        	resultMap.put("errMsg", "Kakao 이메일 정보가 없거나 확인 되지 않습니다. KaKaoTalk등록 정보를 확인하시기 바랍니다.");
        	return resultMap;
        } else {
        	
        	UserInfoDomain userDomain = new UserInfoDomain();
    		userDomain.setUserId(StringUtil.nvl(myEmail));
    		userDomain.setUserNm(StringUtil.nvl(myName));
    		userDomain.setUseyn("Y");
    		userDomain.setKakaoid(kakaotalkId);
    		
    		UserInfoDomain domain = manager.getUserInfo(userDomain);
    		
    		SessionIF sessionIF = new SessionMgr();
    		
    		//존재하는 경우
    		if (domain != null && !StringUtil.isEmpty(domain.getUserId())) {
    					
    			UserRoleDomain userRole = new UserRoleDomain();
    			userRole.setUserid(domain.getUserId());		
    					
    			List<UserRoleDomain> roleList = userRoleManager.userRoleList(userRole);
    					
    			sessionIF.setSession("userRoleList",roleList);
    					
    			for (UserRoleDomain role : roleList) {
    				logger.debug(role.getRolecode());
    			}
    					
    			UserInfoFormVo resultDomain = (UserInfoFormVo) beanUtil.toCopy(domain, new UserInfoFormVo());
    			sessionIF.setSession("userInfo", resultDomain);
    			logger.debug("httpUtil.getLastRoleCode() >>> " + httpUtil.getLastRoleCode());
    			resultDomain.setRolecode(httpUtil.getLastRoleCode());
    			resultDomain.setRolecodeNm(fasComUtil.codeName(httpUtil.getLastRoleCode()));
    			resultDomain.setImgUrl(domain.getImgUrl());
    			sessionIF.setSession("userInfo", resultDomain);
    					
    		} else {
    		// 존재하지 않는 경우
    			manager.userAllRgsn(userDomain);
    			UserRoleDomain userRole = new UserRoleDomain();
    			userRole.setUserid(userDomain.getUserId());			
    			sessionIF.setSession("userRoleList",userRoleManager.userRoleList(userRole));
    					
    			UserInfoFormVo resultDomain = (UserInfoFormVo) beanUtil.toCopy(userDomain, new UserInfoFormVo());
    					
    			resultDomain.setRolecode(httpUtil.getLastRoleCode());
    			resultDomain.setRolecodeNm(fasComUtil.codeName(httpUtil.getLastRoleCode()));
    			resultDomain.setImgUrl("1.png");
    					
    			sessionIF.setSession("userInfo", resultDomain);
    		}
        }
		return resultMap;

	}

	@Override 
	public Map socialLoginInfo() throws Exception {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Map oauth2callback(String oauthtoken, String oauthVerifier)
			throws Exception {
		// TODO Auto-generated method stub
		return null;
	}
	
}
