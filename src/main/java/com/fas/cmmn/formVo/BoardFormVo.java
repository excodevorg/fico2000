package com.fas.cmmn.formVo;

import java.math.BigDecimal;
import java.util.List;

public class BoardFormVo extends CmmFormVo {

	
	private String code;
	
	private int mainNo;
	
	private String userId;

	private String title;
	
	private String titleDisplay;

	private String name;

	private String content;

	private String passwd;
	
	private String writeDate;

	private int count;
	
	private String email;

	private int replyNo;  //댓글 

	private int relNo;    //답변글 

	private int depth;

	private String flapMngmNo;

	private String fileName;
	
	private String delYn;
	
	private int numRow;
	
	private String hpno;
	
	private String lcteUnqId;
	
	private String modifyAuthYn; 
	
	private String imgUrl;
	
	public String getImgUrl() {
		return imgUrl;
	}

	public void setImgUrl(String imgUrl) {
		this.imgUrl = imgUrl;
	}

	public String getModifyAuthYn() {
		return modifyAuthYn;
	}

	public void setModifyAuthYn(String modifyAuthYn) {
		this.modifyAuthYn = modifyAuthYn;
	}

	public String getHpno() {
		return hpno;
	}

	public void setHpno(String hpno) {
		this.hpno = hpno;
	}

	public String getTitleDisplay() {
		return titleDisplay;
	}

	public void setTitleDisplay(String titleDisplay) {
		this.titleDisplay = titleDisplay;
	}

	public int getNumRow() {
		return numRow;
	}

	public void setNumRow(int numRow) {
		this.numRow = numRow;
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

	public String getWriteDate() {
		return writeDate;
	}

	public void setWriteDate(String writeDate) {
		this.writeDate = writeDate;
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

	public String getDelYn() {
		return delYn;
	}

	public void setDelYn(String delYn) {
		this.delYn = delYn;
	}

	public String getLcteUnqId() {
		return lcteUnqId;
	}

	public void setLcteUnqId(String lcteUnqId) {
		this.lcteUnqId = lcteUnqId;
	}
	
	
}
