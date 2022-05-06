package com.fas.web.cmmn.util;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
import java.util.Set;

/**
 * @author ȫ����
 *
 */
public class PagingUtil {

	private int totCnt = 0;
	private int rowCnt = 15;
	private int pageCnt = 10;
	private int pageNum = 0;
	private int pageTotal = 0;
	private int startRowNum = 0;
	private int endRowNum = 0;

	public PagingUtil() {};
	
	public PagingUtil(int pageNum, int totCnt) {
		this.pageNum = pageNum;
		this.totCnt = totCnt;
	}

	/**
	 * �Խ��� ����¡ ó��
	 * 
	 * @param	N/A
	 * @version	2014.01.06
	 * @author	ȫ����
	 * @return	String
	 */	
	public String getPaging() throws Exception 
	{
		String strPaging = "";
		String strLastPage = "";
		String strPageIndex = "";
		String strFirstPage = "";
		
		pageTotal = (totCnt-1)/rowCnt +1;
		
		int pageGroupStart = (pageNum -1)/pageCnt * pageCnt +1;
		int pageGroupEnd = pageGroupStart + pageCnt -1;
		
		if(pageGroupEnd > pageTotal) pageGroupEnd = pageTotal;	
		
		strFirstPage = "\n<table border=\"0\" cellspacing=\"0\" cellpadding=\"0\">\n<tr>\n";
		
		if(pageGroupStart != 1)
			strFirstPage += "<td width=\"18\" valign=\"absmiddle\"><a href=\"javascript:;\"><img src=\"../images/btn_prev2.gif\" width=\"15\" height=\"11\" onclick=\"goPage("+String.valueOf(pageGroupStart-1)+");\" /></a></td>\n";
		
		if(pageNum > 1)
			strFirstPage += "<td width=\"20\" align=\"right\" valign=\"absmiddle\"><a href=\"javascript:;\"><img src=\"../images/btn_prev.gif\" width=\"11\" height=\"11\" onclick=\"goPage("+String.valueOf(pageNum-1)+");\" /></td>\n";

		for(int i=pageGroupStart; i<=pageGroupEnd; i++)
		{
			if(pageNum == i)
				strPageIndex += "<td width=\"18\" align=\"center\" class=\"page_numOver\">"+i+"</td>\n";
			else
				strPageIndex += "<td width=\"18\" align=\"center\" class=\"page_num\" onclick=\"goPage("+String.valueOf(i)+");\" style=\"cursor:hand\">"+i+"</td>\n";
		}
		
		if(pageNum < pageTotal)
			strLastPage += "<td width=\"20\" align=\"left\" valign=\"absmiddle\"><a href=\"javascript:;\"><img src=\"../images/btn_next.gif\" width=\"11\" height=\"11\" onclick=\"goPage("+String.valueOf(pageNum+1)+");\" /></td>\n";
		
		if(pageTotal > pageGroupEnd)
			strLastPage += "<td width=\"18\" valign=\"absmiddle\"><a href=\"javascript:;\"><img src=\"../images/btn_next2.gif\" width=\"15\" height=\"11\" onclick=\"goPage("+String.valueOf(pageGroupEnd+1)+");\" /></td>\n";
		
		strLastPage += "</tr>\n</table>\n";
		
		strPaging = strFirstPage + strPageIndex + strLastPage;
		
		return strPaging;
	}
	
	public int getStartRowNum()
	{
		startRowNum = (pageNum-1) * rowCnt;
		return startRowNum;
	}
	
	public int getEndRowNum(int startRowNum)
	{
		endRowNum = rowCnt;
		
		if(startRowNum > 0) 
			endRowNum = startRowNum + rowCnt;
		
		return endRowNum;
	}
	
	public List<Map> getPagingList(Map<String, Object> arryMap) throws Exception {
		if (arryMap == null) return null;
		
		totCnt = arryMap.size();
		//Paging
		int startRowNum = getStartRowNum();
		int endRowNum = getEndRowNum(startRowNum);
		List<Map> arrList = new ArrayList<Map>();
		if (endRowNum > totCnt) endRowNum = totCnt;
			
		Set<String> keys = arryMap.keySet();
		Iterator<String> keyIterlator = keys.iterator();
		String[] rooibosKeys = new String[arryMap.size()];
		int keyIdx = 0;
		while(keyIterlator.hasNext()) {
			rooibosKeys[keyIdx++] = keyIterlator.next();
		}
			
		Arrays.sort(rooibosKeys);	
		
		for (int i = startRowNum; i < endRowNum; i++) {
			arrList.add((Map)arryMap.get(rooibosKeys[i]));
		}
		
		return arrList;
	}
	
}
