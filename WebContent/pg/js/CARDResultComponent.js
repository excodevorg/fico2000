"use strict"

var CARDResult = new CARDResultComponent();
var duplicateShield = false // 중복방지 

function CARDResultComponent() {

};

CARDResultComponent.prototype.afterSavingResult = function(data) {

    console.log('request >>' , data);

    if (data != null) {
        console.log("ApcProduct ajax >>> " , data);
        var res = JSON.parse(data);

        if (res.success==true) { 
            overlay.hide();
            console.log('성공');
            console.log(res);
            //alert("성공");
            window.opener.toMove('JOIN03002M00', $('#storeOrderId').attr('value'));
            self.opener = self;
            window.close();
            
        } else {
            overlay.hide();
            bootbox.alert(res.msg);
        }

    } else {
        overlay.hide();
    }
};

CARDResultComponent.prototype.ngOnInit = function () {
	var params = {
			storeOrderId: $('#storeOrderId').attr('value'),
			trxNo: $('#trxNo').attr('value'),
			apvNo: $('#apvNo').attr('value'),
			apvYmd: $('#apvYmd').attr('value')
    };

    var data = joinService.saveSettlResult(params, CARDResult.afterSavingResult);
};

$(document).ready(function() {
	CARDResult.ngOnInit();
	
});