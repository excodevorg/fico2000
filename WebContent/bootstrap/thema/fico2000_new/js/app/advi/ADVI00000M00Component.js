"use strict"

var ADVI00000M00 = new ADVI00000M00Component();
var duplicateShield = false // 중복방지 

var userService = new UserService(false);

var boardService = new BoardMngService(true);

function ADVI00000M00Component() {

};


ADVI00000M00Component.prototype.ngOnInit = function () {

};

ADVI00000M00Component.prototype.sendMessage = function () {

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

    var res = boardService.saveBoard(selectedBoard, ADVI00000M00.callback);

};

ADVI00000M00Component.prototype.callback = function(data) {

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

$(document).ready(function() {
    	

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
                        ADVI00000M00.sendMessage();
                    }
                }
            }
        }

    });
        
});