<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<%@include file="/inc/common.jsp" %>

            <!--CONTENT CONTAINER-->
            <!--===================================================-->
            <div id="content-container">
                
                <!--Page Title-->
                <!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
                <div id="page-title">
                    <h1 class="page-header text-overflow"> 기업재무진단평가 > 부도가능 여부</h1>

                    <!--Searchbox-->
                    <div class="searchbox">
                        <div class="input-group custom-search-form">
                            <ul class="pull-right breadcrumb">
                                <li><a href="index.html">Home</a></li>
                                <li>재무컨설팅</li>
                                <li class="active">기업재무진단평가</li>
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
                              <span class="color-gray mr10">*분석시나리오명: <span class="marker--grey color-black" name="alycon"/></span>
                          		<br/>
                          		<span class="color-gray">*회계년도: <select name="stacYyInfo" id="stacYyInfo_1" data-width="90%"></select></span> 
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

                        <div class="row" style="margin-top: 7px;">
                            <div class="col-xs-12">
                                <div class="panel">
                                    <div class="panel-heading">
                                        <h3 class="panel-title">부실징후를 검토해야 하는이유?</h3>
                                    </div>
                                    <div class="panel-body">
                                        <div class="row">
                                            <div class="col-lg-9">
                                                <b>1. 금융기관의 입장:</b><br/>
                                                기업 부실에 대한 우려감이 점차 커지고 있다.<br/>
                                                기업재무건전성에 대한 우려가 높아지는 현실에서 기업 부실의 수준의 정도를 살펴보고 자금지원의 결정수준을 정함<br/><br/>
    
                                                <b>2. 기업의 입장:</b><br/>
                                                현재 기업의 재무상황이 악화되고 있는지 개선되고 있는지,<br/>
                                                부실 난국을 타개하기 위한 재무전략을 계획수립하고 그 계획 대비 부실징후 결과에 대한 검토를 할 수 있다.<br/><br/>
    
                                                <b>3. 부실기업, 한계기업의 입장</b><br/>
                                                부실기업이 재무곤경을 타개하기 위해 어떠한 노력을 하고 있는지를 살펴보고 대응방향을 모색하기 위해 "알트만 부실징후"를 분석해 본다.
                                            </div>
                                            <div class="col-lg-3">
                                                <img src="/bootstrap/thema/fico2000_new/assets/img/renewal2019/pb2.jpg" class="img-responsive pull-right" style="height: 220px;" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
    
    

                    <div class="row" style="margin-top: 7px;">
                        <div class="col-xs-12 col-lg-10 col-lg-offset-1">
                            <div class="panel">
                                <div class="panel-heading">
                                    <h3 class="panel-title">비상장제조기업 부실징후 예측</h3>
                                </div>
                                <div class="panel-body">
                                    <div class="row">
                                        <div class="col-lg-6">
                                            <div class="panel">
                                                <div class="pad-all text-center">
                                                    <span class="text-2x text-bold"><span name="entpName"/></span>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-lg-6">
                                            <div id="finResult"></div>
                                            <!--다른 유형의 카드들(아래 2가지)-->
                                            <!--
                                            <div class="panel panel-info panel-colorful">
                                                <div class="pad-all text-center">
                                                    <span class="text-2x text-bold">정밀분석필요</span>
                                                </div>
                                            </div>
                                            -->

                                            <!--
                                            <div class="panel panel-success panel-colorful">
                                                <div class="pad-all text-center">
                                                    <span class="text-2x text-bold">도산가능성 거의 없음</span>
                                                </div>
                                            </div>
                                            -->
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-lg-6">
                                            <div class="panel">
                                                <div class="panel-body">
                                                    <table class="table table-condense">
                                                        <thead>
                                                        <tr class="active text-lg">
                                                            <th colspan="4" class="text-center">대차대조표</th>
                                                        </tr>
                                                        </thead>
                                                        <tbody id ="tb_bon">
                                                        
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-lg-6">
                                            <div class="panel">
                                                <div class="panel-body">
                                                    <table class="table table-condense">
                                                        <thead>
                                                        <tr class="active text-lg">
                                                            <th colspan="2" class="text-center">손익계산서</th>
                                                        </tr>
                                                        </thead>
                                                        <tbody id="tb_debt">
                                                        <tr>
                                                            <td>매출액</td>
                                                            <td class="text-right">4,191</td>
                                                        </tr>
                                                        <tr>
                                                            <td>매출원가</td>
                                                            <td class="text-right">2,883</td>
                                                        </tr>
                                                        <tr>
                                                            <td>매출총이익</td>
                                                            <td class="text-right">1,308</td>
                                                        </tr>
                                                        <tr>
                                                            <td>영업이익</td>
                                                            <td class="text-right">638</td>
                                                        </tr>
                                                        <tr style="border-bottom: 3px solid #eaeaea;">
                                                            <td>법인세차감전이익</td>
                                                            <td class="text-right">275</td>
                                                        </tr>
                                                        <tr class="text-bold text-lg">
                                                            <td>당기순이익</td>
                                                            <td class="text-right">266</td>
                                                        </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                <!--End page content-->
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
                 <script src="/bootstrap/thema/fico2000_new/js/app/fin/FIN03104M00Component.js"></script>   

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

                        FIN03104M00.onSearch();
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

