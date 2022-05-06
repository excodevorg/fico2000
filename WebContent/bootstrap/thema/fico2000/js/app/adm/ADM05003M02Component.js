var ADM05003M02 = new ADM05003M02Component();

var boardCode = 'FAS900203'; //강의자료

var uploadObj = {};

var boardService = new BoardMngService(true);

function ADM05003M02Component() {

};

ADM05003M02Component.prototype.ngOnInit = function () {
    $('#rec-content').summernote({
        height:250,
        lang: 'ko-KR' // default: 'en-US'
    });    

    fileService.reset();

    uploadObj = fileService.uploadFile('uploadfiles');

    ADM05003M02.onSearch();
};

ADM05003M02Component.prototype.onSearch = function () {
    var code = $("#code").val();
    var mainNo = $("#mainNo").val();
    overlay.show();
    var res = boardService.getBoardMngInfo(code, mainNo, ADM05003M02.boardCallback);
};

ADM05003M02Component.prototype.onSave = function () {

    $(".alert.alert-danger").hide(true);

    if ($("#title").val() == null || $("#title").val() == '' || $("#title").val() == undefined) {
        $(".alert.alert-danger").show();
        $("#errRegMsg").html("제목을 입력하세요");
        return;
    }

    overlay.show();

    var content = $('#rec-content').summernote('code');

    $("#code").val(boardCode);

    var selectedBoard = {
         code:boardCode
        ,mainNo:$("#mainNo").val()
        ,title:$("#title").val()
        ,content:content
        ,flapMngmNo:$("#flapMngmNo").val()
        ,delYn:'N'
        ,fileList:fileService.getFileDtlInfos()
    };

    var res = boardService.updBoardMng(selectedBoard, ADM05003M02.callback);

};

ADM05003M02Component.prototype.onDel = function () {

    var selectedBoard = {
         code:boardCode
        ,mainNo:$("#mainNo").val()
    };

    var res = boardService.delBoardMng(selectedBoard, ADM05003M02.callback);

}

ADM05003M02Component.prototype.onGoList = function () {
    toMove('ADM05003M00');
};

ADM05003M02Component.prototype.callback = function(data) {

    console.log('request >>' , data);

    if (data != null) {
        console.log("board ajax >>> " , data);
        var res = JSON.parse(data);

        if (res.success==true) { 
            overlay.hide();
            console.log('성공');
            console.log(res);
            bootbox.alert(res.msg,function(){
                ADM05003M02.onGoList();
            });
        } else {
            overlay.hide();
        }

    }
};

ADM05003M02Component.prototype.boardCallback = function(data) {

    console.log('request >>' , data);

    if (data != null) {
        console.log("board ajax >>> " , data);
        var res = JSON.parse(data);

        if (res.success==true) { 
            overlay.hide();
            console.log('성공');
            console.log(res);
            
            $("#code").val(res.data.board.code);
            $("#mainNo").val(res.data.board.mainNo);
            $("#flapMngmNo").val(res.data.board.flapMngmNo);
            $("#title").val(res.data.board.title);

            $('#rec-content').summernote('code', res.data.board.content); 

            var flapMngmNo = res.data.board.flapMngmNo;
            var res = fileService.getFileList(flapMngmNo);
        
            //uploadObj.createProgress("t1.jpg","","123");
            uploadObj.reset();
            fileService.reset();

            console.log("uploadObj $$$ >>> " , uploadObj)

            if (res.success) {
                var fileDtlInfos = fileService.setFileDtlInfos(res.data.list1);
                fileService.getShowProgressBar(uploadObj);
            }

        } else {
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

    ADM05003M02.ngOnInit();

    $("#onGoList").click(function(){
        ADM05003M02.onGoList();
    });

    $("#onSave").click(function(){
        ADM05003M02.onSave();
    }); 

    $("#onDel").click(function(){
        ADM05003M02.onDel();
    }); 

});

