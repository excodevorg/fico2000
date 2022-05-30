package com.fas.svy.formVo;

import java.util.List;
import java.util.Map;

public class SurveyFormVo {

	private static final long serialVersionUID = -1L;
	
	private String svyId;
	private String userId;
	private String bzn;
	private String svyRepFromYmd;
	private String svyRepToYmd;
	private List<Map> itemList;
	
	public String getSvyId() {
		return svyId;
	}
	public void setSvyId(String svyId) {
		this.svyId = svyId;
	}
	public String getUserId() {
		return userId;
	}
	public void setUserId(String userId) {
		this.userId = userId;
	}
	public String getBzn() {
		return bzn;
	}
	public void setBzn(String bzn) {
		this.bzn = bzn;
	}
	public String getSvyRepFromYmd() {
		return svyRepFromYmd;
	}
	public void setSvyRepFromYmd(String svyRepFromYmd) {
		this.svyRepFromYmd = svyRepFromYmd;
	}
	public String getSvyRepToYmd() {
		return svyRepToYmd;
	}
	public void setSvyRepToYmd(String svyRepToYmd) {
		this.svyRepToYmd = svyRepToYmd;
	}
	public List<Map> getItemList() {
		return itemList;
	}
	public void setItemList(List<Map> itemList) {
		this.itemList = itemList;
	}
	
	
	
}
