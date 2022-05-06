package com.fas.web.cmmn.exception.manager;

import com.fas.web.cmmn.exception.handler.ExceptionHandler;

import javax.annotation.Resource;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.context.MessageSource;
import org.springframework.util.PathMatcher;

public abstract class AbsExceptionHandleManager {
	
	protected Log log = LogFactory.getLog(getClass());

	  @Resource(name="messageSource")
	  protected MessageSource messageSource;
	  protected Exception ex;
	  protected String thisPackageName;
	  protected String[] patterns;
	  protected ExceptionHandler[] handlers;
	  protected PathMatcher pm;

	  public void setPatterns(String[] patterns)
	  {
	    this.patterns = patterns;
	  }

	  public void setHandlers(ExceptionHandler[] handlers)
	  {
	    this.handlers = handlers;
	  }

	  public void setPackageName(String canonicalName)
	  {
	    this.thisPackageName = canonicalName;
	  }

	  public String getPackageName() {
	    return this.thisPackageName;
	  }

	  public void setException(Exception be)
	  {
	    this.ex = be;
	  }

	  public void setReqExpMatcher(PathMatcher pm)
	  {
	    this.pm = pm;
	  }

	  public boolean hasReqExpMatcher()
	  {
	    return enableMatcher();
	  }

	  public boolean enableMatcher()
	  {
	    return this.pm != null;
	  }

	  public boolean run(Exception exception)
	    throws Exception
	  {
	    if (!enableMatcher()) {
	      return false;
	    }
	    for (String pattern : this.patterns) {
	      if (this.pm.match(pattern, this.thisPackageName)) {
	        for (ExceptionHandler eh : this.handlers) {
	          eh.occur(exception, getPackageName());
	        }
	        break;
	      }
	    }

	    return true;
	  }
	  
}
