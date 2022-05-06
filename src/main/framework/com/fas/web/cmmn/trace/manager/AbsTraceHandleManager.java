package com.fas.web.cmmn.trace.manager;

import com.fas.web.cmmn.trace.handler.TraceHandler;

import javax.annotation.Resource;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.context.MessageSource;
import org.springframework.util.PathMatcher;

public abstract class AbsTraceHandleManager
{
	  protected Log log = LogFactory.getLog(getClass());
	
	  @Resource(name="messageSource")
	  protected MessageSource messageSource;
	  protected String packageName;
	  protected String[] patterns;
	  protected TraceHandler[] handlers;
	  protected PathMatcher pm;
	
	  public void setPatterns(String[] patterns)
	  {
	    this.patterns = patterns;
	  }
	
	  public void setHandlers(TraceHandler[] handlers)
	  {
	    this.handlers = handlers;
	  }
	
	  public void setPackageName(String canonicalName)
	  {
	    this.packageName = canonicalName;
	  }
	
	  public String getPackageName()
	  {
	    return this.packageName;
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
	
	  public boolean trace(Class clazz, String message)
	  {
	    this.log.debug(" DefaultExceptionHandleManager.run() ");
	
	    if (!enableMatcher()) {
	      return false;
	    }
	    for (String pattern : this.patterns) {
	      this.log.debug("pattern = " + pattern + ", thisPackageName = " + this.packageName);
	      this.log.debug("pm.match(pattern, thisPackageName) =" + this.pm.match(pattern, this.packageName));
	      if (this.pm.match(pattern, this.packageName)) {
	        for (TraceHandler eh : this.handlers) {
	          eh.todo(clazz, message);
	        }
	        break;
	      }
	    }
	
	    return true;
	  }
}
