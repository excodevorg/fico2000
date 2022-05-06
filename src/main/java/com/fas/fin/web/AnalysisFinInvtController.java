package com.fas.fin.web;

import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.fas.fin.formVo.QsrtInfoFormVo;
import com.fas.fin.service.AnalysisFinInvtSvc;

@Controller
public class AnalysisFinInvtController {

	@Resource(name="AnalysisFinInvtSvc")
	private AnalysisFinInvtSvc svc;
	
	@RequestMapping(value="/fin/FinInvtCashIncomeModify.do")	
	@ResponseBody
	public Map FinInvtCashIncomeModifyCtl (@RequestBody QsrtInfoFormVo formVo) throws Exception {
		return svc.finInvtCashIncomeModify(formVo).getMap();
	}
	
	@RequestMapping(value="/fin/FinInvtCashOutcomeModify.do")	
	@ResponseBody
	public Map FinInvtCashOutcomeModifyCtl (@RequestBody QsrtInfoFormVo formVo) throws Exception {
		return svc.finInvtCashOutcomeModify(formVo).getMap();
	}
	
	@RequestMapping(value="/fin/FinCashBdgtAmt.do")	
	@ResponseBody
	public Map FinCashBdgtAmtCtl (@RequestBody QsrtInfoFormVo formVo) throws Exception {
		return svc.finCashBdgtAmt(formVo).getMap();
	}

	@RequestMapping(value="/fin/FinEstmls.do")	
	@ResponseBody
	public Map FinEstmlsCtl (@RequestBody QsrtInfoFormVo formVo) throws Exception {
		return svc.finEstmls(formVo).getMap();
	}	
	
}
