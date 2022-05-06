package com.fas.model.fin.qsrt;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.stereotype.Component;

import com.fas.model.fin.QsrtInfoConsult;
import com.fas.model.fin.QsrtInfoDtlVo;
import com.fas.model.fin.QsrtInfoVo;
import com.fas.model.fin.dao.QsrBaseInfoDao;
import com.fas.model.fin.dao.QsrItemInfoDao;
import com.fas.model.fin.dao.QsrRsltInfoDao;
import com.fas.model.fin.domain.QsrItemInfoDomain;
import com.fas.model.fin.domain.QsrRsltInfoDomain;
import com.fas.web.cmmn.util.BeanUtils;

@Component("QsrtFinRslt_20170130220902325001")
public class QsrtFinRslt_20170130220902325001 extends QsrtInfoConsult{

	private static Log logger = LogFactory.getLog(QsrtFinRslt_20170130220902325001.class);
	
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
		logger.debug("delQsrtInfoRslt start alyid >>> " + this.qsrtInfoDtlVo.getAlyid());
		
		QsrRsltInfoDomain domain = new QsrRsltInfoDomain();
		domain.setAlyid(this.qsrtInfoDtlVo.getAlyid());
		domain.setLsqsTcd(this.qsrtInfoDtlVo.getLsqsTcd());
		domain.setQstrId(this.qsrtInfoDtlVo.getQstrId());
		domain.setDelYn("N");
		
		List<QsrRsltInfoDomain> arrList = qsrRsltDao.selectAlyidQsrRsltList(domain);
		
		qsrRsltDao.delete(arrList);
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
			
			qsrtDtl.initial();
			
			(result.getQsrtNo0()).put("qsrtNo"+lprbmNo+ "" + sprbmNo, qsrtDtl);
			
			switch (lprbmNo) {
			
				case 1 : //기존차입금의 상환 계획은? (운전자금 내입 부문, 시설자금 상환스케쥴 ) , list
					prbmNo = result.getQsrtNo1();
					setQsrtPrbmItem(sprbmNo, prbmNo, qsrItemVo, qsrtDtl);
					break;
				case 2 : //자본금 증자 계획은 ? list
					prbmNo = result.getQsrtNo2();
					setQsrtPrbmItem(sprbmNo, prbmNo	, qsrItemVo, qsrtDtl);
					
					break;
				case 3 : //기술 개발에 따른 R&D비용을 투입 할 예정이신지? (투입시기, 투입금액) list
					prbmNo = result.getQsrtNo3();
					setQsrtPrbmItem(sprbmNo, prbmNo, qsrItemVo, qsrtDtl);
					break;
				case 4 : //생산 능력 확대 계획은? 생산능력 확대에 따른 고정자산 시설 증대 계획은? list
					prbmNo = result.getQsrtNo4();
					setQsrtPrbmItem(sprbmNo, prbmNo, qsrItemVo, qsrtDtl); 
					break;
				case 5 : //현재 시설 매각 계획은?  고정자산 시설 처분 계획은? list
					prbmNo = result.getQsrtNo5();
					setQsrtPrbmItem(sprbmNo, prbmNo, qsrItemVo, qsrtDtl);
					break;
				case 6 : //회사채로 자금 조달 계획이 있으신지 또는 상환 계획이 있으신지? (회사채로 자금조달 계획이 있으시다면 언제 어느 정도 발행하실 계획이십니까?, 회사채의 상환 계획이 있으시다면 언제 어느 정도 상환하실 계획이십니까?) list
					prbmNo = result.getQsrtNo6();
					setQsrtPrbmItem(sprbmNo, prbmNo, qsrItemVo, qsrtDtl);
					break;
				case 7 : //우리나라 경기변동 및 동사아이템의 생산과 판매 시스템으로 보아  금년도 말의 재고자산 수준은 작년말과 비교 하여 증가 또는 감소하실 것으로 보입니까?
					     //재고자산이 전년도에 비해  증가
					     //재고자산이 전년도에 비해  감소
					prbmNo = result.getQsrtNo7();
					setQsrtPrbmItem(sprbmNo, prbmNo, qsrItemVo, qsrtDtl);
					break;
				case 8 : //운전자금
					prbmNo = result.getQsrtNo8();
					setQsrtPrbmItem(sprbmNo, prbmNo, qsrItemVo, qsrtDtl);
					break;
				case 9 : //시설자금
					prbmNo = result.getQsrtNo9();
					setQsrtPrbmItem(sprbmNo, prbmNo, qsrItemVo, qsrtDtl);
					break;
				case 10 : //여유자금
					prbmNo = result.getQsrtNo10();
					setQsrtPrbmItem(sprbmNo, prbmNo, qsrItemVo, qsrtDtl);
					break;
				case 11 : 
					prbmNo = result.getQsrtNo11();
					setQsrtPrbmItem(sprbmNo, prbmNo, qsrItemVo, qsrtDtl);
					break;					
				case 12 : 
					prbmNo = result.getQsrtNo12();
					setQsrtPrbmItem(sprbmNo, prbmNo, qsrItemVo, qsrtDtl);
					break;
				case 13 : 
					prbmNo = result.getQsrtNo13();
					setQsrtPrbmItem(sprbmNo, prbmNo, qsrItemVo, qsrtDtl);
					break;					
				default :
					
			
			}
			
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
