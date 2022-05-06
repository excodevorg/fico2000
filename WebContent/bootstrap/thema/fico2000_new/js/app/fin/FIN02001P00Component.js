
var FIN02001P00 = new FIN02001P00Component();

function FIN02001P00Component() {

};

FIN02001P00Component.prototype.ngOnInit = function () {
    
    $("#alyid").val('');
    $("#userid").val('');
    $("#bzn").val('');

    FIN02001P00.onSearch();
    
};

FIN02001P00Component.prototype.onSearch = function () {

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
        FIN02001P00.onSearch01(rows.userid, rows.bzn);
        
        $("#entpInfo").hide(true);
        $("#alyInfo").show();

        $("#userid").val(rows.userid);
        $("#bzn").val(rows.bzn);
    });

    $("#grid-aly-list").bootgrid({ 
        templates: {
            search: ""
    }});

};

FIN02001P00Component.prototype.onSearch01 = function (userid, bzn) {

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

        console.log(rows.alycon);        
        $("#alycon").val(rows.alycon);
        $("#alyid").val(rows.alyid);
        $("#entpName").val(rows.name);
        $("#bzn").val(rows.bzn);
        $("#userid").val(rows.userid);
        $("#amtUnit").val(rows.amtUnit);
        $("#amtUnitNm").val(rows.amtUnitNm);
        
        FIN02001P00.onSearch02(rows.alyid, rows.userid, rows.bzn);
        
    }); 

};

FIN02001P00Component.prototype.onSearch02 = function(alyid, userid, bzn) {
    var res = finService.getAnalysisStacYyList(alyid, userid, bzn, FIN02001P00.AnalysisStacYyCallback);
};

FIN02001P00Component.prototype.AnalysisStacYyCallback = function(data) {
    if (data != null) {
        console.log("board ajax >>> " , data);
        var res = JSON.parse(data);

        if (res.success==true) { 
            overlay.hide();
            console.log('성공');
            console.log(res);

            var rightStacYyArr = [];
            $.each(res.data.list2, function(i, option) {
                rightStacYyArr[i] = "<option value='" + option.value + "'>" + option.name + "</option>";
            });
            console.log(rightStacYyArr);

            var stacYys = [];
            $.each(res.data.list2, function(i, option) {
                stacYys[i] = ''+option.value;
            });

            console.log('stacYys >> ', stacYys);

            var params = {
                alycon : $("#alycon").val(),
                alyid : $("#alyid").val(),
                entpName : $("#entpName").val(),
                bzn : $("#bzn").val(),
                userid : $("#userid").val(),
                amtUnit:$("#amtUnit").val(),
                amtUnitNm:$("#amtUnitNm").val(),
                rightStacYyArr: rightStacYyArr,
                stacYys:stacYys
            }
            
            parent.returnValue(params);
            

        } else {
            overlay.hide();
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

    $("#prevAly").click(function(){
        $("#alyInfo").hide(true);
        $("#entpInfo").show();
    });

    FIN02001P00.ngOnInit();

});