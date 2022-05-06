package com.fas.model.com;


import java.util.List;

import javax.annotation.Resource;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.hsqldb.lib.StringUtil;
import org.springframework.stereotype.Component;

import com.fas.cmmn.util.FasDateUtil;
import com.fas.cmmn.util.FasMailMessage;
import com.fas.cmmn.util.FasMailSender;
import com.fas.cmmn.util.FasPagingUtil;
import com.fas.model.com.dao.UserInfoDao;
import com.fas.model.com.domain.AuthCodeDomain;
import com.fas.model.com.domain.UserInfoDomain;
import com.fas.model.com.domain.UserRoleDomain;
import com.fas.web.cmmn.exception.BizException;
import com.fas.web.cmmn.util.ComConst;
import com.fas.web.cmmn.util.TextEncryptorUtil;

@Component("UserInfoManager")
public class UserInfoManager {
	
	 private static Log logger = LogFactory.getLog(UserInfoManager.class);

	 @Resource(name="UserInfoDao")
	 private UserInfoDao dao;
	 
	 @Resource(name="AuthCodeManager")
	 private AuthCodeManager authCodeManager;
	 
	 @Resource(name="UserRoleManager")
	 private UserRoleManager userRoleManager;
	 
	 @Resource(name="FasMailSender")
	 private FasMailSender fasMailSender;
	 
	 @Resource(name="comConst")
	 private ComConst comConst;
	 
	 private void saveUserInfo(UserInfoDomain domain) throws Exception {
		 
		 if (StringUtil.isEmpty(domain.getImgUrl())) {
			 domain.setImgUrl("1.png");
		 }
		 
		 dao.insert(domain);
		 

	 }
	 
	 public List<UserInfoDomain> getUserList(UserInfoDomain domain, FasPagingUtil fasPaging) throws Exception {
		 return dao.listAll(fasPaging);
	 }
	 
	 public List<UserInfoDomain> getUserNmList(UserInfoDomain domain) throws Exception {
		 return dao.listUserNm(domain);
	 }
	 
	 public List<UserInfoDomain> getUserNmList(UserInfoDomain domain, FasPagingUtil fasPaging) throws Exception {
		 return dao.listUserNm(domain, fasPaging);
	 }
	 
	 public UserInfoDomain getUserInfo(UserInfoDomain domain) throws Exception {
		 
		 logger.debug("getUserInfo Start$$$$$$");
		 logger.debug("userId >>> " + domain.getUserId());
		 logger.debug("failcount >>> " + domain.getFailcount());
		 
		 UserInfoDomain resultDomain = null;
				 
		 try {
		 resultDomain = dao.select(domain);
		 } catch(Exception ex) {
			 logger.debug(">>>>>>>>>> getUserInfo Errror >>>>>>>>");
			 ex.printStackTrace();
		 }
		 
		 logger.debug("resultDomain >>> " + resultDomain);
		 
		 return resultDomain;
	 }
	  
	 
	 //1) 같은 이메일로 존재 여부 (중복 체크)
	 public boolean isDplyChk(String email) throws Exception {
		 
		 logger.debug("isDplyChk Start$$$$$$");
		 
		 if (StringUtil.isEmpty(email)) {
			 throw new BizException("999998", new String[] {"중복 체크할 이메일 정보가 없습니다."});
		 }
		 
		 boolean result = false;
		 
		 UserInfoDomain param = new UserInfoDomain();
		 param.setUserId(email);
		 
		 param = getUserInfo(param);
		 
		 if (param != null && !StringUtil.isEmpty(param.getUserId())) {
			 result = true;
		 }
		 
		 return result;
	 }
	 
	 //2) 회원등록  
	 public void userRgsn(UserInfoDomain domain) throws Exception {
		 
		 logger.debug("userRgsn Start #$%^^^^&&&&&");
		 
		 //2-1) 중복 여부 체크 
		 if (isDplyChk(domain.getUserId())) {
			 throw new BizException("999998", new String[] {"기 등록된 이메일 정보가 있습니다."});
		 }
		 
		 //2-2) 승인 코드 및 보안 코드 발급
		 String authcode = authCodeManager.getAuthCode();
		 domain.setAuthcode(authcode);
		 domain.setFailcount(new Long(0));
		 domain.setFrrgts(FasDateUtil.getCurrentDate());
		 domain.setLastts(FasDateUtil.getCurrentDate());
		 
		 domain.setUseyn("Y");
		 
		 logger.debug("FrrgTs >>> " + domain.getFrrgts());
		 
		 //2-3) 회원등록
		 saveUserInfo(domain);
		 
		 UserRoleDomain roleDomain = new UserRoleDomain();
		 roleDomain.setUserid(domain.getUserId());
		 roleDomain.setRolecode("FAS900103");
		 
		 userRoleManager.userRoleRgsn(roleDomain);
		 
		 logger.debug("authcode >>>> " + authcode);
		 
		 //2-3) 인증 메일 전송 
		 try {
			 FasMailMessage message = new FasMailMessage();
	         message.setSubject("[Fico2000] 사용 인증 메일");	
	         message.setToEmail(domain.getUserId());
	         
	         logger.debug(">>>>> mail Send >>>>");
	         
	         String secureCode = authCodeManager.getSecureCode(authcode, false);
	         
	         logger.debug("secureCode >>>> " + secureCode);
	         
	         String authUrl= comConst.getHostUrl() + "/user/UserActive.do?secureCode="+secureCode;
	         String htmlContent = "<html><head></head><body>사용자 계정을 활성화 하려면 다음 링크를 클릭하세요. <br/> <a href=\""+authUrl+"\">"+authUrl+"</a></body></html>";
	        message.setHtmlContent(htmlContent);
	         
	        
	         logger.debug(">>>>> authUrl >>> " + authUrl);
	         logger.debug(">>>>> htmlContent >>> " + htmlContent);
	        
	         fasMailSender.sendEmail(message);
	         
		 } catch(Exception ex) {
			 ex.printStackTrace();
		 }
	 }
	 
	 //2) 회원등록  
	 public void userAllRgsn(UserInfoDomain domain) throws Exception {
		 
		 logger.debug("userRgsn Start #$%^^^^&&&&&");
		 
		 //2-1) 중복 여부 체크 
		 if (isDplyChk(domain.getUserId())) {
			 throw new BizException("999998", new String[] {"기 등록된 이메일 정보가 있습니다."});
		 }
		 
		 //2-2) 승인 코드 및 보안 코드 발급
		 String authcode = authCodeManager.getAuthAllCode();
		 domain.setAuthcode(authcode);
		 domain.setFailcount(new Long(0));
		 domain.setFrrgts(FasDateUtil.getCurrentDate());
		 domain.setLastts(FasDateUtil.getCurrentDate());
		 
		 domain.setUseyn("Y");
		 
		 logger.debug("FrrgTs >>> " + domain.getFrrgts());
		 
		 //2-3) 회원등록
		 saveUserInfo(domain);
		 
		 UserRoleDomain roleDomain = new UserRoleDomain();
		 roleDomain.setUserid(domain.getUserId());
		 roleDomain.setRolecode("FAS900103");
		 
		 userRoleManager.userRoleRgsn(roleDomain);
		 
		 logger.debug("authcode >>>> " + authcode);
	 }	 
	 
	 //3) 회원변경 
	 public void userMdfc(UserInfoDomain domain) throws Exception {
		 //2-1) 중복 여부 체크 
		 if (!isDplyChk(domain.getUserId())) {
			 throw new BizException("999998", new String[] {"기 등록된 이메일 정보가 없습니다."});
		 }
		 
		 //2-2) 기 회원 정보 조회 
		 UserInfoDomain param = new UserInfoDomain();
		 param.setUserId(domain.getUserId());
		 
		 UserInfoDomain beUserInfo = getUserInfo(param);
		 
		 if (!StringUtil.isEmpty(domain.getUserPwd())) {
			 beUserInfo.setUserPwd(domain.getUserPwd());
		 }
		 
		 beUserInfo.setUserNm(domain.getUserNm());
		 
		 if (!StringUtil.isEmpty(domain.getFacebookid())) {
			 beUserInfo.setFacebookid(domain.getFacebookid());
		 }
		 
		 if (!StringUtil.isEmpty(domain.getGoogleid())) {
			 beUserInfo.setGoogleid(domain.getGoogleid());
		 }
		 
		 if (!StringUtil.isEmpty(domain.getKakaoid())) {
			 beUserInfo.setKakaoid(domain.getKakaoid());
		 }
		 
		 if (!StringUtil.isEmpty(domain.getTwitterid())) {
			 beUserInfo.setTwitterid(domain.getTwitterid());
		 }
		 
		 if (!StringUtil.isEmpty(domain.getImgUrl())) {
			 beUserInfo.setImgUrl(domain.getImgUrl());
		 }
		 
		 //2-2) 승인 코드 및 보안 코드 발급
		 String authcode = authCodeManager.getAuthCode();
		 beUserInfo.setAuthcode(authcode);
		 
		 //2-3) 회원변경 
		 saveUserInfo(beUserInfo);
		 
		 //2-3) 인증 메일 전송 
		 try {
			 FasMailMessage message = new FasMailMessage();
	         message.setSubject("[Fico2000] 사용 인증 메일 (회원정보 변경)");	
	         message.setToEmail(domain.getUserId());
	         
	         String secureCode = authCodeManager.getSecureCode(authcode, false);
	         
	         String authUrl= comConst.getHostUrl() + "/user/UserActive.do?secureCode="+secureCode;
	         String htmlContent = "<html><head></head><body>사용자 계정을 활성화 하려면 다음 링크를 클릭하세요. <a href=\""+authUrl+"\">"+authUrl+"</a></body></html>";
	         message.setHtmlContent(htmlContent);
	         
	         fasMailSender.sendEmail(message);
	         
		 } catch(Exception ex) {
			 ex.printStackTrace();
		 }
		 
		 
	 }
	 
	 //3) 회원변경 
	 public void userPwdMdfc(UserInfoDomain domain) throws Exception {
		 //2-1) 중복 여부 체크 
		 if (!isDplyChk(domain.getUserId())) {
			 throw new BizException("999998", new String[] {"기 등록된 이메일 정보가 없습니다."});
		 }
		 
		 //2-2) 기 회원 정보 조회 
		 UserInfoDomain beUserInfo = getUserInfo(domain);
		 
		 beUserInfo.setUserPwd(domain.getUserPwd());
		 beUserInfo.setUserNm(domain.getUserNm());
		 
		 if (!StringUtil.isEmpty(domain.getFacebookid())) {
			 beUserInfo.setFacebookid(domain.getFacebookid());
		 }
		 
		 if (!StringUtil.isEmpty(domain.getGoogleid())) {
			 beUserInfo.setGoogleid(domain.getGoogleid());
		 }
		 
		 if (!StringUtil.isEmpty(domain.getKakaoid())) {
			 beUserInfo.setKakaoid(domain.getKakaoid());
		 }
		 
		 if (!StringUtil.isEmpty(domain.getTwitterid())) {
			 beUserInfo.setTwitterid(domain.getTwitterid());
		 }
		 
		 //2-2) 승인 코드 및 보안 코드 발급
		 String authcode = authCodeManager.getAuthCode();
		 beUserInfo.setAuthcode(authcode);
		 
		 //2-3) 회원변경 
		 saveUserInfo(beUserInfo);
		 
		 //2-3) 인증 메일 전송 
		 try {
			 FasMailMessage message = new FasMailMessage();
	         message.setSubject("[Fico2000] 임시 비밀번호 발급 ");	
	         message.setToEmail(domain.getUserId());
	         
	         String secureCode = authCodeManager.getSecureCode(authcode, false);
	         
	         TextEncryptorUtil util = new TextEncryptorUtil();
	         
	         String authUrl= comConst.getHostUrl() + "/user/UserActive.do?secureCode="+secureCode;
	         String htmlContent = "<html><head></head><body>임시비밀번호 : " +util.decrypt(domain.getUserPwd())+ "<br>사용자 계정을 활성화 하려면 다음 링크를 클릭하세요.<br><a href=\""+authUrl+"\">"+authUrl+"</a></body></html>";
	         message.setHtmlContent(htmlContent);
	         
	         fasMailSender.sendEmail(message);
	         
		 } catch(Exception ex) {
			 ex.printStackTrace();
		 }
		 
		 
	 }
	 
	 //3) 회원변경 
	 public void userAdminMdfc(UserInfoDomain domain) throws Exception {
		 //2-3) 회원변경 
		 saveUserInfo(domain);
	 }
	
	 //4) 회원삭제 
	 public void userAdminDel(UserInfoDomain domain) throws Exception {
		 //2-3) 회원변경 
		 dao.delete(domain);
	 }
	 
	 //4) 이메일 확인 응답 등
	 public void userRev(String secureCode) throws Exception {
		 if (StringUtil.isEmpty(secureCode)) {
			 throw new BizException("999998", new String[] {"보안코드가 존재하지 않습니다."});
		 }
		 
		 AuthCodeDomain authcodeDomain = new AuthCodeDomain();
		 authcodeDomain.setSecurecode(secureCode);
		 
		 if (!authCodeManager.isSecureCodeCnfa(authcodeDomain)) {
			 throw new BizException("999998", new String[] {"보안코드가 유효하지 않습니다."});
		 }
		 
	 }
	 
	 //5) 소셜 선택 등록 
     
	 
	 //6) Total Count
	 public int totalCount(String userNm) throws Exception {
		 if (StringUtil.isEmpty(userNm)) {
			 return (int) dao.totalCount();
		 } else {
			 List<UserInfoDomain> arrList = dao.list(userNm);
			 if (arrList == null) 
			 {return 0;} 
			 else 
			 {
				 return arrList.size();
			 }
		 }
		 
		 
		 
	 }
}
