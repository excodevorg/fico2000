
var FIN02001M00 = new FIN02001M00Component();

function FIN02001M00Component() {

};

FIN02001M00Component.prototype.ngOnInit = function () {

    $("#grid-fin-list").bootgrid('destroy');

    $("#grid-fin-list").bootgrid({ 
        templates: {
            search: ""
    }});

    $("#onNewAlyReg").click(function(){
        toMove('FIN05001M00');
    });

    $("#onFinResult").click(function(){
        FIN02001M00.onFinResult();
    });

    FIN02001M00.onSearch();
};


FIN02001M00Component.prototype.onSearch = function () {

    $(".alert.alert-danger").hide(true);

    overlay.show();

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
                userid: '',
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

            overlay.hide();

            /* To accumulate custom parameter with the request object */
            return boardData;
        },
        url: "/fin/AnalysisUserConList.do",
        selection: true,
        rowSelect: true
    }).on("click.rs.jquery.bootgrid", function(e, columns, rows){
        $("#alycon").val(rows.alycon);

        finCom = {};
        finCom = {
            bzn:rows.bzn,
            name:rows.name,
            userid:rows.userid,
            alyid:rows.alyid,
            amtUnit:rows.amtUnit,
            stacYys:[],
            amtUnitNm:rows.amtUnitNm
        };

        FIN02001M00.onSearch01(rows.alyid, rows.userid, rows.bzn);
    });
};


FIN02001M00Component.prototype.onSearch01 = function (alyid, userid, bzn) {

    $(".alert.alert-danger").hide(true);

    overlay.show();

    $("#grid-fin-list").bootgrid('destroy');

    $("#grid-fin-list").bootgrid({
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

            limit = 100000; 
            pageNo = 1;

            var params = {
                alyid:alyid,
                bzn:bzn,
                userid: userid,
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

            var res = response.data.list1;

            res.forEach(function(selectedRow, index) {
                finCom.stacYys.push(
                    selectedRow.stacYy
                )
            });
            
            overlay.hide();

            /* To accumulate custom parameter with the request object */
            return boardData;
        },
        url: "/fin/AnalysisFnamStacYyList.do",
        selection: true,
        rowSelect: true,
        navigation:0
    }).on("click.rs.jquery.bootgrid", function(e, columns, rows){

        var finDetail = {};
        finDetail = {
            bzn:rows.bzn,
            name:rows.name,
            userid:rows.userid,
            alyid:rows.alyid,
            stacYy:rows.stacYy,
            stacYys:finCom.stacYys,
            amtUnit:finCom.amtUnit,
            amtUnitNm:finCom.amtUnitNm
        };

        finCom = {};
        finCom = {
            bzn:finDetail.bzn,
            name:finDetail.name,
            userid:finDetail.userid,
            alyid:finDetail.alyid,
            stacYys:finDetail.stacYys,
            stacYy:finDetail.stacYy,
            amtUnit:finDetail.amtUnit,
            amtUnitNm:finDetail.amtUnitNm,
            amtUnitDis:finDetail.amtUnitNm,
            gb:'old'
        };

        console.log("finCom >>> ", finCom);

        toMove('FIN02002M00');

    }); 


};

FIN02001M00Component.prototype.onFinResult = function () {

    if ($("#alycon").val() == undefined || $("#alycon").val() == null || $("#alycon").val() == '') {
        $(".alert.alert-danger").show();
        $("#errMsg").html("분석할 내용을 선택후 재무 결과를 확인하세요.");
        return;    
    }
    
    console.log("finCom1111 >>> ", finCom);

    toMove('FIN02003M00');
};

$(document).ready(function() {

    $(".alert.alert-danger").hide(true);

    $("link[href*='/bootstrap/thema/fico2000/assets/plugins/sky-forms-pro/skyforms/css/sky-forms.css']").remove();
    $("link[href*='/bootstrap/thema/fico2000/assets/plugins/sky-forms-pro/skyforms/custom/custom-sky-forms.css']").remove();
    $("link[href*='/bootstrap/thema/fico2000/assets/css/admin/custom-admin.css']").remove();
    $("link[href*='/bootstrap/thema/fico2000/js/app/adm/ADM01000M00Component.css']").remove();
    
    $('head').append( $('<link rel="stylesheet" type="text/css" />').attr('href', '/bootstrap/thema/fico2000/assets/plugins/sky-forms-pro/skyforms/css/sky-forms.css') );
    $('head').append( $('<link rel="stylesheet" type="text/css" />').attr('href', '/bootstrap/thema/fico2000/assets/plugins/sky-forms-pro/skyforms/custom/custom-sky-forms.css') );
    $('head').append( $('<link rel="stylesheet" type="text/css" />').attr('href', '/bootstrap/thema/fico2000/assets/css/admin/custom-admin.css') );
    $('head').append( $('<link rel="stylesheet" type="text/css" />').attr('href', '/bootstrap/thema/fico2000/js/app/adm/ADM01000M00Component.css') );

    FIN02001M00.ngOnInit();


});