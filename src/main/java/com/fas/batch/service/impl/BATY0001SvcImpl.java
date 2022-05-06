package com.fas.batch.service.impl;

import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Repository;

import com.fas.batch.execute.BatchExecute;
import com.fas.cmmn.util.FasMailMessage;
import com.fas.cmmn.util.FasMailSender;
import com.fas.model.com.BOKManager;
import com.fas.web.cmmn.util.StringUtil;

@Repository("BATY0001SvcImpl")
public class BATY0001SvcImpl  extends BatchExecute {

	@Resource(name="BOKManager")
	private BOKManager bokManager;
	
	@Resource(name="FasMailSender")
	private FasMailSender fasMailSender;	
	
	@Override
	public int execute(Map map) throws Exception {
		// TODO Auto-generated method stub
		String year = (String) map.get("year");
		
		try {
		
			if (StringUtil.isEmpty(year)) {
				throw new Exception("년도는 필수 입력값입니다.");
			}
			
			bokManager.bokDataListInit(year);
		
		} catch(Exception ex) {
			
			FasMailMessage message = new FasMailMessage();
	        message.setSubject("[Fico2000 - BATY0001SvcImpl] 배치 수행 중 오류 ");	
	        message.setToEmail("jepul@ibksystem.co.kr");
	        message.setHtmlContent(ex.toString());
	        
	        fasMailSender.sendEmail(message);
			
			ex.printStackTrace();
			throw ex;
		}
		
		return 0;
	}
	
	
}
