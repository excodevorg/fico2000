var FIN03311M00 = new FIN03311M00Component();

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

function FIN03311M00Component() {

};

FIN03311M00Component.prototype.ngOnInit = function () {
    
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

            FIN03311M00.onSearch();
            
        }
    }

};

FIN03311M00Component.prototype.onSearch = function () {
    FIN03311M00.initQsrtSave();
};

FIN03311M00Component.prototype.initQsrtSave = function() {
    console.log("initQsrtSave >>> start >>>>" , finAplyCom);
	
	overlay.show();

    //현금흐름 설문지......
    finService.getQsrtMngRsltInfoList(finAplyCom.alyid, finAplyCom.stacYy, FIN03311M00.QsrtMngRsltCallback);
};

FIN03311M00Component.prototype.onBusinessWorkPattern = function() {

    console.log("<<<<<< onBusinessWorkPattern() start >>>>> ")
    finService.getBusinessWorkPattern(finAplyCom.alyid, finAplyCom.stacYy, qsrtInfo01, FIN03311M00.businessWorkPatternsCallback);

};

FIN03311M00Component.prototype.businessWorkPatternsCallback = function(result) {

if (result != null) {

     var res = JSON.parse(result);

    if (res.success) {

        var data = res.data.result;

        businessWorkPatterns = data;

        if (businessWorkPatterns != null && businessWorkPatterns != undefined) {
            businessLength = 1;
        }

        overlay.show();

        //재무 투자 분석 설문지......
        finService.getQsrtFinRsltInfoList(finAplyCom.alyid, finAplyCom.stacYy, FIN03311M00.QsrtFinRsltCallback);
        
    } else {
        bootbox.alert(res.msg);
        overlay.hide();
    }

} else {
    overlay.hide();
}
};

FIN03311M00Component.prototype.QsrtMngRsltCallback = function(result) {

    if (result != null) {

         var res = JSON.parse(result);

        if (res.success) {

            FIN03311M00.onQstrInfo01(res);
            FIN03311M00.onBusinessWorkPattern();
            overlay.hide();

        } else {
            bootbox.alert(res.msg);
            overlay.hide();
        }

    } else {
        overlay.hide();
    }

};

FIN03311M00Component.prototype.onQstrInfo01 = function(res) {

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

    qsrtInfo01.qsrtNo0 = qsrtNo0;
    qsrtInfo01.qsrtNo1 = qsrtNo1;
    qsrtInfo01.qsrtNo2 = qsrtNo2;
    qsrtInfo01.qsrtNo3 = qsrtNo3;
    qsrtInfo01.qsrtNo4 = qsrtNo4;
    qsrtInfo01.qsrtNo5 = qsrtNo5;
    qsrtInfo01.qsrtNo6 = qsrtNo6;
    qsrtInfo01.qsrtNo7 = qsrtNo7;
    qsrtInfo01.qsrtNo8 = qsrtNo8;
    qsrtInfo01.qsrtNo9 = qsrtNo9;
    qsrtInfo01.qsrtNo10 = qsrtNo10;
    qsrtInfo01.qsrtNo11 = qsrtNo11;
    qsrtInfo01.qsrtNo12 = qsrtNo12;
    qsrtInfo01.qsrtNo13 = qsrtNo13;

    qsrtInfoArr01 = data;

    arrlength01 = Object.keys(qsrtInfoArr01).length;

    var year = (qsrtInfo01.qsrtNo0['no1']).rsltVl;
    var year1 = (qsrtInfo01.qsrtNo0['no1']).rsltVl;

    stacYy = year; 

    finCom.stacYy = stacYy; 

    year = Number(year) - 1;
    beforeYear = "" + year;
    console.log("year >>> ", year);
    console.log("beforeYear >>> ", beforeYear);
    console.log("(qsrtInfo.qsrtNo10['no1'])[0] >>> ", (qsrtInfo01.qsrtNo10['no1'])[0].baseYm);
    console.log("(qsrtInfo.qsrtNo9['no1']).baseYm >>> ", (qsrtInfo01.qsrtNo9['no1']).baseYm);

    year1 = Number(year1) + 1;
    afterYear = "" + year1;
};


//경영투자 분석 설문지
FIN03311M00Component.prototype.onQstrInfo = function(res) {
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

FIN03311M00Component.prototype.onFinCashIncomeList = function() {

    console.log("<<<<<< onCashIncomeList() start >>>>> ")
    overlay.show();
    finService.getFinInvtCashIncomeModify(finAplyCom.alyid, finAplyCom.stacYy, qsrtInfo, FIN03311M00.finCashIncomeCallback);

};

FIN03311M00Component.prototype.finCashIncomeCallback = function(result) {

if (result != null) {

     var res = JSON.parse(result);

    if (res.success) {

        var data = res.data.result;

        fincashIncomeList = data['FinInvtCashIncomeModify'];

        if (fincashIncomeList != null && fincashIncomeList != undefined) {
            fincashIncomeLength = 1;
            if (businessLength > 0 && fincashIncomeLength > 0) {
                FIN03311M00Component.prototype.onFinCashIncomeView();
            }
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

FIN03311M00Component.prototype.onFinCashIncomeView = function() {

    var fincashIncomeTable = '';
    
    fincashIncomeTable += '<div class="panel-body">						';
    fincashIncomeTable += '<!--현금수입테이블-->                                                                                  ';
    fincashIncomeTable += '<table class="table table-condensed">                                                               ';
    fincashIncomeTable += '    <thead>                                                                                         ';
    fincashIncomeTable += '        <tr class="active text-lg">                                                                 ';
    fincashIncomeTable += '            <th>월</th>                                                                             ';
    fincashIncomeTable += '            <th></th>                                                                               ';
    fincashIncomeTable += '            <th>'+stacYy+'-'+fincashIncomeList[0].month+'</th>                                      ';
    fincashIncomeTable += '            <th>'+stacYy+'-'+fincashIncomeList[1].month+'</th>                                      ';
    fincashIncomeTable += '            <th>'+stacYy+'-'+fincashIncomeList[2].month+'</th>                                      ';
    fincashIncomeTable += '            <th>'+stacYy+'-'+fincashIncomeList[3].month+'</th>                                      ';
    fincashIncomeTable += '            <th>'+stacYy+'-'+fincashIncomeList[4].month+'</th>                                      ';
    fincashIncomeTable += '            <th>'+stacYy+'-'+fincashIncomeList[5].month+'</th>                                      ';
    fincashIncomeTable += '        </tr>                                                                                       ';
    fincashIncomeTable += '    </thead>                                                                                        ';
    fincashIncomeTable += '    <tbody>                                                                                         ';
    fincashIncomeTable += '        <tr>                                                                                        ';
    fincashIncomeTable += '            <td>매출액</td>                                                                          ';
    fincashIncomeTable += '            <td></td>                                                                               ';
    fincashIncomeTable += '            <td>'+FIN03311M00.onNumberWithCommas(fincashIncomeList[0].salesAmt)+'</td>                          ';
    fincashIncomeTable += '            <td>'+FIN03311M00.onNumberWithCommas(fincashIncomeList[1].salesAmt)+'</td>                          ';
    fincashIncomeTable += '            <td>'+FIN03311M00.onNumberWithCommas(fincashIncomeList[2].salesAmt)+'</td>                          ';
    fincashIncomeTable += '            <td>'+FIN03311M00.onNumberWithCommas(fincashIncomeList[3].salesAmt)+'</td>                          ';
    fincashIncomeTable += '            <td>'+FIN03311M00.onNumberWithCommas(fincashIncomeList[4].salesAmt)+'</td>                          ';
    fincashIncomeTable += '            <td>'+FIN03311M00.onNumberWithCommas(fincashIncomeList[5].salesAmt)+'</td>                          ';
    fincashIncomeTable += '        </tr>                                                                                       ';
    fincashIncomeTable += '        <tr>                                                                                        ';
    fincashIncomeTable += '            <td>당월현금매출수입</td>                                                                  ';
    fincashIncomeTable += '            <td>'+(businessWorkPatterns['rsv01'])['dl']+'%</td>                                     ';
    fincashIncomeTable += '            <td>'+FIN03311M00.onNumberWithCommas(fincashIncomeList[0].cashIncome0Month)+'</td>                  ';
    fincashIncomeTable += '            <td>'+FIN03311M00.onNumberWithCommas(fincashIncomeList[1].cashIncome0Month)+'</td>                  ';
    fincashIncomeTable += '            <td>'+FIN03311M00.onNumberWithCommas(fincashIncomeList[2].cashIncome0Month)+'</td>                  ';
    fincashIncomeTable += '            <td>'+FIN03311M00.onNumberWithCommas(fincashIncomeList[3].cashIncome0Month)+'</td>                  ';
    fincashIncomeTable += '            <td>'+FIN03311M00.onNumberWithCommas(fincashIncomeList[4].cashIncome0Month)+'</td>                  ';
    fincashIncomeTable += '            <td>'+FIN03311M00.onNumberWithCommas(fincashIncomeList[5].cashIncome0Month)+'</td>                  ';
    fincashIncomeTable += '        </tr>                                                                                       ';
    fincashIncomeTable += '        <tr>                                                                                        ';
    fincashIncomeTable += '            <td>1개월 전 현금매출 중<br/>당월 현금 수입</td>                                              ';
    fincashIncomeTable += '            <td>'+(businessWorkPatterns['rsv02'])['dl']+'%</td>                                     ';
    fincashIncomeTable += '            <td>'+FIN03311M00.onNumberWithCommas(fincashIncomeList[0].cashIncome1Month)+'</td>                  ';
    fincashIncomeTable += '            <td>'+FIN03311M00.onNumberWithCommas(fincashIncomeList[1].cashIncome1Month)+'</td>                  ';
    fincashIncomeTable += '            <td>'+FIN03311M00.onNumberWithCommas(fincashIncomeList[2].cashIncome1Month)+'</td>                  ';
    fincashIncomeTable += '            <td>'+FIN03311M00.onNumberWithCommas(fincashIncomeList[3].cashIncome1Month)+'</td>                  ';
    fincashIncomeTable += '            <td>'+FIN03311M00.onNumberWithCommas(fincashIncomeList[4].cashIncome1Month)+'</td>                  ';
    fincashIncomeTable += '            <td>'+FIN03311M00.onNumberWithCommas(fincashIncomeList[5].cashIncome1Month)+'</td>                  ';
    fincashIncomeTable += '        </tr>                                                                                       ';
    fincashIncomeTable += '        <tr>                                                                                        ';
    fincashIncomeTable += '            <td>2개월 전 현금매출 중<br/>당월 현금 수입</td>                                              ';
    fincashIncomeTable += '            <td>'+(businessWorkPatterns['rsv03'])['dl']+'%</td>                                     ';
    fincashIncomeTable += '            <td>'+FIN03311M00.onNumberWithCommas(fincashIncomeList[0].cashIncome2Month)+'</td>                  ';
    fincashIncomeTable += '            <td>'+FIN03311M00.onNumberWithCommas(fincashIncomeList[1].cashIncome2Month)+'</td>                  ';
    fincashIncomeTable += '            <td>'+FIN03311M00.onNumberWithCommas(fincashIncomeList[2].cashIncome2Month)+'</td>                  ';
    fincashIncomeTable += '            <td>'+FIN03311M00.onNumberWithCommas(fincashIncomeList[3].cashIncome2Month)+'</td>                  ';
    fincashIncomeTable += '            <td>'+FIN03311M00.onNumberWithCommas(fincashIncomeList[4].cashIncome2Month)+'</td>                  ';
    fincashIncomeTable += '            <td>'+FIN03311M00.onNumberWithCommas(fincashIncomeList[5].cashIncome2Month)+'</td>                  ';
    fincashIncomeTable += '        </tr>                                                                                       ';
    fincashIncomeTable += '        <tr>                                                                                        ';
    fincashIncomeTable += '            <td colspan="14">&nbsp;</td>                                                            ';
    fincashIncomeTable += '        </tr>                                                                                       ';
    fincashIncomeTable += '        <tr>                                                                                        ';
    fincashIncomeTable += '            <td>고정자산 매각</td>                                                                     ';
    fincashIncomeTable += '            <td></td>                                                                               ';
    fincashIncomeTable += '            <td>'+FIN03311M00.onNumberWithCommas(fincashIncomeList[0].fixAssetAmt)+'</td>                       ';
    fincashIncomeTable += '            <td>'+FIN03311M00.onNumberWithCommas(fincashIncomeList[1].fixAssetAmt)+'</td>                       ';
    fincashIncomeTable += '            <td>'+FIN03311M00.onNumberWithCommas(fincashIncomeList[2].fixAssetAmt)+'</td>                       ';
    fincashIncomeTable += '            <td>'+FIN03311M00.onNumberWithCommas(fincashIncomeList[3].fixAssetAmt)+'</td>                       ';
    fincashIncomeTable += '            <td>'+FIN03311M00.onNumberWithCommas(fincashIncomeList[4].fixAssetAmt)+'</td>                       ';
    fincashIncomeTable += '            <td>'+FIN03311M00.onNumberWithCommas(fincashIncomeList[5].fixAssetAmt)+'</td>                       ';
    fincashIncomeTable += '        </tr>                                                                                       ';
    fincashIncomeTable += '        <tr>                                                                                        ';
    fincashIncomeTable += '            <td>회사채 발행</td>                                                                      ';
    fincashIncomeTable += '            <td></td>                                                                               ';
    fincashIncomeTable += '            <td>'+FIN03311M00.onNumberWithCommas(fincashIncomeList[0].corBond)+'</td>                           ';
    fincashIncomeTable += '            <td>'+FIN03311M00.onNumberWithCommas(fincashIncomeList[1].corBond)+'</td>                           ';
    fincashIncomeTable += '            <td>'+FIN03311M00.onNumberWithCommas(fincashIncomeList[2].corBond)+'</td>                           ';
    fincashIncomeTable += '            <td>'+FIN03311M00.onNumberWithCommas(fincashIncomeList[3].corBond)+'</td>                           ';
    fincashIncomeTable += '            <td>'+FIN03311M00.onNumberWithCommas(fincashIncomeList[4].corBond)+'</td>                           ';
    fincashIncomeTable += '            <td>'+FIN03311M00.onNumberWithCommas(fincashIncomeList[5].corBond)+'</td>                           ';
    fincashIncomeTable += '        </tr>                                                                                       ';
    fincashIncomeTable += '        <tr>                                                                                        ';
    fincashIncomeTable += '            <td>자본금 증자</td>                                                                      ';
    fincashIncomeTable += '            <td></td>                                                                               ';
    fincashIncomeTable += '            <td>'+FIN03311M00.onNumberWithCommas(fincashIncomeList[0].capitalAmt)+'</td>                        ';
    fincashIncomeTable += '            <td>'+FIN03311M00.onNumberWithCommas(fincashIncomeList[1].capitalAmt)+'</td>                        ';
    fincashIncomeTable += '            <td>'+FIN03311M00.onNumberWithCommas(fincashIncomeList[2].capitalAmt)+'</td>                        ';
    fincashIncomeTable += '            <td>'+FIN03311M00.onNumberWithCommas(fincashIncomeList[3].capitalAmt)+'</td>                        ';
    fincashIncomeTable += '            <td>'+FIN03311M00.onNumberWithCommas(fincashIncomeList[4].capitalAmt)+'</td>                        ';
    fincashIncomeTable += '            <td>'+FIN03311M00.onNumberWithCommas(fincashIncomeList[5].capitalAmt)+'</td>                        ';
    fincashIncomeTable += '        </tr>                                                                                       ';
    fincashIncomeTable += '        <tr>                                                                                        ';
    fincashIncomeTable += '            <td>재고자산감소</td>                                                                      ';
    fincashIncomeTable += '            <td></td>                                                                               ';
    fincashIncomeTable += '            <td>'+FIN03311M00.onNumberWithCommas(fincashIncomeList[0].storedAssetAmt)+'</td>                    ';
    fincashIncomeTable += '            <td>'+FIN03311M00.onNumberWithCommas(fincashIncomeList[1].storedAssetAmt)+'</td>                    ';
    fincashIncomeTable += '            <td>'+FIN03311M00.onNumberWithCommas(fincashIncomeList[2].storedAssetAmt)+'</td>                    ';
    fincashIncomeTable += '            <td>'+FIN03311M00.onNumberWithCommas(fincashIncomeList[3].storedAssetAmt)+'</td>                    ';
    fincashIncomeTable += '            <td>'+FIN03311M00.onNumberWithCommas(fincashIncomeList[4].storedAssetAmt)+'</td>                    ';
    fincashIncomeTable += '            <td>'+FIN03311M00.onNumberWithCommas(fincashIncomeList[5].storedAssetAmt)+'</td>                    ';
    fincashIncomeTable += '        </tr>                                                                                       ';
    fincashIncomeTable += '        <tr>                                                                                        ';
    fincashIncomeTable += '            <td colspan="14">&nbsp;</td>                                                            ';
    fincashIncomeTable += '        </tr>                                                                                       ';
    fincashIncomeTable += '        <tr class="active">                                                                         ';
    fincashIncomeTable += '            <td>총 당월 현금수입</td>                                                                  ';
    fincashIncomeTable += '            <td></td>                                                                               ';
    fincashIncomeTable += '            <td>'+FIN03311M00.onNumberWithCommas(fincashIncomeList[0].cashIncomeTotal)+'</td>                   ';
    fincashIncomeTable += '            <td>'+FIN03311M00.onNumberWithCommas(fincashIncomeList[1].cashIncomeTotal)+'</td>                   ';
    fincashIncomeTable += '            <td>'+FIN03311M00.onNumberWithCommas(fincashIncomeList[2].cashIncomeTotal)+'</td>                   ';
    fincashIncomeTable += '            <td>'+FIN03311M00.onNumberWithCommas(fincashIncomeList[3].cashIncomeTotal)+'</td>                   ';
    fincashIncomeTable += '            <td>'+FIN03311M00.onNumberWithCommas(fincashIncomeList[4].cashIncomeTotal)+'</td>                   ';
    fincashIncomeTable += '            <td>'+FIN03311M00.onNumberWithCommas(fincashIncomeList[5].cashIncomeTotal)+'</td>                   ';
    fincashIncomeTable += '        </tr>                                                                                       ';
    fincashIncomeTable += '    </tbody>                                                                                        ';
    fincashIncomeTable += '</table>                                                                                            ';
    fincashIncomeTable += '<!--//현금수입테이블-->                                                                                ';
    fincashIncomeTable += '<br/>                                                                                               ';
    fincashIncomeTable += '<!--현금수입테이블-->                                                                                  ';
    fincashIncomeTable += '<table class="table table-condensed">                                                               ';
    fincashIncomeTable += '    <thead>                                                                                         ';
    fincashIncomeTable += '        <tr class="active text-lg">                                                                 ';
    fincashIncomeTable += '            <th>월</th>                                                                             ';
    fincashIncomeTable += '            <th></th>                                                                               ';
    fincashIncomeTable += '            <th>'+stacYy+'-'+fincashIncomeList[6].month+'</th>                                      ';
    fincashIncomeTable += '            <th>'+stacYy+'-'+fincashIncomeList[7].month+'</th>                                      ';
    fincashIncomeTable += '            <th>'+stacYy+'-'+fincashIncomeList[8].month+'</th>                                      ';
    fincashIncomeTable += '            <th>'+stacYy+'-'+fincashIncomeList[9].month+'</th>                                      ';
    fincashIncomeTable += '            <th>'+stacYy+'-'+fincashIncomeList[10].month+'</th>                                     ';
    fincashIncomeTable += '            <th>'+stacYy+'-'+fincashIncomeList[11].month+'</th>                                     ';
    fincashIncomeTable += '        </tr>                                                                                       ';
    fincashIncomeTable += '    </thead>                                                                                        ';
    fincashIncomeTable += '    <tbody>                                                                                         ';
    fincashIncomeTable += '        <tr>                                                                                        ';
    fincashIncomeTable += '            <td>매출액</td>                                                                          ';
    fincashIncomeTable += '            <td></td>                                                                               ';
    fincashIncomeTable += '            <td>'+FIN03311M00.onNumberWithCommas(fincashIncomeList[6].salesAmt)+'</td>                          ';
    fincashIncomeTable += '            <td>'+FIN03311M00.onNumberWithCommas(fincashIncomeList[7].salesAmt)+'</td>                          ';
    fincashIncomeTable += '            <td>'+FIN03311M00.onNumberWithCommas(fincashIncomeList[8].salesAmt)+'</td>                          ';
    fincashIncomeTable += '            <td>'+FIN03311M00.onNumberWithCommas(fincashIncomeList[9].salesAmt)+'</td>                          ';
    fincashIncomeTable += '            <td>'+FIN03311M00.onNumberWithCommas(fincashIncomeList[10].salesAmt)+'</td>                         ';
    fincashIncomeTable += '            <td>'+FIN03311M00.onNumberWithCommas(fincashIncomeList[11].salesAmt)+'</td>                         ';
    fincashIncomeTable += '        </tr>                                                                                       ';
    fincashIncomeTable += '        <tr>                                                                                        ';
    fincashIncomeTable += '            <td>당월현금매출수입</td>                                                                  ';
    fincashIncomeTable += '            <td>'+(businessWorkPatterns['rsv01'])['dl']+'%</td>                                     ';
    fincashIncomeTable += '            <td>'+FIN03311M00.onNumberWithCommas(fincashIncomeList[6].cashIncome0Month)+'</td>                  ';
    fincashIncomeTable += '            <td>'+FIN03311M00.onNumberWithCommas(fincashIncomeList[7].cashIncome0Month)+'</td>                  ';
    fincashIncomeTable += '            <td>'+FIN03311M00.onNumberWithCommas(fincashIncomeList[8].cashIncome0Month)+'</td>                  ';
    fincashIncomeTable += '            <td>'+FIN03311M00.onNumberWithCommas(fincashIncomeList[9].cashIncome0Month)+'</td>                  ';
    fincashIncomeTable += '            <td>'+FIN03311M00.onNumberWithCommas(fincashIncomeList[10].cashIncome0Month)+'</td>                 ';
    fincashIncomeTable += '            <td>'+FIN03311M00.onNumberWithCommas(fincashIncomeList[11].cashIncome0Month)+'</td>                 ';
    fincashIncomeTable += '        </tr>                                                                                       ';
    fincashIncomeTable += '        <tr>                                                                                        ';
    fincashIncomeTable += '            <td>1개월 전 현금매출 중<br/>당월 현금 수입</td>                                              ';
    fincashIncomeTable += '            <td>'+(businessWorkPatterns['rsv02'])['dl']+'%</td>                                     ';
    fincashIncomeTable += '            <td>'+FIN03311M00.onNumberWithCommas(fincashIncomeList[6].cashIncome1Month)+'</td>                  ';
    fincashIncomeTable += '            <td>'+FIN03311M00.onNumberWithCommas(fincashIncomeList[7].cashIncome1Month)+'</td>                  ';
    fincashIncomeTable += '            <td>'+FIN03311M00.onNumberWithCommas(fincashIncomeList[8].cashIncome1Month)+'</td>                  ';
    fincashIncomeTable += '            <td>'+FIN03311M00.onNumberWithCommas(fincashIncomeList[9].cashIncome1Month)+'</td>                  ';
    fincashIncomeTable += '            <td>'+FIN03311M00.onNumberWithCommas(fincashIncomeList[10].cashIncome1Month)+'</td>                 ';
    fincashIncomeTable += '            <td>'+FIN03311M00.onNumberWithCommas(fincashIncomeList[11].cashIncome1Month)+'</td>                 ';
    fincashIncomeTable += '        </tr>                                                                                       ';
    fincashIncomeTable += '        <tr>                                                                                        ';
    fincashIncomeTable += '            <td>2개월 전 현금매출 중<br/>당월 현금 수입</td>                                              ';
    fincashIncomeTable += '            <td>'+(businessWorkPatterns['rsv03'])['dl']+'%</td>                                     ';
    fincashIncomeTable += '            <td>'+FIN03311M00.onNumberWithCommas(fincashIncomeList[6].cashIncome2Month)+'</td>                  ';
    fincashIncomeTable += '            <td>'+FIN03311M00.onNumberWithCommas(fincashIncomeList[7].cashIncome2Month)+'</td>                  ';
    fincashIncomeTable += '            <td>'+FIN03311M00.onNumberWithCommas(fincashIncomeList[8].cashIncome2Month)+'</td>                  ';
    fincashIncomeTable += '            <td>'+FIN03311M00.onNumberWithCommas(fincashIncomeList[9].cashIncome2Month)+'</td>                  ';
    fincashIncomeTable += '            <td>'+FIN03311M00.onNumberWithCommas(fincashIncomeList[10].cashIncome2Month)+'</td>                 ';
    fincashIncomeTable += '            <td>'+FIN03311M00.onNumberWithCommas(fincashIncomeList[11].cashIncome2Month)+'</td>                 ';
    fincashIncomeTable += '        </tr>                                                                                       ';
    fincashIncomeTable += '        <tr>                                                                                        ';
    fincashIncomeTable += '            <td colspan="14">&nbsp;</td>                                                            ';
    fincashIncomeTable += '        </tr>                                                                                       ';
    fincashIncomeTable += '        <tr>                                                                                        ';
    fincashIncomeTable += '            <td>고정자산 매각</td>                                                                     ';
    fincashIncomeTable += '            <td></td>                                                                               ';
    fincashIncomeTable += '            <td>'+FIN03311M00.onNumberWithCommas(fincashIncomeList[6].fixAssetAmt)+'</td>                       ';
    fincashIncomeTable += '            <td>'+FIN03311M00.onNumberWithCommas(fincashIncomeList[7].fixAssetAmt)+'</td>                       ';
    fincashIncomeTable += '            <td>'+FIN03311M00.onNumberWithCommas(fincashIncomeList[8].fixAssetAmt)+'</td>                       ';
    fincashIncomeTable += '            <td>'+FIN03311M00.onNumberWithCommas(fincashIncomeList[9].fixAssetAmt)+'</td>                       ';
    fincashIncomeTable += '            <td>'+FIN03311M00.onNumberWithCommas(fincashIncomeList[10].fixAssetAmt)+'</td>                      ';
    fincashIncomeTable += '            <td>'+FIN03311M00.onNumberWithCommas(fincashIncomeList[11].fixAssetAmt)+'</td>                      ';
    fincashIncomeTable += '        </tr>                                                                                       ';
    fincashIncomeTable += '        <tr>                                                                                        ';
    fincashIncomeTable += '            <td>회사채 발행</td>                                                                      ';
    fincashIncomeTable += '            <td></td>                                                                               ';
    fincashIncomeTable += '            <td>'+FIN03311M00.onNumberWithCommas(fincashIncomeList[6].corBond)+'</td>                           ';
    fincashIncomeTable += '            <td>'+FIN03311M00.onNumberWithCommas(fincashIncomeList[7].corBond)+'</td>                           ';
    fincashIncomeTable += '            <td>'+FIN03311M00.onNumberWithCommas(fincashIncomeList[8].corBond)+'</td>                           ';
    fincashIncomeTable += '            <td>'+FIN03311M00.onNumberWithCommas(fincashIncomeList[9].corBond)+'</td>                           ';
    fincashIncomeTable += '            <td>'+FIN03311M00.onNumberWithCommas(fincashIncomeList[10].corBond)+'</td>                          ';
    fincashIncomeTable += '            <td>'+FIN03311M00.onNumberWithCommas(fincashIncomeList[11].corBond)+'</td>                          ';
    fincashIncomeTable += '        </tr>                                                                                       ';
    fincashIncomeTable += '        <tr>                                                                                        ';
    fincashIncomeTable += '            <td>자본금 증자</td>                                                                      ';
    fincashIncomeTable += '            <td></td>                                                                               ';
    fincashIncomeTable += '            <td>'+FIN03311M00.onNumberWithCommas(fincashIncomeList[6].capitalAmt)+'</td>                        ';
    fincashIncomeTable += '            <td>'+FIN03311M00.onNumberWithCommas(fincashIncomeList[7].capitalAmt)+'</td>                        ';
    fincashIncomeTable += '            <td>'+FIN03311M00.onNumberWithCommas(fincashIncomeList[8].capitalAmt)+'</td>                        ';
    fincashIncomeTable += '            <td>'+FIN03311M00.onNumberWithCommas(fincashIncomeList[9].capitalAmt)+'</td>                        ';
    fincashIncomeTable += '            <td>'+FIN03311M00.onNumberWithCommas(fincashIncomeList[10].capitalAmt)+'</td>                       ';
    fincashIncomeTable += '            <td>'+FIN03311M00.onNumberWithCommas(fincashIncomeList[11].capitalAmt)+'</td>                       ';
    fincashIncomeTable += '        </tr>                                                                                       ';
    fincashIncomeTable += '        <tr>                                                                                        ';
    fincashIncomeTable += '            <td>재고자산감소</td>                                                                      ';
    fincashIncomeTable += '            <td></td>                                                                               ';
    fincashIncomeTable += '            <td>'+FIN03311M00.onNumberWithCommas(fincashIncomeList[6].storedAssetAmt)+'</td>                    ';
    fincashIncomeTable += '            <td>'+FIN03311M00.onNumberWithCommas(fincashIncomeList[7].storedAssetAmt)+'</td>                    ';
    fincashIncomeTable += '            <td>'+FIN03311M00.onNumberWithCommas(fincashIncomeList[8].storedAssetAmt)+'</td>                    ';
    fincashIncomeTable += '            <td>'+FIN03311M00.onNumberWithCommas(fincashIncomeList[9].storedAssetAmt)+'</td>                    ';
    fincashIncomeTable += '            <td>'+FIN03311M00.onNumberWithCommas(fincashIncomeList[10].storedAssetAmt)+'</td>                   ';
    fincashIncomeTable += '            <td>'+FIN03311M00.onNumberWithCommas(fincashIncomeList[11].storedAssetAmt)+'</td>                   ';
    fincashIncomeTable += '        </tr>                                                                                       ';
    fincashIncomeTable += '        <tr>                                                                                        ';
    fincashIncomeTable += '            <td colspan="14">&nbsp;</td>                                                            ';
    fincashIncomeTable += '        </tr>                                                                                       ';
    fincashIncomeTable += '        <tr class="active">                                                                         ';
    fincashIncomeTable += '            <td>총 당월 현금수입</td>                                                                  ';
    fincashIncomeTable += '            <td></td>                                                                               ';
    fincashIncomeTable += '            <td>'+FIN03311M00.onNumberWithCommas(fincashIncomeList[6].cashIncomeTotal)+'</td>                   ';
    fincashIncomeTable += '            <td>'+FIN03311M00.onNumberWithCommas(fincashIncomeList[7].cashIncomeTotal)+'</td>                   ';
    fincashIncomeTable += '            <td>'+FIN03311M00.onNumberWithCommas(fincashIncomeList[8].cashIncomeTotal)+'</td>                   ';
    fincashIncomeTable += '            <td>'+FIN03311M00.onNumberWithCommas(fincashIncomeList[9].cashIncomeTotal)+'</td>                   ';
    fincashIncomeTable += '            <td>'+FIN03311M00.onNumberWithCommas(fincashIncomeList[10].cashIncomeTotal)+'</td>                  ';
    fincashIncomeTable += '            <td>'+FIN03311M00.onNumberWithCommas(fincashIncomeList[11].cashIncomeTotal)+'</td>                  ';
    fincashIncomeTable += '        </tr>                                                                                       ';
    fincashIncomeTable += '    </tbody>                                                                                        ';
    fincashIncomeTable += '</table>                                                                                            ';
    fincashIncomeTable += '<!--//현금수입테이블-->                                                                                ';
    fincashIncomeTable += '</div>                                                                                              ';
    
        $("#fincashIncomeTable").html(fincashIncomeTable);
    };
    


FIN03311M00Component.prototype.QsrtFinRsltCallback = function(result) {

    console.log('QsrtFinRsltCallback start');

    var me = FIN03311M00;

    if (result != null) {

         var res = JSON.parse(result);

        if (res.success) {

            me.onQstrInfo(res);
            me.onFinCashIncomeList();
            overlay.hide();

        } else {
            bootbox.alert(res.msg);
            overlay.hide();
        }

    } else {
        overlay.hide();
    }

};


FIN03311M00Component.prototype.getQsrtNo = function(qsrtNo) {

    var totalAmt = 0;

    if (qsrtNo == 'qsrtNo41') {

        for (var i = 0 ; i < (qsrtInfo.qsrtNo4['no1']).length; i++) {
            if ((qsrtInfo.qsrtNo4['no1'])[i] != null) totalAmt += Number((qsrtInfo.qsrtNo4['no1'])[i].rsltVl);
        }
    }

    return numberWithCommas(totalAmt);

};

FIN03311M00Component.prototype.onSave = function() {

    var me = FIN03311M00;

    bootbox.confirm({
        message: "저장하시겠습니까?",
        buttons: {
            confirm: {
                label: 'Yes',
                className: 'btn-success'
            },
            cancel: {
                label: 'No',
                className: 'btn-danger'
            }
        },
        callback: function (result) {

            if (result) {
                me.onQsrtSave();
            }


        }           
    });            


};


FIN03311M00Component.prototype.qsrtFinRsltSaveCallback = function(result) {
	
	if (result != null) {

        var res = JSON.parse(result);

       if (res.success) {

    	   bootbox.alert(res.msg);
           overlay.hide();

           FIN03311M00.initQsrtSave();

       } else {
           bootbox.alert(res.msg);
           overlay.hide();
       }

   } else {
       overlay.hide();
   }
	
};


FIN03311M00Component.prototype.onNumberWithCommas = function(totalAmt) {
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
    FIN03311M00.ngOnInit();



});

