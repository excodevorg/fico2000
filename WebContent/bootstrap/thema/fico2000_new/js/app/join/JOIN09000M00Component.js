"use strict"

var JOIN09000M00_KOLB = new JOIN09000M00_KOLBComponent();
var duplicateShield = false // 중복방지 

function numberWithCommas(x) {
    x = x.toString();
    var pattern = /(-?\d+)(\d{3})/;
    while (pattern.test(x))
        x = x.replace(pattern, "$1,$2");
    return x;
}

function dateTimeFormat(data) {
	data = "" + data;
	return data.substring(0,4)+"."+data.substring(4,6)+"."+data.substring(6,8)+" "+
	            data.substring(8,10)+":"+data.substring(10,12)+":"+data.substring(12,14);
};

function JOIN09000M00_KOLBComponent() {

};

JOIN09000M00_KOLBComponent.prototype.afterSelect = function(data) {

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
            var settleInfo = res.data.settleInfo;
           if(userPremInfo != null && productInfo != null && settleInfo!= null) {
        	   
        	   var startYmd = JOIN03001M00.dateFormat(userPremInfo.useStartYmd);
        	   var endYmd = JOIN03001M00.dateFormat(userPremInfo.useEndYmd);
        	   $("#td-product-name").html(productInfo.name);
        	   $("#td-product-period").html(startYmd+" ~ "+endYmd);
        	   
        	   if(settleInfo.settleMethod == 0)
        		   $("#td-method").html("신용카드");
        	   else if (settleInfo.settleMethod == 1)
        		   $("#td-method").html("가상계좌");
        	   
        	   $("#td-orderId").html(settleInfo.storeOrderId);
        	   $("#td-trxNo").html(settleInfo.trxNo);
        	   $("#td-apvNo").html(settleInfo.apvNo);
        	   $("#td-apvYmd").html(dateTimeFormat(settleInfo.apvYmd));
        	   
        	   $("#td-amt").html("<h3 class=\"ma0 pa0\">"+numberWithCommas(settleInfo.settleAmt)+"원<font size=\"-1\"><b>(부가세 포함)</b></font></h3>");
        	   
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

JOIN09000M00_KOLBComponent.prototype.ngOnInit = function () {
	var storeOrderId = $('#settleStoreOrderId').attr('value');
	
	var params = {
			storeOrderId: storeOrderId
    };

    var data = joinService.selectSettlement(params, JOIN09000M00_KOLB.afterSelect);
};

$(document).ready(function() {
	$('#VirtualAcnt').hide();
	$('#goMyPage').click(function(){
		toMove("JOIN02000M00");
    });
	$('#goHome').click(function(){
		toMove("MAIN00000M00");
    });
	JOIN09000M00_KOLB.ngOnInit();
});