var FIN01002M00 = new FIN01002M00Component();

var finRegNewYn = true;

function FIN01002M00Component() {

};

FIN01002M00Component.prototype.ngOnInit = function () {

    $(".alert.alert-danger").hide(true);

    finCom = {};
    FIN01002M00.onSearch();

    $("#grid-fin-list").bootgrid({});
};

FIN01002M00Component.prototype.onSearch = function () {

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
        },
        formatters: {
            "enslDcdTypeRenderer": function(column, row)
            {
                console.log(row.enslDcd);
                var flag = ''
                if (row.enslDcd != null) {
                    if (row.enslDcd == 'M') flag = '중소기업';
                    if (row.enslDcd == 'L') flag = '대기업';
                }

                return flag;
            }
        }
    }).on("click.rs.jquery.bootgrid", function(e, columns, rows){

        overlay.show();

        $("#bzn").val(rows.bzn);
        $("#name").val(rows.name);
        $("#enslDcd").val(rows.enslDcd);
        $("#tpbsClsfDcd").val(rows.tpbsClsfDcd);
        $("#amtUnit").val(rows.amtUnit);
        $("#userid").val(rows.userid);
        $("#amtUnitDis").val(rows.amtUnitDis);

        console.log($("#amtUnitDis").val());

        FIN01002M00.onFinSearch(rows.userid, rows.bzn);

        

    }); 

    

};

FIN01002M00Component.prototype.onFinSearch = function (userid, bzn) {

    $(".alert.alert-danger").hide(true);

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

            overlay.hide();

            var boardData = {
                "current": response.data.pageNum1,
                "rowCount": limit,
                "rows": response.data.list1,
                "total": response.data.list1Size
            };

            /* To accumulate custom parameter with the request object */
            return boardData;
        },
        url: "/fin/EntpFinInfoList.do",
        selection: true,
        rowSelect: true,
        templates: {
            search: ""
        }
    }).on("click.rs.jquery.bootgrid", function(e, columns, rows){
        
       finCom = {
                    entpName:$("#name").val(),
                    stacYy: rows.stacYy,
                    amtUnit: $("#amtUnit").val(),
                    amtUnitDis: $("#amtUnitDis").val(),
                    gb:'old',
                    userid: rows.userid,
                    bzn: rows.bzn
                }; 

        console.log('finCom', finCom);

        toMove('FIN01003M00');
        
    }); 


};

FIN01002M00Component.prototype.onFinReg = function() {

    console.log('onFinReg Start11111');

    var yearList = finService.getYearList(5);

    console.log("yearList >>> ", yearList.data.list1);

    var yearArray = [];

    yearList.data.list1.forEach(function (data, index) {
        yearArray.push({
            text: data.name,
            value: data.value
        });
    });

    bootbox.prompt({
        title: "등록할 재무정보의 회계 연도를 선택하세요.",
        inputType: 'select',
        inputOptions: yearArray,
        callback: function (result) {
            if (result != null && result != undefined) {
                if (finRegNewYn) {

                    finCom = {
                        entpName:$("#name").val(),
                        stacYy: result,
                        amtUnit: $("#amtUnit").val(),
                        amtUnitDis: $("#amtUnitDis").val(),
                        gb:'new',
                        userid: $("#userid").val(),
                        bzn: $("#bzn").val()
                    };

                }

                toMove('FIN01003M00');
            }
        }
    });
}

FIN01002M00Component.prototype.callback = function(data) {

    console.log('request >>' , data);

    if (data != null) {
        console.log("board ajax >>> " , data);
        var res = JSON.parse(data);

        if (res.success==true) { 
            overlay.hide();
            console.log('성공');
            console.log(res);

             $("#ngForm").each(function() {  
                this.reset();  
            });

            bootbox.alert(res.msg,function(){
                FIN01002M00.onSearch();
            });
        } else {
            overlay.hide();
            bootbox.alert(res.msg);
        }

    } else {
        overlay.hide();
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
    

    $(".alert.alert-danger").hide(true);

    FIN01002M00.ngOnInit();

    var bzn = $("#bzn").val();

    $("#onFinReg").click(function(){
        console.log('onFinReg Start');
        console.log($("#bzn").val());
        if ($("#bzn").val() != null) {

            if ($("#bzn").val() != null && $("#bzn").val() != undefined && $("#bzn").val() != '') {
                FIN01002M00.onFinReg();
            } else {
                bootbox.alert('[ERROR] 재무등록할 기업을 선택하세요.');
            }

        } else {
             bootbox.alert('[ERROR] 재무등록할 기업을 선택하세요.');
        }

        
    });
 
});
