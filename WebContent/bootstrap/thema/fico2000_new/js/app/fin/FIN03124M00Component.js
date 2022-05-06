
var FIN03124M00 = new FIN03124M00Component();

var entpName = "";
var tpbsClsfDcdNm = ""
var enslDcdNm = ""
var enslDcd = ""
var stacYy = ""
var stacYys = [];
var gb = ""
var bzn = ""
var amtUnitNm = ""
var isEnslDcd01 = true;
var isEnslDcd02 = false;
var startLength = 0; 
var isLastest = true;
var rowStartCount = 0;

var stacYyArray = [];

var stacYyArray01 = [];

var stacYyArray02 = [];

var stacYyArray03 = [];

var stacYyInfo = {};

var stacYyInfo01 = {};

var stacYyInfo02 = {};

var stacYyInfo03 = {};

var selectedStacYy = "";

var FAS03010101s = []; //당좌자산
var FAS03010102s = [];  //재고자산

var FAS03010201s = [];  //투자자산
var FAS03010202s = [];  //유형자산
var FAS03010203s = [];  //무형자산
var FAS03010204s = [];  //기타비유동자산

var FAS03010301s = [];  //유동부채
    
var FAS03010401s = [];  //비유동부채

var FAS03010501s = [];  //자본
////////////////////////////////////////////
var FAS03020101s = []; //매출
var FAS03020201s = []; //판매관리비
var FAS03020301s = []; //영업외수익
var FAS03020401s = []; //영업외비용
var FAS03020501s = []; //법인세
///////////////////////////////////////////
var FAS03030101s = []; //당기총제조비용
var FAS03030201s = []; //경비
var FAS03030301s = []; //기타
///////////////////////////////////////////
var FAS03040101s = []; //법인세차감전순이익
var FAS03040201s = []; //인건비
var FAS03040301s = []; //금융비용  
var FAS03040401s = []; //임차료
var FAS03040501s = []; //조세공과 
var FAS03040601s = []; //감가상각비 

var growthArray = []; //성장성
var safeArray = []; //안정성
var profitArray = []; //수익성
var productArray = []; //생산성
var activeArray = []; //활동성
var roaArray = []; //roa
var addValueArray = []; //addValue

var wallTrantArray = [];
var decisionArray = [];
var decgrowthArray = []; //성장성
var decsafeArray = []; //안정성
var decprofitArray = []; //수익성
var decproductArray = []; //생산성
var decactiveArray = []; //활동성

var astTtsmAmt = 0;//자산총금액
var lbltCptsAmt = 0; //부채및자본총금액
var amslAmt = 0; //매출액
var ampmAmt = 0; //매출원가
var amslTtalPlAmt = 0; //매출총손익
var slexExAmt = 0; //판매비와관리비
var bsopPlAmt = 0; //영업손익금액
var nnoeAmt = 0; //영업외수익금액
var nnopExpAmt = 0; //영업외비용금액
var crtxSbbfNtprAmt = 0; //법인세차감전순이익금액
var crtxExpAmt = 0; //법인세비용
var crtrNtPlAmt = 0; //당기순손익금액
var crtrTtalMnfcExpAmt = 0; //당기총제조비용
var mtcsAmt = 0; //재료비
var lbexAmt = 0; //노무비금액
var exnsAmt = 0; //경비금액
var basGdipAmt = 0; //기초제공품원가
var edprGdipInvmAmt = 0; //기말재공품원가
var tgasAmt = 0;//유형자산(타계정)대체액
var crtrPrdtPdcsAmt = 0; //당기제품제조원가

var alyDataSet = [];
var finRatioSet = [];
var wallTrantSet = [];
var decisionSet = [];
var barchart = {};

var wallDecision = "";
var trantDecision = "";

function FIN03124M00Component() {

};

FIN03124M00Component.prototype.ngOnInit = function () {
    
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

            FIN03124M00.onSearch();
            
        }
    }

};


FIN03124M00Component.prototype.onSearch = function () {
 
        entpName = finAplyCom.name;
        stacYy = finAplyCom.stacYy; 
        bzn = finAplyCom.bzn;
        amtUnitNm = finAplyCom.amtUnitNm;
        stacYys = finAplyCom.stacYys;

        console.log('getAnalysisFinDtTypeMaps >>> ', finAplyCom.stacYys);
        finService.getDecisionRatio(finAplyCom.alyid, finAplyCom.userid, finAplyCom.bzn, "Y","", FIN03124M00.decisionCallBack);
};


FIN03124M00Component.prototype.decisionCallBack = function (data) {

    console.log('decisionCallBack' , data);

    if (data != null) {
        var res = JSON.parse(data);

        var bsTable = "";

        if (res.success) {

            stacYyArray03 = [];
            var stacYyValue = "";

            decisionSet = res.data;

            for (var i = 0; i < res.data.stacYys.length; i++) {
                bsTable += FIN03124M00.onDesisionBaseTableView(i, res.data.stacYys[i].name);
            }

            console.log('last', bsTable);

            $("#bsDiv").html(bsTable).trigger("create");
            overlay.hide();

            finService.getFinRatio(finAplyCom.alyid, finAplyCom.userid, finAplyCom.bzn, "Y", enslDcd, FIN03124M00.finRateCallback);

            //FIN03124M00.decisionRatioTable();

            //finService.getFinRatio(finAplyCom.alyid, finAplyCom.userid, finAplyCom.bzn, lastest, enslDcd, FIN03124M00.finRateCallback);

        } else {
            overlay.hide();
            bootbox.alert(res.msg);
        }
 
    } else {
        overlay.hide();
    }

};


FIN03124M00Component.prototype.onDesisionBaseTableView = function(idx, stacYyName) {
	
    var num = Number(idx);
    var size = num + 1;
    var modValue = 0;
	
	var rawB = false;
	
	if (num < 3) {
        modValue = num % 3;
        if (num == 0) {
            rowStartCount = 0;
        }
	}

    var bsTable = "";

    if (rowStartCount == 0) bsTable += '<div class="row" name="bsDiv" style="margin-top:10px;">';

    bsTable += '<div class="col-lg-4">';
    bsTable += '<div class="panel">';
    bsTable += '<div class="panel-heading">';
    bsTable += '<h3 class="panel-title">재무진단 현황 (전체)</h3>';
    bsTable += '</div>';
    bsTable += '<div class="panel-body">';
    bsTable += '( 기준 년도 : ' +stacYyName+ ')';
    bsTable += '<table id="decisionRatioTable'+idx+'" class="table  table-condensed">';
    bsTable += '<thead>';
    bsTable += '<tr>';
    bsTable += '<th class="text-center">항목</th>';
    bsTable += '<th class="text-center">결과</th>';
    bsTable += '</tr>';
    bsTable += '</thead>';
    bsTable += '<tbody>';
    bsTable += '<tr class="active text-lg text-center">';
    bsTable += '<td colspan="2">*성장성</td>';
    bsTable += '</tr>';
    bsTable += '<tr class="active text-lg text-center">';
    bsTable += '<td colspan="2">*안전성</td>';
    bsTable += '</tr>';
    bsTable += '<tr class="active text-lg text-center">';
    bsTable += '<td colspan="2">*수익성</td>';
    bsTable += '</tr>';
    bsTable += '<tr class="active text-lg text-center">';
    bsTable += '<td colspan="2">*생산성</td>';
    bsTable += '</tr>';
    bsTable += '<tr class="active text-lg text-center">';
    bsTable += '<td colspan="2">*활동성</td>';
    bsTable += '</tr>';
    bsTable += '</tbody>';
    bsTable += '</table>';
    bsTable += '</div>';                                       
    bsTable += '</div>';
    bsTable += '</div>';                           
    
    console.log('decisionSet.length >> ', decisionSet.length);
    console.log('size >> ', decisionSet.length);

    if (rowStartCount == 2 || decisionSet.length == size) {
        bsTable += '</div>';
    }

    rowStartCount = rowStartCount + 1;
    
    console.log(rowStartCount, bsTable);
  
    return bsTable;

};

FIN03124M00Component.prototype.decisionRatioTable = function(idx) {

    var decisionRatioTable = "";
 
    decisionRatioTable += " <tr class='active text-lg text-center'>                                                                                                                                                                                                                     ";
    decisionRatioTable += "     <td colspan='2'>*생산성</td>                                                                                                                                                                                                                             ";
    decisionRatioTable += " </tr>                                                                                                                                                                                                                                                       ";
    
    for (var i = 0; i < decproductArray.length; i++) {
    decisionRatioTable += "  <tr>															                                                ";
    decisionRatioTable += "      <td>"+decproductArray[i].itemNm+"</td>                                                                   ";
    if (decproductArray[i].finresult == 'BAD') decisionRatioTable += "<td style='cursor:pointer;'><span title='(기) "+productArray[i].finRatio+" vs (한) "+productArray[i].bokAllRatio+"' class='label label-table label-danger'>"+decproductArray[i].bokresult+"</span></td>";
    if (decproductArray[i].finresult == 'GOOD') decisionRatioTable += "<td style='cursor:pointer;'><span title='(기) "+productArray[i].finRatio+" vs (한) "+productArray[i].bokAllRatio+"' class='label label-table label-success'>"+decproductArray[i].bokresultss+"</span></td>";
    decisionRatioTable += "  </tr>                                                                                                         ";    
    }
    
    
    
        $('#decisionRatioTable'+idx+' > tbody:last').html('');
        $('#decisionRatioTable'+idx+' > tbody:last').append(decisionRatioTable);
    
    };

FIN03124M00Component.prototype.finRateCallback = function(data) {

    console.log('finAnalyCallback' , data);

    if (data != null) {
        var res = JSON.parse(data);

        if (res.success) {

            stacYyArray01 = [];
        
            console.log(res.data.enslDcdNm) ;

            
            tpbsClsfDcdNm = res.data.tpbsClsfDcdNm;

            enslDcdNm = res.data.enslDcdNm;

            finRatioSet = res.data;


            for (var i = 0; i < decisionSet.stacYys.length; i++) {

                decgrowthArray = decisionSet.growth[decisionSet.stacYys[i].value];
                decsafeArray = decisionSet.safe[decisionSet.stacYys[i].value];
                decprofitArray = decisionSet.profit[decisionSet.stacYys[i].value];
                decproductArray = decisionSet.product[decisionSet.stacYys[i].value];
                decactiveArray = decisionSet.active[decisionSet.stacYys[i].value];

                growthArray = res.data.growth[decisionSet.stacYys[i].value];
                safeArray = res.data.safe[decisionSet.stacYys[i].value];
                profitArray = res.data.profit[decisionSet.stacYys[i].value];
                productArray = res.data.product[decisionSet.stacYys[i].value];
                activeArray = res.data.active[decisionSet.stacYys[i].value];
                roaArray = res.data.roa[decisionSet.stacYys[i].value];
                addValueArray = res.data.addValue[decisionSet.stacYys[i].value];

                FIN03124M00.decisionRatioTable(i);

            }


        } else {
            overlay.hide();
            bootbox.alert(res.msg);
        }
 
    } else {
        overlay.hide();
    }

};

FIN03124M00Component.prototype.onNumberWithCommas = function (totalAmt) {
    return numberWithCommas(totalAmt);
};

FIN03124M00Component.prototype.onFinResult = function () {

};


function itemSplit(resArr, smcd) {

    console.log("smcd >>> ", smcd.substring(0,7));
    console.log("smcd >>> ", smcd.substring(0,9));
    console.log("smcd >>> ", smcd.substring(0,11));

    var arr = (((((resArr.finData[smcd.substring(0,7)])['finLrdvcd'])[smcd.substring(0,9)])['finMdvcd'])[smcd.substring(0,11)])['finSmdcd'];

    return arr;
        
}

function numberWithCommas(x) {

    if (x == null || x == '') {
        return "0"
    }

    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

$(document).ready(function() {

    //$(".alert.alert-danger").hide(true);

    $("link[href*='/bootstrap/thema/fico2000/assets/plugins/sky-forms-pro/skyforms/css/sky-forms.css']").remove();
    $("link[href*='/bootstrap/thema/fico2000/assets/plugins/sky-forms-pro/skyforms/custom/custom-sky-forms.css']").remove();
    $("link[href*='/bootstrap/thema/fico2000/assets/css/admin/custom-admin.css']").remove();
    $("link[href*='/bootstrap/thema/fico2000/js/app/adm/ADM01000M00Component.css']").remove();
    
    $('head').append( $('<link rel="stylesheet" type="text/css" />').attr('href', '/bootstrap/thema/fico2000/assets/plugins/sky-forms-pro/skyforms/css/sky-forms.css') );
    $('head').append( $('<link rel="stylesheet" type="text/css" />').attr('href', '/bootstrap/thema/fico2000/assets/plugins/sky-forms-pro/skyforms/custom/custom-sky-forms.css') );
    $('head').append( $('<link rel="stylesheet" type="text/css" />').attr('href', '/bootstrap/thema/fico2000/assets/css/admin/custom-admin.css') );
    $('head').append( $('<link rel="stylesheet" type="text/css" />').attr('href', '/bootstrap/thema/fico2000/js/app/adm/ADM01000M00Component.css') );

    $("#stacYyInfo_1").change(function(){
        console.log($(this).val());
        
        finAplyCom.stacYy = $(this).val();

        

        console.log(finAplyCom);

    });


    FIN03124M00.ngOnInit();

    


});