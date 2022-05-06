package com.fas.join.web;

import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.fas.join.formVo.JoinFormVo;
import com.fas.join.formVo.SettlementFormVo;
import com.fas.join.service.JoinSvc;

@Controller
public class JoinController {
	
	@Resource(name="JoinSvc")
	private JoinSvc svc;
	
	@RequestMapping(value="/join/JoinStatusCheck.do")
	@ResponseBody
	public Map JoinStatusCheck(@RequestBody JoinFormVo formVo) throws Exception {
		return svc.checkJoinStatus(formVo).getMap();
	}
	
	@RequestMapping(value="/join/acceptTheTerms.do")
	@ResponseBody
	public Map acceptTheTerms(@RequestBody JoinFormVo formVo) throws Exception {
		return svc.acceptTheTerms(formVo).getMap();
	}
	
	@RequestMapping(value="/join/selectApcInfo.do")
	@ResponseBody
	public Map selectApcInfo(@RequestBody JoinFormVo formVo) throws Exception {
		return svc.selectApcInfo(formVo).getMap();
	}
	
	@RequestMapping(value="/join/saveApcInfo.do")
	@ResponseBody
	public Map saveApcInfo(@RequestBody JoinFormVo formVo) throws Exception {
		return svc.saveApcInfo(formVo).getMap();
	}
	
	@RequestMapping(value="/join/saveApcInfoComplete.do")
	@ResponseBody
	public Map saveApcInfoComplete(@RequestBody JoinFormVo formVo) throws Exception {
		return svc.saveApcInfoComplete(formVo).getMap();
	}
	
	@RequestMapping(value="/join/getAuthCode.do")
	@ResponseBody
	public Map getAuthCode(@RequestBody JoinFormVo formVo) throws Exception {
		return svc.getAuthCode(formVo).getMap();
	}
	
	@RequestMapping(value="/join/selectApcProduct.do")
	@ResponseBody
	public Map selectApcProduct(@RequestBody JoinFormVo formVo) throws Exception {
		return svc.selectApcProduct(formVo).getMap();
	}
	
	@RequestMapping(value="/join/selectSettlHistory.do")
	@ResponseBody
	public Map selectSettlHistory(@RequestBody JoinFormVo formVo) throws Exception {
		return svc.selectSettlHistory(formVo).getMap();
	}
	
	@RequestMapping(value="/join/prepareSettlement.do")
	@ResponseBody
	public Map prepareSettlement(@RequestBody JoinFormVo formVo) throws Exception {
		return svc.prepareSettlement(formVo).getMap();
	}
	
	@RequestMapping(value="/join/saveSettlResult.do")
	@ResponseBody
	public Map saveSettlResult(@RequestBody SettlementFormVo formVo) throws Exception {
		return svc.saveSettlResult(formVo).getMap();
	}
	
	@RequestMapping(value="/join/selectSettlement.do")
	@ResponseBody
	public Map selectSettlement(@RequestBody SettlementFormVo formVo) throws Exception {
		return svc.selectSettlement(formVo).getMap();
	}
}
