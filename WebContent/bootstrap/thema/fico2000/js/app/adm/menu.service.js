"use strict";
/**
 * 메뉴 관련 javascript 
 */

var async = true;

var menuService = new MenuService(false);

function MenuService(isAsync) {
	this.async = isAsync;
};

    // 메뉴관련 
MenuService.prototype.getMenus = function(menuNm, page, callback) {
    return ajaxSend('/adm/MenuMngList.do', JSON.stringify({menuNm:menuNm, page:page}),'POST',this.async,callback);
 };
MenuService.prototype.getAllMenus = function(menuNm, callback){
    return ajaxSend('/adm/MenuMngAllList.do', JSON.stringify({menuNm:menuNm}),'POST',this.async,callback);
};
MenuService.prototype.addMenu = function(menu,callback){
    return ajaxSend('/adm/MenuMngCreate.do', JSON.stringify(menu),'POST',this.async,callback);
};
MenuService.prototype.updMenu = function(menu, callback){
    return ajaxSend('/adm/MenuMngMdfc.do', JSON.stringify(menu),'POST',this.async,callback);
};
MenuService.prototype.updActiveMenu = function(menu, callback){
    //return ajaxSend('/adm/MenuMngDelete.do', JSON.stringify(menu),'POST',this.async,callback);
};
MenuService.prototype.delMenu = function(menu, callback){
    return ajaxSend('/adm/MenuMngDelete.do', JSON.stringify(menu),'POST',this.async,callback);
};
    // 메뉴권한
MenuService.prototype.getMenuAuths = function(rolecode, callback){
    return ajaxSend('/adm/MenuAuthList.do', JSON.stringify({rolecode:rolecode}),'POST',this.async,callback);
};
MenuService.prototype.addMenuAuth = function(menuAuth, callback){
    return ajaxSend('/adm/MenuAuthRgsn.do', JSON.stringify(menuAuth),'POST',this.async,callback);
};  
