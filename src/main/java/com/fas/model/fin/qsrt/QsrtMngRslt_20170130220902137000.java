package com.fas.model.fin.qsrt;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.stereotype.Component;

import com.fas.cmmn.util.FasDateUtil;
import com.fas.model.fin.QsrtInfoConsult;
import com.fas.model.fin.QsrtInfoDtlVo;
import com.fas.model.fin.QsrtInfoVo;
import com.fas.model.fin.dao.QsrBaseInfoDao;
import com.fas.model.fin.dao.QsrItemInfoDao;
import com.fas.model.fin.dao.QsrRsltInfoDao;
import com.fas.model.fin.domain.QsrItemInfoDomain;
import com.fas.model.fin.domain.QsrRsltInfoDomain;
import com.fas.web.cmmn.util.BeanUtils;
import com.fas.web.cmmn.util.StringUtil;



@Component("QsrtMngRslt_20170130220902137000")
public class QsrtMngRslt_20170130220902137000 extends QsrtInfoConsult{
	
	private static Log logger = LogFactory.getLog(QsrtMngRslt_20170130220902137000.class);


	@Resource(name="QsrBaseInfoDao")
	private QsrBaseInfoDao qsrBaseDao;
	
	@Resource(name="QsrItemInfoDao")
	private QsrItemInfoDao qsrItemDao;
	
	@Resource(name="QsrRsltInfoDao")
	private QsrRsltInfoDao qsrRsltDao;
	
	private QsrtInfoDtlVo qsrtInfoDtlVo;

	@Override
	protected void delQsrtInfoRslt() throws Exception {
		//NONE
	}
	
	@Override
	public void setQsrtInfoVo(QsrtInfoDtlVo param) {
		this.qsrtInfoDtlVo = param;
	}
	
	@Override
	public QsrtInfoVo getQsrtVo() throws Exception {
		// TODO Auto-generated method stub
		
		BeanUtils beanUtil = new BeanUtils();
		
		QsrtInfoVo result = new QsrtInfoVo();
		
		QsrtInfoDtlVo qsrtDtl = null;
		
		Map prbmNo = null;
		
		QsrItemInfoDomain domain = (QsrItemInfoDomain) beanUtil.toCopy(this.qsrtInfoDtlVo, new QsrItemInfoDomain());
		
		List<QsrItemInfoDomain> qsrtItemList = qsrItemDao.selectQsrItemList(domain);
		
		for (QsrItemInfoDomain qsrItemVo : qsrtItemList) {
			
			int lprbmNo = 99;
			int sprbmNo = 0;
			
			if (qsrItemVo.getLprbmNo() != null) lprbmNo = qsrItemVo.getLprbmNo().intValue();
			if (qsrItemVo.getSprbmNo() != null) sprbmNo = qsrItemVo.getSprbmNo().intValue();
			
			qsrtDtl = (QsrtInfoDtlVo) beanUtil.toCopy(qsrItemVo, new QsrtInfoDtlVo());
			
			qsrtDtl.setAlyid(this.qsrtInfoDtlVo.getAlyid());
			qsrtDtl.setStacYy(this.qsrtInfoDtlVo.getStacYy());
			
			logger.debug(">>>>> lprbmNo start >>>> " + lprbmNo);
			
			switch (lprbmNo) {
				case 0 :
					//0) 문항 (년도)
					prbmNo = result.getQsrtNo0();
					setQsrtPrbmItem(sprbmNo, prbmNo, qsrItemVo, qsrtDtl);
					
					break;
				case 1 :
					//1) 문항
					//매출이 일어나고 자금회수까지의 형태는 어떻습니까? 		
					//		1-1) 30일 내에 회수되는 비율은 		
					//		1-2) 60일 (2개월 이내)안에 회수되는 비율은 		
					//		1-3) 90일 (3개월 이내)안에 회수되는 비율은 	
					prbmNo = result.getQsrtNo1();
					setQsrtPrbmItem(sprbmNo, prbmNo, qsrItemVo, qsrtDtl);
					
					break;
				case 2 :
					//2) 문항
					//		2-1) 생산에 따른 원재료와 부재료 등의 구입 대금지급은 매출 후
					//		2-2) 생산에 따른 원재료와 부재료 등의 구입 대금지급은 매출 전
					prbmNo = result.getQsrtNo2();
					setQsrtPrbmItem(sprbmNo, prbmNo, qsrItemVo, qsrtDtl);
					
					break;
				case 3 : 
					//3) 문항
					//		3-1) 매출원가가 매출액에 차지하는 비율은 평균적으로 어느 정도 입니까?
					prbmNo = result.getQsrtNo3();
					setQsrtPrbmItem(sprbmNo, prbmNo, qsrItemVo, qsrtDtl);
					
					break;
				case 4 :
					//4) 문항
					//		4-1) 매월 고정적으로 지출되는 판매관리비와 이자비용은 얼마나 됩니까? (list)
					prbmNo = result.getQsrtNo4();
					setQsrtPrbmItem(sprbmNo, prbmNo, qsrItemVo, qsrtDtl);
					
					break;
				case 5 : 
					//5) 문항
					//		5-1) 법인세 납부 달은 언제 입니까?
					prbmNo = result.getQsrtNo5();
					setQsrtPrbmItem(sprbmNo, prbmNo, qsrItemVo, qsrtDtl);
					
					break;
				case 6 :
					//6) 문항
					//		6-1) 금년도 법인세 납부 금액은?
					prbmNo = result.getQsrtNo6();
					setQsrtPrbmItem(sprbmNo, prbmNo, qsrItemVo, qsrtDtl);
					
					break;
				case 7 :
					//7) 문항
					//		7-1) 전년도 말 현금잔액은 어느 정도인지?
					prbmNo = result.getQsrtNo7();
					setQsrtPrbmItem(sprbmNo, prbmNo, qsrItemVo, qsrtDtl);
					
					break;
				case 8 :
					//8) 문항
					//		8-1) 경영위기를 대비해 여유자금을 보유하고 계시는지, 있으시다면 어느정도 현금을 보유하고 계시는 지?
					prbmNo = result.getQsrtNo8();
					setQsrtPrbmItem(sprbmNo, prbmNo, qsrItemVo, qsrtDtl);
					
					break;
				case 9 :
					//9) 문항
					//평가추측 기준월 전월,2개월전, 3개월전 매출액은?
					//		9-1) 1개월전
					//		9-2) 2개월전
					//		9-3) 3개월전
					prbmNo = result.getQsrtNo9();
					setQsrtPrbmItem(sprbmNo, prbmNo, qsrItemVo, qsrtDtl);
					break;
				case 10 :
					//10) 문항 
					//		(10-1) 금년도 추정매출액은 ? (list)	
					prbmNo = result.getQsrtNo10();
					setQsrtPrbmItem(sprbmNo, prbmNo, qsrItemVo, qsrtDtl);
										
					break;
				case 11 :
					//11) 문항 
					//		(11-1) 배당금 ? 	
					prbmNo = result.getQsrtNo11();
					setQsrtPrbmItem(sprbmNo, prbmNo, qsrItemVo, qsrtDtl);
										
					break;	
				case 12 :
					//12) 문항 
					//		(12-1) 운전자금 	
					prbmNo = result.getQsrtNo12();
					setQsrtPrbmItem(sprbmNo, prbmNo, qsrItemVo, qsrtDtl);
										
					break;
				case 13 :
					//13) 문항 
					//		(13-1) 여유자금 	
					prbmNo = result.getQsrtNo13();
					setQsrtPrbmItem(sprbmNo, prbmNo, qsrItemVo, qsrtDtl);
										
					break;
				default :
			}
			
			logger.debug(">>>>> lprbmNo end >>>> " + prbmNo);
			
		}
		
		return result;
	}
	//Prbm Setting 
	private void setQsrtPrbmItem(int sprbmNo, Map prbmNo, QsrItemInfoDomain qsrItemVo, QsrtInfoDtlVo qsrtDtl) throws Exception {
		
		BeanUtils beanUtil = new BeanUtils();
		
		logger.debug("1) sprbmNo : " + sprbmNo);
		logger.debug("2) getRplyType : " + qsrItemVo.getRplyType());
		logger.debug("3) getRsvlType : " + qsrItemVo.getRsvlType());
		
		QsrRsltInfoDomain qsrRsltDomain = null;
		
		List<QsrRsltInfoDomain> qsrtRsltList = null;

		//결과값
		qsrRsltDomain = new QsrRsltInfoDomain();
		
		qsrRsltDomain.setAlyid(qsrtDtl.getAlyid());
		qsrRsltDomain.setQstrId(qsrtDtl.getQstrId());
		qsrRsltDomain.setLsqsTcd(qsrtDtl.getLsqsTcd());
		qsrRsltDomain.setItemId(qsrtDtl.getItemId());
		
		qsrtRsltList = qsrRsltDao.selectAlyidQsrRsltItemList(qsrRsltDomain);
		
		if (qsrtRsltList != null && qsrtRsltList.size() > 0) {
			//0 : 단건 , 1 : 스케줄
			if ("0".equals(qsrItemVo.getRplyType())) {
				
				qsrRsltDomain = qsrtRsltList.get(0);
				
				qsrtDtl = (QsrtInfoDtlVo) beanUtil.toCopy(qsrRsltDomain, qsrtDtl);
				
				qsrtDtl.initial();
				
				prbmNo.put("no"+sprbmNo, qsrtDtl);
			} else if ("1".equals(qsrItemVo.getRplyType())) {
				
				List qsrtInfoDtlList = new ArrayList<QsrtInfoDtlVo>();
				
				for (int i = 0; i < qsrtRsltList.size(); i++) {
					QsrtInfoDtlVo qsrtDtlInfo = (QsrtInfoDtlVo) beanUtil.toCopy(qsrtRsltList.get(i), new QsrtInfoDtlVo());
					qsrtDtlInfo.initial();
					qsrtInfoDtlList.add(qsrtDtlInfo);
				}
				prbmNo.put("no", qsrtDtl);
				prbmNo.put("no"+sprbmNo, qsrtInfoDtlList);
			}	
		} else {
			
			//0 : 단건 , 1 : 스케줄
			if ("0".equals(qsrItemVo.getRplyType())) {
				//0 : 숫자형, 1 : 문자형
				if ("0".equals(qsrItemVo.getRsvlType())) {
					qsrtDtl.setRsltVl("0");
				} else if ("1".equals(qsrItemVo.getRsvlType())) {
					qsrtDtl.setRsltVl("");
				}
				prbmNo.put("no"+sprbmNo, qsrtDtl);
			} else if ("1".equals(qsrItemVo.getRplyType())) {
				prbmNo.put("no", qsrtDtl);
				prbmNo.put("no"+sprbmNo, new ArrayList<QsrtInfoDtlVo>());
			}	
			
			qsrtDtl.initial();
			
		}
		
		logger.debug("1) sprbmNo : " + sprbmNo);
		logger.debug("2) getRplyType : " + qsrItemVo.getRplyType());
		logger.debug("3) getRsvlType : " + qsrItemVo.getRsvlType());
		logger.debug("4) prbmNo : " + prbmNo);
	}
}
