package com.fas.web.cmmn.aspect;

import com.fas.web.cmmn.dataaccess.util.JsonObjectModel;
import com.fas.web.cmmn.exception.BizException;
import com.fas.web.cmmn.exception.JsonException;
import com.fas.web.cmmn.util.JsonResponseObject;
import com.fas.web.cmmn.util.HttpUtil;

import java.util.HashMap;
import java.util.Map;

import javax.annotation.Resource;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.dao.DataAccessException;
import org.springframework.transaction.TransactionException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseBody;

@ControllerAdvice
public class ExceptionControllerAdvice {
	
	protected Log log = LogFactory.getLog(this.getClass());
	
	@Resource(name="HttpUtil")
	private HttpUtil fasHttpUtil;
	
	@ExceptionHandler(JsonException.class) 
	//@ResponseStatus(value=HttpStatus.BAD_REQUEST)
	@ResponseBody
	public String handleJsonException(JsonException e) {
		
		log.debug("############## handleJsonException ########################");
		
		Map<String, String> resultMap = new HashMap<String, String>();
    	resultMap.put("RESULTCODE", "9999");
    	resultMap.put("ERRMESSAGE", e.getMessage());
    	String resJson = JsonResponseObject.getJsonMapString(resultMap, "MAP");
    	
    	log.debug("resJson [ " + resJson + " ]");
    	
    	return resJson;
	}
	
	@ExceptionHandler(Exception.class) 
	public String handleException(Exception e) {
		
		log.debug("############## handleJsonException Exception.class ########################");
		
		JsonObjectModel resultMap = new JsonObjectModel();
		resultMap.fail(e.getMessage());
		
		fasHttpUtil.getRequest().setAttribute("errMsg", e.getMessage());
		
    	return "exception/exception";
	}
	
	@ExceptionHandler(BizException.class) 
	@ResponseBody
	public Map handleBizException(BizException e) {
		
		log.debug("############## handleJsonException BizException.class ########################");
		
		JsonObjectModel resultMap = new JsonObjectModel();
		resultMap.fail(e.getMessage());
		
		return resultMap.getMap();
	}
	
	@ExceptionHandler(DataAccessException.class) 
	//@ResponseStatus(value=HttpStatus.BAD_REQUEST)
	@ResponseBody
	public Map handleSqlException(DataAccessException e) {
		
		log.debug("############## handleJsonException DataAccessException.class ########################");
		
		JsonObjectModel resultMap = new JsonObjectModel();
		resultMap.fail(e.getMessage());
		
    	return resultMap.getMap(); 
	}
	
	@ExceptionHandler(TransactionException.class) 
	//@ResponseStatus(value=HttpStatus.BAD_REQUEST)
	@ResponseBody
	public Map handleTranlException(TransactionException e) {		
		
		log.debug("############## handleJsonException TransactionException.class ########################");
		
		JsonObjectModel resultMap = new JsonObjectModel();
		resultMap.fail(e.getMessage());
		
    	return resultMap.getMap();
	}
	
}
