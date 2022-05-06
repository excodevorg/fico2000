
var FIN02002M00 = new FIN02002M00Component();

var finfnaminfos = [];

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


function FIN02002M00Component() {

};


FIN02002M00Component.prototype.ngOnInit = function () {
    overlay.show();    

    $("#entpName").html(finCom.name);
    $("#stacYy").html(finCom.stacYy);

    $("span[name='amtUnitNm']").each(function (idx) {
        $("span[name='amtUnitNm']").eq(idx).html(finCom.amtUnitDis);
    });

    finService.getAnalysisFinDtTypeMap(finCom.alyid, finCom.userid, finCom.bzn, finCom.stacYy, FIN02002M00.finCallback);

    $('#demo-main-wz').bootstrapWizard({
            tabClass		: 'wz-steps',
            nextSelector	: '.next',
            previousSelector	: '.previous',
            onTabClick: function(tab, navigation, index) {
                return false;
            },
            onInit : function(){
                $('#demo-main-wz').find('.finish').hide().prop('disabled', true);
            },
            onTabShow: function(tab, navigation, index) {
                var $total = navigation.find('li').length;
                var $current = index+1;
                var $percent = ($current/$total) * 100;
                var wdt = 100/$total;
                var lft = wdt*index;

                $('#demo-main-wz').find('.progress-bar').css({width:wdt+'%',left:lft+"%", 'position':'relative', 'transition':'all .5s'});


                // If it's the last tab then hide the last button and show the finish instead
                if($current >= $total) {
                    $('#demo-main-wz').find('.next').hide();
                    $('#demo-main-wz').find('.finish').show();
                    $('#demo-main-wz').find('.finish').prop('disabled', false);
                } else {
                    $('#demo-main-wz').find('.next').show();
                    $('#demo-main-wz').find('.finish').hide().prop('disabled', true);
                }
            }
    });
    
    $("#initFAS0301").click(function() {
        FIN02002M00.initFAS0301();
    });

    $("#saveFAS0301").click(function() {
        FIN02002M00.saveFAS0301();
    });

    $("#initFAS0302").click(function() {
        FIN02002M00.initFAS0302();
    });

    $("#saveFAS0302").click(function() {
        FIN02002M00.saveFAS0302();
    });

    $("#initFAS0303").click(function() {
        FIN02002M00.initFAS0303();
    });

    $("#saveFAS0303").click(function() {
        FIN02002M00.saveFAS0303();
    });

    $("#initFAS0304").click(function() {
        FIN02002M00.initFAS0304();
    });

    $("#saveFAS0304").click(function() {
        FIN02002M00.saveFAS0304();
    });

    $("#onSave").click(function() {
        FIN02002M00.onSave();
    });

    $("#onSave01").click(function() {
        FIN02002M00.onSave();
    });

    


};

FIN02002M00Component.prototype.finCallback = function(data) {
    
    if (data != null) {
        var res = JSON.parse(data);

        if (res.success) {
            FIN02002M00.onBalance(res);
            FIN02002M00.onIncome(res);
            FIN02002M00.onCost(res);
            FIN02002M00.onAddedValue(res);
            FIN02002M00.onView();

            overlay.hide();

        } else {
            bootbox.alert(res.msg);
        }

    }
    
};

FIN02002M00Component.prototype.onBalance = function(res) {

        //Balance Sheet
        //1) 당좌자산
        var arr = itemSplit(res, 'FAS03010101');

        console.log("arr >>> " , arr);

        for (var i = 0; i < arr.length; i++) {
             FAS03010101s.push(arr[i]);
        }

        //2) 재고자산
        arr = itemSplit(res, 'FAS03010102');

        console.log("arr >>> " , arr);

        for (var i = 0; i < arr.length; i++) {
             FAS03010102s.push(arr[i]);
        }

        //3) 투자자산
        arr = itemSplit(res, 'FAS03010201');

        console.log("arr >>> " , arr);

        for (var i = 0; i < arr.length; i++) {
             FAS03010201s.push(arr[i]);
        }

        //4) 유형자산
        arr = itemSplit(res, 'FAS03010202');

        console.log("arr >>> " , arr);

        for (var i = 0; i < arr.length; i++) {
             FAS03010202s.push(arr[i]);
        }  

        //5) 무형자산
        arr = itemSplit(res, 'FAS03010203');

        console.log("arr >>> " , arr);

        for (var i = 0; i < arr.length; i++) {
             FAS03010203s.push(arr[i]);
        }  

        //5-1) 기타비유동자산
        arr = itemSplit(res, 'FAS03010204');

        console.log("arr >>> " , arr);

        for (var i = 0; i < arr.length; i++) {
             FAS03010204s.push(arr[i]);
        }  

        //6) 유동부채
        arr = itemSplit(res, 'FAS03010301');

        console.log("arr >>> " , arr);

        for (var i = 0; i < arr.length; i++) {
             FAS03010301s.push(arr[i]);
        }  

        //7) 유동부채
        arr = itemSplit(res, 'FAS03010401');

        console.log("arr >>> " , arr);

        for (var i = 0; i < arr.length; i++) {
             FAS03010401s.push(arr[i]);
        } 

        //8) 자본
        arr = itemSplit(res, 'FAS03010501');

        console.log("arr >>> " , arr);

        for (var i = 0; i < arr.length; i++) {
             FAS03010501s.push(arr[i]);
        }                        

    };
FIN02002M00Component.prototype.onIncome = function(res) {

        //Income
        //1) 매출
        var arr = itemSplit(res, 'FAS03020101');

        console.log("arr >>> " , arr);

        for (var i = 0; i < arr.length; i++) {
             FAS03020101s.push(arr[i]);
        }

        //2) 판매관리비
        var arr = itemSplit(res, 'FAS03020201');

        console.log("arr >>> " , arr);

        for (var i = 0; i < arr.length; i++) {
             FAS03020201s.push(arr[i]);
        }

        //3) 영업외수익
        var arr = itemSplit(res, 'FAS03020301');

        console.log("arr >>> " , arr);

        for (var i = 0; i < arr.length; i++) {
             FAS03020301s.push(arr[i]);
        }

        //4) 영업외비용
        var arr = itemSplit(res, 'FAS03020401');

        console.log("arr >>> " , arr);

        for (var i = 0; i < arr.length; i++) {
             FAS03020401s.push(arr[i]);
        }

        //5) 법인세
        var arr = itemSplit(res, 'FAS03020501');

        console.log("arr >>> " , arr);

        for (var i = 0; i < arr.length; i++) {
             FAS03020501s.push(arr[i]);
        }

    };
FIN02002M00Component.prototype.onCost = function(res) {

        //Cost
        //1) 당기총제조비용
        var arr = itemSplit(res, 'FAS03030101');

        console.log("arr >>> " , arr);

        for (var i = 0; i < arr.length; i++) {
             FAS03030101s.push(arr[i]);
        }

        //2) 경비
        var arr = itemSplit(res, 'FAS03030201');

        console.log("arr >>> " , arr);

        for (var i = 0; i < arr.length; i++) {
             FAS03030201s.push(arr[i]);
        }

        //3) 기타
        var arr = itemSplit(res, 'FAS03030301');

        console.log("arr >>> " , arr);

        for (var i = 0; i < arr.length; i++) {
             FAS03030301s.push(arr[i]);
        }

    };
FIN02002M00Component.prototype.onAddedValue = function(res) {

        //AddedValue
        //1) 법인세 차감전 순이익
        var arr = itemSplit(res, 'FAS03040101');

        console.log("arr >>> " , arr);

        for (var i = 0; i < arr.length; i++) {
             FAS03040101s.push(arr[i]);
        }


        //2) 인건비
        var arr = itemSplit(res, 'FAS03040201');

        console.log("arr >>> " , arr);

        for (var i = 0; i < arr.length; i++) {
             FAS03040201s.push(arr[i]);
        }


        //3) 금융비용 
        var arr = itemSplit(res, 'FAS03040301');

        console.log("arr >>> " , arr);

        for (var i = 0; i < arr.length; i++) {
             FAS03040301s.push(arr[i]);
        }

        //4) 임차료  
        var arr = itemSplit(res, 'FAS03040401');

        console.log("arr >>> " , arr);

        for (var i = 0; i < arr.length; i++) {
             FAS03040401s.push(arr[i]);
        }

        //5) 조세공과   
        var arr = itemSplit(res, 'FAS03040501');

        console.log("arr >>> " , arr);

        for (var i = 0; i < arr.length; i++) {
             FAS03040501s.push(arr[i]);
        }

        //6) 감가상각비    
        var arr = itemSplit(res, 'FAS03040601');

        console.log("arr >>> " , arr);

        for (var i = 0; i < arr.length; i++) {
             FAS03040601s.push(arr[i]);
        }

        FIN02002M00.setAddValue();

    };


FIN02002M00Component.prototype.setAddValue = function() { 

            if (FAS03020101s.length > 0) {
            //법인세 차감전 순이익 = 매출액 - 매출원가  - 판매비와관리비 + 영업외수익 -영업외 비용
               // console.log("FAS030401 Arr >>> ", FAS03020101s);
               // console.log("FAS030401 Arr length >>> ", FAS03020101s.length);

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
FIN02002M00Component.prototype.getAddValue01 = function(accd, idx) {

        FIN02002M00.setAddValue();

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
FIN02002M00Component.prototype.getAddValueTotal = function(accd) {

        var totalAmt = 0;

        if (accd == 'FAS030401') {

            //console.log("FAS03040101s >>> ", FAS03040101s);

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
FIN02002M00Component.prototype.getBsTotal = function(accd) {

       var totalAmt = 0;

        
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
                if (FAS03010201s[i].finSmdcd == 'FAS0301020101') {
                totalAmt += FAS03010201s[i].finAmt;
                }
            }

            for (var i = 0; i < FAS03010202s.length; i++) {
                if (!(FAS03010202s[i].finSmdcd == 'FAS0301020203')
                    &&  !(FAS03010202s[i].finSmdcd == 'FAS0301020205')
                    &&  !(FAS03010202s[i].finSmdcd == 'FAS0301020207')
                    ) {
                    totalAmt += FAS03010202s[i].finAmt;
                }
            }

           for (var i = 0; i < FAS03010203s.length; i++) {
                totalAmt += FAS03010203s[i].finAmt;
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
                if (FAS03010201s[i].finSmdcd == 'FAS0301020101') {
                totalAmt += FAS03010201s[i].finAmt;
                }
            }

            for (var i = 0; i < FAS03010202s.length; i++) {
                if (!(FAS03010202s[i].finSmdcd == 'FAS0301020203')
                    &&  !(FAS03010202s[i].finSmdcd == 'FAS0301020205')
                    &&  !(FAS03010202s[i].finSmdcd == 'FAS0301020207')
                    ) {
                    totalAmt += FAS03010202s[i].finAmt;
                }
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
FIN02002M00Component.prototype.getIncomeTotal = function(accd) {

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
            totalAmt = amslTtalPlAmt - slexExAmt; //영업손익금액
            bsopPlAmt = totalAmt;
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
            totalAmt = bsopPlAmt + nnoeAmt - nnopExpAmt; //법인세 차감 전 순손익
            crtxSbbfNtprAmt = totalAmt;
        }

        if (accd == 'FAS03020501') {
            for (var i = 0; i < FAS03020501s.length; i++) {
                    totalAmt += FAS03020501s[i].finAmt;
            }
            crtxExpAmt = totalAmt; //법인세비용
        }

        if (accd == 'crtrNtPlAmt') {
            totalAmt = crtxSbbfNtprAmt - crtxExpAmt; //당기순이익
            crtrNtPlAmt = totalAmt;
        }


        return numberWithCommas(totalAmt);
    };
FIN02002M00Component.prototype.getCostTotal = function(accd) {

        var totalAmt = 0;

        //당기총제조비용
        if (accd == 'FAS03030101') {
            for (var i = 0; i < FAS03030101s.length; i++) {
                totalAmt += FAS03030101s[i].finAmt;
            }

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

            var totalAmt01 = 0 //당기 총제조비용

            for (var i = 0; i < FAS03030101s.length; i++) {
                totalAmt01 += FAS03030101s[i].finAmt;
            }

            for (var i = 0; i < FAS03030201s.length; i++) {
                totalAmt01 += FAS03030201s[i].finAmt;
            }

            var totalAmt02 = 0 //기초 제공품원가
            var totalAmt03 = 0 //기말 제공품원가
            var totalAmt04 = 0 //유형 자산 대체액

            for (var i = 0; i < FAS03030301s.length; i++) {
                if (FAS03030301s[i].finSmdcd == 'FAS0303030101') {
                    totalAmt02 = FAS03030301s[i].finAmt;
                }

                if (FAS03030301s[i].finSmdcd == 'FAS0303030102') {
                    totalAmt03 = FAS03030301s[i].finAmt;
                }

                if (FAS03030301s[i].finSmdcd == 'FAS0303030103') {
                    totalAmt04 = FAS03030301s[i].finAmt;
                }
            }      

            totalAmt = totalAmt01 + totalAmt02 - totalAmt03 + totalAmt04;

        }

        return numberWithCommas(totalAmt);

    };
FIN02002M00Component.prototype.getCostTotal01 = function(accd) {

        var totalAmt = 0;

         //당기제품제조원가
        if (accd == 'FAS0303030104') {

            var totalAmt01 = 0 //당기 총제조비용

            for (var i = 0; i < FAS03030101s.length; i++) {
                totalAmt01 += FAS03030101s[i].finAmt;
            }

            for (var i = 0; i < FAS03030201s.length; i++) {
                totalAmt01 += FAS03030201s[i].finAmt;
            }

            var totalAmt02 = 0 //기초 제공품원가
            var totalAmt03 = 0 //기말 제공품원가
            var totalAmt04 = 0 //유형 자산 대체액

            for (var i = 0; i < FAS03030301s.length; i++) {
                if (FAS03030301s[i].finSmdcd == 'FAS0303030101') {
                    totalAmt02 = FAS03030301s[i].finAmt;
                }

                if (FAS03030301s[i].finSmdcd == 'FAS0303030102') {
                    totalAmt03 = FAS03030301s[i].finAmt;
                }

                if (FAS03030301s[i].finSmdcd == 'FAS0303030103') {
                    totalAmt04 = FAS03030301s[i].finAmt;
                }
            }      

            totalAmt = totalAmt01 + totalAmt02 - totalAmt03 + totalAmt04;

            if (FAS03030301s != null && FAS03030301s.length > 0) {
                FAS03030301s[3].finAmt = totalAmt;
            }
            
        }

        return totalAmt;
    };    


FIN02002M00Component.prototype.onView = function() {
    $("#FAS03010101s").html(FIN02002M00.finInputList(FAS03010101s));
    $("#FAS03010102s").html(FIN02002M00.finInputList(FAS03010102s));
    $("#FAS03010201s").html(FIN02002M00.finInputList(FAS03010201s));
    $("#FAS03010202s").html(FIN02002M00.finInputList(FAS03010202s));
    $("#FAS03010203s").html(FIN02002M00.finInputList(FAS03010203s));
    $("#FAS03010204s").html(FIN02002M00.finInputList(FAS03010204s));
    $("#FAS03010301s").html(FIN02002M00.finInputList(FAS03010301s));
    $("#FAS03010401s").html(FIN02002M00.finInputList(FAS03010401s));
    $("#FAS03010501s").html(FIN02002M00.finInputList(FAS03010501s));

    $("#FAS03020101s").html(FIN02002M00.finInputList(FAS03020101s));
    $("#FAS03020201s").html(FIN02002M00.finInputList(FAS03020201s));
    $("#FAS03020301s").html(FIN02002M00.finInputList(FAS03020301s));
    $("#FAS03020401s").html(FIN02002M00.finInputList(FAS03020401s));
    $("#FAS03020501s").html(FIN02002M00.finInputList(FAS03020501s));

    $("#FAS03030101s").html(FIN02002M00.finInputList(FAS03030101s));
    $("#FAS03030201s").html(FIN02002M00.finInputList(FAS03030201s));
    $("#FAS03030301s").html(FIN02002M00.finInputList(FAS03030301s));

    FIN02002M00.onAddView();

};

FIN02002M00Component.prototype.onAddView = function() {

    $("#BsTotal_FAS030101").html(FIN02002M00.getBsTotal('FAS030101'));
    $("#BsTotal_FAS030102").html(FIN02002M00.getBsTotal('FAS030102'));
    $("#BsTotal_FAS030101T").html(FIN02002M00.getBsTotal('FAS030101T'));

    $("#BsTotal_FAS030103").html(FIN02002M00.getBsTotal('FAS030103'));
    $("#BsTotal_FAS030104").html(FIN02002M00.getBsTotal('FAS030104'));
    $("#BsTotal_FAS030105").html(FIN02002M00.getBsTotal('FAS030105'));
    $("#BsTotal_FAS030103T").html(FIN02002M00.getBsTotal('FAS030103T'));

    $("#IncomeTotal_FAS0302010101").html(FIN02002M00.getIncomeTotal('FAS0302010101'));
    $("#IncomeTotal_FAS0302010102").html(FIN02002M00.getIncomeTotal('FAS0302010102'));
    $("#IncomeTotal_amslTtalPlAmt").html(FIN02002M00.getIncomeTotal('amslTtalPlAmt'));
    $("#IncomeTotal_FAS03020201").html(FIN02002M00.getIncomeTotal('FAS03020201'));
    $("#IncomeTotal_bsopPlAmt").html(FIN02002M00.getIncomeTotal('bsopPlAmt'));
    $("#IncomeTotal_FAS03020301").html(FIN02002M00.getIncomeTotal('FAS03020301'));
    $("#IncomeTotal_FAS03020401").html(FIN02002M00.getIncomeTotal('FAS03020401'));
    $("#IncomeTotal_crtxSbbfNtprAmt").html(FIN02002M00.getIncomeTotal('crtxSbbfNtprAmt'));
    $("#IncomeTotal_FAS03020501").html(FIN02002M00.getIncomeTotal('FAS03020501'));
    $("#IncomeTotal_crtrNtPlAmt").html(FIN02002M00.getIncomeTotal('crtrNtPlAmt'));

    $("#CostTotal_FAS03030101").html(FIN02002M00.getCostTotal('FAS03030101'));
    $("#CostTotal_FAS0303010101").html(FIN02002M00.getCostTotal('FAS0303010101'));
    $("#CostTotal_FAS0303010102").html(FIN02002M00.getCostTotal('FAS0303010102'));
    $("#CostTotal_FAS03030201").html(FIN02002M00.getCostTotal('FAS03030201'));
    $("#CostTotal_FAS0303030101").html(FIN02002M00.getCostTotal('FAS0303030101'));
    $("#CostTotal_FAS0303030102").html(FIN02002M00.getCostTotal('FAS0303030102'));
    $("#CostTotal_FAS0303030103").html(FIN02002M00.getCostTotal('FAS0303030103'));
    $("#CostTotal_FAS0303030104").html(FIN02002M00.getCostTotal('FAS0303030104'));

    $("#FAS03040101s").html(FIN02002M00.finInputList01(FAS03040101s,'FAS03040101s'));
    $("#FAS03040201s").html(FIN02002M00.finInputList01(FAS03040201s,'FAS03040201s'));
    $("#FAS03040301s").html(FIN02002M00.finInputList02(FAS03040301s,'FAS03040301s'));
    $("#FAS03040401s").html(FIN02002M00.finInputList03(FAS03040401s,'FAS03040401s'));
    $("#FAS03040501s").html(FIN02002M00.finInputList01(FAS03040501s,'FAS03040501s'));
    $("#FAS03040601s").html(FIN02002M00.finInputList01(FAS03040601s,'FAS03040601s'));

    $("#AddValueTotal_FAS030401").html(FIN02002M00.getAddValueTotal('FAS030401'));
    $("#AddValueTotal_FAS030402").html(FIN02002M00.getAddValueTotal('FAS030402'));
    $("#AddValueTotal_FAS030403").html(FIN02002M00.getAddValueTotal('FAS030403'));
    $("#AddValueTotal_FAS030404").html(FIN02002M00.getAddValueTotal('FAS030404'));
    $("#AddValueTotal_FAS030405").html(FIN02002M00.getAddValueTotal('FAS030405'));
    $("#AddValueTotal_FAS030406").html(FIN02002M00.getAddValueTotal('FAS030406'));

    $("input").unbind("keyup");

    $("input").keyup(function() {
        
        setTimeout(FIN02002M00.onKeyUp,1000);
    });


};

FIN02002M00Component.prototype.onKeyUp = function() {
    FIN02002M00.onSetValue();
    FIN02002M00.onAddView();
};

FIN02002M00Component.prototype.onSetValue = function() {

    //1) BS
    $("input[name=FAS03010101]").each(function (idx) {
        var id = $("input[name=FAS03010101]").eq(idx).attr('id');
        for (var i = 0; i < FAS03010101s.length; i++) {
            if (FAS03010101s[i].finSmdcd == id) {
                FAS03010101s[i].finAmt = Number($("input[name=FAS03010101]").eq(idx).val());
                break;
            }
        }
    });

    $("input[name=FAS03010102]").each(function (idx) {
        var id = $("input[name=FAS03010102]").eq(idx).attr('id');
        for (var i = 0; i < FAS03010102s.length; i++) {
            if (FAS03010102s[i].finSmdcd == id) {
                 FAS03010102s[idx].finAmt = Number($("input[name=FAS03010102]").eq(idx).val());
                 break;
            }
        }
    });

    $("input[name=FAS03010201]").each(function (idx) {
        var id = $("input[name=FAS03010201]").eq(idx).attr('id');
        for (var i = 0; i < FAS03010201s.length; i++) {
            if (FAS03010201s[i].finSmdcd == id) {
                 FAS03010201s[idx].finAmt = Number($("input[name=FAS03010201]").eq(idx).val());
                 break;
            }
        }
    }); 

    $("input[name=FAS03010202]").each(function (idx) {
        var id = $("input[name=FAS03010202]").eq(idx).attr('id');
        for (var i = 0; i < FAS03010202s.length; i++) {
            if (FAS03010202s[i].finSmdcd == id) {
                 FAS03010202s[idx].finAmt = Number($("input[name=FAS03010202]").eq(idx).val());
                 break;
            }
        }
    }); 

    $("input[name=FAS03010203]").each(function (idx) {
        var id = $("input[name=FAS03010203]").eq(idx).attr('id');
        for (var i = 0; i < FAS03010203s.length; i++) {
            if (FAS03010203s[i].finSmdcd == id) {
                 FAS03010203s[idx].finAmt = Number($("input[name=FAS03010203]").eq(idx).val());
                 break;
            }
        }
    }); 

    $("input[name=FAS03010204]").each(function (idx) {
        var id = $("input[name=FAS03010204]").eq(idx).attr('id');
        for (var i = 0; i < FAS03010204s.length; i++) {
            if (FAS03010204s[i].finSmdcd == id) {
                 FAS03010204s[idx].finAmt = Number($("input[name=FAS03010204]").eq(idx).val());
                 break;
            }
        }
    }); 

    $("input[name=FAS03010301]").each(function (idx) {
        var id = $("input[name=FAS03010301]").eq(idx).attr('id');
        for (var i = 0; i < FAS03010301s.length; i++) {
            if (FAS03010301s[i].finSmdcd == id) {
                 FAS03010301s[idx].finAmt = Number($("input[name=FAS03010301]").eq(idx).val());
                 break;
            }
        }
    });

    $("input[name=FAS03010401]").each(function (idx) {
        var id = $("input[name=FAS03010401]").eq(idx).attr('id');
        for (var i = 0; i < FAS03010401s.length; i++) {
            if (FAS03010401s[i].finSmdcd == id) {
                 FAS03010401s[idx].finAmt = Number($("input[name=FAS03010401]").eq(idx).val());
                 break;
            }
        }
    });

    $("input[name=FAS03010501]").each(function (idx) {
        var id = $("input[name=FAS03010501]").eq(idx).attr('id');
        for (var i = 0; i < FAS03010501s.length; i++) {
            if (FAS03010501s[i].finSmdcd == id) {
                 FAS03010501s[idx].finAmt = Number($("input[name=FAS03010501]").eq(idx).val());
                 break;
            }
        }        
    });

    //2) Income
    $("input[name=FAS03020101]").each(function (idx) {
        var id = $("input[name=FAS03020101]").eq(idx).attr('id');
        for (var i = 0; i < FAS03020101s.length; i++) {
            if (FAS03020101s[i].finSmdcd == id) {
                FAS03020101s[i].finAmt = Number($("input[name=FAS03020101]").eq(idx).val());
                break;
            }
        }
    });

    $("input[name=FAS03020201]").each(function (idx) {
        var id = $("input[name=FAS03020201]").eq(idx).attr('id');
        for (var i = 0; i < FAS03020201s.length; i++) {
            if (FAS03020201s[i].finSmdcd == id) {
                FAS03020201s[i].finAmt = Number($("input[name=FAS03020201]").eq(idx).val());
                break;
            }
        }
    });

    $("input[name=FAS03020301]").each(function (idx) {
        var id = $("input[name=FAS03020301]").eq(idx).attr('id');
        for (var i = 0; i < FAS03020301s.length; i++) {
            if (FAS03020301s[i].finSmdcd == id) {
                FAS03020301s[i].finAmt = Number($("input[name=FAS03020301]").eq(idx).val());
                break;
            }
        }
    });

    $("input[name=FAS03020401]").each(function (idx) {
        var id = $("input[name=FAS03020401]").eq(idx).attr('id');
        for (var i = 0; i < FAS03020401s.length; i++) {
            if (FAS03020401s[i].finSmdcd == id) {
                FAS03020401s[i].finAmt = Number($("input[name=FAS03020401]").eq(idx).val());
                break;
            }
        }
    });

    $("input[name=FAS03020501]").each(function (idx) {
        var id = $("input[name=FAS03020501]").eq(idx).attr('id');
        for (var i = 0; i < FAS03020501s.length; i++) {
            if (FAS03020501s[i].finSmdcd == id) {
                FAS03020501s[i].finAmt = Number($("input[name=FAS03020501]").eq(idx).val());
                break;
            }
        }
    });        

    //3) Cost
    $("input[name=FAS03030101]").each(function (idx) {
        var id = $("input[name=FAS03030101]").eq(idx).attr('id');
        for (var i = 0; i < FAS03030101s.length; i++) {
            if (FAS03030101s[i].finSmdcd == id) {
                FAS03030101s[i].finAmt = Number($("input[name=FAS03030101]").eq(idx).val());
                break;
            }
        }
    });

    $("input[name=FAS03030201]").each(function (idx) {
        var id = $("input[name=FAS03030201]").eq(idx).attr('id');
        for (var i = 0; i < FAS03030201s.length; i++) {
            if (FAS03030201s[i].finSmdcd == id) {
                FAS03030201s[i].finAmt = Number($("input[name=FAS03030201]").eq(idx).val());
                break;
            }
        }
    });

    $("input[name=FAS03030301]").each(function (idx) {
        var id = $("input[name=FAS03030301]").eq(idx).attr('id');
        for (var i = 0; i < FAS03030301s.length; i++) {
            if (FAS03030301s[i].finSmdcd == id) {
                FAS03030301s[i].finAmt = Number($("input[name=FAS03030301]").eq(idx).val());
                break;
            }
        }
    });

    //4) onAddValue
    $("input[name=FAS03040301]").each(function (idx) {
        
        if (idx !=0 && idx !=3) {
            var id = $("input[name=FAS03040301]").eq(idx).attr('id');
            for (var i = 0; i < FAS03040301s.length; i++) {
                if (FAS03040301s[i].finSmdcd == id) {
                    FAS03040301s[i].finAmt = Number($("input[name=FAS03040301]").eq(idx).val());
                    break;
                }
            }
        }
    });

    $("input[name=FAS03040401]").each(function (idx) {
        if (idx !=3) {
            var id = $("input[name=FAS03040401]").eq(idx).attr('id');
            for (var i = 0; i < FAS03040401s.length; i++) {
                if (FAS03040401s[i].finSmdcd == id) {
                    FAS03040401s[i].finAmt = Number($("input[name=FAS03040401]").eq(idx).val());
                    break;
                }
            }
        }
    });

}

FIN02002M00Component.prototype.finInputList = function(resArr) {

    if (resArr == null) return '';
    if (resArr == undefined) return '';

    var html = '';

    for (var i = 0; i < resArr.length; i++) {
        html += '<div class="form-group">';
        html += '<label class="col-lg-4 control-label">' + resArr[i].finSmdcdNm + '</label>';
        html += '<div class="col-lg-6">';
        html += '<input type="number" min="0" max="9999999999999" size="13" class="form-control" value="'+ resArr[i].finAmt +'" name="' + resArr[i].finMdvcd + '" id="'+ resArr[i].finSmdcd +'" placeholder="0" lang="nb">';
        html += '</div>';
        html += '</div>';
    }

    return html;
};

FIN02002M00Component.prototype.finInputList01 = function(resArr, accd) {

    if (resArr == null) return '';
    if (resArr == undefined) return '';

    var html = '';

    for (var i = 0; i < resArr.length; i++) {
        html += '<div class="form-group">';
        html += '<label class="col-lg-4 control-label">' + resArr[i].finSmdcdNm + '</label>';
        html += '<div class="col-lg-6">';
        html += '<input type="number" min="0" max="9999999999999" size="13" class="form-control" value="'+ FIN02002M00.getAddValue01(accd, i) +'" name="' + resArr[i].finMdvcd + '" id="'+ resArr[i].finSmdcd +'"placeholder="0" lang="nb" readonly>';
        html += '</div>';
        html += '</div>';
    }

    return html;
};


FIN02002M00Component.prototype.finInputList02 = function(resArr, accd) {

    if (resArr == null) return '';
    if (resArr == undefined) return '';

    var html = '';

    for (var i = 0; i < resArr.length; i++) {
        html += '<div class="form-group">';
        html += '<label class="col-lg-4 control-label">' + resArr[i].finSmdcdNm + '</label>';
        html += '<div class="col-lg-6">';
        if (i != 0 && i != 3 ) {
            html += '<input type="number" min="0" max="9999999999999" size="13" class="form-control" value="'+ resArr[i].finAmt +'" name="' + resArr[i].finMdvcd + '" id="'+ resArr[i].finSmdcd +'" placeholder="0" lang="nb">';
        } else {
            html += '<input type="number" min="0" max="9999999999999" size="13" class="form-control" value="'+ FIN02002M00.getAddValue01(accd, i) +'" name="' + resArr[i].finMdvcd + '" id="'+ resArr[i].finSmdcd +'" placeholder="0" lang="nb" readonly>';
        }
        html += '</div>';
        html += '</div>';
    }

    return html;
};


FIN02002M00Component.prototype.finInputList03 = function(resArr, accd) {

    if (resArr == null) return '';
    if (resArr == undefined) return '';

    var html = '';

    for (var i = 0; i < resArr.length; i++) {
        html += '<div class="form-group">';
        html += '<label class="col-lg-4 control-label">' + resArr[i].finSmdcdNm + '</label>';
        html += '<div class="col-lg-6">';
        if (i != 3) {
            html += '<input type="number" min="0" max="9999999999999" size="13" class="form-control" value="'+ resArr[i].finAmt +'" name="' + resArr[i].finMdvcd + '" id="'+ resArr[i].finSmdcd +'" placeholder="0" lang="nb">';
        } else {
            html += '<input type="number" min="0" max="9999999999999" size="13" class="form-control" value="'+ FIN02002M00.getAddValue01(accd, i) +'" name="' + resArr[i].finMdvcd + '" id="'+ resArr[i].finSmdcd +'" placeholder="0" lang="nb" readonly>';
        }
        html += '</div>';
        html += '</div>';
    }

    return html;
};

FIN02002M00Component.prototype.saveArr = function(sourceArr) {

        sourceArr.forEach( function(selectedRow, index) {

               finfnaminfos.push({
                    alyid:finCom.alyid,
                    userid:finCom.userid,
                    bzn:finCom.bzn,
                    stacYy:finCom.stacYy,
                    finDcd:selectedRow.finDcd,
                    finDcdNm:selectedRow.finDcdNm,
                    finLrdvcd:selectedRow.finLrdvcd,
                    finLrdvcdNm:selectedRow.finLrdvcdNm,
                    finMdvcd:selectedRow.finMdvcd,
                    finMdvcdNm:selectedRow.finMdvcdNm,
                    finSmdcd:selectedRow.finSmdcd,
                    finSmdcdNm:selectedRow.finSmdcdNm,
                    finAmt:selectedRow.finAmt
                })

        });

};

FIN02002M00Component.prototype.onSave = function() {

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

                finfnaminfos = [];

                FIN02002M00.saveArr(FAS03010101s);
                FIN02002M00.saveArr(FAS03010102s);  //재고자산
                FIN02002M00.saveArr(FAS03010201s);  //투자자산
                FIN02002M00.saveArr(FAS03010202s);  //유형자산
                FIN02002M00.saveArr(FAS03010203s);  //무형자산
                FIN02002M00.saveArr(FAS03010204s);  //기타비유동자산
                FIN02002M00.saveArr(FAS03010301s);  //유동부채                
                FIN02002M00.saveArr(FAS03010401s);  //비유동부채
                FIN02002M00.saveArr(FAS03010501s);  //자본

                FIN02002M00.saveArr(FAS03020101s);  //매출
                FIN02002M00.saveArr(FAS03020201s);  //판매관리비
                FIN02002M00.saveArr(FAS03020301s);  //영업외수익
                FIN02002M00.saveArr(FAS03020401s);  //영업외비용
                FIN02002M00.saveArr(FAS03020501s);  //법인세     

                FIN02002M00.saveArr(FAS03030101s);  //당기총제조비용
                FIN02002M00.saveArr(FAS03030201s);  //경비
                FIN02002M00.saveArr(FAS03030301s);  //기타

                FIN02002M00.saveArr(FAS03040101s);  //법인세차감전순이익
                FIN02002M00.saveArr(FAS03040201s);  //인건비
                FIN02002M00.saveArr(FAS03040301s);  //금융비용
                FIN02002M00.saveArr(FAS03040401s);  //임차료
                FIN02002M00.saveArr(FAS03040501s);  //조세공과
                FIN02002M00.saveArr(FAS03040601s);  //감가상각비

                FIN02002M00.onAllRgsn();

            }
            
        }
    });

};

FIN02002M00Component.prototype.saveFAS0304 = function() {

    var me = this;

    bootbox.confirm({
        message: "Added Value를 저장하시겠습니까?",
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

                finfnaminfos = [];

                FIN02002M00.saveArr(FAS03040101s);  
                FIN02002M00.saveArr(FAS03040201s);  
                FIN02002M00.saveArr(FAS03040301s);  
                FIN02002M00.saveArr(FAS03040401s);  
                FIN02002M00.saveArr(FAS03040501s);  
                FIN02002M00.saveArr(FAS03040601s);  

                FIN02002M00.onRgsn();

            }
            
        }
    });

};

FIN02002M00Component.prototype.initFAS0304 = function() {

    bootbox.confirm({
        message: "Added Value를 새로 입력하시겠습니까?",
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

                FAS03040101s = FIN02002M00.initArr(FAS03040101s);  
                FAS03040201s = FIN02002M00.initArr(FAS03040201s);  
                FAS03040301s = FIN02002M00.initArr(FAS03040301s);  
                FAS03040401s = FIN02002M00.initArr(FAS03040401s);  
                FAS03040501s = FIN02002M00.initArr(FAS03040501s);  
                FAS03040601s = FIN02002M00.initArr(FAS03040601s); 

                setTimeout(FIN02002M00.initView, 2000);

            }
          
        }
    });


};

FIN02002M00Component.prototype.initFAS0303 = function() {

    bootbox.confirm({
        message: "Cost를 새로 입력하시겠습니까?",
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

                FAS03030101s = FIN02002M00.initArr(FAS03030101s);  //당기총제조비용
                FAS03030201s = FIN02002M00.initArr(FAS03030201s);  //경비
                FAS03030301s = FIN02002M00.initArr(FAS03030301s);  //기타

               setTimeout(FIN02002M00.initView, 2000);

            }
          
        }
    });


};

FIN02002M00Component.prototype.saveFAS0303 = function() {

    bootbox.confirm({
        message: "Cost를 저장하시겠습니까?",
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

                finfnaminfos = [];

                FIN02002M00.saveArr(FAS03030101s);  //당기총제조비용
                FIN02002M00.saveArr(FAS03030201s);  //경비
                FIN02002M00.saveArr(FAS03030301s);  //기타                

                FIN02002M00.onRgsn();

            }
            
        }
    });

};

FIN02002M00Component.prototype.initFAS0302 = function() {

    bootbox.confirm({
        message: "Income 를 새로 입력하시겠습니까?",
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

                FAS03020101s = FIN02002M00.initArr(FAS03020101s);  //매출
                FAS03020201s = FIN02002M00.initArr(FAS03020201s);  //판매관리비
                FAS03020301s = FIN02002M00.initArr(FAS03020301s);  //영업외수익
                FAS03020401s = FIN02002M00.initArr(FAS03020401s);  //영업외비용
                FAS03020501s = FIN02002M00.initArr(FAS03020501s);  //법인세

                setTimeout(FIN02002M00.initView, 2000);

            }
          
        }
    });


};

FIN02002M00Component.prototype.saveFAS0302 = function() {

    bootbox.confirm({
        message: "Income을 저장하시겠습니까?",
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

                finfnaminfos = [];

                FIN02002M00.saveArr(FAS03020101s);  //매출
                FIN02002M00.saveArr(FAS03020201s);  //판매관리비
                FIN02002M00.saveArr(FAS03020301s);  //영업외수익
                FIN02002M00.saveArr(FAS03020401s);  //영업외비용
                FIN02002M00.saveArr(FAS03020501s);  //법인세

                FIN02002M00.onRgsn();

            }
            
        }
    });

};

FIN02002M00Component.prototype.initFAS0301 = function() {

    console.log("initFAS0301 start");

    bootbox.confirm({
        message: "Balance Sheet를 새로 입력하시겠습니까?",
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

            console.log("initFAS0301 result >> " + result);
            
            if (result) {
                var callFinArr = [];
                FAS03010101s = FIN02002M00.initArr(FAS03010101s);
                FAS03010102s = FIN02002M00.initArr(FAS03010102s);  //재고자산
                FAS03010201s = FIN02002M00.initArr(FAS03010201s);  //투자자산
                FAS03010202s = FIN02002M00.initArr(FAS03010202s);  //유형자산
                FAS03010203s = FIN02002M00.initArr(FAS03010203s);  //무형자산
                FAS03010204s = FIN02002M00.initArr(FAS03010204s);  //기타비유동자산
                FAS03010301s = FIN02002M00.initArr(FAS03010301s);  //유동부채                
                FAS03010401s = FIN02002M00.initArr(FAS03010401s);  //비유동부채
                FAS03010501s = FIN02002M00.initArr(FAS03010501s);  //자본

                setTimeout(FIN02002M00.initView, 2000);

            }

        }
    });


};

FIN02002M00Component.prototype.initView = function() {
    FIN02002M00.setAddValue();
    FIN02002M00.onView();
};

FIN02002M00Component.prototype.saveFAS0301 = function() {

    bootbox.confirm({
        message: "Balance Sheet를 저장하시겠습니까?",
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

                finfnaminfos = [];

                FIN02002M00.saveArr(FAS03010101s);
                FIN02002M00.saveArr(FAS03010102s);  //재고자산
                FIN02002M00.saveArr(FAS03010201s);  //투자자산
                FIN02002M00.saveArr(FAS03010202s);  //유형자산
                FIN02002M00.saveArr(FAS03010203s);  //무형자산
                FIN02002M00.saveArr(FAS03010204s);  //기타비유동자산
                FIN02002M00.saveArr(FAS03010301s);  //유동부채                
                FIN02002M00.saveArr(FAS03010401s);  //비유동부채
                FIN02002M00.saveArr(FAS03010501s);  //자본

                FIN02002M00.onRgsn();

            }
            
        }
    });

};

FIN02002M00Component.prototype.onRgsn = function() {

    overlay.show();

    FIN02002M00.onSetValue();

    finService.saveAnalysisFinDt(finfnaminfos, FIN02002M00.callback);

};

FIN02002M00Component.prototype.onAllRgsn = function() {

    overlay.show();

    FIN02002M00.onSetValue();

    finService.saveAnalysisFinDt(finfnaminfos, FIN02002M00.allCallback);

};

FIN02002M00Component.prototype.callback = function(data) {

    console.log('request >>' , data);

    if (data != null) {
        console.log("board ajax >>> " , data);
        var res = JSON.parse(data);

        if (res.success==true) { 
            overlay.hide();
            console.log('성공');
            console.log(res);
            bootbox.alert(res.msg);
        } else {
            overlay.hide();
        }

    }
};

FIN02002M00Component.prototype.allCallback = function(data) {

    console.log('request >>' , data);

    if (data != null) {
        console.log("board ajax >>> " , data);
        var res = JSON.parse(data);

        if (res.success==true) { 
            overlay.hide();
            console.log('성공');
            console.log(res);
            bootbox.alert(res.msg, function(){
                toMove('FIN02002M00');
            });
        } else {
            overlay.hide();
        }

    }
};

FIN02002M00Component.prototype.initArr = function(arr) {
    var initFin = [];
    var initparam = {};
    for (var i = 0; i < arr.length; i++) {

        var alyid = arr[i]['alyid'];
        var bzn = arr[i]['bzn'];
        var finDcd = arr[i]['finDcd'];
        var finDcdNm = arr[i]['finDcdNm'];
        var finLrdvcd = arr[i]['finLrdvcd'];
        var finLrdvcdNm = arr[i]['finLrdvcdNm'];
        var finMdvcd = arr[i]['finMdvcd'];
        var finMdvcdNm = arr[i]['finMdvcdNm'];
        var finSmdcd = arr[i]['finSmdcd'];
        var finSmdcdNm = arr[i]['finSmdcdNm'];
        var finTitle = arr[i]['finTitle'];
        var finAmt = 0;

        console.log(alyid);
        console.log(bzn);
        console.log(finDcd);
        console.log(finDcdNm);
        console.log(finLrdvcd);
        console.log(finLrdvcdNm);
        console.log(finMdvcd);
        console.log(finMdvcdNm);
        console.log(finSmdcd);
        console.log(finSmdcdNm);
        console.log(finTitle);
        console.log(finAmt);
        
        initparam = {}; 
        initparam = {
            finDcd:finDcd,
            finDcdNm:finDcdNm,
            finLrdvcd:finLrdvcd,
            finLrdvcdNm:finLrdvcdNm,
            finMdvcd:finMdvcd,
            finMdvcdNm:finMdvcdNm,
            finSmdcd:finSmdcd,
            finSmdcdNm:finSmdcdNm,
            finAmt:0
        };

        console.log("loop initparam >> " + i , initparam);

        initFin.push(initparam);
        
        console.log("loop finArr >> " + i , initFin[i]);
    }

    console.log("return finArr >> " , initFin);

    return initFin;
}

function itemSplit(resArr, smcd) {
    var arr = (((((resArr.data[smcd.substring(0,7)])['finLrdvcd'])[smcd.substring(0,9)])['finMdvcd'])[smcd.substring(0,11)])['finSmdcd'];

    return arr;
        
}
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
    
    FIN02002M00.ngOnInit();

});



