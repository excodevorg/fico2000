package com.fas.web.cmmn.exception.manager;

import com.fas.web.cmmn.exception.handler.ExceptionHandler;

import org.springframework.util.PathMatcher;

public abstract interface ExceptionHandlerService
{
  public abstract void setPatterns(String[] paramArrayOfString);

  public abstract void setHandlers(ExceptionHandler[] paramArrayOfExceptionHandler);

  public abstract void setPackageName(String paramString);

  public abstract void setException(Exception paramException);

  public abstract void setReqExpMatcher(PathMatcher paramPathMatcher);

  public abstract boolean run(Exception paramException)
    throws Exception;

  public abstract boolean hasReqExpMatcher();
}