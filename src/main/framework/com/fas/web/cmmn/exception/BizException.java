package com.fas.web.cmmn.exception;

import java.text.MessageFormat;
import java.util.Locale;

import javax.annotation.Resource;

import org.springframework.context.MessageSource;

import com.fas.web.cmmn.util.SpringApplicationContext;

public class BizException extends BaseException {
	
	  private static final long serialVersionUID = 1L;
	  
	  public BizException()
	  {
	    this("BizException without message", null, null);
	  }

	  public BizException(String defaultMessage)
	  {
		 this(defaultMessage, null, null);
	  }
	  
	  public BizException(String messageKey, String messageParameter[]) {
		  this(messageKey, messageParameter, null);
	  }

	  public BizException(String defaultMessage, Exception wrappedException)
	  {
	    this(defaultMessage, null, wrappedException);
	  }

	  public BizException(String defaultMessage, Object[] messageParameters, Exception wrappedException)
	  {
		
	    this.messageKey = "999998";
		this.message = defaultMessage;
		
		if (messageParameters != null) {
			this.messageParameters = messageParameters;
		} else {
			String messageArray[] = new String[1];
			messageArray[0] = defaultMessage;
			this.messageParameters = messageArray;
		}
		
	    this.wrappedException = wrappedException;
	  }
	  
	  public BizException(String messageKey, Object[] messageParameters, String defaultMessage, Exception wrappedException) {
		  this.message = defaultMessage;
		  this.messageKey = messageKey;
		  this.messageParameters = messageParameters;
		  this.wrappedException = wrappedException;
	  }

	  public BizException(MessageSource messageSource, String messageKey)
	  {
	    this(messageSource, messageKey, null, null, Locale.getDefault(), null);
	  }

	  public BizException(MessageSource messageSource, String messageKey, Exception wrappedException)
	  {
	    this(messageSource, messageKey, null, null, Locale.getDefault(), wrappedException);
	  }

	  public BizException(MessageSource messageSource, String messageKey, Locale locale, Exception wrappedException) {
	    this(messageSource, messageKey, null, null, locale, wrappedException);
	  }

	  public BizException(MessageSource messageSource, String messageKey, Object[] messageParameters, Locale locale, Exception wrappedException)
	  {
	    this(messageSource, messageKey, messageParameters, null, locale, wrappedException);
	  }

	  public BizException(MessageSource messageSource, String messageKey, Object[] messageParameters, Exception wrappedException)
	  {
	    this(messageSource, messageKey, messageParameters, null, Locale.getDefault(), wrappedException);
	  }

	  public BizException(MessageSource messageSource, String messageKey, Object[] messageParameters, String defaultMessage, Exception wrappedException)
	  {
	    this(messageSource, messageKey, messageParameters, defaultMessage, Locale.getDefault(), wrappedException);
	  }

	  public BizException(MessageSource messageSource, String messageKey, Object[] messageParameters, String defaultMessage, Locale locale, Exception wrappedException)
	  {
	    this.messageKey = messageKey;
	    this.messageParameters = messageParameters;
	    this.message = messageSource.getMessage(messageKey, messageParameters, defaultMessage, locale);
	    this.wrappedException = wrappedException;
	  }
	  
}
