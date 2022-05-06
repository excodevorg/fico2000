"use strict"

var JOIN01003M00 = new JOIN01003M00Component();
var duplicateShield = false // 중복방지 

var joinType = 0;

var userService = new UserService(false);

var boardService = new BoardMngService(true);

function $ComTimer(){
    //prototype extend
}

$ComTimer.prototype = {
    comSecond : ""
    , fnCallback : function(){}
    , timer : ""
    , domId : ""
    , fnTimer : function(){
        var m = Math.floor(this.comSecond / 60) + "분 " + (this.comSecond % 60) + "초";	// 남은 시간 계산
        this.comSecond--;					// 1초씩 감소
        //console.log(m);
        this.domId.innerText = m;
        if (this.comSecond < 0) {			// 시간이 종료 되었으면..
            clearInterval(this.timer);		// 타이머 해제
            this.fnCallback();
        }
    }
    ,fnStop : function(){
        clearInterval(this.timer);
    }
}

var AuthTimer = new $ComTimer();

function JOIN01003M00Component() {

};

JOIN01003M00Component.prototype.afterSaving = function(data) {

    console.log('request >>' , data);

    if (data != null) {
        console.log("userPremInfo ajax >>> " , data);
        var res = JSON.parse(data);

        if (res.success==true) { 
            overlay.hide();
            console.log('성공');
            console.log(res);
            
            var productId = $('#productId').attr('value');
            toMove('JOIN01004M00', productId);
            
        } else {
            overlay.hide();
            bootbox.alert(res.msg);
        }

    } else {
        overlay.hide();
    }
};

JOIN01003M00Component.prototype.formFillOut = function(data) {

    console.log('request >>' , data);

    if (data != null) {
        console.log("userPremInfo ajax >>> " , data);
        var res = JSON.parse(data);

        if (res.success==true) { 
            overlay.hide();
            console.log('성공');
            console.log(res);

            var userPremInfo = res.data.userPremInfo;
            var userInfo = res.data.userInfo;
            
            $( 'input[name=username]' ).val(userInfo.userNm);
            $( 'input[name=phone]' ).val(userPremInfo.phoneNumber);
            $( 'input[name=email]' ).val(userInfo.userId);
            
            
        } else {
            overlay.hide();
            bootbox.alert(res.msg);
        }

    } else {
        overlay.hide();
    }
};

JOIN01003M00Component.prototype.ngOnInit = function () {

var productId = $('#productId').attr('value');
	
	var params = {
            productId: productId
    };

    var data = joinService.selectApcInfo(params, JOIN01003M00.formFillOut);
    
};

JOIN01003M00Component.prototype.saveApcInfoComplete = function () {

	var productId = $('#productId').attr('value');
	var checkSms = "N";
	var checkEmail = 'N';
	
	if($('input:checkbox[id="chk-sms"]').is(":checked") == true)
		checkSms = "Y";
	else 
		checkSms = "N";

	if($('input:checkbox[id="chk-email"]').is(":checked") == true)
		checkEmail = "Y";
	else 
		checkEmail = "N";
	
	var params = {
            productId: productId,
            phoneNumber: $( 'input[name=phone]' ).val(),
            email: $( 'input[name=email]' ).val(),
            authcode: $( 'input[name=authcode]' ).val(),
            marketingSmsYn: checkSms,
            marketingEmailYn: checkEmail
    };
    var data = joinService.saveApcInfoComplete(params, JOIN01003M00.afterSaving);
};


JOIN01003M00Component.prototype.join = function() {
	
	AuthTimer.fnStop();
    //이메일유효성체크
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;


    //신청자 이름
    if( $( 'input[name=username]' ).val() == '' ) {
        $( '.no-username' ).show();
        $( 'input[name=username]' ).focus()
        return;
    } else {
        $( '.no-username' ).hide();
    }

    //신청자 휴대폰
    if( $( 'input[name=phone]' ).val() == '' ) {
        $( '.no-phone' ).show();
        $( 'input[name=phone]' ).focus()
        return;
    } else {
        $( '.no-phone' ).hide();
    }

    //신청자 이메일
    if( $( 'input[name=email]' ).val() == '' ) {
        $( '.no-email' ).show();
        $( 'input[name=email]' ).focus()
        return;
    } else {
        $( '.no-email' ).hide();
    }
    
  //인증코드
    if( $( 'input[name=authcode]' ).val() == '' ) {
        $( '.no-authcode' ).show();
        $( 'input[name=authcode]' ).focus()
        return;
    } else {
        $( '.no-authcode' ).hide();
    }

    JOIN01003M00.saveApcInfoComplete();
    
}

JOIN01003M00Component.prototype.afterGetting = function(data) {

    console.log('request >>' , data);

    if (data != null) {
        console.log("userPremInfo ajax >>> " , data);
        var res = JSON.parse(data);

        if (res.success==true) { 
            overlay.hide();
            console.log('성공');
            console.log(res);
            
            
            
        } else {
            overlay.hide();
            bootbox.alert(res.msg);
        }

    } else {
        overlay.hide();
    }
};

JOIN01003M00Component.prototype.getAuthCode = function() {
	var phoneNumber = $( 'input[name=phone]' ).val();
	
	var params = {
            phoneNumber: phoneNumber
    };
    var data = joinService.getAuthCode(params, JOIN01003M00.afterGetting);
}

JOIN01003M00Component.prototype.authcode = function() {

	$('.authCode').show();
	$('.authcode-timeout-msg').hide();
	$('.no-authcode').hide();
	$('.authcode-timeout').show();
    AuthTimer.comSecond = 180;
    AuthTimer.fnCallback = JOIN01003M00.authcodeTimeout
    AuthTimer.timer =  setInterval(function(){AuthTimer.fnTimer()},1000);
    AuthTimer.domId = document.getElementById("timer");
    JOIN01003M00.getAuthCode();
    
}

JOIN01003M00Component.prototype.authcodeTimeout = function() {
	$('.authcode-timeout').hide();
	$('.authcode-timeout-msg').show();
	$('#authCodeBtn').html( '인증코드 다시 받기');
	AuthTimer.fnStop();
}

$(document).ready(function() {

    $('.submenu_wrapper').hide()
    $('#email_info_text').hide()
    $('#phone_info_text').hide()
    $('#join_certification').hide()

    $('#radio_email').on('click', (e)=> {
        $('#join_certification').show()
        $('#email_info_text').show()
        $('#phone_info_text').hide()
    })
    $('#radio_phone').on('click', (e)=> {
        $('#join_certification').show()
        $('#email_info_text').hide()
        $('#phone_info_text').show()
    })

    //폼체크
    $('.no-id').hide();
    $('.no-password').hide();
    $('.no-password_confirm').hide();
    $('.no-username').hide();
    $('.no-cor-number').hide();
    $('.no-email').hide();
    $('.no-phone').hide();
    $('.err-phonetype').hide();
    $('.authCode').hide();
    $('.authcode-timeout-msg').hide();
    $('.no-authcode').hide();

    $('#join').click(function(){

        JOIN01003M00.join();

    });
    
    $('#authCodeBtn').click(function(){

        JOIN01003M00.authcode();

    });
    
    JOIN01003M00.ngOnInit();
});