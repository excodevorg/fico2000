"use strict"

var MAIN00000M00 = new MAIN00000M00Component();
var duplicateShield = false // 중복방지 

var userService = new UserService(false);

var boardService = new BoardMngService(true);

function MAIN00000M00Component() {

};

function goNavi(gb) { 
        
        console.log(gb);

        if (gb == '1') {
            toMove('EDU00000M00');
        } else if (gb == '2') {
            toMove('FIN00000M00');
        } else if (gb == '3') {
            toMove('CMU00000M00');
        } else if (gb == '4') {
            toMove('DTA03000M00');
        }

};

function viewBoard(code, mainNo) {

    var res = boardService.getBoardInfo(code, mainNo);
    console.log('viewBoard res >>> ', resultData.data.board);

    var board = resultData.data.board;

    if (board) {

        var messagMap = boardService.getPopUpContent(board);
        console.log(messagMap);

        var dialog = bootbox.dialog({
                             title: board.title,
                             size: 'large',
                             message: messagMap.message,
                             closeButton: true
        });
    }
};

MAIN00000M00Component.prototype.ngOnInit = function () {

};

MAIN00000M00Component.prototype.sendMessage = function () {

    var code = "FAS900205"; //Business Platform 게시판
    overlay.show();
    var content = $('#summernote').summernote('code');

    var selectedBoard = {
         code:code
        ,mainNo:0
        ,title:$("#title").val()
        ,content:content
        ,count:0
        ,hpno:$("#hpno").val()
        ,delYn:'N'
    };

    var res = boardService.saveBoard(selectedBoard, MAIN00000M00.callback);

};

MAIN00000M00Component.prototype.callback = function(data) {

    console.log('request >>' , data);

    if (data != null) {
        console.log("board ajax >>> " , data);
        var res = JSON.parse(data);

        if (res.success==true) { 
            overlay.hide();
            console.log('성공');
            console.log(res);
            bootbox.alert(res.msg + ' Business Platform메뉴로 이동합니다.',function(){
                toMove('CMU03000M00');
            });
        } else {
            overlay.hide();
        }

    }
};

MAIN00000M00Component.prototype.boardCallBack = function(data) {

    var responseData = JSON.parse(data);
    console.log(responseData);
            
    if (responseData.success) {
        var size = responseData.data.list1.length;
        for (var i = 0; i < size; i++) {
            var board = responseData.data.list1[i];
            console.log(i, board);
                        
            var txt = "<tr><td><a onClick=\"viewBoard('"+board.code+"','"+board.mainNo+"')\" class=\"btn-link\">"+board.title+"</a></td><td><span class=\"text-muted\"><i class=\"fa fa-clock-o\"></i>"+board.writeDate+"</span></td></tr>";
                        
            $("#notiBoard tbody").append(txt);
        }
    }  

}

$(document).ready(function() {
    	
    var notiBoardList = new BoardMngService(true);
    notiBoardList.getBoardList('FAS900201','','',MAIN00000M00.boardCallBack);

    $('#summernote').summernote({
        height:150,
        toolbar:false,
        placeholder: '당신의 Business 고민을 말씀해 주세요',
    });

    $('#sendMessage').click(function(){

        var user = userService.getSessionInfo({});
        var title = $("#title").val();
        var hpno = $("#hpno").val();

        console.log(user.data);

        if (!user.data) {
            bootbox.alert('로그인 후 사용이 가능 합니다.');
        } else {
            if (user.data.userInfo.userId == null || user.data.userInfo.userId == undefined || user.data.userInfo.userId == '') {
                bootbox.alert('로그인 후 사용이 가능 합니다.');                
            } else {
                if (title == null || title == '') {
                    bootbox.alert('제목을 입력하셔야 합니다.');
                } else {
                    if (hpno == null || hpno == '') {
                        bootbox.alert('연락처를 입력하셔야 합니다.');
                    } else {
                        MAIN00000M00.sendMessage();
                    }
                }
            }
        }

    });
        
});