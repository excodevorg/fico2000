var ADM01002M00 = new ADM01002M00Component();

function ADM01002M00Component() {

};

ADM01002M00Component.prototype.ngOnInit = function () {

};

ADM01002M00Component.prototype.onSearch = function() {

    var limit = 0;
    var pageNo = 0;

    $("#ngForm").each(function() {  
        this.reset();  
    });

    $("#grid-code-list").bootgrid({
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
                codeNm : request.searchPhrase,
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
        url: "/adm/CodeMngList.do",
        selection: true,
        multiSelect: true,
        rowSelect: true,
        keepSelection: true,
        formatters: {
            "useYn": function(column, row)
            {
                console.log(row.useYn);
                if (row.useYn == 'Y') {
                    return '사용';
                } else {
                    return '<font color="red">아니오</font>';
                }
            }
        }
    }).on("click.rs.jquery.bootgrid", function(e, columns, rows)
    {
        console.log(rows);
        //선택시 이벤트
        $("#domainCode").val(rows.domainCode);
        $("#groupCode").val(rows.groupCode);
 
        $("#domainCodeNm").val(rows.domainCodeNm);
        $("#code").val(rows.code);
        $("#codeNm").val(rows.codeNm);
        $("#codeCon").val(rows.codeCon);
        $("#useYn option[value="+rows.useYn+"]").attr("selected", "selected");
    });

};

ADM01002M00Component.prototype.onAddCode = function() {
    overlay.show();

    var formData = $("#ngForm").serializeObject();
    console.log(formData);
    var res = codeMngService.addCode(formData);

    if (res.success==true) { 
        overlay.hide();
        console.log('성공');
        console.log(res);
        bootbox.alert(res.msg,function(){
            $("#grid-code-list").bootgrid("destroy");
            ADM01002M00.onSearch();
        });
    } else {
        overlay.hide();
        $("#grid-code-list").bootgrid("destroy");
        ADM01002M00.onSearch();
    }
};

ADM01002M00Component.prototype.onUpdCode = function() {

    overlay.show();

    var formData = $("#ngForm").serializeObject();
    console.log(formData);
    var res = codeMngService.updCode(formData);

    if (res.success==true) { 
        overlay.hide();
        console.log('성공');
        console.log(res);
        bootbox.alert(res.msg,function(){
            $("#grid-code-list").bootgrid("destroy");
            ADM01002M00.onSearch();
        });
    } else {
        overlay.hide();
        $("#grid-code-list").bootgrid("destroy");
        ADM01002M00.onSearch();
    }

};

ADM01002M00Component.prototype.onDelCode = function() {

   overlay.show();

    var formData = $("#ngForm").serializeObject();
    console.log(formData);
    var res = codeMngService.delCode(formData);

    if (res.success==true) { 
        overlay.hide();
        console.log('성공');
        console.log(res);
        bootbox.alert(res.msg,function(){
            $("#grid-code-list").bootgrid("destroy");
            ADM01002M00.onSearch();
        });
    } else {
        overlay.hide();
        $("#grid-code-list").bootgrid("destroy");
        ADM01002M00.onSearch();
    }

};

ADM01002M00Component.prototype.formValidate = function () {


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

    $(".alert").hide(true);

    ADM01002M00.onSearch();

    $("#onAddCode").click(function() {
        ADM01002M00.onAddCode();
    });

    $("#onUpdCode").click(function() {
        ADM01002M00.onUpdCode(); 
    });

    $("#onDelCode").click(function() {
        ADM01002M00.onDelCode();
    });

     
});