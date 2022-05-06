
var FIN02003M00 = new FIN02003M00Component();

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

function FIN02003M00Component() {

};

FIN02003M00Component.prototype.ngOnInit = function () {

    console.log("finCom 2222 >>> " , finCom);

    bootbox.alert('여기 도출된 재무컨설팅 결과에 대해서는 책임지지 않습니다. 재무의사결정 시에는  Business Flatform으로 문의하시기 바랍니다<br/>< 공지사항 참조 >',
    function() {

        overlay.show();

        entpName = finCom.name;
        stacYy = finCom.stacYy; 
        bzn = finCom.bzn;
        amtUnitNm = finCom.amtUnitNm;
        stacYys = finCom.stacYys;

        $("span[name='entpName']").each(function (idx) {
            $("span[name='entpName']").eq(idx).html(entpName);
        });

        $("span[name='amtUnitNm']").each(function (idx) {
            $("span[name='amtUnitNm']").eq(idx).html(amtUnitNm);
        });

        stacYyArray = [];
        for (var i = 0; i < stacYys.length; i++) {
            var stacYyName = stacYys[i] +"년도 재무정보";
            stacYyArray[i] = "<option value='" + stacYys[i] + "'>" + stacYyName + "</option>";
        }

        $("select[name='stacYyInfo']").each(function (idx) {
            $("select[name='stacYyInfo']").eq(idx).html('');
            $("select[name='stacYyInfo']").eq(idx).html(stacYyArray.join(''));
        });

        $("input:checkbox[name=isLastest]").each(function (idx) {
            $("input:checkbox[name='isLastest']").eq(idx).attr('checked', true) ;
        });

        FIN02003M00.onToolTip();

        FIN02003M00.onPlot9();

        finService.getAnalysisFinDtTypeMaps(finCom.alyid, finCom.userid, finCom.bzn, finCom.stacYys, FIN02003M00.finAnalyCallback);

        $('a[data-toggle="tab"]').on('shown.bs.tab', function(e) {

                var target = $(e.target).attr("href") // activated tab

                switch (target) {
                    case "#balanceSheet":
                       // onBusinessWorkPattern();
                    break;
                    case "#incomeStatement":
                     //   me.onSalesPredictList();
                    break;
                    case "#cost":
                     //   me.onCashIncomeList();
                    break;
                    case "#sheet2":
                      //  me.onSalesCreditPredict();
                    break;
                    case "#sheet3":
                      //  me.onCashOutCome();
                    break;
                    case "#walltrant":
                        if (wallTrantSet.list1 != null && wallTrantSet.list1 != undefined) {
                            FIN02003M00.setWallTrantPlot(wallTrantSet.list1);
                        }
                     //   me.onCashNtFlow();
                    break;
                    case "#res0":
                     //   me.onCashBdgtAmt();
                    break;
                }
        });            

        $("#myTab a").click(function(e) {
            e.preventDefault();
            $(this).tab("show");
        });

        $("#myTab a:first").tab("show");

        $("#stacYyInfo_1").on("change", function(){

            var stacYy = $("#stacYyInfo_1").val();

            // value 값으로 선택
            $("#stacYyInfo_2").val(stacYy).prop("selected", true);
            // value 값으로 선택
            $("#stacYyInfo_3").val(stacYy).prop("selected", true);            
            // value 값으로 선택
            $("#stacYyInfo_4").val(stacYy).prop("selected", true);
            
            alyDataSet.forEach(function(selectedRaw, index) {

                if (selectedRaw.stacYy == stacYy) {

                    console.log("selectedRaw >>>> ", selectedRaw);

                    FIN02003M00.onBalance(selectedRaw);
                    FIN02003M00.onIncome(selectedRaw);
                    FIN02003M00.onCost(selectedRaw);
                    FIN02003M00.onAddedValue(selectedRaw);

                    FIN02003M00.onPlot1();
                    FIN02003M00.onPlot4();
                    FIN02003M00.onPlot6();

                    $("span[name='stacYyInfoValue']").each(function (idx) {
                        $("span[name='stacYyInfoValue']").eq(idx).html(stacYy);
                    });
                }

            });

        });

        $("#stacYyInfo_2").on("change", function(){

            var stacYy = $("#stacYyInfo_2").val();

            // value 값으로 선택
            $("#stacYyInfo_1").val(stacYy).prop("selected", true);
            // value 값으로 선택
            $("#stacYyInfo_3").val(stacYy).prop("selected", true);            
            // value 값으로 선택
            $("#stacYyInfo_4").val(stacYy).prop("selected", true);

            alyDataSet.forEach(function(selectedRaw, index) {

                if (selectedRaw.stacYy == stacYy) {

                    console.log("selectedRaw >>>> ", selectedRaw);

                    FIN02003M00.onBalance(selectedRaw);
                    FIN02003M00.onIncome(selectedRaw);
                    FIN02003M00.onCost(selectedRaw);
                    FIN02003M00.onAddedValue(selectedRaw);

                    FIN02003M00.onPlot1();
                    FIN02003M00.onPlot4();
                    FIN02003M00.onPlot6();

                    $("span[name='stacYyInfoValue']").each(function (idx) {
                        $("span[name='stacYyInfoValue']").eq(idx).html(stacYy);
                    });
                }

            });

        });

        $("#stacYyInfo_3").on("change", function(){

            var stacYy = $("#stacYyInfo_3").val();

            // value 값으로 선택
            $("#stacYyInfo_1").val(stacYy).prop("selected", true);
            // value 값으로 선택
            $("#stacYyInfo_2").val(stacYy).prop("selected", true);            
            // value 값으로 선택
            $("#stacYyInfo_4").val(stacYy).prop("selected", true);

            alyDataSet.forEach(function(selectedRaw, index) {

                if (selectedRaw.stacYy == stacYy) {

                    console.log("selectedRaw >>>> ", selectedRaw);

                    FIN02003M00.onBalance(selectedRaw);
                    FIN02003M00.onIncome(selectedRaw);
                    FIN02003M00.onCost(selectedRaw);
                    FIN02003M00.onAddedValue(selectedRaw);

                    FIN02003M00.onPlot1();
                    FIN02003M00.onPlot4();
                    FIN02003M00.onPlot6();

                    $("span[name='stacYyInfoValue']").each(function (idx) {
                        $("span[name='stacYyInfoValue']").eq(idx).html(stacYy);
                    });
                }

            });

        });

        $("#stacYyInfo_4").on("change", function(){

            var stacYy = $("#stacYyInfo_4").val();

            // value 값으로 선택
            $("#stacYyInfo_1").val(stacYy).prop("selected", true);
            // value 값으로 선택
            $("#stacYyInfo_2").val(stacYy).prop("selected", true);            
            // value 값으로 선택
            $("#stacYyInfo_3").val(stacYy).prop("selected", true);

            alyDataSet.forEach(function(selectedRaw, index) {

                if (selectedRaw.stacYy == stacYy) {

                    console.log("selectedRaw >>>> ", selectedRaw);

                    FIN02003M00.onBalance(selectedRaw);
                    FIN02003M00.onIncome(selectedRaw);
                    FIN02003M00.onCost(selectedRaw);
                    FIN02003M00.onAddedValue(selectedRaw);

                    FIN02003M00.onPlot1();
                    FIN02003M00.onPlot4();
                    FIN02003M00.onPlot6();

                    $("span[name='stacYyInfoValue']").each(function (idx) {
                        $("span[name='stacYyInfoValue']").eq(idx).html(stacYy);
                    });
                }

            });

        });

    });
};

FIN02003M00Component.prototype.onSearch = function () {

};

FIN02003M00Component.prototype.decisionCallBack = function (data) {

    console.log('decisionCallBack' , data);

    if (data != null) {
        var res = JSON.parse(data);

        if (res.success) {

            stacYyArray03 = [];
            var stacYyValue = "";
            for (var i = 0; i < res.data.stacYys.length; i++) {
                        stacYyArray03[i] = "<option value='"+res.data.stacYys[i].value+"'>" + res.data.stacYys[i].name + "</option>";
                        stacYyValue = res.data.stacYys[i].value;
            }

            $("select[name='stacYyInfo03']").each(function (idx) {
                $("select[name='stacYyInfo03']").eq(idx).html('');
                $("select[name='stacYyInfo03']").eq(idx).html(stacYyArray03.join(''));
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

            FIN02003M00.decisionRatioTable();

        } else {
            overlay.hide();
            bootbox.alert(res.msg);
        }
 
    } else {
        overlay.hide();
    }

};

FIN02003M00Component.prototype.wallTrantCallback = function(data) {

    console.log('wallTrantCallback' , data);

    if (data != null) {
        var res = JSON.parse(data);

        if (res.success) {

            stacYyArray02 = [];
            var stacYyValue = "";
            for (var i = 0; i < res.data.stacYys.length; i++) {
                        stacYyArray02[i] = "<option value='"+res.data.stacYys[i].value+"'>" + res.data.stacYys[i].name + "</option>";
                        stacYyValue = res.data.stacYys[i].value;
            }

            $("select[name='stacYyInfo02']").each(function (idx) {
                $("select[name='stacYyInfo02']").eq(idx).html('');
                $("select[name='stacYyInfo02']").eq(idx).html(stacYyArray02.join(''));
            });

            wallTrantArray = res.data.walltrant[stacYyValue];
            console.log("data999999999 >>> " , wallTrantArray);  
            FIN02003M00.setWallTrantPlot(res.data.list1);

            wallTrantSet = res.data;

            var wall = Number(wallTrantArray[wallTrantArray.length-1].wallRatio);

            if (wall > 100) {
                wallDecision =  '<div class="label label-table label-warning">투자적격</div>';
            } else {
                wallDecision =  '<div class="label label-table label-danger">투자부적격</div>';
            }
            console.log("data999999999 >>> wall" , wallDecision);
            var trant = Number(wallTrantArray[wallTrantArray.length-1].trantRatio);
            
            console.log("data999999999 >>> trant" , trant); 

            if (trant > 100) {
                trantDecision =  '<div class="label label-table label-warning">사채투자적격</div>';
            } else {
                trantDecision =  '<div class="label label-table label-danger">사채투자부적격</div>';
            }    
            console.log("data999999999 >>> trant" , trantDecision);

            overlay.hide();

            FIN02003M00.wallTranTableView();
        } else {
            overlay.hide();
            bootbox.alert(res.msg);
        }
 
    } else {
        overlay.hide();
    }

};

FIN02003M00Component.prototype.finRateCallback = function(data) {

    console.log('finAnalyCallback' , data);

    if (data != null) {
        var res = JSON.parse(data);

        if (res.success) {

            stacYyArray01 = [];
            console.log("data88888888 >>> " , res.data);
            var stacYyValue = "";
    
            for (var i = 0; i < res.data.stacYys.length; i++) {
                        stacYyArray01[i] = "<option value='"+res.data.stacYys[i].value+"'>" + res.data.stacYys[i].name + "</option>";
                        stacYyValue = res.data.stacYys[i].value;
            }

            $("select[name='stacYyInfo01']").each(function (idx) {
                $("select[name='stacYyInfo01']").eq(idx).html('');
                $("select[name='stacYyInfo01']").eq(idx).html(stacYyArray01.join(''));
            });

            growthArray = res.data.growth[stacYyValue];
            safeArray = res.data.safe[stacYyValue];
            profitArray = res.data.profit[stacYyValue];
            productArray = res.data.product[stacYyValue];
            activeArray = res.data.active[stacYyValue];
            roaArray = res.data.roa[stacYyValue];
            addValueArray = res.data.addValue[stacYyValue];

            tpbsClsfDcdNm = res.data.tpbsClsfDcdNm
            enslDcdNm = res.data.enslDcdNm

            if (res.data.enslDcdNm == '중소기업') {
                enslDcd = 'M';
                $("input:radio[name='enslDcd']").filter('[value="L"]').attr("checked", false);
                $("input:radio[name='enslDcd']").filter('[value="M"]').attr("checked", true);
            }

            if (res.data.enslDcdNm == '대기업') {
                enslDcd = 'L';
                $("input:radio[name='enslDcd']").filter('[value="M"]').attr("checked", false);
                $("input:radio[name='enslDcd']").filter('[value="L"]').attr("checked", true);
            }

            $("span[name='tpbsClsfDcdNm']").each(function (idx) {
                $("span[name='tpbsClsfDcdNm']").eq(idx).html(tpbsClsfDcdNm);
            });

            $("span[name='enslDcdNm']").each(function (idx) {
                $("span[name='enslDcdNm']").eq(idx).html(enslDcdNm);
            });

            overlay.hide();

            finRatioSet = res.data;

            FIN02003M00.onFinRatioTableView();
        } else {
            overlay.hide();
            bootbox.alert(res.msg);
        }
 
    } else {
        overlay.hide();
    }

};

FIN02003M00Component.prototype.finAnalyCallback = function(data) {

    console.log('finAnalyCallback' , data);

    if (data != null) {
        var res = JSON.parse(data);

        if (res.success) {

            $('select[name=stacYyInfo] option[value='+res.data.list1[0].stacYy+']').each(function (idx) {
                $('select[name=stacYyInfo] option[value='+res.data.list1[0].stacYy+']').eq(idx).attr('selected', 'selected');
            });


            $("span[name='stacYyInfoValue']").each(function (idx) {
                $("span[name='stacYyInfoValue']").eq(idx).html(res.data.list1[0].stacYy);
            });

            alyDataSet = res.data.list1;

            FIN02003M00.onBalance(res.data.list1[0]);
            FIN02003M00.onIncome(res.data.list1[0]);
            FIN02003M00.onCost(res.data.list1[0]);
            FIN02003M00.onAddedValue(res.data.list1[0]);

            FIN02003M00.onView();

            FIN02003M00.onPlot();
            FIN02003M00.onPlot1();   
            FIN02003M00.onPlot2();
            FIN02003M00.onPlot3();
            FIN02003M00.onPlot4();
            FIN02003M00.onPlot5();
            FIN02003M00.onPlot6();
            FIN02003M00.onPlot7();
            FIN02003M00.onPlot8();
            FIN02003M00.onPlot10();

            startLength = 1;

            finService.getDecisionRatio(finCom.alyid, finCom.userid, finCom.bzn, "Y","", FIN02003M00.decisionCallBack);

            finService.getWallTrantRatio(finCom.alyid, finCom.userid, finCom.bzn, "Y","", FIN02003M00.wallTrantCallback);
        
            finService.getFinRatio(finCom.alyid, finCom.userid, finCom.bzn, "Y","", FIN02003M00.finRateCallback);
            
        } else {
            overlay.hide();
            bootbox.alert(res.msg);
        }
 
    } else {
        overlay.hide();
    }


}

FIN02003M00Component.prototype.onBalance = function(res) {

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

FIN02003M00Component.prototype.onIncome = function(res) {

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

FIN02003M00Component.prototype.onCost = function(res) {

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

FIN02003M00Component.prototype.onAddedValue = function(res) {

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

        FIN02003M00.setAddValue();

};

FIN02003M00Component.prototype.setAddValue = function() {

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

FIN02003M00Component.prototype.getAddValue01 = function(accd, idx) {

        FIN02003M00.setAddValue();

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

FIN02003M00Component.prototype.getAddValueTotal = function(accd) {

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

FIN02003M00Component.prototype.getBsTotal = function(accd) {

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
                totalAmt += FAS03010202s[i].finAmt;
            }
        }

        if (accd == 'FAS03010203') {
            for (var i = 0; i < FAS03010203s.length; i++) {
                totalAmt += FAS03010203s[i].finAmt;
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
                totalAmt += FAS03010202s[i].finAmt;
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

FIN02003M00Component.prototype.getIncomeTotal = function(accd) {

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

FIN02003M00Component.prototype.getCostTotal = function(accd) {

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

FIN02003M00Component.prototype.onToolTip = function () {

    $('.masterTooltip').hover(function(){
        // Hover over code
        var title = $(this).attr('title');
        $(this).data('tipText', title).removeAttr('title');
        $('<p class="tooltip"></p>')
            .text(title)
            .appendTo('body')
            .fadeIn('slow');
    }, function() {
        // Hover out code
        $(this).attr('title', $(this).data('tipText'));
        $('.tooltip').remove();
    }).mousemove(function(e) {
        var mousex = e.pageX + 20; //Get X coordinates
        var mousey = e.pageY + 10; //Get Y coordinates
        $('.tooltip')
        .css({ top: mousey, left: mousex })

    });

};

FIN02003M00Component.prototype.onNumberWithCommas = function (totalAmt) {
    return numberWithCommas(totalAmt);
};

FIN02003M00Component.prototype.onView = function() {

    FIN02003M00.onBsTableView();
    FIN02003M00.onDebtTableView();
    FIN02003M00.onIncomeTableView();
    FIN02003M00.onCostTableView();
    FIN02003M00.onAddValueTableView();

};


FIN02003M00Component.prototype.onBsTableView = function() {

var bsTable = "";
bsTable += "  <tr class='active'>																							";
bsTable += "      <td>유동자산</td>                                                                                          ";
bsTable += "      <td>"+FIN02003M00.getBsTotal('FAS030101')+"</td>                                                          ";
bsTable += "  </tr>                                                                                                         ";
bsTable += "  <tr class='active'>                                                                                           ";
bsTable += "      <td style='background-color:#ffa31c;color:#fff;'>당좌자산</td>                                             ";
bsTable += "      <td style='background-color:#ffa31c;color:#fff;'>"+FIN02003M00.getBsTotal('FAS03010101')+"</td>           ";
bsTable += "  </tr>                                                                                                         ";

for (var i = 0; i < FAS03010101s.length; i++) {
bsTable += "  <tr>															                                                ";
bsTable += "      <td>"+FAS03010101s[i].finSmdcdNm+"</td>                                                                   ";
bsTable += "      <td>"+FIN02003M00.onNumberWithCommas(FAS03010101s[i].finAmt)+"</td>                                       ";
bsTable += "  </tr>                                                                                                         ";    
}

bsTable += "  <tr class='active'>                                                                                           ";
bsTable += "      <td style='background-color:#00bcd4;color:#fff;'>재고자산</td>                                             ";
bsTable += "      <td style='background-color:#00bcd4;color:#fff;'>"+FIN02003M00.getBsTotal('FAS03010102')+"</td>                     ";
bsTable += "  </tr>                                                                                                         ";

for (var i = 0; i < FAS03010102s.length; i++) {
bsTable += "  <tr>															                                                ";
bsTable += "      <td>"+FAS03010102s[i].finSmdcdNm+"</td>                                                                   ";
bsTable += "      <td>"+FIN02003M00.onNumberWithCommas(FAS03010102s[i].finAmt)+"</td>                                       ";
bsTable += "  </tr>                                                                                                         ";    
}

bsTable += "  <tr class='active'>                                                                                           ";
bsTable += "      <td>비유동자산</td>                                                                                        ";
bsTable += "      <td>"+FIN02003M00.getBsTotal('FAS030102')+"</td>                                                                    ";
bsTable += "  </tr>                                                                                                         ";
bsTable += "  <tr>                                                                                                          ";
bsTable += "      <td style='background-color:#a6c600;color:#fff;'>투자자산</td>                                             ";
bsTable += "      <td style='background-color:#a6c600;color:#fff;'>"+FIN02003M00.getBsTotal('FAS03010201')+"</td>                     ";
bsTable += "  </tr>                                                                                                         ";

for (var i = 0; i < FAS03010201s.length; i++) {
bsTable += "  <tr>															                                                ";
bsTable += "      <td>"+FAS03010201s[i].finSmdcdNm+"</td>                                                                   ";
bsTable += "      <td>"+FIN02003M00.onNumberWithCommas(FAS03010201s[i].finAmt)+"</td>                                       ";
bsTable += "  </tr>                                                                                                         ";    
}

bsTable += "                                                                                                                ";
bsTable += "  <tr class='active'>                                                                                           ";
bsTable += "      <td style='background-color:#177bbb;color:#fff;'>유형자산</td>                                             ";
bsTable += "      <td style='background-color:#177bbb;color:#fff;'>"+FIN02003M00.getBsTotal('FAS03010202')+"</td>                     ";
bsTable += "  </tr>                                                                                                         ";

for (var i = 0; i < FAS03010202s.length; i++) {
bsTable += "  <tr>															                                                ";
bsTable += "      <td>"+FAS03010202s[i].finSmdcdNm+"</td>                                                                   ";
bsTable += "      <td>"+FIN02003M00.onNumberWithCommas(FAS03010202s[i].finAmt)+"</td>                                       ";
bsTable += "  </tr>                                                                                                         ";    
}

bsTable += "                                                                                                                ";
bsTable += "  <tr class='active'>                                                                                           ";
bsTable += "      <td style='background-color:#8669CC;color:#fff;'>무형자산</td>                                             ";
bsTable += "      <td style='background-color:#8669CC;color:#fff;'>"+FIN02003M00.getBsTotal('FAS03010203')+"</td>                     ";
bsTable += "  </tr>                                                                                                         ";

for (var i = 0; i < FAS03010203s.length; i++) {
bsTable += "  <tr>															                                                ";
bsTable += "      <td>"+FAS03010203s[i].finSmdcdNm+"</td>                                                                   ";
bsTable += "      <td>"+FIN02003M00.onNumberWithCommas(FAS03010203s[i].finAmt)+"</td>                                       ";
bsTable += "  </tr>                                                                                                         ";    
}

bsTable += "                                                                                                                ";
bsTable += "  <tr class='active'>                                                                                           ";
bsTable += "      <td style='background-color:#ffa31c;color:#fff;'>기타비유동자산</td>                                        ";
bsTable += "      <td style='background-color:#ffa31c;color:#fff;'>"+FIN02003M00.getBsTotal('FAS03010204')+"</td>                     ";
bsTable += "  </tr>                                                                                                         ";

for (var i = 0; i < FAS03010204s.length; i++) {
bsTable += "  <tr>															                                                ";
bsTable += "      <td>"+FAS03010204s[i].finSmdcdNm+"</td>                                                                   ";
bsTable += "      <td>"+FIN02003M00.onNumberWithCommas(FAS03010204s[i].finAmt)+"</td>                                       ";
bsTable += "  </tr>                                                                                                         ";    
}

bsTable += "                                                                                                                ";
bsTable += "  <tr class='active'>                                                                                           ";
bsTable += "      <td>자산총계</td>                                                                                          ";
bsTable += "      <td>"+FIN02003M00.getBsTotal('FAS030101T')+"</td>  ";
bsTable += "  </tr>																											";

    $('#bsTable > tbody').html('');
    $('#bsTable > tbody:last').append(bsTable);
    
};

FIN02003M00Component.prototype.onDebtTableView = function() {

debtTable += "<tr class='active'>																			";
debtTable += "    <td style='background-color:#ffa31c;color:#fff;'>유동부채</td>                           ";
debtTable += "    <td style='background-color:#ffa31c;color:#fff;'>"+FIN02003M00.getBsTotal('FAS030103')+"</td>     ";
debtTable += "</tr>                                                                                       ";

console.log("FAS03010301s >>>", FAS03010301s);

for (var i = 0; i < FAS03010301s.length; i++) {
debtTable += "  <tr>															                                                ";
debtTable += "      <td>"+FAS03010301s[i].finSmdcdNm+"</td>                                                                   ";
debtTable += "      <td>"+FIN02003M00.onNumberWithCommas(FAS03010301s[i].finAmt)+"</td>                                       ";
debtTable += "  </tr>                                                                                                         ";    
}
debtTable += "<tr class='active'>                                                                         ";
debtTable += "    <td style='background-color:#00bcd4;color:#fff;'>비유동부채</td>                         ";
debtTable += "    <td style='background-color:#00bcd4;color:#fff;'>"+FIN02003M00.getBsTotal('FAS030104')+"</td>      ";
debtTable += "</tr>                                                                                       ";
for (var i = 0; i < FAS03010401s.length; i++) {
debtTable += "  <tr>															                                                ";
debtTable += "      <td>"+FAS03010401s[i].finSmdcdNm+"</td>                                                                   ";
debtTable += "      <td>"+FIN02003M00.onNumberWithCommas(FAS03010401s[i].finAmt)+"</td>                                       ";
debtTable += "  </tr>                                                                                                         ";    
}
debtTable += "<tr class='active'>                                                                         ";
debtTable += "    <td style='background-color:#a6c600;color:#fff;'>자본</td>                               ";
debtTable += "    <td style='background-color:#a6c600;color:#fff;'>"+FIN02003M00.getBsTotal('FAS030105')+"</td>     ";
debtTable += "</tr>                                                                                       ";
for (var i = 0; i < FAS03010501s.length; i++) {
debtTable += "  <tr>															                                                ";
debtTable += "      <td>"+FAS03010501s[i].finSmdcdNm+"</td>                                                                   ";
debtTable += "      <td>"+FIN02003M00.onNumberWithCommas(FAS03010501s[i].finAmt)+"</td>                                       ";
debtTable += "  </tr>                                                                                                         ";    
}
debtTable += "<tr class='active'>                                                                         ";
debtTable += "    <td>부채 및 자본 합계</td>                                                                ";
debtTable += "    <td>"+FIN02003M00.getBsTotal('FAS030103T')+"</td>                                                 ";
debtTable += "</tr>                                                                                       ";


    $('#debtTable > tbody').html('');
    $('#debtTable > tbody:last').append(debtTable);

};


FIN02003M00Component.prototype.onIncomeTableView = function() {

var incomeTable = "";

incomeTable += " <tr class='active'>									;"
incomeTable += "     <td>매출액</td>                                    ";
incomeTable += "     <td>"+FIN02003M00.getIncomeTotal('FAS0302010101')+"</td>      ";
incomeTable += " </tr>                                                 ";
incomeTable += " <tr class='active'>                                   ";
incomeTable += "     <td>매출원가</td>                                  ";
incomeTable += "     <td>"+FIN02003M00.getIncomeTotal('FAS0302010102')+"</td>      ";
incomeTable += " </tr>                                                 ";
incomeTable += " <tr class='active'>                                   ";
incomeTable += "     <td>매출총손익</td>                                ";
incomeTable += "     <td>"+FIN02003M00.getIncomeTotal('amslTtalPlAmt')+"</td>      ";
incomeTable += " </tr>                                                 ";
incomeTable += " <tr class='active'>                                   ";
incomeTable += "     <td>판매비와관리비</td>                             ";
incomeTable += "     <td>"+FIN02003M00.getIncomeTotal('FAS03020201')+"</td>      ";
incomeTable += " </tr>                                                 ";

for (var i = 0; i < FAS03020201s.length; i++) {
incomeTable += "  <tr>															                                                ";
incomeTable += "      <td>"+FAS03020201s[i].finSmdcdNm+"</td>                                                                   ";
incomeTable += "      <td>"+FIN02003M00.onNumberWithCommas(FAS03020201s[i].finAmt)+"</td>                                       ";
incomeTable += "  </tr>                                                                                                         ";    
}

incomeTable += " <tr class='active'>                                   ";
incomeTable += "     <td>영업손익</td>                                  ";
incomeTable += "     <td>"+FIN02003M00.getIncomeTotal('bsopPlAmt')+"</td>      ";
incomeTable += " </tr>                                                 ";
incomeTable += "                                                       ";
incomeTable += " <tr class='active'>                                   ";
incomeTable += "     <td>영업외수익</td>                                ";
incomeTable += "     <td>"+FIN02003M00.getIncomeTotal('FAS03020301')+"</td>      ";
incomeTable += " </tr>                                                 ";

for (var i = 0; i < FAS03020301s.length; i++) {
incomeTable += "  <tr>															                                                ";
incomeTable += "      <td>"+FAS03020301s[i].finSmdcdNm+"</td>                                                                   ";
incomeTable += "      <td>"+FIN02003M00.onNumberWithCommas(FAS03020301s[i].finAmt)+"</td>                                       ";
incomeTable += "  </tr>                                                                                                         ";    
}

incomeTable += " <tr class='active'>                                   ";
incomeTable += "     <td>영업외비용</td>                                ";
incomeTable += "     <td>"+FIN02003M00.getIncomeTotal('FAS03020401')+"</td>      ";
incomeTable += " </tr>                                                 ";

for (var i = 0; i < FAS03020401s.length; i++) {
incomeTable += "  <tr>															                                                ";
incomeTable += "      <td>"+FAS03020401s[i].finSmdcdNm+"</td>                                                                   ";
incomeTable += "      <td>"+FIN02003M00.onNumberWithCommas(FAS03020401s[i].finAmt)+"</td>                                       ";
incomeTable += "  </tr>                                                                                                         ";    
}

incomeTable += " <tr class='active'>                                   ";
incomeTable += "     <td>법인세차감전순손익</td>                          ";
incomeTable += "     <td>"+FIN02003M00.getIncomeTotal('crtxSbbfNtprAmt')+"</td>      ";
incomeTable += " </tr>                                                 ";
incomeTable += " <tr class='active'>                                   ";
incomeTable += "     <td>법인세비용</td>                                ";
incomeTable += "     <td>"+FIN02003M00.getIncomeTotal('FAS03020501')+"</td>      ";
incomeTable += " </tr>                                                 ";
incomeTable += " <tr class='active'>                                   ";
incomeTable += "     <td>당기순손익</td>                                ";
incomeTable += "     <td>"+FIN02003M00.getIncomeTotal('crtrNtPlAmt')+"</td>      ";
incomeTable += " </tr>                                                 ";

    $('#incomeTable > tbody').html('');
    $('#incomeTable > tbody:last').append(incomeTable);

};

FIN02003M00Component.prototype.onCostTableView = function() {

var costTable = "";

costTable += "<tr class='active'>										";		
costTable += "    <td>당기총제조비용</td>                                 ";
costTable += "    <td>"+FIN02003M00.getCostTotal('FAS03030101')+"</td>            ";
costTable += "</tr>                                                     ";

for (var i = 0; i < FAS03030101s.length; i++) {
costTable += "  <tr>															                                                ";
costTable += "      <td>"+FAS03030101s[i].finSmdcdNm+"</td>                                                                   ";
costTable += "      <td>"+FIN02003M00.onNumberWithCommas(FAS03030101s[i].finAmt)+"</td>                                       ";
costTable += "  </tr>                                                                                                         ";    
}

costTable += "<tr class='active'>                                       ";
costTable += "    <td>경비</td>                                          ";
costTable += "    <td>"+FIN02003M00.getCostTotal('FAS03030201')+"</td>            ";
costTable += "</tr>                                                     ";

for (var i = 0; i < FAS03030201s.length; i++) {
costTable += "  <tr>															                                                ";
costTable += "      <td>"+FAS03030201s[i].finSmdcdNm+"</td>                                                                   ";
costTable += "      <td>"+FIN02003M00.onNumberWithCommas(FAS03030201s[i].finAmt)+"</td>                                       ";
costTable += "  </tr>                                                                                                         ";    
}

for (var i = 0; i < FAS03030301s.length; i++) {
costTable += "  <tr>															                                                ";
costTable += "      <td>"+FAS03030301s[i].finSmdcdNm+"</td>                                                                   ";
costTable += "      <td>"+FIN02003M00.onNumberWithCommas(FAS03030301s[i].finAmt)+"</td>                                       ";
costTable += "  </tr>                                                                                                         ";    
}

costTable += "<tr class='active'>                                       ";
costTable += "    <td>당기제품제조원가</td>                               ";
costTable += "    <td>"+FIN02003M00.getCostTotal('FAS0303030104')+"</td>            ";
costTable += "</tr>														";

    $('#costTable > tbody').html('');
    $('#costTable > tbody:last').append(costTable);

};

FIN02003M00Component.prototype.onAddValueTableView = function() {

var addValueTable = "";
addValueTable += "<tr class='active'>                                   ";
addValueTable += "    <td>법인세차감전 순이익</td>                         ";
addValueTable += "    <td>"+FIN02003M00.getAddValueTotal('FAS030401')+"</td>      ";
addValueTable += "</tr>                                                 ";
addValueTable += "<tr class='active'>                                   ";
addValueTable += "    <td>인건비</td>                                    ";
addValueTable += "    <td>"+FIN02003M00.getAddValueTotal('FAS030402')+"</td>      ";
addValueTable += "</tr>                                                 ";

for (var i = 0; i < FAS03040201s.length; i++) {
addValueTable += "  <tr>															                                                ";
addValueTable += "      <td>"+FAS03040201s[i].finSmdcdNm+"</td>                                                                   ";
addValueTable += "      <td>"+FIN02003M00.onNumberWithCommas(FAS03040201s[i].finAmt)+"</td>                                       ";
addValueTable += "  </tr>                                                                                                         ";    
}

addValueTable += "<tr class='active'>                                   ";
addValueTable += "    <td>금융비용</td>                                  ";
addValueTable += "    <td>"+FIN02003M00.getAddValueTotal('FAS030403')+"</td>      ";
addValueTable += "</tr>                                                 ";

for (var i = 0; i < FAS03040301s.length; i++) {
addValueTable += "  <tr>															                                                ";
addValueTable += "      <td>"+FAS03040301s[i].finSmdcdNm+"</td>                                                                   ";
addValueTable += "      <td>"+FIN02003M00.onNumberWithCommas(FAS03040301s[i].finAmt)+"</td>                                       ";
addValueTable += "  </tr>                                                                                                         ";    
}

addValueTable += "<tr class='active'>                                   ";
addValueTable += "    <td>임차료</td>                                    ";
addValueTable += "    <td>"+FIN02003M00.getAddValueTotal('FAS030404')+"</td>      ";
addValueTable += "</tr>                                                 ";

for (var i = 0; i < FAS03040401s.length; i++) {
addValueTable += "  <tr>															                                                ";
addValueTable += "      <td>"+FAS03040401s[i].finSmdcdNm+"</td>                                                                   ";
addValueTable += "      <td>"+FIN02003M00.onNumberWithCommas(FAS03040401s[i].finAmt)+"</td>                                       ";
addValueTable += "  </tr>                                                                                                         ";    
}

addValueTable += "<tr class='active'>                                   ";
addValueTable += "    <td>조세공과(법인세 제외)</td>                       ";
addValueTable += "    <td>"+FIN02003M00.getAddValueTotal('FAS030405')+"</td>      ";
addValueTable += "</tr>                                                 ";

for (var i = 0; i < FAS03040501s.length; i++) {
addValueTable += "  <tr>															                                                ";
addValueTable += "      <td>"+FAS03040501s[i].finSmdcdNm+"</td>                                                                   ";
addValueTable += "      <td>"+FIN02003M00.onNumberWithCommas(FAS03040501s[i].finAmt)+"</td>                                       ";
addValueTable += "  </tr>                                                                                                         ";    
}

addValueTable += "<tr class='active'>                                   ";
addValueTable += "    <td>감가상각비</td>                                ";
addValueTable += "    <td>"+FIN02003M00.getAddValueTotal('FAS030406')+"</td>      ";
addValueTable += "</tr>                                                 ";

for (var i = 0; i < FAS03040601s.length; i++) {
addValueTable += "  <tr>															                                                ";
addValueTable += "      <td>"+FAS03040601s[i].finSmdcdNm+"</td>                                                                   ";
addValueTable += "      <td>"+FIN02003M00.onNumberWithCommas(FAS03040601s[i].finAmt)+"</td>                                       ";
addValueTable += "  </tr>                                                                                                         ";    
}

addValueTable += "<tr class='active'>                                   ";
addValueTable += "    <td>부가가치 합계</td>                              ";
addValueTable += "    <td>"+FIN02003M00.getAddValueTotal('FAS0304')+"</td>      ";
addValueTable += "</tr>													";

    $('#addValueTable > tbody').html('');
    $('#addValueTable > tbody:last').append(addValueTable);

};

FIN02003M00Component.prototype.onFinRatioTableView = function() {

var finRatioTable = "";
finRatioTable += "<tr class='active text-lg text-center'>                                   ";
finRatioTable += "    <td colspan='2'>*성장성</td>                                           ";
finRatioTable += "</tr>                                                                     ";

for (var i = 0; i < growthArray.length; i++) {
finRatioTable += "  <tr>															                                                ";
finRatioTable += "      <td>"+growthArray[i].itemNm+"</td>                                                                   ";
finRatioTable += "      <td align='right'>"+growthArray[i].finRatio+" %</td>                                       ";
finRatioTable += "  </tr>                                                                                                         ";    
}

finRatioTable += "<tr class='active text-lg text-center'>                                   ";
finRatioTable += "    <td colspan='2'>*안전성</td>                                           ";
finRatioTable += "</tr>                                                                     ";

for (var i = 0; i < safeArray.length; i++) {
finRatioTable += "  <tr>															                                                ";
finRatioTable += "      <td>"+safeArray[i].itemNm+"</td>                                                                   ";
finRatioTable += "      <td align='right'>"+safeArray[i].finRatio+" %</td>                                       ";
finRatioTable += "  </tr>                                                                                                         ";    
}

finRatioTable += "<tr class='active text-lg text-center'>                                   ";
finRatioTable += "    <td colspan='2'>*수익성</td>                                           ";
finRatioTable += "</tr>                                                                     ";

for (var i = 0; i < profitArray.length; i++) {
finRatioTable += "  <tr>															                                                ";
finRatioTable += "      <td>"+profitArray[i].itemNm+"</td>                                                                   ";
finRatioTable += "      <td align='right'>"+profitArray[i].finRatio+" %</td>                                       ";
finRatioTable += "  </tr>                                                                                                         ";    
}

finRatioTable += "<tr class='active text-lg text-center'>                                   ";
finRatioTable += "    <td colspan='2'>*생산성</td>                                           ";
finRatioTable += "</tr>                                                                     ";

for (var i = 0; i < productArray.length; i++) {
finRatioTable += "  <tr>															                                                ";
finRatioTable += "      <td>"+productArray[i].itemNm+"</td>                                                                   ";
finRatioTable += "      <td align='right'>"+productArray[i].finRatio+" %</td>                                       ";
finRatioTable += "  </tr>                                                                                                         ";    
}

finRatioTable += "<tr class='active text-lg text-center'>                                   ";
finRatioTable += "    <td colspan='2'>*활동성</td>                                           ";
finRatioTable += "</tr>                                                                     ";

for (var i = 0; i < activeArray.length; i++) {
finRatioTable += "  <tr>															                                                ";
finRatioTable += "      <td>"+activeArray[i].itemNm+"</td>                                                                   ";
finRatioTable += "      <td align='right'>"+activeArray[i].finRatio+" 회</td>                                       ";
finRatioTable += "  </tr>                                                                                                         ";    
}

for (var i = 0; i < addValueArray.length; i++) {
finRatioTable += "  <tr class='active'>															                                                ";
finRatioTable += "      <td>"+addValueArray[i].itemNm+" (단위:"+amtUnitNm+")</td>                                                                   ";
finRatioTable += "      <td align='right'>"+addValueArray[i].finRatio+"</td>                                       ";
finRatioTable += "  </tr>                                                                                                         ";    
}

for (var i = 0; i < roaArray.length; i++) {
finRatioTable += "  <tr class='active'>															                                                ";
finRatioTable += "      <td>"+roaArray[i].itemNm+"</td>                                                                   ";
finRatioTable += "      <td align='right'>"+roaArray[i].finRatio+" %</td>                                       ";
finRatioTable += "  </tr>                                                                                                         ";    
}

    $('#finRatioTable > tbody').html('');
    $('#finRatioTable > tbody:last').append(finRatioTable);


var bokRatioTable01 = "";
bokRatioTable01 += "<tr class='active text-lg text-center'>                                   ";
bokRatioTable01 += "    <td colspan='2'>*성장성</td>                                           ";
bokRatioTable01 += "</tr>                                                                     ";

for (var i = 0; i < growthArray.length; i++) {
bokRatioTable01 += "  <tr>															                                                ";
bokRatioTable01 += "      <td>"+growthArray[i].itemNm+"</td>                                                                   ";
bokRatioTable01 += "      <td align='right'>"+growthArray[i].bokRatio+" %</td>                                       ";
bokRatioTable01 += "  </tr>                                                                                                         ";    
}

bokRatioTable01 += "<tr class='active text-lg text-center'>                                   ";
bokRatioTable01 += "    <td colspan='2'>*안전성</td>                                           ";
bokRatioTable01 += "</tr>                                                                     ";

for (var i = 0; i < safeArray.length; i++) {
bokRatioTable01 += "  <tr>															                                                ";
bokRatioTable01 += "      <td>"+safeArray[i].itemNm+"</td>                                                                   ";
bokRatioTable01 += "      <td align='right'>"+safeArray[i].bokRatio+" %</td>                                       ";
bokRatioTable01 += "  </tr>                                                                                                         ";    
}

bokRatioTable01 += "<tr class='active text-lg text-center'>                                   ";
bokRatioTable01 += "    <td colspan='2'>*수익성</td>                                           ";
bokRatioTable01 += "</tr>                                                                     ";

for (var i = 0; i < profitArray.length; i++) {
bokRatioTable01 += "  <tr>															                                                ";
bokRatioTable01 += "      <td>"+profitArray[i].itemNm+"</td>                                                                   ";
bokRatioTable01 += "      <td align='right'>"+profitArray[i].bokRatio+" %</td>                                       ";
bokRatioTable01 += "  </tr>                                                                                                         ";    
}

bokRatioTable01 += "<tr class='active text-lg text-center'>                                   ";
bokRatioTable01 += "    <td colspan='2'>*생산성</td>                                           ";
bokRatioTable01 += "</tr>                                                                     ";

for (var i = 0; i < productArray.length; i++) {
bokRatioTable01 += "  <tr>															                                                ";
bokRatioTable01 += "      <td>"+productArray[i].itemNm+"</td>                                                                   ";
bokRatioTable01 += "      <td align='right'>"+productArray[i].bokRatio+" %</td>                                       ";
bokRatioTable01 += "  </tr>                                                                                                         ";    
}

bokRatioTable01 += "<tr class='active text-lg text-center'>                                   ";
bokRatioTable01 += "    <td colspan='2'>*활동성</td>                                           ";
bokRatioTable01 += "</tr>                                                                     ";

for (var i = 0; i < activeArray.length; i++) {
bokRatioTable01 += "  <tr>															                                                ";
bokRatioTable01 += "      <td>"+activeArray[i].itemNm+"</td>                                                                   ";
bokRatioTable01 += "      <td align='right'>"+activeArray[i].bokRatio+" 회</td>                                       ";
bokRatioTable01 += "  </tr>                                                                                                         ";    
}

bokRatioTable01 += " <tr class='active'>";
bokRatioTable01 += " <td>&nbsp;</td>";
bokRatioTable01 += " <td>&nbsp;</td>";
bokRatioTable01 += " </tr>";

bokRatioTable01 += " <tr class='active'>";
bokRatioTable01 += " <td>&nbsp;</td>";
bokRatioTable01 += " <td>&nbsp;</td>";
bokRatioTable01 += " </tr>";

    $('#finRatioTable01 > tbody').html('');
    $('#finRatioTable01 > tbody:last').append(bokRatioTable01);


var bokAllRatioTable02 = "";
bokAllRatioTable02 += "<tr class='active text-lg text-center'>                                   ";
bokAllRatioTable02 += "    <td colspan='2'>*성장성</td>                                           ";
bokAllRatioTable02 += "</tr>                                                                     ";

for (var i = 0; i < growthArray.length; i++) {
bokAllRatioTable02 += "  <tr>															                                                ";
bokAllRatioTable02 += "      <td>"+growthArray[i].itemNm+"</td>                                                                   ";
bokAllRatioTable02 += "      <td align='right'>"+growthArray[i].bokAllRatio+" %</td>                                       ";
bokAllRatioTable02 += "  </tr>                                                                                                         ";    
}

bokAllRatioTable02 += "<tr class='active text-lg text-center'>                                   ";
bokAllRatioTable02 += "    <td colspan='2'>*안전성</td>                                           ";
bokAllRatioTable02 += "</tr>                                                                     ";

for (var i = 0; i < safeArray.length; i++) {
bokAllRatioTable02 += "  <tr>															                                                ";
bokAllRatioTable02 += "      <td>"+safeArray[i].itemNm+"</td>                                                                   ";
bokAllRatioTable02 += "      <td align='right'>"+safeArray[i].bokAllRatio+" %</td>                                       ";
bokAllRatioTable02 += "  </tr>                                                                                                         ";    
}

bokAllRatioTable02 += "<tr class='active text-lg text-center'>                                   ";
bokAllRatioTable02 += "    <td colspan='2'>*수익성</td>                                           ";
bokAllRatioTable02 += "</tr>                                                                     ";

for (var i = 0; i < profitArray.length; i++) {
bokAllRatioTable02 += "  <tr>															                                                ";
bokAllRatioTable02 += "      <td>"+profitArray[i].itemNm+"</td>                                                                   ";
bokAllRatioTable02 += "      <td align='right'>"+profitArray[i].bokAllRatio+" %</td>                                       ";
bokAllRatioTable02 += "  </tr>                                                                                                         ";    
}

bokAllRatioTable02 += "<tr class='active text-lg text-center'>                                   ";
bokAllRatioTable02 += "    <td colspan='2'>*생산성</td>                                           ";
bokAllRatioTable02 += "</tr>                                                                     ";

for (var i = 0; i < productArray.length; i++) {
bokAllRatioTable02 += "  <tr>															                                                ";
bokAllRatioTable02 += "      <td>"+productArray[i].itemNm+"</td>                                                                   ";
bokAllRatioTable02 += "      <td align='right'>"+productArray[i].bokAllRatio+" %</td>                                       ";
bokAllRatioTable02 += "  </tr>                                                                                                         ";    
}

bokAllRatioTable02 += "<tr class='active text-lg text-center'>                                   ";
bokAllRatioTable02 += "    <td colspan='2'>*활동성</td>                                           ";
bokAllRatioTable02 += "</tr>                                                                     ";

for (var i = 0; i < activeArray.length; i++) {
bokAllRatioTable02 += "  <tr>															                                                ";
bokAllRatioTable02 += "      <td>"+activeArray[i].itemNm+"</td>                                                                   ";
bokAllRatioTable02 += "      <td align='right'>"+activeArray[i].bokAllRatio+" 회</td>                                       ";
bokAllRatioTable02 += "  </tr>                                                                                                         ";    
}

bokAllRatioTable02 += " <tr class='active'>";
bokAllRatioTable02 += " <td>&nbsp;</td>";
bokAllRatioTable02 += " <td>&nbsp;</td>";
bokAllRatioTable02 += " </tr>";

bokAllRatioTable02 += " <tr class='active'>";
bokAllRatioTable02 += " <td>&nbsp;</td>";
bokAllRatioTable02 += " <td>&nbsp;</td>";
bokAllRatioTable02 += " </tr>";


    $('#finRatioTable02 > tbody:last').html('');
    $('#finRatioTable02 > tbody:last').append(bokAllRatioTable02);

};

FIN02003M00Component.prototype.wallTranTableView = function() {

var wallTrantTable = "";
wallTrantTable += " <tr class='active text-lg'>                                                                         ";
wallTrantTable += "     <td></td>                                                                                       ";
wallTrantTable += "     <td>WALL</td>                                                                                   ";
wallTrantTable += "     <td>TRANT</td>                                                                                  ";
wallTrantTable += " </tr>                                                                                               ";

for (var i = 0; i < wallTrantArray.length; i++) {
wallTrantTable += "  <tr>															                                                ";
wallTrantTable += "      <td>"+wallTrantArray[i].itemNm+"</td>                                                                   ";
wallTrantTable += "      <td align='right'>"+wallTrantArray[i].wallRatio+"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>                                       ";
wallTrantTable += "      <td align='right'>"+wallTrantArray[i].trantRatio+"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>                                       ";
wallTrantTable += "  </tr>                                                                                                         ";    
}

wallTrantTable += " <tr class='active'>                                                                                 ";
wallTrantTable += "     <td>판정</td>                                                                                    ";
wallTrantTable += "     <td>"+wallDecision+"</td>                                               ";
wallTrantTable += "     <td>"+trantDecision+"</td>                                              ";
wallTrantTable += " </tr>  																								";

    $('#wallTrantTable > tbody:last').html('');
    $('#wallTrantTable > tbody:last').append(wallTrantTable);

};

FIN02003M00Component.prototype.decisionRatioTable = function() {

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

FIN02003M00Component.prototype.setBalanceBaseDataSet = function() {

        var totalData = [];

        console.log("alyDataSet >>> ", alyDataSet)

        alyDataSet.forEach(function(selectedRaw, index) {

            var totalAmt = 0;

            var totalAmt01 = 0;

            var totalAmt02 = 0;

            var totalAmt03 = 0;

            var totalAmt04 = 0;

            var finLrdvcdNm = "";

            console.log("selectedRaw >>> ", selectedRaw)

            //Balance Sheet
            //1) 당좌자산
            var arr = itemSplit(selectedRaw, 'FAS03010101');
            console.log("arr >>> " , arr);
            finLrdvcdNm = "당좌자산";
            for (var i = 0; i < arr.length; i++) {
                totalAmt01 += arr[i].finAmt;
            }

            arr = [];
            arr.push({
                    finAmt: totalAmt01,
                    finSmdcdNm: finLrdvcdNm
                }
            );

            //2) 재고자산
            var arr1 = itemSplit(selectedRaw, 'FAS03010102');

            totalAmt01 = 0;
            finLrdvcdNm = "재고자산";
            for (var i = 0; i < arr1.length; i++) {
                totalAmt01 += arr1[i].finAmt;
            }

            arr1 = [];
            arr1.push({
                    finAmt: totalAmt01,
                    finSmdcdNm: finLrdvcdNm
                }
            ); 
            
            console.log("arr1 >>> " , arr1);

            //3) 투자자산
            var arr2 = itemSplit(selectedRaw, 'FAS03010201');
            finLrdvcdNm = "투자자산";
            totalAmt01 = 0;

            for (var i = 0; i < arr2.length; i++) {
                totalAmt01 += arr2[i].finAmt;
            }

            arr2 = [];
            arr2.push({
                    finAmt: totalAmt01,
                    finSmdcdNm: finLrdvcdNm
                }
            );         
            console.log("arr2 >>> " , arr2);

            //4) 유형자산
            var arr3 = itemSplit(selectedRaw, 'FAS03010202');
            finLrdvcdNm = "유형자산";
            totalAmt01 = 0;

            for (var i = 0; i < arr3.length; i++) {
                totalAmt01 += arr3[i].finAmt;
            }

            arr3 = [];
            arr3.push({
                    finAmt: totalAmt01,
                    finSmdcdNm: finLrdvcdNm
                }
            );        

            console.log("arr3 >>> " , arr3);

            //5) 무형자산
            var arr4 = itemSplit(selectedRaw, 'FAS03010203');
            finLrdvcdNm = "무형자산";
            totalAmt01 = 0;

            for (var i = 0; i < arr4.length; i++) {
                totalAmt01 += arr4[i].finAmt;
            }

            arr4 = [];
            arr4.push({
                    finAmt: totalAmt01,
                    finSmdcdNm: finLrdvcdNm
                }
            );        

            console.log("arr4 >>> " , arr4);

            for (var i = 0; i < arr.length; i++) {
                totalAmt += arr[i].finAmt;
            }

            for (var i = 0; i < arr1.length; i++) {
                totalAmt += arr1[i].finAmt;
            }

            for (var i = 0; i < arr2.length; i++) {
                totalAmt += arr2[i].finAmt;
            }

            for (var i = 0; i < arr3.length; i++) {
                totalAmt += arr3[i].finAmt;
            }

            for (var i = 0; i < arr4.length; i++) {
                totalAmt += arr4[i].finAmt;
            }         

            console.log("totalAmt >?>>> " , totalAmt);   

            totalData.push({
                    stacYy:selectedRaw.stacYy,
                    arr:arr,
                    arr1:arr1,
                    arr2:arr2,
                    arr3:arr3,
                    arr4:arr4,
                    totalAmt:totalAmt
                }
            );

        });

        var arr = []; 
        var arr1 = [];
        var arr2 = [];
        var arr3 = [];
        var arr4 = [];

        var end = totalData.length - 1;

        for (var i = end; i >= 0; i--) {

            arr.push({
                stacYy:totalData[i].stacYy,
                finData:totalData[i].arr,
                totalAmt:totalData[i].totalAmt
            });

            arr1.push({
                stacYy:totalData[i].stacYy,
                finData:totalData[i].arr1,
                totalAmt:totalData[i].totalAmt
            });

            arr2.push({
                stacYy:totalData[i].stacYy,
                finData:totalData[i].arr2,
                totalAmt:totalData[i].totalAmt
            });

            arr3.push({
                stacYy:totalData[i].stacYy,
                finData:totalData[i].arr3,
                totalAmt:totalData[i].totalAmt
            });

            arr4.push({
                stacYy:totalData[i].stacYy,
                finData:totalData[i].arr4,
                totalAmt:totalData[i].totalAmt
            });

        }

        console.log("totalData >?>>> " , totalData);

        console.log("arr >?>>> " , arr);

        console.log("arr1 >?>>> " , arr1);

        console.log("arr2 >?>>> " , arr2);

        console.log("arr3 >?>>> " , arr3);

        console.log("arr4 >?>>> " , arr4);

        var dataSet = [];

        console.log("arr[0].length >>>> ", arr[0].finData.length);

        dataSet = FIN02003M00.setDataSet(arr, dataSet);
        dataSet = FIN02003M00.setDataSet(arr1, dataSet);
        dataSet = FIN02003M00.setDataSet(arr2, dataSet);
        dataSet = FIN02003M00.setDataSet(arr3, dataSet);
        dataSet = FIN02003M00.setDataSet(arr4, dataSet);


        return dataSet;
};

FIN02003M00Component.prototype.setBalanceDataSet = function() {

        var totalData = [];

        alyDataSet.forEach(function(selectedRaw, index) {

            var totalAmt = 0;

            //Balance Sheet
            //1) 당좌자산
            var arr = itemSplit(selectedRaw, 'FAS03010101');
            console.log("arr >>> " , arr);

            //2) 재고자산
            var arr1 = itemSplit(selectedRaw, 'FAS03010102');

            console.log("arr1 >>> " , arr1);

            //3) 투자자산
            var arr2 = itemSplit(selectedRaw, 'FAS03010201');

            console.log("arr2 >>> " , arr2);

            //4) 유형자산
            var arr3 = itemSplit(selectedRaw, 'FAS03010202');

            console.log("arr3 >>> " , arr3);

            //5) 무형자산
            var arr4 = itemSplit(selectedRaw, 'FAS03010203');

            console.log("arr4 >>> " , arr4);

            for (var i = 0; i < arr.length; i++) {
                totalAmt += arr[i].finAmt;
            }

            for (var i = 0; i < arr1.length; i++) {
                totalAmt += arr1[i].finAmt;
            }

            for (var i = 0; i < arr2.length; i++) {
                totalAmt += arr2[i].finAmt;
            }

            for (var i = 0; i < arr3.length; i++) {
                totalAmt += arr3[i].finAmt;
            }

            for (var i = 0; i < arr4.length; i++) {
                totalAmt += arr4[i].finAmt;
            }         

            console.log("totalAmt >?>>> " , totalAmt);   

            totalData.push({
                    stacYy:selectedRaw.stacYy,
                    arr:arr,
                    arr1:arr1,
                    arr2:arr2,
                    arr3:arr3,
                    arr4:arr4,
                    totalAmt:totalAmt
                }
            );

        });

        var arr = []; 
        var arr1 = [];
        var arr2 = [];
        var arr3 = [];
        var arr4 = [];

        var end = totalData.length - 1;

        for (var i = end; i >= 0; i--) {

            arr.push({
                stacYy:totalData[i].stacYy,
                finData:totalData[i].arr,
                totalAmt:totalData[i].totalAmt
            });

            arr1.push({
                stacYy:totalData[i].stacYy,
                finData:totalData[i].arr1,
                totalAmt:totalData[i].totalAmt
            });

            arr2.push({
                stacYy:totalData[i].stacYy,
                finData:totalData[i].arr2,
                totalAmt:totalData[i].totalAmt
            });

            arr3.push({
                stacYy:totalData[i].stacYy,
                finData:totalData[i].arr3,
                totalAmt:totalData[i].totalAmt
            });

            arr4.push({
                stacYy:totalData[i].stacYy,
                finData:totalData[i].arr4,
                totalAmt:totalData[i].totalAmt
            });

        }

        console.log("totalData >?>>> " , totalData);

        console.log("arr >?>>> " , arr);

        console.log("arr1 >?>>> " , arr1);

        console.log("arr2 >?>>> " , arr2);

        console.log("arr3 >?>>> " , arr3);

        console.log("arr4 >?>>> " , arr4);

        var dataSet = [];

        console.log("arr[0].length >>>> ", arr[0].finData.length);

        dataSet = FIN02003M00.setDataSet(arr, dataSet);
        dataSet = FIN02003M00.setDataSet(arr1, dataSet);
        dataSet = FIN02003M00.setDataSet(arr2, dataSet);
        dataSet = FIN02003M00.setDataSet(arr3, dataSet);
        dataSet = FIN02003M00.setDataSet(arr4, dataSet);


        return dataSet;

};

FIN02003M00Component.prototype.setBalanceBaseDataSet01 = function() { //부채 및 자본

        var totalData = [];

        alyDataSet.forEach(function(selectedRaw, index) {

            var totalAmt = 0;

            var totalAmt01 = 0;

            var totalAmt02 = 0;

            var totalAmt03 = 0;

            var totalAmt04 = 0;

            var finLrdvcdNm = "";

            //Balance Sheet
            //1) 유동부채
            var arr = itemSplit(selectedRaw, 'FAS03010301');
            console.log("arr >>> " , arr);
            finLrdvcdNm = "유동부채";
            for (var i = 0; i < arr.length; i++) {
                totalAmt01 += arr[i].finAmt;
            }

            arr = [];
            arr.push({
                    finAmt: totalAmt01,
                    finSmdcdNm: finLrdvcdNm
                }
            );

            //2) 비유동부채
            var arr1 = itemSplit(selectedRaw, 'FAS03010401');

            totalAmt01 = 0;
            finLrdvcdNm = "비유동부채";
            for (var i = 0; i < arr1.length; i++) {
                totalAmt01 += arr1[i].finAmt;
            }

            arr1 = [];
            arr1.push({
                    finAmt: totalAmt01,
                    finSmdcdNm: finLrdvcdNm
                }
            ); 
            
            console.log("arr1 >>> " , arr1);

            //3) 자본
            var arr2 = itemSplit(selectedRaw, 'FAS03010501');
            finLrdvcdNm = "자본";
            totalAmt01 = 0;

            for (var i = 0; i < arr2.length; i++) {
                totalAmt01 += arr2[i].finAmt;
            }

            arr2 = [];
            arr2.push({
                    finAmt: totalAmt01,
                    finSmdcdNm: finLrdvcdNm
                }
            );         
            console.log("arr2 >>> " , arr2);

            for (var i = 0; i < arr.length; i++) {
                totalAmt += arr[i].finAmt;
            }

            for (var i = 0; i < arr1.length; i++) {
                totalAmt += arr1[i].finAmt;
            }

            for (var i = 0; i < arr2.length; i++) {
                totalAmt += arr2[i].finAmt;
            }

            console.log("totalAmt >?>>> " , totalAmt);   

            totalData.push({
                    stacYy:selectedRaw.stacYy,
                    arr:arr,
                    arr1:arr1,
                    arr2:arr2,
                    totalAmt:totalAmt
                }
            );

        });

        var arr = []; 
        var arr1 = [];
        var arr2 = [];
        var arr3 = [];
        var arr4 = [];

        var end = totalData.length - 1;

        for (var i = end; i >= 0; i--) {

            arr.push({
                stacYy:totalData[i].stacYy,
                finData:totalData[i].arr,
                totalAmt:totalData[i].totalAmt
            });

            arr1.push({
                stacYy:totalData[i].stacYy,
                finData:totalData[i].arr1,
                totalAmt:totalData[i].totalAmt
            });

            arr2.push({
                stacYy:totalData[i].stacYy,
                finData:totalData[i].arr2,
                totalAmt:totalData[i].totalAmt
            });
        }

        var dataSet = [];

        console.log("arr[0].length >>>> ", arr[0].finData.length);

        dataSet = FIN02003M00.setDataSet(arr, dataSet);
        dataSet = FIN02003M00.setDataSet(arr1, dataSet);
        dataSet = FIN02003M00.setDataSet(arr2, dataSet);

        return dataSet;

};

FIN02003M00Component.prototype.setBalanceDataSet01 = function() {

        var totalData = [];

        alyDataSet.forEach(function(selectedRaw, index) {

            var totalAmt = 0;

            //Balance Sheet
            //1) 유동부채
            var arr = itemSplit(selectedRaw, 'FAS03010301');
            console.log("arr >>> " , arr);

            //2) 비유동부채
            var arr1 = itemSplit(selectedRaw, 'FAS03010401');

            console.log("arr1 >>> " , arr1);

            //3) 자본
            var arr2 = itemSplit(selectedRaw, 'FAS03010501');

            console.log("arr2 >>> " , arr2);


            for (var i = 0; i < arr.length; i++) {
                totalAmt += arr[i].finAmt;
            }

            for (var i = 0; i < arr1.length; i++) {
                totalAmt += arr1[i].finAmt;
            }

            for (var i = 0; i < arr2.length; i++) {
                totalAmt += arr2[i].finAmt;
            }

            console.log("totalAmt >?>>> " , totalAmt);   

            totalData.push({
                    stacYy:selectedRaw.stacYy,
                    arr:arr,
                    arr1:arr1,
                    arr2:arr2,
                    totalAmt:totalAmt
                }
            );

        });

        var arr = []; 
        var arr1 = [];
        var arr2 = [];
        var arr3 = [];
        var arr4 = [];

        var end = totalData.length - 1;

        for (var i = end; i >= 0; i--) {

            arr.push({
                stacYy:totalData[i].stacYy,
                finData:totalData[i].arr,
                totalAmt:totalData[i].totalAmt
            });

            arr1.push({
                stacYy:totalData[i].stacYy,
                finData:totalData[i].arr1,
                totalAmt:totalData[i].totalAmt
            });

            arr2.push({
                stacYy:totalData[i].stacYy,
                finData:totalData[i].arr2,
                totalAmt:totalData[i].totalAmt
            });

        }

        console.log("totalData >?>>> " , totalData);

        console.log("arr >?>>> " , arr);

        console.log("arr1 >?>>> " , arr1);

        console.log("arr2 >?>>> " , arr2);

        var dataSet = [];

        console.log("arr[0].length >>>> ", arr[0].finData.length);

        dataSet = FIN02003M00.setDataSet(arr, dataSet);
        dataSet = FIN02003M00.setDataSet(arr1, dataSet);
        dataSet = FIN02003M00.setDataSet(arr2, dataSet);


        return dataSet;

};
    
FIN02003M00Component.prototype.setIncomeBaseDataSet = function() {

        var totalData = [];

        console.log("setIncomeBaseDataSet length >>> " , alyDataSet.length);

        alyDataSet.forEach(function(selectedRaw, index) {

            var totalAmt = 0;

            var totalAmt01 = 0; //매출총손익

            var totalAmt02 = 0; //영업손익
    
            var totalAmt03 = 0; //당기순손익

            var finLrdvcdNm = "";

            //Balance Sheet
            //1) 매출총손익
            var arr = itemSplit(selectedRaw, 'FAS03020101');
            console.log("매출총손익 before arr >>> " , arr);
            finLrdvcdNm = "매출총손익";
            for (var i = 0; i < arr.length; i++) {
                if (arr[i].finSmdcd == "FAS0302010101") {
                    totalAmt01 += arr[i].finAmt;
                }
                if (arr[i].finSmdcd == "FAS0302010102") {
                    totalAmt01 -= arr[i].finAmt;
                }   
            }

            arr = [];
            arr.push({
                    finAmt: totalAmt01,
                    finSmdcdNm: finLrdvcdNm
                }
            );

            console.log("매출총손익 arr >>> " , arr);

            //2) 영업손익
            //판매비와 관리비
            var arr1 = itemSplit(selectedRaw, 'FAS03020201');
            
            totalAmt02 = 0;
            finLrdvcdNm = "영업손익";
            for (var i = 0; i < arr1.length; i++) {
                totalAmt02 += arr1[i].finAmt;
            }

            totalAmt02 = totalAmt01 - totalAmt02;

            arr1 = [];
            arr1.push({
                    finAmt: totalAmt02,
                    finSmdcdNm: finLrdvcdNm
                }
            ); 
            
            console.log("arr1 >>> " , arr1);

            //3) 당기순손익
            var arr2 = itemSplit(selectedRaw, 'FAS03020301');
            finLrdvcdNm = "당기순손익";
            totalAmt01 = 0;

            for (var i = 0; i < arr2.length; i++) {
                totalAmt03 += arr2[i].finAmt;
            }
            arr2 = [];
            arr2 = itemSplit(selectedRaw, 'FAS03020401');
            for (var i = 0; i < arr2.length; i++) {
                totalAmt03 -= arr2[i].finAmt;
            }
            totalAmt03 = totalAmt02 + totalAmt03;

            arr2 = [];
            arr2.push({
                    finAmt: totalAmt03,
                    finSmdcdNm: finLrdvcdNm
                }
            );         
            console.log("arr2 >>> " , arr2);

            for (var i = 0; i < arr.length; i++) {
                totalAmt += arr[i].finAmt;
            }

            for (var i = 0; i < arr1.length; i++) {
                totalAmt += arr1[i].finAmt;
            }

            for (var i = 0; i < arr2.length; i++) {
                totalAmt += arr2[i].finAmt;
            }

            console.log("totalAmt >?>>> " , totalAmt);   

            totalData.push({
                    stacYy:selectedRaw.stacYy,
                    arr:arr,
                    arr1:arr1,
                    arr2:arr2,
                    totalAmt:totalAmt
                }
            );

        });

        var arr = []; 
        var arr1 = [];
        var arr2 = [];

        var end = totalData.length - 1;

        for (var i = end; i >= 0; i--) {

            arr.push({
                stacYy:totalData[i].stacYy,
                finData:totalData[i].arr,
                totalAmt:totalData[i].totalAmt
            });

            arr1.push({
                stacYy:totalData[i].stacYy,
                finData:totalData[i].arr1,
                totalAmt:totalData[i].totalAmt
            });

            arr2.push({
                stacYy:totalData[i].stacYy,
                finData:totalData[i].arr2,
                totalAmt:totalData[i].totalAmt
            });

        }

        console.log("totalData >?>>> " , totalData);

        console.log("arr >?>>> " , arr);

        console.log("arr1 >?>>> " , arr1);

        console.log("arr2 >?>>> " , arr2);


        var dataSet = [];

        console.log("arr[0].length >>>> ", arr[0].finData.length);

        dataSet = FIN02003M00.setDataSet01(arr, dataSet);
        dataSet = FIN02003M00.setDataSet01(arr1, dataSet);
        dataSet = FIN02003M00.setDataSet01(arr2, dataSet);

        return dataSet;

};

FIN02003M00Component.prototype.setIncomeDataSet = function() {

        var totalData = [];

        alyDataSet.forEach(function(selectedRaw, index) {

            var totalAmt = 0;

            var totalAmt01 = 0; //매출총손익

            var totalAmt01_1 = 0; //매출액

            var totalAmt01_2 = 0; //매출원가

            var totalAmt02 = 0; //판매비와 관리비
    
            var totalAmt03 = 0; //영업 손익

            var totalAmt04 = 0; //영업외 수익

            var totalAmt05 = 0; //영업외 비용

            var totalAmt06 = 0; //법인세 차감전 순 손익

            var totalAmt07 = 0; //법인세비용

            var totalAmt08 = 0; //당기순 손익

            var finLrdvcdNm = "";

            //Income Sheet
            //1) 매출원가
            var arr = itemSplit(selectedRaw, 'FAS03020101');
            console.log("arr >>> " , arr);

            for (var i = 0; i < arr.length; i++) {

                if (arr[i].finSmdcd == "FAS0302010101") {
                    totalAmt01_1 += arr[i].finAmt;
                }
                if (arr[i].finSmdcd == "FAS0302010102") {
                    totalAmt01_2 += arr[i].finAmt;
                }   

            }

            totalAmt = totalAmt01_1;

            arr = [];

            arr.push({
                finSmdcdNm:'매출원가',
                finAmt:totalAmt01_2
            });

            totalAmt01 = totalAmt01_1 - totalAmt01_2;

            //2) 매출총손익
            var arr1 = [];
            arr1.push({
                finSmdcdNm:'매출총손익',
                finAmt:totalAmt01
            });

            console.log("arr1 >>> " , arr1);

            //3) 판매비와 관리비
            var arr2 = itemSplit(selectedRaw, 'FAS03020201');

            for (var i = 0; i < arr2.length; i++) {
                totalAmt02 += arr2[i].finAmt;
            }
            arr2 = [];

            arr2.push({
                finSmdcdNm:'판매비와관리비',
                finAmt:totalAmt02
            });

            console.log("arr2 >>> " , arr2);

            //4) 영업손익
            var arr3 = [];
            totalAmt03 = totalAmt01 - totalAmt02;

            arr3.push({
                finSmdcdNm:'영업손익',
                finAmt:totalAmt03
            });

            console.log("arr3 >>> " , arr3);

            //5) 영업외수익
            var arr4 = itemSplit(selectedRaw, 'FAS03020301');
            for (var i = 0; i < arr4.length; i++) {
                totalAmt04 += arr4[i].finAmt;
            }
            arr4 = [];
            arr4.push({
                finSmdcdNm:'영업외수익',
                finAmt:totalAmt04
            });

            console.log("arr4 >>> " , arr4);

            //6) 영업외비용
            var arr5 = itemSplit(selectedRaw, 'FAS03020401');
            for (var i = 0; i < arr5.length; i++) {
                totalAmt05 += arr5[i].finAmt;
            }
            arr5 = [];
            arr5.push({
                finSmdcdNm:'영업외비용',
                finAmt:totalAmt05
            });

            console.log("arr5 >>> " , arr5);
            
            //7) 법인세차감전순손익
            var arr6 = [];
            totalAmt06 = totalAmt03 + totalAmt04 - totalAmt05;
            arr6.push({
                finSmdcdNm:'법인세차감전순손익',
                finAmt:totalAmt06
            });

            console.log("arr6 >>> " , arr6);

            //8) 법인세비용
            var arr7 = itemSplit(selectedRaw, 'FAS03020501');
            for (var i = 0; i < arr7.length; i++) {
                totalAmt07 += arr7[i].finAmt;
            }
            arr7 = [];
            arr7.push({
                finSmdcdNm:'법인세비용',
                finAmt:totalAmt07
            });

            console.log("arr7 >>> " , arr7);                

            //9) 당기순손익
            var arr8 = [];
            totalAmt08 = totalAmt06 - totalAmt07;
            arr8.push({
                finSmdcdNm:'당기순손익',
                finAmt:totalAmt08
            });

            console.log("arr8 >>> " , arr8);                

            console.log("totalAmt >?>>> " , totalAmt);   

            totalData.push({
                    stacYy:selectedRaw.stacYy,
                    arr:arr,
                    arr1:arr1,
                    arr2:arr2,
                    arr3:arr3,
                    arr4:arr4,
                    arr5:arr5,
                    arr6:arr6,
                    arr7:arr7,
                    arr8:arr8,
                    totalAmt:totalAmt
                }
            );

        });

        var arr = []; 
        var arr1 = [];
        var arr2 = [];
        var arr3 = [];
        var arr4 = [];
        var arr5 = [];
        var arr6 = [];
        var arr7 = [];
        var arr8 = [];

        var end = totalData.length - 1;

        for (var i = end; i >= 0; i--) {

            arr.push({
                stacYy:totalData[i].stacYy,
                finData:totalData[i].arr,
                totalAmt:totalData[i].totalAmt
            });

            arr1.push({
                stacYy:totalData[i].stacYy,
                finData:totalData[i].arr1,
                totalAmt:totalData[i].totalAmt
            });

            arr2.push({
                stacYy:totalData[i].stacYy,
                finData:totalData[i].arr2,
                totalAmt:totalData[i].totalAmt
            });

            arr3.push({
                stacYy:totalData[i].stacYy,
                finData:totalData[i].arr3,
                totalAmt:totalData[i].totalAmt
            });

            arr4.push({
                stacYy:totalData[i].stacYy,
                finData:totalData[i].arr4,
                totalAmt:totalData[i].totalAmt
            });

            arr5.push({
                stacYy:totalData[i].stacYy,
                finData:totalData[i].arr5,
                totalAmt:totalData[i].totalAmt
            }); 

            arr6.push({
                stacYy:totalData[i].stacYy,
                finData:totalData[i].arr6,
                totalAmt:totalData[i].totalAmt
            }); 

            arr7.push({
                stacYy:totalData[i].stacYy,
                finData:totalData[i].arr7,
                totalAmt:totalData[i].totalAmt
            }); 

            arr8.push({
                stacYy:totalData[i].stacYy,
                finData:totalData[i].arr8,
                totalAmt:totalData[i].totalAmt
            });                                             

        }

        console.log("totalData 2222>?>>> " , totalData);

        console.log("arr 2222>?>>> " , arr);

        console.log("arr1 2222>?>>> " , arr1);

        console.log("arr2 2222>?>>> " , arr2);

        console.log("arr3 2222>?>>> " , arr3);

        console.log("arr4 2222>?>>> " , arr4);

        console.log("arr5 2222>?>>> " , arr5);

        console.log("arr6 2222>?>>> " , arr6);

        console.log("arr7 2222>?>>> " , arr7);

        console.log("arr8 2222>?>>> " , arr8);

        var dataSet = [];

        console.log("arr[0].length >>>> ", arr[0].finData.length);

        dataSet = FIN02003M00.setDataSet(arr, dataSet);
        dataSet = FIN02003M00.setDataSet(arr1, dataSet);
        dataSet = FIN02003M00.setDataSet(arr2, dataSet);
        dataSet = FIN02003M00.setDataSet(arr3, dataSet);
        dataSet = FIN02003M00.setDataSet(arr4, dataSet);
        dataSet = FIN02003M00.setDataSet(arr5, dataSet);
        dataSet = FIN02003M00.setDataSet(arr6, dataSet);
        dataSet = FIN02003M00.setDataSet(arr7, dataSet);
        dataSet = FIN02003M00.setDataSet(arr8, dataSet);

        return dataSet;

};  
    
FIN02003M00Component.prototype.setIncomeDataSet01 = function() {

        var totalData = [];

        alyDataSet.forEach(function(selectedRaw, index) {

            var totalAmt = 0;

            var totalAmt01 = 0; //매출총손익

            var totalAmt01_1 = 0; //매출액

            var totalAmt01_2 = 0; //매출원가

            var totalAmt02 = 0; //판매비와 관리비
    
            var totalAmt03 = 0; //영업 손익

            var totalAmt04 = 0; //영업외 수익

            var totalAmt05 = 0; //영업외 비용

            var totalAmt06 = 0; //법인세 차감전 순 손익

            var totalAmt07 = 0; //법인세비용

            var totalAmt08 = 0; //당기순 손익

            var finLrdvcdNm = "";

            //Income Sheet
            //1) 매출원가
            var arr = itemSplit(selectedRaw, 'FAS03020101');
            
            var arr_1 = [];

            for (var i = 0; i < arr.length; i++) {

                if (arr[i].finSmdcd == "FAS0302010101") {
                    totalAmt01 += arr[i].finAmt;
                }

                if (arr[i].finSmdcd == "FAS0302010102") {
                    arr_1.push(
                        arr[i]
                    );
                }   

            }
            arr = [];
            arr = arr_1;
            console.log("arr >>> " , arr);

            totalAmt = totalAmt01;

            //2) 판매비와 관리비
            var arr1 = itemSplit(selectedRaw, 'FAS03020201');
            console.log("arr1 >>> " , arr1);

            //2) 영업외수익
            var arr2 = itemSplit(selectedRaw, 'FAS03020301');
            console.log("arr2 >>> " , arr2);

            //3) 영업외비용
            var arr3 = itemSplit(selectedRaw, 'FAS03020401');
            console.log("arr3 >>> " , arr3);
            
            //5) 법인세비용
            var arr4 = itemSplit(selectedRaw, 'FAS03020501');
            console.log("arr4 >>> " , arr4);                

            console.log("totalAmt >?>>> " , totalAmt);   

            totalData.push({
                    stacYy:selectedRaw.stacYy,
                    arr:arr,
                    arr1:arr1,
                    arr2:arr2,
                    arr3:arr3,
                    arr4:arr4,
                    totalAmt:totalAmt
                }
            );

        });

        var arr = []; 
        var arr1 = [];
        var arr2 = [];
        var arr3 = [];
        var arr4 = [];

        var end = totalData.length - 1;

        for (var i = end; i >= 0; i--) {

            arr.push({
                stacYy:totalData[i].stacYy,
                finData:totalData[i].arr,
                totalAmt:totalData[i].totalAmt
            });

            arr1.push({
                stacYy:totalData[i].stacYy,
                finData:totalData[i].arr1,
                totalAmt:totalData[i].totalAmt
            });

            arr2.push({
                stacYy:totalData[i].stacYy,
                finData:totalData[i].arr2,
                totalAmt:totalData[i].totalAmt
            });

            arr3.push({
                stacYy:totalData[i].stacYy,
                finData:totalData[i].arr3,
                totalAmt:totalData[i].totalAmt
            });

            arr4.push({
                stacYy:totalData[i].stacYy,
                finData:totalData[i].arr4,
                totalAmt:totalData[i].totalAmt
            });

        }

        console.log("totalData 2222>?>>> " , totalData);

        console.log("arr 2222>?>>> " , arr);

        console.log("arr1 2222>?>>> " , arr1);

        console.log("arr2 2222>?>>> " , arr2);

        console.log("arr3 2222>?>>> " , arr3);

        console.log("arr4 2222>?>>> " , arr4);

        var dataSet = [];

        console.log("arr[0].length >>>> ", arr[0].finData.length);

        dataSet = FIN02003M00.setDataSet(arr, dataSet);
        dataSet = FIN02003M00.setDataSet(arr1, dataSet);
        dataSet = FIN02003M00.setDataSet(arr2, dataSet);
        dataSet = FIN02003M00.setDataSet(arr3, dataSet);
        dataSet = FIN02003M00.setDataSet(arr4, dataSet);
        return dataSet;

};

FIN02003M00Component.prototype.setCostBaseDataSet = function() {

        var totalData = [];

        console.log("setCostBaseDataSet length >>> " , alyDataSet.length);

        alyDataSet.forEach(function(selectedRaw, index) {

            var totalAmt = 0;

            var totalAmt01 = 0; //당기총제조비용

            var totalAmt02 = 0; //재료비
    
            var totalAmt03 = 0; //노무비

            var totalAmt04 = 0; //경비

            var totalAmt05 = 0; //당기제품원가

            var totalAmt05_1 = 0; //기초제공품원가

            var totalAmt05_2 = 0; //기말제공품원가        

            var totalAmt05_3 = 0; //유형자산대체        

            var finLrdvcdNm = "";

            //Cost Sheet
            //1) 당기총제조비용
            var arr = itemSplit(selectedRaw, 'FAS03030101');
            console.log("당기총제조비용 before arr >>> " , arr);
            finLrdvcdNm = "당기총제조비용";
            for (var i = 0; i < arr.length; i++) {
                totalAmt01 += arr[i].finAmt;

                if (arr[i].finSmdcd == "FAS0303010101") {
                    totalAmt02 = arr[i].finAmt;
                }
                if (arr[i].finSmdcd == "FAS0303010102") {
                    totalAmt03 = arr[i].finAmt;
                }   
            }

            arr = [];
            arr = itemSplit(selectedRaw, 'FAS03030201');
            for (var i = 0; i < arr.length; i++) {
                totalAmt04 += arr[i].finAmt;
            }
            totalAmt01 = totalAmt01 + totalAmt04;

            arr = [];
            arr.push({
                    finAmt: totalAmt01,
                    finSmdcdNm: finLrdvcdNm
                }
            );

            //2) 재료비
            var arr1 = [];
            finLrdvcdNm = "재료비";
            arr1.push({
                    finAmt: totalAmt02,
                    finSmdcdNm: finLrdvcdNm
                }
            );
            //3) 노무비
            var arr2 = [];
            finLrdvcdNm = "노무비";
            arr2.push({
                    finAmt: totalAmt03,
                    finSmdcdNm: finLrdvcdNm
                }
            );
            
            //4) 경비
            var arr3 = [];
            finLrdvcdNm = "경비";
            arr3.push({
                    finAmt: totalAmt04,
                    finSmdcdNm: finLrdvcdNm
                }
            );    

            //5) 당기제조품원가
            var arr4 = itemSplit(selectedRaw, 'FAS03030301');
            finLrdvcdNm = "당기제조품제조원가";

            for (var i =0; i < arr4.length; i++) {

                if (arr4[i].finSmdcd == "FAS0303030101") {
                    totalAmt05_1 = arr4[i].finAmt;//기초제공품원가
                }

                if (arr4[i].finSmdcd == "FAS0303030102") {
                    totalAmt05_2 = arr4[i].finAmt;//기말제공품원가
                }

                if (arr4[i].finSmdcd == "FAS0303030103") {
                    totalAmt05_3 = arr4[i].finAmt;//유형자산대체
                }            

            }
            
            totalAmt05 = totalAmt01 + totalAmt05_1 - totalAmt05_2 + totalAmt05_3;

            arr4 = [];
            arr4.push({
                    finAmt: totalAmt05,
                    finSmdcdNm: finLrdvcdNm
                }
            );

            console.log("totalAmt >?>>> " , totalAmt);   

            totalData.push({
                    stacYy:selectedRaw.stacYy,
                    arr:arr,
                    arr1:arr1,
                    arr2:arr2,
                    arr3:arr3,
                    arr4:arr4,                                
                    totalAmt:totalAmt
                }
            );

        });

        var arr = []; 
        var arr1 = [];
        var arr2 = [];
        var arr3 = [];        
        var arr4 = [];

        var end = totalData.length - 1;

        for (var i = end; i >= 0; i--) {

            arr.push({
                stacYy:totalData[i].stacYy,
                finData:totalData[i].arr,
                totalAmt:totalData[i].totalAmt
            });

            arr1.push({
                stacYy:totalData[i].stacYy,
                finData:totalData[i].arr1,
                totalAmt:totalData[i].totalAmt
            });

            arr2.push({
                stacYy:totalData[i].stacYy,
                finData:totalData[i].arr2,
                totalAmt:totalData[i].totalAmt
            });

            arr3.push({
                stacYy:totalData[i].stacYy,
                finData:totalData[i].arr3,
                totalAmt:totalData[i].totalAmt
            });            

            arr4.push({
                stacYy:totalData[i].stacYy,
                finData:totalData[i].arr4,
                totalAmt:totalData[i].totalAmt
            });            

        }

        console.log("totalData >?>>> " , totalData);



        var dataSet = [];

        console.log("arr[0].length >>>> ", arr[0].finData.length);

        dataSet = FIN02003M00.setDataSet01(arr, dataSet);
        dataSet = FIN02003M00.setDataSet01(arr1, dataSet);
        dataSet = FIN02003M00.setDataSet01(arr2, dataSet);
        dataSet = FIN02003M00.setDataSet01(arr3, dataSet);
        dataSet = FIN02003M00.setDataSet01(arr4, dataSet);                

        return dataSet;

    }   
FIN02003M00Component.prototype.setAddValueBaseDataSet = function() {

        var totalData = [];

        console.log("setAddValueBaseDataSet length >>> " , alyDataSet.length);

        alyDataSet.forEach(function(selectedRaw, index) {

            var totalAmt = 0;

            var totalAmt01 = 0; //인건비

            var totalAmt02 = 0; //금융비용
    
            var totalAmt03 = 0; //임차료

            var totalAmt04 = 0; //조세공과(법인세 제외)

            var totalAmt05 = 0; //감가상각비

            var finLrdvcdNm = "";

            //Cost Sheet
            //1) 인건비
            var arr = itemSplit(selectedRaw, 'FAS03040201');
            finLrdvcdNm = "인건비";
            for (var i = 0; i < arr.length; i++) {
                totalAmt01 += arr[i].finAmt;
            }

            arr = [];
            arr.push({
                    finAmt: totalAmt01,
                    finSmdcdNm: finLrdvcdNm
                }
            );
            
            //2) 금융비용
            var arr1 = itemSplit(selectedRaw, 'FAS03040301');
            finLrdvcdNm = "금융비용";
            for (var i = 0; i < arr1.length; i++) {
                if (arr1[i].finSmdcd == 'FAS0304030104') {
                        totalAmt02 -= arr1[i].finAmt;
                } else {
                        totalAmt02 += arr1[i].finAmt;
                }
            }
            arr1 = [];
            arr1.push({
                    finAmt: totalAmt02,
                    finSmdcdNm: finLrdvcdNm
                }
            );
            //3) 임차료
            var arr2 = itemSplit(selectedRaw, 'FAS03040401');
            finLrdvcdNm = "임차료";
            for (var i = 0; i < arr2.length; i++) {
                totalAmt03 += arr2[i].finAmt;
            }
            arr2 = [];
            arr2.push({
                    finAmt: totalAmt03,
                    finSmdcdNm: finLrdvcdNm
                }
            );
            
            //4) 조세공과(법인세 제외)
            var arr3 = itemSplit(selectedRaw, 'FAS03040501');
            finLrdvcdNm = "경비";
            for (var i = 0; i < arr3.length; i++) {
                totalAmt04 += arr3[i].finAmt;
            }
            arr3 = [];
            arr3.push({
                    finAmt: totalAmt04,
                    finSmdcdNm: finLrdvcdNm
                }
            );

            //5) 감가상각비
            var arr4 = itemSplit(selectedRaw, 'FAS03040601');
            finLrdvcdNm = "감가상각비";
            for (var i = 0; i < arr4.length; i++) {
                totalAmt05 += arr4[i].finAmt;
            }
            arr4 = [];
            arr4.push({
                    finAmt: totalAmt05,
                    finSmdcdNm: finLrdvcdNm
                }
            );

            console.log("totalAmt >?>>> " , totalAmt);   

            totalData.push({
                    stacYy:selectedRaw.stacYy,
                    arr:arr,
                    arr1:arr1,
                    arr2:arr2,
                    arr3:arr3,
                    arr4:arr4,                                
                    totalAmt:totalAmt
                }
            );

        });

        var arr = []; 
        var arr1 = [];
        var arr2 = [];
        var arr3 = [];        
        var arr4 = [];

        var end = totalData.length - 1;

        for (var i = end; i >= 0; i--) {

            arr.push({
                stacYy:totalData[i].stacYy,
                finData:totalData[i].arr,
                totalAmt:totalData[i].totalAmt
            });

            arr1.push({
                stacYy:totalData[i].stacYy,
                finData:totalData[i].arr1,
                totalAmt:totalData[i].totalAmt
            });

            arr2.push({
                stacYy:totalData[i].stacYy,
                finData:totalData[i].arr2,
                totalAmt:totalData[i].totalAmt
            });

            arr3.push({
                stacYy:totalData[i].stacYy,
                finData:totalData[i].arr3,
                totalAmt:totalData[i].totalAmt
            });            

            arr4.push({
                stacYy:totalData[i].stacYy,
                finData:totalData[i].arr4,
                totalAmt:totalData[i].totalAmt
            });            

        }

        console.log("totalData >?>>> " , totalData);



        var dataSet = [];

        console.log("arr[0].length >>>> ", arr[0].finData.length);

        dataSet = FIN02003M00.setDataSet01(arr, dataSet);
        dataSet = FIN02003M00.setDataSet01(arr1, dataSet);
        dataSet = FIN02003M00.setDataSet01(arr2, dataSet);
        dataSet = FIN02003M00.setDataSet01(arr3, dataSet);
        dataSet = FIN02003M00.setDataSet01(arr4, dataSet);                

        return dataSet;

    };

FIN02003M00Component.prototype.setDataSet = function(arr, dataSet) {
        
        var lines = {show: true,lineWidth:2,fill: true,fillColor: {colors: [{opacity: 0.2}, {opacity: 0.2}]}};
        var points = {show: true,radius: 4};            

        var localArr = arr;

        for (var i = 0 ; i < localArr[0].finData.length; i++) {
            var asset = [];
            var localData01=[];
            var localData = [];
            var label = "";

            console.log("localArr.length >>>> ", localArr.length);

            for (var j = 0; j < localArr.length; j++) {
                localData = localArr[j].finData;
                localData01 = localData[i];

                console.log("localArr[j].totalAmt >>>> ", localArr[j].totalAmt);

                var amt = Math.round((localData01.finAmt / localArr[j].totalAmt) * 100).toFixed(0);

                asset.push(
                    [localArr[j].stacYy, amt]
                );

                console.log("asset >>>> ", asset);

                label = localData01.finSmdcdNm;

                console.log("label >>>> ", label);
                
            }


            dataSet.push(
                {
                    label: label,
                    data: asset,
                    lines:lines,
                    points:points
                }
            );

        }

        return dataSet;

};

FIN02003M00Component.prototype.setDataSet01 = function(arr, dataSet) {
        
        var lines = {show: true,lineWidth:2,fill: false,fillColor: {colors: [{opacity: 0.2}, {opacity: 0.2}]}};
        var points = {show: true,radius: 4};            


        var localArr = arr;

        for (var i = 0 ; i < localArr[0].finData.length; i++) {
            var asset = [];
            var localData01=[];
            var localData = [];
            var label = "";

            console.log("localArr.length >>>> ", localArr.length);

            for (var j = 0; j < localArr.length; j++) {
                localData = localArr[j].finData;
                localData01 = localData[i];

                asset.push(
                    [localArr[j].stacYy, localData01.finAmt]
                );

                console.log("asset >>>> ", asset);

                label = localData01.finSmdcdNm;

                console.log("label >>>> ", label);
                
            }


            dataSet.push(
                {
                    label: label,
                    data: asset,
                    lines:lines,
                    points:points
                }
            );

        }

        return dataSet;

};  

FIN02003M00Component.prototype.onPlot = function() {

    var dataSet = [];

    dataSet = FIN02003M00.setBalanceBaseDataSet();

    console.log("setBalanceBaseDataSet >>> " , dataSet);

    // =================================================================
    // 자산구성비연도별그래프
    // =================================================================
     var plot = $.plot("#bs-line", dataSet ,{
        series: {
            lines: {
                show: true
            },
            points: {
                show: true
            },
            shadowSize: 0	// Drawing is faster without shadows
        },
        colors: ['#ffa31c', '#00bcd4', "#a6c600", "#177bbb", "#8669CC"],
        legend: {
            show: true,
            position: 'nw',
            margin: [15, 0]
        },
        grid: {
            borderWidth: 0,
            hoverable: true,
            clickable: true
        },
        yaxis: {
            ticks: 4, tickColor: '#eeeeee'
        },
        xaxis: {
            ticks: 2,
            tickColor: '#ffffff'
        }
    });
     
     
    // Flot tooltip
    // =================================================================
    $("<div id='demo-flot-tooltip'></div>").css({
        position: "absolute",
        display: "none",
        padding: "10px",
        color: "#999",
        "text-align":"right",
        "background-color": "#fff"
    }).appendTo("body");


    $("#bs-line").bind("plothover", function (event, pos, item) {

        if (item) {
            var x = item.datapoint[0].toFixed(2),  y = item.datapoint[1];
            $("#demo-flot-tooltip").html("<p class='h4'>" + item.series.label + "</p>" + y)
                .css({top: item.pageY+5, left: item.pageX+5})
                .fadeIn(200);
        } else {
            $("#demo-flot-tooltip").hide();
        }

    });       


};

FIN02003M00Component.prototype.onPlot1 = function() {

     // =================================================================
    // Balance Sheet > 자산구성비그래프
    // =================================================================
    var totalAmt = 0; // 당좌자산
    var totalAmt1 = 0; // 재고자산
    var totalAmt2 = 0; // 투자자산
    var totalAmt3 = 0; // 유형자산
    var totalAmt4 = 0; // 무형자산
    var totalAmt5 = 0; // 기타비유동자산

    for (var i = 0; i < FAS03010101s.length; i++) {
         totalAmt += FAS03010101s[i].finAmt;
    }

    for (var i = 0; i < FAS03010102s.length; i++) {
         totalAmt1 += FAS03010102s[i].finAmt;
    }

    for (var i = 0; i < FAS03010201s.length; i++) {
         totalAmt2 += FAS03010201s[i].finAmt;
    }

    for (var i = 0; i < FAS03010202s.length; i++) {
         totalAmt3 += FAS03010202s[i].finAmt;
    }

    for (var i = 0; i < FAS03010203s.length; i++) {
         totalAmt4 += FAS03010203s[i].finAmt;
    }

    for (var i = 0; i < FAS03010204s.length; i++) {
         totalAmt5 += FAS03010204s[i].finAmt;
    }
    
    var dataSet = []

    dataSet.push({
        label: "당좌자산", 
        data: totalAmt, 
        color: "#ffa31c" 
    });

    dataSet.push({
        label: "재고자산", 
        data: totalAmt1, 
        color: "#00bcd4" 
    });

    dataSet.push({
        label: "투자자산", 
        data: totalAmt2, 
        color: "#a6c600" 
    });

    dataSet.push({
        label: "유형자산", 
        data: totalAmt3, 
        color: "#177bbb" 
    });

    dataSet.push({
        label: "무형자산", 
        data: totalAmt4, 
        color: "#8669CC" 
    });

/*
    Morris.Donut({
        element: 'bs-donut',
        data: dataSet
    });
*/

    $.plot('#bs-donut', dataSet, {
        series: {
            pie: {
                show: true,
                combine: {
                color: '#999',
                threshold: 0.1
                }
            }
        },
        legend: {
        show: false
        }
    });
};

FIN02003M00Component.prototype.onPlot2 = function() {

    // =================================================================
    // 자산 구성비(연도별/전체 항목)
    // =================================================================
    var dataSet = [];  
    
    dataSet = FIN02003M00.setBalanceDataSet();
    
    console.log("dataSet >>>> ", dataSet);

    var colorsTotal = ["#ffa31c", "#ffa31c","#ffa31c","#ffa31c","#ffa31c","#ffa31c","#ffa31c","#ffa31c","#ffa31c","#00bcd4","#00bcd4","00bcd4"
                     , "#a6c600", "#a6c600", "#177bbb","#177bbb","#177bbb","#177bbb","#177bbb","#177bbb","#177bbb","#177bbb","#177bbb","#8669CC","#8669CC"
                     ,"#8669CC","#ffa31c", "#ffa31c","#ffa31c","#ffa31c","#ffa31c","#ffa31c","#ffa31c","#ffa31c","#ffa31c","#00bcd4","#00bcd4","00bcd4"
                     , "#a6c600", "#a6c600", "#177bbb","#177bbb","#177bbb","#177bbb","#177bbb","#177bbb","#177bbb","#177bbb","#177bbb","#8669CC","#8669CC"
                     ,"#8669CC","#ffa31c", "#ffa31c","#ffa31c","#ffa31c","#ffa31c","#ffa31c","#ffa31c","#ffa31c","#ffa31c","#00bcd4","#00bcd4","00bcd4"
                     , "#a6c600", "#a6c600", "#177bbb","#177bbb","#177bbb","#177bbb","#177bbb","#177bbb","#177bbb","#177bbb","#177bbb","#8669CC","#8669CC"
                     ,"#8669CC","#ffa31c", "#ffa31c","#ffa31c","#ffa31c","#ffa31c","#ffa31c","#ffa31c","#ffa31c","#ffa31c","#00bcd4","#00bcd4","00bcd4"
                     , "#a6c600", "#a6c600", "#177bbb","#177bbb","#177bbb","#177bbb","#177bbb","#177bbb","#177bbb","#177bbb","#177bbb","#8669CC","#8669CC"
                     ,"#8669CC","#ffa31c", "#ffa31c","#ffa31c","#ffa31c","#ffa31c","#ffa31c","#ffa31c","#ffa31c","#ffa31c","#00bcd4","#00bcd4","00bcd4"
                     , "#a6c600", "#a6c600", "#177bbb","#177bbb","#177bbb","#177bbb","#177bbb","#177bbb","#177bbb","#177bbb","#177bbb","#8669CC","#8669CC"
                     ,"#8669CC","#ffa31c", "#ffa31c","#ffa31c","#ffa31c","#ffa31c","#ffa31c","#ffa31c","#ffa31c","#ffa31c","#00bcd4","#00bcd4","00bcd4"
                     , "#a6c600", "#a6c600", "#177bbb","#177bbb","#177bbb","#177bbb","#177bbb","#177bbb","#177bbb","#177bbb","#177bbb","#8669CC","#8669CC"
                     ,"#8669CC","#ffa31c", "#ffa31c","#ffa31c","#ffa31c","#ffa31c","#ffa31c","#ffa31c","#ffa31c","#ffa31c","#00bcd4","#00bcd4","00bcd4"
                     , "#a6c600", "#a6c600", "#177bbb","#177bbb","#177bbb","#177bbb","#177bbb","#177bbb","#177bbb","#177bbb","#177bbb","#8669CC","#8669CC"
                     ,"#8669CC","#ffa31c", "#ffa31c","#ffa31c","#ffa31c","#ffa31c","#ffa31c","#ffa31c","#ffa31c","#ffa31c","#00bcd4","#00bcd4","00bcd4"
                     , "#a6c600", "#a6c600", "#177bbb","#177bbb","#177bbb","#177bbb","#177bbb","#177bbb","#177bbb","#177bbb","#177bbb","#8669CC","#8669CC"
                     ,"#8669CC"]

    var colors = [];

    var j = 0;

    console.log("colorsTotal.length >> ", colorsTotal.length);

    console.log("colorsTotal >> ", colorsTotal);

    for (var i = 0; i < dataSet.length; i++) {
         
         if (j == colorsTotal.length) j = 0;

         console.log(colorsTotal[j]);

         colors.push(
             colorsTotal[j]
         );

         j += 1;
    }

    console.log(colors);
     
    var plot2 = $.plot("#bs-line2",dataSet,
        {
        series: {
            lines: {
                show: true
            },
            points: {
                show: true
            },
            shadowSize: 0	// Drawing is faster without shadows
        },
        colors: colors,
        legend: {
            show: true,
            position: 'nw',
            margin: [15, 0]
        },
        grid: {
            borderWidth: 0,
            hoverable: true,
            clickable: true
        },
        yaxis: {
            ticks: 4, tickColor: '#eeeeee'
        },
        xaxis: {
            ticks: 2,
            tickColor: '#ffffff'
        }
    });
     
     
     
     
    // Flot tooltip
    // =================================================================
    $("<div id='demo-flot-tooltip'></div>").css({
        position: "absolute",
        display: "none",
        padding: "10px",
        color: "#999",
        "text-align":"right",
        "background-color": "#fff"
    }).appendTo("body");


    $("#bs-line2").bind("plothover", function (event, pos, item) {

        if (item) {
            var x = item.datapoint[0].toFixed(2),  y = item.datapoint[1];
            $("#demo-flot-tooltip").html("<p class='h4'>" + item.series.label + "</p>" + y)
                .css({top: item.pageY+5, left: item.pageX+5})
                .fadeIn(200);
        } else {
            $("#demo-flot-tooltip").hide();
        }

    });        

};


FIN02003M00Component.prototype.onPlot3 = function() {

    // =================================================================
    // 부채및자본구성비연도별그래프
    // =================================================================

    var dataSet01 = FIN02003M00.setBalanceBaseDataSet01();

    var plot2_1 = $.plot("#bs-line2_2", dataSet01,{
        series: {
            lines: {
                show: true
            },
            points: {
                show: true
            },
            shadowSize: 0	// Drawing is faster without shadows
        },
        colors: ['#ffa31c', '#00bcd4', "#a6c600"],
        legend: {
            show: true,
            position: 'nw',
            margin: [15, 0]
        },
        grid: {
            borderWidth: 0,
            hoverable: true,
            clickable: true
        },
        yaxis: {
            ticks: 4, tickColor: '#eeeeee'
        },
        xaxis: {
            ticks: 2,
            tickColor: '#ffffff'
        }
    });
     
     
    // Flot tooltip
    // =================================================================
    $("<div id='demo-flot-tooltip'></div>").css({
        position: "absolute",
        display: "none",
        padding: "10px",
        color: "#999",
        "text-align":"right",
        "background-color": "#fff"
    }).appendTo("body");


    $("#bs-line2_2").bind("plothover", function (event, pos, item) {

        if (item) {
            var x = item.datapoint[0].toFixed(2),  y = item.datapoint[1];
            $("#demo-flot-tooltip").html("<p class='h4'>" + item.series.label + "</p>" + y)
                .css({top: item.pageY+5, left: item.pageX+5})
                .fadeIn(200);
        } else {
            $("#demo-flot-tooltip").hide();
        }

    });
        
};

FIN02003M00Component.prototype.onPlot4 = function() {

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
    $.plot('#bs-donut2_1', dataSet2, {
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

FIN02003M00Component.prototype.onPlot5 = function() {
           // =================================================================
    // 부채 및 자본 구성비 (연도별/전체 항목)
    // =================================================================
    var dataSet = [];  
    
    dataSet = FIN02003M00.setBalanceDataSet01();
    
    console.log("dataSet >>>> ", dataSet);

    var colorsTotal = ["#ffa31c", "#ffa31c","#ffa31c","#ffa31c","#ffa31c","#ffa31c","#ffa31c","#ffa31c","#ffa31c","#ffa31c","#ffa31c","#00bcd4", "#00bcd4", "#00bcd4", "#00bcd4","#00bcd4", "#a6c600", "#a6c600", "#a6c600", "#a6c600"
                     ,"#ffa31c", "#ffa31c","#ffa31c","#ffa31c","#ffa31c","#ffa31c","#ffa31c","#ffa31c","#ffa31c","#ffa31c","#ffa31c","#00bcd4", "#00bcd4", "#00bcd4", "#00bcd4","#00bcd4", "#a6c600", "#a6c600", "#a6c600", "#a6c600"
                     ,"#ffa31c", "#ffa31c","#ffa31c","#ffa31c","#ffa31c","#ffa31c","#ffa31c","#ffa31c","#ffa31c","#ffa31c","#ffa31c","#00bcd4", "#00bcd4", "#00bcd4", "#00bcd4","#00bcd4", "#a6c600", "#a6c600", "#a6c600", "#a6c600"];

    var colors = [];

    var j = 0;

    console.log("colorsTotal.length >> ", colorsTotal.length);

    console.log("colorsTotal >> ", colorsTotal);

    for (var i = 0; i < dataSet.length; i++) {
         
         if (j == colorsTotal.length) j = 0;

         console.log(colorsTotal[j]);

         colors.push(
             colorsTotal[j]
         );

         j += 1;
    }

    console.log(colors);

    var plot2_1 = $.plot("#bs-line2_3", dataSet,{
        series: {
            lines: {
                show: true
            },
            points: {
                show: true
            },
            shadowSize: 0	// Drawing is faster without shadows
        },
        colors: colors,
        legend: {
            show: true,
            position: 'nw',
            margin: [15, 0]
        },
        grid: {
            borderWidth: 0,
            hoverable: true,
            clickable: true
        },
        yaxis: {
            ticks: 4, tickColor: '#eeeeee'
        },
        xaxis: {
            ticks: 2,
            tickColor: '#ffffff'
        }
    });
     
     
    // Flot tooltip
    // =================================================================
    $("<div id='demo-flot-tooltip'></div>").css({
        position: "absolute",
        display: "none",
        padding: "10px",
        color: "#999",
        "text-align":"right",
        "background-color": "#fff"
    }).appendTo("body");


    $("#bs-line2_3").bind("plothover", function (event, pos, item) {

        if (item) {
            var x = item.datapoint[0].toFixed(2),  y = item.datapoint[1];
            $("#demo-flot-tooltip").html("<p class='h4'>" + item.series.label + "</p>" + y)
                .css({top: item.pageY+5, left: item.pageX+5})
                .fadeIn(200);
        } else {
            $("#demo-flot-tooltip").hide();
        }

    }); 
};

FIN02003M00Component.prototype.onPlot6 = function() {
     // =================================================================
    // 매출액연도별그래프
    // =================================================================
    dataSet = [];

    dataSet = FIN02003M00.setIncomeDataSet();
    
    console.log("dataSet 3333333 >>>> ", dataSet);

    var iplot = $.plot("#incomeLine", dataSet,{
        series: {
            lines: {
                show: true
            },
            points: {
                show: true
            },
            shadowSize: 0	// Drawing is faster without shadows
        },
        colors: ["#ff0000", "#ffa31c","#faa01c","#00bcd4","#b00cd4","#a6c600","#177bbb","#8669CC","#ff0000"],
        legend: {
            show: true,
            position: 'nw',
            margin: [15, 0]
        },
        grid: {
            borderWidth: 0,
            hoverable: true,
            clickable: true
        },
        yaxis: {
            ticks: 4, tickColor: '#eeeeee'
        },
        xaxis: {
            ticks: 2,
            tickColor: '#ffffff'
        }
    });
     
     
    // Flot tooltip
    // =================================================================
    $("<div id='demo-flot-tooltip'></div>").css({
        position: "absolute",
        display: "none",
        padding: "10px",
        color: "#999",
        "text-align":"right",
        "background-color": "#fff"
    }).appendTo("body");


    $("#incomeLine").bind("plothover", function (event, pos, item) {

        if (item) {
            var x = item.datapoint[0].toFixed(2),  y = item.datapoint[1];
            $("#demo-flot-tooltip").html("<p class='h4'>" + item.series.label + "</p>" + y)
                .css({top: item.pageY+5, left: item.pageX+5})
                .fadeIn(200);
        } else {
            $("#demo-flot-tooltip").hide();
        }

    });
    
    
     
    // =================================================================
    // Balance Sheet > 자산구성비그래프
    // =================================================================
    var totalAmt = 0;  // 매출액
    var totalAmt1 = 0;  // 매출원가
    var totalAmt2 = 0; // 판매비와관리비
    var totalAmt3 = 0; // 영업손익

    //1) 매출총손익
    for (var i = 0; i < FAS03020101s.length; i++) {
        if (FAS03020101s[i].finSmdcd == "FAS0302010101") {
            totalAmt += FAS03020101s[i].finAmt;
        }

        if (FAS03020101s[i].finSmdcd == "FAS0302010102") {
            totalAmt1 += FAS03020101s[i].finAmt;
        }
    }

    for (var i = 0; i < FAS03020201s.length; i++) {
         totalAmt2 += FAS03020201s[i].finAmt;
    }

    totalAmt3 = totalAmt - totalAmt1 - totalAmt2;

    var dataSet = [];

    dataSet.push({
        label: "매출원가", 
        data: totalAmt1, 
        color: "#ffa31c" 
    });

    dataSet.push({
        label: "판매비와관리비", 
        data: totalAmt2, 
        color: "#00bcd4" 
    });

    dataSet.push({
        label: "영업손익", 
        data: totalAmt3, 
        color: "#a6c600" 
    });

    $.plot('#incomeDonut', dataSet, {
        series: {
            pie: {
                show: true,
                combine: {
                color: '#999',
                threshold: 0.1
                }
            }
        },
        legend: {
        show: false
        }
    });
     
     
     
    // =================================================================
    // 매출액 구성비(연도별/전체 항목)
    // =================================================================

    var dataSet2 = [];

    dataSet2 = this.setIncomeDataSet01();
     
    var iplot2 = $.plot("#incomeLine2", dataSet2,{
        series: {
            lines: {
                show: true
            },
            points: {
                show: true
            },
            shadowSize: 0	// Drawing is faster without shadows
        },
        colors: ['#ffa31c','#00bcd4','#00bcd4','#00bcd4', '#00bcd4','#00bcd4','#00bcd4','#00bcd4','#00bcd4','#00bcd4','#00bcd4','#00bcd4','#00bcd4','#00bcd4','#00bcd4','#00bcd4','#00bcd4',"#a6c600", "#a6c600","#a6c600","#a6c600","#a6c600","#a6c600","#a6c600", "#177bbb","#177bbb","#177bbb","#177bbb","#177bbb","#177bbb","#177bbb","#8669CC"],
        legend: {
            show: true,
            position: 'nw',
            margin: [15, 0]
        },
        grid: {
            borderWidth: 0,
            hoverable: true,
            clickable: true
        },
        yaxis: {
            ticks: 4, tickColor: '#eeeeee'
        },
        xaxis: {
            ticks: 2,
            tickColor: '#ffffff'
        }
    });
     
    // Flot tooltip
    // =================================================================
    $("<div id='demo-flot-tooltip'></div>").css({
        position: "absolute",
        display: "none",
        padding: "10px",
        color: "#999",
        "text-align":"right",
        "background-color": "#fff"
    }).appendTo("body");


    $("#incomeLine2").bind("plothover", function (event, pos, item) {

        if (item) {
            var x = item.datapoint[0].toFixed(2),  y = item.datapoint[1];
            $("#demo-flot-tooltip").html("<p class='h4'>" + item.series.label + "</p>" + y)
                .css({top: item.pageY+5, left: item.pageX+5})
                .fadeIn(200);
        } else {
            $("#demo-flot-tooltip").hide();
        }
    });       
};

FIN02003M00Component.prototype.onPlot7 = function() {
    // =================================================================
    // 매출액변화(연도별/전체 항목)
    // =================================================================
    var dataSet = [];

    dataSet = FIN02003M00.setIncomeBaseDataSet();
    console.log("dataSet 1111111 >>>> ", dataSet);
    
    var iplot3 = $.plot("#incomeLine3", dataSet,{
        series: {
            lines: {
                show: true
            },
            points: {
                show: true
            },
            shadowSize: 0	// Drawing is faster without shadows
        },
        colors: ["#ff0000", "#ffa31c","#8669CC"],
        legend: {
            show: true,
            position: 'nw',
            margin: [15, 0]
        },
        grid: {
            borderWidth: 0,
            hoverable: true,
            clickable: true
        },
        yaxis: {
            ticks: 4, tickColor: '#eeeeee'
        },
        xaxis: {
            ticks: 2,
            tickColor: '#ffffff'
        }
    });
     
     
     
     
    // Flot tooltip
    // =================================================================
    $("<div id='demo-flot-tooltip'></div>").css({
        position: "absolute",
        display: "none",
        padding: "10px",
        color: "#999",
        "text-align":"right",
        "background-color": "#fff"
    }).appendTo("body");


    $("#incomeLine3").bind("plothover", function (event, pos, item) {

        if (item) {
            var x = item.datapoint[0].toFixed(2),  y = item.datapoint[1];
            $("#demo-flot-tooltip").html("<p class='h4'>" + item.series.label + "</p>" + y)
                .css({top: item.pageY+5, left: item.pageX+5})
                .fadeIn(200);
        } else {
            $("#demo-flot-tooltip").hide();
        }
    });
           
};

FIN02003M00Component.prototype.onPlot8 = function() {
   // =================================================================
    // 자산구성비연도별그래프
    // =================================================================
    var dataSet = [];

    dataSet = FIN02003M00.setCostBaseDataSet();

    var cplot = $.plot("#costLine", dataSet,{
        series: {
            lines: {
                show: true
            },
            points: {
                show: true
            },
            shadowSize: 0	// Drawing is faster without shadows
        },
        colors: ['#ffa31c', '#00bcd4', "#a6c600", "#177bbb", "#8669CC"],
        legend: {
            show: true,
            position: 'nw',
            margin: [15, 0]
        },
        grid: {
            borderWidth: 0,
            hoverable: true,
            clickable: true
        },
        yaxis: {
            ticks: 4, tickColor: '#eeeeee'
        },
        xaxis: {
            ticks: 2,
            tickColor: '#ffffff'
        }
    });
     
     
    // Flot tooltip
    // =================================================================
    $("<div id='demo-flot-tooltip'></div>").css({
        position: "absolute",
        display: "none",
        padding: "10px",
        color: "#999",
        "text-align":"right",
        "background-color": "#fff"
    }).appendTo("body");


    $("#costLine").bind("plothover", function (event, pos, item) {

        if (item) {
            var x = item.datapoint[0].toFixed(2),  y = item.datapoint[1];
            $("#demo-flot-tooltip").html("<p class='h4'>" + item.series.label + "</p>" + y)
                .css({top: item.pageY+5, left: item.pageX+5})
                .fadeIn(200);
        } else {
            $("#demo-flot-tooltip").hide();
        }

    });        

};
    
FIN02003M00Component.prototype.setWallTrantPlot = function(dataSet) {
        
        $(window).trigger('resize');
        console.log("dataSet >> ", dataSet);
        if (dataSet == null || dataSet == undefined) {
            return;
        } 

        barchart.setData(dataSet);

        console.log("dataSet >> ", dataSet);

        barchart.redraw();

        $(window).trigger('resize');

};

FIN02003M00Component.prototype.onPlot9 = function() {

    // MORRIS BAR CHART
    // =================================================================
    barchart = Morris.Bar({
        element: 'wallTrantBar',
        data: [
            { stacYy: '2014', wallRatio: 1, trantRatio: 1 }
        ],
        xkey: 'stacYy',
        ykeys: ['wallRatio', 'trantRatio'],
        labels: ['WALL', 'TRANT'],
        gridEnabled: false,
        gridLineColor: 'transparent',
        barColors: ['#177bbb', '#afd2f0'],
        resize:true,
        hideHover: 'auto'
    });

};

FIN02003M00Component.prototype.onPlot10 = function() {
        // =================================================================
        // 자산구성비연도별그래프
        // =================================================================

        var dataSet = [];

        dataSet = FIN02003M00.setAddValueBaseDataSet();

        var cplot = $.plot("#addValueLine", dataSet,{
            series: {
                lines: {
                    show: true
                },
                points: {
                    show: true
                },
                shadowSize: 0	// Drawing is faster without shadows
            },
            colors: ['#ffa31c', '#00bcd4', "#a6c600", "#177bbb", "#8669CC"],
            legend: {
                show: true,
                position: 'nw',
                margin: [15, 0]
            },
            grid: {
                borderWidth: 0,
                hoverable: true,
                clickable: true
            },
            yaxis: {
                ticks: 4, tickColor: '#eeeeee'
            },
            xaxis: {
                ticks: 2,
                tickColor: '#ffffff'
            }
        });
        
        
        // Flot tooltip
        // =================================================================
        $("<div id='demo-flot-tooltip'></div>").css({
            position: "absolute",
            display: "none",
            padding: "10px",
            color: "#999",
            "text-align":"right",
            "background-color": "#fff"
        }).appendTo("body");


        $("#addValueLine").bind("plothover", function (event, pos, item) {

            if (item) {
                var x = item.datapoint[0].toFixed(2),  y = item.datapoint[1];
                $("#demo-flot-tooltip").html("<p class='h4'>" + item.series.label + "</p>" + y)
                    .css({top: item.pageY+5, left: item.pageX+5})
                    .fadeIn(200);
            } else {
                $("#demo-flot-tooltip").hide();
            }

        });        
};

function onStacYyChange(event) {
    console.log(event.target.value);
    stacYy = event.target.value;

    console.log("-----> onStacYyChange >>> ", stacYy);

    $('select[name=stacYyInfo] option[value='+stacYy+']').each(function (idx) {
        console.log(idx , $('select[name=stacYyInfo] option[value='+stacYy+']').eq(idx).attr('selected'));
        $('select[name=stacYyInfo] option[value='+stacYy+']').eq(idx).attr('selected', 'selected');
    });

    console.log("me.alyDataSet >>>> ", alyDataSet);
    console.log("stacYy >>>> ", stacYy);
 
    /*
    alyDataSet.forEach(function(selectedRaw, index) {

        if (selectedRaw.stacYy == stacYy) {

            console.log("selectedRaw >>>> ", selectedRaw);

            FIN02003M00.onBalance(selectedRaw);
            FIN02003M00.onIncome(selectedRaw);
            FIN02003M00.onCost(selectedRaw);
            FIN02003M00.onAddedValue(selectedRaw);

            FIN02003M00.onPlot1();
            FIN02003M00.onPlot4();
            FIN02003M00.onPlot6();
        }

    });

    FIN02003M00.onView();

    */

}

function onStacYyChange01(event) {
        console.log(event.target.value);
        var staYyValue = event.target.value;

        $('select[name=stacYyInfo01] option[value='+staYyValue+']').each(function (idx) {
            $('select[name=stacYyInfo01] option[value='+staYyValue+']').eq(idx).attr('selected', 'selected');
        });

        console.log("alyDataSet >>>> ", alyDataSet);
 
        growthArray = finRatioSet.growth[staYyValue];
        safeArray = finRatioSet.safe[staYyValue];
        profitArray = finRatioSet.profit[staYyValue];
        productArray = finRatioSet.product[staYyValue];
        activeArray = finRatioSet.active[staYyValue];
        roaArray = finRatioSet.roa[staYyValue];
        addValueArray = finRatioSet.addValue[staYyValue];

        FIN02003M00.onFinRatioTableView();

}
function onStacYyChange02(event) {
        
        console.log(event.target.value);
        var staYyValue = event.target.value;

        $('select[name=stacYyInfo02] option[value='+staYyValue+']').each(function (idx) {
            $('select[name=stacYyInfo02] option[value='+staYyValue+']').eq(idx).attr('selected', 'selected');
        });
        
        wallTrantArray = wallTrantSet.walltrant[staYyValue];

        var wall = Number(wallTrantArray[wallTrantArray.length-1].wallRatio);

        console.log("data999999999 >>> wall" , wall);

        if (wall > 100) {
            wallDecision =  '<div class="label label-table label-warning">투자적격</div>';
        } else {
            wallDecision =  '<div class="label label-table label-danger">투자부적격</div>';
        }

        console.log("data999999999 >>> wall" , wallDecision);

        var trant = Number(wallTrantArray[wallTrantArray.length-1].trantRatio);

        console.log("data999999999 >>> trant" , trant); 

        if (trant > 100) {
            trantDecision =  '<div class="label label-table label-warning">사채투자적격</div>';
        } else {
            trantDecision =  '<div class="label label-table label-danger">사채투자부적격</div>';
        }    

        console.log("data999999999 >>> trant" , trantDecision); 

        FIN02003M00.wallTranTableView();

}

function onStacYyChange03(event) {
        
        console.log(event.target.value);
        var staYyValue = event.target.value;

        $('select[name=stacYyInfo03] option[value='+staYyValue+']').each(function (idx) {
            $('select[name=stacYyInfo03] option[value='+staYyValue+']').eq(idx).attr('selected', 'selected');
        });        

        console.log("staYyValue >>>> ", staYyValue);        

        console.log("me.alyDataSet >>>> ", alyDataSet);

        growthArray = finRatioSet.growth[staYyValue];
        safeArray = finRatioSet.safe[staYyValue];
        profitArray = finRatioSet.profit[staYyValue];
        productArray = finRatioSet.product[staYyValue];
        activeArray = finRatioSet.active[staYyValue];
        roaArray = finRatioSet.roa[staYyValue];
        addValueArray = finRatioSet.addValue[staYyValue];

        decgrowthArray = decisionSet.growth[staYyValue];
        decsafeArray = decisionSet.safe[staYyValue];
        decprofitArray = decisionSet.profit[staYyValue];
        decproductArray = decisionSet.product[staYyValue];
        decactiveArray = decisionSet.active[staYyValue];

        FIN02003M00.decisionRatioTable();

}

function onRadioClick(obj) {

        console.log("$event >>>>>>>>>>>>>>>>>>>>>>>>> ", obj);

        enslDcd = obj;

        var me = this;

        growthArray = [];
        safeArray = [];
        profitArray = [];
        productArray = [];
        activeArray = [];
        roaArray = [];
        addValueArray = [];

        decgrowthArray = [];
        decsafeArray = [];
        decprofitArray = [];
        decproductArray = [];
        decactiveArray = [];

        var lastest = "Y";

        if (isLastest) {
            lastest = "Y";
        } else {
            lastest = "N";
        }

        overlay.show();

        finService.getDecisionRatio(finCom.alyid, finCom.userid, finCom.bzn, lastest, enslDcd, FIN02003M00.decisionCallBack);

        wallTrantArray = [];

        finService.getWallTrantRatio(finCom.alyid, finCom.userid, finCom.bzn, lastest, enslDcd, FIN02003M00.wallTrantCallback);

        finService.getFinRatio(finCom.alyid, finCom.userid, finCom.bzn, lastest, enslDcd, FIN02003M00.finRateCallback);

    }
    function onCheckChange(event) {
        console.log(event.target.checked);

        isLastest = event.target.checked;

        if (isLastest) {
            $("input:checkbox[name=isLastest]").each(function (idx) {
                $("input:checkbox[name='isLastest']").eq(idx).attr('checked', true) ;
            });
        } else {
            $("input:checkbox[name=isLastest]").each(function (idx) {
                $("input:checkbox[name='isLastest']").eq(idx).attr('checked', false) ;
            });
        }

        growthArray = [];
        safeArray = [];
        profitArray = [];
        productArray = [];
        activeArray = [];
        roaArray = [];
        addValueArray = [];

        decgrowthArray = [];
        decsafeArray = [];
        decprofitArray = [];
        decproductArray = [];
        decactiveArray = [];

        var lastest = "Y";

        if (isLastest) {
            lastest = "Y";
        } else {
            lastest = "N";
        }

        overlay.show();

        finService.getDecisionRatio(finCom.alyid, finCom.userid, finCom.bzn, lastest, enslDcd, FIN02003M00.decisionCallBack);

        wallTrantArray = [];

        finService.getWallTrantRatio(finCom.alyid, finCom.userid, finCom.bzn, lastest, enslDcd, FIN02003M00.wallTrantCallback);

        finService.getFinRatio(finCom.alyid, finCom.userid, finCom.bzn, lastest, enslDcd, FIN02003M00.finRateCallback);

    }

function initArr(arr) {
    for (var i = 0; i < arr.length; i++) {
        arr[i].finAmt = 0;
    }

    return arr;
}

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

    $(".alert.alert-danger").hide(true);

    $("link[href*='/bootstrap/thema/fico2000/assets/plugins/sky-forms-pro/skyforms/css/sky-forms.css']").remove();
    $("link[href*='/bootstrap/thema/fico2000/assets/plugins/sky-forms-pro/skyforms/custom/custom-sky-forms.css']").remove();
    $("link[href*='/bootstrap/thema/fico2000/assets/css/admin/custom-admin.css']").remove();
    $("link[href*='/bootstrap/thema/fico2000/js/app/adm/ADM01000M00Component.css']").remove();
    
    $('head').append( $('<link rel="stylesheet" type="text/css" />').attr('href', '/bootstrap/thema/fico2000/assets/plugins/sky-forms-pro/skyforms/css/sky-forms.css') );
    $('head').append( $('<link rel="stylesheet" type="text/css" />').attr('href', '/bootstrap/thema/fico2000/assets/plugins/sky-forms-pro/skyforms/custom/custom-sky-forms.css') );
    $('head').append( $('<link rel="stylesheet" type="text/css" />').attr('href', '/bootstrap/thema/fico2000/assets/css/admin/custom-admin.css') );
    $('head').append( $('<link rel="stylesheet" type="text/css" />').attr('href', '/bootstrap/thema/fico2000/js/app/adm/ADM01000M00Component.css') );

    FIN02003M00.ngOnInit();

});