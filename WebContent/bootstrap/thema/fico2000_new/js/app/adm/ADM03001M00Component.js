var ADM03001M00 = new ADM03001M00Component();

function ADM03001M00Component() {

};

ADM03001M00Component.prototype.ngOnInit = function () {
    overlay.show();
    ADM03001M00.onSearch();
};

ADM03001M00Component.prototype.onSearch = function() {

    var limit = 0;
    var pageNo = 0;

    $("#ngForm").each(function() {  
         this.reset();  
    });

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

            limit = 100000; 
            pageNo = 1;

            var params = {
                page : pageNo,
                limit : limit
            }
            return JSON.stringify(params);
        },
        responseHandler:function(response)
        {

            console.log("response : " , response);
            console.log("board ajax >>> " , response.data);

            var data = {};

            overlay.hide();

            if (response.success) {
                data = {
                    "current": response.data.pageNum1,
                    "rowCount": limit,
                    "rows": response.data.list1,
                    "total": response.data.list1Size
                };
            } else {
                bootbox.alert(response.msg);
            }

            /* To accumulate custom parameter with the request object */
            return data;
        },
        url: "/fin/AnalysisWallTrantList.do",
        selection: true,
        rowSelect: true,
        navigation:0
    }).on("click.rs.jquery.bootgrid", function(e, columns, rows)
    {
        console.log(rows);

        //선택시 이벤트
        $("#itemCode").val(rows.itemCode);
        $("#bokItemCode").val(rows.bokItemCode);
        $("#bokItemNm").val(rows.bokItemNm);
        $("#itemNm").val(rows.itemNm);
        $("#wall").val(rows.wall);
        $("#trant").val(rows.trant);

    });

};

ADM03001M00Component.prototype.onInit = function() {
    $("#ngForm").each(function() {  
         this.reset();  
    });
};

ADM03001M00Component.prototype.onMdfc = function() {

    var formData = $("#ngForm").serializeObject();
    console.log(formData);

    var res = finService.getWallTrantRatioMdfc(formData, ADM03001M00.onMdfcCallBack);

    if (res.success==true) { 
        overlay.hide();
        console.log('성공');
        console.log(res);
        bootbox.alert(res.msg,function(){
            $("#grid-list").bootgrid("destroy");
            ADM03001M00.onSearch();
        });
    } else {
        overlay.hide();
        $("#grid-list").bootgrid("destroy");
        ADM03001M00.onSearch();
    }
};

ADM03001M00Component.prototype.onMdfcCallBack = function(data) {

    console.log('request >>' , data);

    if (data != null) {
        console.log("board ajax >>> " , data);
        var res = JSON.parse(data);

        if (res.success==true) { 
            overlay.hide();
            console.log('성공');
            console.log(res);
            bootbox.alert(res.msg,function(){
                $("#grid-list").bootgrid("destroy");
                ADM03001M00.onSearch();
            });
        } else {
            overlay.hide();
            $("#grid-list").bootgrid("destroy");
            ADM03001M00.onSearch();
        }

    }

};

$(document).ready(function() {

    $("link[href*='/bootstrap/thema/fico2000/assets/plugins/sky-forms-pro/skyforms/css/sky-forms.css']").remove();
    $("link[href*='/bootstrap/thema/fico2000/assets/plugins/sky-forms-pro/skyforms/custom/custom-sky-forms.css']").remove();
    $("link[href*='/bootstrap/thema/fico2000/assets/css/admin/custom-admin.css']").remove();
    $("link[href*='/bootstrap/thema/fico2000/js/app/adm/ADM01000M00Component.css']").remove();

    $('head').append( $('<link rel="stylesheet" type="text/css" />').attr('href', '/bootstrap/thema/fico2000/assets/css/admin/custom-admin.css') );
    $('head').append( $('<link rel="stylesheet" type="text/css" />').attr('href', '/bootstrap/thema/fico2000/js/app/adm/ADM01000M00Component.css') );

    $(".alert.alert-danger").hide(true);
    ADM03001M00.ngOnInit();

    $("#onInit").click(function() {
        ADM03001M00.onInit();
    });

    $("#onMdfc").click(function() {
        overlay.show();
        ADM03001M00.onMdfc();
    });

});