<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<%@include file="/inc/common.jsp" %>

            <!--CONTENT CONTAINER-->
            <!--===================================================-->
            <div id="content-container">
                
                <!--Page Title-->
                <!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
               <div id="page-title">
                    <h1 class="page-header text-overflow"> 매출총이익, 영업손익, 당기순손익 연도별 추세분석</h1>

                    <!--Searchbox-->
                    <div class="searchbox">
                        <div class="input-group custom-search-form">
                            <ul class="pull-right breadcrumb">
                                <li><a href="index.html">Home</a></li>
                                <li>기업재무현황추세분석</li>
                                <li class="active">손익부분현황</li>
                            </ul>
                        </div>
                    </div>
                </div>     

                <!--Page content-->
                <!--===================================================-->
                <div id="page-content" id="pageContent">

                    <div class="row bord-btm">
                        <div class="col-xs-12 col-lg-8">  
                           <h4 class="text-main">
                              <span class="color-gray mr10">*기업명: <span class="marker--grey color-black" name="entpName"/></span>
                              <br class="showOnMobile"/>
                              <span class="color-gray">*분석시나리오명: <span class="marker--grey color-black" name="alycon"/></span>
                          	</h4>
                        </div>
                        <div class="col-xs-12 col-lg-4 mb10">  
                          	<div class="text-right showOnNotMobile">
                               <button type="button" class="btn btn-primary mr10" onClick="selectFinInfo()">재무정보변경</button>
                               <button type="button" class="btn btn-primary" onClick="selectAnalysis()">민감도분석시나리오선택</button>
                           </div>
                           <div class="showOnMobile row">
                               <div class="col-xs-5 col-sm-6"><button type="button" class="btn btn-primary btn-block" onClick="selectFinInfo()">재무정보변경</button></div>
                               <div class="col-xs-7 col-sm-6"><button type="button" class="btn btn-primary btn-block" onClick="selectAnalysis()">민감도분석시나리오선택</button></div>
                           </div>
                        </div>
                    </div>
                        <div class="row" name="bsDiv" style="margin-top:10px;">
                        
                            <!-- 자산구성비연도별 -->
                            <div class="col-lg-12">                                                            
                                    <div class="panel">
                                        <div class="panel-heading">
                                            <h3 class="panel-title">매출총이익, 영업손익, 당기순손익 연도별 추세분석</h3>
                                        </div>
                                        <div class="panel-body">
                                            <div id="incomeLine3" style="width:100%;height:600px;"></div>
                                        </div>
                                    </div>
                            </div>
                            <!-- //자산구성비연도별 -->

                        </div>
                        
                </div>

             </div> 

             <div id="popup" class="Pstyle" data-backdrop="static" data-keyboard="false">
                    <span class="b-close"><i class="demo-pli-cross"></i></span>
                    <div class="content" style="height:auto; width:auto;">
                    <iframe width="700px" height="750px" src="" scrolling="auto" frameborder="0" marginwidth="0" id="alyIfr"></iframe>
                    </div>
                 </div>

                 <div id="popup1" class="Pstyle" data-backdrop="static" data-keyboard="false">
                        <span class="b-close"><i class="demo-pli-cross"></i></span>
                        <div class="content" style="height:auto; width:auto;">
                        <iframe width="700px" height="750px" src="" scrolling="auto" frameborder="0" marginwidth="0" id="finIfr"></iframe>
                        </div>
                </div>

                 <script src="/bootstrap/thema/fico2000_new/js/app/adm/codeMng.service.js"></script>
                 <script src="/bootstrap/thema/fico2000_new/js/app/fin/fin.services.js"></script>
                 <!--Demo script [ DEMONSTRATION ]-->
                 <script src="/bootstrap/thema/fico2000_new/js/demo/nifty-demo.min.js"></script>
                     <!--Form Wizard [ SAMPLE ]-->
                 <script src="/bootstrap/thema/fico2000_new/js/demo/form-wizard.js"></script>
                 <script src="/bootstrap/thema/fico2000_new/js/app/fin/FIN03033M00Component.js"></script>   

             <script type="text/javascript">
                 
                    function returnValue(obj) {
                        console.log(obj.entpName);
                        console.log(obj.alycon);
                        console.log(obj.rightStacYyArr);
                        
                        console.log(obj.stacYys);

                        finAplyCom = {};

                        finAplyCom = {
                                    alycon : obj.alycon,
                                    alyid : obj.alyid,
                                    entpName : obj.entpName,
                                    bzn : obj.bzn,
                                    userid : obj.userid,
                                    amtUnit:obj.amtUnit,
                                    amtUnitNm:obj.amtUnitNm,
                                    rightStacYyArr: obj.rightStacYyArr,
                                    stacYys: obj.stacYys
                                };

                        

                        console.log(finAplyCom);
                        
                        

                        $("span[name='entpName']").each(function (idx) {
                            $("span[name='entpName']").eq(idx).html(obj.entpName);
                        });

                        $("span[name='alycon']").each(function (idx) {
                            $("span[name='alycon']").eq(idx).html(obj.alycon);
                        });

                        $("#popup").bPopup().close();

                        var stacYy = $("#stacYyInfo_1 option:selected").val();
                        console.log(stacYy);

                        FIN03033M00.onSearch();
                    }

                    //재무정보 팝업
                    function selectFinInfo() {
            
                        $("#finIfr").attr("src","/fin/pageMove.do?menuCode=FIN02002P00&params=");

                        $("#popup1").bPopup({
                            modalClose : true
                        });
                    }
                    
                    //분석 팝업
                    function selectAnalysis() {
            
                        $("#alyIfr").attr("src","/fin/pageMove.do?menuCode=FIN02001P00&params=");

                        $("#popup").bPopup({
                            modalClose : true
                        });
                    }
                    
                    
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
                    
                </script>   

