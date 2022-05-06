package com.fas.web.cmmn.util;

import com.fas.web.cmmn.exception.DateUtilException;

import java.util.*;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.sql.Timestamp;

/**
 * @author ȫ����
 *
 */ 
public class DateUtil {
	private final static int[] 	SOLAR_MONTH_ARRAY 
	= {31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31};	
	
	/** default formated date sign */
	private static String DEFAULT_FORMATTED_DATE_SIGN = "/";

	/** default formated time sign */
	private static String DEFAULT_FORMATTED_TIME_SIGN = ":";

	private static String[] YOIL_NAMES_KOR = { "월", "화", "수", "목", "금", "토", "일" }; 

	private static String[] MONTH_NAMES_ENG = { "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" }; 

	private static MathUtil mathUtil;


	public DateUtil() {
		mathUtil = new MathUtil();
	}
	
	
	public static String getYYYY() {	
		Calendar cal = Calendar.getInstance();
		//String result = String.valueOf(cal.get(Calendar.YEAR));
		return String.valueOf(cal.get(Calendar.YEAR));
	}

	public static String getYYYY(Calendar cal) {	
		//String result = String.valueOf(cal.get(Calendar.YEAR));
		return String.valueOf(cal.get(Calendar.YEAR));
	}

	public static String getYYYY(Timestamp timeStamp) {
		SimpleDateFormat formatDate = new SimpleDateFormat("yyyy");
		return formatDate.format(timeStamp);
	}

	public static String getMM() {
		Calendar cal = Calendar.getInstance();

		int month = cal.get(Calendar.MONTH) + 1;
		String m = null;
		if (month <10) 
			m = "0" + month;
		else 
			m = String.valueOf(month);

		return m;
	}

	public static String getMM(Calendar cal) {

		int month = cal.get(Calendar.MONTH) + 1;
		String m = null;
		if (month <10) 
			m = "0" + month;
		else 
			m = String.valueOf(month);

		return m;
	}

	public static String getMM(Timestamp timeStamp) {
		SimpleDateFormat formatDate = new SimpleDateFormat("MM");
		return formatDate.format(timeStamp);
	}

	public static String getDD() {
		Calendar cal = Calendar.getInstance();

		int day = cal.get(Calendar.DAY_OF_MONTH);
		String d = null;
		if (day < 10)
			d = "0" + day;
		else
			d = String.valueOf(day);
		
		return d;
	}

	public static String getDD(Calendar cal) {

		int day = cal.get(Calendar.DAY_OF_MONTH);
		String d = null;
		if (day < 10)
			d = "0" + day;
		else
			d = String.valueOf(day);
		
		return d;
	}

	public static String getDD(Timestamp timeStamp) {
		SimpleDateFormat formatDate = new SimpleDateFormat("dd");
		return formatDate.format(timeStamp);
	}

	public static int getMaxDD(int month) {
		Calendar cal = Calendar.getInstance();
		cal.set(Calendar.MONTH, month-1);
		return getActualMaximum(cal, Calendar.DAY_OF_MONTH);
	}
	
    public static int getActualMaximum(Calendar calendar, int field) {
		Calendar cal = (Calendar)calendar.clone();
        int fieldValue = cal.getLeastMaximum(field);
        int endValue = cal.getMaximum(field);

        // if we know that the maximum value is always the same, just return it
        if (fieldValue == endValue) {
            return fieldValue;
        }

        // clone the calendar so we don't mess with the real one, and set it to
        // accept anything for the field values
        cal.setLenient(true);

        // if we're counting weeks, set the day of the week to Sunday.  We know the
        // last week of a month or year will contain the first day of the week.
        if (field == Calendar.WEEK_OF_YEAR || field == Calendar.WEEK_OF_MONTH)
            cal.set(Calendar.DAY_OF_WEEK, cal.getFirstDayOfWeek());

        // now try each value from getLeastMaximum() to getMaximum() one by one until
        // we get a value that normalizes to another value.  The last value that
        // normalizes to itself is the actual maximum for the current date
        int result = fieldValue;

        do {
            cal.set(field, fieldValue);
            if (cal.get(field) != fieldValue) {
                break;
            } else {
                result = fieldValue;
                fieldValue++;
            }
        } while (fieldValue <= endValue);

        return result;
    }


	public static String getHH() {
		Calendar cal = Calendar.getInstance();

		int hour = cal.get(Calendar.HOUR_OF_DAY);
		String h = null;
		if (hour < 10)
			h = "0" + hour;
		else
			h = String.valueOf(hour);

		return h;
	}

	public static String getHH(Calendar cal) {

		int hour = cal.get(Calendar.HOUR_OF_DAY);
		String h = null;
		if (hour < 10)
			h = "0" + hour;
		else
			h = String.valueOf(hour);

		return h;
	}

	public static String getHH(Timestamp timeStamp) {
		SimpleDateFormat formatDate = new SimpleDateFormat("hh");
		return formatDate.format(timeStamp);
	}

	public static String getMI() {
		Calendar cal = Calendar.getInstance();

		int min = cal.get(Calendar.MINUTE);
		String m = null;
		if (min < 10)
			m = "0" + min;
		else
			m = String.valueOf(min);
		
		return m;
	}

	public static String getMI(Calendar cal) {

		int min = cal.get(Calendar.MINUTE);
		String m = null;
		if (min < 10)
			m = "0" + min;
		else
			m = String.valueOf(min);
		
		return m;
	}

	public static String getMI(Timestamp timeStamp) {
		SimpleDateFormat formatDate = new SimpleDateFormat("mm");
		return formatDate.format(timeStamp);
	}

	public static String getSS() {
		Calendar cal = Calendar.getInstance();

		String s = null;
		int sec = cal.get(Calendar.SECOND);
		if (sec < 10)
			s = "0" + sec;
		else
			s = String.valueOf(sec);

		
		return s;
	}

	public static String getSS(Calendar cal) {

		String s = null;
		int sec = cal.get(Calendar.SECOND);
		if (sec < 10)
			s = "0" + sec;
		else
			s = String.valueOf(sec);

		
		return s;
	}

	public static String getSS(Timestamp timeStamp) {
		SimpleDateFormat formatDate = new SimpleDateFormat("ss");
		return formatDate.format(timeStamp);
	}

	public static String getFormattedDate() {
		return getYYYY() + DEFAULT_FORMATTED_DATE_SIGN + getMM() + DEFAULT_FORMATTED_DATE_SIGN + getDD();
	}

	public static String getFormattedDate(Calendar cal) {
		return getYYYY(cal) + DEFAULT_FORMATTED_DATE_SIGN + getMM(cal) + DEFAULT_FORMATTED_DATE_SIGN + getDD(cal);
	}

	public static String getFormattedDate(Timestamp timeStamp) {
		SimpleDateFormat formatDate = new SimpleDateFormat("yyyy"+DEFAULT_FORMATTED_DATE_SIGN+"MM"+DEFAULT_FORMATTED_DATE_SIGN+"dd");
		return formatDate.format(timeStamp);

	}
	
	public static String getFormattedDateKor(Timestamp timeStamp) {
		return  getYYYY(timeStamp)+" 년"+getMM(timeStamp)+" 월"+getDD(timeStamp)+" ";
	}	
	
	public static String getFormatDotDate() {
		return  getYYYY()+"."+getMM()+"."+getDD();
	}
	
	public static String getFormatDaeDate() {
		return  getYYYY()+"-"+getMM()+"-"+getDD();
	}
	
	public static String getFormatDate() {
		return  getYYYY()+getMM()+getDD();
	}

	public static String getFormattedDate(String sign) {
		return getYYYY() + sign + getMM() + sign + getDD();
	}

	public static String getFormattedDate(Calendar cal, String sign) {
		return getYYYY(cal) + sign + getMM(cal) + sign + getDD(cal);
	}

	public static String getFormattedDate(Timestamp timeStamp, String sign) {
		SimpleDateFormat formatDate = new SimpleDateFormat("yyyy"+sign+"MM"+sign+"dd");
		return formatDate.format(timeStamp);
	}

	public static String getFormattedTime() {
		return getHH() + DEFAULT_FORMATTED_TIME_SIGN + getMI() + DEFAULT_FORMATTED_TIME_SIGN + getSS();
	}

	public static String getFormattedTime(Calendar cal) {
		return getHH(cal) + DEFAULT_FORMATTED_TIME_SIGN + getMI(cal) + DEFAULT_FORMATTED_TIME_SIGN + getSS(cal);
	}

	public static String getFormattedTime(Timestamp timeStamp) {
		SimpleDateFormat formatDate = new SimpleDateFormat("hh"+DEFAULT_FORMATTED_TIME_SIGN+"mm"+DEFAULT_FORMATTED_TIME_SIGN+"ss");
		return formatDate.format(timeStamp);

	}
	
	public static String getFormattedTimeKor(Timestamp timeStamp) {
		return getHH(timeStamp)+" 년"+getMI(timeStamp)+" 월"+getSS(timeStamp)+" 일";
	}
	
		public static String getFormattedTime(String sign) {
		return getHH() + sign + getMI() + sign + getSS();
	}

	public static String getFormattedTime(Calendar cal, String sign) {
		return getHH(cal) + sign + getMI(cal) + sign + getSS(cal);
	}

	public static String getFormattedTime(Timestamp timeStamp, String sign) {
		SimpleDateFormat formatDate = new SimpleDateFormat("hh"+sign+"mm"+sign+"ss");
		return formatDate.format(timeStamp);
	}


	public static Calendar getCalendar(String[] params) {
		Calendar cal = Calendar.getInstance();

		cal.set(Calendar.YEAR, cal.getMinimum(Calendar.YEAR));
		cal.set(Calendar.MONTH, cal.getMinimum(Calendar.MONTH));
		cal.set(Calendar.DAY_OF_MONTH, cal.getMinimum(Calendar.DAY_OF_MONTH));
		cal.set(Calendar.HOUR_OF_DAY, cal.getMinimum(Calendar.HOUR_OF_DAY));
		cal.set(Calendar.MINUTE, cal.getMinimum(Calendar.MINUTE));
		cal.set(Calendar.SECOND, cal.getMinimum(Calendar.SECOND));

		for(int i=0;i<params.length;i++) {
			int value = Integer.parseInt(params[i]);
			switch(i) {
				case 0 :
					cal.set(Calendar.YEAR, value);
					break;
				case 1 :
					cal.set(Calendar.MONTH, value-1);
					break;
				case 2 :
					cal.set(Calendar.DAY_OF_MONTH, value);
					break;
				case 3 :
					cal.set(Calendar.HOUR_OF_DAY, value);
					break;
				case 4 :
					cal.set(Calendar.MINUTE, value);
					break;
				case 5 :
					cal.set(Calendar.SECOND, value);
					break;
				default :
					break;

			}
		}

		return cal;
	}

	public static Calendar getCalendar(String date, int fieldIndex) {

		String[] dateFields = null;

		switch(fieldIndex) {
			case Calendar.YEAR :
				dateFields = new String[1];
                dateFields[0] = date.substring(0, 4);
				break;
			case Calendar.MONTH :
				dateFields = new String[2];
                dateFields[0] = date.substring(0, 4);
                dateFields[1] = date.substring(4, 6);
				break;
			case Calendar.DAY_OF_MONTH :
				dateFields = new String[3];
                dateFields[0] = date.substring(0, 4);
                dateFields[1] = date.substring(4, 6);
                dateFields[2] = date.substring(6, 8);
				break;
			case Calendar.HOUR_OF_DAY :
				dateFields = new String[4];
                dateFields[0] = date.substring(0, 4);
                dateFields[1] = date.substring(4, 6);
                dateFields[2] = date.substring(6, 8);
                dateFields[3] = date.substring(8, 10);
				break;
			case Calendar.MINUTE :
				dateFields = new String[5];
                dateFields[0] = date.substring(0, 4);
                dateFields[1] = date.substring(4, 6);
                dateFields[2] = date.substring(6, 8);
                dateFields[3] = date.substring(8, 10);
                dateFields[4] = date.substring(10, 12);
				break;
			case Calendar.SECOND :
				dateFields = new String[6];
                dateFields[0] = date.substring(0, 4);
                dateFields[1] = date.substring(4, 6);
                dateFields[2] = date.substring(6, 8);
                dateFields[3] = date.substring(8, 10);
                dateFields[4] = date.substring(10, 12);
                dateFields[5] = date.substring(12, 14);
				break;
				
		}

		return getCalendar(dateFields);
	}
	
	public static String getCalString(Calendar cal, int fieldIndex) {
		String dateString = null;
		switch(fieldIndex) {
			case Calendar.YEAR :
				dateString = getYYYY(cal);
				break;
			case Calendar.MONTH :
				dateString = getYYYY(cal)+getMM(cal);
				break;
			case Calendar.DAY_OF_MONTH :
				dateString = getYYYY(cal)+getMM(cal)+getDD(cal);
				break;
			case Calendar.HOUR_OF_DAY :				
                dateString = getYYYY(cal)+getMM(cal)+getDD(cal)+getHH(cal);
				break;
			case Calendar.MINUTE :
				dateString = getYYYY(cal)+getMM(cal)+getDD(cal)+getHH(cal)+getMI(cal);
				break;
			case Calendar.SECOND :
				dateString = getYYYY(cal)+getMM(cal)+getDD(cal)+getHH(cal)+getMI(cal)+getSS(cal);              
				break;				
		}
		return dateString;
	}
	
	public static Calendar getCalendar(int fieldIndex) {
		return clear(fieldIndex, Calendar.getInstance());
	}

	public static Calendar getCalendar(int fieldIndex, int value) {
		Calendar cal = Calendar.getInstance();
		return getCalendar(cal, fieldIndex, value);
	}

	public static Calendar getCalendar(Calendar cal, int fieldIndex, int value) {
		cal.add(fieldIndex, value);
		return cal;
	}
	
	public static boolean isAfter(Calendar cal) {
		Calendar curCal = Calendar.getInstance();

		return isAfter(curCal, cal);

	}

	public static boolean isAfter(int fieldIndex, Calendar cal) {
		Calendar curCal = Calendar.getInstance();

		return isAfter(clear(fieldIndex, curCal), clear(fieldIndex, cal));

	}

	public static boolean isAfter(int fieldIndex, Calendar src, Calendar dest) {

		return isAfter(clear(fieldIndex, src), clear(fieldIndex, dest));

	}

	public static Calendar clear(int fieldIndex, Calendar cal) {
		Calendar result = (Calendar)cal.clone();
		switch(fieldIndex) {
			case Calendar.YEAR :
				result.set(Calendar.MONTH, cal.getMinimum(Calendar.MONTH));
				result.set(Calendar.DAY_OF_MONTH, cal.getMinimum(Calendar.DAY_OF_MONTH));
				result.set(Calendar.HOUR_OF_DAY, cal.getMinimum(Calendar.HOUR_OF_DAY));
				result.set(Calendar.MINUTE, cal.getMinimum(Calendar.MINUTE));
				result.set(Calendar.SECOND, cal.getMinimum(Calendar.SECOND));
				result.set(Calendar.MILLISECOND, cal.getMinimum(Calendar.MILLISECOND));
				break;
			case Calendar.MONTH :
				result.set(Calendar.DAY_OF_MONTH, cal.getMinimum(Calendar.DAY_OF_MONTH));
				result.set(Calendar.HOUR_OF_DAY, cal.getMinimum(Calendar.HOUR_OF_DAY));
				result.set(Calendar.MINUTE, cal.getMinimum(Calendar.MINUTE));
				result.set(Calendar.SECOND, cal.getMinimum(Calendar.SECOND));
				result.set(Calendar.MILLISECOND, cal.getMinimum(Calendar.MILLISECOND));
				break;
			case Calendar.DAY_OF_MONTH :
				result.set(Calendar.HOUR_OF_DAY, cal.getMinimum(Calendar.HOUR_OF_DAY));
				result.set(Calendar.MINUTE, cal.getMinimum(Calendar.MINUTE));
				result.set(Calendar.SECOND, cal.getMinimum(Calendar.SECOND));
				result.set(Calendar.MILLISECOND, cal.getMinimum(Calendar.MILLISECOND));
				break;
			case Calendar.HOUR_OF_DAY :
				result.set(Calendar.MINUTE, cal.getMinimum(Calendar.MINUTE));
				result.set(Calendar.SECOND, cal.getMinimum(Calendar.SECOND));
				result.set(Calendar.MILLISECOND, cal.getMinimum(Calendar.MILLISECOND));
				break;
			case Calendar.MINUTE :
				result.set(Calendar.SECOND, cal.getMinimum(Calendar.SECOND));
				result.set(Calendar.MILLISECOND, cal.getMinimum(Calendar.MILLISECOND));
				break;
			case Calendar.SECOND :
				result.set(Calendar.MILLISECOND, cal.getMinimum(Calendar.MILLISECOND));
				break;
				
		}

		return result;
	}

	public static boolean isAfter(Calendar src, Calendar dest) {

		long one = src.getTime().getTime();
		long two = dest.getTime().getTime();

		if(one < two) 
			return true;
		else 
			return false;

	}

	public static long getDateTimeToSeconds(String str) throws DateUtilException {
		return getSeconds(str, Calendar.SECOND);
	}

	public static long getSeconds(String str, int fieldIndex) throws DateUtilException {
		Calendar cal = Calendar.getInstance();
		cal.clear();

		int year = 0;
		int mon = 0;
		int day = 0;
		int hour = 0;
		int min = 0;
		int sec = 0;

		switch(fieldIndex) {
			case Calendar.YEAR :
				year = new Integer(str.substring(0, 4)).intValue();
				break;
			case Calendar.MONTH :
				year = new Integer(str.substring(0, 4)).intValue();
				mon = new Integer(str.substring(4, 6)).intValue()-1;
				break;
			case Calendar.DAY_OF_MONTH :
				year = new Integer(str.substring(0, 4)).intValue();
				mon = new Integer(str.substring(4, 6)).intValue()-1;
				day = new Integer(str.substring(6, 8)).intValue();
				break;
			case Calendar.HOUR_OF_DAY :
				year = new Integer(str.substring(0, 4)).intValue();
				mon = new Integer(str.substring(4, 6)).intValue()-1;
				day = new Integer(str.substring(6, 8)).intValue();
				hour = new Integer(str.substring(8, 10)).intValue();
				break;
			case Calendar.MINUTE :
				year = new Integer(str.substring(0, 4)).intValue();
				mon = new Integer(str.substring(4, 6)).intValue()-1;
				day = new Integer(str.substring(6, 8)).intValue();
				hour = new Integer(str.substring(8, 10)).intValue();
				min = new Integer(str.substring(10, 12)).intValue();
				break;
			case Calendar.SECOND :
				year = new Integer(str.substring(0, 4)).intValue();
				mon = new Integer(str.substring(4, 6)).intValue()-1;
				day = new Integer(str.substring(6, 8)).intValue();
				hour = new Integer(str.substring(8, 10)).intValue();
				min = new Integer(str.substring(10, 12)).intValue();
				sec = new Integer(str.substring(12, 14)).intValue();
				break;
				
		}


		if(year == cal.get(Calendar.YEAR))
			throw new DateUtilException("Invalidate Year. Check out! datetime string");
		cal.set(year, mon, day, hour, min, sec);

		if(cal.getTime().getTime() < 0)
			throw new DateUtilException("Unknown DateTime. Check out! datetime string");
		return cal.getTime().getTime()/1000;

	}

	public static String getSecondsToTime(long second) {

		long DAY = 36000*24;
		int day = (int)(second/DAY);

		Calendar cal = Calendar.getInstance();
		cal.clear();

		cal.set(Calendar.SECOND, (int)second);
		int hour = cal.get(Calendar.HOUR_OF_DAY);
		int min = cal.get(Calendar.MINUTE);
		int sec = cal.get(Calendar.SECOND);

		return mathUtil.getFillZeroFront(day*24+hour, 3) + ":" + mathUtil.getFillZeroFront(min, 2) + ":" + mathUtil.getFillZeroFront(sec, 2);
	}

	public static int getLeftDays(String date1, String date2, int fieldIndex)
	{

		long DAY = 60*60*24;
		int day = 0;
		
		try
		{
			long sec1 = getSeconds(date1, fieldIndex);
			long sec2 = getSeconds(date2, fieldIndex);	
			day = (int)((sec2-sec1)/DAY);
		}
		catch(DateUtilException duEx)
		{
		}


		return day+1;
	}	
	
	public static String getYoilNameKor() {
		Calendar cal = Calendar.getInstance();
		return YOIL_NAMES_KOR[cal.get(Calendar.DAY_OF_WEEK)-1];
	}

	public static String getYoilNameKor(int index) {
		return YOIL_NAMES_KOR[index];
	}

	public static String getMonthNameEng() {
		Calendar cal = Calendar.getInstance();
		return MONTH_NAMES_ENG[cal.get(Calendar.MONTH)];
	}

	public static String getMonthNameEng(int index) {
		return MONTH_NAMES_ENG[index];
	}

	public static boolean isLeast(int fieldIndex, Calendar cal) {
		return (getActualMaximum(cal, fieldIndex)==cal.get(fieldIndex))?true:false;
	}

	public static String toString(Calendar cal) {
		return getFormattedDate(cal) + " " + getFormattedTime(cal);
	}
	
	public static String getDateCalc(String strField, String strDate, int amount) {
		int year = Integer.valueOf(strDate.substring(0,4)).intValue();
        int month = Integer.valueOf(strDate.substring(4,6)).intValue();
		month--;
        int day = Integer.valueOf(strDate.substring(6,8)).intValue();

        Calendar cal = Calendar.getInstance();
        cal.set(year,month,day);	

		if ( strField.equals("YEAR"))
			cal.add(Calendar.YEAR, amount);
		else if ( strField.equals("MONTH"))
			cal.add(Calendar.MONTH, amount);
		else 
			cal.add(Calendar.DATE, amount);

        String strRetDate = String.valueOf(cal.get(Calendar.YEAR));

        month = cal.get(Calendar.MONTH) + 1;
        if (month < 10)
            strRetDate += "0" + String.valueOf(month);
        else
            strRetDate += String.valueOf(month);

        day = cal.get(Calendar.DATE) ;
        if (day < 10)
            strRetDate += "0" + String.valueOf(day);
        else
            strRetDate += String.valueOf(day);

        return strRetDate;

	}
    
    public static int getDayOfWeek(String strDate) {

		int year = Integer.valueOf(strDate.substring(0,4)).intValue();
	    int month = Integer.valueOf(strDate.substring(4,6)).intValue();
		month--;	// 0 : 1�� 11 : 12��....
	    int date = Integer.valueOf(strDate.substring(6,8)).intValue();
	        
	    Calendar cal = Calendar.getInstance();
	        
	    cal.set(year,month,date);
	        
	    return cal.get(Calendar.DAY_OF_WEEK);

	}

	public static String getYYYMMWeek(String yyyymmdd) {
	
		String strRet = "";
		String strDate;
		int dayOfWeekFirstday;	
		int dayTemp;
		int day;
		
		strDate  = yyyymmdd.substring(0,4);
		strDate += yyyymmdd.substring(4,6);
		strDate += "01";
		
		day = Integer.valueOf(yyyymmdd.substring(6,8)).intValue();
		
		dayOfWeekFirstday = getDayOfWeek(strDate);
		
		dayTemp = 1 + (7 - dayOfWeekFirstday);
		
		for(int i=0; i<5; i++) {
			
			if(day <= dayTemp) {
				strRet = String.valueOf(i + 1);
				break;
			}
			
			dayTemp += 7;
		}
		
		return strRet;
	}

	public static String getWeekStartEndDate(String yyyymmdd) {
		
		String strRet;
		String strStartDate;
		String strEndDate;
		int dayOfWeek; 
		
		dayOfWeek = getDayOfWeek(yyyymmdd);
		
		strStartDate 	= getDateCalc("DAY", yyyymmdd, -(dayOfWeek - 1));
		strEndDate		= getDateCalc("DAY", yyyymmdd, +(7 - dayOfWeek));
		
		strRet = strStartDate + strEndDate;
		
		return strRet;
	}
	
	public static String getLastDay(String dt) {
		
		int 	lastday;
		
		if ( dt.length() < 6 ) {
			return "";
		}
		
		int year = Integer.parseInt( dt.substring(0,4) );
		int month = Integer.parseInt( dt.substring(4,6) );
		
		if ( isLeapYear(year) )
			lastday =  ( month == 2 ) ? 29 : SOLAR_MONTH_ARRAY[ month-1 ];
		else
			lastday = SOLAR_MONTH_ARRAY[ month-1 ];
			
		return String.valueOf(lastday);
	}	
	
	/**
	 * isLeapYear
	 * @param year yyyy
	 * @return true leap year, false non-leap year
	 */
	public static boolean isLeapYear(int year) {
		return (year%400==0 || year%100!=0 && year%4==0);
	}
	
	public static String getWeekStartEndDate1(String yyyymmdd, int idx) {
		
		String strRet;
		String strStartDate;
		String strEndDate;
		int dayOfWeek;
		
		dayOfWeek = getDayOfWeek(yyyymmdd);
		dayOfWeek = dayOfWeek - idx;
		if (dayOfWeek <= 0){
			dayOfWeek = 7 - dayOfWeek;	
		}
		
		strStartDate 	= getDateCalc("DAY", yyyymmdd, -(dayOfWeek - 1));
		strEndDate		= getDateCalc("DAY", yyyymmdd, +(7 - dayOfWeek));
		
		strRet = strStartDate + strEndDate;
		
		return strRet;
	}
	
	public static Date add(Date date, int field, int amount) {

		if (date == null) {
			throw new NullPointerException("date is null");
		}

		Calendar calendar = Calendar.getInstance();
		calendar.setTime(date);
		calendar.add(field, amount);
		return calendar.getTime();
	}

	public static Date add(String str, int field, int amount) throws ParseException {
		return DateUtil.add(str, field, amount, HrmFormat.PATTERN_DATE);
	}

	public static Date add(String str, int field, int amount, String pattern) throws ParseException {

		Date date = HrmFormat.parseDate(str, pattern);

		return DateUtil.add(date, field, amount);
	}

	public static Date addDate(Date date, int amount) {
		return DateUtil.add(date, Calendar.DATE, amount);
	}

	public static Date addDate(String str, int amount) throws ParseException {
		return DateUtil.addDate(str, amount, HrmFormat.PATTERN_DATE);
	}

	public static Date addDate(String str, int amount, String pattern) throws ParseException {

		Date date = HrmFormat.parseDate(str, pattern);

		return DateUtil.addDate(date, amount);
	}
	
	public static Date addHour(Date date, int amount) {
		return DateUtil.add(date, Calendar.HOUR, amount);
	}

	public static Date addHour(String str, int amount) throws ParseException {
		return DateUtil.addHour(str, amount, HrmFormat.PATTERN_DATE_TIME);
	}

	public static Date addHour(String str, int amount, String pattern) throws ParseException {

		// HrmFormat.parseDate ���� DateUtil.isDate ����Ͽ� check �Ѵ�.
		Date date = HrmFormat.parseDate(str, pattern);

		return DateUtil.addHour(date, amount);
	}

	public static Date addMinute(Date date, int amount) {
		return DateUtil.add(date, Calendar.MINUTE, amount);
	}

	public static Date addMinute(String str, int amount) throws ParseException {
		return DateUtil.addMinute(str, amount, HrmFormat.PATTERN_DATE_TIME);
	}

	public static Date addMinute(String str, int amount, String pattern) throws ParseException {

		// HrmFormat.parseDate ���� DateUtil.isDate ����Ͽ� check �Ѵ�.
		Date date = HrmFormat.parseDate(str, pattern);

		return DateUtil.addMinute(date, amount);
	}

	public static Date addMonth(Date date, int amount) {
		return DateUtil.add(date, Calendar.MONTH, amount);
	}

	public static Date addMonth(String str, int amount) throws ParseException {
		return DateUtil.addMonth(str, amount, HrmFormat.PATTERN_DATE);
	}

	public static Date addMonth(String str, int amount, String pattern) throws ParseException {

		Date date = HrmFormat.parseDate(str, pattern);

		return DateUtil.addMonth(date, amount);
	}

	public static Date addYear(Date date, int amount) {
		return DateUtil.add(date, Calendar.YEAR, amount);
	}

	/**
	 * string ��¥�� ���� ���Ѵ�.
	 * <p><blockquote><pre>
	 *     String rightNow = "2005-07-01";
	 *     Date nextYear = DateUtil.addYear(today, 1);
	 * </pre></blockquote><p>
	 * <p>
	 * �����Ϸ��� ��¥ string �� ��¥ ����� "yyyy-MM-dd" �����̾�� �Ѵ�.
	 *
	 * @param str �����Ϸ��� ��¥ string
	 * @param amount �����Ϸ��� �ð�
	 * @return ����� ��¥
	 * @throws ParseException �����Ϸ��� string ��¥�� �������� ��¥�� �ƴϰų� string ��¥�� ���°� �߸�Ǿ��� ���.
	 */
	public static Date addYear(String str, int amount) throws ParseException {
		return DateUtil.addYear(str, amount, HrmFormat.PATTERN_DATE);
	}

	/**
	 * string ��¥�� ���� ���Ѵ�.
	 * <p><blockquote><pre>
	 *     String rightNow = "2005-07-01 10:11:30";
	 *     Date nextYear = DateUtil.addYear(today, 1, "yyyy-MM-dd HH:mm:ss");
	 * </pre></blockquote><p>
	 *
	 * @param str �����Ϸ��� ��¥ string
	 * @param amount �����Ϸ��� �ð�
	 * @param pattern ��¥ ���
	 * @return ����� ��¥
	 * @throws ParseException �����Ϸ��� string ��¥�� �������� ��¥�� �ƴϰų� string ��¥�� ���°� �߸�Ǿ��� ���.
	 */
	public static Date addYear(String str, int amount, String pattern) throws ParseException {

		// HrmFormat.parseDate ���� DateUtil.isDate ����Ͽ� check �Ѵ�.
		Date date = HrmFormat.parseDate(str, pattern);

		return DateUtil.addYear(date, amount);
	}

	/**
	 * �� ��¥ ������ ����. �� ���̴� milisecond �����̴�.
	 *
	 * @param from ���� ��¥
	 * @param to �񱳵� ��¥
	 * @return �� ��¥ ������ ����. �� ���̰� ����̸� from �� to ���� �̷��̰�, 0�̸� ������, �����̸� to �� from ���� �̷��̴�.
	 */
	// ��¥ ����
	public static long diffBetween(Date from, Date to) {

		if (from == null) {
			throw new NullPointerException("from��¥ date �� null �Դϴ�.");
		}
		if (to == null) {
			throw new NullPointerException("to��¥ date �� null �Դϴ�.");
		}

		long millisDiff = from.getTime() - to.getTime();

		return millisDiff;
	}


	public static long diffBetween(String from, String to) throws ParseException {
		return diffBetween(from, to, HrmFormat.PATTERN_DATE_TIME);
	}

	/**
	 * �� ��¥ string ������ ����. �� ���̴� milisecond �����̴�.
	 *
	 * @param from ���� ��¥ string
	 * @param to �񱳵� ��¥ string
	 * @param pattern ��¥ ���
	 * @return �� ��¥ ������ ����. �� ���̰� ����̸� from �� to ���� �̷��̰�, 0�̸� ������, �����̸� to �� from ���� �̷��̴�.
	 * @throws ParseException string ��¥�� �������� ��¥�� �ƴϰų� string ��¥�� ���°� �߸�Ǿ��� ���.
	 */
	public static long diffBetween(String from, String to, String pattern) throws ParseException {

		// HrmFormat.parseDate ���� DateUtil.isDate ����Ͽ� check �Ѵ�.
		Date fromDate = HrmFormat.parseDate(from, pattern);
		Date toDate = HrmFormat.parseDate(to, pattern);

		return DateUtil.diffBetween(fromDate, toDate);
	}

	public static int diffDayBetween(Date from, Date to) {
		long millisDiff = DateUtil.diffBetween(from, to);
		int remainder = (int) (millisDiff / (1000l * 60l * 60l * 24l));
		return remainder;
	}

	public static int diffDayBetween(String from, String to) throws ParseException {
		return diffDayBetween(from, to, HrmFormat.PATTERN_DATE);
	}

	public static int diffDayBetween(String from, String to, String pattern) throws ParseException {

		Date fromDate = HrmFormat.parseDate(from, pattern);
		Date toDate = HrmFormat.parseDate(to, pattern);

		return diffDayBetween(fromDate, toDate);
	}

	public static int diffHourBetween(Date from, Date to) {
		long millisDiff = DateUtil.diffBetween(from, to);
		int remainder = (int) (millisDiff / (1000l * 60l * 60l));
		return remainder;
	}


	public static int diffHourBetween(String from, String to) throws ParseException {
		return diffHourBetween(from, to, HrmFormat.PATTERN_DATE_TIME);
	}


	public static int diffHourBetween(String from, String to, String pattern) throws ParseException {

		Date fromDate = HrmFormat.parseDate(from, pattern);
		Date toDate = HrmFormat.parseDate(to, pattern);

		return diffHourBetween(fromDate, toDate);
	}

	public static int diffYearBetween(Date from, Date to) {
		long millisDiff = DateUtil.diffBetween(from, to);
		int remainder = (int) (millisDiff / (1000l * 60l * 60l * 24l * 365l));
		return remainder;
	}

	public static int diffYearBetween(String from, String to) throws ParseException {
		return diffYearBetween(from, to, HrmFormat.PATTERN_DATE);
	}

	public static int diffYearBetween(String from, String to, String pattern) throws ParseException {

		Date fromDate = HrmFormat.parseDate(from, pattern);
		Date toDate = HrmFormat.parseDate(to, pattern);

		return diffYearBetween(fromDate, toDate);
	}

	public static int getDay() {
		Calendar rightNow = Calendar.getInstance();
		return DateUtil.getDay(rightNow.getTime());
	}

	public static int getDay(Date date) {

		if (date == null) {
			throw new NullPointerException("��¥ date �� null �Դϴ�.");
		}

		Calendar calendar = Calendar.getInstance();
		calendar.setTime(date);
		return calendar.get(Calendar.DATE);
	}

	public static Date getEndDayOfMonth() throws ParseException {
		Calendar rightNow = Calendar.getInstance();
		return DateUtil.getEndDayOfMonth(rightNow.getTime());
	}

	
	public static Date getEndDayOfMonth(String date) throws ParseException {

		if (date == null)
			return null;

		return getEndDayOfMonth(HrmFormat.parseDate(date));
	}

	public static Date getEndDayOfMonth(Date date) throws ParseException {

		if (date == null)
			return null;

		Calendar cal = Calendar.getInstance ();
		cal.setTime(date);
		int maxDay = cal.getActualMaximum(Calendar.DATE);

		String endDay = HrmFormat.formatDate(date).substring(0, 8) + maxDay;

		return HrmFormat.parseDate(endDay);
	}

	public static Date getFirstDayOfYear() throws ParseException {

		String today = DateUtil.today();
		String thisYear = today.substring(0, 4);
		return HrmFormat.parseDate(thisYear + "-" + "01-01");
	}

	public static Date getFirstDayOfMonth() throws ParseException {

		String today = DateUtil.today();
		String thisYear = today.substring(0, 7);
		return HrmFormat.parseDate(thisYear + "-" + "01");
	}

	public static Date getMondayOfWeek() throws ParseException {

		Calendar rightNow = Calendar.getInstance();
		switch (rightNow.get(Calendar.DAY_OF_WEEK)) {

			// �Ͽ���
			case 1:

				rightNow.add(Calendar.DATE, -6);

				break;

				// �����
			case 2:

				rightNow.add(Calendar.DATE, 0);

				break;

				// ȭ����
			case 3:

				rightNow.add(Calendar.DATE, -1);

				break;

				// ������
			case 4:

				rightNow.add(Calendar.DATE, -2);

				break;

				// �����
			case 5:

				rightNow.add(Calendar.DATE, -3);

				break;

				// �ݿ���
			case 6:

				rightNow.add(Calendar.DATE, -4);

				break;

				// �����
			case 7:

				rightNow.add(Calendar.DATE, -5);

				break;
		}

		return rightNow.getTime();
	}

	/**
	 * ��¥�� �ش��ϴ� ���� object <code>LunarCalendar</code> �� ���Ѵ�.
	 *
	 * @param date �����Ϸ��� ��¥
	 * @return ��¥�� �ش��ϴ� ���� object
	 */
	public static LunarCalendar getLunarCalendar(Date date) {
		if (date == null) {
			throw new NullPointerException("��¥ date �� null �Դϴ�.");
		}

		return new LunarCalendar(
			DateUtil.getYear(date),
			DateUtil.getMonth(date),
			DateUtil.getDay(date));
	}

	/**
	 * ��¥ string �� �ش��ϴ� ���� object <code>LunarCalendar</code> �� ���Ѵ�.
	 * <p>
	 * �����Ϸ��� ��¥ string �� ��¥ ����� "yyyy-MM-dd" �����̾�� �Ѵ�.
	 *
	 * @param str �����Ϸ��� ��¥ string
	 * @return ��¥�� �ش��ϴ� ���� object
	 * @throws ParseException �����Ϸ��� string ��¥�� �������� ��¥�� �ƴϰų� string ��¥�� ���°� �߸�Ǿ��� ���.
	 */
	public static LunarCalendar getLunarCalendar(String str) throws ParseException {
		return getLunarCalendar(str, HrmFormat.PATTERN_DATE);
	}

	/**
	 * ��¥ string �� �ش��ϴ� ���� object <code>LunarCalendar</code> �� ���Ѵ�.
	 *
	 * @param str �����Ϸ��� ��¥ string
	 * @param pattern ��¥ ���
	 * @return ��¥�� �ش��ϴ� ���� object
	 * @throws ParseException �����Ϸ��� string ��¥�� �������� ��¥�� �ƴϰų� string ��¥�� ���°� �߸�Ǿ��� ���.
	 */
	public static LunarCalendar getLunarCalendar(String str, String pattern) throws ParseException {

		// HrmFormat.parseDate ���� DateUtil.isDate ����Ͽ� check �Ѵ�.
		Date date = HrmFormat.parseDate(str, pattern);

		return DateUtil.getLunarCalendar(date);
	}

	/**
	 * ��¥�� �ش��ϴ� ���� ��¥�� ���Ѵ�.
	 *
	 * @param date �����Ϸ��� ��¥
	 * @return ��¥�� �ش��ϴ� ���� ��¥
	 */
	public static Date getLunarDate(Date date) {
		if (date == null) {
			throw new NullPointerException("��¥ date �� null �Դϴ�.");
		}

		LunarCalendar lc =
			new LunarCalendar(
				DateUtil.getYear(date),
				DateUtil.getMonth(date),
				DateUtil.getDay(date));

		Calendar calendar = Calendar.getInstance();
		calendar.set(lc.getYear(), lc.getMonth() - 1, lc.getDate());
		// month ���� 1���� 0�̹Ƿ� -1�� ���ش�.

		return calendar.getTime();
	}

	/**
	 * ��¥ string �� �ش��ϴ� ���� ��¥�� ���Ѵ�.
	 * <p>
	 * �����Ϸ��� ��¥ string �� ��¥ ����� "yyyy-MM-dd" �����̾�� �Ѵ�.
	 *
	 * @param str �����Ϸ��� ��¥ string
	 * @return ��¥�� �ش��ϴ� ���� ��¥
	 * @throws ParseException �����Ϸ��� string ��¥�� �������� ��¥�� �ƴϰų� string ��¥�� ���°� �߸�Ǿ��� ���.
	 */
	public static Date getLunarDate(String str) throws ParseException {
		return DateUtil.getLunarDate(str, HrmFormat.PATTERN_DATE);
	}

	/**
	 * ��¥ string �� �ش��ϴ� ���� ��¥�� ���Ѵ�.
	 *
	 * @param str �����Ϸ��� ��¥ string
	 * @param pattern ��¥ ���
	 * @return ��¥�� �ش��ϴ� ���� ��¥
	 * @throws ParseException �����Ϸ��� string ��¥�� �������� ��¥�� �ƴϰų� string ��¥�� ���°� �߸�Ǿ��� ���.
	 */
	public static Date getLunarDate(String str, String pattern) throws ParseException {
		Date date = HrmFormat.parseDate(str, pattern);
		return DateUtil.getLunarDate(date);
	}

	/**
	 * ������ ��.
	 *
	 * @return ������ ��
	 */

	public static int getAm_pm() {
		Calendar rightNow = Calendar.getInstance();
		return rightNow.get(Calendar.AM_PM);
	}
	
	public static int getHour() {
		Calendar rightNow = Calendar.getInstance();
		return rightNow.get(Calendar.HOUR);
	}
	
	public static int getMinute() {
		Calendar rightNow = Calendar.getInstance();
		return rightNow.get(Calendar.MINUTE);
	}

	public static int getSecond() {
		Calendar rightNow = Calendar.getInstance();
		return rightNow.get(Calendar.SECOND);
	}

	public static int getMonth() {
		Calendar rightNow = Calendar.getInstance();
		return DateUtil.getMonth(rightNow.getTime());
	}

/**
	 * Ư�� ��¥�� ��.
	 *
	 * @param date Ư�� ��¥
	 * @return Ư�� ��¥�� ��
	 */
	public static int getMonth(Date date) {

		if (date == null) {
			throw new NullPointerException("��¥ date �� null �Դϴ�.");
		}

		Calendar calendar = Calendar.getInstance();
		calendar.setTime(date);
		return calendar.get(Calendar.MONTH) + 1;
	}

	/**
	 * ������ ����.
	 *
	 * @return ������ ����
	 */
	public static String getWeekday() {
		Calendar rightNow = Calendar.getInstance();
		return DateUtil.getWeekday(rightNow.getTime());
	}

	/**
	 * Ư�� ��¥�� ����.
	 *
	 * @param date Ư�� ��¥
	 * @return Ư�� ��¥�� ����
	 */
	public static String getWeekday(Date date) {

		if (date == null) {
			throw new NullPointerException("��¥ date �� null �Դϴ�.");
		}

		String day = null;

		Calendar calendar = Calendar.getInstance();
		calendar.setTime(date);
		int weekday = calendar.get(Calendar.DAY_OF_WEEK);
		switch (weekday) {
			case Calendar.SUNDAY:
				day = "�Ͽ���";
				break;
			case Calendar.MONDAY:
				day = "�����";
				break;
			case Calendar.TUESDAY:
				day = "ȭ����";
				break;
			case Calendar.WEDNESDAY:
				day = "������";
				break;
			case Calendar.THURSDAY:
				day = "�����";
				break;
			case Calendar.FRIDAY:
				day = "�ݿ���";
				break;
			case Calendar.SATURDAY:
				day = "�����";
				break;
		}

		return day;
	}

	/**
	 * Ư�� ��¥ string �� ����.
	 * <p>
	 * �����Ϸ��� ��¥ string �� ��¥ ����� "yyyy-MM-dd" �����̾�� �Ѵ�.
	 *
	 * @param str Ư�� ��¥ string
	 * @return Ư�� ��¥�� ����
	 * @throws ParseException string ��¥�� �������� ��¥�� �ƴϰų� string ��¥�� ���°� �߸�Ǿ��� ���.
	 */
	public static String getWeekday(String str) throws ParseException {
		return getWeekday(str, HrmFormat.PATTERN_DATE);
	}

	/**
	 * Ư�� ��¥ string �� ����.
	 *
	 * @param str Ư�� ��¥ string
	 * @param pattern ��¥ ���
	 * @return Ư�� ��¥�� ����
	 * @throws ParseException string ��¥�� �������� ��¥�� �ƴϰų� string ��¥�� ���°� �߸�Ǿ��� ���.
	 */
	public static String getWeekday(String str, String pattern) throws ParseException {

		// HrmFormat.parseDate ���� DateUtil.isDate ����Ͽ� check �Ѵ�.
		Date date = HrmFormat.parseDate(str, pattern);

		return DateUtil.getWeekday(date);
	}

	/**
	 * ���� ����.
	 *
	 * @return ���� ����
	 */
	public static int getYear() {
		Calendar rightNow = Calendar.getInstance();
		return DateUtil.getYear(rightNow.getTime());
	}

	/**
	 * Ư�� ��¥�� ����.
	 *
	 * @param date Ư�� ��¥
	 * @return Ư�� ��¥�� ����
	 */
	public static int getYear(Date date) {

		if (date == null) {
			throw new NullPointerException("��¥ date �� null �Դϴ�.");
		}

		Calendar calendar = Calendar.getInstance();
		calendar.setTime(date);
		return calendar.get(Calendar.YEAR);
	}

	/**
	 * ��¥���� ���İ��.
	 *
	 * @param from ���� ��¥
	 * @param to �񱳵� ��¥
	 * @return ��¥���� ���İ��. ���� ��¥�� �񱳵� ��¥ ���� ����̰ų� �����ϸ� true, �׷��� ������ false �� ��ȯ�Ѵ�.
	 */
	public static boolean isCorrectOrder(Date from, Date to) {

		if (from == null) {
			throw new NullPointerException("from��¥ date �� null �Դϴ�.");
		}
		if (to == null) {
			throw new NullPointerException("to��¥ date �� null �Դϴ�.");
		}

		boolean isCorrectOrder = true;

		//		diff == 0 // ����.
		//		diff < 0 // from �� ����
		//		diff > 0 // from �� ŭ

		int diff = from.compareTo(to);
		if (diff > 0) {
			isCorrectOrder = false;
		}

		return isCorrectOrder;
	}

	/**
	 * ��¥ string ���� ���İ��.
	 * <p>
	 * �����Ϸ��� ��¥ string �� ��¥ ����� "yyyy-MM-dd" �����̾�� �Ѵ�.
	 *
	 * @param from ���� ��¥ string
	 * @param to �񱳵� ��¥ string
	 * @return ��¥���� ���İ��. ���� ��¥�� �񱳵� ��¥ ���� ����̰ų� �����ϸ� true, �׷��� ������ false �� ��ȯ�Ѵ�.
	 * @throws ParseException string ��¥�� �������� ��¥�� �ƴϰų� string ��¥�� ���°� �߸�Ǿ��� ���.
	 */
	public static boolean isCorrectOrder(String from, String to) throws ParseException {
		return isCorrectOrder(from, to, HrmFormat.PATTERN_DATE);
	}

	/**
	 * ��¥ string ���� ���İ��.
	 *
	 * @param from ���� ��¥ string
	 * @param to �񱳵� ��¥ string
	 * @param pattern ��¥ ���
	 * @return ��¥���� ���İ��. ���� ��¥�� �񱳵� ��¥ ���� ����̰ų� �����ϸ� true, �׷��� ������ false �� ��ȯ�Ѵ�.
	 * @throws ParseException string ��¥�� �������� ��¥�� �ƴϰų� string ��¥�� ���°� �߸�Ǿ��� ���.
	 */
	public static boolean isCorrectOrder(
		String from,
		String to,
		String pattern) throws ParseException {

		// HrmFormat.parseDate ���� DateUtil.isDate ����Ͽ� check �Ѵ�.
		Date fromDate = HrmFormat.parseDate(from, pattern);
		Date toDate = HrmFormat.parseDate(to, pattern);

		return isCorrectOrder(fromDate, toDate);
	}

	/**
	 * ��¥���� ���İ��.
	 *
	 * @param from ���� ��¥
	 * @param to �񱳵� ��¥
	 * @return ��¥���� ���İ��. ���� ��¥�� �񱳵� ��¥ ���� ����϶��� true, �׷��� ������ false �� ��ȯ�Ѵ�.
	 */
	public static boolean isCorrectOrderExceptSame(Date from, Date to) {

		if (from == null) {
			throw new NullPointerException("from��¥ date �� null �Դϴ�.");
		}
		if (to == null) {
			throw new NullPointerException("to��¥ date �� null �Դϴ�.");
		}

		boolean isCorrectOrder = true;

		int diff = from.compareTo(to);
		if (diff >= 0) {
			isCorrectOrder = false;
		}

		return isCorrectOrder;
	}

	/**
	 * ��¥ string ���� ���İ��.
	 * <p>
	 * �����Ϸ��� ��¥ string �� ��¥ ����� "yyyy-MM-dd" �����̾�� �Ѵ�.
	 *
	 * @param from ���� ��¥ string
	 * @param to �񱳵� ��¥ string
	 * @return ��¥���� ���İ��. ���� ��¥�� �񱳵� ��¥ ���� ����϶��� true, �׷��� ������ false �� ��ȯ�Ѵ�.
	 * @throws ParseException string ��¥�� �������� ��¥�� �ƴϰų� string ��¥�� ���°� �߸�Ǿ��� ���.
	 */
	public static boolean isCorrectOrderExceptSame(String from, String to) throws ParseException {
		return isCorrectOrderExceptSame(from, to, HrmFormat.PATTERN_DATE);
	}

	/**
	 * ��¥ string ���� ���İ��.
	 *
	 * @param from ���� ��¥ string
	 * @param to �񱳵� ��¥ string
	 * @param pattern ��¥ ���
	 * @return ��¥���� ���İ��. ���� ��¥�� �񱳵� ��¥ ���� ����϶��� true, �׷��� ������ false �� ��ȯ�Ѵ�.
	 * @throws ParseException string ��¥�� �������� ��¥�� �ƴϰų� string ��¥�� ���°� �߸�Ǿ��� ���.
	 */
	public static boolean isCorrectOrderExceptSame(
		String from,
		String to,
		String pattern) throws ParseException {

		// HrmFormat.parseDate ���� DateUtil.isDate ����Ͽ� check �Ѵ�.
		Date fromDate = HrmFormat.parseDate(from, pattern);
		Date toDate = HrmFormat.parseDate(to, pattern);

		return isCorrectOrderExceptSame(fromDate, toDate);
	}

	/**
	 * ��¥ string �ùٸ� ��¥���� Ȯ��.
	 * <p>
	 * �����Ϸ��� ��¥ string �� ��¥ ����� "yyyy-MM-dd" �����̾�� �Ѵ�.
	 *
	 * @param str Ȯ���� ��¥ string
	 * @return ��¥�� �ùٸ��� ����
	 * @throws ParseException string ��¥�� �������� ��¥�� �ƴϰų� string ��¥�� ���°� �߸�Ǿ��� ���.
	 */
	public static boolean isDate(String str) throws ParseException {
		return DateUtil.isDate(str, HrmFormat.PATTERN_DATE);
	}

	/**
	 * ��¥ string �ùٸ� ��¥���� Ȯ��.
	 *
	 * @param str Ȯ���� ��¥ string
	 * @param pattern ��¥ ���
	 * @return ��¥�� �ùٸ��� ����
	 * @throws ParseException string ��¥�� �������� ��¥�� �ƴϰų� string ��¥�� ���°� �߸�Ǿ��� ���.
	 */
	public static boolean isDate(String str, String pattern) throws ParseException {

		if (str == null) {
			throw new NullPointerException("��¥ string �� null �Դϴ�.");
		}

		if (pattern == null) {
			throw new NullPointerException("��¥ ���� string �� null �Դϴ�.");
		}

		boolean isDate = false;
		SimpleDateFormat sdf = new SimpleDateFormat(pattern);
		try {
			Date date = sdf.parse(str);

			if (str.equals(sdf.format(date))) {
				isDate = true;
			}
		}
		catch (ParseException e) {
			throw new ParseException("�Է��� ��¥[" + str + "]�� ��¥ ����[" + pattern + "]�� ��ġ���� �ʽ��ϴ�.", 0);
		}

		return isDate;
	}

	/**
	 * Ư�� ��¥�� ���纸�� �̷����� ����.
	 *
	 * @param date Ư�� ��¥
	 * @return ���纸�� �̷����� ����
	 */
	public static boolean isFuture(Date date) {
		Date rightNow = DateUtil.rightNow();
		boolean isFuture = DateUtil.isCorrectOrderExceptSame(rightNow, date);

		// ����Ϸθ� üũ�ϱ� ���� ����
		if (isFuture) {
			if (HrmFormat
				.formatDate(date)
				.equals(HrmFormat.formatDate(rightNow))) {
				isFuture = false;
			}
		}

		return isFuture;
	}

	/**
	 * Ư�� ��¥ string �� ���纸�� �̷����� ����.
	 * <p>
	 * �����Ϸ��� ��¥ string �� ��¥ ����� "yyyy-MM-dd" �����̾�� �Ѵ�.
	 *
	 * @param str Ư�� ��¥ string
	 * @return ���纸�� �̷����� ����
	 * @throws ParseException string ��¥�� �������� ��¥�� �ƴϰų� string ��¥�� ���°� �߸�Ǿ��� ���.
	 */
	public static boolean isFuture(String str) throws ParseException {
		return DateUtil.isFuture(str, HrmFormat.PATTERN_DATE);
	}

	/**
	 * Ư�� ��¥ string �� ���纸�� �̷����� ����.
	 *
	 * @param str Ư�� ��¥ string
	 * @param pattern ��¥ ���
	 * @return ���纸�� �̷����� ����
	 * @throws ParseException string ��¥�� �������� ��¥�� �ƴϰų� string ��¥�� ���°� �߸�Ǿ��� ���.
	 */
	public static boolean isFuture(String str, String pattern) throws ParseException {

		// HrmFormat.parseDate ���� DateUtil.isDate ����Ͽ� check �Ѵ�.
		Date date = HrmFormat.parseDate(str, pattern);

		return DateUtil.isFuture(date);
	}

	/**
	 * Ư�� ��¥�� ���纸�� ������� ����.
	 *
	 * @param date Ư�� ��¥
	 * @return ���纸�� ������� ����
	 */
	public static boolean isPast(Date date) {
		Date rightNow = DateUtil.rightNow();
		boolean isPast = DateUtil.isCorrectOrderExceptSame(date, rightNow);

		// ����Ϸθ� üũ�ϱ� ���� ����
		if (isPast) {
			if (HrmFormat
				.formatDate(date)
				.equals(HrmFormat.formatDate(rightNow))) {
				isPast = false;
			}
		}

		return isPast;
	}

	/**
	 * Ư�� ��¥ string �� ���纸�� ������� ����.
	 * <p>
	 * �����Ϸ��� ��¥ string �� ��¥ ����� "yyyy-MM-dd" �����̾�� �Ѵ�.
	 *
	 * @param str Ư�� ��¥ string
	 * @return ���纸�� ������� ����
	 * @throws ParseException string ��¥�� �������� ��¥�� �ƴϰų� string ��¥�� ���°� �߸�Ǿ��� ���.
	 */
	public static boolean isPast(String str) throws ParseException {
		return DateUtil.isPast(str, HrmFormat.PATTERN_DATE);
	}

	/**
	 * Ư�� ��¥ string �� ���纸�� ������� ����.
	 *
	 * @param str Ư�� ��¥ string
	 * @param pattern ��¥ ���
	 * @return ���纸�� ������� ����
	 * @throws ParseException string ��¥�� �������� ��¥�� �ƴϰų� string ��¥�� ���°� �߸�Ǿ��� ���.
	 */
	public static boolean isPast(String str, String pattern) throws ParseException {

		// HrmFormat.parseDate ���� DateUtil.isDate ����Ͽ� check �Ѵ�.
		Date date = HrmFormat.parseDate(str, pattern);

		return DateUtil.isPast(date);
	}

	/**
	 * ���� �ð�. ǥ�����´� HH:mm:ss �̴�.
	 *
	 * @return ���� �ð�
	 */
	public static String now() {
		Date rightNow = DateUtil.rightNow();
		return HrmFormat.formatDate(rightNow, HrmFormat.PATTERN_TIME);
	}

	/**
	 * ���� ��¥.
	 *
	 * @return ���� ��¥
	 */
	public static Date rightNow() {
		Calendar rightNow = Calendar.getInstance();
		return rightNow.getTime();
	}

	/**
	 * ���� ����. ǥ�����´� "yyyy-MM-dd" �̴�.
	 *
	 * @return ���� ����
	 */
	public static String today() {
		return DateUtil.today(HrmFormat.PATTERN_DATE);
	}

	/**
	 * ���� ����.
	 *
	 * @param pattern ��¥ ���
	 * @return ���� ����
	 */
	public static String today(String pattern) {
		Date rightNow = DateUtil.rightNow();
		return HrmFormat.formatDate(rightNow, pattern);
	}

	/**
	 * ���� ���� �� �ð�. ǥ�����´� "yyyy-MM-dd HH:mm:ss" �̴�.
	 *
	 * @return ���� ���� �� �ð�
	 */
	public static String todayWithTime() {
		Date rightNow = DateUtil.rightNow();
		return HrmFormat.formatDate(rightNow, HrmFormat.PATTERN_DATE_TIME);
	}

	/*
	 public static Date getEndDayOfYear() throws ParseException {
	  Date rightNow = DateUtil.rightNow();
	  return DateUtil.getEndDayOfYear(rightNow);
	 }

	 public static Date getEndDayOfYear(Date date) throws ParseException {
	  String year = HrmFormat.formatDate(date).substring(0, 4);
	  return HrmFormat.parseDate(year + "-" + "12-31");
	 }




	 */
	
	
	/**
	 * check date string validation with the default format "yyyyMMdd".
	 * @param s date string you want to check with default format "yyyyMMdd".
   * @return date java.util.Date
	 */
	public static java.util.Date check(String s) throws java.text.ParseException {
		return check(s, "yyyyMMdd");
	}

	/**
	 * check date string validation with an user defined format.
	 * @param s date string you want to check.
	 * @param format string representation of the date format. For example, "yyyyMMdd".
     * @return date java.util.Date
	 */
	public static java.util.Date check(String s, String format) throws java.text.ParseException {
		if ( s == null )
			throw new java.text.ParseException("date string to check is null", 0);
		if ( format == null )
			throw new java.text.ParseException("format string to check date is null", 0);

		java.text.SimpleDateFormat formatter = new java.text.SimpleDateFormat (format, java.util.Locale.KOREA);
		java.util.Date date = null;

		try {
			date = formatter.parse(s);
		}catch(java.text.ParseException e) {
            /*
			throw new java.text.ParseException(
				e.getMessage() + " with format \"" + format + "\"",
				e.getErrorOffset()
			);
            */
                    throw new java.text.ParseException(" wrong date:\"" + s +
            "\" with format \"" + format + "\"", 0);
		}

		if ( ! formatter.format(date).equals(s) )
			throw new java.text.ParseException(
				"Out of bound date:\"" + s + "\" with format \"" + format + "\"",
				0
			);

    return date;
	}

	/**
	 * check date string validation with the default format "yyyyMMdd".
	 * @param s date string you want to check with default format "yyyyMMdd"
	 * @return boolean true ��¥ ����� �°�, �����ϴ� ��¥�� ��
	 *                 false ��¥ ����� ���� �ʰų�, �������� �ʴ� ��¥�� ��
	 */
	public static boolean isValid(String s) throws Exception {
		return isValid(s, "yyyyMMdd");
	}

	/**
	 * check date string validation with an user defined format.
	 * @param s date string you want to check.
	 * @param format string representation of the date format. For example, "yyyyMMdd".
	 * @return boolean true ��¥ ����� �°�, �����ϴ� ��¥�� ��
	 *                 false ��¥ ����� ���� �ʰų�, �������� �ʴ� ��¥�� ��
	 */
	public static boolean isValid(String s, String format) {
/*
		if ( s == null )
			throw new NullPointerException("date string to check is null");
		if ( format == null )
			throw new NullPointerException("format string to check date is null");
*/
		java.text.SimpleDateFormat formatter =
		    new java.text.SimpleDateFormat (format, java.util.Locale.KOREA);
		java.util.Date date = null;
		try {
			date = formatter.parse(s);
		}
		catch(java.text.ParseException e) {
    	return false;
		}

		if ( ! formatter.format(date).equals(s) )
    	return false;

		return true;
	}

	/**
	 *
	 * For example, String date = DateTime.getDateString();
	 *
	 * @return formatted string representation of current day with  "yyyyMMdd".
	 */
	public static String getDateString() {
		java.text.SimpleDateFormat formatter =
            new java.text.SimpleDateFormat("yyyyMMdd", java.util.Locale.KOREA);
		return formatter.format(new java.util.Date());
	}

		/**
	 *
	 * For example, int year = DateTime.getNumberByPattern("yyyy");
	 *
	 * @param java.lang.String pattern  "yyyy, MM, dd, HH, mm, ss and more"
	 * @return formatted string representation of current day and time with your pattern.
	 */
	public static int getNumberByPattern(String pattern) {
		java.text.SimpleDateFormat formatter =
            new java.text.SimpleDateFormat (pattern, java.util.Locale.KOREA);
		String dateString = formatter.format(new java.util.Date());
		return Integer.parseInt(dateString);
	}

	/**
	 *
	 * For example, String time = DateTime.getFormatString("yyyyMMdd HH:mm:ss");
	 *
	 * @param java.lang.String pattern  "yyyy, MM, dd, HH, mm, ss and more"
	 * @return formatted string representation of current day and time with  your pattern.
	 */
	public static String getFormatString(String pattern) {
		java.text.SimpleDateFormat formatter =
            new java.text.SimpleDateFormat (pattern, java.util.Locale.KOREA);
		String dateString = formatter.format(new java.util.Date());
		return dateString;
	}

	/**
	 * @return formatted string representation of current day with  "yyyyMMdd".
	 */
	public static String getShortDateString() {
		java.text.SimpleDateFormat formatter =
            new java.text.SimpleDateFormat ("yyyyMMdd", java.util.Locale.KOREA);
		return formatter.format(new java.util.Date());
	}

	/**
	 * @return formatted string representation of current time with  "HHmmss".
	 */
	public static String getShortTimeString() {
		java.text.SimpleDateFormat formatter =
            new java.text.SimpleDateFormat ("HHmmss", java.util.Locale.KOREA);
		return formatter.format(new java.util.Date());
	}

	/**
	 * @return formatted string representation of current time with  "yyyyMMdd HH:mm:ss".
	 */
	public static String getTimeStampString() {
		java.text.SimpleDateFormat formatter =
            new java.text.SimpleDateFormat ("yyyyMMdd HH:mm:ss:SSS", java.util.Locale.KOREA);
		return formatter.format(new java.util.Date());
	}

	/**
	 * @return formatted string representation of current time with  "HH:mm:ss".
	 */
	public static String getTimeString() {
		java.text.SimpleDateFormat formatter =
            new java.text.SimpleDateFormat ("HH:mm:ss", java.util.Locale.KOREA);
		return formatter.format(new java.util.Date());
	}

	/**
	 * return days between two date strings with default defined format.(yyyyMMdd)
	 * @param s date string you want to check.
	 * @return int ��¥ ����� �°�, �����ϴ� ��¥�� �� ������ ����
	 *           ����� �߸� �Ǿ�ų� �������� �ʴ� ��¥: java.text.ParseException �߻�
	 *          1: �Ͽ��� (java.util.Calendar.SUNDAY �� ��)
	 *          2: ����� (java.util.Calendar.MONDAY �� ��)
	 *          3: ȭ���� (java.util.Calendar.TUESDAY �� ��)
	 *          4: ������ (java.util.Calendar.WENDESDAY �� ��)
	 *          5: ����� (java.util.Calendar.THURSDAY �� ��)
	 *          6: �ݿ��� (java.util.Calendar.FRIDAY �� ��)
	 *          7: ����� (java.util.Calendar.SATURDAY �� ��)
	 * ��) String s = "2000-05-29";
	 *  int dayOfWeek = whichDay(s, format);
	 *  if (dayOfWeek == java.util.Calendar.MONDAY)
	 *      System.out.println(" �����: " + dayOfWeek);
	 *  if (dayOfWeek == java.util.Calendar.TUESDAY)
	 *      System.out.println(" ȭ����: " + dayOfWeek);
	 */
  public static int whichDay(String s) throws java.text.ParseException {
  	return whichDay(s, "yyyyMMdd");
  }

	/**
	 * return days between two date strings with user defined format.
	 * @param s date string you want to check.
	 * @param format string representation of the date format. For example, "yyyyMMdd".
	 * @return int ��¥ ����� �°�, �����ϴ� ��¥�� �� ������ ����
	 *           ����� �߸� �Ǿ�ų� �������� �ʴ� ��¥: java.text.ParseException �߻�
	 *          1: �Ͽ��� (java.util.Calendar.SUNDAY �� ��)
	 *          2: ����� (java.util.Calendar.MONDAY �� ��)
	 *          3: ȭ���� (java.util.Calendar.TUESDAY �� ��)
	 *          4: ������ (java.util.Calendar.WENDESDAY �� ��)
	 *          5: ����� (java.util.Calendar.THURSDAY �� ��)
	 *          6: �ݿ��� (java.util.Calendar.FRIDAY �� ��)
	 *          7: ����� (java.util.Calendar.SATURDAY �� ��)
	 * ��) String s = "2000-05-29";
	 *  int dayOfWeek = whichDay(s, "yyyyMMdd");
	 *  if (dayOfWeek == java.util.Calendar.MONDAY)
	 *      System.out.println(" �����: " + dayOfWeek);
	 *  if (dayOfWeek == java.util.Calendar.TUESDAY)
	 *      System.out.println(" ȭ����: " + dayOfWeek);
	 */
  public static int whichDay(String s, String format) throws java.text.ParseException {
		java.text.SimpleDateFormat formatter =
			new java.text.SimpleDateFormat (format, java.util.Locale.KOREA);
		java.util.Date date = check(s, format);

    java.util.Calendar calendar = formatter.getCalendar();
    calendar.setTime(date);
    return calendar.get(java.util.Calendar.DAY_OF_WEEK);
  }

	/**
	 * return days between two date strings with default defined format.("yyyyMMdd")
	 * @param String from date string
	 * @param String to date string
	 * @return int ��¥ ����� �°�, �����ϴ� ��¥�� �� 2�� ���� ������ ���� ����
	 *           ����� �߸� �Ǿ�ų� �������� �ʴ� ��¥: java.text.ParseException �߻�
	 */
  public static int daysBetween(String from, String to) throws java.text.ParseException {
		return daysBetween(from, to, "yyyyMMdd");
  }

	/**
	 * return days between two date strings with user defined format.
	 * @param String from date string
	 * @param String to date string
	 * @return int ��¥ ����� �°�, �����ϴ� ��¥�� �� 2�� ���� ������ ���� ����
	 *           ����� �߸� �Ǿ�ų� �������� �ʴ� ��¥: java.text.ParseException �߻�
	 */
  public static int daysBetween(String from, String to, String format) throws java.text.ParseException {
    //java.text.SimpleDateFormat formatter =
    //new java.text.SimpleDateFormat (format, java.util.Locale.KOREA);
    java.util.Date d1 = check(from, format);
    java.util.Date d2 = check(to, format);

    long duration = d2.getTime() - d1.getTime();

    return (int)( duration/(1000 * 60 * 60 * 24) );
    // seconds in 1 day
  }

	/**
	 * return age between two date strings with default defined format.("yyyyMMdd")
	 * @param String from date string
	 * @param String to date string
	 * @return int ��¥ ����� �°�, �����ϴ� ��¥�� �� 2�� ���� ������ ���� ����
	 *           ����� �߸� �Ǿ�ų� �������� �ʴ� ��¥: java.text.ParseException �߻�
	 */
  public static int ageBetween(String from, String to) throws java.text.ParseException {
		return ageBetween(from, to, "yyyyMMdd");
  }

	/**
	 * return age between two date strings with user defined format.
	 * @param String from date string
	 * @param String to date string
	 * @param format string representation of the date format. For example, "yyyyMMdd".
	 * @return int ��¥ ����� �°�, �����ϴ� ��¥�� �� 2�� ���� ������ ���� ����
	 *           ����� �߸� �Ǿ�ų� �������� �ʴ� ��¥: java.text.ParseException �߻�
	 */
  public static int ageBetween(String from, String to, String format) throws java.text.ParseException {
		return (int)(daysBetween(from, to, format) / 365 );
  }

	/**
	 * return add day to date strings
	 * @param String date string
	 * @param int ���� �ϼ�
	 * @return int ��¥ ����� �°�, �����ϴ� ��¥�� �� �ϼ� ���ϱ�
	 *           ����� �߸� �Ǿ�ų� �������� �ʴ� ��¥: java.text.ParseException �߻�
	 */
  public static String addDays(String s, int day) throws java.text.ParseException {
		return addDays(s, day, "yyyyMMdd");
  }

	/**
	 * return add day to date strings with user defined format.
	 * @param String date string
	 * @param int ���� �ϼ�
	 * @param format string representation of the date format. For example, "yyyyMMdd".
	 * @return int ��¥ ����� �°�, �����ϴ� ��¥�� �� �ϼ� ���ϱ�
	 *           ����� �߸� �Ǿ�ų� �������� �ʴ� ��¥: java.text.ParseException �߻�
	 */
  public static String addDays(String s, int day, String format) throws java.text.ParseException{
		java.text.SimpleDateFormat formatter =
			new java.text.SimpleDateFormat (format, java.util.Locale.KOREA);
		java.util.Date date = check(s, format);

    date.setTime(date.getTime() + ((long)day * 1000 * 60 * 60 * 24));
    return formatter.format(date);
  }

	/**
	 * return add month to date strings
	 * @param String date string
	 * @param int ���� ���
	 * @return int ��¥ ����� �°�, �����ϴ� ��¥�� �� ��� ���ϱ�
	 *           ����� �߸� �Ǿ�ų� �������� �ʴ� ��¥: java.text.ParseException �߻�
	 */
  public static String addMonths(String s, int month) throws Exception {
		return addMonths(s, month, "yyyyMMdd");
  }

	/**
	 * return add month to date strings with user defined format.
	 * @param String date string
	 * @param int ���� ���
	 * @param format string representation of the date format. For example, "yyyyMMdd".
	 * @return int ��¥ ����� �°�, �����ϴ� ��¥�� �� ��� ���ϱ�
	 *           ����� �߸� �Ǿ�ų� �������� �ʴ� ��¥: java.text.ParseException �߻�
	 */
  public static String addMonths(String s, int addMonth, String format) throws Exception {
		java.text.SimpleDateFormat formatter =
			new java.text.SimpleDateFormat (format, java.util.Locale.KOREA);
		java.util.Date date = check(s, format);

		java.text.SimpleDateFormat yearFormat =
			new java.text.SimpleDateFormat("yyyy", java.util.Locale.KOREA);
		java.text.SimpleDateFormat monthFormat =
			new java.text.SimpleDateFormat("MM", java.util.Locale.KOREA);
		java.text.SimpleDateFormat dayFormat =
			new java.text.SimpleDateFormat("dd", java.util.Locale.KOREA);
		int year = Integer.parseInt(yearFormat.format(date));
		int month = Integer.parseInt(monthFormat.format(date));
		int day = Integer.parseInt(dayFormat.format(date));

		month += addMonth;
		if (addMonth > 0) {
			while (month > 12) {
				month -= 12;
				year += 1;
			}
		} else {
			while (month <= 0) {
				month += 12;
				year -= 1;
			}
		}

		java.text.DecimalFormat fourDf = new java.text.DecimalFormat("0000");
		java.text.DecimalFormat twoDf = new java.text.DecimalFormat("00");
		String tempDate = String.valueOf(fourDf.format(year))
      + String.valueOf(twoDf.format(month))
      + String.valueOf(twoDf.format(day));
		java.util.Date targetDate = null;

    try {
			targetDate = check(tempDate, "yyyyMMdd");
    } catch(java.text.ParseException pe) {
      day = lastDay(year, month);
      tempDate = String.valueOf(fourDf.format(year))
        + String.valueOf(twoDf.format(month))
        + String.valueOf(twoDf.format(day));
      targetDate = check(tempDate, "yyyyMMdd");
    }

		return formatter.format(targetDate);
  }

	/**
	 * return add year to date strings
	 * @param String date string
	 * @param int ���� ����
	 * @return int ��¥ ����� �°�, �����ϴ� ��¥�� �� ���� ���ϱ�
	 *           ����� �߸� �Ǿ�ų� �������� �ʴ� ��¥: java.text.ParseException �߻�
	 */
  public static String addYears(String s, int year) throws java.text.ParseException {
		return addYears(s, year, "yyyyMMdd");
  }

	/**
	 * return add year to date strings with user defined format.
	 * @param String date string
	 * @param int ���� ����
	 * @param format string representation of the date format. For example, "yyyyMMdd".
	 * @return int ��¥ ����� �°�, �����ϴ� ��¥�� �� ���� ���ϱ�
	 *           ����� �߸� �Ǿ�ų� �������� �ʴ� ��¥: java.text.ParseException �߻�
	 */
  public static String addYears(String s, int year, String format) throws java.text.ParseException {
		java.text.SimpleDateFormat formatter =
			new java.text.SimpleDateFormat (format, java.util.Locale.KOREA);
		java.util.Date date = check(s, format);
		date.setTime(date.getTime() + ((long)year * 1000 * 60 * 60 * 24 * (365 + 1)));
		return formatter.format(date);
  }

	/**
	 * return months between two date strings.
	 * @param String from date string
	 * @param String to date string
	 * @return int ��¥ ����� �°�, �����ϴ� ��¥�� �� 2�� ���� ������ ��� ����
	 *           ����� �߸� �Ǿ�ų� �������� �ʴ� ��¥: java.text.ParseException �߻�
	 */
	public static int monthsBetween(String from, String to) throws java.text.ParseException {
		return monthsBetween(from, to, "yyyyMMdd");
	}

	/**
	 * return months between two date strings with user defined format.
	 * @param String from date string
	 * @param String to date string
	 * @param format string representation of the date format. For example, "yyyyMMdd".
	 * @return int ��¥ ����� �°�, �����ϴ� ��¥�� �� 2�� ���� ������ ��� ����
	 *           ����� �߸� �Ǿ�ų� �������� �ʴ� ��¥: java.text.ParseException �߻�
	 */
	public static int monthsBetween(String from, String to, String format) throws java.text.ParseException {
		//java.text.SimpleDateFormat formatter =
		//	new java.text.SimpleDateFormat (format, java.util.Locale.KOREA);
		java.util.Date fromDate = check(from, format);
		java.util.Date toDate = check(to, format);

		// if two date are same, return 0.
		if (fromDate.compareTo(toDate) == 0) return 0;

 		java.text.SimpleDateFormat yearFormat =
			new java.text.SimpleDateFormat("yyyy", java.util.Locale.KOREA);
 		java.text.SimpleDateFormat monthFormat =
			new java.text.SimpleDateFormat("MM", java.util.Locale.KOREA);
 		java.text.SimpleDateFormat dayFormat =
			new java.text.SimpleDateFormat("dd", java.util.Locale.KOREA);

		int fromYear = Integer.parseInt(yearFormat.format(fromDate));
		int toYear = Integer.parseInt(yearFormat.format(toDate));
		int fromMonth = Integer.parseInt(monthFormat.format(fromDate));
		int toMonth = Integer.parseInt(monthFormat.format(toDate));
		int fromDay = Integer.parseInt(dayFormat.format(fromDate));
		int toDay = Integer.parseInt(dayFormat.format(toDate));

		int result = 0;
		result += ((toYear - fromYear) * 12);
		result += (toMonth - fromMonth);

		// if (((toDay - fromDay) < 0) ) result += fromDate.compareTo(toDate);
    // ceil�� floor�� ȿ��
		if (((toDay - fromDay) > 0) ) result += toDate.compareTo(fromDate);

		return result;
	}

	/**
	 * return last day of month to date strings.
	 * @param String src date string
	 * @return int ��¥ ����� �°�, �����ϴ� ��¥�� �� ��¥�� ���Ե� ���� ������ ��¥ ����
	 *           ����� �߸� �Ǿ�ų� �������� �ʴ� ��¥: java.text.ParseException �߻�
	 */
  public static String lastDayOfMonth(String src) throws java.text.ParseException {
		return lastDayOfMonth(src, "yyyyMMdd");
  }

	/**
	 * return last day of month to date strings with user defined format.
	 * @param String src date string
	 * @param format string representation of the date format. For example, "yyyyMMdd".
	 * @return int ��¥ ����� �°�, �����ϴ� ��¥�� �� ��¥�� ���Ե� ���� ������ ��¥ ����
	 *           ����� �߸� �Ǿ�ų� �������� �ʴ� ��¥: java.text.ParseException �߻�
	 */
	public static String lastDayOfMonth(String src, String format) throws java.text.ParseException {
		java.text.SimpleDateFormat formatter =
			new java.text.SimpleDateFormat (format, java.util.Locale.KOREA);
		java.util.Date date = check(src, format);

		java.text.SimpleDateFormat yearFormat =
			new java.text.SimpleDateFormat("yyyy", java.util.Locale.KOREA);
		java.text.SimpleDateFormat monthFormat =
			new java.text.SimpleDateFormat("MM", java.util.Locale.KOREA);

		int year = Integer.parseInt(yearFormat.format(date));
		int month = Integer.parseInt(monthFormat.format(date));
		int day = lastDay(year, month);

		java.text.DecimalFormat fourDf = new java.text.DecimalFormat("0000");
		java.text.DecimalFormat twoDf = new java.text.DecimalFormat("00");
		String tempDate = String.valueOf(fourDf.format(year))
      + String.valueOf(twoDf.format(month))
      + String.valueOf(twoDf.format(day));
		date = check(tempDate, format);

		return formatter.format(date);
	}

	private static int lastDay(int year, int month) throws java.text.ParseException {
		int day = 0;
		switch(month)
		{
      case 1:
      case 3:
      case 5:
      case 7:
      case 8:
      case 10:
      case 12: day = 31;
							break;
      case 2: if ((year % 4) == 0) {
                if ((year % 100) == 0 && (year % 400) != 0) { day = 28; }
                else { day = 29; }
              } else { day = 28; }
              break;
      default: day = 30;
		}
		return day;
	}
	
	/**
    *
    * For example, String date = DateTime.getHyphenatedDate("20040128");
    * ������ ������ý��۰��� ��¥��ȯ ��Ŀ� ����, 2004/01/28, PCMATE
    * @param java.lang.String pattern  "yyyy, MM, dd"
    *         space, zero, date pattern
    * @return formatted string representation of given day and time with  your pattern.
    *        "2004-01-28"
    */
   public static String getHyphenatedDate(String toDate)
   {
       // ORACLE���� �÷����� ����̰ų�, ���������� 0(ZERO)�� ���
       if(toDate.trim().equals("") || Integer.parseInt(toDate) == 0) // Oracle Columns - SPACE
       {
           return "0000-00-00"; // ������ ��¥��� ��ǿ� ����
       }

       return getFormattedDate(toDate, "yyyy-MM-dd");
   }
   
   public static String getHyphenatedDate(int toDate)
   {
       return getHyphenatedDate(Integer.toString(toDate));
   }

   public static String getHyphenatedDate(long toDate)
   {
       return getHyphenatedDate(Long.toString(toDate));
   }

   /**
    *
    * For example, String date = DateTime.getHyphenatedDate();
    * ������ ������ý��۰��� ��¥��ȯ ��Ŀ� ����, 2004/01/28, PCMATE
    * @param java.lang.String pattern  "yyyy, MM, dd"
    *         space, zero, date pattern
    * @return ������ �ý��۳�¥�� Hyphen����� String���� �����Ѵ�
    *        "2004-01-28"
    */
   public static String getHyphenatedDate()
   {
		String SysDate = getShortDateString(); // TEST,PCMATE

       return getFormattedDate(SysDate, "yyyy-MM-dd");
   }

   /**
    *
    * For example, String date = DateTime.getUnHyphenDate();
    * "-", "/" �������� �Էµ� ��¥�� 8�����(YYYYMMDD)�� ��ȯ�Ѵ�
    * @param java.lang.String pattern  "yyyy, MM, dd"
    *         space, zero, date pattern
    * @return ������ �ý��۳�¥�� Hyphen����� String���� �����Ѵ�
    *        "20040128"
    */

   public static String getUnHyphenDate(String toDate)
   {
       String tmpString = null;
       StringBuffer Lsb_Date = new StringBuffer();

       try {
           for(int i = 0; i < toDate.length(); i++)
           {
               tmpString = toDate.substring(i, i+1);
               if(tmpString.equals("-") || tmpString.equals("/")) continue;

               Lsb_Date.append(tmpString);
           }
       }
       catch(Exception e)
       {
           Lsb_Date.append(toDate);
       }

       return Lsb_Date.toString();
   }
  
  /**
   *
   * For example, String time = 
   *               DateTime.getFormatString( date, "yyyy-MM-dd HH:mm:ss");
   *
   * @param java.lang.String pattern  "yyyy, MM, dd, HH, mm, ss and more"
   * @return formatted string representation of current day and time with  your pattern.
   */
  public static String getFormatString( java.util.Date source, 
                                        String pattern) 
  {
      java.text.SimpleDateFormat formatter =
          new java.text.SimpleDateFormat (pattern, java.util.Locale.KOREA);
          
      String dateString = formatter.format( source );
      return dateString;
  }
  
  /**
  *
  * For example, String time = DateTime.getFormatString("19991212","yyyy/MM/dd");
  *
  * @param java.lang.String pattern  "yyyy, MM, dd, HH, mm, ss and more"
  * @return formatted string representation of given day and time with  your pattern.
  */
 public static String getFormattedDate(String toDate, String pattern) 
 {
     java.text.SimpleDateFormat formatter =
         new java.text.SimpleDateFormat (pattern, java.util.Locale.KOREA);
     String dateString = "";
     try{
         java.util.Date toDay = check(toDate);
         dateString = formatter.format(toDay);
     } 
     catch( Exception e ){
         dateString = toDate;
     }
     
     return dateString;
 }

 /**
  * ��� ���ϱ�
  * @param strNwymd : �ű���
  * @param strToday : ����
  * @return String  : �ű��ϰ� ���� ������ ���� ��
  */
 public static String calMonth( String startday, String endday )
{
	int nCalYmd = 0;
 	int nCalMonth = 0;
 	
 	if( startday == null || startday.trim().equals("") )
 		startday = "0";
 	
 	if( endday == null || endday.trim().equals("") )
 		endday = "0";
 	
 	if ( startday.trim().equals("0") || endday.trim().equals("0") )
 		return "0";
 	if ( startday.trim().equals("00000000") || endday.trim().equals("00000000") )
 		return "0";
 	if ( startday.trim().length() != 8 || endday.trim().length() != 8 )
 		return "0";
 	
 	int iStartDay = Integer.parseInt(startday);
 	int iEndDay = Integer.parseInt(endday);
 	String temp = null;
 	if(iStartDay > iEndDay)
 	{
 		temp = endday;
 		endday = startday;
 		startday = temp;
 	}
 	
 	nCalYmd  = Integer.parseInt(endday.substring(0, 4)) - Integer.parseInt(startday.substring(0, 4));
 	nCalMonth = Integer.parseInt(endday.substring(4, 6)) - Integer.parseInt(startday.substring(4, 6));
 		 	
 	if ( nCalMonth > 0 ) { 		
 		nCalMonth = nCalMonth + 1;
 		nCalYmd = nCalYmd * 12;
 	}
 	
 	if ( nCalMonth == 0 ) {
 		nCalYmd = nCalYmd * 12;
 	}
 	
 	if ( nCalMonth < 0 ) {
 	 	nCalMonth = nCalMonth + 13;
 	 	nCalYmd = (nCalYmd-1) * 12;
 	} 
 	
 	return String.valueOf(nCalYmd + nCalMonth);
}
	
	
}
