
var FIN03012M00 = new FIN03012M00Component();

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

function FIN03012M00Component() {

};

FIN03012M00Component.prototype.ngOnInit = function () {
    
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

            FIN03012M00.onSearch();
            
        }
    }

};


FIN03012M00Component.prototype.onSearch = function () {
 
        overlay.show();
        entpName = finAplyCom.name;
        stacYy = finAplyCom.stacYy; 
        bzn = finAplyCom.bzn;
        amtUnitNm = finAplyCom.amtUnitNm;
        stacYys = finAplyCom.stacYys;

        $("span[name='amtUnitNm']").each(function (idx) {
            $("span[name='amtUnitNm']").eq(idx).html(amtUnitNm);
        });

        console.log('getAnalysisFinDtTypeMaps >>> ', finAplyCom.stacYys);

        finService.getAnalysisFinDtTypeMaps(finAplyCom.alyid, finAplyCom.userid, finAplyCom.bzn, finAplyCom.stacYys, FIN03012M00.finAnalyCallback);


};


FIN03012M00Component.prototype.finAnalyCallback = function(data) {

    console.log('finAnalyCallback' , data);

    if (data != null) {
        var res = JSON.parse(data);

        if (res.success) {

            var bsTable = "";

            alyDataSet = res.data.list1;

            console.log('alyDataSet >>> ', alyDataSet);

            $("#bsDiv").html('');

            finAplyCom.alyDataSet = alyDataSet;

            alyDataSet.forEach(function(selectedRaw, index) {

                FIN03012M00.onBalance(selectedRaw);
                FIN03012M00.onIncome(selectedRaw);
                FIN03012M00.onCost(selectedRaw);
                FIN03012M00.onAddedValue(selectedRaw);

                bsTable += FIN03012M00.onBsPlotView(index);

            });

            $("#bsDiv").html(bsTable).trigger("create");

            alyDataSet.forEach(function(selectedRaw, index) {

                FIN03012M00.onBalance(selectedRaw);
                FIN03012M00.onIncome(selectedRaw);
                FIN03012M00.onCost(selectedRaw);
                FIN03012M00.onAddedValue(selectedRaw);

                FIN03012M00.onPlot1(index);
            });

            console.log($("#pageContent"));
            
            overlay.hide();
        } else {
            overlay.hide();
            bootbox.alert(res.msg);
        }
 
    } else {
        overlay.hide();
    }

};

FIN03012M00Component.prototype.onBalance = function(res) {

    //Balance Sheet
    //1) 당좌자산
    var arr = itemSplit(res, 'FAS03010101');

    console.log("arr >>> " , arr);

    FAS03010101s = [];

    for (var i = 0; i < arr.length; i++) {
         FAS03010101s.push(arr[i]);
    }

    //2) 재고자산
    arr = itemSplit(res, 'FAS03010102');

    FAS03010102s = [];

    console.log("arr >>> " , arr);

    for (var i = 0; i < arr.length; i++) {
         FAS03010102s.push(arr[i]);
    }

    //3) 투자자산
    arr = itemSplit(res, 'FAS03010201');

    console.log("arr >>> " , arr);

    FAS03010201s = [];
    for (var i = 0; i < arr.length; i++) {
         FAS03010201s.push(arr[i]);
    }

    //4) 유형자산
    arr = itemSplit(res, 'FAS03010202');

    console.log("arr >>> " , arr);

    FAS03010202s = [];
    for (var i = 0; i < arr.length; i++) {
         FAS03010202s.push(arr[i]);
    }  

    //5) 무형자산
    arr = itemSplit(res, 'FAS03010203');

    console.log("arr >>> " , arr);
    FAS03010203s = [];
    for (var i = 0; i < arr.length; i++) {
         FAS03010203s.push(arr[i]);
    }  

    //5) 무형자산
    arr = itemSplit(res, 'FAS03010204');

    console.log("arr >>> " , arr);
    FAS03010204s = [];
    for (var i = 0; i < arr.length; i++) {
         FAS03010204s.push(arr[i]);
    }  

    //6) 유동부채
    arr = itemSplit(res, 'FAS03010301');

    console.log("arr >>> " , arr);
    FAS03010301s = [];
    for (var i = 0; i < arr.length; i++) {
         FAS03010301s.push(arr[i]);
    }  

    //7) 유동부채
    arr = itemSplit(res, 'FAS03010401');

    console.log("arr >>> " , arr);
    FAS03010401s = [];
    for (var i = 0; i < arr.length; i++) {
         FAS03010401s.push(arr[i]);
    } 

    //8) 자본
    arr = itemSplit(res, 'FAS03010501');

    console.log("arr >>> " , arr);
    FAS03010501s = [];
    for (var i = 0; i < arr.length; i++) {
         FAS03010501s.push(arr[i]);
    }                        

};

FIN03012M00Component.prototype.onIncome = function(res) {

    //Income
    //1) 매출
    var arr = itemSplit(res, 'FAS03020101');

    console.log("arr >>> " , arr);

    FAS03020101s = [];

    for (var i = 0; i < arr.length; i++) {
         FAS03020101s.push(arr[i]);
    }

    //2) 판매관리비
    var arr = itemSplit(res, 'FAS03020201');

    console.log("arr >>> " , arr);

    FAS03020201s = [];        

    for (var i = 0; i < arr.length; i++) {
         FAS03020201s.push(arr[i]);
    }

    //3) 영업외수익
    var arr = itemSplit(res, 'FAS03020301');

    console.log("arr >>> " , arr);

    FAS03020301s = [];        

    for (var i = 0; i < arr.length; i++) {
         FAS03020301s.push(arr[i]);
    }

    //4) 영업외비용
    var arr = itemSplit(res, 'FAS03020401');

    console.log("arr >>> " , arr);

    FAS03020401s = [];        

    for (var i = 0; i < arr.length; i++) {
         FAS03020401s.push(arr[i]);
    }

    //5) 법인세
    var arr = itemSplit(res, 'FAS03020501');

    FAS03020501s = [];        

    console.log("arr >>> " , arr);

    for (var i = 0; i < arr.length; i++) {
         FAS03020501s.push(arr[i]);
    }

};

FIN03012M00Component.prototype.onCost = function(res) {

    //Cost
    //1) 당기총제조비용
    var arr = itemSplit(res, 'FAS03030101');

    console.log("arr >>> " , arr);
    FAS03030101s = [];
    for (var i = 0; i < arr.length; i++) {
         FAS03030101s.push(arr[i]);
    }

    //2) 경비
    var arr = itemSplit(res, 'FAS03030201');

    console.log("arr >>> " , arr);
    FAS03030201s = [];
    for (var i = 0; i < arr.length; i++) {
         FAS03030201s.push(arr[i]);
    }

    //3) 기타
    var arr = itemSplit(res, 'FAS03030301');

    console.log("arr >>> " , arr);
    FAS03030301s = [];
    for (var i = 0; i < arr.length; i++) {
         FAS03030301s.push(arr[i]);
    }

};

FIN03012M00Component.prototype.onAddedValue = function(res) {

    //AddedValue
    //1) 법인세 차감전 순이익
    var arr = itemSplit(res, 'FAS03040101');

    console.log("arr >>> " , arr);
    FAS03040101s = [];
    for (var i = 0; i < arr.length; i++) {
         FAS03040101s.push(arr[i]);
    }


    //2) 인건비
    var arr = itemSplit(res, 'FAS03040201');

    console.log("arr >>> " , arr);
    FAS03040201s = [];
    for (var i = 0; i < arr.length; i++) {
         FAS03040201s.push(arr[i]);
    }


    //3) 금융비용 
    var arr = itemSplit(res, 'FAS03040301');

    console.log("arr >>> " , arr);
    FAS03040301s = [];
    for (var i = 0; i < arr.length; i++) {
         FAS03040301s.push(arr[i]);
    }

    //4) 임차료  
    var arr = itemSplit(res, 'FAS03040401');

    console.log("arr >>> " , arr);
    FAS03040401s = [];
    for (var i = 0; i < arr.length; i++) {
         FAS03040401s.push(arr[i]);
    }

    //5) 조세공과   
    var arr = itemSplit(res, 'FAS03040501');
    FAS03040501s = [];
    console.log("arr >>> " , arr);

    for (var i = 0; i < arr.length; i++) {
         FAS03040501s.push(arr[i]);
    }

    //6) 감가상각비    
    var arr = itemSplit(res, 'FAS03040601');

    console.log("arr >>> " , arr);
    FAS03040601s = [];
    for (var i = 0; i < arr.length; i++) {
         FAS03040601s.push(arr[i]);
    }

    FIN03012M00.setAddValue();

};

FIN03012M00Component.prototype.setAddValue = function() {

        if (FAS03020101s.length > 0) {
        //법인세 차감전 순이익 = 매출액 - 매출원가  - 판매비와관리비 + 영업외수익 -영업외 비용
           // console.log("FAS030401 Arr >>> ", this.FAS03020101s);
           // console.log("FAS030401 Arr length >>> ", this.FAS03020101s.length);

            var sumamt = FAS03020101s[0].finAmt - FAS03020101s[1].finAmt; //매출총손익
            var sumamt1 = 0; //판배비와관리비
            var sumamt2 = 0; //영업외수익
            var sumamt3 = 0; //영업외비용 

            var totalSum = 0;

            for (var i = 0; i < FAS03020201s.length; i++) {
                sumamt1 += FAS03020201s[i].finAmt;
            }

            for (var i = 0; i < FAS03020301s.length; i++) {
                sumamt2 += FAS03020301s[i].finAmt;
            }

            for (var i = 0; i < FAS03020401s.length; i++) {
                sumamt3 += FAS03020401s[i].finAmt;
            }

            totalSum = sumamt - sumamt1 + sumamt2 - sumamt3;
            FAS03040101s[0].finAmt = totalSum;

        }

        if (FAS03020201s.length > 0 && FAS03030101s.length > 0 && FAS03030201s.length > 0) {

            FAS03040201s[0].finAmt = FAS03020201s[0].finAmt;
            FAS03040201s[1].finAmt = FAS03020201s[1].finAmt;
            FAS03040201s[2].finAmt = FAS03020201s[2].finAmt;
            FAS03040201s[3].finAmt = FAS03030101s[1].finAmt;
            FAS03040201s[4].finAmt = FAS03030201s[3].finAmt;

        }

        if (FAS03030301s.length > 0) {
            FAS03040301s[0].finAmt = FAS03020401s[0].finAmt; //이자비용
        }
        
        if (FAS03030201s.length > 0) {
            FAS03040301s[3].finAmt = FAS03020301s[0].finAmt; //이자수익
        }

        if (FAS03020201s.length > 0) {
            FAS03040401s[3].finAmt = FAS03020201s[5].finAmt; //임차료 
        }

        if (FAS03020201s.length > 0 && FAS03030201s.length > 0) {
            FAS03040501s[0].finAmt = FAS03020201s[4].finAmt + FAS03030201s[4].finAmt; //세금과공과금 + 판매비와관리비의 세금과공과금 
        }

        if (FAS03020201s.length > 0 && FAS03030201s.length > 0) {
            FAS03040601s[0].finAmt = FAS03020201s[6].finAmt + FAS03030201s[1].finAmt; //감가상각비 + Cost 감가상각비 
        }

};

FIN03012M00Component.prototype.getAddValue01 = function(accd, idx) {

    FIN03012M00.setAddValue();

    var amt = 0;

    if (accd == 'FAS03040101s') {
        amt = FAS03040101s[idx].finAmt;
    }

    if (accd == 'FAS03040201s') {
        amt = FAS03040201s[idx].finAmt;
    }

    if (accd == 'FAS03040301s') {
        amt = FAS03040301s[idx].finAmt;
    }

    if (accd == 'FAS03040401s') {
        amt = FAS03040401s[idx].finAmt;
    }

    if (accd == 'FAS03040501s') {
        amt = FAS03040501s[idx].finAmt;
    }

    if (accd == 'FAS03040601s') {
        amt = FAS03040601s[idx].finAmt;
    }

    return amt;


};

FIN03012M00Component.prototype.getAddValueTotal = function(accd) {

    var totalAmt = 0;

    if (accd == 'FAS030401') {

        //console.log("this.FAS03040101s >>> ", this.FAS03040101s);

        for (var i = 0; i < FAS03040101s.length; i++) {
            totalAmt += FAS03040101s[i].finAmt;
        }
    }

    if (accd == 'FAS030402') {

        for (var i = 0; i < FAS03040201s.length; i++) {
            totalAmt += FAS03040201s[i].finAmt;
        }
    }

    if (accd == 'FAS030403') {

        for (var i = 0; i < FAS03040301s.length; i++) {
            if (FAS03040301s[i].finSmdcd == 'FAS0304030104') {
                totalAmt -= FAS03040301s[i].finAmt;
            } else {
                totalAmt += FAS03040301s[i].finAmt;
            }
        }
    }

    if (accd == 'FAS030404') {

        for (var i = 0; i < FAS03040401s.length; i++) {
            totalAmt += FAS03040401s[i].finAmt;
        }
    }

    if (accd == 'FAS030405') {

       for (var i = 0; i < FAS03040501s.length; i++) {
            totalAmt += FAS03040501s[i].finAmt;
        }
    }

    if (accd == 'FAS030406') {

        for (var i = 0; i < FAS03040601s.length; i++) {
            totalAmt += FAS03040601s[i].finAmt;
        }
    }

    if (accd == 'FAS0304') {

        for (var i = 0; i < FAS03040101s.length; i++) {
            totalAmt += FAS03040101s[i].finAmt;
        }

        for (var i = 0; i < FAS03040201s.length; i++) {
            totalAmt += FAS03040201s[i].finAmt;
        }

        for (var i = 0; i < FAS03040301s.length; i++) {
            if (FAS03040301s[i].finSmdcd == 'FAS0304030104') {
                totalAmt -= FAS03040301s[i].finAmt;
            } else {
                totalAmt += FAS03040301s[i].finAmt;
            }
        }

        for (var i = 0; i < FAS03040401s.length; i++) {
            totalAmt += FAS03040401s[i].finAmt;
        }

        for (var i = 0; i < FAS03040501s.length; i++) {
            totalAmt += FAS03040501s[i].finAmt;
        }

        for (var i = 0; i < FAS03040601s.length; i++) {
            totalAmt += FAS03040601s[i].finAmt;
        }

    }

    return numberWithCommas(totalAmt);

};

FIN03012M00Component.prototype.getBsTotal = function(accd) {

   var totalAmt = 0;

    if (accd == 'FAS03010101') {
        for (var i = 0; i < FAS03010101s.length; i++) {
            totalAmt += FAS03010101s[i].finAmt;
        }
    }

    if (accd == 'FAS03010102') {
        for (var i = 0; i < FAS03010102s.length; i++) {
            totalAmt += FAS03010102s[i].finAmt;
        }
    }
    

    if (accd == 'FAS03010201') {
        for (var i = 0; i < FAS03010201s.length; i++) {
            totalAmt += FAS03010201s[i].finAmt;
        }
    }

    if (accd == 'FAS03010202') {
        for (var i = 0; i < FAS03010202s.length; i++) {
            if (!(FAS03010202s[i].finSmdcd == 'FAS0301020203')
                    &&  !(FAS03010202s[i].finSmdcd == 'FAS0301020205')
                    &&  !(FAS03010202s[i].finSmdcd == 'FAS0301020207')
                    &&  !(FAS03010202s[i].finSmdcd == 'FAS0301020210')
                    ) {
                    totalAmt += FAS03010202s[i].finAmt;
            }
        }
    }

    if (accd == 'FAS03010203') {
        for (var i = 0; i < FAS03010203s.length; i++) {
            if (!(FAS03010203s[i].finSmdcd == 'FAS0301020304') ) {
                totalAmt += FAS03010203s[i].finAmt;
            }
        }
    }

    if (accd == 'FAS030101') {
        for (var i = 0; i < FAS03010101s.length; i++) {
            totalAmt += FAS03010101s[i].finAmt;
        }

        for (var i = 0; i < FAS03010102s.length; i++) {
            totalAmt += FAS03010102s[i].finAmt;
        }
    }


    if (accd == 'FAS030102') {
        for (var i = 0; i < FAS03010201s.length; i++) {
            totalAmt += FAS03010201s[i].finAmt;
        }

        for (var i = 0; i < FAS03010202s.length; i++) {
            if (!(FAS03010202s[i].finSmdcd == 'FAS0301020203')
                    &&  !(FAS03010202s[i].finSmdcd == 'FAS0301020205')
                    &&  !(FAS03010202s[i].finSmdcd == 'FAS0301020207')
                    &&  !(FAS03010202s[i].finSmdcd == 'FAS0301020210')
                    ) {
                    totalAmt += FAS03010202s[i].finAmt;
            }
        }

       for (var i = 0; i < FAS03010203s.length; i++) {
            if (!(FAS03010203s[i].finSmdcd == 'FAS0301020304') ) {
                totalAmt += FAS03010203s[i].finAmt;
            }
        }

        for (var i = 0; i < FAS03010204s.length; i++) {
            totalAmt += FAS03010204s[i].finAmt;
        }
    }

    if (accd == 'FAS030101T') {
        for (var i = 0; i < FAS03010101s.length; i++) {
            totalAmt += FAS03010101s[i].finAmt;
        }

        for (var i = 0; i < FAS03010102s.length; i++) {
            totalAmt += FAS03010102s[i].finAmt;
        }

        for (var i = 0; i < FAS03010201s.length; i++) {
            totalAmt += FAS03010201s[i].finAmt;
        }

        for (var i = 0; i < FAS03010202s.length; i++) {
            totalAmt += FAS03010202s[i].finAmt;
        }

       for (var i = 0; i < FAS03010203s.length; i++) {
            totalAmt += FAS03010203s[i].finAmt;
        }

        for (var i = 0; i < FAS03010204s.length; i++) {
            totalAmt += FAS03010204s[i].finAmt;
        }
    }

     if (accd == 'FAS030103') {
        for (var i = 0; i < FAS03010301s.length; i++) {
            totalAmt += FAS03010301s[i].finAmt;
        }
     }

     if (accd == 'FAS030104') {
        for (var i = 0; i < FAS03010401s.length; i++) {
            totalAmt += FAS03010401s[i].finAmt;
        }
     }

     if (accd == 'FAS030105') {
        for (var i = 0; i < FAS03010501s.length; i++) {
            totalAmt += FAS03010501s[i].finAmt;
        }
     }

     if (accd == 'FAS030103T') {
         for (var i = 0; i < FAS03010301s.length; i++) {
            totalAmt += FAS03010301s[i].finAmt;
        }

        for (var i = 0; i < FAS03010401s.length; i++) {
            totalAmt += FAS03010401s[i].finAmt;
        }

        for (var i = 0; i < FAS03010501s.length; i++) {
            totalAmt += FAS03010501s[i].finAmt;
        }

     }

    return numberWithCommas(totalAmt);

};

FIN03012M00Component.prototype.getIncomeTotal = function(accd) {

    var totalAmt = 0;

    //매출액
    if (accd == 'FAS0302010101') {
        for (var i = 0; i < FAS03020101s.length; i++) {
            if (FAS03020101s[i].finSmdcd == 'FAS0302010101') {
                totalAmt = FAS03020101s[i].finAmt;
                amslAmt = totalAmt;
            }
        }
    }

    //매출원가
    if (accd == 'FAS0302010102') {
        for (var i = 0; i < FAS03020101s.length; i++) {
            if (FAS03020101s[i].finSmdcd == 'FAS0302010102') {
                totalAmt = FAS03020101s[i].finAmt;
                ampmAmt = totalAmt;
            }
        }
    }   

     if (accd == 'amslTtalPlAmt') {
        amslTtalPlAmt = amslAmt - ampmAmt;
        totalAmt = amslTtalPlAmt; //매출총손익
    }   

    //판매비와관리비
    if (accd == 'FAS03020201') {
        for (var i = 0; i < FAS03020201s.length; i++) {
                totalAmt += FAS03020201s[i].finAmt;
                 
        }

        slexExAmt = totalAmt;
    }

    if (accd == 'bsopPlAmt') {
        bsopPlAmt = amslTtalPlAmt - slexExAmt; //영업손익금액
        totalAmt = bsopPlAmt 
    }

    if (accd == 'FAS03020301') {
        for (var i = 0; i < FAS03020301s.length; i++) {
                totalAmt += FAS03020301s[i].finAmt;
        }
        nnoeAmt = totalAmt; //영업외수익
    }

    if (accd == 'FAS03020401') {
        for (var i = 0; i < FAS03020401s.length; i++) {
                totalAmt += FAS03020401s[i].finAmt;
        }
        nnopExpAmt = totalAmt;//영업외비용
    }

    if (accd == 'crtxSbbfNtprAmt') {
        crtxSbbfNtprAmt = bsopPlAmt + nnoeAmt - nnopExpAmt; //법인세 차감 전 순손익
        totalAmt = crtxSbbfNtprAmt;
    }

    if (accd == 'FAS03020501') {
        for (var i = 0; i < FAS03020501s.length; i++) {
                totalAmt += FAS03020501s[i].finAmt;
        }
        crtxExpAmt = totalAmt; //법인세비용
    }

    if (accd == 'crtrNtPlAmt') {
        crtrNtPlAmt = crtxSbbfNtprAmt - crtxExpAmt; //당기순이익
        totalAmt = crtrNtPlAmt;
    }

    return numberWithCommas(totalAmt);
};

FIN03012M00Component.prototype.getCostTotal = function(accd) {

    var totalAmt = 0;

    //당기총제조비용
    if (accd == 'FAS03030101') {
        for (var i = 0; i < FAS03030101s.length; i++) {
            totalAmt += FAS03030101s[i].finAmt;
        }

        //경비
        for (var i = 0; i < FAS03030201s.length; i++) {
            totalAmt += FAS03030201s[i].finAmt;
        }

    }

    //재료비
    if (accd == 'FAS0303010101') {
        for (var i = 0; i < FAS03030101s.length; i++) {
            if (FAS03030101s[i].finSmdcd == 'FAS0303010101') {
                totalAmt = FAS03030101s[i].finAmt;
            }
        }
    }

    //노무비
    if (accd == 'FAS0303010102') {
        for (var i = 0; i < FAS03030101s.length; i++) {
            if (FAS03030101s[i].finSmdcd == 'FAS0303010102') {
                totalAmt = FAS03030101s[i].finAmt;
            }
        }
    }

    //경비
    if (accd == 'FAS03030201') {
        for (var i = 0; i < FAS03030201s.length; i++) {
            totalAmt += FAS03030201s[i].finAmt;
        }
    }   

    //기초재공품원가
    if (accd == 'FAS0303030101') {
        for (var i = 0; i < FAS03030301s.length; i++) {
            if (FAS03030301s[i].finSmdcd == 'FAS0303030101') {
                totalAmt = FAS03030301s[i].finAmt;
            }
        }
    }

    //기말재공품원가
    if (accd == 'FAS0303030102') {
        for (var i = 0; i < FAS03030301s.length; i++) {
            if (FAS03030301s[i].finSmdcd == 'FAS0303030102') {
                totalAmt = FAS03030301s[i].finAmt;
            }
        }
    }

    //유형자산대체액
    if (accd == 'FAS0303030103') {
        for (var i = 0; i < FAS03030301s.length; i++) {
            if (FAS03030301s[i].finSmdcd == 'FAS0303030103') {
                totalAmt = FAS03030301s[i].finAmt;
            }
        }
    }
 
    //당기제품제조원가
    if (accd == 'FAS0303030104') {

        for (var i = 0; i < FAS03030101s.length; i++) {
            totalAmt += FAS03030101s[i].finAmt;
        }

        //경비
        for (var i = 0; i < FAS03030201s.length; i++) {
            totalAmt += FAS03030201s[i].finAmt;
        }

        //기초재공품원가
        for (var i = 0; i < FAS03030301s.length; i++) {
            if (FAS03030301s[i].finSmdcd == 'FAS0303030101') {
                totalAmt += FAS03030301s[i].finAmt;
            }
            if (FAS03030301s[i].finSmdcd == 'FAS0303030102') {
                totalAmt -= FAS03030301s[i].finAmt;
            }

            if (FAS03030301s[i].finSmdcd == 'FAS0303030103') {
               totalAmt += FAS03030301s[i].finAmt;
            }
        }

    }

    return numberWithCommas(totalAmt);

};

FIN03012M00Component.prototype.onPlot1 = function(idx) {

     // =================================================================
    // Balance Sheet > 부채및자본구성비그래프
    // =================================================================
    var totalAmt = 0; // 당좌자산
    var totalAmt1 = 0; // 재고자산
    var totalAmt2 = 0; // 투자자산
    var totalAmt3 = 0; // 유형자산
    var totalAmt4 = 0; // 무형자산

    for (var i = 0; i < FAS03010301s.length; i++) {
         totalAmt += FAS03010301s[i].finAmt;
    }

    for (var i = 0; i < FAS03010401s.length; i++) {
         totalAmt1 += FAS03010401s[i].finAmt;
    }

    for (var i = 0; i < FAS03010501s.length; i++) {
         totalAmt2 += FAS03010501s[i].finAmt;
    }

    var dataSet2 = []

    dataSet2.push({
        label: "유동부채", 
        data: totalAmt, 
        color: "#ffa31c" 
    });

    dataSet2.push({
        label: "비유동부채", 
        data: totalAmt1, 
        color: "#00bcd4" 
    });

    dataSet2.push({
        label: "자본", 
        data: totalAmt2, 
        color: "#a6c600" 
    });

   
/*
    Morris.Donut({
        element: 'bs-donut',
        data: dataSet
    });
*/
    $.plot('#bs-donut2_1'+idx, dataSet2, {
        series: {
            pie: {
                show: true,
                combine: {
                color: '#777',
                threshold: 0.1
                }
            }
        },
        legend: {
        show: false
        }
    });   
};

FIN03012M00Component.prototype.onBsPlotView = function(idx) {
	
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
    bsTable += '<h3 class="panel-title">부채 및 자본 구성비('+finAplyCom.stacYys[idx]+' 재무정보)</h3>';
    bsTable += '</div>';
    bsTable += '<div class="panel-body">';
    bsTable += '<div id="bs-donut2_1'+idx+'" style="width:100%;height:300px"></div>';
    bsTable += '</div>';
    bsTable += '</div>';
    bsTable += '</div>';
    
    if (rowStartCount == 2 || alyDataSet.length == size) {
        bsTable += '</div>';
    }

    rowStartCount = rowStartCount + 1;
  
    return bsTable;

};

FIN03012M00Component.prototype.onNumberWithCommas = function (totalAmt) {
    return numberWithCommas(totalAmt);
};

FIN03012M00Component.prototype.onFinResult = function () {

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


    FIN03012M00.ngOnInit();

    


});