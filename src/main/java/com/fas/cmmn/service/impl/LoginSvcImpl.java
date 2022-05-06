package com.fas.cmmn.service.impl;

import java.util.Map;

import javax.annotation.Resource;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.fas.cmmn.formVo.UserInfoFormVo;
import com.fas.cmmn.service.LoginSvc;
import com.fas.cmmn.util.FasComUtil;
import com.fas.cmmn.util.KeyGenerator;
import com.fas.model.com.AuthCodeManager;
import com.fas.model.com.UserInfoManager;
import com.fas.model.com.UserRoleManager;
import com.fas.model.com.domain.AuthCodeDomain;
import com.fas.model.com.domain.UserInfoDomain;
import com.fas.model.com.domain.UserRoleDomain;
import com.fas.web.cmmn.dataaccess.util.JsonObjectModel;
import com.fas.web.cmmn.exception.BizException;
import com.fas.web.cmmn.session.SessionIF;
import com.fas.web.cmmn.session.SessionMgr;
import com.fas.web.cmmn.util.BeanUtils;
import com.fas.web.cmmn.util.HttpUtil;
import com.fas.web.cmmn.util.StringUtil;
import com.fas.web.cmmn.util.TextEncryptorUtil;

@Service("LoginSvc")
public class LoginSvcImpl implements LoginSvc {

	@Autowired
	private UserInfoManager manager;
	
	@Resource(name="HttpUtil")
	private HttpUtil httpUtil;
	
	@Resource(name="FasComUtil")
	private FasComUtil fasComUtil;
	
	@Resource(name="UserRoleManager")
	private UserRoleManager userRoleManager;
	
	@Autowired
	private AuthCodeManager authCodeManager;
	
	private static Log logger = LogFactory.getLog(LoginSvcImpl.class);
	
	//Social에 의한 로그인
	public JsonObjectModel loginWithSocial(UserInfoFormVo param) throws Exception {
		
		//1) 선언
		BeanUtils beanUtil = new BeanUtils();
		JsonObjectModel resultMap = new JsonObjectModel();
		
		//2) 
		UserInfoDomain domain = (UserInfoDomain) beanUtil.toCopy(param, new UserInfoDomain());
		
		logger.debug(">>>>> domain userId >>>> " + domain.getUserId());
		
		logger.debug(">>>>> domain param >>>> " + param.getUserId());		
		
		String socialId = StringUtil.nvl((String)httpUtil.getSessionAttribute("socialId"));
		
		
		if (StringUtil.isEmpty(socialId)) {
			resultMap.putData("userInfo", new UserInfoDomain());
			resultMap.success();
			return resultMap;
		} 
		
		
		//Session value setting
		SessionIF sessionIF = new SessionMgr();
				
		UserInfoDomain socialDomain = new UserInfoDomain();
		UserInfoDomain socialDomain01 = new UserInfoDomain();
		UserInfoDomain socialDomain02 = new UserInfoDomain();
		UserInfoDomain socialDomain03 = new UserInfoDomain();
		
		//1) facebook
		socialDomain.setFacebookid(socialId);
		socialDomain.setTwitterid(null);
		socialDomain.setGoogleid(null);
		socialDomain.setKakaoid(null);
		socialDomain = manager.getUserInfo(socialDomain);
		
		if (socialDomain != null && !StringUtil.isEmpty(socialDomain.getUserId())) {
			resultMap.putData("userInfo", socialDomain);
			sessionIF.setSession("userInfo",socialDomain);
			UserRoleDomain userRole = new UserRoleDomain();
			userRole.setUserid(socialDomain.getUserId());
			sessionIF.setSession("userRoleList",userRoleManager.userRoleList(userRole));
			
			sessionIF.setSession("socialId", "");
			sessionIF.setSession("socialName", "");
			sessionIF.setSession("socialEmail", "");
			
			
			resultMap.success();
		}
		
		//2) twitter
		socialDomain01.setFacebookid(null);
		socialDomain01.setTwitterid(socialId);
		socialDomain01.setGoogleid(null);
		socialDomain01.setKakaoid(null);
		socialDomain01 = manager.getUserInfo(socialDomain01);
		
		if (socialDomain01 != null && !StringUtil.isEmpty(socialDomain01.getUserId())) {
			resultMap.putData("userInfo", socialDomain01);
			sessionIF.setSession("userInfo",socialDomain01);
			UserRoleDomain userRole = new UserRoleDomain();
			userRole.setUserid(socialDomain01.getUserId());
			sessionIF.setSession("userRoleList",userRoleManager.userRoleList(userRole));
			
			sessionIF.setSession("socialId", "");
			sessionIF.setSession("socialName", "");
			sessionIF.setSession("socialEmail", "");
			
			
			resultMap.success();
		}
		
		//3) google
		socialDomain02.setFacebookid(null);
		socialDomain02.setTwitterid(null);
		socialDomain02.setGoogleid(socialId);
		socialDomain02.setKakaoid(null);
		socialDomain02 = manager.getUserInfo(socialDomain02);
		
		if (socialDomain02 != null && !StringUtil.isEmpty(socialDomain02.getUserId())) {
			resultMap.putData("userInfo", socialDomain02);
			sessionIF.setSession("userInfo",socialDomain02);
			UserRoleDomain userRole = new UserRoleDomain();
			userRole.setUserid(socialDomain02.getUserId());
			sessionIF.setSession("userRoleList",userRoleManager.userRoleList(userRole));
			
			sessionIF.setSession("socialId", "");
			sessionIF.setSession("socialName", "");
			sessionIF.setSession("socialEmail", "");
			
			
			resultMap.success();
		}

		//4) kakao
		socialDomain03.setFacebookid(null);
		socialDomain03.setTwitterid(null);
		socialDomain03.setGoogleid(null);
		socialDomain03.setKakaoid(socialId);
		socialDomain03 = manager.getUserInfo(socialDomain03);
		
		if (socialDomain03 != null && !StringUtil.isEmpty(socialDomain03.getUserId())) {
			resultMap.putData("userInfo", socialDomain03);
			sessionIF.setSession("userInfo",socialDomain03);
			UserRoleDomain userRole = new UserRoleDomain();
			userRole.setUserid(socialDomain03.getUserId());
			sessionIF.setSession("userRoleList",userRoleManager.userRoleList(userRole));

			sessionIF.setSession("socialId", "");
			sessionIF.setSession("socialName", "");
			sessionIF.setSession("socialEmail", "");

			
			resultMap.success();
		}
		
		if (socialDomain == null && socialDomain01 == null && socialDomain02 == null && socialDomain03 == null) {
			resultMap.fail("등록된 소셜 고유 정보가 없습니다. 소셜 등록을 해주시기 바랍니다.");
		} else {
			UserInfoDomain resultInfoDomain = (UserInfoDomain) ((Map) resultMap.getMap().get("data")).get("userInfo");
			if (resultInfoDomain != null) {
				//Setting
				UserInfoFormVo resultDomain = (UserInfoFormVo) beanUtil.toCopy(resultInfoDomain, new UserInfoFormVo());
				resultDomain.setRolecode(httpUtil.getLastRoleCode());
				resultDomain.setRolecodeNm(fasComUtil.codeName(httpUtil.getLastRoleCode()));
				resultDomain.setImgUrl(resultInfoDomain.getImgUrl());
				resultMap.putData("userInfo", resultDomain);
				
				logger.debug("####### rolecode >>> " + resultDomain.getRolecode());
				logger.debug("####### rolecode >>> " + resultDomain.getRolecode().substring(0,7));
				logger.debug("####### rolecodeNm >>> " + resultDomain.getRolecodeNm());
				
				//1) 확인 이메일을 승인했는지 여부 확인
				AuthCodeDomain authcodeDomain = new AuthCodeDomain();
				authcodeDomain.setAuthcode(resultInfoDomain.getAuthcode());
				if (!authCodeManager.isSecureCodeCnfa(authcodeDomain)) {
					throw new BizException("999998", new String[] {"이메일이 확이되지 않았습니다. 전송된 확인 요청 이메일을 확인하시기 바랍니다."}); 
				}
				
				sessionIF.setSession("userInfo",resultDomain);
				
			} else {
				logger.debug("####### userInfo Not Data ######");
			}
		}
		
		return  resultMap;
	}
	
	//ID vs PWD 로그인
	public JsonObjectModel loginWithIdPwd(UserInfoFormVo param) throws Exception {
		
		//1) 선언
		BeanUtils beanUtil = new BeanUtils();
		JsonObjectModel resultMap = new JsonObjectModel();
		
		//1-1) 복호화
		param.setUserId(fasComUtil.decryptRsa(param.getSecureUserId()));
		param.setUserPwd(fasComUtil.decryptRsa(param.getSecureUserPwd()));
		
		//2) 
		UserInfoDomain domain = (UserInfoDomain) beanUtil.toCopy(param, new UserInfoDomain());
		
		logger.debug(">>>>> domain userId >>>> " + domain.getUserId());
		
		logger.debug(">>>>> domain param >>>> " + param.getUserId());
		
		UserInfoDomain IdDomain = new UserInfoDomain();
		
		IdDomain.setUserId(domain.getUserId());
		
		IdDomain = manager.getUserInfo(IdDomain);
		
		TextEncryptorUtil util = new TextEncryptorUtil();
		
		if (IdDomain == null || StringUtil.isEmpty(IdDomain.getUserId())) {
			resultMap.fail("등록되지 않은 사용자 입니다.");
		} else if (!param.getUserPwd().equals(util.decrypt(IdDomain.getUserPwd()))) {
			resultMap.fail("비밀번호가 잘못되었습니다.");
		} else {
			
			//1) 확인 이메일을 승인했는지 여부 확인
			AuthCodeDomain authcodeDomain = new AuthCodeDomain();
			authcodeDomain.setAuthcode(IdDomain.getAuthcode());
			if (!authCodeManager.isSecureCodeCnfa(authcodeDomain)) {
				throw new BizException("999998", new String[] {"이메일이 확이되지 않았습니다. 전송된 확인 요청 이메일을 확인하시기 바랍니다."}); 
			}
			
			SessionIF sessionIF = new SessionMgr();
			sessionIF.setSession("userInfo",IdDomain);
			
			UserRoleDomain userRole = new UserRoleDomain();
			userRole.setUserid(IdDomain.getUserId());
			sessionIF.setSession("userRoleList",userRoleManager.userRoleList(userRole));
			
			//Setting
			UserInfoFormVo resultDomain = (UserInfoFormVo) beanUtil.toCopy(IdDomain, new UserInfoFormVo());
			resultDomain.setRolecode(httpUtil.getLastRoleCode());
			resultDomain.setRolecodeNm(fasComUtil.codeName(httpUtil.getLastRoleCode()));
			resultDomain.setImgUrl(IdDomain.getImgUrl());
			resultMap.putData("userInfo", resultDomain);
			
			sessionIF.setSession("userInfo",resultDomain);
			
			resultMap.success();
			
		}
		
		return resultMap;
	}
	
	//Session에 UserInfo
	public JsonObjectModel getSessionUserInfo(UserInfoFormVo param) throws Exception {
		JsonObjectModel resultMap = new JsonObjectModel();
		SessionIF sessionIF = new SessionMgr();
		BeanUtils beanUtil = new BeanUtils();
		UserInfoFormVo userInfoDomain = (UserInfoFormVo) sessionIF.getSession().getAttribute("userInfo");
		
		if (userInfoDomain == null || StringUtil.isEmpty(userInfoDomain.getUserId())) {
			resultMap.fail("로그인 정보가 없습니다.");
		} else {
			
			//Setting
			userInfoDomain.setUserPwd("");
			userInfoDomain.setUserPwd2("");
			userInfoDomain.setRolecode(httpUtil.getLastRoleCode());
			userInfoDomain.setRolecodeNm(fasComUtil.codeName(httpUtil.getLastRoleCode()));
			resultMap.putData("userInfo", userInfoDomain);
		}
		
		return resultMap;
	}
	
	//로그아웃 
	public JsonObjectModel logout(UserInfoFormVo param) throws Exception {
		JsonObjectModel resultMap = new JsonObjectModel();
		SessionIF sessionIF = new SessionMgr();
		
		sessionIF.getSession().invalidate();
		
		resultMap.success("로그아웃되었습니다.");
		
		return resultMap;
		
	}
	
	//임시 비밀번호 발급
	public JsonObjectModel tempPasswdMake(UserInfoFormVo param) throws Exception {
		
		//1) 선언
		BeanUtils beanUtil = new BeanUtils();
		JsonObjectModel resultMap = new JsonObjectModel();
		
		//1-1) 복호화
		param.setUserId(fasComUtil.decryptRsa(param.getSecureUserId()));
		
		//2) 
		UserInfoDomain domain = (UserInfoDomain) beanUtil.toCopy(param, new UserInfoDomain());		
		
		
		UserInfoDomain IdDomain = new UserInfoDomain();
		
		IdDomain.setUserId(domain.getUserId());
		
		IdDomain = manager.getUserInfo(IdDomain);
		
		if (IdDomain == null || StringUtil.isEmpty(IdDomain.getUserId())) {
			throw new BizException("999998", new String[] {"기 등록된 회원 정보가 없습니다."});
		} else {
			
			TextEncryptorUtil util = new TextEncryptorUtil();
			
			String tempPasswd = KeyGenerator.getUUID();
			
			tempPasswd = tempPasswd.substring(0,8);
			
			IdDomain.setUserPwd(util.encrypt(tempPasswd));
			
			manager.userPwdMdfc(IdDomain);
			
			resultMap.success("인증된 메일로 임시비밀번호가 발급되었습니다. 확인하시기 바랍니다.");
		}
				
		return resultMap;
		
	}
	
}

