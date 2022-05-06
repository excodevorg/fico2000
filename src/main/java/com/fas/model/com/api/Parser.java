package com.fas.model.com.api;

import java.io.InputStream;
import java.util.List;

import com.fas.web.cmmn.dataaccess.util.FasMap;

public interface Parser {

	public boolean hasNext();
	public int totalCnt();
	public List<FasMap> parserXMLMapList(InputStream stream) throws Exception;
	
}
