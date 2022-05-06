package com.fas.web.cmmn.session;

import java.util.ArrayList;

import com.fas.web.cmmn.util.HttpUtil;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.springframework.web.context.request.RequestContextHolder;
import org.springframework.web.context.request.ServletRequestAttributes;

public class SessionMgr implements SessionIF {
	
	public int maxInactiveInterval;
	
	public HttpServletRequest request;
	public HttpSession session;
	
	
	public SessionMgr() { 
		
		this.request = ((ServletRequestAttributes) RequestContextHolder.currentRequestAttributes()).getRequest();
				
		String st_maxInactiveInterval = "1800";
		if (st_maxInactiveInterval != null) {
			this.maxInactiveInterval = Integer.parseInt(st_maxInactiveInterval);
		} 
		
		if (maxInactiveInterval == 0) maxInactiveInterval = 60*30;		
		request.getSession().setMaxInactiveInterval(maxInactiveInterval);	
		setSession(request.getSession());
		setRequest(request);
	}
	
	public SessionMgr(HttpServletRequest request) { 
		HttpSession f_session = request.getSession();
		if (maxInactiveInterval == 0) maxInactiveInterval = 60*30;	
		f_session.setMaxInactiveInterval(maxInactiveInterval);	
		setSession(f_session);
		setRequest(request);
	}
	
	
 

	/**
	 * @return maxInactiveInterval
	 */
	public int getMaxInactiveInterval() {
		return maxInactiveInterval;
	}
 
	public void setMaxInactiveInterval(int f_SessionTime){ 
		session.setMaxInactiveInterval(f_SessionTime);  
	}
	
	public String getSession(String f_Session_name){ 
		String rtn_val="";
		if (session.getAttribute(f_Session_name)!=null) rtn_val=session.getAttribute(f_Session_name).toString();
		return rtn_val;
	}

	public ArrayList getSessionArray(String f_Session_name){ 
		ArrayList rtn_val=new ArrayList();
		if (session.getAttribute(f_Session_name)!=null) rtn_val=(ArrayList)session.getAttribute(f_Session_name);
		return rtn_val;
	}
	
	public void setSession(String f_Session_name,String f_Session_value){ 
		session.setAttribute(f_Session_name, f_Session_value);
	}
	
	public void setSession(String f_Session_name,ArrayList f_Session_value){
		session.setAttribute(f_Session_name, f_Session_value);
	}
	
	public void setSession(String f_Session_name,Object f_Session_value) {
		session.setAttribute(f_Session_name, f_Session_value);
	}
	
	public void removeSession(String f_Session_name){ 
		session.removeAttribute(f_Session_name);
	}

	public void invalidate(){ 
		session.invalidate();
	}
			
	
	/**
	 * @return request
	 */
	public HttpServletRequest getRequest() {
		return request;
	}

	public void setRequest(HttpServletRequest request) {
		this.request = request;
	}


	/**
	 * @return session
	 */
	public HttpSession getSession() {
		return session;
	}

	public void setSession(HttpSession session) {
		this.session = session;
	}

}
