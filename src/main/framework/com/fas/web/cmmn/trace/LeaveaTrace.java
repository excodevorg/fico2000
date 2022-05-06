package com.fas.web.cmmn.trace;

import com.fas.web.cmmn.trace.manager.TraceHandlerService;

import java.util.Locale;

import javax.annotation.Resource;

import org.apache.commons.logging.Log;
import org.springframework.context.MessageSource;
import org.springframework.util.AntPathMatcher;
import org.springframework.util.PathMatcher;

public class LeaveaTrace
{

	  @Resource(name="messageSource")
	  private MessageSource messageSource;
	  private static final long serialVersionUID = 1L;
	  private TraceHandlerService[] traceHandlerServices;
	  private PathMatcher pm = new AntPathMatcher();
	
	  public void setTraceHandlerServices(TraceHandlerService[] traceHandlerServices)
	  {
	    this.traceHandlerServices = traceHandlerServices;
	  }
	
	  public int countOfTheTraceHandlerService()
	  {
	    return this.traceHandlerServices != null ? this.traceHandlerServices.length : 0;
	  }
	
	  public void trace(String msgKey, Class<?> clazz)
	  {
	    trace(msgKey, new String[0], clazz);
	  }
	
	  public void trace(String msgKey, String[] msgArgs, Class<?> clazz)
	  {
	    trace(msgKey, msgArgs, null, clazz);
	  }
	
	  public void trace(String msgKey, String[] msgArgs, Locale locale, Class<?> clazz)
	  {
	    trace(clazz, this.messageSource, msgKey, msgArgs, locale, null);
	  }
	
	  public void trace(Class<?> clazz, MessageSource messageSource, String messageKey, Object[] messageParameters, Locale locale)
	  {
	    trace(clazz, messageSource, messageKey, messageParameters, locale, null);
	  }
	
	  public void trace(Class<?> clazz, MessageSource messageSource, String messageKey, Object[] messageParameters, Locale locale, Log log)
	  {
	    String message = messageSource.getMessage(messageKey, messageParameters, null, locale);
	
	    if (log != null) {
	      log.info(" LeaveaTrace.trace() this.message =>" + message);
	    }
	
	    if (this.traceHandlerServices == null)
	      return;
	    for (TraceHandlerService traceHandlerService : this.traceHandlerServices) {
	      if (traceHandlerService.hasReqExpMatcher()) {
	        traceHandlerService.setReqExpMatcher(this.pm);
	      }
	      traceHandlerService.setPackageName(clazz.getCanonicalName());
	      traceHandlerService.trace(clazz, message);
	    }
	  }
}