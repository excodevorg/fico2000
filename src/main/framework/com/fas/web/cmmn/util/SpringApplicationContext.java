package com.fas.web.cmmn.util;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.beans.BeansException;
import org.springframework.context.ApplicationContext;
import org.springframework.context.ApplicationContextAware;

public class SpringApplicationContext implements ApplicationContextAware {

	protected final Log log = LogFactory.getLog(getClass());
	
	private static ApplicationContext CONTEXT;
	
	@Override
	public void setApplicationContext(ApplicationContext context)
			throws BeansException {
		// TODO Auto-generated method stub
		CONTEXT = context;
	}
	
	public static Object getBean(String beanName) {
		return CONTEXT.getBean(beanName);
	}
	
	public static <T> T getBean(String beanName, Class<T> requriedType) {
		return CONTEXT.getBean(beanName, requriedType);
	}

}
