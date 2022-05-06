var FIN03301M00 = new FIN03301M00Component();

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

function FIN03301M00Component() {

};

FIN03301M00Component.prototype.ngOnInit = function () {
    
    console.log('finAplyCom >> ', finAplyCom);

    $("#initQsrtSave").click(function(){FIN03301M00.initQsrtSave();});
            $("#onQsrtSave").click(function() {FIN03301M00.onSave();});

            $("#onInit11").click(function() {FIN03301M00.onInit11();});
            $("#onSave11").click(function() {FIN03301M00.onSave11();});
            $("#onDel11").click(function() {FIN03301M00.onDel11();});

            $("#onInit12").click(function() {FIN03301M00.onInit12();});
            $("#onSave12").click(function() {FIN03301M00.onSave12();});
            $("#onDel12").click(function() {FIN03301M00.onDel12();});

            $("#onInit21").click(function() {FIN03301M00.onInit21();});
            $("#onSave21").click(function() {FIN03301M00.onSave21();});
            $("#onDel21").click(function() {FIN03301M00.onDel21();});

            $("#onInit31").click(function() {FIN03301M00.onInit31();});
            $("#onSave31").click(function() {FIN03301M00.onSave31();});
            $("#onDel31").click(function() {FIN03301M00.onDel31();});

            $("#onInit41").click(function() {FIN03301M00.onInit41();});
            $("#onSave41").click(function() {FIN03301M00.onSave41();});
            $("#onDel41").click(function() {FIN03301M00.onDel41();});

            $("#onInit51").click(function() {FIN03301M00.onInit51();});
            $("#onSave51").click(function() {FIN03301M00.onSave51();});
            $("#onDel51").click(function() {FIN03301M00.onDel51();});

            $("#onInit61").click(function() {FIN03301M00.onInit61();});
            $("#onSave61").click(function() {FIN03301M00.onSave61();});
            $("#onDel61").click(function() {FIN03301M00.onDel61();});

            $("#onInit62").click(function() {FIN03301M00.onInit62();});
            $("#onSave62").click(function() {FIN03301M00.onSave62();});
            $("#onDel62").click(function() {FIN03301M00.onDel62();});
    
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

            FIN03301M00.onSearch();
            
        }
    }

};

FIN03301M00Component.prototype.onSearch = function () {
    FIN03301M00.initQsrtSave();
};

FIN03301M00Component.prototype.initQsrtSave = function() {
    console.log("initQsrtSave >>> start >>>>" , finAplyCom);

    FIN03301M00.initArr01();
	
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

    var res = finService.getQsrtMngRsltInfoList(finAplyCom.alyid, finAplyCom.stacYy, FIN03301M00.qsrtMngRsltCallback);
};

FIN03301M00Component.prototype.initArr01 = function() {

    qsrtNo11 = new QsrtNo1();
    qsrtNo12 = new QsrtNo1();
    qsrtNo21 = new QsrtNo2();
    qsrtNo31 = new QsrtNo3();
    qsrtNo41 = new QsrtNo4();        
    qsrtNo51 = new QsrtNo5();
    qsrtNo61 = new QsrtNo6();
    qsrtNo62 = new QsrtNo6();    

};

FIN03301M00Component.prototype.qsrtMngRsltCallback = function(data) {

    console.log('qsrtMngRsltCallback' , data);

    if (data != null) {

         var res = JSON.parse(data);

        if (res.success) {

            FIN03301M00.onQstrInfo01(res);
            FIN03301M00.onBusinessWorkPattern();
            overlay.hide();

        } else {
            bootbox.alert(res.msg);
            overlay.hide();
        }

    } else {
        overlay.hide();
    }

};

FIN03301M00Component.prototype.onQstrInfo01 = function(res) {

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

    finAplyCom.stacYy = stacYy; 

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
FIN03301M00Component.prototype.onQstrInfo = function(res) {
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


FIN03301M00Component.prototype.onBusinessWorkPattern = function() {

    console.log("<<<<<< onBusinessWorkPattern() start >>>>> ")
    finService.getBusinessWorkPattern(finAplyCom.alyid, finAplyCom.stacYy, qsrtInfo01, FIN03301M00.businessWorkPatternsCallback);

};

FIN03301M00Component.prototype.businessWorkPatternsCallback = function(result) {

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
            finService.getQsrtFinRsltInfoList(finAplyCom.alyid, finAplyCom.stacYy, FIN03301M00.QsrtFinRsltCallback);
            
        } else {
            bootbox.alert(res.msg);
            overlay.hide();
        }

    } else {
        overlay.hide();
    }
};


FIN03301M00Component.prototype.QsrtFinRsltCallback = function(result) {

    var me = FIN03301M00;

    if (result != null) {

         var res = JSON.parse(result);

        if (res.success) {

            me.onQstrInfo(res);

            overlay.hide();

        } else {
            bootbox.alert(res.msg);
            overlay.hide();
        }

    } else {
        overlay.hide();
    }

};


FIN03301M00Component.prototype.getQsrtNo = function(qsrtNo) {

    var totalAmt = 0;

    if (qsrtNo == 'qsrtNo41') {

        for (var i = 0 ; i < (qsrtInfo.qsrtNo4['no1']).length; i++) {
            if ((qsrtInfo.qsrtNo4['no1'])[i] != null) totalAmt += Number((qsrtInfo.qsrtNo4['no1'])[i].rsltVl);
        }
    }

    return numberWithCommas(totalAmt);

};

FIN03301M00Component.prototype.onSave = function() {

    var me = FIN03301M00;

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

FIN03301M00Component.prototype.onQsrtSave = function() {

    var me = FIN03301M00;
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
    
    (qsrtInfo.qsrtNo7['no1']).rsltVl = $("#qsrtInfo_qsrtNo7_no1_rsltVl").val();
    (qsrtInfo.qsrtNo7['no2']).rsltVl = $("#qsrtInfo_qsrtNo7_no2_rsltVl").val();
    (qsrtInfo.qsrtNo11['no1']).rsltVl = $("#qsrtInfo_qsrtNo11_no1_rsltVl").val();	
    
    console.log("qsrtInfo >>>> ", qsrtInfo);

    console.log("<<<<<< onQsrtSave() start >>>>> ")

    finService.saveQsrtFinRsltInfo(finAplyCom.alyid, finAplyCom.stacYy, qsrtInfo, FIN03301M00.qsrtFinRsltSaveCallback);

};

FIN03301M00Component.prototype.qsrtFinRsltSaveCallback = function(result) {
	
	if (result != null) {

        var res = JSON.parse(result);

       if (res.success) {

    	   bootbox.alert(res.msg);
           overlay.hide();

           FIN03301M00.initQsrtSave();

       } else {
           bootbox.alert(res.msg);
           overlay.hide();
       }

   } else {
       overlay.hide();
   }
	
};

//1-1
FIN03301M00Component.prototype.onQsrtSave1 = function() {

    (qsrtInfo.qsrtNo0['no1']).rsltVl = $("#qsrtInfo_qsrtNo0_no1_rsltVl").val();
    
    (qsrtInfo.qsrtNo1['no1']).rsltVl = $("#qsrtInfo_qsrtNo1_no1_rsltVl").val();
    (qsrtInfo.qsrtNo1['no2']).rsltVl = $("#qsrtInfo_qsrtNo1_no2_rsltVl").val();
    (qsrtInfo.qsrtNo1['no3']).rsltVl = $("#qsrtInfo_qsrtNo1_no3_rsltVl").val();
    (qsrtInfo.qsrtNo2['no1']).rsltVl = $("#qsrtInfo_qsrtNo2_no1_rsltVl").val();
    (qsrtInfo.qsrtNo2['no2']).rsltVl = $("#qsrtInfo_qsrtNo2_no2_rsltVl").val();
    (qsrtInfo.qsrtNo3['no1']).rsltVl = $("#qsrtInfo_qsrtNo3_no1_rsltVl").val();
    (qsrtInfo.qsrtNo4['no1'])[0].rsltVl = $("#qsrtInfo_qsrtNo4_no1_0_rsltVl").val();
    (qsrtInfo.qsrtNo4['no1'])[1].rsltVl = $("#qsrtInfo_qsrtNo4_no1_1_rsltVl").val();
    (qsrtInfo.qsrtNo4['no1'])[2].rsltVl = $("#qsrtInfo_qsrtNo4_no1_2_rsltVl").val();

    (qsrtInfo.qsrtNo5['no1']).rsltVl = $("#qsrtInfo_qsrtNo5_no1_rsltVl").val();
    (qsrtInfo.qsrtNo6['no1']).rsltVl = $("#qsrtInfo_qsrtNo6_no1_rsltVl").val();
    (qsrtInfo.qsrtNo7['no1']).rsltVl = $("#qsrtInfo_qsrtNo7_no1_rsltVl").val();

    (qsrtInfo.qsrtNo8['no1']).rsltVl = $("#qsrtInfo_qsrtNo8_no1_rsltVl").val();

    (qsrtInfo.qsrtNo9['no3']).baseYm = $("#qsrtInfo_qsrtNo9_no3_baseYm").val();
    (qsrtInfo.qsrtNo9['no3']).rsltVl = $("#qsrtInfo_qsrtNo9_no3_rsltVl").val();

    (qsrtInfo.qsrtNo9['no2']).baseYm = $("#qsrtInfo_qsrtNo9_no2_baseYm").val();
    (qsrtInfo.qsrtNo9['no2']).rsltVl = $("#qsrtInfo_qsrtNo9_no2_rsltVl").val();

    (qsrtInfo.qsrtNo9['no1']).baseYm = $("#qsrtInfo_qsrtNo9_no1_baseYm").val();
    (qsrtInfo.qsrtNo9['no1']).rsltVl = $("#qsrtInfo_qsrtNo9_no1_rsltVl").val();

    (qsrtInfo.qsrtNo11['no1']).rsltVl = $("#qsrtInfo_qsrtNo11_no1_rsltVl").val();
    (qsrtInfo.qsrtNo11['no2']).rsltVl = $("#qsrtInfo_qsrtNo11_no2_rsltVl").val();

    (qsrtInfo.qsrtNo10['no1'])[0].rsltVl = $("#qsrtInfo_qsrtNo10_no1_0_rsltVl").val();
    (qsrtInfo.qsrtNo10['no1'])[1].rsltVl = $("#qsrtInfo_qsrtNo10_no1_1_rsltVl").val();
    (qsrtInfo.qsrtNo10['no1'])[2].rsltVl = $("#qsrtInfo_qsrtNo10_no1_2_rsltVl").val();
    (qsrtInfo.qsrtNo10['no1'])[3].rsltVl = $("#qsrtInfo_qsrtNo10_no1_3_rsltVl").val();
    (qsrtInfo.qsrtNo10['no1'])[4].rsltVl = $("#qsrtInfo_qsrtNo10_no1_4_rsltVl").val();
    (qsrtInfo.qsrtNo10['no1'])[5].rsltVl = $("#qsrtInfo_qsrtNo10_no1_5_rsltVl").val();

    (qsrtInfo.qsrtNo10['no1'])[6].rsltVl = $("#qsrtInfo_qsrtNo10_no1_6_rsltVl").val();
    (qsrtInfo.qsrtNo10['no1'])[7].rsltVl = $("#qsrtInfo_qsrtNo10_no1_7_rsltVl").val();
    (qsrtInfo.qsrtNo10['no1'])[8].rsltVl = $("#qsrtInfo_qsrtNo10_no1_8_rsltVl").val();
    (qsrtInfo.qsrtNo10['no1'])[9].rsltVl = $("#qsrtInfo_qsrtNo10_no1_9_rsltVl").val();
    (qsrtInfo.qsrtNo10['no1'])[10].rsltVl = $("#qsrtInfo_qsrtNo10_no1_10_rsltVl").val();
    (qsrtInfo.qsrtNo10['no1'])[11].rsltVl = $("#qsrtInfo_qsrtNo10_no1_11_rsltVl").val();    

    console.log('qsrtInfo >>> ' , qsrtInfo);
};


FIN03301M00Component.prototype.qsrtSaveCallback = function(data) {

    console.log('qsrtSaveCallback' , data);

    if (data != null) {

         var res = JSON.parse(data);

        if (res.success) {
            overlay.hide();
            bootbox.alert(res.msg);
            FIN03301M00.initQsrtSave();

        } else {
            bootbox.alert(res.msg);
            overlay.hide();
        }

    } else {
        overlay.hide();
    }
    

};

//1-1 운전자금 내입 부문
FIN03301M00Component.prototype.onDel11 = function() {
    
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


    FIN03301M00.onInit11();
    
};

FIN03301M00Component.prototype.onInit11 = function() {
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

FIN03301M00Component.prototype.onSave11 = function() {

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


    FIN03301M00.onInit11();
};

//1-2 시설자금 상환스케쥴
FIN03301M00Component.prototype.onDel12 = function() {
    
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


    FIN03301M00.onInit12();
    
};

FIN03301M00Component.prototype.onInit12 = function() {
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

FIN03301M00Component.prototype.onSave12 = function() {

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


    FIN03301M00.onInit12();
};

//2-1 자본금 증자 계획은
FIN03301M00Component.prototype.onDel21 = function() {
    
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


    FIN03301M00.onInit21();
    
};

FIN03301M00Component.prototype.onInit21 = function() {
$("#qsrtNo21_month").val('');
$("#qsrtNo21_monthAmt").val('');
$("#qsrtNo21_idx").val('');
};

FIN03301M00Component.prototype.onSave21 = function() {

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


    FIN03301M00.onInit21();
};


//2-1 투입시기는
FIN03301M00Component.prototype.onDel31 = function() {
    
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


    FIN03301M00.onInit31();
    
};

FIN03301M00Component.prototype.onInit31 = function() {
$("#qsrtNo31_month").val('');
$("#qsrtNo31_monthAmt").val('');
$("#qsrtNo31_idx").val('');
};

FIN03301M00Component.prototype.onSave31 = function() {

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


    FIN03301M00.onInit31();
};

//4-1  생산 능력 확대 계획은? 생산능력 확대에 따른 고정자산 시설 증대 계획은?
FIN03301M00Component.prototype.onDel41 = function() {
    
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


    FIN03301M00.onInit41();
    
};

FIN03301M00Component.prototype.onInit41 = function() {
$("#qsrtNo41_kindNm").val('');
$("#qsrtNo41_month").val('');
$("#qsrtNo41_monthAmt").val('');
$("#qsrtNo41_idx").val('');
};

FIN03301M00Component.prototype.onSave41 = function() {

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


    FIN03301M00.onInit41();
};

//4-1   현재 시설 매각 계획은? 고정자산 시설 처분 계획은?
FIN03301M00Component.prototype.onDel51 = function() {

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


    FIN03301M00.onInit51();
    
};

FIN03301M00Component.prototype.onInit51 = function() {
$("#qsrtNo51_kindNm").val('');
$("#qsrtNo51_month").val('');
$("#qsrtNo51_monthAmt").val('');
$("#qsrtNo51_idx").val('');
};

FIN03301M00Component.prototype.onSave51 = function() {

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


    FIN03301M00.onInit51();
};

//6-1 회사채로 자금조달 계획이 있으시다면 언제 어느 정도 발행하실 계획이십니까?
FIN03301M00Component.prototype.onDel61 = function() {

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


    FIN03301M00.onInit61();
    
};

FIN03301M00Component.prototype.onInit61 = function() {
$("#qsrtNo61_month").val('');
$("#qsrtNo61_monthAmt").val('');
$("#qsrtNo61_idx").val('');
};

FIN03301M00Component.prototype.onSave61 = function() {

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


    FIN03301M00.onInit61();
};

//6-2 회사채의 상환 계획이 있으시다면 언제 어느 정도 상환하실 계획이십니까?
FIN03301M00Component.prototype.onDel62 = function() {

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


    FIN03301M00.onInit62();
    
};

FIN03301M00Component.prototype.onInit62 = function() {
$("#qsrtNo62_month").val('');
$("#qsrtNo62_monthAmt").val('');
$("#qsrtNo62_idx").val('');
};

FIN03301M00Component.prototype.onSave62 = function() {

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


    FIN03301M00.onInit62();
};

FIN03301M00Component.prototype.onNumberWithCommas = function(totalAmt) {
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

    FIN03301M00.ngOnInit();



});

