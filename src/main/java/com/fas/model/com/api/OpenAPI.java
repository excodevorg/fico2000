package com.fas.model.com.api;

import java.util.List;
import java.util.Map;

import com.fas.web.cmmn.dataaccess.util.FasMap;

public abstract class OpenAPI {

	protected Parser parser;
	
	public abstract List<FasMap> getApiMapList(String svcd, Map searchParam) throws Exception;
	
	
}
