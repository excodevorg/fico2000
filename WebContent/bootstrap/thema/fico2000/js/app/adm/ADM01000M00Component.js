var ADM01000M00 = new ADM01000M00Component();

var selectedRows = [];

function ADM01000M00Component() {

};

ADM01000M00Component.prototype.ngOnInit = function () {

};

ADM01000M00Component.prototype.getPageUsers = function() {

    var limit = 0;
    var pageNo = 0;

    $(".alert").hide(true);

    $("#grid-keep-selection").bootgrid({
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
        multiSelect: true,
        rowSelect: true,
        keepSelection: true,
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
    }).on("selected.rs.jquery.bootgrid", function(e, rows){
        console.log('selected click >> ' , rows);
        rows.forEach(function(data) {
            selectedRows.push(data);
        });

        console.log('selected Row click >> ' , selectedRows);
       
    }).on("deselected.rs.jquery.bootgrid", function(e, rows){
        console.log('delected click >> ' , rows);
        console.log('delected click111 >> ' , selectedRows);
        var selectRows = [];
        selectedRows.forEach(function(data) {
            var save = true;
            rows.forEach(function(deselectedRow) {
                if (data.userId == deselectedRow.userId) {
                    save = false;
                }
            });

            if (save) selectRows.push(data);
        });

        selectedRows = [];
        selectedRows = selectRows;

        console.log('selected Row click >> ' , selectedRows);
        
    });  
};

ADM01000M00Component.prototype.onStartUser = function () {
    overlay.show();
    
    var selectRows = $("#grid-keep-selection").bootgrid("getSelectedRows");
    var users = [];

    if (selectRows.length == 0) {

        $(".alert").show();
        $("#errMsg").html('선택된 회원이 없습니다.');

        return true;
    }

    selectRows.forEach(function(data) {

        users.push({
                userId:data,
                useYn:'Y'
        });
    });

    console.log(users);

    var res = userMngService.stopUser(users);

    if (res.success==true) { 
        overlay.hide();
        console.log('성공');
        console.log(res);
        bootbox.alert(res.msg,function(){
            $("#grid-keep-selection").bootgrid("destroy");
            ADM01000M00.getPageUsers();
        });
    } else {
        overlay.hide();
        $("#grid-keep-selection").bootgrid("destroy");
        ADM01000M00.getPageUsers();
    }
};

ADM01000M00Component.prototype.onStopUser = function () {
    overlay.show();
    
    var selectRows = $("#grid-keep-selection").bootgrid("getSelectedRows");
    var users = [];

    selectRows.forEach(function(data) {

        users.push({
                userId:data,
                useYn:'N'
        });
    });

    console.log(users);

    var res = userMngService.stopUser(users);

    if (res.success==true) { 
        overlay.hide();
        console.log('성공');
        console.log(res);
        bootbox.alert(res.msg,function(){
            $("#grid-keep-selection").bootgrid("destroy");
            ADM01000M00.getPageUsers();
        });
    } else {
        overlay.hide();
        $("#grid-keep-selection").bootgrid("destroy");
        ADM01000M00.getPageUsers();
    }
};

ADM01000M00Component.prototype.onDropUser = function () {
    overlay.show();
    
    var selectRows = $("#grid-keep-selection").bootgrid("getSelectedRows");
    var users = [];

    selectRows.forEach(function(data) {

        users.push({
                userId:data
        });
    });

    console.log(users);
    var res = userMngService.dropUser(users);

    if (res.success==true) { 
        overlay.hide();
        console.log('성공');
        console.log(res);
        bootbox.alert(res.msg,function(){
            $("#grid-keep-selection").bootgrid("destroy");
            ADM01000M00.getPageUsers();
        });
    } else {
        overlay.hide();
        $("#grid-keep-selection").bootgrid("destroy");
        ADM01000M00.getPageUsers();
    }
};

ADM01000M00Component.prototype.onInitialPwd = function () {

    overlay.show();
    
    var selectRows = $("#grid-keep-selection").bootgrid("getSelectedRows");
    var users = [];

    selectRows.forEach(function(data) {

        users.push({
                userId:data
        });
    });

    console.log(users);
    var res = userMngService.initialPwd(users);

    if (res.success==true) { 
        overlay.hide();
        console.log('성공');
        console.log(res);
        bootbox.alert(res.msg,function(){
            $("#grid-keep-selection").bootgrid("destroy");
            ADM01000M00.getPageUsers();
        });
    } else {
        overlay.hide();
        $("#grid-keep-selection").bootgrid("destroy");
        ADM01000M00.getPageUsers();
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

    var pageNo = 0; 
    var rowIds = [];
    var limit = 0;

    $("#onStartUser").click(function() {
        overlay.show();
        ADM01000M00.onStartUser();
        overlay.hide();
    });

    $("#onStopUser").click(function() {
        overlay.show();
        ADM01000M00.onStopUser();
        overlay.hide();
    });

    $("#onDropUser").click(function() {
        overlay.show();
        ADM01000M00.onDropUser();
        overlay.hide();
    });

    $("#onInitialPwd").click(function() {
        overlay.show();
        ADM01000M00.onInitialPwd();
        overlay.hide();
    });    

    ADM01000M00.getPageUsers();
    
});

