var CMU02000M03 = new CMU02000M03Component();

var boardCode = 'FAS900206'; //자유게시판

var uploadObj = {};

var boardService = new BoardMngService(true);

var userService = new UserService(false);

function CMU02000M03Component() {

};

CMU02000M03Component.prototype.ngOnInit = function () {

    $('#rec-content').summernote({
        height:250,
        lang: 'ko-KR' // default: 'en-US'
    });

    CMU02000M03.onSearch();
};

CMU02000M03Component.prototype.onSearch = function () {
    var code = $("#code").val();
    var mainNo = $("#mainNo").val();
    overlay.show();
    var res = boardMngService.getBoardInfo(code, mainNo, CMU02000M03.boardCallback);
};

CMU02000M03Component.prototype.onGoList = function () {
    toMove('CMU02000M00');
};

CMU02000M03Component.prototype.onSave = function () {

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
        ,replyNo:$("#replyNo").val()
        ,relNo:$("#relNo").val()
        ,title:$("#title").val()
        ,content:content
        ,delYn:'N'
    };

    var res = boardService.updBoard(selectedBoard, CMU02000M03.callback);

};

CMU02000M03Component.prototype.callback = function(data) {

    console.log('request >>' , data);

    if (data != null) {
        console.log("board ajax >>> " , data);
        var res = JSON.parse(data);

        if (res.success==true) { 
            overlay.hide();
            console.log('성공');
            console.log(res);
            bootbox.alert(res.msg,function(){
                CMU02000M03.onGoList();
            });
        } else {
            overlay.hide();
        }

    }
};

CMU02000M03Component.prototype.boardCallback = function(data) {

    console.log('request >>' , data);

    if (data != null) {
        console.log("board ajax >>> " , data);
        var res = JSON.parse(data);

        if (res.success==true) { 
            overlay.hide();
            console.log('성공');
            console.log(res);
            
            $("#ngForm").find("[name=code]").val(res.data.board.code);
            $("#ngForm").find("[name=mainNo]").val(res.data.board.mainNo);
            $("#ngForm").find("[name=replyNo]").val(res.data.board.replyNo);
            $("#ngForm").find("[name=relNo]").val(res.data.board.relNo);
            $("#ngForm").find("[name=title]").val(res.data.board.title);

            var content = res.data.board.content;
            $('#rec-content').summernote('code', content);

            $("#ngForm").find("[name=userId]").val(res.data.board.userId);
            $("#ngForm").find("[name=name]").val(res.data.board.name);
            $("#ngForm").find("[name=writeDate]").val(res.data.board.writeDate);
            
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

    CMU02000M03.ngOnInit();

    $("#onGoList").click(function(){
        CMU02000M03.onGoList();
    });

    $("#onSave").click(function(){
        bootbox.confirm("변경사항을 저장하시겠습니까 ?", function(result){ if (result) {CMU02000M03.onSave(); }});
    });
    
});

