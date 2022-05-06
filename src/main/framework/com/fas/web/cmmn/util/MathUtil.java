package com.fas.web.cmmn.util;

import java.text.*;

public class MathUtil {
	/**
	 * returned Dec / Hex / Asc / Bin value
	 * @param b byte array
	 * @param offset start index
	 * @param length byte array length
	 */
	public String getDHAB(byte[] b, int offset, int length) {
		String decString = new String();
		String hexString = new String();
		String ascString = new String();
		String binString = new String();
		for(int i=offset;i<length;i++) {
			int temp = 0;
			//if(b[i] < 0) temp = 256+b[i];
			//else temp = b[i];
			temp = b[i];

			decString += getDec(Integer.toBinaryString(temp));
			hexString += getHex(Integer.toHexString(temp));
			ascString += ((char)b[i] + " ");
			binString += getBin(Integer.toBinaryString(temp));

		}
		String result = "<length : "  + length + ">\r\n<Dec : " + decString + ">\r\n<Hex : " + hexString + ">\r\n<Asc : " + ascString + ">\r\n<Bin : " + binString + ">"; 
		return result;
	}


	/**
	 * 2����� 10����� 
	 * @param str 2��� string
	 * @return 10��� string
	 */
	private String getDec(String str) {
		int len = str.length()-1;
		int val = 1;
		int arr[] = new int[str.length()];
		arr[len] = val;
		for(int i=1;i<str.length();i++) {
			val *= 2;
			arr[len-i] = val;
		}

		/*
		for(int i=0;i<arr.length;i++) 
			System.out.println(arr[i]);
			*/

		val = 0;
		for(int i=0;i<str.length();i++) {
			if(str.substring(i, i+1).equals("1")) val += arr[i];
		}
		return String.valueOf(val+" ");

	}

	/**
	 * 16����� 2�ڸ��� ä���
	 * @param str 16��� string
	 */
	private String getHex(String str) {
		String result = new String();
		for(int i=0;i<(2-str.length());i++) result += "0";
		result += (str + " ");
		return "Ox"+result;
	}

	/**
	 * 2����� 8�ڸ��� ä���
	 * @param str 2��� string
	 */
	private String getBin(String str) {
		String result = new String();
		for(int i=0;i<(8-str.length());i++) result += "0";

		result += (str + " ");
		return result;
	}

    /*
     * byte array �� hex string ���� ��ȯ�� �����Ѵ�.
     */
    public String getHex(byte byteArray[]) {
        StringBuffer sb = new StringBuffer();
        for(int i = 0; i < byteArray.length; i++)
            sb.append(Integer.toHexString(byteArray[i] & 0xff));

        return sb.toString();
    }

	public String getFillZeroFront(int value, int count) {
		String result = String.valueOf(value);
		int valueLen = result.length();
		for(int i=0;i<count-valueLen;i++) {
			result = "0"+result;
		}

		return result;
	}

	public String getFillZeroEnd(int value, int count) {
		String result = String.valueOf(value);
		int valueLen = result.length();
		for(int i=0;i<count-valueLen;i++) {
			result = result+"0";
		}

		return result;
	}

	public String getFormattedNumber(int value) {
		NumberFormat nFormat = NumberFormat.getInstance();
		return nFormat.format(value);
	}

	public String getFormattedNumber(float value) {
		if(Float.isNaN(value)) value = 0f;
		DecimalFormat dFormat = new DecimalFormat("###,##0.00");
		return dFormat.format(value);
	}

	public String getFormattedNumber(double value) {
		return getFormattedNumber(value, "###,##0");
	}

	public String getFormattedNumber(double value, String format) {
		if(Double.isNaN(value)) value = 0;
		DecimalFormat dFormat = new DecimalFormat(format);
		return dFormat.format(value);
	}

	public String getFileUnit(double kbSize) 
	{
		
		return getFileUnit(kbSize, null);
	}
	
	public String getFileUnit(double kbSize, String format)
	{
		
		/*
		char[] aUnit = { 'K', 'B' };
		double dValue = 0;
		

		if(kbSize != 0) {

			aUnit[0] += 2 * (int)((int)(kbSize / (double)1024) * ((double)1024 / kbSize) + 0.5);
			dValue = (kbSize / (double)1024) * (int)((int)(kbSize / (double)1024) * ((double)1024 / kbSize) + 0.5) + kbSize * (int)((int)((double)1023 / kbSize) * (kbSize / (double)1023) + 0.5);

			aUnit[0] -= 6 * (int)((int)(kbSize / ((double)1024 * (double)1024)) * (((double)1024 * (double)1024) / kbSize) + 0.5);
			dValue = (dValue / (double)1024) * (int)((int)(dValue / (double)1024) * ((double)1024 / dValue) + 0.5) + dValue * (int)((int)((double)1023 / dValue) * (dValue / (double)1023) + 0.5);

			aUnit[0] += 13 * (int)((int)(kbSize / ((double)1024 * (double)1024 * (double)1024)) * (((double)1024 * (double)1024 * (double)1024) / kbSize) + 0.5);
			dValue = (dValue / (double)1024) * (int)((int)(dValue / (double)1024) * ((double)1024 / dValue) + 0.5) + dValue * (int)((int)((double)1023 / dValue) * (dValue / (double)1023) + 0.5);


		}
		*/
		

		String sUnit = "";
		double retValue = 0.0;
		
		/*
		if (kbSize < (double)1024)
		{
			retValue = kbSize;
			sUnit = "B"; 			
		}
		else if (kbSize < (double)(1024*1024))
		{
			retValue = kbSize / (double)(1024);
			sUnit = "K"; 			
		}
		else if (kbSize < (double)(1024*1024*1024))
		{
			retValue = kbSize / (double)(1024 * 1024);
			sUnit = "M"; 			
		}
		else
		{
			retValue = kbSize / (double)(1024 * 1024 * 1024);
			sUnit = "G";
		}
		*/

		if (kbSize < (double)1024)
		{
			retValue = kbSize;
			sUnit = "B"; 			
		}
		else if (kbSize < (double)(1024*1024))
		{
			retValue = kbSize / (double)(1024);
			sUnit = "K"; 			
		}
		else if (kbSize < (double)(1024*1024*1024))
		{
			retValue = kbSize / (double)1024 / (double)1024;
			sUnit = "M"; 			
		}
		else
		{
			retValue = kbSize / (double)(1024) / (double)1024 / (double)1024;
			sUnit = "G";
		}
		


		if(format == null)
		{
			return getFormattedNumber(retValue) + sUnit;
		}
		else
		{
			return getFormattedNumber(retValue, format) + sUnit;			
		}
	}

}
