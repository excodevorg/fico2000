"use strict"

var JOIN02000M00 = new JOIN02000M00Component();
var duplicateShield = false // 중복방지 

var GlobalSettlHistoryList;
var GlobalProductList;

function JOIN02000M00Component() {

};

Date.prototype.format = function(f) {
    if (!this.valueOf()) return " ";
 
    var weekName = ["일요일", "월요일", "화요일", "수요일", "목요일", "금요일", "토요일"];
    var d = this;
     
    return f.replace(/(yyyy|yy|MM|dd|E|hh|mm|ss|a\/p)/gi, function($1) {
        switch ($1) {
            case "yyyy": return d.getFullYear();
            case "yy": return (d.getFullYear() % 1000).zf(2);
            case "MM": return (d.getMonth() + 1).zf(2);
            case "dd": return d.getDate().zf(2);
            case "E": return weekName[d.getDay()];
            case "HH": return d.getHours().zf(2);
            case "hh": return ((h = d.getHours() % 12) ? h : 12).zf(2);
            case "mm": return d.getMinutes().zf(2);
            case "ss": return d.getSeconds().zf(2);
            case "a/p": return d.getHours() < 12 ? "오전" : "오후";
            default: return $1;
        }
    });
};

String.prototype.string = function(len){var s = '', i = 0; while (i++ < len) { s += this; } return s;};
String.prototype.zf = function(len){return "0".string(len - this.length) + this;};
Number.prototype.zf = function(len){return this.toString().zf(len);};

JOIN02000M00Component.prototype.dateFormat = function(data) {
	return data.substring(0,4)+"."+data.substring(4,6)+"."+data.substring(6,8);
};


JOIN02000M00Component.prototype.afterSelect = function(data) {

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
        	   $('.no-use-apc-info').hide();
        	   $('.use-apc-info').show();
        	   
        	   var apcDate = new Date(productInfo.lastts);
        	   var price = productInfo.price / 10000;
        	   var startYmd = JOIN02000M00.dateFormat(userPremInfo.useStartYmd);
        	   var endYmd = JOIN02000M00.dateFormat(userPremInfo.useEndYmd);
        	   
        	   var apcInfo_html = "<div class=\"col-xs-12 col-sm-6 col-md-4 gridBox\">"+
                                                    "  <div class=\"pad-all panel\">"+
                                                    "    <p class=\"text-sm color-gray\">신청일: "+apcDate.format("yyyy.MM.dd")+"</p>"+
                                                    "    <h3>"+productInfo.name+"</h3>"+
                                                    "    <p class=\"text-lg text-semibold\">"+price+"만원</p>"+
                                                    "    <p class=\"color-gray\">이용가능기간: "+startYmd+"~"+endYmd+"</p>"+
                                                    "    <div class=\"text-right\">"+
                                                    "      <button class=\"btn btn-primary\" onclick=\"toMove('JOIN03001M00','"+productInfo.productId+"')\"><strong>결제하기</strong></button>";
        	   
               if(productInfo.upgradeable == 'Y')
            	   apcInfo_html = apcInfo_html +   "      <button class=\"btn btn-default\" onclick=\"toMove('JOIN01000M00')\"><strong>업그레이드</strong></button>";
        	   
        	   apcInfo_html = apcInfo_html +  "    </div>"+
                                                    "  </div>"+
                                                    "</div>";
        	    $("#use-apc-info-content").html(apcInfo_html);
        	    
           } else {
        	   $('.no-use-apc-info').show();
        	   $('.use-apc-info').hide();
           }
            
        } else {
            overlay.hide();
            bootbox.alert(res.msg);
        }

    } else {
        overlay.hide();
    }
};

JOIN02000M00Component.prototype.getProduct = function(productList, id) {
	for(var i=0; i<productList.length; i++) {
		if(productList[i].productId == id)
			return productList[i];
	}
}

JOIN02000M00Component.prototype.afterSelectSettlHistory = function(data) {

    console.log('request >>' , data);

    if (data != null) {
        console.log("ApcProduct ajax >>> " , data);
        var res = JSON.parse(data);

        if (res.success==true) { 
            overlay.hide();
            console.log('성공');
            console.log(res);
            
            var userPremInfo = res.data.userPremInfo;
            var productInfoList = res.data.productInfoList;
            var settleInfoList = res.data.settleInfoList;
            
            //alert(settleInfoList.length);
           // var productMap = new HashMap();
            //for(var i=0; i<productInfoList.length;i++) {
            //	productMap.put(productInfoList[i].productId, productInfoList[i]);
            //}
            
           if(settleInfoList != null) {
        	   $('.settle-history').show();
        	   $('.no-settle-history').hide();
        	   
        	   GlobalSettlHistoryList = settleInfoList;
        	   GlobalProductList = productInfoList;
        	  
        	   var history = "";
        	   var product;
        	   var settleDate;
        	   var price;
        	   var startYmd;
        	   var endYmd;
        	   var toDay = new Date();
        	   var useState = "만료";
        	   
        	   for(var i=0; i < settleInfoList.length; i++) {
        		   
        		   if(settleInfoList[i].completeYn != 'Y')
        			   continue;
        		   
        		   settleDate = new Date(settleInfoList[i].settleTs);
        		   product = JOIN02000M00.getProduct(productInfoList, settleInfoList[i].productId);
        		   price = settleInfoList[i].settleAmt / 10000;
        		   startYmd = JOIN02000M00.dateFormat(settleInfoList[i].useStartYmd);
            	   endYmd = JOIN02000M00.dateFormat(settleInfoList[i].useEndYmd);
            	   
                   var startDateArr = startYmd.split('.');
                   var endDateArr = endYmd.split('.');
                            
                   var startDateCompare = new Date(startDateArr[0], parseInt(startDateArr[1])-1, startDateArr[2]);
                   var endDateCompare = new Date(endDateArr[0], parseInt(endDateArr[1])-1, endDateArr[2]);
            	   
            	   if(startDateCompare.getTime() <= toDay.getTime() && toDay.getTime() <= endDateCompare.getTime())
            		   useState = "이용중";
            	   
            	   if(startDateCompare.getTime() >= toDay.getTime())
            		   useState = "이용전";
        		   
        		   history = history + "<div class=\"col-xs-12 col-sm-6 col-md-4 gridBox\">"+
        		   "<div class=\"pad-all panel\">"+
                   "<p class=\"text-sm color-gray\"><a class=\"btn-link cursor-pointer\" data-target=\"#demo-modal-wo-anim\" data-toggle=\"modal\" href=\"javascript:void(0);\" onclick=\"showDetailSettlement('"+settleInfoList[i].seqNo+"')\">"+settleDate.format("yyyy.MM.dd")+"</a></p>"+
                   "<h3>"+product.name+"</h3>"+
                   "<p class=\"text-lg text-semibold\">"+price+"만원 (VAT포함)</p>"+
                   "<p class=\"color-gray mb0\">이용기간: "+startYmd+"~"+endYmd+"</p>"+
                   "<p class=\"color-gray\">이용 상태: "+useState+"</p>"+
                   "</div>"+
                   "</div>\n";
        	   }
        	   $(".settle-history").html(history);
           } else {
        	   $('.no-settle-history').show();
        	   $('.settle-history').hide();
        	   GlobalSettlHistoryList = null;
           }
            
        } else {
            overlay.hide();
            bootbox.alert(res.msg);
        }

    } else {
        overlay.hide();
    }
};

function dateTimeFormat(data) {
	data = "" + data;
	return data.substring(0,4)+"."+data.substring(4,6)+"."+data.substring(6,8)+" "+
	            data.substring(8,10)+":"+data.substring(10,12)+":"+data.substring(12,14);
};

function numberWithCommas(x) {
    x = x.toString();
    var pattern = /(-?\d+)(\d{3})/;
    while (pattern.test(x))
        x = x.replace(pattern, "$1,$2");
    return x;
}

function showDetailSettlement(id) {
	if(GlobalSettlHistoryList != null) {
		var settleInfo =  null;
		for(var i=0; i < GlobalSettlHistoryList.length; i++) {
			if(GlobalSettlHistoryList[i].seqNo == id) {
				settleInfo = GlobalSettlHistoryList[i];
				break;
			}
		}
		if(settleInfo != null) {
			
			var product = JOIN02000M00.getProduct(GlobalProductList, settleInfo.productId);
			
		   var startYmd = JOIN02000M00.dateFormat(settleInfo.useStartYmd);
     	   var endYmd = JOIN02000M00.dateFormat(settleInfo.useEndYmd);
     	   $("#detail-product-name").html(product.name);
     	   $("#detail-product-period").html(startYmd+" ~ "+endYmd);
			
			if(settleInfo.settleMethod == 0)
     		   $("#td-detail-method").html("신용카드");
     	   else if (settleInfo.settleMethod == 1)
     		   $("#td-detail-method").html("가상계좌");
     	   
     	   $("#detail-orderId").html(settleInfo.storeOrderId);
     	   $("#td-detail-trxNo").html(settleInfo.trxNo);
     	   $("#td-detail-apvNo").html(settleInfo.apvNo);
     	   $("#td-detail-apvYmd").html(dateTimeFormat(settleInfo.apvYmd));
     	   $("#td-detail-amt").html("<h3 class=\"ma0 pa0\">"+numberWithCommas(settleInfo.settleAmt)+"원<font size=\"-1\"><b>(부가세 포함)</b></font></h3>");
     	  
			$('#payDim').show();
		    $('#paydetail').show();
		}
	}
}

function hideDetailSettlement() {
	$('#payDim').hide();
    $('#paydetail').hide();
}

JOIN02000M00Component.prototype.ngOnInit = function () {
	
	var params = {
    };

    var data = joinService.selectApcProduct(params, JOIN02000M00.afterSelect);
    var data2 = joinService.selectSettlHistory(params, JOIN02000M00.afterSelectSettlHistory);
	 
};

$(document).ready(function() {
    $('#payDim').hide();
    $('#paydetail').hide();

    $('.tabDetail').hide()

    $('.no-use-apc-info').hide();
    $('.use-apc-info').hide();
    //탭 활성화하기 0: 신청내역, 1: 결제 내역
    JOIN02000M00.activeTab(0);

    $('#tabMenu0').click(function(){

        JOIN02000M00.activeTab(0);

    });

    $('#tabMenu1').click(function(){

        JOIN02000M00.activeTab(1);

    });
    
    JOIN02000M00.ngOnInit();

});

JOIN02000M00Component.prototype.goMain = function() {
    toMove('MAIN00000M00');
}

JOIN02000M00Component.prototype.showDetail = function() {
    $('#payDim').show();
    $('#paydetail').show();
}

JOIN02000M00Component.prototype.hideDetail = function() {
    $('#payDim').hide();
    $('#paydetail').hide();
}

JOIN02000M00Component.prototype.cancelApplication = function() {
    var result = confirm("신청 취소하시겠습니까?");
    if(result){
        alert('신청 취소되었습니다')
    }else{

    }
}

JOIN02000M00Component.prototype.cancelSubscription = function() {
    var result = confirm("정기결제를 취소하시겠습니까?");
    if(result){
        alert('정기결제 취소되었습니다')
    }else{

    }
}

JOIN02000M00Component.prototype.activeTab = function( id ) {
    $('.tabDetail').hide()
    $('#tab' + id).show()

    $('.mypage_snb > li').removeClass('active')
    $('#tabMenu'+ id).addClass('active')

    //요금제설명화면
    if(id == 2) {
        $('#payInfo').hide();
    } else {
        $('#payInfo').show();
    }
}
