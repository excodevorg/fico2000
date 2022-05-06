package com.fas.web.cmmn.trace.manager;

import com.fas.web.cmmn.trace.handler.TraceHandler;

import org.springframework.util.PathMatcher;

public abstract interface TraceHandlerService
{
  public abstract void setPatterns(String[] paramArrayOfString);

  public abstract void setHandlers(TraceHandler[] paramArrayOfTraceHandler);

  public abstract void setPackageName(String paramString);

  public abstract void setReqExpMatcher(PathMatcher paramPathMatcher);

  public abstract boolean hasReqExpMatcher();

  public abstract boolean trace(Class paramClass, String paramString);
}
