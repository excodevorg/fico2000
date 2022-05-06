package com.fas.web.cmmn.trace.manager;

import com.fas.web.cmmn.trace.handler.TraceHandler;

public class DefaultTraceHandleManager extends AbsTraceHandleManager implements TraceHandlerService
{
public boolean trace(Class clazz, String message)
{
  this.log.debug(" DefaultExceptionHandleManager.run() ");

  if (!enableMatcher()) {
    return false;
  }
  for (String pattern : this.patterns) {
    this.log.debug("pattern = " + pattern + ", thisPackageName = " + getPackageName());
    this.log.debug("pm.match(pattern, getPackageName()) =" + this.pm.match(pattern, getPackageName()));
    if (this.pm.match(pattern, getPackageName())) {
      for (TraceHandler eh : this.handlers) {
        eh.todo(clazz, message);
        this.log.debug("trace end?");
      }
      break;
    }
  }

  return true;
}
}