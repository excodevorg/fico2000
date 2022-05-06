"use strict"

var JOIN03001M00 = new JOIN03001M00Component();
var duplicateShield = false // 중복방지 

function JOIN03001M00Component() {

};

function numberWithCommas(x) {
    x = x.toString();
    var pattern = /(-?\d+)(\d{3})/;
    while (pattern.test(x))
        x = x.replace(pattern, "$1,$2");
    return x;
}

JOIN03001M00Component.prototype.dateFormat = function(data) {
	data = "" + data;
	return data.substring(0,4)+"."+data.substring(4,6)+"."+data.substring(6,8);
};

JOIN03001M00Component.prototype.afterSelect = function(data) {

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
            var periodInfo = res.data.periodInfo;
           if(userPremInfo != null && productInfo != null) {
        	   
        	   var apcDate = new Date(productInfo.lastts);
        	   var price = productInfo.price;
        	   var startYmd = JOIN03001M00.dateFormat(periodInfo.useStartYmd);
        	   var endYmd = JOIN03001M00.dateFormat(periodInfo.useEndYmd);
        	   
        	   $("#useStartYmd").attr("value", periodInfo.useStartYmd);
        	   $("#useEndYmd").attr("value", periodInfo.useEndYmd);
        	   $("#td-product-name").html(productInfo.name);
        	   $("#td-product-period").html(startYmd+" ~ "+endYmd);
        	   $("#td-product-price").html("<h3>"+numberWithCommas(price)+"원 <font size=\"-1\"><b>(부가세 포함)</b></font></h3>");
        	   
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

JOIN03001M00Component.prototype.ngOnInit = function () {
	var params = {
    };

    var data = joinService.selectApcProduct(params, JOIN03001M00.afterSelect);
};

JOIN03001M00Component.prototype.afterPrepare = function(data) {

    console.log('request >>' , data);

    if (data != null) {
        console.log("ApcProduct ajax >>> " , data);
        var res = JSON.parse(data);

        if (res.success==true) { 
            overlay.hide();
            console.log('성공');
            console.log(res);
            
            var orderInfo = res.data.orderInfo;
            var storeInfo = res.data.storeInfo;
            var settlePreInfo = res.data.settlePreInfo;
            var productInfo = res.data.productInfo;
            var method = $(":input:radio[name=pay]:checked").val();
            var url = storeInfo.storeUrl;
            if (method == "0")
            	url = url + "/credit-web/pay.jsp?";
            if(method == "1")
            	url = url + "/vaccount-web/pay.jsp?";
            
            url = url + "SERVICE_ID=" + encodeURI(storeInfo.pgServiceId); 
            url = url + "&ORDER_ID=" + encodeURI(settlePreInfo.storeOrderId);
            url = url + "&ORDER_DATE=" + encodeURI(settlePreInfo.orderYmd);
            url = url + "&ITEM_NAME=" + encodeURI(productInfo.name);
            url = url + "&ITEM_CODE=" + encodeURI(productInfo.storeProductId);
            url = url + "&USER_ID=" + encodeURI("fico_"+settlePreInfo.userId);
            url = url + "&AMOUNT=" + encodeURI(productInfo.price);
            
            //var siteUrl = storeInfo.siteUrl;
            var siteUrl = "http://localhost:8080"
            var returnUrl = siteUrl+"/pg/return.jsp";
            
            url = url + "&RETURN_URL=" + encodeURI(returnUrl);
            
            //$('input[name="SERVICE_ID"]').val(storeInfo.pgServiceId);
            //$('input[name="ORDER_ID"]').val(settlePreInfo.storeOrderId);
            //$('input[name="ORDER_DATE"]').val(settlePreInfo.orderYmd);
            //$('input[name="ITEM_NAME"]').val(productInfo.name);
            //$('input[name="ITEM_CODE"]').val(productInfo.storeProductId);
            //$('input[name="USER_NAME"]').val(storeInfo.pgServiceId);
            //$('input[name="USER_EMAIL"]').val(storeInfo.pgServiceId);
            //$('input[name="USER_ID"]').val("fico_"+settlePreInfo.userId);
            //$('input[name="AMOUNT"]').val("");
            
            
            JOIN03001M00.popSettlement(url);
            
        } else {
            overlay.hide();
            bootbox.alert(res.msg);
        }

    } else {
        overlay.hide();
    }
};

JOIN03001M00Component.prototype.prepareSettlement = function () {
	var productId = $('#productId').attr('value');
	var useStartYmd = $('#useStartYmd').attr('value');
	var useEndYmd = $('#useEndYmd').attr('value');
	var method = $(":input:radio[name=pay]:checked").val();

	var params = {
			productId: productId,
			useStartYmd: useStartYmd,
			useEndYmd: useEndYmd,
			settleMethod: method
    };

    var data = joinService.prepareSettlement(params, JOIN03001M00.afterPrepare);
};

JOIN03001M00Component.prototype.popSettlement = function (url) {
	//alert(url);
	
	var popupX = (document.body.offsetWidth / 2) - (600 / 2);
	//만들 팝업창 좌우 크기의 1/2 만큼 보정값으로 빼주었음
	var popupY= (document.body.offsetHeight / 2) - (640 / 2);
	//만들 팝업창 상하 크기의 1/2 만큼 보정값으로 빼주었음
	
	window.open(url, "popSettleWindow",
			"toolbar=no, width=600, height=640, left="+ popupX + ", top="+ popupY +"directories=no, scrollorbars=no, resizable=no");
	//alert(url);
	//var settleForm = $("form[name=popSettleForm");
	//settleForm.action = url;
	//settleForm.method = "post";
	//settleForm.target = "popSettleWindow";
	//settleForm.submit();
};

$(document).ready(function() {
	
	$('#btn_prev_move').click(function(){
		toMove("JOIN02000M00");
    });
	$('#btn_settlement').click(function(){
		JOIN03001M00.prepareSettlement();
    });
	$('#radio3').click(function(){
		bootbox.alert("무통장입금(가상계좌) 결제는 추후에 제공됩니다. 신용카드 결제를 이용해 주시기 바랍니다.");
		$(this).prop("checked", false);
		$('#radio1').prop("checked", true);
    });
	JOIN03001M00.ngOnInit();
});

JOIN03001M00Component.prototype.goMain = function() {
    toMove('MAIN00000M00');
}