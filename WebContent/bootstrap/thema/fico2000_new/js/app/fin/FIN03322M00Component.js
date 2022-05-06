var FIN03322M00 = new FIN03322M00Component();

var QsrtInfo = (function () {
    function QsrtInfo() {
        qsrtNo0 = [];
        qsrtNo1 = [];
        qsrtNo2 = [];
        qsrtNo3 = [];
        qsrtNo4 = [];
        qsrtNo5 = [];
        qsrtNo6 = [];
        qsrtNo7 = [];
        qsrtNo8 = [];
        qsrtNo9 = [];
        qsrtNo10 = [];
        qsrtNo11 = [];
        qsrtNo12 = [];
        qsrtNo13 = [];
    }
    return QsrtInfo;
}());

var QsrtRsltInfo = (function () {
    function QsrtRsltInfo() {
    }
    return QsrtRsltInfo;
}());
var QsrtNo1 = (function () {
    function QsrtNo1() {
        kindNm = "";
        monthAmt1 = 0;
        monthAmt2 = 0;
        monthAmt3 = 0;
        monthAmt4 = 0;
        monthAmt5 = 0;
        monthAmt6 = 0;
        monthAmt7 = 0;
        monthAmt8 = 0;
        monthAmt9 = 0;
        monthAmt10 = 0;
        monthAmt11 = 0;
        monthAmt12 = 0;
        idx = 0;
    }
    return QsrtNo1;
}());
var QsrtNo2 = (function () {
    function QsrtNo2() {
        month = "";
        monthAmt = 0;
        idx = 0;
    }
    return QsrtNo2;
}());
var QsrtNo3 = (function () {
    function QsrtNo3() {
        month = "";
        monthAmt = 0;
        idx = 0;
    }
    return QsrtNo3;
}());
var QsrtNo4 = (function () {
    function QsrtNo4() {
        kindNm = "";
        month = "";
        monthAmt = 0;
        idx = 0;
    }
    return QsrtNo4;
}());
var QsrtNo5 = (function () {
    function QsrtNo5() {
        kindNm = "";
        month = "";
        monthAmt = 0;
        idx = 0;
    }
    return QsrtNo5;
}());
var QsrtNo6 = (function () {
    function QsrtNo6() {
        month = "";
        monthAmt = 0;
        idx = 0;
    }
    return QsrtNo6;
}());
var QsrtNo81 = (function () {
    function QsrtNo81() {
        kindNm = "";
        baseYm = "";
        rsltVl = 0;
        etcNm = "";
        etcIrt = 0;
        alyid = "";
        itemId = "";
        lprbmNo = 0;
        sprbmNo = 0;
        lsqsTcd = "";
        qstrId = "";
        delYn = "";
        rsltId = "";
        idx = 0;
    }
    return QsrtNo81;
}());
var QsrtNo91 = (function () {
    function QsrtNo91() {
        kindNm = "";
        baseYm = "";
        rsltVl = 0;
        etcNm = "";
        etcIrt = 0;
        alyid = "";
        itemId = "";
        lprbmNo = 0;
        sprbmNo = 0;
        lsqsTcd = "";
        qstrId = "";
        delYn = "";
        rsltId = "";
        idx = 0;
    }
    return QsrtNo91;
}());
var QsrtNo101 = (function () {
    function QsrtNo101() {
        kindNm = "";
        baseYm = "";
        rsltVl = 0;
        etcNm = "";
        etcIrt = 0;
        alyid = "";
        itemId = "";
        lprbmNo = 0;
        sprbmNo = 0;
        lsqsTcd = "";
        qstrId = "";
        delYn = "";
        rsltId = "";
        idx = 0;
    }
    return QsrtNo101;
}());

var errMsg = "";
var errRegMsg = "";
var entpName = "";
var stacYy = "";
var gb = "";
var bzn = "";
var beforeYear = "";
var afterYear = "";
        //설문지
var qsrtInfoArr = [];
var arrlength = 0;
        //현금흐름설문지
var qsrtInfoArr01 = [];
var arrlength01 = 0;
        //1.영업활동패턴
var businessLength = 0;
var businessWorkPatterns = [];
        //3.현금수입
var fincashIncomeLength = 0;
var fincashIncomeList = [];
        //5.현금지출
var fincashOutComeLength = 0;
var fincashOutComeList = [];
        //7.현금예산
var fincashBdgtAmtLength = 0;
var fincashBdgtAmtList = [];

var fincashFlowResultLength = 0;
var fincashFlowResult = [];

var qsrtNo = new QsrtRsltInfo();
var qsrtNoArr = [];
var qsrtNo01 = new QsrtRsltInfo();
var qsrtNoArr01 = [];
var qsrtNo81 = new QsrtNo81();
var qsrtNo91 = new QsrtNo91();
var qsrtNo101 = new QsrtNo101();
var qsrtInfo = new QsrtInfo;
//현금흐름분석 설문지
var qsrtInfo01 = new QsrtInfo;
var qsrtInfoArr = [];
var qsrtNo11Arr = [];
var qsrtNo12Arr = [];
var qsrtNo21Arr = [];
var qsrtNo31Arr = [];
var qsrtNo41Arr = [];
var qsrtNo51Arr = [];
var qsrtNo61Arr = [];
var qsrtNo62Arr = [];
var qsrtNo81Arr = [];
var qsrtNo91Arr = [];
var qsrtNo101Arr = [];

function FIN03322M00Component() {

};

FIN03322M00Component.prototype.ngOnInit = function () {
    
    console.log('finAplyCom >> ', finAplyCom);
    
    qsrtNo81 = new QsrtNo81();
    qsrtNo91 = new QsrtNo91();
    qsrtNo101 = new QsrtNo101();

    if (finAplyCom == null || finAplyCom == undefined) {

        $("#alyIfr").attr("src","/fin/pageMove.do?menuCode=FIN02001P00&params=");

        $("#popup").bPopup({
            modalClose : true
        });
    } else {
        if (finAplyCom.alyid == null || finAplyCom.alyid == undefined || finAplyCom.alyid == '') {

            $("#alyIfr").attr("src","/fin/pageMove.do?menuCode=FIN02001P00&params=");

            $("#popup").bPopup({
                modalClose : true
            });
        } else {

            $("span[name='entpName']").each(function (idx) {
                $("span[name='entpName']").eq(idx).html(finAplyCom.entpName);
            });

            $("span[name='alycon']").each(function (idx) {
                $("span[name='alycon']").eq(idx).html(finAplyCom.alycon);
            });

            FIN03322M00.onSearch();
            
        }
    }

};

FIN03322M00Component.prototype.onSearch = function () {
    FIN03322M00.initQsrtSave();
};

FIN03322M00Component.prototype.initQsrtSave = function() {
    console.log("initQsrtSave >>> start >>>>" , finAplyCom);
	
	overlay.show();

    //현금흐름 설문지......
    finService.getQsrtFinRsltInfoList(finAplyCom.alyid, finAplyCom.stacYy, FIN03322M00.QsrtFinRsltCallback);
};




//경영투자 분석 설문지
FIN03322M00Component.prototype.onQstrInfo = function(res) {
    var data = res.data.qsrtInfo;
    
    var qsrtNo0 = data['qsrtNo0'];
    var qsrtNo1 = data['qsrtNo1'];
    var qsrtNo2 = data['qsrtNo2'];
    var qsrtNo3 = data['qsrtNo3'];
    var qsrtNo4 = data['qsrtNo4'];
    var qsrtNo5 = data['qsrtNo5'];
    var qsrtNo6 = data['qsrtNo6'];
    var qsrtNo7 = data['qsrtNo7'];
    var qsrtNo8 = data['qsrtNo8'];
    var qsrtNo9 = data['qsrtNo9'];
    var qsrtNo10 = data['qsrtNo10'];
    var qsrtNo11 = data['qsrtNo11'];
    var qsrtNo12 = data['qsrtNo12'];
    var qsrtNo13 = data['qsrtNo13'];

    qsrtInfo.qsrtNo1 = qsrtNo1;
    qsrtInfo.qsrtNo2 = qsrtNo2;
    qsrtInfo.qsrtNo3 = qsrtNo3;
    qsrtInfo.qsrtNo4 = qsrtNo4;
    qsrtInfo.qsrtNo5 = qsrtNo5;
    qsrtInfo.qsrtNo6 = qsrtNo6;
    qsrtInfo.qsrtNo7 = qsrtNo7;

    qsrtInfo.qsrtNo8 = qsrtNo8;
    qsrtInfo.qsrtNo9 = qsrtNo9;
    qsrtInfo.qsrtNo10 = qsrtNo10;
    qsrtInfo.qsrtNo11 = qsrtNo11;
    qsrtInfo.qsrtNo12 = qsrtNo12;
    qsrtInfo.qsrtNo13 = qsrtNo13;

    qsrtNoArr = qsrtNo0;

    qsrtInfoArr = data;

    arrlength = Object.keys(qsrtInfoArr).length;

    console.log("qsrtInfoArr >>> " , Object.keys(qsrtInfoArr).length);

    console.log("qsrtInfoArr.length >>> " , qsrtInfoArr.length);

    console.log("qsrtInfo.qsrtNo7 >>> " , (qsrtInfo.qsrtNo7['no1']).rsltVl);
    console.log("qsrtInfo.qsrtNo7 >>> " , (qsrtInfo.qsrtNo7['no2']).rsltVl);

    $('.selectpicker').selectpicker();

    var qNo1 = new QsrtNo1();
    var qNo2 = new QsrtNo2();
    var qNo3 = new QsrtNo3();
    var qNo4 = new QsrtNo4();
    var qNo5 = new QsrtNo5();
    var qNo6 = new QsrtNo6();
    var qNo8 = new QsrtNo81();
    var qNo9 = new QsrtNo91();
    var qNo10 = new QsrtNo101();

    var kindNm = "";
    var day = "";
    var intDay = 0;
    var rowData = [];

    var indx = 1;

    var idx = 1;

    var me = this;
    
    

};


FIN03322M00Component.prototype.onFinEstmls = function() {

    console.log("<<<<<< onCashIncomeList() start >>>>> ")
    
    finService.getFinEstmls(finAplyCom.alyid, finAplyCom.stacYy, qsrtInfo, FIN03322M00.finEstmlsCallback);

};

FIN03322M00Component.prototype.finEstmlsCallback = function(result) {

    if (result != null) {

         var res = JSON.parse(result);

        if (res.success) {

            var data = res.data.result;

            fincashFlowResult = data;

            if (fincashFlowResult != null && fincashFlowResult != undefined) {
                fincashFlowResultLength = 1;
                FIN03322M00.onFinEstmlsView();
            }
            
            overlay.hide();

        } else {
            bootbox.alert(res.msg);
            overlay.hide();
        }

    } else {
        overlay.hide();
    }
};

FIN03322M00Component.prototype.onFinEstmlsView = function() {


var fincashFlowResultTable = '';                                                                                                                                                  
                                                                                                                                                                                  
fincashFlowResultTable += '            <div class="panel-body">                                                                                                                   ';
fincashFlowResultTable += '                                                                                                                                                       ';
fincashFlowResultTable += '               <table class="table table-condensed">                                                                                                   ';
fincashFlowResultTable += '                    <thead>                                                                                                                            ';
fincashFlowResultTable += '                        <tr class="active text-lg">                                                                                                    ';
fincashFlowResultTable += '                            <th>항목</th>                                                                                                                ';
fincashFlowResultTable += '                            <th>금액</th>                                                                                                                ';
fincashFlowResultTable += '                            <th>비율</th>                                                                                                                ';
fincashFlowResultTable += '                        </tr>                                                                                                                          ';
fincashFlowResultTable += '                    </thead>                                                                                                                           ';
fincashFlowResultTable += '                    <tbody>                                                                                                                            ';
fincashFlowResultTable += '                        <tr>                                                                                                                           ';
fincashFlowResultTable += '                            <td>매출액</td>                                                                                                               ';
fincashFlowResultTable += '                            <td>'+FIN03322M00.onNumberWithCommas(fincashFlowResult.salesAmt)+'</td>                                                                ';
fincashFlowResultTable += '                            <td>'+FIN03322M00.onNumberWithCommas(fincashFlowResult.salesAmtRatio)+' %</td>                                                         ';
fincashFlowResultTable += '                        </tr>                                                                                                                          ';
fincashFlowResultTable += '                        <tr>                                                                                                                           ';
fincashFlowResultTable += '                            <td>매출원가</td>                                                                                                              ';
fincashFlowResultTable += '                            <td>'+FIN03322M00.onNumberWithCommas(fincashFlowResult.salesCostAmt)+'</td>                                                            ';
fincashFlowResultTable += '                            <td>'+FIN03322M00.onNumberWithCommas(fincashFlowResult.salesCostAmtRatio)+' %</td>                                                     ';
fincashFlowResultTable += '                        </tr>                                                                                                                          ';
fincashFlowResultTable += '                        <tr>                                                                                                                           ';
fincashFlowResultTable += '                            <td>매출총이익</td>                                                                                                            ';
fincashFlowResultTable += '                            <td>'+FIN03322M00.onNumberWithCommas(fincashFlowResult.amslPrftAmt)+'</td>                                                             ';
fincashFlowResultTable += '                            <td>'+FIN03322M00.onNumberWithCommas(fincashFlowResult.amslPrftAmtRatio)+' %</td>                                                      ';
fincashFlowResultTable += '                        </tr>                                                                                                                          ';
fincashFlowResultTable += '                        <tr>                                                                                                                           ';
fincashFlowResultTable += '                            <td>판매관리비</td>                                                                                                            ';
fincashFlowResultTable += '                            <td>'+FIN03322M00.onNumberWithCommas(fincashFlowResult.mnepAmt)+'</td>                                                                 ';
fincashFlowResultTable += '                            <td>'+FIN03322M00.onNumberWithCommas(fincashFlowResult.mnepAmtRatio)+' %</td>                                                          ';
fincashFlowResultTable += '                        </tr>                                                                                                                          ';
fincashFlowResultTable += '                        <tr>                                                                                                                           ';
fincashFlowResultTable += '                            <td>영업이익</td>                                                                                                              ';
fincashFlowResultTable += '                            <td>'+FIN03322M00.onNumberWithCommas(fincashFlowResult.opprAmt)+'</td>                                                                 ';
fincashFlowResultTable += '                            <td>'+FIN03322M00.onNumberWithCommas(fincashFlowResult.opprAmtRatio)+' %</td>                                                          ';
fincashFlowResultTable += '                        </tr>                                                                                                                          ';
fincashFlowResultTable += '                        <tr>                                                                                                                           ';
fincashFlowResultTable += '                            <td>영업외수익</td>                                                                                                            ';
fincashFlowResultTable += '                            <td>'+FIN03322M00.onNumberWithCommas(fincashFlowResult.opprNoAmt)+'</td>                                                               ';
fincashFlowResultTable += '                            <td>'+FIN03322M00.onNumberWithCommas(fincashFlowResult.opprNoAmtRatio)+' %</td>                                                        ';
fincashFlowResultTable += '                        </tr>                                                                                                                          ';
fincashFlowResultTable += '                        <tr>                                                                                                                           ';
fincashFlowResultTable += '                            <td>영업외비용</td>                                                                                                            ';
fincashFlowResultTable += '                            <td>'+FIN03322M00.onNumberWithCommas(fincashFlowResult.opprNoCostAmt)+'</td>                                                           ';
fincashFlowResultTable += '                            <td>'+FIN03322M00.onNumberWithCommas(fincashFlowResult.opprNoCostAmtRatio)+' %</td>                                                    ';
fincashFlowResultTable += '                        </tr>                                                                                                                          ';
fincashFlowResultTable += '                        <tr>                                                                                                                           ';
fincashFlowResultTable += '                            <td>경상이익</td>                                                                                                              ';
fincashFlowResultTable += '                            <td>'+FIN03322M00.onNumberWithCommas(fincashFlowResult.orpfAmt)+'</td>                                                                 ';
fincashFlowResultTable += '                            <td>'+FIN03322M00.onNumberWithCommas(fincashFlowResult.orpfAmtRatio)+' %</td>                                                          ';
fincashFlowResultTable += '                        </tr>                                                                                                                          ';
fincashFlowResultTable += '                        <tr>                                                                                                                           ';
fincashFlowResultTable += '                            <td>법인세</td>                                                                                                               ';
fincashFlowResultTable += '                            <td>'+FIN03322M00.onNumberWithCommas(fincashFlowResult.crtxAmt)+'</td>                                                                 ';
fincashFlowResultTable += '                            <td>'+FIN03322M00.onNumberWithCommas(fincashFlowResult.crtxAmtRatio)+' %</td>                                                          ';
fincashFlowResultTable += '                        </tr>                                                                                                                          ';
fincashFlowResultTable += '                        <tr>                                                                                                                           ';
fincashFlowResultTable += '                            <td>당기순이익</td>                                                                                                            ';
fincashFlowResultTable += '                            <td>'+FIN03322M00.onNumberWithCommas(fincashFlowResult.ctnpAmt)+'</td>                                                                 ';
fincashFlowResultTable += '                            <td>'+FIN03322M00.onNumberWithCommas(fincashFlowResult.ctnpAmtRatio)+' %</td>                                                          ';
fincashFlowResultTable += '                        </tr>                                                                                                                          ';
fincashFlowResultTable += '                   </tbody>                                                                                                                            ';
fincashFlowResultTable += '                </table>                                                                                                                               ';
fincashFlowResultTable += '                                                                                                                                                       ';
fincashFlowResultTable += '            </div>                                                                                                                               ';

$("#fincashFlowResultTable").html(fincashFlowResultTable).trigger('create');

}


FIN03322M00Component.prototype.QsrtFinRsltCallback = function(result) {

    console.log('QsrtFinRsltCallback start');

    var me = FIN03322M00;

    if (result != null) {

         var res = JSON.parse(result);

        if (res.success) {

            me.onQstrInfo(res);
            me.onFinEstmls();
            overlay.hide();

        } else {
            bootbox.alert(res.msg);
            overlay.hide();
        }

    } else {
        overlay.hide();
    }

};


FIN03322M00Component.prototype.getQsrtNo = function(qsrtNo) {

    var totalAmt = 0;

    if (qsrtNo == 'qsrtNo41') {

        for (var i = 0 ; i < (qsrtInfo.qsrtNo4['no1']).length; i++) {
            if ((qsrtInfo.qsrtNo4['no1'])[i] != null) totalAmt += Number((qsrtInfo.qsrtNo4['no1'])[i].rsltVl);
        }
    }

    return numberWithCommas(totalAmt);

};


FIN03322M00Component.prototype.onNumberWithCommas = function(totalAmt) {
    return numberWithCommas(totalAmt);
};

function numberWithCommas(x) {

    if (x == null || x == '') {
        return "0"
    }

    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function lpad(str, pad) {
    return pad.substring(0, pad.length - str.length) + str
}


function qsrtRsltInfoArr(qsrtParam, qsrt) {

    qsrtParam.push({
            alyid:qsrt.alyid,
            stacYy:qsrt.stacYy,
            qstrId:qsrt.qstrId,
            lsqsTcd:qsrt.lsqsTcd,
            itemId:qsrt.itemId,
            rsltId:'',
            lprbmNo:qsrt.lprbmNo,
            sprbmNo:qsrt.sprbmNo,
            rsvlType:qsrt.rsvlType,
            rplyType:qsrt.rplyType,
            itemNm:qsrt.itemNm,
            baseYm:qsrt.baseYm,
            kindNm:qsrt.kindNm,
            rsltVl:qsrt.rsltVl,
            delYn:qsrt.delYn
        });

return qsrtParam;

}

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


    console.log('start >>> ');
    FIN03322M00.ngOnInit();



});

