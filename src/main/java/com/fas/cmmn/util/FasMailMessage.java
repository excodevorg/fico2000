	package com.fas.cmmn.util;
	
	public class FasMailMessage {
	
		//From email (보내는 이메일)
		private String fromEmail;
		
		//To email (받는 이메일)
		private String toEmail;
		
		//제목 
		private String subject;
		
		//html Content
		private String htmlContent;
	
		public String getFromEmail() {
			return fromEmail;
		}
	
		public void setFromEmail(String fromEmail) {
			this.fromEmail = fromEmail;
		}
	
		public String getToEmail() {
			return toEmail;
		}
	
		public void setToEmail(String toEmail) {
			this.toEmail = toEmail;
		}
	
		public String getSubject() {
			return subject;
		}
	
		public void setSubject(String subject) {
			this.subject = subject;
		}
	
		public String getHtmlContent() {
			return htmlContent;
		}
	
		public void setHtmlContent(String htmlContent) {
			this.htmlContent = htmlContent;
		}
		
		
	}
