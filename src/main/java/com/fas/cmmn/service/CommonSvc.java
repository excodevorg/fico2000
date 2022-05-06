package com.fas.cmmn.service;

import java.util.Map;

import org.springframework.web.multipart.MultipartFile;

import com.fas.adm.formVo.CodeMngFormVo;
import com.fas.cmmn.formVo.CmmFormVo;
import com.fas.web.cmmn.dataaccess.util.JsonObjectModel;

public interface CommonSvc {
	public JsonObjectModel YearListSvc(CmmFormVo param) throws Exception;
	public JsonObjectModel MenuListSvc(CmmFormVo param) throws Exception;
	public JsonObjectModel CodeListSvc(CodeMngFormVo param) throws Exception;
	public JsonObjectModel HandleFileUploadSvc(MultipartFile file) throws Exception;
	public JsonObjectModel ExcelImportSvc(CmmFormVo param) throws Exception;
	public Map HandleImgFileUploadSvc(MultipartFile file) throws Exception;
	public JsonObjectModel FileListSvc(CmmFormVo param) throws Exception;
	public String FileDownLoad(String fileBscNo, int fileDtlSrn) throws Exception;
	
}
