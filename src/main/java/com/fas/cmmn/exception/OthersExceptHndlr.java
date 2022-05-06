package com.fas.cmmn.exception;

import com.fas.web.cmmn.exception.handler.ExceptionHandler;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;

public class OthersExceptHndlr implements ExceptionHandler {

    protected Log log = LogFactory.getLog(this.getClass());
    
    public void occur(Exception exception, String packageName) {
    	log.debug("[ " + packageName + " ] " + exception.toString());
    }

}
