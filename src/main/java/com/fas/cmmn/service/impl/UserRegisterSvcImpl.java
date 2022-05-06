package com.fas.cmmn.service.impl;

import javax.annotation.Resource;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.hsqldb.lib.StringUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.fas.cmmn.formVo.UserInfoFormVo;
import com.fas.cmmn.service.UserRegisterSvc;
import com.fas.cmmn.util.FasComUtil;
import com.fas.model.com.UserInfoManager;
import com.fas.model.com.domain.AuthCodeDomain;
import com.fas.model.com.domain.UserInfoDomain;
import com.fas.web.cmmn.dataaccess.util.JsonObjectModel;
import com.fas.web.cmmn.exception.BizException;
import com.fas.web.cmmn.session.SessionIF;
import com.fas.web.cmmn.session.SessionMgr;
import com.fas.web.cmmn.util.BeanUtils;
import com.fas.web.cmmn.util.HttpUtil;
import com.fas.web.cmmn.util.TextEncryptorUtil;

@Service("UserRegisterSvc")
public class UserRegisterSvcImpl implements UserRegisterSvc {
	
	@Autowired
	private UserInfoManager manager;
	
	@Autowired
	private HttpUtil httpUtil;	
	
	@Resource(name="FasComUtil")
	private FasComUtil fasComUtil;	
	
	private static Log logger = LogFactory.getLog(UserRegisterSvcImpl.class);
	
	//User 등록  
	@Transactional
	public JsonObjectModel UserRgsnSvc(UserInfoFormVo param) throws Exception {
		
		//1) 선언
		BeanUtils beanUtil = new BeanUtils();
		JsonObjectModel resultMap = new JsonObjectModel();
		
		//1-1) 복호화
		param.setUserId(fasComUtil.decryptRsa(param.getSecureUserId()));
		param.setUserPwd(fasComUtil.decryptRsa(param.getSecureUserPwd()));
		param.setUserPwd2(fasComUtil.decryptRsa(param.getSecureUserPwd2()));	
		
		//2) 
		UserInfoDomain domain = (UserInfoDomain) beanUtil.toCopy(param, new UserInfoDomain());
		
		logger.debug(">>>>> domain userId >>>> " + domain.getUserId());
		
		logger.debug(">>>>> domain param >>>> " + param.getUserId());
		
		//3) UserInfoDomain is null or is not null
		
		domain.setFailcount(new Long(0));
		
		UserInfoDomain userInfo = manager.getUserInfo(domain);
		
		if (userInfo != null) {
			logger.debug(">>>>> userInfo >>>>> " + userInfo.getUserId());
		}
		
		if (userInfo != null) {
			throw new BizException("999998", new String[] {"기 등록된 회원 정보가 있습니다."});
		}
		
		logger.debug(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>######################");
		
		TextEncryptorUtil util = new TextEncryptorUtil();
		
		domain.setUserPwd(util.encrypt(domain.getUserPwd()));
		
		manager.userRgsn(domain);
		
		resultMap.success();
		
		return resultMap;
	}
	
	public JsonObjectModel UserInfoSvc(UserInfoFormVo param) throws Exception {
			
		//1) 선언
		BeanUtils beanUtil = new BeanUtils();
		JsonObjectModel resultMap = new JsonObjectModel();
			
		//2) 
		UserInfoDomain domain = (UserInfoDomain) beanUtil.toCopy(param, new UserInfoDomain());
			
		logger.debug(">>>>> domain userId >>>> " + httpUtil.getSessionUserId());
		
		domain.setUserId(httpUtil.getSessionUserId());
			
		UserInfoDomain userInfo = manager.getUserInfo(domain);
			
		if (userInfo != null) {
			logger.debug(">>>>> userInfo >>>>> " + userInfo.getUserId());
			resultMap.putData("userInfo", userInfo);
			resultMap.success();
		} else {
			resultMap.fail("기 등록된 회원 정보가 없습니다.");
		}
			
		return resultMap;
	}
	
	//User 변경 
	public JsonObjectModel UserMdfcSvc(UserInfoFormVo param) throws Exception {
		
		//1) 선언
		BeanUtils beanUtil = new BeanUtils();
		JsonObjectModel resultMap = new JsonObjectModel();
		
		try {
		
			param.setUserId(fasComUtil.decryptRsa(param.getSecureUserId()));
			
			if ("Y".equals(param.getPwdMdfcYn())) {
				//1-1) 복호화
				param.setUserPwd(fasComUtil.decryptRsa(param.getSecureUserPwd()));
				param.setUserPwd2(fasComUtil.decryptRsa(param.getSecureUserPwd2()));
				param.setNewUserPwd(fasComUtil.decryptRsa(param.getSecureNewUserPwd()));
			}
			
			//2) 
			UserInfoDomain domain = new UserInfoDomain();
			
			UserInfoDomain mdfcDomain = (UserInfoDomain) beanUtil.toCopy(param, new UserInfoDomain());
			
			if (!httpUtil.isAdminRole()) {
				domain.setUserId(httpUtil.getSessionUserId());
			} else {
				domain.setUserId(param.getUserId());
			}
			
			logger.debug(">>>>> domain userId >>>> " + domain.getUserId());
			
			logger.debug(">>>>> domain param >>>> " + param.getUserId());
			
			//3) UserInfoDomain is null or is not null
			
			UserInfoDomain userInfo = manager.getUserInfo(domain);
			
			if (userInfo == null) {
				throw new BizException("999998", new String[] {"변경할 회원 정보가 없습니다."});
			}
			
			TextEncryptorUtil util = new TextEncryptorUtil();
			
			if ("Y".equals(param.getPwdMdfcYn())) {
				
				if (!StringUtil.isEmpty(userInfo.getUserPwd())) {
					if (!util.decrypt(userInfo.getUserPwd()).equals(param.getUserPwd())) {
						throw new BizException("999998", new String[] {"기존 비밀번호가 올바르지 않습니다."});
					}
					
					if (!StringUtil.isEmpty(param.getUserPwd2())) {
						if (!param.getUserPwd2().equals(param.getNewUserPwd())) {
							throw new BizException("999998", new String[] {"입력된 새로운 비밀번호가 동일하지 않습니다."});
						}
					}
					
					mdfcDomain.setUserPwd(util.encrypt(param.getNewUserPwd()));
				} else {
					
					if (!StringUtil.isEmpty(param.getUserPwd2())) {
						
						if (!param.getUserPwd2().equals(param.getNewUserPwd())) {
							throw new BizException("999998", new String[] {"입력된 새로운 비밀번호가 동일하지 않습니다."});
						}
						
						mdfcDomain.setUserPwd(util.encrypt(param.getNewUserPwd()));
						
					}
					
				}
				
			}
			
			manager.userMdfc(mdfcDomain);
			
			UserInfoDomain IdDomain = manager.getUserInfo(mdfcDomain);
			
			if (IdDomain == null) {
				throw new BizException("999998", new String[] {"변경할 회원 정보가 없습니다."});
			}
			
			SessionIF sessionIF = new SessionMgr();
			sessionIF.setSession("userInfo",IdDomain);
			
			resultMap.success();
			
		} catch(Exception ex) {
			ex.printStackTrace();
			
			throw new BizException(ex.toString());
		}
		
		return resultMap;
	}
	
	
	//User Email 중복 체크
	public JsonObjectModel UserEmailDpltChkSvc(UserInfoFormVo param) throws Exception {
		
		//1) 선언
		BeanUtils beanUtil = new BeanUtils();
		JsonObjectModel resultMap = new JsonObjectModel();		
		
		//2) 파라미터 setting 
		UserInfoDomain domain = (UserInfoDomain) beanUtil.toCopy(param, new UserInfoDomain());
		
		//3) 조회 
		UserInfoDomain userInfo = manager.getUserInfo(domain);
		
		if (manager.isDplyChk(domain.getUserId())) {
			resultMap.fail("기 등록된 email 정보가 있습니다.");
		} else {
			resultMap.success("등록 가능한 email입니다.");
		}
		
		return resultMap;
	}
	
	//회원 가입 Email 응답
	public JsonObjectModel UserActiveRev(UserInfoFormVo param) throws Exception {
		
		//1) 선언
		BeanUtils beanUtil = new BeanUtils();
		JsonObjectModel resultMap = new JsonObjectModel();		

		//2) 파라미터 setting 
		AuthCodeDomain domain = (AuthCodeDomain) beanUtil.toCopy(param, new AuthCodeDomain());
		
		boolean result = false;
		
		try {
			manager.userRev(domain.getSecurecode());
			result = true;
		} catch (Exception ex) {
			ex.printStackTrace();
			result = false;
		}
		
		if (result) {
			resultMap.success("환영합니다. 회원 가입이 확인 되었습니다.");
			resultMap.putData("successYn", "Y");
		} else {
			resultMap.fail("유효하지 않은 보안코드 입니다.");
			resultMap.putData("successYn", "N");
		}
		
		return resultMap;
		
	}
	
	
}
