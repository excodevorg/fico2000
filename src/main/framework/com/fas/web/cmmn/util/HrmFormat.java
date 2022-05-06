package com.fas.web.cmmn.util;

import java.math.BigDecimal;
import java.text.NumberFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.Locale;

/**
 * <code>HrmFormat</code> class �� text format ������� ��ȯ���� �ش�.
 *
 * @author �����
 */
public class HrmFormat {

	/** ������ */
	public final static String DELIM = "-";

	/** ���� format ������ */
	public final static String DELIM_NUMBER = ",";

	/** �Ҽ��� ���� �ִ� �ڸ� */
	public final static int MAXIMUM_FRACTION_DIGITS = 2;

	/** �Ҽ��� ���ڸ��� �ּ� �ڸ� */
	public final static int MINIMUM_INTEGER_DIGITS = 1;

	//	private final static String DELIM_PID = "-";	// �ֹι�ȣ ������

	//	private final static String DELIM_DATE = "-";	// ��¥ ������

	/** ��¥(�����) ǥ�� ���� */
	public final static String PATTERN_DATE = "yyyy-MM-dd";

	/** ��¥(�����) ǥ�� ���� */
	public final static String PATTERN_DATE_WITHOUT_DELIM = "yyyyMMdd";

	/** ��¥(�����) �ѱ� ǥ�� ���� */
	public final static String PATTERN_DATE_KOR = "yyyy�� MM�� dd��";

	/** ��¥(�����) �ð� ǥ�� ���� */
	public final static String PATTERN_DATE_TIME = "yyyy-MM-dd HH:mm:ss";

	/** ��¥(�����) �ð� ǥ�� ���� */
	public final static String PATTERN_DATE_TIME_WITHOUT_DELIM = "yyyyMMdd HHmmss";

	/** ��¥(�����) �ð� ǥ�� ���� */
	public final static String PATTERN_DATE_MILLISECONDS_WITHOUT_DELIM = "yyyyMMddHHmmssSSS";

	/** ��¥(���) ǥ�� ���� */
	public final static String PATTERN_DATE_YM = "yyyy-MM";

	/** �ð� ǥ�� ���� */
	public final static String PATTERN_TIME = "HH:mm:ss";

	/**
	 * �Ҽ��� ǥ�� ��Ŀ� �°� �ڸ��� ����. ǥ���ڸ��� ���� �����Ѵ�.
	 * <code>NumberFormat</code> ������ �ݿø��� �ϱ⶧���� ������ �Ϸ��� �� method ��
	 * ȣ���ؼ� ����Ѵ�.
	 *
	 * @param formattedNumber �Ҽ��� ���� �ڸ����� ������ ���� string
	 * @param cuttingPosition �Ҽ��� ǥ�� �ڸ���
	 * @return ���� text format �� string
	 */
	private static String cutFractionDigits(String formattedNumber, int cuttingPosition) {

		// �ۼ�Ʈ ����
		boolean isPercent = formattedNumber.endsWith("%");
		String percent = "";
		if (isPercent) {
			percent = formattedNumber.substring(formattedNumber.length() - 1);
			formattedNumber = formattedNumber.substring(0, formattedNumber.length() - 1);
		}

		// �Ҽ��� ����
		int point = formattedNumber.indexOf(".");
		if (point != -1) {
			if (formattedNumber.length() < point + cuttingPosition + 1)
				formattedNumber = formattedNumber.substring(0);
			else
				formattedNumber = formattedNumber.substring(0, point + cuttingPosition + 1);
		}

		return formattedNumber + percent;
	}

	/**
	 * ���¹�ȣ text format ������� ��ȯ.
	 * <p><blockquote><pre>
	 *     HrmFormat.formatAcctNo("12345678901234");
	 * </pre></blockquote><p>
	 * �ϸ� <code>"123-456789-01-234"</code> �� ��ȯ�Ѵ�.
	 *
	 * 2007.3.22 �����¹�ȣ ���� �߰� - ������
	 * 1) 10 - 123-123-1234 (HP NO)
	 * 2) 11 - 123-1234-1234 (HP NO)
	 * 3) 8 - 1234-1234
	 *
	 * @param str ���¹�ȣ string
	 * @return ���¹�ȣ text format �� string
	 * @throws ParseException text format �� ���¹�ȣ ���� 14 �ڸ��� �ƴ� ���
	 */
	public static String formatAcctNo(String str) throws ParseException {
		if (str == null)
			throw new NullPointerException("���¹�ȣ string �� null �Դϴ�.");
		int iStrLen = str.length();
		if (iStrLen != 14 && iStrLen != 10 && iStrLen != 11 && iStrLen != 8)
			throw new ParseException("���¹�ȣ ����� �ƴմϴ�.", 0);

		String acctNo = null;
		if (iStrLen == 10) {
			acctNo = str.substring(0, 3) + HrmFormat.DELIM + str.substring(3, 6) + HrmFormat.DELIM + str.substring(6, 10);
		}
		else if (iStrLen == 11) {
			acctNo = str.substring(0, 3) + HrmFormat.DELIM + str.substring(3, 7) + HrmFormat.DELIM + str.substring(7, 11);
		}
		else if (iStrLen == 8) {
			acctNo = str.substring(0, 4) + HrmFormat.DELIM + str.substring(4, 8);
		}
		else {
		// else if (iStrLen == 14) {
			acctNo = str.substring(0, 3) + HrmFormat.DELIM + str.substring(3, 9) + HrmFormat.DELIM + str.substring(9, 11) + HrmFormat.DELIM + str.substring(11, 14);
		}
		return acctNo;
	}

	/**
	 * �ݾ� text format ������� ��ȯ. �Ҽ��� 2�ڸ����� ǥ���ϸ�, �Ҽ��� 3° �ڸ����� �����Ѵ�.
	 *
	 * @param d �ݾ� double
	 * @return �ݾ� text format �� string
	 */
	public static String formatCurrency(double d) {
		return HrmFormat.formatCurrency(d, Locale.KOREA);
	}

	/**
	 * �������п� �� �ݾ� text format ������� ��ȯ. �Ҽ��� 2�ڸ����� ǥ���ϸ�, �Ҽ��� 3° �ڸ����� �����Ѵ�.
	 *
	 * @param d �ݾ� double
	 * @param inLocale ��������
	 * @return �ݾ� text format �� string
	 */
	public static String formatCurrency(double d, Locale inLocale) {
		NumberFormat nf = NumberFormat.getCurrencyInstance(inLocale);
		nf.setMaximumFractionDigits(HrmFormat.MAXIMUM_FRACTION_DIGITS + 1);
		nf.setMinimumIntegerDigits(HrmFormat.MINIMUM_INTEGER_DIGITS);

		String number = nf.format(d);
		return HrmFormat.cutFractionDigits(number, HrmFormat.MAXIMUM_FRACTION_DIGITS);
	}

	/**
	 * �ݾ� text format ������� ��ȯ. �Ҽ��� 2�ڸ����� ǥ���ϸ�, �Ҽ��� 3° �ڸ����� �����Ѵ�.
	 *
	 * @param f �ݾ� float
	 * @return �ݾ� text format �� string
	 */
	public static String formatCurrency(float f) {
		return HrmFormat.formatCurrency(f, Locale.KOREA);
	}

	/**
	 * �������п� �� �ݾ� text format ������� ��ȯ. �Ҽ��� 2�ڸ����� ǥ���ϸ�, �Ҽ��� 3° �ڸ����� �����Ѵ�.
	 *
	 * @param f �ݾ� float
	 * @param inLocale ��������
	 * @return �ݾ� text format �� string
	 */
	public static String formatCurrency(float f, Locale inLocale) {
		NumberFormat nf = NumberFormat.getCurrencyInstance(inLocale);
		nf.setMaximumFractionDigits(HrmFormat.MAXIMUM_FRACTION_DIGITS + 1);
		nf.setMinimumIntegerDigits(HrmFormat.MINIMUM_INTEGER_DIGITS);

		String number = nf.format(f);
		return HrmFormat.cutFractionDigits(number, HrmFormat.MAXIMUM_FRACTION_DIGITS);
	}

	/**
	 * �ݾ� text format ������� ��ȯ. �Ҽ��� 2�ڸ����� ǥ���ϸ�, �Ҽ��� 3° �ڸ����� �����Ѵ�.
	 *
	 * @param i �ݾ� int
	 * @return �ݾ� text format �� string
	 */
	public static String formatCurrency(int i) {
		return HrmFormat.formatCurrency(i, Locale.KOREA);
	}

	/**
	 * �������п� �� �ݾ� text format ������� ��ȯ. �Ҽ��� 2�ڸ����� ǥ���ϸ�, �Ҽ��� 3° �ڸ����� �����Ѵ�.
	 *
	 * @param i �ݾ� int
	 * @param inLocale ��������
	 * @return �ݾ� text format �� string
	 */
	public static String formatCurrency(int i, Locale inLocale) {
		NumberFormat nf = NumberFormat.getCurrencyInstance(inLocale);
		return nf.format(i);
	}

	/**
	 * �ݾ� text format ������� ��ȯ. �Ҽ��� 2�ڸ����� ǥ���ϸ�, �Ҽ��� 3° �ڸ����� �����Ѵ�.
	 *
	 * @param l �ݾ� long
	 * @return �ݾ� text format �� string
	 */
	public static String formatCurrency(long l) {
		return HrmFormat.formatCurrency(l, Locale.KOREA);
	}

	/**
	 * �������п� �� �ݾ� text format ������� ��ȯ. �Ҽ��� 2�ڸ����� ǥ���ϸ�, �Ҽ��� 3° �ڸ����� �����Ѵ�.
	 *
	 * @param l �ݾ� long
	 * @param inLocale ��������
	 * @return �ݾ� text format �� string
	 */
	public static String formatCurrency(long l, Locale inLocale) {
		NumberFormat nf = NumberFormat.getCurrencyInstance(inLocale);
		return nf.format(l);
	}

	/**
	 * �ݾ� text format ������� ��ȯ. �Ҽ��� 2�ڸ����� ǥ���ϸ�, �Ҽ��� 3° �ڸ����� �����Ѵ�.
	 *
	 * @param str �ݾ� string
	 * @return �ݾ� text format �� string
	 * @throws ParseException text format �� string �ݾ��� �������� ���ڰ� �ƴ� ���.
	 */
	public static String formatCurrency(String str) throws ParseException {
		return HrmFormat.formatCurrency(str, Locale.KOREA);
	}

	/**
	 * �������п� �� �ݾ� text format ������� ��ȯ. �Ҽ��� 2�ڸ����� ǥ���ϸ�, �Ҽ��� 3° �ڸ����� �����Ѵ�.
	 *
	 * @param str �ݾ� string
	 * @param inLocale ��������
	 * @return �ݾ� text format �� string
	 * @throws ParseException text format �� string �ݾ��� �������� ���ڰ� �ƴ� ���.
	 */
	public static String formatCurrency(String str, Locale inLocale) throws ParseException {

		if (str == null)
			throw new NullPointerException("�ݾ� string �� null �Դϴ�.");
		if (inLocale == null)
			throw new NullPointerException("����ǥ�� locale �� null �Դϴ�.");

		NumberFormat nf = NumberFormat.getInstance(inLocale);
		java.lang.Number number = nf.parse(str);
		return HrmFormat.formatCurrency(number.doubleValue(), inLocale);
	}

	/**
	 * �̱� �ݾ� text format ������� ��ȯ. �Ҽ��� 2�ڸ����� ǥ���ϸ�, �Ҽ��� 3° �ڸ����� �����Ѵ�.
	 *
	 * @param d �ݾ� double
	 * @return �ݾ� text format �� string
	 */
	public static String formatCurrencyUS(double d) {
		return HrmFormat.formatCurrency(d, Locale.US);
	}

	/**
	 * �̱� �ݾ� text format ������� ��ȯ. �Ҽ��� 2�ڸ����� ǥ���ϸ�, �Ҽ��� 3° �ڸ����� �����Ѵ�.
	 *
	 * @param f �ݾ� float
	 * @return �ݾ� text format �� string
	 */
	public static String formatCurrencyUS(float f) {
		return HrmFormat.formatCurrency(f, Locale.US);
	}

	/**
	 * �̱� �ݾ� text format ������� ��ȯ. �Ҽ��� 2�ڸ����� ǥ���ϸ�, �Ҽ��� 3° �ڸ����� �����Ѵ�.
	 *
	 * @param i �ݾ� int
	 * @return �ݾ� text format �� string
	 */
	public static String formatCurrencyUS(int i) {
		return HrmFormat.formatCurrency(i, Locale.US);
	}

	/**
	 * �̱� �ݾ� text format ������� ��ȯ. �Ҽ��� 2�ڸ����� ǥ���ϸ�, �Ҽ��� 3° �ڸ����� �����Ѵ�.
	 *
	 * @param l �ݾ� long
	 * @return �ݾ� text format �� string
	 */
	public static String formatCurrencyUS(long l) {
		return HrmFormat.formatCurrency(l, Locale.US);
	}

	/**
	 * �̱� �ݾ� text format ������� ��ȯ. �Ҽ��� 2�ڸ����� ǥ���ϸ�, �Ҽ��� 3° �ڸ����� �����Ѵ�.
	 *
	 * @param str �ݾ� string
	 * @return �ݾ� text format �� string
	 * @throws ParseException text format �� string �ݾ��� �������� ���ڰ� �ƴ� ���.
	 */
	public static String formatCurrencyUS(String str) throws ParseException {
		return HrmFormat.formatCurrency(str, Locale.US);
	}

	/**
	 * ��¥ text format ������� ��ȯ. text format �� string �� ��¥ ����� "yyyy-MM-dd" �����̴�.
	 *
	 * @param date ��¥ date
	 * @return ��¥ text format �� string
	 */
	public static String formatDate(Date date) {
		return HrmFormat.formatDate(date, HrmFormat.PATTERN_DATE);
	}

	/**
	 * ��¥ text format ������� ��ȯ.
	 *
	 * @param date ��¥ date
	 * @param pattern ��¥ ���
	 * @return ��¥ text format �� string
	 */
	public static String formatDate(Date date, String pattern) {

		if (date == null)
			throw new NullPointerException("��¥ date �� null �Դϴ�.");
		if (pattern == null)
			throw new NullPointerException("��¥ ���� string �� null �Դϴ�.");

		SimpleDateFormat sdf = new SimpleDateFormat(pattern);
		return sdf.format(date);
	}

	/**
	 * ��¥ text format ������� ��ȯ. text format �� string �� ��¥ ����� "yyyy-MM-dd" �����̴�.
	 * <p><blockquote><pre>
	 *     HrmFormat.formatDate("20050627");
	 * </pre></blockquote><p>
	 * �ϸ� <code>"2005-06-27"</code> �� ��ȯ�Ѵ�.
	 *
	 * @param str ��¥ string
	 * @return ��¥ text format �� string
	 * @throws ParseException text format �� string ��¥�� �������� ��¥�� �ƴϰų� string ��¥�� ���°� �߸�Ǿ��� ���.
	 */
	public static String formatDate3(String str) throws ParseException {
		return HrmFormat.formatDate(str, HrmFormat.PATTERN_DATE);
	}

	/**
	 * ��¥ text format ������� ��ȯ.
	 * text format �� string �� ����� "yyyyMMdd" �����̾�� �Ѵ�.
	 * text format �� string �� ��¥ ����� "yyyy-MM-dd" �����̴�.
	 * <p><blockquote><pre>
	 *     HrmFormat.formatDate("20050627", "yyyy-MM-dd");
	 * </pre></blockquote><p>
	 * �ϸ� <code>"2005-06-27"</code> �� ��ȯ�Ѵ�.
	 *
	 * @param str ��¥ string
	 * @param pattern ��ȯ�� ��¥ ���
	 * @return ��¥ text format �� string
	 * @throws ParseException text format �� string ��¥�� �������� ��¥�� �ƴϰų� string ��¥�� ���°� �߸�Ǿ��� ���.
	 */
	public static String formatDate(String str, String pattern) throws ParseException {

		// DateUtil.isDate ���� null check �Ѵ�.
		if (!DateUtil.isDate(str))
			throw new ParseException(str + "�� �������� �ʴ� ��¥ �Դϴ�.", 0);


		SimpleDateFormat sdf = new SimpleDateFormat(HrmFormat.PATTERN_DATE_WITHOUT_DELIM);
		str = HrmFormat.removeFormatDate(str);

		return HrmFormat.formatDate(sdf.parse(str), pattern);
	}

	/**
	 * ��¥ text format ������� ��ȯ.
	 * text format �� string �� ����� "yyyyMMdd" �����̾�� �Ѵ�.
	 * text format �� string �� ��¥ ����� "yyyy-MM-dd" �����̴�.
	 * <p><blockquote><pre>
	 *     HrmFormat.formatDate("20050627", "yyyy-MM-dd");
	 * </pre></blockquote><p>
	 * �ϸ� <code>"2005-06-27"</code> �� ��ȯ�Ѵ�.
	 *
	 * @param str ��¥ string
	 * @param pattern ��¥ ���
	 * @return ��¥ text format �� string
	 * @throws ParseException text format �� string ��¥�� �������� ��¥�� �ƴϰų� string ��¥�� ���°� �߸�Ǿ��� ���.
	 */
	public static String formatDate2(String str, String pattern) throws ParseException {

		// ��¥ string �� yyyyMMdd �����̾�߸� �Ѵ�.
		// DateUtil.isDate ���� null check �Ѵ�.
		if (str == null || str.equals("")) return "";
	  if (!DateUtil.isDate(str, HrmFormat.PATTERN_DATE_WITHOUT_DELIM))
			throw new ParseException(str + "�� �������� �ʴ� ��¥ �Դϴ�.", 0);

		SimpleDateFormat sdf = new SimpleDateFormat(HrmFormat.PATTERN_DATE_WITHOUT_DELIM);

		return HrmFormat.formatDate(sdf.parse(str), pattern);
	}

	/**
	 * �ѱ� ��¥ text format ������� ��ȯ.
	 * text format �� string �� ��¥ ����� "yyyy�� MM�� dd��" �����̴�.
	 *
	 * @param date ��¥ date
	 * @return ��¥ text format �� string
	 */
	public static String formatDateKor(Date date) {
		return HrmFormat.formatDate(date, HrmFormat.PATTERN_DATE_KOR);
	}

	/**
	 * �ѱ� ��¥ text format ������� ��ȯ.
	 * text format �� string �� ��¥ ����� "yyyy�� MM�� dd��" �����̴�.
	 *
	 * @param str ��¥ string
	 * @return ��¥ text format �� string
	 * @throws ParseException text format �� string ��¥�� �������� ��¥�� �ƴϰų� string ��¥�� ���°� �߸�Ǿ��� ���.
	 */
	public static String formatDateKor(String str) throws ParseException {
		return HrmFormat.formatDate(str, HrmFormat.PATTERN_DATE_KOR);
	}

	/**
	 * ��¥ text format ������� ��ȯ.
	 * text format �� string �� ��¥ ����� "yyyy-MM" �����̴�.
	 *
	 * @param date ��¥ date
	 * @return ��¥ text format �� string
	 */
	public static String formatDateYM(Date date) {

		if (date == null)
			throw new NullPointerException("��¥ date �� null �Դϴ�.");

		SimpleDateFormat sdf = new SimpleDateFormat(HrmFormat.PATTERN_DATE_YM);
		return sdf.format(date);
	}

	/**
	 * ��¥ text format ������� ��ȯ.
	 * text format �� string �� ����� "yyyyMMdd" �����̾�� �Ѵ�.
	 * text format �� string �� ��¥ ����� "yyyy-MM" �����̴�.
	 *
	 * @param str ��¥ string
	 * @return ��¥ text format �� string
	 * @throws ParseException text format �� string ��¥�� �������� ��¥�� �ƴϰų� string ��¥�� ���°� �߸�Ǿ��� ���.
	 */
	public static String formatDateYM(String str) throws ParseException {

		// �Է°��� yyyyMMdd �����̾�߸� �Ѵ�.
		// HrmFormat.parseDate ���� null check �Ѵ�.
		Date date = HrmFormat.parseDate(str, HrmFormat.PATTERN_DATE_WITHOUT_DELIM);

		return HrmFormat.formatDateYM(date);
	}

	/**
	 * ���� text format ������� ��ȯ. �Ҽ��� 2�ڸ����� ǥ���ϸ�, �Ҽ��� 3° �ڸ����� �����Ѵ�.
	 *
	 * @param d ���� double
	 * @return ���� text format �� string
	 */
	public static String formatNumber(double d) {
		NumberFormat nf = NumberFormat.getInstance();
		nf.setMaximumFractionDigits(HrmFormat.MAXIMUM_FRACTION_DIGITS + 1);
		nf.setMinimumIntegerDigits(HrmFormat.MINIMUM_INTEGER_DIGITS);

		String number = nf.format(d);
		return HrmFormat.cutFractionDigits(number, HrmFormat.MAXIMUM_FRACTION_DIGITS);
	}

	/**
	 * ���� text format ������� ��ȯ. �Ҽ��� 2�ڸ����� ǥ���ϸ�, �Ҽ��� 3° �ڸ����� �����Ѵ�.
	 *
	 * @param f ���� float
	 * @return ���� text format �� string
	 */
	public static String formatNumber(float f) {
		NumberFormat nf = NumberFormat.getInstance();
		nf.setMaximumFractionDigits(HrmFormat.MAXIMUM_FRACTION_DIGITS + 1);
		nf.setMinimumIntegerDigits(HrmFormat.MINIMUM_INTEGER_DIGITS);

		String number = nf.format(f);
		return HrmFormat.cutFractionDigits(number, HrmFormat.MAXIMUM_FRACTION_DIGITS);
	}

	/**
	 * ���� text format ������� ��ȯ. �Ҽ��� 2�ڸ����� ǥ���ϸ�, �Ҽ��� 3° �ڸ����� �����Ѵ�.
	 *
	 * @param i ���� int
	 * @return ���� text format �� string
	 */
	public static String formatNumber(int i) {
		NumberFormat nf = NumberFormat.getInstance();
		return nf.format(i);
	}

	/**
	 * ���� text format ������� ��ȯ. �Ҽ��� 2�ڸ����� ǥ���ϸ�, �Ҽ��� 3° �ڸ����� �����Ѵ�.
	 *
	 * @param l ���� long
	 * @return ���� text format �� string
	 */
	public static String formatNumber(long l) {
		NumberFormat nf = NumberFormat.getInstance();
		return nf.format(l);
	}

	/**
	 * ���� text format ������� ��ȯ. �Ҽ��� 2�ڸ����� ǥ���ϸ�, �Ҽ��� 3° �ڸ����� �����Ѵ�.
	 *
	 * @param str ���� string
	 * @return ���� text format �� string
	 * @throws ParseException text format �� string ���ڰ� �������� ���ڰ� �ƴ� ���.
	 */
	public static String formatNumber(String str) throws ParseException {

		if (str == null)
			throw new NullPointerException("���� string �� null �Դϴ�.");

		NumberFormat nf = NumberFormat.getInstance();
		java.lang.Number number = nf.parse(str);
		return HrmFormat.formatNumber(number.doubleValue());

		//		boolean isMinus = str.startsWith("-");
		//		if (isMinus)
		//			str = str.substring(1);
		//
		//		boolean hasDecimal = false;
		//		String partOfDecimal = "";
		//		int decimalInx = str.indexOf(".");
		//		if (decimalInx != -1) {
		//			partOfDecimal = str.substring(decimalInx);
		//			str = str.substring(0, decimalInx);
		//			hasDecimal = true;
		//		}
		//
		//		char[] cs = str.toCharArray();
		//
		//		String number = "";
		//		int point = 1;
		//		for (int i = cs.length - 1; i >= 0; i--) {
		//  			number = cs[i] + number;
		//  			if (point % 3 == 0 && point != cs.length) {
		//				number = HrmFormat.DELIM_NUMBER + number;
		//  			}
		//  			point++;
		//
		//		}

		//		if (isMinus)
		//			number = '-' + number;

		//		if (hasDecimal)
		//			number = number + partOfDecimal;
		//
		//		return number;
	}

	/**
	 * �ۼ�Ʈ text format ������� ��ȯ. �Ҽ��� 2�ڸ����� ǥ���ϸ�, �Ҽ��� 3° �ڸ����� �����Ѵ�.
	 * <p><blockquote><pre>
	 *     HrmFormat.formatPercent(0.12345);
	 * </pre></blockquote><p>
	 * �ϸ� <code>12.34%</code>�� ��ȯ�Ѵ�.
	 *
	 * @param d �ۼ�Ʈ double
	 * @return �ۼ�Ʈ text format �� string
	 */
	public static String formatPercent(double d) {
		NumberFormat nf = NumberFormat.getPercentInstance();
		nf.setMaximumFractionDigits(HrmFormat.MAXIMUM_FRACTION_DIGITS + 1);
		nf.setMinimumIntegerDigits(HrmFormat.MINIMUM_INTEGER_DIGITS);

		String number = nf.format(d);
		return HrmFormat.cutFractionDigits(number, HrmFormat.MAXIMUM_FRACTION_DIGITS);
	}

	/**
	 * �ۼ�Ʈ text format ������� ��ȯ. �Ҽ��� 2�ڸ����� ǥ���ϸ�, �Ҽ��� 3° �ڸ����� �����Ѵ�.
	 * <p><blockquote><pre>
	 *     HrmFormat.formatPercent(0.12345);
	 * </pre></blockquote><p>
	 * �ϸ� <code>12.34%</code>�� ��ȯ�Ѵ�.
	 *
	 * @param f �ۼ�Ʈ float
	 * @return �ۼ�Ʈ text format �� string
	 */
	public static String formatPercent(float f) {
		NumberFormat nf = NumberFormat.getPercentInstance();
		nf.setMaximumFractionDigits(HrmFormat.MAXIMUM_FRACTION_DIGITS + 1);
		nf.setMinimumIntegerDigits(HrmFormat.MINIMUM_INTEGER_DIGITS);

		String number = nf.format(f);
		return HrmFormat.cutFractionDigits(number, HrmFormat.MAXIMUM_FRACTION_DIGITS);
	}

	/**
	 * �ۼ�Ʈ text format ������� ��ȯ. �Ҽ��� 2�ڸ����� ǥ���ϸ�, �Ҽ��� 3° �ڸ����� �����Ѵ�.
	 * <p><blockquote><pre>
	 *     HrmFormat.formatPercent("0.12345");
	 * </pre></blockquote><p>
	 * �ϸ� <code>12.34%</code>�� ��ȯ�Ѵ�.
	 *
	 * @param str �ۼ�Ʈ string
	 * @return �ۼ�Ʈ text format �� string
	 * @throws ParseException �ۼ�Ʈ text format �� string �ݾ��� �������� ���ڰ� �ƴ� ���.
	 */
	public static String formatPercent(String str) throws ParseException {
		if (str == null)
			throw new NullPointerException("�ۼ�Ʈ string �� null �Դϴ�.");

		NumberFormat nf = NumberFormat.getInstance();
		java.lang.Number number = nf.parse(str);

		return HrmFormat.formatPercent(number.doubleValue());
	}

	/**
	 * ��ȭ��ȣ text format ������� ��ȯ.
	 * <p><blockquote><pre>
	 *     HrmFormat.formatPhoneNo("027296759");
	 * </pre></blockquote><p>
	 * �ϸ� <code>"02-729-6759"</code> �� ��ȯ�Ѵ�.
	 *
	 * @param str ��ȭ��ȣ string
	 * @return ��ȭ��ȣ text format �� string
	 * @throws ParseException text format �� ��ȭ��ȣ ���� 7~11 �ڸ��� �ƴ� ���
	 */
	public static String formatPhoneNo(String str) throws ParseException {

		if (str == null)
			throw new NullPointerException("��ȭ��ȣ string �� null �Դϴ�.");

		int len = str.length();

		if (len < 7) {
			throw new ParseException(str + "�� ��ȭ��ȣ ����� �ƴմϴ�.", 0);
		}
		else if (len == 7 || len == 8) {
			str = "02" + str; // ���������� ��ȭ��ȣ�� �����Ѵ�.
			len += 2;
		}
		else if (len > 11) {
			throw new ParseException(str + "�� ��ȭ��ȣ ����� �ƴմϴ�.", 1);
		}

		String phoneNo = null;
		if (str.startsWith("02")) {
			if (len == 9) {
				phoneNo = str.substring(0, 2) + HrmFormat.DELIM + str.substring(2, 5) + HrmFormat.DELIM + str.substring(5);
			}
			else if (len == 10) {
				phoneNo = str.substring(0, 2) + HrmFormat.DELIM + str.substring(2, 6) + HrmFormat.DELIM + str.substring(6);
			}
		}
		else {
			if (len == 10) {
				phoneNo = str.substring(0, 3) + HrmFormat.DELIM + str.substring(3, 6) + HrmFormat.DELIM + str.substring(6);
			}
			else if (len == 11) {
				phoneNo = str.substring(0, 3) + HrmFormat.DELIM + str.substring(3, 7) + HrmFormat.DELIM + str.substring(7);
			}
		}

		if (phoneNo == null)
			throw new ParseException(str + "�� ��ȭ��ȣ ����� �ƴմϴ�.", 2);

		return phoneNo;
	}

	/**
	 * �ֹι�ȣ text format ������� ��ȯ.
	 * <p><blockquote><pre>
	 *     HrmFormat.formatPId("1234567123456");
	 * </pre></blockquote><p>
	 * �ϸ� <code>"1234567-123456"</code> �� ��ȯ�Ѵ�.
	 *
	 * @param str �ֹι�ȣ string
	 * @return �ֹι�ȣ text format �� string
	 * @throws ParseException text format �� �ֹι�ȣ ���� 13�ڸ��� �ƴ� ���
	 */
	public static String formatPId(String str) throws ParseException {

		if (str == null)
			throw new NullPointerException("�ֹι�ȣ string �� null �Դϴ�.");
		if (str.length() != 13)
			throw new ParseException("�ֹι�ȣ ����� �ƴմϴ�.", 0);

		String pId = str.substring(0, 6) + HrmFormat.DELIM + str.substring(6);
		return pId;
	}

	/**
	 * �����ȣ text format ������� ��ȯ.
	 * <p><blockquote><pre>
	 *     HrmFormat.formatPost("123456");
	 * </pre></blockquote><p>
	 * �ϸ� <code>"123-456"</code> �� ��ȯ�Ѵ�.
	 *
	 * @param str �����ȣ string
	 * @return �����ȣ text format �� string
	 * @throws ParseException text format �� �����ȣ ���� 6���� �ƴ� ���
	 */
	public static String formatPost(String str) throws ParseException {

		if (str == null)
			throw new NullPointerException("�����ȣ string �� null �Դϴ�.");
		if (str.length() != 6)
			throw new ParseException("�����ȣ ����� �ƴմϴ�.", 0);

		String post = str.substring(0, 3) + HrmFormat.DELIM + str.substring(3);
		return post;
	}

	/**
	 * �ð� text format ������� ��ȯ.
	 * text format �� string �� ��¥ ����� "HH:mm:ss" �����̴�.
	 *
	 * @param date �ð� date
	 * @return �ð� text format �� string
	 */
	public static String formatTime(Date date) {

		if (date == null)
			throw new NullPointerException("��¥ date �� null �Դϴ�.");

		SimpleDateFormat sdf = new SimpleDateFormat(HrmFormat.PATTERN_TIME);
		return sdf.format(date);
	}

	/**
	 * �ð� text format ������� ��ȯ.
	 * text format �� string �� ����� "yyyyMMdd HHmmss" �����̾�� �Ѵ�.
	 * text format �� string �� ��¥ ����� "HH:mm:ss" �����̴�.
	 *
	 * @param str �ð� string
	 * @return �ð� text format �� string
	 * @throws ParseException text format �� string ��¥�� �������� ��¥�� �ƴϰų� string ��¥�� ���°� �߸�Ǿ��� ���.
	 */
	public static String formatTime(String str) throws ParseException {

		// �Է°��� yyyyMMdd �����̾�߸� �Ѵ�.
		// HrmFormat.parseDate ���� null check �Ѵ�.
		Date date = HrmFormat.parseDate(str, HrmFormat.PATTERN_DATE_TIME_WITHOUT_DELIM);

		return HrmFormat.formatTime(date);
	}

	/**
	 * �Է°��� ���̰� size ���� ���� ��� ������ space �� size ��ŭ ä���.
	 * �Է°��� ���̰� size ���� Ŭ ��� size ���̸�ŭ �Է°��� �������� ��ȯ�Ѵ�.
	 *
	 * @param d ���� double
	 * @param size ��ȯ�� ����
	 * @return lpad �� ���� string
	 */
	public static String lpad(double d, int size) {
		char pad = ' ';
		String lpad = HrmFormat.lpad(d, size, pad);

		return lpad;
	}

	/**
	 * �Է°��� ���̰� size ���� ���� ��� ������ pad �� size ��ŭ ä���.
	 * �Է°��� ���̰� size ���� Ŭ ��� size ���̸�ŭ �Է°��� �������� ��ȯ�Ѵ�.
	 *
	 * @param d ���� double
	 * @param size ��ȯ�� ����
	 * @param pad ������ ä�� char
	 * @return lpad �� ���� string
	 */
	public static String lpad(double d, int size, char pad) {
		BigDecimal big = new BigDecimal(d);
		String lpad = String.valueOf(big.toString());
		lpad = HrmFormat.lpad(lpad, size, pad);

		return lpad;
	}

	/**
	 * �Է°��� ���̰� size ���� ���� ��� ������ space �� size ��ŭ ä���.
	 * �Է°��� ���̰� size ���� Ŭ ��� size ���̸�ŭ �Է°��� �������� ��ȯ�Ѵ�.
	 *
	 * @param f ���� float
	 * @param size ��ȯ�� ����
	 * @return lpad �� ���� string
	 */
	public static String lpad(float f, int size) {
		char pad = ' ';
		String lpad = HrmFormat.lpad(f, size, pad);

		return lpad;
	}

	/**
	 * �Է°��� ���̰� size ���� ���� ��� ������ pad �� size ��ŭ ä���.
	 * �Է°��� ���̰� size ���� Ŭ ��� size ���̸�ŭ �Է°��� �������� ��ȯ�Ѵ�.
	 *
	 * @param f ���� float
	 * @param size ��ȯ�� ����
	 * @param pad ������ ä�� char
	 * @return lpad �� ���� string
	 */
	public static String lpad(float f, int size, char pad) {
		String lpad = String.valueOf(f);
		lpad = HrmFormat.lpad(lpad, size, pad);

		return lpad;
	}

	/**
	 * �Է°��� ���̰� size ���� ���� ��� ������ space �� size ��ŭ ä���.
	 * �Է°��� ���̰� size ���� Ŭ ��� size ���̸�ŭ �Է°��� �������� ��ȯ�Ѵ�.
	 *
	 * @param i ���� int
	 * @param size ��ȯ�� ����
	 * @return lpad �� ���� string
	 */
	public static String lpad(int i, int size) {
		char pad = ' ';
		String lpad = HrmFormat.lpad(i, size, pad);

		return lpad;
	}

	/**
	 * �Է°��� ���̰� size ���� ���� ��� ������ pad �� size ��ŭ ä���.
	 * �Է°��� ���̰� size ���� Ŭ ��� size ���̸�ŭ �Է°��� �������� ��ȯ�Ѵ�.
	 *
	 * @param i ���� int
	 * @param size ��ȯ�� ����
	 * @param pad ������ ä�� char
	 * @return lpad �� ���� string
	 */
	public static String lpad(int i, int size, char pad) {
		String lpad = String.valueOf(i);
		lpad = HrmFormat.lpad(lpad, size, pad);

		return lpad;
	}

	/**
	 * �Է°��� ���̰� size ���� ���� ��� ������ space �� size ��ŭ ä���.
	 * �Է°��� ���̰� size ���� Ŭ ��� size ���̸�ŭ �Է°��� �������� ��ȯ�Ѵ�.
	 *
	 * @param l ���� long
	 * @param size ��ȯ�� ����
	 * @return lpad �� ���� string
	 */
	public static String lpad(long l, int size) {
		char pad = ' ';
		String lpad = HrmFormat.lpad(l, size, pad);

		return lpad;
	}

	/**
	 * �Է°��� ���̰� size ���� ���� ��� ������ pad �� size ��ŭ ä���.
	 * �Է°��� ���̰� size ���� Ŭ ��� size ���̸�ŭ �Է°��� �������� ��ȯ�Ѵ�.
	 *
	 * @param l ���� long
	 * @param size ��ȯ�� ����
	 * @param pad ������ ä�� char
	 * @return lpad �� ���� string
	 */
	public static String lpad(long l, int size, char pad) {
		String lpad = String.valueOf(l);
		lpad = HrmFormat.lpad(lpad, size, pad);

		return lpad;
	}

	/**
	 * �Է°��� ���̰� size ���� ���� ��� ������ space �� size ��ŭ ä���.
	 * �Է°��� ���̰� size ���� Ŭ ��� size ���̸�ŭ �Է°��� �������� ��ȯ�Ѵ�.
	 *
	 * @param str ���� string
	 * @param size ��ȯ�� ����
	 * @return lpad �� ���� string
	 */
	public static String lpad(String str, int size) {
		char pad = ' ';
		String lpad = HrmFormat.lpad(str, size, pad);

		return lpad;
	}

	/**
	 * �Է°��� ���̰� size ���� ���� ��� ������ pad �� size ��ŭ ä���.
	 * �Է°��� ���̰� size ���� Ŭ ��� size ���̸�ŭ �Է°��� �������� ��ȯ�Ѵ�.
	 *
	 * @param str ���� string
	 * @param size ��ȯ�� ����
	 * @param pad ������ ä�� char
	 * @return lpad �� ���� string
	 */
	public static String lpad(String str, int size, char pad) {

		if (str == null)
			throw new NullPointerException("lpad �� string �� null �Դϴ�.");

		String lpad = str;
		if (lpad.length() > size) {
			lpad = lpad.substring(lpad.length() - size);
		}
		else if (lpad.length() < size) {
			char[] cs = new char[size - lpad.length()];
			for (int i = 0; i < cs.length; i++)
				cs[i] = pad;

			lpad = String.copyValueOf(cs) + lpad;
		}

		return lpad;
	}

	public static String lpadForByte(String str, int size, char pad) {

		if (str == null)
			throw new NullPointerException("lpad �� string �� null �Դϴ�.");

		byte[] lpadBytes = new byte[size];
		byte[] strBytes = str.getBytes();
		if (strBytes.length >= lpadBytes.length) {
			System.arraycopy(strBytes, 0, lpadBytes, 0, lpadBytes.length);
		}
		else {
			byte[] padBytes = new byte[size - strBytes.length];
			for (int i = 0; i < size - strBytes.length; i++) {
				padBytes[i] = String.valueOf(pad).getBytes()[0];
			}

			System.arraycopy(padBytes, 0, lpadBytes, 0, lpadBytes.length - strBytes.length);
			System.arraycopy(strBytes, 0, lpadBytes, lpadBytes.length - strBytes.length, strBytes.length);
		}

		return new String(lpadBytes);
	}

	/**
	 * ��¥ string �� ��¥ date �� ��ȯ. ��¥ string �� ��¥ ����� "yyyy-MM-dd" �̾�� �Ѵ�.
	 *
	 * @param str ��¥ string
	 * @return ��¥ date
	 * @throws ParseException ��ȯ�� string ��¥�� �������� ��¥�� �ƴϰų� string ��¥�� ���°� �߸�Ǿ��� ���.
	 */
	public static Date parseDate(String str) throws ParseException {
		return parseDate(str, HrmFormat.PATTERN_DATE);
	}

	/**
	 * ��¥ string �� ��¥ date �� ��ȯ.
	 *
	 * @param str ��¥ string
	 * @param pattern ��¥ ���
	 * @return ��¥ date 
	 * @throws ParseException ��ȯ�� string ��¥�� �������� ��¥�� �ƴϰų� string ��¥�� ���°� �߸�Ǿ��� ���.
	 */
	public static Date parseDate(String str, String pattern) throws ParseException {

		// DateUtil.isDate ���� null check �Ѵ�.
		if (!DateUtil.isDate(str, pattern))
			throw new ParseException(str + "�� �������� �ʴ� ��¥ �Դϴ�.", 0);

		SimpleDateFormat sdf = new SimpleDateFormat(pattern);
		return sdf.parse(str);
	}

	/**
	 * ���� string �� ���Ե� Ư�����ڸ� �����Ѵ�.
	 *
	 * @param str ���� string
	 * @param regex ������ Ư������
	 * @return Ư�����ڰ� ���ŵ� ���� string
	 */
	public static String removeFormat(String str, String regex) {
		if (str == null)
			throw new NullPointerException("format�� ������ string �� null �Դϴ�.");
		if (regex == null)
			throw new NullPointerException("format ���� ǥ����� string �� null �Դϴ�.");

		String replacement = "";
		String remStr = str;
		if (".".equals(regex)) {
			remStr = remStr.replace(regex.charAt(0), '-');
			regex = "-";
		}

		remStr = remStr.replaceAll(regex, replacement);

		return remStr;
	}

	/**
	 * ���¹�ȣ text format string �� ���Ե� Ư������ <code>"-"</code> �� �����Ѵ�.
	 *
	 * @param str ���¹�ȣ text format string
	 * @return Ư�����ڰ� ���ŵ� ���¹�ȣ string
	 */
	public static String removeFormatAcctNo(String str) {
		String regex = HrmFormat.DELIM;
		String remStr = HrmFormat.removeFormat(str, regex);
		return remStr;
	}

	/**
	 * ���� string �� ���Ե� Ư������ <code>"/", "-", ",", ":", ".", ";"</code> �� �����Ѵ�.
	 *
	 * @param str ���� string
	 * @return Ư�����ڰ� ���ŵ� ���� string
	 */
	public static String removeFormatAll(String str) {

		String[] regex = new String[] {"/", "-", ",", ":", ".", ";"};

		String remStr = str;
		for (int i = 0; i < regex.length; i++) {
			remStr = HrmFormat.removeFormat(remStr, regex[i]);
		}

		return remStr;
	}

	/**
	 * �ݾ� text format string �� ���Ե� Ư������ <code>","</code> �� �����Ѵ�.
	 *
	 * @param str �ݾ� text format string
	 * @return Ư�����ڰ� ���ŵ� �ݾ� string
	 */
	public static String removeFormatCurrency(String str) {
		String regex = HrmFormat.DELIM_NUMBER;
		String remStr = HrmFormat.removeFormat(str, regex);
		return remStr;
	}

	/**
	 * ��¥ text format string �� ���Ե� Ư������ <code>"-", ":"</code> �� �����Ѵ�.
	 *
	 * @param str ��¥ text format string
	 * @return Ư�����ڰ� ���ŵ� ��¥ string
	 */
	public static String removeFormatDate(String str) {
		String regex = HrmFormat.DELIM;
		String remStr = HrmFormat.removeFormat(str, regex);

		regex = ":";
		remStr = HrmFormat.removeFormat(remStr, regex);

		return remStr;
	}

	/**
	 * ���� text format string �� ���Ե� Ư������ <code>","</code> �� �����Ѵ�.
	 *
	 * @param str ���� text format string
	 * @return Ư�����ڰ� ���ŵ� ���� string
	 */
	public static String removeFormatNumber(String str) {
		String regex = HrmFormat.DELIM_NUMBER;
		String remStr = HrmFormat.removeFormat(str, regex);
		return remStr;
	}

	/**
	 * �ֹι�ȣ text format string �� ���Ե� Ư������ <code>"-"</code> �� �����Ѵ�.
	 *
	 * @param str �ֹι�ȣ text format string
	 * @return Ư�����ڰ� ���ŵ� �ֹι�ȣ string
	 */
	public static String removeFormatPId(String str) {
		String regex = HrmFormat.DELIM;
		String remStr = HrmFormat.removeFormat(str, regex);
		return remStr;
	}

	/**
	 * �����ȣ text format string �� ���Ե� Ư������ <code>"-"</code> �� �����Ѵ�.
	 *
	 * @param str �����ȣ text format string
	 * @return Ư�����ڰ� ���ŵ� �����ȣ string
	 */
	public static String removeFormatPost(String str) {
		String regex = HrmFormat.DELIM;
		String remStr = HrmFormat.removeFormat(str, regex);
		return remStr;
	}

	/**
	 * �Է°��� ���̰� size ���� ���� ��� �������� space �� size ��ŭ ä���.
	 * �Է°��� ���̰� size ���� Ŭ ��� size ���̸�ŭ �Է°��� ������ ��ȯ�Ѵ�.
	 *
	 * @param d ���� double
	 * @param size ��ȯ�� ����
	 * @return rpad �� ���� string
	 */
	public static String rpad(double d, int size) {
		char pad = ' ';
		String rpad = HrmFormat.rpad(d, size, pad);

		return rpad;
	}

	/**
	 * �Է°��� ���̰� size ���� ���� ��� �������� pad �� size ��ŭ ä���.
	 * �Է°��� ���̰� size ���� Ŭ ��� size ���̸�ŭ �Է°��� ������ ��ȯ�Ѵ�.
	 *
	 * @param d ���� double
	 * @param size ��ȯ�� ����
	 * @param pad �������� ä�� char
	 * @return rpad �� ���� string
	 */
	public static String rpad(double d, int size, char pad) {
		BigDecimal big = new BigDecimal(d);
		String rpad = String.valueOf(big.toString());
		rpad = HrmFormat.rpad(rpad, size, pad);

		return rpad;
	}

	/**
	 * �Է°��� ���̰� size ���� ���� ��� �������� space �� size ��ŭ ä���.
	 * �Է°��� ���̰� size ���� Ŭ ��� size ���̸�ŭ �Է°��� ������ ��ȯ�Ѵ�.
	 *
	 * @param f ���� float
	 * @param size ��ȯ�� ����
	 * @return rpad �� ���� string
	 */
	public static String rpad(float f, int size) {
		char pad = ' ';
		String rpad = HrmFormat.rpad(f, size, pad);

		return rpad;
	}

	/**
	 * �Է°��� ���̰� size ���� ���� ��� �������� pad �� size ��ŭ ä���.
	 * �Է°��� ���̰� size ���� Ŭ ��� size ���̸�ŭ �Է°��� ������ ��ȯ�Ѵ�.
	 *
	 * @param f ���� float
	 * @param size ��ȯ�� ����
	 * @param pad �������� ä�� char
	 * @return rpad �� ���� string
	 */
	public static String rpad(float f, int size, char pad) {
		String rpad = String.valueOf(f);
		rpad = HrmFormat.rpad(rpad, size, pad);

		return rpad;
	}

	/**
	 * �Է°��� ���̰� size ���� ���� ��� �������� space �� size ��ŭ ä���.
	 * �Է°��� ���̰� size ���� Ŭ ��� size ���̸�ŭ �Է°��� ������ ��ȯ�Ѵ�.
	 *
	 * @param i ���� int
	 * @param size ��ȯ�� ����
	 * @return rpad �� ���� string
	 */
	public static String rpad(int i, int size) {
		char pad = ' ';
		String rpad = HrmFormat.rpad(i, size, pad);

		return rpad;
	}

	/**
	 * �Է°��� ���̰� size ���� ���� ��� �������� pad �� size ��ŭ ä���.
	 * �Է°��� ���̰� size ���� Ŭ ��� size ���̸�ŭ �Է°��� ������ ��ȯ�Ѵ�.
	 *
	 * @param i ���� int
	 * @param size ��ȯ�� ����
	 * @param pad �������� ä�� char
	 * @return rpad �� ���� string
	 */
	public static String rpad(int i, int size, char pad) {
		String rpad = String.valueOf(i);
		rpad = HrmFormat.rpad(rpad, size, pad);

		return rpad;
	}

	/**
	 * �Է°��� ���̰� size ���� ���� ��� �������� space �� size ��ŭ ä���.
	 * �Է°��� ���̰� size ���� Ŭ ��� size ���̸�ŭ �Է°��� ������ ��ȯ�Ѵ�.
	 *
	 * @param l ���� long
	 * @param size ��ȯ�� ����
	 * @return rpad �� ���� string
	 */
	public static String rpad(long l, int size) {
		char pad = ' ';
		String rpad = HrmFormat.rpad(l, size, pad);

		return rpad;
	}

	/**
	 * �Է°��� ���̰� size ���� ���� ��� �������� pad �� size ��ŭ ä���.
	 * �Է°��� ���̰� size ���� Ŭ ��� size ���̸�ŭ �Է°��� ������ ��ȯ�Ѵ�.
	 *
	 * @param l ���� long
	 * @param size ��ȯ�� ����
	 * @param pad �������� ä�� char
	 * @return rpad �� ���� string
	 */
	public static String rpad(long l, int size, char pad) {
		String rpad = String.valueOf(l);
		rpad = HrmFormat.rpad(rpad, size, pad);

		return rpad;
	}

	/**
	 * �Է°��� ���̰� size ���� ���� ��� �������� space �� size ��ŭ ä���.
	 * �Է°��� ���̰� size ���� Ŭ ��� size ���̸�ŭ �Է°��� ������ ��ȯ�Ѵ�.
	 *
	 * @param str ���� string
	 * @param size ��ȯ�� ����
	 * @return rpad �� ���� string
	 */
	public static String rpad(String str, int size) {
		char pad = ' ';
		String rpad = HrmFormat.rpad(str, size, pad);

		return rpad;
	}

	/**
	 * �Է°��� ���̰� size ���� ���� ��� �������� pad �� size ��ŭ ä���.
	 * �Է°��� ���̰� size ���� Ŭ ��� size ���̸�ŭ �Է°��� ������ ��ȯ�Ѵ�.
	 *
	 * @param str ���� string
	 * @param size ��ȯ�� ����
	 * @param pad �������� ä�� char
	 * @return rpad �� ���� string
	 */
	public static String rpad(String str, int size, char pad) {
		if (str == null)
			throw new NullPointerException("rpad �� string �� null �Դϴ�.");

		String rpad = str;
		if (rpad.length() > size) {
			rpad = rpad.substring(0, size);
		}
		else if (rpad.length() < size) {
			char[] cs = new char[size - rpad.length()];
			for (int i = 0; i < cs.length; i++)
				cs[i] = pad;

			rpad = rpad + String.copyValueOf(cs);
		}

		return rpad;
	}

	public static String rpadForByte(String str, int size, char pad) {
		if (str == null)
			throw new NullPointerException("rpad �� string �� null �Դϴ�.");

		byte[] rpadBytes = new byte[size];
		byte[] strBytes = str.getBytes();
		if (strBytes.length >= rpadBytes.length) {
			System.arraycopy(strBytes, 0, rpadBytes, 0, rpadBytes.length);
		}
		else {
			byte[] padBytes = new byte[size - strBytes.length];
			for (int i = 0; i < size - strBytes.length; i++) {
				padBytes[i] = String.valueOf(pad).getBytes()[0];
			}

			System.arraycopy(strBytes, 0, rpadBytes, 0, strBytes.length);
			System.arraycopy(padBytes, 0, rpadBytes, strBytes.length, rpadBytes.length - strBytes.length);
		}

		return new String(rpadBytes);
	}

}
