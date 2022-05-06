package com.fas.cmmn.util;

import java.math.BigDecimal;

public class FasNumberUtil {
	
	private FasNumberUtil() {}
	
	public static boolean isEquals(BigDecimal first, BigDecimal second) throws Exception {
		int compare = first.compareTo(second);
		return compare == 0;
	}
	
	public static boolean isFirstGreater(BigDecimal first, BigDecimal second) throws Exception {
		int compare = first.compareTo(second);
		return compare > 0;
	}
	
	public static boolean isFirstGreaterEquals(BigDecimal first, BigDecimal second) throws Exception {
		int compare = first.compareTo(second);
		return compare >= 0;
	}
	
	public static boolean isSecondGreater(BigDecimal first, BigDecimal second) throws Exception {
		int compare = first.compareTo(second);
		return compare < 0;
	}
	
	public static boolean isSecondGreaterEquals(BigDecimal first, BigDecimal second) throws Exception {
		int compare = first.compareTo(second);
		return compare <= 0;
	}

}
