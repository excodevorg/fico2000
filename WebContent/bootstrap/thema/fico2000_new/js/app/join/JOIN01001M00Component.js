"use strict"

var JOIN01001M00 = new JOIN01001M00Component();
var duplicateShield = false // 중복방지 

var userService = new UserService(false);

var boardService = new BoardMngService(true);

function JOIN01001M00Component() {

};

JOIN01001M00Component.prototype.ngOnInit = function () {

};

JOIN01001M00Component.prototype.acceptTheTerms = function(productId) {

	var params = {
            productId: productId
    };

    var data = joinService.acceptTheTerms(params, JOIN01001M00.callback);

};

JOIN01001M00Component.prototype.nextStep = function() {

	//alert('상품코드='+$('#productId').attr('value'));
	
    if(!$('#chk-term1').is(':checked')) {
        alert('약관을 확인하신 후 동의에 체크해주세요')
        return false
    }
    if(!$('#chk-term2').is(':checked')) {
        alert('개인정보 처리 방침을 확인하신 후 동의에 체크해주세요')
        return false
    }
    
    JOIN01001M00.acceptTheTerms($('#productId').attr('value'));
    
    //toMove('JOIN01002M00');

};

$(document).ready(function() {

    $('#chk-all').on('click', (e)=> {
            let status = $('#chk-all').is(':checked')
            $('#chk-term1').prop( 'checked', status )
            $('#chk-term2').prop( 'checked', status )
    });
    
    $('#nextStep').click(function(){

        JOIN01001M00.nextStep();

    });

});

JOIN01001M00Component.prototype.callback = function(data) {

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
            	toMove('JOIN01001M00', userPremInfo.productId);
        	} else if (userPremInfo.phoneNumber == null) {
        		toMove('JOIN01002M00', userPremInfo.productId);
        	} else if (userPremInfo.phoneCertifyYN == null || userPremInfo.phoneCertifyYN == 'N') {
        		toMove('JOIN01003M00', userPremInfo.productId);
        	} else {
        		//업그레이드 진행
        		var apcProductId = $('#productId').attr('value');
        		if(apcProductId != userPremInfo.productId)
        			toMove('JOIN01002M00', apcProductId);
        	}
            
        } else {
            overlay.hide();
            bootbox.alert(res.msg);
            
        }

    } else {
        overlay.hide();
    }
};