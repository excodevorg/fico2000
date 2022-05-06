var EDU02001M00 = new EDU02001M00Component();

function EDU02001M00Component() {

};

EDU02001M00Component.prototype.ngOnInit = function () {

    console.log("EDU02001M00 Initial");

    $(".alert.alert-danger").hide(true);

    $("#lcteNm").html(eduCom.lcteNm);
    $("#lcteYmd").html(eduCom.lcteYmd);
    $("#lcteCon").html(eduCom.lcteCon);
    $("#atlcNmprCnt").html(eduCom.atlcNmprCnt);

    $("#grid-file-list").bootgrid({
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

            limit = 100000; 
            pageNo = 1;

            var params = {
                fileBscNo:eduCom.flapMngmNo,
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
        url: "/cmmn/fileList.do",
        selection: true,
        rowSelect: true,
        navigation: 0
    }).on("click.rs.jquery.bootgrid", function(e, columns, rows){
        window.location.href='/cmmn/fileDownload.do?fileBscNo='+rows.flapMngmNo+'&fileDtlNo='+rows.flapDtlSrn;
    }); 


};

EDU02001M00Component.prototype.goEduApply = function() {
    
    console.log("goEduApply start ", eduCom.lcteUnqId);

    $(".alert.alert-danger").hide(true);

    if (eduCom.lcteUnqId == null || eduCom.lcteUnqId == '') {
        $(".alert.alert-danger").show();
        $("#errMsg").html('수강신청할 교육과정을 알수 없습니다.');
        return;
    }

    if (eduCom.applyYn == 'Y') {
        $(".alert.alert-danger").show();  
        $("#errMsg").html('이미 신청한 교육과정입니다.');
        return;
    }

    var apply = {
        lcteUnqId:eduCom.lcteUnqId,
        applyPrgScd:'FAS020201' //신청
    };

    var res = eduService.applyRgsn(apply, EDU02001M00.callback);

    
};

EDU02001M00Component.prototype.callback = function(data) {

    console.log('request >>' , data);

    $(".alert.alert-danger").hide(true);

    if (data != null) {
        console.log("board ajax >>> " , data);
        var res = JSON.parse(data);

        if (res.success==true) { 
            overlay.hide();
            console.log('성공');
            console.log(res);
            
            bootbox.alert('정상적으로 수강 신청이 되었습니다. 나의 강의실로 이동합니다.', EDU02001M00.onMyClass());

        } else {
            overlay.hide();
            $("#errMsg").html(res.msg);
        }

    }
};

EDU02001M00Component.prototype.goEduView = function() {
    eduCom = {};
    toMove('EDU02000M00');
};

EDU02001M00Component.prototype.onMyClass = function() {
    eduCom = {};    
    toMove('EDU03000M00');
};

$(document).ready(function() {

$("link[href*='/bootstrap/thema/fico2000/assets/plugins/sky-forms-pro/skyforms/css/sky-forms.css']").remove();
    $("link[href*='/bootstrap/thema/fico2000/assets/plugins/sky-forms-pro/skyforms/custom/custom-sky-forms.css']").remove();
    $("link[href*='/bootstrap/thema/fico2000/assets/css/admin/custom-admin.css']").remove();
    $("link[href*='/bootstrap/thema/fico2000/js/app/adm/ADM01000M00Component.css']").remove();
    
    $('head').append( $('<link rel="stylesheet" type="text/css" />').attr('href', '/bootstrap/thema/fico2000/assets/css/admin/custom-admin.css') );    

    EDU02001M00.ngOnInit();

    $("#goEduApply").click(function() {
        EDU02001M00.goEduApply();
    });

    $("#goEduView").click(function() {
        EDU02001M00.goEduView();
    });

});