var ADM04003M00 = new ADM04003M00Component();

var selectedRows = [];

function ADM04003M00Component() {

};

ADM04003M00Component.prototype.ngOnInit = function () {

    var res = lectureService.getAllLectures(0);
    
    if (res.success) {
        console.log(res);

        var optionsArr = [];

        $.each(res.data.list1, function(i, option) {
            optionsArr[i] = "<option value='" + option.value + "'>" + option.name + "</option>";
        });

        console.log(optionsArr);

        $('#selectLcteUnqId').append(optionsArr.join(''));
    }

    $("#grid-list").bootgrid({
        selection: true,
        multiSelect: true,
        rowSelect: true,
        keepSelection: true,
        navigation:0});

};

ADM04003M00Component.prototype.onSearch = function () {

     $(".alert.alert-danger").hide(true);

      console.log("lcteUnqId111 >>> ", $("#selectLcteUnqId").val());


    if ($("#selectLcteUnqId").val() == null || $("#selectLcteUnqId").val() == '') {
        
        $("#grid-list").bootgrid("destroy");
        $("#grid-list").bootgrid({
        selection: true,
        multiSelect: true,
        rowSelect: true,
        keepSelection: true,
        navigation:0});

        return;
    }   

    var lcteUnqId = $("#selectLcteUnqId").val();

    console.log("lcteUnqId >>> ", lcteUnqId);

    $("#grid-list").bootgrid("destroy");

    overlay.show();

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
                userNm : request.searchPhrase,
                lcteUnqId : lcteUnqId,
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
        url: "/adm/ApplyLcteList.do",
        selection: true,
        multiSelect: true,
        rowSelect: true,
        keepSelection: true,
        navigation:0,
        formatters: {
            "completeRenderer": function(column, row)
            {
                console.log("row.completeYn >> ", row.completeYn);
                if (row.completeYn == 'Y') {
                    return '수료';
                } else {
                    return '<font color="red">미수료</font>';
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
        var selectRows01 = [];
        selectedRows.forEach(function(data) {
            var save = true;
            rows.forEach(function(deselectedRow) {
                if (data.userId == deselectedRow.userId) {
                    save = false;
                }
            });

            if (save) selectRows01.push(data);
        });

        selectedRows = [];
        selectedRows = selectRows01;

        console.log('selected Row click >> ' , selectedRows);
        
    });   

};

ADM04003M00Component.prototype.onChange = function () {
    ADM04003M00.onSearch();
};

ADM04003M00Component.prototype.onStartApply = function () {

    overlay.show();

    var applys = [];

    var selectRows = selectedRows;

    console.log("selectRows >> ", selectRows);

    var lcteUnqId = $("#selectLcteUnqId").val();

    selectRows.forEach(function(data) {
        console.log("data >> ", data);

        applys.push({
            lcteUnqId:data.lcteUnqId,
            userId:data.userId,
            applyPrgScd:'FAS020202'
        });

    });


    console.log('applys', applys);

    if (applys.length == 0) {
        overlay.hide();
        return;
    }

    var res = lectureService.activePrgsScd(applys, ADM04003M00.callback);

};

ADM04003M00Component.prototype.onStopApply = function () {

    overlay.show();

    var applys = [];

    var selectRows = selectedRows;

    selectRows.forEach(function(data) {

        applys.push({
            lcteUnqId:data.lcteUnqId,
            userId:data.userId,
            applyPrgScd:'FAS020203'
        });

    });

    if (applys.length == 0) {
        overlay.hide();
        return;
    }

    var res = lectureService.activePrgsScd(applys, ADM04003M00.callback);

};

ADM04003M00Component.prototype.onComplete = function () {

    overlay.show();

    var applys = [];

    var selectRows = selectedRows;

    selectRows.forEach(function(data) {

        applys.push({
            lcteUnqId:data.lcteUnqId,
            userId:data.userId,
            completeYn:'Y'
        });

    });

    if (applys.length == 0) {
        overlay.hide();
        return;
    }

    var res = lectureService.activeComplete(applys, ADM04003M00.callback);

};

ADM04003M00Component.prototype.onNotComplete = function () {

    overlay.show();

    var applys = [];

    var selectRows = selectedRows;

    selectRows.forEach(function(data) {

        applys.push({
            lcteUnqId:data.lcteUnqId,
            userId:data.userId,
            completeYn:'N'
        });

    });

    if (applys.length == 0) {
        overlay.hide();
        return;
    }

    var res = lectureService.activeComplete(applys, ADM04003M00.callback);

};

ADM04003M00Component.prototype.callback = function (data) {

    console.log('request >>' , data);

    if (data != null) {
        console.log("board ajax >>> " , data);
        var res = JSON.parse(data);

        if (res.success==true) { 
            overlay.hide();
            console.log('성공');
            console.log(res);
            bootbox.alert(res.msg,function(){
                ADM04003M00.onSearch();
            });
        } else {
            bootbox.alert(res.msg);
            overlay.hide();
        }

    }

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

    ADM04003M00.ngOnInit();

    $("#selectLcteUnqId").change(function(){
        ADM04003M00.onChange();
    });    

    $("#onStartApply").click(function() {
        ADM04003M00.onStartApply();
    });

    $("#onStopApply").click(function() {
        ADM04003M00.onStopApply();
    });

    $("#onComplete").click(function() {
        ADM04003M00.onComplete();
    });

    $("#onNotComplete").click(function() {
        ADM04003M00.onNotComplete();
    });
    
});