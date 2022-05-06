<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<%@ page import="com.fas.cmmn.formVo.UserInfoFormVo" %>
<%@ page import="java.util.*" %>

<%

UserInfoFormVo userInfo = null;

if (session.getAttribute("userInfo") != null) {
    userInfo = (UserInfoFormVo) session.getAttribute("userInfo");
}

Map paramMap = new HashMap();

String params = (String) request.getAttribute("params");

if (params != null && params.length() > 0 && params.indexOf("=") > 0) {
	params = params.replaceAll("&quot;","");
	params = params.replaceAll("\"","");
	String [] paramArrays = params.split("\\*");
	
	for (String paramArray : paramArrays) {
		if (paramArray.indexOf("=") > -1) {
			String [] param = paramArray.split("=");
			paramMap.put(param[0],param[1]);
			System.out.println(param[0] + "=" + param[1]);
		}
	}
}

//이름
String loginText = "로그인";
//권한명
String authCodeNm = "일반회원";
//label
String authCodeLabel = "label-primary";
//권한코드
String authCode = "";
//관리자 여부
boolean isAdmin = false;
//메뉴 관리자 여부
boolean isMenuAdm = false;
//User ID
String loginUserId = "";
//사진
String imgUrl = "1.png";

boolean loginCls = false;
boolean loginYn = false;
boolean isPassword = false;

boolean secure= request.isSecure();

//login 여부
if (userInfo != null) {    
	if (userInfo.getUserId() != null && userInfo.getUserId().length() > 0) {
		loginCls = true;
		loginYn = true;
		
		loginText = userInfo.getUserNm();
		authCodeNm = userInfo.getRolecodeNm();
		authCode = userInfo.getRolecode();
		loginUserId = userInfo.getUserId();
		if (userInfo.getImgUrl() != null) imgUrl = userInfo.getImgUrl();
		
		if ("FAS900101".equals(authCode)) {
			authCodeLabel = "label-primary";
		}
		
		if ("FAS900102".equals(authCode)) {
			authCodeLabel = "label-success";
		}
		
		if ("FAS900103".equals(authCode)) {
			authCodeLabel = "label-default";
		}
		
		if ("FAS900199".equals(authCode)) {
			isAdmin = true;
			isMenuAdm = true;
			authCodeLabel = "label-warning";
		}


		if (userInfo.getUserPwd() != null && userInfo.getUserPwd().length() > 0) {
			isPassword = true;
		}
	}	
}

%>
