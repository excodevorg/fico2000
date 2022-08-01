"use strict"

var KOLB01000M00 = new KOLB01000M00Component();
var duplicateShield = false // 중복방지 

var userService = new UserService(false);
// var boardService = new BoardMngService(true);

function KOLB01000M00Component() {

};

KOLB01000M00Component.prototype.afterSelect = function(data) {

    console.log('request >>' , data);

    if (data != null) {
        console.log("ApcProduct ajax >>> " , data);
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

KOLB01000M00Component.prototype.ngOnInit = function () {

	var params = {
    };

    // var data = joinService.selectApcProduct(params, KOLB01000M00.afterSelect);
	
};


$(document).ready(function() {

    $('#loginBtn').click(function(){

    	toMove('MAIN01000M00');

    });
    
    $('#basicUseLoginBtn').click(function(){
    	bootbox.alert('로그인 후 이용신청하시기 바랍니다.',function(){
			toMove('MAIN01000M00');
        });
    });
    
    $('#premiumUseLoginBtn').click(function(){
    	bootbox.alert('로그인 후 이용신청하시기 바랍니다.',function(){
			toMove('MAIN01000M00');
        });
    });
    
    KOLB01000M00.ngOnInit();

});

KOLB01000M00Component.prototype.callback = function(data) {

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