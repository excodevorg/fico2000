package com.fas.adm.service;

import java.util.List;

import com.fas.adm.formVo.MenuAuthFormVo;
import com.fas.web.cmmn.dataaccess.util.JsonObjectModel;

public interface MenuAuthMngSvc {
	public JsonObjectModel menuAuthCodeList(MenuAuthFormVo param) throws Exception;
	public JsonObjectModel menuAuthList(MenuAuthFormVo param) throws Exception;
	public JsonObjectModel menuAuthRgsn(List<MenuAuthFormVo> param) throws Exception;
}
