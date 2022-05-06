package com.fas.web.cmmn.util;

import java.net.URL;
import java.util.Properties;
import javax.annotation.Resource;

public class PropertyUtils {
	
	private Properties props;
	private URL url;
	
	@Resource(name="TextEncryptorUtil")
	private TextEncryptorUtil TextEncryptorUtil;
	
	public PropertyUtils() {
		
	}
	
	public PropertyUtils(String propName) {
		try {
			this.props = new Properties();
			this.url =  ClassLoader.getSystemResource(propName);
			this.props.load(this.url.openStream());
		} catch(Exception ex) {
			props = null;
			url = null;
			ex.printStackTrace();
		}
	}
	
	public void setResource(String propName) {
		try {
			this.props = new Properties();
			this.url =  ClassLoader.getSystemResource(propName);
			this.props.load(this.url.openStream());
		} catch(Exception ex) {
			props = null;
			url = null;
			ex.printStackTrace();
		}
	}
	
	public String getProperty(String key) {
		if (props != null) {
			return StringUtil.nvl((String) props.get(key),"");
		} else {
			return "";
		}
	}
	
	public String getDecrpytProperty(String key) {
		if (props != null) {
			return TextEncryptorUtil.decrypt(StringUtil.nvl((String) props.get(key),"").substring(4, StringUtil.nvl((String) props.get(key),"").lastIndexOf(")")));
		} else {
			return "";
		}
	}
	
	
}
