package com.fas.cmmn.util;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;
import java.util.GregorianCalendar;
import java.util.Locale;
import java.util.SimpleTimeZone;

public class FasDateUtil {

	public final static String dateType = "yyyy-MM-dd HH:mm:ss";
	
	public final static String defaultStrDateType = "yyyy-MM-dd";
		
	public final static String DEFAULT_DATE_FORMAT = "yyyyMMdd";
	
	private static final int GMT_OFFSET = 9 * 60 * 60 * 1000;
	
	private FasDateUtil(){};
	
	public static Date getCurrentDate() throws Exception {
		
		java.text.SimpleDateFormat formatter = new java.text.SimpleDateFormat(dateType, java.util.Locale.KOREA);
		
		java.util.Date date = null;
		
		date = formatter.parse(getCurrentDay());
		
		return date;
		
	}
	
	public static String getCurrentDay() throws Exception {
		
		Calendar calendar = Calendar.getInstance(new SimpleTimeZone(GMT_OFFSET, "KST"));
	    
		java.text.SimpleDateFormat formatter = new java.text.SimpleDateFormat(dateType, java.util.Locale.KOREA);
		
		return formatter.format(calendar.getTime());
	}
	
	public static String transDateToString(Date date, String strDateType) {
		java.text.SimpleDateFormat formatter = new java.text.SimpleDateFormat(strDateType, java.util.Locale.KOREA);
		return formatter.format(date);
	}
	
	public static String transDateToString(Date date) {
		return transDateToString(date, defaultStrDateType);
	}
	
	public static String addYears(String date, int addYear) {
		return addYears(date, addYear, DEFAULT_DATE_FORMAT);
	}
	
	public static String addYears(String date, int addYear, String format) {
		SimpleDateFormat formatter = new SimpleDateFormat(format, Locale.KOREA);
		Date formattedDate = formatValidate(date, format);
		Calendar calendar = new GregorianCalendar();
		calendar.setTime(formattedDate);
		calendar.add(1, addYear);
		formattedDate = calendar.getTime();
		
		return formatter.format(formattedDate);
	}
	
	public static Date formatValidate(String date, String format) 
	{
		if (date == null || format == null) {
			return null;
		}
		
		date = date.replaceAll("-", "");
		SimpleDateFormat formatter = new SimpleDateFormat(format, Locale.KOREA);
		Date formattedDate = null;
		try {
			
			formattedDate = formatter.parse(date);
			
		}
		catch(ParseException ex) {
			
		}
		
		return formattedDate;
		
	}
	
	public static String getCurrentDayString() throws Exception {
		
		Calendar calendar = Calendar.getInstance(new SimpleTimeZone(GMT_OFFSET, "KST"));
	    
		java.text.SimpleDateFormat formatter = new java.text.SimpleDateFormat(DEFAULT_DATE_FORMAT, java.util.Locale.KOREA);
		
		return formatter.format(calendar.getTime());
	}

	public static String addDays(String baseYmd, int days)
	{
		SimpleDateFormat sdf = new SimpleDateFormat("yyyyMMdd");
		Calendar c = Calendar.getInstance();
		try{
		   //Setting the date to the given date
		   c.setTime(sdf.parse(baseYmd));
		}catch(ParseException e){
			e.printStackTrace();
		 }
		   
		//Number of Days to add
		c.add(Calendar.DAY_OF_MONTH, days);  
		//Date after adding the days to the given date
		String newDate = sdf.format(c.getTime());  
		//Displaying the new Date after addition of Days
		//System.out.println("Date after Addition: "+newDate);
		return newDate;
	}
	
	public static String getCurrentDayString(String format) throws Exception {
		
		Calendar calendar = Calendar.getInstance(new SimpleTimeZone(GMT_OFFSET, "KST"));
	    
		java.text.SimpleDateFormat formatter = new java.text.SimpleDateFormat(format, java.util.Locale.KOREA);
		
		return formatter.format(calendar.getTime());
	}
	
	public static void main(String[] args) throws Exception {
		String current = getCurrentDayString();
		System.out.println(current);
		System.out.println(addDays(current, 7));
		System.out.println(getCurrentDayString("yyyyMMddHHmmss"));
	}
	
}
