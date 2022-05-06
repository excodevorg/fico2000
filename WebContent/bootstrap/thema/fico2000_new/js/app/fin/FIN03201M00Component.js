var FIN03201M00 = new FIN03201M00Component();

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

function FIN03201M00Component() {

};

FIN03201M00Component.prototype.ngOnInit = function () {
    
    console.log('finAplyCom >> ', finAplyCom);

    $("#initQsrtSave").click(function(){
        FIN03201M00.initQsrtSave();
    });

    $("#onQsrtSave").click(function(){
        FIN03201M00.onQsrtSave();
    });

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

            FIN03201M00.onSearch();
            
        }
    }

};

FIN03201M00Component.prototype.onSearch = function () {
    FIN03201M00.initQsrtSave();
};

FIN03201M00Component.prototype.initQsrtSave = function() {
    overlay.show();
    console.log("initQsrtSave >>> start >>>>" , finAplyCom);
    var res = finService.getQsrtMngRsltInfoList(finAplyCom.alyid, finAplyCom.stacYy, FIN03201M00.qsrtMngRsltCallback);
};

FIN03201M00Component.prototype.qsrtMngRsltCallback = function(data) {

    console.log('qsrtMngRsltCallback' , data);

    if (data != null) {

         var res = JSON.parse(data);

        if (res.success) {

            FIN03201M00.onQstrInfo(res);
            overlay.hide();

        } else {
            bootbox.alert(res.msg);
            overlay.hide();
        }

    } else {
        overlay.hide();
    }

};

FIN03201M00Component.prototype.onQstrInfo = function(res) {

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

    

    year1 = Number(year1) + 1;
    afterYear = "" + year1;

    //////////////////////////////////////////////////////////////////////////////
    // 1) 설문지
    /////////////////////////////////////////////////////////////////////////////

    console.log("qsrtInfo.qsrtNo0 >>> ", (qsrtInfo.qsrtNo0['no1']).rsltVl);
    console.log("qsrtInfo.qsrtNo0 >>> ", (qsrtInfo.qsrtNo0));

    $("#qsrtInfo_qsrtNo0_no1_rsltVl").val((qsrtInfo.qsrtNo0['no1']).rsltVl);

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
    $("#getQsrtNo_qsrtNo41").val(FIN03201M00.getQsrtNo('qsrtNo41'));
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
    
};


FIN03201M00Component.prototype.getQsrtNo = function(qsrtNo) {

    var totalAmt = 0;

    if (qsrtNo == 'qsrtNo41') {

        for (var i = 0 ; i < (qsrtInfo.qsrtNo4['no1']).length; i++) {
            if ((qsrtInfo.qsrtNo4['no1'])[i] != null) totalAmt += Number((qsrtInfo.qsrtNo4['no1'])[i].rsltVl);
        }
    }

    return numberWithCommas(totalAmt);

};

FIN03201M00Component.prototype.onQsrtSave = function() {

    console.log("<<<<<< onQsrtSave() start >>>>> ")

    overlay.show();

    FIN03201M00.onQsrtSave1();

    console.log("ojh >>> " , qsrtInfo);

    finService.saveQsrtMngRsltInfo(finAplyCom.alyid, finAplyCom.stacYy, qsrtInfo, FIN03201M00.qsrtSaveCallback)


};


//1-1
FIN03201M00Component.prototype.onQsrtSave1 = function() {

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


FIN03201M00Component.prototype.qsrtSaveCallback = function(data) {

    console.log('qsrtSaveCallback' , data);

    if (data != null) {

         var res = JSON.parse(data);

        if (res.success) {
            overlay.hide();
            bootbox.alert(res.msg);
            FIN03201M00.initQsrtSave();

        } else {
            bootbox.alert(res.msg);
            overlay.hide();
        }

    } else {
        overlay.hide();
    }
    

};



FIN03201M00Component.prototype.onNumberWithCommas = function(totalAmt) {
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

    FIN03201M00.ngOnInit();



});

