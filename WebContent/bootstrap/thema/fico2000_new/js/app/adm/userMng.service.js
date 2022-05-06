"use strict";
/**
 * 유저 관련 javascript 
 */

var async = true;

var userMngService = new UserMngService(false);

function UserMngService(isAsync) {
	this.async = isAsync;
};

UserMngService.prototype.getUsers = function(userNm, callback){
    return ajaxSend('/adm/UserMngList.do',JSON.stringify({userNm:userNm}),'POST',this.async,callback);
};
UserMngService.prototype.getPageUsers = function(userNm, pageNum, callback){
    return ajaxSend('/adm/UserMngList.do',JSON.stringify({userNm:userNm,page:pageNum}),'POST',this.async,callback);
};
UserMngService.prototype.getUser = function(userId, callback){

};
UserMngService.prototype.stopUser = function(users,callback){
    return ajaxSend('/adm/UserMngActiveRgsn.do',JSON.stringify(users),'POST',this.async,callback);
};
UserMngService.prototype.dropUser = function(users,callback){
    return ajaxSend('/adm/UserActiveDel.do',JSON.stringify(users),'POST',this.async,callback);
};
UserMngService.prototype.initialPwd = function(users,callback){
    return ajaxSend('/adm/UserMngPwdInitial.do',JSON.stringify(users),'POST',this.async,callback);
};
UserMngService.prototype.getUserRole = function(userid,callback) {
    return ajaxSend('/adm/UserRoleInqList.do', JSON.stringify({userid:userid}),'POST',this.async,callback);
};
UserMngService.prototype.addUserRole = function(userid, rolecode,callback) {
    return ajaxSend('/adm/UserRoleRgsn.do', JSON.stringify({userid:userid,rolecode:rolecode}),'POST',this.async,callback);
};
UserMngService.prototype.dropUserRole = function(userid, rolecode,callback) {
    return ajaxSend('/adm/UserRoleDel.do', JSON.stringify({userid:userid,rolecode:rolecode}),'POST',this.async,callback);
};
UserMngService.prototype.getUserInfo = function(userid,callback) {
    return ajaxSend('/adm/UserInfo.do', JSON.stringify({userid:userid}),'POST',this.async,callback);
};

