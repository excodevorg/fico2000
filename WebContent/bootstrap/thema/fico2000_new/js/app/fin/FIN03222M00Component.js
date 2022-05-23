var FIN03222M00 = new FIN03222M00Component();

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

function FIN03222M00Component() {

};

FIN03222M00Component.prototype.ngOnInit = function () {
    
    console.log('finAplyCom >> ', finAplyCom);

    FIN03222M00.onPlot();

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

            FIN03222M00.onSearch();
            
        }
    }

};

FIN03222M00Component.prototype.onSearch = function () {
    FIN03222M00.initQsrtSave();
};

FIN03222M00Component.prototype.onCashNtFlow = function() {
    console.log("<<<<<< onCashOutCome() start >>>>> ")
    overlay.show();
    finService.getCashNtFlow(finAplyCom.alyid, finAplyCom.stacYy, qsrtInfo, FIN03222M00.setCashNtFlow);
};

FIN03222M00Component.prototype.setCashNtFlow = function(result){

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

FIN03222M00Component.prototype.CashNtFlowView = function() {

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
    cashNtFlowTable += '                <th>'+FIN03222M00.onNumberWithCommas(cashNtFlowList[0].salesAmt)+'</th>                                    ';
    cashNtFlowTable += '                <th>'+FIN03222M00.onNumberWithCommas(cashNtFlowList[1].salesAmt)+'</th>                                    ';
    cashNtFlowTable += '                <th>'+FIN03222M00.onNumberWithCommas(cashNtFlowList[2].salesAmt)+'</th>                                    ';
    cashNtFlowTable += '                <th>'+FIN03222M00.onNumberWithCommas(cashNtFlowList[3].salesAmt)+'</th>                                    ';
    cashNtFlowTable += '                <th>'+FIN03222M00.onNumberWithCommas(cashNtFlowList[4].salesAmt)+'</th>                                    ';
    cashNtFlowTable += '                <th>'+FIN03222M00.onNumberWithCommas(cashNtFlowList[5].salesAmt)+'</th>                                    ';
    cashNtFlowTable += '            </tr>                                                                                              ';
    cashNtFlowTable += '            <tr>                                                                                               ';
    cashNtFlowTable += '                <td>현금수입의 합계</td>                                                                             ';
    cashNtFlowTable += '                <th>'+FIN03222M00.onNumberWithCommas(cashNtFlowList[0].cashIncomeTotalAmt)+'</th>                          ';
    cashNtFlowTable += '                <th>'+FIN03222M00.onNumberWithCommas(cashNtFlowList[1].cashIncomeTotalAmt)+'</th>                          ';
    cashNtFlowTable += '                <th>'+FIN03222M00.onNumberWithCommas(cashNtFlowList[2].cashIncomeTotalAmt)+'</th>                          ';
    cashNtFlowTable += '                <th>'+FIN03222M00.onNumberWithCommas(cashNtFlowList[3].cashIncomeTotalAmt)+'</th>                          ';
    cashNtFlowTable += '                <th>'+FIN03222M00.onNumberWithCommas(cashNtFlowList[4].cashIncomeTotalAmt)+'</th>                          ';
    cashNtFlowTable += '                <th>'+FIN03222M00.onNumberWithCommas(cashNtFlowList[5].cashIncomeTotalAmt)+'</th>                          ';
    cashNtFlowTable += '            </tr>                                                                                              ';
    cashNtFlowTable += '            <tr>                                                                                               ';
    cashNtFlowTable += '                <td class="active text-lg" colspan="13">*현금지출의 추정치</td>                                       ';
    cashNtFlowTable += '            </tr>                                                                                              ';
    cashNtFlowTable += '            <tr>                                                                                               ';
    cashNtFlowTable += '                <td>매출원가</td>                                                                                  ';
    cashNtFlowTable += '                <th>'+FIN03222M00.onNumberWithCommas(cashNtFlowList[0].salesCostAmt)+'</th>                                ';
    cashNtFlowTable += '                <th>'+FIN03222M00.onNumberWithCommas(cashNtFlowList[1].salesCostAmt)+'</th>                                ';
    cashNtFlowTable += '                <th>'+FIN03222M00.onNumberWithCommas(cashNtFlowList[2].salesCostAmt)+'</th>                                ';
    cashNtFlowTable += '                <th>'+FIN03222M00.onNumberWithCommas(cashNtFlowList[3].salesCostAmt)+'</th>                                ';
    cashNtFlowTable += '                <th>'+FIN03222M00.onNumberWithCommas(cashNtFlowList[4].salesCostAmt)+'</th>                                ';
    cashNtFlowTable += '                <th>'+FIN03222M00.onNumberWithCommas(cashNtFlowList[5].salesCostAmt)+'</th>                                ';
    cashNtFlowTable += '            </tr>                                                                                              ';
    cashNtFlowTable += '            <tr>                                                                                               ';
    cashNtFlowTable += '                <td>판매비와 관리비</td>                                                                             ';
    cashNtFlowTable += '                <th>'+FIN03222M00.onNumberWithCommas(cashNtFlowList[0].mnepAmt)+'</th>                                     ';
    cashNtFlowTable += '                <th>'+FIN03222M00.onNumberWithCommas(cashNtFlowList[1].mnepAmt)+'</th>                                     ';
    cashNtFlowTable += '                <th>'+FIN03222M00.onNumberWithCommas(cashNtFlowList[2].mnepAmt)+'</th>                                     ';
    cashNtFlowTable += '                <th>'+FIN03222M00.onNumberWithCommas(cashNtFlowList[3].mnepAmt)+'</th>                                     ';
    cashNtFlowTable += '                <th>'+FIN03222M00.onNumberWithCommas(cashNtFlowList[4].mnepAmt)+'</th>                                     ';
    cashNtFlowTable += '                <th>'+FIN03222M00.onNumberWithCommas(cashNtFlowList[5].mnepAmt)+'</th>                                     ';
    cashNtFlowTable += '            </tr>                                                                                              ';
    cashNtFlowTable += '            <tr>                                                                                               ';
    cashNtFlowTable += '                <td>이자비용</td>                                                                                  ';
    cashNtFlowTable += '                <th>'+FIN03222M00.onNumberWithCommas(cashNtFlowList[0].inepAmt)+'</th>                                     ';
    cashNtFlowTable += '                <th>'+FIN03222M00.onNumberWithCommas(cashNtFlowList[1].inepAmt)+'</th>                                     ';
    cashNtFlowTable += '                <th>'+FIN03222M00.onNumberWithCommas(cashNtFlowList[2].inepAmt)+'</th>                                     ';
    cashNtFlowTable += '                <th>'+FIN03222M00.onNumberWithCommas(cashNtFlowList[3].inepAmt)+'</th>                                     ';
    cashNtFlowTable += '                <th>'+FIN03222M00.onNumberWithCommas(cashNtFlowList[4].inepAmt)+'</th>                                     ';
    cashNtFlowTable += '                <th>'+FIN03222M00.onNumberWithCommas(cashNtFlowList[5].inepAmt)+'</th>                                     ';
    cashNtFlowTable += '            </tr>                                                                                              ';
    cashNtFlowTable += '            <tr>                                                                                               ';
    cashNtFlowTable += '                <td>법인세</td>                                                                                   ';
    cashNtFlowTable += '                <th>'+FIN03222M00.onNumberWithCommas(cashNtFlowList[0].crtxAmt)+'</th>                                     ';
    cashNtFlowTable += '                <th>'+FIN03222M00.onNumberWithCommas(cashNtFlowList[1].crtxAmt)+'</th>                                     ';
    cashNtFlowTable += '                <th>'+FIN03222M00.onNumberWithCommas(cashNtFlowList[2].crtxAmt)+'</th>                                     ';
    cashNtFlowTable += '                <th>'+FIN03222M00.onNumberWithCommas(cashNtFlowList[3].crtxAmt)+'</th>                                     ';
    cashNtFlowTable += '                <th>'+FIN03222M00.onNumberWithCommas(cashNtFlowList[4].crtxAmt)+'</th>                                     ';
    cashNtFlowTable += '                <th>'+FIN03222M00.onNumberWithCommas(cashNtFlowList[5].crtxAmt)+'</th>                                     ';
    cashNtFlowTable += '            </tr>                                                                                              ';
    cashNtFlowTable += '            <tr>                                                                                               ';
    cashNtFlowTable += '                <td>현금배당</td>                                                                                  ';
    cashNtFlowTable += '                <th>'+FIN03222M00.onNumberWithCommas(cashNtFlowList[0].cashDvdnAmt)+'</th>                                 ';
    cashNtFlowTable += '                <th>'+FIN03222M00.onNumberWithCommas(cashNtFlowList[1].cashDvdnAmt)+'</th>                                 ';
    cashNtFlowTable += '                <th>'+FIN03222M00.onNumberWithCommas(cashNtFlowList[2].cashDvdnAmt)+'</th>                                 ';
    cashNtFlowTable += '                <th>'+FIN03222M00.onNumberWithCommas(cashNtFlowList[3].cashDvdnAmt)+'</th>                                 ';
    cashNtFlowTable += '                <th>'+FIN03222M00.onNumberWithCommas(cashNtFlowList[4].cashDvdnAmt)+'</th>                                 ';
    cashNtFlowTable += '                <th>'+FIN03222M00.onNumberWithCommas(cashNtFlowList[5].cashDvdnAmt)+'</th>                                 ';
    cashNtFlowTable += '            </tr>                                                                                              ';
    cashNtFlowTable += '            <tr class="active">                                                                                ';
    cashNtFlowTable += '                <td>지출액의 합계</td>                                                                              ';
    cashNtFlowTable += '                <th>'+FIN03222M00.onNumberWithCommas(cashNtFlowList[0].cashOutComeTotalAmt)+'</th>                         ';
    cashNtFlowTable += '                <th>'+FIN03222M00.onNumberWithCommas(cashNtFlowList[1].cashOutComeTotalAmt)+'</th>                         ';
    cashNtFlowTable += '                <th>'+FIN03222M00.onNumberWithCommas(cashNtFlowList[2].cashOutComeTotalAmt)+'</th>                         ';
    cashNtFlowTable += '                <th>'+FIN03222M00.onNumberWithCommas(cashNtFlowList[3].cashOutComeTotalAmt)+'</th>                         ';
    cashNtFlowTable += '                <th>'+FIN03222M00.onNumberWithCommas(cashNtFlowList[4].cashOutComeTotalAmt)+'</th>                         ';
    cashNtFlowTable += '                <th>'+FIN03222M00.onNumberWithCommas(cashNtFlowList[5].cashOutComeTotalAmt)+'</th>                         ';
    cashNtFlowTable += '            </tr>                                                                                              ';
    cashNtFlowTable += '            <tr>                                                                                               ';
    cashNtFlowTable += '                <td colspan="13">&nbsp;</td>                                                                   ';
    cashNtFlowTable += '            </tr>                                                                                              ';
    cashNtFlowTable += '            <tr>                                                                                               ';
    cashNtFlowTable += '                <td colspan="13" class="active text-lg">*순현금흐름</td>                                           ';
    cashNtFlowTable += '            </tr>                                                                                              ';
    cashNtFlowTable += '            <tr>                                                                                               ';
    cashNtFlowTable += '                <td>순현금흐름</td>                                                                                ';
    cashNtFlowTable += '                <th>'+FIN03222M00.onNumberWithCommas(cashNtFlowList[0].cashNtFlowAmt)+'</th>                               ';
    cashNtFlowTable += '                <th>'+FIN03222M00.onNumberWithCommas(cashNtFlowList[1].cashNtFlowAmt)+'</th>                               ';
    cashNtFlowTable += '                <th>'+FIN03222M00.onNumberWithCommas(cashNtFlowList[2].cashNtFlowAmt)+'</th>                               ';
    cashNtFlowTable += '                <th>'+FIN03222M00.onNumberWithCommas(cashNtFlowList[3].cashNtFlowAmt)+'</th>                               ';
    cashNtFlowTable += '                <th>'+FIN03222M00.onNumberWithCommas(cashNtFlowList[4].cashNtFlowAmt)+'</th>                               ';
    cashNtFlowTable += '                <th>'+FIN03222M00.onNumberWithCommas(cashNtFlowList[5].cashNtFlowAmt)+'</th>                               ';
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
    cashNtFlowTable += '                <th>'+FIN03222M00.onNumberWithCommas(cashNtFlowList[6].salesAmt)+'</th>                                    ';
    cashNtFlowTable += '                <th>'+FIN03222M00.onNumberWithCommas(cashNtFlowList[7].salesAmt)+'</th>                                    ';
    cashNtFlowTable += '                <th>'+FIN03222M00.onNumberWithCommas(cashNtFlowList[8].salesAmt)+'</th>                                    ';
    cashNtFlowTable += '                <th>'+FIN03222M00.onNumberWithCommas(cashNtFlowList[9].salesAmt)+'</th>                                    ';
    cashNtFlowTable += '                <th>'+FIN03222M00.onNumberWithCommas(cashNtFlowList[10].salesAmt)+'</th>                                   ';
    cashNtFlowTable += '                <th>'+FIN03222M00.onNumberWithCommas(cashNtFlowList[11].salesAmt)+'</th>                                   ';
    cashNtFlowTable += '            </tr>                                                                                              ';
    cashNtFlowTable += '            <tr>                                                                                               ';
    cashNtFlowTable += '                <td>현금수입의 합계</td>                                                                             ';
    cashNtFlowTable += '                <th>'+FIN03222M00.onNumberWithCommas(cashNtFlowList[6].cashIncomeTotalAmt)+'</th>                          ';
    cashNtFlowTable += '                <th>'+FIN03222M00.onNumberWithCommas(cashNtFlowList[7].cashIncomeTotalAmt)+'</th>                          ';
    cashNtFlowTable += '                <th>'+FIN03222M00.onNumberWithCommas(cashNtFlowList[8].cashIncomeTotalAmt)+'</th>                          ';
    cashNtFlowTable += '                <th>'+FIN03222M00.onNumberWithCommas(cashNtFlowList[9].cashIncomeTotalAmt)+'</th>                          ';
    cashNtFlowTable += '                <th>'+FIN03222M00.onNumberWithCommas(cashNtFlowList[10].cashIncomeTotalAmt)+'</th>                         ';
    cashNtFlowTable += '                <th>'+FIN03222M00.onNumberWithCommas(cashNtFlowList[11].cashIncomeTotalAmt)+'</th>                         ';
    cashNtFlowTable += '            </tr>                                                                                              ';
    cashNtFlowTable += '            <tr>                                                                                               ';
    cashNtFlowTable += '                <td class="active text-lg" colspan="13">*현금지출의 추정치</td>                                       ';
    cashNtFlowTable += '            </tr>                                                                                              ';
    cashNtFlowTable += '            <tr>                                                                                               ';
    cashNtFlowTable += '                <td>매출원가</td>                                                                                  ';
    cashNtFlowTable += '                <th>'+FIN03222M00.onNumberWithCommas(cashNtFlowList[6].salesCostAmt)+'</th>                                ';
    cashNtFlowTable += '                <th>'+FIN03222M00.onNumberWithCommas(cashNtFlowList[7].salesCostAmt)+'</th>                                ';
    cashNtFlowTable += '                <th>'+FIN03222M00.onNumberWithCommas(cashNtFlowList[8].salesCostAmt)+'</th>                                ';
    cashNtFlowTable += '                <th>'+FIN03222M00.onNumberWithCommas(cashNtFlowList[9].salesCostAmt)+'</th>                                ';
    cashNtFlowTable += '                <th>'+FIN03222M00.onNumberWithCommas(cashNtFlowList[10].salesCostAmt)+'</th>                               ';
    cashNtFlowTable += '                <th>'+FIN03222M00.onNumberWithCommas(cashNtFlowList[11].salesCostAmt)+'</th>                               ';
    cashNtFlowTable += '            </tr>                                                                                              ';
    cashNtFlowTable += '            <tr>                                                                                               ';
    cashNtFlowTable += '                <td>판매비와 관리비</td>                                                                             ';
    cashNtFlowTable += '                <th>'+FIN03222M00.onNumberWithCommas(cashNtFlowList[6].mnepAmt)+'</th>                                     ';
    cashNtFlowTable += '                <th>'+FIN03222M00.onNumberWithCommas(cashNtFlowList[7].mnepAmt)+'</th>                                     ';
    cashNtFlowTable += '                <th>'+FIN03222M00.onNumberWithCommas(cashNtFlowList[8].mnepAmt)+'</th>                                     ';
    cashNtFlowTable += '                <th>'+FIN03222M00.onNumberWithCommas(cashNtFlowList[9].mnepAmt)+'</th>                                     ';
    cashNtFlowTable += '                <th>'+FIN03222M00.onNumberWithCommas(cashNtFlowList[10].mnepAmt)+'</th>                                    ';
    cashNtFlowTable += '                <th>'+FIN03222M00.onNumberWithCommas(cashNtFlowList[11].mnepAmt)+'</th>                                    ';
    cashNtFlowTable += '            </tr>                                                                                              ';
    cashNtFlowTable += '            <tr>                                                                                               ';
    cashNtFlowTable += '                <td>이자비용</td>                                                                                  ';
    cashNtFlowTable += '                <th>'+FIN03222M00.onNumberWithCommas(cashNtFlowList[6].inepAmt)+'</th>                                     ';
    cashNtFlowTable += '                <th>'+FIN03222M00.onNumberWithCommas(cashNtFlowList[7].inepAmt)+'</th>                                     ';
    cashNtFlowTable += '                <th>'+FIN03222M00.onNumberWithCommas(cashNtFlowList[8].inepAmt)+'</th>                                     ';
    cashNtFlowTable += '                <th>'+FIN03222M00.onNumberWithCommas(cashNtFlowList[9].inepAmt)+'</th>                                     ';
    cashNtFlowTable += '                <th>'+FIN03222M00.onNumberWithCommas(cashNtFlowList[10].inepAmt)+'</th>                                    ';
    cashNtFlowTable += '                <th>'+FIN03222M00.onNumberWithCommas(cashNtFlowList[11].inepAmt)+'</th>                                    ';
    cashNtFlowTable += '            </tr>                                                                                              ';
    cashNtFlowTable += '            <tr>                                                                                               ';
    cashNtFlowTable += '                <td>법인세</td>                                                                                   ';
    cashNtFlowTable += '                <th>'+FIN03222M00.onNumberWithCommas(cashNtFlowList[6].crtxAmt)+'</th>                                     ';
    cashNtFlowTable += '                <th>'+FIN03222M00.onNumberWithCommas(cashNtFlowList[7].crtxAmt)+'</th>                                     ';
    cashNtFlowTable += '                <th>'+FIN03222M00.onNumberWithCommas(cashNtFlowList[8].crtxAmt)+'</th>                                     ';
    cashNtFlowTable += '                <th>'+FIN03222M00.onNumberWithCommas(cashNtFlowList[9].crtxAmt)+'</th>                                     ';
    cashNtFlowTable += '                <th>'+FIN03222M00.onNumberWithCommas(cashNtFlowList[10].crtxAmt)+'</th>                                    ';
    cashNtFlowTable += '                <th>'+FIN03222M00.onNumberWithCommas(cashNtFlowList[11].crtxAmt)+'</th>                                    ';
    cashNtFlowTable += '            </tr>                                                                                              ';
    cashNtFlowTable += '            <tr>                                                                                               ';
    cashNtFlowTable += '                <td>현금배당</td>                                                                                  ';
    cashNtFlowTable += '                <th>'+FIN03222M00.onNumberWithCommas(cashNtFlowList[6].cashDvdnAmt)+'</th>                                 ';
    cashNtFlowTable += '                <th>'+FIN03222M00.onNumberWithCommas(cashNtFlowList[7].cashDvdnAmt)+'</th>                                 ';
    cashNtFlowTable += '                <th>'+FIN03222M00.onNumberWithCommas(cashNtFlowList[8].cashDvdnAmt)+'</th>                                 ';
    cashNtFlowTable += '                <th>'+FIN03222M00.onNumberWithCommas(cashNtFlowList[9].cashDvdnAmt)+'</th>                                 ';
    cashNtFlowTable += '                <th>'+FIN03222M00.onNumberWithCommas(cashNtFlowList[10].cashDvdnAmt)+'</th>                                ';
    cashNtFlowTable += '                <th>'+FIN03222M00.onNumberWithCommas(cashNtFlowList[11].cashDvdnAmt)+'</th>                                ';
    cashNtFlowTable += '            </tr>                                                                                              ';
    cashNtFlowTable += '            <tr class="active">                                                                                ';
    cashNtFlowTable += '                <td>지출액의 합계</td>                                                                              ';
    cashNtFlowTable += '                <th>'+FIN03222M00.onNumberWithCommas(cashNtFlowList[6].cashOutComeTotalAmt)+'</th>                         ';
    cashNtFlowTable += '                <th>'+FIN03222M00.onNumberWithCommas(cashNtFlowList[7].cashOutComeTotalAmt)+'</th>                         ';
    cashNtFlowTable += '                <th>'+FIN03222M00.onNumberWithCommas(cashNtFlowList[8].cashOutComeTotalAmt)+'</th>                         ';
    cashNtFlowTable += '                <th>'+FIN03222M00.onNumberWithCommas(cashNtFlowList[9].cashOutComeTotalAmt)+'</th>                         ';
    cashNtFlowTable += '                <th>'+FIN03222M00.onNumberWithCommas(cashNtFlowList[10].cashOutComeTotalAmt)+'</th>                        ';
    cashNtFlowTable += '                <th>'+FIN03222M00.onNumberWithCommas(cashNtFlowList[11].cashOutComeTotalAmt)+'</th>                        ';
    cashNtFlowTable += '            </tr>                                                                                              ';
    cashNtFlowTable += '            <tr>                                                                                               ';
    cashNtFlowTable += '                <td colspan="13">&nbsp;</td>                                                                   ';
    cashNtFlowTable += '            </tr>                                                                                              ';
    cashNtFlowTable += '            <tr>                                                                                               ';
    cashNtFlowTable += '                <td colspan="13" class="active text-lg">*순현금흐름</td>                                           ';
    cashNtFlowTable += '            </tr>                                                                                              ';
    cashNtFlowTable += '            <tr>                                                                                               ';
    cashNtFlowTable += '                <td>순현금흐름</td>                                                                                ';
    cashNtFlowTable += '                <th>'+FIN03222M00.onNumberWithCommas(cashNtFlowList[6].cashNtFlowAmt)+'</th>                               ';
    cashNtFlowTable += '                <th>'+FIN03222M00.onNumberWithCommas(cashNtFlowList[7].cashNtFlowAmt)+'</th>                               ';
    cashNtFlowTable += '                <th>'+FIN03222M00.onNumberWithCommas(cashNtFlowList[8].cashNtFlowAmt)+'</th>                               ';
    cashNtFlowTable += '                <th>'+FIN03222M00.onNumberWithCommas(cashNtFlowList[9].cashNtFlowAmt)+'</th>                               ';
    cashNtFlowTable += '                <th>'+FIN03222M00.onNumberWithCommas(cashNtFlowList[10].cashNtFlowAmt)+'</th>                              ';
    cashNtFlowTable += '                <th>'+FIN03222M00.onNumberWithCommas(cashNtFlowList[11].cashNtFlowAmt)+'</th>                              ';
    cashNtFlowTable += '            </tr>                                                                                              ';
    cashNtFlowTable += '        </tbody>                                                                                               ';
    cashNtFlowTable += '    </table>                                                                                                   ';
    cashNtFlowTable += '    <!--//순현금흐름테이블-->                                                                                         ';
    cashNtFlowTable += '                                                                                                               ';
    cashNtFlowTable += '</div>                                                                                                         ';

    $("#cashNtFlowTable").html(cashNtFlowTable);

};


FIN03222M00Component.prototype.initQsrtSave = function() {
    overlay.show();
    console.log("initQsrtSave >>> start >>>>" , finAplyCom);
    var res = finService.getQsrtMngRsltInfoList(finAplyCom.alyid, finAplyCom.stacYy, FIN03222M00.qsrtMngRsltCallback);
};

FIN03222M00Component.prototype.qsrtMngRsltCallback = function(data) {

    console.log('qsrtMngRsltCallback' , data);

    if (data != null) {

         var res = JSON.parse(data);

        if (res.success) {

            FIN03222M00.onQstrInfo(res);
            FIN03222M00.onCashNtFlow();
            overlay.hide();

        } else {
            bootbox.alert(res.msg);
            overlay.hide();
        }

    } else {
        overlay.hide();
    }

};

FIN03222M00Component.prototype.onQstrInfo = function(res) {

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

FIN03222M00Component.prototype.onPlot = function() {


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


FIN03222M00Component.prototype.onNumberWithCommas = function(totalAmt) {
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

    FIN03222M00.ngOnInit();



});
