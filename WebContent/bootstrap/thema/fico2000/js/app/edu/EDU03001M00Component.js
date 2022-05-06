var EDU03001M00 = new EDU03001M00Component();

var boardMngService = new BoardMngService(true);

var faqcode='FAS900208'; //FAQ
var code='FAS900207'; //강의게시판  

var faqMdfc = false;

function EDU03001M00Component() {

};

EDU03001M00Component.prototype.ngOnInit = function () {

    console.log("EDU03001M00 Initial");

    $(".alert.alert-danger").hide(true);

    console.log(eduCom);

    $("#lcteNm").html(eduCom.lcteNm);
    $("#lcteYmd").html(eduCom.lcteYmd);
    $("#lcteCon").html(eduCom.lcteCon);
    $("#atlcNmprCnt").html(eduCom.atlcNmprCnt);

    $('#rec-content').summernote({
        height:250,
        lang: 'ko-KR' // default: 'en-US'
    });

    $('#rec-content1').summernote({
        height:250,
        lang: 'ko-KR' // default: 'en-US'
    });

    $("#grid-file-list").bootgrid({
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

            limit = 100000; 
            pageNo = 1;

            var params = {
                fileBscNo:eduCom.flapMngmNo,
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

            overlay.hide();

            /* To accumulate custom parameter with the request object */
            return boardData;
        },
        url: "/cmmn/fileList.do",
        selection: true,
        rowSelect: true,
        navigation: 0
    }).on("click.rs.jquery.bootgrid", function(e, columns, rows){
        window.location.href='/cmmn/fileDownload.do?fileBscNo='+rows.flapMngmNo+'&fileDtlNo='+rows.flapDtlSrn;
    }); 

    $("#writeYn").hide(true);
    $("#viewYn").hide(true);
    $("#mdfcYn").hide(true);
    $("#listYn").show();

    faqMdfc = false;

    EDU03001M00.onNoticeBoard();
    EDU03001M00.onFaqBoard();

};

EDU03001M00Component.prototype.onNoticeBoard = function () {

    $("#noticeBoard").bootgrid({
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

            limit = 100000; 
            pageNo = 1;
            
            var params = {
                lcteUnqId : eduCom.lcteUnqId,
                code : 'FAS900207',
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
        url: "/com/BoardLcteAllList.do",
        selection: true,
        rowSelect: true,
        navigation: 0
    }).on("click.rs.jquery.bootgrid", function(e, columns, rows){

        console.log(rows);

        var messagMap = boardMngService.getPopUpContent(rows);
        console.log(messagMap);

        //Count
        boardMngService.getBoardInfo(rows.code, rows.mainNo);

        var dialog = bootbox.dialog({
                             title: rows.title,
                             size: 'large',
                             message: messagMap.message,
                             closeButton: true
        });


    });

};

EDU03001M00Component.prototype.onFaqBoard = function () {

    $("#faqBoard").bootgrid({
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

            limit = 100000; 
            pageNo = 1;
            
            var params = {
                lcteUnqId : eduCom.lcteUnqId,
                code : 'FAS900208',
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
        url: "/com/BoardLcteUserAllList.do",
        selection: true,
        rowSelect: true,
        navigation: 0,
        formatters: {
            "titleTypeRenderer": function(column, row)
            {
                console.log(row.mainNo);
                console.log(row.relNo);
                var title = row.title;
                if (row.mainNo != row.relNo) {
                    title = "&nbsp;<img src='/bootstrap/thema/fico2000/img/reply_arrow.png' width='16' height='16'/>&nbsp;" + title
                } 

                return title;
            }
        }
    }).on("click.rs.jquery.bootgrid", function(e, columns, rows){

        faqMdfc = false;
        overlay.show();

        var res = boardMngService.getBoardInfo(rows.code, rows.mainNo, EDU03001M00.boardCallback);
    });


};

EDU03001M00Component.prototype.onWrite = function () {

    $("#writeYn").show();
    $("#viewYn").hide(true);
    $("#mdfcYn").hide(true);
    $("#listYn").hide(true);

};

EDU03001M00Component.prototype.onModify = function () {

    faqMdfc = true;

    overlay.show();

    $("#ngForm1").find("[name=code]").val($("#selectViewForm").find("[name=code]").val());
    $("#ngForm1").find("[name=mainNo]").val($("#selectViewForm").find("[name=mainNo]").val());
    $("#ngForm1").find("[name=lcteUnqId]").val($("#selectViewForm").find("[name=lcteUnqId]").val());
    $("#ngForm1").find("[name=name]").val($("#selectViewForm").find("[name=name]").html());
    $("#ngForm1").find("[name=userId]").val($("#selectViewForm").find("[name=userId]").html());
    $("#ngForm1").find("[name=writeDate]").val($("#selectViewForm").find("[name=writeDate]").html());
    $("#ngForm1").find("[name=title]").val($("#selectViewForm").find("[name=title]").html());
    
    $("#ngForm1").find("[name=replyNo]").val($("#selectViewForm").find("[name=replyNo]").val());
    $("#ngForm1").find("[name=relNo]").val($("#selectViewForm").find("[name=relNo]").val());

    $('#rec-content1').summernote('code',$("#selectViewForm").find("[name=content]").html());

    $("#writeYn").hide(true);
    $("#viewYn").hide(true);
    $("#mdfcYn").show();
    $("#listYn").hide(true);
    
    overlay.hide();


};

EDU03001M00Component.prototype.onSave = function () {

    console.log("========= onSave ======== ", $("#ngForm").find("[name=title]").val());


    if ($("#ngForm").find("[name=title]").val() == null || $("#ngForm").find("[name=title]").val() == '' || $("#ngForm").find("[name=title]").val() == undefined) {
        $(".alert.alert-danger").show();
        $("#errRegMsg").html("제목을 입력하세요");
        return;
    }

    overlay.show();

    var content = $('#rec-content').summernote('code');

    console.log("content >>> " , content);


    var selectedBoard = {
         code:faqcode
        ,mainNo:0
        ,lcteUnqId:eduCom.lcteUnqId
        ,title:$("#ngForm").find("[name=title]").val()
        ,content:content
        ,count:0
        ,delYn:'N'
    };

    var res = boardMngService.saveBoard(selectedBoard, EDU03001M00.callback);


}; 

EDU03001M00Component.prototype.onFaqModifySave = function () {

    if ($("#ngForm1").find("[name=title]").val() == null || $("#ngForm1").find("[name=title]").val() == '' || $("#ngForm1").find("[name=title]").val() == undefined) {
        $(".alert.alert-danger").show();
        $("#errRegMsg").html("제목을 입력하세요");
        return;
    }

    overlay.show();

    var content = $('#rec-content1').summernote('code');

    console.log("content >>> " , content);

    var selectedBoard = {
         code:faqcode
        ,mainNo:$("#ngForm1").find("[name=mainNo]").val()
        ,lcteUnqId:$("#ngForm1").find("[name=lcteUnqId]").val()
        ,title:$("#ngForm1").find("[name=title]").val()
        ,name:$("#ngForm1").find("[name=name]").val()
        ,userId:$("#ngForm1").find("[name=userId]").val()
        ,writeDate:$("#ngForm1").find("[name=writeDate]").val()
        ,replyNo:$("#ngForm1").find("[name=replyNo]").val()
        ,relNo:$("#ngForm1").find("[name=relNo]").val()
        ,content:content
        ,delYn:'N'
    };

    var res = boardMngService.updBoard(selectedBoard, EDU03001M00.callback);    

};

EDU03001M00Component.prototype.callback = function(data) {

    console.log('request >>' , data);

    if (data != null) {
        console.log("board ajax >>> " , data);
        var res = JSON.parse(data);

        if (res.success==true) { 
            overlay.hide();
            console.log('성공');
            console.log(res);
            bootbox.alert(res.msg,function(){
                
                $(".alert.alert-danger").hide(true);

                $("#faqBoard").bootgrid('destroy');

                EDU03001M00.onFaqBoard();

                $("#writeYn").hide(true);
                $("#viewYn").hide(true);
                $("#mdfcYn").hide(true);
                $("#listYn").show();

                $('#rec-content').summernote('code', '');
                $('#rec-content1').summernote('code', '');

                $("#ngForm").each(function() {  
                    this.reset();  
                });

                $("#ngForm1").each(function() {  
                    this.reset();  
                });

            });
        } else {
            overlay.hide();
            bootbox.alert(res.msg);
        }

    }
};

EDU03001M00Component.prototype.onFaqDelete = function() {

    var selectedBoard = {
         code:faqcode
        ,mainNo:$("#selectViewForm").find("[name=mainNo]").val()
        ,lcteUnqId:$("#selectViewForm").find("[name=lcteUnqId]").val()
        ,delYn:'Y'
    };

    var res = boardMngService.delBoard(selectedBoard, EDU03001M00.callback);

};

EDU03001M00Component.prototype.boardCallback = function(data) {

    console.log('request >>' , data);

    if (data != null) {
        console.log("board ajax >>> " , data);
        var res = JSON.parse(data);

        if (res.success==true) { 
            console.log('성공');
            console.log(res);
            
            if (!faqMdfc) {
                $("#selectViewForm").find("[name=code]").val(res.data.board.code);
                $("#selectViewForm").find("[name=mainNo]").val(res.data.board.mainNo);
                $("#selectViewForm").find("[name=lcteUnqId]").val(res.data.board.lcteUnqId);
                $("#selectViewForm").find("[name=name]").html(res.data.board.name);
                $("#selectViewForm").find("[name=userId]").html(res.data.board.userId);
                $("#selectViewForm").find("[name=writeDate]").html(res.data.board.writeDate);
                $("#selectViewForm").find("[name=title]").html(res.data.board.title);
                $("#selectViewForm").find("[name=content]").html(res.data.board.content);

                $("#selectViewForm").find("[name=replyNo]").val(res.data.board.replyNo);
                $("#selectViewForm").find("[name=relNo]").val(res.data.board.relNo);


                if (res.data.board.relNo != res.data.board.mainNo) {
                    $("#onFaqDelete").hide(true);
                    $("#onFaqModify").hide(true);
                } else {
                    $("#onFaqDelete").show();
                    $("#onFaqModify").show();
                }

                $("#writeYn").hide(true);
                $("#viewYn").show();
                $("#mdfcYn").hide(true);
                $("#listYn").hide(true);
            } 

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

    EDU03001M00.ngOnInit();

    $("#onWrite").click(function(){
        EDU03001M00.onWrite();
    });

    $("#onSave").click(function(){
        bootbox.confirm("저장하시겠습니까 ?", function(result){ if (result) {EDU03001M00.onSave(); }});
    });

    $("#onFaqModify").click(function(){
        EDU03001M00.onModify();
    });

    $("#onFaqModifySave").click(function(){
        bootbox.confirm("변경사항을 저장하시겠습니까 ?", function(result){ if (result) { EDU03001M00.onFaqModifySave(); }});
    });    

    $("#onFaqDelete").click(function(){
        bootbox.confirm("삭제하시겠습니까 ?", function(result){ if (result) {EDU03001M00.onFaqDelete(); }});
    });    
    

    $("#onListView").click(function(){

        $("#faqBoard").bootgrid('destroy');

        EDU03001M00.onFaqBoard();

        $("#writeYn").hide(true);
        $("#viewYn").hide(true);
        $("#mdfcYn").hide(true);
        $("#listYn").show();

    });

    $("#onWriteView").click(function(){

        $("#faqBoard").bootgrid('destroy');

        EDU03001M00.onFaqBoard();

        $("#writeYn").hide(true);
        $("#viewYn").hide(true);
        $("#mdfcYn").hide(true);
        $("#listYn").show();

    });

    $("#onMdfcView").click(function(){

        $("#faqBoard").bootgrid('destroy');

        EDU03001M00.onFaqBoard();

        $("#writeYn").hide(true);
        $("#viewYn").hide(true);
        $("#mdfcYn").hide(true);
        $("#listYn").show();

    });

    $("#goEduView").click(function() {
        toMove('EDU03000M00');
    });

});