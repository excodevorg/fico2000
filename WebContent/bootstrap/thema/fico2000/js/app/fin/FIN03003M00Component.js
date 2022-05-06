var FIN03003M00 = new FIN03003M00Component();

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

function FIN03003M00Component() {

};

FIN03003M00Component.prototype.ngOnInit = function(){

    var me = FIN03003M00;

    bootbox.alert('여기 도출된 재무컨설팅 결과에 대해서는 책임지지 않습니다. 재무의사결정 시에는  Business Flatform으로 문의하시기 바랍니다<br/>< 공지사항 참조 >',
        function() {
            entpName = finCom.name;
            stacYy = finCom.stacYy; 
            bzn = finCom.bzn;
            
            $("span[name='entpName']").each(function (idx) {
                $("span[name='entpName']").eq(idx).html(entpName);
            });

            $("#grid-list").bootgrid('destroy');
            $("#grid-list").bootgrid({navigation:0, rowSelect: true, rowCount: -1});

            $("#grid-list2").bootgrid('destroy');
            $("#grid-list2").bootgrid({navigation:0, rowSelect: true, rowCount: -1})

            overlay.show();

            var res = finService.getQsrtMngRsltInfoList(finCom.alyid, finCom.stacYy, FIN03003M00.qsrtMngRsltCallback);

            $('a[data-toggle="tab"]').on('shown.bs.tab', function(e) {
                var target = $(e.target).attr("href") // activated tab

                switch (target) {
                    case "#sheet1":
                        me.onBusinessWorkPattern();
                    break;
                    case "#sheet2":
                        console.log("sheet2################################## >> ");
                        me.onSalesPredictList();
                    break;
                    case "#sheet3":
                        me.onCashIncomeList();
                    break;
                    case "#sheet4":
                        me.onSalesCreditPredict();
                    break;
                    case "#sheet5":
                        me.onCashOutCome();
                    break;
                    case "#sheet6":
                        me.onCashNtFlow();
                    break;
                    case "#sheet7":
                       me.onCashBdgtAmt();
                    break;                    
                    case "#sheet8":
                       me.onCashBdgtAmt();
                    break;  
                    case "#result":
                       me.onResult();
                    break;  
                }
        }); 


            $("#myTab a").click(function(e) {
                e.preventDefault();
                $(this).tab("show");
            });

            $("#myTab a:first").tab("show");

        }
    );

    
    FIN03003M00.onPlot();
    FIN03003M00.onPlot1();
    FIN03003M00.onPlot2();
    FIN03003M00.onPlot3();

    $("#initQsrtSave").click(function(){
        FIN03003M00.initQsrtSave();
    });

    $("#onQsrtSave").click(function(){
        FIN03003M00.onQsrtSave();
    });

    $("#initQsrtSave01").click(function(){
        FIN03003M00.initQsrtSave();
    });

    $("#onQsrtSave01").click(function(){
        FIN03003M00.onQsrtSave();
    });

    $("#onInit11").click(function(){
        FIN03003M00.onInit11();
    });

    $("#onSave11").click(function() {
        FIN03003M00.onSave11();
    });

    $("#onDel11").click(function() {
        FIN03003M00.onDel11();
    });


    $("#onInit12").click(function(){
        FIN03003M00.onInit12();
    });
    
    $("#onSave12").click(function() {
        FIN03003M00.onSave12();
    });

    $("#onDel12").click(function() {
        FIN03003M00.onDel12();
    });
    
}; 


FIN03003M00Component.prototype.qsrtMngRsltCallback = function(data) {

    console.log('qsrtMngRsltCallback' , data);

    if (data != null) {

         var res = JSON.parse(data);

        if (res.success) {

            FIN03003M00.onQstrInfo(res);
            FIN03003M00.onBusinessWorkPattern();
            overlay.hide();

        } else {
            bootbox.alert(res.msg);
            overlay.hide();
        }

    } else {
        overlay.hide();
    }

};

FIN03003M00Component.prototype.onQstrInfo = function(res) {

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

        var year = (qsrtInfo.qsrtNo0['no1']).rsltVl;
        var year1 = (qsrtInfo.qsrtNo0['no1']).rsltVl;

        year = Number(year) - 1;
        beforeYear = "" + year;
        console.log("year >>> ", year);
        console.log("beforeYear >>> ", beforeYear);
        console.log("(qsrtInfo.qsrtNo10['no1'])[0] >>> ", (qsrtInfo.qsrtNo10['no1'])[0].baseYm);
        console.log("(qsrtInfo.qsrtNo9['no1']).baseYm >>> ", (qsrtInfo.qsrtNo9['no1']).baseYm);

        console.log("qsrtInfo.qsrtNo0 >>> ", qsrtInfo.qsrtNo0);

        year1 = Number(year1) + 1;
        afterYear = "" + year1;

        //////////////////////////////////////////////////////////////////////////////
        // 1) 설문지
        /////////////////////////////////////////////////////////////////////////////
        $("#qsrtInfo_qsrtNo0_no1_rsltVl").val((qsrtInfo.qsrtNo0['no1']).rsltVl);

        $("#qsrtInfo_qsrtNo0_no2_rsltVl").val((qsrtInfo.qsrtNo0['no2']).rsltVl);

        $("#qsrtInfo_qsrtNo1_no1_rsltVl").val((qsrtInfo.qsrtNo1['no1']).rsltVl);
        $("#qsrtInfo_qsrtNo1_no2_rsltVl").val((qsrtInfo.qsrtNo1['no2']).rsltVl);
        $("#qsrtInfo_qsrtNo1_no3_rsltVl").val((qsrtInfo.qsrtNo1['no3']).rsltVl);

        $("#qsrtInfo_qsrtNo2_no1_rsltVl").val((qsrtInfo.qsrtNo2['no1']).rsltVl);
        $("#qsrtInfo_qsrtNo2_no2_rsltVl").val((qsrtInfo.qsrtNo2['no2']).rsltVl);

        console.log("1", $("#qsrtInfo_qsrtNo2_no1_rsltVl").val());
        console.log("2", $("#qsrtInfo_qsrtNo2_no2_rsltVl").val());

        $("#qsrtInfo_qsrtNo3_no1_rsltVl").val((qsrtInfo.qsrtNo3['no1']).rsltVl);
        $("#qsrtInfo_qsrtNo4_no1_0_kindNm").html((qsrtInfo.qsrtNo4['no1'])[0].kindNm);
        $("#qsrtInfo_qsrtNo4_no1_1_kindNm").html((qsrtInfo.qsrtNo4['no1'])[1].kindNm);
        $("#qsrtInfo_qsrtNo4_no1_2_kindNm").html((qsrtInfo.qsrtNo4['no1'])[2].kindNm);
        $("#qsrtInfo_qsrtNo4_no1_0_rsltVl").val((qsrtInfo.qsrtNo4['no1'])[0].rsltVl);
        $("#qsrtInfo_qsrtNo4_no1_1_rsltVl").val((qsrtInfo.qsrtNo4['no1'])[1].rsltVl);
        $("#qsrtInfo_qsrtNo4_no1_2_rsltVl").val((qsrtInfo.qsrtNo4['no1'])[2].rsltVl);
        $("#getQsrtNo_qsrtNo41").val(FIN03003M00.getQsrtNo('qsrtNo41'));
        $("#qsrtInfo_qsrtNo5_no1_rsltVl").val((qsrtInfo.qsrtNo5['no1']).rsltVl);
        $("#qsrtInfo_qsrtNo6_no1_rsltVl").val((qsrtInfo.qsrtNo6['no1']).rsltVl);
        $("#qsrtInfo_qsrtNo7_no1_rsltVl").val((qsrtInfo.qsrtNo7['no1']).rsltVl);

        $("#qsrtInfo_qsrtNo8_no1_rsltVl").val((qsrtInfo.qsrtNo8['no1']).rsltVl);

        $("#qsrtInfo_qsrtNo9_no3_baseYm").val((qsrtInfo.qsrtNo9['no3']).baseYm);
        $("#qsrtInfo_qsrtNo9_no3_rsltVl").val((qsrtInfo.qsrtNo9['no3']).rsltVl);

        $("#qsrtInfo_qsrtNo9_no2_baseYm").val((qsrtInfo.qsrtNo9['no2']).baseYm);
        $("#qsrtInfo_qsrtNo9_no2_rsltVl").val((qsrtInfo.qsrtNo9['no2']).rsltVl);

        $("#qsrtInfo_qsrtNo9_no1_baseYm").val((qsrtInfo.qsrtNo9['no1']).baseYm);
        $("#qsrtInfo_qsrtNo9_no1_rsltVl").val((qsrtInfo.qsrtNo9['no1']).rsltVl);

        $("#qsrtInfo_qsrtNo11_no1_rsltVl").val((qsrtInfo.qsrtNo11['no1']).rsltVl);
        $("#qsrtInfo_qsrtNo11_no2_rsltVl").val((qsrtInfo.qsrtNo11['no2']).rsltVl);

        $("#qsrtInfo_qsrtNo10_no1_0_rsltVl").val((qsrtInfo.qsrtNo10['no1'])[0].rsltVl);
        $("#qsrtInfo_qsrtNo10_no1_1_rsltVl").val((qsrtInfo.qsrtNo10['no1'])[1].rsltVl);
        $("#qsrtInfo_qsrtNo10_no1_2_rsltVl").val((qsrtInfo.qsrtNo10['no1'])[2].rsltVl);
        $("#qsrtInfo_qsrtNo10_no1_3_rsltVl").val((qsrtInfo.qsrtNo10['no1'])[3].rsltVl);
        $("#qsrtInfo_qsrtNo10_no1_4_rsltVl").val((qsrtInfo.qsrtNo10['no1'])[4].rsltVl);
        $("#qsrtInfo_qsrtNo10_no1_5_rsltVl").val((qsrtInfo.qsrtNo10['no1'])[5].rsltVl);

        $("#qsrtInfo_qsrtNo10_no1_6_rsltVl").val((qsrtInfo.qsrtNo10['no1'])[6].rsltVl);
        $("#qsrtInfo_qsrtNo10_no1_7_rsltVl").val((qsrtInfo.qsrtNo10['no1'])[7].rsltVl);
        $("#qsrtInfo_qsrtNo10_no1_8_rsltVl").val((qsrtInfo.qsrtNo10['no1'])[8].rsltVl);
        $("#qsrtInfo_qsrtNo10_no1_9_rsltVl").val((qsrtInfo.qsrtNo10['no1'])[9].rsltVl);
        $("#qsrtInfo_qsrtNo10_no1_10_rsltVl").val((qsrtInfo.qsrtNo10['no1'])[10].rsltVl);
        $("#qsrtInfo_qsrtNo10_no1_11_rsltVl").val((qsrtInfo.qsrtNo10['no1'])[11].rsltVl);
        
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

FIN03003M00Component.prototype.onInit11 = function() {
    $("#qsrtNo121_kindNm").val('');
    $("#qsrtNo121_etcNm").val('');
    $("#qsrtNo121_trmDsncNm").val('');
    $("#qsrtNo121_etcIrt").val('');
    $("#qsrtNo121_rsltVl").val('');
    $("#qsrtNo121_baseYm").val('');
    $("#qsrtNo121_index").val(0);
};

FIN03003M00Component.prototype.onDel11 = function() {

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


    FIN03003M00.onInit11();

};

FIN03003M00Component.prototype.onSave11 = function() {

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

    FIN03003M00.onInit11();
};

FIN03003M00Component.prototype.onInit12 = function() {
    $("#qsrtNo131_kindNm").val('');
    $("#qsrtNo131_etcNm").val('');
    $("#qsrtNo131_trmDsncNm").val('');
    $("#qsrtNo131_etcIrt").val('');
    $("#qsrtNo131_index").val(0);
};


FIN03003M00Component.prototype.onDel12 = function() {

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


    FIN03003M00.onInit12();

};

FIN03003M00Component.prototype.onSave12 = function() {

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

    FIN03003M00.onInit12();
};

FIN03003M00Component.prototype.onQsrtSave = function() {

    console.log("<<<<<< onQsrtSave() start >>>>> ")

    overlay.show();

    FIN03003M00.onQsrtSave1();

    console.log("ojh >>> " , qsrtInfo);

    finService.saveQsrtMngRsltInfo(finCom.alyid, finCom.stacYy, qsrtInfo, FIN03003M00.qsrtSaveCallback)


};

FIN03003M00Component.prototype.qsrtSaveCallback = function(data) {

    console.log('qsrtSaveCallback' , data);

    if (data != null) {

         var res = JSON.parse(data);

        if (res.success) {
            overlay.hide();
            bootbox.alert(res.msg);
            FIN03003M00.initQsrtSave();

        } else {
            bootbox.alert(res.msg);
            overlay.hide();
        }

    } else {
        overlay.hide();
    }
    

};

FIN03003M00Component.prototype.initQsrtSave = function() {
    overlay.show();
    console.log("initQsrtSave >>> start >>>>");
    var res = finService.getQsrtMngRsltInfoList(finCom.alyid, finCom.stacYy, FIN03003M00.qsrtMngRsltCallback);
};


FIN03003M00Component.prototype.getQsrtNo = function(qsrtNo) {

        var totalAmt = 0;

        if (qsrtNo == 'qsrtNo41') {

            for (var i = 0 ; i < (qsrtInfo.qsrtNo4['no1']).length; i++) {
                if ((qsrtInfo.qsrtNo4['no1'])[i] != null) totalAmt += Number((qsrtInfo.qsrtNo4['no1'])[i].rsltVl);
            }
        }

        return numberWithCommas(totalAmt);

};

//1-1
FIN03003M00Component.prototype.onQsrtSave1 = function() {

        (qsrtInfo.qsrtNo0['no1']).rsltVl = $("#qsrtInfo_qsrtNo0_no1_rsltVl").val();

        console.log('$("#qsrtInfo_qsrtNo0_no2_rsltVl").val() >> ' , $("#qsrtInfo_qsrtNo0_no2_rsltVl").val());
        
        (qsrtInfo.qsrtNo0['no2']).rsltVl = encodeURI(encodeURIComponent($("#qsrtInfo_qsrtNo0_no2_rsltVl").val()));
        
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

FIN03003M00Component.prototype.onPlot = function(){

        //-Charts [ 영업활동패턴 > 매출패턴그래프 ]-->
        barchart = Morris.Bar({
                            element: 'salesPattern',
                            data: [{
                                period: '30일내 회수',
                                dl: 1,
                                up: 1
                                }, {
                                period: '60일내 회수',
                                dl: 1,
                                up: 1
                                }, {
                                period: '90일내 회수',
                                dl: 1,
                                up: 1
                                }],
                            xkey: 'period',
                            ykeys: ['dl', 'up'],
                            labels: ['회수율', '매출채권'],
                            resize:true,
                            parseTime: false,
                            hideHover: 'auto'
                });
        
         console.log("barchart >>>> ", barchart);
};

FIN03003M00Component.prototype.onPlot1 = function(){
             //'#8465d4'
             //Charts [ 영업활동패턴 > 현금지출율원형그래프 ]
        $('#expensePie').easyPieChart({
            barColor :'#8465d4',
            scaleColor: false,
            trackColor : '#eee',
            lineCap : 'round',
            lineWidth :8,
            onStep: function(from, to, percent) {
                $(this.el).find('.pie-value').text(Math.round(percent) + '%');
            }
        });
};

FIN03003M00Component.prototype.onPlot2 = function(){
        //Charts [ 매출액예측 > 매출액예측그래프 ]
           var day_data = [
        {"elapsed": "1", "value": 0},
        {"elapsed": "2", "value": 0},
        {"elapsed": "3", "value": 0},
        {"elapsed": "4", "value": 0},
        {"elapsed": "5", "value": 0},
        {"elapsed": "6", "value": 0},
        {"elapsed": "7", "value": 0},
        {"elapsed": "8", "value": 0},
        {"elapsed": "9", "value": 0},
        {"elapsed": "10", "value": 0},
        {"elapsed": "11", "value": 0},
        {"elapsed": "12", "value": 0}
    ];
    
    linechart = Morris.Line({
        element: 'salesGraph',
        data: day_data,
        xkey: 'elapsed',
        ykeys: ['value'],
        labels: ['value'],
        gridEnabled: false,
        gridLineColor: 'transparent',
        lineColors: ['#045d97'],
        lineWidth: 2,
        parseTime: false,
        resize:true,
        hideHover: 'auto'
    });
};

FIN03003M00Component.prototype.onPlot3 = function() {


        // 순현금흐름그래프
        var day_data = [
        {"elapsed": "1", "value": 0},
        {"elapsed": "2", "value": 0},
        {"elapsed": "3", "value": 0},
        {"elapsed": "4", "value": 0},
        {"elapsed": "5", "value": 0},
        {"elapsed": "6", "value": 0},
        {"elapsed": "7", "value": 0},
        {"elapsed": "8", "value": 0},
        {"elapsed": "9", "value": 0},
        {"elapsed": "10", "value": 0},
        {"elapsed": "11", "value": 0},
        {"elapsed": "12", "value": 0}
        ];
        
        linechart1 = Morris.Line({
            element: 'cashGraph',
            data: day_data,
            xkey: 'elapsed',
            ykeys: ['value'],
            labels: ['value'],
            gridEnabled: false,
            gridLineColor: 'transparent',
            lineColors: ['#045d97'],
            lineWidth: 2,
            parseTime: false,
            resize:true,
            hideHover: 'auto'
        });

};

FIN03003M00Component.prototype.onBusinessWorkPattern = function() {

    console.log("<<<<<< onBusinessWorkPattern() start >>>>> ");
    overlay.show();
    finService.getBusinessWorkPattern(finCom.alyid, finCom.stacYy, qsrtInfo, FIN03003M00.BusinessWorkPatternCallback);

};

FIN03003M00Component.prototype.BusinessWorkPatternCallback = function(data) {

    if (data != null) {

         var res = JSON.parse(data);

        if (res.success) {
            overlay.hide();
            var result = res.data.result;
            businessWorkPatterns = result;

            console.log("businessWorkPatterns >>> ", businessWorkPatterns);

            if (businessWorkPatterns != null && businessWorkPatterns != undefined) {
                businessLength = 1;
            }

            FIN03003M00.BusinessWorkPatternView();

            FIN03003M00.setBusinessWorkPattern(result);

        } else {
            bootbox.alert(res.msg);
            overlay.hide();
        }

    } else {
        overlay.hide();
    }

};

FIN03003M00Component.prototype.BusinessWorkPatternView = function() {

    if (businessWorkPatterns != null && businessWorkPatterns != undefined) {
        var businessWorkPatternsDis = '';

        businessWorkPatternsDis += '<div class="panel-body">									    ';
        businessWorkPatternsDis += '                                                                ';
        businessWorkPatternsDis += '<!--매출액예측테이블-->                                                ';
        businessWorkPatternsDis += '<table class="table table-condensed">                           ';
        businessWorkPatternsDis += '<thead>                                                         ';
        businessWorkPatternsDis += '<tr class="active text-lg">                                     ';
        businessWorkPatternsDis += '	<th>회수기간</th>                                               ';
        businessWorkPatternsDis += '	<th>회수율</th>                                                ';
        businessWorkPatternsDis += '	<th>매출채권</th>                                               ';
        businessWorkPatternsDis += '</tr>                                                           '; 
        businessWorkPatternsDis += '</thead>                                                        ';
        businessWorkPatternsDis += '<tbody>                                                         ';
        businessWorkPatternsDis += '<tr>                                                            ';
        businessWorkPatternsDis += '	<td>30내회수</td>                                              ';
        businessWorkPatternsDis += '    <td>'+(businessWorkPatterns['rsv01'])['dl']+'%</td>         ';
        businessWorkPatternsDis += '    <td>'+(businessWorkPatterns['rsv01'])['up']+'%</td>         ';
        businessWorkPatternsDis += '</tr>                                                           ';
        businessWorkPatternsDis += '<tr>                                                            ';
        businessWorkPatternsDis += '	<td>60일내회수</td>                                          ';
        businessWorkPatternsDis += '    <td>'+(businessWorkPatterns['rsv02'])['dl']+'%</td>         ';
        businessWorkPatternsDis += '    <td>'+(businessWorkPatterns['rsv02'])['up']+'%</td>         ';
        businessWorkPatternsDis += '</tr>                                                           ';
        businessWorkPatternsDis += '<tr>                                                            ';
        businessWorkPatternsDis += '	<td>90일내회수</td>                                          ';
        businessWorkPatternsDis += '    <td>'+(businessWorkPatterns['rsv03'])['dl']+'%</td>         ';
        businessWorkPatternsDis += '    <td>'+(businessWorkPatterns['rsv03'])['up']+'%</td>         ';
        businessWorkPatternsDis += '</tr>                                                           ';
        businessWorkPatternsDis += '<tr>                                                            ';
        businessWorkPatternsDis += '	<td>검증</td>                                               ';
        businessWorkPatternsDis += '    <td>'+businessWorkPatterns['rsv04']+'</td>                  ';
        businessWorkPatternsDis += '    <td>&nbsp;</td>                                             ';
        businessWorkPatternsDis += '</tr>                                                           ';
        businessWorkPatternsDis += '</tbody>                                                        ';
        businessWorkPatternsDis += '</table>                                                        ';
        businessWorkPatternsDis += '<!--//매출액예측테이블-->                                         ';
        businessWorkPatternsDis += '                                                                ';
        businessWorkPatternsDis += '                                                                ';
        businessWorkPatternsDis += '</div>															';

        $("#businessWorkPatterns").html(businessWorkPatternsDis);

    }

    var cashComePatternsDis = '';
    if (businessWorkPatterns != null && businessWorkPatterns != undefined) {
        cashComePatternsDis += '<p>원재료와 부재료구입에 따른 현금 지출은  매출 후 '+businessWorkPatterns['rsv05']+'개월 후에 지급함</p>            ';
        cashComePatternsDis += '<p>원재료와 부재료구입에 따른 현금 지출은  매출 후 '+businessWorkPatterns['rsv06']+'개월 전에 지급함</p>            ';
    }

    $("#cashComePatternsDis1").html(cashComePatternsDis);

    cashComePatternsDis = "";
    cashComePatternsDis += '<div class="col-lg-2">                                                                                                                      ';
    if (businessWorkPatterns != null && businessWorkPatterns != undefined) {
    cashComePatternsDis += '    <div class="panel panel panel-colorful">                                                                     ';
    cashComePatternsDis += '        <div class="pad-all text-center">                                                                                                   ';
    cashComePatternsDis += '            <p class="text-2x">고정적 지출</p>                                                                                               ';
    cashComePatternsDis += '            <span class="text-3x text-thin">'+FIN03003M00.onNumberWithCommas(businessWorkPatterns['rsv08'])+'</span>                        ';
    cashComePatternsDis += '            <p>1) 생산, 판매, 일반관리비<br/>'+FIN03003M00.onNumberWithCommas(businessWorkPatterns['rsv08'])+' 이 지출됨</p>                   ';
    cashComePatternsDis += '                                                                                                                                            ';
    cashComePatternsDis += '            <br/>                                                                                                                           ';
    cashComePatternsDis += '            <span class="text-3x text-thin">'+FIN03003M00.onNumberWithCommas(businessWorkPatterns['rsv09'])+'</span>                        ';
    cashComePatternsDis += '            <p>2) 은행권에서 받은 대출<br/>이자비용<br/>매월 '+FIN03003M00.onNumberWithCommas(businessWorkPatterns['rsv09'])+' 을 납부 함</p>  ';
    cashComePatternsDis += '        </div>                                                                                                                              ';
    cashComePatternsDis += '    </div>                                                                                                                                  ';
    }
    cashComePatternsDis += '</div>                                                                                                                                      ';
    cashComePatternsDis += '<div class="col-lg-2">                                                                                                                      ';
    if (businessWorkPatterns != null && businessWorkPatterns != undefined) {
    cashComePatternsDis += '    <div class="panel panel-colorful panel-warning">                                                            ';
    cashComePatternsDis += '        <div class="pad-all text-center">                                                                                                   ';
    cashComePatternsDis += '            <p class="text-2x">작년 법인세</p>                                                                                               ';
    cashComePatternsDis += '            <span class="text-3x text-thin">'+FIN03003M00.onNumberWithCommas((businessWorkPatterns['rsv10'])['amt'])+'</span>               ';
    cashComePatternsDis += '            <p>'+(businessWorkPatterns['rsv10'])['month']+'월에 '+FIN03003M00.onNumberWithCommas((businessWorkPatterns['rsv10'])['amt'])+'을 납부함</p>  	';
    cashComePatternsDis += '        </div>                                                                                                                              ';
    cashComePatternsDis += '    </div>                                                                                                                                  ';
    }
    cashComePatternsDis += '</div>                                                                                                                                      ';
    cashComePatternsDis += '<div class="col-lg-2">                                                                                                                      ';
    if (businessWorkPatterns != null && businessWorkPatterns != undefined) {
    cashComePatternsDis += '    <div class="panel panel-colorful panel-primary">                                                            ';
    cashComePatternsDis += '        <div class="pad-all text-center">                                                                                                   ';
    cashComePatternsDis += '            <p class="text-2x">전년도 말<br/>현금잔고</p>                                                                                    ';
    cashComePatternsDis += '            <span class="text-3x text-thin">'+FIN03003M00.onNumberWithCommas(businessWorkPatterns['rsv11'])+'</span>                        ';
    cashComePatternsDis += '        </div>                                                                                                                              ';
    cashComePatternsDis += '    </div>                                                                                                                                  ';
    }
    cashComePatternsDis += '</div>                                                                                                                                      ';
    cashComePatternsDis += '<div class="col-lg-2">                                                                                                                      ';
    if (businessWorkPatterns != null && businessWorkPatterns != undefined) {
    cashComePatternsDis += '    <div class="panel panel-colorful panel-info">                                                               ';
    cashComePatternsDis += '        <div class="pad-all text-center">                                                                                                   ';
    cashComePatternsDis += '            <p class="text-2x">최저 현금<br/>보유 수준</p>                                                                                    ';
    cashComePatternsDis += '            <span class="text-3x text-thin">'+FIN03003M00.onNumberWithCommas(businessWorkPatterns['rsv12'])+'</span>                        ';
    cashComePatternsDis += '        </div>                                                                                                                              ';
    cashComePatternsDis += '    </div>                                                                                                                                  ';
    }
    cashComePatternsDis += '</div>                                                                                                                                      ';
    cashComePatternsDis += '<div class="col-lg-2">                                                                                                                      ';
    if (businessWorkPatterns != null && businessWorkPatterns != undefined) {
    cashComePatternsDis += '    <div class="panel panel-colorful panel-success">                                                            ';
    cashComePatternsDis += '        <div class="pad-all text-center">                                                                                                   ';
    cashComePatternsDis += '            <p class="text-2x">배당</p>                                                                                                     ';
    cashComePatternsDis += '            <span class="text-3x text-thin">'+FIN03003M00.onNumberWithCommas((businessWorkPatterns['rsv13'])['amt'])+'</span>               ';
    cashComePatternsDis += '            <p>'+(businessWorkPatterns['rsv13'])['month']+'월에 '+FIN03003M00.onNumberWithCommas((businessWorkPatterns['rsv13'])['amt'])+' 받음</p>    	';
    cashComePatternsDis += '        </div>                                                                                                                              ';
    cashComePatternsDis += '    </div>                                                                                                                                  ';
    }
    cashComePatternsDis += '</div>                                                                                                                                      ';

    $("#cashComePatternsDis2").html(cashComePatternsDis);

};

FIN03003M00Component.prototype.setBusinessWorkPattern = function(data) {

        var dataSet = [];

        dataSet.push(data['rsv01']);
        dataSet.push(data['rsv02']);
        dataSet.push(data['rsv03']);
        console.log("dataSet >> ", dataSet);

        barchart.setData(dataSet);

        barchart.redraw();

        $('#expensePie').data('easyPieChart').update(data['rsv07']);

        console.log($('#expensePie').data('easyPieChart'));


        console.log($(window));

        $(window).trigger('resize');

};

FIN03003M00Component.prototype.onSalesPredictList = function() {
  console.log("<<<<<< onSalesPredictList() start >>>>> ")
  var me = FIN03003M00;
  overlay.show();
  finService.getSalesPredictList(finCom.alyid, finCom.stacYy, qsrtInfo, me.setSalesPredictList);
};

FIN03003M00Component.prototype.setSalesPredictList = function(result) {

    if (result != null) {

         var res = JSON.parse(result);

        if (res.success) {
           overlay.hide();
           var data = res.data.result;
           
           salesCostBefore = data['salesCostBefore'];
           salesCostAfter = data['salesCostAfter']; 
           salesCost = data['salesCost'];

           salesCostTotalAmt = 0;
           salesCostBeforeTotalAmt = 0;
           salesCostAfterTotalAmt = 0;

           for (var i = 0; i < salesCost.length; i++) {
                salesCostTotalAmt = salesCostTotalAmt + Number(salesCost[i].amt);
                salesCostBeforeTotalAmt += Number(salesCostBefore[i].amt);
                salesCostAfterTotalAmt += Number(salesCostAfter[i].amt);
            }

            FIN03003M00.SalesPredictListView();

            var dataSet = [];

            for (var i =0; i < 12; i++) {
                dataSet.push({
                "elapsed":salesCost[i].month,
                "value":Number(salesCost[i].amt)
                });
            }
           
            linechart.setData(dataSet);
            linechart.redraw();

            $(window).trigger('resize');

        } else {
            bootbox.alert(res.msg);
            overlay.hide();
        }

    } else {
        overlay.hide();
    }

};

FIN03003M00Component.prototype.SalesPredictListView = function() {

    var salesPredictTable1 = '';

    salesPredictTable1 += '<table class="table table-condensed">					';
    salesPredictTable1 += '    <thead>                                                                          ';
    salesPredictTable1 += '        <tr class="active text-lg">                                                  ';
    salesPredictTable1 += '            <th>월</th>                                                               ';
    salesPredictTable1 += '            <th>'+salesCost[0].month+'</th>                                          ';
    salesPredictTable1 += '            <th>'+salesCost[1].month+'</th>                                          ';
    salesPredictTable1 += '            <th>'+salesCost[2].month+'</th>                                          ';
    salesPredictTable1 += '            <th>'+salesCost[3].month+'</th>                                          ';
    salesPredictTable1 += '            <th>'+salesCost[4].month+'</th>                                          ';
    salesPredictTable1 += '            <th>'+salesCost[5].month+'</th>                                          ';
    salesPredictTable1 += '        </tr>                                                                        ';
    salesPredictTable1 += '    </thead>                                                                         ';
    salesPredictTable1 += '    <tbody>                                                                          ';
    salesPredictTable1 += '        <tr>                                                                         ';
    salesPredictTable1 += '            <td>매출액</td>                                                             ';
    salesPredictTable1 += '            <td>'+FIN03003M00.onNumberWithCommas(salesCost[0].amt)+'</td>                        ';
    salesPredictTable1 += '            <td>'+FIN03003M00.onNumberWithCommas(salesCost[1].amt)+'</td>                        ';
    salesPredictTable1 += '            <td>'+FIN03003M00.onNumberWithCommas(salesCost[2].amt)+'</td>                        ';
    salesPredictTable1 += '            <td>'+FIN03003M00.onNumberWithCommas(salesCost[3].amt)+'</td>                        ';
    salesPredictTable1 += '            <td>'+FIN03003M00.onNumberWithCommas(salesCost[4].amt)+'</td>                        ';
    salesPredictTable1 += '            <td>'+FIN03003M00.onNumberWithCommas(salesCost[5].amt)+'</td>                        ';
    salesPredictTable1 += '        </tr>                                                                        ';
    salesPredictTable1 += '        <tr class="active text-lg">                                                  ';
    salesPredictTable1 += '            <td>총매출액</td>                                                            ';
    salesPredictTable1 += '            <td colspan="6">'+FIN03003M00.onNumberWithCommas(salesCostTotalAmt)+' </td>          ';
    salesPredictTable1 += '        </tr>                                                                        ';
    salesPredictTable1 += '        <tr>                                                                         ';
    salesPredictTable1 += '            <td>매출원가(후)</td>                                                        ';
    salesPredictTable1 += '            <td>'+FIN03003M00.onNumberWithCommas(salesCostAfter[0].amt)+'</td>                   ';
    salesPredictTable1 += '            <td>'+FIN03003M00.onNumberWithCommas(salesCostAfter[1].amt)+'</td>                   ';
    salesPredictTable1 += '            <td>'+FIN03003M00.onNumberWithCommas(salesCostAfter[2].amt)+'</td>                   ';
    salesPredictTable1 += '            <td>'+FIN03003M00.onNumberWithCommas(salesCostAfter[3].amt)+'</td>                   ';
    salesPredictTable1 += '            <td>'+FIN03003M00.onNumberWithCommas(salesCostAfter[4].amt)+'</td>                   ';
    salesPredictTable1 += '            <td>'+FIN03003M00.onNumberWithCommas(salesCostAfter[5].amt)+'</td>                   ';
    salesPredictTable1 += '        </tr>                                                                        ';
    salesPredictTable1 += '        <tr class="active text-lg">                                                  ';
    salesPredictTable1 += '            <td>매출원가(후) 합계</td>                                                     ';
    salesPredictTable1 += '            <td colspan="6">'+FIN03003M00.onNumberWithCommas(salesCostAfterTotalAmt)+' </td>     ';
    salesPredictTable1 += '        </tr>                                                                        ';
    salesPredictTable1 += '        <tr>                                                                         ';
    salesPredictTable1 += '            <td>매출원가(전)</td>                                                        ';
    salesPredictTable1 += '            <td>'+FIN03003M00.onNumberWithCommas(salesCostBefore[0].amt)+'</td>                  ';
    salesPredictTable1 += '            <td>'+FIN03003M00.onNumberWithCommas(salesCostBefore[1].amt)+'</td>                  ';
    salesPredictTable1 += '            <td>'+FIN03003M00.onNumberWithCommas(salesCostBefore[2].amt)+'</td>                  ';
    salesPredictTable1 += '            <td>'+FIN03003M00.onNumberWithCommas(salesCostBefore[3].amt)+'</td>                  ';
    salesPredictTable1 += '            <td>'+FIN03003M00.onNumberWithCommas(salesCostBefore[4].amt)+'</td>                  ';
    salesPredictTable1 += '            <td>'+FIN03003M00.onNumberWithCommas(salesCostBefore[5].amt)+'</td>                  ';
    salesPredictTable1 += '        </tr>                                                                        ';
    salesPredictTable1 += '        <tr class="active text-lg">                                                  ';
    salesPredictTable1 += '            <td>매출원가(전) 합계</td>                                                     ';
    salesPredictTable1 += '            <td colspan="6">'+FIN03003M00.onNumberWithCommas(salesCostBeforeTotalAmt)+' </td>    ';
    salesPredictTable1 += '        </tr>                                                                        ';
    salesPredictTable1 += '    </tbody>                                                                         ';
    salesPredictTable1 += '</table>                                                                             ';

    $("#salesPredictTable1").html(salesPredictTable1);

    var salesPredictTable2 = '';

    salesPredictTable2 += '<table class="table table-condensed">												';	
    salesPredictTable2 += '    <thead>                                                                          ';
    salesPredictTable2 += '        <tr class="active text-lg">                                                  ';
    salesPredictTable2 += '            <th>월</th>                                                               ';
    salesPredictTable2 += '            <th>'+salesCost[6].month+'</th>                                          ';
    salesPredictTable2 += '            <th>'+salesCost[7].month+'</th>                                          ';
    salesPredictTable2 += '            <th>'+salesCost[8].month+'</th>                                          ';
    salesPredictTable2 += '            <th>'+salesCost[9].month+'</th>                                          ';
    salesPredictTable2 += '            <th>'+salesCost[10].month+'</th>                                         ';
    salesPredictTable2 += '            <th>'+salesCost[11].month+'</th>                                         ';
    salesPredictTable2 += '        </tr>                                                                        ';
    salesPredictTable2 += '    </thead>                                                                         ';
    salesPredictTable2 += '    <tbody>                                                                          ';
    salesPredictTable2 += '        <tr>                                                                         ';
    salesPredictTable2 += '            <td>매출액</td>                                                             ';
    salesPredictTable2 += '            <td>'+FIN03003M00.onNumberWithCommas(salesCost[6].amt)+'</td>                        ';
    salesPredictTable2 += '            <td>'+FIN03003M00.onNumberWithCommas(salesCost[7].amt)+'</td>                        ';
    salesPredictTable2 += '            <td>'+FIN03003M00.onNumberWithCommas(salesCost[8].amt)+'</td>                        ';
    salesPredictTable2 += '            <td>'+FIN03003M00.onNumberWithCommas(salesCost[9].amt)+'</td>                        ';
    salesPredictTable2 += '            <td>'+FIN03003M00.onNumberWithCommas(salesCost[10].amt)+'</td>                       ';
    salesPredictTable2 += '            <td>'+FIN03003M00.onNumberWithCommas(salesCost[11].amt)+'</td>                       ';
    salesPredictTable2 += '        </tr>                                                                        ';
    salesPredictTable2 += '        <tr class="active text-lg">                                                  ';
    salesPredictTable2 += '            <td>총매출액</td>                                                            ';
    salesPredictTable2 += '            <td colspan="6">'+FIN03003M00.onNumberWithCommas(salesCostTotalAmt)+' </td>          ';
    salesPredictTable2 += '        </tr>                                                                        ';
    salesPredictTable2 += '        <tr>                                                                         ';
    salesPredictTable2 += '            <td>매출원가(후)</td>                                                        ';
    salesPredictTable2 += '            <td>'+FIN03003M00.onNumberWithCommas(salesCostAfter[6].amt)+'</td>                   ';
    salesPredictTable2 += '            <td>'+FIN03003M00.onNumberWithCommas(salesCostAfter[7].amt)+'</td>                   ';
    salesPredictTable2 += '            <td>'+FIN03003M00.onNumberWithCommas(salesCostAfter[8].amt)+'</td>                   ';
    salesPredictTable2 += '            <td>'+FIN03003M00.onNumberWithCommas(salesCostAfter[9].amt)+'</td>                   ';
    salesPredictTable2 += '            <td>'+FIN03003M00.onNumberWithCommas(salesCostAfter[10].amt)+'</td>                  ';
    salesPredictTable2 += '            <td>'+FIN03003M00.onNumberWithCommas(salesCostAfter[11].amt)+'</td>                  ';
    salesPredictTable2 += '        </tr>                                                                        ';
    salesPredictTable2 += '        <tr class="active text-lg">                                                  ';
    salesPredictTable2 += '            <td>매출원가(후) 합계</td>                                                     ';
    salesPredictTable2 += '            <td colspan="6">'+FIN03003M00.onNumberWithCommas(salesCostAfterTotalAmt)+' </td>     ';
    salesPredictTable2 += '        </tr>                                                                        ';
    salesPredictTable2 += '        <tr>                                                                         ';
    salesPredictTable2 += '            <td>매출원가(전)</td>                                                        ';
    salesPredictTable2 += '            <td>'+FIN03003M00.onNumberWithCommas(salesCostBefore[6].amt)+'</td>                  ';
    salesPredictTable2 += '            <td>'+FIN03003M00.onNumberWithCommas(salesCostBefore[7].amt)+'</td>                  ';
    salesPredictTable2 += '            <td>'+FIN03003M00.onNumberWithCommas(salesCostBefore[8].amt)+'</td>                  ';
    salesPredictTable2 += '            <td>'+FIN03003M00.onNumberWithCommas(salesCostBefore[9].amt)+'</td>                  ';
    salesPredictTable2 += '            <td>'+FIN03003M00.onNumberWithCommas(salesCostBefore[10].amt)+'</td>                 ';
    salesPredictTable2 += '            <td>'+FIN03003M00.onNumberWithCommas(salesCostBefore[11].amt)+'</td>                 ';
    salesPredictTable2 += '        </tr>                                                                        ';
    salesPredictTable2 += '        <tr class="active text-lg">                                                  ';
    salesPredictTable2 += '            <td>매출원가(전) 합계</td>                                                     ';
    salesPredictTable2 += '            <td colspan="6">'+FIN03003M00.onNumberWithCommas(salesCostBeforeTotalAmt)+' </td>    ';
    salesPredictTable2 += '        </tr>                                                                        ';
    salesPredictTable2 += '    </tbody>                                                                         ';
    salesPredictTable2 += '</table>                                                                             ';

    $("#salesPredictTable2").html(salesPredictTable2);
};

FIN03003M00Component.prototype.onCashIncomeList = function() {
    console.log("<<<<<< onCashIncomeList() start >>>>> ")
    overlay.show();
    finService.getCashIncomeList(finCom.alyid, finCom.stacYy, qsrtInfo, FIN03003M00.setCashIncomeList);
};

FIN03003M00Component.prototype.setCashIncomeList = function(result){

    if (result != null) {

         var res = JSON.parse(result);

        if (res.success) {
            overlay.hide();
            var data = res.data.result;

            cashIncomeList = data;

            if (cashIncomeList != null && cashIncomeList != undefined) {
                cashIncomeLength = 1;
            }
            
            cashIncomeList = data['cashIncome'];
            cashIncome0MonthList = data['cashIncome0Month'];
            cashIncome1MonthList = data['cashIncome1Month'];
            cashIncome2MonthList = data['cashIncome2Month'];
            cashIncomeTotalList = data['cashIncomeTotal'];

            if ( cashIncomeLength > 0 && businessLength >0 ) {
                FIN03003M00.CashIncomeListView();
            }
            

        } else {
            bootbox.alert(res.msg);
            overlay.hide();
        }

    } else {
        overlay.hide();
    }

    
};

FIN03003M00Component.prototype.CashIncomeListView = function() {

    var cashIncomeTable = '';

    cashIncomeTable += '<div class="panel-body">					';
    cashIncomeTable += '    <!--매출액예측테이블-->                                                                        ';
    cashIncomeTable += '    <table class="table table-condensed">                                                   ';
    cashIncomeTable += '        <thead>                                                                             ';
    cashIncomeTable += '            <tr class="active text-lg">                                                     ';
    cashIncomeTable += '                <th>월</th>                                                                  ';
    cashIncomeTable += '                <th></th>                                                                   ';
    cashIncomeTable += '                <th>'+cashIncomeList[0].month+'</th>                                        ';
    cashIncomeTable += '                <th>'+cashIncomeList[1].month+'</th>                                        ';
    cashIncomeTable += '                <th>'+cashIncomeList[2].month+'</th>                                        ';
    cashIncomeTable += '                <th>'+cashIncomeList[3].month+'</th>                                        ';
    cashIncomeTable += '                <th>'+cashIncomeList[4].month+'</th>                                        ';
    cashIncomeTable += '                <th>'+cashIncomeList[5].month+'</th>                                        ';
    cashIncomeTable += '            </tr>                                                                           ';
    cashIncomeTable += '        </thead>                                                                            ';
    cashIncomeTable += '        <tbody>                                                                             ';
    cashIncomeTable += '            <tr>                                                                            ';
    cashIncomeTable += '                <td>매출액</td>                                                                ';
    cashIncomeTable += '                <td></td>                                                                   ';
    cashIncomeTable += '                <th>'+FIN03003M00.onNumberWithCommas(cashIncomeList[0].amt)+'</th>                      ';
    cashIncomeTable += '                <th>'+FIN03003M00.onNumberWithCommas(cashIncomeList[1].amt)+'</th>                      ';
    cashIncomeTable += '                <th>'+FIN03003M00.onNumberWithCommas(cashIncomeList[2].amt)+'</th>                      ';
    cashIncomeTable += '                <th>'+FIN03003M00.onNumberWithCommas(cashIncomeList[3].amt)+'</th>                      ';
    cashIncomeTable += '                <th>'+FIN03003M00.onNumberWithCommas(cashIncomeList[4].amt)+'</th>                      ';
    cashIncomeTable += '                <th>'+FIN03003M00.onNumberWithCommas(cashIncomeList[5].amt)+'</th>                      ';
    cashIncomeTable += '            </tr>                                                                           ';
    cashIncomeTable += '            <tr>                                                                            ';
    cashIncomeTable += '                <td>당월현금매출수입</td>                                                          ';
    cashIncomeTable += '                <td>'+(businessWorkPatterns['rsv01'])['dl']+'%</td>                         ';
    cashIncomeTable += '                <th>'+FIN03003M00.onNumberWithCommas(cashIncome0MonthList[0].amt)+'</th>                ';
    cashIncomeTable += '                <th>'+FIN03003M00.onNumberWithCommas(cashIncome0MonthList[1].amt)+'</th>                ';
    cashIncomeTable += '                <th>'+FIN03003M00.onNumberWithCommas(cashIncome0MonthList[2].amt)+'</th>                ';
    cashIncomeTable += '                <th>'+FIN03003M00.onNumberWithCommas(cashIncome0MonthList[3].amt)+'</th>                ';
    cashIncomeTable += '                <th>'+FIN03003M00.onNumberWithCommas(cashIncome0MonthList[4].amt)+'</th>                ';
    cashIncomeTable += '                <th>'+FIN03003M00.onNumberWithCommas(cashIncome0MonthList[5].amt)+'</th>                ';
    cashIncomeTable += '            </tr>                                                                           ';
    cashIncomeTable += '            <tr>                                                                            ';
    cashIncomeTable += '                <td>1개월 전 현금매출 중<br/>당월현금매출수입</td>                                        ';
    cashIncomeTable += '                <td>'+(businessWorkPatterns['rsv02'])['dl']+'%</td>                         ';
    cashIncomeTable += '                <th>'+FIN03003M00.onNumberWithCommas(cashIncome1MonthList[0].amt)+'</th>                ';
    cashIncomeTable += '                <th>'+FIN03003M00.onNumberWithCommas(cashIncome1MonthList[1].amt)+'</th>                ';
    cashIncomeTable += '                <th>'+FIN03003M00.onNumberWithCommas(cashIncome1MonthList[2].amt)+'</th>                ';
    cashIncomeTable += '                <th>'+FIN03003M00.onNumberWithCommas(cashIncome1MonthList[3].amt)+'</th>                ';
    cashIncomeTable += '                <th>'+FIN03003M00.onNumberWithCommas(cashIncome1MonthList[4].amt)+'</th>                ';
    cashIncomeTable += '                <th>'+FIN03003M00.onNumberWithCommas(cashIncome1MonthList[5].amt)+'</th>                ';
    cashIncomeTable += '            </tr>                                                                           ';
    cashIncomeTable += '            <tr>                                                                            ';
    cashIncomeTable += '                <td>2개월 전 현금매출 중<br/>당월현금매출수입</td>                                        ';
    cashIncomeTable += '                <td>'+(businessWorkPatterns['rsv03'])['dl']+'%</td>                         ';
    cashIncomeTable += '                <th>'+FIN03003M00.onNumberWithCommas(cashIncome2MonthList[0].amt)+'</th>                ';
    cashIncomeTable += '                <th>'+FIN03003M00.onNumberWithCommas(cashIncome2MonthList[1].amt)+'</th>                ';
    cashIncomeTable += '                <th>'+FIN03003M00.onNumberWithCommas(cashIncome2MonthList[2].amt)+'</th>                ';
    cashIncomeTable += '                <th>'+FIN03003M00.onNumberWithCommas(cashIncome2MonthList[3].amt)+'</th>                ';
    cashIncomeTable += '                <th>'+FIN03003M00.onNumberWithCommas(cashIncome2MonthList[4].amt)+'</th>                ';
    cashIncomeTable += '                <th>'+FIN03003M00.onNumberWithCommas(cashIncome2MonthList[5].amt)+'</th>                ';
    cashIncomeTable += '            </tr>                                                                           ';
    cashIncomeTable += '            <tr>                                                                            ';
    cashIncomeTable += '                <td>총 당월 현금수입</td>                                                         ';
    cashIncomeTable += '                <td></td>                                                                   ';
    cashIncomeTable += '                <th>'+FIN03003M00.onNumberWithCommas(cashIncomeTotalList[0].amt)+'</th>                 ';
    cashIncomeTable += '                <th>'+FIN03003M00.onNumberWithCommas(cashIncomeTotalList[1].amt)+'</th>                 ';
    cashIncomeTable += '                <th>'+FIN03003M00.onNumberWithCommas(cashIncomeTotalList[2].amt)+'</th>                 ';
    cashIncomeTable += '                <th>'+FIN03003M00.onNumberWithCommas(cashIncomeTotalList[3].amt)+'</th>                 ';
    cashIncomeTable += '                <th>'+FIN03003M00.onNumberWithCommas(cashIncomeTotalList[4].amt)+'</th>                 ';
    cashIncomeTable += '                <th>'+FIN03003M00.onNumberWithCommas(cashIncomeTotalList[5].amt)+'</th>                 ';
    cashIncomeTable += '            </tr>                                                                           ';
    cashIncomeTable += '        </tbody>                                                                            ';
    cashIncomeTable += '    </table>                                                                                ';
    cashIncomeTable += '    <!--//매출액예측테이블-->                                                                      ';
    cashIncomeTable += '    <br/>                                                                                   ';
    cashIncomeTable += '    <!--매출액예측테이블-->                                                                        ';
    cashIncomeTable += '    <table class="table table-condensed">                                                   ';
    cashIncomeTable += '        <thead>                                                                             ';
    cashIncomeTable += '            <tr class="active text-lg">                                                     ';
    cashIncomeTable += '                <th>월</th>                                                                  ';
    cashIncomeTable += '                <th></th>                                                                   ';
    cashIncomeTable += '                <th>'+cashIncomeList[6].month+'</th>                                        ';
    cashIncomeTable += '                <th>'+cashIncomeList[7].month+'</th>                                        ';
    cashIncomeTable += '                <th>'+cashIncomeList[8].month+'</th>                                        ';
    cashIncomeTable += '                <th>'+cashIncomeList[9].month+'</th>                                        ';
    cashIncomeTable += '                <th>'+cashIncomeList[10].month+'</th>                                       ';
    cashIncomeTable += '                <th>'+cashIncomeList[11].month+'</th>                                       ';
    cashIncomeTable += '            </tr>                                                                           ';
    cashIncomeTable += '        </thead>                                                                            ';
    cashIncomeTable += '        <tbody>                                                                             ';
    cashIncomeTable += '            <tr>                                                                            ';
    cashIncomeTable += '                <td>매출액</td>                                                                ';
    cashIncomeTable += '                <td></td>                                                                   ';
    cashIncomeTable += '                <th>'+FIN03003M00.onNumberWithCommas(cashIncomeList[6].amt)+'</th>                      ';
    cashIncomeTable += '                <th>'+FIN03003M00.onNumberWithCommas(cashIncomeList[7].amt)+'</th>                      ';
    cashIncomeTable += '                <th>'+FIN03003M00.onNumberWithCommas(cashIncomeList[8].amt)+'</th>                      ';
    cashIncomeTable += '                <th>'+FIN03003M00.onNumberWithCommas(cashIncomeList[9].amt)+'</th>                      ';
    cashIncomeTable += '                <th>'+FIN03003M00.onNumberWithCommas(cashIncomeList[10].amt)+'</th>                     ';
    cashIncomeTable += '                <th>'+FIN03003M00.onNumberWithCommas(cashIncomeList[11].amt)+'</th>                     ';
    cashIncomeTable += '            </tr>                                                                           ';
    cashIncomeTable += '            <tr>                                                                            ';
    cashIncomeTable += '                <td>당월현금매출수입</td>                                                          ';
    cashIncomeTable += '                <td>'+(businessWorkPatterns['rsv01'])['dl']+'%</td>                         ';
    cashIncomeTable += '                <th>'+FIN03003M00.onNumberWithCommas(cashIncome0MonthList[6].amt)+'</th>                ';
    cashIncomeTable += '                <th>'+FIN03003M00.onNumberWithCommas(cashIncome0MonthList[7].amt)+'</th>                ';
    cashIncomeTable += '                <th>'+FIN03003M00.onNumberWithCommas(cashIncome0MonthList[8].amt)+'</th>                ';
    cashIncomeTable += '                <th>'+FIN03003M00.onNumberWithCommas(cashIncome0MonthList[9].amt)+'</th>                ';
    cashIncomeTable += '                <th>'+FIN03003M00.onNumberWithCommas(cashIncome0MonthList[10].amt)+'</th>               ';
    cashIncomeTable += '                <th>'+FIN03003M00.onNumberWithCommas(cashIncome0MonthList[11].amt)+'</th>               ';
    cashIncomeTable += '            </tr>                                                                           ';
    cashIncomeTable += '            <tr>                                                                            ';
    cashIncomeTable += '                <td>1개월 전 현금매출 중<br/>당월현금매출수입</td>                                        ';
    cashIncomeTable += '                <td>'+(businessWorkPatterns['rsv02'])['dl']+'%</td>                         ';
    cashIncomeTable += '                <th>'+FIN03003M00.onNumberWithCommas(cashIncome1MonthList[6].amt)+'</th>                ';
    cashIncomeTable += '                <th>'+FIN03003M00.onNumberWithCommas(cashIncome1MonthList[7].amt)+'</th>                ';
    cashIncomeTable += '                <th>'+FIN03003M00.onNumberWithCommas(cashIncome1MonthList[8].amt)+'</th>                ';
    cashIncomeTable += '                <th>'+FIN03003M00.onNumberWithCommas(cashIncome1MonthList[9].amt)+'</th>                ';
    cashIncomeTable += '                <th>'+FIN03003M00.onNumberWithCommas(cashIncome1MonthList[10].amt)+'</th>               ';
    cashIncomeTable += '                <th>'+FIN03003M00.onNumberWithCommas(cashIncome1MonthList[11].amt)+'</th>               ';
    cashIncomeTable += '            </tr>                                                                           ';
    cashIncomeTable += '            <tr>                                                                            ';
    cashIncomeTable += '                <td>2개월 전 현금매출 중<br/>당월현금매출수입</td>                                        ';
    cashIncomeTable += '                <td>'+(businessWorkPatterns['rsv03'])['dl']+'%</td>                         ';
    cashIncomeTable += '                <th>'+FIN03003M00.onNumberWithCommas(cashIncome2MonthList[6].amt)+'</th>                ';
    cashIncomeTable += '                <th>'+FIN03003M00.onNumberWithCommas(cashIncome2MonthList[7].amt)+'</th>                ';
    cashIncomeTable += '                <th>'+FIN03003M00.onNumberWithCommas(cashIncome2MonthList[8].amt)+'</th>                ';
    cashIncomeTable += '                <th>'+FIN03003M00.onNumberWithCommas(cashIncome2MonthList[9].amt)+'</th>                ';
    cashIncomeTable += '                <th>'+FIN03003M00.onNumberWithCommas(cashIncome2MonthList[10].amt)+'</th>               ';
    cashIncomeTable += '                <th>'+FIN03003M00.onNumberWithCommas(cashIncome2MonthList[11].amt)+'</th>               ';
    cashIncomeTable += '            </tr>                                                                           ';
    cashIncomeTable += '            <tr>                                                                            ';
    cashIncomeTable += '                <td>총 당월 현금수입</td>                                                         ';
    cashIncomeTable += '                <td></td>                                                                   ';
    cashIncomeTable += '                <th>'+FIN03003M00.onNumberWithCommas(cashIncomeTotalList[6].amt)+'</th>                 ';
    cashIncomeTable += '                <th>'+FIN03003M00.onNumberWithCommas(cashIncomeTotalList[7].amt)+'</th>                 ';
    cashIncomeTable += '                <th>'+FIN03003M00.onNumberWithCommas(cashIncomeTotalList[8].amt)+'</th>                 ';
    cashIncomeTable += '                <th>'+FIN03003M00.onNumberWithCommas(cashIncomeTotalList[9].amt)+'</th>                 ';
    cashIncomeTable += '                <th>'+FIN03003M00.onNumberWithCommas(cashIncomeTotalList[10].amt)+'</th>                ';
    cashIncomeTable += '                <th>'+FIN03003M00.onNumberWithCommas(cashIncomeTotalList[11].amt)+'</th>                ';
    cashIncomeTable += '            </tr>                                                                           ';
    cashIncomeTable += '        </tbody>                                                                            ';
    cashIncomeTable += '    </table>                                                                                ';
    cashIncomeTable += '    <!--//매출액예측테이블-->                                                                      ';
    cashIncomeTable += '                                                                                            ';
    cashIncomeTable += '</div>                                                                                      ';

    $("#cashIncomeTable").html(cashIncomeTable);

};

FIN03003M00Component.prototype.onSalesCreditPredict = function() {
    overlay.show();
    console.log("<<<<<< onSalesCreditPredict() start >>>>> ")
    finService.getSalesCreditPredict(finCom.alyid, finCom.stacYy, qsrtInfo, FIN03003M00.setSalesCreditPredict);

};

FIN03003M00Component.prototype.setSalesCreditPredict = function(result) {

    if (result != null) {

         var res = JSON.parse(result);

        if (res.success) {
            overlay.hide();
            var data = res.data.result;

            salesAmtList = data;

            if (salesAmtList != null && salesAmtList != undefined) {
                salesCreditPredictLength = 1;
            }

            salesAmtList = data['salesAmt'];
            revAmtList = data['revAmt'];
            revAmt1MonthList = data['revAmt1Month'];
            salesCreditAmt = data['salesCreditAmt'];

            if ( salesCreditPredictLength > 0 && businessLength > 0 ) {
                FIN03003M00.SalesCreditPredictView();
            }
            

        } else {
            bootbox.alert(res.msg);
            overlay.hide();
        }

    } else {
        overlay.hide();
    }    

};

FIN03003M00Component.prototype.SalesCreditPredictView = function() {

    var salesAmtListTable = '';

    salesAmtListTable += '<div class="panel-body">																		';
    salesAmtListTable += '    <!--매출채권예측테이블-->                                                                         ';
    salesAmtListTable += '    <table class="table table-condensed">                                                     ';
    salesAmtListTable += '        <thead>                                                                               ';
    salesAmtListTable += '            <tr class="active text-lg">                                                       ';
    salesAmtListTable += '                <th>월</th>                                                                    ';
    salesAmtListTable += '                <th></th>                                                                     ';
    salesAmtListTable += '                <th>'+salesAmtList[0].month+'</th>                                            ';
    salesAmtListTable += '                <th>'+salesAmtList[1].month+'</th>                                            ';
    salesAmtListTable += '                <th>'+salesAmtList[2].month+'</th>                                            ';
    salesAmtListTable += '                <th>'+salesAmtList[3].month+'</th>                                            ';
    salesAmtListTable += '                <th>'+salesAmtList[4].month+'</th>                                            ';
    salesAmtListTable += '                <th>'+salesAmtList[5].month+'</th>                                            ';
    salesAmtListTable += '            </tr>                                                                             ';
    salesAmtListTable += '        </thead>                                                                              ';
    salesAmtListTable += '        <tbody>                                                                               ';
    salesAmtListTable += '            <tr>                                                                              ';
    salesAmtListTable += '                <td>매출액</td>                                                                  ';
    salesAmtListTable += '                <td></td>                                                                     ';
    salesAmtListTable += '                <th>'+FIN03003M00.onNumberWithCommas(salesAmtList[0].amt)+'</th>                          ';
    salesAmtListTable += '                <th>'+FIN03003M00.onNumberWithCommas(salesAmtList[1].amt)+'</th>                          ';
    salesAmtListTable += '                <th>'+FIN03003M00.onNumberWithCommas(salesAmtList[2].amt)+'</th>                          ';
    salesAmtListTable += '                <th>'+FIN03003M00.onNumberWithCommas(salesAmtList[3].amt)+'</th>                          ';
    salesAmtListTable += '                <th>'+FIN03003M00.onNumberWithCommas(salesAmtList[4].amt)+'</th>                          ';
    salesAmtListTable += '                <th>'+FIN03003M00.onNumberWithCommas(salesAmtList[5].amt)+'</th>                          ';
    salesAmtListTable += '            </tr>                                                                             ';
    salesAmtListTable += '            <tr>                                                                              ';
    salesAmtListTable += '                <td>당월 매출액 중 미수금</td>                                                        ';
    salesAmtListTable += '                <td>'+(businessWorkPatterns['rsv01'])['up']+'%</td>                           ';
    salesAmtListTable += '                <th>'+FIN03003M00.onNumberWithCommas(revAmtList[0].amt)+'</th>                            ';
    salesAmtListTable += '                <th>'+FIN03003M00.onNumberWithCommas(revAmtList[1].amt)+'</th>                            ';
    salesAmtListTable += '                <th>'+FIN03003M00.onNumberWithCommas(revAmtList[2].amt)+'</th>                            ';
    salesAmtListTable += '                <th>'+FIN03003M00.onNumberWithCommas(revAmtList[3].amt)+'</th>                            ';
    salesAmtListTable += '                <th>'+FIN03003M00.onNumberWithCommas(revAmtList[4].amt)+'</th>                            ';
    salesAmtListTable += '                <th>'+FIN03003M00.onNumberWithCommas(revAmtList[5].amt)+'</th>                            ';
    salesAmtListTable += '            </tr>                                                                             ';
    salesAmtListTable += '            <tr>                                                                              ';
    salesAmtListTable += '                <td>1개월 전 매출액 중 미수금</td>                                                     ';
    salesAmtListTable += '                <td>'+(businessWorkPatterns['rsv02'])['up']+'%</td>                           ';
    salesAmtListTable += '                <th>'+FIN03003M00.onNumberWithCommas(revAmt1MonthList[0].amt)+'</th>                      ';
    salesAmtListTable += '                <th>'+FIN03003M00.onNumberWithCommas(revAmt1MonthList[1].amt)+'</th>                      ';
    salesAmtListTable += '                <th>'+FIN03003M00.onNumberWithCommas(revAmt1MonthList[2].amt)+'</th>                      ';
    salesAmtListTable += '                <th>'+FIN03003M00.onNumberWithCommas(revAmt1MonthList[3].amt)+'</th>                      ';
    salesAmtListTable += '                <th>'+FIN03003M00.onNumberWithCommas(revAmt1MonthList[4].amt)+'</th>                      ';
    salesAmtListTable += '                <th>'+FIN03003M00.onNumberWithCommas(revAmt1MonthList[5].amt)+'</th>                      ';
    salesAmtListTable += '            </tr>                                                                             ';
    salesAmtListTable += '            <tr>                                                                              ';
    salesAmtListTable += '                <td>매출채권</td>                                                                 ';
    salesAmtListTable += '                <td></td>                                                                     ';
    salesAmtListTable += '                <th>'+FIN03003M00.onNumberWithCommas(salesCreditAmt[0].amt)+'</th>                        ';
    salesAmtListTable += '                <th>'+FIN03003M00.onNumberWithCommas(salesCreditAmt[1].amt)+'</th>                        ';
    salesAmtListTable += '                <th>'+FIN03003M00.onNumberWithCommas(salesCreditAmt[2].amt)+'</th>                        ';
    salesAmtListTable += '                <th>'+FIN03003M00.onNumberWithCommas(salesCreditAmt[3].amt)+'</th>                        ';
    salesAmtListTable += '                <th>'+FIN03003M00.onNumberWithCommas(salesCreditAmt[4].amt)+'</th>                        ';
    salesAmtListTable += '                <th>'+FIN03003M00.onNumberWithCommas(salesCreditAmt[5].amt)+'</th>                        ';
    salesAmtListTable += '            </tr>                                                                             ';
    salesAmtListTable += '        </tbody>                                                                              ';
    salesAmtListTable += '    </table>                                                                                  ';
    salesAmtListTable += '    <!--//매출채권예측테이블-->                                                                       ';
    salesAmtListTable += '    <br/>                                                                                     ';
    salesAmtListTable += '                                                                                              ';
    salesAmtListTable += '    <!--매출채권예측테이블-->                                                                         ';
    salesAmtListTable += '    <table class="table table-condensed">                                                     ';
    salesAmtListTable += '        <thead>                                                                               ';
    salesAmtListTable += '            <tr class="active text-lg">                                                       ';
    salesAmtListTable += '                <th>월</th>                                                                    ';
    salesAmtListTable += '                <th></th>                                                                     ';
    salesAmtListTable += '                <th>'+salesAmtList[6].month+'</th>                                            ';
    salesAmtListTable += '                <th>'+salesAmtList[7].month+'</th>                                            ';
    salesAmtListTable += '                <th>'+salesAmtList[8].month+'</th>                                            ';
    salesAmtListTable += '                <th>'+salesAmtList[9].month+'</th>                                            ';
    salesAmtListTable += '                <th>'+salesAmtList[10].month+'</th>                                           ';
    salesAmtListTable += '                <th>'+salesAmtList[11].month+'</th>                                           ';
    salesAmtListTable += '            </tr>                                                                             ';
    salesAmtListTable += '        </thead>                                                                              ';
    salesAmtListTable += '        <tbody>                                                                               ';
    salesAmtListTable += '            <tr>                                                                              ';
    salesAmtListTable += '                <td>매출액</td>                                                                  ';
    salesAmtListTable += '                <td></td>                                                                     ';
    salesAmtListTable += '                <th>'+FIN03003M00.onNumberWithCommas(salesAmtList[6].amt)+'</th>                          ';
    salesAmtListTable += '                <th>'+FIN03003M00.onNumberWithCommas(salesAmtList[7].amt)+'</th>                          ';
    salesAmtListTable += '                <th>'+FIN03003M00.onNumberWithCommas(salesAmtList[8].amt)+'</th>                          ';
    salesAmtListTable += '                <th>'+FIN03003M00.onNumberWithCommas(salesAmtList[9].amt)+'</th>                          ';
    salesAmtListTable += '                <th>'+FIN03003M00.onNumberWithCommas(salesAmtList[10].amt)+'</th>                         ';
    salesAmtListTable += '                <th>'+FIN03003M00.onNumberWithCommas(salesAmtList[11].amt)+'</th>                         ';
    salesAmtListTable += '            </tr>                                                                             ';
    salesAmtListTable += '            <tr>                                                                              ';
    salesAmtListTable += '                <td>당월 매출액 중 미수금</td>                                                        ';
    salesAmtListTable += '                <td>'+(businessWorkPatterns['rsv01'])['up']+'%</td>                           ';
    salesAmtListTable += '                <th>'+FIN03003M00.onNumberWithCommas(revAmtList[6].amt)+'</th>                            ';
    salesAmtListTable += '                <th>'+FIN03003M00.onNumberWithCommas(revAmtList[7].amt)+'</th>                            ';
    salesAmtListTable += '                <th>'+FIN03003M00.onNumberWithCommas(revAmtList[8].amt)+'</th>                            ';
    salesAmtListTable += '                <th>'+FIN03003M00.onNumberWithCommas(revAmtList[9].amt)+'</th>                            ';
    salesAmtListTable += '                <th>'+FIN03003M00.onNumberWithCommas(revAmtList[10].amt)+'</th>                           ';
    salesAmtListTable += '                <th>'+FIN03003M00.onNumberWithCommas(revAmtList[11].amt)+'</th>                           ';
    salesAmtListTable += '            </tr>                                                                             ';
    salesAmtListTable += '            <tr>                                                                              ';
    salesAmtListTable += '                <td>1개월 전 매출액 중 미수금</td>                                                     ';
    salesAmtListTable += '                <td>'+(businessWorkPatterns['rsv02'])['up']+'%</td>                           ';
    salesAmtListTable += '                <th>'+FIN03003M00.onNumberWithCommas(revAmt1MonthList[6].amt)+'</th>                      ';
    salesAmtListTable += '                <th>'+FIN03003M00.onNumberWithCommas(revAmt1MonthList[7].amt)+'</th>                      ';
    salesAmtListTable += '                <th>'+FIN03003M00.onNumberWithCommas(revAmt1MonthList[8].amt)+'</th>                      ';
    salesAmtListTable += '                <th>'+FIN03003M00.onNumberWithCommas(revAmt1MonthList[9].amt)+'</th>                      ';
    salesAmtListTable += '                <th>'+FIN03003M00.onNumberWithCommas(revAmt1MonthList[10].amt)+'</th>                     ';
    salesAmtListTable += '                <th>'+FIN03003M00.onNumberWithCommas(revAmt1MonthList[11].amt)+'</th>                     ';
    salesAmtListTable += '            </tr>                                                                             ';
    salesAmtListTable += '            <tr>                                                                              ';
    salesAmtListTable += '                <td>매출채권</td>                                                                 ';
    salesAmtListTable += '                <td></td>                                                                     ';
    salesAmtListTable += '                <th>'+FIN03003M00.onNumberWithCommas(salesCreditAmt[6].amt)+'</th>                        ';
    salesAmtListTable += '                <th>'+FIN03003M00.onNumberWithCommas(salesCreditAmt[7].amt)+'</th>                        ';
    salesAmtListTable += '                <th>'+FIN03003M00.onNumberWithCommas(salesCreditAmt[8].amt)+'</th>                        ';
    salesAmtListTable += '                <th>'+FIN03003M00.onNumberWithCommas(salesCreditAmt[9].amt)+'</th>                        ';
    salesAmtListTable += '                <th>'+FIN03003M00.onNumberWithCommas(salesCreditAmt[10].amt)+'</th>                       ';
    salesAmtListTable += '                <th>'+FIN03003M00.onNumberWithCommas(salesCreditAmt[11].amt)+'</th>                       ';
    salesAmtListTable += '            </tr>                                                                             ';
    salesAmtListTable += '        </tbody>                                                                              ';
    salesAmtListTable += '    </table>                                                                                  ';
    salesAmtListTable += '    <!--//매출채권예측테이블-->                                                                       ';
    salesAmtListTable += '                                                                                              ';
    salesAmtListTable += '                                                                                              ';
    salesAmtListTable += '</div>                                                                                        ';

    $("#salesAmtListTable").html(salesAmtListTable);
};

FIN03003M00Component.prototype.onCashOutCome = function() {
    console.log("<<<<<< onCashOutCome() start >>>>> ");
    overlay.show();
    finService.getCashOutCome(finCom.alyid, finCom.stacYy, qsrtInfo, FIN03003M00.setCashOutCome)
};

FIN03003M00Component.prototype.setCashOutCome = function(result) {

    if (result != null) {

         var res = JSON.parse(result);

        if (res.success) {
            overlay.hide();
            var data = res.data.result;

            cashOutComeList = data;

            if (cashOutComeList != null && cashOutComeList != undefined) {
                cashOutComeLength = 1;
            }
            
            cashOutComeList = data['cashOutCome'];
            
            if ( cashOutComeLength > 0 ) {
                FIN03003M00.CashOutComeView();
            }
            

        } else {
            bootbox.alert(res.msg);
            overlay.hide();
        }

    } else {
        overlay.hide();
    }   

    
}; 

FIN03003M00Component.prototype.CashOutComeView = function() {

    var cashOutComeTable = '';

    cashOutComeTable += '<div class="panel-body" *ngIf="cashOutComeLength > 0">											';				
    cashOutComeTable += '    <!--매출채권예측테이블-->                                                                    ';
    cashOutComeTable += '    <table class="table table-condensed">                                                      ';
    cashOutComeTable += '        <thead>                                                                                ';
    cashOutComeTable += '            <tr class="active text-lg">                                                        ';
    cashOutComeTable += '                <th>월</th>                                                                     ';
    cashOutComeTable += '                <th>'+cashOutComeList[0].month+'</th>                                          ';
    cashOutComeTable += '                <th>'+cashOutComeList[1].month+'</th>                                          ';
    cashOutComeTable += '                <th>'+cashOutComeList[2].month+'</th>                                          ';
    cashOutComeTable += '                <th>'+cashOutComeList[3].month+'</th>                                          ';
    cashOutComeTable += '                <th>'+cashOutComeList[4].month+'</th>                                          ';
    cashOutComeTable += '                <th>'+cashOutComeList[5].month+'</th>                                          ';
    cashOutComeTable += '            </tr>                                                                              ';
    cashOutComeTable += '        </thead>                                                                               ';
    cashOutComeTable += '        <tbody>                                                                                ';
    cashOutComeTable += '            <tr>                                                                               ';
    cashOutComeTable += '                <td>매출액</td>                                                                 ';
    cashOutComeTable += '                <th>'+FIN03003M00.onNumberWithCommas(cashOutComeList[0].salesAmt)+'</th>                   ';
    cashOutComeTable += '                <th>'+FIN03003M00.onNumberWithCommas(cashOutComeList[1].salesAmt)+'</th>                   ';
    cashOutComeTable += '                <th>'+FIN03003M00.onNumberWithCommas(cashOutComeList[2].salesAmt)+'</th>                   ';
    cashOutComeTable += '                <th>'+FIN03003M00.onNumberWithCommas(cashOutComeList[3].salesAmt)+'</th>                   ';
    cashOutComeTable += '                <th>'+FIN03003M00.onNumberWithCommas(cashOutComeList[4].salesAmt)+'</th>                   ';
    cashOutComeTable += '                <th>'+FIN03003M00.onNumberWithCommas(cashOutComeList[5].salesAmt)+'</th>                   ';
    cashOutComeTable += '            </tr>                                                                              ';
    cashOutComeTable += '            <tr>                                                                               ';
    cashOutComeTable += '                <td>매출원가</td>                                                               ';
    cashOutComeTable += '                <th>'+FIN03003M00.onNumberWithCommas(cashOutComeList[0].salesCostAmt)+'</th>               ';
    cashOutComeTable += '                <th>'+FIN03003M00.onNumberWithCommas(cashOutComeList[1].salesCostAmt)+'</th>               ';
    cashOutComeTable += '                <th>'+FIN03003M00.onNumberWithCommas(cashOutComeList[2].salesCostAmt)+'</th>               ';
    cashOutComeTable += '                <th>'+FIN03003M00.onNumberWithCommas(cashOutComeList[3].salesCostAmt)+'</th>               ';
    cashOutComeTable += '                <th>'+FIN03003M00.onNumberWithCommas(cashOutComeList[4].salesCostAmt)+'</th>               ';
    cashOutComeTable += '                <th>'+FIN03003M00.onNumberWithCommas(cashOutComeList[5].salesCostAmt)+'</th>               ';
    cashOutComeTable += '            </tr>                                                                              ';
    cashOutComeTable += '            <tr>                                                                               ';
    cashOutComeTable += '                <td>판매비와 관리비</td>                                                             ';
    cashOutComeTable += '                <th>'+FIN03003M00.onNumberWithCommas(cashOutComeList[0].mnepAmt)+'</th>                    ';
    cashOutComeTable += '                <th>'+FIN03003M00.onNumberWithCommas(cashOutComeList[1].mnepAmt)+'</th>                    ';
    cashOutComeTable += '                <th>'+FIN03003M00.onNumberWithCommas(cashOutComeList[2].mnepAmt)+'</th>                    ';
    cashOutComeTable += '                <th>'+FIN03003M00.onNumberWithCommas(cashOutComeList[3].mnepAmt)+'</th>                    ';
    cashOutComeTable += '                <th>'+FIN03003M00.onNumberWithCommas(cashOutComeList[4].mnepAmt)+'</th>                    ';
    cashOutComeTable += '                <th>'+FIN03003M00.onNumberWithCommas(cashOutComeList[5].mnepAmt)+'</th>                    ';
    cashOutComeTable += '            </tr>                                                                              ';
    cashOutComeTable += '            <tr>                                                                               ';
    cashOutComeTable += '                <td>이자비용</td>                                                                  ';
    cashOutComeTable += '                <th>'+FIN03003M00.onNumberWithCommas(cashOutComeList[0].inepAmt)+'</th>                    ';
    cashOutComeTable += '                <th>'+FIN03003M00.onNumberWithCommas(cashOutComeList[1].inepAmt)+'</th>                    ';
    cashOutComeTable += '                <th>'+FIN03003M00.onNumberWithCommas(cashOutComeList[2].inepAmt)+'</th>                    ';
    cashOutComeTable += '                <th>'+FIN03003M00.onNumberWithCommas(cashOutComeList[3].inepAmt)+'</th>                    ';
    cashOutComeTable += '                <th>'+FIN03003M00.onNumberWithCommas(cashOutComeList[4].inepAmt)+'</th>                    ';
    cashOutComeTable += '                <th>'+FIN03003M00.onNumberWithCommas(cashOutComeList[5].inepAmt)+'</th>                    ';
    cashOutComeTable += '            </tr>                                                                              ';
    cashOutComeTable += '            <tr>                                                                               ';
    cashOutComeTable += '                <td>법인세</td>                                                                   ';
    cashOutComeTable += '                <th>'+FIN03003M00.onNumberWithCommas(cashOutComeList[0].crtxAmt)+'</th>                    ';
    cashOutComeTable += '                <th>'+FIN03003M00.onNumberWithCommas(cashOutComeList[1].crtxAmt)+'</th>                    ';
    cashOutComeTable += '                <th>'+FIN03003M00.onNumberWithCommas(cashOutComeList[2].crtxAmt)+'</th>                    ';
    cashOutComeTable += '                <th>'+FIN03003M00.onNumberWithCommas(cashOutComeList[3].crtxAmt)+'</th>                    ';
    cashOutComeTable += '                <th>'+FIN03003M00.onNumberWithCommas(cashOutComeList[4].crtxAmt)+'</th>                    ';
    cashOutComeTable += '                <th>'+FIN03003M00.onNumberWithCommas(cashOutComeList[5].crtxAmt)+'</th>                    ';
    cashOutComeTable += '            </tr>                                                                              ';
    cashOutComeTable += '            <tr>                                                                               ';
    cashOutComeTable += '                <td>현금배당</td>                                                                  ';
    cashOutComeTable += '                <th>'+FIN03003M00.onNumberWithCommas(cashOutComeList[0].cashDvdnAmt)+'</th>                ';
    cashOutComeTable += '                <th>'+FIN03003M00.onNumberWithCommas(cashOutComeList[1].cashDvdnAmt)+'</th>                ';
    cashOutComeTable += '                <th>'+FIN03003M00.onNumberWithCommas(cashOutComeList[2].cashDvdnAmt)+'</th>                ';
    cashOutComeTable += '                <th>'+FIN03003M00.onNumberWithCommas(cashOutComeList[3].cashDvdnAmt)+'</th>                ';
    cashOutComeTable += '                <th>'+FIN03003M00.onNumberWithCommas(cashOutComeList[4].cashDvdnAmt)+'</th>                ';
    cashOutComeTable += '                <th>'+FIN03003M00.onNumberWithCommas(cashOutComeList[5].cashDvdnAmt)+'</th>                ';
    cashOutComeTable += '            </tr>                                                                              ';
    cashOutComeTable += '            <tr class="active">                                                                ';
    cashOutComeTable += '                <td>지출액의 합계</td>                                                              ';
    cashOutComeTable += '                <th>'+FIN03003M00.onNumberWithCommas(cashOutComeList[0].cashOutComeTotalAmt)+'</th>        ';
    cashOutComeTable += '                <th>'+FIN03003M00.onNumberWithCommas(cashOutComeList[1].cashOutComeTotalAmt)+'</th>        ';
    cashOutComeTable += '                <th>'+FIN03003M00.onNumberWithCommas(cashOutComeList[2].cashOutComeTotalAmt)+'</th>        ';
    cashOutComeTable += '                <th>'+FIN03003M00.onNumberWithCommas(cashOutComeList[3].cashOutComeTotalAmt)+'</th>        ';
    cashOutComeTable += '                <th>'+FIN03003M00.onNumberWithCommas(cashOutComeList[4].cashOutComeTotalAmt)+'</th>        ';
    cashOutComeTable += '                <th>'+FIN03003M00.onNumberWithCommas(cashOutComeList[5].cashOutComeTotalAmt)+'</th>        ';
    cashOutComeTable += '            </tr>                                                                              ';
    cashOutComeTable += '        </tbody>                                                                               ';
    cashOutComeTable += '    </table>                                                                                   ';
    cashOutComeTable += '    <!--//매출채권예측테이블-->                                                                        ';
    cashOutComeTable += '    <br/>                                                                                      ';
    cashOutComeTable += '    <!--매출채권예측테이블-->                                                                          ';
    cashOutComeTable += '    <table class="table table-condensed">                                                      ';
    cashOutComeTable += '        <thead>                                                                                ';
    cashOutComeTable += '            <tr class="active text-lg">                                                        ';
    cashOutComeTable += '                <th>월</th>                                                                     ';
    cashOutComeTable += '                <th>'+cashOutComeList[6].month+'</th>                                          ';
    cashOutComeTable += '                <th>'+cashOutComeList[7].month+'</th>                                          ';
    cashOutComeTable += '                <th>'+cashOutComeList[8].month+'</th>                                          ';
    cashOutComeTable += '                <th>'+cashOutComeList[9].month+'</th>                                          ';
    cashOutComeTable += '                <th>'+cashOutComeList[10].month+'</th>                                         ';
    cashOutComeTable += '                <th>'+cashOutComeList[11].month+'</th>                                         ';
    cashOutComeTable += '            </tr>                                                                              ';
    cashOutComeTable += '        </thead>                                                                               ';
    cashOutComeTable += '        <tbody>                                                                                ';
    cashOutComeTable += '            <tr>                                                                               ';
    cashOutComeTable += '                <td>매출액</td>                                                                   ';
    cashOutComeTable += '                <th>'+FIN03003M00.onNumberWithCommas(cashOutComeList[6].salesAmt)+'</th>                   ';
    cashOutComeTable += '                <th>'+FIN03003M00.onNumberWithCommas(cashOutComeList[7].salesAmt)+'</th>                   ';
    cashOutComeTable += '                <th>'+FIN03003M00.onNumberWithCommas(cashOutComeList[8].salesAmt)+'</th>                   ';
    cashOutComeTable += '                <th>'+FIN03003M00.onNumberWithCommas(cashOutComeList[9].salesAmt)+'</th>                   ';
    cashOutComeTable += '                <th>'+FIN03003M00.onNumberWithCommas(cashOutComeList[10].salesAmt)+'</th>                  ';
    cashOutComeTable += '                <th>'+FIN03003M00.onNumberWithCommas(cashOutComeList[11].salesAmt)+'</th>                  ';
    cashOutComeTable += '            </tr>                                                                              ';
    cashOutComeTable += '            <tr>                                                                               ';
    cashOutComeTable += '                <td>매출원가</td>                                                                  ';
    cashOutComeTable += '                <th>'+FIN03003M00.onNumberWithCommas(cashOutComeList[6].salesCostAmt)+'</th>               ';
    cashOutComeTable += '                <th>'+FIN03003M00.onNumberWithCommas(cashOutComeList[7].salesCostAmt)+'</th>               ';
    cashOutComeTable += '                <th>'+FIN03003M00.onNumberWithCommas(cashOutComeList[8].salesCostAmt)+'</th>               ';
    cashOutComeTable += '                <th>'+FIN03003M00.onNumberWithCommas(cashOutComeList[9].salesCostAmt)+'</th>               ';
    cashOutComeTable += '                <th>'+FIN03003M00.onNumberWithCommas(cashOutComeList[10].salesCostAmt)+'</th>              ';
    cashOutComeTable += '                <th>'+FIN03003M00.onNumberWithCommas(cashOutComeList[11].salesCostAmt)+'</th>              ';
    cashOutComeTable += '            </tr>                                                                              ';
    cashOutComeTable += '            <tr>                                                                               ';
    cashOutComeTable += '                <td>판매비와 관리비</td>                                                             ';
    cashOutComeTable += '                <th>'+FIN03003M00.onNumberWithCommas(cashOutComeList[6].mnepAmt)+'</th>                    ';
    cashOutComeTable += '                <th>'+FIN03003M00.onNumberWithCommas(cashOutComeList[7].mnepAmt)+'</th>                    ';
    cashOutComeTable += '                <th>'+FIN03003M00.onNumberWithCommas(cashOutComeList[8].mnepAmt)+'</th>                    ';
    cashOutComeTable += '                <th>'+FIN03003M00.onNumberWithCommas(cashOutComeList[9].mnepAmt)+'</th>                    ';
    cashOutComeTable += '                <th>'+FIN03003M00.onNumberWithCommas(cashOutComeList[10].mnepAmt)+'</th>                   ';
    cashOutComeTable += '                <th>'+FIN03003M00.onNumberWithCommas(cashOutComeList[11].mnepAmt)+'</th>                   ';
    cashOutComeTable += '            </tr>                                                                              ';
    cashOutComeTable += '            <tr>                                                                               ';
    cashOutComeTable += '                <td>이자비용</td>                                                                  ';
    cashOutComeTable += '                <th>'+FIN03003M00.onNumberWithCommas(cashOutComeList[6].inepAmt)+'</th>                    ';
    cashOutComeTable += '                <th>'+FIN03003M00.onNumberWithCommas(cashOutComeList[7].inepAmt)+'</th>                    ';
    cashOutComeTable += '                <th>'+FIN03003M00.onNumberWithCommas(cashOutComeList[8].inepAmt)+'</th>                    ';
    cashOutComeTable += '                <th>'+FIN03003M00.onNumberWithCommas(cashOutComeList[9].inepAmt)+'</th>                    ';
    cashOutComeTable += '                <th>'+FIN03003M00.onNumberWithCommas(cashOutComeList[10].inepAmt)+'</th>                   ';
    cashOutComeTable += '                <th>'+FIN03003M00.onNumberWithCommas(cashOutComeList[11].inepAmt)+'</th>                   ';
    cashOutComeTable += '            </tr>                                                                              ';
    cashOutComeTable += '            <tr>                                                                               ';
    cashOutComeTable += '                <td>법인세</td>                                                                 ';
    cashOutComeTable += '                <th>'+FIN03003M00.onNumberWithCommas(cashOutComeList[6].crtxAmt)+'</th>                    ';
    cashOutComeTable += '                <th>'+FIN03003M00.onNumberWithCommas(cashOutComeList[7].crtxAmt)+'</th>                    ';
    cashOutComeTable += '                <th>'+FIN03003M00.onNumberWithCommas(cashOutComeList[8].crtxAmt)+'</th>                    ';
    cashOutComeTable += '                <th>'+FIN03003M00.onNumberWithCommas(cashOutComeList[9].crtxAmt)+'</th>                    ';
    cashOutComeTable += '                <th>'+FIN03003M00.onNumberWithCommas(cashOutComeList[10].crtxAmt)+'</th>                   ';
    cashOutComeTable += '                <th>'+FIN03003M00.onNumberWithCommas(cashOutComeList[11].crtxAmt)+'</th>                   ';
    cashOutComeTable += '            </tr>                                                                              ';
    cashOutComeTable += '            <tr>                                                                               ';
    cashOutComeTable += '                <td>현금배당</td>                                                               ';
    cashOutComeTable += '                <th>'+FIN03003M00.onNumberWithCommas(cashOutComeList[6].cashDvdnAmt)+'</th>                ';
    cashOutComeTable += '                <th>'+FIN03003M00.onNumberWithCommas(cashOutComeList[7].cashDvdnAmt)+'</th>                ';
    cashOutComeTable += '                <th>'+FIN03003M00.onNumberWithCommas(cashOutComeList[8].cashDvdnAmt)+'</th>                ';
    cashOutComeTable += '                <th>'+FIN03003M00.onNumberWithCommas(cashOutComeList[9].cashDvdnAmt)+'</th>                ';
    cashOutComeTable += '                <th>'+FIN03003M00.onNumberWithCommas(cashOutComeList[10].cashDvdnAmt)+'</th>               ';
    cashOutComeTable += '                <th>'+FIN03003M00.onNumberWithCommas(cashOutComeList[11].cashDvdnAmt)+'</th>               ';
    cashOutComeTable += '            </tr>                                                                              ';
    cashOutComeTable += '            <tr class="active">                                                                ';
    cashOutComeTable += '                <td>지출액의 합계</td>                                                           ';
    cashOutComeTable += '                <th>'+FIN03003M00.onNumberWithCommas(cashOutComeList[6].cashOutComeTotalAmt)+'</th>        ';
    cashOutComeTable += '                <th>'+FIN03003M00.onNumberWithCommas(cashOutComeList[7].cashOutComeTotalAmt)+'</th>        ';
    cashOutComeTable += '                <th>'+FIN03003M00.onNumberWithCommas(cashOutComeList[8].cashOutComeTotalAmt)+'</th>        ';
    cashOutComeTable += '                <th>'+FIN03003M00.onNumberWithCommas(cashOutComeList[9].cashOutComeTotalAmt)+'</th>        ';
    cashOutComeTable += '                <th>'+FIN03003M00.onNumberWithCommas(cashOutComeList[10].cashOutComeTotalAmt)+'</th>       ';
    cashOutComeTable += '                <th>'+FIN03003M00.onNumberWithCommas(cashOutComeList[11].cashOutComeTotalAmt)+'</th>       ';
    cashOutComeTable += '            </tr>                                                                              ';
    cashOutComeTable += '        </tbody>                                                                               ';
    cashOutComeTable += '    </table>                                                                                   ';
    cashOutComeTable += '    <!--//매출채권예측테이블-->                                                                  ';
    cashOutComeTable += '</div>                                                                                         ';

    $("#cashOutComeTable").html(cashOutComeTable);

};

FIN03003M00Component.prototype.onCashNtFlow = function() {
    console.log("<<<<<< onCashOutCome() start >>>>> ")
    overlay.show();
    finService.getCashNtFlow(finCom.alyid, finCom.stacYy, qsrtInfo, FIN03003M00.setCashNtFlow);
};

FIN03003M00Component.prototype.setCashNtFlow = function(result){

    if (result != null) {

         var res = JSON.parse(result);

        if (res.success) {
            overlay.hide();
            var data = res.data.result;

            cashNtFlowList = data;

            if (cashNtFlowList != null && cashNtFlowList != undefined) {
                cashNtFlowLength = 1;
            }
            
            cashNtFlowList = data['cashNtFlow'];
            
            if ( cashNtFlowLength > 0 ) {
                FIN03003M00.CashNtFlowView();
            }

            var dataSet = [];

            for (var i =0; i < 12; i++) {
                dataSet.push({
                "elapsed":cashNtFlowList[i].month,
                "value":Number(cashNtFlowList[i].cashNtFlowAmt)
                });
            }

            linechart1.setData(dataSet);

            linechart1.redraw();

            $(window).trigger('resize');

        } else {
            bootbox.alert(res.msg);
            overlay.hide();
        }

    } else {
        overlay.hide();
    }   

};

FIN03003M00Component.prototype.CashNtFlowView = function() {

    var cashNtFlowTable = '';
    cashNtFlowTable += '<div class="panel-body" *ngIf="cashNtFlowLength > 0">															';			
    cashNtFlowTable += '    <!--순현금흐름테이블-->                                                                                           ';
    cashNtFlowTable += '    <table class="table table-condensed">                                                                      ';
    cashNtFlowTable += '        <thead>                                                                                                ';
    cashNtFlowTable += '            <tr class="active text-lg">                                                                        ';
    cashNtFlowTable += '                <th>월</th>                                                                                     ';
    cashNtFlowTable += '                <th>'+cashNtFlowList[0].month+'</th>                                                           ';
    cashNtFlowTable += '                <th>'+cashNtFlowList[1].month+'</th>                                                           ';
    cashNtFlowTable += '                <th>'+cashNtFlowList[2].month+'</th>                                                           ';
    cashNtFlowTable += '                <th>'+cashNtFlowList[3].month+'</th>                                                           ';
    cashNtFlowTable += '                <th>'+cashNtFlowList[4].month+'</th>                                                           ';
    cashNtFlowTable += '                <th>'+cashNtFlowList[5].month+'</th>                                                           ';
    cashNtFlowTable += '            </tr>                                                                                              ';
    cashNtFlowTable += '        </thead>                                                                                               ';
    cashNtFlowTable += '        <tbody>                                                                                                ';
    cashNtFlowTable += '            <tr>                                                                                               ';
    cashNtFlowTable += '                <td>매출액</td>                                                                                   ';
    cashNtFlowTable += '                <th>'+FIN03003M00.onNumberWithCommas(cashNtFlowList[0].salesAmt)+'</th>                                    ';
    cashNtFlowTable += '                <th>'+FIN03003M00.onNumberWithCommas(cashNtFlowList[1].salesAmt)+'</th>                                    ';
    cashNtFlowTable += '                <th>'+FIN03003M00.onNumberWithCommas(cashNtFlowList[2].salesAmt)+'</th>                                    ';
    cashNtFlowTable += '                <th>'+FIN03003M00.onNumberWithCommas(cashNtFlowList[3].salesAmt)+'</th>                                    ';
    cashNtFlowTable += '                <th>'+FIN03003M00.onNumberWithCommas(cashNtFlowList[4].salesAmt)+'</th>                                    ';
    cashNtFlowTable += '                <th>'+FIN03003M00.onNumberWithCommas(cashNtFlowList[5].salesAmt)+'</th>                                    ';
    cashNtFlowTable += '            </tr>                                                                                              ';
    cashNtFlowTable += '            <tr>                                                                                               ';
    cashNtFlowTable += '                <td>현금수입의 합계</td>                                                                             ';
    cashNtFlowTable += '                <th>'+FIN03003M00.onNumberWithCommas(cashNtFlowList[0].cashIncomeTotalAmt)+'</th>                          ';
    cashNtFlowTable += '                <th>'+FIN03003M00.onNumberWithCommas(cashNtFlowList[1].cashIncomeTotalAmt)+'</th>                          ';
    cashNtFlowTable += '                <th>'+FIN03003M00.onNumberWithCommas(cashNtFlowList[2].cashIncomeTotalAmt)+'</th>                          ';
    cashNtFlowTable += '                <th>'+FIN03003M00.onNumberWithCommas(cashNtFlowList[3].cashIncomeTotalAmt)+'</th>                          ';
    cashNtFlowTable += '                <th>'+FIN03003M00.onNumberWithCommas(cashNtFlowList[4].cashIncomeTotalAmt)+'</th>                          ';
    cashNtFlowTable += '                <th>'+FIN03003M00.onNumberWithCommas(cashNtFlowList[5].cashIncomeTotalAmt)+'</th>                          ';
    cashNtFlowTable += '            </tr>                                                                                              ';
    cashNtFlowTable += '            <tr>                                                                                               ';
    cashNtFlowTable += '                <td class="active text-lg" colspan="13">*현금지출의 추정치</td>                                       ';
    cashNtFlowTable += '            </tr>                                                                                              ';
    cashNtFlowTable += '            <tr>                                                                                               ';
    cashNtFlowTable += '                <td>매출원가</td>                                                                                  ';
    cashNtFlowTable += '                <th>'+FIN03003M00.onNumberWithCommas(cashNtFlowList[0].salesCostAmt)+'</th>                                ';
    cashNtFlowTable += '                <th>'+FIN03003M00.onNumberWithCommas(cashNtFlowList[1].salesCostAmt)+'</th>                                ';
    cashNtFlowTable += '                <th>'+FIN03003M00.onNumberWithCommas(cashNtFlowList[2].salesCostAmt)+'</th>                                ';
    cashNtFlowTable += '                <th>'+FIN03003M00.onNumberWithCommas(cashNtFlowList[3].salesCostAmt)+'</th>                                ';
    cashNtFlowTable += '                <th>'+FIN03003M00.onNumberWithCommas(cashNtFlowList[4].salesCostAmt)+'</th>                                ';
    cashNtFlowTable += '                <th>'+FIN03003M00.onNumberWithCommas(cashNtFlowList[5].salesCostAmt)+'</th>                                ';
    cashNtFlowTable += '            </tr>                                                                                              ';
    cashNtFlowTable += '            <tr>                                                                                               ';
    cashNtFlowTable += '                <td>판매비와 관리비</td>                                                                             ';
    cashNtFlowTable += '                <th>'+FIN03003M00.onNumberWithCommas(cashNtFlowList[0].mnepAmt)+'</th>                                     ';
    cashNtFlowTable += '                <th>'+FIN03003M00.onNumberWithCommas(cashNtFlowList[1].mnepAmt)+'</th>                                     ';
    cashNtFlowTable += '                <th>'+FIN03003M00.onNumberWithCommas(cashNtFlowList[2].mnepAmt)+'</th>                                     ';
    cashNtFlowTable += '                <th>'+FIN03003M00.onNumberWithCommas(cashNtFlowList[3].mnepAmt)+'</th>                                     ';
    cashNtFlowTable += '                <th>'+FIN03003M00.onNumberWithCommas(cashNtFlowList[4].mnepAmt)+'</th>                                     ';
    cashNtFlowTable += '                <th>'+FIN03003M00.onNumberWithCommas(cashNtFlowList[5].mnepAmt)+'</th>                                     ';
    cashNtFlowTable += '            </tr>                                                                                              ';
    cashNtFlowTable += '            <tr>                                                                                               ';
    cashNtFlowTable += '                <td>이자비용</td>                                                                                  ';
    cashNtFlowTable += '                <th>'+FIN03003M00.onNumberWithCommas(cashNtFlowList[0].inepAmt)+'</th>                                     ';
    cashNtFlowTable += '                <th>'+FIN03003M00.onNumberWithCommas(cashNtFlowList[1].inepAmt)+'</th>                                     ';
    cashNtFlowTable += '                <th>'+FIN03003M00.onNumberWithCommas(cashNtFlowList[2].inepAmt)+'</th>                                     ';
    cashNtFlowTable += '                <th>'+FIN03003M00.onNumberWithCommas(cashNtFlowList[3].inepAmt)+'</th>                                     ';
    cashNtFlowTable += '                <th>'+FIN03003M00.onNumberWithCommas(cashNtFlowList[4].inepAmt)+'</th>                                     ';
    cashNtFlowTable += '                <th>'+FIN03003M00.onNumberWithCommas(cashNtFlowList[5].inepAmt)+'</th>                                     ';
    cashNtFlowTable += '            </tr>                                                                                              ';
    cashNtFlowTable += '            <tr>                                                                                               ';
    cashNtFlowTable += '                <td>법인세</td>                                                                                   ';
    cashNtFlowTable += '                <th>'+FIN03003M00.onNumberWithCommas(cashNtFlowList[0].crtxAmt)+'</th>                                     ';
    cashNtFlowTable += '                <th>'+FIN03003M00.onNumberWithCommas(cashNtFlowList[1].crtxAmt)+'</th>                                     ';
    cashNtFlowTable += '                <th>'+FIN03003M00.onNumberWithCommas(cashNtFlowList[2].crtxAmt)+'</th>                                     ';
    cashNtFlowTable += '                <th>'+FIN03003M00.onNumberWithCommas(cashNtFlowList[3].crtxAmt)+'</th>                                     ';
    cashNtFlowTable += '                <th>'+FIN03003M00.onNumberWithCommas(cashNtFlowList[4].crtxAmt)+'</th>                                     ';
    cashNtFlowTable += '                <th>'+FIN03003M00.onNumberWithCommas(cashNtFlowList[5].crtxAmt)+'</th>                                     ';
    cashNtFlowTable += '            </tr>                                                                                              ';
    cashNtFlowTable += '            <tr>                                                                                               ';
    cashNtFlowTable += '                <td>현금배당</td>                                                                                  ';
    cashNtFlowTable += '                <th>'+FIN03003M00.onNumberWithCommas(cashNtFlowList[0].cashDvdnAmt)+'</th>                                 ';
    cashNtFlowTable += '                <th>'+FIN03003M00.onNumberWithCommas(cashNtFlowList[1].cashDvdnAmt)+'</th>                                 ';
    cashNtFlowTable += '                <th>'+FIN03003M00.onNumberWithCommas(cashNtFlowList[2].cashDvdnAmt)+'</th>                                 ';
    cashNtFlowTable += '                <th>'+FIN03003M00.onNumberWithCommas(cashNtFlowList[3].cashDvdnAmt)+'</th>                                 ';
    cashNtFlowTable += '                <th>'+FIN03003M00.onNumberWithCommas(cashNtFlowList[4].cashDvdnAmt)+'</th>                                 ';
    cashNtFlowTable += '                <th>'+FIN03003M00.onNumberWithCommas(cashNtFlowList[5].cashDvdnAmt)+'</th>                                 ';
    cashNtFlowTable += '            </tr>                                                                                              ';
    cashNtFlowTable += '            <tr class="active">                                                                                ';
    cashNtFlowTable += '                <td>지출액의 합계</td>                                                                              ';
    cashNtFlowTable += '                <th>'+FIN03003M00.onNumberWithCommas(cashNtFlowList[0].cashOutComeTotalAmt)+'</th>                         ';
    cashNtFlowTable += '                <th>'+FIN03003M00.onNumberWithCommas(cashNtFlowList[1].cashOutComeTotalAmt)+'</th>                         ';
    cashNtFlowTable += '                <th>'+FIN03003M00.onNumberWithCommas(cashNtFlowList[2].cashOutComeTotalAmt)+'</th>                         ';
    cashNtFlowTable += '                <th>'+FIN03003M00.onNumberWithCommas(cashNtFlowList[3].cashOutComeTotalAmt)+'</th>                         ';
    cashNtFlowTable += '                <th>'+FIN03003M00.onNumberWithCommas(cashNtFlowList[4].cashOutComeTotalAmt)+'</th>                         ';
    cashNtFlowTable += '                <th>'+FIN03003M00.onNumberWithCommas(cashNtFlowList[5].cashOutComeTotalAmt)+'</th>                         ';
    cashNtFlowTable += '            </tr>                                                                                              ';
    cashNtFlowTable += '            <tr>                                                                                               ';
    cashNtFlowTable += '                <td colspan="13">&nbsp;</td>                                                                   ';
    cashNtFlowTable += '            </tr>                                                                                              ';
    cashNtFlowTable += '            <tr>                                                                                               ';
    cashNtFlowTable += '                <td colspan="13" class="active text-lg">*순현금흐름</td>                                           ';
    cashNtFlowTable += '            </tr>                                                                                              ';
    cashNtFlowTable += '            <tr>                                                                                               ';
    cashNtFlowTable += '                <td>순현금흐름</td>                                                                                ';
    cashNtFlowTable += '                <th>'+FIN03003M00.onNumberWithCommas(cashNtFlowList[0].cashNtFlowAmt)+'</th>                               ';
    cashNtFlowTable += '                <th>'+FIN03003M00.onNumberWithCommas(cashNtFlowList[1].cashNtFlowAmt)+'</th>                               ';
    cashNtFlowTable += '                <th>'+FIN03003M00.onNumberWithCommas(cashNtFlowList[2].cashNtFlowAmt)+'</th>                               ';
    cashNtFlowTable += '                <th>'+FIN03003M00.onNumberWithCommas(cashNtFlowList[3].cashNtFlowAmt)+'</th>                               ';
    cashNtFlowTable += '                <th>'+FIN03003M00.onNumberWithCommas(cashNtFlowList[4].cashNtFlowAmt)+'</th>                               ';
    cashNtFlowTable += '                <th>'+FIN03003M00.onNumberWithCommas(cashNtFlowList[5].cashNtFlowAmt)+'</th>                               ';
    cashNtFlowTable += '            </tr>                                                                                              ';
    cashNtFlowTable += '        </tbody>                                                                                               ';
    cashNtFlowTable += '    </table>                                                                                                   ';
    cashNtFlowTable += '    <!--//순현금흐름테이블-->                                                                                         ';
    cashNtFlowTable += '    <br/>                                                                                                      ';
    cashNtFlowTable += '    <!--순현금흐름테이블-->                                                                                           ';
    cashNtFlowTable += '    <table class="table table-condensed">                                                                      ';
    cashNtFlowTable += '        <thead>                                                                                                ';
    cashNtFlowTable += '            <tr class="active text-lg">                                                                        ';
    cashNtFlowTable += '                <th>월</th>                                                                                     ';
    cashNtFlowTable += '                <th>'+cashNtFlowList[6].month+'</th>                                                           ';
    cashNtFlowTable += '                <th>'+cashNtFlowList[7].month+'</th>                                                           ';
    cashNtFlowTable += '                <th>'+cashNtFlowList[8].month+'</th>                                                           ';
    cashNtFlowTable += '                <th>'+cashNtFlowList[9].month+'</th>                                                           ';
    cashNtFlowTable += '                <th>'+cashNtFlowList[10].month+'</th>                                                          ';
    cashNtFlowTable += '                <th>'+cashNtFlowList[11].month+'</th>                                                          ';
    cashNtFlowTable += '            </tr>                                                                                              ';
    cashNtFlowTable += '        </thead>                                                                                               ';
    cashNtFlowTable += '        <tbody>                                                                                                ';
    cashNtFlowTable += '            <tr>                                                                                               ';
    cashNtFlowTable += '                <td>매출액</td>                                                                                   ';
    cashNtFlowTable += '                <th>'+FIN03003M00.onNumberWithCommas(cashNtFlowList[6].salesAmt)+'</th>                                    ';
    cashNtFlowTable += '                <th>'+FIN03003M00.onNumberWithCommas(cashNtFlowList[7].salesAmt)+'</th>                                    ';
    cashNtFlowTable += '                <th>'+FIN03003M00.onNumberWithCommas(cashNtFlowList[8].salesAmt)+'</th>                                    ';
    cashNtFlowTable += '                <th>'+FIN03003M00.onNumberWithCommas(cashNtFlowList[9].salesAmt)+'</th>                                    ';
    cashNtFlowTable += '                <th>'+FIN03003M00.onNumberWithCommas(cashNtFlowList[10].salesAmt)+'</th>                                   ';
    cashNtFlowTable += '                <th>'+FIN03003M00.onNumberWithCommas(cashNtFlowList[11].salesAmt)+'</th>                                   ';
    cashNtFlowTable += '            </tr>                                                                                              ';
    cashNtFlowTable += '            <tr>                                                                                               ';
    cashNtFlowTable += '                <td>현금수입의 합계</td>                                                                             ';
    cashNtFlowTable += '                <th>'+FIN03003M00.onNumberWithCommas(cashNtFlowList[6].cashIncomeTotalAmt)+'</th>                          ';
    cashNtFlowTable += '                <th>'+FIN03003M00.onNumberWithCommas(cashNtFlowList[7].cashIncomeTotalAmt)+'</th>                          ';
    cashNtFlowTable += '                <th>'+FIN03003M00.onNumberWithCommas(cashNtFlowList[8].cashIncomeTotalAmt)+'</th>                          ';
    cashNtFlowTable += '                <th>'+FIN03003M00.onNumberWithCommas(cashNtFlowList[9].cashIncomeTotalAmt)+'</th>                          ';
    cashNtFlowTable += '                <th>'+FIN03003M00.onNumberWithCommas(cashNtFlowList[10].cashIncomeTotalAmt)+'</th>                         ';
    cashNtFlowTable += '                <th>'+FIN03003M00.onNumberWithCommas(cashNtFlowList[11].cashIncomeTotalAmt)+'</th>                         ';
    cashNtFlowTable += '            </tr>                                                                                              ';
    cashNtFlowTable += '            <tr>                                                                                               ';
    cashNtFlowTable += '                <td class="active text-lg" colspan="13">*현금지출의 추정치</td>                                       ';
    cashNtFlowTable += '            </tr>                                                                                              ';
    cashNtFlowTable += '            <tr>                                                                                               ';
    cashNtFlowTable += '                <td>매출원가</td>                                                                                  ';
    cashNtFlowTable += '                <th>'+FIN03003M00.onNumberWithCommas(cashNtFlowList[6].salesCostAmt)+'</th>                                ';
    cashNtFlowTable += '                <th>'+FIN03003M00.onNumberWithCommas(cashNtFlowList[7].salesCostAmt)+'</th>                                ';
    cashNtFlowTable += '                <th>'+FIN03003M00.onNumberWithCommas(cashNtFlowList[8].salesCostAmt)+'</th>                                ';
    cashNtFlowTable += '                <th>'+FIN03003M00.onNumberWithCommas(cashNtFlowList[9].salesCostAmt)+'</th>                                ';
    cashNtFlowTable += '                <th>'+FIN03003M00.onNumberWithCommas(cashNtFlowList[10].salesCostAmt)+'</th>                               ';
    cashNtFlowTable += '                <th>'+FIN03003M00.onNumberWithCommas(cashNtFlowList[11].salesCostAmt)+'</th>                               ';
    cashNtFlowTable += '            </tr>                                                                                              ';
    cashNtFlowTable += '            <tr>                                                                                               ';
    cashNtFlowTable += '                <td>판매비와 관리비</td>                                                                             ';
    cashNtFlowTable += '                <th>'+FIN03003M00.onNumberWithCommas(cashNtFlowList[6].mnepAmt)+'</th>                                     ';
    cashNtFlowTable += '                <th>'+FIN03003M00.onNumberWithCommas(cashNtFlowList[7].mnepAmt)+'</th>                                     ';
    cashNtFlowTable += '                <th>'+FIN03003M00.onNumberWithCommas(cashNtFlowList[8].mnepAmt)+'</th>                                     ';
    cashNtFlowTable += '                <th>'+FIN03003M00.onNumberWithCommas(cashNtFlowList[9].mnepAmt)+'</th>                                     ';
    cashNtFlowTable += '                <th>'+FIN03003M00.onNumberWithCommas(cashNtFlowList[10].mnepAmt)+'</th>                                    ';
    cashNtFlowTable += '                <th>'+FIN03003M00.onNumberWithCommas(cashNtFlowList[11].mnepAmt)+'</th>                                    ';
    cashNtFlowTable += '            </tr>                                                                                              ';
    cashNtFlowTable += '            <tr>                                                                                               ';
    cashNtFlowTable += '                <td>이자비용</td>                                                                                  ';
    cashNtFlowTable += '                <th>'+FIN03003M00.onNumberWithCommas(cashNtFlowList[6].inepAmt)+'</th>                                     ';
    cashNtFlowTable += '                <th>'+FIN03003M00.onNumberWithCommas(cashNtFlowList[7].inepAmt)+'</th>                                     ';
    cashNtFlowTable += '                <th>'+FIN03003M00.onNumberWithCommas(cashNtFlowList[8].inepAmt)+'</th>                                     ';
    cashNtFlowTable += '                <th>'+FIN03003M00.onNumberWithCommas(cashNtFlowList[9].inepAmt)+'</th>                                     ';
    cashNtFlowTable += '                <th>'+FIN03003M00.onNumberWithCommas(cashNtFlowList[10].inepAmt)+'</th>                                    ';
    cashNtFlowTable += '                <th>'+FIN03003M00.onNumberWithCommas(cashNtFlowList[11].inepAmt)+'</th>                                    ';
    cashNtFlowTable += '            </tr>                                                                                              ';
    cashNtFlowTable += '            <tr>                                                                                               ';
    cashNtFlowTable += '                <td>법인세</td>                                                                                   ';
    cashNtFlowTable += '                <th>'+FIN03003M00.onNumberWithCommas(cashNtFlowList[6].crtxAmt)+'</th>                                     ';
    cashNtFlowTable += '                <th>'+FIN03003M00.onNumberWithCommas(cashNtFlowList[7].crtxAmt)+'</th>                                     ';
    cashNtFlowTable += '                <th>'+FIN03003M00.onNumberWithCommas(cashNtFlowList[8].crtxAmt)+'</th>                                     ';
    cashNtFlowTable += '                <th>'+FIN03003M00.onNumberWithCommas(cashNtFlowList[9].crtxAmt)+'</th>                                     ';
    cashNtFlowTable += '                <th>'+FIN03003M00.onNumberWithCommas(cashNtFlowList[10].crtxAmt)+'</th>                                    ';
    cashNtFlowTable += '                <th>'+FIN03003M00.onNumberWithCommas(cashNtFlowList[11].crtxAmt)+'</th>                                    ';
    cashNtFlowTable += '            </tr>                                                                                              ';
    cashNtFlowTable += '            <tr>                                                                                               ';
    cashNtFlowTable += '                <td>현금배당</td>                                                                                  ';
    cashNtFlowTable += '                <th>'+FIN03003M00.onNumberWithCommas(cashNtFlowList[6].cashDvdnAmt)+'</th>                                 ';
    cashNtFlowTable += '                <th>'+FIN03003M00.onNumberWithCommas(cashNtFlowList[7].cashDvdnAmt)+'</th>                                 ';
    cashNtFlowTable += '                <th>'+FIN03003M00.onNumberWithCommas(cashNtFlowList[8].cashDvdnAmt)+'</th>                                 ';
    cashNtFlowTable += '                <th>'+FIN03003M00.onNumberWithCommas(cashNtFlowList[9].cashDvdnAmt)+'</th>                                 ';
    cashNtFlowTable += '                <th>'+FIN03003M00.onNumberWithCommas(cashNtFlowList[10].cashDvdnAmt)+'</th>                                ';
    cashNtFlowTable += '                <th>'+FIN03003M00.onNumberWithCommas(cashNtFlowList[11].cashDvdnAmt)+'</th>                                ';
    cashNtFlowTable += '            </tr>                                                                                              ';
    cashNtFlowTable += '            <tr class="active">                                                                                ';
    cashNtFlowTable += '                <td>지출액의 합계</td>                                                                              ';
    cashNtFlowTable += '                <th>'+FIN03003M00.onNumberWithCommas(cashNtFlowList[6].cashOutComeTotalAmt)+'</th>                         ';
    cashNtFlowTable += '                <th>'+FIN03003M00.onNumberWithCommas(cashNtFlowList[7].cashOutComeTotalAmt)+'</th>                         ';
    cashNtFlowTable += '                <th>'+FIN03003M00.onNumberWithCommas(cashNtFlowList[8].cashOutComeTotalAmt)+'</th>                         ';
    cashNtFlowTable += '                <th>'+FIN03003M00.onNumberWithCommas(cashNtFlowList[9].cashOutComeTotalAmt)+'</th>                         ';
    cashNtFlowTable += '                <th>'+FIN03003M00.onNumberWithCommas(cashNtFlowList[10].cashOutComeTotalAmt)+'</th>                        ';
    cashNtFlowTable += '                <th>'+FIN03003M00.onNumberWithCommas(cashNtFlowList[11].cashOutComeTotalAmt)+'</th>                        ';
    cashNtFlowTable += '            </tr>                                                                                              ';
    cashNtFlowTable += '            <tr>                                                                                               ';
    cashNtFlowTable += '                <td colspan="13">&nbsp;</td>                                                                   ';
    cashNtFlowTable += '            </tr>                                                                                              ';
    cashNtFlowTable += '            <tr>                                                                                               ';
    cashNtFlowTable += '                <td colspan="13" class="active text-lg">*순현금흐름</td>                                           ';
    cashNtFlowTable += '            </tr>                                                                                              ';
    cashNtFlowTable += '            <tr>                                                                                               ';
    cashNtFlowTable += '                <td>순현금흐름</td>                                                                                ';
    cashNtFlowTable += '                <th>'+FIN03003M00.onNumberWithCommas(cashNtFlowList[6].cashNtFlowAmt)+'</th>                               ';
    cashNtFlowTable += '                <th>'+FIN03003M00.onNumberWithCommas(cashNtFlowList[7].cashNtFlowAmt)+'</th>                               ';
    cashNtFlowTable += '                <th>'+FIN03003M00.onNumberWithCommas(cashNtFlowList[8].cashNtFlowAmt)+'</th>                               ';
    cashNtFlowTable += '                <th>'+FIN03003M00.onNumberWithCommas(cashNtFlowList[9].cashNtFlowAmt)+'</th>                               ';
    cashNtFlowTable += '                <th>'+FIN03003M00.onNumberWithCommas(cashNtFlowList[10].cashNtFlowAmt)+'</th>                              ';
    cashNtFlowTable += '                <th>'+FIN03003M00.onNumberWithCommas(cashNtFlowList[11].cashNtFlowAmt)+'</th>                              ';
    cashNtFlowTable += '            </tr>                                                                                              ';
    cashNtFlowTable += '        </tbody>                                                                                               ';
    cashNtFlowTable += '    </table>                                                                                                   ';
    cashNtFlowTable += '    <!--//순현금흐름테이블-->                                                                                         ';
    cashNtFlowTable += '                                                                                                               ';
    cashNtFlowTable += '</div>                                                                                                         ';

    $("#cashNtFlowTable").html(cashNtFlowTable);

};

FIN03003M00Component.prototype.onCashBdgtAmt = function() {
    overlay.show();
    finService.getCashBdgtAmt(finCom.alyid, finCom.stacYy, qsrtInfo, FIN03003M00.setCashBdgtAmt)
}

FIN03003M00Component.prototype.setCashBdgtAmt = function(result) {

    if (result != null) {

         var res = JSON.parse(result);

        if (res.success) {
            overlay.hide();
            var data = res.data.result;

            cashBdgtAmtList = data;

            if (cashBdgtAmtList != null && cashBdgtAmtList != undefined) {
                cashBdgtAmtLength = 1;
            }
            
            cashBdgtAmtList = data['cashBdgt'];
            
            if ( cashBdgtAmtLength > 0 ) {
                FIN03003M00.CashBdgtAmtView();
            }

        } else {
            bootbox.alert(res.msg);
            overlay.hide();
        }

    } else {
        overlay.hide();
    }

};

FIN03003M00Component.prototype.CashBdgtAmtView = function() {

    var cashBdgtAmtTable = '';

    cashBdgtAmtTable += '<div class="panel-body">																				';
    cashBdgtAmtTable += '    <!--자금조달및투자액테이블-->                                                                                ';
    cashBdgtAmtTable += '    <table class="table table-condensed">                                                              ';
    cashBdgtAmtTable += '        <thead>                                                                                        ';
    cashBdgtAmtTable += '            <tr class="active text-lg">                                                                ';
    cashBdgtAmtTable += '                <th>월</th>                                                                             ';
    cashBdgtAmtTable += '                <th>'+cashBdgtAmtList[0].month+'</th>                                                  ';
    cashBdgtAmtTable += '                <th>'+cashBdgtAmtList[1].month+'</th>                                                  ';
    cashBdgtAmtTable += '                <th>'+cashBdgtAmtList[2].month+'</th>                                                  ';
    cashBdgtAmtTable += '                <th>'+cashBdgtAmtList[3].month+'</th>                                                  ';
    cashBdgtAmtTable += '                <th>'+cashBdgtAmtList[4].month+'</th>                                                  ';
    cashBdgtAmtTable += '                <th>'+cashBdgtAmtList[5].month+'</th>                                                  ';
    cashBdgtAmtTable += '            </tr>                                                                                      ';
    cashBdgtAmtTable += '        </thead>                                                                                       ';
    cashBdgtAmtTable += '        <tbody>                                                                                        ';
    cashBdgtAmtTable += '            <tr>                                                                                       ';
    cashBdgtAmtTable += '                <td>순현금흐름</td>                                                                        ';
    cashBdgtAmtTable += '                <th>'+FIN03003M00.onNumberWithCommas(cashBdgtAmtList[0].cashNtFlowAmt)+'</th>                      ';
    cashBdgtAmtTable += '                <th>'+FIN03003M00.onNumberWithCommas(cashBdgtAmtList[1].cashNtFlowAmt)+'</th>                      ';
    cashBdgtAmtTable += '                <th>'+FIN03003M00.onNumberWithCommas(cashBdgtAmtList[2].cashNtFlowAmt)+'</th>                      ';
    cashBdgtAmtTable += '                <th>'+FIN03003M00.onNumberWithCommas(cashBdgtAmtList[3].cashNtFlowAmt)+'</th>                      ';
    cashBdgtAmtTable += '                <th>'+FIN03003M00.onNumberWithCommas(cashBdgtAmtList[4].cashNtFlowAmt)+'</th>                      ';
    cashBdgtAmtTable += '                <th>'+FIN03003M00.onNumberWithCommas(cashBdgtAmtList[5].cashNtFlowAmt)+'</th>                      ';
    cashBdgtAmtTable += '            </tr>                                                                                      ';
    cashBdgtAmtTable += '            <tr>                                                                                       ';
    cashBdgtAmtTable += '                <td>최소현금 보유액</td>                                                                     ';
    cashBdgtAmtTable += '                <th>'+FIN03003M00.onNumberWithCommas(cashBdgtAmtList[0].mnmmCashHoldAmt)+'</th>                    ';
    cashBdgtAmtTable += '                <th>'+FIN03003M00.onNumberWithCommas(cashBdgtAmtList[1].mnmmCashHoldAmt)+'</th>                    ';
    cashBdgtAmtTable += '                <th>'+FIN03003M00.onNumberWithCommas(cashBdgtAmtList[2].mnmmCashHoldAmt)+'</th>                    ';
    cashBdgtAmtTable += '                <th>'+FIN03003M00.onNumberWithCommas(cashBdgtAmtList[3].mnmmCashHoldAmt)+'</th>                    ';
    cashBdgtAmtTable += '                <th>'+FIN03003M00.onNumberWithCommas(cashBdgtAmtList[4].mnmmCashHoldAmt)+'</th>                    ';
    cashBdgtAmtTable += '                <th>'+FIN03003M00.onNumberWithCommas(cashBdgtAmtList[5].mnmmCashHoldAmt)+'</th>                    ';
    cashBdgtAmtTable += '            </tr>                                                                                      ';
    cashBdgtAmtTable += '            <tr>                                                                                       ';
    cashBdgtAmtTable += '                <td>총 현금잔고 예측치</td>                                                                   ';
    cashBdgtAmtTable += '                <th>'+FIN03003M00.onNumberWithCommas(cashBdgtAmtList[0].ttchBalnFrcsAmt)+'</th>                    ';
    cashBdgtAmtTable += '                <th>'+FIN03003M00.onNumberWithCommas(cashBdgtAmtList[1].ttchBalnFrcsAmt)+'</th>                    ';
    cashBdgtAmtTable += '                <th>'+FIN03003M00.onNumberWithCommas(cashBdgtAmtList[2].ttchBalnFrcsAmt)+'</th>                    ';
    cashBdgtAmtTable += '                <th>'+FIN03003M00.onNumberWithCommas(cashBdgtAmtList[3].ttchBalnFrcsAmt)+'</th>                    ';
    cashBdgtAmtTable += '                <th>'+FIN03003M00.onNumberWithCommas(cashBdgtAmtList[4].ttchBalnFrcsAmt)+'</th>                    ';
    cashBdgtAmtTable += '                <th>'+FIN03003M00.onNumberWithCommas(cashBdgtAmtList[5].ttchBalnFrcsAmt)+'</th>                    ';
    cashBdgtAmtTable += '            </tr>                                                                                      ';
    cashBdgtAmtTable += '            <tr>                                                                                       ';
    cashBdgtAmtTable += '                <td colspan="7">&nbsp;</td>                                                            ';
    cashBdgtAmtTable += '            </tr>                                                                                      ';
    cashBdgtAmtTable += '            <tr>                                                                                       ';
    cashBdgtAmtTable += '                <td>부족액 충당 후 여유자금 누적액</td>                                                           ';
    cashBdgtAmtTable += '                <th>'+FIN03003M00.onNumberWithCommas(cashBdgtAmtList[0].lcatFilafSmexFndsAcmlAmt)+'</th>           ';
    cashBdgtAmtTable += '                <th>'+FIN03003M00.onNumberWithCommas(cashBdgtAmtList[1].lcatFilafSmexFndsAcmlAmt)+'</th>           ';
    cashBdgtAmtTable += '                <th>'+FIN03003M00.onNumberWithCommas(cashBdgtAmtList[2].lcatFilafSmexFndsAcmlAmt)+'</th>           ';
    cashBdgtAmtTable += '                <th>'+FIN03003M00.onNumberWithCommas(cashBdgtAmtList[3].lcatFilafSmexFndsAcmlAmt)+'</th>           ';
    cashBdgtAmtTable += '                <th>'+FIN03003M00.onNumberWithCommas(cashBdgtAmtList[4].lcatFilafSmexFndsAcmlAmt)+'</th>           ';
    cashBdgtAmtTable += '                <th>'+FIN03003M00.onNumberWithCommas(cashBdgtAmtList[5].lcatFilafSmexFndsAcmlAmt)+'</th>           ';
    cashBdgtAmtTable += '            </tr>                                                                                      ';
    cashBdgtAmtTable += '            <tr>                                                                                       ';
    cashBdgtAmtTable += '                <td>여유액 차감 후 부족자금 누적액</td>                                                           ';
    cashBdgtAmtTable += '                <th>'+FIN03003M00.onNumberWithCommas(cashBdgtAmtList[0].smamtSbafInsfFndsAcmlAmt)+'</th>           ';
    cashBdgtAmtTable += '                <th>'+FIN03003M00.onNumberWithCommas(cashBdgtAmtList[1].smamtSbafInsfFndsAcmlAmt)+'</th>           ';
    cashBdgtAmtTable += '                <th>'+FIN03003M00.onNumberWithCommas(cashBdgtAmtList[2].smamtSbafInsfFndsAcmlAmt)+'</th>           ';
    cashBdgtAmtTable += '                <th>'+FIN03003M00.onNumberWithCommas(cashBdgtAmtList[3].smamtSbafInsfFndsAcmlAmt)+'</th>           ';
    cashBdgtAmtTable += '                <th>'+FIN03003M00.onNumberWithCommas(cashBdgtAmtList[4].smamtSbafInsfFndsAcmlAmt)+'</th>           ';
    cashBdgtAmtTable += '                <th>'+FIN03003M00.onNumberWithCommas(cashBdgtAmtList[5].smamtSbafInsfFndsAcmlAmt)+'</th>           ';
    cashBdgtAmtTable += '            </tr>                                                                                      ';
    cashBdgtAmtTable += '            <tr>                                                                                       ';
    cashBdgtAmtTable += '                <td>월별 순자금조달액 및 (여유액)</td>                                                            ';
    cashBdgtAmtTable += '                <th>'+FIN03003M00.onNumberWithCommas(cashBdgtAmtList[0].pmnhNtFndsPramOverSmexAmt)+'</th>          ';
    cashBdgtAmtTable += '                <th>'+FIN03003M00.onNumberWithCommas(cashBdgtAmtList[1].pmnhNtFndsPramOverSmexAmt)+'</th>          ';
    cashBdgtAmtTable += '                <th>'+FIN03003M00.onNumberWithCommas(cashBdgtAmtList[2].pmnhNtFndsPramOverSmexAmt)+'</th>          ';
    cashBdgtAmtTable += '                <th>'+FIN03003M00.onNumberWithCommas(cashBdgtAmtList[3].pmnhNtFndsPramOverSmexAmt)+'</th>          ';
    cashBdgtAmtTable += '                <th>'+FIN03003M00.onNumberWithCommas(cashBdgtAmtList[4].pmnhNtFndsPramOverSmexAmt)+'</th>          ';
    cashBdgtAmtTable += '                <th>'+FIN03003M00.onNumberWithCommas(cashBdgtAmtList[5].pmnhNtFndsPramOverSmexAmt)+'</th>          ';
    cashBdgtAmtTable += '            </tr>                                                                                      ';
    cashBdgtAmtTable += '            <tr>                                                                                       ';
    cashBdgtAmtTable += '                <td colspan="7">&nbsp;</td>                                                            ';
    cashBdgtAmtTable += '            </tr>                                                                                      ';
    cashBdgtAmtTable += '            <tr class="active">                                                                        ';
    cashBdgtAmtTable += '                <td>최종여유액</td>                                                                        ';
    cashBdgtAmtTable += '                <th>'+FIN03003M00.onNumberWithCommas(cashBdgtAmtList[0].lastSmexAmt)+'</th>                        ';
    cashBdgtAmtTable += '                <th>'+FIN03003M00.onNumberWithCommas(cashBdgtAmtList[1].lastSmexAmt)+'</th>                        ';
    cashBdgtAmtTable += '                <th>'+FIN03003M00.onNumberWithCommas(cashBdgtAmtList[2].lastSmexAmt)+'</th>                        ';
    cashBdgtAmtTable += '                <th>'+FIN03003M00.onNumberWithCommas(cashBdgtAmtList[3].lastSmexAmt)+'</th>                        ';
    cashBdgtAmtTable += '                <th>'+FIN03003M00.onNumberWithCommas(cashBdgtAmtList[4].lastSmexAmt)+'</th>                        ';
    cashBdgtAmtTable += '                <th>'+FIN03003M00.onNumberWithCommas(cashBdgtAmtList[5].lastSmexAmt)+'</th>                        ';
    cashBdgtAmtTable += '            </tr>                                                                                      ';
    cashBdgtAmtTable += '            <tr class="active">                                                                        ';
    cashBdgtAmtTable += '                <td>최종부족액</td>                                                                        ';
    cashBdgtAmtTable += '                <th>'+FIN03003M00.onNumberWithCommas(cashBdgtAmtList[0].lastInsfAmt)+'</th>                        ';
    cashBdgtAmtTable += '                <th>'+FIN03003M00.onNumberWithCommas(cashBdgtAmtList[1].lastInsfAmt)+'</th>                        ';
    cashBdgtAmtTable += '                <th>'+FIN03003M00.onNumberWithCommas(cashBdgtAmtList[2].lastInsfAmt)+'</th>                        ';
    cashBdgtAmtTable += '                <th>'+FIN03003M00.onNumberWithCommas(cashBdgtAmtList[3].lastInsfAmt)+'</th>                        ';
    cashBdgtAmtTable += '                <th>'+FIN03003M00.onNumberWithCommas(cashBdgtAmtList[4].lastInsfAmt)+'</th>                        ';
    cashBdgtAmtTable += '                <th>'+FIN03003M00.onNumberWithCommas(cashBdgtAmtList[5].lastInsfAmt)+'</th>                        ';
    cashBdgtAmtTable += '            </tr>                                                                                      ';
    cashBdgtAmtTable += '        </tbody>                                                                                       ';
    cashBdgtAmtTable += '    </table>                                                                                           ';
    cashBdgtAmtTable += '    <!--//자금조달및투자액테이블-->                                                                              ';
    cashBdgtAmtTable += '    <br/>                                                                                              ';
    cashBdgtAmtTable += '    <!--자금조달및투자액테이블-->                                                                                ';
    cashBdgtAmtTable += '    <table class="table table-condensed">                                                              ';
    cashBdgtAmtTable += '        <thead>                                                                                        ';
    cashBdgtAmtTable += '            <tr class="active text-lg">                                                                ';
    cashBdgtAmtTable += '                <th>월</th>                                                                             ';
    cashBdgtAmtTable += '                <th>'+cashBdgtAmtList[6].month+'</th>                                                  ';
    cashBdgtAmtTable += '                <th>'+cashBdgtAmtList[7].month+'</th>                                                  ';
    cashBdgtAmtTable += '                <th>'+cashBdgtAmtList[8].month+'</th>                                                  ';
    cashBdgtAmtTable += '                <th>'+cashBdgtAmtList[9].month+'</th>                                                  ';
    cashBdgtAmtTable += '                <th>'+cashBdgtAmtList[10].month+'</th>                                                 ';
    cashBdgtAmtTable += '                <th>'+cashBdgtAmtList[11].month+'</th>                                                 ';
    cashBdgtAmtTable += '            </tr>                                                                                      ';
    cashBdgtAmtTable += '        </thead>                                                                                       ';
    cashBdgtAmtTable += '        <tbody>                                                                                        ';
    cashBdgtAmtTable += '            <tr>                                                                                       ';
    cashBdgtAmtTable += '                <td>순현금흐름</td>                                                                        ';
    cashBdgtAmtTable += '                <th>'+FIN03003M00.onNumberWithCommas(cashBdgtAmtList[6].cashNtFlowAmt)+'</th>                      ';
    cashBdgtAmtTable += '                <th>'+FIN03003M00.onNumberWithCommas(cashBdgtAmtList[7].cashNtFlowAmt)+'</th>                      ';
    cashBdgtAmtTable += '                <th>'+FIN03003M00.onNumberWithCommas(cashBdgtAmtList[8].cashNtFlowAmt)+'</th>                      ';
    cashBdgtAmtTable += '                <th>'+FIN03003M00.onNumberWithCommas(cashBdgtAmtList[9].cashNtFlowAmt)+'</th>                      ';
    cashBdgtAmtTable += '                <th>'+FIN03003M00.onNumberWithCommas(cashBdgtAmtList[10].cashNtFlowAmt)+'</th>                     ';
    cashBdgtAmtTable += '                <th>'+FIN03003M00.onNumberWithCommas(cashBdgtAmtList[11].cashNtFlowAmt)+'</th>                     ';
    cashBdgtAmtTable += '            </tr>                                                                                      ';
    cashBdgtAmtTable += '            <tr>                                                                                       ';
    cashBdgtAmtTable += '                <td>최소현금 보유액</td>                                                                     ';
    cashBdgtAmtTable += '                <th>'+FIN03003M00.onNumberWithCommas(cashBdgtAmtList[6].mnmmCashHoldAmt)+'</th>                    ';
    cashBdgtAmtTable += '                <th>'+FIN03003M00.onNumberWithCommas(cashBdgtAmtList[7].mnmmCashHoldAmt)+'</th>                    ';
    cashBdgtAmtTable += '                <th>'+FIN03003M00.onNumberWithCommas(cashBdgtAmtList[8].mnmmCashHoldAmt)+'</th>                    ';
    cashBdgtAmtTable += '                <th>'+FIN03003M00.onNumberWithCommas(cashBdgtAmtList[9].mnmmCashHoldAmt)+'</th>                    ';
    cashBdgtAmtTable += '                <th>'+FIN03003M00.onNumberWithCommas(cashBdgtAmtList[10].mnmmCashHoldAmt)+'</th>                   ';
    cashBdgtAmtTable += '                <th>'+FIN03003M00.onNumberWithCommas(cashBdgtAmtList[11].mnmmCashHoldAmt)+'</th>                   ';
    cashBdgtAmtTable += '            </tr>                                                                                      ';
    cashBdgtAmtTable += '            <tr>                                                                                       ';
    cashBdgtAmtTable += '                <td>총 현금잔고 예측치</td>                                                                   ';
    cashBdgtAmtTable += '                <th>'+FIN03003M00.onNumberWithCommas(cashBdgtAmtList[6].ttchBalnFrcsAmt)+'</th>                    ';
    cashBdgtAmtTable += '                <th>'+FIN03003M00.onNumberWithCommas(cashBdgtAmtList[7].ttchBalnFrcsAmt)+'</th>                    ';
    cashBdgtAmtTable += '                <th>'+FIN03003M00.onNumberWithCommas(cashBdgtAmtList[8].ttchBalnFrcsAmt)+'</th>                    ';
    cashBdgtAmtTable += '                <th>'+FIN03003M00.onNumberWithCommas(cashBdgtAmtList[9].ttchBalnFrcsAmt)+'</th>                    ';
    cashBdgtAmtTable += '                <th>'+FIN03003M00.onNumberWithCommas(cashBdgtAmtList[10].ttchBalnFrcsAmt)+'</th>                   ';
    cashBdgtAmtTable += '                <th>'+FIN03003M00.onNumberWithCommas(cashBdgtAmtList[11].ttchBalnFrcsAmt)+'</th>                   ';
    cashBdgtAmtTable += '            </tr>                                                                                      ';
    cashBdgtAmtTable += '            <tr>                                                                                       ';
    cashBdgtAmtTable += '                <td colspan="7">&nbsp;</td>                                                            ';
    cashBdgtAmtTable += '            </tr>                                                                                      ';
    cashBdgtAmtTable += '            <tr>                                                                                       ';
    cashBdgtAmtTable += '                <td>부족액 충당 후 여유자금 누적액</td>                                                           ';
    cashBdgtAmtTable += '                <th>'+FIN03003M00.onNumberWithCommas(cashBdgtAmtList[6].lcatFilafSmexFndsAcmlAmt)+'</th>           ';
    cashBdgtAmtTable += '                <th>'+FIN03003M00.onNumberWithCommas(cashBdgtAmtList[7].lcatFilafSmexFndsAcmlAmt)+'</th>           ';
    cashBdgtAmtTable += '                <th>'+FIN03003M00.onNumberWithCommas(cashBdgtAmtList[8].lcatFilafSmexFndsAcmlAmt)+'</th>           ';
    cashBdgtAmtTable += '                <th>'+FIN03003M00.onNumberWithCommas(cashBdgtAmtList[9].lcatFilafSmexFndsAcmlAmt)+'</th>           ';
    cashBdgtAmtTable += '                <th>'+FIN03003M00.onNumberWithCommas(cashBdgtAmtList[10].lcatFilafSmexFndsAcmlAmt)+'</th>          ';
    cashBdgtAmtTable += '                <th>'+FIN03003M00.onNumberWithCommas(cashBdgtAmtList[11].lcatFilafSmexFndsAcmlAmt)+'</th>          ';
    cashBdgtAmtTable += '            </tr>                                                                                      ';
    cashBdgtAmtTable += '            <tr>                                                                                       ';
    cashBdgtAmtTable += '                <td>여유액 차감 후 부족자금 누적액</td>                                                           ';
    cashBdgtAmtTable += '                <th>'+FIN03003M00.onNumberWithCommas(cashBdgtAmtList[6].smamtSbafInsfFndsAcmlAmt)+'</th>           ';
    cashBdgtAmtTable += '                <th>'+FIN03003M00.onNumberWithCommas(cashBdgtAmtList[7].smamtSbafInsfFndsAcmlAmt)+'</th>           ';
    cashBdgtAmtTable += '                <th>'+FIN03003M00.onNumberWithCommas(cashBdgtAmtList[8].smamtSbafInsfFndsAcmlAmt)+'</th>           ';
    cashBdgtAmtTable += '                <th>'+FIN03003M00.onNumberWithCommas(cashBdgtAmtList[9].smamtSbafInsfFndsAcmlAmt)+'</th>           ';
    cashBdgtAmtTable += '                <th>'+FIN03003M00.onNumberWithCommas(cashBdgtAmtList[10].smamtSbafInsfFndsAcmlAmt)+'</th>          ';
    cashBdgtAmtTable += '                <th>'+FIN03003M00.onNumberWithCommas(cashBdgtAmtList[11].smamtSbafInsfFndsAcmlAmt)+'</th>          ';
    cashBdgtAmtTable += '            </tr>                                                                                      ';
    cashBdgtAmtTable += '            <tr>                                                                                       ';
    cashBdgtAmtTable += '                <td>월별 순자금조달액 및 (여유액)</td>                                                            ';
    cashBdgtAmtTable += '                <th>'+FIN03003M00.onNumberWithCommas(cashBdgtAmtList[6].pmnhNtFndsPramOverSmexAmt)+'</th>          ';
    cashBdgtAmtTable += '                <th>'+FIN03003M00.onNumberWithCommas(cashBdgtAmtList[7].pmnhNtFndsPramOverSmexAmt)+'</th>          ';
    cashBdgtAmtTable += '                <th>'+FIN03003M00.onNumberWithCommas(cashBdgtAmtList[8].pmnhNtFndsPramOverSmexAmt)+'</th>          ';
    cashBdgtAmtTable += '                <th>'+FIN03003M00.onNumberWithCommas(cashBdgtAmtList[9].pmnhNtFndsPramOverSmexAmt)+'</th>          ';
    cashBdgtAmtTable += '                <th>'+FIN03003M00.onNumberWithCommas(cashBdgtAmtList[10].pmnhNtFndsPramOverSmexAmt)+'</th>         ';
    cashBdgtAmtTable += '                <th>'+FIN03003M00.onNumberWithCommas(cashBdgtAmtList[11].pmnhNtFndsPramOverSmexAmt)+'</th>         ';
    cashBdgtAmtTable += '            </tr>                                                                                      ';
    cashBdgtAmtTable += '            <tr>                                                                                       ';
    cashBdgtAmtTable += '                <td colspan="7">&nbsp;</td>                                                            ';
    cashBdgtAmtTable += '            </tr>                                                                                      ';
    cashBdgtAmtTable += '            <tr class="active">                                                                        ';
    cashBdgtAmtTable += '                <td>최종여유액</td>                                                                        ';
    cashBdgtAmtTable += '                <th>'+FIN03003M00.onNumberWithCommas(cashBdgtAmtList[6].lastSmexAmt)+'</th>                        ';
    cashBdgtAmtTable += '                <th>'+FIN03003M00.onNumberWithCommas(cashBdgtAmtList[7].lastSmexAmt)+'</th>                        ';
    cashBdgtAmtTable += '                <th>'+FIN03003M00.onNumberWithCommas(cashBdgtAmtList[8].lastSmexAmt)+'</th>                        ';
    cashBdgtAmtTable += '                <th>'+FIN03003M00.onNumberWithCommas(cashBdgtAmtList[9].lastSmexAmt)+'</th>                        ';
    cashBdgtAmtTable += '                <th>'+FIN03003M00.onNumberWithCommas(cashBdgtAmtList[10].lastSmexAmt)+'</th>                       ';
    cashBdgtAmtTable += '                <th>'+FIN03003M00.onNumberWithCommas(cashBdgtAmtList[11].lastSmexAmt)+'</th>                       ';
    cashBdgtAmtTable += '            </tr>                                                                                      ';
    cashBdgtAmtTable += '            <tr class="active">                                                                        ';
    cashBdgtAmtTable += '                <td>최종부족액</td>                                                                        ';
    cashBdgtAmtTable += '                <th>'+FIN03003M00.onNumberWithCommas(cashBdgtAmtList[6].lastInsfAmt)+'</th>                        ';
    cashBdgtAmtTable += '                <th>'+FIN03003M00.onNumberWithCommas(cashBdgtAmtList[7].lastInsfAmt)+'</th>                        ';
    cashBdgtAmtTable += '                <th>'+FIN03003M00.onNumberWithCommas(cashBdgtAmtList[8].lastInsfAmt)+'</th>                        ';
    cashBdgtAmtTable += '                <th>'+FIN03003M00.onNumberWithCommas(cashBdgtAmtList[9].lastInsfAmt)+'</th>                        ';
    cashBdgtAmtTable += '                <th>'+FIN03003M00.onNumberWithCommas(cashBdgtAmtList[10].lastInsfAmt)+'</th>                       ';
    cashBdgtAmtTable += '                <th>'+FIN03003M00.onNumberWithCommas(cashBdgtAmtList[11].lastInsfAmt)+'</th>                       ';
    cashBdgtAmtTable += '            </tr>                                                                                      ';
    cashBdgtAmtTable += '        </tbody>                                                                                       ';
    cashBdgtAmtTable += '    </table>                                                                                           ';
    cashBdgtAmtTable += '    <!--//자금조달및투자액테이블-->                                                                              ';
    cashBdgtAmtTable += '</div>                                                                                                 ';

    $("#cashBdgtAmtTable").html(cashBdgtAmtTable);

    var cashBdgtAmtTable1 = '';

    cashBdgtAmtTable1 += '<div class="panel-body">																			';																					
    cashBdgtAmtTable1 += '<!--현금예산테이블-->                                                                                    ';
    cashBdgtAmtTable1 += '<table class="table table-condensed">                                                              ';
    cashBdgtAmtTable1 += '    <thead>                                                                                        ';
    cashBdgtAmtTable1 += '        <tr class="active text-lg">                                                                ';
    cashBdgtAmtTable1 += '            <th>월</th>                                                                             ';
    cashBdgtAmtTable1 += '            <th>'+cashBdgtAmtList[0].month+'</th>                                                  ';
    cashBdgtAmtTable1 += '            <th>'+cashBdgtAmtList[1].month+'</th>                                                  ';
    cashBdgtAmtTable1 += '            <th>'+cashBdgtAmtList[2].month+'</th>                                                  ';
    cashBdgtAmtTable1 += '            <th>'+cashBdgtAmtList[3].month+'</th>                                                  ';
    cashBdgtAmtTable1 += '            <th>'+cashBdgtAmtList[4].month+'</th>                                                  ';
    cashBdgtAmtTable1 += '            <th>'+cashBdgtAmtList[5].month+'</th>                                                  ';
    cashBdgtAmtTable1 += '        </tr>                                                                                      ';
    cashBdgtAmtTable1 += '    </thead>                                                                                       ';
    cashBdgtAmtTable1 += '    <tbody>                                                                                        ';
    cashBdgtAmtTable1 += '        <tr>                                                                                       ';
    cashBdgtAmtTable1 += '            <td>매출액</td>                                                                           ';
    cashBdgtAmtTable1 += '            <th>'+FIN03003M00.onNumberWithCommas(cashBdgtAmtList[0].salesAmt)+'</th>                           ';
    cashBdgtAmtTable1 += '            <th>'+FIN03003M00.onNumberWithCommas(cashBdgtAmtList[1].salesAmt)+'</th>                           ';
    cashBdgtAmtTable1 += '            <th>'+FIN03003M00.onNumberWithCommas(cashBdgtAmtList[2].salesAmt)+'</th>                           ';
    cashBdgtAmtTable1 += '            <th>'+FIN03003M00.onNumberWithCommas(cashBdgtAmtList[3].salesAmt)+'</th>                           ';
    cashBdgtAmtTable1 += '            <th>'+FIN03003M00.onNumberWithCommas(cashBdgtAmtList[4].salesAmt)+'</th>                           ';
    cashBdgtAmtTable1 += '            <th>'+FIN03003M00.onNumberWithCommas(cashBdgtAmtList[5].salesAmt)+'</th>                           ';
    cashBdgtAmtTable1 += '        </tr>                                                                                      ';
    cashBdgtAmtTable1 += '        <tr>                                                                                       ';
    cashBdgtAmtTable1 += '            <td>현금수입의 합계</td>                                                                     ';
    cashBdgtAmtTable1 += '            <th>'+FIN03003M00.onNumberWithCommas(cashBdgtAmtList[0].cashIncomeTotalAmt)+'</th>                 ';
    cashBdgtAmtTable1 += '            <th>'+FIN03003M00.onNumberWithCommas(cashBdgtAmtList[1].cashIncomeTotalAmt)+'</th>                 ';
    cashBdgtAmtTable1 += '            <th>'+FIN03003M00.onNumberWithCommas(cashBdgtAmtList[2].cashIncomeTotalAmt)+'</th>                 ';
    cashBdgtAmtTable1 += '            <th>'+FIN03003M00.onNumberWithCommas(cashBdgtAmtList[3].cashIncomeTotalAmt)+'</th>                 ';
    cashBdgtAmtTable1 += '            <th>'+FIN03003M00.onNumberWithCommas(cashBdgtAmtList[4].cashIncomeTotalAmt)+'</th>                 ';
    cashBdgtAmtTable1 += '            <th>'+FIN03003M00.onNumberWithCommas(cashBdgtAmtList[5].cashIncomeTotalAmt)+'</th>                 ';
    cashBdgtAmtTable1 += '        </tr>                                                                                      ';
    cashBdgtAmtTable1 += '        <tr>                                                                                       ';
    cashBdgtAmtTable1 += '            <td colspan="7">&nbsp;</td>                                                            ';
    cashBdgtAmtTable1 += '        </tr>                                                                                      ';
    cashBdgtAmtTable1 += '        <tr>                                                                                       ';
    cashBdgtAmtTable1 += '            <td class="active text-lg" colspan="7">*현금지출의 추정치</td>                                ';
    cashBdgtAmtTable1 += '        </tr>                                                                                      ';
    cashBdgtAmtTable1 += '        <tr>                                                                                       ';
    cashBdgtAmtTable1 += '            <td>매출원가</td>                                                                          ';
    cashBdgtAmtTable1 += '            <th>'+FIN03003M00.onNumberWithCommas(cashBdgtAmtList[0].salesCostAmt)+'</th>                       ';
    cashBdgtAmtTable1 += '            <th>'+FIN03003M00.onNumberWithCommas(cashBdgtAmtList[1].salesCostAmt)+'</th>                       ';
    cashBdgtAmtTable1 += '            <th>'+FIN03003M00.onNumberWithCommas(cashBdgtAmtList[2].salesCostAmt)+'</th>                       ';
    cashBdgtAmtTable1 += '            <th>'+FIN03003M00.onNumberWithCommas(cashBdgtAmtList[3].salesCostAmt)+'</th>                       ';
    cashBdgtAmtTable1 += '            <th>'+FIN03003M00.onNumberWithCommas(cashBdgtAmtList[4].salesCostAmt)+'</th>                       ';
    cashBdgtAmtTable1 += '            <th>'+FIN03003M00.onNumberWithCommas(cashBdgtAmtList[5].salesCostAmt)+'</th>                       ';
    cashBdgtAmtTable1 += '        </tr>                                                                                      ';
    cashBdgtAmtTable1 += '        <tr>                                                                                       ';
    cashBdgtAmtTable1 += '            <td>판매비와 관리비</td>                                                                     ';
    cashBdgtAmtTable1 += '            <th>'+FIN03003M00.onNumberWithCommas(cashBdgtAmtList[0].mnepAmt)+'</th>                            ';
    cashBdgtAmtTable1 += '            <th>'+FIN03003M00.onNumberWithCommas(cashBdgtAmtList[1].mnepAmt)+'</th>                            ';
    cashBdgtAmtTable1 += '            <th>'+FIN03003M00.onNumberWithCommas(cashBdgtAmtList[2].mnepAmt)+'</th>                            ';
    cashBdgtAmtTable1 += '            <th>'+FIN03003M00.onNumberWithCommas(cashBdgtAmtList[3].mnepAmt)+'</th>                            ';
    cashBdgtAmtTable1 += '            <th>'+FIN03003M00.onNumberWithCommas(cashBdgtAmtList[4].mnepAmt)+'</th>                            ';
    cashBdgtAmtTable1 += '            <th>'+FIN03003M00.onNumberWithCommas(cashBdgtAmtList[5].mnepAmt)+'</th>                            ';
    cashBdgtAmtTable1 += '        </tr>                                                                                      ';
    cashBdgtAmtTable1 += '        <tr>                                                                                       ';
    cashBdgtAmtTable1 += '            <td>이자비용</td>                                                                          ';
    cashBdgtAmtTable1 += '            <th>'+FIN03003M00.onNumberWithCommas(cashBdgtAmtList[0].inepAmt)+'</th>                            ';
    cashBdgtAmtTable1 += '            <th>'+FIN03003M00.onNumberWithCommas(cashBdgtAmtList[1].inepAmt)+'</th>                            ';
    cashBdgtAmtTable1 += '            <th>'+FIN03003M00.onNumberWithCommas(cashBdgtAmtList[2].inepAmt)+'</th>                            ';
    cashBdgtAmtTable1 += '            <th>'+FIN03003M00.onNumberWithCommas(cashBdgtAmtList[3].inepAmt)+'</th>                            ';
    cashBdgtAmtTable1 += '            <th>'+FIN03003M00.onNumberWithCommas(cashBdgtAmtList[4].inepAmt)+'</th>                            ';
    cashBdgtAmtTable1 += '            <th>'+FIN03003M00.onNumberWithCommas(cashBdgtAmtList[5].inepAmt)+'</th>                            ';
    cashBdgtAmtTable1 += '        </tr>                                                                                      ';
    cashBdgtAmtTable1 += '        <tr>                                                                                       ';
    cashBdgtAmtTable1 += '            <td>법인세</td>                                                                           ';
    cashBdgtAmtTable1 += '            <th>'+FIN03003M00.onNumberWithCommas(cashBdgtAmtList[0].crtxAmt)+'</th>                            ';
    cashBdgtAmtTable1 += '            <th>'+FIN03003M00.onNumberWithCommas(cashBdgtAmtList[1].crtxAmt)+'</th>                            ';
    cashBdgtAmtTable1 += '            <th>'+FIN03003M00.onNumberWithCommas(cashBdgtAmtList[2].crtxAmt)+'</th>                            ';
    cashBdgtAmtTable1 += '            <th>'+FIN03003M00.onNumberWithCommas(cashBdgtAmtList[3].crtxAmt)+'</th>                            ';
    cashBdgtAmtTable1 += '            <th>'+FIN03003M00.onNumberWithCommas(cashBdgtAmtList[4].crtxAmt)+'</th>                            ';
    cashBdgtAmtTable1 += '            <th>'+FIN03003M00.onNumberWithCommas(cashBdgtAmtList[5].crtxAmt)+'</th>                            ';
    cashBdgtAmtTable1 += '        </tr>                                                                                      ';
    cashBdgtAmtTable1 += '        <tr>                                                                                       ';
    cashBdgtAmtTable1 += '            <td>현금배당</td>                                                                          ';
    cashBdgtAmtTable1 += '            <th>'+FIN03003M00.onNumberWithCommas(cashBdgtAmtList[0].cashDvdnAmt)+'</th>                        ';
    cashBdgtAmtTable1 += '            <th>'+FIN03003M00.onNumberWithCommas(cashBdgtAmtList[1].cashDvdnAmt)+'</th>                        ';
    cashBdgtAmtTable1 += '            <th>'+FIN03003M00.onNumberWithCommas(cashBdgtAmtList[2].cashDvdnAmt)+'</th>                        ';
    cashBdgtAmtTable1 += '            <th>'+FIN03003M00.onNumberWithCommas(cashBdgtAmtList[3].cashDvdnAmt)+'</th>                        ';
    cashBdgtAmtTable1 += '            <th>'+FIN03003M00.onNumberWithCommas(cashBdgtAmtList[4].cashDvdnAmt)+'</th>                        ';
    cashBdgtAmtTable1 += '            <th>'+FIN03003M00.onNumberWithCommas(cashBdgtAmtList[5].cashDvdnAmt)+'</th>                        ';
    cashBdgtAmtTable1 += '        </tr>                                                                                      ';
    cashBdgtAmtTable1 += '        <tr class="active">                                                                        ';
    cashBdgtAmtTable1 += '            <td>지출액의 합계</td>                                                                      ';
    cashBdgtAmtTable1 += '            <th>'+FIN03003M00.onNumberWithCommas(cashBdgtAmtList[0].cashOutComeTotalAmt)+'</th>                ';
    cashBdgtAmtTable1 += '            <th>'+FIN03003M00.onNumberWithCommas(cashBdgtAmtList[1].cashOutComeTotalAmt)+'</th>                ';
    cashBdgtAmtTable1 += '            <th>'+FIN03003M00.onNumberWithCommas(cashBdgtAmtList[2].cashOutComeTotalAmt)+'</th>                ';
    cashBdgtAmtTable1 += '            <th>'+FIN03003M00.onNumberWithCommas(cashBdgtAmtList[3].cashOutComeTotalAmt)+'</th>                ';
    cashBdgtAmtTable1 += '            <th>'+FIN03003M00.onNumberWithCommas(cashBdgtAmtList[4].cashOutComeTotalAmt)+'</th>                ';
    cashBdgtAmtTable1 += '            <th>'+FIN03003M00.onNumberWithCommas(cashBdgtAmtList[5].cashOutComeTotalAmt)+'</th>                ';
    cashBdgtAmtTable1 += '        </tr>                                                                                      ';
    cashBdgtAmtTable1 += '        <tr>                                                                                       ';
    cashBdgtAmtTable1 += '            <td colspan="7">&nbsp;</td>                                                            ';
    cashBdgtAmtTable1 += '        </tr>                                                                                      ';
    cashBdgtAmtTable1 += '        <tr>                                                                                       ';
    cashBdgtAmtTable1 += '            <td>순현금흐름</td>                                                                        ';
    cashBdgtAmtTable1 += '            <th>'+FIN03003M00.onNumberWithCommas(cashBdgtAmtList[0].cashNtFlowAmt)+'</th>                      ';
    cashBdgtAmtTable1 += '            <th>'+FIN03003M00.onNumberWithCommas(cashBdgtAmtList[1].cashNtFlowAmt)+'</th>                      ';
    cashBdgtAmtTable1 += '            <th>'+FIN03003M00.onNumberWithCommas(cashBdgtAmtList[2].cashNtFlowAmt)+'</th>                      ';
    cashBdgtAmtTable1 += '            <th>'+FIN03003M00.onNumberWithCommas(cashBdgtAmtList[3].cashNtFlowAmt)+'</th>                      ';
    cashBdgtAmtTable1 += '            <th>'+FIN03003M00.onNumberWithCommas(cashBdgtAmtList[4].cashNtFlowAmt)+'</th>                      ';
    cashBdgtAmtTable1 += '            <th>'+FIN03003M00.onNumberWithCommas(cashBdgtAmtList[5].cashNtFlowAmt)+'</th>                      ';
    cashBdgtAmtTable1 += '        </tr>                                                                                      ';
    cashBdgtAmtTable1 += '        <tr>                                                                                       ';
    cashBdgtAmtTable1 += '            <td>최소현금 보유액</td>                                                                     ';
    cashBdgtAmtTable1 += '            <th>'+FIN03003M00.onNumberWithCommas(cashBdgtAmtList[0].mnmmCashHoldAmt)+'</th>                    ';
    cashBdgtAmtTable1 += '            <th>'+FIN03003M00.onNumberWithCommas(cashBdgtAmtList[1].mnmmCashHoldAmt)+'</th>                    ';
    cashBdgtAmtTable1 += '            <th>'+FIN03003M00.onNumberWithCommas(cashBdgtAmtList[2].mnmmCashHoldAmt)+'</th>                    ';
    cashBdgtAmtTable1 += '            <th>'+FIN03003M00.onNumberWithCommas(cashBdgtAmtList[3].mnmmCashHoldAmt)+'</th>                    ';
    cashBdgtAmtTable1 += '            <th>'+FIN03003M00.onNumberWithCommas(cashBdgtAmtList[4].mnmmCashHoldAmt)+'</th>                    ';
    cashBdgtAmtTable1 += '            <th>'+FIN03003M00.onNumberWithCommas(cashBdgtAmtList[5].mnmmCashHoldAmt)+'</th>                    ';
    cashBdgtAmtTable1 += '        </tr>                                                                                      ';
    cashBdgtAmtTable1 += '        <tr>                                                                                       ';
    cashBdgtAmtTable1 += '            <td>총 현금잔고 예측치</td>                                                                   ';
    cashBdgtAmtTable1 += '            <th>'+FIN03003M00.onNumberWithCommas(cashBdgtAmtList[0].ttchBalnFrcsAmt)+'</th>                    ';
    cashBdgtAmtTable1 += '            <th>'+FIN03003M00.onNumberWithCommas(cashBdgtAmtList[1].ttchBalnFrcsAmt)+'</th>                    ';
    cashBdgtAmtTable1 += '            <th>'+FIN03003M00.onNumberWithCommas(cashBdgtAmtList[2].ttchBalnFrcsAmt)+'</th>                    ';
    cashBdgtAmtTable1 += '            <th>'+FIN03003M00.onNumberWithCommas(cashBdgtAmtList[3].ttchBalnFrcsAmt)+'</th>                    ';
    cashBdgtAmtTable1 += '            <th>'+FIN03003M00.onNumberWithCommas(cashBdgtAmtList[4].ttchBalnFrcsAmt)+'</th>                    ';
    cashBdgtAmtTable1 += '            <th>'+FIN03003M00.onNumberWithCommas(cashBdgtAmtList[5].ttchBalnFrcsAmt)+'</th>                    ';
    cashBdgtAmtTable1 += '        </tr>                                                                                      ';
    cashBdgtAmtTable1 += '        <tr>                                                                                       ';
    cashBdgtAmtTable1 += '            <td colspan="7">&nbsp;</td>                                                            ';
    cashBdgtAmtTable1 += '        </tr>                                                                                      ';
    cashBdgtAmtTable1 += '        <tr>                                                                                       ';
    cashBdgtAmtTable1 += '            <td>부족액 충당 후 여유자금 누적액</td>                                                           ';
    cashBdgtAmtTable1 += '            <th>'+FIN03003M00.onNumberWithCommas(cashBdgtAmtList[0].lcatFilafSmexFndsAcmlAmt)+'</th>           ';
    cashBdgtAmtTable1 += '            <th>'+FIN03003M00.onNumberWithCommas(cashBdgtAmtList[1].lcatFilafSmexFndsAcmlAmt)+'</th>           ';
    cashBdgtAmtTable1 += '            <th>'+FIN03003M00.onNumberWithCommas(cashBdgtAmtList[2].lcatFilafSmexFndsAcmlAmt)+'</th>           ';
    cashBdgtAmtTable1 += '            <th>'+FIN03003M00.onNumberWithCommas(cashBdgtAmtList[3].lcatFilafSmexFndsAcmlAmt)+'</th>           ';
    cashBdgtAmtTable1 += '            <th>'+FIN03003M00.onNumberWithCommas(cashBdgtAmtList[4].lcatFilafSmexFndsAcmlAmt)+'</th>           ';
    cashBdgtAmtTable1 += '            <th>'+FIN03003M00.onNumberWithCommas(cashBdgtAmtList[5].lcatFilafSmexFndsAcmlAmt)+'</th>           ';
    cashBdgtAmtTable1 += '        </tr>                                                                                      ';
    cashBdgtAmtTable1 += '        <tr>                                                                                       ';
    cashBdgtAmtTable1 += '            <td>여유액 차감 후 부족자금 누적액</td>                                                           ';
    cashBdgtAmtTable1 += '            <th>'+FIN03003M00.onNumberWithCommas(cashBdgtAmtList[0].smamtSbafInsfFndsAcmlAmt)+'</th>           ';
    cashBdgtAmtTable1 += '            <th>'+FIN03003M00.onNumberWithCommas(cashBdgtAmtList[1].smamtSbafInsfFndsAcmlAmt)+'</th>           ';
    cashBdgtAmtTable1 += '            <th>'+FIN03003M00.onNumberWithCommas(cashBdgtAmtList[2].smamtSbafInsfFndsAcmlAmt)+'</th>           ';
    cashBdgtAmtTable1 += '            <th>'+FIN03003M00.onNumberWithCommas(cashBdgtAmtList[3].smamtSbafInsfFndsAcmlAmt)+'</th>           ';
    cashBdgtAmtTable1 += '            <th>'+FIN03003M00.onNumberWithCommas(cashBdgtAmtList[4].smamtSbafInsfFndsAcmlAmt)+'</th>           ';
    cashBdgtAmtTable1 += '            <th>'+FIN03003M00.onNumberWithCommas(cashBdgtAmtList[5].smamtSbafInsfFndsAcmlAmt)+'</th>           ';
    cashBdgtAmtTable1 += '        </tr>                                                                                      ';
    cashBdgtAmtTable1 += '        <tr>                                                                                       ';
    cashBdgtAmtTable1 += '            <td>월별 순자금조달액 및 (여유액)</td>                                                            ';
    cashBdgtAmtTable1 += '            <th>'+FIN03003M00.onNumberWithCommas(cashBdgtAmtList[0].pmnhNtFndsPramOverSmexAmt)+'</th>          ';
    cashBdgtAmtTable1 += '            <th>'+FIN03003M00.onNumberWithCommas(cashBdgtAmtList[1].pmnhNtFndsPramOverSmexAmt)+'</th>          ';
    cashBdgtAmtTable1 += '            <th>'+FIN03003M00.onNumberWithCommas(cashBdgtAmtList[2].pmnhNtFndsPramOverSmexAmt)+'</th>          ';
    cashBdgtAmtTable1 += '            <th>'+FIN03003M00.onNumberWithCommas(cashBdgtAmtList[3].pmnhNtFndsPramOverSmexAmt)+'</th>          ';
    cashBdgtAmtTable1 += '            <th>'+FIN03003M00.onNumberWithCommas(cashBdgtAmtList[4].pmnhNtFndsPramOverSmexAmt)+'</th>          ';
    cashBdgtAmtTable1 += '            <th>'+FIN03003M00.onNumberWithCommas(cashBdgtAmtList[5].pmnhNtFndsPramOverSmexAmt)+'</th>          ';
    cashBdgtAmtTable1 += '        </tr>                                                                                      ';
    cashBdgtAmtTable1 += '        <tr>                                                                                       ';
    cashBdgtAmtTable1 += '            <td colspan="7">&nbsp;</td>                                                            ';
    cashBdgtAmtTable1 += '        </tr>                                                                                      ';
    cashBdgtAmtTable1 += '        <tr class="active">                                                                        ';
    cashBdgtAmtTable1 += '            <td>최종여유액</td>                                                                        ';
    cashBdgtAmtTable1 += '            <th>'+FIN03003M00.onNumberWithCommas(cashBdgtAmtList[0].lastSmexAmt)+'</th>                        ';
    cashBdgtAmtTable1 += '            <th>'+FIN03003M00.onNumberWithCommas(cashBdgtAmtList[1].lastSmexAmt)+'</th>                        ';
    cashBdgtAmtTable1 += '            <th>'+FIN03003M00.onNumberWithCommas(cashBdgtAmtList[2].lastSmexAmt)+'</th>                        ';
    cashBdgtAmtTable1 += '            <th>'+FIN03003M00.onNumberWithCommas(cashBdgtAmtList[3].lastSmexAmt)+'</th>                        ';
    cashBdgtAmtTable1 += '            <th>'+FIN03003M00.onNumberWithCommas(cashBdgtAmtList[4].lastSmexAmt)+'</th>                        ';
    cashBdgtAmtTable1 += '            <th>'+FIN03003M00.onNumberWithCommas(cashBdgtAmtList[5].lastSmexAmt)+'</th>                        ';
    cashBdgtAmtTable1 += '        </tr>                                                                                      ';
    cashBdgtAmtTable1 += '        <tr class="active">                                                                        ';
    cashBdgtAmtTable1 += '            <td>최종부족액</td>                                                                        ';
    cashBdgtAmtTable1 += '            <th>'+FIN03003M00.onNumberWithCommas(cashBdgtAmtList[0].lastInsfAmt)+'</th>                        ';
    cashBdgtAmtTable1 += '            <th>'+FIN03003M00.onNumberWithCommas(cashBdgtAmtList[1].lastInsfAmt)+'</th>                        ';
    cashBdgtAmtTable1 += '            <th>'+FIN03003M00.onNumberWithCommas(cashBdgtAmtList[2].lastInsfAmt)+'</th>                        ';
    cashBdgtAmtTable1 += '            <th>'+FIN03003M00.onNumberWithCommas(cashBdgtAmtList[3].lastInsfAmt)+'</th>                        ';
    cashBdgtAmtTable1 += '            <th>'+FIN03003M00.onNumberWithCommas(cashBdgtAmtList[4].lastInsfAmt)+'</th>                        ';
    cashBdgtAmtTable1 += '            <th>'+FIN03003M00.onNumberWithCommas(cashBdgtAmtList[5].lastInsfAmt)+'</th>                        ';
    cashBdgtAmtTable1 += '        </tr>                                                                                      ';
    cashBdgtAmtTable1 += '    </tbody>                                                                                       ';
    cashBdgtAmtTable1 += '</table>                                                                                           ';
    cashBdgtAmtTable1 += '<!--//현금예산테이블-->                                                                                  ';
    cashBdgtAmtTable1 += '<br/>                                                                                              ';
    cashBdgtAmtTable1 += '<!--현금예산테이블-->                                                                                    ';
    cashBdgtAmtTable1 += '<table class="table table-condensed">                                                              ';
    cashBdgtAmtTable1 += '    <thead>                                                                                        ';
    cashBdgtAmtTable1 += '        <tr class="active text-lg">                                                                ';
    cashBdgtAmtTable1 += '            <th>월</th>                                                                             ';
    cashBdgtAmtTable1 += '            <th>'+cashBdgtAmtList[6].month+'</th>                                                  ';
    cashBdgtAmtTable1 += '            <th>'+cashBdgtAmtList[7].month+'</th>                                                  ';
    cashBdgtAmtTable1 += '            <th>'+cashBdgtAmtList[8].month+'</th>                                                  ';
    cashBdgtAmtTable1 += '            <th>'+cashBdgtAmtList[9].month+'</th>                                                  ';
    cashBdgtAmtTable1 += '            <th>'+cashBdgtAmtList[10].month+'</th>                                                 ';
    cashBdgtAmtTable1 += '            <th>'+cashBdgtAmtList[11].month+'</th>                                                 ';
    cashBdgtAmtTable1 += '        </tr>                                                                                      ';
    cashBdgtAmtTable1 += '    </thead>                                                                                       ';
    cashBdgtAmtTable1 += '    <tbody>                                                                                        ';
    cashBdgtAmtTable1 += '        <tr>                                                                                       ';
    cashBdgtAmtTable1 += '            <td>매출액</td>                                                                           ';
    cashBdgtAmtTable1 += '            <th>'+FIN03003M00.onNumberWithCommas(cashBdgtAmtList[6].salesAmt)+'</th>                           ';
    cashBdgtAmtTable1 += '            <th>'+FIN03003M00.onNumberWithCommas(cashBdgtAmtList[7].salesAmt)+'</th>                           ';
    cashBdgtAmtTable1 += '            <th>'+FIN03003M00.onNumberWithCommas(cashBdgtAmtList[8].salesAmt)+'</th>                           ';
    cashBdgtAmtTable1 += '            <th>'+FIN03003M00.onNumberWithCommas(cashBdgtAmtList[9].salesAmt)+'</th>                           ';
    cashBdgtAmtTable1 += '            <th>'+FIN03003M00.onNumberWithCommas(cashBdgtAmtList[10].salesAmt)+'</th>                          ';
    cashBdgtAmtTable1 += '            <th>'+FIN03003M00.onNumberWithCommas(cashBdgtAmtList[11].salesAmt)+'</th>                          ';
    cashBdgtAmtTable1 += '        </tr>                                                                                      ';
    cashBdgtAmtTable1 += '        <tr>                                                                                       ';
    cashBdgtAmtTable1 += '            <td>현금수입의 합계</td>                                                                     ';
    cashBdgtAmtTable1 += '            <th>'+FIN03003M00.onNumberWithCommas(cashBdgtAmtList[6].cashIncomeTotalAmt)+'</th>                 ';
    cashBdgtAmtTable1 += '            <th>'+FIN03003M00.onNumberWithCommas(cashBdgtAmtList[7].cashIncomeTotalAmt)+'</th>                 ';
    cashBdgtAmtTable1 += '            <th>'+FIN03003M00.onNumberWithCommas(cashBdgtAmtList[8].cashIncomeTotalAmt)+'</th>                 ';
    cashBdgtAmtTable1 += '            <th>'+FIN03003M00.onNumberWithCommas(cashBdgtAmtList[9].cashIncomeTotalAmt)+'</th>                 ';
    cashBdgtAmtTable1 += '            <th>'+FIN03003M00.onNumberWithCommas(cashBdgtAmtList[10].cashIncomeTotalAmt)+'</th>                ';
    cashBdgtAmtTable1 += '            <th>'+FIN03003M00.onNumberWithCommas(cashBdgtAmtList[11].cashIncomeTotalAmt)+'</th>                ';
    cashBdgtAmtTable1 += '        </tr>                                                                                      ';
    cashBdgtAmtTable1 += '        <tr>                                                                                       ';
    cashBdgtAmtTable1 += '            <td colspan="7">&nbsp;</td>                                                            ';
    cashBdgtAmtTable1 += '        </tr>                                                                                      ';
    cashBdgtAmtTable1 += '        <tr>                                                                                       ';
    cashBdgtAmtTable1 += '            <td class="active text-lg" colspan="7">*현금지출의 추정치</td>                                ';
    cashBdgtAmtTable1 += '        </tr>                                                                                      ';
    cashBdgtAmtTable1 += '        <tr>                                                                                       ';
    cashBdgtAmtTable1 += '            <td>매출원가</td>                                                                          ';
    cashBdgtAmtTable1 += '            <th>'+FIN03003M00.onNumberWithCommas(cashBdgtAmtList[6].salesCostAmt)+'</th>                       ';
    cashBdgtAmtTable1 += '            <th>'+FIN03003M00.onNumberWithCommas(cashBdgtAmtList[7].salesCostAmt)+'</th>                       ';
    cashBdgtAmtTable1 += '            <th>'+FIN03003M00.onNumberWithCommas(cashBdgtAmtList[8].salesCostAmt)+'</th>                       ';
    cashBdgtAmtTable1 += '            <th>'+FIN03003M00.onNumberWithCommas(cashBdgtAmtList[9].salesCostAmt)+'</th>                       ';
    cashBdgtAmtTable1 += '            <th>'+FIN03003M00.onNumberWithCommas(cashBdgtAmtList[10].salesCostAmt)+'</th>                      ';
    cashBdgtAmtTable1 += '            <th>'+FIN03003M00.onNumberWithCommas(cashBdgtAmtList[11].salesCostAmt)+'</th>                      ';
    cashBdgtAmtTable1 += '        </tr>                                                                                      ';
    cashBdgtAmtTable1 += '        <tr>                                                                                       ';
    cashBdgtAmtTable1 += '            <td>판매비와 관리비</td>                                                                     ';
    cashBdgtAmtTable1 += '            <th>'+FIN03003M00.onNumberWithCommas(cashBdgtAmtList[6].mnepAmt)+'</th>                            ';
    cashBdgtAmtTable1 += '            <th>'+FIN03003M00.onNumberWithCommas(cashBdgtAmtList[7].mnepAmt)+'</th>                            ';
    cashBdgtAmtTable1 += '            <th>'+FIN03003M00.onNumberWithCommas(cashBdgtAmtList[8].mnepAmt)+'</th>                            ';
    cashBdgtAmtTable1 += '            <th>'+FIN03003M00.onNumberWithCommas(cashBdgtAmtList[9].mnepAmt)+'</th>                            ';
    cashBdgtAmtTable1 += '            <th>'+FIN03003M00.onNumberWithCommas(cashBdgtAmtList[10].mnepAmt)+'</th>                           ';
    cashBdgtAmtTable1 += '            <th>'+FIN03003M00.onNumberWithCommas(cashBdgtAmtList[11].mnepAmt)+'</th>                           ';
    cashBdgtAmtTable1 += '        </tr>                                                                                      ';
    cashBdgtAmtTable1 += '        <tr>                                                                                       ';
    cashBdgtAmtTable1 += '            <td>이자비용</td>                                                                          ';
    cashBdgtAmtTable1 += '            <th>'+FIN03003M00.onNumberWithCommas(cashBdgtAmtList[6].inepAmt)+'</th>                            ';
    cashBdgtAmtTable1 += '            <th>'+FIN03003M00.onNumberWithCommas(cashBdgtAmtList[7].inepAmt)+'</th>                            ';
    cashBdgtAmtTable1 += '            <th>'+FIN03003M00.onNumberWithCommas(cashBdgtAmtList[8].inepAmt)+'</th>                            ';
    cashBdgtAmtTable1 += '            <th>'+FIN03003M00.onNumberWithCommas(cashBdgtAmtList[9].inepAmt)+'</th>                            ';
    cashBdgtAmtTable1 += '            <th>'+FIN03003M00.onNumberWithCommas(cashBdgtAmtList[10].inepAmt)+'</th>                           ';
    cashBdgtAmtTable1 += '            <th>'+FIN03003M00.onNumberWithCommas(cashBdgtAmtList[11].inepAmt)+'</th>                           ';
    cashBdgtAmtTable1 += '        </tr>                                                                                      ';
    cashBdgtAmtTable1 += '        <tr>                                                                                       ';
    cashBdgtAmtTable1 += '            <td>법인세</td>                                                                           ';
    cashBdgtAmtTable1 += '            <th>'+FIN03003M00.onNumberWithCommas(cashBdgtAmtList[6].crtxAmt)+'</th>                            ';
    cashBdgtAmtTable1 += '            <th>'+FIN03003M00.onNumberWithCommas(cashBdgtAmtList[7].crtxAmt)+'</th>                            ';
    cashBdgtAmtTable1 += '            <th>'+FIN03003M00.onNumberWithCommas(cashBdgtAmtList[8].crtxAmt)+'</th>                            ';
    cashBdgtAmtTable1 += '            <th>'+FIN03003M00.onNumberWithCommas(cashBdgtAmtList[9].crtxAmt)+'</th>                            ';
    cashBdgtAmtTable1 += '            <th>'+FIN03003M00.onNumberWithCommas(cashBdgtAmtList[10].crtxAmt)+'</th>                           ';
    cashBdgtAmtTable1 += '            <th>'+FIN03003M00.onNumberWithCommas(cashBdgtAmtList[11].crtxAmt)+'</th>                           ';
    cashBdgtAmtTable1 += '        </tr>                                                                                      ';
    cashBdgtAmtTable1 += '        <tr>                                                                                       ';
    cashBdgtAmtTable1 += '            <td>현금배당</td>                                                                          ';
    cashBdgtAmtTable1 += '            <th>'+FIN03003M00.onNumberWithCommas(cashBdgtAmtList[6].cashDvdnAmt)+'</th>                        ';
    cashBdgtAmtTable1 += '            <th>'+FIN03003M00.onNumberWithCommas(cashBdgtAmtList[7].cashDvdnAmt)+'</th>                        ';
    cashBdgtAmtTable1 += '            <th>'+FIN03003M00.onNumberWithCommas(cashBdgtAmtList[8].cashDvdnAmt)+'</th>                        ';
    cashBdgtAmtTable1 += '            <th>'+FIN03003M00.onNumberWithCommas(cashBdgtAmtList[9].cashDvdnAmt)+'</th>                        ';
    cashBdgtAmtTable1 += '            <th>'+FIN03003M00.onNumberWithCommas(cashBdgtAmtList[10].cashDvdnAmt)+'</th>                       ';
    cashBdgtAmtTable1 += '            <th>'+FIN03003M00.onNumberWithCommas(cashBdgtAmtList[11].cashDvdnAmt)+'</th>                       ';
    cashBdgtAmtTable1 += '        </tr>                                                                                      ';
    cashBdgtAmtTable1 += '        <tr class="active">                                                                        ';
    cashBdgtAmtTable1 += '            <td>지출액의 합계</td>                                                                      ';
    cashBdgtAmtTable1 += '            <th>'+FIN03003M00.onNumberWithCommas(cashBdgtAmtList[6].cashOutComeTotalAmt)+'</th>                ';
    cashBdgtAmtTable1 += '            <th>'+FIN03003M00.onNumberWithCommas(cashBdgtAmtList[7].cashOutComeTotalAmt)+'</th>                ';
    cashBdgtAmtTable1 += '            <th>'+FIN03003M00.onNumberWithCommas(cashBdgtAmtList[8].cashOutComeTotalAmt)+'</th>                ';
    cashBdgtAmtTable1 += '            <th>'+FIN03003M00.onNumberWithCommas(cashBdgtAmtList[9].cashOutComeTotalAmt)+'</th>                ';
    cashBdgtAmtTable1 += '            <th>'+FIN03003M00.onNumberWithCommas(cashBdgtAmtList[10].cashOutComeTotalAmt)+'</th>               ';
    cashBdgtAmtTable1 += '            <th>'+FIN03003M00.onNumberWithCommas(cashBdgtAmtList[11].cashOutComeTotalAmt)+'</th>               ';
    cashBdgtAmtTable1 += '        </tr>                                                                                      ';
    cashBdgtAmtTable1 += '        <tr>                                                                                       ';
    cashBdgtAmtTable1 += '            <td colspan="7">&nbsp;</td>                                                            ';
    cashBdgtAmtTable1 += '        </tr>                                                                                      ';
    cashBdgtAmtTable1 += '        <tr>                                                                                       ';
    cashBdgtAmtTable1 += '            <td>순현금흐름</td>                                                                        ';
    cashBdgtAmtTable1 += '            <th>'+FIN03003M00.onNumberWithCommas(cashBdgtAmtList[6].cashNtFlowAmt)+'</th>                      ';
    cashBdgtAmtTable1 += '            <th>'+FIN03003M00.onNumberWithCommas(cashBdgtAmtList[7].cashNtFlowAmt)+'</th>                      ';
    cashBdgtAmtTable1 += '            <th>'+FIN03003M00.onNumberWithCommas(cashBdgtAmtList[8].cashNtFlowAmt)+'</th>                      ';
    cashBdgtAmtTable1 += '            <th>'+FIN03003M00.onNumberWithCommas(cashBdgtAmtList[9].cashNtFlowAmt)+'</th>                      ';
    cashBdgtAmtTable1 += '            <th>'+FIN03003M00.onNumberWithCommas(cashBdgtAmtList[10].cashNtFlowAmt)+'</th>                     ';
    cashBdgtAmtTable1 += '            <th>'+FIN03003M00.onNumberWithCommas(cashBdgtAmtList[11].cashNtFlowAmt)+'</th>                     ';
    cashBdgtAmtTable1 += '        </tr>                                                                                      ';
    cashBdgtAmtTable1 += '        <tr>                                                                                       ';
    cashBdgtAmtTable1 += '            <td>최소현금 보유액</td>                                                                     ';
    cashBdgtAmtTable1 += '            <th>'+FIN03003M00.onNumberWithCommas(cashBdgtAmtList[6].mnmmCashHoldAmt)+'</th>                    ';
    cashBdgtAmtTable1 += '            <th>'+FIN03003M00.onNumberWithCommas(cashBdgtAmtList[7].mnmmCashHoldAmt)+'</th>                    ';
    cashBdgtAmtTable1 += '            <th>'+FIN03003M00.onNumberWithCommas(cashBdgtAmtList[8].mnmmCashHoldAmt)+'</th>                    ';
    cashBdgtAmtTable1 += '            <th>'+FIN03003M00.onNumberWithCommas(cashBdgtAmtList[9].mnmmCashHoldAmt)+'</th>                    ';
    cashBdgtAmtTable1 += '            <th>'+FIN03003M00.onNumberWithCommas(cashBdgtAmtList[10].mnmmCashHoldAmt)+'</th>                   ';
    cashBdgtAmtTable1 += '            <th>'+FIN03003M00.onNumberWithCommas(cashBdgtAmtList[11].mnmmCashHoldAmt)+'</th>                   ';
    cashBdgtAmtTable1 += '        </tr>                                                                                      ';
    cashBdgtAmtTable1 += '        <tr>                                                                                       ';
    cashBdgtAmtTable1 += '            <td>총 현금잔고 예측치</td>                                                                   ';
    cashBdgtAmtTable1 += '            <th>'+FIN03003M00.onNumberWithCommas(cashBdgtAmtList[6].ttchBalnFrcsAmt)+'</th>                    ';
    cashBdgtAmtTable1 += '            <th>'+FIN03003M00.onNumberWithCommas(cashBdgtAmtList[7].ttchBalnFrcsAmt)+'</th>                    ';
    cashBdgtAmtTable1 += '            <th>'+FIN03003M00.onNumberWithCommas(cashBdgtAmtList[8].ttchBalnFrcsAmt)+'</th>                    ';
    cashBdgtAmtTable1 += '            <th>'+FIN03003M00.onNumberWithCommas(cashBdgtAmtList[9].ttchBalnFrcsAmt)+'</th>                    ';
    cashBdgtAmtTable1 += '            <th>'+FIN03003M00.onNumberWithCommas(cashBdgtAmtList[10].ttchBalnFrcsAmt)+'</th>                   ';
    cashBdgtAmtTable1 += '            <th>'+FIN03003M00.onNumberWithCommas(cashBdgtAmtList[11].ttchBalnFrcsAmt)+'</th>                   ';
    cashBdgtAmtTable1 += '        </tr>                                                                                      ';
    cashBdgtAmtTable1 += '        <tr>                                                                                       ';
    cashBdgtAmtTable1 += '            <td colspan="7">&nbsp;</td>                                                            ';
    cashBdgtAmtTable1 += '        </tr>                                                                                      ';
    cashBdgtAmtTable1 += '        <tr>                                                                                       ';
    cashBdgtAmtTable1 += '            <td>부족액 충당 후 여유자금 누적액</td>                                                           ';
    cashBdgtAmtTable1 += '            <th>'+FIN03003M00.onNumberWithCommas(cashBdgtAmtList[6].lcatFilafSmexFndsAcmlAmt)+'</th>           ';
    cashBdgtAmtTable1 += '            <th>'+FIN03003M00.onNumberWithCommas(cashBdgtAmtList[7].lcatFilafSmexFndsAcmlAmt)+'</th>           ';
    cashBdgtAmtTable1 += '            <th>'+FIN03003M00.onNumberWithCommas(cashBdgtAmtList[8].lcatFilafSmexFndsAcmlAmt)+'</th>           ';
    cashBdgtAmtTable1 += '            <th>'+FIN03003M00.onNumberWithCommas(cashBdgtAmtList[9].lcatFilafSmexFndsAcmlAmt)+'</th>           ';
    cashBdgtAmtTable1 += '            <th>'+FIN03003M00.onNumberWithCommas(cashBdgtAmtList[10].lcatFilafSmexFndsAcmlAmt)+'</th>          ';
    cashBdgtAmtTable1 += '            <th>'+FIN03003M00.onNumberWithCommas(cashBdgtAmtList[11].lcatFilafSmexFndsAcmlAmt)+'</th>          ';
    cashBdgtAmtTable1 += '        </tr>                                                                                      ';
    cashBdgtAmtTable1 += '        <tr>                                                                                       ';
    cashBdgtAmtTable1 += '            <td>여유액 차감 후 부족자금 누적액</td>                                                           ';
    cashBdgtAmtTable1 += '            <th>'+FIN03003M00.onNumberWithCommas(cashBdgtAmtList[6].smamtSbafInsfFndsAcmlAmt)+'</th>           ';
    cashBdgtAmtTable1 += '            <th>'+FIN03003M00.onNumberWithCommas(cashBdgtAmtList[7].smamtSbafInsfFndsAcmlAmt)+'</th>           ';
    cashBdgtAmtTable1 += '            <th>'+FIN03003M00.onNumberWithCommas(cashBdgtAmtList[8].smamtSbafInsfFndsAcmlAmt)+'</th>           ';
    cashBdgtAmtTable1 += '            <th>'+FIN03003M00.onNumberWithCommas(cashBdgtAmtList[9].smamtSbafInsfFndsAcmlAmt)+'</th>           ';
    cashBdgtAmtTable1 += '            <th>'+FIN03003M00.onNumberWithCommas(cashBdgtAmtList[10].smamtSbafInsfFndsAcmlAmt)+'</th>          ';
    cashBdgtAmtTable1 += '            <th>'+FIN03003M00.onNumberWithCommas(cashBdgtAmtList[11].smamtSbafInsfFndsAcmlAmt)+'</th>          ';
    cashBdgtAmtTable1 += '        </tr>                                                                                      ';
    cashBdgtAmtTable1 += '        <tr>                                                                                       ';
    cashBdgtAmtTable1 += '            <td>월별 순자금조달액 및 (여유액)</td>                                                            ';
    cashBdgtAmtTable1 += '            <th>'+FIN03003M00.onNumberWithCommas(cashBdgtAmtList[6].pmnhNtFndsPramOverSmexAmt)+'</th>          ';
    cashBdgtAmtTable1 += '            <th>'+FIN03003M00.onNumberWithCommas(cashBdgtAmtList[7].pmnhNtFndsPramOverSmexAmt)+'</th>          ';
    cashBdgtAmtTable1 += '            <th>'+FIN03003M00.onNumberWithCommas(cashBdgtAmtList[8].pmnhNtFndsPramOverSmexAmt)+'</th>          ';
    cashBdgtAmtTable1 += '            <th>'+FIN03003M00.onNumberWithCommas(cashBdgtAmtList[9].pmnhNtFndsPramOverSmexAmt)+'</th>          ';
    cashBdgtAmtTable1 += '            <th>'+FIN03003M00.onNumberWithCommas(cashBdgtAmtList[10].pmnhNtFndsPramOverSmexAmt)+'</th>         ';
    cashBdgtAmtTable1 += '            <th>'+FIN03003M00.onNumberWithCommas(cashBdgtAmtList[11].pmnhNtFndsPramOverSmexAmt)+'</th>         ';
    cashBdgtAmtTable1 += '        </tr>                                                                                      ';
    cashBdgtAmtTable1 += '        <tr>                                                                                       ';
    cashBdgtAmtTable1 += '            <td colspan="7">&nbsp;</td>                                                            ';
    cashBdgtAmtTable1 += '        </tr>                                                                                      ';
    cashBdgtAmtTable1 += '        <tr class="active">                                                                        ';
    cashBdgtAmtTable1 += '            <td>최종여유액</td>                                                                        ';
    cashBdgtAmtTable1 += '            <th>'+FIN03003M00.onNumberWithCommas(cashBdgtAmtList[6].lastSmexAmt)+'</th>                        ';
    cashBdgtAmtTable1 += '            <th>'+FIN03003M00.onNumberWithCommas(cashBdgtAmtList[7].lastSmexAmt)+'</th>                        ';
    cashBdgtAmtTable1 += '            <th>'+FIN03003M00.onNumberWithCommas(cashBdgtAmtList[8].lastSmexAmt)+'</th>                        ';
    cashBdgtAmtTable1 += '            <th>'+FIN03003M00.onNumberWithCommas(cashBdgtAmtList[9].lastSmexAmt)+'</th>                        ';
    cashBdgtAmtTable1 += '            <th>'+FIN03003M00.onNumberWithCommas(cashBdgtAmtList[10].lastSmexAmt)+'</th>                       ';
    cashBdgtAmtTable1 += '            <th>'+FIN03003M00.onNumberWithCommas(cashBdgtAmtList[11].lastSmexAmt)+'</th>                       ';
    cashBdgtAmtTable1 += '        </tr>                                                                                      ';
    cashBdgtAmtTable1 += '        <tr class="active">                                                                        ';
    cashBdgtAmtTable1 += '            <td>최종부족액</td>                                                                        ';
    cashBdgtAmtTable1 += '            <th>'+FIN03003M00.onNumberWithCommas(cashBdgtAmtList[6].lastInsfAmt)+'</th>                        ';
    cashBdgtAmtTable1 += '            <th>'+FIN03003M00.onNumberWithCommas(cashBdgtAmtList[7].lastInsfAmt)+'</th>                        ';
    cashBdgtAmtTable1 += '            <th>'+FIN03003M00.onNumberWithCommas(cashBdgtAmtList[8].lastInsfAmt)+'</th>                        ';
    cashBdgtAmtTable1 += '            <th>'+FIN03003M00.onNumberWithCommas(cashBdgtAmtList[9].lastInsfAmt)+'</th>                        ';
    cashBdgtAmtTable1 += '            <th>'+FIN03003M00.onNumberWithCommas(cashBdgtAmtList[10].lastInsfAmt)+'</th>                       ';
    cashBdgtAmtTable1 += '            <th>'+FIN03003M00.onNumberWithCommas(cashBdgtAmtList[11].lastInsfAmt)+'</th>                       ';
    cashBdgtAmtTable1 += '        </tr>                                                                                      ';
    cashBdgtAmtTable1 += '    </tbody>                                                                                       ';
    cashBdgtAmtTable1 += '</table>                                                                                           ';
    cashBdgtAmtTable1 += '<!--//현금예산테이블-->                                                                                  ';
    cashBdgtAmtTable1 += '</div>                                                                                             ';

    $("#cashBdgtAmtTable1").html(cashBdgtAmtTable1);
};

FIN03003M00Component.prototype.onResult = function() {
    console.log('onResult Start');
    overlay.show();
    finService.getEstmIs(finCom.alyid, finCom.stacYy, qsrtInfo, FIN03003M00.resultCallback);
};

FIN03003M00Component.prototype.resultCallback = function(result) {

    if (result != null) {

         var res = JSON.parse(result);

        if (res.success) {
            overlay.hide();
            var data = res.data.result;

            cashFlowResultInfo = data;

            if (cashFlowResultInfo != null && cashFlowResultInfo != undefined) {
                cashFlowResultLength = 1;
            }
            
            if ( cashFlowResultLength > 0 ) {
                FIN03003M00.ResultView();
            }

        } else {
            bootbox.alert(res.msg);
            overlay.hide();
        }

    } else {
        overlay.hide();
    }    

};

FIN03003M00Component.prototype.ResultView = function() {

    var cashFlowResult = '';

    cashFlowResult +='                                                                                                                                 ';
    cashFlowResult +='        <div class="row">                                                                                                        ';
    cashFlowResult +='                                                                                                                                 ';
    cashFlowResult +='            <div class="col-lg-12">                                                                                              ';
    cashFlowResult +='                <div class="panel">                                                                                              ';
    cashFlowResult +='                    <div class="panel-heading">                                                                                  ';
    cashFlowResult +='                        <h3 class="panel-title">1년간 현금흐름이 경영활동에 미치는 결과</h3>                                                    ';
    cashFlowResult +='                    </div>                                                                                                       ';
    cashFlowResult +='                                                                                                                                 ';
    cashFlowResult +='                    <div class="panel-body text-lg text-center">                                                                 ';
    cashFlowResult +='                        <div class="col-lg-3">                                                                                   ';
    cashFlowResult +='                            <div class="panel panel-success panel-colorful">                                                     ';
    cashFlowResult +='                                <div class="pad-all text-center">                                                                ';
    cashFlowResult +='                                    <span class="text-3x text-thin">'+cashFlowResultInfo.mnbsSttsCon+'</span>                        ';
    cashFlowResult +='                                    <p>1년간 경영상태</p>                                                                             ';
    cashFlowResult +='                                </div>                                                                                           ';
    cashFlowResult +='                            </div>                                                                                               ';
    cashFlowResult +='                        </div>                                                                                                   ';
    cashFlowResult +='                        <div class="col-lg-3">                                                                                   ';
    cashFlowResult +='                            <div class="panel panel-purple panel-colorful">                                                      ';
    cashFlowResult +='                                <div class="pad-all text-center">                                                                ';
    cashFlowResult +='                                    <span class="text-3x text-thin">'+FIN03003M00.onNumberWithCommas(cashFlowResultInfo.mnbsAcvtRslt)+'</span>   ';
    cashFlowResult +='                                    <p>연간 경영활동 결과 '+cashFlowResultInfo.mnbsAcvtRsltCon+'</p>                                        ';
    cashFlowResult +='                                </div>                                                                                           ';
    cashFlowResult +='                            </div>                                                                                               ';
    cashFlowResult +='                        </div>                                                                                                   ';
    cashFlowResult +='                        <div class="col-lg-3">                                                                                   ';
    cashFlowResult +='                            <div class="panel panel-warning panel-colorful">                                                     ';
    cashFlowResult +='                                <div class="pad-all text-center">                                                                ';
    cashFlowResult +='                                    <span class="text-3x text-thin">'+FIN03003M00.onNumberWithCommas(cashFlowResultInfo.lastInsfAmt)+'</span>    ';
    cashFlowResult +='                                    <p>연간 부족자금('+cashFlowResultInfo.amtUnitNm+')</p>                                                                            ';
    cashFlowResult +='                                </div>                                                                                           ';
    cashFlowResult +='                            </div>                                                                                               ';
    cashFlowResult +='                        </div>                                                                                                   ';
    cashFlowResult +='                        <div class="col-lg-3">                                                                                   ';
    cashFlowResult +='                            <div class="panel panel-primary panel-colorful">                                                     ';
    cashFlowResult +='                                <div class="pad-all text-center">                                                                ';
    cashFlowResult +='                                    <span class="text-3x text-thin">'+FIN03003M00.onNumberWithCommas(cashFlowResultInfo.lastSmexAmt)+'</span>    ';
    cashFlowResult +='                                    <p>연간 여유자금('+cashFlowResultInfo.amtUnitNm+')</p>                                                                            ';
    cashFlowResult +='                                </div>                                                                                           ';
    cashFlowResult +='                            </div>                                                                                               ';
    cashFlowResult +='                        </div>                                                                                                   ';
    cashFlowResult +='                                                                                                                                 ';
    cashFlowResult +='                    </div>                                                                                                       ';
    cashFlowResult +='                </div>                                                                                                           ';
    cashFlowResult +='            </div>                                                                                                               ';
    cashFlowResult +='                                                                                                                                 ';
    cashFlowResult +='        </div>                                                                                                                   ';
    cashFlowResult +='                                                                                                                                 ';
    cashFlowResult +='                                                                                                                                 ';
    cashFlowResult +='        <div class="row">                                                                                                        ';
    cashFlowResult +='                                                                                                                                 ';
    cashFlowResult +='            <div class="col-lg-4">                                                                                               ';
    cashFlowResult +='                <div class="panel">                                                                                              ';
    cashFlowResult +='                    <div class="panel-heading">                                                                                  ';
    cashFlowResult +='                        <h3 class="panel-title">추정손익계산서</h3>                                                                    ';
    cashFlowResult +='                    </div>                                                                                                       ';
    cashFlowResult +='                                                                                                                                 ';
    cashFlowResult +='                    <div class="panel-body">                                                                                     ';
    cashFlowResult +='                                                                                                                                 ';
    cashFlowResult +='                       <table class="table table-condensed">                                                                     ';
    cashFlowResult +='                            <thead>                                                                                              ';
    cashFlowResult +='                                <tr class="active text-lg">                                                                      ';
    cashFlowResult +='                                    <th>항목</th>                                                                                  ';
    cashFlowResult +='                                    <th>금액</th>                                                                                  ';
    cashFlowResult +='                                    <th>%</th>                                                                                   ';
    cashFlowResult +='                                </tr>                                                                                            ';
    cashFlowResult +='                            </thead>                                                                                             ';
    cashFlowResult +='                            <tbody>                                                                                              ';
    cashFlowResult +='                                <tr>                                                                                             ';
    cashFlowResult +='                                    <td>매출액</td>                                                                                 ';
    cashFlowResult +='                                    <td>'+FIN03003M00.onNumberWithCommas(cashFlowResultInfo.salesAmt)+'</td>                                     ';
    cashFlowResult +='                                    <td>'+FIN03003M00.onNumberWithCommas(cashFlowResultInfo.salesAmtRatio)+' %</td>                              ';
    cashFlowResult +='                                </tr>                                                                                            ';
    cashFlowResult +='                                <tr>                                                                                             ';
    cashFlowResult +='                                    <td>매출원가</td>                                                                                ';
    cashFlowResult +='                                    <td>'+FIN03003M00.onNumberWithCommas(cashFlowResultInfo.salesCostAmt)+'</td>                                 ';
    cashFlowResult +='                                    <td>'+FIN03003M00.onNumberWithCommas(cashFlowResultInfo.salesCostAmtRatio)+' %</td>                          ';
    cashFlowResult +='                                </tr>                                                                                            ';
    cashFlowResult +='                                <tr>                                                                                             ';
    cashFlowResult +='                                    <td>매출이익</td>                                                                                ';
    cashFlowResult +='                                    <td>'+FIN03003M00.onNumberWithCommas(cashFlowResultInfo.amslPrftAmt)+'</td>                                  ';
    cashFlowResult +='                                    <td>'+FIN03003M00.onNumberWithCommas(cashFlowResultInfo.amslPrftAmtRatio)+' %</td>                           ';
    cashFlowResult +='                                </tr>                                                                                            ';
    cashFlowResult +='                                <tr>                                                                                             ';
    cashFlowResult +='                                    <td>일반관리비</td>                                                                              ';
    cashFlowResult +='                                    <td>'+FIN03003M00.onNumberWithCommas(cashFlowResultInfo.mnepAmt)+'</td>                                      ';
    cashFlowResult +='                                    <td>'+FIN03003M00.onNumberWithCommas(cashFlowResultInfo.mnepAmtRatio)+' %</td>                               ';
    cashFlowResult +='                                </tr>                                                                                            ';
    cashFlowResult +='                                <tr>                                                                                             ';
    cashFlowResult +='                                    <td>영업이익</td>                                                                                ';
    cashFlowResult +='                                    <td>'+FIN03003M00.onNumberWithCommas(cashFlowResultInfo.opprAmt)+'</td>                                      ';
    cashFlowResult +='                                    <td>'+FIN03003M00.onNumberWithCommas(cashFlowResultInfo.opprAmtRatio)+' %</td>                               ';
    cashFlowResult +='                                </tr>                                                                                            ';
    cashFlowResult +='                                <tr>                                                                                             ';
    cashFlowResult +='                                    <td>금융비용</td>                                                                                ';
    cashFlowResult +='                                    <td>'+FIN03003M00.onNumberWithCommas(cashFlowResultInfo.inepAmt)+'</td>                                      ';
    cashFlowResult +='                                    <td>'+FIN03003M00.onNumberWithCommas(cashFlowResultInfo.inepAmtRatio)+' %</td>                               ';
    cashFlowResult +='                                </tr>                                                                                            ';
    cashFlowResult +='                                <tr>                                                                                             ';
    cashFlowResult +='                                    <td>법인세차감전이익</td>                                                                           ';
    cashFlowResult +='                                    <td>'+FIN03003M00.onNumberWithCommas(cashFlowResultInfo.orpfAmt)+'</td>                                      ';
    cashFlowResult +='                                    <td>'+FIN03003M00.onNumberWithCommas(cashFlowResultInfo.orpfAmtRatio)+' %</td>                               ';
    cashFlowResult +='                                </tr>                                                                                            ';
    cashFlowResult +='                                <tr>                                                                                             ';
    cashFlowResult +='                                    <td>법인세</td>                                                                                 ';
    cashFlowResult +='                                    <td>'+FIN03003M00.onNumberWithCommas(cashFlowResultInfo.crtxAmt)+'</td>                                      ';
    cashFlowResult +='                                    <td>'+FIN03003M00.onNumberWithCommas(cashFlowResultInfo.crtxAmtRatio)+' %</td>                               ';
    cashFlowResult +='                                </tr>                                                                                            ';
    cashFlowResult +='                                <tr>                                                                                             ';
    cashFlowResult +='                                    <td>당기순이익</td>                                                                              ';
    cashFlowResult +='                                    <td>'+FIN03003M00.onNumberWithCommas(cashFlowResultInfo.ctnpAmt)+'</td>                                      ';
    cashFlowResult +='                                    <td>'+FIN03003M00.onNumberWithCommas(cashFlowResultInfo.ctnpAmtRatio)+' %</td>                               ';
    cashFlowResult +='                                </tr>                                                                                            ';
    cashFlowResult +='                                <tr>                                                                                             ';
    cashFlowResult +='                                    <td>(감가상각비 제외)</td>                                                                         ';
    cashFlowResult +='                                    <td>'+FIN03003M00.onNumberWithCommas(cashFlowResultInfo.dprcAmt)+'</td>                                      ';
    cashFlowResult +='                                    <td>'+FIN03003M00.onNumberWithCommas(cashFlowResultInfo.dprcAmtRatio)+' %</td>                               ';
    cashFlowResult +='                                </tr>                                                                                            ';
    cashFlowResult +='                           </tbody>                                                                                              ';
    cashFlowResult +='                        </table>                                                                                                 ';
    cashFlowResult +='                                                                                                                                 ';
    cashFlowResult +='                    </div>                                                                                                       ';
    cashFlowResult +='                </div>                                                                                                           ';
    cashFlowResult +='            </div>                                                                                                               ';
    cashFlowResult +='                                                                                                                                 ';
    cashFlowResult +='            <div class="col-lg-8">                                                                                               ';
    cashFlowResult +='                <div class="panel">                                                                                              ';
    cashFlowResult +='                    <div class="panel-heading">                                                                                  ';
    cashFlowResult +='                        <h3 class="panel-title">영업활동으로 인한 현금흐름</h3>                                                             ';
    cashFlowResult +='                    </div>                                                                                                       ';
    cashFlowResult +='                                                                                                                                 ';
    cashFlowResult +='                    <div class="panel-body">                                                                                     ';
    cashFlowResult +='                                                                                                                                 ';
    cashFlowResult +='                        <div class="col-lg-3">                                                                                   ';
    cashFlowResult +='                            <div class="panel panel-success panel-colorful">                                                     ';
    cashFlowResult +='                                <div class="pad-all text-center">                                                                ';
    cashFlowResult +='                                    <span class="text-3x text-thin">'+FIN03003M00.onNumberWithCommas(cashFlowResultInfo.ctnpAmt)+'</span>        ';
    cashFlowResult +='                                    <p><br/>당기순이익</p>                                                                           ';
    cashFlowResult +='                                </div>                                                                                           ';
    cashFlowResult +='                            </div>                                                                                               ';
    cashFlowResult +='                        </div>                                                                                                   ';
    cashFlowResult +='                        <div class="col-lg-3">                                                                                   ';
    cashFlowResult +='                            <div class="panel panel-warning panel-colorful">                                                     ';
    cashFlowResult +='                                <div class="pad-all text-center">                                                                ';
    cashFlowResult +='                                    <span class="text-3x text-thin">'+FIN03003M00.onNumberWithCommas(cashFlowResultInfo.unamAmt)+'</span>        ';
    cashFlowResult +='                                    <p>매출채권감소<br/>(작년도 미지급 현금)</p>                                                             ';
    cashFlowResult +='                                </div>                                                                                           ';
    cashFlowResult +='                            </div>                                                                                               ';
    cashFlowResult +='                        </div>                                                                                                   ';
    cashFlowResult +='                        <div class="col-lg-3">                                                                                   ';
    cashFlowResult +='                            <div class="panel panel-primary panel-colorful">                                                     ';
    cashFlowResult +='                                <div class="pad-all text-center">                                                                ';
    cashFlowResult +='                                    <span class="text-3x text-thin">'+FIN03003M00.onNumberWithCommas(cashFlowResultInfo.ucmrAmt)+'</span>        ';
    cashFlowResult +='                                    <p>매출채권증가<br/>(금년도분 미수입 현금)</p>                                                            ';
    cashFlowResult +='                                </div>                                                                                           ';
    cashFlowResult +='                            </div>                                                                                               ';
    cashFlowResult +='                        </div>                                                                                                   ';
    cashFlowResult +='                        <div class="col-lg-3">                                                                                   ';
    cashFlowResult +='                            <div class="panel panel-purple panel-colorful">                                                      ';
    cashFlowResult +='                                <div class="pad-all text-center">                                                                ';
    cashFlowResult +='                                    <span class="text-3x text-thin">'+FIN03003M00.onNumberWithCommas(cashFlowResultInfo.cashFlowAmt)+'</span>    ';
    cashFlowResult +='                                    <p><br/>현금흐름</p>                                                                             ';
    cashFlowResult +='                                </div>                                                                                           ';
    cashFlowResult +='                            </div>                                                                                               ';
    cashFlowResult +='                        </div>                                                                                                   ';
    cashFlowResult +='                    </div>                                                                                                       ';
    cashFlowResult +='                </div>                                                                                                           ';
    cashFlowResult +='            </div>                                                                                                               ';
    cashFlowResult +='        </div>                                                                                                                   ';
    cashFlowResult +='                                                                                                                                 ';
    cashFlowResult +='                                                                                                                                 ';
    cashFlowResult +='                                                                                                                                 ';
    cashFlowResult +='                                                                                                                                 ';
    cashFlowResult +='                                                                                                                                 ';
    cashFlowResult +='        <hr class="new-section-sm bord-no">                                                                                      ';



    $("#cashFlowResult").html(cashFlowResult);
}

FIN03003M00Component.prototype.onNumberWithCommas = function(totalAmt) {
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

    FIN03003M00.ngOnInit();

});

