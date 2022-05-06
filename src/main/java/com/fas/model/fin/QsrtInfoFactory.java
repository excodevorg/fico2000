package com.fas.model.fin;

import java.util.List;

import org.springframework.context.ApplicationContext;

import com.fas.model.fin.dao.QsrBaseInfoDao;
import com.fas.model.fin.dao.QsrRsltInfoDao;
import com.fas.model.fin.domain.QsrBaseInfoDomain;
import com.fas.model.fin.domain.QsrRsltInfoDomain;
import com.fas.web.cmmn.exception.BizException;
import com.fas.web.cmmn.util.ApplicationContextStart;
import com.fas.web.cmmn.util.SpringApplicationContext;
import com.fas.web.cmmn.util.StringUtil;

public class QsrtInfoFactory {
	
	// 분석 ID, 설문지 유형으로 조회
	public QsrtInfoConsult createInstance(String alyid, String lsqsTcd, String stacYy) throws Exception {
		
		if (StringUtil.isEmpty(alyid)) throw new BizException("분석할 대상이 선택되지 않았습니다.");
		
		if (StringUtil.isEmpty(lsqsTcd)) throw new BizException("설문지 유형이 선택도지 않았습니다.");
		
		QsrtInfoConsult result = null;
		
		//ApplicationContext applicationContext = ApplicationContextStart.getInstance();
		
		QsrBaseInfoDao qsrBaseDao = (QsrBaseInfoDao) SpringApplicationContext.getBean("QsrBaseInfoDao");
		
		QsrRsltInfoDao qsrRsltDao = (QsrRsltInfoDao) SpringApplicationContext.getBean("QsrRsltInfoDao");
		
		//1) 분석 ID로 등록된 결과가 있는지 확인
		QsrRsltInfoDomain domain = new QsrRsltInfoDomain();
		domain.setAlyid(alyid);
		domain.setLsqsTcd(lsqsTcd);
		domain.setDelYn("N");
		
		List<QsrRsltInfoDomain> qsrList = qsrRsltDao.selectAlyidQsrRsltList(domain);
		
		//1-1) 존재
		if (qsrList != null && qsrList.size() > 0) {
			
			QsrRsltInfoDomain qsrDomain = qsrList.get(0);
			
			QsrtInfoDtlVo qsrtInfoDtlVo = new QsrtInfoDtlVo();
			
			qsrtInfoDtlVo.setAlyid(qsrDomain.getAlyid());
			qsrtInfoDtlVo.setQstrId(qsrDomain.getQstrId());
			qsrtInfoDtlVo.setLsqsTcd(qsrDomain.getLsqsTcd());
			qsrtInfoDtlVo.setDelYn(qsrDomain.getDelYn());
			qsrtInfoDtlVo.setStacYy(stacYy);
			
			//현금흐름 설문지
			if ("FAS030401".equals(lsqsTcd)) {
				
				String beanName = "QsrtMngRslt_" + qsrDomain.getQstrId();
				
				result = (QsrtInfoConsult) SpringApplicationContext.getBean(beanName);
				
				result.setQsrtInfoVo(qsrtInfoDtlVo);
				
				return result;
				
			} else if ("FAS030402".equals(lsqsTcd)) {
			//재무투자 설문지
				
				String beanName = "QsrtFinRslt_" + qsrDomain.getQstrId();
				
				result = (QsrtInfoConsult) SpringApplicationContext.getBean(beanName);
				
				result.setQsrtInfoVo(qsrtInfoDtlVo);
				
				return result;
				
			} else {
				return null;
			}
			
		} else {
		
		//1-2) 존재하지 않음
			
			QsrBaseInfoDomain baseDomain = new QsrBaseInfoDomain();
			baseDomain.setDelYn("N");
			baseDomain.setLsqsTcd(lsqsTcd);
			
			baseDomain = qsrBaseDao.selectBaseInfo(baseDomain);
			
			if (baseDomain != null) {
				
				QsrtInfoDtlVo qsrtInfoDtlVo = new QsrtInfoDtlVo();
				qsrtInfoDtlVo.setQstrId(baseDomain.getQstrId());
				qsrtInfoDtlVo.setLsqsTcd(baseDomain.getLsqsTcd());
				qsrtInfoDtlVo.setDelYn(baseDomain.getDelYn());
				qsrtInfoDtlVo.setStacYy(stacYy);
				qsrtInfoDtlVo.setAlyid(alyid);
				
				//현금흐름 설문지
				if ("FAS030401".equals(lsqsTcd)) {
					
					String beanName = "QsrtMngNoRslt_" + baseDomain.getQstrId();
					
					result = (QsrtInfoConsult) SpringApplicationContext.getBean(beanName);
					
					result.setQsrtInfoVo(qsrtInfoDtlVo);
					
					return result;
					
				}  else if ("FAS030402".equals(lsqsTcd)) {
					//재무투자 설문지
					
					String beanName = "QsrtFinNoRslt_" + baseDomain.getQstrId();
					
					result = (QsrtInfoConsult) SpringApplicationContext.getBean(beanName);
					
					result.setQsrtInfoVo(qsrtInfoDtlVo);
					
					return result;
					
				} else {
					return null;
				}
				
			} else {
				return null;
			}
			
		}
		
	}
}
	