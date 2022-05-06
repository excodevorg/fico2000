var ADM04004M00 = new ADM04004M00Component();

var boardService = new BoardMngService(true);

var boardCode = 'FAS900208'; //강의게시판

function ADM04004M00Component() {

};

ADM04004M00Component.prototype.ngOnInit = function () {

    
    var res = lectureService.getAllLectures(0);
    
    if (res.success) {
        console.log(res);

        var optionsArr = [];

        $.each(res.data.list1, function(i, option) {
            optionsArr[i] = "<option value='" + option.value + "'>" + option.name + "</option>";
        });

        console.log(optionsArr);

        $('#selectLcteUnqId').append(optionsArr.join(''));
    }

    $("#grid-list").bootgrid();

    $('#rec-content').summernote({
        height:250,
        lang: 'ko-KR' // default: 'en-US'
    });

    $("#onReplyWriteSave").hide(true);
    $("#onModify").hide(true);
    $("#onDel").hide(true);
    $("#onReplyWrite").hide(true);

};

ADM04004M00Component.prototype.onChange = function () {
    ADM04004M00.onSearch();
};

ADM04004M00Component.prototype.onSearch = function () {

    $(".alert.alert-danger").hide(true);

    if ($("#selectLcteUnqId").val() == null || $("#selectLcteUnqId").val() == '') {
        $(".alert.alert-danger").show();
        $("#errRegMsg").html("강의명을 선택하세요");
        return;
    }

    $("#ngForm").each(function() {  
        this.reset();  
    });

    $('#rec-content').summernote('code','');

    $("#grid-list").bootgrid("destroy");

    var lcteUnqId = $('#selectLcteUnqId').val();

    $("#onReplyWriteSave").hide(true);
    $("#onModify").hide(true);
    $("#onDel").hide(true);
    $("#onReplyWrite").hide(true);

    overlay.show();

   $("#grid-list").bootgrid({
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

            if (limit < 0) {
                limit = 100000; 
                pageNo = 1;
            } 

            var params = {
                code : boardCode,
                lcteUnqId:$("#selectLcteUnqId").val(),
                title : request.searchPhrase,
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

            overlay.hide();

            return boardData;
        },
        url: "/adm/BoardMngLcteList.do",
        selection: true,
        rowSelect: true,
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

        $(".alert.alert-danger").hide(true);

        try {

            $("#lcteUnqId").val(rows.lcteUnqId);
            $("#code").val(boardCode);
            $("#mainNo").val(rows.mainNo);
            $("#relNo").val(rows.relNo);
            $("#title").val(rows.title);
            $('#rec-content').summernote('destroy');

            $('#rec-content').summernote({
                height:250,
                lang: 'ko-KR' // default: 'en-US'
            }); 

            $('#rec-content').summernote('code', rows.content); 


            $("#onReplyWriteSave").hide(true);
            $("#onModify").show();
            $("#onDel").show();
            $("#onReplyWrite").show();
            

        } catch(e) {

        }

    });


};

ADM04004M00Component.prototype.onReplyWrite = function() {

    $("#relNo").val($("#mainNo").val());
    $("#mainNo").val(0);

    $("#onReplyWriteSave").show();
    $("#onModify").hide(true);
    $("#onDel").hide(true);
    $("#onReplyWrite").hide(true);

    var content = '---------------------------------------------------------------------------<br/>'; 
    content += '제 목 : ' + $("#title").val() + '<br/>';
    content += '내 용 ' + '<br/>';
    content += $('#rec-content').summernote('code') + "<br/>";
    content += '---------------------------------------------------------------------------<br/>'; 
    
    $("#title").val('');
    $('#rec-content').summernote('code', content);


};


ADM04004M00Component.prototype.onReplyWriteSave = function() {

    if ($("#title").val() == null || $("#title").val() == '' || $("#title").val() == undefined) {
        $(".alert.alert-danger").show();
        $("#errRegMsg").html("제목을 입력하세요");
        return;
    }

    var content = $('#rec-content').summernote('code');

    var selectedBoard = {
         code:$("#code").val()
        ,mainNo:$("#mainNo").val()
        ,lcteUnqId:$("#lcteUnqId").val()
        ,title:$("#title").val()
        ,name:$("#name").val()
        ,replyNo:$("#replyNo").val()
        ,relNo:$("#relNo").val()
        ,content:content
        ,delYn:'N'
    };

    boardService.saveBoardMng(selectedBoard, ADM04004M00.callback);

};

ADM04004M00Component.prototype.onModify = function() {
    if ($("#title").val() == null || $("#title").val() == '' || $("#title").val() == undefined) {
        $(".alert.alert-danger").show();
        $("#errRegMsg").html("제목을 입력하세요");
        return;
    }

    var content = $('#rec-content').summernote('code');

    var selectedBoard = {
         code:$("#code").val()
        ,mainNo:$("#mainNo").val()
        ,lcteUnqId:$("#lcteUnqId").val()
        ,title:$("#title").val()
        ,name:$("#name").val()
        ,replyNo:$("#replyNo").val()
        ,relNo:$("#relNo").val()
        ,content:content
        ,delYn:'N'
    };    

    boardService.updBoardMng(selectedBoard, ADM04004M00.callback);
};

ADM04004M00Component.prototype.onDel = function() {

    var selectedBoard = {
         code:$("#code").val()
        ,mainNo:$("#mainNo").val()
        ,lcteUnqId:$("#lcteUnqId").val()
        ,replyNo:$("#replyNo").val()
        ,relNo:$("#relNo").val()
        ,delYn:'Y'
    };  

    boardService.delBoardMng(selectedBoard, ADM04004M00.callback);
};

ADM04004M00Component.prototype.callback = function(data) {

    console.log('request >>' , data);

    if (data != null) {
        console.log("board ajax >>> " , data);
        var res = JSON.parse(data);
        console.log("res ==> " , res);
        if (res.success==true) { 
            overlay.hide();
            console.log('성공');
            console.log(res);
            bootbox.alert(res.msg,function(){
                
                $(".alert.alert-danger").hide(true);

                $("#grid-list").bootgrid('destroy');

                ADM04004M00.onSearch();

                $('#rec-content').summernote('code', '');

                $("#ngForm").each(function() {  
                    this.reset();  
                });

            });
        } else {
            overlay.hide();
            bootbox.alert(res.msg);
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

    ADM04004M00.ngOnInit();

    $("#selectLcteUnqId").change(function(){
        ADM04004M00.onChange();
    });

    $("#onReplyWrite").click(function(){
        ADM04004M00.onReplyWrite();
    });

    $("#onReplyWriteSave").click(function(){
        bootbox.confirm("저장하시겠습니까 ?", function(result){ ADM04004M00.onReplyWriteSave(); });
        
    });

    $("#onModify").click(function(){
        bootbox.confirm("변경사항을 저장하시겠습니까 ?", function(result){ ADM04004M00.onModify(); });
    })

    $("#onDel").click(function(){
        bootbox.confirm("삭제하시겠습니까 ?", function(result){ ADM04004M00.onDel(); });
    })
    
});