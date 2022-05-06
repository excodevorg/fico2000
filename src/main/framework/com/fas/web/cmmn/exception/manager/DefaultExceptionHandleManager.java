package com.fas.web.cmmn.exception.manager;

import com.fas.web.cmmn.exception.handler.ExceptionHandler;

import org.apache.commons.logging.Log;
import org.springframework.util.PathMatcher;

public class DefaultExceptionHandleManager extends AbsExceptionHandleManager implements ExceptionHandlerService
{
	public boolean run(Exception exception) throws Exception
	{
	  this.log.debug(" DefaultExceptionHandleManager.run() ");
	
	  if (!enableMatcher()) {
	    return false;
	  }
	  for (String pattern : this.patterns) {
	    this.log.debug("pattern = " + pattern + ", thisPackageName = " + this.thisPackageName);
	    this.log.debug("pm.match(pattern, thisPackageName) =" + this.pm.match(pattern, this.thisPackageName));
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