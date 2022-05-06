package com.fas.model.com;

import javax.annotation.Resource;

import org.springframework.stereotype.Repository;

import com.fas.web.cmmn.util.HttpUtil;

@Repository("SessionManager")
public class SessionManager {
	
	@Resource(name="HttpUtil")
	private HttpUtil httpUtil;
	   
}
