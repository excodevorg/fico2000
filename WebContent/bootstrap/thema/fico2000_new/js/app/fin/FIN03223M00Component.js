var FIN03223M00 = new FIN03223M00Component();

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

function FIN03223M00Component() {

};

FIN03223M00Component.prototype.ngOnInit = function () {
    
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

            FIN03223M00.onSearch();
            
        }
    }

};

FIN03223M00Component.prototype.onSearch = function () {
    FIN03223M00.initQsrtSave();
};

FIN03223M00Component.prototype.onCashBdgtAmt = function() {
    overlay.show();
    finService.getCashBdgtAmt(finAplyCom.alyid, finAplyCom.stacYy, qsrtInfo, FIN03223M00.setCashBdgtAmt)
}

FIN03223M00Component.prototype.setCashBdgtAmt = function(result) {

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
                FIN03223M00.CashBdgtAmtView();
            }

        } else {
            bootbox.alert(res.msg);
            overlay.hide();
        }

    } else {
        overlay.hide();
    }

};


FIN03223M00Component.prototype.CashBdgtAmtView = function() {

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
    cashBdgtAmtTable1 += '            <th>'+FIN03223M00.onNumberWithCommas(cashBdgtAmtList[0].salesAmt)+'</th>                           ';
    cashBdgtAmtTable1 += '            <th>'+FIN03223M00.onNumberWithCommas(cashBdgtAmtList[1].salesAmt)+'</th>                           ';
    cashBdgtAmtTable1 += '            <th>'+FIN03223M00.onNumberWithCommas(cashBdgtAmtList[2].salesAmt)+'</th>                           ';
    cashBdgtAmtTable1 += '            <th>'+FIN03223M00.onNumberWithCommas(cashBdgtAmtList[3].salesAmt)+'</th>                           ';
    cashBdgtAmtTable1 += '            <th>'+FIN03223M00.onNumberWithCommas(cashBdgtAmtList[4].salesAmt)+'</th>                           ';
    cashBdgtAmtTable1 += '            <th>'+FIN03223M00.onNumberWithCommas(cashBdgtAmtList[5].salesAmt)+'</th>                           ';
    cashBdgtAmtTable1 += '        </tr>                                                                                      ';
    cashBdgtAmtTable1 += '        <tr>                                                                                       ';
    cashBdgtAmtTable1 += '            <td>현금수입의 합계</td>                                                                     ';
    cashBdgtAmtTable1 += '            <th>'+FIN03223M00.onNumberWithCommas(cashBdgtAmtList[0].cashIncomeTotalAmt)+'</th>                 ';
    cashBdgtAmtTable1 += '            <th>'+FIN03223M00.onNumberWithCommas(cashBdgtAmtList[1].cashIncomeTotalAmt)+'</th>                 ';
    cashBdgtAmtTable1 += '            <th>'+FIN03223M00.onNumberWithCommas(cashBdgtAmtList[2].cashIncomeTotalAmt)+'</th>                 ';
    cashBdgtAmtTable1 += '            <th>'+FIN03223M00.onNumberWithCommas(cashBdgtAmtList[3].cashIncomeTotalAmt)+'</th>                 ';
    cashBdgtAmtTable1 += '            <th>'+FIN03223M00.onNumberWithCommas(cashBdgtAmtList[4].cashIncomeTotalAmt)+'</th>                 ';
    cashBdgtAmtTable1 += '            <th>'+FIN03223M00.onNumberWithCommas(cashBdgtAmtList[5].cashIncomeTotalAmt)+'</th>                 ';
    cashBdgtAmtTable1 += '        </tr>                                                                                      ';
    cashBdgtAmtTable1 += '        <tr>                                                                                       ';
    cashBdgtAmtTable1 += '            <td colspan="7">&nbsp;</td>                                                            ';
    cashBdgtAmtTable1 += '        </tr>                                                                                      ';
    cashBdgtAmtTable1 += '        <tr>                                                                                       ';
    cashBdgtAmtTable1 += '            <td class="active text-lg" colspan="7">*현금지출의 추정치</td>                                ';
    cashBdgtAmtTable1 += '        </tr>                                                                                      ';
    cashBdgtAmtTable1 += '        <tr>                                                                                       ';
    cashBdgtAmtTable1 += '            <td>매출원가</td>                                                                          ';
    cashBdgtAmtTable1 += '            <th>'+FIN03223M00.onNumberWithCommas(cashBdgtAmtList[0].salesCostAmt)+'</th>                       ';
    cashBdgtAmtTable1 += '            <th>'+FIN03223M00.onNumberWithCommas(cashBdgtAmtList[1].salesCostAmt)+'</th>                       ';
    cashBdgtAmtTable1 += '            <th>'+FIN03223M00.onNumberWithCommas(cashBdgtAmtList[2].salesCostAmt)+'</th>                       ';
    cashBdgtAmtTable1 += '            <th>'+FIN03223M00.onNumberWithCommas(cashBdgtAmtList[3].salesCostAmt)+'</th>                       ';
    cashBdgtAmtTable1 += '            <th>'+FIN03223M00.onNumberWithCommas(cashBdgtAmtList[4].salesCostAmt)+'</th>                       ';
    cashBdgtAmtTable1 += '            <th>'+FIN03223M00.onNumberWithCommas(cashBdgtAmtList[5].salesCostAmt)+'</th>                       ';
    cashBdgtAmtTable1 += '        </tr>                                                                                      ';
    cashBdgtAmtTable1 += '        <tr>                                                                                       ';
    cashBdgtAmtTable1 += '            <td>판매비와 관리비</td>                                                                     ';
    cashBdgtAmtTable1 += '            <th>'+FIN03223M00.onNumberWithCommas(cashBdgtAmtList[0].mnepAmt)+'</th>                            ';
    cashBdgtAmtTable1 += '            <th>'+FIN03223M00.onNumberWithCommas(cashBdgtAmtList[1].mnepAmt)+'</th>                            ';
    cashBdgtAmtTable1 += '            <th>'+FIN03223M00.onNumberWithCommas(cashBdgtAmtList[2].mnepAmt)+'</th>                            ';
    cashBdgtAmtTable1 += '            <th>'+FIN03223M00.onNumberWithCommas(cashBdgtAmtList[3].mnepAmt)+'</th>                            ';
    cashBdgtAmtTable1 += '            <th>'+FIN03223M00.onNumberWithCommas(cashBdgtAmtList[4].mnepAmt)+'</th>                            ';
    cashBdgtAmtTable1 += '            <th>'+FIN03223M00.onNumberWithCommas(cashBdgtAmtList[5].mnepAmt)+'</th>                            ';
    cashBdgtAmtTable1 += '        </tr>                                                                                      ';
    cashBdgtAmtTable1 += '        <tr>                                                                                       ';
    cashBdgtAmtTable1 += '            <td>이자비용</td>                                                                          ';
    cashBdgtAmtTable1 += '            <th>'+FIN03223M00.onNumberWithCommas(cashBdgtAmtList[0].inepAmt)+'</th>                            ';
    cashBdgtAmtTable1 += '            <th>'+FIN03223M00.onNumberWithCommas(cashBdgtAmtList[1].inepAmt)+'</th>                            ';
    cashBdgtAmtTable1 += '            <th>'+FIN03223M00.onNumberWithCommas(cashBdgtAmtList[2].inepAmt)+'</th>                            ';
    cashBdgtAmtTable1 += '            <th>'+FIN03223M00.onNumberWithCommas(cashBdgtAmtList[3].inepAmt)+'</th>                            ';
    cashBdgtAmtTable1 += '            <th>'+FIN03223M00.onNumberWithCommas(cashBdgtAmtList[4].inepAmt)+'</th>                            ';
    cashBdgtAmtTable1 += '            <th>'+FIN03223M00.onNumberWithCommas(cashBdgtAmtList[5].inepAmt)+'</th>                            ';
    cashBdgtAmtTable1 += '        </tr>                                                                                      ';
    cashBdgtAmtTable1 += '        <tr>                                                                                       ';
    cashBdgtAmtTable1 += '            <td>법인세</td>                                                                           ';
    cashBdgtAmtTable1 += '            <th>'+FIN03223M00.onNumberWithCommas(cashBdgtAmtList[0].crtxAmt)+'</th>                            ';
    cashBdgtAmtTable1 += '            <th>'+FIN03223M00.onNumberWithCommas(cashBdgtAmtList[1].crtxAmt)+'</th>                            ';
    cashBdgtAmtTable1 += '            <th>'+FIN03223M00.onNumberWithCommas(cashBdgtAmtList[2].crtxAmt)+'</th>                            ';
    cashBdgtAmtTable1 += '            <th>'+FIN03223M00.onNumberWithCommas(cashBdgtAmtList[3].crtxAmt)+'</th>                            ';
    cashBdgtAmtTable1 += '            <th>'+FIN03223M00.onNumberWithCommas(cashBdgtAmtList[4].crtxAmt)+'</th>                            ';
    cashBdgtAmtTable1 += '            <th>'+FIN03223M00.onNumberWithCommas(cashBdgtAmtList[5].crtxAmt)+'</th>                            ';
    cashBdgtAmtTable1 += '        </tr>                                                                                      ';
    cashBdgtAmtTable1 += '        <tr>                                                                                       ';
    cashBdgtAmtTable1 += '            <td>현금배당</td>                                                                          ';
    cashBdgtAmtTable1 += '            <th>'+FIN03223M00.onNumberWithCommas(cashBdgtAmtList[0].cashDvdnAmt)+'</th>                        ';
    cashBdgtAmtTable1 += '            <th>'+FIN03223M00.onNumberWithCommas(cashBdgtAmtList[1].cashDvdnAmt)+'</th>                        ';
    cashBdgtAmtTable1 += '            <th>'+FIN03223M00.onNumberWithCommas(cashBdgtAmtList[2].cashDvdnAmt)+'</th>                        ';
    cashBdgtAmtTable1 += '            <th>'+FIN03223M00.onNumberWithCommas(cashBdgtAmtList[3].cashDvdnAmt)+'</th>                        ';
    cashBdgtAmtTable1 += '            <th>'+FIN03223M00.onNumberWithCommas(cashBdgtAmtList[4].cashDvdnAmt)+'</th>                        ';
    cashBdgtAmtTable1 += '            <th>'+FIN03223M00.onNumberWithCommas(cashBdgtAmtList[5].cashDvdnAmt)+'</th>                        ';
    cashBdgtAmtTable1 += '        </tr>                                                                                      ';
    cashBdgtAmtTable1 += '        <tr class="active">                                                                        ';
    cashBdgtAmtTable1 += '            <td>지출액의 합계</td>                                                                      ';
    cashBdgtAmtTable1 += '            <th>'+FIN03223M00.onNumberWithCommas(cashBdgtAmtList[0].cashOutComeTotalAmt)+'</th>                ';
    cashBdgtAmtTable1 += '            <th>'+FIN03223M00.onNumberWithCommas(cashBdgtAmtList[1].cashOutComeTotalAmt)+'</th>                ';
    cashBdgtAmtTable1 += '            <th>'+FIN03223M00.onNumberWithCommas(cashBdgtAmtList[2].cashOutComeTotalAmt)+'</th>                ';
    cashBdgtAmtTable1 += '            <th>'+FIN03223M00.onNumberWithCommas(cashBdgtAmtList[3].cashOutComeTotalAmt)+'</th>                ';
    cashBdgtAmtTable1 += '            <th>'+FIN03223M00.onNumberWithCommas(cashBdgtAmtList[4].cashOutComeTotalAmt)+'</th>                ';
    cashBdgtAmtTable1 += '            <th>'+FIN03223M00.onNumberWithCommas(cashBdgtAmtList[5].cashOutComeTotalAmt)+'</th>                ';
    cashBdgtAmtTable1 += '        </tr>                                                                                      ';
    cashBdgtAmtTable1 += '        <tr>                                                                                       ';
    cashBdgtAmtTable1 += '            <td colspan="7">&nbsp;</td>                                                            ';
    cashBdgtAmtTable1 += '        </tr>                                                                                      ';
    cashBdgtAmtTable1 += '        <tr>                                                                                       ';
    cashBdgtAmtTable1 += '            <td>순현금흐름</td>                                                                        ';
    cashBdgtAmtTable1 += '            <th>'+FIN03223M00.onNumberWithCommas(cashBdgtAmtList[0].cashNtFlowAmt)+'</th>                      ';
    cashBdgtAmtTable1 += '            <th>'+FIN03223M00.onNumberWithCommas(cashBdgtAmtList[1].cashNtFlowAmt)+'</th>                      ';
    cashBdgtAmtTable1 += '            <th>'+FIN03223M00.onNumberWithCommas(cashBdgtAmtList[2].cashNtFlowAmt)+'</th>                      ';
    cashBdgtAmtTable1 += '            <th>'+FIN03223M00.onNumberWithCommas(cashBdgtAmtList[3].cashNtFlowAmt)+'</th>                      ';
    cashBdgtAmtTable1 += '            <th>'+FIN03223M00.onNumberWithCommas(cashBdgtAmtList[4].cashNtFlowAmt)+'</th>                      ';
    cashBdgtAmtTable1 += '            <th>'+FIN03223M00.onNumberWithCommas(cashBdgtAmtList[5].cashNtFlowAmt)+'</th>                      ';
    cashBdgtAmtTable1 += '        </tr>                                                                                      ';
    cashBdgtAmtTable1 += '        <tr>                                                                                       ';
    cashBdgtAmtTable1 += '            <td>최소현금 보유액</td>                                                                     ';
    cashBdgtAmtTable1 += '            <th>'+FIN03223M00.onNumberWithCommas(cashBdgtAmtList[0].mnmmCashHoldAmt)+'</th>                    ';
    cashBdgtAmtTable1 += '            <th>'+FIN03223M00.onNumberWithCommas(cashBdgtAmtList[1].mnmmCashHoldAmt)+'</th>                    ';
    cashBdgtAmtTable1 += '            <th>'+FIN03223M00.onNumberWithCommas(cashBdgtAmtList[2].mnmmCashHoldAmt)+'</th>                    ';
    cashBdgtAmtTable1 += '            <th>'+FIN03223M00.onNumberWithCommas(cashBdgtAmtList[3].mnmmCashHoldAmt)+'</th>                    ';
    cashBdgtAmtTable1 += '            <th>'+FIN03223M00.onNumberWithCommas(cashBdgtAmtList[4].mnmmCashHoldAmt)+'</th>                    ';
    cashBdgtAmtTable1 += '            <th>'+FIN03223M00.onNumberWithCommas(cashBdgtAmtList[5].mnmmCashHoldAmt)+'</th>                    ';
    cashBdgtAmtTable1 += '        </tr>                                                                                      ';
    cashBdgtAmtTable1 += '        <tr>                                                                                       ';
    cashBdgtAmtTable1 += '            <td>총 현금잔고 예측치</td>                                                                   ';
    cashBdgtAmtTable1 += '            <th>'+FIN03223M00.onNumberWithCommas(cashBdgtAmtList[0].ttchBalnFrcsAmt)+'</th>                    ';
    cashBdgtAmtTable1 += '            <th>'+FIN03223M00.onNumberWithCommas(cashBdgtAmtList[1].ttchBalnFrcsAmt)+'</th>                    ';
    cashBdgtAmtTable1 += '            <th>'+FIN03223M00.onNumberWithCommas(cashBdgtAmtList[2].ttchBalnFrcsAmt)+'</th>                    ';
    cashBdgtAmtTable1 += '            <th>'+FIN03223M00.onNumberWithCommas(cashBdgtAmtList[3].ttchBalnFrcsAmt)+'</th>                    ';
    cashBdgtAmtTable1 += '            <th>'+FIN03223M00.onNumberWithCommas(cashBdgtAmtList[4].ttchBalnFrcsAmt)+'</th>                    ';
    cashBdgtAmtTable1 += '            <th>'+FIN03223M00.onNumberWithCommas(cashBdgtAmtList[5].ttchBalnFrcsAmt)+'</th>                    ';
    cashBdgtAmtTable1 += '        </tr>                                                                                      ';
    cashBdgtAmtTable1 += '        <tr>                                                                                       ';
    cashBdgtAmtTable1 += '            <td colspan="7">&nbsp;</td>                                                            ';
    cashBdgtAmtTable1 += '        </tr>                                                                                      ';
    cashBdgtAmtTable1 += '        <tr>                                                                                       ';
    cashBdgtAmtTable1 += '            <td>부족액 충당 후 여유자금 누적액</td>                                                           ';
    cashBdgtAmtTable1 += '            <th>'+FIN03223M00.onNumberWithCommas(cashBdgtAmtList[0].lcatFilafSmexFndsAcmlAmt)+'</th>           ';
    cashBdgtAmtTable1 += '            <th>'+FIN03223M00.onNumberWithCommas(cashBdgtAmtList[1].lcatFilafSmexFndsAcmlAmt)+'</th>           ';
    cashBdgtAmtTable1 += '            <th>'+FIN03223M00.onNumberWithCommas(cashBdgtAmtList[2].lcatFilafSmexFndsAcmlAmt)+'</th>           ';
    cashBdgtAmtTable1 += '            <th>'+FIN03223M00.onNumberWithCommas(cashBdgtAmtList[3].lcatFilafSmexFndsAcmlAmt)+'</th>           ';
    cashBdgtAmtTable1 += '            <th>'+FIN03223M00.onNumberWithCommas(cashBdgtAmtList[4].lcatFilafSmexFndsAcmlAmt)+'</th>           ';
    cashBdgtAmtTable1 += '            <th>'+FIN03223M00.onNumberWithCommas(cashBdgtAmtList[5].lcatFilafSmexFndsAcmlAmt)+'</th>           ';
    cashBdgtAmtTable1 += '        </tr>                                                                                      ';
    cashBdgtAmtTable1 += '        <tr>                                                                                       ';
    cashBdgtAmtTable1 += '            <td>여유액 차감 후 부족자금 누적액</td>                                                           ';
    cashBdgtAmtTable1 += '            <th>'+FIN03223M00.onNumberWithCommas(cashBdgtAmtList[0].smamtSbafInsfFndsAcmlAmt)+'</th>           ';
    cashBdgtAmtTable1 += '            <th>'+FIN03223M00.onNumberWithCommas(cashBdgtAmtList[1].smamtSbafInsfFndsAcmlAmt)+'</th>           ';
    cashBdgtAmtTable1 += '            <th>'+FIN03223M00.onNumberWithCommas(cashBdgtAmtList[2].smamtSbafInsfFndsAcmlAmt)+'</th>           ';
    cashBdgtAmtTable1 += '            <th>'+FIN03223M00.onNumberWithCommas(cashBdgtAmtList[3].smamtSbafInsfFndsAcmlAmt)+'</th>           ';
    cashBdgtAmtTable1 += '            <th>'+FIN03223M00.onNumberWithCommas(cashBdgtAmtList[4].smamtSbafInsfFndsAcmlAmt)+'</th>           ';
    cashBdgtAmtTable1 += '            <th>'+FIN03223M00.onNumberWithCommas(cashBdgtAmtList[5].smamtSbafInsfFndsAcmlAmt)+'</th>           ';
    cashBdgtAmtTable1 += '        </tr>                                                                                      ';
    cashBdgtAmtTable1 += '        <tr>                                                                                       ';
    cashBdgtAmtTable1 += '            <td>월별 순자금조달액 및 (여유액)</td>                                                            ';
    cashBdgtAmtTable1 += '            <th>'+FIN03223M00.onNumberWithCommas(cashBdgtAmtList[0].pmnhNtFndsPramOverSmexAmt)+'</th>          ';
    cashBdgtAmtTable1 += '            <th>'+FIN03223M00.onNumberWithCommas(cashBdgtAmtList[1].pmnhNtFndsPramOverSmexAmt)+'</th>          ';
    cashBdgtAmtTable1 += '            <th>'+FIN03223M00.onNumberWithCommas(cashBdgtAmtList[2].pmnhNtFndsPramOverSmexAmt)+'</th>          ';
    cashBdgtAmtTable1 += '            <th>'+FIN03223M00.onNumberWithCommas(cashBdgtAmtList[3].pmnhNtFndsPramOverSmexAmt)+'</th>          ';
    cashBdgtAmtTable1 += '            <th>'+FIN03223M00.onNumberWithCommas(cashBdgtAmtList[4].pmnhNtFndsPramOverSmexAmt)+'</th>          ';
    cashBdgtAmtTable1 += '            <th>'+FIN03223M00.onNumberWithCommas(cashBdgtAmtList[5].pmnhNtFndsPramOverSmexAmt)+'</th>          ';
    cashBdgtAmtTable1 += '        </tr>                                                                                      ';
    cashBdgtAmtTable1 += '        <tr>                                                                                       ';
    cashBdgtAmtTable1 += '            <td colspan="7">&nbsp;</td>                                                            ';
    cashBdgtAmtTable1 += '        </tr>                                                                                      ';
    cashBdgtAmtTable1 += '        <tr class="active">                                                                        ';
    cashBdgtAmtTable1 += '            <td>최종여유액</td>                                                                        ';
    cashBdgtAmtTable1 += '            <th>'+FIN03223M00.onNumberWithCommas(cashBdgtAmtList[0].lastSmexAmt)+'</th>                        ';
    cashBdgtAmtTable1 += '            <th>'+FIN03223M00.onNumberWithCommas(cashBdgtAmtList[1].lastSmexAmt)+'</th>                        ';
    cashBdgtAmtTable1 += '            <th>'+FIN03223M00.onNumberWithCommas(cashBdgtAmtList[2].lastSmexAmt)+'</th>                        ';
    cashBdgtAmtTable1 += '            <th>'+FIN03223M00.onNumberWithCommas(cashBdgtAmtList[3].lastSmexAmt)+'</th>                        ';
    cashBdgtAmtTable1 += '            <th>'+FIN03223M00.onNumberWithCommas(cashBdgtAmtList[4].lastSmexAmt)+'</th>                        ';
    cashBdgtAmtTable1 += '            <th>'+FIN03223M00.onNumberWithCommas(cashBdgtAmtList[5].lastSmexAmt)+'</th>                        ';
    cashBdgtAmtTable1 += '        </tr>                                                                                      ';
    cashBdgtAmtTable1 += '        <tr class="active">                                                                        ';
    cashBdgtAmtTable1 += '            <td>최종부족액</td>                                                                        ';
    cashBdgtAmtTable1 += '            <th>'+FIN03223M00.onNumberWithCommas(cashBdgtAmtList[0].lastInsfAmt)+'</th>                        ';
    cashBdgtAmtTable1 += '            <th>'+FIN03223M00.onNumberWithCommas(cashBdgtAmtList[1].lastInsfAmt)+'</th>                        ';
    cashBdgtAmtTable1 += '            <th>'+FIN03223M00.onNumberWithCommas(cashBdgtAmtList[2].lastInsfAmt)+'</th>                        ';
    cashBdgtAmtTable1 += '            <th>'+FIN03223M00.onNumberWithCommas(cashBdgtAmtList[3].lastInsfAmt)+'</th>                        ';
    cashBdgtAmtTable1 += '            <th>'+FIN03223M00.onNumberWithCommas(cashBdgtAmtList[4].lastInsfAmt)+'</th>                        ';
    cashBdgtAmtTable1 += '            <th>'+FIN03223M00.onNumberWithCommas(cashBdgtAmtList[5].lastInsfAmt)+'</th>                        ';
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
    cashBdgtAmtTable1 += '            <th>'+FIN03223M00.onNumberWithCommas(cashBdgtAmtList[6].salesAmt)+'</th>                           ';
    cashBdgtAmtTable1 += '            <th>'+FIN03223M00.onNumberWithCommas(cashBdgtAmtList[7].salesAmt)+'</th>                           ';
    cashBdgtAmtTable1 += '            <th>'+FIN03223M00.onNumberWithCommas(cashBdgtAmtList[8].salesAmt)+'</th>                           ';
    cashBdgtAmtTable1 += '            <th>'+FIN03223M00.onNumberWithCommas(cashBdgtAmtList[9].salesAmt)+'</th>                           ';
    cashBdgtAmtTable1 += '            <th>'+FIN03223M00.onNumberWithCommas(cashBdgtAmtList[10].salesAmt)+'</th>                          ';
    cashBdgtAmtTable1 += '            <th>'+FIN03223M00.onNumberWithCommas(cashBdgtAmtList[11].salesAmt)+'</th>                          ';
    cashBdgtAmtTable1 += '        </tr>                                                                                      ';
    cashBdgtAmtTable1 += '        <tr>                                                                                       ';
    cashBdgtAmtTable1 += '            <td>현금수입의 합계</td>                                                                     ';
    cashBdgtAmtTable1 += '            <th>'+FIN03223M00.onNumberWithCommas(cashBdgtAmtList[6].cashIncomeTotalAmt)+'</th>                 ';
    cashBdgtAmtTable1 += '            <th>'+FIN03223M00.onNumberWithCommas(cashBdgtAmtList[7].cashIncomeTotalAmt)+'</th>                 ';
    cashBdgtAmtTable1 += '            <th>'+FIN03223M00.onNumberWithCommas(cashBdgtAmtList[8].cashIncomeTotalAmt)+'</th>                 ';
    cashBdgtAmtTable1 += '            <th>'+FIN03223M00.onNumberWithCommas(cashBdgtAmtList[9].cashIncomeTotalAmt)+'</th>                 ';
    cashBdgtAmtTable1 += '            <th>'+FIN03223M00.onNumberWithCommas(cashBdgtAmtList[10].cashIncomeTotalAmt)+'</th>                ';
    cashBdgtAmtTable1 += '            <th>'+FIN03223M00.onNumberWithCommas(cashBdgtAmtList[11].cashIncomeTotalAmt)+'</th>                ';
    cashBdgtAmtTable1 += '        </tr>                                                                                      ';
    cashBdgtAmtTable1 += '        <tr>                                                                                       ';
    cashBdgtAmtTable1 += '            <td colspan="7">&nbsp;</td>                                                            ';
    cashBdgtAmtTable1 += '        </tr>                                                                                      ';
    cashBdgtAmtTable1 += '        <tr>                                                                                       ';
    cashBdgtAmtTable1 += '            <td class="active text-lg" colspan="7">*현금지출의 추정치</td>                                ';
    cashBdgtAmtTable1 += '        </tr>                                                                                      ';
    cashBdgtAmtTable1 += '        <tr>                                                                                       ';
    cashBdgtAmtTable1 += '            <td>매출원가</td>                                                                          ';
    cashBdgtAmtTable1 += '            <th>'+FIN03223M00.onNumberWithCommas(cashBdgtAmtList[6].salesCostAmt)+'</th>                       ';
    cashBdgtAmtTable1 += '            <th>'+FIN03223M00.onNumberWithCommas(cashBdgtAmtList[7].salesCostAmt)+'</th>                       ';
    cashBdgtAmtTable1 += '            <th>'+FIN03223M00.onNumberWithCommas(cashBdgtAmtList[8].salesCostAmt)+'</th>                       ';
    cashBdgtAmtTable1 += '            <th>'+FIN03223M00.onNumberWithCommas(cashBdgtAmtList[9].salesCostAmt)+'</th>                       ';
    cashBdgtAmtTable1 += '            <th>'+FIN03223M00.onNumberWithCommas(cashBdgtAmtList[10].salesCostAmt)+'</th>                      ';
    cashBdgtAmtTable1 += '            <th>'+FIN03223M00.onNumberWithCommas(cashBdgtAmtList[11].salesCostAmt)+'</th>                      ';
    cashBdgtAmtTable1 += '        </tr>                                                                                      ';
    cashBdgtAmtTable1 += '        <tr>                                                                                       ';
    cashBdgtAmtTable1 += '            <td>판매비와 관리비</td>                                                                     ';
    cashBdgtAmtTable1 += '            <th>'+FIN03223M00.onNumberWithCommas(cashBdgtAmtList[6].mnepAmt)+'</th>                            ';
    cashBdgtAmtTable1 += '            <th>'+FIN03223M00.onNumberWithCommas(cashBdgtAmtList[7].mnepAmt)+'</th>                            ';
    cashBdgtAmtTable1 += '            <th>'+FIN03223M00.onNumberWithCommas(cashBdgtAmtList[8].mnepAmt)+'</th>                            ';
    cashBdgtAmtTable1 += '            <th>'+FIN03223M00.onNumberWithCommas(cashBdgtAmtList[9].mnepAmt)+'</th>                            ';
    cashBdgtAmtTable1 += '            <th>'+FIN03223M00.onNumberWithCommas(cashBdgtAmtList[10].mnepAmt)+'</th>                           ';
    cashBdgtAmtTable1 += '            <th>'+FIN03223M00.onNumberWithCommas(cashBdgtAmtList[11].mnepAmt)+'</th>                           ';
    cashBdgtAmtTable1 += '        </tr>                                                                                      ';
    cashBdgtAmtTable1 += '        <tr>                                                                                       ';
    cashBdgtAmtTable1 += '            <td>이자비용</td>                                                                          ';
    cashBdgtAmtTable1 += '            <th>'+FIN03223M00.onNumberWithCommas(cashBdgtAmtList[6].inepAmt)+'</th>                            ';
    cashBdgtAmtTable1 += '            <th>'+FIN03223M00.onNumberWithCommas(cashBdgtAmtList[7].inepAmt)+'</th>                            ';
    cashBdgtAmtTable1 += '            <th>'+FIN03223M00.onNumberWithCommas(cashBdgtAmtList[8].inepAmt)+'</th>                            ';
    cashBdgtAmtTable1 += '            <th>'+FIN03223M00.onNumberWithCommas(cashBdgtAmtList[9].inepAmt)+'</th>                            ';
    cashBdgtAmtTable1 += '            <th>'+FIN03223M00.onNumberWithCommas(cashBdgtAmtList[10].inepAmt)+'</th>                           ';
    cashBdgtAmtTable1 += '            <th>'+FIN03223M00.onNumberWithCommas(cashBdgtAmtList[11].inepAmt)+'</th>                           ';
    cashBdgtAmtTable1 += '        </tr>                                                                                      ';
    cashBdgtAmtTable1 += '        <tr>                                                                                       ';
    cashBdgtAmtTable1 += '            <td>법인세</td>                                                                           ';
    cashBdgtAmtTable1 += '            <th>'+FIN03223M00.onNumberWithCommas(cashBdgtAmtList[6].crtxAmt)+'</th>                            ';
    cashBdgtAmtTable1 += '            <th>'+FIN03223M00.onNumberWithCommas(cashBdgtAmtList[7].crtxAmt)+'</th>                            ';
    cashBdgtAmtTable1 += '            <th>'+FIN03223M00.onNumberWithCommas(cashBdgtAmtList[8].crtxAmt)+'</th>                            ';
    cashBdgtAmtTable1 += '            <th>'+FIN03223M00.onNumberWithCommas(cashBdgtAmtList[9].crtxAmt)+'</th>                            ';
    cashBdgtAmtTable1 += '            <th>'+FIN03223M00.onNumberWithCommas(cashBdgtAmtList[10].crtxAmt)+'</th>                           ';
    cashBdgtAmtTable1 += '            <th>'+FIN03223M00.onNumberWithCommas(cashBdgtAmtList[11].crtxAmt)+'</th>                           ';
    cashBdgtAmtTable1 += '        </tr>                                                                                      ';
    cashBdgtAmtTable1 += '        <tr>                                                                                       ';
    cashBdgtAmtTable1 += '            <td>현금배당</td>                                                                          ';
    cashBdgtAmtTable1 += '            <th>'+FIN03223M00.onNumberWithCommas(cashBdgtAmtList[6].cashDvdnAmt)+'</th>                        ';
    cashBdgtAmtTable1 += '            <th>'+FIN03223M00.onNumberWithCommas(cashBdgtAmtList[7].cashDvdnAmt)+'</th>                        ';
    cashBdgtAmtTable1 += '            <th>'+FIN03223M00.onNumberWithCommas(cashBdgtAmtList[8].cashDvdnAmt)+'</th>                        ';
    cashBdgtAmtTable1 += '            <th>'+FIN03223M00.onNumberWithCommas(cashBdgtAmtList[9].cashDvdnAmt)+'</th>                        ';
    cashBdgtAmtTable1 += '            <th>'+FIN03223M00.onNumberWithCommas(cashBdgtAmtList[10].cashDvdnAmt)+'</th>                       ';
    cashBdgtAmtTable1 += '            <th>'+FIN03223M00.onNumberWithCommas(cashBdgtAmtList[11].cashDvdnAmt)+'</th>                       ';
    cashBdgtAmtTable1 += '        </tr>                                                                                      ';
    cashBdgtAmtTable1 += '        <tr class="active">                                                                        ';
    cashBdgtAmtTable1 += '            <td>지출액의 합계</td>                                                                      ';
    cashBdgtAmtTable1 += '            <th>'+FIN03223M00.onNumberWithCommas(cashBdgtAmtList[6].cashOutComeTotalAmt)+'</th>                ';
    cashBdgtAmtTable1 += '            <th>'+FIN03223M00.onNumberWithCommas(cashBdgtAmtList[7].cashOutComeTotalAmt)+'</th>                ';
    cashBdgtAmtTable1 += '            <th>'+FIN03223M00.onNumberWithCommas(cashBdgtAmtList[8].cashOutComeTotalAmt)+'</th>                ';
    cashBdgtAmtTable1 += '            <th>'+FIN03223M00.onNumberWithCommas(cashBdgtAmtList[9].cashOutComeTotalAmt)+'</th>                ';
    cashBdgtAmtTable1 += '            <th>'+FIN03223M00.onNumberWithCommas(cashBdgtAmtList[10].cashOutComeTotalAmt)+'</th>               ';
    cashBdgtAmtTable1 += '            <th>'+FIN03223M00.onNumberWithCommas(cashBdgtAmtList[11].cashOutComeTotalAmt)+'</th>               ';
    cashBdgtAmtTable1 += '        </tr>                                                                                      ';
    cashBdgtAmtTable1 += '        <tr>                                                                                       ';
    cashBdgtAmtTable1 += '            <td colspan="7">&nbsp;</td>                                                            ';
    cashBdgtAmtTable1 += '        </tr>                                                                                      ';
    cashBdgtAmtTable1 += '        <tr>                                                                                       ';
    cashBdgtAmtTable1 += '            <td>순현금흐름</td>                                                                        ';
    cashBdgtAmtTable1 += '            <th>'+FIN03223M00.onNumberWithCommas(cashBdgtAmtList[6].cashNtFlowAmt)+'</th>                      ';
    cashBdgtAmtTable1 += '            <th>'+FIN03223M00.onNumberWithCommas(cashBdgtAmtList[7].cashNtFlowAmt)+'</th>                      ';
    cashBdgtAmtTable1 += '            <th>'+FIN03223M00.onNumberWithCommas(cashBdgtAmtList[8].cashNtFlowAmt)+'</th>                      ';
    cashBdgtAmtTable1 += '            <th>'+FIN03223M00.onNumberWithCommas(cashBdgtAmtList[9].cashNtFlowAmt)+'</th>                      ';
    cashBdgtAmtTable1 += '            <th>'+FIN03223M00.onNumberWithCommas(cashBdgtAmtList[10].cashNtFlowAmt)+'</th>                     ';
    cashBdgtAmtTable1 += '            <th>'+FIN03223M00.onNumberWithCommas(cashBdgtAmtList[11].cashNtFlowAmt)+'</th>                     ';
    cashBdgtAmtTable1 += '        </tr>                                                                                      ';
    cashBdgtAmtTable1 += '        <tr>                                                                                       ';
    cashBdgtAmtTable1 += '            <td>최소현금 보유액</td>                                                                     ';
    cashBdgtAmtTable1 += '            <th>'+FIN03223M00.onNumberWithCommas(cashBdgtAmtList[6].mnmmCashHoldAmt)+'</th>                    ';
    cashBdgtAmtTable1 += '            <th>'+FIN03223M00.onNumberWithCommas(cashBdgtAmtList[7].mnmmCashHoldAmt)+'</th>                    ';
    cashBdgtAmtTable1 += '            <th>'+FIN03223M00.onNumberWithCommas(cashBdgtAmtList[8].mnmmCashHoldAmt)+'</th>                    ';
    cashBdgtAmtTable1 += '            <th>'+FIN03223M00.onNumberWithCommas(cashBdgtAmtList[9].mnmmCashHoldAmt)+'</th>                    ';
    cashBdgtAmtTable1 += '            <th>'+FIN03223M00.onNumberWithCommas(cashBdgtAmtList[10].mnmmCashHoldAmt)+'</th>                   ';
    cashBdgtAmtTable1 += '            <th>'+FIN03223M00.onNumberWithCommas(cashBdgtAmtList[11].mnmmCashHoldAmt)+'</th>                   ';
    cashBdgtAmtTable1 += '        </tr>                                                                                      ';
    cashBdgtAmtTable1 += '        <tr>                                                                                       ';
    cashBdgtAmtTable1 += '            <td>총 현금잔고 예측치</td>                                                                   ';
    cashBdgtAmtTable1 += '            <th>'+FIN03223M00.onNumberWithCommas(cashBdgtAmtList[6].ttchBalnFrcsAmt)+'</th>                    ';
    cashBdgtAmtTable1 += '            <th>'+FIN03223M00.onNumberWithCommas(cashBdgtAmtList[7].ttchBalnFrcsAmt)+'</th>                    ';
    cashBdgtAmtTable1 += '            <th>'+FIN03223M00.onNumberWithCommas(cashBdgtAmtList[8].ttchBalnFrcsAmt)+'</th>                    ';
    cashBdgtAmtTable1 += '            <th>'+FIN03223M00.onNumberWithCommas(cashBdgtAmtList[9].ttchBalnFrcsAmt)+'</th>                    ';
    cashBdgtAmtTable1 += '            <th>'+FIN03223M00.onNumberWithCommas(cashBdgtAmtList[10].ttchBalnFrcsAmt)+'</th>                   ';
    cashBdgtAmtTable1 += '            <th>'+FIN03223M00.onNumberWithCommas(cashBdgtAmtList[11].ttchBalnFrcsAmt)+'</th>                   ';
    cashBdgtAmtTable1 += '        </tr>                                                                                      ';
    cashBdgtAmtTable1 += '        <tr>                                                                                       ';
    cashBdgtAmtTable1 += '            <td colspan="7">&nbsp;</td>                                                            ';
    cashBdgtAmtTable1 += '        </tr>                                                                                      ';
    cashBdgtAmtTable1 += '        <tr>                                                                                       ';
    cashBdgtAmtTable1 += '            <td>부족액 충당 후 여유자금 누적액</td>                                                           ';
    cashBdgtAmtTable1 += '            <th>'+FIN03223M00.onNumberWithCommas(cashBdgtAmtList[6].lcatFilafSmexFndsAcmlAmt)+'</th>           ';
    cashBdgtAmtTable1 += '            <th>'+FIN03223M00.onNumberWithCommas(cashBdgtAmtList[7].lcatFilafSmexFndsAcmlAmt)+'</th>           ';
    cashBdgtAmtTable1 += '            <th>'+FIN03223M00.onNumberWithCommas(cashBdgtAmtList[8].lcatFilafSmexFndsAcmlAmt)+'</th>           ';
    cashBdgtAmtTable1 += '            <th>'+FIN03223M00.onNumberWithCommas(cashBdgtAmtList[9].lcatFilafSmexFndsAcmlAmt)+'</th>           ';
    cashBdgtAmtTable1 += '            <th>'+FIN03223M00.onNumberWithCommas(cashBdgtAmtList[10].lcatFilafSmexFndsAcmlAmt)+'</th>          ';
    cashBdgtAmtTable1 += '            <th>'+FIN03223M00.onNumberWithCommas(cashBdgtAmtList[11].lcatFilafSmexFndsAcmlAmt)+'</th>          ';
    cashBdgtAmtTable1 += '        </tr>                                                                                      ';
    cashBdgtAmtTable1 += '        <tr>                                                                                       ';
    cashBdgtAmtTable1 += '            <td>여유액 차감 후 부족자금 누적액</td>                                                           ';
    cashBdgtAmtTable1 += '            <th>'+FIN03223M00.onNumberWithCommas(cashBdgtAmtList[6].smamtSbafInsfFndsAcmlAmt)+'</th>           ';
    cashBdgtAmtTable1 += '            <th>'+FIN03223M00.onNumberWithCommas(cashBdgtAmtList[7].smamtSbafInsfFndsAcmlAmt)+'</th>           ';
    cashBdgtAmtTable1 += '            <th>'+FIN03223M00.onNumberWithCommas(cashBdgtAmtList[8].smamtSbafInsfFndsAcmlAmt)+'</th>           ';
    cashBdgtAmtTable1 += '            <th>'+FIN03223M00.onNumberWithCommas(cashBdgtAmtList[9].smamtSbafInsfFndsAcmlAmt)+'</th>           ';
    cashBdgtAmtTable1 += '            <th>'+FIN03223M00.onNumberWithCommas(cashBdgtAmtList[10].smamtSbafInsfFndsAcmlAmt)+'</th>          ';
    cashBdgtAmtTable1 += '            <th>'+FIN03223M00.onNumberWithCommas(cashBdgtAmtList[11].smamtSbafInsfFndsAcmlAmt)+'</th>          ';
    cashBdgtAmtTable1 += '        </tr>                                                                                      ';
    cashBdgtAmtTable1 += '        <tr>                                                                                       ';
    cashBdgtAmtTable1 += '            <td>월별 순자금조달액 및 (여유액)</td>                                                            ';
    cashBdgtAmtTable1 += '            <th>'+FIN03223M00.onNumberWithCommas(cashBdgtAmtList[6].pmnhNtFndsPramOverSmexAmt)+'</th>          ';
    cashBdgtAmtTable1 += '            <th>'+FIN03223M00.onNumberWithCommas(cashBdgtAmtList[7].pmnhNtFndsPramOverSmexAmt)+'</th>          ';
    cashBdgtAmtTable1 += '            <th>'+FIN03223M00.onNumberWithCommas(cashBdgtAmtList[8].pmnhNtFndsPramOverSmexAmt)+'</th>          ';
    cashBdgtAmtTable1 += '            <th>'+FIN03223M00.onNumberWithCommas(cashBdgtAmtList[9].pmnhNtFndsPramOverSmexAmt)+'</th>          ';
    cashBdgtAmtTable1 += '            <th>'+FIN03223M00.onNumberWithCommas(cashBdgtAmtList[10].pmnhNtFndsPramOverSmexAmt)+'</th>         ';
    cashBdgtAmtTable1 += '            <th>'+FIN03223M00.onNumberWithCommas(cashBdgtAmtList[11].pmnhNtFndsPramOverSmexAmt)+'</th>         ';
    cashBdgtAmtTable1 += '        </tr>                                                                                      ';
    cashBdgtAmtTable1 += '        <tr>                                                                                       ';
    cashBdgtAmtTable1 += '            <td colspan="7">&nbsp;</td>                                                            ';
    cashBdgtAmtTable1 += '        </tr>                                                                                      ';
    cashBdgtAmtTable1 += '        <tr class="active">                                                                        ';
    cashBdgtAmtTable1 += '            <td>최종여유액</td>                                                                        ';
    cashBdgtAmtTable1 += '            <th>'+FIN03223M00.onNumberWithCommas(cashBdgtAmtList[6].lastSmexAmt)+'</th>                        ';
    cashBdgtAmtTable1 += '            <th>'+FIN03223M00.onNumberWithCommas(cashBdgtAmtList[7].lastSmexAmt)+'</th>                        ';
    cashBdgtAmtTable1 += '            <th>'+FIN03223M00.onNumberWithCommas(cashBdgtAmtList[8].lastSmexAmt)+'</th>                        ';
    cashBdgtAmtTable1 += '            <th>'+FIN03223M00.onNumberWithCommas(cashBdgtAmtList[9].lastSmexAmt)+'</th>                        ';
    cashBdgtAmtTable1 += '            <th>'+FIN03223M00.onNumberWithCommas(cashBdgtAmtList[10].lastSmexAmt)+'</th>                       ';
    cashBdgtAmtTable1 += '            <th>'+FIN03223M00.onNumberWithCommas(cashBdgtAmtList[11].lastSmexAmt)+'</th>                       ';
    cashBdgtAmtTable1 += '        </tr>                                                                                      ';
    cashBdgtAmtTable1 += '        <tr class="active">                                                                        ';
    cashBdgtAmtTable1 += '            <td>최종부족액</td>                                                                        ';
    cashBdgtAmtTable1 += '            <th>'+FIN03223M00.onNumberWithCommas(cashBdgtAmtList[6].lastInsfAmt)+'</th>                        ';
    cashBdgtAmtTable1 += '            <th>'+FIN03223M00.onNumberWithCommas(cashBdgtAmtList[7].lastInsfAmt)+'</th>                        ';
    cashBdgtAmtTable1 += '            <th>'+FIN03223M00.onNumberWithCommas(cashBdgtAmtList[8].lastInsfAmt)+'</th>                        ';
    cashBdgtAmtTable1 += '            <th>'+FIN03223M00.onNumberWithCommas(cashBdgtAmtList[9].lastInsfAmt)+'</th>                        ';
    cashBdgtAmtTable1 += '            <th>'+FIN03223M00.onNumberWithCommas(cashBdgtAmtList[10].lastInsfAmt)+'</th>                       ';
    cashBdgtAmtTable1 += '            <th>'+FIN03223M00.onNumberWithCommas(cashBdgtAmtList[11].lastInsfAmt)+'</th>                       ';
    cashBdgtAmtTable1 += '        </tr>                                                                                      ';
    cashBdgtAmtTable1 += '    </tbody>                                                                                       ';
    cashBdgtAmtTable1 += '</table>                                                                                           ';
    cashBdgtAmtTable1 += '<!--//현금예산테이블-->                                                                                  ';
    cashBdgtAmtTable1 += '</div>                                                                                             ';

    $("#cashBdgtAmtTable1").html(cashBdgtAmtTable1);
};


FIN03223M00Component.prototype.initQsrtSave = function() {
    overlay.show();
    console.log("initQsrtSave >>> start >>>>" , finAplyCom);
    var res = finService.getQsrtMngRsltInfoList(finAplyCom.alyid, finAplyCom.stacYy, FIN03223M00.qsrtMngRsltCallback);
};

FIN03223M00Component.prototype.qsrtMngRsltCallback = function(data) {

    console.log('qsrtMngRsltCallback' , data);

    if (data != null) {

         var res = JSON.parse(data);

        if (res.success) {

            FIN03223M00.onQstrInfo(res);
            FIN03223M00.onCashBdgtAmt();
            overlay.hide();

        } else {
            bootbox.alert(res.msg);
            overlay.hide();
        }

    } else {
        overlay.hide();
    }

};

FIN03223M00Component.prototype.onQstrInfo = function(res) {

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


FIN03223M00Component.prototype.onNumberWithCommas = function(totalAmt) {
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

    FIN03223M00.ngOnInit();



});

