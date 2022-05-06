
var FIN04003M00 = new FIN04003M00Component();

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

function FIN04003M00Component() {

};

FIN04003M00Component.prototype.ngOnInit = function(){
    var me = FIN04003M00;

    bootbox.alert('여기 도출된 재무컨설팅 결과에 대해서는 책임지지 않습니다. 재무의사결정 시에는  Business Flatform으로 문의하시기 바랍니다<br/>< 공지사항 참조 >',
        function() {
            entpName = finCom.name;
            stacYy = finCom.stacYy; 
            bzn = finCom.bzn;

            $("span[name='entpName']").each(function (idx) {
                $("span[name='entpName']").eq(idx).html(entpName);
            });

            overlay.show();

            qsrtNo81 = new QsrtNo81();
            qsrtNo91 = new QsrtNo91();
            qsrtNo101 = new QsrtNo101();

            $("#grid-list11").bootgrid('destroy');
            $("#grid-list11").bootgrid({navigation:0, rowSelect: true, rowCount: -1});

            $("#grid-list12").bootgrid('destroy');
            $("#grid-list12").bootgrid({navigation:0, rowSelect: true, rowCount: -1});

            $("#grid-list21").bootgrid('destroy');
            $("#grid-list21").bootgrid({navigation:0, rowSelect: true, rowCount: -1});

            $("#grid-list31").bootgrid('destroy');
            $("#grid-list31").bootgrid({navigation:0, rowSelect: true, rowCount: -1});

            $("#grid-list41").bootgrid('destroy');
            $("#grid-list41").bootgrid({navigation:0, rowSelect: true, rowCount: -1});

            $("#grid-list51").bootgrid('destroy');
            $("#grid-list51").bootgrid({navigation:0, rowSelect: true, rowCount: -1});

            $("#grid-list61").bootgrid('destroy');
            $("#grid-list61").bootgrid({navigation:0, rowSelect: true, rowCount: -1});

            $("#grid-list62").bootgrid('destroy');
            $("#grid-list62").bootgrid({navigation:0, rowSelect: true, rowCount: -1});

            $("#grid-list71").bootgrid('destroy');
            $("#grid-list71").bootgrid({navigation:0, rowSelect: true, rowCount: -1});

            $("#grid-list72").bootgrid('destroy');
            $("#grid-list72").bootgrid({navigation:0, rowSelect: true, rowCount: -1});

            $("#grid-list73").bootgrid('destroy');
            $("#grid-list73").bootgrid({navigation:0, rowSelect: true, rowCount: -1});

            overlay.show();

            //현금흐름 설문지......
            finService.getQsrtMngRsltInfoList(finCom.alyid, finCom.stacYy, FIN04003M00.QsrtMngRsltCallback);

            $("#myTab a:first").tab("show");
            
            $("#initQsrtSave").click(function(){FIN04003M00.initQsrtSave();});
            $("#onQsrtSave").click(function() {FIN04003M00.onSave();});

            $("#initQsrtSave01").click(function(){FIN04003M00.initQsrtSave();});
            $("#onQsrtSave01").click(function() {FIN04003M00.onSave();});

            $("#onInit11").click(function() {FIN04003M00.onInit11();});
            $("#onSave11").click(function() {FIN04003M00.onSave11();});
            $("#onDel11").click(function() {FIN04003M00.onDel11();});

            $("#onInit12").click(function() {FIN04003M00.onInit12();});
            $("#onSave12").click(function() {FIN04003M00.onSave12();});
            $("#onDel12").click(function() {FIN04003M00.onDel12();});

            $("#onInit21").click(function() {FIN04003M00.onInit21();});
            $("#onSave21").click(function() {FIN04003M00.onSave21();});
            $("#onDel21").click(function() {FIN04003M00.onDel21();});

            $("#onInit31").click(function() {FIN04003M00.onInit31();});
            $("#onSave31").click(function() {FIN04003M00.onSave31();});
            $("#onDel31").click(function() {FIN04003M00.onDel31();});

            $("#onInit41").click(function() {FIN04003M00.onInit41();});
            $("#onSave41").click(function() {FIN04003M00.onSave41();});
            $("#onDel41").click(function() {FIN04003M00.onDel41();});

            $("#onInit51").click(function() {FIN04003M00.onInit51();});
            $("#onSave51").click(function() {FIN04003M00.onSave51();});
            $("#onDel51").click(function() {FIN04003M00.onDel51();});

            $("#onInit61").click(function() {FIN04003M00.onInit61();});
            $("#onSave61").click(function() {FIN04003M00.onSave61();});
            $("#onDel61").click(function() {FIN04003M00.onDel61();});

            $("#onInit62").click(function() {FIN04003M00.onInit62();});
            $("#onSave62").click(function() {FIN04003M00.onSave62();});
            $("#onDel62").click(function() {FIN04003M00.onDel62();});

            $("#onInit81").click(function() {FIN04003M00.onInit81();});
            $("#onSave81").click(function() {FIN04003M00.onSave81();});
            $("#onDel81").click(function() {FIN04003M00.onDel81();});

            $("#onInit91").click(function() {FIN04003M00.onInit91();});
            $("#onSave91").click(function() {FIN04003M00.onSave91();});
            $("#onDel91").click(function() {FIN04003M00.onDel91();});

            $("#onInit101").click(function() {FIN04003M00.onInit101();});
            $("#onSave101").click(function() {FIN04003M00.onSave101();});
            $("#onDel101").click(function() {FIN04003M00.onDel101();});
            

        }
    );
};

FIN04003M00Component.prototype.QsrtMngRsltCallback = function(result) {

    if (result != null) {

         var res = JSON.parse(result);

        if (res.success) {

            FIN04003M00.onQstrInfo01(res);
            FIN04003M00.onBusinessWorkPattern();
            overlay.hide();

        } else {
            bootbox.alert(res.msg);
            overlay.hide();
        }

    } else {
        overlay.hide();
    }

};

FIN04003M00Component.prototype.onQstrInfo01 = function(res) {

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

FIN04003M00Component.prototype.QsrtFinRsltCallback = function(result) {

    var me = FIN04003M00;

    if (result != null) {

         var res = JSON.parse(result);

        if (res.success) {

            me.onQstrInfo(res);

            me.onFinCashIncomeList();

            me.onFinCashBdgtAmt();

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

//경영투자 분석 설문지
FIN04003M00Component.prototype.onQstrInfo = function(res) {
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
        
        var rowData1 = [];

        if (qsrtNo8 != null) {

             qsrtNo8['no1'].forEach(function (selectedRow, index) {

                rowData1.push({
                            kindNm:selectedRow.kindNm,
                            etcNm:selectedRow.etcNm,
                            trmDsncNm:selectedRow.trmDsncNm,
                            etcIrt:selectedRow.etcIrt,
                            amt:selectedRow.rsltVl,
                            baseYm:selectedRow.baseYm,
                            alyid:selectedRow.alyid,
                            itemId:selectedRow.itemId,
                            lprbmNo:selectedRow.lprbmNo,
                            sprbmNo:selectedRow.sprbmNo,
                            lsqsTcd:selectedRow.lsqsTcd,
                            qstrId:selectedRow.qstrId,
                            delYn:selectedRow.delYn,
                            rsltId:selectedRow.rsltId,
                            idx:idx++
                        });
             });

        }

        //grid-list71
        $("#grid-list71").bootgrid("destroy");

        $("#grid-list71").bootgrid({navigation:0, rowSelect: true, rowCount: -1}).bootgrid("append", rowData1)
        .on("click.rs.jquery.bootgrid", function (e, columns, rows){
                 $("#qsrtNo81_kindNm").val(rows.kindNm);
                 $("#qsrtNo81_etcNm").val(rows.etcNm);
                 $("#qsrtNo81_trmDsncNm").val(rows.trmDsncNm);
                 $("#qsrtNo81_etcIrt").val(rows.etcIrt);
                 $("#qsrtNo81_rsltVl").val(rows.amt);
                 $("#qsrtNo81_baseYm").val(rows.baseYm);

                 qsrtNo81 = new QsrtNo81();
                 qsrtNo81.kindNm = rows.kindNm;
                 qsrtNo81.baseYm = rows.baseYm;
                 qsrtNo81.rsltVl = rows.amt;
                 qsrtNo81.etcNm = rows.etcNm;
                 qsrtNo81.etcIrt = rows.etcIrt;
                 qsrtNo81.alyid = rows.alyid;
                 qsrtNo81.itemId = rows.itemId;
                 qsrtNo81.lprbmNo = rows.lprbmNo;
                 qsrtNo81.sprbmNo = rows.sprbmNo;
                 qsrtNo81.lsqsTcd = rows.lsqsTcd;
                 qsrtNo81.qstrId = rows.qstrId;
                 qsrtNo81.delYn = rows.delYn;
                 qsrtNo81.rsltId = rows.rsltId;
                 qsrtNo81.idx = rows.idx;

                 console.log('qsrtNo81 >> ', qsrtNo81);

        });

        var rowData2 = [];

        idx = 1;

        if (qsrtNo9 != null) {

             qsrtNo9['no1'].forEach(function (selectedRow, index) {

                rowData2.push({
                            kindNm:selectedRow.kindNm,
                            etcNm:selectedRow.etcNm,
                            trmDsncNm:selectedRow.trmDsncNm,
                            etcIrt:selectedRow.etcIrt,
                            amt:selectedRow.rsltVl,
                            baseYm:selectedRow.baseYm,
                            alyid:selectedRow.alyid,
                            itemId:selectedRow.itemId,
                            lprbmNo:selectedRow.lprbmNo,
                            sprbmNo:selectedRow.sprbmNo,
                            lsqsTcd:selectedRow.lsqsTcd,
                            qstrId:selectedRow.qstrId,
                            delYn:selectedRow.delYn,
                            rsltId:selectedRow.rsltId,
                            idx:idx++
                        });
             });

        }

        //grid-list72
        $("#grid-list72").bootgrid("destroy");

        $("#grid-list72").bootgrid({navigation:0, rowSelect: true, rowCount: -1}).bootgrid("append", rowData2)
        .on("click.rs.jquery.bootgrid", function (e, columns, rows){
                 $("#qsrtNo91_kindNm").val(rows.kindNm);
                 $("#qsrtNo91_etcNm").val(rows.etcNm);
                 $("#qsrtNo91_trmDsncNm").val(rows.trmDsncNm);
                 $("#qsrtNo91_etcIrt").val(rows.etcIrt);
                 $("#qsrtNo91_rsltVl").val(rows.amt);
                 $("#qsrtNo91_baseYm").val(rows.baseYm);

                 qsrtNo91 = new QsrtNo91();
                 qsrtNo91.kindNm = rows.kindNm;
                 qsrtNo91.baseYm = rows.baseYm;
                 qsrtNo91.rsltVl = rows.amt;
                 qsrtNo91.etcNm = rows.etcNm;
                 qsrtNo91.etcIrt = rows.etcIrt;
                 qsrtNo91.alyid = rows.alyid;
                 qsrtNo91.itemId = rows.itemId;
                 qsrtNo91.lprbmNo = rows.lprbmNo;
                 qsrtNo91.sprbmNo = rows.sprbmNo;
                 qsrtNo91.lsqsTcd = rows.lsqsTcd;
                 qsrtNo91.qstrId = rows.qstrId;
                 qsrtNo91.delYn = rows.delYn;
                 qsrtNo91.rsltId = rows.rsltId;
                 qsrtNo91.idx = rows.idx;

                 console.log('qsrtNo91 >> ', qsrtNo91);
        });

        var rowData3 = [];

        idx = 1;

        if (qsrtNo10 != null) {

             qsrtNo10['no1'].forEach(function (selectedRow, index) {

                rowData3.push({
                            kindNm:selectedRow.kindNm,
                            etcNm:selectedRow.etcNm,
                            trmDsncNm:selectedRow.trmDsncNm,
                            etcIrt:selectedRow.etcIrt,
                            amt:selectedRow.rsltVl,
                            baseYm:selectedRow.baseYm,
                            alyid:selectedRow.alyid,
                            itemId:selectedRow.itemId,
                            lprbmNo:selectedRow.lprbmNo,
                            sprbmNo:selectedRow.sprbmNo,
                            lsqsTcd:selectedRow.lsqsTcd,
                            qstrId:selectedRow.qstrId,
                            delYn:selectedRow.delYn,
                            rsltId:selectedRow.rsltId,
                            idx:idx++
                        });
             });

        }

        //grid-list73
        $("#grid-list73").bootgrid("destroy");

        $("#grid-list73").bootgrid({navigation:0, rowSelect: true, rowCount: -1}).bootgrid("append", rowData3)
        .on("click.rs.jquery.bootgrid", function (e, columns, rows){
                 $("#qsrtNo101_kindNm").val(rows.kindNm)
                 $("#qsrtNo101_etcNm").val(rows.etcNm)
                 $("#qsrtNo101_trmDsncNm").val(rows.trmDsncNm)
                 $("#qsrtNo101_etcIrt").val(rows.etcIrt)

                 qsrtNo101 = new QsrtNo101();
                 qsrtNo101.kindNm = rows.kindNm;
                 qsrtNo101.baseYm = rows.baseYm;
                 qsrtNo101.rsltVl = rows.amt;
                 qsrtNo101.etcNm = rows.etcNm;
                 qsrtNo101.etcIrt = rows.etcIrt;
                 qsrtNo101.alyid = rows.alyid;
                 qsrtNo101.itemId = rows.itemId;
                 qsrtNo101.lprbmNo = rows.lprbmNo;
                 qsrtNo101.sprbmNo = rows.sprbmNo;
                 qsrtNo101.lsqsTcd = rows.lsqsTcd;
                 qsrtNo101.qstrId = rows.qstrId;
                 qsrtNo101.delYn = rows.delYn;
                 qsrtNo101.rsltId = rows.rsltId;
                 qsrtNo101.idx = rows.idx;

                 console.log('qsrtNo101 >> ', qsrtNo101);

        });

        //1-1
        (qsrtInfo.qsrtNo1['no1']).forEach(function (selectedRow, index) {

            kindNm = selectedRow.kindNm;

            if (indx == 1) {
                qNo1 = new QsrtNo1();
                qNo1.kindNm = kindNm;
                indx++;
            }


            if (qNo1.kindNm != '' && qNo1.kindNm != null && qNo1.kindNm != undefined) {
                if (kindNm != qNo1.kindNm) {
                    rowData.push({
                                kindNm:qNo1.kindNm,
                                monthAmt1:qNo1.monthAmt1,
                                monthAmt2:qNo1.monthAmt2,
                                monthAmt3:qNo1.monthAmt3,
                                monthAmt4:qNo1.monthAmt4,
                                monthAmt5:qNo1.monthAmt5,
                                monthAmt6:qNo1.monthAmt6,
                                monthAmt7:qNo1.monthAmt7,
                                monthAmt8:qNo1.monthAmt8,
                                monthAmt9:qNo1.monthAmt9,
                                monthAmt10:qNo1.monthAmt10,
                                monthAmt11:qNo1.monthAmt11,
                                monthAmt12:qNo1.monthAmt12,
                                idx:idx++
                        });
                    
                    qNo1 = new QsrtNo1();
                    qNo1.kindNm = kindNm;
                }
            }            

            day = selectedRow.baseYm;
            day = day.substring(4,6);
            intDay = Number(day);

            console.log("ojh qNo1 intDay>>> ", intDay + " : " + selectedRow.baseYm + " : " + day);
            console.log("ojh qNo1 selectedRow>>> ", selectedRow);
            

            if (intDay == 1)  qNo1.monthAmt1 = Number(selectedRow.rsltVl);
            if (intDay == 2)  qNo1.monthAmt2 = Number(selectedRow.rsltVl);
            if (intDay == 3)  qNo1.monthAmt3 = Number(selectedRow.rsltVl);
            if (intDay == 4)  qNo1.monthAmt4 = Number(selectedRow.rsltVl);
            if (intDay == 5)  qNo1.monthAmt5 = Number(selectedRow.rsltVl);
            if (intDay == 6)  qNo1.monthAmt6 = Number(selectedRow.rsltVl);
            if (intDay == 7)  qNo1.monthAmt7 = Number(selectedRow.rsltVl);
            if (intDay == 8)  qNo1.monthAmt8 = Number(selectedRow.rsltVl);
            if (intDay == 9)  qNo1.monthAmt9 = Number(selectedRow.rsltVl);
            if (intDay == 10)  qNo1.monthAmt10 = Number(selectedRow.rsltVl);
            if (intDay == 11)  qNo1.monthAmt11 = Number(selectedRow.rsltVl);
            if (intDay == 12)  qNo1.monthAmt12 = Number(selectedRow.rsltVl);

            console.log("ojh qNo1 qNo1>>> ", qNo1);
            console.log("======================================");

        });

        console.log("ojh qNo1 111111111111>>> ", qNo1);
         console.log("ojh rowData 22222222222222>>> ", rowData);

        if (qNo1.kindNm != '' && qNo1.kindNm != null && qNo1.kindNm != undefined) {

            rowData.push({
                                kindNm:qNo1.kindNm,
                                monthAmt1:qNo1.monthAmt1,
                                monthAmt2:qNo1.monthAmt2,
                                monthAmt3:qNo1.monthAmt3,
                                monthAmt4:qNo1.monthAmt4,
                                monthAmt5:qNo1.monthAmt5,
                                monthAmt6:qNo1.monthAmt6,
                                monthAmt7:qNo1.monthAmt7,
                                monthAmt8:qNo1.monthAmt8,
                                monthAmt9:qNo1.monthAmt9,
                                monthAmt10:qNo1.monthAmt10,
                                monthAmt11:qNo1.monthAmt11,
                                monthAmt12:qNo1.monthAmt12,
                                idx:idx
                        });

        }


        console.log("ojh rowData 111111111111>>> ", rowData);
        
        //grid-list11
        $("#grid-list11").bootgrid("destroy");

        $("#grid-list11").bootgrid({navigation:0, rowSelect: true, rowCount: -1}).bootgrid("append", rowData)
        .on("click.rs.jquery.bootgrid", function (e, columns, rows){
           $("#qsrtNo11_kindNm").val(rows.kindNm)
           $("#qsrtNo11_monthAmt1").val(rows.monthAmt1)
           $("#qsrtNo11_monthAmt2").val(rows.monthAmt2)
           $("#qsrtNo11_monthAmt3").val(rows.monthAmt3)
           $("#qsrtNo11_monthAmt4").val(rows.monthAmt4)
           $("#qsrtNo11_monthAmt5").val(rows.monthAmt5)
           $("#qsrtNo11_monthAmt6").val(rows.monthAmt6)
           $("#qsrtNo11_monthAmt7").val(rows.monthAmt7)
           $("#qsrtNo11_monthAmt8").val(rows.monthAmt8)
           $("#qsrtNo11_monthAmt9").val(rows.monthAmt9)
           $("#qsrtNo11_monthAmt10").val(rows.monthAmt10)
           $("#qsrtNo11_monthAmt11").val(rows.monthAmt11)
           $("#qsrtNo11_monthAmt12").val(rows.monthAmt12)
           $("#qsrtNo11_idx").val(rows.idx);
        });

        //1-2
        qNo1 = new QsrtNo1();
        kindNm = "";
        day = "";
        intDay = 0;
        rowData = [];

        idx = 1;

       (qsrtInfo.qsrtNo1['no2']).forEach(function (selectedRow, index) {

            console.log("index >>> ", index);

            if (index == 0) {
                kindNm = selectedRow.kindNm;
                qNo1 = new QsrtNo1();
                qNo1.kindNm = kindNm;
                idx = 1;
            }

            if (kindNm != selectedRow.kindNm) {

                rowData.push({
                        kindNm:qNo1.kindNm,
                        monthAmt1:qNo1.monthAmt1,
                        monthAmt2:qNo1.monthAmt2,
                        monthAmt3:qNo1.monthAmt3,
                        monthAmt4:qNo1.monthAmt4,
                        monthAmt5:qNo1.monthAmt5,
                        monthAmt6:qNo1.monthAmt6,
                        monthAmt7:qNo1.monthAmt7,
                        monthAmt8:qNo1.monthAmt8,
                        monthAmt9:qNo1.monthAmt9,
                        monthAmt10:qNo1.monthAmt10,
                        monthAmt11:qNo1.monthAmt11,
                        monthAmt12:qNo1.monthAmt12,
                        idx:idx++
                });


                kindNm = selectedRow.kindNm;
                qNo1 = new QsrtNo1();
                qNo1.kindNm = kindNm;


            }

            day = selectedRow.baseYm;
            day = day.substring(4,6);
            intDay = Number(day);

            console.log("intDay >>> ", intDay);
            
            if (intDay == 1)  qNo1.monthAmt1 = Number(selectedRow.rsltVl);
            if (intDay == 2)  qNo1.monthAmt2 = Number(selectedRow.rsltVl);
            if (intDay == 3)  qNo1.monthAmt3 = Number(selectedRow.rsltVl);
            if (intDay == 4)  qNo1.monthAmt4 = Number(selectedRow.rsltVl);
            if (intDay == 5)  qNo1.monthAmt5 = Number(selectedRow.rsltVl);
            if (intDay == 6)  qNo1.monthAmt6 = Number(selectedRow.rsltVl);
            if (intDay == 7)  qNo1.monthAmt7 = Number(selectedRow.rsltVl);
            if (intDay == 8)  qNo1.monthAmt8 = Number(selectedRow.rsltVl);
            if (intDay == 9)  qNo1.monthAmt9 = Number(selectedRow.rsltVl);
            if (intDay == 10)  qNo1.monthAmt10 = Number(selectedRow.rsltVl);
            if (intDay == 11)  qNo1.monthAmt11 = Number(selectedRow.rsltVl);
            if (intDay == 12)  qNo1.monthAmt12 = Number(selectedRow.rsltVl);

             console.log("kindNm >>> ", kindNm);

             console.log("kindNm >>> ", selectedRow.kindNm);

        });

        if (qNo1.kindNm != '' && qNo1.kindNm != null && qNo1.kindNm != undefined) {
            rowData.push({
                        kindNm:qNo1.kindNm,
                        monthAmt1:qNo1.monthAmt1,
                        monthAmt2:qNo1.monthAmt2,
                        monthAmt3:qNo1.monthAmt3,
                        monthAmt4:qNo1.monthAmt4,
                        monthAmt5:qNo1.monthAmt5,
                        monthAmt6:qNo1.monthAmt6,
                        monthAmt7:qNo1.monthAmt7,
                        monthAmt8:qNo1.monthAmt8,
                        monthAmt9:qNo1.monthAmt9,
                        monthAmt10:qNo1.monthAmt10,
                        monthAmt11:qNo1.monthAmt11,
                        monthAmt12:qNo1.monthAmt12,
                        idx:idx
                });  

        }

        //grid-list12
        $("#grid-list12").bootgrid("destroy");

        $("#grid-list12").bootgrid({navigation:0, rowSelect: true, rowCount: -1}).bootgrid("append", rowData)
        .on("click.rs.jquery.bootgrid", function (e, columns, rows){
                $("#qsrtNo12_kindNm").val(rows.kindNm)
                $("#qsrtNo12_monthAmt1").val(rows.monthAmt1)
                $("#qsrtNo12_monthAmt2").val(rows.monthAmt2)
                $("#qsrtNo12_monthAmt3").val(rows.monthAmt3)
                $("#qsrtNo12_monthAmt4").val(rows.monthAmt4)
                $("#qsrtNo12_monthAmt5").val(rows.monthAmt5)
                $("#qsrtNo12_monthAmt6").val(rows.monthAmt6)
                $("#qsrtNo12_monthAmt7").val(rows.monthAmt7)
                $("#qsrtNo12_monthAmt8").val(rows.monthAmt8)
                $("#qsrtNo12_monthAmt9").val(rows.monthAmt9)
                $("#qsrtNo12_monthAmt10").val(rows.monthAmt10)
                $("#qsrtNo12_monthAmt11").val(rows.monthAmt11)
                $("#qsrtNo12_monthAmt12").val(rows.monthAmt12)
                $("#qsrtNo12_idx").val(rows.idx);
        }); 

        day = "";
        intDay = 0;
        rowData = [];

        idx = 1;   

        //2-1
        (qsrtInfo.qsrtNo2['no1']).forEach(function (selectedRow, index) {

            qNo2 = new QsrtNo2();

            day = selectedRow.baseYm;
            day = day.substring(4,6);
            intDay = Number(day);
            
            console.log("ojh day >>> ", selectedRow.baseYm);
            console.log("ojh day >>> ", day);
            console.log("ojh day >>> ", intDay);

            qNo2.month = "" + intDay;
            qNo2.monthAmt = Number(selectedRow.rsltVl);

            console.log("qsrtNo2 >>>> " , selectedRow.rsltVl);

            console.log("qsrtNo2 >>>> " , qNo2.monthAmt);

            rowData.push({
                month : qNo2.month,
                monthAmt : qNo2.monthAmt,
                idx : idx++
            })

        });

        //grid-list21
        $("#grid-list21").bootgrid("destroy");

        $("#grid-list21").bootgrid({navigation:0, rowSelect: true, rowCount: -1}).bootgrid("append", rowData)
        .on("click.rs.jquery.bootgrid", function (e, columns, rows){
                $("#qsrtNo21_month").val(rows.month)
                $("#qsrtNo21_monthAmt").val(rows.monthAmt)
                $("#qsrtNo21_idx").val(rows.idx)
        });

        //3-1
        day = "";
        intDay = 0;
        rowData = [];

        idx = 1;   

        //3-1
        (qsrtInfo.qsrtNo3['no1']).forEach(function (selectedRow, index) {

            qNo3 = new QsrtNo3();

            day = selectedRow.baseYm;
            day = day.substring(4,6);
            intDay = Number(day);

            qNo3.month = "" + intDay;
            qNo3.monthAmt = Number(selectedRow.rsltVl);

            console.log("qsrtNo2 >>>> " , selectedRow.rsltVl);

            console.log("qsrtNo2 >>>> " , qNo3.monthAmt);

            rowData.push({
                month : qNo3.month,
                monthAmt : qNo3.monthAmt,
                idx : idx++
            })

        });

        //grid-list31
        $("#grid-list31").bootgrid("destroy");

        $("#grid-list31").bootgrid({navigation:0, rowSelect: true, rowCount: -1}).bootgrid("append", rowData)
        .on("click.rs.jquery.bootgrid", function (e, columns, rows){
                $("#qsrtNo31_month").val(rows.month);
                $("#qsrtNo31_monthAmt").val(rows.monthAmt);
                $("#qsrtNo31_idx").val(rows.idx);
        });

        //4-1
        day = "";
        intDay = 0;
        rowData= [];

        idx = 1;

       (qsrtInfo.qsrtNo4['no1']).forEach(function (selectedRow, index) {

            console.log("index >>> ", index);

            qNo4 = new QsrtNo4();

            day = selectedRow.baseYm;
            day = day.substring(4,6);
            intDay = Number(day);

            console.log("intDay >>> ", intDay);

            qNo4.kindNm = selectedRow.kindNm;
            qNo4.month = "" + intDay;
            qNo4.monthAmt = Number(selectedRow.rsltVl);

            rowData.push({
                        kindNm:qNo4.kindNm,
                        month:qNo4.month,
                        monthAmt:qNo4.monthAmt,
                        idx:idx++
            });

        });

        //grid-list41
        $("#grid-list41").bootgrid("destroy");

        $("#grid-list41").bootgrid({navigation:0, rowSelect: true, rowCount: -1}).bootgrid("append", rowData)
        .on("click.rs.jquery.bootgrid", function (e, columns, rows){
                $("#qsrtNo41_kindNm").val(rows.kindNm);
                $("#qsrtNo41_month").val(rows.month);
                $("#qsrtNo41_monthAmt").val(rows.monthAmt);
                $("#qsrtNo41_idx").val(rows.idx);
        });

        //5-1
        day = "";
        intDay = 0;
        rowData= [];

        idx = 1;

       (qsrtInfo.qsrtNo5['no1']).forEach(function (selectedRow, index) {

            console.log("index >>> ", index);

            qNo5 = new QsrtNo5();

            day = selectedRow.baseYm;
            day = day.substring(4,6);
            intDay = Number(day);

            console.log("intDay >>> ", intDay);

            qNo5.kindNm = selectedRow.kindNm;
            qNo5.month = "" + intDay;
            qNo5.monthAmt = Number(selectedRow.rsltVl);

            rowData.push({
                        kindNm:qNo5.kindNm,
                        month:qNo5.month,
                        monthAmt:qNo5.monthAmt,
                        idx:idx++
            });

        });

        //grid-list51
        $("#grid-list51").bootgrid("destroy");

        $("#grid-list51").bootgrid({navigation:0, rowSelect: true, rowCount: -1}).bootgrid("append", rowData)
        .on("click.rs.jquery.bootgrid", function (e, columns, rows){
                $("#qsrtNo51_kindNm").val(rows.kindNm);
                $("#qsrtNo51_month").val(rows.month);
                $("#qsrtNo51_monthAmt").val(rows.monthAmt);
                $("#qsrtNo51_idx").val(rows.idx);
        });        

        //6-1
        day = "";
        intDay = 0;
        rowData = [];

        idx = 1;  

        (qsrtInfo.qsrtNo6['no1']).forEach(function (selectedRow, index) {

            qNo6 = new QsrtNo6();

            day = selectedRow.baseYm;
            day = day.substring(4,6);
            intDay = Number(day);

            qNo6.month = "" + intDay;
            qNo6.monthAmt = Number(selectedRow.rsltVl);

            console.log("qsrtNo2 >>>> " , selectedRow.rsltVl);

            console.log("qsrtNo2 >>>> " , qNo6.monthAmt);

            rowData.push({
                month : qNo6.month,
                monthAmt : qNo6.monthAmt,
                idx : idx++
            })

        });

        //grid-list61
        $("#grid-list61").bootgrid("destroy");

        $("#grid-list61").bootgrid({navigation:0, rowSelect: true, rowCount: -1}).bootgrid("append", rowData)
        .on("click.rs.jquery.bootgrid", function (e, columns, rows){
                $("#qsrtNo61_month").val(rows.month);
                $("#qsrtNo61_monthAmt").val(rows.monthAmt);
                $("#qsrtNo61_idx").val(rows.idx);
        });         

        //6-2
        day = "";
        intDay = 0;
        rowData = [];

        idx = 1;  

        (qsrtInfo.qsrtNo6['no2']).forEach(function (selectedRow, index) {

            qNo6 = new QsrtNo6();

            day = selectedRow.baseYm;
            day = day.substring(4,6);
            intDay = Number(day);

            qNo6.month = "" + intDay;
            qNo6.monthAmt = Number(selectedRow.rsltVl);

            console.log("qsrtNo2 >>>> " , selectedRow.rsltVl);

            console.log("qsrtNo2 >>>> " , qNo6.monthAmt);

            rowData.push({
                month : qNo6.month,
                monthAmt : qNo6.monthAmt,
                idx : idx++
            })

        });

        //grid-list61
        $("#grid-list62").bootgrid("destroy");

        $("#grid-list62").bootgrid({navigation:0, rowSelect: true, rowCount: -1}).bootgrid("append", rowData)
        .on("click.rs.jquery.bootgrid", function (e, columns, rows){
                $("#qsrtNo62_month").val(rows.month);
                $("#qsrtNo62_monthAmt").val(rows.monthAmt);
                $("#qsrtNo62_idx").val(rows.idx);
        }); 
        
        $("#qsrtInfo_qsrtNo7_no1_rsltVl").val((qsrtInfo.qsrtNo7['no1']).rsltVl);
        $("#qsrtInfo_qsrtNo7_no2_rsltVl").val((qsrtInfo.qsrtNo7['no2']).rsltVl);
        $("#qsrtInfo_qsrtNo11_no1_rsltVl").val((qsrtInfo.qsrtNo11['no1']).rsltVl);	
        

};

FIN04003M00Component.prototype.initQsrtSave = function() {
    
	FIN04003M00.initArr01();
	
	overlay.show();

    $("#grid-list11").bootgrid('destroy');
    $("#grid-list11").bootgrid({navigation:0, rowSelect: true, rowCount: -1});

    $("#grid-list12").bootgrid('destroy');
    $("#grid-list12").bootgrid({navigation:0, rowSelect: true, rowCount: -1});

    $("#grid-list21").bootgrid('destroy');
    $("#grid-list21").bootgrid({navigation:0, rowSelect: true, rowCount: -1});

    $("#grid-list31").bootgrid('destroy');
    $("#grid-list31").bootgrid({navigation:0, rowSelect: true, rowCount: -1});

    $("#grid-list41").bootgrid('destroy');
    $("#grid-list41").bootgrid({navigation:0, rowSelect: true, rowCount: -1});

    $("#grid-list51").bootgrid('destroy');
    $("#grid-list51").bootgrid({navigation:0, rowSelect: true, rowCount: -1});

    $("#grid-list61").bootgrid('destroy');
    $("#grid-list61").bootgrid({navigation:0, rowSelect: true, rowCount: -1});

    $("#grid-list62").bootgrid('destroy');
    $("#grid-list62").bootgrid({navigation:0, rowSelect: true, rowCount: -1});

    $("#qsrtInfo_qsrtNo7_no1_rsltVl").val('');
    $("#qsrtInfo_qsrtNo7_no2_rsltVl").val('');
    $("#qsrtInfo_qsrtNo11_no1_rsltVl").val('');	

    //재무 투자 분석 설문지......
    finService.getQsrtFinRsltInfoList(finCom.alyid, finCom.stacYy, FIN04003M00.QsrtFinRsltCallback);

}
    
FIN04003M00Component.prototype.initArr01 = function() {

    qsrtNo11 = new QsrtNo1();
    qsrtNo12 = new QsrtNo1();
    qsrtNo21 = new QsrtNo2();
    qsrtNo31 = new QsrtNo3();
    qsrtNo41 = new QsrtNo4();        
    qsrtNo51 = new QsrtNo5();
    qsrtNo61 = new QsrtNo6();
    qsrtNo62 = new QsrtNo6();    

};

FIN04003M00Component.prototype.onSave = function() {

    var me = FIN04003M00;

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

FIN04003M00Component.prototype.onQsrtSave = function() {

    var me = FIN04003M00;
    var rowData = [];

    overlay.show();
    
    //1-1
    qsrtNo = new QsrtRsltInfo();
    qsrtNo = qsrtNoArr['qsrtNo11'];
    qsrtInfo.qsrtNo1['no1'] = [];
    rowData = [];
    rowData = $("#grid-list11").bootgrid("getCurrentRows");

    rowData.forEach(function (selectedRow, index) {

            qsrtNo.kindNm = selectedRow.kindNm;
            qsrtNo.rsltVl = selectedRow.monthAmt1;
            qsrtNo.baseYm = stacYy + "" + lpad("1","00");
            qsrtInfo.qsrtNo1['no1'] = qsrtRsltInfoArr(qsrtInfo.qsrtNo1['no1'], qsrtNo);

            qsrtNo.kindNm = selectedRow.kindNm;
            qsrtNo.rsltVl = selectedRow.monthAmt2;
            qsrtNo.baseYm = stacYy + "" + lpad("2","00");
            qsrtInfo.qsrtNo1['no1'] = qsrtRsltInfoArr(qsrtInfo.qsrtNo1['no1'], qsrtNo);

            qsrtNo.kindNm = selectedRow.kindNm;
            qsrtNo.rsltVl = selectedRow.monthAmt3;
            qsrtNo.baseYm = stacYy + "" + lpad("3","00");
            qsrtInfo.qsrtNo1['no1'] = qsrtRsltInfoArr(qsrtInfo.qsrtNo1['no1'], qsrtNo);

            qsrtNo.kindNm = selectedRow.kindNm;
            qsrtNo.rsltVl = selectedRow.monthAmt4;
            qsrtNo.baseYm = stacYy + "" + lpad("4","00");
            qsrtInfo.qsrtNo1['no1'] = qsrtRsltInfoArr(qsrtInfo.qsrtNo1['no1'], qsrtNo);

            qsrtNo.kindNm = selectedRow.kindNm;
            qsrtNo.rsltVl = selectedRow.monthAmt5;
            qsrtNo.baseYm = stacYy + "" + lpad("5","00");
            qsrtInfo.qsrtNo1['no1'] = qsrtRsltInfoArr(qsrtInfo.qsrtNo1['no1'], qsrtNo);

            qsrtNo.kindNm = selectedRow.kindNm;
            qsrtNo.rsltVl = selectedRow.monthAmt6;
            qsrtNo.baseYm = stacYy + "" + lpad("6","00");
            qsrtInfo.qsrtNo1['no1'] = qsrtRsltInfoArr(qsrtInfo.qsrtNo1['no1'], qsrtNo);

            qsrtNo.kindNm = selectedRow.kindNm;
            qsrtNo.rsltVl = selectedRow.monthAmt7;
            qsrtNo.baseYm = stacYy + "" + lpad("7","00");
            qsrtInfo.qsrtNo1['no1'] = qsrtRsltInfoArr(qsrtInfo.qsrtNo1['no1'], qsrtNo);

            qsrtNo.kindNm = selectedRow.kindNm;
            qsrtNo.rsltVl = selectedRow.monthAmt8;
            qsrtNo.baseYm = stacYy + "" + lpad("8","00");
            qsrtInfo.qsrtNo1['no1'] = qsrtRsltInfoArr(qsrtInfo.qsrtNo1['no1'], qsrtNo);

            qsrtNo.kindNm = selectedRow.kindNm;
            qsrtNo.rsltVl = selectedRow.monthAmt9;
            qsrtNo.baseYm = stacYy + "" + lpad("9","00");
            qsrtInfo.qsrtNo1['no1'] = qsrtRsltInfoArr(qsrtInfo.qsrtNo1['no1'], qsrtNo);

            qsrtNo.kindNm = selectedRow.kindNm;
            qsrtNo.rsltVl = selectedRow.monthAmt10;
            qsrtNo.baseYm = stacYy + "" + lpad("10","00");
            qsrtInfo.qsrtNo1['no1'] = qsrtRsltInfoArr(qsrtInfo.qsrtNo1['no1'], qsrtNo);

            qsrtNo.kindNm = selectedRow.kindNm;
            qsrtNo.rsltVl = selectedRow.monthAmt11;
            qsrtNo.baseYm = stacYy + "" + lpad("11","00");
            qsrtInfo.qsrtNo1['no1'] = qsrtRsltInfoArr(qsrtInfo.qsrtNo1['no1'], qsrtNo);

            qsrtNo.kindNm = selectedRow.kindNm;
            qsrtNo.rsltVl = selectedRow.monthAmt12;
            qsrtNo.baseYm = stacYy + "" + lpad("12","00");
            qsrtInfo.qsrtNo1['no1'] = qsrtRsltInfoArr(qsrtInfo.qsrtNo1['no1'], qsrtNo);                

        }    
    );

    
    //1-2
    qsrtNo = new QsrtRsltInfo();
    qsrtNo = qsrtNoArr['qsrtNo12'];
    qsrtInfo.qsrtNo1['no2'] = [];
    
    rowData = [];
    rowData = $("#grid-list12").bootgrid("getCurrentRows");
    rowData.forEach(function (selectedRow, index) {

            qsrtNo.kindNm = selectedRow.kindNm;
            qsrtNo.rsltVl = selectedRow.monthAmt1;
            qsrtNo.baseYm = stacYy + "" + lpad("1","00");
            qsrtInfo.qsrtNo1['no2'] = qsrtRsltInfoArr(qsrtInfo.qsrtNo1['no2'], qsrtNo);

            qsrtNo.kindNm = selectedRow.kindNm;
            qsrtNo.rsltVl = selectedRow.monthAmt2;
            qsrtNo.baseYm = stacYy + "" + lpad("2","00");
            qsrtInfo.qsrtNo1['no2'] = qsrtRsltInfoArr(qsrtInfo.qsrtNo1['no2'], qsrtNo);

            qsrtNo.kindNm = selectedRow.kindNm;
            qsrtNo.rsltVl = selectedRow.monthAmt3;
            qsrtNo.baseYm = stacYy + "" + lpad("3","00");
            qsrtInfo.qsrtNo1['no2'] = qsrtRsltInfoArr(qsrtInfo.qsrtNo1['no2'], qsrtNo);

            qsrtNo.kindNm = selectedRow.kindNm;
            qsrtNo.rsltVl = selectedRow.monthAmt4;
            qsrtNo.baseYm = stacYy + "" + lpad("4","00");
            qsrtInfo.qsrtNo1['no2'] = qsrtRsltInfoArr(qsrtInfo.qsrtNo1['no2'], qsrtNo);

            qsrtNo.kindNm = selectedRow.kindNm;
            qsrtNo.rsltVl = selectedRow.monthAmt5;
            qsrtNo.baseYm = stacYy + "" + lpad("5","00");
            qsrtInfo.qsrtNo1['no2'] = qsrtRsltInfoArr(qsrtInfo.qsrtNo1['no2'], qsrtNo);

            qsrtNo.kindNm = selectedRow.kindNm;
            qsrtNo.rsltVl = selectedRow.monthAmt6;
            qsrtNo.baseYm = stacYy + "" + lpad("6","00");
            qsrtInfo.qsrtNo1['no2'] = qsrtRsltInfoArr(qsrtInfo.qsrtNo1['no2'], qsrtNo);

            qsrtNo.kindNm = selectedRow.kindNm;
            qsrtNo.rsltVl = selectedRow.monthAmt7;
            qsrtNo.baseYm = stacYy + "" + lpad("7","00");
            qsrtInfo.qsrtNo1['no2'] = qsrtRsltInfoArr(qsrtInfo.qsrtNo1['no2'], qsrtNo);

            qsrtNo.kindNm = selectedRow.kindNm;
            qsrtNo.rsltVl = selectedRow.monthAmt8;
            qsrtNo.baseYm = stacYy + "" + lpad("8","00");
            qsrtInfo.qsrtNo1['no2'] = qsrtRsltInfoArr(qsrtInfo.qsrtNo1['no2'], qsrtNo);

            qsrtNo.kindNm = selectedRow.kindNm;
            qsrtNo.rsltVl = selectedRow.monthAmt9;
            qsrtNo.baseYm = stacYy + "" + lpad("9","00");
            qsrtInfo.qsrtNo1['no2'] = qsrtRsltInfoArr(qsrtInfo.qsrtNo1['no2'], qsrtNo);

            qsrtNo.kindNm = selectedRow.kindNm;
            qsrtNo.rsltVl = selectedRow.monthAmt10;
            qsrtNo.baseYm = stacYy + "" + lpad("10","00");
            qsrtInfo.qsrtNo1['no2'] = qsrtRsltInfoArr(qsrtInfo.qsrtNo1['no2'], qsrtNo);

            qsrtNo.kindNm = selectedRow.kindNm;
            qsrtNo.rsltVl = selectedRow.monthAmt11;
            qsrtNo.baseYm = stacYy + "" + lpad("11","00");
            qsrtInfo.qsrtNo1['no2'] = qsrtRsltInfoArr(qsrtInfo.qsrtNo1['no2'], qsrtNo);

            qsrtNo.kindNm = selectedRow.kindNm;
            qsrtNo.rsltVl = selectedRow.monthAmt12;
            qsrtNo.baseYm = stacYy + "" + lpad("12","00");
            qsrtInfo.qsrtNo1['no2'] = qsrtRsltInfoArr(qsrtInfo.qsrtNo1['no2'], qsrtNo);                

        }    
    );


    //2-1
    qsrtNo = new QsrtRsltInfo();
    qsrtNo = qsrtNoArr['qsrtNo21'];
    qsrtInfo.qsrtNo2['no1'] = [];
    
    rowData = [];
    rowData = $("#grid-list21").bootgrid("getCurrentRows");
    rowData.forEach(function (selectedRow, index) {

            qsrtNo.rsltVl = selectedRow.monthAmt;
            qsrtNo.baseYm = stacYy + "" + lpad(selectedRow.month,"00");
            qsrtInfo.qsrtNo2['no1'] = qsrtRsltInfoArr(qsrtInfo.qsrtNo2['no1'], qsrtNo);

        }    
    );

    //3-1
    qsrtNo = new QsrtRsltInfo();
    qsrtNo = qsrtNoArr['qsrtNo31'];
    qsrtInfo.qsrtNo3['no1'] = [];
    
    rowData = [];
    rowData = $("#grid-list31").bootgrid("getCurrentRows");
    rowData.forEach(function (selectedRow, index) {

            qsrtNo.rsltVl = selectedRow.monthAmt;
            qsrtNo.baseYm = stacYy + "" + lpad(selectedRow.month,"00");
            qsrtInfo.qsrtNo3['no1'] = qsrtRsltInfoArr(qsrtInfo.qsrtNo3['no1'], qsrtNo);

        }    
    );

    //4-1
    qsrtNo = new QsrtRsltInfo();
    qsrtNo = qsrtNoArr['qsrtNo41'];
    qsrtInfo.qsrtNo4['no1'] = [];
    
    rowData = [];
    rowData = $("#grid-list41").bootgrid("getCurrentRows");
    rowData.forEach(function (selectedRow, index) {

            qsrtNo.kindNm = selectedRow.kindNm;
            qsrtNo.rsltVl = selectedRow.monthAmt;
            qsrtNo.baseYm = stacYy + "" + lpad(selectedRow.month,"00");
            qsrtInfo.qsrtNo4['no1'] = qsrtRsltInfoArr(qsrtInfo.qsrtNo4['no1'], qsrtNo);

        }    
    );

    //5-1
    qsrtNo = new QsrtRsltInfo();
    qsrtNo = qsrtNoArr['qsrtNo51'];
    qsrtInfo.qsrtNo5['no1'] = [];
    
    rowData = [];
    rowData = $("#grid-list51").bootgrid("getCurrentRows");
    rowData.forEach(function (selectedRow, index) {

            qsrtNo.kindNm = selectedRow.kindNm;
            qsrtNo.rsltVl = selectedRow.monthAmt;
            qsrtNo.baseYm = stacYy + "" + lpad(selectedRow.month,"00");
            qsrtInfo.qsrtNo5['no1'] = qsrtRsltInfoArr(qsrtInfo.qsrtNo5['no1'], qsrtNo);

        }    
    );

    //6-1
    qsrtNo = new QsrtRsltInfo();
    qsrtNo = qsrtNoArr['qsrtNo61'];
    qsrtInfo.qsrtNo6['no1'] = [];
    
    rowData = [];
    rowData = $("#grid-list61").bootgrid("getCurrentRows");
    rowData.forEach(function (selectedRow, index) {

            qsrtNo.rsltVl = selectedRow.monthAmt;
            qsrtNo.baseYm = stacYy + "" + lpad(selectedRow.month,"00");
            qsrtInfo.qsrtNo6['no1'] = qsrtRsltInfoArr(qsrtInfo.qsrtNo6['no1'], qsrtNo);

        }    
    );

    //6-2
    qsrtNo = new QsrtRsltInfo();
    qsrtNo = qsrtNoArr['qsrtNo62'];
    qsrtInfo.qsrtNo6['no2'] = [];
    
    rowData = [];
    rowData = $("#grid-list62").bootgrid("getCurrentRows");
    rowData.forEach(function (selectedRow, index) {

            qsrtNo.rsltVl = selectedRow.monthAmt;
            qsrtNo.baseYm = stacYy + "" + lpad(selectedRow.month,"00");
            qsrtInfo.qsrtNo6['no2'] = qsrtRsltInfoArr(qsrtInfo.qsrtNo6['no2'], qsrtNo);

        }    
    );


    //8-1
    qsrtInfo.qsrtNo8['no1'] = [];
    
    rowData = [];
    rowData = $("#grid-list71").bootgrid("getCurrentRows");
    if ( rowData.length > 0 ) {

    	rowData.forEach(function (selectedRow, index) {

            var baseYm = selectedRow.baseYm;

            if (baseYm == null || baseYm == '' || baseYm == undefined) {
                baseYm = stacYy + "00";
            }

            if (baseYm.length <= 2) {
                baseYm = stacYy + lpad(baseYm, "00");
            }

            qsrtInfo.qsrtNo8['no1'].push({
                kindNm:selectedRow.kindNm,
                etcNm:selectedRow.etcNm,
                trmDsncNm:selectedRow.trmDsncNm,
                etcIrt:selectedRow.etcIrt,
                rsltVl:""+selectedRow.amt,
                baseYm:baseYm,
                alyid:selectedRow.alyid,
                itemId:selectedRow.itemId,
                lprbmNo:selectedRow.lprbmNo,
                sprbmNo:selectedRow.sprbmNo,
                lsqsTcd:selectedRow.lsqsTcd,
                qstrId:selectedRow.qstrId,
                delYn:selectedRow.delYn,
                rsltId:selectedRow.rsltId
            })

        });

    }

    //9-1
    qsrtInfo.qsrtNo9['no1'] = [];
    
    rowData = [];
    rowData = $("#grid-list72").bootgrid("getCurrentRows");
    if ( rowData.length > 0 ) {

    	rowData.forEach(function (selectedRow, index) {

            var baseYm = selectedRow.baseYm;

            if (baseYm == null || baseYm == '' || baseYm == undefined) {
                baseYm = stacYy + "00";
            }

            if (baseYm.length <= 2) {
                baseYm = stacYy + lpad(baseYm, "00");
            }

            qsrtInfo.qsrtNo9['no1'].push({
                kindNm:selectedRow.kindNm,
                etcNm:selectedRow.etcNm,
                trmDsncNm:selectedRow.trmDsncNm,
                etcIrt:selectedRow.etcIrt,
                rsltVl:""+selectedRow.amt,
                baseYm:baseYm,
                alyid:selectedRow.alyid,
                itemId:selectedRow.itemId,
                lprbmNo:selectedRow.lprbmNo,
                sprbmNo:selectedRow.sprbmNo,
                lsqsTcd:selectedRow.lsqsTcd,
                qstrId:selectedRow.qstrId,
                delYn:selectedRow.delYn,
                rsltId:selectedRow.rsltId
            })

        });

    }

    //10-1
    qsrtInfo.qsrtNo10['no1'] = [];
    
    rowData = [];
    rowData = $("#grid-list73").bootgrid("getCurrentRows");
    if ( rowData.length > 0 ) {

    	rowData.forEach(function (selectedRow, index) {

            var baseYm = selectedRow.baseYm;

            if (baseYm == null || baseYm == '' || baseYm == undefined) {
                baseYm = stacYy + "00";
            }

            if (baseYm.length <= 2) {
                baseYm = stacYy + lpad(baseYm, "00");
            }

            qsrtInfo.qsrtNo10['no1'].push({
                kindNm:selectedRow.kindNm,
                etcNm:selectedRow.etcNm,
                trmDsncNm:selectedRow.trmDsncNm,
                etcIrt:selectedRow.etcIrt,
                rsltVl:""+selectedRow.amt,
                baseYm:baseYm,
                alyid:selectedRow.alyid,
                itemId:selectedRow.itemId,
                lprbmNo:selectedRow.lprbmNo,
                sprbmNo:selectedRow.sprbmNo,
                lsqsTcd:selectedRow.lsqsTcd,
                qstrId:selectedRow.qstrId,
                delYn:selectedRow.delYn,
                rsltId:selectedRow.rsltId
            })

        });

    } 
    
    (qsrtInfo.qsrtNo7['no1']).rsltVl = $("#qsrtInfo_qsrtNo7_no1_rsltVl").val();
    (qsrtInfo.qsrtNo7['no2']).rsltVl = $("#qsrtInfo_qsrtNo7_no2_rsltVl").val();
    (qsrtInfo.qsrtNo11['no1']).rsltVl = $("#qsrtInfo_qsrtNo11_no1_rsltVl").val();	
    
    console.log("qsrtInfo >>>> ", qsrtInfo);

    console.log("<<<<<< onQsrtSave() start >>>>> ")

    finService.saveQsrtFinRsltInfo(finCom.alyid, finCom.stacYy, qsrtInfo, FIN04003M00.qsrtFinRsltSaveCallback);

};

FIN04003M00Component.prototype.qsrtFinRsltSaveCallback = function(result) {
	
	if (result != null) {

        var res = JSON.parse(result);

       if (res.success) {

    	   bootbox.alert(res.msg);
           overlay.hide();

           FIN04003M00.initQsrtSave();

       } else {
           bootbox.alert(res.msg);
           overlay.hide();
       }

   } else {
       overlay.hide();
   }
	
};


//1-1 운전자금 내입 부문
FIN04003M00Component.prototype.onDel11 = function() {
    
        var dataArray2 = $("#grid-list11").bootgrid("getCurrentRows");
        var selRow;

        if (dataArray2 == null || dataArray2 == undefined) {
            return;
        }

        
        var rowData = []

        var idx = 1;

        var indx = Number($("#qsrtNo11_idx").val());

        if ($("#qsrtNo11_idx").val() == null || $("#qsrtNo11_idx").val()  == undefined) {
            return;
        }

        if (indx == 0 || indx == undefined) {
            return;
        }

        dataArray2.forEach(function (selectedRow, index) {
            if (indx != selectedRow.idx) {
                rowData.push({
                    kindNm:selectedRow.kindNm,
                    monthAmt1:selectedRow.monthAmt1,
                    monthAmt2:selectedRow.monthAmt2,
                    monthAmt3:selectedRow.monthAmt3,
                    monthAmt4:selectedRow.monthAmt4,
                    monthAmt5:selectedRow.monthAmt5,
                    monthAmt6:selectedRow.monthAmt6,
                    monthAmt7:selectedRow.monthAmt7,
                    monthAmt8:selectedRow.monthAmt8,
                    monthAmt9:selectedRow.monthAmt9,
                    monthAmt10:selectedRow.monthAmt10,
                    monthAmt11:selectedRow.monthAmt11,
                    monthAmt12:selectedRow.monthAmt12,
                    idx:idx++
                });
            }
        });

        //grid-list11
        $("#grid-list11").bootgrid("destroy");

        $("#grid-list11").bootgrid({navigation:0, rowSelect: true, rowCount: -1}).bootgrid("append", rowData)
        .on("click.rs.jquery.bootgrid", function (e, columns, rows){
           $("#qsrtNo11_kindNm").val(rows.kindNm)
           $("#qsrtNo11_monthAmt1").val(rows.monthAmt1)
           $("#qsrtNo11_monthAmt2").val(rows.monthAmt2)
           $("#qsrtNo11_monthAmt3").val(rows.monthAmt3)
           $("#qsrtNo11_monthAmt4").val(rows.monthAmt4)
           $("#qsrtNo11_monthAmt5").val(rows.monthAmt5)
           $("#qsrtNo11_monthAmt6").val(rows.monthAmt6)
           $("#qsrtNo11_monthAmt7").val(rows.monthAmt7)
           $("#qsrtNo11_monthAmt8").val(rows.monthAmt8)
           $("#qsrtNo11_monthAmt9").val(rows.monthAmt9)
           $("#qsrtNo11_monthAmt10").val(rows.monthAmt10)
           $("#qsrtNo11_monthAmt11").val(rows.monthAmt11)
           $("#qsrtNo11_monthAmt12").val(rows.monthAmt12)
           $("#qsrtNo11_idx").val(rows.idx);
        });


        FIN04003M00.onInit11();
        
};

FIN04003M00Component.prototype.onInit11 = function() {
    $("#qsrtNo11_kindNm").val('')
    $("#qsrtNo11_monthAmt1").val('')
    $("#qsrtNo11_monthAmt2").val('')
    $("#qsrtNo11_monthAmt3").val('')
    $("#qsrtNo11_monthAmt4").val('')
    $("#qsrtNo11_monthAmt5").val('')
    $("#qsrtNo11_monthAmt6").val('')
    $("#qsrtNo11_monthAmt7").val('')
    $("#qsrtNo11_monthAmt8").val('')
    $("#qsrtNo11_monthAmt9").val('')
    $("#qsrtNo11_monthAmt10").val('')
    $("#qsrtNo11_monthAmt11").val('')
    $("#qsrtNo11_monthAmt12").val('')
    $("#qsrtNo11_idx").val('')
};

FIN04003M00Component.prototype.onSave11 = function() {

        var me = this;

        var rowData = []

        var dataArray2 = $("#grid-list11").bootgrid("getCurrentRows");

        var idx = 1;

        dataArray2.forEach(function (selectedRow, index) {

            console.log('this.rowData11.forEach start');

            if (Number($("#qsrtNo11_idx").val()) != 0 ) {

                if (Number($("#qsrtNo11_idx").val()) != selectedRow.idx) {
                
                    rowData.push({
                        kindNm:selectedRow.kindNm,
                        monthAmt1:selectedRow.monthAmt1,
                        monthAmt2:selectedRow.monthAmt2,
                        monthAmt3:selectedRow.monthAmt3,
                        monthAmt4:selectedRow.monthAmt4,
                        monthAmt5:selectedRow.monthAmt5,
                        monthAmt6:selectedRow.monthAmt6,
                        monthAmt7:selectedRow.monthAmt7,
                        monthAmt8:selectedRow.monthAmt8,
                        monthAmt9:selectedRow.monthAmt9,
                        monthAmt10:selectedRow.monthAmt10,
                        monthAmt11:selectedRow.monthAmt11,
                        monthAmt12:selectedRow.monthAmt12,
                        idx:idx++
                    });

                }
            } else {

                rowData.push({
                    kindNm:selectedRow.kindNm,
                    monthAmt1:selectedRow.monthAmt1,
                    monthAmt2:selectedRow.monthAmt2,
                    monthAmt3:selectedRow.monthAmt3,
                    monthAmt4:selectedRow.monthAmt4,
                    monthAmt5:selectedRow.monthAmt5,
                    monthAmt6:selectedRow.monthAmt6,
                    monthAmt7:selectedRow.monthAmt7,
                    monthAmt8:selectedRow.monthAmt8,
                    monthAmt9:selectedRow.monthAmt9,
                    monthAmt10:selectedRow.monthAmt10,
                    monthAmt11:selectedRow.monthAmt11,
                    monthAmt12:selectedRow.monthAmt12,
                    idx:idx++
                });

            }
        });

    
        rowData.push({
            kindNm: $("#qsrtNo11_kindNm").val(),
            monthAmt1:$("#qsrtNo11_monthAmt1").val(),
            monthAmt2:$("#qsrtNo11_monthAmt2").val(),
            monthAmt3:$("#qsrtNo11_monthAmt3").val(),
            monthAmt4:$("#qsrtNo11_monthAmt4").val(),
            monthAmt5:$("#qsrtNo11_monthAmt5").val(),
            monthAmt6:$("#qsrtNo11_monthAmt6").val(),
            monthAmt7:$("#qsrtNo11_monthAmt7").val(),
            monthAmt8:$("#qsrtNo11_monthAmt8").val(),
            monthAmt9:$("#qsrtNo11_monthAmt9").val(),
            monthAmt10:$("#qsrtNo11_monthAmt10").val(),
            monthAmt11:$("#qsrtNo11_monthAmt11").val(),
            monthAmt12:$("#qsrtNo11_monthAmt12").val(),
            idx:idx
        });

        //grid-list11
        $("#grid-list11").bootgrid("destroy");

        $("#grid-list11").bootgrid({navigation:0, rowSelect: true, rowCount: -1}).bootgrid("append", rowData)
        .on("click.rs.jquery.bootgrid", function (e, columns, rows){
           $("#qsrtNo11_kindNm").val(rows.kindNm)
           $("#qsrtNo11_monthAmt1").val(rows.monthAmt1)
           $("#qsrtNo11_monthAmt2").val(rows.monthAmt2)
           $("#qsrtNo11_monthAmt3").val(rows.monthAmt3)
           $("#qsrtNo11_monthAmt4").val(rows.monthAmt4)
           $("#qsrtNo11_monthAmt5").val(rows.monthAmt5)
           $("#qsrtNo11_monthAmt6").val(rows.monthAmt6)
           $("#qsrtNo11_monthAmt7").val(rows.monthAmt7)
           $("#qsrtNo11_monthAmt8").val(rows.monthAmt8)
           $("#qsrtNo11_monthAmt9").val(rows.monthAmt9)
           $("#qsrtNo11_monthAmt10").val(rows.monthAmt10)
           $("#qsrtNo11_monthAmt11").val(rows.monthAmt11)
           $("#qsrtNo11_monthAmt12").val(rows.monthAmt12)
           $("#qsrtNo11_idx").val(rows.idx);
        });


        FIN04003M00.onInit11();
};

//1-2 시설자금 상환스케쥴
FIN04003M00Component.prototype.onDel12 = function() {
    
        var dataArray2 = $("#grid-list12").bootgrid("getCurrentRows");
        var selRow;

        if (dataArray2 == null || dataArray2 == undefined) {
            return;
        }

        
        var rowData = []

        var idx = 1;

        var indx = Number($("#qsrtNo12_idx").val());

        if ($("#qsrtNo12_idx").val() == null || $("#qsrtNo12_idx").val()  == undefined) {
            return;
        }

        if (indx == 0 || indx == undefined) {
            return;
        }

        dataArray2.forEach(function (selectedRow, index) {
            if (indx != selectedRow.idx) {
                rowData.push({
                    kindNm:selectedRow.kindNm,
                    monthAmt1:selectedRow.monthAmt1,
                    monthAmt2:selectedRow.monthAmt2,
                    monthAmt3:selectedRow.monthAmt3,
                    monthAmt4:selectedRow.monthAmt4,
                    monthAmt5:selectedRow.monthAmt5,
                    monthAmt6:selectedRow.monthAmt6,
                    monthAmt7:selectedRow.monthAmt7,
                    monthAmt8:selectedRow.monthAmt8,
                    monthAmt9:selectedRow.monthAmt9,
                    monthAmt10:selectedRow.monthAmt10,
                    monthAmt11:selectedRow.monthAmt11,
                    monthAmt12:selectedRow.monthAmt12,
                    idx:idx++
                });
            }
        });

        //grid-list12
        $("#grid-list12").bootgrid("destroy");

        $("#grid-list12").bootgrid({navigation:0, rowSelect: true, rowCount: -1}).bootgrid("append", rowData)
        .on("click.rs.jquery.bootgrid", function (e, columns, rows){
           $("#qsrtNo12_kindNm").val(rows.kindNm)
           $("#qsrtNo12_monthAmt1").val(rows.monthAmt1)
           $("#qsrtNo12_monthAmt2").val(rows.monthAmt2)
           $("#qsrtNo12_monthAmt3").val(rows.monthAmt3)
           $("#qsrtNo12_monthAmt4").val(rows.monthAmt4)
           $("#qsrtNo12_monthAmt5").val(rows.monthAmt5)
           $("#qsrtNo12_monthAmt6").val(rows.monthAmt6)
           $("#qsrtNo12_monthAmt7").val(rows.monthAmt7)
           $("#qsrtNo12_monthAmt8").val(rows.monthAmt8)
           $("#qsrtNo12_monthAmt9").val(rows.monthAmt9)
           $("#qsrtNo12_monthAmt10").val(rows.monthAmt10)
           $("#qsrtNo12_monthAmt11").val(rows.monthAmt11)
           $("#qsrtNo12_monthAmt12").val(rows.monthAmt12)
           $("#qsrtNo12_idx").val(rows.idx);
        });


        FIN04003M00.onInit12();
        
};

FIN04003M00Component.prototype.onInit12 = function() {
    $("#qsrtNo12_kindNm").val('')
    $("#qsrtNo12_monthAmt1").val('')
    $("#qsrtNo12_monthAmt2").val('')
    $("#qsrtNo12_monthAmt3").val('')
    $("#qsrtNo12_monthAmt4").val('')
    $("#qsrtNo12_monthAmt5").val('')
    $("#qsrtNo12_monthAmt6").val('')
    $("#qsrtNo12_monthAmt7").val('')
    $("#qsrtNo12_monthAmt8").val('')
    $("#qsrtNo12_monthAmt9").val('')
    $("#qsrtNo12_monthAmt10").val('')
    $("#qsrtNo12_monthAmt11").val('')
    $("#qsrtNo12_monthAmt12").val('')
    $("#qsrtNo12_idx").val('')
};

FIN04003M00Component.prototype.onSave12 = function() {

        var me = this;

        var rowData = []

        var dataArray2 = $("#grid-list12").bootgrid("getCurrentRows");

        var idx = 1;

        dataArray2.forEach(function (selectedRow, index) {

            console.log('this.rowData11.forEach start');

            if (Number($("#qsrtNo12_idx").val()) != 0 ) {

                if (Number($("#qsrtNo12_idx").val()) != selectedRow.idx) {
                
                    rowData.push({
                        kindNm:selectedRow.kindNm,
                        monthAmt1:selectedRow.monthAmt1,
                        monthAmt2:selectedRow.monthAmt2,
                        monthAmt3:selectedRow.monthAmt3,
                        monthAmt4:selectedRow.monthAmt4,
                        monthAmt5:selectedRow.monthAmt5,
                        monthAmt6:selectedRow.monthAmt6,
                        monthAmt7:selectedRow.monthAmt7,
                        monthAmt8:selectedRow.monthAmt8,
                        monthAmt9:selectedRow.monthAmt9,
                        monthAmt10:selectedRow.monthAmt10,
                        monthAmt11:selectedRow.monthAmt11,
                        monthAmt12:selectedRow.monthAmt12,
                        idx:idx++
                    });

                }
            } else {

                rowData.push({
                    kindNm:selectedRow.kindNm,
                    monthAmt1:selectedRow.monthAmt1,
                    monthAmt2:selectedRow.monthAmt2,
                    monthAmt3:selectedRow.monthAmt3,
                    monthAmt4:selectedRow.monthAmt4,
                    monthAmt5:selectedRow.monthAmt5,
                    monthAmt6:selectedRow.monthAmt6,
                    monthAmt7:selectedRow.monthAmt7,
                    monthAmt8:selectedRow.monthAmt8,
                    monthAmt9:selectedRow.monthAmt9,
                    monthAmt10:selectedRow.monthAmt10,
                    monthAmt11:selectedRow.monthAmt11,
                    monthAmt12:selectedRow.monthAmt12,
                    idx:idx++
                });

            }
        });

    
        rowData.push({
            kindNm: $("#qsrtNo12_kindNm").val(),
            monthAmt1:$("#qsrtNo12_monthAmt1").val(),
            monthAmt2:$("#qsrtNo12_monthAmt2").val(),
            monthAmt3:$("#qsrtNo12_monthAmt3").val(),
            monthAmt4:$("#qsrtNo12_monthAmt4").val(),
            monthAmt5:$("#qsrtNo12_monthAmt5").val(),
            monthAmt6:$("#qsrtNo12_monthAmt6").val(),
            monthAmt7:$("#qsrtNo12_monthAmt7").val(),
            monthAmt8:$("#qsrtNo12_monthAmt8").val(),
            monthAmt9:$("#qsrtNo12_monthAmt9").val(),
            monthAmt10:$("#qsrtNo12_monthAmt10").val(),
            monthAmt11:$("#qsrtNo12_monthAmt11").val(),
            monthAmt12:$("#qsrtNo12_monthAmt12").val(),
            idx:idx
        });

        //grid-list12
        $("#grid-list12").bootgrid("destroy");

        $("#grid-list12").bootgrid({navigation:0, rowSelect: true, rowCount: -1}).bootgrid("append", rowData)
        .on("click.rs.jquery.bootgrid", function (e, columns, rows){
           $("#qsrtNo12_kindNm").val(rows.kindNm)
           $("#qsrtNo12_monthAmt1").val(rows.monthAmt1)
           $("#qsrtNo12_monthAmt2").val(rows.monthAmt2)
           $("#qsrtNo12_monthAmt3").val(rows.monthAmt3)
           $("#qsrtNo12_monthAmt4").val(rows.monthAmt4)
           $("#qsrtNo12_monthAmt5").val(rows.monthAmt5)
           $("#qsrtNo12_monthAmt6").val(rows.monthAmt6)
           $("#qsrtNo12_monthAmt7").val(rows.monthAmt7)
           $("#qsrtNo12_monthAmt8").val(rows.monthAmt8)
           $("#qsrtNo12_monthAmt9").val(rows.monthAmt9)
           $("#qsrtNo12_monthAmt10").val(rows.monthAmt10)
           $("#qsrtNo12_monthAmt11").val(rows.monthAmt11)
           $("#qsrtNo12_monthAmt12").val(rows.monthAmt12)
           $("#qsrtNo12_idx").val(rows.idx);
        });


        FIN04003M00.onInit12();
};

//2-1 자본금 증자 계획은
FIN04003M00Component.prototype.onDel21 = function() {
    
        var dataArray2 = $("#grid-list21").bootgrid("getCurrentRows");
        var selRow;

        if (dataArray2 == null || dataArray2 == undefined) {
            return;
        }

        
        var rowData = []

        var idx = 1;

        var indx = Number($("#qsrtNo21_idx").val());

        if ($("#qsrtNo21_idx").val() == null || $("#qsrtNo21_idx").val()  == undefined) {
            return;
        }

        if (indx == 0 || indx == undefined) {
            return;
        }

        dataArray2.forEach(function (selectedRow, index) {
            if (indx != selectedRow.idx) {
                rowData.push({
                    month:selectedRow.month,
                    monthAmt:selectedRow.monthAmt,
                    idx:idx++
                });
            }
        });

        //grid-list21
        $("#grid-list21").bootgrid("destroy");

        $("#grid-list21").bootgrid({navigation:0, rowSelect: true, rowCount: -1}).bootgrid("append", rowData)
        .on("click.rs.jquery.bootgrid", function (e, columns, rows){
                $("#qsrtNo21_month").val(rows.month);
                $("#qsrtNo21_monthAmt").val(rows.monthAmt);
                $("#qsrtNo21_idx").val(rows.idx);
        });


        FIN04003M00.onInit21();
        
};

FIN04003M00Component.prototype.onInit21 = function() {
    $("#qsrtNo21_month").val('');
    $("#qsrtNo21_monthAmt").val('');
    $("#qsrtNo21_idx").val('');
};

FIN04003M00Component.prototype.onSave21 = function() {

        var me = this;

        var rowData = []

        var dataArray2 = $("#grid-list21").bootgrid("getCurrentRows");

        var idx = 1;

        dataArray2.forEach(function (selectedRow, index) {

            console.log('this.rowData11.forEach start');

            if (Number($("#qsrtNo21_idx").val()) != 0 ) {

                if (Number($("#qsrtNo21_idx").val()) != selectedRow.idx) {
                
                    rowData.push({
                        month:selectedRow.month,
                        monthAmt:selectedRow.monthAmt,
                        idx:idx++
                    });

                }
            } else {

                rowData.push({
                    month:selectedRow.month,
                    monthAmt:selectedRow.monthAmt,
                    idx:idx++
                });

            }
        });

    
        rowData.push({
            month: $("#qsrtNo21_month").val(),
            monthAmt:$("#qsrtNo21_monthAmt").val(),
            idx:idx
        });

        //grid-list21
        $("#grid-list21").bootgrid("destroy");

        $("#grid-list21").bootgrid({navigation:0, rowSelect: true, rowCount: -1}).bootgrid("append", rowData)
        .on("click.rs.jquery.bootgrid", function (e, columns, rows){
           $("#qsrtNo21_month").val(rows.month);
           $("#qsrtNo21_monthAmt").val(rows.monthAmt);
           $("#qsrtNo21_idx").val(rows.idx);
        });


        FIN04003M00.onInit21();
};

//2-1 투입시기는
FIN04003M00Component.prototype.onDel31 = function() {
    
        var dataArray2 = $("#grid-list31").bootgrid("getCurrentRows");
        var selRow;

        if (dataArray2 == null || dataArray2 == undefined) {
            return;
        }

        
        var rowData = []

        var idx = 1;

        var indx = Number($("#qsrtNo31_idx").val());

        if ($("#qsrtNo31_idx").val() == null || $("#qsrtNo31_idx").val()  == undefined) {
            return;
        }

        if (indx == 0 || indx == undefined) {
            return;
        }

        dataArray2.forEach(function (selectedRow, index) {
            if (indx != selectedRow.idx) {
                rowData.push({
                    month:selectedRow.month,
                    monthAmt:selectedRow.monthAmt,
                    idx:idx++
                });
            }
        });

        //grid-list31
        $("#grid-list31").bootgrid("destroy");

        $("#grid-list31").bootgrid({navigation:0, rowSelect: true, rowCount: -1}).bootgrid("append", rowData)
        .on("click.rs.jquery.bootgrid", function (e, columns, rows){
                $("#qsrtNo31_month").val(rows.month);
                $("#qsrtNo31_monthAmt").val(rows.monthAmt);
                $("#qsrtNo31_idx").val(rows.idx);
        });


        FIN04003M00.onInit31();
        
};

FIN04003M00Component.prototype.onInit31 = function() {
    $("#qsrtNo31_month").val('');
    $("#qsrtNo31_monthAmt").val('');
    $("#qsrtNo31_idx").val('');
};

FIN04003M00Component.prototype.onSave31 = function() {

        var me = this;

        var rowData = []

        var dataArray2 = $("#grid-list31").bootgrid("getCurrentRows");

        var idx = 1;

        dataArray2.forEach(function (selectedRow, index) {

            console.log('this.rowData11.forEach start');

            if (Number($("#qsrtNo31_idx").val()) != 0 ) {

                if (Number($("#qsrtNo31_idx").val()) != selectedRow.idx) {
                
                    rowData.push({
                        month:selectedRow.month,
                        monthAmt:selectedRow.monthAmt,
                        idx:idx++
                    });

                }
            } else {

                rowData.push({
                    month:selectedRow.month,
                    monthAmt:selectedRow.monthAmt,
                    idx:idx++
                });

            }
        });

    
        rowData.push({
            month: $("#qsrtNo31_month").val(),
            monthAmt:$("#qsrtNo31_monthAmt").val(),
            idx:idx
        });

        //grid-list31
        $("#grid-list31").bootgrid("destroy");

        $("#grid-list31").bootgrid({navigation:0, rowSelect: true, rowCount: -1}).bootgrid("append", rowData)
        .on("click.rs.jquery.bootgrid", function (e, columns, rows){
           $("#qsrtNo31_month").val(rows.month);
           $("#qsrtNo31_monthAmt").val(rows.monthAmt);
           $("#qsrtNo31_idx").val(rows.idx);
        });


        FIN04003M00.onInit31();
};

//4-1  생산 능력 확대 계획은? 생산능력 확대에 따른 고정자산 시설 증대 계획은?
FIN04003M00Component.prototype.onDel41 = function() {
    
        var dataArray2 = $("#grid-list41").bootgrid("getCurrentRows");
        var selRow;

        if (dataArray2 == null || dataArray2 == undefined) {
            return;
        }

        
        var rowData = []

        var idx = 1;

        var indx = Number($("#qsrtNo41_idx").val());

        if ($("#qsrtNo41_idx").val() == null || $("#qsrtNo41_idx").val()  == undefined) {
            return;
        }

        if (indx == 0 || indx == undefined) {
            return;
        }

        dataArray2.forEach(function (selectedRow, index) {
            if (indx != selectedRow.idx) {
                rowData.push({
					kindNm:selectedRow.kindNm,
                    month:selectedRow.month,
                    monthAmt:selectedRow.monthAmt,
                    idx:idx++
                });
            }
        });

        //grid-list41
        $("#grid-list41").bootgrid("destroy");

        $("#grid-list41").bootgrid({navigation:0, rowSelect: true, rowCount: -1}).bootgrid("append", rowData)
        .on("click.rs.jquery.bootgrid", function (e, columns, rows){
				$("#qsrtNo41_kindNm").val(rows.kindNm);
                $("#qsrtNo41_month").val(rows.month);
                $("#qsrtNo41_monthAmt").val(rows.monthAmt);
                $("#qsrtNo41_idx").val(rows.idx);
        });


        FIN04003M00.onInit41();
        
};

FIN04003M00Component.prototype.onInit41 = function() {
	$("#qsrtNo41_kindNm").val('');
    $("#qsrtNo41_month").val('');
    $("#qsrtNo41_monthAmt").val('');
    $("#qsrtNo41_idx").val('');
};

FIN04003M00Component.prototype.onSave41 = function() {

        var me = this;

        var rowData = []

        var dataArray2 = $("#grid-list41").bootgrid("getCurrentRows");

        var idx = 1;

        dataArray2.forEach(function (selectedRow, index) {

            console.log('this.rowData11.forEach start');

            if (Number($("#qsrtNo41_idx").val()) != 0 ) {

                if (Number($("#qsrtNo41_idx").val()) != selectedRow.idx) {
                
                    rowData.push({
						kindNm:selectedRow.kindNm,
                        month:selectedRow.month,
                        monthAmt:selectedRow.monthAmt,
                        idx:idx++
                    });

                }
            } else {

                rowData.push({
					kindNm:selectedRow.kindNm,
                    month:selectedRow.month,
                    monthAmt:selectedRow.monthAmt,
                    idx:idx++
                });

            }
        });

    
        rowData.push({
			kindNm:$("#qsrtNo41_kindNm").val(),
            month: $("#qsrtNo41_month").val(),
            monthAmt:$("#qsrtNo41_monthAmt").val(),
            idx:idx
        });

        //grid-list41
        $("#grid-list41").bootgrid("destroy");

        $("#grid-list41").bootgrid({navigation:0, rowSelect: true, rowCount: -1}).bootgrid("append", rowData)
        .on("click.rs.jquery.bootgrid", function (e, columns, rows){
		   $("#qsrtNo41_kindNm").val(rows.kindNm);
           $("#qsrtNo41_month").val(rows.month);
           $("#qsrtNo41_monthAmt").val(rows.monthAmt);
           $("#qsrtNo41_idx").val(rows.idx);
        });


        FIN04003M00.onInit41();
};

//4-1   현재 시설 매각 계획은? 고정자산 시설 처분 계획은?
FIN04003M00Component.prototype.onDel51 = function() {
    
        var dataArray2 = $("#grid-list51").bootgrid("getCurrentRows");
        var selRow;

        if (dataArray2 == null || dataArray2 == undefined) {
            return;
        }

        
        var rowData = []

        var idx = 1;

        var indx = Number($("#qsrtNo51_idx").val());

        if ($("#qsrtNo51_idx").val() == null || $("#qsrtNo51_idx").val()  == undefined) {
            return;
        }

        if (indx == 0 || indx == undefined) {
            return;
        }

        dataArray2.forEach(function (selectedRow, index) {
            if (indx != selectedRow.idx) {
                rowData.push({
					kindNm:selectedRow.kindNm,
                    month:selectedRow.month,
                    monthAmt:selectedRow.monthAmt,
                    idx:idx++
                });
            }
        });

        //grid-list51
        $("#grid-list51").bootgrid("destroy");

        $("#grid-list51").bootgrid({navigation:0, rowSelect: true, rowCount: -1}).bootgrid("append", rowData)
        .on("click.rs.jquery.bootgrid", function (e, columns, rows){
				$("#qsrtNo51_kindNm").val(rows.kindNm);
                $("#qsrtNo51_month").val(rows.month);
                $("#qsrtNo51_monthAmt").val(rows.monthAmt);
                $("#qsrtNo51_idx").val(rows.idx);
        });


        FIN04003M00.onInit51();
        
};

FIN04003M00Component.prototype.onInit51 = function() {
	$("#qsrtNo51_kindNm").val('');
    $("#qsrtNo51_month").val('');
    $("#qsrtNo51_monthAmt").val('');
    $("#qsrtNo51_idx").val('');
};

FIN04003M00Component.prototype.onSave51 = function() {

        var me = this;

        var rowData = []

        var dataArray2 = $("#grid-list51").bootgrid("getCurrentRows");

        var idx = 1;

        dataArray2.forEach(function (selectedRow, index) {

            console.log('this.rowData11.forEach start');

            if (Number($("#qsrtNo51_idx").val()) != 0 ) {

                if (Number($("#qsrtNo51_idx").val()) != selectedRow.idx) {
                
                    rowData.push({
						kindNm:selectedRow.kindNm,
                        month:selectedRow.month,
                        monthAmt:selectedRow.monthAmt,
                        idx:idx++
                    });

                }
            } else {

                rowData.push({
					kindNm:selectedRow.kindNm,
                    month:selectedRow.month,
                    monthAmt:selectedRow.monthAmt,
                    idx:idx++
                });

            }
        });

    
        rowData.push({
			kindNm:$("#qsrtNo51_kindNm").val(),
            month: $("#qsrtNo51_month").val(),
            monthAmt:$("#qsrtNo51_monthAmt").val(),
            idx:idx
        });

        //grid-list51
        $("#grid-list51").bootgrid("destroy");

        $("#grid-list51").bootgrid({navigation:0, rowSelect: true, rowCount: -1}).bootgrid("append", rowData)
        .on("click.rs.jquery.bootgrid", function (e, columns, rows){
		   $("#qsrtNo51_kindNm").val(rows.kindNm);
           $("#qsrtNo51_month").val(rows.month);
           $("#qsrtNo51_monthAmt").val(rows.monthAmt);
           $("#qsrtNo51_idx").val(rows.idx);
        });


        FIN04003M00.onInit51();
};

//6-1 회사채로 자금조달 계획이 있으시다면 언제 어느 정도 발행하실 계획이십니까?
FIN04003M00Component.prototype.onDel61 = function() {
    
        var dataArray2 = $("#grid-list61").bootgrid("getCurrentRows");
        var selRow;

        if (dataArray2 == null || dataArray2 == undefined) {
            return;
        }

        
        var rowData = []

        var idx = 1;

        var indx = Number($("#qsrtNo61_idx").val());

        if ($("#qsrtNo61_idx").val() == null || $("#qsrtNo61_idx").val()  == undefined) {
            return;
        }

        if (indx == 0 || indx == undefined) {
            return;
        }

        dataArray2.forEach(function (selectedRow, index) {
            if (indx != selectedRow.idx) {
                rowData.push({
                    month:selectedRow.month,
                    monthAmt:selectedRow.monthAmt,
                    idx:idx++
                });
            }
        });

        //grid-list61
        $("#grid-list61").bootgrid("destroy");

        $("#grid-list61").bootgrid({navigation:0, rowSelect: true, rowCount: -1}).bootgrid("append", rowData)
        .on("click.rs.jquery.bootgrid", function (e, columns, rows){
                $("#qsrtNo61_month").val(rows.month);
                $("#qsrtNo61_monthAmt").val(rows.monthAmt);
                $("#qsrtNo61_idx").val(rows.idx);
        });


        FIN04003M00.onInit61();
        
};

FIN04003M00Component.prototype.onInit61 = function() {
    $("#qsrtNo61_month").val('');
    $("#qsrtNo61_monthAmt").val('');
    $("#qsrtNo61_idx").val('');
};

FIN04003M00Component.prototype.onSave61 = function() {

        var me = this;

        var rowData = []

        var dataArray2 = $("#grid-list61").bootgrid("getCurrentRows");

        var idx = 1;

        dataArray2.forEach(function (selectedRow, index) {

            console.log('this.rowData11.forEach start');

            if (Number($("#qsrtNo61_idx").val()) != 0 ) {

                if (Number($("#qsrtNo61_idx").val()) != selectedRow.idx) {
                
                    rowData.push({
                        month:selectedRow.month,
                        monthAmt:selectedRow.monthAmt,
                        idx:idx++
                    });

                }
            } else {

                rowData.push({
                    month:selectedRow.month,
                    monthAmt:selectedRow.monthAmt,
                    idx:idx++
                });

            }
        });

    
        rowData.push({
            month: $("#qsrtNo61_month").val(),
            monthAmt:$("#qsrtNo61_monthAmt").val(),
            idx:idx
        });

        //grid-list61
        $("#grid-list61").bootgrid("destroy");

        $("#grid-list61").bootgrid({navigation:0, rowSelect: true, rowCount: -1}).bootgrid("append", rowData)
        .on("click.rs.jquery.bootgrid", function (e, columns, rows){
           $("#qsrtNo61_month").val(rows.month);
           $("#qsrtNo61_monthAmt").val(rows.monthAmt);
           $("#qsrtNo61_idx").val(rows.idx);
        });


        FIN04003M00.onInit61();
};

//6-2 회사채의 상환 계획이 있으시다면 언제 어느 정도 상환하실 계획이십니까?
FIN04003M00Component.prototype.onDel62 = function() {
    
        var dataArray2 = $("#grid-list62").bootgrid("getCurrentRows");
        var selRow;

        if (dataArray2 == null || dataArray2 == undefined) {
            return;
        }

        
        var rowData = []

        var idx = 1;

        var indx = Number($("#qsrtNo62_idx").val());

        if ($("#qsrtNo62_idx").val() == null || $("#qsrtNo62_idx").val()  == undefined) {
            return;
        }

        if (indx == 0 || indx == undefined) {
            return;
        }

        dataArray2.forEach(function (selectedRow, index) {
            if (indx != selectedRow.idx) {
                rowData.push({
                    month:selectedRow.month,
                    monthAmt:selectedRow.monthAmt,
                    idx:idx++
                });
            }
        });

        //grid-list62
        $("#grid-list62").bootgrid("destroy");

        $("#grid-list62").bootgrid({navigation:0, rowSelect: true, rowCount: -1}).bootgrid("append", rowData)
        .on("click.rs.jquery.bootgrid", function (e, columns, rows){
                $("#qsrtNo62_month").val(rows.month);
                $("#qsrtNo62_monthAmt").val(rows.monthAmt);
                $("#qsrtNo62_idx").val(rows.idx);
        });


        FIN04003M00.onInit62();
        
};

FIN04003M00Component.prototype.onInit62 = function() {
    $("#qsrtNo62_month").val('');
    $("#qsrtNo62_monthAmt").val('');
    $("#qsrtNo62_idx").val('');
};

FIN04003M00Component.prototype.onSave62 = function() {

        var me = this;

        var rowData = []

        var dataArray2 = $("#grid-list62").bootgrid("getCurrentRows");

        var idx = 1;

        dataArray2.forEach(function (selectedRow, index) {

            console.log('this.rowData11.forEach start');

            if (Number($("#qsrtNo62_idx").val()) != 0 ) {

                if (Number($("#qsrtNo62_idx").val()) != selectedRow.idx) {
                
                    rowData.push({
                        month:selectedRow.month,
                        monthAmt:selectedRow.monthAmt,
                        idx:idx++
                    });

                }
            } else {

                rowData.push({
                    month:selectedRow.month,
                    monthAmt:selectedRow.monthAmt,
                    idx:idx++
                });

            }
        });

    
        rowData.push({
            month: $("#qsrtNo62_month").val(),
            monthAmt:$("#qsrtNo62_monthAmt").val(),
            idx:idx
        });

        console.log(')))))) ', rowData);

        //grid-list62
        $("#grid-list62").bootgrid("destroy");

        $("#grid-list62").bootgrid({navigation:0, rowSelect: true, rowCount: -1}).bootgrid("append", rowData)
        .on("click.rs.jquery.bootgrid", function (e, columns, rows){
           $("#qsrtNo62_month").val(rows.month);
           $("#qsrtNo62_monthAmt").val(rows.monthAmt);
           $("#qsrtNo62_idx").val(rows.idx);
        });


        FIN04003M00.onInit62();
};

//7-1 시설 운전자금 공급계획 - 운전자금
FIN04003M00Component.prototype.onDel81 = function() {
    
        var dataArray2 = $("#grid-list71").bootgrid("getCurrentRows");
        var selRow;

        if (dataArray2 == null || dataArray2 == undefined) {
            return;
        }

        
        var rowData = []

        var idx = 1;

        var indx = qsrtNo81.idx;

        if (qsrtNo81.idx == null || qsrtNo81.idx  == undefined) {
            return;
        }

        if (indx == 0 || indx == undefined) {
            return;
        }

        dataArray2.forEach(function (selectedRow, index) {
            if (indx != selectedRow.idx) {
                rowData.push({
                            kindNm:selectedRow.kindNm,
                            etcNm:selectedRow.etcNm,
                            trmDsncNm:selectedRow.trmDsncNm,
                            etcIrt:selectedRow.etcIrt,
                            amt:selectedRow.amt,
                            baseYm:selectedRow.baseYm,
                            alyid:selectedRow.alyid,
                            itemId:selectedRow.itemId,
                            lprbmNo:selectedRow.lprbmNo,
                            sprbmNo:selectedRow.sprbmNo,
                            lsqsTcd:selectedRow.lsqsTcd,
                            qstrId:selectedRow.qstrId,
                            delYn:selectedRow.delYn,
                            rsltId:selectedRow.rsltId,
                            idx:idx++
                        });
            }
        });

        //grid-list61
        $("#grid-list71").bootgrid("destroy");

        $("#grid-list71").bootgrid({navigation:0, rowSelect: true, rowCount: -1}).bootgrid("append", rowData)
        .on("click.rs.jquery.bootgrid", function (e, columns, rows){
                $("#qsrtNo81_kindNm").val(rows.kindNm);
                 $("#qsrtNo81_etcNm").val(rows.etcNm);
                 $("#qsrtNo81_trmDsncNm").val(rows.trmDsncNm);
                 $("#qsrtNo81_etcIrt").val(rows.etcIrt);
                 $("#qsrtNo81_rsltVl").val(rows.amt);
                 $("#qsrtNo81_baseYm").val(rows.baseYm);

                 qsrtNo81 = new QsrtNo81();
                 qsrtNo81.kindNm = rows.kindNm;
                 qsrtNo81.baseYm = rows.baseYm;
                 qsrtNo81.rsltVl = rows.amt;
                 qsrtNo81.etcNm = rows.etcNm;
                 qsrtNo81.etcIrt = rows.etcIrt;
                 qsrtNo81.alyid = rows.alyid;
                 qsrtNo81.itemId = rows.itemId;
                 qsrtNo81.lprbmNo = rows.lprbmNo;
                 qsrtNo81.sprbmNo = rows.sprbmNo;
                 qsrtNo81.lsqsTcd = rows.lsqsTcd;
                 qsrtNo81.qstrId = rows.qstrId;
                 qsrtNo81.delYn = rows.delYn;
                 qsrtNo81.rsltId = rows.rsltId;
                 qsrtNo81.idx = rows.idx;

                 console.log('qsrtNo81 >> ', qsrtNo81);
        });


        FIN04003M00.onInit61();
        
};

FIN04003M00Component.prototype.onInit81 = function() {
    $("#qsrtNo81_kindNm").val('');
    $("#qsrtNo81_etcNm").val('');
    $("#qsrtNo81_trmDsncNm").val('');
    $("#qsrtNo81_etcIrt").val('');
    $("#qsrtNo81_rsltVl").val('');
    $("#qsrtNo81_baseYm").val('');

    qsrtNo81 = new QsrtNo81();
};

FIN04003M00Component.prototype.onSave81 = function() {

        var me = this;

        var rowData = []

        var dataArray2 = $("#grid-list71").bootgrid("getCurrentRows");

        var idx = 1;

        qsrtNo = qsrtInfo.qsrtNo8['no'];

        console.log('onSave81 >>> ', qsrtNo);
        
        dataArray2.forEach(function (selectedRow, index) {

            console.log('this.rowData.forEach start >>> ', qsrtNo81.idx);

            if (qsrtNo81.idx != null && qsrtNo81.idx != undefined && qsrtNo81.idx != 0 ) {

                if (qsrtNo81.idx != selectedRow.idx) {
                
                    rowData.push({
                            kindNm:selectedRow.kindNm,
                            etcNm:selectedRow.etcNm,
                            trmDsncNm:selectedRow.trmDsncNm,
                            etcIrt:selectedRow.etcIrt,
                            amt:selectedRow.amt,
                            baseYm:selectedRow.baseYm,
                            alyid:selectedRow.alyid,
                            itemId:selectedRow.itemId,
                            lprbmNo:selectedRow.lprbmNo,
                            sprbmNo:selectedRow.sprbmNo,
                            lsqsTcd:selectedRow.lsqsTcd,
                            qstrId:selectedRow.qstrId,
                            delYn:selectedRow.delYn,
                            rsltId:selectedRow.rsltId,
                            idx:idx++
                        });

                }
            } else {

                console.log('*****');

                rowData.push({
                            kindNm:selectedRow.kindNm,
                            etcNm:selectedRow.etcNm,
                            trmDsncNm:selectedRow.trmDsncNm,
                            etcIrt:selectedRow.etcIrt,
                            amt:selectedRow.amt,
                            baseYm:selectedRow.baseYm,
                            alyid:selectedRow.alyid,
                            itemId:selectedRow.itemId,
                            lprbmNo:selectedRow.lprbmNo,
                            sprbmNo:selectedRow.sprbmNo,
                            lsqsTcd:selectedRow.lsqsTcd,
                            qstrId:selectedRow.qstrId,
                            delYn:selectedRow.delYn,
                            rsltId:selectedRow.rsltId,
                            idx:idx++
                        });

            }
        });

    
        rowData.push({
                            kindNm:$("#qsrtNo81_kindNm").val(),
                            etcNm:$("#qsrtNo81_etcNm").val(),
                            trmDsncNm:$("#qsrtNo81_trmDsncNm").val(),
                            etcIrt:$("#qsrtNo81_etcIrt").val(),
                            amt:$("#qsrtNo81_rsltVl").val(),
                            baseYm:$("#qsrtNo81_baseYm").val(),
                            alyid:qsrtNo.alyid,
                            itemId:qsrtNo.itemId,
                            lprbmNo:qsrtNo.lprbmNo,
                            sprbmNo:qsrtNo.sprbmNo,
                            lsqsTcd:qsrtNo.lsqsTcd,
                            qstrId:qsrtNo.qstrId,
                            delYn:qsrtNo.delYn,
                            rsltId:qsrtNo.rsltId,
                            idx:idx++
                        });

        console.log('reg rowData >>> ' , rowData);
        //grid-list81
        $("#grid-list71").bootgrid("destroy");

        $("#grid-list71").bootgrid({navigation:0, rowSelect: true, rowCount: -1}).bootgrid("append", rowData)
        .on("click.rs.jquery.bootgrid", function (e, columns, rows){
                 $("#qsrtNo81_kindNm").val(rows.kindNm);
                 $("#qsrtNo81_etcNm").val(rows.etcNm);
                 $("#qsrtNo81_trmDsncNm").val(rows.trmDsncNm);
                 $("#qsrtNo81_etcIrt").val(rows.etcIrt);
                 $("#qsrtNo81_rsltVl").val(rows.amt);
                 $("#qsrtNo81_baseYm").val(rows.baseYm);

                 qsrtNo81 = new QsrtNo81();
                 qsrtNo81.kindNm = rows.kindNm;
                 qsrtNo81.baseYm = rows.baseYm;
                 qsrtNo81.rsltVl = rows.amt;
                 qsrtNo81.etcNm = rows.etcNm;
                 qsrtNo81.etcIrt = rows.etcIrt;
                 qsrtNo81.alyid = rows.alyid;
                 qsrtNo81.itemId = rows.itemId;
                 qsrtNo81.lprbmNo = rows.lprbmNo;
                 qsrtNo81.sprbmNo = rows.sprbmNo;
                 qsrtNo81.lsqsTcd = rows.lsqsTcd;
                 qsrtNo81.qstrId = rows.qstrId;
                 qsrtNo81.delYn = rows.delYn;
                 qsrtNo81.rsltId = rows.rsltId;
                 qsrtNo81.idx = rows.idx;

                 console.log('qsrtNo81 >> ', qsrtNo81);
        });


        FIN04003M00.onInit81();
};


//7-2 시설 운전자금 공급계획 - 시설자금
FIN04003M00Component.prototype.onDel91 = function() {
    
        var dataArray2 = $("#grid-list72").bootgrid("getCurrentRows");
        var selRow;

        if (dataArray2 == null || dataArray2 == undefined) {
            return;
        }

        
        var rowData = []

        var idx = 1;

        var indx = qsrtNo91.idx;

        if (qsrtNo91.idx == null || qsrtNo91.idx  == undefined) {
            return;
        }

        if (indx == 0 || indx == undefined) {
            return;
        }

        dataArray2.forEach(function (selectedRow, index) {
            if (indx != selectedRow.idx) {
                rowData.push({
                            kindNm:selectedRow.kindNm,
                            etcNm:selectedRow.etcNm,
                            trmDsncNm:selectedRow.trmDsncNm,
                            etcIrt:selectedRow.etcIrt,
                            amt:selectedRow.amt,
                            baseYm:selectedRow.baseYm,
                            alyid:selectedRow.alyid,
                            itemId:selectedRow.itemId,
                            lprbmNo:selectedRow.lprbmNo,
                            sprbmNo:selectedRow.sprbmNo,
                            lsqsTcd:selectedRow.lsqsTcd,
                            qstrId:selectedRow.qstrId,
                            delYn:selectedRow.delYn,
                            rsltId:selectedRow.rsltId,
                            idx:idx++
                        });
            }
        });

        //grid-list61
        $("#grid-list72").bootgrid("destroy");

        $("#grid-list72").bootgrid({navigation:0, rowSelect: true, rowCount: -1}).bootgrid("append", rowData)
        .on("click.rs.jquery.bootgrid", function (e, columns, rows){
                 $("#qsrtNo91_kindNm").val(rows.kindNm);
                 $("#qsrtNo91_etcNm").val(rows.etcNm);
                 $("#qsrtNo91_trmDsncNm").val(rows.trmDsncNm);
                 $("#qsrtNo91_etcIrt").val(rows.etcIrt);
                 $("#qsrtNo91_rsltVl").val(rows.amt);
                 $("#qsrtNo91_baseYm").val(rows.baseYm);

                 qsrtNo91 = new QsrtNo91();
                 qsrtNo91.kindNm = rows.kindNm;
                 qsrtNo91.baseYm = rows.baseYm;
                 qsrtNo91.rsltVl = rows.amt;
                 qsrtNo91.etcNm = rows.etcNm;
                 qsrtNo91.etcIrt = rows.etcIrt;
                 qsrtNo91.alyid = rows.alyid;
                 qsrtNo91.itemId = rows.itemId;
                 qsrtNo91.lprbmNo = rows.lprbmNo;
                 qsrtNo91.sprbmNo = rows.sprbmNo;
                 qsrtNo91.lsqsTcd = rows.lsqsTcd;
                 qsrtNo91.qstrId = rows.qstrId;
                 qsrtNo91.delYn = rows.delYn;
                 qsrtNo91.rsltId = rows.rsltId;
                 qsrtNo91.idx = rows.idx;

                 console.log('qsrtNo91 >> ', qsrtNo91);
        });


        FIN04003M00.onInit91();
        
};

FIN04003M00Component.prototype.onInit91 = function() {
    $("#qsrtNo91_kindNm").val('');
    $("#qsrtNo91_etcNm").val('');
    $("#qsrtNo91_trmDsncNm").val('');
    $("#qsrtNo91_etcIrt").val('');
    $("#qsrtNo91_rsltVl").val('');
    $("#qsrtNo91_baseYm").val('');

    qsrtNo91 = new QsrtNo91();
};

FIN04003M00Component.prototype.onSave91 = function() {

        var me = this;

        var rowData = []

        var dataArray2 = $("#grid-list72").bootgrid("getCurrentRows");

        var idx = 1;

        qsrtNo = qsrtInfo.qsrtNo9['no'];

        dataArray2.forEach(function (selectedRow, index) {

            console.log('this.rowData.forEach start');

            if (qsrtNo91.idx != null && qsrtNo91.idx != undefined && qsrtNo91.idx != 0 ) {

                if (qsrtNo91.idx != selectedRow.idx) {
                
                    rowData.push({
                            kindNm:selectedRow.kindNm,
                            etcNm:selectedRow.etcNm,
                            trmDsncNm:selectedRow.trmDsncNm,
                            etcIrt:selectedRow.etcIrt,
                            amt:selectedRow.amt,
                            baseYm:selectedRow.baseYm,
                            alyid:selectedRow.alyid,
                            itemId:selectedRow.itemId,
                            lprbmNo:selectedRow.lprbmNo,
                            sprbmNo:selectedRow.sprbmNo,
                            lsqsTcd:selectedRow.lsqsTcd,
                            qstrId:selectedRow.qstrId,
                            delYn:selectedRow.delYn,
                            rsltId:selectedRow.rsltId,
                            idx:idx++
                        });

                }
            } else {

                rowData.push({
                            kindNm:selectedRow.kindNm,
                            etcNm:selectedRow.etcNm,
                            trmDsncNm:selectedRow.trmDsncNm,
                            etcIrt:selectedRow.etcIrt,
                            amt:selectedRow.amt,
                            baseYm:selectedRow.baseYm,
                            alyid:selectedRow.alyid,
                            itemId:selectedRow.itemId,
                            lprbmNo:selectedRow.lprbmNo,
                            sprbmNo:selectedRow.sprbmNo,
                            lsqsTcd:selectedRow.lsqsTcd,
                            qstrId:selectedRow.qstrId,
                            delYn:selectedRow.delYn,
                            rsltId:selectedRow.rsltId,
                            idx:idx++
                        });

            }
        });

    
        rowData.push({
                            kindNm:$("#qsrtNo91_kindNm").val(),
                            etcNm:$("#qsrtNo91_etcNm").val(),
                            trmDsncNm:$("#qsrtNo91_trmDsncNm").val(),
                            etcIrt:$("#qsrtNo91_etcIrt").val(),
                            amt:$("#qsrtNo91_rsltVl").val(),
                            baseYm:$("#qsrtNo91_baseYm").val(),
                            alyid:qsrtNo.alyid,
                            itemId:qsrtNo.itemId,
                            lprbmNo:qsrtNo.lprbmNo,
                            sprbmNo:qsrtNo.sprbmNo,
                            lsqsTcd:qsrtNo.lsqsTcd,
                            qstrId:qsrtNo.qstrId,
                            delYn:qsrtNo.delYn,
                            rsltId:qsrtNo.rsltId,
                            idx:idx++
                        });

        //grid-list91
        $("#grid-list72").bootgrid("destroy");

        $("#grid-list72").bootgrid({navigation:0, rowSelect: true, rowCount: -1}).bootgrid("append", rowData)
        .on("click.rs.jquery.bootgrid", function (e, columns, rows){
                 $("#qsrtNo91_kindNm").val(rows.kindNm);
                 $("#qsrtNo91_etcNm").val(rows.etcNm);
                 $("#qsrtNo91_trmDsncNm").val(rows.trmDsncNm);
                 $("#qsrtNo91_etcIrt").val(rows.etcIrt);
                 $("#qsrtNo91_rsltVl").val(rows.amt);
                 $("#qsrtNo91_baseYm").val(rows.baseYm);

                 qsrtNo91 = new QsrtNo91();
                 qsrtNo91.kindNm = rows.kindNm;
                 qsrtNo91.baseYm = rows.baseYm;
                 qsrtNo91.rsltVl = rows.amt;
                 qsrtNo91.etcNm = rows.etcNm;
                 qsrtNo91.etcIrt = rows.etcIrt;
                 qsrtNo91.alyid = rows.alyid;
                 qsrtNo91.itemId = rows.itemId;
                 qsrtNo91.lprbmNo = rows.lprbmNo;
                 qsrtNo91.sprbmNo = rows.sprbmNo;
                 qsrtNo91.lsqsTcd = rows.lsqsTcd;
                 qsrtNo91.qstrId = rows.qstrId;
                 qsrtNo91.delYn = rows.delYn;
                 qsrtNo91.rsltId = rows.rsltId;
                 qsrtNo91.idx = rows.idx;

                 console.log('qsrtNo91 >> ', qsrtNo91);
        });


        FIN04003M00.onInit91();
};


//7-3 시설 운전자금 공급계획 - 여유자금
FIN04003M00Component.prototype.onDel101 = function() {
    
        var dataArray2 = $("#grid-list73").bootgrid("getCurrentRows");
        var selRow;

        if (dataArray2 == null || dataArray2 == undefined) {
            return;
        }

        
        var rowData = []

        var idx = 1;

        var indx = qsrtNo101.idx;

        if (qsrtNo101.idx == null || qsrtNo101.idx  == undefined) {
            return;
        }

        if (indx == 0 || indx == undefined) {
            return;
        }

        dataArray2.forEach(function (selectedRow, index) {
            if (indx != selectedRow.idx) {
                rowData.push({
                            kindNm:selectedRow.kindNm,
                            etcNm:selectedRow.etcNm,
                            trmDsncNm:selectedRow.trmDsncNm,
                            etcIrt:selectedRow.etcIrt,
                            amt:selectedRow.amt,
                            baseYm:selectedRow.baseYm,
                            alyid:selectedRow.alyid,
                            itemId:selectedRow.itemId,
                            lprbmNo:selectedRow.lprbmNo,
                            sprbmNo:selectedRow.sprbmNo,
                            lsqsTcd:selectedRow.lsqsTcd,
                            qstrId:selectedRow.qstrId,
                            delYn:selectedRow.delYn,
                            rsltId:selectedRow.rsltId,
                            idx:idx++
                        });
            }
        });

        //grid-list61
        $("#grid-list73").bootgrid("destroy");

        $("#grid-list73").bootgrid({navigation:0, rowSelect: true, rowCount: -1}).bootgrid("append", rowData)
        .on("click.rs.jquery.bootgrid", function (e, columns, rows){
		
				 $("#qsrtNo101_kindNm").val(rows.kindNm)
                 $("#qsrtNo101_etcNm").val(rows.etcNm)
                 $("#qsrtNo101_trmDsncNm").val(rows.trmDsncNm)
                 $("#qsrtNo101_etcIrt").val(rows.etcIrt)
		
                 qsrtNo101 = new QsrtNo101();
                 qsrtNo101.kindNm = rows.kindNm;
                 qsrtNo101.baseYm = rows.baseYm;
                 qsrtNo101.rsltVl = rows.amt;
                 qsrtNo101.etcNm = rows.etcNm;
                 qsrtNo101.etcIrt = rows.etcIrt;
                 qsrtNo101.alyid = rows.alyid;
                 qsrtNo101.itemId = rows.itemId;
                 qsrtNo101.lprbmNo = rows.lprbmNo;
                 qsrtNo101.sprbmNo = rows.sprbmNo;
                 qsrtNo101.lsqsTcd = rows.lsqsTcd;
                 qsrtNo101.qstrId = rows.qstrId;
                 qsrtNo101.delYn = rows.delYn;
                 qsrtNo101.rsltId = rows.rsltId;
                 qsrtNo101.idx = rows.idx;

                 console.log('qsrtNo101 >> ', qsrtNo101);
        });


        FIN04003M00.onInit101();
        
};

FIN04003M00Component.prototype.onInit101 = function() {
    $("#qsrtNo101_kindNm").val('')
	$("#qsrtNo101_etcNm").val('')
    $("#qsrtNo101_trmDsncNm").val('')
    $("#qsrtNo101_etcIrt").val('')

    qsrtNo101 = new QsrtNo101();
};

FIN04003M00Component.prototype.onSave101 = function() {

        var me = this;

        var rowData = []

        var dataArray2 = $("#grid-list73").bootgrid("getCurrentRows");

        var idx = 1;

        qsrtNo = qsrtInfo.qsrtNo10['no'];

        dataArray2.forEach(function (selectedRow, index) {

            console.log('this.rowData.forEach start');

            if (qsrtNo101.idx != null && qsrtNo101.idx != undefined && qsrtNo101.idx != 0 ) {

                if (qsrtNo101.idx != selectedRow.idx) {
                
                    rowData.push({
                            kindNm:selectedRow.kindNm,
                            etcNm:selectedRow.etcNm,
                            trmDsncNm:selectedRow.trmDsncNm,
                            etcIrt:selectedRow.etcIrt,
                            amt:selectedRow.amt,
                            baseYm:selectedRow.baseYm,
                            alyid:selectedRow.alyid,
                            itemId:selectedRow.itemId,
                            lprbmNo:selectedRow.lprbmNo,
                            sprbmNo:selectedRow.sprbmNo,
                            lsqsTcd:selectedRow.lsqsTcd,
                            qstrId:selectedRow.qstrId,
                            delYn:selectedRow.delYn,
                            rsltId:selectedRow.rsltId,
                            idx:idx++
                        });

                }
            } else {

                rowData.push({
                            kindNm:selectedRow.kindNm,
                            etcNm:selectedRow.etcNm,
                            trmDsncNm:selectedRow.trmDsncNm,
                            etcIrt:selectedRow.etcIrt,
                            amt:selectedRow.amt,
                            baseYm:selectedRow.baseYm,
                            alyid:selectedRow.alyid,
                            itemId:selectedRow.itemId,
                            lprbmNo:selectedRow.lprbmNo,
                            sprbmNo:selectedRow.sprbmNo,
                            lsqsTcd:selectedRow.lsqsTcd,
                            qstrId:selectedRow.qstrId,
                            delYn:selectedRow.delYn,
                            rsltId:selectedRow.rsltId,
                            idx:idx++
                        });

            }
        });

        rowData.push({
                            kindNm:$("#qsrtNo101_kindNm").val(),
                            etcNm:$("#qsrtNo101_etcNm").val(),
                            trmDsncNm:$("#qsrtNo101_trmDsncNm").val(),
                            etcIrt:$("#qsrtNo101_etcIrt").val(),
                            amt:qsrtNo.rsltVl,
                            baseYm:qsrtNo.baseYm,
                            alyid:qsrtNo.alyid,
                            itemId:qsrtNo.itemId,
                            lprbmNo:qsrtNo.lprbmNo,
                            sprbmNo:qsrtNo.sprbmNo,
                            lsqsTcd:qsrtNo.lsqsTcd,
                            qstrId:qsrtNo.qstrId,
                            delYn:qsrtNo.delYn,
                            rsltId:qsrtNo.rsltId,
                            idx:idx++
                        });

        //grid-list101
        $("#grid-list73").bootgrid("destroy");

        $("#grid-list73").bootgrid({navigation:0, rowSelect: true, rowCount: -1}).bootgrid("append", rowData)
        .on("click.rs.jquery.bootgrid", function (e, columns, rows){
				 $("#qsrtNo101_kindNm").val(rows.kindNm)
                 $("#qsrtNo101_etcNm").val(rows.etcNm)
                 $("#qsrtNo101_trmDsncNm").val(rows.trmDsncNm)
                 $("#qsrtNo101_etcIrt").val(rows.etcIrt)

                 qsrtNo101 = new QsrtNo101();
                 qsrtNo101.kindNm = rows.kindNm;
                 qsrtNo101.baseYm = rows.baseYm;
                 qsrtNo101.rsltVl = rows.amt;
                 qsrtNo101.etcNm = rows.etcNm;
                 qsrtNo101.etcIrt = rows.etcIrt;
                 qsrtNo101.alyid = rows.alyid;
                 qsrtNo101.itemId = rows.itemId;
                 qsrtNo101.lprbmNo = rows.lprbmNo;
                 qsrtNo101.sprbmNo = rows.sprbmNo;
                 qsrtNo101.lsqsTcd = rows.lsqsTcd;
                 qsrtNo101.qstrId = rows.qstrId;
                 qsrtNo101.delYn = rows.delYn;
                 qsrtNo101.rsltId = rows.rsltId;
                 qsrtNo101.idx = rows.idx;

                 console.log('qsrtNo101 >> ', qsrtNo101);
        });


        FIN04003M00.onInit101();
};

FIN04003M00Component.prototype.onFinCashIncomeList = function() {

        console.log("<<<<<< onCashIncomeList() start >>>>> ")
        overlay.show();
        finService.getFinInvtCashIncomeModify(finCom.alyid, finCom.stacYy, qsrtInfo, FIN04003M00.finCashIncomeCallback);

};

FIN04003M00Component.prototype.finCashIncomeCallback = function(result) {

    if (result != null) {

         var res = JSON.parse(result);

        if (res.success) {

            var data = res.data.result;

            fincashIncomeList = data['FinInvtCashIncomeModify'];

            if (fincashIncomeList != null && fincashIncomeList != undefined) {
                fincashIncomeLength = 1;
                if (businessLength > 0 && fincashIncomeLength > 0) {
                    FIN04003M00Component.prototype.onFinCashIncomeView();
                }
            }

            overlay.show();

            FIN04003M00.onFinCashOutcomeList();
            

        } else {
            bootbox.alert(res.msg);
            overlay.hide();
        }

    } else {
        overlay.hide();
    }
};

FIN04003M00Component.prototype.onFinCashIncomeView = function() {

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
fincashIncomeTable += '            <td>'+FIN04003M00.onNumberWithCommas(fincashIncomeList[0].salesAmt)+'</td>                          ';
fincashIncomeTable += '            <td>'+FIN04003M00.onNumberWithCommas(fincashIncomeList[1].salesAmt)+'</td>                          ';
fincashIncomeTable += '            <td>'+FIN04003M00.onNumberWithCommas(fincashIncomeList[2].salesAmt)+'</td>                          ';
fincashIncomeTable += '            <td>'+FIN04003M00.onNumberWithCommas(fincashIncomeList[3].salesAmt)+'</td>                          ';
fincashIncomeTable += '            <td>'+FIN04003M00.onNumberWithCommas(fincashIncomeList[4].salesAmt)+'</td>                          ';
fincashIncomeTable += '            <td>'+FIN04003M00.onNumberWithCommas(fincashIncomeList[5].salesAmt)+'</td>                          ';
fincashIncomeTable += '        </tr>                                                                                       ';
fincashIncomeTable += '        <tr>                                                                                        ';
fincashIncomeTable += '            <td>당월현금매출수입</td>                                                                  ';
fincashIncomeTable += '            <td>'+(businessWorkPatterns['rsv01'])['dl']+'%</td>                                     ';
fincashIncomeTable += '            <td>'+FIN04003M00.onNumberWithCommas(fincashIncomeList[0].cashIncome0Month)+'</td>                  ';
fincashIncomeTable += '            <td>'+FIN04003M00.onNumberWithCommas(fincashIncomeList[1].cashIncome0Month)+'</td>                  ';
fincashIncomeTable += '            <td>'+FIN04003M00.onNumberWithCommas(fincashIncomeList[2].cashIncome0Month)+'</td>                  ';
fincashIncomeTable += '            <td>'+FIN04003M00.onNumberWithCommas(fincashIncomeList[3].cashIncome0Month)+'</td>                  ';
fincashIncomeTable += '            <td>'+FIN04003M00.onNumberWithCommas(fincashIncomeList[4].cashIncome0Month)+'</td>                  ';
fincashIncomeTable += '            <td>'+FIN04003M00.onNumberWithCommas(fincashIncomeList[5].cashIncome0Month)+'</td>                  ';
fincashIncomeTable += '        </tr>                                                                                       ';
fincashIncomeTable += '        <tr>                                                                                        ';
fincashIncomeTable += '            <td>1개월 전 현금매출 중<br/>당월 현금 수입</td>                                              ';
fincashIncomeTable += '            <td>'+(businessWorkPatterns['rsv02'])['dl']+'%</td>                                     ';
fincashIncomeTable += '            <td>'+FIN04003M00.onNumberWithCommas(fincashIncomeList[0].cashIncome1Month)+'</td>                  ';
fincashIncomeTable += '            <td>'+FIN04003M00.onNumberWithCommas(fincashIncomeList[1].cashIncome1Month)+'</td>                  ';
fincashIncomeTable += '            <td>'+FIN04003M00.onNumberWithCommas(fincashIncomeList[2].cashIncome1Month)+'</td>                  ';
fincashIncomeTable += '            <td>'+FIN04003M00.onNumberWithCommas(fincashIncomeList[3].cashIncome1Month)+'</td>                  ';
fincashIncomeTable += '            <td>'+FIN04003M00.onNumberWithCommas(fincashIncomeList[4].cashIncome1Month)+'</td>                  ';
fincashIncomeTable += '            <td>'+FIN04003M00.onNumberWithCommas(fincashIncomeList[5].cashIncome1Month)+'</td>                  ';
fincashIncomeTable += '        </tr>                                                                                       ';
fincashIncomeTable += '        <tr>                                                                                        ';
fincashIncomeTable += '            <td>2개월 전 현금매출 중<br/>당월 현금 수입</td>                                              ';
fincashIncomeTable += '            <td>'+(businessWorkPatterns['rsv03'])['dl']+'%</td>                                     ';
fincashIncomeTable += '            <td>'+FIN04003M00.onNumberWithCommas(fincashIncomeList[0].cashIncome2Month)+'</td>                  ';
fincashIncomeTable += '            <td>'+FIN04003M00.onNumberWithCommas(fincashIncomeList[1].cashIncome2Month)+'</td>                  ';
fincashIncomeTable += '            <td>'+FIN04003M00.onNumberWithCommas(fincashIncomeList[2].cashIncome2Month)+'</td>                  ';
fincashIncomeTable += '            <td>'+FIN04003M00.onNumberWithCommas(fincashIncomeList[3].cashIncome2Month)+'</td>                  ';
fincashIncomeTable += '            <td>'+FIN04003M00.onNumberWithCommas(fincashIncomeList[4].cashIncome2Month)+'</td>                  ';
fincashIncomeTable += '            <td>'+FIN04003M00.onNumberWithCommas(fincashIncomeList[5].cashIncome2Month)+'</td>                  ';
fincashIncomeTable += '        </tr>                                                                                       ';
fincashIncomeTable += '        <tr>                                                                                        ';
fincashIncomeTable += '            <td colspan="14">&nbsp;</td>                                                            ';
fincashIncomeTable += '        </tr>                                                                                       ';
fincashIncomeTable += '        <tr>                                                                                        ';
fincashIncomeTable += '            <td>고정자산 매각</td>                                                                     ';
fincashIncomeTable += '            <td></td>                                                                               ';
fincashIncomeTable += '            <td>'+FIN04003M00.onNumberWithCommas(fincashIncomeList[0].fixAssetAmt)+'</td>                       ';
fincashIncomeTable += '            <td>'+FIN04003M00.onNumberWithCommas(fincashIncomeList[1].fixAssetAmt)+'</td>                       ';
fincashIncomeTable += '            <td>'+FIN04003M00.onNumberWithCommas(fincashIncomeList[2].fixAssetAmt)+'</td>                       ';
fincashIncomeTable += '            <td>'+FIN04003M00.onNumberWithCommas(fincashIncomeList[3].fixAssetAmt)+'</td>                       ';
fincashIncomeTable += '            <td>'+FIN04003M00.onNumberWithCommas(fincashIncomeList[4].fixAssetAmt)+'</td>                       ';
fincashIncomeTable += '            <td>'+FIN04003M00.onNumberWithCommas(fincashIncomeList[5].fixAssetAmt)+'</td>                       ';
fincashIncomeTable += '        </tr>                                                                                       ';
fincashIncomeTable += '        <tr>                                                                                        ';
fincashIncomeTable += '            <td>회사채 발행</td>                                                                      ';
fincashIncomeTable += '            <td></td>                                                                               ';
fincashIncomeTable += '            <td>'+FIN04003M00.onNumberWithCommas(fincashIncomeList[0].corBond)+'</td>                           ';
fincashIncomeTable += '            <td>'+FIN04003M00.onNumberWithCommas(fincashIncomeList[1].corBond)+'</td>                           ';
fincashIncomeTable += '            <td>'+FIN04003M00.onNumberWithCommas(fincashIncomeList[2].corBond)+'</td>                           ';
fincashIncomeTable += '            <td>'+FIN04003M00.onNumberWithCommas(fincashIncomeList[3].corBond)+'</td>                           ';
fincashIncomeTable += '            <td>'+FIN04003M00.onNumberWithCommas(fincashIncomeList[4].corBond)+'</td>                           ';
fincashIncomeTable += '            <td>'+FIN04003M00.onNumberWithCommas(fincashIncomeList[5].corBond)+'</td>                           ';
fincashIncomeTable += '        </tr>                                                                                       ';
fincashIncomeTable += '        <tr>                                                                                        ';
fincashIncomeTable += '            <td>자본금 증자</td>                                                                      ';
fincashIncomeTable += '            <td></td>                                                                               ';
fincashIncomeTable += '            <td>'+FIN04003M00.onNumberWithCommas(fincashIncomeList[0].capitalAmt)+'</td>                        ';
fincashIncomeTable += '            <td>'+FIN04003M00.onNumberWithCommas(fincashIncomeList[1].capitalAmt)+'</td>                        ';
fincashIncomeTable += '            <td>'+FIN04003M00.onNumberWithCommas(fincashIncomeList[2].capitalAmt)+'</td>                        ';
fincashIncomeTable += '            <td>'+FIN04003M00.onNumberWithCommas(fincashIncomeList[3].capitalAmt)+'</td>                        ';
fincashIncomeTable += '            <td>'+FIN04003M00.onNumberWithCommas(fincashIncomeList[4].capitalAmt)+'</td>                        ';
fincashIncomeTable += '            <td>'+FIN04003M00.onNumberWithCommas(fincashIncomeList[5].capitalAmt)+'</td>                        ';
fincashIncomeTable += '        </tr>                                                                                       ';
fincashIncomeTable += '        <tr>                                                                                        ';
fincashIncomeTable += '            <td>재고자산감소</td>                                                                      ';
fincashIncomeTable += '            <td></td>                                                                               ';
fincashIncomeTable += '            <td>'+FIN04003M00.onNumberWithCommas(fincashIncomeList[0].storedAssetAmt)+'</td>                    ';
fincashIncomeTable += '            <td>'+FIN04003M00.onNumberWithCommas(fincashIncomeList[1].storedAssetAmt)+'</td>                    ';
fincashIncomeTable += '            <td>'+FIN04003M00.onNumberWithCommas(fincashIncomeList[2].storedAssetAmt)+'</td>                    ';
fincashIncomeTable += '            <td>'+FIN04003M00.onNumberWithCommas(fincashIncomeList[3].storedAssetAmt)+'</td>                    ';
fincashIncomeTable += '            <td>'+FIN04003M00.onNumberWithCommas(fincashIncomeList[4].storedAssetAmt)+'</td>                    ';
fincashIncomeTable += '            <td>'+FIN04003M00.onNumberWithCommas(fincashIncomeList[5].storedAssetAmt)+'</td>                    ';
fincashIncomeTable += '        </tr>                                                                                       ';
fincashIncomeTable += '        <tr>                                                                                        ';
fincashIncomeTable += '            <td colspan="14">&nbsp;</td>                                                            ';
fincashIncomeTable += '        </tr>                                                                                       ';
fincashIncomeTable += '        <tr class="active">                                                                         ';
fincashIncomeTable += '            <td>총 당월 현금수입</td>                                                                  ';
fincashIncomeTable += '            <td></td>                                                                               ';
fincashIncomeTable += '            <td>'+FIN04003M00.onNumberWithCommas(fincashIncomeList[0].cashIncomeTotal)+'</td>                   ';
fincashIncomeTable += '            <td>'+FIN04003M00.onNumberWithCommas(fincashIncomeList[1].cashIncomeTotal)+'</td>                   ';
fincashIncomeTable += '            <td>'+FIN04003M00.onNumberWithCommas(fincashIncomeList[2].cashIncomeTotal)+'</td>                   ';
fincashIncomeTable += '            <td>'+FIN04003M00.onNumberWithCommas(fincashIncomeList[3].cashIncomeTotal)+'</td>                   ';
fincashIncomeTable += '            <td>'+FIN04003M00.onNumberWithCommas(fincashIncomeList[4].cashIncomeTotal)+'</td>                   ';
fincashIncomeTable += '            <td>'+FIN04003M00.onNumberWithCommas(fincashIncomeList[5].cashIncomeTotal)+'</td>                   ';
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
fincashIncomeTable += '            <td>'+FIN04003M00.onNumberWithCommas(fincashIncomeList[6].salesAmt)+'</td>                          ';
fincashIncomeTable += '            <td>'+FIN04003M00.onNumberWithCommas(fincashIncomeList[7].salesAmt)+'</td>                          ';
fincashIncomeTable += '            <td>'+FIN04003M00.onNumberWithCommas(fincashIncomeList[8].salesAmt)+'</td>                          ';
fincashIncomeTable += '            <td>'+FIN04003M00.onNumberWithCommas(fincashIncomeList[9].salesAmt)+'</td>                          ';
fincashIncomeTable += '            <td>'+FIN04003M00.onNumberWithCommas(fincashIncomeList[10].salesAmt)+'</td>                         ';
fincashIncomeTable += '            <td>'+FIN04003M00.onNumberWithCommas(fincashIncomeList[11].salesAmt)+'</td>                         ';
fincashIncomeTable += '        </tr>                                                                                       ';
fincashIncomeTable += '        <tr>                                                                                        ';
fincashIncomeTable += '            <td>당월현금매출수입</td>                                                                  ';
fincashIncomeTable += '            <td>'+(businessWorkPatterns['rsv01'])['dl']+'%</td>                                     ';
fincashIncomeTable += '            <td>'+FIN04003M00.onNumberWithCommas(fincashIncomeList[6].cashIncome0Month)+'</td>                  ';
fincashIncomeTable += '            <td>'+FIN04003M00.onNumberWithCommas(fincashIncomeList[7].cashIncome0Month)+'</td>                  ';
fincashIncomeTable += '            <td>'+FIN04003M00.onNumberWithCommas(fincashIncomeList[8].cashIncome0Month)+'</td>                  ';
fincashIncomeTable += '            <td>'+FIN04003M00.onNumberWithCommas(fincashIncomeList[9].cashIncome0Month)+'</td>                  ';
fincashIncomeTable += '            <td>'+FIN04003M00.onNumberWithCommas(fincashIncomeList[10].cashIncome0Month)+'</td>                 ';
fincashIncomeTable += '            <td>'+FIN04003M00.onNumberWithCommas(fincashIncomeList[11].cashIncome0Month)+'</td>                 ';
fincashIncomeTable += '        </tr>                                                                                       ';
fincashIncomeTable += '        <tr>                                                                                        ';
fincashIncomeTable += '            <td>1개월 전 현금매출 중<br/>당월 현금 수입</td>                                              ';
fincashIncomeTable += '            <td>'+(businessWorkPatterns['rsv02'])['dl']+'%</td>                                     ';
fincashIncomeTable += '            <td>'+FIN04003M00.onNumberWithCommas(fincashIncomeList[6].cashIncome1Month)+'</td>                  ';
fincashIncomeTable += '            <td>'+FIN04003M00.onNumberWithCommas(fincashIncomeList[7].cashIncome1Month)+'</td>                  ';
fincashIncomeTable += '            <td>'+FIN04003M00.onNumberWithCommas(fincashIncomeList[8].cashIncome1Month)+'</td>                  ';
fincashIncomeTable += '            <td>'+FIN04003M00.onNumberWithCommas(fincashIncomeList[9].cashIncome1Month)+'</td>                  ';
fincashIncomeTable += '            <td>'+FIN04003M00.onNumberWithCommas(fincashIncomeList[10].cashIncome1Month)+'</td>                 ';
fincashIncomeTable += '            <td>'+FIN04003M00.onNumberWithCommas(fincashIncomeList[11].cashIncome1Month)+'</td>                 ';
fincashIncomeTable += '        </tr>                                                                                       ';
fincashIncomeTable += '        <tr>                                                                                        ';
fincashIncomeTable += '            <td>2개월 전 현금매출 중<br/>당월 현금 수입</td>                                              ';
fincashIncomeTable += '            <td>'+(businessWorkPatterns['rsv03'])['dl']+'%</td>                                     ';
fincashIncomeTable += '            <td>'+FIN04003M00.onNumberWithCommas(fincashIncomeList[6].cashIncome2Month)+'</td>                  ';
fincashIncomeTable += '            <td>'+FIN04003M00.onNumberWithCommas(fincashIncomeList[7].cashIncome2Month)+'</td>                  ';
fincashIncomeTable += '            <td>'+FIN04003M00.onNumberWithCommas(fincashIncomeList[8].cashIncome2Month)+'</td>                  ';
fincashIncomeTable += '            <td>'+FIN04003M00.onNumberWithCommas(fincashIncomeList[9].cashIncome2Month)+'</td>                  ';
fincashIncomeTable += '            <td>'+FIN04003M00.onNumberWithCommas(fincashIncomeList[10].cashIncome2Month)+'</td>                 ';
fincashIncomeTable += '            <td>'+FIN04003M00.onNumberWithCommas(fincashIncomeList[11].cashIncome2Month)+'</td>                 ';
fincashIncomeTable += '        </tr>                                                                                       ';
fincashIncomeTable += '        <tr>                                                                                        ';
fincashIncomeTable += '            <td colspan="14">&nbsp;</td>                                                            ';
fincashIncomeTable += '        </tr>                                                                                       ';
fincashIncomeTable += '        <tr>                                                                                        ';
fincashIncomeTable += '            <td>고정자산 매각</td>                                                                     ';
fincashIncomeTable += '            <td></td>                                                                               ';
fincashIncomeTable += '            <td>'+FIN04003M00.onNumberWithCommas(fincashIncomeList[6].fixAssetAmt)+'</td>                       ';
fincashIncomeTable += '            <td>'+FIN04003M00.onNumberWithCommas(fincashIncomeList[7].fixAssetAmt)+'</td>                       ';
fincashIncomeTable += '            <td>'+FIN04003M00.onNumberWithCommas(fincashIncomeList[8].fixAssetAmt)+'</td>                       ';
fincashIncomeTable += '            <td>'+FIN04003M00.onNumberWithCommas(fincashIncomeList[9].fixAssetAmt)+'</td>                       ';
fincashIncomeTable += '            <td>'+FIN04003M00.onNumberWithCommas(fincashIncomeList[10].fixAssetAmt)+'</td>                      ';
fincashIncomeTable += '            <td>'+FIN04003M00.onNumberWithCommas(fincashIncomeList[11].fixAssetAmt)+'</td>                      ';
fincashIncomeTable += '        </tr>                                                                                       ';
fincashIncomeTable += '        <tr>                                                                                        ';
fincashIncomeTable += '            <td>회사채 발행</td>                                                                      ';
fincashIncomeTable += '            <td></td>                                                                               ';
fincashIncomeTable += '            <td>'+FIN04003M00.onNumberWithCommas(fincashIncomeList[6].corBond)+'</td>                           ';
fincashIncomeTable += '            <td>'+FIN04003M00.onNumberWithCommas(fincashIncomeList[7].corBond)+'</td>                           ';
fincashIncomeTable += '            <td>'+FIN04003M00.onNumberWithCommas(fincashIncomeList[8].corBond)+'</td>                           ';
fincashIncomeTable += '            <td>'+FIN04003M00.onNumberWithCommas(fincashIncomeList[9].corBond)+'</td>                           ';
fincashIncomeTable += '            <td>'+FIN04003M00.onNumberWithCommas(fincashIncomeList[10].corBond)+'</td>                          ';
fincashIncomeTable += '            <td>'+FIN04003M00.onNumberWithCommas(fincashIncomeList[11].corBond)+'</td>                          ';
fincashIncomeTable += '        </tr>                                                                                       ';
fincashIncomeTable += '        <tr>                                                                                        ';
fincashIncomeTable += '            <td>자본금 증자</td>                                                                      ';
fincashIncomeTable += '            <td></td>                                                                               ';
fincashIncomeTable += '            <td>'+FIN04003M00.onNumberWithCommas(fincashIncomeList[6].capitalAmt)+'</td>                        ';
fincashIncomeTable += '            <td>'+FIN04003M00.onNumberWithCommas(fincashIncomeList[7].capitalAmt)+'</td>                        ';
fincashIncomeTable += '            <td>'+FIN04003M00.onNumberWithCommas(fincashIncomeList[8].capitalAmt)+'</td>                        ';
fincashIncomeTable += '            <td>'+FIN04003M00.onNumberWithCommas(fincashIncomeList[9].capitalAmt)+'</td>                        ';
fincashIncomeTable += '            <td>'+FIN04003M00.onNumberWithCommas(fincashIncomeList[10].capitalAmt)+'</td>                       ';
fincashIncomeTable += '            <td>'+FIN04003M00.onNumberWithCommas(fincashIncomeList[11].capitalAmt)+'</td>                       ';
fincashIncomeTable += '        </tr>                                                                                       ';
fincashIncomeTable += '        <tr>                                                                                        ';
fincashIncomeTable += '            <td>재고자산감소</td>                                                                      ';
fincashIncomeTable += '            <td></td>                                                                               ';
fincashIncomeTable += '            <td>'+FIN04003M00.onNumberWithCommas(fincashIncomeList[6].storedAssetAmt)+'</td>                    ';
fincashIncomeTable += '            <td>'+FIN04003M00.onNumberWithCommas(fincashIncomeList[7].storedAssetAmt)+'</td>                    ';
fincashIncomeTable += '            <td>'+FIN04003M00.onNumberWithCommas(fincashIncomeList[8].storedAssetAmt)+'</td>                    ';
fincashIncomeTable += '            <td>'+FIN04003M00.onNumberWithCommas(fincashIncomeList[9].storedAssetAmt)+'</td>                    ';
fincashIncomeTable += '            <td>'+FIN04003M00.onNumberWithCommas(fincashIncomeList[10].storedAssetAmt)+'</td>                   ';
fincashIncomeTable += '            <td>'+FIN04003M00.onNumberWithCommas(fincashIncomeList[11].storedAssetAmt)+'</td>                   ';
fincashIncomeTable += '        </tr>                                                                                       ';
fincashIncomeTable += '        <tr>                                                                                        ';
fincashIncomeTable += '            <td colspan="14">&nbsp;</td>                                                            ';
fincashIncomeTable += '        </tr>                                                                                       ';
fincashIncomeTable += '        <tr class="active">                                                                         ';
fincashIncomeTable += '            <td>총 당월 현금수입</td>                                                                  ';
fincashIncomeTable += '            <td></td>                                                                               ';
fincashIncomeTable += '            <td>'+FIN04003M00.onNumberWithCommas(fincashIncomeList[6].cashIncomeTotal)+'</td>                   ';
fincashIncomeTable += '            <td>'+FIN04003M00.onNumberWithCommas(fincashIncomeList[7].cashIncomeTotal)+'</td>                   ';
fincashIncomeTable += '            <td>'+FIN04003M00.onNumberWithCommas(fincashIncomeList[8].cashIncomeTotal)+'</td>                   ';
fincashIncomeTable += '            <td>'+FIN04003M00.onNumberWithCommas(fincashIncomeList[9].cashIncomeTotal)+'</td>                   ';
fincashIncomeTable += '            <td>'+FIN04003M00.onNumberWithCommas(fincashIncomeList[10].cashIncomeTotal)+'</td>                  ';
fincashIncomeTable += '            <td>'+FIN04003M00.onNumberWithCommas(fincashIncomeList[11].cashIncomeTotal)+'</td>                  ';
fincashIncomeTable += '        </tr>                                                                                       ';
fincashIncomeTable += '    </tbody>                                                                                        ';
fincashIncomeTable += '</table>                                                                                            ';
fincashIncomeTable += '<!--//현금수입테이블-->                                                                                ';
fincashIncomeTable += '</div>                                                                                              ';

    $("#fincashIncomeTable").html(fincashIncomeTable);
};

FIN04003M00Component.prototype.onFinCashOutcomeList = function() {

        console.log("<<<<<< onFinCashOutcomeList() start >>>>> ")
 
        finService.getFinInvtCashOutcomeModify(finCom.alyid, finCom.stacYy, qsrtInfo, FIN04003M00.finCashOutcomeCallback)

};

FIN04003M00Component.prototype.finCashOutcomeCallback = function(result) {

    if (result != null) {

         var res = JSON.parse(result);

        if (res.success) {

            var data = res.data.result;

            fincashOutComeList = data['FinInvtCashOutcomeModify'];

            if (fincashOutComeList != null && fincashOutComeList != undefined) {
                fincashOutComeLength = 1;

                if (fincashIncomeLength > 0 && fincashOutComeLength > 0) {
                    FIN04003M00.onFinCashOutcomeView();
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

FIN04003M00Component.prototype.onFinCashOutcomeView = function() {


var fincashOutcomeTable = '';

fincashOutcomeTable += '<div class="panel-body">																		';
fincashOutcomeTable += '     <table class="table table-condensed">                                                      ';
fincashOutcomeTable += '         <thead>                                                                                ';
fincashOutcomeTable += '             <tr class="active text-lg">                                                        ';
fincashOutcomeTable += '                 <th>월</th>                                                                    ';
fincashOutcomeTable += '                 <th>'+stacYy+'-'+fincashOutComeList[0].month+'</th>                            ';
fincashOutcomeTable += '                 <th>'+stacYy+'-'+fincashOutComeList[1].month+'</th>                            ';
fincashOutcomeTable += '                 <th>'+stacYy+'-'+fincashOutComeList[2].month+'</th>                            ';
fincashOutcomeTable += '                 <th>'+stacYy+'-'+fincashOutComeList[3].month+'</th>                            ';
fincashOutcomeTable += '                 <th>'+stacYy+'-'+fincashOutComeList[4].month+'</th>                            ';
fincashOutcomeTable += '                 <th>'+stacYy+'-'+fincashOutComeList[5].month+'</th>                            ';
fincashOutcomeTable += '             </tr>                                                                              ';
fincashOutcomeTable += '         </thead>                                                                               ';
fincashOutcomeTable += '         <tbody>                                                                                ';
fincashOutcomeTable += '         <tr>                                                                                   ';
fincashOutcomeTable += '                 <td>매출액</td>                                                                 ';
fincashOutcomeTable += '                 <td>'+FIN04003M00.onNumberWithCommas(fincashIncomeList[0].salesAmt)+'</td>                 ';
fincashOutcomeTable += '                 <td>'+FIN04003M00.onNumberWithCommas(fincashIncomeList[1].salesAmt)+'</td>                 ';
fincashOutcomeTable += '                 <td>'+FIN04003M00.onNumberWithCommas(fincashIncomeList[2].salesAmt)+'</td>                 ';
fincashOutcomeTable += '                 <td>'+FIN04003M00.onNumberWithCommas(fincashIncomeList[3].salesAmt)+'</td>                 ';
fincashOutcomeTable += '                 <td>'+FIN04003M00.onNumberWithCommas(fincashIncomeList[4].salesAmt)+'</td>                 ';
fincashOutcomeTable += '                 <td>'+FIN04003M00.onNumberWithCommas(fincashIncomeList[5].salesAmt)+'</td>                 ';
fincashOutcomeTable += '             </tr>                                                                              ';
fincashOutcomeTable += '             <tr>                                                                               ';
fincashOutcomeTable += '                 <td colspan="13">&nbsp;</td>                                                   ';
fincashOutcomeTable += '             </tr>                                                                              ';
fincashOutcomeTable += '             <tr>                                                                               ';
fincashOutcomeTable += '                 <td>매출원가(매출 후 구입비용 지급)</td>                                             ';
fincashOutcomeTable += '                 <td>'+FIN04003M00.onNumberWithCommas(fincashOutComeList[0].salesCostAfter)+'</td>          ';
fincashOutcomeTable += '                 <td>'+FIN04003M00.onNumberWithCommas(fincashOutComeList[1].salesCostAfter)+'</td>          ';
fincashOutcomeTable += '                 <td>'+FIN04003M00.onNumberWithCommas(fincashOutComeList[2].salesCostAfter)+'</td>          ';
fincashOutcomeTable += '                 <td>'+FIN04003M00.onNumberWithCommas(fincashOutComeList[3].salesCostAfter)+'</td>          ';
fincashOutcomeTable += '                 <td>'+FIN04003M00.onNumberWithCommas(fincashOutComeList[4].salesCostAfter)+'</td>          ';
fincashOutcomeTable += '                 <td>'+FIN04003M00.onNumberWithCommas(fincashOutComeList[5].salesCostAfter)+'</td>          ';
fincashOutcomeTable += '             </tr>                                                                              ';
fincashOutcomeTable += '             <tr>                                                                               ';
fincashOutcomeTable += '                 <td>매출원가(매출 전 구입비용 지급)</td>                                             ';
fincashOutcomeTable += '                 <td>'+FIN04003M00.onNumberWithCommas(fincashOutComeList[0].salesCostBefore)+'</td>         ';
fincashOutcomeTable += '                 <td>'+FIN04003M00.onNumberWithCommas(fincashOutComeList[1].salesCostBefore)+'</td>         ';
fincashOutcomeTable += '                 <td>'+FIN04003M00.onNumberWithCommas(fincashOutComeList[2].salesCostBefore)+'</td>         ';
fincashOutcomeTable += '                 <td>'+FIN04003M00.onNumberWithCommas(fincashOutComeList[3].salesCostBefore)+'</td>         ';
fincashOutcomeTable += '                 <td>'+FIN04003M00.onNumberWithCommas(fincashOutComeList[4].salesCostBefore)+'</td>         ';
fincashOutcomeTable += '                 <td>'+FIN04003M00.onNumberWithCommas(fincashOutComeList[5].salesCostBefore)+'</td>         ';
fincashOutcomeTable += '             </tr>                                                                              ';
fincashOutcomeTable += '             <tr>                                                                               ';
fincashOutcomeTable += '                 <td>판매비와 관리비</td>                                                          ';
fincashOutcomeTable += '                 <td>'+FIN04003M00.onNumberWithCommas(fincashOutComeList[0].mnepAmt)+'</td>                 ';
fincashOutcomeTable += '                 <td>'+FIN04003M00.onNumberWithCommas(fincashOutComeList[1].mnepAmt)+'</td>                 ';
fincashOutcomeTable += '                 <td>'+FIN04003M00.onNumberWithCommas(fincashOutComeList[2].mnepAmt)+'</td>                 ';
fincashOutcomeTable += '                 <td>'+FIN04003M00.onNumberWithCommas(fincashOutComeList[3].mnepAmt)+'</td>                 ';
fincashOutcomeTable += '                 <td>'+FIN04003M00.onNumberWithCommas(fincashOutComeList[4].mnepAmt)+'</td>                 ';
fincashOutcomeTable += '                 <td>'+FIN04003M00.onNumberWithCommas(fincashOutComeList[5].mnepAmt)+'</td>                 ';
fincashOutcomeTable += '             </tr>                                                                              ';
fincashOutcomeTable += '             <tr>                                                                               ';
fincashOutcomeTable += '                 <td>이자비용</td>                                                                ';
fincashOutcomeTable += '                 <td>'+FIN04003M00.onNumberWithCommas(fincashOutComeList[0].interestAmt)+'</td>             ';
fincashOutcomeTable += '                 <td>'+FIN04003M00.onNumberWithCommas(fincashOutComeList[1].interestAmt)+'</td>             ';
fincashOutcomeTable += '                 <td>'+FIN04003M00.onNumberWithCommas(fincashOutComeList[2].interestAmt)+'</td>             ';
fincashOutcomeTable += '                 <td>'+FIN04003M00.onNumberWithCommas(fincashOutComeList[3].interestAmt)+'</td>             ';
fincashOutcomeTable += '                 <td>'+FIN04003M00.onNumberWithCommas(fincashOutComeList[4].interestAmt)+'</td>             ';
fincashOutcomeTable += '                 <td>'+FIN04003M00.onNumberWithCommas(fincashOutComeList[5].interestAmt)+'</td>             ';
fincashOutcomeTable += '             </tr>                                                                              ';
fincashOutcomeTable += '             <tr>                                                                               ';
fincashOutcomeTable += '                 <td>차입금상환(운전자금)</td>                                                      ';
fincashOutcomeTable += '                 <td>'+FIN04003M00.onNumberWithCommas(fincashOutComeList[0].workingFundsAmt)+'</td>         ';
fincashOutcomeTable += '                 <td>'+FIN04003M00.onNumberWithCommas(fincashOutComeList[1].workingFundsAmt)+'</td>         ';
fincashOutcomeTable += '                 <td>'+FIN04003M00.onNumberWithCommas(fincashOutComeList[2].workingFundsAmt)+'</td>         ';
fincashOutcomeTable += '                 <td>'+FIN04003M00.onNumberWithCommas(fincashOutComeList[3].workingFundsAmt)+'</td>         ';
fincashOutcomeTable += '                 <td>'+FIN04003M00.onNumberWithCommas(fincashOutComeList[4].workingFundsAmt)+'</td>         ';
fincashOutcomeTable += '                 <td>'+FIN04003M00.onNumberWithCommas(fincashOutComeList[5].workingFundsAmt)+'</td>         ';
fincashOutcomeTable += '             </tr>                                                                              ';
fincashOutcomeTable += '             <tr>                                                                               ';
fincashOutcomeTable += '                 <td>차입금상환(시설자금)</td>                                                      ';
fincashOutcomeTable += '                 <td>'+FIN04003M00.onNumberWithCommas(fincashOutComeList[0].equipMentAmt)+'</td>            ';
fincashOutcomeTable += '                 <td>'+FIN04003M00.onNumberWithCommas(fincashOutComeList[1].equipMentAmt)+'</td>            ';
fincashOutcomeTable += '                 <td>'+FIN04003M00.onNumberWithCommas(fincashOutComeList[2].equipMentAmt)+'</td>            ';
fincashOutcomeTable += '                 <td>'+FIN04003M00.onNumberWithCommas(fincashOutComeList[3].equipMentAmt)+'</td>            ';
fincashOutcomeTable += '                 <td>'+FIN04003M00.onNumberWithCommas(fincashOutComeList[4].equipMentAmt)+'</td>            ';
fincashOutcomeTable += '                 <td>'+FIN04003M00.onNumberWithCommas(fincashOutComeList[5].equipMentAmt)+'</td>            ';
fincashOutcomeTable += '             </tr>                                                                              ';
fincashOutcomeTable += '             <tr>                                                                               ';
fincashOutcomeTable += '                 <td>R&D비용</td>                                                                ';
fincashOutcomeTable += '                 <td>'+FIN04003M00.onNumberWithCommas(fincashOutComeList[0].rdAmt)+'</td>                   ';
fincashOutcomeTable += '                 <td>'+FIN04003M00.onNumberWithCommas(fincashOutComeList[1].rdAmt)+'</td>                   ';
fincashOutcomeTable += '                 <td>'+FIN04003M00.onNumberWithCommas(fincashOutComeList[2].rdAmt)+'</td>                   ';
fincashOutcomeTable += '                 <td>'+FIN04003M00.onNumberWithCommas(fincashOutComeList[3].rdAmt)+'</td>                   ';
fincashOutcomeTable += '                 <td>'+FIN04003M00.onNumberWithCommas(fincashOutComeList[4].rdAmt)+'</td>                   ';
fincashOutcomeTable += '                 <td>'+FIN04003M00.onNumberWithCommas(fincashOutComeList[5].rdAmt)+'</td>                   ';
fincashOutcomeTable += '             </tr>                                                                              ';
fincashOutcomeTable += '             <tr>                                                                               ';
fincashOutcomeTable += '                 <td>고정자산 시설 증대 </td>                                                      ';
fincashOutcomeTable += '                 <td>'+FIN04003M00.onNumberWithCommas(fincashOutComeList[0].fixEquipAmt)+'</td>             ';
fincashOutcomeTable += '                 <td>'+FIN04003M00.onNumberWithCommas(fincashOutComeList[1].fixEquipAmt)+'</td>             ';
fincashOutcomeTable += '                 <td>'+FIN04003M00.onNumberWithCommas(fincashOutComeList[2].fixEquipAmt)+'</td>             ';
fincashOutcomeTable += '                 <td>'+FIN04003M00.onNumberWithCommas(fincashOutComeList[3].fixEquipAmt)+'</td>             ';
fincashOutcomeTable += '                 <td>'+FIN04003M00.onNumberWithCommas(fincashOutComeList[4].fixEquipAmt)+'</td>             ';
fincashOutcomeTable += '                 <td>'+FIN04003M00.onNumberWithCommas(fincashOutComeList[5].fixEquipAmt)+'</td>             ';
fincashOutcomeTable += '             </tr>                                                                              ';
fincashOutcomeTable += '             <tr>                                                                               ';
fincashOutcomeTable += '                 <td colspan="13">&nbsp;</td>                                                   ';
fincashOutcomeTable += '             </tr>                                                                              ';
fincashOutcomeTable += '             <tr>                                                                               ';
fincashOutcomeTable += '                 <td>회사채 상환</td>                                                             ';
fincashOutcomeTable += '                 <td>'+FIN04003M00.onNumberWithCommas(fincashOutComeList[0].corOutBoundAmt)+'</td>          ';
fincashOutcomeTable += '                 <td>'+FIN04003M00.onNumberWithCommas(fincashOutComeList[1].corOutBoundAmt)+'</td>          ';
fincashOutcomeTable += '                 <td>'+FIN04003M00.onNumberWithCommas(fincashOutComeList[2].corOutBoundAmt)+'</td>          ';
fincashOutcomeTable += '                 <td>'+FIN04003M00.onNumberWithCommas(fincashOutComeList[3].corOutBoundAmt)+'</td>          ';
fincashOutcomeTable += '                 <td>'+FIN04003M00.onNumberWithCommas(fincashOutComeList[4].corOutBoundAmt)+'</td>          ';
fincashOutcomeTable += '                 <td>'+FIN04003M00.onNumberWithCommas(fincashOutComeList[5].corOutBoundAmt)+'</td>          ';
fincashOutcomeTable += '             </tr>                                                                              ';
fincashOutcomeTable += '             <tr>                                                                               ';
fincashOutcomeTable += '                 <td>재고자산 증대</td>                                                            ';
fincashOutcomeTable += '                 <td>'+FIN04003M00.onNumberWithCommas(fincashOutComeList[0].storedAssetIncAmt)+'</td>       ';
fincashOutcomeTable += '                 <td>'+FIN04003M00.onNumberWithCommas(fincashOutComeList[1].storedAssetIncAmt)+'</td>       ';
fincashOutcomeTable += '                 <td>'+FIN04003M00.onNumberWithCommas(fincashOutComeList[2].storedAssetIncAmt)+'</td>       ';
fincashOutcomeTable += '                 <td>'+FIN04003M00.onNumberWithCommas(fincashOutComeList[3].storedAssetIncAmt)+'</td>       ';
fincashOutcomeTable += '                 <td>'+FIN04003M00.onNumberWithCommas(fincashOutComeList[4].storedAssetIncAmt)+'</td>       ';
fincashOutcomeTable += '                 <td>'+FIN04003M00.onNumberWithCommas(fincashOutComeList[5].storedAssetIncAmt)+'</td>       ';
fincashOutcomeTable += '             </tr>                                                                              ';
fincashOutcomeTable += '             <tr>                                                                               ';
fincashOutcomeTable += '                 <td>법인세</td>                                                                 ';
fincashOutcomeTable += '                 <td>'+FIN04003M00.onNumberWithCommas(fincashOutComeList[0].crtxAmt)+'</td>                 ';
fincashOutcomeTable += '                 <td>'+FIN04003M00.onNumberWithCommas(fincashOutComeList[1].crtxAmt)+'</td>                 ';
fincashOutcomeTable += '                 <td>'+FIN04003M00.onNumberWithCommas(fincashOutComeList[2].crtxAmt)+'</td>                 ';
fincashOutcomeTable += '                 <td>'+FIN04003M00.onNumberWithCommas(fincashOutComeList[3].crtxAmt)+'</td>                 ';
fincashOutcomeTable += '                 <td>'+FIN04003M00.onNumberWithCommas(fincashOutComeList[4].crtxAmt)+'</td>                 ';
fincashOutcomeTable += '                 <td>'+FIN04003M00.onNumberWithCommas(fincashOutComeList[5].crtxAmt)+'</td>                 ';
fincashOutcomeTable += '             </tr>                                                                              ';
fincashOutcomeTable += '             <tr>                                                                               ';
fincashOutcomeTable += '                 <td>현금배당</td>                                                                ';
fincashOutcomeTable += '                 <td>'+FIN04003M00.onNumberWithCommas(fincashOutComeList[0].cashDvdnAmt)+'</td>             ';
fincashOutcomeTable += '                 <td>'+FIN04003M00.onNumberWithCommas(fincashOutComeList[1].cashDvdnAmt)+'</td>             ';
fincashOutcomeTable += '                 <td>'+FIN04003M00.onNumberWithCommas(fincashOutComeList[2].cashDvdnAmt)+'</td>             ';
fincashOutcomeTable += '                 <td>'+FIN04003M00.onNumberWithCommas(fincashOutComeList[3].cashDvdnAmt)+'</td>             ';
fincashOutcomeTable += '                 <td>'+FIN04003M00.onNumberWithCommas(fincashOutComeList[4].cashDvdnAmt)+'</td>             ';
fincashOutcomeTable += '                 <td>'+FIN04003M00.onNumberWithCommas(fincashOutComeList[5].cashDvdnAmt)+'</td>             ';
fincashOutcomeTable += '             </tr>                                                                              ';
fincashOutcomeTable += '             <tr class="active">                                                                ';
fincashOutcomeTable += '                 <td>지출액의 합계</td>                                                            ';
fincashOutcomeTable += '                 <td>'+FIN04003M00.onNumberWithCommas(fincashOutComeList[0].outComeTotal)+'</td>            ';
fincashOutcomeTable += '                 <td>'+FIN04003M00.onNumberWithCommas(fincashOutComeList[1].outComeTotal)+'</td>            ';
fincashOutcomeTable += '                 <td>'+FIN04003M00.onNumberWithCommas(fincashOutComeList[2].outComeTotal)+'</td>            ';
fincashOutcomeTable += '                 <td>'+FIN04003M00.onNumberWithCommas(fincashOutComeList[3].outComeTotal)+'</td>            ';
fincashOutcomeTable += '                 <td>'+FIN04003M00.onNumberWithCommas(fincashOutComeList[4].outComeTotal)+'</td>            ';
fincashOutcomeTable += '                 <td>'+FIN04003M00.onNumberWithCommas(fincashOutComeList[5].outComeTotal)+'</td>            ';
fincashOutcomeTable += '             </tr>                                                                              ';
fincashOutcomeTable += '         </tbody>                                                                               ';
fincashOutcomeTable += '     </table>                                                                                   ';
fincashOutcomeTable += '     <br/>                                                                                      ';
fincashOutcomeTable += '     <table class="table table-condensed">                                                      ';
fincashOutcomeTable += '         <thead>                                                                                ';
fincashOutcomeTable += '             <tr class="active text-lg">                                                        ';
fincashOutcomeTable += '                 <th>월</th>                                                                    ';
fincashOutcomeTable += '                 <th>'+stacYy+'-'+fincashOutComeList[6].month+'</th>                            ';
fincashOutcomeTable += '                 <th>'+stacYy+'-'+fincashOutComeList[7].month+'</th>                            ';
fincashOutcomeTable += '                 <th>'+stacYy+'-'+fincashOutComeList[8].month+'</th>                            ';
fincashOutcomeTable += '                 <th>'+stacYy+'-'+fincashOutComeList[9].month+'</th>                            ';
fincashOutcomeTable += '                 <th>'+stacYy+'-'+fincashOutComeList[10].month+'</th>                           ';
fincashOutcomeTable += '                 <th>'+stacYy+'-'+fincashOutComeList[11].month+'</th>                           ';
fincashOutcomeTable += '             </tr>                                                                              ';
fincashOutcomeTable += '         </thead>                                                                               ';
fincashOutcomeTable += '         <tbody>                                                                                ';
fincashOutcomeTable += '         <tr>                                                                                   ';
fincashOutcomeTable += '                 <td>매출액</td>                                                                 ';
fincashOutcomeTable += '                 <td>'+FIN04003M00.onNumberWithCommas(fincashIncomeList[6].salesAmt)+'</td>                 ';
fincashOutcomeTable += '                 <td>'+FIN04003M00.onNumberWithCommas(fincashIncomeList[7].salesAmt)+'</td>                 ';
fincashOutcomeTable += '                 <td>'+FIN04003M00.onNumberWithCommas(fincashIncomeList[8].salesAmt)+'</td>                 ';
fincashOutcomeTable += '                 <td>'+FIN04003M00.onNumberWithCommas(fincashIncomeList[9].salesAmt)+'</td>                 ';
fincashOutcomeTable += '                 <td>'+FIN04003M00.onNumberWithCommas(fincashIncomeList[10].salesAmt)+'</td>                ';
fincashOutcomeTable += '                 <td>'+FIN04003M00.onNumberWithCommas(fincashIncomeList[11].salesAmt)+'</td>                ';
fincashOutcomeTable += '             </tr>                                                                              ';
fincashOutcomeTable += '             <tr>                                                                               ';
fincashOutcomeTable += '                 <td colspan="13">&nbsp;</td>                                                   ';
fincashOutcomeTable += '             </tr>                                                                              ';
fincashOutcomeTable += '             <tr>                                                                               ';
fincashOutcomeTable += '                 <td>매출원가(매출 후 구입비용 지급)</td>                                             ';
fincashOutcomeTable += '                 <td>'+FIN04003M00.onNumberWithCommas(fincashOutComeList[6].salesCostAfter)+'</td>          ';
fincashOutcomeTable += '                 <td>'+FIN04003M00.onNumberWithCommas(fincashOutComeList[7].salesCostAfter)+'</td>          ';
fincashOutcomeTable += '                 <td>'+FIN04003M00.onNumberWithCommas(fincashOutComeList[8].salesCostAfter)+'</td>          ';
fincashOutcomeTable += '                 <td>'+FIN04003M00.onNumberWithCommas(fincashOutComeList[9].salesCostAfter)+'</td>          ';
fincashOutcomeTable += '                 <td>'+FIN04003M00.onNumberWithCommas(fincashOutComeList[10].salesCostAfter)+'</td>         ';
fincashOutcomeTable += '                 <td>'+FIN04003M00.onNumberWithCommas(fincashOutComeList[11].salesCostAfter)+'</td>         ';
fincashOutcomeTable += '             </tr>                                                                              ';
fincashOutcomeTable += '             <tr>                                                                               ';
fincashOutcomeTable += '                 <td>매출원가(매출 전 구입비용 지급)</td>                                             ';
fincashOutcomeTable += '                 <td>'+FIN04003M00.onNumberWithCommas(fincashOutComeList[6].salesCostBefore)+'</td>         ';
fincashOutcomeTable += '                 <td>'+FIN04003M00.onNumberWithCommas(fincashOutComeList[7].salesCostBefore)+'</td>         ';
fincashOutcomeTable += '                 <td>'+FIN04003M00.onNumberWithCommas(fincashOutComeList[8].salesCostBefore)+'</td>         ';
fincashOutcomeTable += '                 <td>'+FIN04003M00.onNumberWithCommas(fincashOutComeList[9].salesCostBefore)+'</td>         ';
fincashOutcomeTable += '                 <td>'+FIN04003M00.onNumberWithCommas(fincashOutComeList[10].salesCostBefore)+'</td>        ';
fincashOutcomeTable += '                 <td>'+FIN04003M00.onNumberWithCommas(fincashOutComeList[11].salesCostBefore)+'</td>        ';
fincashOutcomeTable += '             </tr>                                                                              ';
fincashOutcomeTable += '             <tr>                                                                               ';
fincashOutcomeTable += '                 <td>판매비와 관리비</td>                                                          ';
fincashOutcomeTable += '                 <td>'+FIN04003M00.onNumberWithCommas(fincashOutComeList[6].mnepAmt)+'</td>                 ';
fincashOutcomeTable += '                 <td>'+FIN04003M00.onNumberWithCommas(fincashOutComeList[7].mnepAmt)+'</td>                 ';
fincashOutcomeTable += '                 <td>'+FIN04003M00.onNumberWithCommas(fincashOutComeList[8].mnepAmt)+'</td>                 ';
fincashOutcomeTable += '                 <td>'+FIN04003M00.onNumberWithCommas(fincashOutComeList[9].mnepAmt)+'</td>                 ';
fincashOutcomeTable += '                 <td>'+FIN04003M00.onNumberWithCommas(fincashOutComeList[10].mnepAmt)+'</td>                ';
fincashOutcomeTable += '                 <td>'+FIN04003M00.onNumberWithCommas(fincashOutComeList[11].mnepAmt)+'</td>                ';
fincashOutcomeTable += '             </tr>                                                                              ';
fincashOutcomeTable += '             <tr>                                                                               ';
fincashOutcomeTable += '                 <td>이자비용</td>                                                                ';
fincashOutcomeTable += '                 <td>'+FIN04003M00.onNumberWithCommas(fincashOutComeList[6].interestAmt)+'</td>             ';
fincashOutcomeTable += '                 <td>'+FIN04003M00.onNumberWithCommas(fincashOutComeList[7].interestAmt)+'</td>             ';
fincashOutcomeTable += '                 <td>'+FIN04003M00.onNumberWithCommas(fincashOutComeList[8].interestAmt)+'</td>             ';
fincashOutcomeTable += '                 <td>'+FIN04003M00.onNumberWithCommas(fincashOutComeList[9].interestAmt)+'</td>             ';
fincashOutcomeTable += '                 <td>'+FIN04003M00.onNumberWithCommas(fincashOutComeList[10].interestAmt)+'</td>            ';
fincashOutcomeTable += '                 <td>'+FIN04003M00.onNumberWithCommas(fincashOutComeList[11].interestAmt)+'</td>            ';
fincashOutcomeTable += '             </tr>                                                                              ';
fincashOutcomeTable += '             <tr>                                                                               ';
fincashOutcomeTable += '                 <td>차입금상환(운전자금)</td>                                                      ';
fincashOutcomeTable += '                 <td>'+FIN04003M00.onNumberWithCommas(fincashOutComeList[6].workingFundsAmt)+'</td>         ';
fincashOutcomeTable += '                 <td>'+FIN04003M00.onNumberWithCommas(fincashOutComeList[7].workingFundsAmt)+'</td>         ';
fincashOutcomeTable += '                 <td>'+FIN04003M00.onNumberWithCommas(fincashOutComeList[8].workingFundsAmt)+'</td>         ';
fincashOutcomeTable += '                 <td>'+FIN04003M00.onNumberWithCommas(fincashOutComeList[9].workingFundsAmt)+'</td>         ';
fincashOutcomeTable += '                 <td>'+FIN04003M00.onNumberWithCommas(fincashOutComeList[10].workingFundsAmt)+'</td>        ';
fincashOutcomeTable += '                 <td>'+FIN04003M00.onNumberWithCommas(fincashOutComeList[11].workingFundsAmt)+'</td>        ';
fincashOutcomeTable += '             </tr>                                                                              ';
fincashOutcomeTable += '             <tr>                                                                               ';
fincashOutcomeTable += '                 <td>차입금상환(시설자금)</td>                                                      ';
fincashOutcomeTable += '                 <td>'+FIN04003M00.onNumberWithCommas(fincashOutComeList[6].equipMentAmt)+'</td>            ';
fincashOutcomeTable += '                 <td>'+FIN04003M00.onNumberWithCommas(fincashOutComeList[7].equipMentAmt)+'</td>            ';
fincashOutcomeTable += '                 <td>'+FIN04003M00.onNumberWithCommas(fincashOutComeList[8].equipMentAmt)+'</td>            ';
fincashOutcomeTable += '                 <td>'+FIN04003M00.onNumberWithCommas(fincashOutComeList[9].equipMentAmt)+'</td>            ';
fincashOutcomeTable += '                 <td>'+FIN04003M00.onNumberWithCommas(fincashOutComeList[10].equipMentAmt)+'</td>           ';
fincashOutcomeTable += '                 <td>'+FIN04003M00.onNumberWithCommas(fincashOutComeList[11].equipMentAmt)+'</td>           ';
fincashOutcomeTable += '             </tr>                                                                              ';
fincashOutcomeTable += '             <tr>                                                                               ';
fincashOutcomeTable += '                 <td>R&D비용</td>                                                                ';
fincashOutcomeTable += '                 <td>'+FIN04003M00.onNumberWithCommas(fincashOutComeList[6].rdAmt)+'</td>                   ';
fincashOutcomeTable += '                 <td>'+FIN04003M00.onNumberWithCommas(fincashOutComeList[7].rdAmt)+'</td>                   ';
fincashOutcomeTable += '                 <td>'+FIN04003M00.onNumberWithCommas(fincashOutComeList[8].rdAmt)+'</td>                   ';
fincashOutcomeTable += '                 <td>'+FIN04003M00.onNumberWithCommas(fincashOutComeList[9].rdAmt)+'</td>                   ';
fincashOutcomeTable += '                 <td>'+FIN04003M00.onNumberWithCommas(fincashOutComeList[10].rdAmt)+'</td>                  ';
fincashOutcomeTable += '                 <td>'+FIN04003M00.onNumberWithCommas(fincashOutComeList[11].rdAmt)+'</td>                  ';
fincashOutcomeTable += '             </tr>                                                                              ';
fincashOutcomeTable += '             <tr>                                                                               ';
fincashOutcomeTable += '                 <td>고정자산 시설 증대 </td>                                                      ';
fincashOutcomeTable += '                 <td>'+FIN04003M00.onNumberWithCommas(fincashOutComeList[6].fixEquipAmt)+'</td>             ';
fincashOutcomeTable += '                 <td>'+FIN04003M00.onNumberWithCommas(fincashOutComeList[7].fixEquipAmt)+'</td>             ';
fincashOutcomeTable += '                 <td>'+FIN04003M00.onNumberWithCommas(fincashOutComeList[8].fixEquipAmt)+'</td>             ';
fincashOutcomeTable += '                 <td>'+FIN04003M00.onNumberWithCommas(fincashOutComeList[9].fixEquipAmt)+'</td>             ';
fincashOutcomeTable += '                 <td>'+FIN04003M00.onNumberWithCommas(fincashOutComeList[10].fixEquipAmt)+'</td>            ';
fincashOutcomeTable += '                 <td>'+FIN04003M00.onNumberWithCommas(fincashOutComeList[11].fixEquipAmt)+'</td>            ';
fincashOutcomeTable += '             </tr>                                                                              ';
fincashOutcomeTable += '             <tr>                                                                               ';
fincashOutcomeTable += '                 <td colspan="13">&nbsp;</td>                                                   ';
fincashOutcomeTable += '             </tr>                                                                              ';
fincashOutcomeTable += '             <tr>                                                                               ';
fincashOutcomeTable += '                 <td>회사채 상환</td>                                                             ';
fincashOutcomeTable += '                 <td>'+FIN04003M00.onNumberWithCommas(fincashOutComeList[6].corOutBoundAmt)+'</td>          ';
fincashOutcomeTable += '                 <td>'+FIN04003M00.onNumberWithCommas(fincashOutComeList[7].corOutBoundAmt)+'</td>          ';
fincashOutcomeTable += '                 <td>'+FIN04003M00.onNumberWithCommas(fincashOutComeList[8].corOutBoundAmt)+'</td>          ';
fincashOutcomeTable += '                 <td>'+FIN04003M00.onNumberWithCommas(fincashOutComeList[9].corOutBoundAmt)+'</td>          ';
fincashOutcomeTable += '                 <td>'+FIN04003M00.onNumberWithCommas(fincashOutComeList[10].corOutBoundAmt)+'</td>         ';
fincashOutcomeTable += '                 <td>'+FIN04003M00.onNumberWithCommas(fincashOutComeList[11].corOutBoundAmt)+'</td>         ';
fincashOutcomeTable += '             </tr>                                                                              ';
fincashOutcomeTable += '             <tr>                                                                               ';
fincashOutcomeTable += '                 <td>재고자산 증대</td>                                                            ';
fincashOutcomeTable += '                 <td>'+FIN04003M00.onNumberWithCommas(fincashOutComeList[6].storedAssetIncAmt)+'</td>       ';
fincashOutcomeTable += '                 <td>'+FIN04003M00.onNumberWithCommas(fincashOutComeList[7].storedAssetIncAmt)+'</td>       ';
fincashOutcomeTable += '                 <td>'+FIN04003M00.onNumberWithCommas(fincashOutComeList[8].storedAssetIncAmt)+'</td>       ';
fincashOutcomeTable += '                 <td>'+FIN04003M00.onNumberWithCommas(fincashOutComeList[9].storedAssetIncAmt)+'</td>       ';
fincashOutcomeTable += '                 <td>'+FIN04003M00.onNumberWithCommas(fincashOutComeList[10].storedAssetIncAmt)+'</td>      ';
fincashOutcomeTable += '                 <td>'+FIN04003M00.onNumberWithCommas(fincashOutComeList[11].storedAssetIncAmt)+'</td>      ';
fincashOutcomeTable += '             </tr>                                                                              ';
fincashOutcomeTable += '             <tr>                                                                               ';
fincashOutcomeTable += '                 <td>법인세</td>                                                                 ';
fincashOutcomeTable += '                 <td>'+FIN04003M00.onNumberWithCommas(fincashOutComeList[6].crtxAmt)+'</td>                 ';
fincashOutcomeTable += '                 <td>'+FIN04003M00.onNumberWithCommas(fincashOutComeList[7].crtxAmt)+'</td>                 ';
fincashOutcomeTable += '                 7<td>'+FIN04003M00.onNumberWithCommas(fincashOutComeList[8].crtxAmt)+'</td>                ';
fincashOutcomeTable += '                 <td>'+FIN04003M00.onNumberWithCommas(fincashOutComeList[9].crtxAmt)+'</td>                 ';
fincashOutcomeTable += '                 <td>'+FIN04003M00.onNumberWithCommas(fincashOutComeList[10].crtxAmt)+'</td>                ';
fincashOutcomeTable += '                 <td>'+FIN04003M00.onNumberWithCommas(fincashOutComeList[11].crtxAmt)+'</td>                ';
fincashOutcomeTable += '             </tr>                                                                              ';
fincashOutcomeTable += '             <tr>                                                                               ';
fincashOutcomeTable += '                 <td>현금배당</td>                                                                ';
fincashOutcomeTable += '                 <td>'+FIN04003M00.onNumberWithCommas(fincashOutComeList[6].cashDvdnAmt)+'</td>             ';
fincashOutcomeTable += '                 <td>'+FIN04003M00.onNumberWithCommas(fincashOutComeList[7].cashDvdnAmt)+'</td>             ';
fincashOutcomeTable += '                 <td>'+FIN04003M00.onNumberWithCommas(fincashOutComeList[8].cashDvdnAmt)+'</td>             ';
fincashOutcomeTable += '                 <td>'+FIN04003M00.onNumberWithCommas(fincashOutComeList[9].cashDvdnAmt)+'</td>             ';
fincashOutcomeTable += '                 <td>'+FIN04003M00.onNumberWithCommas(fincashOutComeList[10].cashDvdnAmt)+'</td>            ';
fincashOutcomeTable += '                 <td>'+FIN04003M00.onNumberWithCommas(fincashOutComeList[11].cashDvdnAmt)+'</td>            ';
fincashOutcomeTable += '             </tr>                                                                              ';
fincashOutcomeTable += '             <tr class="active">                                                                ';
fincashOutcomeTable += '                 <td>지출액의 합계</td>                                                            ';
fincashOutcomeTable += '                 <td>'+FIN04003M00.onNumberWithCommas(fincashOutComeList[6].outComeTotal)+'</td>            ';
fincashOutcomeTable += '                 <td>'+FIN04003M00.onNumberWithCommas(fincashOutComeList[7].outComeTotal)+'</td>            ';
fincashOutcomeTable += '                 <td>'+FIN04003M00.onNumberWithCommas(fincashOutComeList[8].outComeTotal)+'</td>            ';
fincashOutcomeTable += '                 <td>'+FIN04003M00.onNumberWithCommas(fincashOutComeList[9].outComeTotal)+'</td>            ';
fincashOutcomeTable += '                 <td>'+FIN04003M00.onNumberWithCommas(fincashOutComeList[10].outComeTotal)+'</td>           ';
fincashOutcomeTable += '                 <td>'+FIN04003M00.onNumberWithCommas(fincashOutComeList[11].outComeTotal)+'</td>           ';
fincashOutcomeTable += '             </tr>                                                                              ';
fincashOutcomeTable += '         </tbody>                                                                               ';
fincashOutcomeTable += '     </table>                                                                                   ';
fincashOutcomeTable += ' </div>                                                                                         ';

$("#fincashOutcomeTable").html(fincashOutcomeTable);

}

FIN04003M00Component.prototype.onFinCashBdgtAmt = function() {
        console.log("<<<<<< onFinCashBdgtAmt() start >>>>> ")
        finService.getFinCashBdgtAmt(finCom.alyid, finCom.stacYy, qsrtInfo, FIN04003M00.finCashBdgtAmtCallback);
};

FIN04003M00Component.prototype.finCashBdgtAmtCallback = function(result) {

    if (result != null) {

         var res = JSON.parse(result);

        if (res.success) {

            var data = res.data.result;

            fincashBdgtAmtList = data['FinCashBdgtAmt'];

            if (fincashBdgtAmtList != null && fincashBdgtAmtList != undefined) {
                fincashBdgtAmtLength = 1;
                FIN04003M00.onFinCashBdgtAmtView();
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

FIN04003M00Component.prototype.onFinCashBdgtAmtView = function() {

var fincashBdgtAmtTable = '';

fincashBdgtAmtTable += '<div class="panel-body">																				     ';
fincashBdgtAmtTable += '    <!--현금예산테이블-->                                                                                          ';
fincashBdgtAmtTable += '    <table class="table table-condensed">                                                                    ';
fincashBdgtAmtTable += '        <thead>                                                                                              ';
fincashBdgtAmtTable += '            <tr class="active text-lg">                                                                      ';
fincashBdgtAmtTable += '                <th>월</th>                                                                                   ';
fincashBdgtAmtTable += '                <th>'+stacYy+'-'+fincashBdgtAmtList[0].month+'</th>                                          ';
fincashBdgtAmtTable += '                <th>'+stacYy+'-'+fincashBdgtAmtList[1].month+'</th>                                          ';
fincashBdgtAmtTable += '                <th>'+stacYy+'-'+fincashBdgtAmtList[2].month+'</th>                                          ';
fincashBdgtAmtTable += '                <th>'+stacYy+'-'+fincashBdgtAmtList[3].month+'</th>                                          ';
fincashBdgtAmtTable += '                <th>'+stacYy+'-'+fincashBdgtAmtList[4].month+'</th>                                          ';
fincashBdgtAmtTable += '                <th>'+stacYy+'-'+fincashBdgtAmtList[5].month+'</th>                                          ';
fincashBdgtAmtTable += '            </tr>                                                                                            ';
fincashBdgtAmtTable += '        </thead>                                                                                             ';
fincashBdgtAmtTable += '        <tbody>                                                                                              ';
fincashBdgtAmtTable += '            <tr>                                                                                             ';
fincashBdgtAmtTable += '                <td>매출액</td>                                                                                 ';
fincashBdgtAmtTable += '                <td>'+FIN04003M00.onNumberWithCommas(fincashBdgtAmtList[0].salesAmt)+'</td>                              ';
fincashBdgtAmtTable += '                <td>'+FIN04003M00.onNumberWithCommas(fincashBdgtAmtList[1].salesAmt)+'</td>                              ';
fincashBdgtAmtTable += '                <td>'+FIN04003M00.onNumberWithCommas(fincashBdgtAmtList[2].salesAmt)+'</td>                              ';
fincashBdgtAmtTable += '                <td>'+FIN04003M00.onNumberWithCommas(fincashBdgtAmtList[3].salesAmt)+'</td>                              ';
fincashBdgtAmtTable += '                <td>'+FIN04003M00.onNumberWithCommas(fincashBdgtAmtList[4].salesAmt)+'</td>                              ';
fincashBdgtAmtTable += '                <td>'+FIN04003M00.onNumberWithCommas(fincashBdgtAmtList[5].salesAmt)+'</td>                              ';
fincashBdgtAmtTable += '            </tr>                                                                                            ';
fincashBdgtAmtTable += '            <tr class="active">                                                                              ';
fincashBdgtAmtTable += '                <td>현금수입의 합계</td>                                                                           ';
fincashBdgtAmtTable += '                <td>'+FIN04003M00.onNumberWithCommas(fincashBdgtAmtList[0].cashIncomeTotal)+'</td>                       ';
fincashBdgtAmtTable += '                <td>'+FIN04003M00.onNumberWithCommas(fincashBdgtAmtList[1].cashIncomeTotal)+'</td>                       ';
fincashBdgtAmtTable += '                <td>'+FIN04003M00.onNumberWithCommas(fincashBdgtAmtList[2].cashIncomeTotal)+'</td>                       ';
fincashBdgtAmtTable += '                <td>'+FIN04003M00.onNumberWithCommas(fincashBdgtAmtList[3].cashIncomeTotal)+'</td>                       ';
fincashBdgtAmtTable += '                <td>'+FIN04003M00.onNumberWithCommas(fincashBdgtAmtList[4].cashIncomeTotal)+'</td>                       ';
fincashBdgtAmtTable += '                <td>'+FIN04003M00.onNumberWithCommas(fincashBdgtAmtList[5].cashIncomeTotal)+'</td>                       ';
fincashBdgtAmtTable += '            </tr>                                                                                            ';
fincashBdgtAmtTable += '            <tr class="active">                                                                              ';
fincashBdgtAmtTable += '                <td>현금지출액의 합계</td>                                                                          ';
fincashBdgtAmtTable += '                <td>'+FIN04003M00.onNumberWithCommas(fincashBdgtAmtList[0].outComeTotal)+'</td>                          ';
fincashBdgtAmtTable += '                <td>'+FIN04003M00.onNumberWithCommas(fincashBdgtAmtList[1].outComeTotal)+'</td>                          ';
fincashBdgtAmtTable += '                <td>'+FIN04003M00.onNumberWithCommas(fincashBdgtAmtList[2].outComeTotal)+'</td>                          ';
fincashBdgtAmtTable += '                <td>'+FIN04003M00.onNumberWithCommas(fincashBdgtAmtList[3].outComeTotal)+'</td>                          ';
fincashBdgtAmtTable += '                <td>'+FIN04003M00.onNumberWithCommas(fincashBdgtAmtList[4].outComeTotal)+'</td>                          ';
fincashBdgtAmtTable += '                <td>'+FIN04003M00.onNumberWithCommas(fincashBdgtAmtList[5].outComeTotal)+'</td>                          ';
fincashBdgtAmtTable += '            </tr>                                                                                            ';
fincashBdgtAmtTable += '            <tr>                                                                                             ';
fincashBdgtAmtTable += '                <td colspan="13">&nbsp;</td>                                                                 ';
fincashBdgtAmtTable += '            </tr>                                                                                            ';
fincashBdgtAmtTable += '            <tr>                                                                                             ';
fincashBdgtAmtTable += '                <td>순현금흐름</td>                                                                              ';
fincashBdgtAmtTable += '                <td>'+FIN04003M00.onNumberWithCommas(fincashBdgtAmtList[0].cashNtFlowAmt)+'</td>                         ';
fincashBdgtAmtTable += '                <td>'+FIN04003M00.onNumberWithCommas(fincashBdgtAmtList[1].cashNtFlowAmt)+'</td>                         ';
fincashBdgtAmtTable += '                <td>'+FIN04003M00.onNumberWithCommas(fincashBdgtAmtList[2].cashNtFlowAmt)+'</td>                         ';
fincashBdgtAmtTable += '                <td>'+FIN04003M00.onNumberWithCommas(fincashBdgtAmtList[3].cashNtFlowAmt)+'</td>                         ';
fincashBdgtAmtTable += '                <td>'+FIN04003M00.onNumberWithCommas(fincashBdgtAmtList[4].cashNtFlowAmt)+'</td>                         ';
fincashBdgtAmtTable += '                <td>'+FIN04003M00.onNumberWithCommas(fincashBdgtAmtList[5].cashNtFlowAmt)+'</td>                         ';
fincashBdgtAmtTable += '            </tr>                                                                                            ';
fincashBdgtAmtTable += '            <tr>                                                                                             ';
fincashBdgtAmtTable += '                <td>최소현금 보유액</td>                                                                           ';
fincashBdgtAmtTable += '                <td>'+FIN04003M00.onNumberWithCommas(fincashBdgtAmtList[0].mnmmCashHoldAmt)+'</td>                       ';
fincashBdgtAmtTable += '                <td>'+FIN04003M00.onNumberWithCommas(fincashBdgtAmtList[1].mnmmCashHoldAmt)+'</td>                       ';
fincashBdgtAmtTable += '                <td>'+FIN04003M00.onNumberWithCommas(fincashBdgtAmtList[2].mnmmCashHoldAmt)+'</td>                       ';
fincashBdgtAmtTable += '                <td>'+FIN04003M00.onNumberWithCommas(fincashBdgtAmtList[3].mnmmCashHoldAmt)+'</td>                       ';
fincashBdgtAmtTable += '                <td>'+FIN04003M00.onNumberWithCommas(fincashBdgtAmtList[4].mnmmCashHoldAmt)+'</td>                       ';
fincashBdgtAmtTable += '                <td>'+FIN04003M00.onNumberWithCommas(fincashBdgtAmtList[5].mnmmCashHoldAmt)+'</td>                       ';
fincashBdgtAmtTable += '            </tr>                                                                                            ';
fincashBdgtAmtTable += '            <tr>                                                                                             ';
fincashBdgtAmtTable += '                <td>총 현금잔고 예측치</td>                                                                         ';
fincashBdgtAmtTable += '                <td>'+FIN04003M00.onNumberWithCommas(fincashBdgtAmtList[0].ttchBalnFrcsAmt)+'</td>                       ';
fincashBdgtAmtTable += '                <td>'+FIN04003M00.onNumberWithCommas(fincashBdgtAmtList[1].ttchBalnFrcsAmt)+'</td>                       ';
fincashBdgtAmtTable += '                <td>'+FIN04003M00.onNumberWithCommas(fincashBdgtAmtList[2].ttchBalnFrcsAmt)+'</td>                       ';
fincashBdgtAmtTable += '                <td>'+FIN04003M00.onNumberWithCommas(fincashBdgtAmtList[3].ttchBalnFrcsAmt)+'</td>                       ';
fincashBdgtAmtTable += '                <td>'+FIN04003M00.onNumberWithCommas(fincashBdgtAmtList[4].ttchBalnFrcsAmt)+'</td>                       ';
fincashBdgtAmtTable += '                <td>'+FIN04003M00.onNumberWithCommas(fincashBdgtAmtList[5].ttchBalnFrcsAmt)+'</td>                       ';
fincashBdgtAmtTable += '            </tr>                                                                                            ';
fincashBdgtAmtTable += '            <tr>                                                                                             ';
fincashBdgtAmtTable += '                <td colspan="13">&nbsp;</td>                                                                 ';
fincashBdgtAmtTable += '            </tr>                                                                                            ';
fincashBdgtAmtTable += '            <tr>                                                                                             ';
fincashBdgtAmtTable += '                <td>부족액 충당 후 여유자금 누적액</td>                                                                 ';
fincashBdgtAmtTable += '                <td>'+FIN04003M00.onNumberWithCommas(fincashBdgtAmtList[0].lcatFilafSmexFndsAcmlAmt)+'</td>              ';
fincashBdgtAmtTable += '                <td>'+FIN04003M00.onNumberWithCommas(fincashBdgtAmtList[1].lcatFilafSmexFndsAcmlAmt)+'</td>              ';
fincashBdgtAmtTable += '                <td>'+FIN04003M00.onNumberWithCommas(fincashBdgtAmtList[2].lcatFilafSmexFndsAcmlAmt)+'</td>              ';
fincashBdgtAmtTable += '                <td>'+FIN04003M00.onNumberWithCommas(fincashBdgtAmtList[3].lcatFilafSmexFndsAcmlAmt)+'</td>              ';
fincashBdgtAmtTable += '                <td>'+FIN04003M00.onNumberWithCommas(fincashBdgtAmtList[4].lcatFilafSmexFndsAcmlAmt)+'</td>              ';
fincashBdgtAmtTable += '                <td>'+FIN04003M00.onNumberWithCommas(fincashBdgtAmtList[5].lcatFilafSmexFndsAcmlAmt)+'</td>              ';
fincashBdgtAmtTable += '            </tr>                                                                                            ';
fincashBdgtAmtTable += '            <tr>                                                                                             ';
fincashBdgtAmtTable += '                <td>여유액 차감 후 부족자금 누적액</td>                                                                 ';
fincashBdgtAmtTable += '                <td>'+FIN04003M00.onNumberWithCommas(fincashBdgtAmtList[0].smamtSbafInsfFndsAcmlAmt)+'</td>              ';
fincashBdgtAmtTable += '                <td>'+FIN04003M00.onNumberWithCommas(fincashBdgtAmtList[1].smamtSbafInsfFndsAcmlAmt)+'</td>              ';
fincashBdgtAmtTable += '                <td>'+FIN04003M00.onNumberWithCommas(fincashBdgtAmtList[2].smamtSbafInsfFndsAcmlAmt)+'</td>              ';
fincashBdgtAmtTable += '                <td>'+FIN04003M00.onNumberWithCommas(fincashBdgtAmtList[3].smamtSbafInsfFndsAcmlAmt)+'</td>              ';
fincashBdgtAmtTable += '                <td>'+FIN04003M00.onNumberWithCommas(fincashBdgtAmtList[4].smamtSbafInsfFndsAcmlAmt)+'</td>              ';
fincashBdgtAmtTable += '                <td>'+FIN04003M00.onNumberWithCommas(fincashBdgtAmtList[5].smamtSbafInsfFndsAcmlAmt)+'</td>              ';
fincashBdgtAmtTable += '            </tr>                                                                                            ';
fincashBdgtAmtTable += '            <tr>                                                                                             ';
fincashBdgtAmtTable += '                <td>월별 순자금조달액 및 (여유액)</td>                                                                  ';
fincashBdgtAmtTable += '                <td>'+FIN04003M00.onNumberWithCommas(fincashBdgtAmtList[0].pmnhNtFndsPramOverSmexAmt)+'</td>             ';
fincashBdgtAmtTable += '                <td>'+FIN04003M00.onNumberWithCommas(fincashBdgtAmtList[1].pmnhNtFndsPramOverSmexAmt)+'</td>             ';
fincashBdgtAmtTable += '                <td>'+FIN04003M00.onNumberWithCommas(fincashBdgtAmtList[2].pmnhNtFndsPramOverSmexAmt)+'</td>             ';
fincashBdgtAmtTable += '                <td>'+FIN04003M00.onNumberWithCommas(fincashBdgtAmtList[3].pmnhNtFndsPramOverSmexAmt)+'</td>             ';
fincashBdgtAmtTable += '                <td>'+FIN04003M00.onNumberWithCommas(fincashBdgtAmtList[4].pmnhNtFndsPramOverSmexAmt)+'</td>             ';
fincashBdgtAmtTable += '                <td>'+FIN04003M00.onNumberWithCommas(fincashBdgtAmtList[5].pmnhNtFndsPramOverSmexAmt)+'</td>             ';                                         
fincashBdgtAmtTable += '			</tr>                                                                                            ';
fincashBdgtAmtTable += '            <tr class="active">                                                                              ';
fincashBdgtAmtTable += '                <td>최종여유액</td>                                                                              ';
fincashBdgtAmtTable += '                <td>'+FIN04003M00.onNumberWithCommas(fincashBdgtAmtList[0].lastSmexAmt)+'</td>                           ';
fincashBdgtAmtTable += '                <td>'+FIN04003M00.onNumberWithCommas(fincashBdgtAmtList[1].lastSmexAmt)+'</td>                           ';
fincashBdgtAmtTable += '                <td>'+FIN04003M00.onNumberWithCommas(fincashBdgtAmtList[2].lastSmexAmt)+'</td>                           ';
fincashBdgtAmtTable += '                <td>'+FIN04003M00.onNumberWithCommas(fincashBdgtAmtList[3].lastSmexAmt)+'</td>                           ';
fincashBdgtAmtTable += '                <td>'+FIN04003M00.onNumberWithCommas(fincashBdgtAmtList[4].lastSmexAmt)+'</td>                           ';
fincashBdgtAmtTable += '                <td>'+FIN04003M00.onNumberWithCommas(fincashBdgtAmtList[5].lastSmexAmt)+'</td>                           ';
fincashBdgtAmtTable += '            </tr>                                                                                            ';
fincashBdgtAmtTable += '            <tr class="active">                                                                              ';
fincashBdgtAmtTable += '                <td>최종부족액</td>                                                                              ';
fincashBdgtAmtTable += '                <td>'+FIN04003M00.onNumberWithCommas(fincashBdgtAmtList[0].lastInsfAmt)+'</td>                           ';
fincashBdgtAmtTable += '                <td>'+FIN04003M00.onNumberWithCommas(fincashBdgtAmtList[1].lastInsfAmt)+'</td>                           ';
fincashBdgtAmtTable += '                <td>'+FIN04003M00.onNumberWithCommas(fincashBdgtAmtList[2].lastInsfAmt)+'</td>                           ';
fincashBdgtAmtTable += '                <td>'+FIN04003M00.onNumberWithCommas(fincashBdgtAmtList[3].lastInsfAmt)+'</td>                           ';
fincashBdgtAmtTable += '                <td>'+FIN04003M00.onNumberWithCommas(fincashBdgtAmtList[4].lastInsfAmt)+'</td>                           ';
fincashBdgtAmtTable += '                <td>'+FIN04003M00.onNumberWithCommas(fincashBdgtAmtList[5].lastInsfAmt)+'</td>                           ';
fincashBdgtAmtTable += '            </tr>                                                                                            ';
fincashBdgtAmtTable += '        </tbody>                                                                                             ';
fincashBdgtAmtTable += '    </table>                                                                                                 ';
fincashBdgtAmtTable += '    <!--//현금예산테이블-->                                                                                        ';
fincashBdgtAmtTable += '    <br/>                                                                                                    ';
fincashBdgtAmtTable += '    <!--현금예산테이블-->                                                                                          ';
fincashBdgtAmtTable += '    <table class="table table-condensed">                                                                    ';
fincashBdgtAmtTable += '        <thead>                                                                                              ';
fincashBdgtAmtTable += '            <tr class="active text-lg">                                                                      ';
fincashBdgtAmtTable += '                <th>월</th>                                                                                   ';
fincashBdgtAmtTable += '                <th>'+stacYy+'-'+fincashBdgtAmtList[6].month+'</th>                                          ';
fincashBdgtAmtTable += '                <th>'+stacYy+'-'+fincashBdgtAmtList[7].month+'</th>                                          ';
fincashBdgtAmtTable += '                <th>'+stacYy+'-'+fincashBdgtAmtList[8].month+'</th>                                          ';
fincashBdgtAmtTable += '                <th>'+stacYy+'-'+fincashBdgtAmtList[9].month+'</th>                                          ';
fincashBdgtAmtTable += '                <th>'+stacYy+'-'+fincashBdgtAmtList[10].month+'</th>                                         ';
fincashBdgtAmtTable += '                <th>'+stacYy+'-'+fincashBdgtAmtList[11].month+'</th>                                         ';
fincashBdgtAmtTable += '            </tr>                                                                                            ';
fincashBdgtAmtTable += '        </thead>                                                                                             ';
fincashBdgtAmtTable += '        <tbody>                                                                                              ';
fincashBdgtAmtTable += '            <tr>                                                                                             ';
fincashBdgtAmtTable += '                <td>매출액</td>                                                                                 ';
fincashBdgtAmtTable += '                <td>'+FIN04003M00.onNumberWithCommas(fincashBdgtAmtList[6].salesAmt)+'</td>                              ';
fincashBdgtAmtTable += '                <td>'+FIN04003M00.onNumberWithCommas(fincashBdgtAmtList[7].salesAmt)+'</td>                              ';
fincashBdgtAmtTable += '                <td>'+FIN04003M00.onNumberWithCommas(fincashBdgtAmtList[8].salesAmt)+'</td>                              ';
fincashBdgtAmtTable += '                <td>'+FIN04003M00.onNumberWithCommas(fincashBdgtAmtList[9].salesAmt)+'</td>                              ';
fincashBdgtAmtTable += '                <td>'+FIN04003M00.onNumberWithCommas(fincashBdgtAmtList[10].salesAmt)+'</td>                             ';
fincashBdgtAmtTable += '                <td>'+FIN04003M00.onNumberWithCommas(fincashBdgtAmtList[11].salesAmt)+'</td>                             ';
fincashBdgtAmtTable += '            </tr>                                                                                            ';
fincashBdgtAmtTable += '            <tr class="active">                                                                              ';
fincashBdgtAmtTable += '                <td>현금수입의 합계</td>                                                                           ';
fincashBdgtAmtTable += '                <td>'+FIN04003M00.onNumberWithCommas(fincashBdgtAmtList[6].cashIncomeTotal)+'</td>                       ';
fincashBdgtAmtTable += '                <td>'+FIN04003M00.onNumberWithCommas(fincashBdgtAmtList[7].cashIncomeTotal)+'</td>                       ';
fincashBdgtAmtTable += '                <td>'+FIN04003M00.onNumberWithCommas(fincashBdgtAmtList[8].cashIncomeTotal)+'</td>                       ';
fincashBdgtAmtTable += '                <td>'+FIN04003M00.onNumberWithCommas(fincashBdgtAmtList[9].cashIncomeTotal)+'</td>                       ';
fincashBdgtAmtTable += '                <td>'+FIN04003M00.onNumberWithCommas(fincashBdgtAmtList[10].cashIncomeTotal)+'</td>                      ';
fincashBdgtAmtTable += '                <td>'+FIN04003M00.onNumberWithCommas(fincashBdgtAmtList[11].cashIncomeTotal)+'</td>                      ';
fincashBdgtAmtTable += '            </tr>                                                                                            ';
fincashBdgtAmtTable += '            <tr class="active">                                                                              ';
fincashBdgtAmtTable += '                <td>현금지출액의 합계</td>                                                                          ';
fincashBdgtAmtTable += '                <td>'+FIN04003M00.onNumberWithCommas(fincashBdgtAmtList[6].outComeTotal)+'</td>                          ';
fincashBdgtAmtTable += '                <td>'+FIN04003M00.onNumberWithCommas(fincashBdgtAmtList[7].outComeTotal)+'</td>                          ';
fincashBdgtAmtTable += '                <td>'+FIN04003M00.onNumberWithCommas(fincashBdgtAmtList[8].outComeTotal)+'</td>                          ';
fincashBdgtAmtTable += '                <td>'+FIN04003M00.onNumberWithCommas(fincashBdgtAmtList[9].outComeTotal)+'</td>                          ';
fincashBdgtAmtTable += '                <td>'+FIN04003M00.onNumberWithCommas(fincashBdgtAmtList[10].outComeTotal)+'</td>                         ';
fincashBdgtAmtTable += '                <td>'+FIN04003M00.onNumberWithCommas(fincashBdgtAmtList[11].outComeTotal)+'</td>                         ';
fincashBdgtAmtTable += '            </tr>                                                                                            ';
fincashBdgtAmtTable += '            <tr>                                                                                             ';
fincashBdgtAmtTable += '                <td colspan="13">&nbsp;</td>                                                                 ';
fincashBdgtAmtTable += '            </tr>                                                                                            ';
fincashBdgtAmtTable += '            <tr>                                                                                             ';
fincashBdgtAmtTable += '                <td>순현금흐름</td>                                                                              ';
fincashBdgtAmtTable += '                <td>'+FIN04003M00.onNumberWithCommas(fincashBdgtAmtList[6].cashNtFlowAmt)+'</td>                         ';
fincashBdgtAmtTable += '                <td>'+FIN04003M00.onNumberWithCommas(fincashBdgtAmtList[7].cashNtFlowAmt)+'</td>                         ';
fincashBdgtAmtTable += '                <td>'+FIN04003M00.onNumberWithCommas(fincashBdgtAmtList[8].cashNtFlowAmt)+'</td>                         ';
fincashBdgtAmtTable += '                <td>'+FIN04003M00.onNumberWithCommas(fincashBdgtAmtList[9].cashNtFlowAmt)+'</td>                         ';
fincashBdgtAmtTable += '                <td>'+FIN04003M00.onNumberWithCommas(fincashBdgtAmtList[10].cashNtFlowAmt)+'</td>                        ';
fincashBdgtAmtTable += '                <td>'+FIN04003M00.onNumberWithCommas(fincashBdgtAmtList[11].cashNtFlowAmt)+'</td>                        ';
fincashBdgtAmtTable += '            </tr>                                                                                            ';
fincashBdgtAmtTable += '            <tr>                                                                                             ';
fincashBdgtAmtTable += '                <td>최소현금 보유액</td>                                                                           ';
fincashBdgtAmtTable += '                <td>'+FIN04003M00.onNumberWithCommas(fincashBdgtAmtList[6].mnmmCashHoldAmt)+'</td>                       ';
fincashBdgtAmtTable += '                <td>'+FIN04003M00.onNumberWithCommas(fincashBdgtAmtList[7].mnmmCashHoldAmt)+'</td>                       ';
fincashBdgtAmtTable += '                <td>'+FIN04003M00.onNumberWithCommas(fincashBdgtAmtList[8].mnmmCashHoldAmt)+'</td>                       ';
fincashBdgtAmtTable += '                <td>'+FIN04003M00.onNumberWithCommas(fincashBdgtAmtList[9].mnmmCashHoldAmt)+'</td>                       ';
fincashBdgtAmtTable += '                <td>'+FIN04003M00.onNumberWithCommas(fincashBdgtAmtList[10].mnmmCashHoldAmt)+'</td>                      ';
fincashBdgtAmtTable += '                <td>'+FIN04003M00.onNumberWithCommas(fincashBdgtAmtList[11].mnmmCashHoldAmt)+'</td>                      ';
fincashBdgtAmtTable += '            </tr>                                                                                            ';
fincashBdgtAmtTable += '            <tr>                                                                                             ';
fincashBdgtAmtTable += '                <td>총 현금잔고 예측치</td>                                                                         ';
fincashBdgtAmtTable += '                <td>'+FIN04003M00.onNumberWithCommas(fincashBdgtAmtList[6].ttchBalnFrcsAmt)+'</td>                       ';
fincashBdgtAmtTable += '                <td>'+FIN04003M00.onNumberWithCommas(fincashBdgtAmtList[7].ttchBalnFrcsAmt)+'</td>                       ';
fincashBdgtAmtTable += '                <td>'+FIN04003M00.onNumberWithCommas(fincashBdgtAmtList[8].ttchBalnFrcsAmt)+'</td>                       ';
fincashBdgtAmtTable += '                <td>'+FIN04003M00.onNumberWithCommas(fincashBdgtAmtList[9].ttchBalnFrcsAmt)+'</td>                       ';
fincashBdgtAmtTable += '                <td>'+FIN04003M00.onNumberWithCommas(fincashBdgtAmtList[10].ttchBalnFrcsAmt)+'</td>                      ';
fincashBdgtAmtTable += '                <td>'+FIN04003M00.onNumberWithCommas(fincashBdgtAmtList[11].ttchBalnFrcsAmt)+'</td>                      ';
fincashBdgtAmtTable += '            </tr>                                                                                            ';
fincashBdgtAmtTable += '            <tr>                                                                                             ';
fincashBdgtAmtTable += '                <td colspan="13">&nbsp;</td>                                                                 ';
fincashBdgtAmtTable += '            </tr>                                                                                            ';
fincashBdgtAmtTable += '            <tr>                                                                                             ';
fincashBdgtAmtTable += '                <td>부족액 충당 후 여유자금 누적액</td>                                                                 ';
fincashBdgtAmtTable += '                <td>'+FIN04003M00.onNumberWithCommas(fincashBdgtAmtList[6].lcatFilafSmexFndsAcmlAmt)+'</td>              ';
fincashBdgtAmtTable += '                <td>'+FIN04003M00.onNumberWithCommas(fincashBdgtAmtList[7].lcatFilafSmexFndsAcmlAmt)+'</td>              ';
fincashBdgtAmtTable += '                <td>'+FIN04003M00.onNumberWithCommas(fincashBdgtAmtList[8].lcatFilafSmexFndsAcmlAmt)+'</td>              ';
fincashBdgtAmtTable += '                <td>'+FIN04003M00.onNumberWithCommas(fincashBdgtAmtList[9].lcatFilafSmexFndsAcmlAmt)+'</td>              ';
fincashBdgtAmtTable += '                <td>'+FIN04003M00.onNumberWithCommas(fincashBdgtAmtList[10].lcatFilafSmexFndsAcmlAmt)+'</td>             ';
fincashBdgtAmtTable += '                <td>'+FIN04003M00.onNumberWithCommas(fincashBdgtAmtList[11].lcatFilafSmexFndsAcmlAmt)+'</td>             ';
fincashBdgtAmtTable += '            </tr>                                                                                            ';
fincashBdgtAmtTable += '            <tr>                                                                                             ';
fincashBdgtAmtTable += '                <td>여유액 차감 후 부족자금 누적액</td>                                                                 ';
fincashBdgtAmtTable += '                <td>'+FIN04003M00.onNumberWithCommas(fincashBdgtAmtList[6].smamtSbafInsfFndsAcmlAmt)+'</td>              ';
fincashBdgtAmtTable += '                <td>'+FIN04003M00.onNumberWithCommas(fincashBdgtAmtList[7].smamtSbafInsfFndsAcmlAmt)+'</td>              ';
fincashBdgtAmtTable += '                <td>'+FIN04003M00.onNumberWithCommas(fincashBdgtAmtList[8].smamtSbafInsfFndsAcmlAmt)+'</td>              ';
fincashBdgtAmtTable += '                <td>'+FIN04003M00.onNumberWithCommas(fincashBdgtAmtList[9].smamtSbafInsfFndsAcmlAmt)+'</td>              ';
fincashBdgtAmtTable += '                <td>'+FIN04003M00.onNumberWithCommas(fincashBdgtAmtList[10].smamtSbafInsfFndsAcmlAmt)+'</td>             ';
fincashBdgtAmtTable += '                <td>'+FIN04003M00.onNumberWithCommas(fincashBdgtAmtList[11].smamtSbafInsfFndsAcmlAmt)+'</td>             ';
fincashBdgtAmtTable += '            </tr>                                                                                            ';
fincashBdgtAmtTable += '            <tr>                                                                                             ';
fincashBdgtAmtTable += '                <td>월별 순자금조달액 및 (여유액)</td>                                                                  ';
fincashBdgtAmtTable += '                <td>'+FIN04003M00.onNumberWithCommas(fincashBdgtAmtList[6].pmnhNtFndsPramOverSmexAmt)+'</td>             ';
fincashBdgtAmtTable += '                <td>'+FIN04003M00.onNumberWithCommas(fincashBdgtAmtList[7].pmnhNtFndsPramOverSmexAmt)+'</td>             ';
fincashBdgtAmtTable += '                <td>'+FIN04003M00.onNumberWithCommas(fincashBdgtAmtList[8].pmnhNtFndsPramOverSmexAmt)+'</td>             ';
fincashBdgtAmtTable += '                <td>'+FIN04003M00.onNumberWithCommas(fincashBdgtAmtList[9].pmnhNtFndsPramOverSmexAmt)+'</td>             ';
fincashBdgtAmtTable += '                <td>'+FIN04003M00.onNumberWithCommas(fincashBdgtAmtList[10].pmnhNtFndsPramOverSmexAmt)+'</td>            ';
fincashBdgtAmtTable += '                <td>'+FIN04003M00.onNumberWithCommas(fincashBdgtAmtList[11].pmnhNtFndsPramOverSmexAmt)+'</td>            ';                                          
fincashBdgtAmtTable += '			</tr>                                                                                            ';
fincashBdgtAmtTable += '            <tr class="active">                                                                              ';
fincashBdgtAmtTable += '                <td>최종여유액</td>                                                                              ';
fincashBdgtAmtTable += '                <td>'+FIN04003M00.onNumberWithCommas(fincashBdgtAmtList[6].lastSmexAmt)+'</td>                           ';
fincashBdgtAmtTable += '                <td>'+FIN04003M00.onNumberWithCommas(fincashBdgtAmtList[7].lastSmexAmt)+'</td>                           ';
fincashBdgtAmtTable += '                <td>'+FIN04003M00.onNumberWithCommas(fincashBdgtAmtList[8].lastSmexAmt)+'</td>                           ';
fincashBdgtAmtTable += '                <td>'+FIN04003M00.onNumberWithCommas(fincashBdgtAmtList[9].lastSmexAmt)+'</td>                           ';
fincashBdgtAmtTable += '                <td>'+FIN04003M00.onNumberWithCommas(fincashBdgtAmtList[10].lastSmexAmt)+'</td>                          ';
fincashBdgtAmtTable += '                <td>'+FIN04003M00.onNumberWithCommas(fincashBdgtAmtList[11].lastSmexAmt)+'</td>                          ';
fincashBdgtAmtTable += '            </tr>                                                                                            ';
fincashBdgtAmtTable += '            <tr class="active">                                                                              ';
fincashBdgtAmtTable += '                <td>최종부족액</td>                                                                              ';
fincashBdgtAmtTable += '                <td>'+FIN04003M00.onNumberWithCommas(fincashBdgtAmtList[6].lastInsfAmt)+'</td>                           ';
fincashBdgtAmtTable += '                <td>'+FIN04003M00.onNumberWithCommas(fincashBdgtAmtList[7].lastInsfAmt)+'</td>                           ';
fincashBdgtAmtTable += '                <td>'+FIN04003M00.onNumberWithCommas(fincashBdgtAmtList[8].lastInsfAmt)+'</td>                           ';
fincashBdgtAmtTable += '                <td>'+FIN04003M00.onNumberWithCommas(fincashBdgtAmtList[9].lastInsfAmt)+'</td>                           ';
fincashBdgtAmtTable += '                <td>'+FIN04003M00.onNumberWithCommas(fincashBdgtAmtList[10].lastInsfAmt)+'</td>                          ';
fincashBdgtAmtTable += '                <td>'+FIN04003M00.onNumberWithCommas(fincashBdgtAmtList[11].lastInsfAmt)+'</td>                          ';
fincashBdgtAmtTable += '            </tr>                                                                                            ';
fincashBdgtAmtTable += '        </tbody>                                                                                             ';
fincashBdgtAmtTable += '    </table>                                                                                                 ';
fincashBdgtAmtTable += '    <!--//현금예산테이블-->                                                                                        ';
fincashBdgtAmtTable += '</div>                                                                                                       ';

$("#fincashBdgtAmtTable").html(fincashBdgtAmtTable);

}

FIN04003M00Component.prototype.onFinEstmls = function() {

    console.log("<<<<<< onCashIncomeList() start >>>>> ")
    
    finService.getFinEstmls(finCom.alyid, finCom.stacYy, qsrtInfo, FIN04003M00.finEstmlsCallback);

};

FIN04003M00Component.prototype.finEstmlsCallback = function(result) {

    if (result != null) {

         var res = JSON.parse(result);

        if (res.success) {

            var data = res.data.result;

            fincashFlowResult = data;

            if (fincashFlowResult != null && fincashFlowResult != undefined) {
                fincashFlowResultLength = 1;
               FIN04003M00.onFinEstmlsView();
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

FIN04003M00Component.prototype.onFinEstmlsView = function() {


var fincashFlowResultTable = '';                                                                                                                                                  
                                                                                                                                                                                  
fincashFlowResultTable += '<div class="row">  																																	 '	;																			
fincashFlowResultTable += '                                                                                                                                                       ';
fincashFlowResultTable += '    <div class="col-lg-12">                                                                                                                            ';
fincashFlowResultTable += '        <div class="panel">                                                                                                                            ';
fincashFlowResultTable += '            <div class="panel-heading">                                                                                                                ';
fincashFlowResultTable += '                <h3 class="panel-title">1년간 현금흐름이 경영활동에 미치는 결과</h3>                                                                                  ';
fincashFlowResultTable += '            </div>                                                                                                                                     ';
fincashFlowResultTable += '                                                                                                                                                       ';
fincashFlowResultTable += '            <div class="panel-body text-lg text-center">                                                                                               ';
fincashFlowResultTable += '                <div class="col-lg-3">                                                                                                                 ';
fincashFlowResultTable += '                    <div class="panel panel-success panel-colorful">                                                                                   ';
fincashFlowResultTable += '                        <div class="pad-all text-center">                                                                                              ';
fincashFlowResultTable += '                            <span class="text-3x text-thin">'+fincashFlowResult.mnbsSttsCon+'</span>                                                   ';
fincashFlowResultTable += '                            <p>1년간 경영상태</p>                                                                                                           ';
fincashFlowResultTable += '                        </div>                                                                                                                         ';
fincashFlowResultTable += '                    </div>                                                                                                                             ';
fincashFlowResultTable += '                </div>                                                                                                                                 ';
fincashFlowResultTable += '                <div class="col-lg-3">                                                                                                                 ';
fincashFlowResultTable += '                    <div class="panel panel-purple panel-colorful">                                                                                    ';
fincashFlowResultTable += '                        <div class="pad-all text-center">                                                                                              ';
fincashFlowResultTable += '                            <span class="text-3x text-thin">'+FIN04003M00.onNumberWithCommas(fincashFlowResult.mnbsAcvtRslt)+'</span>                              ';
fincashFlowResultTable += '                            <p>연간 경영활동 결과 '+FIN04003M00.onNumberWithCommas(fincashFlowResult.mnbsAcvtRslt)+' 천원 '+fincashFlowResult.mnbsAcvtRsltCon+'</p>         ';
fincashFlowResultTable += '                        </div>                                                                                                                         ';
fincashFlowResultTable += '                    </div>                                                                                                                             ';
fincashFlowResultTable += '                </div>                                                                                                                                 ';
fincashFlowResultTable += '                <div class="col-lg-3">                                                                                                                 ';
fincashFlowResultTable += '                    <div class="panel panel-warning panel-colorful">                                                                                   ';
fincashFlowResultTable += '                        <div class="pad-all text-center">                                                                                              ';
fincashFlowResultTable += '                            <span class="text-3x text-thin">'+FIN04003M00.onNumberWithCommas(fincashFlowResult.lastInsfAmt)+'</span>                               ';
fincashFlowResultTable += '                            <p>연간 부족자금(천원)</p>                                                                                                        ';
fincashFlowResultTable += '                        </div>                                                                                                                         ';
fincashFlowResultTable += '                    </div>                                                                                                                             ';
fincashFlowResultTable += '                </div>                                                                                                                                 ';
fincashFlowResultTable += '                <div class="col-lg-3">                                                                                                                 ';
fincashFlowResultTable += '                    <div class="panel panel-primary panel-colorful">                                                                                   ';
fincashFlowResultTable += '                        <div class="pad-all text-center">                                                                                              ';
fincashFlowResultTable += '                            <span class="text-3x text-thin">'+FIN04003M00.onNumberWithCommas(fincashFlowResult.lastSmexAmt)+'</span>                               ';
fincashFlowResultTable += '                            <p>연간 여유자금(천원)</p>                                                                                                        ';
fincashFlowResultTable += '                        </div>                                                                                                                         ';
fincashFlowResultTable += '                    </div>                                                                                                                             ';
fincashFlowResultTable += '                </div>                                                                                                                                 ';
fincashFlowResultTable += '                                                                                                                                                       ';
fincashFlowResultTable += '            </div>                                                                                                                                     ';
fincashFlowResultTable += '        </div>                                                                                                                                         ';
fincashFlowResultTable += '    </div>                                                                                                                                             ';
fincashFlowResultTable += '                                                                                                                                                       ';
fincashFlowResultTable += '</div>                                                                                                                                                 ';
fincashFlowResultTable += '                                                                                                                                                       ';
fincashFlowResultTable += '                                                                                                                                                       ';
fincashFlowResultTable += '<div class="row">                                                                                                                                      ';
fincashFlowResultTable += '                                                                                                                                                       ';
fincashFlowResultTable += '    <div class="col-lg-12">                                                                                                                            ';
fincashFlowResultTable += '        <div class="panel">                                                                                                                            ';
fincashFlowResultTable += '            <div class="panel-heading">                                                                                                                ';
fincashFlowResultTable += '                <h3 class="panel-title">추정손익계산서</h3>                                                                                                  ';
fincashFlowResultTable += '            </div>                                                                                                                                     ';
fincashFlowResultTable += '                                                                                                                                                       ';
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
fincashFlowResultTable += '                            <td>'+FIN04003M00.onNumberWithCommas(fincashFlowResult.salesAmt)+'</td>                                                                ';
fincashFlowResultTable += '                            <td>'+FIN04003M00.onNumberWithCommas(fincashFlowResult.salesAmtRatio)+' %</td>                                                         ';
fincashFlowResultTable += '                        </tr>                                                                                                                          ';
fincashFlowResultTable += '                        <tr>                                                                                                                           ';
fincashFlowResultTable += '                            <td>매출원가</td>                                                                                                              ';
fincashFlowResultTable += '                            <td>'+FIN04003M00.onNumberWithCommas(fincashFlowResult.salesCostAmt)+'</td>                                                            ';
fincashFlowResultTable += '                            <td>'+FIN04003M00.onNumberWithCommas(fincashFlowResult.salesCostAmtRatio)+' %</td>                                                     ';
fincashFlowResultTable += '                        </tr>                                                                                                                          ';
fincashFlowResultTable += '                        <tr>                                                                                                                           ';
fincashFlowResultTable += '                            <td>매출총이익</td>                                                                                                            ';
fincashFlowResultTable += '                            <td>'+FIN04003M00.onNumberWithCommas(fincashFlowResult.amslPrftAmt)+'</td>                                                             ';
fincashFlowResultTable += '                            <td>'+FIN04003M00.onNumberWithCommas(fincashFlowResult.amslPrftAmtRatio)+' %</td>                                                      ';
fincashFlowResultTable += '                        </tr>                                                                                                                          ';
fincashFlowResultTable += '                        <tr>                                                                                                                           ';
fincashFlowResultTable += '                            <td>판매관리비</td>                                                                                                            ';
fincashFlowResultTable += '                            <td>'+FIN04003M00.onNumberWithCommas(fincashFlowResult.mnepAmt)+'</td>                                                                 ';
fincashFlowResultTable += '                            <td>'+FIN04003M00.onNumberWithCommas(fincashFlowResult.mnepAmtRatio)+' %</td>                                                          ';
fincashFlowResultTable += '                        </tr>                                                                                                                          ';
fincashFlowResultTable += '                        <tr>                                                                                                                           ';
fincashFlowResultTable += '                            <td>영업이익</td>                                                                                                              ';
fincashFlowResultTable += '                            <td>'+FIN04003M00.onNumberWithCommas(fincashFlowResult.opprAmt)+'</td>                                                                 ';
fincashFlowResultTable += '                            <td>'+FIN04003M00.onNumberWithCommas(fincashFlowResult.opprAmtRatio)+' %</td>                                                          ';
fincashFlowResultTable += '                        </tr>                                                                                                                          ';
fincashFlowResultTable += '                        <tr>                                                                                                                           ';
fincashFlowResultTable += '                            <td>영업외수익</td>                                                                                                            ';
fincashFlowResultTable += '                            <td>'+FIN04003M00.onNumberWithCommas(fincashFlowResult.opprNoAmt)+'</td>                                                               ';
fincashFlowResultTable += '                            <td>'+FIN04003M00.onNumberWithCommas(fincashFlowResult.opprNoAmtRatio)+' %</td>                                                        ';
fincashFlowResultTable += '                        </tr>                                                                                                                          ';
fincashFlowResultTable += '                        <tr>                                                                                                                           ';
fincashFlowResultTable += '                            <td>영업외비용</td>                                                                                                            ';
fincashFlowResultTable += '                            <td>'+FIN04003M00.onNumberWithCommas(fincashFlowResult.opprNoCostAmt)+'</td>                                                           ';
fincashFlowResultTable += '                            <td>'+FIN04003M00.onNumberWithCommas(fincashFlowResult.opprNoCostAmtRatio)+' %</td>                                                    ';
fincashFlowResultTable += '                        </tr>                                                                                                                          ';
fincashFlowResultTable += '                        <tr>                                                                                                                           ';
fincashFlowResultTable += '                            <td>경상이익</td>                                                                                                              ';
fincashFlowResultTable += '                            <td>'+FIN04003M00.onNumberWithCommas(fincashFlowResult.orpfAmt)+'</td>                                                                 ';
fincashFlowResultTable += '                            <td>'+FIN04003M00.onNumberWithCommas(fincashFlowResult.orpfAmtRatio)+' %</td>                                                          ';
fincashFlowResultTable += '                        </tr>                                                                                                                          ';
fincashFlowResultTable += '                        <tr>                                                                                                                           ';
fincashFlowResultTable += '                            <td>법인세</td>                                                                                                               ';
fincashFlowResultTable += '                            <td>'+FIN04003M00.onNumberWithCommas(fincashFlowResult.crtxAmt)+'</td>                                                                 ';
fincashFlowResultTable += '                            <td>'+FIN04003M00.onNumberWithCommas(fincashFlowResult.crtxAmtRatio)+' %</td>                                                          ';
fincashFlowResultTable += '                        </tr>                                                                                                                          ';
fincashFlowResultTable += '                        <tr>                                                                                                                           ';
fincashFlowResultTable += '                            <td>당기순이익</td>                                                                                                            ';
fincashFlowResultTable += '                            <td>'+FIN04003M00.onNumberWithCommas(fincashFlowResult.ctnpAmt)+'</td>                                                                 ';
fincashFlowResultTable += '                            <td>'+FIN04003M00.onNumberWithCommas(fincashFlowResult.ctnpAmtRatio)+' %</td>                                                          ';
fincashFlowResultTable += '                        </tr>                                                                                                                          ';
fincashFlowResultTable += '                   </tbody>                                                                                                                            ';
fincashFlowResultTable += '                </table>                                                                                                                               ';
fincashFlowResultTable += '                                                                                                                                                       ';
fincashFlowResultTable += '            </div>                                                                                                                                     ';
fincashFlowResultTable += '        </div>                                                                                                                                         ';
fincashFlowResultTable += '    </div>                                                                                                                                             ';
fincashFlowResultTable += '                                                                                                                                                       ';
fincashFlowResultTable += '</div>                                                                                                                                                 ';

$("#fincashFlowResultTable").html(fincashFlowResultTable);

}


FIN04003M00Component.prototype.onNumberWithCommas = function(totalAmt) {
    return numberWithCommas(totalAmt);
}  

FIN04003M00Component.prototype.onBusinessWorkPattern = function() {

        console.log("<<<<<< onBusinessWorkPattern() start >>>>> ")
        finService.getBusinessWorkPattern(finCom.alyid, finCom.stacYy, qsrtInfo01, FIN04003M00.businessWorkPatternsCallback);

};

FIN04003M00Component.prototype.businessWorkPatternsCallback = function(result) {

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
            finService.getQsrtFinRsltInfoList(finCom.alyid, finCom.stacYy, FIN04003M00.QsrtFinRsltCallback);
            
        } else {
            bootbox.alert(res.msg);
            overlay.hide();
        }

    } else {
        overlay.hide();
    }
};

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

function lpad(str, pad) {
    return pad.substring(0, pad.length - str.length) + str
}

function numberWithCommas(x) {

    if (x == null || x == '') {
        return "0"
    }

    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
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

    FIN04003M00.ngOnInit();

});