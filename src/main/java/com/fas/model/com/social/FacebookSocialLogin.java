package com.fas.model.com.social;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.social.connect.Connection;
import org.springframework.social.facebook.connect.FacebookConnectionFactory;
import org.springframework.social.facebook.api.Facebook;
import org.springframework.social.facebook.api.User;
import org.springframework.social.facebook.api.impl.FacebookTemplate;
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

@Repository("FacebookSocialLogin")
public class FacebookSocialLogin extends AbstractSocialLogin {
	
	private static Log logger = LogFactory.getLog(FacebookSocialLogin.class);
	
	@Autowired
	private UserInfoManager manager;
	
	@Resource(name="facebookConnectionFactory")
	private FacebookConnectionFactory facebookConnectionFactory;
	
	@Resource(name="facebookOAuth2Parameters")
	private OAuth2Parameters facebookOAuth2Parameters;
	
	@Resource(name="UserRoleManager")
	private UserRoleManager userRoleManager;	

	@Resource(name="HttpUtil")
	private HttpUtil httpUtil;
	
	@Resource(name="FasComUtil")
	private FasComUtil fasComUtil;	
	
	@Override
	public String oauth2CallUrl() throws Exception {
		OAuth2Operations oauthOperations = facebookConnectionFactory.getOAuthOperations();
		String url = oauthOperations.buildAuthorizeUrl(GrantType.AUTHORIZATION_CODE, facebookOAuth2Parameters);
		return url;
	}

	@Override
	public Map oauth2callback(String code) throws Exception {

		//1) 선언
		BeanUtils beanUtil = new BeanUtils();
		
		logger.debug("facebook oauth2callback start #############");
		
		OAuth2Operations oauthOperations = facebookConnectionFactory.getOAuthOperations();
		AccessGrant accessGrant = oauthOperations.exchangeForAccess(code, facebookOAuth2Parameters.getRedirectUri(), null);
		String accessToken = accessGrant.getAccessToken();
		
		Long expireTime =  accessGrant.getExpireTime();
		
		if (expireTime != null && expireTime < System.currentTimeMillis()) {
			accessToken = accessGrant.getRefreshToken();
			System.out.println("accessToken is expired. refresh token = {}" + accessToken);
			
		}
		
		Connection<Facebook>connection = facebookConnectionFactory.createConnection(accessGrant);
		Facebook facebook = connection == null ? new FacebookTemplate(accessToken) : connection.getApi();
		
		String [] fields = { "id", "email",  "first_name", "last_name" };
		User profile = facebook.fetchObject("me", User.class, fields);
		
		String myId = profile.getId();
		String myName = profile.getFirstName() + " " + profile.getLastName();
        String myEmail = profile.getEmail();
        String facebookId = StringUtil.nvl(profile.getId());
        
        logger.debug("myEmail >>> " + myEmail);
        logger.debug("myName >>> " + myName);
        
        Map resultMap = new HashMap();
        
        resultMap.put("email", StringUtil.nvl(myEmail));
        resultMap.put("name", StringUtil.nvl(myName));
        resultMap.put("id", StringUtil.nvl(myId));
        
        if (StringUtil.isEmpty(StringUtil.nvl(myEmail))) {
        	resultMap.put("errMsg", "Facebook 로그인 세션이 만료 되었습니다.");
        	return resultMap;
        }
		
		UserInfoDomain userDomain = new UserInfoDomain();
		userDomain.setUserId(StringUtil.nvl(myEmail));
		userDomain.setUserNm(StringUtil.nvl(myName));
		userDomain.setUseyn("Y");
		userDomain.setFacebookid(facebookId);
		
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
