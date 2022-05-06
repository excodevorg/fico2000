var ADM02002M00 = new ADM02002M00Component();
var rowIds = [];

function ADM02002M00Component() {

};

ADM02002M00Component.prototype.ngOnInit = function () {

    var res = codeMngService.getCodes('FAS9001');

    if (res.success) {
        console.log(res);

        var optionsArr = [];

        $.each(res.data.list1, function(i, option) {
            optionsArr[i] = "<option value='" + option.value + "'>" + option.name + "</option>";
        });

        console.log(optionsArr);

        $('#rolecode').append(optionsArr.join(''));

        $("#grid-keep-selection").bootgrid({navigation:0});
    }

};

ADM02002M00Component.prototype.onSearch = function () {

    $(".alert.alert-danger").hide(true);

    var limit = 0;
    var pageNo = 0;

    $("#grid-keep-selection").bootgrid("destroy");

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

            limit = 100000; 
            pageNo = 1;

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

            /* To accumulate custom parameter with the request object */
            return boardData;
        },
        url: "/adm/MenuMngList.do",
        selection: true,
        multiSelect: true,
        rowSelect: true,
        keepSelection: true,
        navigation:0,
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
    }).on("loaded.rs.jquery.bootgrid", function (e)
    {
        /* your code goes here */
        console.log('click');
        ADM02002M00.selectedRow();
    });

 
};

ADM02002M00Component.prototype.onChange = function () {
    var rolecode = $("#rolecode").val();
    if (rolecode != '') {
        ADM02002M00.onSearch('');
    } else {
        $("#grid-keep-selection").bootgrid("destroy");
        $("#grid-keep-selection").bootgrid({navigation:0});
    }
};

ADM02002M00Component.prototype.selectedRow = function() {
    var rolecode = $("#rolecode").val();

    if (rolecode == '') {
        return true;
    }

    var res = menuService.getMenuAuths(rolecode);
    if (res.success==true) { 
        console.log('success');
        var menuroles = res.data.list1;
        menuroles.forEach( function(selectedRow, index) {
            $("#grid-keep-selection").bootgrid("select", [selectedRow.menuId]);
        });
    }
};

ADM02002M00Component.prototype.onAddMenuAuth = function() {

    var rolecode = $("#rolecode").val();

    var selectRows = $("#grid-keep-selection").bootgrid("getSelectedRows");

    console.log(selectRows);

    var menuAuths = [];
    selectRows.forEach(function(data) {

        menuAuths.push({
            menuId:data,
            rolecode:rolecode
        });

    });

    if (menuAuths.length == 0) {
        menuAuths.push({
            menuId:0,
            rolecode:rolecode
        });
    }

    var res = menuService.addMenuAuth(menuAuths);
    if(res.success==true){
        bootbox.alert(res.msg,function(){
            $("#grid-keep-selection").bootgrid("destroy");
            ADM02002M00.onSearch('');
        });
    } else {
        $(".alert.alert-danger").show();
        $("#errMsg").html(res.msg);
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

    $(".alert.alert-danger").hide(true);

    ADM02002M00.ngOnInit();

    $("#rolecode").change(function(){
        overlay.show();
        ADM02002M00.onChange();
        overlay.hide();
    });

    $("#onAddMenuAuth").click(function() {
        overlay.show();
        ADM02002M00.onAddMenuAuth();
        overlay.hide();
    });

});