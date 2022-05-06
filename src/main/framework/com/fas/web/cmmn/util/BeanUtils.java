package com.fas.web.cmmn.util;

import java.io.ByteArrayInputStream;
import java.io.ByteArrayOutputStream;
import java.io.ObjectInput;
import java.io.ObjectInputStream;
import java.io.ObjectOutput;
import java.io.ObjectOutputStream;
import java.lang.reflect.InvocationTargetException;
import java.lang.reflect.Method;
import java.text.ParseException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
import java.util.Set;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.dozer.DozerBeanMapper;
import org.dozer.Mapper;
import org.json.simple.JSONArray;
import org.json.simple.JSONValue;

import com.fas.web.cmmn.dataaccess.util.FasMap;

import java.lang.reflect.Field;
import java.math.BigDecimal;

public class BeanUtils {
	
	protected final Log log = LogFactory.getLog(getClass());
	
	private Mapper dozerBeanMapper;
	public Object toCopy(Object sourceObject, Object targetObject) throws Exception {
		dozerBeanMapper = new DozerBeanMapper();
		dozerBeanMapper.map(sourceObject, targetObject);
		return targetObject;
	}
	
	public FasMap toMapCopy(Map sourceMap, FasMap targetMap)  throws Exception {
		if (sourceMap == null) return null;
		if (targetMap == null) return null;
		
		Set<String> keyset = sourceMap.keySet();
		Iterator<String> iterator = keyset.iterator();
		String key = null;
		
		while(iterator.hasNext()) {
			key = iterator.next();
			if (key != null && key.trim().length() > 0) {
				//System.out.println(">>> key >> " + sourceMap.get(key));
				targetMap.put(key, sourceMap.get(key));
			}
		}
		
		return targetMap;
	}
	
	public FasMap toMapCopy(FasMap sourceMap, FasMap targetMap)  throws Exception {
		if (sourceMap == null) return null;
		if (targetMap == null) return null;
		
		Set<String> keyset = sourceMap.keySet();
		Iterator<String> iterator = keyset.iterator();
		String key = null;
		
		while(iterator.hasNext()) {
			key = iterator.next();
			if (key != null && key.trim().length() > 0) {
				//System.out.println(">>> key >> " + sourceMap.get(key));
				targetMap.put(key, sourceMap.get(key));
			}
		}
		
		return targetMap;
	}
	
	public Object maptoObjectCopy(FasMap sourceMap, Object targetObject)  throws Exception {
		if (sourceMap == null) return null;
		if (targetObject == null) return null;
		
		Set<String> keyset = sourceMap.keySet();
		Iterator<String> iterator = keyset.iterator();
		String key = null;
		
		while(iterator.hasNext()) {
			key = iterator.next();
			if (key != null && key.trim().length() > 0) {
				try {
					setMethodValue(targetObject, key, sourceMap.get(key));
				} catch (Exception ex) {
					ex.printStackTrace();
					return null;
				}
				
			}
		}
		return targetObject;
	}
	
	
	public void toString(Object obj) {
		log.debug(">>>>>>>>>>>>>> BeanUtils >>>>>>>>>>>>>>>>>");
		if (obj instanceof Map) {
			Map sourceMap = (Map) obj;
			
			Set<String> keyset = sourceMap.keySet();
			Iterator<String> iterator = keyset.iterator();
			String key = null;
			
			while(iterator.hasNext()) {
				key = iterator.next();
				if (key != null && key.trim().length() > 0) {
					try {
						log.debug(key + " : " + sourceMap.get(key));
					} catch (Exception ex) {
						ex.printStackTrace();
					}
					
				}
			}
		} else if (obj instanceof FasMap){
			FasMap sourceMap = (FasMap) obj;
			Set<String> keyset = sourceMap.keySet();
			Iterator<String> iterator = keyset.iterator();
			String key = null;
			
			while(iterator.hasNext()) {
				key = iterator.next();
				if (key != null && key.trim().length() > 0) {
					try {
						log.debug(key + " : " + sourceMap.get(key));
					} catch (Exception ex) {
						ex.printStackTrace();
					}
					
				}
			}
		} else {
			if (obj == null) {
				System.out.println("bean is null");
			} else {
				Class c = obj.getClass();
				try {
					Method[] m = c.getMethods();
					for (Method param:m) {	
						System.out.println(param.getName());
						if (param.getName().startsWith("get") && !param.getName().equals("getClass")) {
							try {
								log.debug(param.getName().substring(3) + " : " + param.invoke(obj));
							} catch (Exception ex) {
								
							}
						}
					}
				} catch(Exception ex) {
					ex.printStackTrace();
				}		
			}
		}
	}
	
	public String toString1(Object obj) {
		
		StringBuffer buffer = new StringBuffer();
		
		if (obj == null) {
			return null;
		} else {
			Class c = obj.getClass();
			try {
				Method[] m = c.getMethods();
				for (Method param:m) {	
					if (param.getName().startsWith("get") && !param.getName().equals("getClass")) {
						try {
							buffer.append(param.getName().substring(3)).append(":").append(param.invoke(obj)).append("\r\n");
						} catch (Exception ex) {
							
						}
					}
				}
			} catch(Exception ex) {
				ex.printStackTrace();
			}		
		}
		
		return buffer.toString();
	}
	
	
	public String getJsonString(Map<?,?> param) {
		return JsonResponseObject.getJsonString(param);
	}
	
	public List<Map> parseJsonArrayObject(String jsonString) {
		
		if (jsonString == null) return null;
		
		JSONArray jsonArray = (JSONArray) JSONValue.parse(jsonString);		// json 객체로 변환
		Map param = null;
		
		List<Map> arrayList = new ArrayList<Map>();
		
		for (int i = 0; i < jsonArray.size(); i++) {
			param = (HashMap) jsonArray.get(i);
			Set setKey = param.keySet();
			Iterator itr = setKey.iterator();
			String key = "";
			String strValue = "";
			while(itr.hasNext()) {
				key = (String) itr.next();
				if (param.get(key) instanceof java.lang.Long) {
					param.put(key, new BigDecimal((Long) param.get(key)));
				} else if (param.get(key) instanceof java.lang.Integer) {
					param.put(key, new BigDecimal((Integer) param.get(key)));
				} else if (param.get(key) instanceof java.lang.Double) {
					param.put(key, new BigDecimal((Double) param.get(key)));
				}
			}
			arrayList.add(param);
		}
		
		return arrayList;
	}
	
	//method 명으로 값 찾기
	public Object getMethodValue(Object targetObject, String searchField) throws Exception {
		
		if (targetObject == null) return null;
		if (StringUtil.isEmpty(searchField)) return null;
		
		Object returnValue = null;
		
		String searchMethod = "get" + searchField;
		searchMethod = searchMethod.toLowerCase();
		
		try {
			
			Class c = targetObject.getClass();
			Method[] ms = c.getMethods();			
			String getMethod = "";
			
			for (Method method : ms) {
				getMethod = method.getName().toLowerCase();
				if (getMethod.equals(searchMethod)) {
					returnValue = method.invoke(targetObject);
				}
			}
			
		} catch (Exception ex) {
			ex.printStackTrace();
		}
		
		return returnValue;
	}
	
	//method 명으로 값 넣기	
	public boolean setMethodValue(Object targetObject, String searchField, Object value) throws Exception {
		
		if (targetObject == null) return false;
		if (StringUtil.isEmpty(searchField)) return false;
		
		boolean returnValue = false;
		
		String searchMethod = "set" + searchField;
		searchMethod = searchMethod.toLowerCase();
		
		try {
			
			Class c = targetObject.getClass();
			Method[] ms = c.getMethods();			
			String setMethod = "";
			
			for (Method method : ms) {
				setMethod = method.getName().toLowerCase();
				if (setMethod.equals(searchMethod)) {
					method.invoke(targetObject, value);
					returnValue = true;
				}
			}
			
		} catch (Exception ex) {
			ex.printStackTrace();
		}
		
		return returnValue;
		
	}
	
	
	//method 명으로 값 넣기	
	public boolean objMethodValue(Object targetObject, String searchField, Object value) throws Exception {
		
		if (targetObject == null) return false;
		if (StringUtil.isEmpty(searchField)) return false;
		
		boolean returnValue = false;
		
		String searchMethod = searchField;
		searchMethod = searchMethod.toLowerCase();
		
		try {
			
			Class c = targetObject.getClass();
			Method[] ms = c.getMethods();			
			String setMethod = "";
			
			for (Method method : ms) {
				setMethod = method.getName().toLowerCase();
				
				log.debug("setMethod : searchMethod = " + setMethod + " : " + searchMethod);
				
				if (setMethod.equals(searchMethod)) {
					method.invoke(targetObject, value);
					log.debug("That' Ok Exec ....."); 
					returnValue = true;
				}
			}
			
		} catch (Exception ex) {
			log.debug("Invoker Exception ....");
			log.debug(ex.toString());
			ex.printStackTrace();
		}
		
		return returnValue;
		
	}
	
	//method 명으로 값 넣기	
	public boolean objInvokerMethodValue(Object targetObject, String searchField, Object value) throws Exception {
		
		if (targetObject == null) return false;
		if (StringUtil.isEmpty(searchField)) return false;
		
		boolean returnValue = false;
		
		String searchMethod = searchField;
		searchMethod = searchMethod.toLowerCase();
		
		try {
			
			Class c = targetObject.getClass();
			Method[] ms = c.getMethods();			
			String setMethod = "";
			
			for (Method method : ms) {
				setMethod = method.getName().toLowerCase();
				
				log.debug("setMethod : searchMethod = " + setMethod + " : " + searchMethod);
				
				if (setMethod.equals(searchMethod)) {
					method.invoke(targetObject, value);
					log.debug("That' Ok Exec ....."); 
					returnValue = true;
				}
			}
			
		} catch (Exception ex) {
			log.debug("Invoker Exception ....");
			log.debug(ex.toString());
			throw ex;
		}
		
		return returnValue;
		
	}
	
		 private void setMethodValue(Object obj, Field f, Method m, String value) throws IllegalAccessException, ParseException
	 ,  IllegalArgumentException, InvocationTargetException {
		 
		 	String mName = m.getName();
			String fTypeName = f.getType().getName(); // field type 명
			boolean fIsPrimitive = f.getType().isPrimitive(); // field type 의
			boolean checkNo = false;

			// 입력값이 없을 경우
			if (value == null || "".equals(value)) {
				return;
			}
			
			String list_fNameString = mName + "s";

			//log.debug("fname ====> " + mName.toLowerCase() + "|" + mName.toLowerCase().indexOf("content") + "|" + value +"|" + value.toLowerCase().indexOf("script") + "|" + fIsPrimitive); 
			
			// primitive type
			if (fIsPrimitive) {
				if ("boolean".equals(fTypeName)) {					
					m.invoke(obj, (Boolean.valueOf(value)).booleanValue());
				} else if ("byte".equals(fTypeName)) {
					m.invoke(obj, Byte.parseByte(value));					
				} else if ("char".equals(fTypeName)) {
					m.invoke(obj, value.charAt(0));					
				} else if ("double".equals(fTypeName)) {
					value = HrmFormat.removeFormatCurrency(value); // 화면에서 입력되는 숫자에
					m.invoke(obj, Double.parseDouble(value));					
				} else if ("float".equals(fTypeName)) {
					value = HrmFormat.removeFormatCurrency(value); // 화면에서 입력되는 숫자에
					m.invoke(obj, Float.parseFloat(value));					
				} else if ("int".equals(fTypeName)) {
					value = HrmFormat.removeFormatCurrency(value); // 화면에서 입력되는 숫자에
					m.invoke(obj, Integer.parseInt(value));					
				} else if ("long".equals(fTypeName)) {
					value = HrmFormat.removeFormatCurrency(value); // 화면에서 입력되는 숫자에
					m.invoke(obj, Long.parseLong(value));					
				} else if ("short".equals(fTypeName)) {
					value = HrmFormat.removeFormatCurrency(value); // 화면에서 입력되는 숫자에
					m.invoke(obj, Short.parseShort(value));					
				}
			}

			// reference type
			else {
				if ("java.lang.String".equals(fTypeName)) {
					m.invoke(obj, value);					
				} else if ("java.util.Date".equals(fTypeName)) {

					String pattern = null;
					if (value.length() == HrmFormat.PATTERN_DATE_WITHOUT_DELIM.length()) {
						pattern = HrmFormat.PATTERN_DATE_WITHOUT_DELIM; // "yyyyMMdd"
					} else if (value.length() == HrmFormat.PATTERN_DATE.length()) {
						pattern = HrmFormat.PATTERN_DATE; // "yyyy-MM-dd"
					} else if (value.length() == HrmFormat.PATTERN_DATE_TIME_WITHOUT_DELIM.length()) {
						pattern = HrmFormat.PATTERN_DATE_TIME_WITHOUT_DELIM; // "yyyyMMdd
																				// HHmmss"
					} else if (value.length() == HrmFormat.PATTERN_DATE_TIME.length()) {
						pattern = HrmFormat.PATTERN_DATE_TIME; // "yyyy-MM-dd
																// HH:mm:ss"
					}

					if (pattern != null) {
						boolean isDate = DateUtil.isDate(value, pattern);
						if (isDate) {
							m.invoke(obj, HrmFormat.parseDate(value, pattern));					
						}
					}
				} else if ("java.math.BigDecimal".equals(fTypeName)) {
					value = HrmFormat.removeFormatCurrency(value); // 화면에서 입력되는 숫자에
					m.invoke(obj, new BigDecimal(value));					
				}
			}
	 }
		 
		 public Map ConverObjectToMap(Object obj){
				try {
					//Field[] fields = obj.getClass().getFields(); //private field는 나오지 않음.
					Field[] fields = obj.getClass().getDeclaredFields();
					Map resultMap = new HashMap();
					for(int i=0; i<=fields.length-1;i++){
						fields[i].setAccessible(true);
						resultMap.put(fields[i].getName(), fields[i].get(obj));
					}
					return resultMap;
				} catch (IllegalArgumentException e) {
					e.printStackTrace();
				} catch (IllegalAccessException e) {
					e.printStackTrace();
				}
				return null;
			}
		 
			public Map objectToMap(Map param) throws Exception {
				
				Set keyset = param.keySet();
				Iterator<String> iterator = keyset.iterator();
				String key = null;
				BeanUtils beanUtil = new BeanUtils();
				
				while(iterator.hasNext()){
					
					key = iterator.next();
					System.out.println("String key >>> " + key);
					  
							
					
					Object obj = param.get(key);
					
					if (obj instanceof ArrayList) {
						log.debug(">>>>> ArrayList >>>>");
						List objList = (List) obj;
						List resultList = new ArrayList();
						for (int i = 0; i < objList.size(); i++) {
							Object objt = objList.get(i); 
							resultList.add(beanUtil.ConverObjectToMap(objt));
						}
						param.put(key, resultList);
					} else if (obj instanceof org.apache.commons.collections.map.ListOrderedMap ) {
						param.put(key, obj);
					} else {
						log.debug(">>>>> Not ArrayList >>>>");
						param.put(key, beanUtil.ConverObjectToMap(obj));
					}
				}
				
				return param;
			}
	
}
