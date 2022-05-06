package com.fas.cmmn.util;

import javax.annotation.Resource;
import javax.mail.MessagingException;
import javax.mail.Message.RecipientType;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeMessage;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.hsqldb.lib.StringUtil;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Component;

@Component("FasMailSender")
public class FasMailSender {
	
	private static Log logger = LogFactory.getLog(FasMailSender.class);

	@Resource(name="mailSender")
	private JavaMailSender mailSender;
	
	public void sendEmail(FasMailMessage fasMessage) {
        MimeMessage message = mailSender.createMimeMessage();
        try {
            message.setSubject(fasMessage.getSubject(), "UTF-8");
            message.setText(fasMessage.getHtmlContent(), "UTF-8", "html");
            String FromEmail = "fico2000webadm@gmail.com";
            if (!StringUtil.isEmpty(fasMessage.getFromEmail())) {
            	FromEmail = fasMessage.getFromEmail();
            }
            message.setFrom(new InternetAddress(FromEmail));
            message.addRecipient(RecipientType.TO, new InternetAddress(fasMessage.getToEmail()));
            mailSender.send(message);
        } catch (Exception e) {
        	logger.debug("error >>>> " + e.toString());
            e.printStackTrace();            
        }// try - catch
    }
}
