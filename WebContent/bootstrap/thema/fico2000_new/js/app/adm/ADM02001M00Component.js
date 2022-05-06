var ADM02001M00 = new ADM02001M00Component();

function ADM02001M00Component() {

};

ADM02001M00Component.prototype.ngOnInit = function () {

    ADM02001M00.onSearch();

};

ADM02001M00Component.prototype.onSearch = function () {

    var limit = 0;
    var pageNo = 0;

    overlay.show();

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

            if (limit < 0) {
                limit = 100000; 
                pageNo = 1;
            } 

            var params = {
                menuNm : request.searchPhrase,
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
        url: "/adm/MenuMngList.do",
        selection: true,
        rowSelect: true,
        formatters: {
            "useYn": function(column, row)
            {
                console.log(row.useYn);
                if (row.useYn == 'Y') {
                    return '사용';
                } else {
                    return '<font color="red">중지</font>';
                }
            }
        }
    }).on("click.rs.jquery.bootgrid", function(e, columns, row){
        $("#menuId").val(row.menuId);
        $("#menuNm").val(row.menuNm);
        $("#upperMenuId").val(row.upperMenuId);
        $("#upperMenuNm").val(row.upperMenuNm);
        $("#menuPath").val(row.menuPath);
        $("#menuOrder").val(row.menuOrder);

        $("#menuType option[value="+row.menuType+"]").attr("selected", "selected");

        $("#menuCon").val(row.menuCon);

        $("#useYn option[value="+row.useYn+"]").attr("selected", "selected");

        $("#menuLevel").val(row.menuLevel);
    });    

};

ADM02001M00Component.prototype.onAddMenu = function () {
    overlay.show();
    var formData = $("#ngForm").serializeObject();
    console.log(formData);
    var res = menuService.addMenu(formData);

     if (res.success==true) { 
        overlay.hide();
        console.log('성공');
        console.log(res);
        bootbox.alert(res.msg,function(){
            $("#grid-list").bootgrid("destroy");
            ADM02001M00.onSearch();
        });
    } else {
        overlay.hide();
        bootbox.alert(res.msg,function(){
            $("#grid-list").bootgrid("destroy");
            ADM02001M00.onSearch();
        });
    }
};

ADM02001M00Component.prototype.onUpdMenu = function () {
    overlay.show();
    var formData = $("#ngForm").serializeObject();
    console.log(formData);
    var res = menuService.updMenu(formData);

     if (res.success==true) { 
        overlay.hide();
        console.log('성공');
        console.log(res);
        bootbox.alert(res.msg,function(){
            $("#grid-list").bootgrid("destroy");
            ADM02001M00.onSearch();
        });
    } else {
        overlay.hide();
        bootbox.alert(res.msg,function(){
            $("#grid-list").bootgrid("destroy");
            ADM02001M00.onSearch();
        });
    }
};

ADM02001M00Component.prototype.onDelMenu = function () {
    overlay.show();
    var formData = $("#ngForm").serializeObject();
    console.log(formData);
    var res = menuService.delMenu(formData);

     if (res.success==true) { 
        overlay.hide();
        console.log('성공');
        console.log(res);
        bootbox.alert(res.msg,function(){
            $("#grid-list").bootgrid("destroy");
            ADM02001M00.onSearch();
        });
    } else {
        overlay.hide();
        bootbox.alert(res.msg,function(){
            $("#grid-list").bootgrid("destroy");
            ADM02001M00.onSearch();
        });
    }
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

    ADM02001M00.ngOnInit();

    $("#onAddMenu").click(function() {
        overlay.show();
        ADM02001M00.onAddMenu();
        overlay.hide();
    });

    $("#onUpdMenu").click(function() {
        overlay.show();
        ADM02001M00.onUpdMenu();
        overlay.hide();
    });

    $("#onDelMenu").click(function() {
        overlay.show();
        ADM02001M00.onDelMenu();
        overlay.hide()
    });
    
});