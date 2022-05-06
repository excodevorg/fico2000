package com.fas.model.com;

import javax.annotation.Resource;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.hsqldb.lib.StringUtil;
import org.springframework.stereotype.Component;

import com.fas.cmmn.service.impl.UserRegisterSvcImpl;
import com.fas.cmmn.util.FasDateUtil;
import com.fas.cmmn.util.KeyGenerator;
import com.fas.model.com.dao.AuthCodeDao;
import com.fas.model.com.domain.AuthCodeDomain;
import com.fas.web.cmmn.exception.BizException;
import com.fas.web.cmmn.util.DateUtil;
import com.fas.web.cmmn.util.HttpUtil;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;

 
@Component("AuthCodeManager")
public class AuthCodeManager {
	
	private static Log logger = LogFactory.getLog(AuthCodeManager.class);

	 @Resource(name="AuthCodeDao")
	 private AuthCodeDao authCodeDao;
	
	 public String getAuthCode() throws Exception {
		 String uuid = KeyGenerator.getUUID();
		 String authcode = KeyGenerator.getKeyByDateFormat();
		 
		 AuthCodeDomain authCodeDomain = new AuthCodeDomain();
		 authCodeDomain.setAuthcode(authcode);
		 authCodeDomain.setSecurecode(uuid);
		 authCodeDomain.setFrrgts(FasDateUtil.getCurrentDate());
		 authCodeDomain.setLastts(FasDateUtil.getCurrentDate());
		 authCodeDomain.setIsncts(FasDateUtil.getCurrentDate());
		 authCodeDomain.setCnfayn("N");
		 authCodeDomain.setValdyn("Y");
		 authCodeDomain.setValdts(DateUtil.addDate(FasDateUtil.getCurrentDate(), 7));
		 
		 authCodeDao.insert(authCodeDomain);
		 
		 return authcode;
	 }
	 
	 public String getAuthAllCode() throws Exception {
		 String uuid = KeyGenerator.getUUID();
		 String authcode = KeyGenerator.getKeyByDateFormat();
		 
		 AuthCodeDomain authCodeDomain = new AuthCodeDomain();
		 authCodeDomain.setAuthcode(authcode);
		 authCodeDomain.setSecurecode(uuid);
		 authCodeDomain.setFrrgts(FasDateUtil.getCurrentDate());
		 authCodeDomain.setLastts(FasDateUtil.getCurrentDate());
		 authCodeDomain.setIsncts(FasDateUtil.getCurrentDate());
		 authCodeDomain.setCnfayn("Y");
		 authCodeDomain.setValdyn("Y");
		 authCodeDomain.setValdts(DateUtil.addDate(FasDateUtil.getCurrentDate(), 7));
		 
		 authCodeDao.insert(authCodeDomain);
		 
		 return authcode;
	 }	 
	 
	 //보안 코드 
	 public String getSecureCode(String authcode, boolean check) throws Exception {

		 AuthCodeDomain param = new AuthCodeDomain();
		 
		 logger.debug("getSecureCode Start ^^^^^^");
		 
		 logger.debug("authcode **** " + authcode);
		 
		 //승인코드로 조회
		 param.setAuthcode(authcode);
		 try {
		 param = authCodeDao.selectAuthCode(param);
		 } catch(Exception ex) {
			 logger.debug("******* error ******** " + ex.toString());
			 ex.printStackTrace();
		 }
		 logger.debug("param **** " + param);
		 
		 String secureCode = param.getSecurecode();
		 
		 if (check) {
			 //유효 여부 
			 if ("N".equals(param.getValdyn())) {
				 secureCode = "";
			 }
			 
			 //유효 기일 
			 if (!isTrmValid(param.getValdts())) {
				 secureCode = "";
			 }
		 }
		 
		 logger.debug("check **** " + check);
		 logger.debug("secureCode!!!! **** " + secureCode);
		 
		 return secureCode;
	 }
	 
	 //보안코드 일치 여부 및 보안코드 존재 여부 확인 , 확인일자 등록
	 public boolean isSecureCodeCnfa(AuthCodeDomain authcodeDomain) throws Exception {
		 
		 boolean result = false;
		 
		 AuthCodeDomain param = new AuthCodeDomain();
		 
		 //승인코드 입력시 > 보안코드 확인여부 
		 if (!StringUtil.isEmpty(authcodeDomain.getAuthcode())) {
			 
			 param.setAuthcode(authcodeDomain.getAuthcode());
			 param = authCodeDao.selectAuthCode(param);
			 
			 if ("Y".equals(param.getCnfayn())) { result = true; }
			 
		 } else if (!StringUtil.isEmpty(authcodeDomain.getSecurecode())) {
			 
			 param.setSecurecode(authcodeDomain.getSecurecode());
			 List<AuthCodeDomain> arrList = authCodeDao.selectSecurecodeList(param);
			 if (arrList != null && arrList.size() > 0) {
				 for (AuthCodeDomain vo : arrList) {
					 if (isTrmValid(vo.getValdts())) {
						 vo.setCnfats(FasDateUtil.getCurrentDate());
						 vo.setCnfayn("Y");
						 vo.setLastts(FasDateUtil.getCurrentDate());
						 authCodeDao.update(vo);
						 result = true;
					 }
				 }
			 }
			 
		 } else {
			 throw new BizException("999998", new String[] {"승인코드, 보안코드가 존재하지 않습니다."});
		 }
		 
		 return result;
		 
	 }
	 
	 
	 //유효한지 여부 
	 private boolean isTrmValid(Date valddt) {
		 
		 boolean result = false;
		 
		 SimpleDateFormat transFormat = new SimpleDateFormat("yyyyMMdd");
		 
		 String from = transFormat.format(valddt);
		 
		 String to = transFormat.format(new Date());
		 
		 int intFrom = Integer.parseInt(from);
		 
		 int intTo = Integer.parseInt(to);
		 
		 if ((intTo - intFrom) > 0) {
			 result = false;
		 } else {
			 result = true;
		 }
		 
		 return result;
	 }
	 
}
