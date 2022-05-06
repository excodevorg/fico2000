"use strict";
/**
 * 유저 관련 javascript 
 */

var async = true;

function UserService(isAsync) {
	this.async = isAsync;
};

UserService.prototype.callUrlOAuthSocial = function (socialKind,callback) {
    return ajaxSend('/' + socialKind + '/OAuth2CallUrl.do', '', 'GET', this.async, callback);
};

UserService.prototype.callUrlOAuthSocial01 = function (socialKind) {
    // return this.http.get('/' + socialKind + '/OAuth2CallUrl01.do')
    //        .map(function (res) { return res.json(); });
};
 
UserService.prototype.login = function (f, callback) {
    console.log(f);
    console.log('파라미터', f);
    return ajaxSend('/login/LoginInfo.do',JSON.stringify(f),'POST',this.async,callback);
};
    UserService.prototype.loginSocial = function (f) {
        // console.log(f);
        // console.log(f.value);
        // var p = [];
        // for (var key in f.value) {
        //     p.push(key + '=' + encodeURIComponent(f.value[key]));
        // }
        // var params = p.join('&');
        // console.log(p.join('&'));
        // return this.http.get('/social/SocialLogin.do?' + params)
        //     .map(function (res) { return res.json(); });
    };
    UserService.prototype.regUser = function (f, callback) {
        console.log(f);
        console.log('파라미터', f);
        return ajaxSend('/user/UserRegister.do',JSON.stringify(f),'POST',this.async,callback);
    };
    UserService.prototype.userModify = function (user, callback) {
        return ajaxSend('/user/UserMdfc.do',JSON.stringify(user),'POST',this.async,callback);
    };
    UserService.prototype.regUserSocial = function (user) {
        // var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        // return this.http.post('/user/UserRegister.do', JSON.stringify(user), { headers: headers })
        //     .map(function (res) { return res.json(); });
    };
    UserService.prototype.getLoginInfo = function (user) {
        // var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        // return this.http.post('/social/SocialLoginInfo.do', JSON.stringify(user), { headers: headers })
        //     .map(function (res) { return res.json(); });
    };
    UserService.prototype.getNewLoginInfo = function (user) {
        // var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        // return this.http.post('/login/SocialLoginInfo.do', JSON.stringify(user), { headers: headers })
        //     .map(function (res) { return res.json(); });
    };
    UserService.prototype.getLogOut = function (callback) {
        return ajaxSend('/user/Logout.do', JSON.stringify({}), 'POST', this.async, callback);
    };
    UserService.prototype.getSessionInfo = function (user, callback) {
        if (callback) {
            this.async = true;
        } else {
            this.async = false;
        }
        return ajaxSend('/user/UserLoginInfo.do', JSON.stringify(user), 'POST', this.async, callback);
    };
    UserService.prototype.updUser = function () {
        // var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        // return this.http.post('/user/UserMdfc.do', JSON.stringify({}), { headers: headers })
        //     .map(function (res) { return res.json(); });
    };
    UserService.prototype.checkDpltEmail = function () {
        // var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        // return this.http.post('/user/EmailDpltChk.do', JSON.stringify({}), { headers: headers })
        //     .map(function (res) { return res.json(); });
    };
    UserService.prototype.tempPasswardMake = function (user, callback) {        
        return ajaxSend('/user/TempPassward.do', JSON.stringify(user), 'POST', this.async, callback);
    };
    // 세션의 데이터를 기준으로 메뉴를 반환한다. 
    UserService.prototype.getMenuList = function () {
        // var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        // return this.http.post('/cmmn/MenuList.do', JSON.stringify({}), { headers: headers })
        //     .map(function (res) { return res.json(); });
    };
    // 세션의 데이터를 기준으로 메뉴를 반환한다. 
    UserService.prototype.getMenuNewList = function () {
        // var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        // return this.http.post('/cmmn/MenuNewList.do', JSON.stringify({}), { headers: headers })
        //     .map(function (res) { return res.json(); });
    };
    UserService.prototype.getUserInfo = function (userid) {
        // var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        // return this.http.post('/user/UserInfo.do', JSON.stringify({ userId: userid }), { headers: headers })
        //     .map(function (res) { return res.json(); });
    };
    
