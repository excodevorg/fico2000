package com.fas.web.cmmn.util;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;

import org.json.simple.JSONValue;

import net.sf.json.JSONArray;
import net.sf.json.JSONObject;

public class JsonResponseObject {	

	public static String getJsonMapString(Map<String, String> map, String strType){

		Map<String, String> data = new HashMap<String, String>();
		Map<String, Object> info = new HashMap<String, Object>();

		Iterator<String> itr = map.keySet().iterator();

		while(itr.hasNext()){
			String key = (String)itr.next();
			data.put(key, map.get(key));
		}
		
		ArrayList<Map<String, String>> list = new ArrayList<Map<String, String>>();
		
		if(strType.equals("MAP")) {
			info.put("DATA", data);		// �ʿ� ���
		} else {
			list.add(data);				// array�� map ���
			info.put("DATA", list);		// �ɿ� array���
		}
		// json String���� ��ȯ
		String jsonString = getJsonString(info);
		
		return jsonString;
	}

	/**
	 * Json Array String���� �Ľ�
	 * 
	 * @param	Stinr jsonString, Strin group, String key
	 * @version	2013.03.07
	 * @author	ȫ����
	 * @return	String
	 */	
	public static String getJsonKeyValueString(String jsonString, String group, String key){
		// Json ������ �Ľ�
		JSONObject jsonObj = getJsonParse(jsonString);		// json ��ü�� ��ȯ
		JSONArray jsonArray = getJsonArrayData(jsonObj);	// �ش� ������ JSONArray ���
		
		// array �ʿ� ���
		Map<?, ?> list = (Map<?, ?>)jsonArray.get(0);
		
		// �ش� �׷� JSONArray�� ���
		JSONArray dataArray = (JSONArray) list.get(group);	// �׷��� JSONArray ���
		
		String strJson = "";
		
		Map<?, ?> map = (Map<?, ?>) dataArray.get(0);	// JSONArray map�� ���
		strJson = (String) map.get(key);				// String�� ���
		
		return strJson;
	}

	/**
	 * Json Array Map���� �Ľ�
	 * 
	 * @param	Stinr jsonString, Strin group, String key
	 * @version	2013.03.07
	 * @author	ȫ����
	 * @return	Map
	 */	
	public static Map<Integer, Object> getJsonKeyValue(String jsonString, String group, String key){
		// Json ������ �Ľ�
		JSONObject jsonObj = getJsonParse(jsonString);		// json ��ü�� ��ȯ
		JSONArray jsonArray = getJsonArrayData(jsonObj);	// �ش� ������ JSONArray ���
		
		// array �ʿ� ���
		Map<?, ?> list = (Map<?, ?>)jsonArray.get(0);
		
		// �ش� �׷� JSONArray�� ���
		JSONArray dataArray = (JSONArray) list.get(group);	// �׷��� JSONArray ���
		
		Map<Integer, Object> dataMap = new HashMap<Integer, Object>();
		
		for(int i=0; i<dataArray.size(); i++){
			
			Map<?, ?> map = (HashMap<?, ?>) dataArray.get(i);	// JSONArray map�� ���
			dataMap.put(i, map.get(key));						// map�� ���
		}
		
		return dataMap;
	}

	/**
	 * Json Array �׷���  Row�� ������ (1Row)
	 * 
	 * @param	String jsonString, String group, String strKey, String strValue
	 * @version	2013.03.07
	 * @author	ȫ����
	 * @return	Map
	 */	
	public static Map<String, String> getJsonKeyValueRecord(String jsonString, String group, String strKey, String strValue){
		// Json ������ �Ľ�
		JSONObject jsonObj = getJsonParse(jsonString);		// json ��ü�� ��ȯ
		JSONArray jsonArray = getJsonArrayData(jsonObj);	// �ش� ������ JSONArray ���
		
		Map<?, ?> list = (HashMap<?, ?>)jsonArray.get(0);
		
		JSONArray dataArray = (JSONArray) list.get(group);
		
		Map<String, String> data = new HashMap<String, String>();
		
		for(int i=0; i<dataArray.size(); i++){
			
			@SuppressWarnings("unchecked")
			Map<String, String> map = (HashMap<String, String>) dataArray.get(i);
			
			// �� Ű�� iterator�� ����
			Iterator<String> itr = map.keySet().iterator();
			
			while(itr.hasNext()){
				
				String key = itr.next();
				String value = (String) map.get(key);
				
				// strKey�� map�� key�� ���� strValue�� map�� value�� ������ 
				if(strKey.equals(key) && strValue.equals(value)){
					
					Map<?, ?> mapData = (HashMap<?, ?>) dataArray.get(i);

					// �� Ű�� iterator�� ����
					Iterator<String> iter = map.keySet().iterator();
					
					// �ش� ���ڵ� �� Map�� ���
					while(iter.hasNext()){
						String serKey = iter.next();
						data.put(serKey, (String) mapData.get(serKey));
					}
					break;
				}
			}
		}
		if(data != null && data.equals("")) {
			data.put("0", "ERROR : ��û�� ��� ���� ����ϴ�.");
		}
		
		return data;
	}

	/**
	 * Json Array �׷���  Row�� ������ (1Row)
	 * 
	 * @param	String jsonString, String Group, int intKey
	 * @version	2013.03.07
	 * @author	ȫ����
	 * @return	Map
	 */	
	public static Map<String, String> getJsonIndexRecord(String jsonString, String group, int intKey) {
		// Json ������ �Ľ�
		JSONObject jsonObj = getJsonParse(jsonString);		// json���� �Ľ�
		JSONArray jsonArray = getJsonArrayData(jsonObj);	// JSONArray�� ���
		
		Map<?, ?> list = (HashMap<?, ?>)jsonArray.get(0);
		
		JSONArray dataArray = (JSONArray) list.get(group);	// ���� JSONArray���
		
		Map<String, String> data = new HashMap<String, String>();
		
		if(dataArray != null) {
			// array ������� ������ ����
			if(intKey < dataArray.size()){
				
				for(int i=intKey; i<intKey+1; i++){
					
					// �ʿ� JSONArray���
					@SuppressWarnings("unchecked")
					Map<String, String> map = (HashMap<String, String>) dataArray.get(i);

					// �� Ű�� iterator�� ����
					Iterator<String> itr = map.keySet().iterator();
					
					// �ش� ���ڵ� �� Map�� ���
					while(itr.hasNext()){
						
						String serKey = itr.next();
						data.put(serKey, (String) map.get(serKey));
					}
				}
			} else {
				data.put("0", "ERROR : �迭 ������� ��û �� �ε��� ���� Ů�ϴ�.");
			}
		} else {
			data.put("0", "ERROR : ��û�� ��� ���� ����ϴ�.");
		}
		
		return data;
	}

	/**
	 * Json Array ������ ���ϱ�
	 * 
	 * @param	String jsonString, String group
	 * @version	2013.03.07
	 * @author	ȫ����
	 * @return	Map
	 */	
	public static int getJsonArraySize(String jsonString, String group){
		// Json ������ �Ľ�
		JSONObject jsonObj = getJsonParse(jsonString);		// json���� �Ľ�
		JSONArray jsonArray = getJsonArrayData(jsonObj);	// JSONArray�� ���
		
		Map<?, ?> list = (HashMap<?, ?>)jsonArray.get(0);
		
		JSONArray dataArray = (JSONArray) list.get(group);	// ���� JSONArray���
		
		int arraySize = dataArray.size();	// ����� ����
		
		return arraySize;
	}
	
	/**
	 * Json Ű�� �ش��ϴ� �� ������
	 * 
	 * @param	String key, String strName, String jsonStr
	 * @version	2013.03.07
	 * @author	ȫ����
	 * @return	String
	 */	
	public static String getJsonValue(String key, String strName, String jsonStr){
		
		JSONObject jsonObj = getJsonParse(jsonStr);				// json ��ü�� ��ȯ
		JSONObject dataObj = (JSONObject) jsonObj.get(key);		// Ű�� �迭�� ������
		
		String str = dataObj.get(strName).toString();			// �ش� ���ӿ� value�� ������
		
		return str;
	}
	
	/**
	 * Json Name�� �ش��ϴ� �� ������
	 * 
	 * @param	String strName, String jsonStr
	 * @version	2013.03.07
	 * @author	ȫ����
	 * @return	String
	 */	
	public static String getJsonNameValue(String strName, String jsonStr){
		
		JSONObject jsonObj = getJsonParse(jsonStr);			// json ��ü�� ��ȯ
		
		String str = jsonObj.get(strName).toString();		// �ش� ���ӿ� value�� ������
		
		return str;
	}

	/**
	 * Json���� �Ľ�
	 * 
	 * @param	String jsonString
	 * @version	2013.03.07
	 * @author	ȫ����
	 * @return	JSONObject
	 */	
	public static JSONObject getJsonParse(String jsonString){
		
		JSONObject jsonObj = (JSONObject) JSONValue.parse(jsonString);	// String�� JSONObject�� �Ľ�
		
		return jsonObj;
	}

	/**
	 * JSONObject�� JSONArray�� ���
	 * 
	 * @param	JSONObject jsonObj
	 * @version	2013.03.07
	 * @author	ȫ����
	 * @return	JSONArray
	 */	
	public static JSONArray getJsonArrayData(JSONObject jsonObj){
		
		JSONArray jsonArray = (JSONArray) jsonObj.get("DATA");	// JSONObject �����Ϳ��� DATA �ش� ���� JSONArray�� ���
		
		return jsonArray;
	}

	/**
	 * Json String�� JSONArray�� ���
	 * 
	 * @param	JSONObject jsonObj
	 * @version	2013.03.07
	 * @author	ȫ����
	 * @return	JSONArray
	 */	
	public static JSONArray getJsonArrayData(String strJson){
		
		JSONObject jsonObj = getJsonParse(strJson);
		
		JSONArray jsonArray = (JSONArray) jsonObj.get("DATA");	// JSONObject �����Ϳ��� DATA �ش� ���� JSONArray�� ���
		
		return jsonArray;
	}
	
	/**
	 * Json Map ������ Json String���� ��ȯ
	 * 
	 * @param	Map
	 * @version	2013.03.07
	 * @author	ȫ����
	 * @return	String
	 */	
	public static String getJsonString(Map<?, ?> jsonMap){

		// json���� ��ȯ
		String jsonString = JSONValue.toJSONString(jsonMap);
		
		return jsonString;
	}
	
	/**
	 * Json Map ������ Json String���� ��ȯ
	 * 
	 * @param	Map
	 * @version	2013.03.07
	 * @author	ȫ����
	 * @return	String
	 */	
	public static String getJsonObjectString(Object obj){

		if (obj == null) return null;
		
		// json���� ��ȯ
		String jsonString = JSONObject.fromObject(obj).toString();
		
		return jsonString;
	}
		
	
	public static String getJsonArrayObjectString(Object obj){

		if (obj == null) return null;
		
		JSONArray jsonArray = JSONArray.fromObject(obj);
		
		return jsonArray.toString();
	}
	
	public static String getJsonGrid(List arrList){

		if (arrList == null) return null;
		
		int size = arrList.size();
		
		JSONArray jsonArray = JSONArray.fromObject(arrList);
		
		Map<String, Object> param = new HashMap<String, Object>();
		
		param.put("page", 1);
		param.put("total", size);
		param.put("record", size);
		param.put("rows", jsonArray);
		
		JSONObject jsonObj = JSONObject.fromObject(param);
		
		return jsonObj.toString();
	}
	
	
}

