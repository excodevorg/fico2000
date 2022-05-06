package com.fas.cmmn.exception;

import com.fas.web.cmmn.exception.handler.ExceptionHandler;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;

public class DefaultExceptHndlr implements ExceptionHandler {

    protected Log log = LogFactory.getLog(this.getClass());
    
    public void occur(Exception ex, String packageName) {

		log.debug(" RooibosServiceExceptionHandler run...............");

		try {
			log.debug("$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$");
			log.debug("$            RooibosServiceException                          $");			
			log.debug("$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$");
			log.debug("packageName : [ " + packageName + " ]");
			log.debug("error Msg   : [ " + ex.toString() + " ]");
			log.debug("$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$");
			ex.printStackTrace();
		} catch (Exception e) {
			e.printStackTrace();
		}
    }

}
