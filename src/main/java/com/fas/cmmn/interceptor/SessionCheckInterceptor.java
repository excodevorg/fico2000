	package com.fas.cmmn.interceptor;

import java.util.List;

import javax.servlet.RequestDispatcher;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.web.servlet.handler.HandlerInterceptorAdapter;

import com.fas.cmmn.formVo.UserInfoFormVo;
import com.fas.model.com.domain.UserRoleDomain;
import com.fas.web.cmmn.dataaccess.util.JsonObjectModel;
import com.fas.web.cmmn.util.BeanUtils;
import com.fas.web.cmmn.util.StringUtil;

public class SessionCheckInterceptor extends HandlerInterceptorAdapter {
	
	protected Log log = LogFactory.getLog(this.getClass());
	
	protected String [] exceptActionIds = {"BoardList","BoardReplyList","BoardUserList","BoardAllList","BoardLcteAllList"
										  ,"BoardLcteUserAllList","LoginInfo","SocialLoginInfo","UserLoginInfo","Logout","TempPassward"
										  ,"EduInfoList","MyEduInfoPgrsList","EduInfoDtl","pageMove","BoardDtl","BoardNewsAndLcteList"};
	
	public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) throws Exception {
		
		try {
			HttpSession session = request.getSession();
			String contextPath = request.getContextPath();
			
			String requestURI = request.getRequestURI();
			
			String actionURIs [] = StringUtil.split(requestURI, "?");
			
			if (actionURIs == null) {
				actionURIs = new String[1];
				actionURIs[0] = requestURI;
			}
			
			String actiIds [] = StringUtil.split(actionURIs[0], "/");
			String actiId = "";
			if (actiIds != null) {
				if (actiIds.length > 1) {
					actiId = actiIds[1].replaceAll(".do", "");
				} else {
					actiId = actiIds[0].replaceAll(".do", "");
				}
			} 
			
			boolean isSuccess = true;
			
			for (String exceptAction : exceptActionIds) {
				if (exceptAction.equals(actiId)) {
					isSuccess = false;
				}
			}
			
			if (isSuccess) {
				if (session == null) {
					
					errorMessageSend(request, response, "세션정보가 만료가 되었거나 잘못된 접근입니다. 재로그인 해주세요");
					
					return false;
				} else {
					UserInfoFormVo userInfo = null;
					userInfo = (UserInfoFormVo) session.getAttribute("userInfo");
					
					if (userInfo == null) {
						errorMessageSend(request, response, "사용자 정보를 알수 없습니다. 재로그인 해주세요");
						
						return false;
					} else {
						if (StringUtil.isEmpty(userInfo.getUserId())) {
							errorMessageSend(request, response, "사용자 정보를 알수 없습니다. 재로그인 해주세요");
							return false;
						}
					}
					
					if (actiIds != null) {
						if (actiIds.length > 1) {
							if ("adm".equals(actiIds[0])) {
								
								boolean admin = false;
								
								List<UserRoleDomain> userRoleList = (List<UserRoleDomain>) session.getAttribute("userRoleList");
								
								log.debug("session userRoleList >>> " + userRoleList);
								
								if (userRoleList != null) {
									for (UserRoleDomain role : userRoleList) {
										log.debug("session role >>> " + role.getRolecode());
										if ("FAS900199".equals(role.getRolecode())) {
											admin = true;
										}
									}
								}
								
								if (!admin) {
									errorMessageSend(request, response, "잘못된 접근 입니다. 다시 거래하세요.");
									return false;
								}
							}
						}
					}
					
					
				}
			}
			
		} catch(Exception ex) {
			ex.printStackTrace();
			errorMessageSend(request, response, "세션 체크중 오류가 발생하였습니다.");
			return false;
			
		}
		
		return true;
		
		
	}
	
	private boolean errorMessageSend(HttpServletRequest request, HttpServletResponse response, String message) throws Exception {
		
		BeanUtils beanUtil = new BeanUtils();
		
		JsonObjectModel resultMap = new JsonObjectModel();
		resultMap.fail(message);
		
		String jsonString = beanUtil.getJsonString(resultMap.getMap());
		
		log.debug("jsonString ==> " + jsonString);
		
		request.setAttribute("jsonString", jsonString);
		
		RequestDispatcher dispatcher = request.getRequestDispatcher("/exception/sessionCheckException.do");
		dispatcher.forward(request, response);
		
		return false;
			
	}
	
	

}
