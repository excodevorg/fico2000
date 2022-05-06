package com.fas.model.com.api;

import com.fas.model.com.api.impl.BOKOpenAPI;
import com.fas.web.cmmn.util.SpringApplicationContext;

public class OpenAPIFactory {

	public static OpenAPI createConnection(String sysCd) throws Exception {
		
		if ("BOK".equals(sysCd)) {
			return (BOKOpenAPI) SpringApplicationContext.getBean("BOKOpenAPI");
		} else {
			return null;
		}
		
	}
	
}
