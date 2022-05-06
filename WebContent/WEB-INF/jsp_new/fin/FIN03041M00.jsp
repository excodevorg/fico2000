<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<%@include file="/inc/common.jsp" %>

            <!--CONTENT CONTAINER-->
            <!--===================================================-->
            <div id="content-container">
                
               <!--Page Title-->
                <!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
                <div id="page-title">
                    <h1 class="page-header text-overflow"> 손익계산서 총괄 추세분석</h1>

                    <!--Searchbox-->
                    <div class="searchbox" style="width:350px;">
                        <div class="input-group custom-search-form">
                            <ul class="pull-right breadcrumb">
                                <li><a href="index.html">Home</a></li>
                                <li>기업재무현황추세분석</li>
                                <li class="active">손익계산서총괄추세분석</li>
                            </ul>
                        </div>
                    </div>
                </div>   

                <!--Page content-->
                <!--===================================================-->
                <div id="page-content">

                    <div class="row bord-btm">
                        <div class="col-xs-12 col-lg-8">  
                           <h4 class="text-main">
                              <span class="color-gray mr10">*기업명: <span class="marker--grey color-black" name="entpName"/></span>
                              <br class="showOnMobile"/>
                              <span class="color-gray mr10">*분석시나리오명: <span class="marker--grey color-black" name="alycon"/></span>
	                          	<br/>
	                          	<span class="color-gray mr10">*회계년도: <select name="stacYyInfo" id="stacYyInfo_1" data-width="90%"></select></span> 
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
                    
                    <!--분석결과보기-->
                    <!--===================================================-->
                    <div class="tab-base">

                        <!-- Nav tabs -->
                        <ul id="myTab" class="nav nav-tabs">
                            <li><a href="#incomeStatement" data-toggle="tab" class="text-lg"></a></li>
                        </ul>

                        <!-- Tabs Content -->
                        <form id="resultForm" class="form-horizontal" action="#" method="post">
                            <div class="tab-content">
                                <div class="alert alert-danger" role="alert" style="dispaly:none;">
                                    <span id="errMsg"></span>
                                </div> 
                                <!--★BalanceSheet★---------------------------------------------------------------->
                                <div class="tab-pane pad-btm fade" id="incomeStatement">

                                    <div class="row">    

                                        <div class="col-lg-4">
                                            <div class="panel">
                                                <div class="panel-heading">
                                                    <h3 class="panel-title">매출 및 손익</h3>
                                                </div>

                                                <!--자산-->
                                                <!--===================================================-->
                                                <div class="panel-body">
                                                    ( 회계 년도 : <span name="stacYyNm"/> )
                                                    <br/>
                                                    <table id="incomeTable" class="table  table-condensed">
                                                        <thead>
                                                            <tr>
                                                                <th>항목</th>
                                                                <th>금액(<span name="amtUnitNm"/>)</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                        </tbody>
                                                    </table>
                                                </div>
                                                <!--===================================================-->
                                                <!--//자산-->                                                
                                            </div>
                                        </div>

                                        <div class="col-lg-8">                                                            
                                                <div class="panel">
                                                    <div class="panel-heading">
                                                        <h3 class="panel-title">매출총이익, 영업손익, 당기순손익 연도별 추세분석</h3>
                                                    </div>
                                                    <div class="panel-body">
                                                        <div id="incomeLine3" style="width:100%;height:300px;"></div>
                                                    </div>
                                                </div>
                                            </div>
                                        
                                        
                                        <!-- col-lg-3 -->
                                        <div class="col-lg-4">                                                            
                                            <div class="panel">
                                                <div class="panel-heading">
                                                    <h3 class="panel-title">영업손익, 매출원가, 판매비와 관리비구성비(<span name="stacYyInfoValue"/>)</h3>
                                                </div>
                                                <div class="panel-body">
                                                    <div id="incomeDonut" style="width:100%;height:300px"></div>
                                                </div>
                                            </div>
                                        </div>
                                        <!-- col-lg-3 -->
                                        
                                        <div class="col-lg-4">                                                            
                                            <div class="panel">
                                                <div class="panel-heading">
                                                    <h3 class="panel-title">매출액 대비 손익계산서 연도별 추세분석</h3>
                                                </div>
                                                <div class="panel-body">
                                                    <div id="incomeLine" style="width:100%;height:300px;"></div>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="col-lg-8">                                                            
                                                <div class="panel">
                                                    <div class="panel-heading">
                                                        <h3 class="panel-title">손익계산서 세부항목 연도별 추세분석</h3>
                                                    </div>
                                                    <div class="panel-body">
                                                        <div id="incomeLine2" style="width:100%;height:550px;"></div>
                                                    </div>
                                                </div>
                                            </div>
                                       
                                    </div>
                                    

                                </div>

                            </div>
                        </form>
                    </div>
                    <!--===================================================-->
                    <!-- END분석결과보기 -->
                    
                </div>
                <!--===================================================-->
                <!--End page content-->

            </div>
            <!--===================================================-->
            <!--END CONTENT CONTAINER-->

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

<script src="./bootstrap/thema/fico2000_new/plugins/morris-js/morris.min.js"></script>
<script src="./bootstrap/thema/fico2000_new/plugins/morris-js/raphael-js/raphael.min.js"></script>
<script src="./bootstrap/thema/fico2000_new/plugins/flot-charts/jquery.flot.min.js"></script>
<script src="./bootstrap/thema/fico2000_new/plugins/flot-charts/jquery.flot.resize.min.js"></script>

<!--Flot Pie Chart [ OPTIONAL ]-->
<script src="./bootstrap/thema/fico2000_new/plugins/flot-charts/jquery.flot.pie.min.js"></script>
<!--Easy Pie Chart [ OPTIONAL ]-->
<script src="./bootstrap/thema/fico2000_new/plugins/easy-pie-chart/jquery.easypiechart.min.js"></script>


<!--Form Wizard [ SAMPLE ]-->
<script src="/bootstrap/thema/fico2000_new/js/demo/form-wizard.js"></script>
<script src="/bootstrap/thema/fico2000_new/js/app/fin/FIN03041M00Component.js"></script>   

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

        finAplyCom.stacYy = stacYy;

        FIN03041M00.onSearch();
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
</script>   
