package com.fas.cmmn.util;

import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;

public class FasPagingUtil {

	public static int PAGE_SIZE = 20;
	public static int INIT_PAGE = 0;
	
	public static int DESC = 0;
	public static int ASC = 1;
	
	private int PAGE = 0;
	private int LIMIT = 0;
	
	private Sort pageSort;
	
	
	public FasPagingUtil() {
		this.PAGE = INIT_PAGE;
		this.LIMIT = PAGE_SIZE;
		this.pageSort = null;
	}
	
	public FasPagingUtil(int page, int limit) {
		if (page > 0) {
			this.PAGE = page - 1;	
		} else {
			this.PAGE = page;
		}
		
		this.LIMIT = limit;
		
		
		if (this.LIMIT == 0) this.LIMIT = PAGE_SIZE;
		
		this.pageSort = null;
	}
	
	public void setSort(String columnName, int sortDirection) {
		if (pageSort == null) {
			if (sortDirection == DESC) {
				pageSort = new Sort(Sort.Direction.DESC, columnName);
			} else {
				pageSort = new Sort(Sort.Direction.ASC, columnName);
			}
		} else {
			if (sortDirection == DESC) {
				pageSort = pageSort.and(new Sort(Sort.Direction.DESC, columnName));
			} else {
				pageSort = pageSort.and(new Sort(Sort.Direction.ASC, columnName));
			}
		}
	}
	
	public Pageable getPagingRequest() {
		
		Pageable request = null;
		
		if (pageSort != null) {
			request = new PageRequest(this.PAGE, this.LIMIT, pageSort);
		} else {
			request = new PageRequest(this.PAGE, this.LIMIT);
		}
		return request;
	}
	
	//example
	//sort : new Sort(Sort.Direction.DESC, "flapMngmNo")
	//				.and(new Sort(Sort.Direction.DESC, "frrgts"))
	public Pageable getPagingRequest(Sort sort) {
		
		Pageable request =
                new PageRequest(this.PAGE, this.LIMIT, sort);
    	
		return request;
	}
}
