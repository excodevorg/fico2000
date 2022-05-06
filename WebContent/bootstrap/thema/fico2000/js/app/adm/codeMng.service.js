"use strict";
/**
 * 유저 관련 javascript 
 */

var async = true;

var codeMngService = new CodeMngService(false);

function CodeMngService(isAsync) {
	this.async = isAsync;
};

// 메뉴관련 
CodeMngService.prototype.getCode = function(codeNm, page, callback){
    return ajaxSend('/adm/CodeMngList.do', JSON.stringify({codeNm:codeNm, page:page}),'POST',this.async,callback);
};
     // 메뉴관련 
CodeMngService.prototype.getCodes = function(domainCode, callback){
    if (callback) {
        return ajaxSend('/cmmn/CodeList.do', JSON.stringify({domainCode:domainCode}),'POST',true,callback);
    } else {
        return ajaxSend('/cmmn/CodeList.do', JSON.stringify({domainCode:domainCode}),'POST',this.async,callback);
    }
};
CodeMngService.prototype.addCode = function(code, callback){
    return ajaxSend('/adm/CodeMngCreate.do', JSON.stringify(code),'POST',this.async,callback);
};
CodeMngService.prototype.updCode = function(code, callback){
    return ajaxSend('/adm/CodeMngMdfc.do', JSON.stringify(code),'POST',this.async,callback);
};
CodeMngService.prototype.delCode = function(code, callback){
    return ajaxSend('/adm/CodeMngDelete.do', JSON.stringify(code),'POST',this.async,callback);
};