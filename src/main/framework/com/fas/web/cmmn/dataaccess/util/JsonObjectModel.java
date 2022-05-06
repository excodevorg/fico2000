package com.fas.web.cmmn.dataaccess.util;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
import java.util.Set;

import org.apache.commons.collections.map.ListOrderedMap;
import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;

import com.fas.web.cmmn.util.BeanUtils;
import com.fas.web.cmmn.util.PageNoVo;

public class JsonObjectModel {

	private Map jsonRootMap;
	private Map jsonDataMap;
	
	protected final Log log = LogFactory.getLog(getClass());
	
	private int listCount;
	private int pageCount;
	private int totCnt = 0;
	private int rowCnt = 10;
	private int pageCnt = 10;
	private int pageNum = 0;
	private int pageTotal = 0;
	private int startRowNum = 0;
	private int endRowNum = 0;
	
	public static boolean SUCCESS = true;
	public static boolean FAIL = false;
	public static String SUCCESS_CONT = "정상처리되었습니다.";
	public static String FAIL_CONT = "오류입니다. 확인후 거래 하세요.";
	
	public JsonObjectModel() {
		jsonRootMap = new HashMap();
		jsonDataMap = new HashMap();
		listCount = 0;
		jsonRootMap.put("success", SUCCESS);
		jsonRootMap.put("data",jsonDataMap);
		jsonRootMap.put("msg","");
		jsonRootMap.put("cmmError", false);
	}
	
	public void dataClear() {
		listCount = 0;
		jsonRootMap = new HashMap();
		jsonRootMap.put("success", SUCCESS);
		jsonRootMap.put("msg","");
		jsonRootMap.put("data","jsonDataMap");
		jsonRootMap.put("cmmError",false);
	}
	
	public void rootPutData(String key, String value) {
		jsonRootMap.put(key, value);
	}
	
	public void rootPutData(String key, boolean value) {
		jsonRootMap.put(key, value);
	}
	
	public void putData(String key, String value) {
		jsonDataMap.put(key, value);
	}
	
	public void putData(String key, Object value) {
		jsonDataMap.put(key, value);
	}
	
	public void putPageData(int page, int totalPage) {
		pageCount++;
		
		String strPaging = "";
		String strLastPage = "";
		String strPageIndex = "";
		String strFirstPage = "";
		
		totCnt = totalPage;
		pageNum = page;
		
		List<PageNoVo> arrList = new ArrayList<PageNoVo>();
		
		PageNoVo pageNoVo = null;
		
		pageTotal = (totCnt-1)/rowCnt +1;
		
		int pageGroupStart = (pageNum -1)/pageCnt * pageCnt +1;
		int pageGroupEnd = pageGroupStart + pageCnt -1;
		
		if(pageGroupEnd > pageTotal) pageGroupEnd = pageTotal;
		
		for(int i=pageGroupStart; i<=pageGroupEnd; i++)
		{
			pageNoVo = new PageNoVo();
			pageNoVo.setPageNo(""+i);
			pageNoVo.setCurrentPageYn("N");
			
			int pagenum = pageNum;
			
			if (pageNum == 0) pagenum = pageNum + 1;
			
			if (pagenum == i) {
				pageNoVo.setCurrentPageYn("Y");
			}
			
			arrList.add(pageNoVo);
		}
		
		String key = "pages" + pageCount;
		
		jsonDataMap.put(key, arrList);
		jsonDataMap.put("pageGroupStart"+pageCount, pageGroupStart);
		jsonDataMap.put("pageNum"+pageCount, pageNum);
		jsonDataMap.put("pageGroupEnd"+pageCount, pageGroupEnd);
		jsonDataMap.put("pageTotal"+pageCount, pageTotal);
 	}
	
	public void putData(java.util.List value, int totalCnt) {
		listCount++;
		String key = "list" + listCount;
		if (value != null && value.size() != 0) {
			jsonDataMap.put(key, value);
			jsonDataMap.put(key+"Size", totalCnt);
		} else {
			jsonDataMap.put(key, new ArrayList());
			jsonDataMap.put(key+"Size", 0);
		}
	}
	
	public void putData(ListOrderedMap value) {
		if (value == null || value.isEmpty()) return;
		Set<String> keySet = value.keySet();
		Iterator<String> itr = keySet.iterator();
		while(itr.hasNext()) {
			String key = itr.next();
			jsonDataMap.put(key, value.get(key));
		}
	}
	
	public void success(String msg) {
		if (msg != null && msg.length() > 0) {
			jsonRootMap.put("success", SUCCESS);
			jsonRootMap.put("msg", msg);
		} else {
			success();
		}
	}
	
	public void success() {
		jsonRootMap.put("success", SUCCESS);
		if (jsonRootMap.get("msg") == null || ((String)jsonRootMap.get("msg")).trim().length() == 0) {
			jsonRootMap.put("msg",this.SUCCESS_CONT);
		}
	}
	
	public void fail(String msg) {
		if (msg != null && msg.length() > 0) {
			jsonRootMap.put("success", FAIL);
			jsonRootMap.put("msg", msg);
		} else {
			fail();
		}
		
	}
	
	public void fail() {
		jsonRootMap.put("success", FAIL);
		if (jsonRootMap.get("msg") == null || ((String)jsonRootMap.get("msg")).trim().length() == 0) {
			jsonRootMap.put("msg", this.FAIL_CONT);
		}
	}
	
	public Map getMap() {
		return jsonRootMap;
	}
	
	public Map getMap(boolean result) {
		
		if (!result) {
			fail();
		} else {
			if (jsonRootMap.get("success") == null) {
				if (result) {success();} else {fail(); }
			} else {
				if (jsonRootMap.get("msg") == null || ((String)jsonRootMap.get("msg")).trim().length() == 0) {
					Boolean be = (Boolean) jsonRootMap.get("success");
					boolean beVl = be.booleanValue();
					if (beVl) {success();} else {fail(); }
				}
			}
		}
		
		return jsonRootMap;
	}
	
	public Map getMap(boolean result, String msg) {
		if (!result) {
			fail(msg);
		} else {
			if (jsonRootMap.get("success") == null) {
				if (result) {success(msg);} else {fail(msg);}
			} else {
				if (jsonRootMap.get("msg") == null || ((String)jsonRootMap.get("msg")).trim().length() == 0) {
					Boolean be = (Boolean) jsonRootMap.get("success");
					boolean beVl = be.booleanValue();
					if (beVl) {success();} else {fail(); }
				}
			}
		}
		return jsonRootMap;
	}
	
	public static void main(String args[]) {
		JsonObjectModel model = new JsonObjectModel();
		model.putPageData(0, 13);
		
		BeanUtils beanUtil = new BeanUtils();
		
		beanUtil.toString(model.getMap());
	}
}
