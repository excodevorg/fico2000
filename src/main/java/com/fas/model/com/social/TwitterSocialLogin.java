package com.fas.model.com.social;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.social.connect.Connection;
import org.springframework.social.twitter.api.Twitter;
import org.springframework.social.twitter.api.TwitterProfile;
import org.springframework.social.twitter.api.impl.TwitterTemplate;
import org.springframework.social.twitter.connect.TwitterConnectionFactory;
import org.springframework.social.oauth1.AuthorizedRequestToken;
import org.springframework.social.oauth1.OAuth1Operations;
import org.springframework.social.oauth1.OAuth1Parameters;
import org.springframework.social.oauth1.OAuthToken;
import org.springframework.stereotype.Repository;

import com.fas.cmmn.formVo.UserInfoFormVo;
import com.fas.cmmn.util.FasComUtil;
import com.fas.model.com.UserInfoManager;
import com.fas.model.com.UserRoleManager;
import com.fas.model.com.domain.UserInfoDomain;
import com.fas.model.com.domain.UserRoleDomain;
import com.fas.model.com.social.util.TwitterProfileWithEmail;
import com.fas.web.cmmn.exception.BizException;
import com.fas.web.cmmn.session.SessionIF;
import com.fas.web.cmmn.session.SessionMgr;
import com.fas.web.cmmn.util.BeanUtils;
import com.fas.web.cmmn.util.ComConst;
import com.fas.web.cmmn.util.HttpUtil;
import com.fas.web.cmmn.util.StringUtil;

@Repository("TwitterSocialLogin")
public class TwitterSocialLogin  extends AbstractSocialLogin {
	
	private static Log logger = LogFactory.getLog(TwitterSocialLogin.class);

	@Autowired
	private UserInfoManager manager;

	@Resource(name="twitterConnectionFactory")
	private TwitterConnectionFactory twitterConnectionFactory;

	@Resource(name="UserRoleManager")
	private UserRoleManager userRoleManager;	
	
	@Resource(name="HttpUtil")
	private HttpUtil httpUtil;
	
	@Resource(name="FasComUtil")
	private FasComUtil fasComUtil;	
	
	@Resource(name="comConst")
	private ComConst comConst;
	
	@Override
	public String oauth2CallUrl() throws Exception {
		OAuth1Operations oauthOperations = twitterConnectionFactory.getOAuthOperations();
		//OAuthToken requestToken = oauthOperations.fetchRequestToken( "https://www.fico2000.com/twitter/OAuth2callback.do", null );
		OAuthToken requestToken = oauthOperations.fetchRequestToken( comConst.getHostUrl() + "/twitter/OAuth2callback.do", null );
		String url = oauthOperations.buildAuthorizeUrl( requestToken.getValue(), OAuth1Parameters.NONE );
		logger.debug("url >> " + url);
		
		//Session 저장
		SessionIF sessionIF = new SessionMgr();
		sessionIF.setSession("requestToken",requestToken);
		
		return url;
	}

	@Override
	public Map oauth2callback(String code) throws Exception {
		return null;
	}
	
	@Override
	public Map oauth2callback(String oauthtoken, String oauthVerifier) throws Exception {
		
		logger.debug(">>> oauth2callback start : [" + oauthtoken +"] [" + oauthVerifier + "]");
		
		//1) 선언
		BeanUtils beanUtil = new BeanUtils();
		
		OAuth1Operations oauthOperations = twitterConnectionFactory.getOAuthOperations();
		OAuthToken requestToken = (OAuthToken) httpUtil.getSessionAttribute("requestToken");
		
		logger.debug(">>> requestToken  [" + requestToken +"]");
		
		OAuthToken accessToken = oauthOperations.exchangeForAccessToken(new AuthorizedRequestToken(requestToken, oauthVerifier), null);
		
		logger.debug(">>> accessToken  [" + accessToken +"]");
		
		Connection<Twitter> connection = twitterConnectionFactory.createConnection(accessToken);
		
		Twitter twitter = connection == null ? new TwitterTemplate(accessToken.getValue()) : connection.getApi();
		
		TwitterProfile profile = twitter.userOperations().getUserProfile();
		
		logger.debug("name >> " + StringUtil.nvl(profile.getName()));
		
		TwitterProfileWithEmail response = twitter.restOperations().getForObject("https://api.twitter.com/1.1/account/verify_credentials.json?include_email=true", TwitterProfileWithEmail.class);
		
		logger.debug("toString $$$$>>> " + beanUtil.toString1(response));
		
		String myId = StringUtil.nvl(""+profile.getId()); 
		String myName = StringUtil.nvl(profile.getName());
        String myEmail = StringUtil.nvl(response.getEmail());
        String facebookId = StringUtil.nvl(StringUtil.nvl(""+profile.getId()));
        
        
		
		logger.debug("add >>> " +  response.getAdditionalProperties());
		
		logger.debug("myEmail >>> " + myEmail);
        logger.debug("myName >>> " + myName);
        
        Map resultMap = new HashMap();
        
        resultMap.put("email", StringUtil.nvl(myEmail));
        resultMap.put("name", StringUtil.nvl(myName));
        resultMap.put("id", StringUtil.nvl(myId));
        
        if (StringUtil.isEmpty(StringUtil.nvl(myEmail))) {
        	resultMap.put("errMsg", "Twitter 로그인 세션이 만료 되었습니다.");
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

}

