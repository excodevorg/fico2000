"use strict"

var MAIN04000M00 = new MAIN04000M00Component();

function MAIN04000M00Component() {

};

MAIN04000M00Component.prototype.tempPasswardMake = function () {

    $(".alert").hide(true);

    $("#errMsg").html('');

    var service = new UserService(false);

    var userId = $("#ngForm [name='userId']").val();

    var rsaPublicKeyModulus = $("#ngForm [name='publicKeyModulus']").val();
    var rsaPpublicKeyExponent = $("#ngForm [name='publicKeyExponent']").val();

    var secureUserId = utilService.fnRsaEnc(userId, rsaPublicKeyModulus, rsaPpublicKeyExponent);

    $("#ngForm [name='secureUserId']").val(secureUserId);

    var params = {
            secureUserId: secureUserId
    };

    var data = service.tempPasswardMake(params);                    

    overlay.hide();

    console.log("after >> " , data);

    if (data.success) {
        bootbox.alert('정상적으로 패스워드가 발급되었습니다. 해당 메일을 확인하시기 바랍니다. 로그인 페이지로 이동합니다.',function(){
            fnSubMove('MAIN01000M00');
        });
        console.log('ficoConetent >> ', $("#ficoContent"));
    } else {
        $(".alert").show();
        $("#errMsg").html(data.msg);
    }

};