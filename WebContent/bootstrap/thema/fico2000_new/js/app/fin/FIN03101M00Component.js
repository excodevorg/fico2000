
var FIN03101M00 = new FIN03101M00Component();

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

function FIN03101M00Component() {

};

FIN03101M00Component.prototype.ngOnInit = function () {
    
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

            FIN03101M00.onSearch();
            
        }
    }

};


FIN03101M00Component.prototype.onSearch = function () {

        entpName = finAplyCom.name;
        stacYy = finAplyCom.stacYy; 
        bzn = finAplyCom.bzn;
        amtUnitNm = finAplyCom.amtUnitNm;
        stacYys = finAplyCom.stacYys;

        $("span[name='amtUnitNm']").each(function (idx) {
            $("span[name='amtUnitNm']").eq(idx).html(amtUnitNm);
        });

        console.log('getAnalysisFinDtTypeMaps >>> ', finAplyCom.stacYys);

        FIN03101M00.onPlot9();

        overlay.show();

        finService.getWallTrantRatio(finAplyCom.alyid, finAplyCom.userid, finAplyCom.bzn, "Y","", FIN03101M00.wallTrantCallback);


};

FIN03101M00Component.prototype.wallTrantCallback = function(data) {

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
            FIN03101M00.setWallTrantPlot(res.data.list1);

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

            FIN03101M00.wallTranTableView();
        } else {
            overlay.hide();
            bootbox.alert(res.msg);
        }
 
    } else {
        overlay.hide();
    }

};

FIN03101M00Component.prototype.setWallTrantPlot = function(dataSet) {
        
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

FIN03101M00Component.prototype.onPlot9 = function() {

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

    FIN03101M00.wallTranTableView();

}

FIN03101M00Component.prototype.wallTranTableView = function() {

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

FIN03101M00Component.prototype.onNumberWithCommas = function (totalAmt) {
    return numberWithCommas(totalAmt);
};

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


    FIN03101M00.ngOnInit();

    


});