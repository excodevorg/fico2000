package com.fas.model.fin;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
import java.util.Set;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.hsqldb.lib.StringUtil;
import org.springframework.context.ApplicationContext;

import com.fas.cmmn.util.FasDateUtil;
import com.fas.cmmn.util.KeyGenerator;
import com.fas.model.fin.dao.QsrBaseInfoDao;
import com.fas.model.fin.dao.QsrRsltInfoDao;
import com.fas.model.fin.dao.QsrItemInfoDao;
import com.fas.model.fin.domain.QsrRsltInfoDomain;
import com.fas.web.cmmn.util.ApplicationContextStart;
import com.fas.web.cmmn.util.BeanUtils;
import com.fas.web.cmmn.util.HttpUtil;
import com.fas.web.cmmn.util.SpringApplicationContext;

public abstract class QsrtInfoConsult {
	
	private static Log logger = LogFactory.getLog(QsrtInfoConsult.class);
	
	public abstract void setQsrtInfoVo(QsrtInfoDtlVo param);

	public abstract QsrtInfoVo getQsrtVo() throws Exception;
	 
	protected abstract void delQsrtInfoRslt() throws Exception;
	
	public void saveQsrtInfoRslt(Map param) throws Exception {
		
		if (param == null) throw new Exception("등록할 정보가 없습니다.");
		
		BeanUtils beanUtil = new BeanUtils();
		
		//ApplicationContext applicationContext = ApplicationContextStart.getInstance();
		
		QsrRsltInfoDao qsrRsltDao = (QsrRsltInfoDao) SpringApplicationContext.getBean("QsrRsltInfoDao");
		
		HttpUtil httpUtil = (HttpUtil) SpringApplicationContext.getBean("HttpUtil");
		
		//Delete
		delQsrtInfoRslt();
		
		Set keySet = param.keySet();		
		Iterator itr = keySet.iterator();
		
		Map qsrtNoMap = null;
		
		//큰 분류 qsrtNo0 ~ qsrtNo11
		while (itr.hasNext()) {
			String key = (String) itr.next();
			qsrtNoMap = (Map) param.get(key);
			
			// 작은 분류 no1, no2 ......
			Set keySet01 = qsrtNoMap.keySet();
			Iterator itr01 = keySet01.iterator();
			
			QsrtInfoDtlVo qsrtInfoDtlVo = null;
			
			QsrRsltInfoDomain qsrRsltInfoDomain = null;
			
			while (itr01.hasNext()) {
				
				qsrtInfoDtlVo = null;
				
				qsrRsltInfoDomain = null;
				
				String key01 = (String) itr01.next();
				
				logger.debug("key=["+key+"] :: key01=["+key01+"]");
				if (!"no".equals(key01)){
					Object obj = qsrtNoMap.get(key01);
					logger.debug("object Instance Type >>> " + obj.getClass().getName());
				
				
					if (obj instanceof java.util.LinkedHashMap) {
						
						qsrtInfoDtlVo = (QsrtInfoDtlVo) beanUtil.toCopy(obj, new QsrtInfoDtlVo());
						
						logger.debug("qsrtInfoDtlVo >>> " + qsrtInfoDtlVo.getItemId());
						logger.debug("qsrtInfoDtlVo >>> " + qsrtInfoDtlVo.getRsltId());
						
						if (StringUtil.isEmpty(qsrtInfoDtlVo.getRsltId())) {
							qsrRsltInfoDomain = (QsrRsltInfoDomain) beanUtil.toCopy(qsrtInfoDtlVo, new QsrRsltInfoDomain());
							qsrRsltInfoDomain.setRsltId(KeyGenerator.getKeyByDateFormat());
							qsrRsltInfoDomain.setFrrgTs(FasDateUtil.getCurrentDate());
							qsrRsltInfoDomain.setFrrgUserId(httpUtil.getSessionUserId());
							qsrRsltInfoDomain.setLastTs(FasDateUtil.getCurrentDate());
							qsrRsltInfoDomain.setLastUserId(httpUtil.getSessionUserId());
							qsrRsltDao.insert(qsrRsltInfoDomain);
						} else {
							qsrRsltInfoDomain = (QsrRsltInfoDomain) beanUtil.toCopy(qsrtInfoDtlVo, new QsrRsltInfoDomain());
							qsrRsltInfoDomain.setFrrgTs(FasDateUtil.getCurrentDate());
							qsrRsltInfoDomain.setFrrgUserId(httpUtil.getSessionUserId());
							qsrRsltInfoDomain.setLastTs(FasDateUtil.getCurrentDate());
							qsrRsltInfoDomain.setLastUserId(httpUtil.getSessionUserId());
							qsrRsltDao.update(qsrRsltInfoDomain);
						}
						
						
					} else if (obj instanceof java.util.ArrayList) {
						List objArr = (ArrayList) obj;
						if (objArr != null) {
							int size = objArr.size();
							for (int i = 0; i < size; i++) {
								logger.debug("object Instance Type11111 >>> " + objArr.get(i).getClass().getName());
								qsrtInfoDtlVo = (QsrtInfoDtlVo) beanUtil.toCopy(objArr.get(i), new QsrtInfoDtlVo());
	
								logger.debug("qsrtInfoDtlVo >>> " + qsrtInfoDtlVo.getItemId());
								logger.debug("qsrtInfoDtlVo >>> " + qsrtInfoDtlVo.getRsltId());							
								
								if (StringUtil.isEmpty(qsrtInfoDtlVo.getRsltId())) {
									qsrRsltInfoDomain = (QsrRsltInfoDomain) beanUtil.toCopy(qsrtInfoDtlVo, new QsrRsltInfoDomain());
									qsrRsltInfoDomain.setRsltId(KeyGenerator.getKeyByDateFormat());
									qsrRsltInfoDomain.setFrrgTs(FasDateUtil.getCurrentDate());
									qsrRsltInfoDomain.setFrrgUserId(httpUtil.getSessionUserId());
									qsrRsltInfoDomain.setLastTs(FasDateUtil.getCurrentDate());
									qsrRsltInfoDomain.setLastUserId(httpUtil.getSessionUserId());
									
									logger.debug("$$$$$$$$$$$$$$$$$$$$$$$$$"	);
									beanUtil.toString(qsrRsltInfoDomain);
									
									qsrRsltDao.insert(qsrRsltInfoDomain);
								} else {
									qsrRsltInfoDomain = (QsrRsltInfoDomain) beanUtil.toCopy(qsrtInfoDtlVo, new QsrRsltInfoDomain());
									qsrRsltInfoDomain.setFrrgTs(FasDateUtil.getCurrentDate());
									qsrRsltInfoDomain.setFrrgUserId(httpUtil.getSessionUserId());
									qsrRsltInfoDomain.setLastTs(FasDateUtil.getCurrentDate());
									qsrRsltInfoDomain.setLastUserId(httpUtil.getSessionUserId());
									qsrRsltDao.update(qsrRsltInfoDomain);
								}
							}
						}
					}
				
				} else {
					Object obj = qsrtNoMap.get(key01);
					qsrtInfoDtlVo = (QsrtInfoDtlVo) beanUtil.toCopy(obj, new QsrtInfoDtlVo());
					qsrRsltInfoDomain = (QsrRsltInfoDomain) beanUtil.toCopy(qsrtInfoDtlVo, new QsrRsltInfoDomain());
					
					List<QsrRsltInfoDomain> qsrRsltList = qsrRsltDao.selectQsrRsltList(qsrRsltInfoDomain);
					
					if (qsrRsltList != null && qsrRsltList.size() > 0) {
						qsrRsltDao.delete(qsrRsltList);
					}
				}
				
			}
			
		}
		
	}
	
}
