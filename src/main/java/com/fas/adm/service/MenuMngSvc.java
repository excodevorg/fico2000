package com.fas.adm.service;

import com.fas.adm.formVo.MenuMngFormVo;
import com.fas.web.cmmn.dataaccess.util.JsonObjectModel;

public interface MenuMngSvc {

	public JsonObjectModel menuAdminList(MenuMngFormVo param) throws Exception;
	public JsonObjectModel menuAdminAllList(MenuMngFormVo param) throws Exception;
	public JsonObjectModel menuAdminCreate(MenuMngFormVo param) throws Exception;
	public JsonObjectModel menuAdminMdfc(MenuMngFormVo param) throws Exception;
	public JsonObjectModel menuAdminActive(MenuMngFormVo param) throws Exception;
	public JsonObjectModel menuAdminDel(MenuMngFormVo param) throws Exception;
	
}
