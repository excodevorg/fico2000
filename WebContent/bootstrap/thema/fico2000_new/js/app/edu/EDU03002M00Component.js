var EDU03002M00 = new EDU03002M00Component();

var boardMngService = new BoardMngService(true);

var faqcode='FAS900208'; //FAQ
var code='FAS900207'; //강의게시판  

var faqMdfc = false;

function EDU03002M00Component() {

};

EDU03002M00Component.prototype.ngOnInit = function () {

    console.log("EDU03002M00 Initial");

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

    EDU03002M00.onNoticeBoard();
    EDU03002M00.onFaqBoard();

};

EDU03002M00Component.prototype.onNoticeBoard = function () {

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

EDU03002M00Component.prototype.onFaqBoard = function () {

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

$(document).ready(function() {

    $("link[href*='/bootstrap/thema/fico2000/assets/plugins/sky-forms-pro/skyforms/css/sky-forms.css']").remove();
    $("link[href*='/bootstrap/thema/fico2000/assets/plugins/sky-forms-pro/skyforms/custom/custom-sky-forms.css']").remove();
    $("link[href*='/bootstrap/thema/fico2000/assets/css/admin/custom-admin.css']").remove();
    $("link[href*='/bootstrap/thema/fico2000/js/app/adm/ADM01000M00Component.css']").remove();
    
    $('head').append( $('<link rel="stylesheet" type="text/css" />').attr('href', '/bootstrap/thema/fico2000/assets/css/admin/custom-admin.css') );    

    EDU03002M00.ngOnInit();

    $("#goEduView").click(function() {
        toMove('EDU03000M00');
    });
});