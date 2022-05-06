package com.fas.web.cmmn.aspect;


import com.fas.web.cmmn.exception.BaseException;
import com.fas.web.cmmn.exception.BizException;
import com.fas.web.cmmn.exception.JsonException;
import com.fas.web.cmmn.exception.manager.ExceptionHandlerService;
import com.fas.web.cmmn.util.HttpUtil;

import java.util.Locale;

import javax.annotation.Resource;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.aspectj.lang.JoinPoint;
import org.aspectj.lang.Signature;
import org.hsqldb.lib.StringUtil;
import org.springframework.context.MessageSource;
import org.springframework.context.i18n.LocaleContextHolder;
import org.springframework.dao.DataAccessException;
import org.springframework.util.AntPathMatcher;
import org.springframework.util.PathMatcher;


public class ExceptionTransfer
{
	  protected Log log;
	  
	  @Resource(name="HttpUtil")
	  private HttpUtil HttpUtil;
	  
	  @Resource(name="messageSource")
	  private MessageSource messageSource;
	  private ExceptionHandlerService[] exceptionHandlerServices;
	  private PathMatcher pm;
	
	  public ExceptionTransfer()
	  {
	    this.log = LogFactory.getLog(getClass());
	
	    this.pm = new AntPathMatcher();
	  }
	
	  public void setExceptionHandlerService(ExceptionHandlerService[] exceptionHandlerServices)
	  {
	    this.exceptionHandlerServices = exceptionHandlerServices;
	    if (this.exceptionHandlerServices != null)
	      this.log.debug(" count of ExceptionHandlerServices = " + exceptionHandlerServices.length);
	  }
	
	  public int countOfTheExceptionHandlerService()
	  {
	    return this.exceptionHandlerServices != null ? this.exceptionHandlerServices.length : 0;
	  }
	
	  public void transfer(JoinPoint thisJoinPoint, Exception exception) throws Exception
	  {		
		  	log.debug(">>>>>> " + HttpUtil.isAjaxRequest());
		  	log.debug(">>>>>> " + HttpUtil.getRequest().getHeader("X-Requested-With"));
		  	transfer_Exception(thisJoinPoint, exception);
		    
	  }
	  
	  public void transfer_Exception(JoinPoint thisJoinPoint, Exception exception) throws Exception
	  {
		  	Class clazz = thisJoinPoint.getTarget().getClass();
		    Signature signature = thisJoinPoint.getSignature();
		
		    Locale locale = LocaleContextHolder.getLocale();
		    
		    this.log.debug("+++++++++++++++++++++++++++++++++++++++++++++++++++");
		    this.log.debug("clazz >>>>> " + clazz.getName());
		    this.log.debug("exception >>>> " + exception.toString());
		    
		    exception.printStackTrace();
		    
		    if ((exception instanceof BizException)) {
		      this.log.debug("Exception case :: BizException ");
		
		      BizException be = (BizException)exception;
		
		      if (be.getWrappedException() != null) {
		        Throwable _throwable = be.getWrappedException();
		        getLog(clazz).error(be.getMessage(), _throwable);
		      } else {
		        getLog(clazz).error(be.getMessage(), be.getCause());
		      }
		      
		      String messageContent = "";
		      
		      try {
		    	 
		    	  if (!StringUtil.isEmpty(be.getMessageKey())) {
		    		  messageContent += "[" + be.getMessageKey() + "] Error Message <br>";
		    		  messageContent += messageSource.getMessage(be.getMessageKey(), be.getMessageParameters(), Locale.KOREAN);
		    	  } else {
		    		  messageContent += "[999998] Error Message <br>";
		    		  messageContent += messageSource.getMessage("999998", be.getMessageParameters(), Locale.KOREAN);
		    	  }
		    	  
		    	  
		      } catch(Exception ex) {
		    	  ex.printStackTrace();
		    	  messageContent = "[999998] Error Message <br>";
		    	  messageContent += "시스템 내부 오류입니다.";
		      }
		
//		      if (be.getWrappedException() != null) {
//		    	  if (!StringUtil.isEmpty(messageContent)) {
//		    		  messageContent += "<br>" + be.getWrappedException().toString();
//		    	  } else {
//		    		  messageContent += be.getWrappedException().toString();
//		    	  }
//		      }
		      
		      BizException je = new BizException(messageContent);      
		      throw je;
		    }
		
		    if ((exception instanceof RuntimeException)) {
		      this.log.debug("RuntimeException case :: RuntimeException ");
		
		      String messageContent = "";
		      messageContent += "[999999] Error Message <br>";
		      messageContent += "시스템 내부 오류입니다. 담당자에게 연락하시기 바랍니다. <br>";
		      //messageContent += exception.toString();
		      
		      BizException bizException = new BizException(messageContent);

		      throw bizException;
		    }
		
		    this.log.debug("case :: Exception ");
		
		    getLog(clazz).error(exception.getMessage(), exception.getCause());
		
		    
		    String messageContent = "";
		    messageContent += "[999999] Error Message <br>";
		    messageContent += "시스템 내부 오류입니다. 담당자에게 연락하시기 바랍니다.";
		      
		    Exception bizException = new Exception(messageContent);
		    
		    throw bizException;
	  }
	  
	  
	  protected Exception processException(Class clazz, String msgKey, String[] msgArgs, Exception e, Locale locale)
	  {
	    return processException(clazz, msgKey, msgArgs, e, locale, null);
	  }
	
	  protected Exception processException(Class clazz, final String msgKey, final String[] msgArgs, final Exception e, final Locale locale, ExceptionCreator exceptionCreator)
	  {
	    getLog(clazz).error(this.messageSource.getMessage(msgKey, msgArgs, locale), e);
	    ExceptionCreator eC = null;
	    if (exceptionCreator == null) {
	      eC = new ExceptionCreator() {
	        public Exception processException(MessageSource messageSource) {
	          return new BaseException(messageSource, msgKey, msgArgs, locale, e);
	        }
	      };
	    }
	    return eC.processException(this.messageSource);
	  }
	
	  protected Log getLog(Class clazz)
	  {
	    return LogFactory.getLog(clazz);
	  }
	
	  protected void processHandling(Class clazz, String methodName, Exception exception, PathMatcher pm, ExceptionHandlerService[] exceptionHandlerServices)
	  {
	    try
	    {
	      for (ExceptionHandlerService ehm : exceptionHandlerServices)
	      {
	        if (!ehm.hasReqExpMatcher())
	          ehm.setReqExpMatcher(pm);
	          ehm.setPackageName(clazz.getCanonicalName() + "." + methodName);
	          ehm.run(exception);
	      }
	    }
	    catch (Exception e)
	    {
	    }
	  }
	
	  protected static abstract interface ExceptionCreator
	  {
	    public abstract Exception processException(MessageSource paramMessageSource);
	  }
}
