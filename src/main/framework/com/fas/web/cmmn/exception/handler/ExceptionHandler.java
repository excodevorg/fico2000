package com.fas.web.cmmn.exception.handler;

public abstract interface ExceptionHandler
{
  public abstract void occur(Exception paramException, String paramString);
}
