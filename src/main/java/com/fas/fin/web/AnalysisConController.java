package com.fas.fin.web;

import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.fas.fin.formVo.AnalysisConFormVo;
import com.fas.fin.formVo.EntpFinInfoFormVo;
import com.fas.fin.service.AnalysisConSvc;

@Controller
public class AnalysisConController {
	
	@Resource(name="AnalysisCorporationSvc")
	private AnalysisConSvc svc;
	
	//목록 조회
	@RequestMapping(value="/fin/AnalysisConList.do")
	@ResponseBody
	public Map AnalysisConListCtl(@RequestBody AnalysisConFormVo formVo) throws Exception {
		return svc.analysisConList(formVo).getMap();
	}
	
	//목록 조회 (User id)
	@RequestMapping(value="/fin/AnalysisUserConList.do")
	@ResponseBody
	public Map AnalysisUserConListCtl(@RequestBody AnalysisConFormVo formVo) throws Exception {
		return svc.analysisUserConList(formVo).getMap();
	}
		
	//분석 등록
	@RequestMapping(value="/fin/AnalysisConRgsn.do")
	@ResponseBody
	public Map AnalysisConRgsnCtl(@RequestBody AnalysisConFormVo formVo) throws Exception {
		return svc.analysisConRgsn(formVo).getMap();
	}
	
	//분석 수정
	@RequestMapping(value="/fin/AnalysisConMdfc.do")
	@ResponseBody
	public Map AnalysisConMdfcCtl(@RequestBody AnalysisConFormVo formVo) throws Exception {
		return svc.analysisConMdfc(formVo).getMap();
	}
	
	//분석 삭제
	@RequestMapping(value="/fin/AnalysisConDel.do")
	@ResponseBody
	public Map AnalysisConDelCtl(@RequestBody AnalysisConFormVo formVo) throws Exception {
		return svc.analysisConDel(formVo).getMap();	
	}
	
	//분석할 재무정보 목록
	@RequestMapping(value="/fin/AnalysisStacYyList.do")
	@ResponseBody
	public Map AnalysisStacYyListCtl(@RequestBody AnalysisConFormVo formVo) throws Exception {
		return svc.analysisStacYyList(formVo).getMap();
	}
	
	//분석할 재무정보 목록 (분석내용 등록시 작성한 재무정보 목록) 
	@RequestMapping(value="/fin/AnalysisFnamStacYyList.do")
	@ResponseBody
	public Map AnalysisFnamStacYyListCtl(@RequestBody AnalysisConFormVo formVo) throws Exception {
		return svc.analysisFnamStacYyList(formVo).getMap();
	}
	
	@RequestMapping(value="/fin/AnalysisFinDtTypeMap.do")
	@ResponseBody	
	public Map AnalysisFinDtTypeMapCtl(@RequestBody AnalysisConFormVo formVo) throws Exception {
		return svc.analysisFinDtTypeMap(formVo).getMap();
	}
	
	@RequestMapping(value="/fin/AnalysisFinDtTypeMaps.do")
	@ResponseBody	
	public Map AnalysisFinDtTypeMapsCtl(@RequestBody AnalysisConFormVo formVo) throws Exception {
		return svc.analysisFinDtTypeMaps(formVo).getMap();
	}
	
	@RequestMapping(value="/fin/AnalysisFinDtRgsn.do")
	@ResponseBody	
	public Map AnalysisFinDtRgsnCtl(@RequestBody List<AnalysisConFormVo> formVos) throws Exception {
		return svc.analysisFinDtRgsn(formVos).getMap();
	}
	
	@RequestMapping(value="/fin/AnalysisFinRatioMap.do")
	@ResponseBody	
	public Map AnalysisFinRatioMapCtl(@RequestBody AnalysisConFormVo formVo) throws Exception {
		return svc.analysisFinRatioMap(formVo).getMap();
	}

	@RequestMapping(value="/fin/AnalysisBokFinRatioMap.do")
	@ResponseBody	
	public Map AnalysisBokFinRatioMapCtl(@RequestBody AnalysisConFormVo formVo) throws Exception {
		return svc.analysisBokFinRatioMap(formVo).getMap();
	}	
	
	@RequestMapping(value="/fin/AnalysisWallTrantMap.do")
	@ResponseBody	
	public Map AnalysisWallTrantMapCtl(@RequestBody AnalysisConFormVo formVo) throws Exception {
		return svc.analysisWallTrantMap(formVo).getMap();
	}
	
	@RequestMapping(value="/fin/AnalysisWallTrantList.do")
	@ResponseBody
	public Map AnalysisWallTrantListCtl(@RequestBody AnalysisConFormVo formVo) throws Exception {
		return svc.analysisWallTrantList(formVo).getMap();
	}
	
	@RequestMapping(value="/fin/AnalysisWallTrantRgsn.do")
	@ResponseBody
	public Map AnalysisWallTrantRgsnCtl(@RequestBody AnalysisConFormVo formVo) throws Exception {
		return svc.analysisWallTrantRgsn(formVo).getMap();
	}
	
	@RequestMapping(value="/fin/AnalysisWallTrantMdfc.do")
	@ResponseBody
	public Map AnalysisWallTrantMdfcCtl(@RequestBody AnalysisConFormVo formVo) throws Exception {
		return svc.analysisWallTrantMdfc(formVo).getMap();
	}	
	
	@RequestMapping(value="/fin/AnalysisDecisionMap.do")
	@ResponseBody	
	public Map AnalysisDecisionMapCtl(@RequestBody AnalysisConFormVo formVo) throws Exception {
		return svc.analysisDecisionMap(formVo).getMap();
	}
	
	@RequestMapping(value="/fin/AnalysisBokFinStacYyMap.do")
	@ResponseBody	
	public Map AnalysisBokFinStacYyMapCtl(@RequestBody AnalysisConFormVo formVo) throws Exception {
		return svc.analysisBokFinStacYyMap(formVo).getMap();
	}	
	
	
	
}
