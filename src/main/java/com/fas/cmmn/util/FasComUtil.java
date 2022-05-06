package com.fas.cmmn.util;

import java.security.PrivateKey;

import javax.annotation.Resource;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.stereotype.Component;

import com.fas.model.com.CodeInfoManager;
import com.fas.model.com.domain.CodeInfoDomain;
import com.fas.web.cmmn.exception.BizException;
import com.fas.web.cmmn.util.HttpUtil;

@Component("FasComUtil")
public class FasComUtil {

	private static Log logger = LogFactory.getLog(FasComUtil.class);
	
	@Resource(name="CodeInfoManager")
	private CodeInfoManager codeInfoManager;
	
	@Resource(name="HttpUtil")
	private HttpUtil httpUtil;
	
	//1) Code명 조회
	public String codeName(String code) throws Exception {
		
		if (code == null ) return null;
		if (code.length() < 5) return null;
		
		CodeInfoDomain codeDomain = new CodeInfoDomain();
		codeDomain.setDomainCode(code.substring(0,7));
		codeDomain.setCode(code);
		System.out.println("DomainCode [" + codeDomain.getDomainCode() + "] code [" +code+"]");
		codeDomain = codeInfoManager.codeAdminInq(codeDomain);
		logger.debug("codeDomain >>>>> " + codeDomain);
		if (codeDomain == null) return null;
		System.out.println("codeDomain.getCodeNm() >>>>> " + codeDomain.getCodeNm());
		return codeDomain.getCodeNm();
	}
	
	//1) Code명 조회
	public String codeName(String domainCode, String code) throws Exception {
		
		if (code == null ) return null;

		CodeInfoDomain codeDomain = new CodeInfoDomain();
		codeDomain.setDomainCode(domainCode);
		codeDomain.setCode(code);
		System.out.println("DomainCode [" + codeDomain.getDomainCode() + "] code [" +code+"]");
		codeDomain = codeInfoManager.codeAdminInq(codeDomain);
		logger.debug("codeDomain >>>>> " + codeDomain);
		if (codeDomain == null) return null;
		System.out.println("codeDomain.getCodeNm() >>>>> " + codeDomain.getCodeNm());
		return codeDomain.getCodeNm();
	}	
	
	//2) 복호화
	public String decryptRsa(String secureValue) throws Exception {
		
		String decryptRsaStr = null;
		
		try {
			decryptRsaStr = RSA.decryptRsa((PrivateKey) httpUtil.getSession().getAttribute("__rsaPrivateKey__"), secureValue);
		} catch(Exception ex) {
			throw new BizException(ex.getMessage());
		}
		
		return decryptRsaStr;
	}
}
