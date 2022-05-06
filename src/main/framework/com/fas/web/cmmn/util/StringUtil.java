package com.fas.web.cmmn.util;

import java.io.ByteArrayInputStream;
import java.io.ByteArrayOutputStream;
import java.io.DataInputStream;
import java.io.DataOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.io.StringWriter;
import java.text.DecimalFormat;
import java.text.DecimalFormatSymbols;
import java.text.NumberFormat;
import java.util.ArrayList;
import java.util.Locale;
import java.util.StringTokenizer;
import java.util.regex.Pattern;

public class StringUtil {
	
    private static final char HEX_CHAR_LOWER[] = { '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f' };
    private static final char HEX_CHAR_UPPER[] = { '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F' };
    private static final String HEXINDEX = "0123456789abcdef          ABCDEF";

    /**
     * Private constructor, to prevent construction.
     */
    private StringUtil() {} 	//constructor

    public static String replace(String str, int startIndex, String oldString, String newString) {
        if (null == str) {
            return str;
        }

        int firstOccurenceIndex = 0;
        firstOccurenceIndex = str.indexOf(oldString, startIndex);
        if (firstOccurenceIndex == -1) {
            return str;
        }

        String result = str.substring(0, firstOccurenceIndex);
        result = result.concat(newString);
        result = result.concat(str.substring(firstOccurenceIndex + oldString.length(), str.length()));
        return replace(result, firstOccurenceIndex + newString.length(), oldString, newString);
    }

    public static String replace(String str, String oldString, String newString) {
        return replace(str, 0, oldString, newString);
    }

    public static String elapsedTimeAsString(long runTime) {
        return NumberFormat.getInstance().format((double) runTime / 1000);
    }

    public static String format(String str, String flag) {

        if (str != null && !"".equals(str)) {

            if (str.length() == 16) {
                if (flag != null && "ACNO".equals(flag)) {
                    str = str.substring(0, 3) + "-" + str.substring(3, 9) + "-" + str.substring(9, 11) + "-" + str.substring(11, 16);
                }
                else if (flag != null && "SRSP_ACNO".equals(flag)) {
                    str = str.substring(0, 3) + "-" + str.substring(3, 7) + "-" + str.substring(7, 11) + "-" + str.substring(11, 16);
                }
            }
            else if (str.length() == 12) {
                if (flag != null && "IB_BSNS_NO".equals(flag)) {
                    str = str.substring(0, 4) + "-" + str.substring(4, 6) + "-" + str.substring(6, 12);
                }
            }
            else if (str.length() == 11) {
                if (flag != null && "CNLN_NO".equals(flag)) {
                    str = str.substring(0, 4) + "-" + str.substring(4, 6) + "-" + str.substring(6, 11);
                }
                else if (flag != null && "DLBT_APLC_NO".equals(flag)) {
                    str = str.substring(0, 4) + "-" + str.substring(4, 6) + "-" + str.substring(6, 11);
                }
            }
            else if (str.length() == 9) {
                if (flag != null && "IVBN_CSNO".equals(flag)) {
                    str = str.substring(0, 3) + "-" + str.substring(3, 9);
                }
            }
            else if (str.length() == 13) {
                if (flag != null && "RRNO".equals(flag)) {
                    str = str.substring(0, 6) + "-" + str.substring(6, 13);
                }
            }
            else if (str.length() == 10) {
            	if (flag != null && "BZN".equals(flag)) {
            		str = str.substring(0,3) + "-" + str.substring(3,5) + "-" + str.substring(5,10);
            	}
            }
        }
        
        return str;
    }

    public static String truncate(String str, int length) {
        if (str.length() > length) {
            str = str.substring(0, length) + "...";
        }
        return str;
    }

    /**
     * Splits a string around matches of the given delimiter.
     * 
     * @param str
     *            String with delimited fields to split.
     * 
     * @param delimiter
     *            String that represents the delimiter
     * 
     * @return The array of strings computed by splitting a string around
     *         matches of the given delimiter.
     */
    public static String[] split(String str, String delimiter) {
        StringTokenizer strtok = new StringTokenizer(str, delimiter);
        String[] result = new String[strtok.countTokens()];

        for (int i = 0; i < result.length; i++) {
            result[i] = strtok.nextToken();
        }
        return result;
    }

    /**
     * Splits a string around matches of the given delimiter character.
     * @param str String with delimited fields to split.
     * @param delimiter Character that represents the delimiter
     * @return The array of strings computed by splitting a string around
     *         matches of the given delimiter.
     */
    public static String[] split(String str, char delimiter) {
        return split(str, String.valueOf(delimiter));
    }

    /**
     * ��Ʈ�� �迭�� �����ڸ� �̿��ؼ� String������ ��ȯ
     * @param strs
     * @param delimiter
     * @return
     */
    public static String join(String[] strs, String delimiter) {
        StringBuffer sb = new StringBuffer();
        if (strs.length == 0) {
            return "";
        }

        sb.append(strs[0].toString());
        for (int i = 1; i < strs.length; i++) {
            sb.append(delimiter);
            sb.append(strs[i].toString());
        }

        return sb.toString();
    }

    public static String join(String[] strs, char delimiter) {
        return join(strs, String.valueOf(delimiter));
    }

    static public boolean isEmpty(String str) {
        if ((null == str) || "".equals(str.trim()) || "null".equals(str.trim())) {
            return true;
        }
        return false;
    }

    public static boolean isNumber(Object obj) {
        return isNumber(obj, "default", Locale.getDefault());
    }

    public static boolean isNumber(Object obj, String format) {
        return isNumber(obj, format, Locale.getDefault());
    }

    public static boolean isNumber(Object obj, String format, Locale locale) {
        if (null == obj) {
            return false;
        }

        if (obj instanceof Number) {
            return true;
        }

        try {
            NumberFormat parser = null;
            if ((format == null) || (format != null && "default".equalsIgnoreCase(format))) {
                parser = new DecimalFormat();
            } else {
                parser = new DecimalFormat(format, new DecimalFormatSymbols(locale));
            }
            return (parser.parse(String.valueOf(obj)) instanceof Number);
        } catch (Exception ex) {
            return false;
        }
    }

    public static String htmlEscape(String str) {
        str = replace(str, "&", "&amp;");
        str = replace(str, "<", "&lt;");
        str = replace(str, ">", "&gt;");
        str = replace(str, "\"", "&quot;");

        return str;
    }

    public static String htmlUnescape(String str) {
        str = replace(str, "&amp;", "&");
        str = replace(str, "&lt;", "<");
        str = replace(str, "&gt;", ">");
        str = replace(str, "&quot;", "\"");

        return str;
    }

    /**
     * Left Pads a number with zeros to take up at least 2 characters
     * 
     * @param number the number to pad
     * @return string representation of number padded to 2 characters
     */
    static public String lpad(int number) {
        return lpad(number, 2);
    }

    /**
     * Left Pads a number with zeros to take up a specified length NOTE: The
     * input will be truncated if it exceeds the specified length.
     * 
     * @param number
     *            the number to pad
     * @param length
     *            length of resulting string
     * @return string representation of number padded to specified length
     */
    public static String lpad(int number, int length) {
        return lpad(number, length, '0');
    }

    /**
     * Left Pads a number to take up a specified length NOTE: The input will be
     * truncated if it exceeds the specified length.
     * 
     * @param number
     *            the number to pad
     * @param length
     *            length of resulting string
     * @param padChar
     *            Character to be used for Padding
     * @return string representation of number padded to specified length
     */
    public static String lpad(int number, int length, char padChar) {
        return lpad(String.valueOf(number), length, padChar);
    }

    /**
     * Left Pads the input String with spaces to take up a specified length
     * NOTE: The input will be truncated if it exceeds the specified length.
     * 
     * @param input
     *            the String to pad
     * @param length
     *            length of resulting string
     * @return string representation of the input string padded to specified
     *         length.
     */
    public static String lpad(String input, int length) {
        return lpad(input, length, ' ');
    }

    /**
     * Left Pads the input String to take up a specified length NOTE: The input
     * will be truncated if it exceeds the specified length.
     * 
     * @param input
     *            the String to pad
     * @param length
     *            length of resulting string
     * @param padChar
     *            Character to be used for Padding
     * @return string representation of the input string padded to specified
     *         length.
     */
    public static String lpad(String input, int length, char padChar) {
        return pad(input, length, padChar, false);
    }

    /**
     * Left Pads the input String to take up a specified length NOTE: The input
     * will be truncated if it exceeds the specified length.
     * 
     * @param input
     *            the String to pad
     * @param length
     *            length of resulting string
     * @param padStr
     *            String to be used for Padding
     * @return string representation of the input string padded to specified
     *         length.
     */
    public static String lpad(String input, int length, String padStr) {
        return pad(input, length, padStr, false);
    }

    /**
     * Right Pads the input String with spaces to take up a specified length
     * NOTE: The input will be truncated if it exceeds the specified length.
     * 
     * @param input
     *            the String to pad
     * @param length
     *            length of resulting string
     * @return string representation of the input string padded to specified
     *         length.
     */
    public static String rpad(String input, int length) {
        return rpad(input, length, ' ');
    }

    /**
     * Right Pads the input String to take up a specified length NOTE: The input
     * will be truncated if it exceeds the specified length.
     * 
     * @param input
     *            the String to pad
     * @param length
     *            length of resulting string
     * @param padChar
     *            Character to be used for Padding
     * @return string representation of the input string padded to specified
     *         length.
     */
    public static String rpad(String input, int length, char padChar) {
        return pad(input, length, padChar, true);
    }

    /**
     * Right Pads the input String to take up a specified length NOTE: The input
     * will be truncated if it exceeds the specified length.
     * 
     * @param input
     *            the String to pad
     * @param length
     *            length of resulting string
     * @param padStr
     *            String to be used for Padding
     * @return string representation of the input string padded to specified
     *         length.
     */
    public static String rpad(String input, int length, String padStr) {
        return pad(input, length, padStr, true);
    }

    /**
     * Pads a String to take up a specified length NOTE: The input will be
     * truncated if it exceeds the specified length.
     * 
     * @param input
     *            the String to pad
     * @param length
     *            length of resulting string
     * @param padChar
     *            Character to be used for Padding
     * @param rpad
     *            If true, then characters will be padded to the end of the
     *            input string. Else they'' be added before the input string.
     * @return string representation of the input padded to specified length
     */
    public static String pad(String input, int length, char padChar, boolean rpad) {
        return pad(input, length, String.valueOf(padChar), rpad);
    }

    /**
     * Pads a String to take up a specified length NOTE: The input will be
     * truncated if it exceeds the specified length.
     * 
     * @param input
     *            the String to pad
     * @param length
     *            length of resulting string
     * @param padStr
     *            String to be used for Padding
     * @param rpad
     *            If true, then characters will be padded to the end of the
     *            input string. Else they'' be added before the input string.
     * @return string representation of the input padded to specified length
     */
    public static String pad(String input, int length, String padStr, boolean rpad) {
        // Create a buffer with an initial capacity set
        StringBuffer buf = new StringBuffer(length);

        // Determine the number of characters to be padded
        int padCount = length - (input != null ? input.length() : 0);

        // Start with the input, if we are rpad-ing
        if (rpad && input != null) {
            buf.append(input);
        }

        // Append with the pad characters
        for (int i = 0; i < padCount; i++) {
            buf.append(padStr);
        }

        // End with the input, if we are lpad-ing
        if (!rpad && input != null) {
            buf.append(input);
        }
        return buf.length() > length ? buf.substring(0, length) : buf.toString();
    }

    static public String ltrim(String str) {
    	return str.replaceAll("^\\s+", "");
    }

    static public String rtrim(String str) {
    	return str.replaceAll("\\s+$", "");
    }

    static public String byteToHex(byte b) {
        return byteToHex(b, false);
    }

    static public String byteToHex(byte b, boolean upper) {
        char[] hexchar = upper ? HEX_CHAR_UPPER : HEX_CHAR_LOWER;
        char[] array = { hexchar[(b >> 4) & 0x0f], hexchar[b & 0x0f] };
        return new String(array);
    }

    static public String byteToHex(byte bt[]) {
        return byteToHex(bt, false);
    }

    static public String byteToHex(byte bt[], boolean upper) {
        int len = bt.length;
        StringBuffer sb = new StringBuffer();

        for (int i = 0; i < len; i++) {
            sb.append(byteToHex(bt[i], upper));
        }
        return sb.toString();
    }

    static public String charToHex(char c) {
        return charToHex(c, false);
    }

    static public String charToHex(char c, boolean upper) {
        byte hi = (byte) (c >>> 8);
        byte lo = (byte) (c & 0xff);

        return byteToHex(hi, upper) + byteToHex(lo, upper);
    }

    static public byte[] hexToByte(String str) {
        int len = str.length() / 2;
        byte data[] = new byte[len];
        int j = 0;

        for (int i = 0; i < len; i++) {
            char chr = str.charAt(j++);
            int charPos, bitWise;

            charPos = HEXINDEX.indexOf(chr);
            bitWise = (charPos & 0xf) << 4;

            chr = str.charAt(j++);
            charPos = HEXINDEX.indexOf(chr);
            bitWise += (charPos & 0xf);

            data[i] = (byte) bitWise;
        }
        return data;
    }

    static public String unicodeToHexString(String str) {
        return unicodeToHexString(str, false);
    }

    public static String unicodeToHexString(String str, boolean upper) {
        ByteArrayOutputStream bout = new ByteArrayOutputStream();
        DataOutputStream out = new DataOutputStream(bout);

        try {
            out.writeUTF(str);
            out.close();
            bout.close();
        } catch (IOException e) {
            return null;
        }
        return byteToHex(bout.toByteArray(), upper);
    }

    public static String hexStringToUnicode(String str) {
        byte[] bt = hexToByte(str);
        ByteArrayInputStream bin = new ByteArrayInputStream(bt);
        DataInputStream in = new DataInputStream(bin);

        try {
            return in.readUTF();
        } catch (IOException e) {
            return null;
        }
    }

    public static String unicodeToAscii(String str) {
        return unicodeToAscii(str, false);
    }

    public static String unicodeToAscii(String str, boolean upper) {
        char[] hexchar = upper ? HEX_CHAR_UPPER : HEX_CHAR_LOWER;

        if (str == null || str.equals("")) {
            return str;
        }

        int len = str.length();
        StringBuffer sb = new StringBuffer(len);

        for (int i = 0; i < len; i++) {
            char chr = str.charAt(i);
            if (chr == '\\') {
                if (i < len - 1 && str.charAt(i + 1) == 'u') {
                    sb.append(chr); // encode the \ as unicode, so 'u' is
                                    // ignored
                    sb.append("u005c"); // splited so the source code is not
                                        // changed...
                } else {
                    sb.append(chr);
                }
            } else if ((chr >= 0x0020) && (chr <= 0x007f)) {
                sb.append(chr); // this is 99%
            } else {
                sb.append("\\u");
                sb.append(hexchar[(chr >> 12) & 0xf]);
                sb.append(hexchar[(chr >> 8) & 0xf]);
                sb.append(hexchar[(chr >> 4) & 0xf]);
                sb.append(hexchar[(chr) & 0xf]);
            }
        }
        return sb.toString();
    }

    public static String asciiToUnicode(String str) {
        if (str == null || str.indexOf("\\u") == -1) {
            return str;
        }

        int len = str.length();
        char chra[] = new char[len];
        int j = 0;

        for (int i = 0; i < len; i++) {
            char chr = str.charAt(i);
            if (chr != '\\' || i == len - 1) {
                chra[j++] = chr;
            } else {
                chr = str.charAt(++i);
                if (chr != 'u' || i == len - 1) {
                    chra[j++] = '\\';
                    chra[j++] = chr;
                } else {
                    int k = (HEXINDEX.indexOf(str.charAt(++i)) & 0xf) << 12;
                    k += (HEXINDEX.indexOf(str.charAt(++i)) & 0xf) << 8;
                    k = (HEXINDEX.indexOf(str.charAt(++i)) & 0xf) << 4;
                    k += (HEXINDEX.indexOf(str.charAt(++i)) & 0xf);
                    chra[j++] = (char) k;
                }
            }
        }
        return new String(chra, 0, j);
    }

    public static String InputStreamToString(InputStream is) {
        InputStreamReader in = new InputStreamReader(is);
        StringWriter write = new StringWriter();
        int blocksize = 8 * 1024; // is this a good value?
        char buffer[] = new char[blocksize];

        try {
            while (true) {
                int readsize = in.read(buffer, 0, blocksize);
                if (readsize == -1) {
                    break;
                }
                write.write(buffer, 0, readsize);
            }

            write.close();
            is.close();
        } catch (IOException e) {
            return null;
        }

        return write.toString();
    }

    public static String elapsedTimeAsKorean(long elapsedTime) {

        long[] tsl = { 60, 60, 24, 30, 12, Long.MAX_VALUE };
        String[] tss = { "��", "��", "�ð�", "��", "����", "��" };

        StringBuffer sbElapsedTime = new StringBuffer();

        long quotient = elapsedTime; // ��
        long remainder = 0; // ������
        for (int idx = 0; idx < tsl.length; idx++) {
            remainder = quotient % tsl[idx]; // ������
            quotient = quotient / tsl[idx]; // ��
            if (remainder != 0) {
                sbElapsedTime.insert(0, " " + remainder + tss[idx]);
            }
            if (quotient == 0) {
                break;
            }
        }

        if (sbElapsedTime.length() != 0) {
            sbElapsedTime.deleteCharAt(0);
        }

        return sbElapsedTime.toString();
    }

    public static int toInt(String number) {
        return toInt(number, 0);
    }

    public static int toInt(String number, int dephault) {
        if (number == null) {
            return 0;
        }

        try {
            return Integer.valueOf(number).intValue();
        } catch (Exception ex) {
            return dephault;
        }
    }

    public static String[] getTokenArrayFromString(String str, String delimiter) {
        StringTokenizer st = new StringTokenizer(str, delimiter, true);
        int cnt = st.countTokens();

        ArrayList<String> list = new ArrayList<String>();
        String token = null;

        String data[] = new String[cnt];
        for (int i = 0; i < cnt; i++) {
            token = st.nextToken();
            data[i] = token;
        }

        for (int i = 0; i < data.length;) {
            if (i + 1 >= data.length) {
                list.add("");
                i++;
            }
            else if (data[i].equals(delimiter) && !data[i + 1].equals(delimiter)) {
                list.add(data[i + 1]);
                i += 2;
            }
            else if (data[i].equals(delimiter) && data[i + 1].equals(delimiter)) {
                list.add("");
                i++;
            }
        }

        String returnData[] = new String[list.size()];
        for (int i = 0; i < list.size(); i++) {
            returnData[i] = (String) list.get(i);
        }
        return returnData;
    }

    public static String nvl(String str) {
        return nvl(str, "");
    }

    public static String nvl(String str, String value) {
        if (str == null || str.equals("") || str == "NULL" || str == "null")
            return value;
        else
            return str;
    }

    public static int strByteLength(String str) {
        if (str == null || "".equals(str)) {
            return 0;
        } else {
            byte srcarr[] = str.getBytes();
            return srcarr.length;
        }
    }

    public static String multipleSpace(int mul) {
        StringBuffer spaceBuffer = new StringBuffer("");
        if (mul < 0) {
            throw new IllegalArgumentException("�¼��� 0 ���� ũ�ų� ���ƾ� �մϴ�.");
        }
        for (int i = 1; i <= mul; i++) {
            spaceBuffer.append(" ");
        }
        return spaceBuffer.toString();
    }

    public static String toHalfChar(String src) {
        if (src == null) return null;

        StringBuffer strBuf = new StringBuffer();
        char c = 0;
        int nSrcLength = src.length();

        for (int i = 0; i < nSrcLength; i++) {
            c = src.charAt(i);
            if (c >= 0xff01 && c <= 0xff5e) {
                c -= 0xfee0;
            } else if (c == 0x3000) {
                c = 0x20;
            }

            if (c == 0x002C) {
            } else if (c == 0x0027) {
            } else {
                strBuf.append(c);
            }
        }
        return strBuf.toString();
    }

    public static String numberFormat(String tmp, String form) {
        if (tmp != null && tmp.length() > 0) {
            java.text.DecimalFormat df = new java.text.DecimalFormat(form);
            double num = (new Double(tmp)).doubleValue();
            StringBuffer strBuff = new StringBuffer();
            df.format(num, strBuff, new java.text.FieldPosition(java.text.NumberFormat.INTEGER_FIELD));
            return strBuff.toString();
        } else {
            return tmp;
        }
    }
    
    public static String remove2Spaces(String val)
    {        
        byte[] temp = val.getBytes();
        byte[] result = new byte[temp.length];
        int i=0;
        boolean isInputFirstSpace = false;
        
        int fld_size = 0;
        
        if( result.length > temp.length )
            fld_size = temp.length;
        else
            fld_size = result.length;
        
        for(int j=0; j<fld_size; j++)
        {
            if(temp[j] != (byte)' ')
            {
                result[i] = temp[j];
                isInputFirstSpace = false;
                i++;
            }
            else if (temp[j] == (byte)' ' && !isInputFirstSpace)
            {
                result[i] = temp[j];            
                isInputFirstSpace = true;      
                i++;
            }
        }
        return new String(result);
    }

	public static String cleanXSS(String value) {
		value = cleanXSSSpecialChar(value);
		value = cleanXSSScript(value);

		return value;
	}
	
	public static String cleanXSSSpecialChar(String value) {
		if (value == null) return null;
		
		if (value.length() == 0) return value;

		value = value.replaceAll("<", "&lt;").replaceAll(">", "&gt;");
		//value = value.replaceAll("\\(", "&#40;").replaceAll("\\)", "&#41;");
		value = value.replaceAll("\"", "&#34;");
		value = value.replaceAll("'", "&#39;");

		return value;
	}

	public static String cleanXSSScript(String value) {
		if (value == null) return null;
		
		if (value.length() == 0) return value;

		value = value.replaceAll("(?i)eval\\((.*)\\)", "");
		value = value.replaceAll("(?i)[\\\"\\\'][\\s]*javascript:(.*)[\\\"\\\']", "\"\"");
		value = value.replaceAll("(?i)script", "");   

		return value;
	}

	public static String cleanSQLInjection(String value) {
		if (value == null) return null;
		
		if (value.length() == 0) return value;
		
		value = value.replaceAll("!", "&#33");
		value = value.replaceAll("#", "&#35");
		value = value.replaceAll("%", "&#37");
		value = value.replaceAll("'", "&#39;");
		value = value.replaceAll("--", "&#45&#45");
		value = value.replaceAll(";", "&#59;");

		return value;
	}
	
	public static String cleanXSSSpecialChar01(String value) {
		if (value == null) return null;
		
		if (value.length() == 0) return value;

		value = value.replaceAll("<", "").replaceAll(">", "");
		value = value.replaceAll("\\(", "").replaceAll("\\)", "");
		value = value.replaceAll("\"", "");
		value = value.replaceAll("'", "");
		value = value.toLowerCase().replaceAll("javascript", "");
		value = value.toLowerCase().replaceAll("main", "");
		value = value.toLowerCase().replaceAll("body", "");
		value = value.toLowerCase().replaceAll("cookie", "");
		value = value.toLowerCase().replaceAll("forms", "");
		value = value.toLowerCase().replaceAll("document", "");

		return value;
	}
	
    public static String escapeSpecialCharater(String value) {
        String sChange = value;		

        if (sChange ==null) return null;
        
        sChange = Pattern.compile("<script.*?>(\\n|\\r|.)*<\\/script>", Pattern.CASE_INSENSITIVE)
				.matcher(sChange).replaceAll("");
        sChange = Pattern.compile("eval\\((.*)\\)", Pattern.CASE_INSENSITIVE)
				.matcher(sChange).replaceAll("");
        sChange = sChange.replaceAll("[\\\"\\\'][\\s]*javascript:(.*)[\\\"\\\']", "\"\"");

        return sChange;
    }
    
    
    public static String[] stringArraySearch(String key, String[] list) {
    	
    	if (key == null) return list;    	
    	if (key.trim().length() <= 0) return list;    	
    	if (list == null) return list;    	
    	ArrayList keyList = new ArrayList();    	
    	String[] keySetList = null;
    	
    	for (String keys:list) {
    		if (keys.indexOf(key) >= 0) {
				keyList.add(keys);
			}
    	}
    	
    	if (keyList == null) return null;    	
    	if (keyList.size() <= 0) return null;    	
    	keySetList = (String[]) keyList.toArray(new String[keyList.size()]);    	
    	return keySetList;
    }
    
    public static String randomPwdCreate() {
    	
    	String  pswd = "";
    	StringBuffer sb = new StringBuffer();
    	StringBuffer sc = new StringBuffer("@#$%^&~");  // 특수문자 모음, {}[] 같은 비호감문자는 뺌

    	// 대문자 4개를 임의 발생 
    	sb.append((char)((Math.random() * 26)+65));  // 첫글자는 대문자, 첫글자부터 특수문자 나오면 안 이쁨

    	for( int i = 0; i<3; i++) {
    	   sb.append((char)((Math.random() * 26)+65));  // 아스키번호 65(A) 부터 26글자 중에서 택일
    	} 

    	// 소문자 4개를 임의발생
    	for( int i = 0; i<4; i++) {
    	    sb.append((char)((Math.random() * 26)+97)); // 아스키번호 97(a) 부터 26글자 중에서 택일
    	}  


    	// 숫자 2개를 임의 발생
    	for( int i = 0; i<2; i++) {
    	    sb.append((char)((Math.random() * 10)+48)); //아스키번호 48(1) 부터 10글자 중에서 택일
    	}


    	// 특수문자를 두개  발생시켜 랜덤하게 중간에 끼워 넣는다 
    	sb.setCharAt(((int)(Math.random()*3)+1), sc.charAt((int)(Math.random()*sc.length()-1))); //대문자3개중 하나   
    	sb.setCharAt(((int)(Math.random()*4)+4), sc.charAt((int)(Math.random()*sc.length()-1))); //소문자4개중 하나

    	pswd = sb.toString();
    	
    	return pswd;
    	
    	
    }
    
    public static void main(String args[]) {
    	
    	
    	System.out.println(StringUtil.format("1230167890", "BZN"));
    }
    
}
