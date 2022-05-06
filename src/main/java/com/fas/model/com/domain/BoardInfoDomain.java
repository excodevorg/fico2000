package com.fas.model.com.domain;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.IdClass;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import com.fas.model.repository.pk.BoardInfoPK;

@Entity
@Table(name="TB_BOARD_INFO")
@IdClass(value=BoardInfoPK.class)
public class BoardInfoDomain {

	@Id
	@Column(name="code")
	private String code;
		
	@Id
	@Column(name="mainNo")
	private int mainNo;

	@Column(name="userId")
	private String userId;

	@Column(name="title")
	private String title;

	@Column(name="name")
	private String name;

	@Column(name="content", columnDefinition="TEXT")
	private String content;

	@Column(name="passwd")
	private String passwd;
	
	@Column(name="date", columnDefinition="DATETIME")
	@Temporal(TemporalType.TIMESTAMP)
	private Date date;

	@Column(name="count")
	private int count;
	
	@Column(name="email")
	private String email;

	@Column(name="replyNo")	 
	private int replyNo;  //댓글 

	@Column(name="relNo")	
	private int relNo;    //답변글 

	@Column(name="depth")	
	private int depth;

	@Column(name="flapMngmNo")	
	private String flapMngmNo;

	@Column(name="fileName")	
	private String fileName;
	
	@Column(name="delYn")
	private String delYn;
	
	@Column(name="lcteUnqId")
	private String lcteUnqId;
	
	@Column(name="hpno")
	private String hpno;
	
	public String getHpno() {
		return hpno;
	}

	public void setHpno(String hpno) {
		this.hpno = hpno;
	}

	public String getLcteUnqId() {
		return lcteUnqId;
	}

	public void setLcteUnqId(String lcteUnqId) {
		this.lcteUnqId = lcteUnqId;
	}

	public String getDelYn() {
		return delYn;
	}

	public void setDelYn(String delYn) {
		this.delYn = delYn;
	}

	public String getCode() {
		return code;
	}

	public void setCode(String code) {
		this.code = code;
	}

	public int getMainNo() {
		return mainNo;
	}

	public void setMainNo(int mainNo) {
		this.mainNo = mainNo;
	}

	public String getUserId() {
		return userId;
	}

	public void setUserId(String userId) {
		this.userId = userId;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getContent() {
		return content;
	}

	public void setContent(String content) {
		this.content = content;
	}

	public String getPasswd() {
		return passwd;
	}

	public void setPasswd(String passwd) {
		this.passwd = passwd;
	}

	public Date getDate() {
		return date;
	}

	public void setDate(Date date) {
		this.date = date;
	}

	public int getCount() {
		return count;
	}

	public void setCount(int count) {
		this.count = count;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public int getReplyNo() {
		return replyNo;
	}

	public void setReplyNo(int replyNo) {
		this.replyNo = replyNo;
	}

	public int getRelNo() {
		return relNo;
	}

	public void setRelNo(int relNo) {
		this.relNo = relNo;
	}

	public int getDepth() {
		return depth;
	}

	public void setDepth(int depth) {
		this.depth = depth;
	}

	public String getFlapMngmNo() {
		return flapMngmNo;
	}

	public void setFlapMngmNo(String flapMngmNo) {
		this.flapMngmNo = flapMngmNo;
	}

	public String getFileName() {
		return fileName;
	}

	public void setFileName(String fileName) {
		this.fileName = fileName;
	}
	
}
