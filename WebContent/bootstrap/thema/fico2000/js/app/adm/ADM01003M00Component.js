var ADM01003M00 = new ADM01003M00Component();

function ADM01003M00Component() {

};

ADM01003M00Component.prototype.ngOnInit = function () {
    var res = codeMngService.getCodes('FAS9001');

    if (res.success) {
        console.log(res);

        var optionsArr = [];

        $.each(res.data.list1, function(i, option) {
            optionsArr[i] = "<option value='" + option.value + "'>" + option.name + "</option>";
        });

        console.log(optionsArr);

        $('#rolecode').append(optionsArr.join(''));
    }

     ADM01003M00.getPageUsers();

     $("#grid-role-list").bootgrid({navigation:0});
};

ADM01003M00Component.prototype.getPageUsers = function() {

    var limit = 0;
    var pageNo = 0;

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
                userNm : request.searchPhrase,
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
        url: "/adm/UserMngList.do",
        selection: true,
        rowSelect: true,
        formatters: {
            "useYn": function(column, row)
            {
                console.log(row.useYn);
                if (row.useYn == 'Y') {
                    return '활동';
                } else {
                    return '<font color="red">중지</font>';
                }
            }
        }
    }).on("click.rs.jquery.bootgrid", function(e, columns, row){
        $("#userid").val(row.userId);
        $("#userNm").val(row.userNm);
        $("#grid-role-list").bootgrid("destroy");
        ADM01003M00.onSearch(row.userId);
    });
};

ADM01003M00Component.prototype.onSearch = function(userId) {

    var limit = 0;
    var pageNo = 0;

    $("#ngForm").each(function() {  
        this.reset();  
    });

    $("#grid-role-list").bootgrid({
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
        navigation:0,
        requestHandler:function(request) {

            console.log(request);

            pageNo = request.current;
            limit = 20;

            if (limit < 0) {
                limit = 100000; 
                pageNo = 1;
            } 

            var params = {
                userid : userId,
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
        url: "/adm/UserRoleInqList.do",
        selection: true,
        rowSelect: true
    }).on("click.rs.jquery.bootgrid", function(e, columns, row){
        $("#userid").val(row.userid);
        $("#userNm").val(row.userNm);

        $("#rolecode option[value="+row.rolecode+"]").attr("selected", "selected");

    });

};

ADM01003M00Component.prototype.onAddRole = function() {

    overlay.show();

    var userId = $("#userid").val();
    var rolecode = $("#rolecode").val();
    var res = userMngService.addUserRole(userId, rolecode);

    if (res.success==true) { 
        overlay.hide();
        console.log('성공');
        console.log(res);
        bootbox.alert(res.msg,function(){
            $("#grid-role-list").bootgrid("destroy");
            ADM01003M00.onSearch(userId);
        });
    } else {
        overlay.hide();
        bootbox.alert(res.msg,function(){
            $("#grid-role-list").bootgrid("destroy");
            ADM01003M00.onSearch(userId);
        });
    }
};

ADM01003M00Component.prototype.onDelRole = function() {

   overlay.show();

    var userId = $("#userid").val();
    var rolecode = $("#rolecode").val();
    var res = userMngService.dropUserRole(userId, rolecode);

    if (res.success==true) { 
        overlay.hide();
        console.log('성공');
        console.log(res);
        bootbox.alert(res.msg,function(){
            $("#grid-role-list").bootgrid("destroy");
            ADM01003M00.onSearch(userId);
        });
    } else {
        overlay.hide();
        bootbox.alert(res.msg,function(){
            $("#grid-role-list").bootgrid("destroy");
            ADM01003M00.onSearch(userId);
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

    ADM01003M00.ngOnInit();

    $("#onAddRole").click(function() {
        overlay.show();
        ADM01003M00.onAddRole();
        overlay.hide();
    });

    $("#onDelRole").click(function() {
        overlay.show();
        ADM01003M00.onDelRole(); 
        overlay.hide();
    });
     
});