var ADM04001M00 = new ADM04001M00Component();

var uploadObj = {};

var selectedLecture = {};
var regLecture = {};

function ADM04001M00Component() {

};

ADM04001M00Component.prototype.ngOnInit = function () {

    $(".alert.alert-danger").hide(true);

    var res = codeMngService.getCodes('FAS0201');
    
    if (res.success) {
        console.log(res);

        var optionsArr = [];

        $.each(res.data.list1, function(i, option) {
            optionsArr[i] = "<option value='" + option.value + "'>" + option.name + "</option>";
        });

        console.log(optionsArr);

        $('#lctePgrsScd').append(optionsArr.join(''));
    }

    fileService.reset();

    uploadObj = fileService.uploadFile('uploadfiles');

    ADM04001M00.onSearch();
};

ADM04001M00Component.prototype.onSearch = function () {

    $(".alert.alert-danger").hide(true);

    $("#ngForm").each(function() {  
        this.reset();  
    });

    fileService.reset();

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
                lcteNm : request.searchPhrase,
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
        url: "/adm/LcteInfoInq.do",
        selection: true,
        rowSelect: true,
        formatters: {
            "menuTypeRenderer": function(column, row)
            {
                console.log(row.flapMngmNo);
                var flag = ''
                if (row.flapMngmNo != null) {
                    if (row.flapMngmNo != '') flag = '파일첨부';
                }

                return flag;
            }
        }
    }).on("click.rs.jquery.bootgrid", function(e, columns, rows){

        overlay.show();

        $(".alert.alert-danger").hide(true);

        $('#lcteCon').summernote('destroy');

        $("#lcteUnqId").val(rows.lcteUnqId);
        $("#lcteNm").val(rows.lcteNm);
        $("#atlcNmprCnt").val(rows.atlcNmprCnt);
        $("#lctePlac").val(rows.lctePlac);
        if (rows.lctePgrsScd == null || rows.lctePgrsScd == '') 
        {
            $("#lctePgrsScd").val("FAS020101");
        } else {
            $("#lctePgrsScd").val(rows.lctePgrsScd);
        }
        
        $("#lcteSttgYmd").val(rows.lcteSttgYmd);
        $("#lcteFnshYmd").val(rows.lcteFnshYmd);
        $("#lcteFuncUseYn").val(rows.lcteFuncUseYn);
        
        $('#lcteCon').summernote({
            height:250,
            lang: 'ko-KR' // default: 'en-US'
        }); 

        $('#lcteCon').summernote('code', rows.lcteCon); 

        var flapMngmNo = rows.flapMngmNo;
        var res = fileService.getFileList(flapMngmNo);
    
        //uploadObj.createProgress("t1.jpg","","123");
        uploadObj.reset();
        fileService.reset();

        console.log("uploadObj $$$ >>> " , uploadObj)

        if (res.success) {
            var fileDtlInfos = fileService.setFileDtlInfos(res.data.list1);
            fileService.getShowProgressBar(uploadObj);
        }

        overlay.hide();

        console.log("res >> ", res);
    });    

};

ADM04001M00Component.prototype.onAddLecture = function () {

    console.log("onAddLecture Start");

    $(".alert.alert-danger").hide(true);

    if($("#lctePgrsScd").val() == undefined || $("#lctePgrsScd").val() == null || $("#lctePgrsScd").val() == ''){
        $(".alert.alert-danger").show();
        $("#errRegMsg").html("진행상태를 선택해주세요");
        return;
    }

    console.log($("#lcteNm").val());
        
    // 유효성 체크 - 우선 여기서 체크하는 것으로 간단히 하려 합니다.
    if($("#lcteNm").val() == undefined || $("#lcteNm").val() == null || $("#lcteNm").val() == ''){
        $(".alert.alert-danger").show();
        $("#errRegMsg").html("강의명을 입력해주세요");
        return;
    }

    //regLecture = new Lecture();

    var lcteCon = $('#lcteCon').summernote('code');

    regLecture = {
         "lcteUnqId":""
        ,"lcteNm":nvl($("#lcteNm").val())
        ,"lcteCon":nvl(lcteCon)
        ,"lcteSttgYmd":nvl($("#lcteSttgYmd").val())
        ,"lcteFnshYmd":nvl($("#lcteFnshYmd").val())
        ,"lctePlac":nvl($("#lctePlac").val())
        ,"atlcNmprCnt":nvl($("#atlcNmprCnt").val())
        ,"lcteFuncUseYn":nvl($("#lcteFuncUseYn").val())
        ,"lctePgrsScd":nvl($("#lctePgrsScd").val())
        ,"flapMngmNo":nvl($("#flapMngmNo").val())
        ,"atlcAplcAblYn":nvl($("#atlcAplcAblYn").val())
        ,"delYn":nvl('N')
        ,"fileList":fileService.getFileDtlInfos()
    }

    console.log(regLecture);

    console.log("uploadObj >>> " ,uploadObj);

    var res = lectureService.addLecture(regLecture, ADM04001M00.callback);

};

ADM04001M00Component.prototype.onUpdLecture = function () {
    
    $(".alert.alert-danger").hide(true);

    var lcteCon = $('#lcteCon').summernote('code');

    regLecture = {
         "lcteUnqId":nvl($("#lcteUnqId").val())
        ,"lcteNm":nvl($("#lcteNm").val())
        ,"lcteCon":nvl(lcteCon)
        ,"lcteSttgYmd":nvl($("#lcteSttgYmd").val())
        ,"lcteFnshYmd":nvl($("#lcteFnshYmd").val())
        ,"lctePlac":nvl($("#lctePlac").val())
        ,"atlcNmprCnt":nvl($("#atlcNmprCnt").val())
        ,"lcteFuncUseYn":nvl($("#lcteFuncUseYn").val())
        ,"lctePgrsScd":nvl($("#lctePgrsScd").val())
        ,"flapMngmNo":nvl($("#flapMngmNo").val())
        ,"atlcAplcAblYn":nvl($("#atlcAplcAblYn").val())
        ,"delYn":nvl('N')
        ,"fileList":fileService.getFileDtlInfos()
    }


    var res = lectureService.updLecture(regLecture, ADM04001M00.callback);

};

ADM04001M00Component.prototype.onDelLecture = function () {

    $(".alert.alert-danger").hide(true);

    // 유효성 체크 - 우선 여기서 체크하는 것으로 간단히 하려 합니다.
    if($("#lcteUnqId").val() == undefined || $("#lcteUnqId").val() == null || $("#lcteUnqId").val() == ''){
        $(".alert.alert-danger").show();
        $("#errRegMsg").html("삭제할 강의를 선택하여 주세요");
        overlay.hide();
        return;
    }

    regLecture = {
         "lcteUnqId":nvl($("#lcteUnqId").val())
    };

    var res = lectureService.delLecture(regLecture, ADM04001M00.callback);

};

ADM04001M00Component.prototype.callback = function(data) {

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

                $("#ngForm").each(function() {  
                    this.reset();  
                });

                $('#lcteCon').summernote('code', '');

                uploadObj.reset();

                fileService.reset();

                ADM04001M00.onSearch();
            });
        } else {
            overlay.hide();
        }

    }

}

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

    $('#lcteCon').summernote({
        height:250,
        lang: 'ko-KR' // default: 'en-US'
    });

    ADM04001M00.ngOnInit();

    $("#onAddLecture").click(function(){
        overlay.show();
        ADM04001M00.onAddLecture();
    });

    $("#onUpdLecture").click(function(){
        overlay.show();
        ADM04001M00.onUpdLecture();
    });

    $("#onDelLecture").click(function(){
        overlay.show();
        ADM04001M00.onDelLecture();
    });

});