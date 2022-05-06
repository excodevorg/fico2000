
/**
 * Algorithm:  PBEWithMD5AndDES
 *
 * <PRE>
 * <B> History : </B>
 * </PRE>
 * @version : 2014. 2. 28.
 * @author : helios
 *
 */

package com.fas.web.cmmn.util;

import org.jasypt.encryption.pbe.StandardPBEStringEncryptor;
import org.jasypt.util.text.TextEncryptor;

/**
 * @author helios
 *
 */
public class TextEncryptorUtil implements TextEncryptor {

	// The internal encryptor 
    private final StandardPBEStringEncryptor encryptor;
    private String key = null;
    
    
    /**
     * Creates a new instance of <tt>BasicTextEncryptor</tt>.
     */
    public TextEncryptorUtil() {
        super();
        this.encryptor = new StandardPBEStringEncryptor();
        this.encryptor.setAlgorithm(UtilConstants.DEFAULT_ALGORITHM);
    }

    
    /**
     * Sets a password.
     * 
     * @param password the password to be set.
     */
    public void setKey(String key) {
    	this.key = key;
        this.encryptor.setPassword(key);
    }

    
    /**
     * Encrypts a message.
     * 
     * @param message the message to be encrypted.
     * @see StandardPBEStringEncryptor#encrypt(String)
     */
    public String encrypt(String message) {
    	if(key == null) {
    		setKey(UtilConstants.ROOIBOS_KEY);
    	}
        return this.encryptor.encrypt(message);
    }

    
    /**
     * Decrypts a message.
     * 
     * @param encryptedMessage the message to be decrypted.
     * @see StandardPBEStringEncryptor#decrypt(String)
     */
    public String decrypt(String encryptedMessage) {
    	if(key == null) {
    		setKey(UtilConstants.ROOIBOS_KEY);
    	}
        return this.encryptor.decrypt(encryptedMessage);
    }
    
    public static void main(String args[]) {
    	TextEncryptorUtil util = new TextEncryptorUtil();
    	System.out.println(util.encrypt("ibks!6070")); //이상민
    	System.out.println(util.encrypt("dbwogus123!")); //유재현
    	System.out.println(util.encrypt("334a3c96")); //정해궁
    	System.out.println(util.encrypt("12345")); //존리
    	System.out.println(util.encrypt("21d3c234")); //박진욱
    	
    	System.out.println(util.encrypt("dhwogur77uilkjhgfdsa"));
    	
    	System.out.println(util.decrypt("aS2NXq3El2ArEHqjfj0l3A=="));
    	
    	System.out.println(util.decrypt("GcRP2a1EResHtcvjv4vGLO9AFb6qi9fm")); 
    	
    	System.out.println(util.encrypt("ibks1234")); 
    	
    	
    	
    	 
    }
}

