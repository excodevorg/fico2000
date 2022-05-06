package com.fas.model.com;

import java.util.List;

import javax.annotation.Resource;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.stereotype.Component;

import com.fas.cmmn.util.FasPagingUtil;
import com.fas.model.com.dao.CodeInfoDao;
import com.fas.model.com.domain.CodeInfoDomain;
import com.fas.web.cmmn.exception.BizException;
import com.fas.web.cmmn.util.StringUtil;

@Component("CodeInfoManager")
public class CodeInfoManager {

	private static Log logger = LogFactory.getLog(CodeInfoManager.class);
	
	 @Resource(name="CodeInfoDao")
	 private CodeInfoDao codeInfoDao;
	 
	 //1) Menu Admin List 
	 public List<CodeInfoDomain> codeAdminList(CodeInfoDomain param, FasPagingUtil paging) throws Exception {
		 
		 try {
			 //1) Menu Name List
			 if (!StringUtil.isEmpty(param.getCodeNm())) {
				return codeInfoDao.selectCodeNmList(param, paging); 
			 } else if (!StringUtil.isEmpty(param.getDomainCode())) {
				 return codeInfoDao.selectDomainCodeList(param);
			 } else {
				 //return codeInfoDao.selectAllList(param, paging);
				 return codeInfoDao.selectCodeNmList(param, paging); 
			 }
		 } catch(Exception ex) {
			 throw new BizException(ex.toString());
		 }
		 
	 }
	 
	//1) Menu Admin List 
	public List<CodeInfoDomain> codeAdminAllList(CodeInfoDomain param, FasPagingUtil paging) throws Exception {
		
		try {
			 //1) Menu Name List
			return codeInfoDao.selectAllList(param, paging);
		} catch(Exception ex) {
			throw new BizException(ex.toString());
		}
			 
	 }	 
	 
	 //2) Menu Admin create 
	 public void codeAdminCreate(CodeInfoDomain param) throws Exception {
		 try {
			 codeInfoDao.insert(param);
		 } catch(Exception ex) {
			 throw new BizException(ex.toString());
		 }
	 }
	 
	 //3) Menu Admin modify
	 public void codeAdminModify(CodeInfoDomain param) throws Exception {
		 try {
			 codeInfoDao.update(param);
		 } catch(Exception ex) {
			 throw new BizException(ex.toString());
		 }
	 }
	 
	 //4) Menu Admin delete
	 public void codeAdminDelete(CodeInfoDomain param) throws Exception {
		 try {
			 codeInfoDao.delete(param);
		 } catch(Exception ex) {
			 throw new BizException(ex.toString());
		 }
	 }
	 
	 public CodeInfoDomain codeAdminInq(CodeInfoDomain param) throws Exception {
		 try {
			 return codeInfoDao.selectCodeInfo(param);
		 } catch(Exception ex) {
			 throw new BizException(ex.toString());
		 }
	 }
	 
	 public int totalCnt(String codeNm) throws Exception {
		 try {
			 return codeInfoDao.totalCnt(codeNm);
		 } catch(Exception ex) {
			 throw new BizException(ex.toString());
		 }
	 }
	
}
