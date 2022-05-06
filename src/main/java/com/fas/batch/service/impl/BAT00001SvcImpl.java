package com.fas.batch.service.impl;

import java.util.Map;

import javax.annotation.Resource;

import org.hsqldb.lib.StringUtil;
import org.springframework.stereotype.Repository;

import com.fas.batch.execute.BatchExecute;
import com.fas.cmmn.util.FasMailMessage;
import com.fas.cmmn.util.FasMailSender;
import com.fas.model.com.BOKManager;
import com.fas.web.cmmn.util.ComConst;

@Repository("BAT00001SvcImpl")
public class BAT00001SvcImpl extends BatchExecute {
	
	@Resource(name="BOKManager")
	private BOKManager bokManager;
	
	@Resource(name="FasMailSender")
	private FasMailSender fasMailSender;
	
	@Resource(name="comConst")
	private ComConst comConst;
	
	public int execute(Map map) throws Exception {
		
		String [] arrayToEmails = {};
		
		if (!StringUtil.isEmpty(comConst.getToEmails())) {
			arrayToEmails = comConst.getToEmails().split(",");
		}
		
		try {
			
			bokManager.bokDataListInit("");
		
			bokManager.bokDataListSave();
			
			bokManager.bokFinRatioListSave();
			
			
			
			try {
				
				for (String email : arrayToEmails) {
					FasMailMessage message = new FasMailMessage();
			        message.setSubject("[Fico2000 - BAT00001SvcImpl] 한국은행 통계데이터 수집 배치 수행 완료 ");	
			        message.setToEmail(email);
			        message.setHtmlContent("[Fico2000 - BAT00001SvcImpl] 한국은행 통계데이터 수집 배치 수행 완료  (" + comConst.getHostUrl() +")");
			        
			        fasMailSender.sendEmail(message);
		        
				}
	        
			} catch(Exception e) {
				e.printStackTrace();
			}
			
		} catch(Exception ex) {
			
			for (String email : arrayToEmails) {
				FasMailMessage message = new FasMailMessage();
		        message.setSubject("[Fico2000 - BAT00001SvcImpl] 한국은행 통계데이터 수집 배치 수행 중 오류 ");	
		        message.setToEmail(email);
		        message.setHtmlContent(ex.toString() +  "(" + comConst.getHostUrl() +")");
		        
		        fasMailSender.sendEmail(message);
			}
				
			ex.printStackTrace();
			
			throw ex;
		}
		
		
		
		return 0;
	}
	
	
}
