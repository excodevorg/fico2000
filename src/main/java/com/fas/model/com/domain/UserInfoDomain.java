package com.fas.model.com.domain;

import java.io.Serializable;
import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

@Entity
@Table(name = "TB_USER_INFO")
public class UserInfoDomain implements Serializable {

	private static final long serialVersionUID = 1L;

	@Id
	@Column(name="userId")
	private String userId; 
	
	@Column(name="userPwd")
	private String userPwd;

	@Column(name="userNm")
	private String userNm;
	
	@Column(name="facebookid")
	private String facebookid;
	
	@Column(name="twitterid")
	private String twitterid;
	
	@Column(name="googleid")
	private String googleid;
	
	@Column(name="kakaoid")
	private String kakaoid;
	
	@Column(name="frrgts", columnDefinition="DATETIME")
	@Temporal(TemporalType.TIMESTAMP)
	private Date frrgts;
	
	@Column(name="lastts", columnDefinition="DATETIME")
	@Temporal(TemporalType.TIMESTAMP)
	private Date lastts;
	
	@Column(name="authcode")
	private String authcode;
	
	@Column(name="failcount")
	private Long failcount;
	
	@Column(name="useyn")
	private String useyn;
	
	@Column(name="imgUrl")
	private String imgUrl;
	
	public String getImgUrl() {
		return imgUrl;
	}

	public void setImgUrl(String imgUrl) {
		this.imgUrl = imgUrl;
	}

	public Date getFrrgts() {
		return frrgts;
	}

	public void setFrrgts(Date frrgts) {
		this.frrgts = frrgts;
	}

	public Date getLastts() {
		return lastts;
	}

	public void setLastts(Date lastts) {
		this.lastts = lastts;
	}

	public String getAuthcode() {
		return authcode;
	}

	public void setAuthcode(String authcode) {
		this.authcode = authcode;
	}

	public Long getFailcount() {
		return failcount;
	}

	public void setFailcount(Long failcount) {
		this.failcount = failcount;
	}

	public String getUseyn() {
		return useyn;
	}

	public void setUseyn(String useyn) {
		this.useyn = useyn;
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
	
	
	
	
}
