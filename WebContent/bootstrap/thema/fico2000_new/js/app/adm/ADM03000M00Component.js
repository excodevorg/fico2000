var ADM03000M00 = new ADM03000M00Component();

function ADM03000M00Component() {

};

ADM03000M00Component.prototype.ngOnInit = function () {

    var res = codeMngService.getCodes('FAS0302', ADM03000M00.codeCallBack);
    var res1 = finService.getBokFinStacYys('', ADM03000M00.stacYCallBack);
    
    $( "#mFinRateTable tbody tr" ).each( function(){
        this.parentNode.removeChild( this ); 
    });

    $('#mFinRateTable > tbody:last').append('<tr class="active text-lg text-center"><td colspan="2">*성장성</td></tr>');
    $('#mFinRateTable > tbody:last').append('<tr class="active text-lg text-center"><td colspan="2">*안정성</td></tr>');
    $('#mFinRateTable > tbody:last').append('<tr class="active text-lg text-center"><td colspan="2">*수익성</td></tr>');
    $('#mFinRateTable > tbody:last').append('<tr class="active text-lg text-center"><td colspan="2">*생산성</td></tr>');
    $('#mFinRateTable > tbody:last').append('<tr class="active text-lg text-center"><td colspan="2">*활동성</td></tr>');

    $( "#lFinRateTable tbody tr" ).each( function(){
        this.parentNode.removeChild( this ); 
    });

    $('#lFinRateTable > tbody:last').append('<tr class="active text-lg text-center"><td colspan="2">*성장성</td></tr>');
    $('#lFinRateTable > tbody:last').append('<tr class="active text-lg text-center"><td colspan="2">*안정성</td></tr>');
    $('#lFinRateTable > tbody:last').append('<tr class="active text-lg text-center"><td colspan="2">*수익성</td></tr>');
    $('#lFinRateTable > tbody:last').append('<tr class="active text-lg text-center"><td colspan="2">*생산성</td></tr>');
    $('#lFinRateTable > tbody:last').append('<tr class="active text-lg text-center"><td colspan="2">*활동성</td></tr>');

    $( "#aFinRateTable tbody tr" ).each( function(){
        this.parentNode.removeChild( this ); 
    });

    $('#aFinRateTable > tbody:last').append('<tr class="active text-lg text-center"><td colspan="2">*성장성</td></tr>');
    $('#aFinRateTable > tbody:last').append('<tr class="active text-lg text-center"><td colspan="2">*안정성</td></tr>');
    $('#aFinRateTable > tbody:last').append('<tr class="active text-lg text-center"><td colspan="2">*수익성</td></tr>');
    $('#aFinRateTable > tbody:last').append('<tr class="active text-lg text-center"><td colspan="2">*생산성</td></tr>');
    $('#aFinRateTable > tbody:last').append('<tr class="active text-lg text-center"><td colspan="2">*활동성</td></tr>');

};

ADM03000M00Component.prototype.codeCallBack = function (data) {

    console.log('request >>' , data);

    if (data != null) {
        console.log("board ajax >>> " , data);
        var res = JSON.parse(data);

        if (res.success) {
            console.log(res);

            var optionsArr = [];

            $.each(res.data.list1, function(i, option) {
                optionsArr[i] = "<option value='" + option.value + "'>" + option.name + "</option>";
            });

            console.log(optionsArr);
            $('#tpbsClsfDcds').append(optionsArr.join(''));
        }

    }

};

ADM03000M00Component.prototype.stacYCallBack = function (data) {

    console.log('request >>' , data);

    if (data != null) {
        console.log("board ajax >>> " , data);
        var res1 = JSON.parse(data);

        if (res1.success) {
            console.log(res1);

            var optionsArr = [];

            for (var i = 0; i < res1.data.baseYears.length; i++) {
                optionsArr[i] = "<option value='" + res1.data.baseYears[i] + "'>" + res1.data.baseYears[i] + " 년도</option>";
            }
            console.log(optionsArr);
            $('#enslDcds').append(optionsArr.join(''));

        } 


    }

};

ADM03000M00Component.prototype.onSearch = function () {

    $(".alert.alert-danger").hide(true);
    $("#errMsg").html("");

    if ($("#enslDcds").val() == '') {
        $(".alert.alert-danger").show();
        $("#errMsg").html("조회 년도를 선택하세요.");
        return;
    }

    if ($("#tpbsClsfDcds").val()  == '') {
        $(".alert.alert-danger").show();
        $("#errMsg").html("업종을 선택하세요.");
        return;
    }

    //기업규모
    var res = finService.getBokFinRatio($("#tpbsClsfDcds").val(), $("#enslDcds").val(), ADM03000M00.callback);

};

ADM03000M00Component.prototype.callback = function (data) {

    console.log('request >>' , data);

    if (data != null) {
        console.log("board ajax >>> " , data);
        var res = JSON.parse(data);

        if(res.success==true){

            $(".alert.alert-danger").hide(true);
            $("#errMsg").html("");
            
            var mgrowthArray = [] //성장성
            var msafeArray = [] //안정성
            var mprofitArray = [] //수익성
            var mproductArray = [] //생산성
            var mactiveArray = [] //활동성

            var lgrowthArray = [] //성장성
            var lsafeArray = [] //안정성
            var lprofitArray = [] //수익성
            var lproductArray = [] //생산성
            var lactiveArray = [] //활동성

            var agrowthArray = [] //성장성
            var asafeArray = [] //안정성
            var aprofitArray = [] //수익성
            var aproductArray = [] //생산성
            var aactiveArray = [] //활동성

            mgrowthArray = res.data.M['growth'];//성장성
            msafeArray = res.data.M['safe']; //안정성
            mprofitArray = res.data.M['profit']; //수익성
            mproductArray = res.data.M['product']; //생산성
            mactiveArray = res.data.M['active']; //활동성

            lgrowthArray = res.data.L['growth'];//성장성
            lsafeArray = res.data.L['safe']; //안정성
            lprofitArray = res.data.L['profit']; //수익성
            lproductArray = res.data.L['product']; //생산성
            lactiveArray = res.data.L['active']; //활동성

            agrowthArray = res.data.A['growth'];//성장성
            asafeArray = res.data.A['safe']; //안정성
            aprofitArray = res.data.A['profit']; //수익성
            aproductArray = res.data.A['product']; //생산성
            aactiveArray = res.data.A['active']; //활동성

            $( "#mFinRateTable tbody tr" ).each( function(){
                this.parentNode.removeChild( this ); 
            });

            $( "#lFinRateTable tbody tr" ).each( function(){
                this.parentNode.removeChild( this ); 
            });

            $( "#aFinRateTable tbody tr" ).each( function(){
                this.parentNode.removeChild( this ); 
            });

            ADM03000M00.addTable('mFinRateTable',mgrowthArray, msafeArray, mprofitArray, mproductArray, mactiveArray);
            ADM03000M00.addTable('lFinRateTable',lgrowthArray, lsafeArray, lprofitArray, lproductArray, lactiveArray);
            ADM03000M00.addTable('aFinRateTable',agrowthArray, asafeArray, aprofitArray, aproductArray, aactiveArray);

            overlay.hide();

        } else {
            $(".alert.alert-danger").show();
            $("#errMsg").html(res.msg);
            overlay.hide();
        }

    }

};

ADM03000M00Component.prototype.addTable = function (tabeId, growthArray, safeArray, profitArray, productArray, activeArray) {

    //성장성
    $('#'+tabeId+' > tbody:last').append('<tr class="active text-lg text-center"><td colspan="2">*성장성</td></tr>');

    growthArray.forEach(function(data) {
        $('#'+tabeId+' > tbody:last').append('<tr><td>'+data.itemNm+'</td><td align="right">'+data.statValue+' %</td></tr>');
    });

    //안정성
    $('#'+tabeId+' > tbody:last').append('<tr class="active text-lg text-center"><td colspan="2">*안정성</td></tr>');
    
    safeArray.forEach(function(data) {
        $('#'+tabeId+' > tbody:last').append('<tr><td>'+data.itemNm+'</td><td align="right">'+data.statValue+' %</td></tr>');
    });

    //수익성
    $('#'+tabeId+' > tbody:last').append('<tr class="active text-lg text-center"><td colspan="2">*수익성</td></tr>');
    
    profitArray.forEach(function(data) {
        $('#'+tabeId+' > tbody:last').append('<tr><td>'+data.itemNm+'</td><td align="right">'+data.statValue+' %</td></tr>');
    });

    //생산성
    $('#'+tabeId+' > tbody:last').append('<tr class="active text-lg text-center"><td colspan="2">*생산성</td></tr>');
    
    productArray.forEach(function(data) {
        $('#'+tabeId+' > tbody:last').append('<tr><td>'+data.itemNm+'</td><td align="right">'+data.statValue+' %</td></tr>');
    });

    //활동성
    $('#'+tabeId+' > tbody:last').append('<tr class="active text-lg text-center"><td colspan="2">*활동성</td></tr>');
    
    activeArray.forEach(function(data) {
        $('#'+tabeId+' > tbody:last').append('<tr><td>'+data.itemNm+'</td><td align="right">'+data.statValue+' 회</td></tr>');
    });

   
};

$(document).ready(function() {

    $("link[href*='/bootstrap/thema/fico2000/assets/plugins/sky-forms-pro/skyforms/css/sky-forms.css']").remove();
    $("link[href*='/bootstrap/thema/fico2000/assets/plugins/sky-forms-pro/skyforms/custom/custom-sky-forms.css']").remove();
    $("link[href*='/bootstrap/thema/fico2000/assets/css/admin/custom-admin.css']").remove();
    $("link[href*='/bootstrap/thema/fico2000/js/app/adm/ADM01000M00Component.css']").remove();

    $('head').append( $('<link rel="stylesheet" type="text/css" />').attr('href', '/bootstrap/thema/fico2000/assets/plugins/sky-forms-pro/skyforms/css/sky-forms.css') );
    $('head').append( $('<link rel="stylesheet" type="text/css" />').attr('href', '/bootstrap/thema/fico2000/assets/plugins/sky-forms-pro/skyforms/custom/custom-sky-forms.css') );
    $('head').append( $('<link rel="stylesheet" type="text/css" />').attr('href', '/bootstrap/thema/fico2000/assets/css/admin/custom-admin.css') );
    $('head').append( $('<link rel="stylesheet" type="text/css" />').attr('href', '/bootstrap/thema/fico2000/js/app/adm/ADM01000M00Component.css') );

    $(".alert.alert-danger").hide(true);

    ADM03000M00.ngOnInit();

    $("#onSearch").click(function(){
        overlay.show();
        ADM03000M00.onSearch();
    });

});