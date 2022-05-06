var ADM04002M00 = new ADM04002M00Component();

var boardService = new BoardMngService(true);

var uploadObj = {};

var boardCode = 'FAS900207';

function ADM04002M00Component() {

};

ADM04002M00Component.prototype.ngOnInit = function () {

    $('#content').summernote({
        height:250,
        lang: 'ko-KR' // default: 'en-US'
    });



    $(".alert.alert-danger").hide(true);

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

    $("#grid-list").bootgrid();

    fileService.reset();

    uploadObj = fileService.uploadFile('uploadfiles');

};

ADM04002M00Component.prototype.onSearch = function () {


    $(".alert.alert-danger").hide(true);

    if ($("#selectLcteUnqId").val() == null || $("#selectLcteUnqId").val() == '') {
        $(".alert.alert-danger").show();
        $("#errRegMsg").html("강의명을 선택하세요");
        return;
    }

    $("#ngForm").each(function() {  
        this.reset();  
    });

    fileService.reset();

    uploadObj.reset();

    $('#content').summernote('code','');

    $("#grid-list").bootgrid("destroy");

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
                code : boardCode,
                lcteUnqId:$("#selectLcteUnqId").val(),
                title : request.searchPhrase,
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
        url: "/adm/BoardMngLcteList.do",
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

        $(".alert.alert-danger").hide(true);

        try {

            $("#lcteUnqId").val(rows.lcteUnqId);
            $("#code").val(boardCode);
            $("#mainNo").val(rows.mainNo);

            $('#content').summernote('destroy');

            $("#title").val(rows.title);

            $('#content').summernote({
                height:250,
                lang: 'ko-KR' // default: 'en-US'
            }); 

            $('#content').summernote('code', rows.content); 

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

        } catch(e) {

        }

        console.log("res >> ", res);

    });      

};

ADM04002M00Component.prototype.onChange = function () {
    var selectLcteUnqId = $("#selectLcteUnqId").val();
    if (selectLcteUnqId != '') {
        ADM04002M00.onSearch('');
    } else {
        $("#grid-list").bootgrid("destroy");
        $("#grid-list").bootgrid();
    }
};

ADM04002M00Component.prototype.onSave = function () {

    $(".alert.alert-danger").hide(true);

    if ($("#selectLcteUnqId").val() == null || $("#selectLcteUnqId").val() == '' || $("#selectLcteUnqId").val() == undefined) {
        $(".alert.alert-danger").show();
        $("#errRegMsg").html("강의명을 선택하세요");
        return;
    }

    if ($("#title").val() == null || $("#title").val() == '' || $("#title").val() == undefined) {
        $(".alert.alert-danger").show();
        $("#errRegMsg").html("제목을 입력해주세요");
        return;
    }

    overlay.show();

    var lcteCon = $('#content').summernote('code');

    var selectedBoard = {
         code:boardCode
        ,mainNo:0
        ,title:$("#title").val()
        ,content:lcteCon
        ,count:0
        ,delYn:'N'
        ,lcteUnqId:$("#selectLcteUnqId").val()
        ,fileList:fileService.getFileDtlInfos()
    };

    var res = boardService.saveBoardMng(selectedBoard, ADM04002M00.callback);

};

ADM04002M00Component.prototype.onModify = function() {

    $(".alert.alert-danger").hide(true);

    if ($("#selectLcteUnqId").val() == null || $("#selectLcteUnqId").val() == '' || $("#selectLcteUnqId").val() == undefined) {
        $(".alert.alert-danger").show();
        $("#errRegMsg").html("강의명을 선택하세요");
        return;
    }

    if ($("#title").val() == null || $("#title").val() == '' || $("#title").val() == undefined) {
        $(".alert.alert-danger").show();
        $("#errRegMsg").html("제목을 입력해주세요");
        return;
    }

    overlay.show();

    var lcteCon = $('#content').summernote('code');

    var selectedBoard = {
         code:boardCode
        ,mainNo:$("#mainNo").val()
        ,title:$("#title").val()
        ,content:lcteCon
        ,count:0
        ,delYn:'N'
        ,lcteUnqId:$("#selectLcteUnqId").val()
        ,fileList:fileService.getFileDtlInfos()
    };

    var res = boardService.updBoardMng(selectedBoard, ADM04002M00.callback);   

};

ADM04002M00Component.prototype.onDel = function() {

    if ($("#selectLcteUnqId").val() == null || $("#selectLcteUnqId").val() == '' || $("#selectLcteUnqId").val() == undefined) {
        $(".alert.alert-danger").show();
        $("#errRegMsg").html("강의명을 선택하세요");
        return;
    }

    if ($("#mainNo").val() == null || $("#mainNo").val() == 0 || $("#mainNo").val() == undefined) {
        $(".alert.alert-danger").show();
        $("#errRegMsg").html("삭제할 게시판 목록을 선택하세요.");
        return;
    }    

    overlay.show();

    var lcteCon = $('#content').summernote('code');

    var selectedBoard = {
         code:boardCode
        ,mainNo:$("#mainNo").val()
        ,title:$("#title").val()
        ,content:lcteCon
        ,count:0
        ,delYn:'N'
        ,lcteUnqId:$("#selectLcteUnqId").val()
        ,fileList:fileService.getFileDtlInfos()
    };

    var res = boardService.delBoardMng(selectedBoard, ADM04002M00.callback);   

};

ADM04002M00Component.prototype.callback = function(data) {

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

                $('#content').summernote('code', '');

                uploadObj.reset();

                fileService.reset();

                ADM04002M00.onSearch();
            });
        } else {
            overlay.hide();
        }

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

    ADM04002M00.ngOnInit();

    $("#selectLcteUnqId").change(function(){
        overlay.show();
        ADM04002M00.onChange();
        overlay.hide();
    });

    $("#onSave").click(function(){
        ADM04002M00.onSave();
    });

    $("#onModify").click(function(){
        ADM04002M00.onModify();
    });  

    $("#onDel").click(function(){
        ADM04002M00.onDel();
    });  

});
