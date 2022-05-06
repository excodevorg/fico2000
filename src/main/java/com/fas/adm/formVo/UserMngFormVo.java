package com.fas.adm.formVo;

import com.fas.cmmn.formVo.CmmFormVo;

public class UserMngFormVo extends CmmFormVo {

	private String userId;
	
	private String userPwd;
	
	private String userNm;
	
	private String facebookid;
	
	private String twitterid;
	
	private String googleid;
	
	private String kakaoid;
	
	private String authcode;
	
	private String securecode; //보안코드 -> 클라이언트에 발급하는 코드 (인증시 비교)
	
	private long failcount;
	
	private String useYn;
	
	private String useYnDis;
	
	private String joinYmd;
	
	private String rolecode;
	
	private String userid;
	
	
	
	public String getUserid() {
		return userid;
	}

	public void setUserid(String userid) {
		this.userid = userid;
	}

	public String getRolecode() {
		return rolecode;
	}

	public void setRolecode(String rolecode) {
		this.rolecode = rolecode;
	}

	public String getJoinYmd() {
		return joinYmd;
	}

	public void setJoinYmd(String joinYmd) {
		this.joinYmd = joinYmd;
	}

	public String getUseYn() {
		return useYn;
	}

	public void setUseYn(String useYn) {
		this.useYn = useYn;
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

	public String getUseYnDis() {
		return useYnDis;
	}

	public void setUseYnDis(String useYnDis) {
		this.useYnDis = useYnDis;
	}
	
	
	
}
