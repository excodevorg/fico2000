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
                        
            var txt = '<div class="list-item" onClick=viewBoard("'+board.code+'","'+board.mainNo+'")><div class="singleline">'+board.title+'</div><div class="listDate">'+board.writeDate+'</div></div>';           
            $("#notiBoard").append(txt);
        }
    }  

}

$(document).ready(function() {
    	
    var notiBoardList = new BoardMngService(true);
    notiBoardList.getBoardNewsAndLcteList('','',0,MAIN00000M00.boardCallBack);
    
    // $('.engine_on').hide();
    // $('.main-engine-banner').mouseover(function(e) {
    // 	 $('.engine_off').hide();
    // 	 $('.engine_on').show();
    // })
    // $('.main-engine-banner').mouseout(function(e) {
    // 	$('.engine_on').hide();
   	//  $('.engine_off').show();
    // })
        
});