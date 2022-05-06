package com.fas.model.com;

import java.util.Date;
import java.util.List;

import javax.annotation.Resource;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.stereotype.Component;

import com.fas.cmmn.util.FasDateUtil;
import com.fas.model.com.dao.UserRoleDao;
import com.fas.model.com.domain.UserRoleDomain;

@Component("UserRoleManager")
public class UserRoleManager {

	@Resource(name="UserRoleDao")
	private UserRoleDao userRoleDao;
	
	private static Log logger = LogFactory.getLog(UserRoleManager.class);
	
	//등록
	public void userRoleRgsn(UserRoleDomain domain) throws Exception {
		domain.setFrrgts(FasDateUtil.getCurrentDate());
		domain.setLastts(FasDateUtil.getCurrentDate());
		userRoleDao.insert(domain);
	}
	
	public void userRoleRgsn(List<UserRoleDomain> domain) throws Exception {
		userRoleDao.insert(domain);
	}
	
	//변경
	public void userRoleModify(UserRoleDomain domain) throws Exception {
		domain.setLastts(FasDateUtil.getCurrentDate());
		userRoleDao.update(domain);
	}
	
	//삭제 
	public void userRoleDelete(UserRoleDomain domain) throws Exception {
		userRoleDao.deleteUserId(domain);
	}
	
	//조회
	public List<UserRoleDomain> userRoleList(UserRoleDomain domain) throws Exception {
		return userRoleDao.selectList(domain);
	}
	
}
