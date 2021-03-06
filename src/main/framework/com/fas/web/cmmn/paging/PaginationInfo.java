/*
 * Copyright 2008-2009 MOPAS(Ministry of Public Administration and Security).
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
package com.fas.web.cmmn.paging;

public class PaginationInfo {
		
	private int currentPageNo;
	private int recordCountPerPage;
	private int pageSize;
	private int totalRecordCount;
	
	public int getRecordCountPerPage() {
		return recordCountPerPage;
	}
	
	public void setRecordCountPerPage(int recordCountPerPage) {
		this.recordCountPerPage = recordCountPerPage;
	}
	
	public int getPageSize() {
		return pageSize;
	}
	
	public void setPageSize(int pageSize) {
		this.pageSize = pageSize;
	}
	
	public int getCurrentPageNo() {
		return currentPageNo;
	}
	
	public void setCurrentPageNo(int currentPageNo) {
		this.currentPageNo = currentPageNo;
	}
	
	public void setTotalRecordCount(int totalRecordCount) {
		this.totalRecordCount = totalRecordCount;
	}
	
	public int getTotalRecordCount() {
		return totalRecordCount;
	}
	
	/**
	 * Not Required Fields
	 * - �� �ʵ���� Required Fields ���� �������� ����ؼ� �������� �ʵ� ���̴�.
	 * 
	 * totalPageCount: ������ ����
	 * firstPageNoOnPageList : ������ ����Ʈ�� ù ������ ��ȣ
	 * lastPageNoOnPageList : ������ ����Ʈ�� ������ ������ ��ȣ
	 * firstRecordIndex : ����¡ SQL�� ������ ���Ǵ� ���� rownum. 
	 * lastRecordIndex : ����¡ SQL�� ������ ���Ǵ� ������ rownum.
	 */
	
	private int totalPageCount;
	private int firstPageNoOnPageList;
	private int lastPageNoOnPageList;
	private int firstRecordIndex;
	private int lastRecordIndex;	
	
	public int getTotalPageCount() {
		totalPageCount = ((getTotalRecordCount()-1)/getRecordCountPerPage()) + 1;
		return totalPageCount;
	}
	
	public int getFirstPageNo(){
		return 1;
	}
	
	public int getLastPageNo(){
		return getTotalPageCount();		
	}
	
	public int getFirstPageNoOnPageList() {
		firstPageNoOnPageList = ((getCurrentPageNo()-1)/getPageSize())*getPageSize() + 1;
		return firstPageNoOnPageList;
	}
	
	public int getLastPageNoOnPageList() {		
		lastPageNoOnPageList = getFirstPageNoOnPageList() + getPageSize() - 1;		
		if(lastPageNoOnPageList > getTotalPageCount()){
			lastPageNoOnPageList = getTotalPageCount();
		}
		return lastPageNoOnPageList;
	}

	public int getFirstRecordIndex() {
		firstRecordIndex = (getCurrentPageNo() - 1) * getRecordCountPerPage();
		return firstRecordIndex;
	}

	public int getLastRecordIndex() {
		lastRecordIndex = getCurrentPageNo() * getRecordCountPerPage();
		return lastRecordIndex;
	}	
}
