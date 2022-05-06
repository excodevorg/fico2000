package com.fas.cmmn.service.impl;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.fas.adm.formVo.CodeMngFormVo;
import com.fas.cmmn.formVo.CmmFormVo;
import com.fas.cmmn.service.CommonSvc;
import com.fas.cmmn.util.FasComparaTor;
import com.fas.cmmn.util.FasDateUtil;
import com.fas.cmmn.util.FasExcelUtil;
import com.fas.cmmn.util.FasPagingUtil;
import com.fas.cmmn.util.FasStaticMenuList;
import com.fas.cmmn.util.FileUploadUtil;
import com.fas.model.com.CodeInfoManager;
import com.fas.model.com.FileManager;
import com.fas.model.com.MenuAuthManager;
import com.fas.model.com.MenuInfoManager;
import com.fas.model.com.domain.CodeInfoDomain;
import com.fas.model.com.domain.FileDtlDomain;
import com.fas.model.com.domain.MenuAuthDomain;
import com.fas.model.com.domain.MenuInfoDomain;
import com.fas.web.cmmn.dataaccess.util.JsonObjectModel;
import com.fas.web.cmmn.util.BeanUtils;
import com.fas.web.cmmn.util.ComConst;
import com.fas.web.cmmn.util.HttpUtil;
import com.fas.web.cmmn.util.JsonResponseObject;
import com.fas.web.cmmn.dataaccess.util.FasMap;

@Service("CommonSvc")
public class CommonSvcImpl implements CommonSvc {
	
	@Autowired
	private CodeInfoManager codeManager;
	
	@Resource(name="fileUploadUtil")
	private FileUploadUtil fileUploadUtil;
	
	@Autowired
	private FileManager fileManager;
	
	@Autowired
	private ComConst comConst;
	
	@Autowired
	private FasExcelUtil fasExcelUtil;
	
	@Autowired
	private MenuInfoManager menuManager;
	
	@Autowired
	private MenuAuthManager menuAuthManager;	
	
	@Autowired
	private HttpUtil httpUtil;
	
	private static Log logger = LogFactory.getLog(CommonSvcImpl.class);
	
	public JsonObjectModel YearListSvc(CmmFormVo param) throws Exception {
		
		JsonObjectModel resultMap = new JsonObjectModel();
		
		String today = FasDateUtil.getCurrentDay();
		String toYear = today.substring(0,4);
		int intToYear = Integer.parseInt(toYear);
		
		int limit = 10;
		
		if (param != null) {
			if (param.getLimit() != 0) limit = param.getLimit();
		}
		
		int intFromYear = intToYear - limit;
		
		FasMap map = null;
		List resultList = new ArrayList();
		
		map = new FasMap();
		map.put("name", "등록할 재무정보의 회계 연도를 선택하세요.");
		map.put("value", "");
		
		resultList.add(map);
		
		for (int idx = intToYear; idx >= intFromYear; idx--) {
			map = new FasMap();
			map.put("name", idx + " 년도 재무 정보");
			map.put("value", idx + "");
			
			resultList.add(map);
		}
		
		resultMap.putData(resultList, resultList.size());
		
		return resultMap;
		
	}
	
	@Override
	public JsonObjectModel MenuListSvc(CmmFormVo param) throws Exception {
		
		//1) 선언
		BeanUtils beanUtil = new BeanUtils();
		JsonObjectModel resultMap = new JsonObjectModel();
		List<FasMap> menuList = new ArrayList<FasMap>();
		ArrayList<Integer> menuIdList = new ArrayList<Integer>();
		List<MenuInfoDomain> menuInfoList = new ArrayList<MenuInfoDomain>();
		FasMap menu = null;
		
		if (FasStaticMenuList.getMenuListMap() != null && FasStaticMenuList.getMenuListMap().size() > 0) {
			menuList = (List<FasMap>) FasStaticMenuList.getMenuListMap().get(httpUtil.getLastRoleCode());
			if (menuList != null && menuList.size() > 0) {
				resultMap.putData(menuList, menuList.size());
				return resultMap;
			}
		} 
		
		//2) 권한 조회
		String roleCode = httpUtil.getLastRoleCode();
		
		//3) 권한으로 메뉴 조회
		MenuAuthDomain menuAuth = new MenuAuthDomain();
		menuAuth.setRolecode(roleCode);
		List<MenuAuthDomain> menuAuthList = menuAuthManager.menuAuthList(menuAuth);
		
		Map menuIds = new HashMap();
		
		for (MenuAuthDomain auth : menuAuthList) {
			menuIdList.add(auth.getMenuId());
		}
		
		//if (menuIdList != null) Collections.sort(menuIdList);
		//4) 메뉴정보 조회
		MenuInfoDomain menuInfo = null;
		for (int menuId : menuIdList) {
			menuInfo = new MenuInfoDomain();
			menuInfo.setMenuId(menuId);
			menuInfo = menuManager.menuAdminDetail(menuInfo);
			if (menuInfo != null) {
				if ("Y".equals(menuInfo.getUseYn())) {
					if (menuInfo.getMenuLevel() == 2) {
						menuInfoList.add(menuInfo);
					}
				}
			}
		}
		
		Collections.sort(menuInfoList, FasComparaTor.MenuIdComparator);
		
		List<MenuInfoDomain> menu3LevelList = null;
		
		MenuInfoDomain menu3LevelInfo = null;
		
		for (MenuInfoDomain menus : menuInfoList) {
			
			String menuId = "" + menus.getMenuId();
			menuId = menuId.substring(1);
			int intMenuId = Integer.parseInt(menuId);
			int level = 2;
			
			if (intMenuId > 0) {
				menu = new FasMap();
				int menuID = menus.getMenuId();
				
				String topMenuId = ""+menus.getUpperMenuId();
				
				menu.put("topMenuId",topMenuId.substring(0,1)+"0000");
				menu.put("menuId",""+menus.getMenuId());
				menu.put("menuNm",menus.getMenuNm());
				menu.put("menuPath",menus.getMenuPath());
				menu.put("menuLevel","" + menus.getMenuLevel());
				menu.put("iconCls","fa fa-bar-chart-o fa-fw");
				menu.put("menuMidNm",menus.getUpperMenuNm());
				menu.put("menuOrder", "" + menus.getMenuOrder());
				menuList.add(menu);
				
				//3Level 메뉴가 있는 경우
				menu3LevelList = null;
				menu3LevelInfo = new MenuInfoDomain();
				menu3LevelInfo.setUpperMenuId(menus.getMenuId());
				menu3LevelList = menuManager.menuAdminList(menu3LevelInfo, new FasPagingUtil());
				
				if (menu3LevelList != null && menu3LevelList.size() > 0) {
					
					Collections.sort(menu3LevelList, FasComparaTor.MenuIdComparator);
					
					for (MenuInfoDomain menu3 : menu3LevelList) {
						menu = new FasMap();
						
						topMenuId = ""+menu3.getUpperMenuId();
						
						menu.put("topMenuId",topMenuId.substring(0,1)+"0000");
						menu.put("menuId",""+menu3.getMenuId());
						menu.put("menuNm",menu3.getMenuNm());
						menu.put("menuPath",menu3.getMenuPath());
						menu.put("menuLevel","" + menu3.getMenuLevel());
						menu.put("iconCls","fa fa-bar-chart-o fa-fw");
						menu.put("menuMidNm",menu3.getUpperMenuNm());
						menu.put("menuOrder", "" + menu3.getMenuOrder());
						menuList.add(menu);
					}
					
				}
				
			}
			
		}
		
		resultMap.putData(menuList, menuList.size());
		
		return resultMap;
	}
	
	//1) 코드
	@Override
	public JsonObjectModel CodeListSvc(CodeMngFormVo param) throws Exception {
		
		//1) 선언
		BeanUtils beanUtil = new BeanUtils();
		JsonObjectModel resultMap = new JsonObjectModel();
		List<FasMap> menuList = new ArrayList<FasMap>();
		FasMap codes = null;
		
		int page = param.getPage();
		int limit = param.getLimit();
		int totalCnt = 0;
		
		FasPagingUtil paging = new FasPagingUtil(page, limit);
		
		CodeInfoDomain domain = (CodeInfoDomain) beanUtil.toCopy(param, new CodeInfoDomain());
		
		List<CodeInfoDomain> resultList = codeManager.codeAdminList(domain, paging);
		
		for (CodeInfoDomain vo : resultList) {
			codes = new FasMap();
			codes.put("name", vo.getCodeNm());
			codes.put("value", vo.getCode());
			menuList.add(codes);
		}
		
		resultMap.putData(menuList, menuList.size());
		
		return resultMap;
		
	}
	
	@Override
	public JsonObjectModel HandleFileUploadSvc(MultipartFile file) throws Exception {
		
		//1) 선언
		BeanUtils beanUtil = new BeanUtils();
		JsonObjectModel resultMap = new JsonObjectModel();		
		
		Map fileMap = fileUploadUtil.fileUpload(file);
		
		resultMap.putData("fileMap", fileMap);
		
		return resultMap;
		
	}
	
	@Override
	public Map HandleImgFileUploadSvc(MultipartFile file) throws Exception {
		
		//1) 선언
		Map resultMap = new HashMap();
		
		boolean check = false;
		
		if (file != null) {
			
			String fileName = file.getOriginalFilename();
			
			int len = fileName.indexOf(".");
			
			String ext = fileName.substring(len);
			
			if (ext != null) {
				if (ext.toLowerCase().trim().equals(".img") || 
					ext.toLowerCase().trim().equals(".png") ||
					ext.toLowerCase().trim().equals(".gif") ||
					ext.toLowerCase().trim().equals(".jpg") ||
					ext.toLowerCase().trim().equals(".bmp") ||
					ext.toLowerCase().trim().equals(".pic") ||
					ext.toLowerCase().trim().equals(".tif") ) {
					Map fileMap = fileUploadUtil.imgFileUpload(file);
						
					resultMap.put("error", false);
					resultMap.put("fileName", fileMap.get("saveFileName"));
					resultMap.put("path", comConst.getHostUrl() + comConst.getImgUploadUrl() + fileMap.get("saveFileName"));
					check = true;
				} 
			}
		
		} 
		
		if (!check) {
			resultMap = new HashMap();
			resultMap.put("error", "filetype error(img, png, gif, jpg, bmp)");
		}
			
		return resultMap;
		
	}
	
	@Override
	public JsonObjectModel FileListSvc(CmmFormVo param) throws Exception {
		
		//1) 선언
		BeanUtils beanUtil = new BeanUtils();
		JsonObjectModel resultMap = new JsonObjectModel();
		
		List<FasMap> resultList = new ArrayList<FasMap>();
		
		FasMap map = null;
		
		logger.debug("fileBscNo >>>> " + param.getFileBscNo());
		
		List<FileDtlDomain> arrList = fileManager.fileList(param.getFileBscNo());
		
		logger.debug("resultList >>>> " + resultList);
		
		for (FileDtlDomain vo : arrList) {
			map = new FasMap();
			map.put("flapMngmNo",vo.getFlapMngmNo());
			map.put("flapDtlSrn",vo.getFlapDtlSrn());
			map.put("flapMngmDcd",vo.getFlapMngmDcd());
			map.put("flapMngFileNm",vo.getFlapMngFileNm());
			map.put("flapMngFileOrgNm",vo.getFlapMngFileOrgNm());
			map.put("flapMngFileSzie",vo.getFlapMngFileSzie());
			map.put("delYn",vo.getDelYn());
			resultList.add(map);
		}
		
		
		if (resultList == null) resultList =new ArrayList<FasMap>();
		
		resultMap.putData(resultList, resultList.size());
		
		return resultMap;
		
	}
	
	@Override
	public String FileDownLoad(String fileBscNo, int fileDtlSrn) throws Exception {
		FileDtlDomain vo = new FileDtlDomain();
		vo.setFlapMngmNo(fileBscNo);
		vo.setFlapDtlSrn(fileDtlSrn);
		vo = fileManager.fileDtlInfo(vo);
		if (vo != null) return vo.getFlapMngFileNm();
		else {
			return "";
		}
	}
	
	@Override
	public JsonObjectModel ExcelImportSvc(CmmFormVo param) throws Exception {

		//1) 선언
		BeanUtils beanUtil = new BeanUtils();
		JsonObjectModel resultMap = new JsonObjectModel();
		
		List<Map> resultList = fasExcelUtil.transExcelToList(param.getExcelFileName(), param.getColumDef(), param.getRowStart());
		
		if (resultList == null) resultList = new ArrayList<Map> ();
		
		resultMap.putData(resultList, resultList.size());
		
		return resultMap;
		
	}
}
