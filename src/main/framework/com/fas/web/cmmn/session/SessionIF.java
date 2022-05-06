package com.fas.web.cmmn.session;

import java.util.ArrayList;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

public interface SessionIF {

	public void setMaxInactiveInterval(int f_SessionTime);	

	/**
	 * @return maxInactiveInterval
	 */
	public int getMaxInactiveInterval() ;

	/**
	 * @return request
	 */
	public HttpServletRequest getRequest() ;


	public void setRequest(HttpServletRequest request) ; 
	
	/**
	 * @return session
	 */
	public HttpSession getSession() ;


	public void setSession(HttpSession session) ;
	 
	public String getSession(String f_Session_name);

	public ArrayList getSessionArray(String f_Session_name);
	
	public void setSession(String f_Session_name,String f_Session_value);	
	
	public void setSession(String f_Session_name,ArrayList f_Session_value);
	
	public void setSession(String f_Session_name,Object f_Session_value);	

	public void removeSession(String f_Session_name);	
	
	public void invalidate();	
	
}
