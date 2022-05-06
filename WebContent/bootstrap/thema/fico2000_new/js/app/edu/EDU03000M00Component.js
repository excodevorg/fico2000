var EDU03000M00 = new EDU03000M00Component();

function EDU03000M00Component() {

};

EDU03000M00Component.prototype.ngOnInit = function () {

    $("#isProgress").hide(true);
    $("#notProgress").show();

    $("#isStandBy").hide(true);
    $("#notStandBy").show();

    $("#isComplete").hide(true);
    $("#notComplete").show();

    overlay.show();
    EDU03000M00.onProgress();
    EDU03000M00.onStandBy();
    EDU03000M00.onComplete();

    overlay.hide();
};

EDU03000M00Component.prototype.onProgress = function () {

    $("#table-progress").bootgrid({
        ajax: true,
        ajaxSettings: {
            method: "POST",
            cache: false,
            contentType: "application/json;charset=utf-8",
            async:false,
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
                applyPrgScd : 'FAS020202',
                completeYn : 'N',
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

            if (response.data.list1Size > 0) {
                $("#isProgress").show();
                $("#notProgress").hide(true);
            }

            /* To accumulate custom parameter with the request object */
            return boardData;
        },
        url: "/edu/MyEduInfoPgrsUserList.do",
        selection: true,
        rowSelect: true,
        navigation: 0,
        formatters: {
            "prgScdRenderer": function(column, row)
            {
                
                var flag = '';

                console.log("formatter >> " , row.applyPrgScd);

                if (row.applyPrgScd == 'FAS020201') {
                    flag = '신청';
                }

                if (row.applyPrgScd == 'FAS020202') {
                    flag = '진행중';
                }

                if (row.applyPrgScd == 'FAS020203') {
                    flag = '반려';
                }
                
                console.log("formatter >> " , flag);

                return flag;
            },
            "statusFormatter": function(column, row)
            {   
                var labelColor;

                var value = row.completeYnDis;

                if(value == "수료"){
                    labelColor = "success";
                }
                else if(value == "미수료"){
                    labelColor = "warning";
                }
                else if(value == "신청"){
                    labelColor = "warning";
                }
                else if(value == "진행중"){
                    labelColor = "success";
                }
                return '<div class="label label-table label-'+ 'success' +'"> ' + value + '</div>';

            },
            "btnFormatter": function(column, row)
            {   
                var labelColor, directURL;
                var value = row.studyNm;

                if (value == "학습하기") {
                    labelColor = "primary";
                    directURL = "toMove('EDU03001M00')";
                } else if (value == "복습하기") {
                    labelColor = "primary";
                    directURL = "toMove('EDU03002M00')";
                }
                return '<a onClick="'+ directURL +'" class="btn btn-table btn-rounded btn-'+ labelColor+'">&nbsp;&nbsp;' + value + '&nbsp;&nbsp;</a>';

            }
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

        console.log('educome >>> ', eduCom);
    }); 


};

EDU03000M00Component.prototype.onStandBy = function () {

    $("#table-standby").bootgrid({
        ajax: true,
        ajaxSettings: {
            method: "POST",
            cache: false,
            contentType: "application/json;charset=utf-8",
            async:false,
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
                applyPrgScd : 'FAS020201',
                completeYn : 'N',
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

            if (response.data.list1Size > 0) {
                $("#isStandBy").show();
                $("#notStandBy").hide(true);
            }

            /* To accumulate custom parameter with the request object */
            return boardData;
        },
        url: "/edu/MyEduInfoPgrsUserList.do",
        selection: true,
        rowSelect: true,
        navigation: 0,
        formatters: {
            "prgScdRenderer": function(column, row)
            {
                
                var flag = '';

                console.log("formatter >> " , row.applyPrgScd);

                if (row.applyPrgScd == 'FAS020201') {
                    flag = '신청';
                }

                if (row.applyPrgScd == 'FAS020202') {
                    flag = '진행중';
                }

                if (row.applyPrgScd == 'FAS020203') {
                    flag = '반려';
                }
                
                console.log("formatter >> " , flag);

                return flag;
            },
            "statusFormatter": function(column, row)
            {   
                var labelColor;

                var value = row.completeYnDis;

                if(value == "수료"){
                    labelColor = "success";
                }
                else if(value == "미수료"){
                    labelColor = "warning";
                }
                else if(value == "신청"){
                    labelColor = "warning";
                }
                else if(value == "진행중"){
                    labelColor = "success";
                }
                return '<div class="label label-table label-'+ 'success' +'"> ' + value + '</div>';

            },
            "btnFormatter": function(column, row)
            {   
                var labelColor, directURL;
                var value = row.studyNm;

                if (value == "학습하기") {
                    labelColor = "primary";
                    directURL = "toMove('EDU03001M00')";
                } else if (value == "복습하기") {
                    labelColor = "primary";
                    directURL = "toMove('EDU03002M00')";
                }
                return '<a onClick="'+ directURL +'" class="btn btn-table btn-rounded btn-'+ labelColor+'">&nbsp;&nbsp;' + value + '&nbsp;&nbsp;</a>';

            }
        }
    }).on("click.rs.jquery.bootgrid", function(e, columns, rows){
        
    }); 

};

EDU03000M00Component.prototype.onComplete = function () {

    $("#table-complete").bootgrid({
        ajax: true,
        ajaxSettings: {
            method: "POST",
            cache: false,
            contentType: "application/json;charset=utf-8",
            async:false,
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
                applyPrgScd : '',
                completeYn : 'Y',
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

            if (response.data.list1Size > 0) {
                $("#isComplete").show();
                $("#notComplete").hide(true);
            }

            /* To accumulate custom parameter with the request object */
            return boardData;
        },
        url: "/edu/MyEduInfoPgrsUserList.do",
        selection: true,
        rowSelect: true,
        navigation: 0,
        formatters: {
            "prgScdRenderer": function(column, row)
            {
                
                var flag = '';

                console.log("formatter >> " , row.applyPrgScd);

                if (row.applyPrgScd == 'FAS020201') {
                    flag = '신청';
                }

                if (row.applyPrgScd == 'FAS020202') {
                    flag = '진행중';
                }

                if (row.applyPrgScd == 'FAS020203') {
                    flag = '반려';
                }
                
                console.log("formatter >> " , flag);

                return flag;
            },
            "statusFormatter": function(column, row)
            {   
                var labelColor;

                var value = row.completeYnDis;

                if(value == "수료"){
                    labelColor = "success";
                }
                else if(value == "미수료"){
                    labelColor = "warning";
                }
                else if(value == "신청"){
                    labelColor = "warning";
                }
                else if(value == "진행중"){
                    labelColor = "success";
                }
                return '<div class="label label-table label-'+ 'success' +'"> ' + value + '</div>';

            },
            "btnFormatter": function(column, row)
            {   
                var labelColor, directURL;
                var value = row.studyNm;

                if (value == "학습하기") {
                    labelColor = "primary";
                    directURL = "toMove('EDU03001M00')";
                } else if (value == "복습하기") {
                    labelColor = "primary";
                    directURL = "toMove('EDU03002M00')";
                }
                return '<a onClick="'+ directURL +'" class="btn btn-table btn-rounded btn-'+ labelColor+'">&nbsp;&nbsp;' + value + '&nbsp;&nbsp;</a>';

            }
            
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

        console.log('educome >>> ', eduCom);
    }); 


};

$(document).ready(function() {

    $("link[href*='/bootstrap/thema/fico2000/assets/plugins/sky-forms-pro/skyforms/css/sky-forms.css']").remove();
    $("link[href*='/bootstrap/thema/fico2000/assets/plugins/sky-forms-pro/skyforms/custom/custom-sky-forms.css']").remove();
    $("link[href*='/bootstrap/thema/fico2000/assets/css/admin/custom-admin.css']").remove();
    $("link[href*='/bootstrap/thema/fico2000/js/app/adm/ADM01000M00Component.css']").remove();
    
    $('head').append( $('<link rel="stylesheet" type="text/css" />').attr('href', '/bootstrap/thema/fico2000/assets/css/admin/custom-admin.css') );    

    EDU03000M00.ngOnInit();

});
