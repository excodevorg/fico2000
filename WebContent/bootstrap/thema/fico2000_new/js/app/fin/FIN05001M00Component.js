
var FIN05001M00 = new FIN05001M00Component();

function FIN05001M00Component() {

};

FIN05001M00Component.prototype.ngOnInit = function () {
    $("#onAdd").show();
    $("#onUpd").hide(true);
    $("#onDel").hide(true);

    $("#alycon").val('');
    $('#from').html('');
    $('#multiselect_to_1').html('');
    $("#alyid").val('');
    $("#userid").val('');
    $("#bzn").val('');

    $("#onFirst").click(function(){
        FIN05001M00.onFirst();
    });

    $("#onAdd").click(function(){
        FIN05001M00.onAdd();
    });

    $("#onUpd").click(function(){
        FIN05001M00.onUpd();
    });

    $("#onDel").click(function(){
        FIN05001M00.onDel();
    });


    FIN05001M00.onSearch();
    $('.multiselect').multiselect();
};

FIN05001M00Component.prototype.onSearch = function () {

    $(".alert.alert-danger").hide(true);

    $("#grid-list").bootgrid('destroy');

    $("#grid-list").bootgrid({
        ajax: true,
        ajaxSettings: {
            method: "POST",
            cache: false,
            contentType: "application/json;charset=utf-8",
            async:true,
			error:function(e) {
                console.log(e);
                overlay.hide();
                bootbox.alert('[ERROR] 시스템 오류 발생('+e.status+' '+e.statusText+')');
    	    },
        },
        requestHandler:function(request) {

            console.log(request);

            pageNo = request.current;
            limit = request.rowCount;

            if (limit < 0) {
                limit = 100000; 
                pageNo = 1;
            } 

            var params = {
                name : request.searchPhrase,
                page : pageNo,
                limit : limit
            }

            return JSON.stringify(params);
        },
        responseHandler:function(response)
        {

            console.log("response : " , response);
            console.log("board ajax >>> " , response.data);

            var boardData = {
                "current": response.data.pageNum1,
                "rowCount": limit,
                "rows": response.data.list1,
                "total": response.data.list1Size
            };

            /* To accumulate custom parameter with the request object */
            return boardData;
        },
        url: "/fin/CoporationList.do",
        selection: true,
        multiSelect: true,
        rowSelect: true,
        keepSelection: true,
        labels: {
            search: '기업명을 입력하세요.'
        }
    }).on("click.rs.jquery.bootgrid", function(e, columns, rows){
        FIN05001M00.onSearch01(rows.userid, rows.bzn);
        FIN05001M00.onSearch02('',rows.userid, rows.bzn);
        $("#userid").val(rows.userid);
        $("#bzn").val(rows.bzn);
    });

    $("#grid-aly-list").bootgrid({ 
        templates: {
            search: ""
    }});

};

FIN05001M00Component.prototype.onSearch01 = function (userid, bzn) {

    $(".alert.alert-danger").hide(true);

    $("#grid-aly-list").bootgrid('destroy');

    $("#grid-aly-list").bootgrid({
        ajax: true,
        ajaxSettings: {
            method: "POST",
            cache: false,
            contentType: "application/json;charset=utf-8",
            async:true,
			error:function(e) {
                console.log(e);
                overlay.hide();
                bootbox.alert('[ERROR] 시스템 오류 발생('+e.status+' '+e.statusText+')');
    	    },
        },
        requestHandler:function(request) {

            console.log(request);

            pageNo = request.current;
            limit = request.rowCount;

            if (limit < 0) {
                limit = 100000; 
                pageNo = 1;
            }

            var params = {
                userid: userid,
                bzn: bzn,
                page : pageNo,
                limit : limit
            }

            return JSON.stringify(params);
        },
        responseHandler:function(response)
        {

            console.log("response : " , response);
            console.log("board ajax >>> " , response.data);

            var boardData = {
                "current": response.data.pageNum1,
                "rowCount": limit,
                "rows": response.data.list1,
                "total": response.data.list1Size
            };

            /* To accumulate custom parameter with the request object */
            return boardData;
        },
        url: "/fin/AnalysisConList.do",
        selection: true,
        rowSelect: true,
        templates: {
            search: ""
        }
    }).on("click.rs.jquery.bootgrid", function(e, columns, rows){

        console.log($("#onAdd"));

        $("#onAdd").hide(true);
        $("#onUpd").show();
        $("#onDel").show();

        console.log(rows.alycon);        
        $("#alycon").val(rows.alycon);
        $("#alyid").val(rows.alyid);
        
        FIN05001M00.onSearch02(rows.alyid, rows.userid, rows.bzn);
    }); 

};

FIN05001M00Component.prototype.onSearch02 = function(alyid, userid, bzn) {
    var res = finService.getAnalysisStacYyList(alyid, userid, bzn, FIN05001M00.AnalysisStacYyCallback);
};

FIN05001M00Component.prototype.AnalysisStacYyCallback = function(data) {
    if (data != null) {
        console.log("board ajax >>> " , data);
        var res = JSON.parse(data);

        if (res.success==true) { 
            overlay.hide();
            console.log('성공');
            console.log(res);

            var leftStacYyArr = [];
            $.each(res.data.list1, function(i, option) {
                leftStacYyArr[i] = "<option value='" + option.value + "'>" + option.name + "</option>";
            });
            console.log(leftStacYyArr);
            $('#from').html('');
            $('#from').append(leftStacYyArr.join(''));

            var rightStacYyArr = [];
            $.each(res.data.list2, function(i, option) {
                rightStacYyArr[i] = "<option value='" + option.value + "'>" + option.name + "</option>";
            });
            console.log(rightStacYyArr);
            $('#multiselect_to_1').html('');
            $('#multiselect_to_1').append(rightStacYyArr.join(''));

        } else {
            overlay.hide();
        }

    }
};

FIN05001M00Component.prototype.onFirst = function() {

    $(".alert.alert-danger").hide(true);    
    $("#errRegMsg").html('');
    
    $("#onAdd").show();
    $("#onUpd").hide(true);
    $("#onDel").hide(true);

    $("#alycon").val('');
    $('#from').html('');
    $('#multiselect_to_1').html('');
    $("#alyid").val('');
    $("#userid").val('');
    $("#bzn").val('');

    $("#grid-aly-list").bootgrid('destroy');
    $("#grid-aly-list").bootgrid({
        selection: true,
        rowSelect: true,
        templates: {
            search: ""
        }
    });

};

FIN05001M00Component.prototype.onAdd = function() {

    $(".alert.alert-danger").hide(true);
    $("#errRegMsg").html('');

    overlay.show();
    
    console.log("onSave Start");


    var selectedLeftValue = $.map($('#from option'), function(e) { return e.value; });
    var selectedRightValue = $.map($('#multiselect_to_1 option'), function(e) { return e.value; });

    console.log("selectedLeftValue >> ", selectedLeftValue);
    console.log("selectedRightValue >> ", selectedRightValue);


    // 유효성 체크 - 우선 여기서 체크하는 것으로 간단히 하려 합니다.
    if($("#bzn").val() == undefined || $("#bzn").val() == null || $("#bzn").val() == ''){
        overlay.hide();
       $(".alert.alert-danger").show();
       $("#errRegMsg").html("분석할 기업을 선택해 주세요.");
       return;
    }

    if($("#alycon").val() == undefined || $("#alycon").val() == null || $("#alycon").val() == ''){
        overlay.hide();
       $(".alert.alert-danger").show();
       $("#errRegMsg").html("분석명을 입력해주세요.");
       return;
    }

    if(selectedRightValue.length == 0){
        overlay.hide();
       $(".alert.alert-danger").show();
       $("#errRegMsg").html("분석 대상 재무정보가 선택되지 않았습니다.");
       return;
    }

    if (selectedRightValue.length < 2) {
        overlay.hide();
       $(".alert.alert-danger").show();
       $("#errRegMsg").html("분석 대상 재무정보는 두개 이상 선택되어야 합니다.");
       return;
    }

    var analysisCon = {
            alyid:$("#alyid").val(),
            userid:$("#userid").val(),
            bzn:$("#bzn").val(),
            alycon:$("#alycon").val(),
            delyn:'N',
            stacYys:selectedRightValue
    };

    console.log("analysisCon >> ", analysisCon);

    finService.saveAnalysisCon(analysisCon, FIN05001M00.callback);

};

FIN05001M00Component.prototype.onUpd = function() {

    $(".alert.alert-danger").hide(true);
    $("#errRegMsg").html('');

    overlay.show();
    
    console.log("onUpd Start");


    var selectedLeftValue = $.map($('#from option'), function(e) { return e.value; });
    var selectedRightValue = $.map($('#multiselect_to_1 option'), function(e) { return e.value; });

    console.log("selectedLeftValue >> ", selectedLeftValue);
    console.log("selectedRightValue >> ", selectedRightValue);


    // 유효성 체크 - 우선 여기서 체크하는 것으로 간단히 하려 합니다.
    if($("#bzn").val() == undefined || $("#bzn").val() == null || $("#bzn").val() == ''){
        overlay.hide();
       $(".alert.alert-danger").show();
       $("#errRegMsg").html("분석할 기업을 선택해 주세요.");
       return;
    }

    if($("#alyid").val() == undefined || $("#alyid").val() == null || $("#alyid").val() == ''){
        overlay.hide();
       $(".alert.alert-danger").show();
       $("#errRegMsg").html("변경할 분석을 선택해 주세요.");
       return;
    }

    if($("#alycon").val() == undefined || $("#alycon").val() == null || $("#alycon").val() == ''){
        overlay.hide();
       $(".alert.alert-danger").show();
       $("#errRegMsg").html("분석명을 입력해주세요.");
       return;
    }

    if(selectedRightValue.length == 0){
        overlay.hide();
       $(".alert.alert-danger").show();
       $("#errRegMsg").html("분석 대상 재무정보가 선택되지 않았습니다.");
       return;
    }

    var analysisCon = {
            alyid:$("#alyid").val(),
            userid:$("#userid").val(),
            bzn:$("#bzn").val(),
            alycon:$("#alycon").val(),
            delyn:'N',
            stacYys:selectedRightValue
    };

    console.log("analysisCon >> ", analysisCon);

    finService.updAnalysisCon(analysisCon, FIN05001M00.callback);

};

FIN05001M00Component.prototype.onDel = function() {

    $(".alert.alert-danger").hide(true);
    $("#errRegMsg").html('');

    overlay.show();
    
    console.log("onDel Start");


    var selectedLeftValue = $.map($('#from option'), function(e) { return e.value; });
    var selectedRightValue = $.map($('#multiselect_to_1 option'), function(e) { return e.value; });

    console.log("selectedLeftValue >> ", selectedLeftValue);
    console.log("selectedRightValue >> ", selectedRightValue);

    if($("#alyid").val() == undefined || $("#alyid").val() == null || $("#alyid").val() == ''){
       $("#errRegMsg").html("삭제할 분석을 선택해 주세요.");
       return;
    }


    var analysisCon = {
            alyid:$("#alyid").val(),
            userid:$("#userid").val(),
            bzn:$("#bzn").val(),
            alycon:$("#alycon").val(),
            delyn:'N',
            stacYys:selectedRightValue
    };

    console.log("analysisCon >> ", analysisCon);

    finService.delAnalysisCon(analysisCon, FIN05001M00.callback);

};

FIN05001M00Component.prototype.callback = function(data) {

    console.log('request >>' , data);

    if (data != null) {
        console.log("board ajax >>> " , data);
        var res = JSON.parse(data);

        if (res.success==true) { 
            overlay.hide();
            console.log('성공');
            console.log(res);

            bootbox.alert(res.msg,function(){
                FIN05001M00.onFirst();
            });
        } else {
            overlay.hide();
            $(".alert.alert-danger").show();
            $("#errRegMsg").html(res.msg);
        }

    }
};

$(document).ready(function() {

    $(".alert.alert-danger").hide(true);

    $("link[href*='/bootstrap/thema/fico2000_new/assets/plugins/sky-forms-pro/skyforms/css/sky-forms.css']").remove();
    $("link[href*='/bootstrap/thema/fico2000_new/assets/plugins/sky-forms-pro/skyforms/custom/custom-sky-forms.css']").remove();
    $("link[href*='/bootstrap/thema/fico2000_new/assets/css/admin/custom-admin.css']").remove();
    $("link[href*='/bootstrap/thema/fico2000_new/js/app/adm/ADM01000M00Component.css']").remove();
    
    $('head').append( $('<link rel="stylesheet" type="text/css" />').attr('href', '/bootstrap/thema/fico2000_new/assets/plugins/sky-forms-pro/skyforms/css/sky-forms.css') );
    $('head').append( $('<link rel="stylesheet" type="text/css" />').attr('href', '/bootstrap/thema/fico2000_new/assets/plugins/sky-forms-pro/skyforms/custom/custom-sky-forms.css') );
    $('head').append( $('<link rel="stylesheet" type="text/css" />').attr('href', '/bootstrap/thema/fico2000_new/assets/css/admin/custom-admin.css') );
    $('head').append( $('<link rel="stylesheet" type="text/css" />').attr('href', '/bootstrap/thema/fico2000_new/js/app/adm/ADM01000M00Component.css') );

    $("#onMovePage").click(function(){
        toMove('FIN01001M00');
    });

    FIN05001M00.ngOnInit();

});