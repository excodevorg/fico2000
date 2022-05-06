package com.fas.batch.com;

import org.springframework.context.ApplicationContext;

import org.springframework.context.support.ClassPathXmlApplicationContext;

public class ApplicationContextStart {

	private static ApplicationContext applicationContext;
	
	private ApplicationContextStart() {
		
	}
	
	public static ApplicationContext getInstance() {
		
		if (applicationContext != null) {
			return applicationContext;
		} else {
			applicationContext = new ClassPathXmlApplicationContext("/springConfig/context-*.xml");
			return applicationContext;
		}
		
	}
	
}
