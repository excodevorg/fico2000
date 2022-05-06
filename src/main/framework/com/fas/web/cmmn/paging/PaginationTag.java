package com.fas.web.cmmn.paging;


import java.io.IOException;

import javax.servlet.jsp.JspException;
import javax.servlet.jsp.JspWriter;
import javax.servlet.jsp.tagext.TagSupport;

import org.springframework.web.context.WebApplicationContext;
import org.springframework.web.servlet.support.RequestContextUtils;

import com.fas.web.cmmn.paging.DefaultPaginationManager;
import com.fas.web.cmmn.paging.PaginationInfo;
import com.fas.web.cmmn.paging.PaginationManager;
import com.fas.web.cmmn.paging.PaginationRenderer;

public class PaginationTag  extends TagSupport {
	
	private static final long serialVersionUID = 1L;
	
	private PaginationInfo paginationInfo;
	private String type;
	private String jsFunction;
	
	public int doEndTag() throws JspException{
		
		try {
			
			JspWriter out = pageContext.getOut();
			
			PaginationManager paginationManager;
			
            WebApplicationContext ctx = RequestContextUtils.getWebApplicationContext(pageContext.getRequest(), pageContext.getServletContext());
            
            if(ctx.containsBean("paginationManager")){
            	paginationManager = (PaginationManager) ctx.getBean("paginationManager");
            }else{
            	paginationManager = new DefaultPaginationManager();
            }
            
            PaginationRenderer paginationRenderer = paginationManager.getRendererType(type);
            
            String contents = paginationRenderer.renderPagination(paginationInfo, jsFunction);
            
            out.println(contents);
            
            return EVAL_PAGE;
            
        } catch (IOException e) {
            throw new JspException();
        }
	}
			
	public void setJsFunction(String jsFunction) {
		this.jsFunction = jsFunction;
	}

	public void setPaginationInfo(PaginationInfo paginationInfo) {
		this.paginationInfo = paginationInfo;
	}
	
	public void setType(String type){
		this.type = type;
	}
}

