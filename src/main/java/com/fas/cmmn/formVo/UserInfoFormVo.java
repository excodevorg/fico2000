package com.fas.cmmn.formVo;

public class UserInfoFormVo {

	private String userId;
	
	private String userPwd;
	
	private String userPwd2;
	
	private String userNm;
	
	private String newUserPwd;
	
	private String facebookid;
	
	private String twitterid;
	
	private String googleid;
	
	private String kakaoid;
	
	private String authcode;
	
	private String securecode; //보안코드 -> 클라이언트에 발급하는 코드 (인증시 비교)
	
	private long failcount;
	
	private String rolecode;
	
	private String rolecodeNm;
	
	private String imgUrl;
	
	private String pwdMdfcYn;
	
	private String secureUserId;
	
	private String secureUserPwd;
	
	private String secureUserPwd2;
	
	private String secureNewUserPwd;
	
	public String getSecureNewUserPwd() {
		return secureNewUserPwd;
	}

	public void setSecureNewUserPwd(String secureNewUserPwd) {
		this.secureNewUserPwd = secureNewUserPwd;
	}

	public String getSecureUserId() {
		return secureUserId;
	}

	public void setSecureUserId(String secureUserId) {
		this.secureUserId = secureUserId;
	}

	public String getSecureUserPwd() {
		return secureUserPwd;
	}

	public void setSecureUserPwd(String secureUserPwd) {
		this.secureUserPwd = secureUserPwd;
	}

	public String getSecureUserPwd2() {
		return secureUserPwd2;
	}

	public void setSecureUserPwd2(String secureUserPwd2) {
		this.secureUserPwd2 = secureUserPwd2;
	}

	public String getNewUserPwd() {
		return newUserPwd;
	}

	public void setNewUserPwd(String newUserPwd) {
		this.newUserPwd = newUserPwd;
	}

	public String getPwdMdfcYn() {
		return pwdMdfcYn;
	}

	public void setPwdMdfcYn(String pwdMdfcYn) {
		this.pwdMdfcYn = pwdMdfcYn;
	}

	public String getRolecodeNm() {
		return rolecodeNm;
	}

	public void setRolecodeNm(String rolecodeNm) {
		this.rolecodeNm = rolecodeNm;
	}

	public String getRolecode() {
		return rolecode;
	}

	public void setRolecode(String rolecode) {
		this.rolecode = rolecode;
	}

	public long getFailcount() {
		return failcount;
	}

	public void setFailcount(long failcount) {
		this.failcount = failcount;
	}

	public String getAuthcode() {
		return authcode;
	}

	public void setAuthcode(String authcode) {
		this.authcode = authcode;
	}

	public String getSecurecode() {
		return securecode;
	}

	public void setSecurecode(String securecode) {
		this.securecode = securecode;
	}

	public String getUserId() {
		return userId;
	}

	public void setUserId(String userId) {
		this.userId = userId;
	}

	public String getUserPwd() {
		return userPwd;
	}

	public void setUserPwd(String userPwd) {
		this.userPwd = userPwd;
	}

	public String getUserNm() {
		return userNm;
	}

	public void setUserNm(String userNm) {
		this.userNm = userNm;
	}

	public String getFacebookid() {
		return facebookid;
	}

	public void setFacebookid(String facebookid) {
		this.facebookid = facebookid;
	}

	public String getTwitterid() {
		return twitterid;
	}

	public void setTwitterid(String twitterid) {
		this.twitterid = twitterid;
	}

	public String getGoogleid() {
		return googleid;
	}

	public void setGoogleid(String googleid) {
		this.googleid = googleid;
	}

	public String getKakaoid() {
		return kakaoid;
	}

	public void setKakaoid(String kakaoid) {
		this.kakaoid = kakaoid;
	}

	public String getUserPwd2() {
		return userPwd2;
	}

	public void setUserPwd2(String userPwd2) {
		this.userPwd2 = userPwd2;
	}

	public String getImgUrl() {
		return imgUrl;
	}

	public void setImgUrl(String imgUrl) {
		this.imgUrl = imgUrl;
	}
	
	
	
}
