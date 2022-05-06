package com.fas.web.cmmn.util;

import java.io.Serializable;
import java.lang.reflect.Field;
 
import org.apache.commons.lang.builder.ToStringBuilder;
import org.apache.commons.lang.builder.ToStringStyle;
import org.apache.commons.lang.builder.EqualsBuilder;
import org.apache.commons.lang.builder.HashCodeBuilder;

import java.lang.reflect.Method;


public abstract class AbstractBaseVo implements Serializable {
	 	
	protected String menufoldFrameYN;    
	
	public String getMenufoldFrameYN() {
		return menufoldFrameYN;
	}

	public void setMenufoldFrameYN(String menufoldFrameYN) {
		this.menufoldFrameYN = menufoldFrameYN;
	}

	public void copyInto(AbstractBaseVo domain) {

		if (domain == null) {
			throw new NullPointerException();
		}

		// copying this domain into the specified domain. //////////////////////
		Class cSrc = this.getClass(); // src domain class
		Class cTarget = domain.getClass(); // target domain class

		Field[] fsTarget = cTarget.getDeclaredFields(); // target domain fields
		String tmpFNameTarget = null;
		String tmpFTypeTarget = null; // target domain field type
		boolean tmpFIsPrimitiveTarget = false; 
												
		Field tmpFSrc = null; // src domain field
		String tmpFTypeSrc = null; // src domain field type
		for (int i = 0; i < fsTarget.length; i++) {

			tmpFNameTarget = fsTarget[i].getName();
			try {
				tmpFSrc = cSrc.getDeclaredField(tmpFNameTarget);
			} catch (Exception e) {
				continue;
			}

			tmpFTypeTarget = fsTarget[i].getType().getName();
			tmpFTypeSrc = tmpFSrc.getType().getName();
			if (!tmpFTypeTarget.equals(tmpFTypeSrc)) {
				continue;
			}

			tmpFIsPrimitiveTarget = fsTarget[i].getType().isPrimitive();
			try {
				// primitive type
				if (tmpFIsPrimitiveTarget) {
					if (tmpFTypeTarget.equals("boolean")) {
						fsTarget[i].setBoolean(domain, tmpFSrc.getBoolean(this));
					} else if (tmpFTypeTarget.equals("byte")) {
						fsTarget[i].setByte(domain, tmpFSrc.getByte(this));
					} else if (tmpFTypeTarget.equals("char")) {
						fsTarget[i].setChar(domain, tmpFSrc.getChar(this));
					} else if (tmpFTypeTarget.equals("double")) {
						fsTarget[i].setDouble(domain, tmpFSrc.getDouble(this));
					} else if (tmpFTypeTarget.equals("float")) {
						fsTarget[i].setFloat(domain, tmpFSrc.getFloat(this));
					} else if (tmpFTypeTarget.equals("int")) {
						fsTarget[i].setInt(domain, tmpFSrc.getInt(this));
					} else if (tmpFTypeTarget.equals("long")) {
						fsTarget[i].setLong(domain, tmpFSrc.getLong(this));
					} else if (tmpFTypeTarget.equals("short")) {
						fsTarget[i].setShort(domain, tmpFSrc.getShort(this));
					}
				}

				// reference type
				else {
					fsTarget[i].set(domain, tmpFSrc.get(this));
				}
			} catch (IllegalAccessException e) {
				continue;
			}
		}
	}
	
	public String toString() {
		return ToStringBuilder.reflectionToString(this, ToStringStyle.MULTI_LINE_STYLE);
	}

	public boolean equals(Object o) {
		return EqualsBuilder.reflectionEquals(this, o);
	}

	public int hashCode() {
		return HashCodeBuilder.reflectionHashCode(this);
	}

	public Object getGetterValue(String key) {

		Object returnValue = null;

		try {
			Method method = this.getClass().getDeclaredMethod("get" + key.substring(0, 1).toUpperCase() + key.substring(1), new Class[0]);
			returnValue = method.invoke(this, new Object[0]);
		}
		catch (Exception e) {
			return null;
		}

		return returnValue;
	}
	
	
}
