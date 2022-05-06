package com.fas.model.com;

import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Component;

import com.fas.cmmn.util.FasDateUtil;
import com.fas.model.com.dao.FileMngmDao;
import com.fas.model.com.domain.FileBscDomain;
import com.fas.model.com.domain.FileDtlDomain;
import com.fas.web.cmmn.util.HttpUtil;
import com.fas.web.cmmn.util.StringUtil;

@Component("FileManager")
public class FileManager {
	
	 @Resource(name="FileMngmDao")
	 private FileMngmDao fileMngmDao;
	 
	 @Resource(name="HttpUtil")
	 private HttpUtil httpUtil;
	
	//1) File List
	public List<FileDtlDomain> fileList(String flapMngmNo) throws Exception {
		return fileMngmDao.selectFileDtlList(flapMngmNo);
	}
	
	//2) File Rgsn
	public String fileRgsn(List<FileDtlDomain> fileList) throws Exception {
		
		if (fileList == null) return null;
		if (fileList.size() == 0) return null;
		
		//1) File Bsc 
		FileDtlDomain vo = fileList.get(0);
		
		FileBscDomain bsc = null;
		
		bsc = new FileBscDomain();
		bsc.setFlapMngmNo(vo.getFlapMngmNo());
		bsc.setDelYn("N");
		bsc.setFlapMngTtlNm("");
		bsc.setFlapMngCon("");
		bsc.setFrrgts(FasDateUtil.getCurrentDate());
		bsc.setLastts(FasDateUtil.getCurrentDate());
		bsc.setFrrgUserId(httpUtil.getSessionUserId());
		bsc.setLastUserId(httpUtil.getSessionUserId());
		
		String flapMngmNo = vo.getFlapMngmNo();
		
		if (StringUtil.isEmpty(flapMngmNo)) {
			flapMngmNo = fileMngmDao.insertFileBsc(bsc);
		} else {
			bsc = fileMngmDao.selectFileBsc(flapMngmNo);
			if (bsc == null) {
				flapMngmNo = fileMngmDao.insertFileBsc(bsc);
			}
		}
		
		//2) File Dtl
		for (FileDtlDomain dtlVo : fileList) {
			dtlVo.setFlapMngmNo(flapMngmNo);
		}
		
		fileMngmDao.insertFileDtl(fileList);
		
		return flapMngmNo;
	}
	
	//3) File Dtl Info 
	public FileDtlDomain fileDtlInfo(FileDtlDomain fileDtl) throws Exception {
		return fileMngmDao.selectFileDtl(fileDtl);
	}
	
}
