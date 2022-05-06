var FIN03232M00 = new FIN03232M00Component();

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

function FIN03232M00Component() {

};

FIN03232M00Component.prototype.ngOnInit = function () {
    
    console.log('finAplyCom >> ', finAplyCom);

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

            FIN03232M00.onSearch();
            
        }
    }

};

FIN03232M00Component.prototype.onSearch = function () {
    FIN03232M00.initQsrtSave();
};

FIN03232M00Component.prototype.onResult = function() {
    console.log('onResult Start');
    overlay.show();
    finService.getEstmIs(finAplyCom.alyid, finAplyCom.stacYy, qsrtInfo, FIN03232M00.resultCallback);
};

FIN03232M00Component.prototype.resultCallback = function(result) {

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
                FIN03232M00.ResultView();
            }

        } else {
            bootbox.alert(res.msg);
            overlay.hide();
        }

    } else {
        overlay.hide();
    }    

};

FIN03232M00Component.prototype.ResultView = function() {

    var cashFlowResult = '';

    cashFlowResult +='        <div class="row">                                                                                                        ';
    cashFlowResult +='                                                                                                                                 ';
    cashFlowResult +='            <div class="col-lg-12">                                                                                               ';
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
    cashFlowResult +='                                    <span class="text-3x text-thin">'+FIN03232M00.onNumberWithCommas(cashFlowResultInfo.ctnpAmt)+'</span>        ';
    cashFlowResult +='                                    <p><br/>당기순이익</p>                                                                           ';
    cashFlowResult +='                                </div>                                                                                           ';
    cashFlowResult +='                            </div>                                                                                               ';
    cashFlowResult +='                        </div>                                                                                                   ';
    cashFlowResult +='                        <div class="col-lg-3">                                                                                   ';
    cashFlowResult +='                            <div class="panel panel-warning panel-colorful">                                                     ';
    cashFlowResult +='                                <div class="pad-all text-center">                                                                ';
    cashFlowResult +='                                    <span class="text-3x text-thin">'+FIN03232M00.onNumberWithCommas(cashFlowResultInfo.unamAmt)+'</span>        ';
    cashFlowResult +='                                    <p>매출채권감소<br/>(작년도 미지급 현금)</p>                                                             ';
    cashFlowResult +='                                </div>                                                                                           ';
    cashFlowResult +='                            </div>                                                                                               ';
    cashFlowResult +='                        </div>                                                                                                   ';
    cashFlowResult +='                        <div class="col-lg-3">                                                                                   ';
    cashFlowResult +='                            <div class="panel panel-primary panel-colorful">                                                     ';
    cashFlowResult +='                                <div class="pad-all text-center">                                                                ';
    cashFlowResult +='                                    <span class="text-3x text-thin">'+FIN03232M00.onNumberWithCommas(cashFlowResultInfo.ucmrAmt)+'</span>        ';
    cashFlowResult +='                                    <p>매출채권증가<br/>(금년도분 미수입 현금)</p>                                                            ';
    cashFlowResult +='                                </div>                                                                                           ';
    cashFlowResult +='                            </div>                                                                                               ';
    cashFlowResult +='                        </div>                                                                                                   ';
    cashFlowResult +='                        <div class="col-lg-3">                                                                                   ';
    cashFlowResult +='                            <div class="panel panel-purple panel-colorful">                                                      ';
    cashFlowResult +='                                <div class="pad-all text-center">                                                                ';
    cashFlowResult +='                                    <span class="text-3x text-thin">'+FIN03232M00.onNumberWithCommas(cashFlowResultInfo.cashFlowAmt)+'</span>    ';
    cashFlowResult +='                                    <p><br/>현금흐름</p>                                                                             ';
    cashFlowResult +='                                </div>                                                                                           ';
    cashFlowResult +='                            </div>                                                                                               ';
    cashFlowResult +='                        </div>                                                                                                   ';
    cashFlowResult +='                    </div>                                                                                                       ';

    cashFlowResult +='                </div>                                                                                                           ';
    cashFlowResult +='            </div>                                                                                                               ';
    cashFlowResult +='            </div>                                                                                                               ';
    cashFlowResult +='         </div>                                                                                                               ';
    cashFlowResult +='        <hr class="new-section-sm bord-no">                                                                                      ';

    $("#cashFlowResult").html(cashFlowResult);
};


FIN03232M00Component.prototype.initQsrtSave = function() {
    overlay.show();
    console.log("initQsrtSave >>> start >>>>" , finAplyCom);
    var res = finService.getQsrtMngRsltInfoList(finAplyCom.alyid, finAplyCom.stacYy, FIN03232M00.qsrtMngRsltCallback);
};

FIN03232M00Component.prototype.qsrtMngRsltCallback = function(data) {

    console.log('qsrtMngRsltCallback' , data);

    if (data != null) {

         var res = JSON.parse(data);

        if (res.success) {

            FIN03232M00.onQstrInfo(res);
            FIN03232M00.onResult();
            overlay.hide();

        } else {
            bootbox.alert(res.msg);
            overlay.hide();
        }

    } else {
        overlay.hide();
    }

};

FIN03232M00Component.prototype.onQstrInfo = function(res) {

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
};


FIN03232M00Component.prototype.onNumberWithCommas = function(totalAmt) {
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

    FIN03232M00.ngOnInit();



});

