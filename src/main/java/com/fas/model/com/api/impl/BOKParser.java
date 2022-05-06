package com.fas.model.com.api.impl;

import java.io.InputStream;
import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.List;

import javax.xml.parsers.DocumentBuilder;
import javax.xml.parsers.DocumentBuilderFactory;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.w3c.dom.Document;
import org.w3c.dom.Element;
import org.w3c.dom.NodeList;
import org.w3c.dom.Node;

import com.fas.model.com.api.Parser;
import com.fas.web.cmmn.dataaccess.util.FasMap;
import com.fas.web.cmmn.util.StringUtil;

public class BOKParser implements Parser {
	
	private static Log logger = LogFactory.getLog(BOKParser.class);
	
	private int totalCnt = 0;
	
	private boolean hasNext = false;
	
	private int currentCnt = 0;
	
	public boolean hasNext() {
		
		if (totalCnt - currentCnt > 0) { hasNext = true; } else { hasNext = false;}
		
		return hasNext;
	}
	
	public int totalCnt() {
		return totalCnt;
	}

	public List<FasMap> parserXMLMapList(InputStream stream) throws Exception {
		Document doc = parseXML(stream);
		doc.getDocumentElement().normalize();
		FasMap resultMap = null;
		List<FasMap> resultList = new ArrayList<FasMap>();
		NodeList descNodes = doc.getElementsByTagName("row");
		
		NodeList listCountNodes = doc.getElementsByTagName("list_total_count");
		
		Element ele = doc.getDocumentElement();
		
		if (listCountNodes != null && listCountNodes.item(0) != null) {
			Node node = listCountNodes.item(0).getFirstChild();
			logger.debug("&&&& " + node.getNodeType());
			logger.debug("&&&& " + Node.ELEMENT_NODE);
			logger.debug("&&&& " + Node.ATTRIBUTE_NODE);
			logger.debug("&&&& " + Node.TEXT_NODE);
			if (node.getNodeType()==Node.TEXT_NODE) {
				if (!StringUtil.isEmpty(node.getNodeValue())) totalCnt = Integer.parseInt(node.getNodeValue().trim());
			}
		} else {
			return null;
		}
		 
        for(int i=0; i<descNodes.getLength();i++){
        	logger.debug("---------------------------");
        	resultMap = new FasMap();
            for(Node node = descNodes.item(i).getFirstChild(); node!=null; node=node.getNextSibling()){ //첫번째 자식을 시작으로 마지막까지 다음 형제를 실행
            	if (node.getNodeType()==Node.ELEMENT_NODE) {
            		if ("DATA_CNT".equals(node.getNodeName())) {
            			int dataCnt = 0;
            			try {
            				dataCnt = Integer.parseInt(node.getTextContent().trim());
            			} catch(Exception ex) {
            				
            			}
            			resultMap.put(node.getNodeName(), dataCnt);
            		} else if ("DATA_VALUE".equals(node.getNodeName())) {
            			BigDecimal dataValue = BigDecimal.ZERO;
            			
            			try {
            				dataValue = new BigDecimal(node.getTextContent().trim());
            			} catch(Exception ex) {
            				
            			}
            			resultMap.put(node.getNodeName(), dataValue);
            			
             		} else {
             			resultMap.put(node.getNodeName(), node.getTextContent());
             		}
            		logger.debug(node.getNodeName() + " : " + node.getTextContent());
                }
           }
            if (resultMap != null && !StringUtil.isEmpty(""+resultMap.get("statCode"))) {
            	resultList.add(resultMap);
            }
        }
        
        int i = 0;
        for (FasMap map : resultList) {
        	logger.debug(map);
        	i++;
        }
        
        currentCnt += i;
        
        System.out.println(currentCnt);
		
		return resultList;
	}
	
	private Document parseXML(InputStream stream) throws Exception{
		 
        DocumentBuilderFactory objDocumentBuilderFactory = null;
        DocumentBuilder objDocumentBuilder = null;
        Document doc = null;
 
        try{
 
            objDocumentBuilderFactory = DocumentBuilderFactory.newInstance();
            objDocumentBuilder = objDocumentBuilderFactory.newDocumentBuilder();
 
            doc = objDocumentBuilder.parse(stream);
 
        }catch(Exception ex){
            throw ex;
        }       
 
        return doc;
    }

	
}
