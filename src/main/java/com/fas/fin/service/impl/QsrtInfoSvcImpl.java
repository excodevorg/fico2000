package com.fas.fin.service.impl;

import javax.annotation.Resource;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.stereotype.Service;

import com.fas.cmmn.util.FasDateUtil;
import com.fas.fin.formVo.QsrtInfoFormVo;
import com.fas.fin.service.QsrtInfoSvc;
import com.fas.model.fin.QsrtInfoConsult;
import com.fas.model.fin.QsrtInfoFactory;
import com.fas.web.cmmn.dataaccess.util.JsonObjectModel;
import com.fas.web.cmmn.util.BeanUtils;
import com.fas.web.cmmn.util.StringUtil;

@Service("QsrtInfoSvc")
public class QsrtInfoSvcImpl implements QsrtInfoSvc {
	
	private static Log logger = LogFactory.getLog(QsrtInfoSvcImpl.class);

	//1) 현금흐름 설문지
	public JsonObjectModel qsrtMngRsltInfoList(QsrtInfoFormVo param) throws Exception {
		
		//1) 선언
		BeanUtils beanUtil = new BeanUtils();
		JsonObjectModel resultMap = new JsonObjectModel();
		
		QsrtInfoFactory qsrtFactory = new QsrtInfoFactory();
		
		String stacYy = "";
		
		stacYy = param.getStacYy();
		
		if (StringUtil.isEmpty(stacYy)) {
			stacYy = FasDateUtil.getCurrentDay().substring(0,4);
		}
		
		//"FAS030401" : 현금흐름 설문지
		QsrtInfoConsult qsrtInfo = qsrtFactory.createInstance(param.getAlyid(), "FAS030401", stacYy);
		
		resultMap.putData("qsrtInfo", qsrtInfo.getQsrtVo());
		
		return resultMap;
	}
	
	//2) 현금흐름 설문지 등록
	public JsonObjectModel qsrtMngRsltInfoRgsn(QsrtInfoFormVo param) throws Exception {
		
		//1) 선언
		BeanUtils beanUtil = new BeanUtils();
		JsonObjectModel resultMap = new JsonObjectModel();
		
		logger.debug(">>>>>> start qsrtMngRsltInfoRgsn <<<<<<<");
		
		String stacYy = "";
		
		stacYy = param.getStacYy();
		
		if (StringUtil.isEmpty(stacYy)) {
			stacYy = FasDateUtil.getCurrentDay().substring(0,4);
		}
		
		QsrtInfoFactory qsrtFactory = new QsrtInfoFactory();
		
		//"FAS030401" : 현금흐름 설문지
		QsrtInfoConsult qsrtInfo = qsrtFactory.createInstance(param.getAlyid(), "FAS030401", stacYy);
		
		logger.debug(param.getQsrtInfo());
		
		qsrtInfo.saveQsrtInfoRslt(param.getQsrtInfo());
		
		resultMap.success();
		
		return resultMap;
	}
	
	//3) 재무투자 설문지
	public JsonObjectModel qsrtFinRsltInfoList(QsrtInfoFormVo param) throws Exception {
		
		//1) 선언
		BeanUtils beanUtil = new BeanUtils();
		JsonObjectModel resultMap = new JsonObjectModel();
		
		String stacYy = "";
		
		stacYy = param.getStacYy();
		
		if (StringUtil.isEmpty(stacYy)) {
			stacYy = FasDateUtil.getCurrentDay().substring(0,4);
		}
		
		QsrtInfoFactory qsrtFactory = new QsrtInfoFactory();
		
		//"FAS030401" : 현금흐름 설문지
		QsrtInfoConsult qsrtInfo = qsrtFactory.createInstance(param.getAlyid(), "FAS030402", stacYy);
		
		resultMap.putData("qsrtInfo", qsrtInfo.getQsrtVo());
		
		return resultMap;
	}	
	
	//4) 재무투자 설문지 등록
	public JsonObjectModel qsrtFinRsltInfoRgsn(QsrtInfoFormVo param) throws Exception {
		
		//1) 선언
		BeanUtils beanUtil = new BeanUtils();
		JsonObjectModel resultMap = new JsonObjectModel();
		
		String stacYy = "";
		
		stacYy = param.getStacYy();
		
		if (StringUtil.isEmpty(stacYy)) {
			stacYy = FasDateUtil.getCurrentDay().substring(0,4);
		}
		
		logger.debug(">>>>>> start qsrtFinRsltInfoRgsn <<<<<<<");
		
		QsrtInfoFactory qsrtFactory = new QsrtInfoFactory();
		
		//"FAS030401" : 현금흐름 설문지
		QsrtInfoConsult qsrtInfo = qsrtFactory.createInstance(param.getAlyid(), "FAS030402", stacYy);
		
		logger.debug(param.getQsrtInfo());
		
		qsrtInfo.saveQsrtInfoRslt(param.getQsrtInfo());
		
		resultMap.success();
		
		return resultMap;
	}	
	
	
}
