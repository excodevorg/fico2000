"use strict"

var MAIN03000M00 = new MAIN03000M00Component();

function MAIN03000M00Component() {

};

MAIN03000M00Component.prototype.initial = function () {
    $("#ngForm").each(function() {
        this.reset();
    });
};


MAIN03000M00Component.prototype.onRegUser = function () {

    $(".alert").hide(true);

    overlay.show();

    var re = this.formValidate(); 

    console.log(re);

    if (re) {
        var service = new UserService(false);
        var userNm = $("#ngForm [name='userNm']").val();
        var userId = $("#ngForm [name='userId']").val();
        var userPwd = $("#ngForm [name='userPwd']").val();
        var userPwd2 = $("#ngForm [name='userPwd2']").val();
        var rsaPublicKeyModulus = $("#ngForm [name='publicKeyModulus']").val();
        var rsaPpublicKeyExponent = $("#ngForm [name='publicKeyExponent']").val();

        var secureUserId = utilService.fnRsaEnc(userId, rsaPublicKeyModulus, rsaPpublicKeyExponent);
        var secureUserPwd = utilService.fnRsaEnc(userPwd, rsaPublicKeyModulus, rsaPpublicKeyExponent);
        var secureUserPwd2 = utilService.fnRsaEnc(userPwd2, rsaPublicKeyModulus, rsaPpublicKeyExponent);

        $("#ngForm [name='secureUserId']").val(secureUserId);
        $("#ngForm [name='secureUserPwd']").val(secureUserPwd);
        $("#ngForm [name='secureUserPwd2']").val(secureUserPwd2);

        var params = {
            userNm:userNm,
            secureUserId: secureUserId,
            secureUserPwd: secureUserPwd,
            secureUserPwd2: secureUserPwd2
        };

        var data = service.regUser(params);

        if (data.success) {
            bootbox.alert('정상적으로 회원가입이 되었습니다. 이메일을 확인하시기 바랍니다.', function(){
                $(location).attr('href', "/");
            });
        } else {
            $(".alert").show();
            $("#errMsg").html(data.msg);
        }
    }

    overlay.hide();
};

MAIN03000M00Component.prototype.onRegUserBySocial = function (socialId) {

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
        $("#errMsg").html("[ERROR] 회원가입중 오류가 발생하였습니다.");
    }


};


MAIN03000M00Component.prototype.formValidate = function () {

    var userId = $("#ngForm [name='userId']").val();
    var userPwd = $("#ngForm [name='userPwd']").val();
    var userPwd2 = $("#ngForm [name='userPwd2']").val();
    var userNm = $("#ngForm [name='userNm']").val();

    console.log("userNm >>>", userNm);

    if (userNm == null || userNm == '') {
        $(".alert").show();
        $("#errMsg").html("이름을 입력하세요.");
        return false;
    }

    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (userId == null || userId == '' || !re.test(userId)) {
        $(".alert").show();
        $("#errMsg").html("올바른 이메일을 입력하세요.");
        return false;
    }
    
    if (userPwd == null || userPwd == '') {
        $(".alert").show();
        $("#errMsg").html("패스워드를 입력하세요.");
        return false;
    }

    if (!this.chkPwd(userPwd)) {
        $(".alert").show();
        return false;
    }

    if (userPwd2 == null || userPwd2 == '') {
        $(".alert").show();
        $("#errMsg").html("새로운 패스워드를 입력하세요.");
        return false;
    }

    if (userPwd != userPwd2) {
        $(".alert").show();
        $("#errMsg").html("입력된 두 패스워드가 일치하지 않습니다.");
        return false;
    }

    return true;

};


MAIN03000M00Component.prototype.chkPwd = function (str) {
    var pw = str;
    var num = pw.search(/[0-9]/g);
    var eng = pw.search(/[a-z]/ig);
    var spe = pw.search(/[`~!@@#$%^&*|₩₩₩'₩";:₩/?]/gi);
    if (pw.length < 8 || pw.length > 20) {
        $("#errMsg").html("8자리 ~ 20자리 이내로 입력해주세요.");
        return false;
    }
    if (pw.search(/₩s/) != -1) {
        $("#errMsg").html("비밀번호는 공백업이 입력해주세요.");
        return false;
    }
    if (num < 0 || eng < 0 || spe < 0) {
        $("#errMsg").html("영문,숫자, 특수문자를 혼합하여 입력해주세요.");
        return false;
    }
    
    return true;
};