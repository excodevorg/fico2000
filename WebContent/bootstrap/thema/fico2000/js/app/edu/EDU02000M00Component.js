var EDU02000M00 = new EDU02000M00Component();

function EDU02000M00Component() {

};

EDU02000M00Component.prototype.ngOnInit = function () {

    console.log("EDU02000M00 Initial");

    $(".alert.alert-danger").hide(true);

    EDU02000M00.onSearch();

};

EDU02000M00Component.prototype.onSearch = function () {

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
                lcteNm : request.searchPhrase,
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
        url: "/edu/EduInfoList.do",
        selection: true,
        rowSelect: true,
        labels: {
            search: "과정명을 입력하세요"
        }
    }).on("click.rs.jquery.bootgrid", function(e, columns, rows){

        eduCom = {
            lcteUnqId:rows.lcteUnqId
            ,applyYn:rows.applyYn
            ,lcteYmd:rows.lcteYmd
            ,lcteNm:rows.lcteNm
            ,lcteCon:rows.lcteCon
            ,atlcNmprCnt:rows.atlcNmprCnt
            ,flapMngmNo:rows.flapMngmNo
        };

        toMove('EDU02001M00');
    }); 

};


$(document).ready(function() {

    $("link[href*='/bootstrap/thema/fico2000/assets/plugins/sky-forms-pro/skyforms/css/sky-forms.css']").remove();
    $("link[href*='/bootstrap/thema/fico2000/assets/plugins/sky-forms-pro/skyforms/custom/custom-sky-forms.css']").remove();
    $("link[href*='/bootstrap/thema/fico2000/assets/css/admin/custom-admin.css']").remove();
    $("link[href*='/bootstrap/thema/fico2000/js/app/adm/ADM01000M00Component.css']").remove();
    
    $('head').append( $('<link rel="stylesheet" type="text/css" />').attr('href', '/bootstrap/thema/fico2000/assets/css/admin/custom-admin.css') );
    
    
    EDU02000M00.ngOnInit();

});