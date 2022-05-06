var ADM05005M01 = new ADM05005M01Component();

var boardCode = 'FAS900205'; //business plat

var uploadObj = {};

var boardService = new BoardMngService(true);

function ADM05005M01Component() {

};

ADM05005M01Component.prototype.ngOnInit = function () {
    $('#rec-content').summernote({
        height:250,
        lang: 'ko-KR' // default: 'en-US'
    });    

    fileService.reset();

    uploadObj = fileService.uploadFile('uploadfiles');
};

ADM05005M01Component.prototype.onSave = function () {

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
        ,mainNo:0
        ,title:$("#title").val()
        ,content:content
        ,count:0
        ,delYn:'N'
        ,hpno:$("#hpno").val()
        ,fileList:fileService.getFileDtlInfos()
    };

    var res = boardService.saveBoardMng(selectedBoard, ADM05005M01.callback);

};

ADM05005M01Component.prototype.onGoList = function () {
    toMove('ADM05005M00');
};

ADM05005M01Component.prototype.onInit = function () {

    $("#ngForm").each(function() {  
        this.reset();  
    });

    $('#rec-content').summernote('code', '');

    uploadObj.reset();

    fileService.reset();
}

ADM05005M01Component.prototype.callback = function(data) {

    console.log('request >>' , data);

    if (data != null) {
        console.log("board ajax >>> " , data);
        var res = JSON.parse(data);

        if (res.success==true) { 
            overlay.hide();
            console.log('성공');
            console.log(res);
            bootbox.alert(res.msg,function(){
                ADM05005M01.onInit();
                ADM05005M01.onGoList();
            });
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

    ADM05005M01.ngOnInit();

    $("#onGoList").click(function(){
        ADM05005M01.onGoList();
    });

    $("#onSave").click(function(){
        ADM05005M01.onSave();
    }); 

    $("#onInit").click(function(){
        ADM05005M01.onInit();
    });   

});
