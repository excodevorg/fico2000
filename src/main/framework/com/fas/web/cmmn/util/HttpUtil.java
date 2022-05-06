package com.fas.web.cmmn.util;

import java.text.ParseException;
import java.util.ArrayList;
import java.util.Collections;
import java.util.Comparator;
import java.util.List;
import java.util.Map;

import com.fas.cmmn.formVo.UserInfoFormVo;
import com.fas.model.com.domain.UserInfoDomain;
import com.fas.model.com.domain.UserRoleDomain;
import com.fas.web.cmmn.exception.BizException;

import java.io.File;
import java.lang.reflect.Field;
import java.lang.reflect.InvocationTargetException;
import java.lang.reflect.Method;
import java.math.BigDecimal;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import java.security.*;

import javax.crypto.Cipher;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.web.context.request.RequestContextHolder;
import org.springframework.web.context.request.ServletRequestAttributes;

public class HttpUtil {	
	 
	protected final Log log = LogFactory.getLog(getClass());
	
	@Resource(name="httpServletResponse")
	private HttpServletResponse httpServletResponse;	
	
	private File default_file = null;
	
	public HttpServletRequest getRequest() {  
		return ((ServletRequestAttributes) RequestContextHolder.currentRequestAttributes()).getRequest();
	}	
	
	public HttpServletResponse getResponse() {
		return httpServletResponse;
	}
	
	public UserInfoFormVo getSessionUserInfo() {
		UserInfoFormVo userInfo = null;
		
		try {
			userInfo = (UserInfoFormVo) getSessionAttribute("userInfo");
		}catch (Exception ex) {
			
		}
		
		return userInfo;
	}
	
	public List<UserRoleDomain> getSessionUserRole() {
		List<UserRoleDomain>userRoleList = null;
		try {
			userRoleList = (List<UserRoleDomain>)getSessionAttribute("userRoleList");
		} catch(Exception ex) {
			
		}
		return userRoleList;
	}
	
	public boolean isAdminRole() {
		
		boolean re = false;
		
		try {
		
		for (UserRoleDomain role : getSessionUserRole()) {
			if ("FAS900199".equals(role.getRolecode())) {
				re = true;
			}
		}
		
		} catch(Exception ex) {
			re = false;
		}
		
		return re;
		
		
	}
	
	public String getSessionUserNm() {
		UserInfoFormVo userInfo = getSessionUserInfo();
		if (userInfo != null) {
			return userInfo.getUserNm();
		} else {
			return "";
		}
	}
	
	public String getSessionUserId() {
		UserInfoFormVo userInfo = getSessionUserInfo();
		if (userInfo != null) {
			return userInfo.getUserId();
		} else {
			return "";
		}
	}
	 
	public String getLastRoleCode() {
		UserInfoFormVo userInfoDomain = getSessionUserInfo();
		String roleCode = "FAS900101"; //일반
		if (userInfoDomain != null)  { 
			List<UserRoleDomain>userRoleList = getSessionUserRole();
			
			if (userRoleList != null && userRoleList.size() > 1) {
				log.debug("userRoleList.size() >> " + userRoleList.size());
				Collections.sort(userRoleList, new RoleCodeDescCompare());
				
				for (UserRoleDomain role : userRoleList) {
					log.debug("roleCode >>> " + role.getRolecode());
				}
				
				UserRoleDomain userRoleDomain = userRoleList.get(0);
				if (userRoleDomain != null) roleCode = userRoleDomain.getRolecode();
			} else if (userRoleList != null && userRoleList.size() == 1 ) {
				UserRoleDomain userRoleDomain = userRoleList.get(0);
				if (userRoleDomain != null) roleCode = userRoleDomain.getRolecode();
			} else {
				
			}
		} 
		
		return roleCode;
	}
	
	public HttpSession getSession() {		
		return getRequest().getSession(false);
	}
	
	public Object getSessionAttribute(String name) {
		if (name == null) return null;
		
		if (getSession() == null) return null;
		
		return getSession().getAttribute(name);
	}
	
	public int getSessionAttributeIntValue(String name) {
		String str = getSessionAttributeStringValue(name);
		if (str == null) return 0;
		return Integer.parseInt(str);
	}
	
	public String getSessionAttributeStringValue(String name) {
		if (name == null) return null;
		return (String) getSession().getAttribute(name);
	}
	
	public boolean isAjaxRequest() {
		
		boolean resultBoolean = false;
		String header = getRequest().getHeader("X-Requested-With");
		String origin = getRequest().getHeader("ORIGIN");
		
		if (header != null && "xmlhttprequest".equals(header.toLowerCase()) || origin != null) {
			resultBoolean = true;
		}
		
		return resultBoolean;
	}
	
	 public AbstractBaseVo getBaseVo(Map map, String objName) throws BizException {
		 
		 List list = getBaseVoList(map, objName);
		 
		 if (list == null) {
			return null;
		 } else {
			return (AbstractBaseVo) list.get(0);
		}
		 
	 }
	 
	 public List getBaseVoList(Map map, String objName) throws BizException {
		 
		
		if (objName == null) {
			throw new NullPointerException("ObjName is null");
		}

		ArrayList list = new ArrayList();
		
		Class c = null; // domain class
		Object objInstance = null;
		
		try {
			c = Class.forName(objName);
			
			if (map == null) {
				list.add(0, (AbstractBaseVo) c.newInstance());
				return list;
			}
			
			if (map.isEmpty()) {
				list.add(0, (AbstractBaseVo) c.newInstance());
				return list;
			}
			
		} catch (ClassNotFoundException e) {
			throw new BizException(objName + " class is Not Found");
		} catch (Exception ex) {
			throw new BizException(objName + " class is Not Create");
		}
		
		Field[] fs = null; 
		fs = c.getDeclaredFields();
		
		Method[] ms = null;
		ms = c.getDeclaredMethods();
		
		String tmpFName = null; 
		Object tmpFValues = null; 
		int maxInputCnt = 0; 

		for (int i = 0; i < fs.length; i++) {
			tmpFName = fs[i].getName();
			tmpFValues = map.get(tmpFName);
			
			if (tmpFValues == null) {
				continue;
			}
			
			String[] tmp = null;
			if (tmpFValues.getClass().isArray()) {
				tmp = (String[]) tmpFValues;
			} else {
				tmp = new String[] { (String) tmpFValues };
			}

			if (maxInputCnt < tmp.length) {
				for (int k = maxInputCnt; k < tmp.length; k++) {
					try {
						AbstractBaseVo domain = (AbstractBaseVo) c.newInstance();
						list.add(k, domain);
						} catch (InstantiationException e) {
							throw new BizException(objName + " class interface abstract class");
						} catch (IllegalAccessException e) {
							throw new BizException(objName + " class modifier public ");
						}
					}

					maxInputCnt = tmp.length;
			}

			String methodName = null;
			String setMethod = null;
			Method selectMethod = null;
			
			
			for (int j = 0; j < tmp.length; j++) {
				try {
						
						setMethod = "set" + fs[i].getName().toLowerCase();						
						for (int idxMethodKey = 0; idxMethodKey < ms.length; idxMethodKey++) {							
							methodName = ms[idxMethodKey].getName().toLowerCase();	
							
							//log.debug("%%%%%%%%%%%%% Method Matching %%%%%%%%%%%%%%%%%%%%%%%");
							//log.debug("setMethod : [" + setMethod +"]");
							//log.debug("methodName : [" + methodName +"]");							
							
							if (setMethod.equals(methodName)) {
								selectMethod = ms[idxMethodKey];
								//log.debug("selectMethod : [" + selectMethod.getName() +"]");
								break;
							}
						}						
						
						if (setMethod.equals(methodName)) {
							setMethodValue(list.get(j), fs[i], selectMethod, tmp[j]);
						}
						
				} catch (Exception e) {
						String errMsg = tmpFName + " field  " + tmp[j] + " ";
						log.debug(errMsg);
				}
			}
		}

		if (list.isEmpty()) {
			
			//log.debug("%%%%%%%%%%%%% list isEmpty %%%%%%%%%%%%%%%%%%%%%%%");
			
			try {
			
				list.add(0, (AbstractBaseVo) c.newInstance());
			
			} catch(Exception ex) {
				log.debug(ex.toString());
				list = null;
			}
			
		}
		
		
		//log.debug("list =======> " + list);

		return list;
		 
	 }
	 
	 
	 private void setMethodValue(Object obj, Field f, Method m, String value) throws IllegalAccessException, ParseException
	 ,  IllegalArgumentException, InvocationTargetException {
		 
		 	String mName = m.getName();
			String fTypeName = f.getType().getName(); // field type 
			boolean fIsPrimitive = f.getType().isPrimitive(); // field type
			boolean checkNo = false;

			if (value == null || "".equals(value)) {
				return;
			}
			
			String list_fNameString = mName + "s";

			//log.debug("fname ====> " + mName.toLowerCase() + "|" + mName.toLowerCase().indexOf("content") + "|" + value +"|" + value.toLowerCase().indexOf("script") + "|" + fIsPrimitive); 
			
			if (mName != null) {
				
				
				
				if (mName.toLowerCase().indexOf("content") >= 0) {
					if (value.toLowerCase().indexOf("script") < 0) {
						checkNo = true;
					}
				}
				
				if (mName.toLowerCase().indexOf("pass") >= 0) {
					if (value.toLowerCase().indexOf("script") < 0) {
						checkNo = true;
					}
				}
				
				if (mName.toLowerCase().indexOf("pass") >= 0) {
					if (value.toLowerCase().indexOf("script") < 0) {
						checkNo = true;
					}
				}
				
				if (mName.toLowerCase().indexOf("src") >= 0) {
					if (value.toLowerCase().indexOf("script") < 0) {
						checkNo = true;
					}
				}
				
				if (mName.toLowerCase().indexOf("passwd") >= 0) {
					if (value.toLowerCase().indexOf("script") < 0) {
						checkNo = true;
					}
				}
				
				//if ("content".equals(fName.toLowerCase())) {
				//	checkNo = true;
				//}
				
			}
			
			//log.debug(">>>>>>>>>>>>>>>>>>>>>> checkNocheckNocheckNocheckNocheckNocheckNocheckNocheckNocheckNocheckNocheckNocheckNo >>> " +checkNo+":"+mName);
			
			if (!checkNo) {
			value = StringUtil.cleanXSS(value);
			value = StringUtil.cleanSQLInjection(value);
			}
			
			if (mName.toLowerCase().indexOf("secureuserid") >= 0) {
				String stValue = null;
				try {
					stValue = decryptRsa(value);
				} catch (Exception ex) {
					stValue = value;
				}
				
				value = stValue;
			}
			
			if (mName.toLowerCase().indexOf("securepasswd") >= 0) {
				String stValue = null;
				try {
					stValue = decryptRsa(value);
				} catch (Exception ex) {
					stValue = value;
				}
				
				value = stValue;
			}
			
			// primitive type
			if (fIsPrimitive) {
				if ("boolean".equals(fTypeName)) {					
					m.invoke(obj, (Boolean.valueOf(value)).booleanValue());
				} else if ("byte".equals(fTypeName)) {
					m.invoke(obj, Byte.parseByte(value));					
				} else if ("char".equals(fTypeName)) {
					m.invoke(obj, value.charAt(0));					
				} else if ("double".equals(fTypeName)) {
					value = HrmFormat.removeFormatCurrency(value); 
					m.invoke(obj, Double.parseDouble(value));					
				} else if ("float".equals(fTypeName)) {
					value = HrmFormat.removeFormatCurrency(value); 
					m.invoke(obj, Float.parseFloat(value));					
				} else if ("int".equals(fTypeName)) {
					value = HrmFormat.removeFormatCurrency(value); 
																	
																	
					m.invoke(obj, Integer.parseInt(value));					
				} else if ("long".equals(fTypeName)) {
					value = HrmFormat.removeFormatCurrency(value); 
																	
																	
					m.invoke(obj, Long.parseLong(value));					
				} else if ("short".equals(fTypeName)) {
					value = HrmFormat.removeFormatCurrency(value); 
																	
																	
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
					value = HrmFormat.removeFormatCurrency(value); 
																	
					m.invoke(obj, new BigDecimal(value));					
				}
			}
	 }
	 
	 public String decryptRsa(String securedValue) throws Exception {
			
			PrivateKey privateKey = (PrivateKey) getSessionAttribute("__rsaPrivateKey__");
			
			if (privateKey == null) {
	            throw new Exception("error");
	        }
			
	        //log.debug("will decrypt : " + securedValue);
	        Cipher cipher = Cipher.getInstance("RSA");
	        byte[] encryptedBytes = hexToByteArray(securedValue);
	        cipher.init(Cipher.DECRYPT_MODE, privateKey);
	        byte[] decryptedBytes = cipher.doFinal(encryptedBytes);
	        String decryptedValue = new String(decryptedBytes, "utf-8"); 
	        return decryptedValue;
	 }
	 
	 private byte[] hexToByteArray(String hex) {
	     	if (hex == null || hex.length() % 2 != 0) {
	            return new byte[]{};
	        }

	        byte[] bytes = new byte[hex.length() / 2];
	        for (int i = 0; i < hex.length(); i += 2) {
	            byte value = (byte)Integer.parseInt(hex.substring(i, i + 2), 16);
	            bytes[(int) Math.floor(i / 2)] = value;
	        }
	        return bytes;
	 }
	 
	 
	 /**
	  * 이름 내림차순
	  * @author falbb
	  *
	  */
	 static class RoleCodeDescCompare implements Comparator<UserRoleDomain> {
	 	@Override
	 	public int compare(UserRoleDomain arg0, UserRoleDomain arg1) {
	 		// TODO Auto-generated method stub
	 		return arg1.getRolecode().compareTo(arg0.getRolecode());
	 	}
	 }

	 
}






