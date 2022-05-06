package com.fas.adm.service.impl;

import java.util.ArrayList;
import java.util.List;

import javax.annotation.Resource;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.fas.adm.formVo.UserMngFormVo;
import com.fas.adm.service.UserMngSvc;
import com.fas.adm.service.impl.UserMngSvcImpl;
import com.fas.cmmn.util.FasDateUtil;
import com.fas.cmmn.util.FasMailMessage;
import com.fas.cmmn.util.FasMailSender;
import com.fas.cmmn.util.FasPagingUtil;
import com.fas.model.com.CodeInfoManager;
import com.fas.model.com.UserInfoManager;
import com.fas.model.com.UserRoleManager;
import com.fas.model.com.domain.CodeInfoDomain;
import com.fas.model.com.domain.UserInfoDomain;
import com.fas.model.com.domain.UserRoleDomain;
import com.fas.web.cmmn.dataaccess.util.FasMap;
import com.fas.web.cmmn.dataaccess.util.JsonObjectModel;
import com.fas.web.cmmn.util.BeanUtils;
import com.fas.web.cmmn.util.StringUtil;
import com.fas.web.cmmn.util.TextEncryptorUtil;

@Service("UserMngSvc")
public class UserMngSvcImpl implements UserMngSvc {

	@Autowired
	private UserInfoManager manager;
	
	@Autowired
	private UserRoleManager roleManager;
	
	@Autowired
	private CodeInfoManager codeManager;
	
	@Resource(name="FasMailSender")
	private FasMailSender fasMailSender;	  
	
	private static Log logger = LogFactory.getLog(UserMngSvcImpl.class);
	
	//1) 회원 조회
	@Transactional
	public JsonObjectModel UserMngList(UserMngFormVo param) throws Exception {
		
		//1) 선언
		BeanUtils beanUtil = new BeanUtils();
		JsonObjectModel resultMap = new JsonObjectModel();
		int page = param.getPage();
		int limit = param.getLimit();
		int totalCnt = 0;
		
		FasPagingUtil paging = new FasPagingUtil(page, limit);
		
		//2) 파라미터 복사  
		UserInfoDomain domain = (UserInfoDomain) beanUtil.toCopy(param, new UserInfoDomain());
		
		
		//3) Manager 호출
		List<UserInfoDomain> resultList = new ArrayList<UserInfoDomain>();
		
		List<UserMngFormVo> arrList = new ArrayList<UserMngFormVo>();
		
		
		if (!StringUtil.isEmpty(param.getUserNm())) {
			resultList = manager.getUserNmList(domain, paging);
		} else {
			resultList = manager.getUserList(domain, paging);
		}
		
		if (resultList != null) {
			
			
			for(UserInfoDomain vo : resultList) {
				UserMngFormVo formVo = (UserMngFormVo) beanUtil.toCopy(vo, new UserMngFormVo());
				if ("Y".equals(formVo.getUseYn())) {
					formVo.setUseYnDis("활동");
				} else {
					formVo.setUseYnDis("활동중지");
				}
				
				if (vo.getFrrgts() != null) {
					formVo.setJoinYmd(FasDateUtil.transDateToString(vo.getFrrgts()));
				}
				
				arrList.add(formVo);
					
			}
			totalCnt = manager.totalCount(param.getUserNm());
			resultMap.putData(arrList, totalCnt);
		} else {
			resultMap.putData(arrList, 0);
		}
		
		//paging
		resultMap.putPageData(page,totalCnt);
		
		
		return resultMap;
		
	}
	//2) 사용 중지 및 활동 상태 
	@Transactional
	public JsonObjectModel UserMngActiveRgsn(UserMngFormVo param) throws Exception {
		
		//1) 선언
		BeanUtils beanUtil = new BeanUtils();
		JsonObjectModel resultMap = new JsonObjectModel();
		
		//2) 파라미터 복사  
		UserInfoDomain domain = (UserInfoDomain) beanUtil.toCopy(param, new UserInfoDomain());
		
		//3) Manager 호출
		UserInfoDomain userInfo = manager.getUserInfo(domain);
		
		userInfo.setUseyn(domain.getUseyn());
		manager.userAdminMdfc(userInfo);

		resultMap.success();
		
		return resultMap;
		
	}
	//3) 회원 탈퇴 (삭제)
	@Transactional
	public JsonObjectModel UserMngActiveDel(UserMngFormVo param) throws Exception {
		
		//1) 선언
		BeanUtils beanUtil = new BeanUtils();
		JsonObjectModel resultMap = new JsonObjectModel();
		
		//2) 파라미터 복사  
		UserInfoDomain domain = (UserInfoDomain) beanUtil.toCopy(param, new UserInfoDomain());
		
		//3) Manager 호출
		manager.userAdminDel(domain);

		resultMap.success();
		
		return resultMap;		
		
	}
	//4) 비밀번호 초기화
	@Transactional
	public JsonObjectModel UserMngPwdInitial(UserMngFormVo param) throws Exception {

		//1) 선언
		BeanUtils beanUtil = new BeanUtils();
		JsonObjectModel resultMap = new JsonObjectModel();
		
		//2) 파라미터 복사  
		UserInfoDomain domain = (UserInfoDomain) beanUtil.toCopy(param, new UserInfoDomain());
		String userPwd = StringUtil.randomPwdCreate();
		
		//3) Manager 호출
		UserInfoDomain userInfo = manager.getUserInfo(domain);
		
		TextEncryptorUtil util = new TextEncryptorUtil();
		
		userInfo.setUserPwd(util.encrypt(userPwd));
		
		manager.userAdminMdfc(userInfo);
		
		 //2-3) 인증 메일 전송 
		 try {
			 FasMailMessage message = new FasMailMessage();
	         message.setSubject("[Fico2000] 패스워드 초기화 알림");	
	         message.setToEmail(domain.getUserId());
	         
	         String htmlContent = "<html><head></head><body>초기화된 패스워드는 다음과 같습니다. 초기화된 패스워드 ["+userPwd+"]</body></html>";
	         message.setHtmlContent(htmlContent);
	         
	         logger.debug("htmlContent >>> " + htmlContent);
	         
	         fasMailSender.sendEmail(message);
	         
		 } catch(Exception ex) {
			 ex.printStackTrace();
		 }	
		 
		 resultMap.success();
		 
		 return resultMap;
	}
	
	//5) User Role 조회 
	@Transactional
	public JsonObjectModel UserRoleInqList(UserMngFormVo param) throws Exception {

		//1) 선언
		BeanUtils beanUtil = new BeanUtils();
		JsonObjectModel resultMap = new JsonObjectModel();
		
		//2) 파라미터 복사  
		UserRoleDomain domain = (UserRoleDomain) beanUtil.toCopy(param, new UserRoleDomain());		
		
		List<UserRoleDomain> resultList = roleManager.userRoleList(domain);
		
		int totalCnt = 0;
		
		if (resultList != null) totalCnt = resultList.size();
		
		List<FasMap> userRoleList = new ArrayList<FasMap>();
		
		FasMap map = null;
		
		UserInfoDomain userinfo = new UserInfoDomain();
		CodeInfoDomain codeinfo = new CodeInfoDomain();
		 
		for (UserRoleDomain vo : resultList) {
			
			userinfo = new UserInfoDomain();
			userinfo.setUserId(vo.getUserid());
			
			userinfo = manager.getUserInfo(userinfo);
			
			map = new FasMap();
			
			map.put("userid",vo.getUserid());
			if (userinfo != null) {
				map.put("userNm",userinfo.getUserNm());
			} else {
				map.put("userNm","");
			}
			map.put("rolecode",vo.getRolecode());
			
			codeinfo = new CodeInfoDomain();
			codeinfo.setDomainCode("FAS9001");
			codeinfo.setCode(vo.getRolecode());
			codeinfo = codeManager.codeAdminInq(codeinfo);
			
			if (codeinfo != null) {
				map.put("rolecodeNm",codeinfo.getCodeNm());
			} else {
				map.put("rolecodeNm","");
			}
			
			userRoleList.add(map);
			
			
		}
		
		resultMap.putData(userRoleList, totalCnt);
		
		return resultMap;
	}
	//6) User Role 등록 
	@Transactional
	public JsonObjectModel UserRoleRgsn(UserMngFormVo param) throws Exception {
		
		//1) 선언
		BeanUtils beanUtil = new BeanUtils();
		JsonObjectModel resultMap = new JsonObjectModel();
				
		//2) 파라미터 복사  
		UserRoleDomain domain = (UserRoleDomain) beanUtil.toCopy(param, new UserRoleDomain());		
				
		roleManager.userRoleRgsn(domain);
		
		resultMap.success();
		
		return resultMap;
	}
	
	//7) User Role 삭
	@Transactional
	public JsonObjectModel UserRoleDel(UserMngFormVo param) throws Exception {
		
		//1) 선언
		BeanUtils beanUtil = new BeanUtils();
		JsonObjectModel resultMap = new JsonObjectModel();
						
		//2) 파라미터 복사  
		UserRoleDomain domain = (UserRoleDomain) beanUtil.toCopy(param, new UserRoleDomain());
		
		roleManager.userRoleDelete(domain);
		
		resultMap.success();
		
		return resultMap;

	}
	
}
