var DTA01000M01 = new DTA01000M01Component();

var boardCode = 'FAS900203';

var boardMngService = new BoardMngService(true);

function DTA01000M01Component() {

};

DTA01000M01Component.prototype.ngOnInit = function () {
    DTA01000M01.onSearch();
};

DTA01000M01Component.prototype.onSearch = function () {

    overlay.show();

    var code = $("#code").val();
    var mainNo = $("#mainNo").val();
    
    var res = boardMngService.getBoardInfo(code, mainNo, DTA01000M01.callback);

};

DTA01000M01Component.prototype.callback = function (data) {

    if (data != null) {
        console.log("board ajax >>> " , data);
        var res = JSON.parse(data);

        if (res.success==true) { 
            console.log('성공');
            console.log(res);

            $("#name").html(res.data.board.name);
            $("#userId").html(res.data.board.userId);
            $("#writeDate").html(res.data.board.writeDate);
            $("#content").html(res.data.board.content);

            var flapMngmNo = res.data.board.flapMngmNo;
            var res = fileService.getFileList(flapMngmNo);

            var fileList = res.data.list1;

            //첨부파일
            var message = '';
            if (fileList != null && fileList.length > 0) {
                for (var i = 0; i < fileList.length; i++) {
                    console.log('Message File >> ', fileList[i]);
                    var fileUrl = '/cmmn/fileDownload.do?fileBscNo=' + fileList[i].flapMngmNo + '&fileDtlNo=' + fileList[i].flapDtlSrn;
                    if (i != 0) message += ", "
                    message += '<a href="' + fileUrl + '">';
                    message += fileList[i].flapMngFileOrgNm;
                    message += '</a>';
                }
            }
            if (fileList != null && fileList.length > 0) {
                message += '<i class="demo-psi-paperclip icon-fw"></i>';
            }

            $("#flapMngFileOrgNm").html(message);

            overlay.hide();
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
    
    $('head').append( $('<link rel="stylesheet" type="text/css" />').attr('href', '/bootstrap/thema/fico2000/assets/css/admin/custom-admin.css') );  

    DTA01000M01.ngOnInit();
});
