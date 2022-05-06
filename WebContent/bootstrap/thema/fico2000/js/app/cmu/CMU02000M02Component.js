var CMU02000M02 = new CMU02000M02Component();

var boardCode = 'FAS900206'; //자유게시판

var uploadObj = {};

var boardService = new BoardMngService(true);

var userService = new UserService(false);

var list = [];

var replyBoard = {};

function CMU02000M02Component() {

};

function onReplyModify(mainNo, replyNo) {
    var code = boardCode;
    var mainNo = mainNo;
    
    var res = boardMngService.getBoardInfo(code, mainNo, CMU02000M02.boardReplyCallback);

    console.log("$$$$ >>> ", res);
};

function onReplyDelete(mainNo, replyNo) {

    bootbox.confirm("삭제하시겠습니까 ?", function(result){
            if (result) {
                console.log(result);
                 CMU02000M02.onReplyDel(mainNo, replyNo);
            } 
        });

};


CMU02000M02Component.prototype.ngOnInit = function () {
    CMU02000M02.onSearch();
};

CMU02000M02Component.prototype.onSearch = function () {
    var code = $("#code").val();
    var mainNo = $("#mainNo").val();
    overlay.show();
    var res = boardMngService.getBoardInfo(code, mainNo, CMU02000M02.boardCallback);
};

CMU02000M02Component.prototype.onReplyList = function () {

    overlay.show();

    var code = $("#code").val();
    var mainNo = $("#mainNo").val();

    var res = boardMngService.getBoardReplyList(code, mainNo, CMU02000M02.replyCallback);

};

CMU02000M02Component.prototype.onDelete = function () {

    var selectedBoard = {
         code:boardCode
        ,mainNo:$("#mainNo").val()
    };

    var res = boardService.delBoard(selectedBoard, CMU02000M02.callback);

};

CMU02000M02Component.prototype.onGoList = function () {
    toMove('CMU02000M00');
};

CMU02000M02Component.prototype.onModify = function () {
    var params = '"code='+boardCode+'*mainNo='+$("#mainNo").val()+'"';
    toMove('CMU02000M03',params);
};

CMU02000M02Component.prototype.onRelpySave = function () {

    console.log("selectedReplyBoards_content >>> ", $("#selectedReplyBoards_content").val());

    if ($("#selectedReplyBoards_content").val() == null || $("#selectedReplyBoards_content").val() == undefined || $("#selectedReplyBoards_content").val() == '')  {
        $(".alert.alert-danger").show();
        $("#errRegMsg").html("등록할 내용이 없습니다.");
        return;
    }

    overlay.show();
    
    var mainNo = $("#mainNo").val();

    var selBoard = {
        code: boardCode
        ,title: "자유게시판댓글"
        ,content:$("#selectedReplyBoards_content").val()
        ,delYn:'N'
        ,depth:0
        ,replyNo:mainNo
        ,relNo:0
        ,mainNo:0
    };

    console.log('replyBoard >>> ', replyBoard);

    if (replyBoard != null && replyBoard != undefined && replyBoard != {}) {
        if (replyBoard.mainNo) {
            if (replyBoard.mainNo != 0) {
                selBoard.mainNo =    replyBoard.mainNo;
                selBoard.relNo =  replyBoard.relNo;
                selBoard.depth =  replyBoard.depth;
                selBoard.title =  replyBoard.title;

                var res = boardMngService.updBoard(selBoard, CMU02000M02.replySaveCallback);        
            } else {
                var res = boardMngService.saveBoard(selBoard, CMU02000M02.replySaveCallback);
            }
        } else {
            var res = boardMngService.saveBoard(selBoard, CMU02000M02.replySaveCallback);    
        }
    } else {
        var res = boardMngService.saveBoard(selBoard, CMU02000M02.replySaveCallback);
    } 
};

CMU02000M02Component.prototype.onReplyDel = function (mainNo, replyNo) {

    overlay.show();

    var selectedBoard = {
         code:boardCode
        ,mainNo:mainNo
        ,replyNo:replyNo
    };

    var res = boardService.delBoardMng(selectedBoard, CMU02000M02.replySaveCallback);

};

CMU02000M02Component.prototype.onRelpyCancle = function () {
    replyBoard = {};
    $("#selectedReplyBoards_content").val('');

};

CMU02000M02Component.prototype.callback = function(data) {

    console.log('request >>' , data);

    if (data != null) {
        console.log("board ajax >>> " , data);
        var res = JSON.parse(data);

        if (res.success==true) { 
            overlay.hide();
            console.log('성공');
            console.log(res);
            bootbox.alert(res.msg,function(){
                CMU02000M02.onGoList();
            });
        } else {
            overlay.hide();
        }

    }
};

CMU02000M02Component.prototype.boardCallback = function(data) {

    overlay.hide();

    console.log('request >>' , data);

    if (data != null) {
        console.log("board ajax >>> " , data);
        var res = JSON.parse(data);

        if (res.success==true) { 

            console.log('성공');
            console.log(res);
            
            $("#selectViewForm").find("[name=code]").val(res.data.board.code);
            $("#selectViewForm").find("[name=mainNo]").val(res.data.board.mainNo);
            $("#selectViewForm").find("[name=replyNo]").val(res.data.board.replyNo);
            $("#selectViewForm").find("[name=relNo]").val(res.data.board.relNo);
            $("#selectViewForm").find("[name=title]").html(res.data.board.title);
            $("#selectViewForm").find("[name=content]").html(res.data.board.content);
            $("#selectViewForm").find("[name=userId]").html(res.data.board.userId);
            $("#selectViewForm").find("[name=writeDate]").html(res.data.board.writeDate);
            $("#selectViewForm").find("[name=name]").html(res.data.board.name);
            
            CMU02000M02.onReplyList();
            
        } else {
            overlay.hide();
        }

    }
};

CMU02000M02Component.prototype.boardReplyCallback = function(data) {

    overlay.hide();

    console.log('request >>' , data);

    replyBoard = {};

    if (data != null) {
        console.log("board ajax >>> " , data);
        var res = JSON.parse(data);

        if (res.success==true) { 

            console.log('성공');
            console.log(res);
            
            replyBoard = {
                 code: res.data.board.code
                ,mainNo: res.data.board.mainNo
                ,replyNo: res.data.board.replyNo
                ,relNo: res.data.board.relNo
                ,title: res.data.board.title
                ,content: res.data.board.content
                ,userId: res.data.board.userId
                ,writeDate: res.data.board.writeDate
                ,name: res.data.board.name
            };

            $("#selectedReplyBoards_content").val(res.data.board.content);

            overlay.hide();
            
        } else {
            overlay.hide();
        }

    }

};

CMU02000M02Component.prototype.replyCallback = function(data) {
    console.log(data);
    console.log('request >>' , data);

    if (data != null) {
        console.log("board ajax >>> " , data);
        var res = JSON.parse(data);

        if (res.success==true) { 
            overlay.hide();
            console.log('성공');
            console.log(res);

            var replyList = res.data.list1;

            if (res.data.list1Size > 0) {

                list = replyList;

                var replyContent = '';
                
                 for (var i = 0; i < res.data.list1Size; i++) {
                    var data = replyList[i];
                    console.log(data);

                    var user = userService.getSessionInfo({});

                    replyContent += '<div class="media pad-btm" style="overflow:visible;">';
                    replyContent += '<a class="media-left" href="#"><img class="img-circle img-xs" alt="Profile Picture" src="/bootstrap/thema/fico2000/img/profile-photos/'+data.imgUrl+'"></a>';
                    replyContent += '<div class="media-right">';
                    replyContent += '<div class="btn-group">';
                    replyContent += '<button style="border:0 none;" class="dropdown-toggle btn" data-toggle="dropdown" aria-expanded="false"><i class="caret"></i></button>';
                    replyContent += '<ul class="dropdown-menu dropdown-menu-right">';
                    if (data.userId == user.data.userInfo.userId) {
                        replyContent += '<li><a onClick="onReplyModify('+data.mainNo+', '+data.replyNo+')">수정</a></li>';
                        replyContent += '<li><a onClick="onReplyDelete('+data.mainNo+', '+data.replyNo+')">삭제</a></li>';
                    }
                    replyContent += '</ul>';
                    replyContent += '</div>';
                    replyContent += '</div>';
                    replyContent += '<div class="media-body">';
                    replyContent += '<div>';
                    replyContent += '<a href="#" class="btn-link text-semibold media-heading box-inline">'+data.name+' 님</a>';
                    replyContent += '<small class="text-muted pad-lft">'+data.writeDate+'</small>';
                    replyContent += '</div>';
                    replyContent += data.content;
                    replyContent += '</div>';
                    replyContent += '</div>';   

                 }

                 $("#replyContent").html(replyContent);
                 $("#replyView").show();
            }
        }

         overlay.hide();

    } else {
      overlay.hide();
    }

};

CMU02000M02Component.prototype.replySaveCallback = function(data) {
    console.log(data);

    console.log('request >>' , data);

    if (data != null) {
        console.log("board ajax >>> " , data);
        var res = JSON.parse(data);

        if (res.success==true) { 
            overlay.hide();
            console.log('성공');
            console.log(res);

            $("#selectedReplyBoards_content").val('');
            replyBoard = {};

            CMU02000M02.onReplyList();
        }

    } else {
            overlay.hide();
    }

};

$(document).ready(function() {

    $(".alert.alert-danger").hide(true);
    $("#replyView").hide(true);

    $("link[href*='/bootstrap/thema/fico2000/assets/plugins/sky-forms-pro/skyforms/css/sky-forms.css']").remove();
    $("link[href*='/bootstrap/thema/fico2000/assets/plugins/sky-forms-pro/skyforms/custom/custom-sky-forms.css']").remove();
    $("link[href*='/bootstrap/thema/fico2000/assets/css/admin/custom-admin.css']").remove();
    $("link[href*='/bootstrap/thema/fico2000/js/app/adm/ADM01000M00Component.css']").remove();
    
    $('head').append( $('<link rel="stylesheet" type="text/css" />').attr('href', '/bootstrap/thema/fico2000/assets/plugins/sky-forms-pro/skyforms/css/sky-forms.css') );
    $('head').append( $('<link rel="stylesheet" type="text/css" />').attr('href', '/bootstrap/thema/fico2000/assets/plugins/sky-forms-pro/skyforms/custom/custom-sky-forms.css') );
    $('head').append( $('<link rel="stylesheet" type="text/css" />').attr('href', '/bootstrap/thema/fico2000/assets/css/admin/custom-admin.css') );
    $('head').append( $('<link rel="stylesheet" type="text/css" />').attr('href', '/bootstrap/thema/fico2000/js/app/adm/ADM01000M00Component.css') );

    CMU02000M02.ngOnInit();

    $("#onListView").click(function(){
        CMU02000M02.onGoList();
    });

    $("#onDelete").click(function(){
        bootbox.confirm("삭제하시겠습니까 ?", function(result){ if (result) { CMU02000M02.onDelete(); } });
    });

    $("#onModify").click(function(){
        CMU02000M02.onModify();
    });

    $("#onRelpySave").click(function(){
        CMU02000M02.onRelpySave();
    });

    $("#onRelpyCancle").click(function(){
        CMU02000M02.onRelpyCancle();
    });
    
});

