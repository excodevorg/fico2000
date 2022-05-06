
var FIN03001M00 = new FIN03001M00Component();

function FIN03001M00Component() {

};

FIN03001M00Component.prototype.ngOnInit = function () {

    $("#grid-fin-list").bootgrid('destroy');

    $("#grid-fin-list").bootgrid({ 
        templates: {
            search: ""
    }});

    $("#onNewAlyReg").click(function(){
        toMove('FIN05001M00');
    });

    $("#onFinResult").click(function(){
        FIN03001M00.onFinResult();
    });

    FIN03001M00.onSearch();
};


FIN03001M00Component.prototype.onSearch = function () {

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
        $("#name").val(rows.name);

        finCom = {};
        finCom = {
            bzn:rows.bzn,
            name:rows.name,
            userid:rows.userid,
            alyid:rows.alyid
        };


    });
};

FIN03001M00Component.prototype.onFinResult = function () {

    if ($("#alycon").val() == undefined || $("#alycon").val() == null || $("#alycon").val() == '') {
        $(".alert.alert-danger").show();
        $("#errMsg").html("분석할 내용을 선택후 현금흐름 분석 결과를 확인하세요.");
        return;    
    }
    
    console.log("finCom1111 >>> ", finCom);

    toMove('FIN03003M00');
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

    FIN03001M00.ngOnInit();


});