package com.fas.model.com.social;

import java.util.List;
import java.util.Map;
import java.util.HashMap;

import javax.annotation.Resource;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.social.google.api.Google;
import org.springframework.social.google.api.impl.GoogleTemplate;
import org.springframework.social.google.api.plus.Person; 
import org.springframework.social.google.connect.GoogleConnectionFactory;
import org.springframework.social.connect.Connection;
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
import com.fas.web.cmmn.exception.BizException;
import com.fas.web.cmmn.session.SessionIF;
import com.fas.web.cmmn.session.SessionMgr;
import com.fas.web.cmmn.util.BeanUtils;
import com.fas.web.cmmn.util.HttpUtil;
import com.fas.web.cmmn.util.StringUtil;

@Repository("GoogleSocialLogin")
public class GoogleSocialLogin extends AbstractSocialLogin {
  
	private static Log logger = LogFactory.getLog(GoogleSocialLogin.class);
	
	@Autowired
	private UserInfoManager manager;
	
	@Resource(name="googleConnectionFactory")
	private GoogleConnectionFactory googleConnectionFactory;
	
	@Resource(name="googleOAuth2Parameters")
	private OAuth2Parameters googleOAuth2Parameters;
	
	@Resource(name="UserRoleManager")
	private UserRoleManager userRoleManager;	
	
	@Resource(name="HttpUtil")
	private HttpUtil httpUtil;
	
	@Resource(name="FasComUtil")
	private FasComUtil fasComUtil;
	
	public String oauth2CallUrl() throws Exception {
		OAuth2Operations oauthOperations = googleConnectionFactory.getOAuthOperations();
		String url = oauthOperations.buildAuthorizeUrl(GrantType.AUTHORIZATION_CODE, googleOAuth2Parameters);
		return url;
	}
	
	public Map oauth2callback(String code) throws Exception {
		
		//1) 선언
		BeanUtils beanUtil = new BeanUtils();
		
		OAuth2Operations oauthOperations = googleConnectionFactory.getOAuthOperations();
		AccessGrant accessGrant = oauthOperations.exchangeForAccess(code, googleOAuth2Parameters.getRedirectUri(), null);
		String accessToken = accessGrant.getAccessToken();
		
		Long expireTime =  accessGrant.getExpireTime();
		
		if (expireTime != null && expireTime < System.currentTimeMillis()) {
			accessToken = accessGrant.getRefreshToken();
			System.out.println("accessToken is expired. refresh token = {}" + accessToken);
			
		}
		
		Connection<Google>connection = googleConnectionFactory.createConnection(accessGrant);
		Google google = connection == null ? new GoogleTemplate(accessToken) : connection.getApi();
		
		Person googlePerson = google.plusOperations().getPerson("me");
		
		Map resultMap = new HashMap();
		
		String myId = googlePerson.getId();
		String myName = googlePerson.getDisplayName();
        String myEmail = googlePerson.getAccountEmail();
        String googleId = StringUtil.nvl(googlePerson.getId());
        
        if (StringUtil.isEmpty(StringUtil.nvl(myEmail))) {
        	resultMap.put("errMsg", "Google 로그인 세션이 만료 되었습니다.");
        	return resultMap;
        }
		
		resultMap.put("email", StringUtil.nvl(googlePerson.getAccountEmail()));
		resultMap.put("name", StringUtil.nvl(googlePerson.getDisplayName()));
		resultMap.put("id", StringUtil.nvl(googlePerson.getId()));
		
		UserInfoDomain userDomain = new UserInfoDomain();
		userDomain.setUserId(StringUtil.nvl(myEmail));
		userDomain.setUserNm(StringUtil.nvl(myName));
		userDomain.setUseyn("Y");
		userDomain.setGoogleid(googleId);
		
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
		
		return resultMap;
	}
	
	public Map socialLoginInfo() throws Exception {
		Map resultMap = new HashMap();
		resultMap.put("email", StringUtil.nvl((String)httpUtil.getSessionAttribute("socialEmail")));
		resultMap.put("name", StringUtil.nvl((String)httpUtil.getSessionAttribute("socialName")));
		resultMap.put("id", StringUtil.nvl((String)httpUtil.getSessionAttribute("socialId")));
		resultMap.put("socialKind", StringUtil.nvl((String)httpUtil.getSessionAttribute("socialKind")));
		
		logger.debug("$$$%%^^^^ resultMap id : " + resultMap.get("id"));
		
		return resultMap;
	}

	@Override
	public Map oauth2callback(String oauthtoken, String oauthVerifier) throws Exception {
		// TODO Auto-generated method stub
		return null;
	}
	
}
