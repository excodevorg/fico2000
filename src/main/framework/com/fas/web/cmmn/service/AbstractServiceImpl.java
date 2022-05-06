package com.fas.web.cmmn.service;


import com.fas.web.cmmn.exception.BizException;
import com.fas.web.cmmn.trace.LeaveaTrace;

import java.util.Locale;

import javax.annotation.Resource;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.context.MessageSource;
import org.springframework.context.i18n.LocaleContextHolder;

public abstract class AbstractServiceImpl {

	  protected Log log;

	  @Resource(name="messageSource")
	  private MessageSource messageSource;

	  @Resource(name="leaveaTrace")
	  private LeaveaTrace traceObj;
	  
	  public AbstractServiceImpl()
	  {
	    this.log = LogFactory.getLog(getClass());
	  }

	  protected Exception processException(String msgKey)
	  {
	    return processException(msgKey, new String[0]);
	  }

	  protected Exception processException(String msgKey, Exception e)
	  {
	    return processException(msgKey, new String[0], e);
	  }

	  protected Exception processException(String msgKey, String[] msgArgs)
	  {
	    return processException(msgKey, msgArgs, null);
	  }

	  protected Exception processException(String msgKey, String[] msgArgs, Exception e)
	  {
	    return processException(msgKey, msgArgs, e, LocaleContextHolder.getLocale());
	  }

	  protected Exception processException(String msgKey, String[] msgArgs, Exception e, Locale locale)
	  {
	    return processException(msgKey, msgArgs, e, locale, null);
	  }

	  protected Exception processException(final String msgKey, final String[] msgArgs, final Exception e, final Locale locale, ExceptionCreator exceptionCreator)
	  {
	    ExceptionCreator eC = null;
	    if (exceptionCreator == null) {
	      eC = new ExceptionCreator() {
	        public Exception createBizException(MessageSource messageSource) {
	          return new BizException(messageSource, msgKey, msgArgs, locale, e);
	        }
	      };
	    }
	    return eC.createBizException(this.messageSource);
	  }

	  protected void leaveaTrace(String msgKey)
	  {
	    leaveaTrace(msgKey, new String[0]);
	  }

	  protected void leaveaTrace(String msgKey, String[] msgArgs)
	  {
	    leaveaTrace(msgKey, msgArgs, null);
	  }

	  protected void leaveaTrace(String msgKey, String[] msgArgs, Locale locale)
	  {
	    this.traceObj.trace(getClass(), this.messageSource, msgKey, msgArgs, locale, this.log);
	  }

	  protected static abstract interface ExceptionCreator
	  {
	    public abstract Exception createBizException(MessageSource paramMessageSource);
	  }

}
