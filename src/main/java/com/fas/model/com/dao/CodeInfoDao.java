package com.fas.model.com.dao;

import java.util.ArrayList;
import java.util.List;

import javax.annotation.Resource;

import org.hsqldb.lib.StringUtil;
import org.springframework.data.domain.Page;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.data.jpa.domain.Specifications;
import org.springframework.stereotype.Repository;

import com.fas.cmmn.util.FasPagingUtil;
import com.fas.model.com.domain.CodeInfoDomain;
import com.fas.model.repository.CodeInfoRepository;
import com.fas.model.repository.pk.CodeInfoPK;
import com.fas.model.repository.specs.CodeInfoSpecs;

@Repository("CodeInfoDao")
public class CodeInfoDao {

	/** Repository */
    @Resource(name="codeInfoRepository")	
    private CodeInfoRepository codeInfoRepository;
    
    public void insert(CodeInfoDomain param) {
    	codeInfoRepository.saveAndFlush(param);
    }
    
    public void update(CodeInfoDomain param) {
    	codeInfoRepository.saveAndFlush(param);
    }
    
    public List<CodeInfoDomain> selectCodeNmList(CodeInfoDomain param) {
    	String domainCodeNm = param.getCodeNm();
    	return codeInfoRepository.findByDomainCodeNmContaining(domainCodeNm);
    }
    
    public List<CodeInfoDomain> selectCodeNmList(CodeInfoDomain param, FasPagingUtil paging) {
    	String domainCodeNm = param.getCodeNm();
    	return codeInfoRepository.findByDomainCodeNmContaining(domainCodeNm,paging.getPagingRequest());
    }
    
    public List<CodeInfoDomain> selectAllList(CodeInfoDomain param) {
    	
    	return codeInfoRepository.findAll();
    }
    
    public List<CodeInfoDomain> selectAllList(CodeInfoDomain param, FasPagingUtil paging) {
    	List<CodeInfoDomain> arrList = codeInfoRepository.findAll();
    	if (arrList != null) {
    		return arrList;
    	} else {
    		return new ArrayList<CodeInfoDomain>(); 
    	}
    }
    
    public List<CodeInfoDomain> selectDomainCodeList(CodeInfoDomain param) {
    	return codeInfoRepository.findByDomainCode(param.getDomainCode());
    }
    
    public CodeInfoDomain selectCodeInfo(CodeInfoDomain param) {
    	return codeInfoRepository.findByDomainCodeAndCode(param.getDomainCode(), param.getCode());
    }
    
    public void delete(CodeInfoDomain param) {
    	codeInfoRepository.delete(param);
    }
    
    public int totalCnt(String codeNm) {
    	if (StringUtil.isEmpty(codeNm)) {
    		List arrList = codeInfoRepository.findAll();
    		if (arrList != null) {
    			return arrList.size();
    		} else {
    			return 0;
    		}
    	} else {
    		String domainCodeNm = codeNm;
    		List arrList = codeInfoRepository.findByDomainCodeNmContaining(domainCodeNm);
    		if (arrList != null) {
    			return arrList.size();
    		} else {
    			return 0;
    		}
    	}
    }
	
}
