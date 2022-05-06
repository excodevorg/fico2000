<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<%@include file="/inc/common.jsp" %>

            <!--CONTENT CONTAINER-->
            <!--===================================================-->
            <div id="content-container">
                
                <!--Page Title-->
                <!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
                <div id="page-title">
                    <h1 class="page-header text-overflow"> 운전자금시나리오 > 운전자금 흐름 진단을 위한 시나리오 입력</h1>

                    <!--Searchbox-->
                    <div class="searchbox"  style="width:350px;">
                        <div class="input-group custom-search-form">
                            <ul class="pull-right breadcrumb">
                                <li><a href="index.html">Home</a></li>
                                <li>비즈니스모델현금흐름</li>
                                <li class="active">운전자금시나리오</li>
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
                        <input type="hidden" size="10" class="qn" id="qsrtInfo_qsrtNo0_no2_rsltVl" style="height: 30px; text-align: center; ime-mode:active"/>
                        <div class="row" name="bsDiv" style="margin-top:10px;">
                                        <!-- 매출패턴 -->
                                        <div class="panel">
                                            <div class="panel-heading">
                                                <h3 class="panel-title">경영 컨설팅 설문지(<input type="text" size="5" class="qn" id="qsrtInfo_qsrtNo0_no1_rsltVl" style="height: 30px; text-align: center;"/>년도)</h3>
                                            </div>
                                            <div class="panel-body">
                                                        <style>
                                                            .qnul li{margin: 5px 0;}
                                                            .qn{border:1px solid #eaeaea;/*border:0 none;border-bottom: 1px solid #000;background-color:rgba(255,255,255,0);*/}
                                                        </style>
                                                        <ol class="qnol">
                                                            <li class="mar-btm">
                                                                매출이 일어나고 자금회수까지의 형태는 어떻습니까?
                                                                <ul class="qnul">
                                                                    <li>30일 내에 회수되는 비율은 <input type="number" size="5" class="qn" id="qsrtInfo_qsrtNo1_no1_rsltVl" style="text-align: right;"/>%</li>
                                                                    <li>60일 (2개월 이내)안에 회수되는 비율은 <input type="number" size="5" class="qn" id="qsrtInfo_qsrtNo1_no2_rsltVl" style="text-align: right;"/>%</li>
                                                                    <li>90일 (3개월 이내)안에 회수되는 비율은 <input type="number" size="5" class="qn" id="qsrtInfo_qsrtNo1_no3_rsltVl" style="text-align: right;"/>%</li>
                                                                </ul>
                                                            </li>
                                                            <li class="mar-btm">
                                                                생산에 따른 원재료와 부재료 등의 구입 대금지급은 매출 후 <input type="number" size="5" class="qn" id="qsrtInfo_qsrtNo2_no1_rsltVl"  style="text-align: right;"/>개월 후에 지급하십니까?
                                                                <br/>
                                                                생산에 따른 원재료와 부재료 등의 구입 대금지급은 매출 전 <input type="number" size="5" class="qn" id="qsrtInfo_qsrtNo2_no2_rsltVl"  style="text-align: right;"/>개월 전에 지급하십니까?
                                                            </li>
                                                            <li class="mar-btm">
                                                                매출원가가 매출액에 차지하는 비율은 평균적으로 어느 정도 입니까? <input type="number" size="5" class="qn" id="qsrtInfo_qsrtNo3_no1_rsltVl" style="text-align: right;"/>%
                                                            </li>
                                                            <li class="mar-btm">
                                                                매월 고정적으로 지출되는 판매관리비와 이자비용은 얼마나 됩니까?<br/><br/>
                                                                <span id="qsrtInfo_qsrtNo4_no1_0_kindNm"/> <input type="number" size="10" class="qn" id="qsrtInfo_qsrtNo4_no1_0_rsltVl" style="text-align: right;"/><br/>
                                                                <span id="qsrtInfo_qsrtNo4_no1_1_kindNm"/> <input type="number" size="10" class="qn" id="qsrtInfo_qsrtNo4_no1_1_rsltVl" style="text-align: right;"/><br/>
                                                                <span id="qsrtInfo_qsrtNo4_no1_2_kindNm"/> <input type="number" size="10" class="qn" id="qsrtInfo_qsrtNo4_no1_2_rsltVl" style="text-align: right;"/><br/>
                                                                계 <span id="getQsrtNo_qsrtNo41"/><br/>
                                                            </li>
                                                            <li class="mar-btm">
                                                                법인세 납부 달은 언제입니까? <input type="number" size="5" class="qn" id="qsrtInfo_qsrtNo5_no1_rsltVl" style="text-align: right;"/>월
                                                            </li>
                                                            <li class="mar-btm">
                                                                금년도 법인세 납부 금액은? <input type="number" size="10" class="qn" id="qsrtInfo_qsrtNo6_no1_rsltVl" style="text-align: right;"/>
                                                            </li>
                                                            <li class="mar-btm">
                                                                전년도 말 현금잔액은 어느 정도인지? <input type="number" size="10" class="qn" id="qsrtInfo_qsrtNo7_no1_rsltVl" style="text-align: right;"/>
                                                            </li>
                                                            <li class="mar-btm">
                                                                경영위기를 대비해 여유자금을 보유하고 계시는지, 있으시다면 어느정도 현금을 보유하고 계시는지? <input type="number" size="10" class="qn" id="qsrtInfo_qsrtNo8_no1_rsltVl" style="text-align: right;"/>
                                                            </li>
                                                            <li class="mar-btm">
                                                                평가추측 기준월 전월,2개월전, 3개월전 매출액은?<br/><br/>
                                                                3개월전 <input type="text" size="10" class="qn" id="qsrtInfo_qsrtNo9_no3_baseYm"/>월 / 매출액 <input type="number" size="10" class="qn" id="qsrtInfo_qsrtNo9_no3_rsltVl" style="text-align: right;"/><br/>
                                                                2개월전 <input type="text" size="10" class="qn" id="qsrtInfo_qsrtNo9_no2_baseYm"/>월 / 매출액 <input type="number" size="10" class="qn" id="qsrtInfo_qsrtNo9_no2_rsltVl" style="text-align: right;"/><br/>
                                                                1개월전 <input type="text" size="10" class="qn" id="qsrtInfo_qsrtNo9_no1_baseYm"/>월 / 매출액 <input type="number" size="10" class="qn" id="qsrtInfo_qsrtNo9_no1_rsltVl" style="text-align: right;"/><br/>
                                                            </li>
                                                            <li class="mar-btm">
                                                                배당은 <input type="number" size="5" class="qn" id="qsrtInfo_qsrtNo11_no1_rsltVl" style="text-align: right;"/>월에 <input type="number" size="5" class="qn" id="qsrtInfo_qsrtNo11_no2_rsltVl" style="text-align: right;"/>
                                                            </li>                                                            
                                                            <li class="mar-btm">
                                                                금년도 추정매출액은?<br/><br/>
                                                                <div class="col-lg-10">
                                                                <table width="100%" class="table table-striped">
                                                                    <thead>
                                                                        <tr class="text-center">
                                                                            <th width="10%" style="text-align: center;">월</th>
                                                                            <th width="15%" style="text-align: center;">1</th>
                                                                            <th width="15%" style="text-align: center;">2</th>
                                                                            <th width="15%" style="text-align: center;">3</th>
                                                                            <th width="15%" style="text-align: center;">4</th>
                                                                            <th width="15%" style="text-align: center;">5</th>
                                                                            <th width="15%" style="text-align: center;">6</th>
                                                                        </tr>
                                                                    </thead>
                                                                    <tbody>
                                                                        <tr>
                                                                            <td align="center">금액</td>
                                                                            <td align="center"><input type="number" class="qn" id="qsrtInfo_qsrtNo10_no1_0_rsltVl" style="text-align: right; width: 100%"/></td>
                                                                            <td align="center"><input type="number" class="qn" id="qsrtInfo_qsrtNo10_no1_1_rsltVl" style="text-align: right; width: 100%"/></td>
                                                                            <td align="center"><input type="number" class="qn" id="qsrtInfo_qsrtNo10_no1_2_rsltVl" style="text-align: right; width: 100%"/></td>
                                                                            <td align="center"><input type="number" class="qn" id="qsrtInfo_qsrtNo10_no1_3_rsltVl" style="text-align: right; width: 100%"/></td>
                                                                            <td align="center"><input type="number" class="qn" id="qsrtInfo_qsrtNo10_no1_4_rsltVl" style="text-align: right; width: 100%"/></td>
                                                                            <td align="center"><input type="number" class="qn" id="qsrtInfo_qsrtNo10_no1_5_rsltVl" style="text-align: right; width: 100%"/></td>
                                                                        </tr>
                                                                    </tbody>
                                                                </table> <br>

                                                                <table width="100%" class="table table-striped">
                                                                    <thead>
                                                                        <tr class="text-center">
                                                                            <th width="10%" style="text-align: center;">월</th>
                                                                            <th width="15%" style="text-align: center;">7</th>
                                                                            <th width="15%" style="text-align: center;">8</th>
                                                                            <th width="15%" style="text-align: center;">9</th>
                                                                            <th width="15%" style="text-align: center;">10</th>
                                                                            <th width="15%" style="text-align: center;">11</th>
                                                                            <th width="15%" style="text-align: center;">12</th>
                                                                        </tr>
                                                                    </thead>
                                                                    <tbody>
                                                                        <tr>
                                                                            <td align="center">금액</td>
                                                                            <td align="center"><input type="number" class="qn" id="qsrtInfo_qsrtNo10_no1_6_rsltVl" style="text-align: right; width: 100%"/></td>
                                                                            <td align="center"><input type="number" class="qn" id="qsrtInfo_qsrtNo10_no1_7_rsltVl" style="text-align: right; width: 100%"/></td>
                                                                            <td align="center"><input type="number" class="qn" id="qsrtInfo_qsrtNo10_no1_8_rsltVl" style="text-align: right; width: 100%"/></td>
                                                                            <td align="center"><input type="number" class="qn" id="qsrtInfo_qsrtNo10_no1_9_rsltVl" style="text-align: right; width: 100%"/></td>
                                                                            <td align="center"><input type="number" class="qn" id="qsrtInfo_qsrtNo10_no1_10_rsltVl" style="text-align: right; width: 100%"/></td>
                                                                            <td align="center"><input type="number" class="qn" id="qsrtInfo_qsrtNo10_no1_11_rsltVl" style="text-align: right; width: 100%"/></td>
                                                                        </tr>
                                                                    </tbody>
                                                                </table>

                                                                </div>
                                                            </li>
                                                        </ol>
                                                        
                                                </div>
                                            </div>
                                        <!-- //매출패턴 -->


                        </div>
                        <div class="alert alert-danger" role="alert"  style="display:none">
                                                               <span id="errMsg"></span>
                                    </div>
                                    <div class="row" name="bsDiv" style="margin-top:10px;">
                                        <!-- 현금지출패턴 -->
                                        <div class="col-lg-12">
                                            <div class="col-lg-6 col-lg-offset-6">
                                                 <button type="button" class="btn btn-default" id="initQsrtSave">다시 입력하기</button>
                                                 <button type="button" class="btn btn-primary" id="onQsrtSave">저장</button>
                                            </div>
                                        </div>
                                    </div>
                                    <!--★설문지★---------------------------------------------------------------->
                        
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
                
                 <script src="/bootstrap/thema/fico2000_new/js/app/fin/FIN03201M00Component.js"></script>   

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

                        FIN03201M00.onSearch();
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

