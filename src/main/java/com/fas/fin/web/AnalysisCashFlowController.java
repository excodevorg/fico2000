package com.fas.fin.web;

import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.fas.fin.formVo.QsrtInfoFormVo;
import com.fas.fin.service.AnalysisCashFlowSvc;

@Controller
public class AnalysisCashFlowController {

	@Resource(name="AnalysisCashFlowSvc")
	private AnalysisCashFlowSvc svc;

	@RequestMapping(value="/fin/BusinessWorkPattern.do")	
	@ResponseBody
	public Map BusinessWorkPatternCtl (@RequestBody QsrtInfoFormVo formVo) throws Exception {
		return svc.businessWorkPattern(formVo).getMap();
	}
	
	@RequestMapping(value="/fin/SalesPredictList.do")	
	@ResponseBody
	public Map SalesPredictListCtl (@RequestBody QsrtInfoFormVo formVo) throws Exception {
		return svc.salesPredictList(formVo).getMap();
	}
	
	@RequestMapping(value="/fin/CashIncomeList.do")	
	@ResponseBody
	public Map CashIncomeListCtl (@RequestBody QsrtInfoFormVo formVo) throws Exception {
		return svc.cashIncomeList(formVo).getMap();
	}

	@RequestMapping(value="/fin/SalesCreditPredict.do")	
	@ResponseBody
	public Map SalesCreditPredictCtl (@RequestBody QsrtInfoFormVo formVo) throws Exception {
		return svc.salesCreditPredict(formVo).getMap();
	}	
	
	@RequestMapping(value="/fin/CashOutCome.do")	
	@ResponseBody
	public Map CashOutComeCtl (@RequestBody QsrtInfoFormVo formVo) throws Exception {
		return svc.cashOutCome(formVo).getMap();
	}	
	
	@RequestMapping(value="/fin/CashNtFlow.do")	
	@ResponseBody
	public Map CashNtFlowCtl (@RequestBody QsrtInfoFormVo formVo) throws Exception {
		return svc.CashNtFlow(formVo).getMap();
	}
	
	@RequestMapping(value="/fin/CashBdgtAmt.do")	
	@ResponseBody
	public Map CashBdgtAmtCtl (@RequestBody QsrtInfoFormVo formVo) throws Exception {
		return svc.CashBdgtAmt(formVo).getMap();
	}
	
	@RequestMapping(value="/fin/EstmIs.do")	
	@ResponseBody
	public Map EstmIsCtl (@RequestBody QsrtInfoFormVo formVo) throws Exception {
		return svc.EstmIs(formVo).getMap();
	}	
	
	
	
}
