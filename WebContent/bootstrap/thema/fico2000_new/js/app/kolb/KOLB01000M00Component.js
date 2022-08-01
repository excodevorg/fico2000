"use strict"

var KOLB01000M00 = new KOLB01000M00Component();
var duplicateShield = false // 중복방지 

var userService = new UserService(false);
var boardService = new BoardMngService(true);

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
            
            var userPremInfo = res.data.userPremInfo;
            var productInfo = res.data.productInfo;
           if(userPremInfo != null && productInfo != null) {

        	   var apcProductId = userPremInfo.productId;
        	   
        	   if(apcProductId == '0001') {
        		   $("#basicUseBtn").html("이용중");
        		   $("#premiumUseBtn").html("업그레이드");
        	   }
        	   
        	   if(apcProductId == '0002') {
        		   $("#basicUseBtn").hide();
        		   $("#premiumUseBtn").html("이용중");
        	   }
        		   
        	   
           } else {

           }
            
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

    var data = joinService.selectApcProduct(params, KOLB01000M00.afterSelect);
	
};

KOLB01000M00Component.prototype.joinCheckStatus = function(productId) {

	var params = {
            productId: productId
    };

    var data = joinService.joinStatusCheck(params, KOLB01000M00.callback);

};

$(document).ready(function() {

    $('#basicUseBtn').click(function(){

    	$('#apcProductId').val('0001');
    	KOLB01000M00.joinCheckStatus('0001');

    });
    
    $('#premiumUseBtn').click(function(){
    	
    	$('#apcProductId').val('0002');
    	KOLB01000M00.joinCheckStatus('0002');

    });
    
    $('#loginBtn').click(function(){

    	toMove('MAIN01000M00');

    });
    
    $('#basicUseLoginBtn').click(function(){
    	bootbox.alert('로그인 후 이용신청하시기 바랍니다.',function(){
			toMove('MAIN01000M00');
        });
    	//bootbox.alert('로그인 후 이용신청하시기 바랍니다.');
    	//toMove('MAIN01000M00');
    });
    
    $('#premiumUseLoginBtn').click(function(){
    	bootbox.alert('로그인 후 이용신청하시기 바랍니다.',function(){
			toMove('MAIN01000M00');
        });
    	//bootbox.alert('로그인 후 이용신청하시기 바랍니다.');
    	//toMove('MAIN01000M00');
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

            var userPremInfo = res.data.userPremInfo;
            //bootbox.alert(res.msg,function(){
               // FIN01001M00.onSearch();
            //});
            if(userPremInfo.acceptTheTerms1 == null || userPremInfo.acceptTheTerms2 == null) {
            	bootbox.alert('이용신청을 처음부터 진행합니다.['+userPremInfo.productId+"]",function(){
            		toMove('JOIN01001M00', userPremInfo.productId);
                });
            	//bootbox.alert('이용신청을 처음부터 진행합니다.['+userPremInfo.productId+"]");
            	//toMove('JOIN01001M00', userPremInfo.productId);
        	} else if (userPremInfo.phoneNumber == null) {
        		bootbox.alert('진행중인 이용신청 내용이 있습니다.['+userPremInfo.productId+']',function(){
        			toMove('JOIN01002M00', userPremInfo.productId);
                });
        		//bootbox.alert('진행중인 이용신청 내용이 있습니다.['+userPremInfo.productId+']');
        		//toMove('JOIN01002M00', userPremInfo.productId);
        	} else if (userPremInfo.phoneCertifyYN == null || userPremInfo.phoneCertifyYN == 'N') {
        		bootbox.alert('진행중인 이용신청 내용이 있습니다.['+userPremInfo.productId+']',function(){
        			toMove('JOIN01003M00', userPremInfo.productId);
                });
        		//bootbox.alert('진행중인 이용신청 내용이 있습니다.['+userPremInfo.productId+']');
        		//toMove('JOIN01003M00', userPremInfo.productId);
        	} else {
        		var apcProductId = $("#apcProductId").val();
        		if(apcProductId == userPremInfo.productId) {
        			bootbox.alert('이미 이용 중에 있습니다. 결제 및 업그레이드 화면으로 이동합니다.',function(){
        				toMove('JOIN02000M00', userPremInfo.productId);
        			});
        		} else {
        			bootbox.alert('업그레이드를 진행합니다.',function(){
        				toMove('JOIN01001M00', apcProductId);
        			});
        		}
        	}
            
        } else {
            overlay.hide();
            bootbox.alert(res.msg);
            
        }

    } else {
        overlay.hide();
    }
};