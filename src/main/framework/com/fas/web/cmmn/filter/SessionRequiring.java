package com.fas.web.cmmn.filter;

import java.io.IOException;

import javax.servlet.Filter;
import javax.servlet.FilterChain;
import javax.servlet.FilterConfig;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.FactoryBean;
import org.springframework.beans.factory.annotation.Autowired;

public class SessionRequiring {

	public static class ResponseInScopeFilter  implements Filter {
		
		private ThreadLocal<HttpServletResponse> responses = new ThreadLocal<HttpServletResponse>();

		public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain) throws IOException, ServletException
		{  
			HttpServletResponse httpReponse = (HttpServletResponse) response;
			responses.set(httpReponse);	  
		    chain.doFilter(request, response);
		    responses.remove();
		}
		
		private HttpServletResponse getHttpServletResponse() {
			return responses.get();
		}
		
		public void init(FilterConfig config) throws ServletException {}

		public void destroy() {}

	}
	
	
	public static class HttpServletResponseFactoryBean implements FactoryBean {
		
		@Autowired private ResponseInScopeFilter responseInScopeFilter;
		
		public HttpServletResponse getObject() throws Exception {
			return responseInScopeFilter.getHttpServletResponse();
		}
		
		public Class getObjectType() {
			return HttpServletResponse.class;
		}
		
		public boolean isSingleton() {
			return false;
		}

	}
	
}
