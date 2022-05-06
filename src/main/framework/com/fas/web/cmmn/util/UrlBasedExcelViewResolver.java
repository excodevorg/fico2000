package com.fas.web.cmmn.util;

import java.util.Locale;

import javax.servlet.http.HttpServletRequest;

import org.apache.commons.io.FilenameUtils;
import org.apache.commons.lang.StringUtils;
import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.core.io.Resource;
import org.springframework.core.io.support.LocalizedResourceHelper;
import org.springframework.web.context.request.RequestContextHolder;
import org.springframework.web.context.request.ServletRequestAttributes;
import org.springframework.web.servlet.View;
import org.springframework.web.servlet.support.RequestContextUtils;
import org.springframework.web.servlet.view.InternalResourceViewResolver;

public class UrlBasedExcelViewResolver extends InternalResourceViewResolver {
	
	private Log log = LogFactory.getLog(this.getClass());
	
	@Override
	protected JxlsView buildView(String viewName) throws Exception {
		JxlsView view = (JxlsView) super.buildView(viewName);
		LocalizedResourceHelper helper = new LocalizedResourceHelper(getApplicationContext());
		HttpServletRequest request=((ServletRequestAttributes)RequestContextHolder.currentRequestAttributes()).getRequest();
		Locale userLocale = RequestContextUtils.getLocale(request);
		Resource resource =  helper.findLocalizedResource(super.getPrefix() + StringUtils.chomp(viewName, FilenameUtils.getExtension(viewName)), FilenameUtils.getExtension(viewName), userLocale);
		
		if( resource != null) {
			view.setResource(resource);
			view.setExistFile(resource.exists());
		} else {
			view.setExistFile(false);
		}
		
		return view;
	}
	
	protected View loadView(String viewName, Locale locale) throws Exception {
		JxlsView view = buildView(viewName);
		View result = (View) getApplicationContext().getAutowireCapableBeanFactory().initializeBean(view, viewName);
		return (view.isExistFile() ? result : null);
	}
}
