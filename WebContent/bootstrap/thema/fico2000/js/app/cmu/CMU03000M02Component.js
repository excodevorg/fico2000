var CMU03000M02 = new CMU03000M02Component();

var boardCode = 'FAS900205'; //Business Plate

var uploadObj = {};

var boardService = new BoardMngService(true);

var userService = new UserService(false);

var list = [];

var replyBoard = {};

function CMU03000M02Component() {

};

CMU03000M02Component.prototype.ngOnInit = function () {
    CMU03000M02.onSearch();
};

CMU03000M02Component.prototype.onSearch = function () {
    var code = $("#code").val();
    var mainNo = $("#mainNo").val();
    overlay.show();
    var res = boardService.getBoardInfo(code, mainNo, CMU03000M02.boardCallback);
};

CMU03000M02Component.prototype.onDelete = function () {

    var selectedBoard = {
         code:boardCode
        ,mainNo:$("#mainNo").val()
    };

    var res = boardService.delBoard(selectedBoard, CMU03000M02.callback);

};

CMU03000M02Component.prototype.onGoList = function () {
    toMove('CMU03000M00');
};

CMU03000M02Component.prototype.onModify = function () {
    var params = '"code='+boardCode+'*mainNo='+$("#mainNo").val()+'"';
    toMove('CMU03000M03',params);
};


CMU03000M02Component.prototype.callback = function(data) {

    console.log('request >>' , data);

    if (data != null) {
        console.log("board ajax >>> " , data);
        var res = JSON.parse(data);

        if (res.success==true) { 
            overlay.hide();
            console.log('성공');
            console.log(res);
            bootbox.alert(res.msg,function(){
                CMU03000M02.onGoList();
            });
        } else {
            overlay.hide();
        }

    }
};

CMU03000M02Component.prototype.boardCallback = function(data) {

    overlay.hide();

    console.log('request >>' , data);

    if (data != null) {
        console.log("board ajax >>> " , data);
        var res = JSON.parse(data);

        if (res.success==true) { 

            console.log('성공');
            console.log(res);

            var user = userService.getSessionInfo({});
            
            //댓글인 아닌 경우
            if (res.data.board.mainNo == res.data.board.relNo) {
                //글쓴이가 아닌경우
                if (res.data.board.userId == user.data.userInfo.userId) {
                    $("#onModify").show();
                    $("#onDelete").show();
                }
            }

            $("#selectViewForm").find("[name=code]").val(res.data.board.code);
            $("#selectViewForm").find("[name=mainNo]").val(res.data.board.mainNo);
            $("#selectViewForm").find("[name=replyNo]").val(res.data.board.replyNo);
            $("#selectViewForm").find("[name=relNo]").val(res.data.board.relNo);
            $("#selectViewForm").find("[name=title]").html(res.data.board.title);
            $("#selectViewForm").find("[name=content]").html(res.data.board.content);
            $("#selectViewForm").find("[name=userId]").html(res.data.board.userId);
            $("#selectViewForm").find("[name=writeDate]").html(res.data.board.writeDate);
            $("#selectViewForm").find("[name=name]").html(res.data.board.name);
            
        } else {
            overlay.hide();
        }

    }
};

$(document).ready(function() {

    $(".alert.alert-danger").hide(true);
    $("#onModify").hide(true);
    $("#onDelete").hide(true);

    $("link[href*='/bootstrap/thema/fico2000/assets/plugins/sky-forms-pro/skyforms/css/sky-forms.css']").remove();
    $("link[href*='/bootstrap/thema/fico2000/assets/plugins/sky-forms-pro/skyforms/custom/custom-sky-forms.css']").remove();
    $("link[href*='/bootstrap/thema/fico2000/assets/css/admin/custom-admin.css']").remove();
    $("link[href*='/bootstrap/thema/fico2000/js/app/adm/ADM01000M00Component.css']").remove();
    
    $('head').append( $('<link rel="stylesheet" type="text/css" />').attr('href', '/bootstrap/thema/fico2000/assets/plugins/sky-forms-pro/skyforms/css/sky-forms.css') );
    $('head').append( $('<link rel="stylesheet" type="text/css" />').attr('href', '/bootstrap/thema/fico2000/assets/plugins/sky-forms-pro/skyforms/custom/custom-sky-forms.css') );
    $('head').append( $('<link rel="stylesheet" type="text/css" />').attr('href', '/bootstrap/thema/fico2000/assets/css/admin/custom-admin.css') );
    $('head').append( $('<link rel="stylesheet" type="text/css" />').attr('href', '/bootstrap/thema/fico2000/js/app/adm/ADM01000M00Component.css') );

    CMU03000M02.ngOnInit();

    $("#onListView").click(function(){
        CMU03000M02.onGoList();
    });

    $("#onDelete").click(function(){
        bootbox.confirm("삭제하시겠습니까 ?", function(result){ if (result) { CMU03000M02.onDelete(); } });
    });

    $("#onModify").click(function(){
        CMU03000M02.onModify();
    });
    
});


