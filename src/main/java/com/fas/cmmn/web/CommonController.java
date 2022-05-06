package com.fas.cmmn.web;

import java.io.File;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.ModelAndView;

import com.fas.adm.formVo.CodeMngFormVo;
import com.fas.cmmn.formVo.CmmFormVo;
import com.fas.cmmn.service.CommonSvc;
import com.fas.cmmn.util.RSA;
import com.fas.web.cmmn.util.ComConst;
import com.fas.web.cmmn.util.HttpUtil;

@Controller
public class CommonController {

	@Resource(name="CommonSvc")
	CommonSvc commonSvc;
	
	@Autowired
	private HttpUtil httpUtil;	
	
	@Autowired
	private ComConst comConst;
	
	//1) Menu List
	@RequestMapping(value="/cmmn/YearList.do")
	@ResponseBody	
	public Map YearListCtl(@RequestBody CmmFormVo formVo) throws Exception {
		return commonSvc.YearListSvc(formVo).getMap();
	}
	
	//1) Menu List
	@RequestMapping(value="/cmmn/MenuList.do")
	@ResponseBody
	public Map MenuListCtl(@RequestBody(required = false) CmmFormVo formVo) throws Exception {
		return commonSvc.MenuListSvc(formVo).getMap();
	}
	
	@RequestMapping(value="/cmmn/CodeList.do")
	@ResponseBody
	public Map CodeListCtl(@RequestBody(required = false) CodeMngFormVo formVo) throws Exception {
		return commonSvc.CodeListSvc(formVo).getMap();
	}
	
	@RequestMapping(value = "/cmmn/uploadFile.do")
	@ResponseBody
	public Map HandleFileUploadCtl(@RequestParam MultipartFile file) throws Exception {
		return commonSvc.HandleFileUploadSvc(file).getMap();
	}
	
	@RequestMapping(value = "/cmmn/uploadImgFile.do")
	@ResponseBody
	public Map HandleImgFileUploadCtl(@RequestParam MultipartFile file) throws Exception {
		return commonSvc.HandleImgFileUploadSvc(file);
	}
	
	@RequestMapping(value = "/cmmn/fileList.do")
	@ResponseBody
	public Map FileListCtl(@RequestBody CmmFormVo param) throws Exception {
		return commonSvc.FileListSvc(param).getMap();
	}
	
	@RequestMapping("/cmmn/fileDownload.do")
    public ModelAndView download(@RequestParam("fileBscNo") String fileBscNo, 
                                 @RequestParam("fileDtlNo") int fileDtlNo) throws Exception {
        
		String fileFullName = comConst.getFileUploadPath() + commonSvc.FileDownLoad(fileBscNo, fileDtlNo);
        File file = new File(fileFullName);
        return new ModelAndView("downloadView", "downloadFile", file);
    }
	
	@RequestMapping("/cmmn/fileNameDownload.do")
    public ModelAndView fileNameDownload(@RequestParam("fileName") String fileName) throws Exception {
        
		String fileFullName = comConst.getFileUploadPath() + fileName;
        File file = new File(fileFullName);
        return new ModelAndView("downloadView", "downloadFile", file);
    }
	
	@RequestMapping(value = "/cmmn/excelImport.do")
	@ResponseBody
	public Map ExcelImportCtl(@RequestBody(required = false) CmmFormVo formVo) throws Exception {
		return commonSvc.ExcelImportSvc(formVo).getMap();
	}
	
	@RequestMapping("/main/pageMove.do")
	public String pageMoveMainCtl(@ModelAttribute("CmmFormVo") CmmFormVo formVo, Model model) throws Exception {
		
		RSA rsa = RSA.getEncKey();
		model.addAttribute("publicKeyModulus", rsa.getPublicKeyModulus());
		model.addAttribute("publicKeyExponent",  rsa.getPublicKeyExponent());
		model.addAttribute("params", formVo.getParams());
		httpUtil.getSession().setAttribute("__rsaPrivateKey__", rsa.getPrivateKey());
		
		return "main/"+formVo.getMenuCode();
	}
	
	@RequestMapping("/intr/pageMove.do")
	public String pageMoveItrCtl(@ModelAttribute("CmmFormVo") CmmFormVo formVo, Model model) throws Exception {
		
		RSA rsa = RSA.getEncKey();
		model.addAttribute("publicKeyModulus", rsa.getPublicKeyModulus());
		model.addAttribute("publicKeyExponent",  rsa.getPublicKeyExponent());
		model.addAttribute("params", formVo.getParams());
		httpUtil.getSession().setAttribute("__rsaPrivateKey__", rsa.getPrivateKey());		
		
		return "intr/"+formVo.getMenuCode();
	}
	
	@RequestMapping("/pres/pageMove.do")
	public String pageMovePresCtl(@ModelAttribute("CmmFormVo") CmmFormVo formVo, Model model) throws Exception {
		
		RSA rsa = RSA.getEncKey();
		model.addAttribute("publicKeyModulus", rsa.getPublicKeyModulus());
		model.addAttribute("publicKeyExponent",  rsa.getPublicKeyExponent());
		model.addAttribute("params", formVo.getParams());
		httpUtil.getSession().setAttribute("__rsaPrivateKey__", rsa.getPrivateKey());		
		
		return "pres/"+formVo.getMenuCode();
	}

	@RequestMapping("/join/pageMove.do")
	public String pageMoveJoinCtl(@ModelAttribute("CmmFormVo") CmmFormVo formVo, Model model) throws Exception {
		
		RSA rsa = RSA.getEncKey();
		model.addAttribute("publicKeyModulus", rsa.getPublicKeyModulus());
		model.addAttribute("publicKeyExponent",  rsa.getPublicKeyExponent());
		model.addAttribute("params", formVo.getParams());
		httpUtil.getSession().setAttribute("__rsaPrivateKey__", rsa.getPrivateKey());		
		
		return "join/"+formVo.getMenuCode();
	}
	
	@RequestMapping("/advi/pageMove.do")
	public String pageMoveAdviCtl(@ModelAttribute("CmmFormVo") CmmFormVo formVo, Model model) throws Exception {
		
		RSA rsa = RSA.getEncKey();
		model.addAttribute("publicKeyModulus", rsa.getPublicKeyModulus());
		model.addAttribute("publicKeyExponent",  rsa.getPublicKeyExponent());
		model.addAttribute("params", formVo.getParams());
		httpUtil.getSession().setAttribute("__rsaPrivateKey__", rsa.getPrivateKey());		
		
		return "advi/"+formVo.getMenuCode();
	}
	
	@RequestMapping("/edu/pageMove.do")
	public String pageMoveEduCtl(@ModelAttribute("CmmFormVo") CmmFormVo formVo, Model model) throws Exception {
		
		RSA rsa = RSA.getEncKey();
		model.addAttribute("publicKeyModulus", rsa.getPublicKeyModulus());
		model.addAttribute("publicKeyExponent",  rsa.getPublicKeyExponent());
		model.addAttribute("params", formVo.getParams());
		httpUtil.getSession().setAttribute("__rsaPrivateKey__", rsa.getPrivateKey());		
		
		return "edu/"+formVo.getMenuCode();
	}
	
	@RequestMapping("/fin/pageMove.do")
	public String pageMoveFinCtl(@ModelAttribute("CmmFormVo") CmmFormVo formVo, Model model) throws Exception {
		
		RSA rsa = RSA.getEncKey();
		model.addAttribute("publicKeyModulus", rsa.getPublicKeyModulus());
		model.addAttribute("publicKeyExponent",  rsa.getPublicKeyExponent());
		model.addAttribute("params", formVo.getParams());
		httpUtil.getSession().setAttribute("__rsaPrivateKey__", rsa.getPrivateKey());		
		
		return "fin/"+formVo.getMenuCode();
	}
	
	@RequestMapping("/dta/pageMove.do")
	public String pageMoveDtaCtl(@ModelAttribute("CmmFormVo") CmmFormVo formVo, Model model) throws Exception {
		
		RSA rsa = RSA.getEncKey();
		model.addAttribute("publicKeyModulus", rsa.getPublicKeyModulus());
		model.addAttribute("publicKeyExponent",  rsa.getPublicKeyExponent());
		model.addAttribute("params", formVo.getParams());
		httpUtil.getSession().setAttribute("__rsaPrivateKey__", rsa.getPrivateKey());		
		
		return "dta/"+formVo.getMenuCode();
	}
	
	@RequestMapping("/cmu/pageMove.do")
	public String pageMoveCmuCtl(@ModelAttribute("CmmFormVo") CmmFormVo formVo, Model model) throws Exception {
		
		RSA rsa = RSA.getEncKey();
		model.addAttribute("publicKeyModulus", rsa.getPublicKeyModulus());
		model.addAttribute("publicKeyExponent",  rsa.getPublicKeyExponent());
		model.addAttribute("params", formVo.getParams());
		httpUtil.getSession().setAttribute("__rsaPrivateKey__", rsa.getPrivateKey());		
		
		return "cmu/"+formVo.getMenuCode();
	}
	
	@RequestMapping("/adm/pageMove.do")
	public String pageMoveAdmCtl(@ModelAttribute("CmmFormVo") CmmFormVo formVo, Model model) throws Exception {
		
		RSA rsa = RSA.getEncKey();
		model.addAttribute("publicKeyModulus", rsa.getPublicKeyModulus());
		model.addAttribute("publicKeyExponent",  rsa.getPublicKeyExponent());
		model.addAttribute("params", formVo.getParams());
		httpUtil.getSession().setAttribute("__rsaPrivateKey__", rsa.getPrivateKey());		
		
		return "adm/"+formVo.getMenuCode();
	}
}
