package com.fas.batch.com;

import java.util.HashMap;
import java.util.Map;

import org.springframework.context.ApplicationContext;

import com.fas.batch.com.exception.ParameterParsingException;
import com.fas.batch.execute.BatchExecute;
import com.fas.batch.util.BatchConst;
import com.fas.web.cmmn.util.SpringApplicationContext;

public abstract class AbstractBatchFramework {

	protected static Map parameter;
	
	protected static ApplicationContext applicationContext;
	
	protected static String pgmClassNm;
	
	protected static void SpringContextStart() throws Exception {
		applicationContext = ApplicationContextStart.getInstance();
	}
	
	protected static int resultCode = 0;
	
	public static int run(String[] args) throws Exception {
		
		try {
			beforeLog();
			
			SpringContextStart();
			
			parameterParsing(args);
			
			pgmClassNm = (String) parameter.get(BatchConst.classNameKey);
			
			BatchExecute batch = (BatchExecute) SpringApplicationContext.getBean(pgmClassNm);
			
			resultCode = batch.execute(parameter);
			
		} finally {
			
		}
		
		return resultCode;
		
	}
	
	public static Map parameterParsing(String[] args) throws Exception {
		String key = "";
		String value = "";
		
		parameter = new HashMap();
		
		for (String arg : args) {
			
			int index = arg.indexOf(BatchConst.PARAM_DELIMETER);
			
			if (index < 0) {
				throw new ParameterParsingException("It can't seperate to tokens with delimeter ["+BatchConst.PARAM_DELIMETER+"]");
			}
			
			key = arg.substring(0,index);
			value = arg.substring(index + 1);
			
			if (key.trim().length() == 0) {
				throw new ParameterParsingException("Parameter key token's length is 0");
			}
			
			if (key.equals(BatchConst.fileNameKey)) {
				key = BatchConst.fileNameKey;
			} else if (key.equals(BatchConst.classzName)) {
				key = BatchConst.classNameKey;
			}
			
			parameter.put(key, value);
			
		}
		
		return parameter;
		
	}
	
	public static void beforeLog() {
		System.out.println("<-------------- batch start ------------->");
	}
	
	public static void afterLog() {
		
	}
	
}
