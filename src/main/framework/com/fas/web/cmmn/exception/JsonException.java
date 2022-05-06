package com.fas.web.cmmn.exception;

import java.text.MessageFormat;
import java.util.Locale;

import org.springframework.context.MessageSource;

public class JsonException extends BaseException {
	
	  public JsonException()
	  {
	    this("JsonException without message", null, null);
	  }

	  public JsonException(String defaultMessage)
	  {
	    this(defaultMessage, null, null);
	  }

	  public JsonException(String defaultMessage, Exception wrappedException)
	  {
	    this(defaultMessage, null, wrappedException);
	  }

	  public JsonException(String defaultMessage, Object[] messageParameters, Exception wrappedException)
	  {
	    String userMessage = defaultMessage;
	    if (messageParameters != null) {
	      userMessage = MessageFormat.format(defaultMessage, messageParameters);
	    }
	    this.message = userMessage;
	    this.wrappedException = wrappedException;
	  }

	  public JsonException(MessageSource messageSource, String messageKey)
	  {
	    this(messageSource, messageKey, null, null, Locale.getDefault(), null);
	  }

	  public JsonException(MessageSource messageSource, String messageKey, Exception wrappedException)
	  {
	    this(messageSource, messageKey, null, null, Locale.getDefault(), wrappedException);
	  }

	  public JsonException(MessageSource messageSource, String messageKey, Locale locale, Exception wrappedException) {
	    this(messageSource, messageKey, null, null, locale, wrappedException);
	  }

	  public JsonException(MessageSource messageSource, String messageKey, Object[] messageParameters, Locale locale, Exception wrappedException)
	  {
	    this(messageSource, messageKey, messageParameters, null, locale, wrappedException);
	  }

	  public JsonException(MessageSource messageSource, String messageKey, Object[] messageParameters, Exception wrappedException)
	  {
	    this(messageSource, messageKey, messageParameters, null, Locale.getDefault(), wrappedException);
	  }

	  public JsonException(MessageSource messageSource, String messageKey, Object[] messageParameters, String defaultMessage, Exception wrappedException)
	  {
	    this(messageSource, messageKey, messageParameters, defaultMessage, Locale.getDefault(), wrappedException);
	  }

	  public JsonException(MessageSource messageSource, String messageKey, Object[] messageParameters, String defaultMessage, Locale locale, Exception wrappedException)
	  {
	    this.messageKey = messageKey;
	    this.messageParameters = messageParameters;
	    this.message = messageSource.getMessage(messageKey, messageParameters, defaultMessage, locale);
	    this.wrappedException = wrappedException;
	  }

}
