package com.fas.cmmn.formVo;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import com.fas.model.com.domain.FileDtlDomain;
import com.fas.web.cmmn.util.PageNoVo;

public class CmmFormVo implements Serializable {

	protected int page;
	protected int limit;
	protected String fileBscNo;
	protected int fileDtlNo;
	protected List<PageNoVo> pageNo;
	protected List<FileDtlDomain> fileList;
	protected String excelFileName;
	protected String columDef;
	protected int rowStart;
	
	protected String params;	
	protected String menuCode;
	
	public String getParams() {
		return params;
	}
	public void setParams(String params) {
		this.params = params;
	}
	public String getMenuCode() {
		return menuCode;
	}
	public void setMenuCode(String menuCode) {
		this.menuCode = menuCode;
	}
	public int getPage() { 
		return page;
	}
	public void setPage(int page) {
		this.page = page;
	}
	public int getLimit() {
		if (limit == 0) limit = 10;
		return limit;
	}
	public void setLimit(int limit) {
		this.limit = limit;
	}
	public List<PageNoVo> getPageNo() {
		
		List<PageNoVo> arrList = new ArrayList<PageNoVo>();
		PageNoVo pageNoVo = null;
		for (int i = 0; i < page; i++) {
			int pageNo = i + 1;
			pageNoVo = new PageNoVo();
			pageNoVo.setPageNo("" + pageNo);
			pageNoVo.setCurrentPageYn("N");
			
			if (pageNo == page) pageNoVo.setCurrentPageYn("Y");
			
			arrList.add(pageNoVo);
		}
		
		return arrList;
	}
	public void setPageNo(List<PageNoVo> pageNo) {
		this.pageNo = pageNo;
	}
	public List<FileDtlDomain> getFileList() {
		return fileList;
	}
	public void setFileList(List<FileDtlDomain> fileList) {
		this.fileList = fileList;
	}
	public String getFileBscNo() {
		return fileBscNo;
	}
	public void setFileBscNo(String fileBscNo) {
		this.fileBscNo = fileBscNo;
	}
	public int getFileDtlNo() {
		return fileDtlNo;
	}
	public void setFileDtlNo(int fileDtlNo) {
		this.fileDtlNo = fileDtlNo;
	}
	public String getExcelFileName() {
		return excelFileName;
	}
	public void setExcelFileName(String excelFileName) {
		this.excelFileName = excelFileName;
	}
	public String getColumDef() {
		return columDef;
	}
	public void setColumDef(String columDef) {
		this.columDef = columDef;
	}
	public int getRowStart() {
		return rowStart;
	}
	public void setRowStart(int rowStart) {
		this.rowStart = rowStart;
	}
	
	
		
}
