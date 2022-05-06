package com.fas.model.com.dao;

import java.util.ArrayList;
import java.util.List;

import javax.annotation.Resource;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Repository;

import com.fas.cmmn.util.FasDateUtil;
import com.fas.cmmn.util.KeyGenerator;
import com.fas.model.com.domain.FileBscDomain;
import com.fas.model.com.domain.FileDtlDomain;
import com.fas.model.repository.FileBscRepository;
import com.fas.model.repository.FileDtlRepository;
import com.fas.model.repository.pk.FileDtlPK;

@Repository("FileMngmDao")
public class FileMngmDao {
	
	/** Repository */
    @Resource(name="fileBscRepository")
    private FileBscRepository fileBscRepository;
    
    @Resource(name="fileDtlRepository")
    private FileDtlRepository fileDtlRepository;
    
    public String insertFileBsc(FileBscDomain domain) throws Exception {
    	String flapMngmNo = KeyGenerator.getKeyByDateFormat();
    	domain.setFlapMngmNo(flapMngmNo);
    	fileBscRepository.saveAndFlush(domain);
    	return flapMngmNo;
    }
    
    public void updateFileBsc(FileBscDomain domain) throws Exception {
    	fileBscRepository.saveAndFlush(domain);
    }
    
    public List<FileBscDomain> selectFileBscListAll() throws Exception {
    	//페이징처리 
     	return fileBscRepository.findAll();
    }
    
    public FileBscDomain selectFileBsc(String flapMngmNo) throws Exception {
    	return fileBscRepository.findByFlapMngmNo(flapMngmNo);
    }
    
    private void insertFileDtl(FileDtlDomain domain) throws Exception {
    	List<FileDtlDomain> param = fileDtlRepository.findTopByFlapMngmNoOrderByFlapDtlSrnDesc(domain.getFlapMngmNo());
    	if (param != null && param.size() > 0) {
    		domain.setFlapDtlSrn(param.get(0).getFlapDtlSrn() + 1);
    	} else {
    		domain.setFlapDtlSrn(1);
    	}
    	domain.setFrrgts(FasDateUtil.getCurrentDate());
    	domain.setLastts(FasDateUtil.getCurrentDate());
    	domain.setFrrgUserId("ADMIN");
    	domain.setLastUserId("ADMIN");
    	
    	fileDtlRepository.saveAndFlush(domain);
    }
    
    public void insertFileDtl(List<FileDtlDomain> domainList) throws Exception {
    	
    	if (domainList != null) {
    	
    		FileDtlDomain param = domainList.get(0);
    	
	    	fileDtlRepository.deleteByFlapMngmNo(param.getFlapMngmNo());
	    	
	    	for (FileDtlDomain vo : domainList) {
	    		insertFileDtl(vo);
	    	}
    	
    	}
    	
    }
    
    public void updateFileDtl(FileDtlDomain domain) throws Exception {
    	fileDtlRepository.saveAndFlush(domain);
    }
    
    public FileDtlDomain selectFileDtl(FileDtlDomain domain) throws Exception {
    	
    	FileDtlDomain result = fileDtlRepository.findByFlapMngmNoAndFlapDtlSrn(domain.getFlapMngmNo(), domain.getFlapDtlSrn());
    	
    	return result;
    }
    
    public List<FileDtlDomain> selectFileDtlList(String flapMngmNo) throws Exception {
    	
    	List<FileDtlDomain> resultList = fileDtlRepository.findByFlapMngmNo(flapMngmNo);
    	
    	return resultList;
    	
    }
}
