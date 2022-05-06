package com.fas.model.edu;

import java.util.ArrayList;
import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Component;

import com.fas.model.edu.dao.ApplyMngDao;
import com.fas.model.edu.domain.ApplyMngDomain;

@Component("ApplyMngManager")
public class ApplyMngManager {

	@Resource(name="ApplyMngDao")
	private ApplyMngDao dao;
	
	public void applyRgsn(ApplyMngDomain apply) throws Exception {
		dao.insert(apply);
	}
	
	public void applyMdfc(ApplyMngDomain apply) throws Exception {
		dao.update(apply);
	}
	
	public List<ApplyMngDomain> applyLcteList(ApplyMngDomain apply) throws Exception {
		return dao.selectLcteList(apply);
	}
	
	public List<ApplyMngDomain> applyUserList(ApplyMngDomain apply) throws Exception {
		return dao.selectUserList(apply);
	}
	
	public List<ApplyMngDomain> applyUserList(ApplyMngDomain apply, String applyPrgScd) throws Exception {
		
		if (applyPrgScd == null) applyPrgScd = "";
		
		List<ApplyMngDomain> resultList = new ArrayList<ApplyMngDomain>();
		List<ApplyMngDomain> selectedList = dao.selectUserList(apply);
		
		for (ApplyMngDomain domain : selectedList) {
			if (applyPrgScd.equals(domain.getApplyPrgScd())) {
				resultList.add(domain);
			}
		}
		
		return resultList;
	}
	
	public List<ApplyMngDomain> applyUserAllList(ApplyMngDomain apply) throws Exception {
		List<ApplyMngDomain> selectedList = dao.selectUserList(apply);
		return selectedList;
	}
	
	public List<ApplyMngDomain> applyUserLcteList(ApplyMngDomain apply) throws Exception {
		List<ApplyMngDomain> selectedList = dao.selectUserApplyLcteList(apply);
		return selectedList;
	}
	
	public ApplyMngDomain applyInq(ApplyMngDomain apply) throws Exception {
		return dao.select(apply);
	}
	
	public void applyDel(ApplyMngDomain apply) throws Exception {
		dao.delete(apply);
	}
	
	
}
