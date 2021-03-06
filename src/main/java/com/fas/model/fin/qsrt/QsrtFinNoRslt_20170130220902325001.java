package com.fas.model.fin.qsrt;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Component;

import com.fas.cmmn.util.FasDateUtil;
import com.fas.model.fin.QsrtInfoConsult;
import com.fas.model.fin.QsrtInfoDtlVo;
import com.fas.model.fin.QsrtInfoVo;
import com.fas.model.fin.dao.QsrBaseInfoDao;
import com.fas.model.fin.dao.QsrItemInfoDao;
import com.fas.model.fin.dao.QsrRsltInfoDao;
import com.fas.model.fin.domain.QsrItemInfoDomain;
import com.fas.web.cmmn.util.BeanUtils;

@Component("QsrtFinNoRslt_20170130220902325001")
public class QsrtFinNoRslt_20170130220902325001 extends QsrtInfoConsult{

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
			
			qsrtDtl.initial();
			
			(result.getQsrtNo0()).put("qsrtNo"+lprbmNo+ "" + sprbmNo, qsrtDtl);
			
			switch (lprbmNo) {
			
				case 1 : //?????????????????? ?????? ?????????? (???????????? ?????? ??????, ???????????? ??????????????? ) , list
					prbmNo = result.getQsrtNo1();
					setQsrtPrbmItem(sprbmNo, prbmNo, qsrItemVo, qsrtDtl);
					break;
				case 2 : //????????? ?????? ????????? ? list
					prbmNo = result.getQsrtNo2();
					setQsrtPrbmItem(sprbmNo, prbmNo	, qsrItemVo, qsrtDtl);
					
					break;
				case 3 : //?????? ????????? ?????? R&D????????? ?????? ??? ???????????????? (????????????, ????????????) list
					prbmNo = result.getQsrtNo3();
					setQsrtPrbmItem(sprbmNo, prbmNo, qsrItemVo, qsrtDtl);
					break;
				case 4 : //?????? ?????? ?????? ?????????? ???????????? ????????? ?????? ???????????? ?????? ?????? ?????????? list
					prbmNo = result.getQsrtNo4();
					setQsrtPrbmItem(sprbmNo, prbmNo, qsrItemVo, qsrtDtl); 
					break;
				case 5 : //?????? ?????? ?????? ??????????  ???????????? ?????? ?????? ?????????? list
					prbmNo = result.getQsrtNo5();
					setQsrtPrbmItem(sprbmNo, prbmNo, qsrItemVo, qsrtDtl);
					break;
				case 6 : //???????????? ?????? ?????? ????????? ???????????? ?????? ?????? ????????? ????????????? (???????????? ???????????? ????????? ??????????????? ?????? ?????? ?????? ???????????? ???????????????????, ???????????? ?????? ????????? ??????????????? ?????? ?????? ?????? ???????????? ???????????????????) list
					prbmNo = result.getQsrtNo6();
					setQsrtPrbmItem(sprbmNo, prbmNo, qsrItemVo, qsrtDtl);
					break;
				case 7 : //???????????? ???????????? ??? ?????????????????? ????????? ?????? ??????????????? ??????  ????????? ?????? ???????????? ????????? ???????????? ?????? ?????? ?????? ?????? ???????????? ????????? ?????????????
					     //??????????????? ???????????? ??????  ??????
					     //??????????????? ???????????? ??????  ??????
					prbmNo = result.getQsrtNo7();
					setQsrtPrbmItem(sprbmNo, prbmNo, qsrItemVo, qsrtDtl);
					break;
				case 8 : //????????????
					prbmNo = result.getQsrtNo8();
					setQsrtPrbmItem(sprbmNo, prbmNo, qsrItemVo, qsrtDtl);
					break;
				case 9 : //????????????
					prbmNo = result.getQsrtNo9();
					setQsrtPrbmItem(sprbmNo, prbmNo, qsrItemVo, qsrtDtl);
					break;
				case 10 : //????????????
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
	private void setQsrtPrbmItem(int sprbmNo, Map prbmNo, QsrItemInfoDomain qsrItemVo, QsrtInfoDtlVo qsrtDtl) {
		
		//0 : ?????? , 1 : ?????????
		if ("0".equals(qsrItemVo.getRplyType())) {
			//0 : ?????????, 1 : ?????????
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

}
