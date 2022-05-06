var DTA01000M00 = new DTA01000M00Component();

var boardCode = 'FAS900203';

var boardMngService = new BoardMngService(true);

function DTA01000M00Component() {

};

DTA01000M00Component.prototype.ngOnInit = function () {
    $("#grid-list").bootgrid();
    DTA01000M00.onSearch();
};

DTA01000M00Component.prototype.onSearch = function () {
    $(".alert.alert-danger").hide(true);

    $("#grid-list").bootgrid('destroy');

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
                title : request.searchPhrase,
                code : boardCode,
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
        url: "/com/BoardList.do",
        selection: true,
        multiSelect: true,
        rowSelect: true,
        keepSelection: true,
        labels: {
            search: '제목을 입력하세요.'
        },
        formatters: {
            "fileTypeRenderer": function(column, row)
            {
                console.log(row.flapMngmNo);
                var flag = ''
                if (row.flapMngmNo != null) {
                    if (row.flapMngmNo != '') flag = '파일첨부';
                }

                return flag;
            }
        }
    }).on("click.rs.jquery.bootgrid", function(e, columns, rows){
        console.log('click >> ', rows.mainNo);
        var params = '"code='+boardCode+'*mainNo='+rows.mainNo+'"';
        toMove('DTA01000M01',params);
    }); 
};

$(document).ready(function() {

    $(".alert.alert-danger").hide(true);

    $("link[href*='/bootstrap/thema/fico2000/assets/plugins/sky-forms-pro/skyforms/css/sky-forms.css']").remove();
    $("link[href*='/bootstrap/thema/fico2000/assets/plugins/sky-forms-pro/skyforms/custom/custom-sky-forms.css']").remove();
    $("link[href*='/bootstrap/thema/fico2000/assets/css/admin/custom-admin.css']").remove();
    $("link[href*='/bootstrap/thema/fico2000/js/app/adm/ADM01000M00Component.css']").remove();
    
    $('head').append( $('<link rel="stylesheet" type="text/css" />').attr('href', '/bootstrap/thema/fico2000/assets/css/admin/custom-admin.css') );  

    DTA01000M00.ngOnInit();

});
