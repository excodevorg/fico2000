
var FIN03126M00 = new FIN03126M00Component();

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

var totalDecgrowthRatio = {}; //성장성
var totalDecsafeRatio = {}; //안정성
var totalDecprofitRatio  = {}; //수익성
var totalDecproductRatio  = {}; //생산성
var totalDecactiveARatio = {}; //활동성

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

function FIN03126M00Component() {

};

FIN03126M00Component.prototype.ngOnInit = function () {
    
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

            console.log('finAplyCom >>> ', finAplyCom);

            $("select[name='stacYyInfo']").each(function (idx) {
                $("select[name='stacYyInfo']").eq(idx).html('');
                $("select[name='stacYyInfo']").eq(idx).html(finAplyCom.rightStacYyArr);
            });

            finAplyCom.stacYy = $("#stacYyInfo_1").val();

            $("span[name='entpName']").each(function (idx) {
                $("span[name='entpName']").eq(idx).html(finAplyCom.entpName);
            });

            $("span[name='alycon']").each(function (idx) {
                $("span[name='alycon']").eq(idx).html(finAplyCom.alycon);
            });

            FIN03126M00.onSearch();
            
        }
    }

    $("#stacYyInfo_1").on("change", function(){

        var stacYy = $("#stacYyInfo_1").val();

        $("span[name='stacYyInfo03']").each(function (idx) {
            $("span[name='stacYyInfo03']").eq(idx).html(stacYy + ' 년');
        });

        console.log('stacYy >>> ', stacYy);

        finAplyCom.stacYy = stacYy;

        decgrowthArray = decisionSet.growth[stacYy];
        decsafeArray = decisionSet.safe[stacYy];
        decprofitArray = decisionSet.profit[stacYy];
        decproductArray = decisionSet.product[stacYy];
        decactiveArray = decisionSet.active[stacYy];

        growthArray = finRatioSet.growth[stacYy];
        safeArray = finRatioSet.safe[stacYy];
        profitArray = finRatioSet.profit[stacYy];
        productArray = finRatioSet.product[stacYy];
        activeArray = finRatioSet.active[stacYy];
        roaArray = finRatioSet.roa[stacYy];
        addValueArray = finRatioSet.addValue[stacYy];

        FIN03126M00.totalDecisionRatio();

        FIN03126M00.decisionRatioTable();

    });

};


FIN03126M00Component.prototype.onSearch = function () {
 
        entpName = finAplyCom.name;
        stacYy = finAplyCom.stacYy; 
        bzn = finAplyCom.bzn;
        amtUnitNm = finAplyCom.amtUnitNm;
        stacYys = finAplyCom.stacYys;

        console.log('getAnalysisFinDtTypeMaps >>> ', finAplyCom.stacYys);
        finService.getDecisionRatio(finAplyCom.alyid, finAplyCom.userid, finAplyCom.bzn, "Y","", FIN03126M00.decisionCallBack);
};


FIN03126M00Component.prototype.decisionCallBack = function (data) {

    console.log('decisionCallBack' , data);

    if (data != null) {
        var res = JSON.parse(data);

        if (res.success) {

            var stacYyValue = "";
            stacYyValue = finAplyCom.stacYy;

            $("span[name='stacYyInfo03']").each(function (idx) {
                $("span[name='stacYyInfo03']").eq(idx).html('');
                $("span[name='stacYyInfo03']").eq(idx).html(stacYyValue + " 년");
            });

            decgrowthArray = res.data.growth[stacYyValue];
            decsafeArray = res.data.safe[stacYyValue];
            decprofitArray = res.data.profit[stacYyValue];
            decproductArray = res.data.product[stacYyValue];
            decactiveArray = res.data.active[stacYyValue];

            console.log("data555555555 >>> " , decgrowthArray);  
            console.log("data555555555 >>> " , decsafeArray);
            console.log("data555555555 >>> " , decprofitArray);
            console.log("data555555555 >>> " , decproductArray);
            console.log("data555555555 >>> " , decactiveArray);

            decisionSet = res.data;

            overlay.hide();

            finService.getFinRatio(finAplyCom.alyid, finAplyCom.userid, finAplyCom.bzn, "Y","", FIN03126M00.finRateCallback);

        } else {
            overlay.hide();
            bootbox.alert(res.msg);
        }
 
    } else {
        overlay.hide();
    }

};

FIN03126M00Component.prototype.finRateCallback = function(data) {

    console.log('finAnalyCallback' , data);

    if (data != null) {
        var res = JSON.parse(data);

        if (res.success) {

            stacYyArray01 = [];
        
            console.log(res.data.enslDcdNm) ;

            
            tpbsClsfDcdNm = res.data.tpbsClsfDcdNm;

            enslDcdNm = res.data.enslDcdNm;

            $("span[name='enslDcdNm']").each(function (idx) {
                $("span[name='enslDcdNm']").eq(idx).html(enslDcdNm);
            });

            finRatioSet = res.data;

            var stacYyValue = "";

            stacYyValue = finAplyCom.stacYy;
            growthArray = res.data.growth[stacYyValue];
            safeArray = res.data.safe[stacYyValue];
            profitArray = res.data.profit[stacYyValue];
            productArray = res.data.product[stacYyValue];
            activeArray = res.data.active[stacYyValue];
            roaArray = res.data.roa[stacYyValue];
            addValueArray = res.data.addValue[stacYyValue];

            FIN03126M00.totalDecisionRatio();

            FIN03126M00.decisionRatioTable();

            
        } else {
            overlay.hide();
            bootbox.alert(res.msg);
        }
 
    } else {
        overlay.hide();
    }

};

FIN03126M00Component.prototype.totalDecisionRatio = function() {

    var totalDecgrowthlength = decgrowthArray.length;
    var totalDecsafelength = decsafeArray.length;
    var totalDecprofitlength = decprofitArray.length;
    var totalDecproductlength = decproductArray.length;
    var totalDecactivelength = decactiveArray.length;

    var goodDecgrowthlength = 0;
    var goodDecsafelength = 0;
    var goodDecprofitlength = 0;
    var goodDecproductlength = 0;
    var goodDecactivelength = 0;

    var bokGoodDecgrowthlength = 0;
    var bokGoodDecsafelength = 0;
    var bokGoodDecprofitlength = 0;
    var bokGoodDecproductlength = 0;
    var bokGoodDecactivelength = 0;


    for (var i = 0; i < decgrowthArray.length; i++) {

        if (decgrowthArray[i].finresult == 'GOOD') {
            goodDecgrowthlength = goodDecgrowthlength + 1;
        }
        
        if (decgrowthArray[i].bokresult == 'GOOD') {
            bokGoodDecgrowthlength = bokGoodDecgrowthlength + 1;
        }

    }

    for (var i = 0; i < decsafeArray.length; i++) {

        if (decsafeArray[i].finresult == 'GOOD') {
            goodDecsafelength = goodDecsafelength + 1;
        }
        
        if (decsafeArray[i].bokresult == 'GOOD') {
            bokGoodDecsafelength = bokGoodDecsafelength + 1;
        }

    }

    for (var i = 0; i < decprofitArray.length; i++) {

        if (decprofitArray[i].finresult == 'GOOD') {
            goodDecprofitlength = goodDecprofitlength + 1;
        }
        
        if (decprofitArray[i].bokresult == 'GOOD') {
            bokGoodDecprofitlength = bokGoodDecprofitlength + 1;
        }

    }

    for (var i = 0; i < decproductArray.length; i++) {

        if (decproductArray[i].finresult == 'GOOD') {
            goodDecproductlength = goodDecproductlength + 1;
        }
        
        if (decproductArray[i].bokresult == 'GOOD') {
            bokGoodDecproductlength = bokGoodDecproductlength + 1;
        }

    }

    for (var i = 0; i < decactiveArray.length; i++) {

        if (decactiveArray[i].finresult == 'GOOD') {
            goodDecactivelength = goodDecactivelength + 1;
        }
        
        if (decactiveArray[i].bokresult == 'GOOD') {
            bokGoodDecactivelength = bokGoodDecactivelength + 1;
        }

    }

    var finratio = 0;
    var bokratio = 0;

    if (totalDecgrowthlength != undefined && totalDecgrowthlength != null && totalDecgrowthlength != 0) {
        finratio = Math.floor((goodDecgrowthlength / totalDecgrowthlength) * 100);
        bokratio = Math.floor((bokGoodDecgrowthlength / totalDecgrowthlength) * 100);
    } 

    totalDecgrowthRatio = {
        finratio : finratio,
        bokratio : bokratio
    };

    if (totalDecsafelength != undefined && totalDecsafelength != null && totalDecsafelength != 0) {
        finratio = Math.floor((goodDecsafelength / totalDecsafelength) * 100);
        bokratio = Math.floor((bokGoodDecsafelength / totalDecsafelength) * 100);
    } 

    totalDecsafeRatio = {
        finratio : finratio,
        bokratio : bokratio
    };

    if (totalDecprofitlength != undefined && totalDecprofitlength != null && totalDecprofitlength != 0) {
        finratio = Math.floor((goodDecprofitlength / totalDecprofitlength) * 100);
        bokratio = Math.floor((bokGoodDecprofitlength / totalDecprofitlength) * 100);
    } 

    totalDecprofitRatio = {
        finratio : finratio,
        bokratio : bokratio
    };

    if (totalDecproductlength != undefined && totalDecproductlength != null && totalDecproductlength != 0) {
        finratio = Math.floor((goodDecproductlength / totalDecproductlength) * 100);
        bokratio = Math.floor((bokGoodDecproductlength / totalDecproductlength) * 100);
    } 

    totalDecproductRatio = {
        finratio : finratio,
        bokratio : bokratio
    };

    if (totalDecactivelength != undefined && totalDecactivelength != null && totalDecactivelength != 0) {
        finratio = Math.floor((goodDecactivelength / totalDecactivelength) * 100);
        bokratio = Math.floor((bokGoodDecactivelength / totalDecactivelength) * 100);
    } 

    totalDecactiveARatio = {
        finratio : finratio,
        bokratio : bokratio
    };

    console.log('totalDecgrowthRatio >> ', totalDecgrowthRatio);
    console.log('totalDecsafeRatio >> ', totalDecsafeRatio);
    console.log('totalDecprofitRatio >> ', totalDecprofitRatio);
    console.log('totalDecproductRatio >> ', totalDecproductRatio);
    console.log('totalDecactiveARatio >> ', totalDecactiveARatio);

    FIN03126M00.onPlot();

    FIN03126M00.totalDecisionRatioView();

};

FIN03126M00Component.prototype.totalDecisionRatioView = function() {

    var contenthtml = "";
    
    if (totalDecgrowthRatio.finratio > 50) {
        contenthtml += '<div class="panel panel-success panel-colorful">';
        contenthtml += '<div class="pad-all text-center">';
        contenthtml += '<span class="text-lg text-bold">성장성</span><i class="pad-lft demo-pli-like"></i>';
        contenthtml += '</div>';
        contenthtml += '</div>';
    } else if (totalDecgrowthRatio.finratio == 50) {
        contenthtml += '<div class="panel panel-info panel-colorful">';
        contenthtml += '<div class="pad-all text-center">';
        contenthtml += '<span class="text-lg text-bold">성장성</span><i class="pad-lft">-</i>';
        contenthtml += '</div>';
        contenthtml += '</div>';
    } else {
        contenthtml += '<div class="panel panel-danger panel-colorful">';
        contenthtml += '<div class="pad-all text-center">';
        contenthtml += '<span class="text-lg text-bold">성장성</span><i class="pad-lft demo-pli-unlike"></i>';
        contenthtml += '</div>';
        contenthtml += '</div>';
    }

    if (totalDecsafeRatio.finratio > 50) {
        contenthtml += '<div class="panel panel-success panel-colorful">';
        contenthtml += '<div class="pad-all text-center">';
        contenthtml += '<span class="text-lg text-bold">안정성</span><i class="pad-lft demo-pli-like"></i>';
        contenthtml += '</div>';
        contenthtml += '</div>';
    } else if (totalDecsafeRatio.finratio == 50) {
        contenthtml += '<div class="panel panel-info panel-colorful">';
        contenthtml += '<div class="pad-all text-center">';
        contenthtml += '<span class="text-lg text-bold">안정성</span><i class="pad-lft">-</i>';
        contenthtml += '</div>';
        contenthtml += '</div>';
    } else {
        contenthtml += '<div class="panel panel-danger panel-colorful">';
        contenthtml += '<div class="pad-all text-center">';
        contenthtml += '<span class="text-lg text-bold">안정성</span><i class="pad-lft demo-pli-unlike"></i>';
        contenthtml += '</div>';
        contenthtml += '</div>';
    }

    if (totalDecprofitRatio.finratio  > 50) {
        contenthtml += '<div class="panel panel-success panel-colorful">';
        contenthtml += '<div class="pad-all text-center">';
        contenthtml += '<span class="text-lg text-bold">수익성</span><i class="pad-lft demo-pli-like"></i>';
        contenthtml += '</div>';
        contenthtml += '</div>';
    } else if (totalDecprofitRatio.finratio  == 50) {
        contenthtml += '<div class="panel panel-info panel-colorful">';
        contenthtml += '<div class="pad-all text-center">';
        contenthtml += '<span class="text-lg text-bold">수익성</span><i class="pad-lft">-</i>';
        contenthtml += '</div>';
        contenthtml += '</div>';
    } else {
        contenthtml += '<div class="panel panel-danger panel-colorful">';
        contenthtml += '<div class="pad-all text-center">';
        contenthtml += '<span class="text-lg text-bold">수익성</span><i class="pad-lft demo-pli-unlike"></i>';
        contenthtml += '</div>';
        contenthtml += '</div>';
    }

    if (totalDecproductRatio.finratio  > 50) {
        contenthtml += '<div class="panel panel-success panel-colorful">';
        contenthtml += '<div class="pad-all text-center">';
        contenthtml += '<span class="text-lg text-bold">생산성</span><i class="pad-lft demo-pli-like"></i>';
        contenthtml += '</div>';
        contenthtml += '</div>';
    } else if (totalDecproductRatio.finratio  == 50) {
        contenthtml += '<div class="panel panel-info panel-colorful">';
        contenthtml += '<div class="pad-all text-center">';
        contenthtml += '<span class="text-lg text-bold">생산성</span><i class="pad-lft">-</i>';
        contenthtml += '</div>';
        contenthtml += '</div>';
    } else {
        contenthtml += '<div class="panel panel-danger panel-colorful">';
        contenthtml += '<div class="pad-all text-center">';
        contenthtml += '<span class="text-lg text-bold">생산성</span><i class="pad-lft demo-pli-unlike"></i>';
        contenthtml += '</div>';
        contenthtml += '</div>';
    }

    if (totalDecactiveARatio.finratio  > 50) {
        contenthtml += '<div class="panel panel-success panel-colorful">';
        contenthtml += '<div class="pad-all text-center">';
        contenthtml += '<span class="text-lg text-bold">활동성</span><i class="pad-lft demo-pli-like"></i>';
        contenthtml += '</div>';
        contenthtml += '</div>';
    } else if (totalDecactiveARatio.finratio  == 50) {
        contenthtml += '<div class="panel panel-info panel-colorful">';
        contenthtml += '<div class="pad-all text-center">';
        contenthtml += '<span class="text-lg text-bold">활동성</span><i class="pad-lft">-</i>';
        contenthtml += '</div>';
        contenthtml += '</div>';
    } else {
        contenthtml += '<div class="panel panel-danger panel-colorful">';
        contenthtml += '<div class="pad-all text-center">';
        contenthtml += '<span class="text-lg text-bold">활동성</span><i class="pad-lft demo-pli-unlike"></i>';
        contenthtml += '</div>';
        contenthtml += '</div>';
    }

    $("#totalFinDecisionTable").html('');
    $("#totalFinDecisionTable").html(contenthtml).trigger('create');

    contenthtml = "";
    
    if (totalDecgrowthRatio.bokratio > 50) {
        contenthtml += '<div class="panel panel-success panel-colorful">';
        contenthtml += '<div class="pad-all text-center">';
        contenthtml += '<span class="text-lg text-bold">성장성</span><i class="pad-lft demo-pli-like"></i>';
        contenthtml += '</div>';
        contenthtml += '</div>';
    } else if (totalDecgrowthRatio.bokratio == 50) {
        contenthtml += '<div class="panel panel-info panel-colorful">';
        contenthtml += '<div class="pad-all text-center">';
        contenthtml += '<span class="text-lg text-bold">성장성</span><i class="pad-lft">-</i>';
        contenthtml += '</div>';
        contenthtml += '</div>';
    } else {
        contenthtml += '<div class="panel panel-danger panel-colorful">';
        contenthtml += '<div class="pad-all text-center">';
        contenthtml += '<span class="text-lg text-bold">성장성</span><i class="pad-lft demo-pli-unlike"></i>';
        contenthtml += '</div>';
        contenthtml += '</div>';
    }

    if (totalDecsafeRatio.bokratio > 50) {
        contenthtml += '<div class="panel panel-success panel-colorful">';
        contenthtml += '<div class="pad-all text-center">';
        contenthtml += '<span class="text-lg text-bold">안정성</span><i class="pad-lft demo-pli-like"></i>';
        contenthtml += '</div>';
        contenthtml += '</div>';
    } else if (totalDecsafeRatio.bokratio == 50) {
        contenthtml += '<div class="panel panel-info panel-colorful">';
        contenthtml += '<div class="pad-all text-center">';
        contenthtml += '<span class="text-lg text-bold">안정성</span><i class="pad-lft">-</i>';
        contenthtml += '</div>';
        contenthtml += '</div>';
    } else {
        contenthtml += '<div class="panel panel-danger panel-colorful">';
        contenthtml += '<div class="pad-all text-center">';
        contenthtml += '<span class="text-lg text-bold">안정성</span><i class="pad-lft demo-pli-unlike"></i>';
        contenthtml += '</div>';
        contenthtml += '</div>';
    }

    if (totalDecprofitRatio.bokratio  > 50) {
        contenthtml += '<div class="panel panel-success panel-colorful">';
        contenthtml += '<div class="pad-all text-center">';
        contenthtml += '<span class="text-lg text-bold">수익성</span><i class="pad-lft demo-pli-like"></i>';
        contenthtml += '</div>';
        contenthtml += '</div>';
    } else if (totalDecprofitRatio.bokratio  == 50) {
        contenthtml += '<div class="panel panel-info panel-colorful">';
        contenthtml += '<div class="pad-all text-center">';
        contenthtml += '<span class="text-lg text-bold">수익성</span><i class="pad-lft">-</i>';
        contenthtml += '</div>';
        contenthtml += '</div>';
    } else {
        contenthtml += '<div class="panel panel-danger panel-colorful">';
        contenthtml += '<div class="pad-all text-center">';
        contenthtml += '<span class="text-lg text-bold">수익성</span><i class="pad-lft demo-pli-unlike"></i>';
        contenthtml += '</div>';
        contenthtml += '</div>';
    }

    if (totalDecproductRatio.bokratio  > 50) {
        contenthtml += '<div class="panel panel-success panel-colorful">';
        contenthtml += '<div class="pad-all text-center">';
        contenthtml += '<span class="text-lg text-bold">생산성</span><i class="pad-lft demo-pli-like"></i>';
        contenthtml += '</div>';
        contenthtml += '</div>';
    } else if (totalDecproductRatio.bokratio  == 50) {
        contenthtml += '<div class="panel panel-info panel-colorful">';
        contenthtml += '<div class="pad-all text-center">';
        contenthtml += '<span class="text-lg text-bold">생산성</span><i class="pad-lft">-</i>';
        contenthtml += '</div>';
        contenthtml += '</div>';
    } else {
        contenthtml += '<div class="panel panel-danger panel-colorful">';
        contenthtml += '<div class="pad-all text-center">';
        contenthtml += '<span class="text-lg text-bold">생산성</span><i class="pad-lft demo-pli-unlike"></i>';
        contenthtml += '</div>';
        contenthtml += '</div>';
    }

    if (totalDecactiveARatio.bokratio  > 50) {
        contenthtml += '<div class="panel panel-success panel-colorful">';
        contenthtml += '<div class="pad-all text-center">';
        contenthtml += '<span class="text-lg text-bold">활동성</span><i class="pad-lft demo-pli-like"></i>';
        contenthtml += '</div>';
        contenthtml += '</div>';
    } else if (totalDecactiveARatio.bokratio  == 50) {
        contenthtml += '<div class="panel panel-info panel-colorful">';
        contenthtml += '<div class="pad-all text-center">';
        contenthtml += '<span class="text-lg text-bold">활동성</span><i class="pad-lft">-</i>';
        contenthtml += '</div>';
        contenthtml += '</div>';
    } else {
        contenthtml += '<div class="panel panel-danger panel-colorful">';
        contenthtml += '<div class="pad-all text-center">';
        contenthtml += '<span class="text-lg text-bold">활동성</span><i class="pad-lft demo-pli-unlike"></i>';
        contenthtml += '</div>';
        contenthtml += '</div>';
    }

    $("#totalBokDecisionTable").html('');
    $("#totalBokDecisionTable").html(contenthtml);

};

FIN03126M00Component.prototype.onPlot = function() {

    var label = '재무진단 현황('+enslDcdNm+')';

    console.log('totalDecgrowthRatio >> ', totalDecgrowthRatio);
    console.log('totalDecsafeRatio >> ', totalDecsafeRatio);
    console.log('totalDecprofitRatio >> ', totalDecprofitRatio);
    console.log('totalDecproductRatio >> ', totalDecproductRatio);
    console.log('totalDecactiveARatio >> ', totalDecactiveARatio);


    var finRatioData = [totalDecgrowthRatio.finratio, totalDecsafeRatio.finratio, totalDecprofitRatio.finratio, totalDecproductRatio.finratio, totalDecactiveARatio.finratio];
    var bokRatioData = [totalDecgrowthRatio.bokratio, totalDecsafeRatio.bokratio, totalDecprofitRatio.bokratio, totalDecproductRatio.bokratio, totalDecactiveARatio.bokratio];

    var color = Chart.helpers.color;
    var config = {
        type: 'radar',
        data: {
            labels: ['성장성', '안정성', '수익성', '생산성', '활동성'],
            datasets: [{
                label: label,
                backgroundColor: color(window.chartColors.red).alpha(0.2).rgbString(),
                borderColor: window.chartColors.red,
                pointBackgroundColor: window.chartColors.red,
                data: finRatioData
            }, {
                label: '재무진단 현황(전체)',
                backgroundColor: color(window.chartColors.blue).alpha(0.2).rgbString(),
                borderColor: window.chartColors.blue,
                pointBackgroundColor: window.chartColors.blue,
                data: bokRatioData
            }]
        },
        options: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: '재무진단 결과'
            },
            scale: {
                ticks: {
                    beginAtZero: true
                }
            }
        }
    };

    var myRadar = new Chart(document.getElementById('radarChart'), config);

    console.log('myRadr >> ', myRadar);
}

FIN03126M00Component.prototype.decisionRatioTable = function() {

    var decisionRatioTable = "";
    decisionRatioTable += " <tr class='active text-lg text-center'>																																																						";
    decisionRatioTable += "     <td colspan='2'>*성장성</td>                                                                                                                                                                                                                             ";
    decisionRatioTable += " </tr>                                                                                                                                                                                                                                                       ";
    
    for (var i = 0; i < decgrowthArray.length; i++) {
    decisionRatioTable += "  <tr>															                                                ";
    decisionRatioTable += "      <td>"+decgrowthArray[i].itemNm+"</td>                                                                   ";
    if (decgrowthArray[i].finresult == 'BAD') decisionRatioTable += "<td style='cursor:pointer;'><span title='(기) "+growthArray[i].finRatio+" vs (한) "+growthArray[i].bokRatio+"' class='label label-table label-danger'>"+decgrowthArray[i].finresult+"</span></td>";
    if (decgrowthArray[i].finresult == 'GOOD') decisionRatioTable += "<td style='cursor:pointer;'><span title='(기) "+growthArray[i].finRatio+" vs (한) "+growthArray[i].bokRatio+"' class='label label-table label-success'>"+decgrowthArray[i].finresult+"</span></td>";
    decisionRatioTable += "  </tr>                                                                                                         ";    
    }
    
    decisionRatioTable += " <tr class='active text-lg text-center'>                                                                                                                                                                                                                     ";
    decisionRatioTable += "     <td colspan='2'>*안전성</td>                                                                                                                                                                                                                             ";
    decisionRatioTable += " </tr>                                                                                                                                                                                                                                                       ";
    
    for (var i = 0; i < decsafeArray.length; i++) {
    decisionRatioTable += "  <tr>															                                                ";
    decisionRatioTable += "      <td>"+decsafeArray[i].itemNm+"</td>                                                                   ";
    if (decsafeArray[i].finresult == 'BAD') decisionRatioTable += "<td style='cursor:pointer;'><span title='(기) "+safeArray[i].finRatio+" vs (한) "+safeArray[i].bokRatio+"' class='label label-table label-danger'>"+decsafeArray[i].finresult+"</span></td>";
    if (decsafeArray[i].finresult == 'GOOD') decisionRatioTable += "<td style='cursor:pointer;'><span title='(기) "+safeArray[i].finRatio+" vs (한) "+safeArray[i].bokRatio+"' class='label label-table label-success'>"+decsafeArray[i].finresult+"</span></td>";
    decisionRatioTable += "  </tr>                                                                                                         ";    
    }
    
    decisionRatioTable += " <tr class='active text-lg text-center'>                                                                                                                                                                                                                     ";
    decisionRatioTable += "     <td colspan='2'>*수익성</td>                                                                                                                                                                                                                             ";
    decisionRatioTable += " </tr>                                                                                                                                                                                                                                                       ";
    
    for (var i = 0; i < decprofitArray.length; i++) {
    decisionRatioTable += "  <tr>															                                                ";
    decisionRatioTable += "      <td>"+decprofitArray[i].itemNm+"</td>                                                                   ";
    if (decprofitArray[i].finresult == 'BAD') decisionRatioTable += "<td style='cursor:pointer;'><span title='(기) "+profitArray[i].finRatio+" vs (한) "+profitArray[i].bokRatio+"' class='label label-table label-danger'>"+decprofitArray[i].finresult+"</span></td>";
    if (decprofitArray[i].finresult == 'GOOD') decisionRatioTable += "<td style='cursor:pointer;'><span title='(기) "+profitArray[i].finRatio+" vs (한) "+profitArray[i].bokRatio+"' class='label label-table label-success'>"+decprofitArray[i].finresult+"</span></td>";
    decisionRatioTable += "  </tr>                                                                                                         ";    
    }
    
    decisionRatioTable += " <tr class='active text-lg text-center'>                                                                                                                                                                                                                     ";
    decisionRatioTable += "     <td colspan='2'>*생산성</td>                                                                                                                                                                                                                             ";
    decisionRatioTable += " </tr>                                                                                                                                                                                                                                                       ";
    
    for (var i = 0; i < decproductArray.length; i++) {
    decisionRatioTable += "  <tr>															                                                ";
    decisionRatioTable += "      <td>"+decproductArray[i].itemNm+"</td>                                                                   ";
    if (decproductArray[i].finresult == 'BAD') decisionRatioTable += "<td style='cursor:pointer;'><span title='(기) "+productArray[i].finRatio+" vs (한) "+productArray[i].bokRatio+"' class='label label-table label-danger'>"+decproductArray[i].finresult+"</span></td>";
    if (decproductArray[i].finresult == 'GOOD') decisionRatioTable += "<td style='cursor:pointer;'><span title='(기) "+productArray[i].finRatio+" vs (한) "+productArray[i].bokRatio+"' class='label label-table label-success'>"+decproductArray[i].finresult+"</span></td>";
    decisionRatioTable += "  </tr>                                                                                                         ";    
    }
    
    decisionRatioTable += " <tr class='active text-lg text-center'>                                                                                                                                                                                                                     ";
    decisionRatioTable += "     <td colspan='2'>*활동성</td>                                                                                                                                                                                                                             ";
    decisionRatioTable += " </tr>                                                                                                                                                                                                                                                       ";
    
    for (var i = 0; i < decactiveArray.length; i++) {
    decisionRatioTable += "  <tr>															                                                ";
    decisionRatioTable += "      <td>"+decactiveArray[i].itemNm+"</td>                                                                   ";
    if (decactiveArray[i].finresult == 'BAD') decisionRatioTable += "<td style='cursor:pointer;'><span title='(기) "+activeArray[i].finRatio+" vs (한) "+activeArray[i].bokRatio+"' class='label label-table label-danger'>"+decactiveArray[i].finresult+"</span></td>";
    if (decactiveArray[i].finresult == 'GOOD') decisionRatioTable += "<td style='cursor:pointer;'><span title='(기) "+activeArray[i].finRatio+" vs (한) "+activeArray[i].bokRatio+"' class='label label-table label-success'>"+decactiveArray[i].finresult+"</span></td>";
    decisionRatioTable += "  </tr>                                                                                                         ";    
    }
    
        $('#decisionRatioTable > tbody:last').html('');
        $('#decisionRatioTable > tbody:last').append(decisionRatioTable);
    
    
    var decisionRatioTable01 = "";
    decisionRatioTable01 += " <tr class='active text-lg text-center'>																																																						";
    decisionRatioTable01 += "     <td colspan='2'>*성장성</td>                                                                                                                                                                                                                             ";
    decisionRatioTable01 += " </tr>                                                                                                                                                                                                                                                       ";
    
    for (var i = 0; i < decgrowthArray.length; i++) {
    decisionRatioTable01 += "  <tr>															                                                ";
    decisionRatioTable01 += "      <td>"+decgrowthArray[i].itemNm+"</td>                                                                   ";
    if (decgrowthArray[i].bokresult == 'BAD') decisionRatioTable01 += "<td style='cursor:pointer;'><span title='(기) "+growthArray[i].finRatio+" vs (한) "+growthArray[i].bokAllRatio+"' class='label label-table label-danger'>"+decgrowthArray[i].bokresult+"</span></td>";
    if (decgrowthArray[i].bokresult == 'GOOD') decisionRatioTable01 += "<td style='cursor:pointer;'><span title='(기) "+growthArray[i].finRatio+" vs (한) "+growthArray[i].bokAllRatio+"' class='label label-table label-success'>"+decgrowthArray[i].bokresult+"</span></td>";
    decisionRatioTable01 += "  </tr>                                                                                                         ";    
    }
    
    decisionRatioTable01 += " <tr class='active text-lg text-center'>                                                                                                                                                                                                                     ";
    decisionRatioTable01 += "     <td colspan='2'>*안전성</td>                                                                                                                                                                                                                             ";
    decisionRatioTable01 += " </tr>                                                                                                                                                                                                                                                       ";
    
    for (var i = 0; i < decsafeArray.length; i++) {
    decisionRatioTable01 += "  <tr>															                                                ";
    decisionRatioTable01 += "      <td>"+decsafeArray[i].itemNm+"</td>                                                                   ";
    if (decsafeArray[i].bokresult == 'BAD') decisionRatioTable01 += "<td style='cursor:pointer;'><span title='(기) "+safeArray[i].finRatio+" vs (한) "+safeArray[i].bokAllRatio+"' class='label label-table label-danger'>"+decsafeArray[i].bokresult+"</span></td>";
    if (decsafeArray[i].bokresult == 'GOOD') decisionRatioTable01 += "<td style='cursor:pointer;'><span title='(기) "+safeArray[i].finRatio+" vs (한) "+safeArray[i].bokAllRatio+"' class='label label-table label-success'>"+decsafeArray[i].bokresult+"</span></td>";
    decisionRatioTable01 += "  </tr>                                                                                                         ";    
    }
    
    decisionRatioTable01 += " <tr class='active text-lg text-center'>                                                                                                                                                                                                                     ";
    decisionRatioTable01 += "     <td colspan='2'>*수익성</td>                                                                                                                                                                                                                             ";
    decisionRatioTable01 += " </tr>                                                                                                                                                                                                                                                       ";
    
    for (var i = 0; i < decprofitArray.length; i++) {
    decisionRatioTable01 += "  <tr>															                                                ";
    decisionRatioTable01 += "      <td>"+decprofitArray[i].itemNm+"</td>                                                                   ";
    if (decprofitArray[i].bokresult == 'BAD') decisionRatioTable01 += "<td style='cursor:pointer;'><span title='(기) "+profitArray[i].finRatio+" vs (한) "+profitArray[i].bokAllRatio+"' class='label label-table label-danger'>"+decprofitArray[i].bokresult+"</span></td>";
    if (decprofitArray[i].bokresult == 'GOOD') decisionRatioTable01 += "<td style='cursor:pointer;'><span title='(기) "+profitArray[i].finRatio+" vs (한) "+profitArray[i].bokAllRatio+"' class='label label-table label-success'>"+decprofitArray[i].bokresult+"</span></td>";
    decisionRatioTable01 += "  </tr>                                                                                                         ";    
    }
    
    decisionRatioTable01 += " <tr class='active text-lg text-center'>                                                                                                                                                                                                                     ";
    decisionRatioTable01 += "     <td colspan='2'>*생산성</td>                                                                                                                                                                                                                             ";
    decisionRatioTable01 += " </tr>                                                                                                                                                                                                                                                       ";
    
    for (var i = 0; i < decproductArray.length; i++) {
    decisionRatioTable01 += "  <tr>															                                                ";
    decisionRatioTable01 += "      <td>"+decproductArray[i].itemNm+"</td>                                                                   ";
    if (decproductArray[i].bokresult == 'BAD') decisionRatioTable01 += "<td style='cursor:pointer;'><span title='(기) "+productArray[i].finRatio+" vs (한) "+productArray[i].bokAllRatio+"' class='label label-table label-danger'>"+decproductArray[i].bokresult+"</span></td>";
    if (decproductArray[i].bokresult == 'GOOD') decisionRatioTable01 += "<td style='cursor:pointer;'><span title='(기) "+productArray[i].finRatio+" vs (한) "+productArray[i].bokAllRatio+"' class='label label-table label-success'>"+decproductArray[i].bokresult+"</span></td>";
    decisionRatioTable01 += "  </tr>                                                                                                         ";    
    }
    
    decisionRatioTable01 += " <tr class='active text-lg text-center'>                                                                                                                                                                                                                     ";
    decisionRatioTable01 += "     <td colspan='2'>*활동성</td>                                                                                                                                                                                                                             ";
    decisionRatioTable01 += " </tr>                                                                                                                                                                                                                                                       ";
    
    for (var i = 0; i < decactiveArray.length; i++) {
    decisionRatioTable01 += "  <tr>															                                                ";
    decisionRatioTable01 += "      <td>"+decactiveArray[i].itemNm+"</td>                                                                   ";
    if (decactiveArray[i].bokresult == 'BAD') decisionRatioTable01 += "<td style='cursor:pointer;'><span title='(기) "+activeArray[i].finRatio+" vs (한) "+activeArray[i].bokAllRatio+"' class='label label-table label-danger'>"+decactiveArray[i].bokresult+"</span></td>";
    if (decactiveArray[i].bokresult == 'GOOD') decisionRatioTable01 += "<td style='cursor:pointer;'><span title='(기) "+activeArray[i].finRatio+" vs (한) "+activeArray[i].bokAllRatio+"' class='label label-table label-success'>"+decactiveArray[i].bokresult+"</span></td>";
    decisionRatioTable01 += "  </tr>                                                                                                         ";    
    }
    
        $('#decisionRatioTable01 > tbody:last').html('');
        $('#decisionRatioTable01 > tbody:last').append(decisionRatioTable01);
    
    };


FIN03126M00Component.prototype.onNumberWithCommas = function (totalAmt) {
    return numberWithCommas(totalAmt);
};

FIN03126M00Component.prototype.onFinResult = function () {

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

    FIN03126M00.ngOnInit();

});