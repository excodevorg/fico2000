var FIN03202M00 = new FIN03202M00Component();

var QsrtInfo = (function () {
    function QsrtInfo() {
        this.qsrtNo0 = [];
        this.qsrtNo1 = [];
        this.qsrtNo2 = [];
        this.qsrtNo3 = [];
        this.qsrtNo4 = [];
        this.qsrtNo5 = [];
        this.qsrtNo6 = [];
        this.qsrtNo7 = [];
        this.qsrtNo8 = [];
        this.qsrtNo9 = [];
        this.qsrtNo10 = [];
        this.qsrtNo11 = [];
        this.qsrtNo12 = [];
        this.qsrtNo13 = [];
    }
    return QsrtInfo;
}());

var QsrtRsltInfo = (function () {
    function QsrtRsltInfo() {
	
		this.alyid = ''	;		
		this.stacYy = '';
		this.qstrId = '';
		this.lsqsTcd = '';
		this.itemId = '';
		this.rsltId = '';
		this.lprbmNo = 0;
		this.sprbmNo = 0;
		this.rsvlType = '';
		this.rplyType = '';
		this.itemNm = '';
		this.baseYm = '';
		this.kindNm = '';
		this.rsltVl = '';
		this.delYn = '';
		this.trmDsncNm = '';
		this.etcNm = '';
		this.etcIrt = '';
	
    }
    return QsrtRsltInfo;
}());

var QsrtNo121 = (function () {
    function QsrtNo121() {
        this.kindNm = "";
        this.baseYm = "";
        this.rsltVl = 0;
        this.etcNm = "";
        this.etcIrt = 0;
        this.alyid = "";
        this.itemId = "";
        this.lprbmNo = 0;
        this.sprbmNo = 0;
        this.lsqsTcd = "";
        this.qstrId = "";
        this.delYn = "";
        this.rsltId = "";
        this.idx = 0;
    }
    return QsrtNo121;
}());
var QsrtNo131 = (function () {
    function QsrtNo131() {
        this.kindNm = "";
        this.baseYm = "";
        this.rsltVl = 0;
        this.etcNm = "";
        this.etcIrt = 0;
        this.alyid = "";
        this.itemId = "";
        this.lprbmNo = 0;
        this.sprbmNo = 0;
        this.lsqsTcd = "";
        this.qstrId = "";
        this.delYn = "";
        this.rsltId = "";
        this.idx = 0;
    }
    return QsrtNo131;
}());

var errMsg = ""
var errRegMsg = ""

var entpName = ""
var stacYy = ""
var gb = ""
var bzn = ""    

//설문지
var qsrtInfoArr = []
var qsrtNoArr = [];
var qsrtNo= new QsrtRsltInfo();

var arrlength = 0
var qsrtInfo = new QsrtInfo()

var qsrtNo121 = new QsrtNo121()
var qsrtNo131 = new QsrtNo131()

var qsrtNo121Arr = []
var qsrtNo131Arr = []

var qsrtNo01 = ''
var qsrtNo11 = 0
var qsrtNo12 = 0
var qsrtNo13 = 0

var qsrtNo21 = 0
var qsrtNo22 = 0

var qsrtNo31 = 0

var qsrtNo41 = []

var qsrtNo51 = 0
var qsrtNo61 = 0
var qsrtNo71 = 0
var qsrtNo81 = 0

var qsrtNo91 = 0
var qsrtNo92 = 0
var qsrtNo93 = 0

var qsrtNo101 = []

var beforeYear = "";
var afterYear  = "";

//1.영업활동패턴
var businessLength = 0;
var businessWorkPatterns = [];

//2.매출액예측
var salesPredictLength = 0;
var salesPredictList = [];
var salesCostBefore = [];
var salesCostAfter = [];
var salesCost = [];
var salesCostTotalAmt = 0;
var salesCostAfterTotalAmt = 0;
var salesCostBeforeTotalAmt = 0;

//3.현금수입
var cashIncomeLength = 0;
var cashIncomeList = [];
var cashIncome0MonthList = [];
var cashIncome1MonthList = [];
var cashIncome2MonthList = [];
var cashIncomeTotalList = [];


//4.매출채권
var salesCreditPredictLength = 0;
var salesAmtList = [];
var revAmtList = []; 
var revAmt1MonthList = [];
var salesCreditAmt = [];

//5.현금지출
var cashOutComeLength = 0;
var cashOutComeList = [];

//6.순현금흐름
var cashNtFlowLength = 0;
var cashNtFlowList = [];

//7.현금예산
var cashBdgtAmtLength = 0;
var cashBdgtAmtList = [];       

//8.결과
var cashFlowResultInfo;    
var cashFlowResultLength = 0;

//bar charts
var barchart;
var linechart;
var linechart1;

function FIN03202M00Component() {

};

FIN03202M00Component.prototype.ngOnInit = function () {
    
    console.log('finAplyCom >> ', finAplyCom);

    $("#initQsrtSave").click(function(){
        FIN03202M00.initQsrtSave();
    });

    $("#onQsrtSave").click(function(){
        FIN03202M00.onQsrtSave();
    });

    $("#initQsrtSave01").click(function(){
        FIN03202M00.initQsrtSave();
    });

    $("#onQsrtSave01").click(function(){
        FIN03202M00.onQsrtSave();
    });

    $("#onInit11").click(function(){
        FIN03202M00.onInit11();
    });

    $("#onSave11").click(function() {
        FIN03202M00.onSave11();
    });

    $("#onDel11").click(function() {
        FIN03202M00.onDel11();
    });


    $("#onInit12").click(function(){
        FIN03202M00.onInit12();
    });
    
    $("#onSave12").click(function() {
        FIN03202M00.onSave12();
    });

    $("#onDel12").click(function() {
        FIN03202M00.onDel12();
    });

    $("#grid-list").bootgrid('destroy');
    $("#grid-list").bootgrid({navigation:0, rowSelect: true, rowCount: -1});

    $("#grid-list2").bootgrid('destroy');
    $("#grid-list2").bootgrid({navigation:0, rowSelect: true, rowCount: -1})

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


            FIN03202M00.onSearch();
            
        }
    }

};

FIN03202M00Component.prototype.onSearch = function () {

    console.log(' >>> finAplyCom.amtUnitNm >>>> ', finAplyCom.amtUnitNm);

    $("span[name='amtUnitNm']").each(function (idx) {
        console.log(' >>> finAplyCom.amtUnitNm idx >>>> ', idx);
        $("span[name='amtUnitNm']").eq(idx).html(finAplyCom.amtUnitNm);
    });

    FIN03202M00.initQsrtSave();
};

FIN03202M00Component.prototype.initQsrtSave = function() {
    overlay.show();
    console.log("initQsrtSave >>> start >>>>" , finAplyCom);
    var res = finService.getQsrtMngRsltInfoList(finAplyCom.alyid, finAplyCom.stacYy, FIN03202M00.qsrtMngRsltCallback);
};

FIN03202M00Component.prototype.qsrtMngRsltCallback = function(data) {

    console.log('qsrtMngRsltCallback' , data);

    if (data != null) {

         var res = JSON.parse(data);

        if (res.success) {

            FIN03202M00.onQstrInfo(res);
            overlay.hide();

        } else {
            bootbox.alert(res.msg);
            overlay.hide();
        }

    } else {
        overlay.hide();
    }

};

FIN03202M00Component.prototype.onQstrInfo = function(res) {

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

    qsrtInfo.qsrtNo0 = qsrtNo0;
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

    qsrtNoArr = qsrtNo12;

    qsrtInfoArr = data;

    arrlength = Object.keys(qsrtInfoArr).length;
    var qNo12 = new QsrtNo121();

    if (qsrtNo12 != null) {

        console.log("qsrtNo12 >>> ", qsrtNo12);

         var rowData = []; 

         var idx = 1;

         qsrtNo12['no1'].forEach(function (selectedRow, index) {

            rowData.push({
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
                        index:idx++
                    });
         });

         $("#grid-list").bootgrid("destroy");

         $("#grid-list").bootgrid({navigation:0, rowSelect: true, rowCount: -1}).bootgrid("append", rowData)
         .on("click.rs.jquery.bootgrid", function (e, columns, rows){
             $("#qsrtNo121_kindNm").val(rows.kindNm);
             $("#qsrtNo121_etcNm").val(rows.etcNm);
             $("#qsrtNo121_trmDsncNm").val(rows.trmDsncNm);
             $("#qsrtNo121_etcIrt").val(rows.etcIrt);
             $("#qsrtNo121_rsltVl").val(rows.amt);
             $("#qsrtNo121_baseYm").val(rows.baseYm);
             $("#qsrtNo121_index").val(rows.index);
         });
    }

    if (qsrtNo13 != null) {

        var rowData1 = []; 
        var idx = 1;

         qsrtNo13['no1'].forEach(function (selectedRow, index) {

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
                        index:idx++
                    });
         });

         $("#grid-list2").bootgrid("destroy");

         $("#grid-list2").bootgrid({navigation:0, rowSelect: true, rowCount: -1}).bootgrid("append", rowData1)
         .on("click.rs.jquery.bootgrid", function (e, columns, rows){
             $("#qsrtNo131_kindNm").val(rows.kindNm);
             $("#qsrtNo131_etcNm").val(rows.etcNm);
             $("#qsrtNo131_trmDsncNm").val(rows.trmDsncNm);
             $("#qsrtNo131_etcIrt").val(rows.etcIrt);
             $("#qsrtNo131_index").val(rows.index);
         });
    }
};


FIN03202M00Component.prototype.getQsrtNo = function(qsrtNo) {

    var totalAmt = 0;

    if (qsrtNo == 'qsrtNo41') {

        for (var i = 0 ; i < (qsrtInfo.qsrtNo4['no1']).length; i++) {
            if ((qsrtInfo.qsrtNo4['no1'])[i] != null) totalAmt += Number((qsrtInfo.qsrtNo4['no1'])[i].rsltVl);
        }
    }

    return numberWithCommas(totalAmt);

};

FIN03202M00Component.prototype.onQsrtSave = function() {

    console.log("<<<<<< onQsrtSave() start >>>>> ")

    overlay.show();

    FIN03202M00.onQsrtSave1();

    console.log("ojh >>> " , qsrtInfo);

    finService.saveQsrtMngRsltInfo(finAplyCom.alyid, finAplyCom.stacYy, qsrtInfo, FIN03202M00.qsrtSaveCallback)


};


//1-1
FIN03202M00Component.prototype.onQsrtSave1 = function() {

    var dataArray1 = $("#grid-list").bootgrid("getCurrentRows");
    var dataArray2 = $("#grid-list2").bootgrid("getCurrentRows");

    console.log('dataArray1 >>> ' , dataArray1);
    console.log('dataArray2 >>> ' , dataArray2);
        
        qsrtInfo.qsrtNo12['no1'] = [];

        if ( dataArray1.length > 0 ) {

            dataArray1.forEach(function (selectedRow, index) {

                qsrtInfo.qsrtNo12['no1'].push({
                    kindNm:selectedRow.kindNm,
                    etcNm:selectedRow.etcNm,
                    trmDsncNm:selectedRow.trmDsncNm,
                    etcIrt:selectedRow.etcIrt,
                    rsltVl:""+selectedRow.amt,
                    baseYm:selectedRow.baseYm,
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

        qsrtInfo.qsrtNo13['no1'] = [];

        if ( dataArray2.length > 0 ) {

            dataArray2.forEach(function (selectedRow, index) {

                qsrtInfo.qsrtNo13['no1'].push({
                    kindNm:selectedRow.kindNm,
                    etcNm:selectedRow.etcNm,
                    trmDsncNm:selectedRow.trmDsncNm,
                    etcIrt:selectedRow.etcIrt,
                    rsltVl:""+selectedRow.amt,
                    baseYm:selectedRow.baseYm,
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

    console.log('qsrtInfo >>> ' , qsrtInfo);
};


FIN03202M00Component.prototype.qsrtSaveCallback = function(data) {

    console.log('qsrtSaveCallback' , data);

    if (data != null) {

         var res = JSON.parse(data);

        if (res.success) {
            overlay.hide();
            bootbox.alert(res.msg);
            FIN03202M00.initQsrtSave();

        } else {
            bootbox.alert(res.msg);
            overlay.hide();
        }

    } else {
        overlay.hide();
    }
    

};



FIN03202M00Component.prototype.onInit11 = function() {
    $("#qsrtNo121_kindNm").val('');
    $("#qsrtNo121_etcNm").val('');
    $("#qsrtNo121_trmDsncNm").val('');
    $("#qsrtNo121_etcIrt").val('');
    $("#qsrtNo121_rsltVl").val('');
    $("#qsrtNo121_baseYm").val('');
    $("#qsrtNo121_index").val(0);
};

FIN03202M00Component.prototype.onDel11 = function() {

    console.log("onDel11 >>> ");

    var dataArray2 = $("#grid-list").bootgrid("getCurrentRows");

    var rowData = []

    var idx = 1;

    console.log("dataArray2 >>> ", dataArray2);
    console.log("$(#qsrtNo121_index).val() >>> ", $("#qsrtNo121_index").val());

    dataArray2.forEach(function (selectedRow, index) {
            if (Number($("#qsrtNo121_index").val()) != selectedRow.index ) {

                console.log("selectedRow.index >>> ", selectedRow);

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
                        index:idx++
                });

            }
    });

    $("#grid-list").bootgrid("destroy");

    $("#grid-list").bootgrid({navigation:0, rowSelect: true, rowCount: -1}).bootgrid("append", rowData)
        .on("click.rs.jquery.bootgrid", function (e, columns, rows){
            $("#qsrtNo121_kindNm").val(rows.kindNm);
            $("#qsrtNo121_etcNm").val(rows.etcNm);
            $("#qsrtNo121_trmDsncNm").val(rows.trmDsncNm);
            $("#qsrtNo121_etcIrt").val(rows.etcIrt);
            $("#qsrtNo121_rsltVl").val(rows.amt);
            $("#qsrtNo121_baseYm").val(rows.baseYm);
            $("#qsrtNo121_index").val(rows.index);
        });


    FIN03202M00.onInit11();

};

FIN03202M00Component.prototype.onSave11 = function() {

    if ($("#qsrtNo121_kindNm").val() == null && $("#qsrtNo121_kindNm").val() == '') {
        return;
    }

    var dataArray1 = $("#grid-list").bootgrid("getCurrentRows");
    var rowData = [];
    console.log('dataArray1 >>> ' , dataArray1);

    qsrtNo = qsrtInfo.qsrtNo12['no'];

    var idx = 1;
        
    if ( dataArray1.length > 0 ) {

        dataArray1.forEach(function (selectedRow, index) {

                console.log('this.rowData11.forEach start');

                console.log("qsrtNo121_index >>> " , $("#qsrtNo121_index").val() + " : " + selectedRow.index);

                if (Number($("#qsrtNo121_index").val()) != 0 && $("#qsrtNo121_index").val() != '' && $("#qsrtNo121_index").val() != undefined)  {
                    if ($("#qsrtNo121_index").val() != selectedRow.index) {
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
    }

    var kindNm = $("#qsrtNo121_kindNm").val();
    var etcNm = $("#qsrtNo121_etcNm").val();
    var trmDsncNm = $("#qsrtNo121_trmDsncNm").val();
    var etcIrt = $("#qsrtNo121_etcIrt").val();
    var rsltVl = $("#qsrtNo121_rsltVl").val();
    var baseYm = $("#qsrtNo121_baseYm").val();
    var index = $("#qsrtNo121_index").val();

    if (kindNm != null && kindNm != '' && kindNm != undefined) {

            rowData.push({
                kindNm:kindNm,
                etcNm:etcNm,
                trmDsncNm:trmDsncNm,
                etcIrt:etcIrt,
                amt:rsltVl,
                baseYm:baseYm,
                alyid:qsrtNo.alyid,
                itemId:qsrtNo.itemId,
                lprbmNo:qsrtNo.lprbmNo,
                sprbmNo:qsrtNo.sprbmNo,
                lsqsTcd:qsrtNo.lsqsTcd,
                qstrId:qsrtNo.qstrId,
                delYn:'N',
                rsltId:qsrtNo.rsltId,
                index:idx
            });
    }

    $("#grid-list").bootgrid("destroy");

    $("#grid-list").bootgrid({navigation:0, rowSelect: true, rowCount: -1}).bootgrid("append", rowData)
    .on("click.rs.jquery.bootgrid", function (e, columns, rows){
        $("#qsrtNo121_kindNm").val(rows.kindNm);
        $("#qsrtNo121_etcNm").val(rows.etcNm);
        $("#qsrtNo121_trmDsncNm").val(rows.trmDsncNm);
        $("#qsrtNo121_etcIrt").val(rows.etcIrt);
        $("#qsrtNo121_rsltVl").val(rows.amt);
        $("#qsrtNo121_baseYm").val(rows.baseYm);
        $("#qsrtNo121_index").val(rows.index);
    });

    FIN03202M00.onInit11();
};

FIN03202M00Component.prototype.onInit12 = function() {
    $("#qsrtNo131_kindNm").val('');
    $("#qsrtNo131_etcNm").val('');
    $("#qsrtNo131_trmDsncNm").val('');
    $("#qsrtNo131_etcIrt").val('');
    $("#qsrtNo131_index").val(0);
};


FIN03202M00Component.prototype.onDel12 = function() {

    console.log("onDel11 >>> ");

    var dataArray2 = $("#grid-list2").bootgrid("getCurrentRows");

    var rowData = []

    var idx = 1;

    console.log("dataArray2 >>> ", dataArray2);
    console.log("$(#qsrtNo131_index).val() >>> ", $("#qsrtNo131_index").val());

    dataArray2.forEach(function (selectedRow, index) {
            if (Number($("#qsrtNo131_index").val()) != selectedRow.index ) {

                console.log("selectedRow.index >>> ", selectedRow);

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
                        index:idx++
                });

            }
    });

    $("#grid-list2").bootgrid("destroy");

    $("#grid-list2").bootgrid({navigation:0, rowSelect: true, rowCount: -1}).bootgrid("append", rowData)
        .on("click.rs.jquery.bootgrid", function (e, columns, rows){
            $("#qsrtNo131_kindNm").val(rows.kindNm);
            $("#qsrtNo131_etcNm").val(rows.etcNm);
            $("#qsrtNo131_trmDsncNm").val(rows.trmDsncNm);
            $("#qsrtNo131_etcIrt").val(rows.etcIrt);
            $("#qsrtNo131_index").val(rows.index);
        });


    FIN03202M00.onInit12();

};

FIN03202M00Component.prototype.onSave12 = function() {

    if ($("#qsrtNo131_kindNm").val() == null && $("#qsrtNo131_kindNm").val() == '') {
        return;
    }

    var dataArray2 = $("#grid-list2").bootgrid("getCurrentRows");
    var rowData = [];
    console.log('dataArray2 >>> ' , dataArray2);

    qsrtNo = qsrtInfo.qsrtNo13['no'];

    var idx = 1;
        
    if ( dataArray2.length > 0 ) {

        dataArray2.forEach(function (selectedRow, index) {

                console.log('this.rowData13.forEach start');

                console.log("qsrtNo131_index >>> " , $("#qsrtNo131_index").val() + " : " + selectedRow.index);

                if (Number($("#qsrtNo131_index").val()) != 0 && $("#qsrtNo131_index").val() != '' && $("#qsrtNo131_index").val() != undefined)  {
                    if (Number($("#qsrtNo131_index").val()) != selectedRow.index) {
                        rowData.push({
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
                            index:idx++
                        });
                    }
                } else {
                      rowData.push({
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
                            index:idx++
                        });
                }

        });
    }


    var kindNm = $("#qsrtNo131_kindNm").val();
    var etcNm = $("#qsrtNo131_etcNm").val();
    var trmDsncNm = $("#qsrtNo131_trmDsncNm").val();
    var etcIrt = $("#qsrtNo131_etcIrt").val();
    var index = $("#qsrtNo131_index").val();

    if (kindNm != null && kindNm != '' && kindNm != undefined) {

            rowData.push({
                kindNm:kindNm,
                etcNm:etcNm,
                trmDsncNm:trmDsncNm,
                etcIrt:etcIrt,
                amt:0,
                baseYm:'',
                alyid:qsrtNo.alyid,
                itemId:qsrtNo.itemId,
                lprbmNo:qsrtNo.lprbmNo,
                sprbmNo:qsrtNo.sprbmNo,
                lsqsTcd:qsrtNo.lsqsTcd,
                qstrId:qsrtNo.qstrId,
                delYn:'N',
                rsltId:qsrtNo.rsltId,
                index:idx
            });
    }

    $("#grid-list2").bootgrid("destroy");

    $("#grid-list2").bootgrid({navigation:0, rowSelect: true, rowCount: -1}).bootgrid("append", rowData)
    .on("click.rs.jquery.bootgrid", function (e, columns, rows){
        $("#qsrtNo131_kindNm").val(rows.kindNm);
        $("#qsrtNo131_etcNm").val(rows.etcNm);
        $("#qsrtNo131_trmDsncNm").val(rows.trmDsncNm);
        $("#qsrtNo131_etcIrt").val(rows.etcIrt);
        $("#qsrtNo131_index").val(rows.index);
    });

    FIN03202M00.onInit12();
};



FIN03202M00Component.prototype.onNumberWithCommas = function(totalAmt) {
    return numberWithCommas(totalAmt);
};

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

    FIN03202M00.ngOnInit();



});

