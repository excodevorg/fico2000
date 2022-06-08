package com.fas.cmmn.util;

/*
* @(#)KeyGenerator.java   1.0 2002/03/22
 */
import java.math.BigInteger;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.text.DecimalFormat;
import java.text.SimpleDateFormat;
import java.util.UUID;

/**
 * 고유키 생성 클래스.<br>
 * 날짜코드에 의해 20자리의 unique한 키를 생성한다.
 *
 * @author 이승백
 * @version 1.0, 2002/03/22
 */

public final class KeyGenerator {
    private static int serialNo = 0;
    private static String prevTime = "";

    private static final int MAX_SERIAL_NO = 999;

    private static final SimpleDateFormat SDF = new SimpleDateFormat("yyyyMMddHHmmssSSS");
    private static final DecimalFormat DF = new DecimalFormat("000");

    /**
     * 날짜코드에 의해 20자리의 unique한 키(시간이 지날수록 증가되는)를 생성한다.
     *
     * @return String  생성된 키
     */
    public synchronized static String getKeyByDateFormat() {

        String currentTime = SDF.format(new java.util.Date());

        if (serialNo == 0) {
            while (prevTime.equals(currentTime)) {
                currentTime = SDF.format(new java.util.Date());
            }
            prevTime = currentTime;
        }

        String keyStr = currentTime + DF.format(serialNo);

        serialNo = serialNo >= MAX_SERIAL_NO ? 0 : serialNo + 1;

        return keyStr;
    }
    
    /**
     * UUID - Uinque한 고유 ID (극히 적긴 하지만 중복 가능)
     */
    public synchronized static String getUUID() {
    	return UUID.randomUUID().toString().replace("-", "");
    }

    /**
     * 시간이 지날수록 감소되는 20자리의 키를 생성한다.
     *
     * @return String  생성된 키
     */
    public static String getDecreaseKey() {
        BigInteger op1 = new BigInteger("99999999999999999999");
        BigInteger op2 = new BigInteger(getKeyByDateFormat());
        BigInteger dif = op1.subtract(op2);

        return dif.toString();
    }

    /**
     * 지정된 범위, 포맷으로 랜덤수를 문자열로 반환한다.
     *
     * @param bound  랜덤수 범위
     * @param format 포맷
     * @return String
     * @see java.text.DecimalFormat
     */
    public static String getRandomNumStr(int bound, String format) {

        java.util.Random random = new java.util.Random();
        int rNum = random.nextInt(bound);

        DecimalFormat df = new DecimalFormat(format);

        return df.format(rNum);
    }
    
    /**
     * SHA-256으로 해싱하는 메소드
     * 
     * @param bytes
     * @return
     * @throws NoSuchAlgorithmException 
     */
    public static String sha256(String msg) throws NoSuchAlgorithmException {
        MessageDigest md = MessageDigest.getInstance("SHA-256");
        md.update(msg.getBytes());
        
        return bytesToHex(md.digest());
    }
 
 
    /**
     * 바이트를 헥스값으로 변환한다
     * 
     * @param bytes
     * @return
     */
    public static String bytesToHex(byte[] bytes) {
        StringBuilder builder = new StringBuilder();
        for (byte b: bytes) {
          builder.append(String.format("%02x", b));
        }
        return builder.toString();
    }

    public static void main(String[] args) throws Exception {
    	//System.out.println(KeyGenerator.sha256("lsm@ibksystem.co.kr"));
    	
    	System.out.println(KeyGenerator.getKeyByDateFormat());
    }
}