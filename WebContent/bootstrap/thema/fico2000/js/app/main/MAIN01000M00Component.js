"use strict"

var MAIN01000M00 = new MAIN01000M00Component();
var duplicateShield = false // 중복방지 

function MAIN01000M00Component() {

};

MAIN01000M00Component.prototype.ngOnInit = function () {

};

MAIN01000M00Component.prototype.onLogin = function () {

    overlay.show();

    $(".alert").hide(true);

    $("#errMsg").html('');

    var service = new UserService(false);

    var userId = $("#ngForm [name='userId']").val();
    var userPwd = $("#ngForm [name='userPwd']").val();

    var rsaPublicKeyModulus = $("#ngForm [name='publicKeyModulus']").val();
    var rsaPpublicKeyExponent = $("#ngForm [name='publicKeyExponent']").val();

    var secureUserId = utilService.fnRsaEnc(userId, rsaPublicKeyModulus, rsaPpublicKeyExponent);
    var secureUserPwd = utilService.fnRsaEnc(userPwd, rsaPublicKeyModulus, rsaPpublicKeyExponent);

    $("#ngForm [name='secureUserId']").val(secureUserId);
    $("#ngForm [name='secureUserPwd']").val(secureUserPwd);

    var params = {
            secureUserId: secureUserId,
            secureUserPwd: secureUserPwd
    };

    var data = service.login(params);

    overlay.hide();

    console.log("after >> " , data);

    if (data.success) {
        bootbox.alert('정상적으로 로그인 되었습니다. 메인페이지로 이동합니다.');
        $(location).attr('href', "/");
    } else {
        $(".alert").show();
        $("#errMsg").html(data.msg);
    }
};

MAIN01000M00Component.prototype.onLoginSocial = function (socialKind) {

};

MAIN01000M00Component.prototype.onFirstLoginfo = function () {


};

MAIN01000M00Component.prototype.loginSocialFn = function(socialId) {

    var service = new UserService(false);

    overlay.show();

    console.log("service >>> ", service);

    var data = service.callUrlOAuthSocial(socialId);
    console.log("callUrl >> ", data);

    if (data.success) {
        $(location).attr('href', data.data.callUrl);
    } 
    else 
    {
        $(".alert").show();
        $("#errMsg").html("[ERROR] 로그인중 오류가 발생하였습니다.");
    }
};

MAIN01000M00Component.prototype.formValidate = function() {

  

};