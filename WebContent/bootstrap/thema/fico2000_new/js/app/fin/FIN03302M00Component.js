var FIN03302M00 = new FIN03302M00Component();

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

function FIN03302M00Component() {

};

FIN03302M00Component.prototype.ngOnInit = function () {
    
    console.log('finAplyCom >> ', finAplyCom);

            $("#initQsrtSave01").click(function(){FIN03302M00.initQsrtSave();});
            $("#onQsrtSave01").click(function() {FIN03302M00.onSave();});

            $("#onInit81").click(function() {FIN03302M00.onInit81();});
            $("#onSave81").click(function() {FIN03302M00.onSave81();});
            $("#onDel81").click(function() {FIN03302M00.onDel81();});

            $("#onInit91").click(function() {FIN03302M00.onInit91();});
            $("#onSave91").click(function() {FIN03302M00.onSave91();});
            $("#onDel91").click(function() {FIN03302M00.onDel91();});

            $("#onInit101").click(function() {FIN03302M00.onInit101();});
            $("#onSave101").click(function() {FIN03302M00.onSave101();});
            $("#onDel101").click(function() {FIN03302M00.onDel101();});
    
    qsrtNo81 = new QsrtNo81();
    qsrtNo91 = new QsrtNo91();
    qsrtNo101 = new QsrtNo101();

    $("#grid-list71").bootgrid('destroy');
    $("#grid-list71").bootgrid({navigation:0, rowSelect: true, rowCount: -1});

    $("#grid-list72").bootgrid('destroy');
    $("#grid-list72").bootgrid({navigation:0, rowSelect: true, rowCount: -1});

    $("#grid-list73").bootgrid('destroy');
    $("#grid-list73").bootgrid({navigation:0, rowSelect: true, rowCount: -1});

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

            FIN03302M00.onSearch();
            
        }
    }

};

FIN03302M00Component.prototype.onSearch = function () {
    FIN03302M00.initQsrtSave();
};

FIN03302M00Component.prototype.initQsrtSave = function() {
    console.log("initQsrtSave >>> start >>>>" , finAplyCom);

    FIN03302M00.initArr01();
	
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

    var res = finService.getQsrtMngRsltInfoList(finAplyCom.alyid, finAplyCom.stacYy, FIN03302M00.qsrtMngRsltCallback);
};

FIN03302M00Component.prototype.initArr01 = function() {

    qsrtNo11 = new QsrtNo1();
    qsrtNo12 = new QsrtNo1();
    qsrtNo21 = new QsrtNo2();
    qsrtNo31 = new QsrtNo3();
    qsrtNo41 = new QsrtNo4();        
    qsrtNo51 = new QsrtNo5();
    qsrtNo61 = new QsrtNo6();
    qsrtNo62 = new QsrtNo6();    

};

FIN03302M00Component.prototype.qsrtMngRsltCallback = function(data) {

    console.log('qsrtMngRsltCallback' , data);

    if (data != null) {

         var res = JSON.parse(data);

        if (res.success) {

            FIN03302M00.onQstrInfo01(res);
            FIN03302M00.onBusinessWorkPattern();
            overlay.hide();

        } else {
            bootbox.alert(res.msg);
            overlay.hide();
        }

    } else {
        overlay.hide();
    }

};

FIN03302M00Component.prototype.onQstrInfo01 = function(res) {

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
FIN03302M00Component.prototype.onQstrInfo = function(res) {
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



};


FIN03302M00Component.prototype.onInit81 = function() {
    $("#qsrtNo81_kindNm").val('');
    $("#qsrtNo81_etcNm").val('');
    $("#qsrtNo81_trmDsncNm").val('');
    $("#qsrtNo81_etcIrt").val('');
    $("#qsrtNo81_rsltVl").val('');
    $("#qsrtNo81_baseYm").val('');

    qsrtNo81 = new QsrtNo81();
};

FIN03302M00Component.prototype.onSave81 = function() {

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


        FIN03302M00.onInit81();
};


//7-2 시설 운전자금 공급계획 - 시설자금
FIN03302M00Component.prototype.onDel91 = function() {
    
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


        FIN03302M00.onInit91();
        
};

FIN03302M00Component.prototype.onInit91 = function() {
    $("#qsrtNo91_kindNm").val('');
    $("#qsrtNo91_etcNm").val('');
    $("#qsrtNo91_trmDsncNm").val('');
    $("#qsrtNo91_etcIrt").val('');
    $("#qsrtNo91_rsltVl").val('');
    $("#qsrtNo91_baseYm").val('');

    qsrtNo91 = new QsrtNo91();
};

FIN03302M00Component.prototype.onSave91 = function() {

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


        FIN03302M00.onInit91();
};


//7-3 시설 운전자금 공급계획 - 여유자금
FIN03302M00Component.prototype.onDel101 = function() {
    
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


        FIN03302M00.onInit101();
        
};

FIN03302M00Component.prototype.onInit101 = function() {
    $("#qsrtNo101_kindNm").val('')
	$("#qsrtNo101_etcNm").val('')
    $("#qsrtNo101_trmDsncNm").val('')
    $("#qsrtNo101_etcIrt").val('')

    qsrtNo101 = new QsrtNo101();
};

FIN03302M00Component.prototype.onSave101 = function() {

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


        FIN03302M00.onInit101();
};


FIN03302M00Component.prototype.onBusinessWorkPattern = function() {

    console.log("<<<<<< onBusinessWorkPattern() start >>>>> ")
    finService.getBusinessWorkPattern(finAplyCom.alyid, finAplyCom.stacYy, qsrtInfo01, FIN03302M00.businessWorkPatternsCallback);

};

FIN03302M00Component.prototype.businessWorkPatternsCallback = function(result) {

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
            finService.getQsrtFinRsltInfoList(finAplyCom.alyid, finAplyCom.stacYy, FIN03302M00.QsrtFinRsltCallback);
            
        } else {
            bootbox.alert(res.msg);
            overlay.hide();
        }

    } else {
        overlay.hide();
    }
};


FIN03302M00Component.prototype.QsrtFinRsltCallback = function(result) {

    var me = FIN03302M00;

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


FIN03302M00Component.prototype.getQsrtNo = function(qsrtNo) {

    var totalAmt = 0;

    if (qsrtNo == 'qsrtNo41') {

        for (var i = 0 ; i < (qsrtInfo.qsrtNo4['no1']).length; i++) {
            if ((qsrtInfo.qsrtNo4['no1'])[i] != null) totalAmt += Number((qsrtInfo.qsrtNo4['no1'])[i].rsltVl);
        }
    }

    return numberWithCommas(totalAmt);

};

FIN03302M00Component.prototype.onSave = function() {

    var me = FIN03302M00;

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

FIN03302M00Component.prototype.onQsrtSave = function() {

    var me = FIN03302M00;
    var rowData = [];

    overlay.show();
    
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

       });1

   } 
    
    console.log("qsrtInfo >>>> ", qsrtInfo);

    console.log("<<<<<< onQsrtSave() start >>>>> ")

    finService.saveQsrtFinRsltInfo(finAplyCom.alyid, finAplyCom.stacYy, qsrtInfo, FIN03302M00.qsrtFinRsltSaveCallback);

};

FIN03302M00Component.prototype.qsrtFinRsltSaveCallback = function(result) {
	
	if (result != null) {

        var res = JSON.parse(result);

       if (res.success) {

    	   bootbox.alert(res.msg);
           overlay.hide();

           FIN03302M00.initQsrtSave();

       } else {
           bootbox.alert(res.msg);
           overlay.hide();
       }

   } else {
       overlay.hide();
   }
	
};


FIN03302M00Component.prototype.onNumberWithCommas = function(totalAmt) {
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

    FIN03302M00.ngOnInit();



});

