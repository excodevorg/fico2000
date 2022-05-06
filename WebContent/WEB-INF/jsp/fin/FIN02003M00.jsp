<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<%@include file="/inc/common.jsp" %>

            <!--CONTENT CONTAINER-->
            <!--===================================================-->
            <div id="content-container">
                
                <!--Page Title-->
                <!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
                <div id="page-title">
                    <h1 class="page-header text-overflow">재무분석 > 분석 내용 조회</h1>

                    <!--Searchbox-->
                    <div class="searchbox">
                        <div class="input-group custom-search-form">
                            <ul class="pull-right breadcrumb">
                                <li><a href="index.html">Home</a></li>
                                <li>재무분석</li>
                                <li class="active">분석 내용 조회</li>
                            </ul>
                        </div>
                    </div>
                </div>   

                <!--Page content-->
                <!--===================================================-->
                <div id="page-content">
                    
                   <h4 class="text-main pad-btm bord-btm text-center">
                        *기업명: <span class="label label-info text-lg"><span name="entpName"/></span>
                    </h4>
                    
                    
                    <!--분석결과보기-->
                    <!--===================================================-->
                    <div class="tab-base">

                        <!-- Nav tabs -->
                        <ul id="myTab" class="nav nav-tabs">
                            <li><a href="#balanceSheet" data-toggle="tab" class="text-lg">Balance Sheet</a></li>
                            <li><a href="#incomeStatement" data-toggle="tab" class="text-lg">Income Statement</a></li>
                            <li><a href="#cost" data-toggle="tab" class="text-lg">COST</a></li>
                            <li><a href="#sheet2" data-toggle="tab" class="text-lg">부가가치</a></li>
                            <li><a href="#sheet3" data-toggle="tab" class="text-lg">기업 재무비율</a></li>
                            <li><a href="#walltrant" data-toggle="tab" class="text-lg">WALL-TRANT 평가</a></li>
                            <li><a href="#res0" data-toggle="tab" class="text-lg">분석 결과</a></li>
                        </ul>

                        <!-- Tabs Content -->
                        <form id="resultForm" class="form-horizontal" action="#" method="post">
                            <div class="tab-content">
                                <div class="alert alert-danger" role="alert" style="dispaly:none;">
                                    <span id="errMsg"></span>
                                </div> 
                                <!--★BalanceSheet★---------------------------------------------------------------->
                                <div class="tab-pane pad-btm fade" id="balanceSheet">

                                    <div class="row">    

                                        <div class="col-lg-4">
                                            <div class="panel">
                                                <div class="panel-heading">
                                                    <h3 class="panel-title">자산</h3>
                                                </div>

                                                <!--자산-->
                                                <!--===================================================-->
                                                <div class="panel-body">
                                                    ( 회계 년도 : 
                                                    <select name="stacYyInfo" id="stacYyInfo_1" data-width="90%">
                                                        
                                                    </select> )
                                                    <br/>
                                                    <table id="bsTable" class="table  table-condensed">
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
                                        
                                        
                                        <!-- col-lg-3 -->
                                        <div class="col-lg-4">                                                            
                                            <div class="panel">
                                                <div class="panel-heading">
                                                    <h3 class="panel-title">자산 구성비(<span name="stacYyInfoValue"/>)</h3>
                                                </div>
                                                <div class="panel-body">
                                                    <div id="bs-donut" style="width:100%;height:300px"></div>
                                                </div>
                                            </div>
                                        </div>
                                        <!-- col-lg-3 -->
                                        
                                        <!-- 자산구성비연도별 -->
                                        <div class="col-lg-4">                                                            
                                            <div class="panel">
                                                <div class="panel-heading">
                                                    <h3 class="panel-title">자산 구성비(연도별)</h3>
                                                </div>
                                                <div class="panel-body">
                                                    <div id="bs-line" style="width:100%;height:300px;"></div>
                                                </div>
                                            </div>
                                        </div>
                                        <!-- //자산구성비연도별 -->
                                    
                                        <!-- 자산구성비연도별전체항목 -->
                                        <div class="col-lg-8">                                                            
                                            <div class="panel">
                                                <div class="panel-heading">
                                                    <h3 class="panel-title">자산 구성비 (연도별/전체 항목)</h3>
                                                </div>
                                                <div class="panel-body">
                                                    <div id="bs-line2" style="width:100%;height:500px;"></div>
                                                </div>
                                            </div>
                                        </div>
                                        <!-- //자산구성비연도별전체항목 -->
                                    </div>
                                    
                                    <hr class="new-section-sm bord-no">
                                    
                                    <div class="row"> 
                                        
                                        <div class="col-lg-4">
                                            <div class="panel">
                                                <div class="panel-heading">
                                                    <h3 class="panel-title">부채 및 자본</h3>
                                                </div>
                                                <!--자산-->
                                                <!--===================================================-->
                                                <div class="panel-body">
                                                    <table  id="debtTable" class="table  table-condensed">
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

                                        <!-- 부채및자본구성비 -->
                                        <div class="col-lg-4">                                                            
                                            <div class="panel">
                                                <div class="panel-heading">
                                                    <h3 class="panel-title">부채 및 자본 구성비(<span name="stacYyInfoValue"/>)</h3>
                                                </div>
                                                <div class="panel-body">
                                                    <div id="bs-donut2_1" style="width:100%;height:300px"></div>
                                                </div>
                                            </div>
                                        </div>
                                        <!-- //부채및자본구성비 -->
                                        
                                        <!-- 부채및자본구성비연도별 -->
                                        <div class="col-lg-4">                                                            
                                            <div class="panel">
                                                <div class="panel-heading">
                                                    <h3 class="panel-title">부채 및 자본 구성비 (연도별)</h3>
                                                </div>
                                                <div class="panel-body">
                                                    <div id="bs-line2_2" style="width:100%;height:300px;"></div>
                                                </div>
                                            </div>
                                        </div>
                                        <!-- //부채및자본구성비연도별 -->
                                        
                                        <!-- 부채및자본구성비연도별전체항목 -->
                                        <div class="col-lg-8">                                                            
                                            <div class="panel">
                                                <div class="panel-heading">
                                                    <h3 class="panel-title">부채 및 자본 구성비 (연도별/전체 항목)</h3>
                                                </div>
                                                <div class="panel-body">
                                                    <div id="bs-line2_3" style="width:100%;height:450px;"></div>
                                                </div>
                                            </div>
                                        </div>
                                        <!-- //부채및자본구성비연도별전체항목 -->
                                    </div>
                                </div>
                                <!--//★BalanceSheet★---------------------------------------------------------------->
                    
                                <!--★IncomeStatement★---------------------------------------------------------------->
                                <div class="tab-pane pad-btm fade" id="incomeStatement">

                                    <div class="row">    

                                        <div class="col-lg-4">
                                            <div class="panel">
                                                <div class="panel-heading">
                                                    <h3 class="panel-title">매출 및 손익</h3>
                                                </div>
                                                <!--매출-->
                                                <!--===================================================-->
                                                <div class="panel-body">
                                                    ( 회계 년도 : 
                                                    <select name="stacYyInfo" id="stacYyInfo_2" data-width="90%">
                                                        
                                                    </select> )
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
                                                <!--//매출-->                                                
                                            </div>
                                        </div>

                                        <!-- col-lg-3 -->
                                        <div class="col-lg-8">                                                            
                                            <div class="panel">
                                                <div class="panel-heading">
                                                    <h3 class="panel-title">Income Statement 변화(연도별)</h3>
                                                </div>
                                                <div class="panel-body">
                                                    <div id="incomeLine3" style="width:100%;height:300px;"></div>
                                                </div>
                                            </div>
                                        </div>
                                        <!-- col-lg-3 -->
                                        
                                        <!-- col-lg-3 -->
                                        <div class="col-lg-4">                                                            
                                            <div class="panel">
                                                <div class="panel-heading">
                                                    <h3 class="panel-title">Income Statement 구성비(<span name="stacYyInfoValue"/>)</h3>
                                                </div>
                                                <div class="panel-body">
                                                    <div id="incomeDonut" style="width:100%;height:300px"></div>
                                                </div>
                                            </div>
                                        </div>
                                        <!-- col-lg-3 -->
                                        
                                        <!-- col-lg-3 -->
                                        <div class="col-lg-4">                                                            
                                            <div class="panel">
                                                <div class="panel-heading">
                                                    <h3 class="panel-title">Income Statement 매출대비 구성비 (연도별)</h3>
                                                </div>
                                                <div class="panel-body">
                                                    <div id="incomeLine" style="width:100%;height:300px;"></div>
                                                </div>
                                            </div>
                                        </div>
                                        <!-- col-lg-3 -->
                                        
                                        <!-- col-lg-3 -->
                                        <div class="col-lg-8">                                                            
                                            <div class="panel">
                                                <div class="panel-heading">
                                                    <h3 class="panel-title">Income Statement 구성비 (연도별/전체 항목)</h3>
                                                </div>
                                                <div class="panel-body">
                                                    <div id="incomeLine2" style="width:100%;height:550px;"></div>
                                                </div>
                                            </div>
                                        </div>
                                        <!-- col-lg-3 -->  

                                    </div>


                                </div>
                                <!--//★IncomeStatement★---------------------------------------------------------------->

                                <!--★Cost★---------------------------------------------------------------->
                                <div class="tab-pane pad-btm fade" id="cost">

                                    <div class="row">    

                                        <div class="col-lg-4">
                                            <div class="panel">
                                                <div class="panel-heading">
                                                    <h3 class="panel-title">제조원가명세서</h3>
                                                </div>

                                                <!--제조원가명세서-->
                                                <!--===================================================-->
                                                <div class="panel-body">
                                                    ( 회계 년도 : 
                                                    <select name="stacYyInfo" id="stacYyInfo_3" data-width="90%">
                                                    </select> )
                                                    <br/>                                                    
                                                    <table id="costTable" class="table  table-condensed">
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
                                                <!--//제조원가명세서-->                                                
                                            </div>
                                        </div>

                                        <!-- col-lg-3 -->
                                        <div class="col-lg-8">                                                            
                                            <div class="panel">
                                                <div class="panel-heading">
                                                    <h3 class="panel-title">COST 변화(연도별)</h3>
                                                </div>
                                                <div class="panel-body">
                                                    <div id="costLine" style="width:100%;height:300px;"></div>
                                                </div>
                                            </div>
                                        </div>
                                        <!-- col-lg-3 -->

                                    </div>

                                </div>
                                <!--//★Cost★---------------------------------------------------------------->

                                <!--★부가가치★---------------------------------------------------------------->
                                <div class="tab-pane pad-btm fade" id="sheet2">

                                    <div class="row">    

                                        <div class="col-lg-4">
                                            <div class="panel">
                                                <div class="panel-heading">
                                                    <h3 class="panel-title">부가가치</h3>
                                                </div>

                                                <!--부가가치-->
                                                <!--===================================================-->
                                                <div class="panel-body">
                                                    ( 회계 년도 : 
                                                    <select name="stacYyInfo" id="stacYyInfo_4" data-width="90%">
                                                    </select> )
                                                    <br/>
                                                    <table id="addValueTable" class="table  table-condensed">
                                                        <thead>
                                                            <tr>
                                                                <th>항목</th>
                                                                <th>금액(<span name="amtUnitNm"/>)</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr class="active">
                                                                <td>법인세차감전 순이익</td>
                                                                <td>{{ getAddValueTotal('FAS030401') }}</td>
                                                            </tr>
                                                            <tr class="active">
                                                                <td>인건비</td>
                                                                <td>{{ getAddValueTotal('FAS030402') }}</td>
                                                            </tr>
                                                            <tr *ngFor="let fin of FAS03040201s; let i=index;">
                                                                <td>{{fin.finSmdcdNm}}</td>
                                                                <td>{{onNumberWithCommas(fin.finAmt)}}</td>
                                                            </tr>
                                                            <tr class="active">
                                                                <td>금융비용</td>
                                                                <td>{{ getAddValueTotal('FAS030403') }}</td>
                                                            </tr>
                                                            <tr *ngFor="let fin of FAS03040301s; let i=index;">
                                                                <td>{{fin.finSmdcdNm}}</td>
                                                                <td>{{onNumberWithCommas(fin.finAmt)}}</td>
                                                            </tr>
                                                            <tr class="active">
                                                                <td>임차료</td>
                                                                <td>{{ getAddValueTotal('FAS030404') }}</td>
                                                            </tr>
                                                            <tr *ngFor="let fin of FAS03040401s; let i=index;">
                                                                <td>{{fin.finSmdcdNm}}</td>
                                                                <td>{{onNumberWithCommas(fin.finAmt)}}</td>
                                                            </tr>
                                                            <tr class="active">
                                                                <td>조세공과(법인세 제외)</td>
                                                                <td>{{ getAddValueTotal('FAS030405') }}</td>
                                                            </tr>
                                                            <tr *ngFor="let fin of FAS03040501s; let i=index;">
                                                                <td>{{fin.finSmdcdNm}}</td>
                                                                <td>{{onNumberWithCommas(fin.finAmt)}}</td>
                                                            </tr>
                                                            <tr class="active">
                                                                <td>감가상각비</td> 
                                                                <td>{{ getAddValueTotal('FAS030406') }}</td>
                                                            </tr>
                                                            <tr *ngFor="let fin of FAS03040601s; let i=index;">
                                                                <td>{{fin.finSmdcdNm}}</td>
                                                                <td>{{onNumberWithCommas(fin.finAmt)}}</td>
                                                            </tr>
                                                            <tr class="active">
                                                                <td>부가가치 합계</td> 
                                                                <td>{{ getAddValueTotal('FAS0304') }}</td>
                                                            </tr>
                                                        </tbody>
                                                    </table>                                              
                                                </div>
                                                <!--===================================================-->
                                                <!--//부가가치-->                                                
                                            </div>
                                        </div>

                                        <!-- col-lg-3 -->
                                        <div class="col-lg-8">                                                            
                                            <div class="panel">
                                                <div class="panel-heading">
                                                    <h3 class="panel-title">부가가치 변화(연도별)</h3>
                                                </div>
                                                <div class="panel-body">
                                                    <div id="addValueLine" style="width:100%;height:300px;"></div>
                                                </div>
                                            </div>
                                        </div>
                                        <!-- col-lg-3 -->


                                    </div>

                                </div>
                                <!--//★부가가치★---------------------------------------------------------------->

                                <!--★기업재무비율★---------------------------------------------------------------->
                                <div class="tab-pane pad-btm fade" id="sheet3">

                                    <div class="row">    

                                        <div class="col-lg-4">
                                            <div class="panel">
                                                <div class="panel-heading">
                                                    <h3 class="panel-title"><span name="entpName"/> 재무비율</h3>                          
                                                </div>
                                                <!--부가가치-->
                                                <!--===================================================-->
                                                <div class="panel-body">
                                                    ( 기준년도 : 
                                                    <select name="stacYyInfo01" onChange="onStacYyChange01(event)" data-width="90%">
                                                    </select> )
                                                    <br/>                                                    
                                                    <table id="finRatioTable" class="table  table-condensed">
                                                        <thead>
                                                            <tr>
                                                                <th>항목</th>
                                                                <th>비율</th>
                                                            </tr>
                                                        </thead>
                                                            <tr class="active text-lg text-center">
                                                                <td colspan="2">*성장성</td>
                                                            </tr>
                                                            <tr class="active text-lg text-center">
                                                                <td colspan="2">*안전성</td>
                                                            </tr>
                                                            <tr class="active text-lg text-center">
                                                                <td colspan="2">*수익성</td>
                                                            </tr>
                                                            <tr class="active text-lg text-center">
                                                                <td colspan="2">*생산성</td>
                                                            </tr>
                                                            <tr class="active text-lg text-center">
                                                                <td colspan="2">*활동성</td>
                                                            </tr>
                                                            <tr class="active">
                                                                <td>&nbsp;</td>
                                                                <td>&nbsp;</td>
                                                            </tr>
                                                            <tr class="active">
                                                                <td>&nbsp;</td>
                                                                <td>&nbsp;</td>
                                                            </tr>                                                        
                                                        <tbody>                                                            
                                                        </tbody>
                                                    </table>
                                                </div> 
                                                <!--===================================================-->
                                                <!--//기업재무비율-->                                                
                                            </div>
                                        </div>

                                        <div class="col-lg-4">
                                            <div class="panel">
                                                <div class="panel-heading">
                                                    <h3 class="panel-title"><spane name="tpbsClsfDcdNm"/> 표준재무비율 (<span name="enslDcdNm"/>) </h3>                          
                                                </div>
                                                <!--부가가치-->
                                                <!--===================================================-->
                                                <div class="panel-body">
                                                    ( 기업규모 : <input type="radio" name="enslDcd"  value="M" onClick="onRadioClick('M')"> 중소기업 <input type="radio" name="enslDcd" value="L" onClick="onRadioClick('L')"> 대기업  
                                                    , 최신 : <input type="checkbox" name="isLastest" onClick="onCheckChange(event)"> )
                                                    <br/>                                                    
                                                    <table id="finRatioTable01" class="table  table-condensed">
                                                        <thead>
                                                            <tr>
                                                                <th>항목</th>
                                                                <th>비율</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr class="active text-lg text-center">
                                                                <td colspan="2">*성장성</td>
                                                            </tr>
                                                            <tr class="active text-lg text-center">
                                                                <td colspan="2">*안전성</td>
                                                            </tr>
                                                            <tr class="active text-lg text-center">
                                                                <td colspan="2">*수익성</td>
                                                            </tr>
                                                            <tr class="active text-lg text-center">
                                                                <td colspan="2">*생산성</td>
                                                            </tr>
                                                            <tr class="active text-lg text-center">
                                                                <td colspan="2">*활동성</td>
                                                            </tr>
                                                            <tr class="active">
                                                                <td>&nbsp;</td>
                                                                <td>&nbsp;</td>
                                                            </tr>
                                                            <tr class="active">
                                                                <td>&nbsp;</td>
                                                                <td>&nbsp;</td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div> 
                                                <!--===================================================-->
                                                <!--//기업재무비율-->                                                
                                            </div>
                                        </div>

                                        <div class="col-lg-4">
                                            <div class="panel">
                                                <div class="panel-heading">
                                                    <h3 class="panel-title"><spane name="tpbsClsfDcdNm"/> 표준재무비율(전체)</h3>                          
                                                </div>
                                                <!--부가가치-->
                                                <!--===================================================-->
                                                <div class="panel-body">
                                                    ( 최신 : <input type="checkbox" name="isLastest" onClick="onCheckChange(event)"> )
                                                    <br/>                                                 
                                                    <table id="finRatioTable02" class="table  table-condensed">
                                                        <thead>
                                                            <tr>
                                                                <th>항목</th>
                                                                <th>비율</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr class="active text-lg text-center">
                                                                <td colspan="2">*성장성</td>
                                                            </tr>
                                                            <tr class="active text-lg text-center">
                                                                <td colspan="2">*안전성</td>
                                                            </tr>
                                                            <tr class="active text-lg text-center">
                                                                <td colspan="2">*수익성</td>
                                                            </tr>
                                                            <tr class="active text-lg text-center">
                                                                <td colspan="2">*생산성</td>
                                                            </tr>
                                                            <tr class="active text-lg text-center">
                                                                <td colspan="2">*활동성</td>
                                                            </tr>
                                                            <tr class="active">
                                                                <td>&nbsp;</td>
                                                                <td>&nbsp;</td>
                                                            </tr>
                                                            <tr class="active">
                                                                <td>&nbsp;</td>
                                                                <td>&nbsp;</td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div> 
                                                <!--===================================================-->
                                                <!--//기업재무비율-->                                                
                                            </div>
                                        </div>

                                    </div>

                                </div>
                                <!--//★기업재무비율★---------------------------------------------------------------->
                                
                                <!--★WALL-TRANT★---------------------------------------------------------------->
                                <div class="tab-pane pad-btm fade" id="walltrant">

                                    <div class="row">
                                        <div class="col-lg-4">
                                            <div class="panel">
                                                <div class="panel-heading">
                                                    <h3 class="panel-title">WALL TRANT</h3>
                                                </div>
                                                <!--WALL-TRANT-->
                                                <!--===================================================-->
                                                <div class="panel-body">
                                                    ( 기준 년도 : 
                                                    <select name="stacYyInfo02" onChange="onStacYyChange02(event)" data-width="90%">
                                                    </select> ) 최신 : <input type="checkbox" name="isLastest" onClick="onCheckChange(event)">
                                                    <br/>                                                    
                                                    <table id="wallTrantTable" class="table table-condensed">
                                                        <thead>
                                                            <tr>
                                                                <th>항목</th>
                                                                <th colspan="2">비율</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            
                                                        </tbody>
                                                    </table>
                                                </div>
                                                <!--===================================================-->
                                                <!--//기업재무비율-->                                                
                                            </div>
                                        </div>
                                        
                                        <div class="col-lg-8">
                                            <div class="panel">
                                                <div class="panel-heading">
                                                    <h3 class="panel-title">WALL TRANT</h3>
                                                </div>
                                                <div class="panel-body">
                                                    <div id="wallTrantBar" style="height:212px"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                                <!--//★기업재무비율★---------------------------------------------------------------->

                                <!--★분석결과★---------------------------------------------------------------->
                                <div class="tab-pane pad-btm fade" id="res0">

                                    <div class="row">    

                                        <div class="col-lg-4">
                                            <div class="panel">
                                                <div class="panel-heading">
                                                    <h3 class="panel-title">재무진단 현황 (<span name="enslDcdNm"/>)</h3>
                                                </div>
                                                <!--자산-->
                                                <!--===================================================-->
                                                <div class="panel-body">
                                                    ( 기준 년도 : 
                                                    <select name="stacYyInfo03" onChange="onStacYyChange03(event)" data-width="90%">
                                                    </select> ) 최신 : <input type="checkbox" name="isLastest" onClick="onCheckChange(event)">
                                                    <br/>                                                    
                                                    <table id="decisionRatioTable" class="table table-condense">
                                                        <thead>
                                                            <tr>
                                                                <th class="text-center">항목</th>
                                                                <th class="text-center">결과</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr class="active text-lg text-center">
                                                                <td colspan="2">*성장성</td>
                                                            </tr>
                                                            <tr class="active text-lg text-center">
                                                                <td colspan="2">*안전성</td>
                                                            </tr>
                                                            <tr class="active text-lg text-center">
                                                                <td colspan="2">*수익성</td>
                                                            </tr>
                                                            <tr class="active text-lg text-center">
                                                                <td colspan="2">*생산성</td>
                                                            </tr>
                                                            <tr class="active text-lg text-center">
                                                                <td colspan="2">*활동성</td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                                <!--===================================================-->
                                                <!--//자산-->                                                
                                            </div>
                                        </div>

                                        <div class="col-lg-4">
                                            <div class="panel">
                                                <div class="panel-heading">
                                                    <h3 class="panel-title">재무진단 현황(전체)</h3>
                                                </div>
                                                <!--자산-->
                                                <!--===================================================-->
                                                <div class="panel-body">
                                                    ( 기준 년도 : 
                                                    <select name="stacYyInfo03" onChange="onStacYyChange03(event)" data-width="90%">
                                                    </select> ) 최신 : <input type="checkbox" name="isLastest" onClick="onCheckChange(event)">
                                                    <br/>                                                    
                                                    <table id="decisionRatioTable01" class="table table-condense">
                                                        <thead>
                                                            <tr>
                                                                <th class="text-center">항목</th>
                                                                <th class="text-center">결과</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr class="active text-lg text-center">
                                                                <td colspan="2">*성장성</td>
                                                            </tr>
                                                            <tr class="active text-lg text-center">
                                                                <td colspan="2">*안전성</td>
                                                            </tr>
                                                            <tr class="active text-lg text-center">
                                                                <td colspan="2">*수익성</td>
                                                            </tr>
                                                            <tr class="active text-lg text-center">
                                                                <td colspan="2">*생산성</td>
                                                            </tr>
                                                            <tr class="active text-lg text-center">
                                                                <td colspan="2">*활동성</td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                                <!--===================================================-->
                                                <!--//자산-->                                                
                                            </div>
                                        </div>

                                    </div>
                                    
                                    <hr class="new-section-sm bord-no">
                                </div>
                                <!--//★분석결과★---------------------------------------------------------------->                                

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
<script src="/bootstrap/thema/fico2000/js/app/adm/codeMng.service.js"></script>
<script src="/bootstrap/thema/fico2000/js/app/fin/fin.services.js"></script>
<!--Demo script [ DEMONSTRATION ]-->
<script src="/bootstrap/thema/fico2000/js/demo/nifty-demo.min.js"></script>

<script src="./bootstrap/thema/fico2000/plugins/morris-js/morris.min.js"></script>
<script src="./bootstrap/thema/fico2000/plugins/morris-js/raphael-js/raphael.min.js"></script>
<script src="./bootstrap/thema/fico2000/plugins/flot-charts/jquery.flot.min.js"></script>
<script src="./bootstrap/thema/fico2000/plugins/flot-charts/jquery.flot.resize.min.js"></script>

<!--Flot Pie Chart [ OPTIONAL ]-->
<script src="./bootstrap/thema/fico2000/plugins/flot-charts/jquery.flot.pie.min.js"></script>
<!--Easy Pie Chart [ OPTIONAL ]-->
<script src="./bootstrap/thema/fico2000/plugins/easy-pie-chart/jquery.easypiechart.min.js"></script>


<!--Form Wizard [ SAMPLE ]-->
<script src="/bootstrap/thema/fico2000/js/demo/form-wizard.js"></script>
<script src="/bootstrap/thema/fico2000/js/app/fin/FIN02003M00Component.js"></script>   
