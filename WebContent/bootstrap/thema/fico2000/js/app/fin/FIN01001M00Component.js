var FIN01001M00 = new FIN01001M00Component();

var finRegNewYn = true;

function FIN01001M00Component() {

};

FIN01001M00Component.prototype.ngOnInit = function () {

    $(".alert.alert-danger").hide(true);

    finCom = {};

    //기업규모
    var res = codeMngService.getCodes('FAS0303');

    console.log("res code >>> ", res);

    if (res.success) {
        console.log(res);
        var optionsArr = [];
        $.each(res.data.list1, function(i, option) {
            optionsArr[i] = "<option value='" + option.value + "'>" + option.name + "</option>";
        });
        console.log(optionsArr);
        $('#enslDcd').append(optionsArr.join(''));
    }

    //업종분류
    res = codeMngService.getCodes('FAS0302');

    console.log("res code >>> ", res);

    if (res.success) {
        console.log(res);
        var optionsArr = [];
        $.each(res.data.list1, function(i, option) {
            optionsArr[i] = "<option value='" + option.value + "'>" + option.name + "</option>";
        });
        console.log(optionsArr);
        $('#tpbsClsfDcd').append(optionsArr.join(''));
    }

    //재무정보 단위
    res = codeMngService.getCodes('FAS0305');

    console.log("res code >>> ", res);

    if (res.success) {
        console.log(res);
        var optionsArr = [];
        $.each(res.data.list1, function(i, option) {
            optionsArr[i] = "<option value='" + option.value + "'>" + option.name + "</option>";
        });
        console.log(optionsArr);
        $('#amtUnit').append(optionsArr.join(''));
    }    


    FIN01001M00.onSearch();
};

FIN01001M00Component.prototype.onSearch = function () {

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
                name : request.searchPhrase,
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
        url: "/fin/CoporationList.do",
        selection: true,
        multiSelect: true,
        rowSelect: true,
        keepSelection: true,
        labels: {
            search: '기업명을 입력하세요.'
        },
        formatters: {
            "enslDcdTypeRenderer": function(column, row)
            {
                console.log(row.enslDcd);
                var flag = ''
                if (row.enslDcd != null) {
                    if (row.enslDcd == 'M') flag = '중소기업';
                    if (row.enslDcd == 'L') flag = '대기업';
                }

                return flag;
            }
        }
    }).on("click.rs.jquery.bootgrid", function(e, columns, rows){

        overlay.show();

        $("#titleNm").html("기업정보 수정");
        
        FIN01001M00.onFinSearch(rows.userid, rows.bzn);

        $("#onReg").hide(true);
        $("#onMdfc").show();
        $("#onFinReg").show();
        $("#onDel").show();
        $("#onCancel").show();
        $("#regEntp").fadeIn("slow");

        console.log('click >> ', rows.bzn);
        $("#bzn").val(rows.bzn);
        $("#name").val(rows.name);
        $("#enslDcd").val(rows.enslDcd);
        $("#tpbsClsfDcd").val(rows.tpbsClsfDcd);
        $("#amtUnit").val(rows.amtUnit);
        $("#userid").val(rows.userid);

    }); 

};

FIN01001M00Component.prototype.onFinSearch = function (userid, bzn) {

    $(".alert.alert-danger").hide(true);

    $("#grid-fin-list").bootgrid('destroy');

    $("#grid-fin-list").bootgrid({
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
                userid: userid,
                bzn: bzn,
                page : pageNo,
                limit : limit
            }

            return JSON.stringify(params);
        },
        responseHandler:function(response)
        {

            console.log("response : " , response);
            console.log("board ajax >>> " , response.data);

            overlay.hide();

            var boardData = {
                "current": response.data.pageNum1,
                "rowCount": limit,
                "rows": response.data.list1,
                "total": response.data.list1Size
            };

            /* To accumulate custom parameter with the request object */
            return boardData;
        },
        url: "/fin/EntpFinInfoList.do",
        selection: true,
        rowSelect: true,
        templates: {
            search: ""
        }
    }).on("click.rs.jquery.bootgrid", function(e, columns, rows){
        
       finCom = {
                    entpName:$("#name").val(),
                    stacYy: rows.stacYy,
                    amtUnit: $("#amtUnit").val(),
                    amtUnitDis: $("#amtUnit option:selected").text(),
                    gb:'old',
                    userid: rows.userid,
                    bzn: rows.bzn
                }; 

        toMove('FIN01002M00');
        
    }); 


};

FIN01001M00Component.prototype.onMdfc = function () {
    // 유효성 체크 - 우선 여기서 체크하는 것으로 간단히 하려 합니다.
    console.log("onMdfc >>> ", $("#bzn").val());
    if ($("#bzn").val() == undefined || $("#bzn").val() == null || $("#bzn").val() == '') {
        $(".alert.alert-danger").show();
        $("#errMsg").html("사업자 번호는 필수 항목 입니다.");
        return;
    }

    var corporation = {
        userid:$("#userid").val(),
        bzn:$("#bzn").val(),
        name:$("#name").val(),
        enslDcd:$("#enslDcd").val(),
        tpbsClsfDcd:$("#tpbsClsfDcd").val(),
        amtUnit:$("#amtUnit").val()
    };

    finService.updCorporation(corporation, FIN01001M00.callback);

};

FIN01001M00Component.prototype.onReg = function () {

    console.log("onReg >>> ", $("#bzn").val());

    if ($("#bzn").val() == undefined || $("#bzn").val() == null || $("#bzn").val() == '') {
        $(".alert.alert-danger").show();
        $("#errMsg").html("사업자 번호는 필수 항목 입니다.");
        return;
    }

    if ($("#bzn").val().length > 10) {
        $(".alert.alert-danger").show();
        $("#errMsg").html("사업자 번호는 10자리 이하여야 합니다.");
        return;
    }

    var corporation = {
        userid:$("#userid").val(),
        bzn:$("#bzn").val(),
        name:$("#name").val(),
        enslDcd:$("#enslDcd").val(),
        tpbsClsfDcd:$("#tpbsClsfDcd").val(),
        amtUnit:$("#amtUnit").val()
    };

    overlay.show();

    finService.saveCorporation(corporation, FIN01001M00.callback);

};

FIN01001M00Component.prototype.onDel = function () {
    console.log("onReg >>> ", $("#bzn").val());

    if ($("#bzn").val() == undefined || $("#bzn").val() == null || $("#bzn").val() == '') {
        $(".alert.alert-danger").show();
        $("#errMsg").html("사업자 번호는 필수 항목 입니다.");
        return;
    }

    var corporation = {
        userid:$("#userid").val(),
        bzn:$("#bzn").val(),
        name:$("#name").val(),
        enslDcd:$("#enslDcd").val(),
        tpbsClsfDcd:$("#tpbsClsfDcd").val(),
        amtUnit:$("#amtUnit").val()
    };

    finService.delCorporation(corporation, FIN01001M00.callback);
};

FIN01001M00Component.prototype.onFinReg = function() {

    console.log('onFinReg Start11111');

    var yearList = finService.getYearList(5);

    console.log("yearList >>> ", yearList.data.list1);

    var yearArray = [];

    yearList.data.list1.forEach(function (data, index) {
        yearArray.push({
            text: data.name,
            value: data.value
        });
    });

    bootbox.prompt({
        title: "등록할 재무정보의 회계 연도를 선택하세요.",
        inputType: 'select',
        inputOptions: yearArray,
        callback: function (result) {
            if (result != null && result != undefined) {
                if (finRegNewYn) {

                    finCom = {
                        entpName:$("#name").val(),
                        stacYy: result,
                        amtUnit: $("#amtUnit").val(),
                        amtUnitDis: $("#amtUnit option:selected").text(),
                        gb:'new',
                        userid: $("#userid").val(),
                        bzn: $("#bzn").val()
                    };

                }

                toMove('FIN01002M00');
            }
        }
    });
}

FIN01001M00Component.prototype.callback = function(data) {

    console.log('request >>' , data);

    if (data != null) {
        console.log("board ajax >>> " , data);
        var res = JSON.parse(data);

        if (res.success==true) { 
            overlay.hide();
            console.log('성공');
            console.log(res);

             $("#ngForm").each(function() {  
                this.reset();  
            });

            $("#regEntp").fadeOut("slow");

            bootbox.alert(res.msg,function(){
                FIN01001M00.onSearch();
            });
        } else {
            overlay.hide();
            bootbox.alert(res.msg);
        }

    } else {
        overlay.hide();
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
    

    $(".alert.alert-danger").hide(true);
    $("#regEntp").hide(true);

    FIN01001M00.ngOnInit();

    $("#onRegEntp").click(function(){

        $("#grid-fin-list").bootgrid({
            templates: {
                search: ""
            }
        });

        $("#titleNm").html("신규 기업정보 등록");

        $("#onReg").show();
        $("#onMdfc").hide(true);
        $("#onDel").hide(true);
        $("#onFinReg").hide(true);
        $("#onCancel").show();
        $("#regEntp").fadeIn("slow");
    });

    $("#onCancel").click(function(){
        
        $(".alert.alert-danger").hide(true);

        $("#ngForm").each(function() {  
            this.reset();  
        });
        $("#regEntp").fadeOut("slow");
    });

    $("#onMdfc").click(function(){
        FIN01001M00.onMdfc();
    });

    $("#onReg").click(function(){
        FIN01001M00.onReg();
    });

    $("#onDel").click(function(){
        FIN01001M00.onDel();
    });

    $("#onFinReg").click(function(){
        console.log('onFinReg Start');
        FIN01001M00.onFinReg();
    });
 
});
