"use strict"

var MAIN02000M00 = new MAIN02000M00Component();

var userParam = {
    userId:'',
    userNm:'',
    userPwd:'',
    userPwd2:'',
    newUserPwd:'',
    imgUrl:'',
    facebookid:'',
    twitterid:'',
    googleid:'',
    kakaoid:'',
    pwdMdfcYn:'N',
    secureUserId:'',
    secureUserPwd:'',
    secureUserPwd2:'',
    secureNewUserPwd:''
}

function MAIN02000M00Component() {
	
};

MAIN02000M00Component.prototype.enablePWBox = function() {
    $("#pwip0").prop("disabled", true);
    $("#pwip1").prop("disabled", true);
    $("#pwip2").prop("disabled", true);
};

MAIN02000M00Component.prototype.disablePWBox = function() {
    $("#pwip0").removeAttr("disabled");
    $("#pwip1").removeAttr("disabled");
    $("#pwip2").removeAttr("disabled");
};

MAIN02000M00Component.prototype.disablePWBox01 = function() {
    $("#pwip1").removeAttr("disabled");
    $("#pwip2").removeAttr("disabled");
};

MAIN02000M00Component.prototype.onModify = function() {

    var service = new UserService(false);

    $(".alert").hide(true);
    var re = this.formValidate();

    if (re) {
        var rsaPublicKeyModulus = $("#publicKeyModulus").val();
        var rsaPpublicKeyExponent = $("#publicKeyExponent").val();

        var userId = $("#userId").val();
        var userNm = $("#userNm").val();
        var pwip0 = $("#pwip0").val();
        var pwip1 = $("#pwip1").val();
        var pwip2 = $("#pwip2").val();

        console.log('userId >> ', userId);
        console.log('userNm >> ', userNm);
        console.log('pwip0 >> ', pwip0);
        console.log('pwip1 >> ', pwip1);
        console.log('pwip2 >> ', pwip2);

        var secureUserId = utilService.fnRsaEnc(userId, rsaPublicKeyModulus, rsaPpublicKeyExponent);
        var secureUserPwd = utilService.fnRsaEnc(pwip0, rsaPublicKeyModulus, rsaPpublicKeyExponent);
        var secureUserPwd1 = utilService.fnRsaEnc(pwip1, rsaPublicKeyModulus, rsaPpublicKeyExponent);
        var secureUserPwd2 = utilService.fnRsaEnc(pwip2, rsaPublicKeyModulus, rsaPpublicKeyExponent);

        userParam.secureUserId = secureUserId;
        userParam.secureUserPwd = secureUserPwd;
        userParam.secureUserPwd2 = secureUserPwd1;
        userParam.secureNewUserPwd = secureUserPwd2;
        userParam.userNm = userNm;

        console.log(userParam);

        var params = {
            imgUrl:userParam.imgUrl,
            userNm:userParam.userNm,
            pwdMdfcYn:userParam.pwdMdfcYn,
            secureUserId:userParam.secureUserId,
            secureUserPwd:userParam.secureUserPwd,
            secureUserPwd2:userParam.secureUserPwd2,
            secureNewUserPwd:userParam.secureNewUserPwd
        };

        var data = service.userModify(params);

        if (data.success) {
            bootbox.alert('회원정보 수정이 완료 되어 다시 로그인 하시기 바랍니다. 다시 로그인 하기위해 변경 확인 메일을 확인하시기 바랍니다. ', function() {
            
                var responseData = service.getLogOut();

                if (responseData.success) {
                    $(location).attr('href', "/");
                }

            });
        } else {
            $(".alert").show();
            $("#errMsg").html("[ERROR] 회원정보 수정중에 오류가 발생하였습니다.");
        }

        overlay.hide();
    } else {
        overlay.hide();
    }

    

}; 


MAIN02000M00Component.prototype.formValidate = function () {

    var userNm = $("#userNm").val();
    var pwip0 = $("#pwip0").val();
    var pwip1 = $("#pwip1").val();
    var pwip2 = $("#pwip2").val();

    if (userNm == null || userNm == '') {
        $(".alert").show();
        $("#errMsg").html("이름을 입력하세요.");
        return false;
    }

    if (userParam.pwdMdfcYn == 'Y') {
        if (!$( "#pwip0" ).is( ":disabled" )) {
            if (pwip0 == null || pwip0 == '') {
                $(".alert").show();
                $("#errMsg").html("기존 패스워드를 입력하세요.");
                return false;
            }
        }

        if (pwip1 == null || pwip1 == '') {
            $(".alert").show();
            $("#errMsg").html("새로운 패스워드를 입력하세요.");
            return false;
        }

        if (!this.chkPwd(pwip1)) {
            $(".alert").show();
            return false;
        }

        if (pwip2 == null || pwip2 == '') {
            $(".alert").show();
            $("#errMsg").html("새로운 패스워드를 입력하세요.");
            return false;
        }

        if (pwip1 != pwip2) {
            $(".alert").show();
            $("#errMsg").html("입력된 새로운 비밀번호가 동일하지 않습니다.");
            return false;
        }
    }

    return true;

};


MAIN02000M00Component.prototype.chkPwd = function (str) {
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
