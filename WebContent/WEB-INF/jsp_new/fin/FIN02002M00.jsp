<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<%@include file="/inc/common.jsp" %>

            <!--CONTENT CONTAINER-->
            <!--===================================================-->
            <div id="content-container">
                
                <!--Page Title-->
                <!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
                <div id="page-title">
                    <h1 class="page-header text-overflow">기업관리 > 재무 분석 > 재무 정보</h1>

                    <!--Searchbox-->
                    <div class="searchbox">
                        <div class="input-group custom-search-form">
                            <ul class="pull-right breadcrumb">
                                <li><a href="index.html">Home</a></li>
                                <li>재무컨설팅</li>
                                <li class="active">재무분석</li>
                            </ul> 
                        </div>
                    </div>
                </div>
                

                <!--Page content-->
                <!--===================================================-->
                <div id="page-content">
                    
                    <h4 class="text-main pad-btm bord-btm text-center">
                        *기업명: <span class="label label-info text-lg"><span id="entpName"/></span>
                        &nbsp;&nbsp;&nbsp;
                        *연도: <span class="label label-info text-lg"><span id="stacYy"/></span>
                    </h4>
                    
					<div class="panel">
					    <div class="eq-height clearfix">
					        <div class="col-md-12 eq-box-md eq-no-panel">
					
					            <!-- Main Form Wizard -->
					            <!--===================================================-->
					            <div id="demo-main-wz">
					
					                <!--nav-->
					                <ul class="row wz-step wz-icon-bw wz-nav-off mar-top">
					                    <li class="col-xs-3">
					                        <a data-toggle="tab" href="#demo-main-tab1">
					                            <span class="text-danger"><i class="demo-pli-file-add icon-2x"></i></span>
					                            <p class="text-semibold mar-no text-lg">Balance Sheet</p>
					                        </a>
					                    </li>
					                    <li class="col-xs-3">
					                        <a data-toggle="tab" href="#demo-main-tab2">
					                            <span class="text-warning"><i class="demo-pli-file-add icon-2x"></i></span>
					                            <p class="text-semibold mar-no text-lg">Income Statement</p>
					                        </a>
					                    </li>
					                    <li class="col-xs-3">
					                        <a data-toggle="tab" href="#demo-main-tab3">
					                            <span class="text-info"><i class="demo-pli-file-add icon-2x"></i></span>
					                            <p class="text-semibold mar-no text-lg">Cost</p>
					                        </a>
					                    </li>
                                        <li class="col-xs-3">
					                        <a data-toggle="tab" href="#demo-main-tab4">
					                            <span class="text-warning"><i class="demo-pli-add-user-plus-star icon-2x"></i></span>
					                            <p class="text-semibold mar-no text-lg">Added Value</p>
					                        </a>
					                    </li>
                                        
					                </ul>
					
					                <!--progress bar-->
					                <div class="progress progress-xs">
					                    <div class="progress-bar progress-bar-primary"></div>
					                </div>
					
					
					                <!--form-->
					                <form class="form-horizontal">
                                        
                                        
					                    <div class="panel-body" style="background-color:#f6f8fa;">
					                        <div class="tab-content">
					
					                            <!--First tab-->
					                            <!--BalanceSheet------------------------------------------------------------------------------>
					                            <div id="demo-main-tab1" class="tab-pane">

                                                    <div class="row">
                                                        <div class="pull-right pad-rgt mar-btm">
                                                        <button type="button" class="previous btn btn-default">Previous</button>
                                                        <button type="button" class="next btn btn-default">Next</button>
                                                        <button type="button" class="finish btn btn-primary" id="onSave1" disabled>Finish</button>
                                                        </div>
                                                    </div>

                                                   <div class="alert alert-danger" role="alert" style="display: none">
                                                                 <span id="errMsg"></span> 
                                                    </div>         

                                                    <div class="row">     
                                                        <div class="col-lg-1"></div>
                                                        
                                                        <!-- col-lg-6 -->
                                                        <div class="col-lg-6">

                                                            <!-- FORM VALIDATION ON TABS -->
                                                            <!--===================================================-->
                                                            <div class="tab-base">
                                                                <!-- Nav tabs -->
                                                                <ul class="nav nav-tabs">
                                                                    <li class="active"><a href="#demo-bsc-tab-1" data-toggle="tab">유동자산</a></li>
                                                                    <li><a href="#demo-bsc-tab-2" data-toggle="tab">비유동자산</a></li>
                                                                    <li><a href="#demo-bsc-tab-3" data-toggle="tab">유동부채</a></li>
                                                                    <li><a href="#demo-bsc-tab-4" data-toggle="tab">비유동부채</a></li>
                                                                    <li><a href="#demo-bsc-tab-5" data-toggle="tab">자본</a></li>
                                                                </ul>

                                                                <!-- Tabs Content -->
                                                                <form id="demo-bv-bsc-tabs" class="form-horizontal" action="#" method="post" novalidate>
                                                                    <div class="tab-content">
                                                                        
                                                                        <!--★유동자산★---------------------------------------------------------------->
                                                                        <div class="tab-pane pad-btm fade in active" id="demo-bsc-tab-1">
                                                                            
                                                                            <!--당좌자산---------------------------------------------------------------->
                                                                            <p class="text-main text-bold">*당좌자산(단위 : <span name="amtUnitNm"/>)</p>
                                                                            <hr>
                                                                            <div class="form-group">
                                                                                <span id="FAS03010101s"/>
                                                                            </div>
                                                                            <!--//당좌자산---------------------------------------------------------------->
                                                                            
                                                                            <!--재고자산---------------------------------------------------------------->
                                                                            <hr class="new-section-sm bord-no">
                                                                            <p class="text-main text-bold">*재고자산(단위 : <span name="amtUnitNm"/>)</p>
                                                                            <hr>
                                                                            <div class="form-group">
                                                                                <span id="FAS03010102s"/>
                                                                            </div>
                                                                            <!--//재고자산---------------------------------------------------------------->
                                                                        </div>
                                                                        <!--//★유동자산★---------------------------------------------------------------->
                                                                        
                                                                        <!--★비유동자산★---------------------------------------------------------------->
                                                                        <div class="tab-pane fade" id="demo-bsc-tab-2">                                     
                                                                            <!--투자자산---------------------------------------------------------------->
                                                                            <p class="text-main text-bold">*투자자산(단위 : <span name="amtUnitNm"/>)</p>
                                                                            <hr>
                                                                            <div class="form-group">
                                                                                <span id="FAS03010201s"/>
                                                                            </div>

                                                                            <div class="form-group">
                                                                                <label class="col-lg-4 control-label"></label>
                                                                                <div class="col-lg-6">
                                                                                  ※ 투자유가증권 금액은 투자자산중 투자유가증권 금액 표기
                                                                                </div>
                                                                            </div>
                                                                            
                                                                            <!--//투자자산---------------------------------------------------------------->
                                                                            
                                                                            <!--유형자산---------------------------------------------------------------->
                                                                            <hr class="new-section-sm bord-no">
                                                                            <p class="text-main text-bold">*유형자산(단위 : <span name="amtUnitNm"/>)</p>
                                                                            <hr>
                                                                            <div class="form-group">
                                                                                <span id="FAS03010202s"/>
                                                                            </div>                                                                 
                                                                            <!--//유형자산---------------------------------------------------------------->
                                                                            
                                                                            <!--무형자산---------------------------------------------------------------->
                                                                            <hr class="new-section-sm bord-no">
                                                                            <p class="text-main text-bold">*무형자산(단위 : <span name="amtUnitNm"/>)</p>
                                                                            <hr>
                                                                            <div class="form-group">
                                                                                <span id="FAS03010203s"/>
                                                                            </div>
                                                                            <hr class="new-section-sm bord-no">
                                                                            <!--//무형자산---------------------------------------------------------------->

                                                                            <!--무형자산---------------------------------------------------------------->
                                                                            <hr class="new-section-sm bord-no">
                                                                            <p class="text-main text-bold">*기타비유동자산(단위 : <span name="amtUnitNm"/>)</p>
                                                                            <hr>
                                                                            <div class="form-group">
                                                                                <span id="FAS03010204s"/>
                                                                            </div>
                                                                            <hr class="new-section-sm bord-no">
                                                                            <!--//무형자산---------------------------------------------------------------->

                                                                        </div>
                                                                        <!--//★비유동자산★---------------------------------------------------------------->
                                                                        
                                                                        <!--★유동부채★---------------------------------------------------------------->
                                                                        <div class="tab-pane fade" id="demo-bsc-tab-3">
                                                                            
                                                                            <p class="text-main text-bold">*유동부채(단위 :  <span name="amtUnitNm"/>)</p>
                                                                            <hr>
                                                                            <div class="form-group">
                                                                                <span id="FAS03010301s"/>
                                                                            </div>
                                                                            <hr class="new-section-sm bord-no">
                                                                        </div>
                                                                        <!--//★유동부채★---------------------------------------------------------------->
                                                                                                                                                
                                                                        <!--★비유동부채★---------------------------------------------------------------->
                                                                        <div class="tab-pane fade" id="demo-bsc-tab-4">
                                                                            
                                                                            <p class="text-main text-bold">*비유동부채(단위 : <span name="amtUnitNm"/>)</p>
                                                                            <hr>
                                                                            <div class="form-group">
                                                                                <span id="FAS03010401s"/>
                                                                            </div>
                                                                            <hr class="new-section-sm bord-no">
                                                                        </div>
                                                                        <!--//★비유동부채★---------------------------------------------------------------->
                                                                        
                                                                        <!--★자본★---------------------------------------------------------------->
                                                                        <div class="tab-pane fade" id="demo-bsc-tab-5">
                                                                            
                                                                            <p class="text-main text-bold">*자본(단위 : <span name="amtUnitNm"/>)</p>
                                                                            <hr>
                                                                            <div class="form-group">
                                                                                <span id="FAS03010501s"/>
                                                                            </div>
                                                                            <hr class="new-section-sm bord-no">
                                                                        </div>
                                                                        <!--//★자본★---------------------------------------------------------------->
                                                                        
                                                                        <div class="tab-footer clearfix">
                                                                            <div class="col-lg-6 col-lg-offset-6">
                                                                                <button type="button" class="btn btn-default" id="initFAS0301">다시 입력하기</button>
                                                                                <button type="button" class="btn btn-primary" id="saveFAS0301">저장</button>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </form>
                                                            </div>
                                                            <!--===================================================-->
                                                            <!-- END FORM VALIDATION ON TABS -->
                                                    
                                                        </div>
                                                        <!-- //col-lg-6 -->
                                                        
                                                        <div class="col-lg-1"></div>
                                                        
                                                        <!-- col-lg-6 -->
                                                        <div class="col-lg-3">
                                                            
                                                            <div class="panel">
                                                                <div class="panel-heading">
                                                                    <h3 class="panel-title">자동 합계(단위 : <span name="amtUnitNm"/>)</h3>
                                                                </div>

                                                                <form id="demo-bvd-notempty" action="forms-validation.html" class="form-horizontal">
                                                                    <div class="panel-body">
                                                                        
                                                                        <!--자산총계-->
                                                                        <h4>* 자산</h4>
                                                                        <table class="table table-striped">
                                                                            <thead>
                                                                                <tr>
                                                                                    <td>항목</td>
                                                                                    <td>합계</td>
                                                                                </tr>
                                                                            </thead>
                                                                            <tbody>
                                                                                <tr>
                                                                                    <td>유동자산</td>
                                                                                    <td><span id="BsTotal_FAS030101"/></td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td>비유동자산</td>
                                                                                    <td><span id="BsTotal_FAS030102"/></td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td>(감가상각비)</td>
                                                                                    <td><span id="BsTotal_FAS030101G"/></td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td class="text-primary">자산총계</td>
                                                                                    <td><span id="BsTotal_FAS030101T"/></td>
                                                                                </tr>
                                                                            </tbody>
                                                                        </table>
                                                                        <!--//자산총계-->
                                                                        
                                                                        <hr class="new-section-sm bord-no">
                                                                        
                                                                        <!--부채및자본합계-->
                                                                        <h4>* 부채 및 자본</h4>
                                                                        <table class="table table-striped">
                                                                            <thead>
                                                                                <tr>
                                                                                    <td>항목</td>
                                                                                    <td>합계</td>
                                                                                </tr>
                                                                            </thead>
                                                                            <tbody>
                                                                                <tr>
                                                                                    <td>유동부채</td>
                                                                                    <td><span id="BsTotal_FAS030103"/></td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td>비유동부채</td>
                                                                                    <td><span id="BsTotal_FAS030104"/></td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td>자본</td>
                                                                                    <td><span id="BsTotal_FAS030105"/></td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td class="text-primary">부채및자본합계</td>
                                                                                    <td><span id="BsTotal_FAS030103T"/></td>
                                                                                </tr>
                                                                            </tbody>
                                                                        </table>
                                                                        <!--//부채및자본합계-->
                                                                    </div>
                                                                </form>
                                                            </div>
                                                            
                                                        </div>
                                                        <!-- //col-lg-6 -->
                                                    </div>
					                            
                                                </div>
					                            <!--//BalanceSheet---------------------------------------------------------------------------->
                                                
					                            <!--IncomeStatement-------------------------------------------------------------------------->
					                            <div id="demo-main-tab2" class="tab-pane fade">
					                                
                                                    <div class="row">
                                                        <div class="pull-right pad-rgt mar-btm">
                                                        <button type="button" class="previous btn btn-default">Previous</button>
                                                        <button type="button" class="next btn btn-default">Next</button>
                                                        <button type="button" class="finish btn btn-primary" id="onSave2" disabled>Finish</button>
                                                    </div>
                                                    </div>
                                                    <div class="row">   
                                                        <div class="col-lg-1"></div>
                                                        
                                                        <!--IncomeStatement-->
                                                        <div class="col-lg-6">

                                                            <!-- FORM VALIDATION ON TABS -->
                                                            <!--===================================================-->
                                                            <div class="tab-base">
                                                                <!-- Nav tabs -->
                                                                <ul class="nav nav-tabs">
                                                                    <li class="active"><a href="#demo-income-tab-1" data-toggle="tab">매출</a></li>
                                                                    <li><a href="#demo-income-tab-2" data-toggle="tab">판매비와 관리비</a></li>
                                                                    <li><a href="#demo-income-tab-3" data-toggle="tab">영업 외 수익</a></li>
                                                                    <li><a href="#demo-income-tab-4" data-toggle="tab">영업 외 비용</a></li>
                                                                    <li><a href="#demo-income-tab-5" data-toggle="tab">법인세</a></li>
                                                                </ul>

                                                                <!-- Tabs Content -->
                                                                <form id="demo-bv-bsc-tabs" class="form-horizontal" action="#" method="post">
                                                                    <div class="tab-content">
                                                                        
                                                                        <!--★매출★---------------------------------------------------------------->
                                                                        <div class="tab-pane pad-btm fade in active" id="demo-income-tab-1">
                                                                            <p class="text-main text-bold">*매출(단위 : <span name="amtUnitNm"/>)</p>
                                                                            <hr>
                                                                            <div class="form-group">
                                                                                <span id="FAS03020101s"/>
                                                                            </div>
                                                                        </div>
                                                                        <!--//★매출★---------------------------------------------------------------->
                                                                        
                                                                        <!--★판매비와관리비★---------------------------------------------------------------->
                                                                        <div class="tab-pane fade" id="demo-income-tab-2">
                                                                            
                                                                            <p class="text-main text-bold">*판매비와관리비(단위 : <span name="amtUnitNm"/>)</p>
                                                                            <hr>
                                                                            <div class="form-group">
                                                                                <span id="FAS03020201s"/>
                                                                            </div>
                                                                            
                                                                            <hr class="new-section-sm bord-no">
                                                                        </div>
                                                                        <!--//★판매비와관리비★---------------------------------------------------------------->
                                                                        
                                                                        <!--★영업외수익★---------------------------------------------------------------->
                                                                        <div class="tab-pane fade" id="demo-income-tab-3">
                                                                            
                                                                            <p class="text-main text-bold">*영업 외 수익(단위 : <span name="amtUnitNm"/>)</p>
                                                                            <hr>
                                                                            <div class="form-group">
                                                                                <span id="FAS03020301s"/>
                                                                            </div>
                                                                            
                                                                            <hr class="new-section-sm bord-no">
                                                                        </div>
                                                                        <!--//★유동부채★---------------------------------------------------------------->
                                                                                                                                                
                                                                        <!--★영업외비용★---------------------------------------------------------------->
                                                                        <div class="tab-pane fade" id="demo-income-tab-4">
                                                                            
                                                                            <p class="text-main text-bold">*영업 외 비용(단위 : <span name="amtUnitNm"/>)</p>
                                                                            <hr>
                                                                            <div class="form-group">
                                                                                <span id="FAS03020401s"/>
                                                                            </div>
                                                                            <hr class="new-section-sm bord-no">
                                                                        </div>
                                                                        <!--//★비유동부채★---------------------------------------------------------------->
                                                                        
                                                                        <!--★법인세★---------------------------------------------------------------->
                                                                        <div class="tab-pane fade" id="demo-income-tab-5">
                                                                            
                                                                            <p class="text-main text-bold">*법인세(단위 : <span name="amtUnitNm"/>)</p>
                                                                            <hr>
                                                                            <div class="form-group" *ngFor="let fin of FAS03020501s; let i=index;">
                                                                                <span id="FAS03020501s"/>
                                                                            </div>
                                                                            <hr class="new-section-sm bord-no">
                                                                        </div>
                                                                        <!--//★자본★---------------------------------------------------------------->
                                                                        
                                                                        <div class="tab-footer clearfix">
                                                                            <div class="col-lg-6 col-lg-offset-6">
                                                                                <button type="button" class="btn btn-default" id="initFAS0302">다시 입력하기</button>
                                                                                <button type="button" class="btn btn-primary" id="saveFAS0302">저장</button>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </form>
                                                            </div>
                                                            <!--===================================================-->
                                                            <!-- END FORM VALIDATION ON TABS -->
                                                    
                                                        </div>
                                                        <!-- //col-lg-6 -->
                                                        
                                                        <div class="col-lg-1"></div>
                                                        
                                                        <!--자동합계--------------------------------------------------------->
                                                        <div class="col-lg-3">
                                                            
                                                            <div class="panel">
                                                                <div class="panel-heading">
                                                                    <h3 class="panel-title">자동 합계(단위 : <span name="amtUnitNm"/>)</h3>
                                                                </div>

                                                                <form id="demo-bvd-notempty" action="#" class="form-horizontal">
                                                                    <div class="panel-body">
                                                                        
                                                                        <table class="table table-striped">
                                                                            <thead>
                                                                                <tr>
                                                                                    <td>항목</td>
                                                                                    <td>합계</td>
                                                                                </tr>
                                                                            </thead>
                                                                            <tbody>
                                                                                <tr>
                                                                                    <td>매출액</td>
                                                                                    <td><span id="IncomeTotal_FAS0302010101"/></td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td>매출 원가</td>
                                                                                    <td><span id="IncomeTotal_FAS0302010102"/></td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td>매출 총 손익</td>
                                                                                    <td><span id="IncomeTotal_amslTtalPlAmt"/></td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td>판매비와 관리비</td>
                                                                                    <td><span id="IncomeTotal_FAS03020201"/></td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td>영업 손익</td>
                                                                                    <td><span id="IncomeTotal_bsopPlAmt"/></td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td>영업 외 수익</td>
                                                                                    <td><span id="IncomeTotal_FAS03020301"/></td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td>영업 외 비용</td>
                                                                                    <td><span id="IncomeTotal_FAS03020401"/></td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td>법인세 차감 전 순손익</td>
                                                                                    <td><span id="IncomeTotal_crtxSbbfNtprAmt"/></td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td>법인세 비용</td>
                                                                                    <td><span id="IncomeTotal_FAS03020501"/></td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td>당기순손익</td>
                                                                                    <td><span id="IncomeTotal_crtrNtPlAmt"/></td>
                                                                                </tr>
                                                                                
                                                                            </tbody>
                                                                        </table>
                                                                    </div>
                                                                </form>
                                                            </div>
                                                            
                                                        </div>
                                                        <!--//자동합계--------------------------------------------------------->
                                                    </div>                                                    
					                            </div>
					                            <!--//IncomeStatement------------------------------------------------------------------------->
                                                
					                            <!--COST-------------------------------------------------------------------------------------->
					                            <div id="demo-main-tab3" class="tab-pane">
					                                <div class="row">
                                                        <div class="pull-right pad-rgt mar-btm">
                                                        <button type="button" class="previous btn btn-default">Previous</button>
                                                        <button type="button" class="next btn btn-default">Next</button>
                                                        <button type="button" class="finish btn btn-primary" id="onSave3" disabled>Finish</button>
                                                        </div>
                                                    </div>
                                                    <div class="row">    
                                                        
                                                        <div class="col-lg-1"></div>
                                                        
                                                        <!--제조원가입력--------------------------------------------------------->
                                                        <div class="col-lg-6">

                                                            <!-- FORM VALIDATION ON TABS -->
                                                            <!--===================================================-->
                                                            <div class="tab-base">
                                                                <!-- Nav tabs -->
                                                                <ul class="nav nav-tabs">
                                                                    <li class="active"><a href="#demo-cost-tab-1" data-toggle="tab">당기총제조비용</a></li>
                                                                    <li><a href="#demo-cost-tab-2" data-toggle="tab">경비</a></li>
                                                                    <li><a href="#demo-cost-tab-3" data-toggle="tab">기타</a></li>
                                                                </ul>

                                                                <!-- Tabs Content -->
                                                                <form id="demo-bv-bsc-tabs" class="form-horizontal" action="#" method="post">
                                                                    <div class="tab-content">

                                                                         <!--★당기총제조비용★---------------------------------------------------------------->
                                                                        <div class="tab-pane pad-btm fade in active" id="demo-cost-tab-1">
                                                                            
                                                                            <p class="text-main text-bold">*당기총제조비용(단위 : <span name="amtUnitNm"/>)</p>
                                                                            <hr>
                                                                            <div class="form-group">
                                                                                <span id="FAS03030101s"/>
                                                                            </div>
                                                                            
                                                                            <hr class="new-section-sm bord-no">
                                                                        </div>
                                                                        <!--//★당기총제조비용★---------------------------------------------------------------->
                                                                        
                                                                        <!--★경비★---------------------------------------------------------------->
                                                                        <div class="tab-pane fade" id="demo-cost-tab-2">
                                                                            
                                                                            <p class="text-main text-bold">*경비(단위 : <span name="amtUnitNm"/>)</p>
                                                                            <hr>
                                                                            <div class="form-group">
                                                                                <span id="FAS03030201s"/>
                                                                            </div>
                                                                            
                                                                            <hr class="new-section-sm bord-no">
                                                                        </div>
                                                                        <!--//★경비★---------------------------------------------------------------->
                                                                        
                                                                        <!--★기타★---------------------------------------------------------------->
                                                                        <div class="tab-pane fade" id="demo-cost-tab-3">
                                                                            
                                                                            <p class="text-main text-bold">*당기제품제조원가(단위 : <span name="amtUnitNm"/>)</p>
                                                                            <hr>
                                                                            <div class="form-group">
                                                                                <span id="FAS03030301s"/>
                                                                            </div>
                                                                                                                                                        
                                                                            <hr class="new-section-sm bord-no">
                                                                        </div>
                                                                        <!--//★기타★---------------------------------------------------------------->
                                                                        
                                                                        <div class="tab-footer clearfix">
                                                                            <div class="col-lg-6 col-lg-offset-6">
                                                                                <button type="button" class="btn btn-default" id="initFAS0303">다시 입력하기</button>
                                                                                <button type="button" class="btn btn-primary" id="saveFAS0303">저장</button>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </form>
                                                            </div>
                                                            <!--===================================================-->
                                                            <!-- END FORM VALIDATION ON TABS -->
                                                    
                                                        </div>
                                                        <!--//제조원가입력--------------------------------------------------------->
                                                        
                                                        <div class="col-lg-1"></div>
                                                        
                                                        <!--자동합계--------------------------------------------------------->
                                                        <div class="col-lg-3">
                                                            
                                                            <div class="panel">
                                                                <div class="panel-heading">
                                                                    <h3 class="panel-title">자동 합계(단위 : <span name="amtUnitNm"/>)</h3>
                                                                </div>

                                                                <form id="demo-bvd-notempty" action="forms-validation.html" class="form-horizontal">
                                                                    <div class="panel-body">
                                                                        
                                                                        <table class="table table-striped">
                                                                            <thead>
                                                                                <tr>
                                                                                    <td>항목</td>
                                                                                    <td>합계</td>
                                                                                </tr>
                                                                            </thead>
                                                                            <tbody>
                                                                                <tr>
                                                                                    <td>당기총제조비용</td>
                                                                                    <td><span id="CostTotal_FAS03030101"/></td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td>재료비</td>
                                                                                    <td><span id="CostTotal_FAS0303010101"/></td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td>노무비</td>
                                                                                    <td><span id="CostTotal_FAS0303010102"/></td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td>경비</td>
                                                                                    <td><span id="CostTotal_FAS03030201"/></td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td>기초재공품원가</td>
                                                                                    <td><span id="CostTotal_FAS0303030101"/></td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td>기말재공품원가</td>
                                                                                    <td><span id="CostTotal_FAS0303030102"/></td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td>유형자산(타계정)대체액</td>
                                                                                    <td><span id="CostTotal_FAS0303030103"/></td>
                                                                                </tr>                                                                                
                                                                                <tr>
                                                                                    <td>당기제품제조원가</td>
                                                                                    <td><span id="CostTotal_FAS0303030104"/></td>
                                                                                </tr>
                                                                            </tbody>
                                                                        </table>
                                                                    </div>
                                                                </form>
                                                            </div>
                                                            
                                                        </div>
                                                        <!--//자동합계--------------------------------------------------------->
                                                        
                                                    </div>
					                            </div>
                                                <!--//COST-------------------------------------------------------------------------------------->
                                                <div id="demo-main-tab4" class="tab-pane">
					                                <div class="row">
                                                        <div class="pull-right pad-rgt mar-btm">
                                                        <button type="button" class="previous btn btn-default">Previous</button>
                                                        <button type="button" class="next btn btn-default">Next</button>
                                                        <button type="button" class="finish btn btn-primary" id="onSave" disabled>Finish</button>
                                                        </div>
                                                    </div>
                                                    <div class="row"> 

                                                        <div class="col-lg-1"></div>

                                                        <div class="col-lg-6">

                                                            <!-- FORM VALIDATION ON TABS -->
                                                            <!--===================================================-->
                                                            <div class="tab-base">
                                                                <!-- Nav tabs -->
                                                                <ul class="nav nav-tabs">
                                                                    <li class="active"><a href="#demo-addedvalue-tab-1" data-toggle="tab">순이익</a></li>
                                                                    <li><a href="#demo-addedvalue-tab-2" data-toggle="tab">인건비</a></li>
                                                                    <li><a href="#demo-addedvalue-tab-3" data-toggle="tab">금융비용</a></li>
                                                                    <li><a href="#demo-addedvalue-tab-4" data-toggle="tab">임차료</a></li>
                                                                    <li><a href="#demo-addedvalue-tab-5" data-toggle="tab">조세공과</a></li>
                                                                    <li><a href="#demo-addedvalue-tab-6" data-toggle="tab">감가상각비</a></li>
                                                                </ul>   

                                                                <form id="demo-bv-bsc-tabs" class="form-horizontal" action="#" method="post">
                                                                    <div class="tab-content">
                                                                        
                                                                        <!--★순이익★---------------------------------------------------------------->
                                                                        <div class="tab-pane pad-btm fade in active" id="demo-addedvalue-tab-1">
                                                                            <p class="text-main text-bold">*법인세 차감전 순이익(단위 : <span name="amtUnitNm"/>)</p>
                                                                            <hr>
                                                                            <div class="form-group">
                                                                                <span id="FAS03040101s"/>                                                                                
                                                                            </div>
                                                                        </div>
                                                                        <!--★순이익★---------------------------------------------------------------->
                                                                        
                                                                         <!--★인건비★---------------------------------------------------------------->
                                                                        <div class="tab-pane pad-btm fade" id="demo-addedvalue-tab-2">
                                                                            <p class="text-main text-bold">*인건비(단위 : <span name="amtUnitNm"/>)</p>
                                                                            <hr>
                                                                            <div class="form-group">
                                                                                <span id="FAS03040201s"/>
                                                                            </div>
                                                                        </div>
                                                                          <!--★인건비★---------------------------------------------------------------->

                                                                         <!--★금융비용★---------------------------------------------------------------->
                                                                        <div class="tab-pane pad-btm fade" id="demo-addedvalue-tab-3">
                                                                            <p class="text-main text-bold">*금융비용(단위 : <span name="amtUnitNm"/>)</p>
                                                                            <hr>
                                                                            <div class="form-group">
                                                                                <span id="FAS03040301s"/>
                                                                            </div>
                                                                        </div>
                                                                          <!--★금융비용★---------------------------------------------------------------->

                                                                         <!--★임차료★---------------------------------------------------------------->
                                                                        <div class="tab-pane pad-btm fade" id="demo-addedvalue-tab-4">
                                                                            <p class="text-main text-bold">*임차료(단위 : <span name="amtUnitNm"/>)</p>
                                                                            <hr>
                                                                            <div class="form-group">
                                                                                <span id="FAS03040401s"/>
                                                                            </div>
                                                                        </div>
                                                                          <!--★임차료★---------------------------------------------------------------->


                                                                         <!--★조세공과(법인세 제외)★---------------------------------------------------------------->
                                                                        <div class="tab-pane pad-btm fade" id="demo-addedvalue-tab-5">
                                                                            <p class="text-main text-bold">*조세공과(법인세 제외)(단위 : <span name="amtUnitNm"/>)</p>
                                                                            <hr>
                                                                            <div class="form-group">
                                                                                <span id="FAS03040501s"/>
                                                                            </div>
                                                                        </div>
                                                                          <!--★조세공과(법인세 제외)★---------------------------------------------------------------->

                                                                         <!--★감가상각비★---------------------------------------------------------------->
                                                                        <div class="tab-pane pad-btm fade" id="demo-addedvalue-tab-6">
                                                                            <p class="text-main text-bold">*감가상각비(단위 : <span name="amtUnitNm"/>)</p>
                                                                            <hr>
                                                                            <div class="form-group">
                                                                                <span id="FAS03040601s"/>
                                                                            </div>
                                                                        </div>
                                                                          <!--★감가상각비★---------------------------------------------------------------->

                                                                        <div class="tab-footer clearfix">
                                                                            <div class="col-lg-6 col-lg-offset-6">
                                                                                <button type="button" class="btn btn-default" id="initFAS0304">다시 입력하기</button>
                                                                                <button type="button" class="btn btn-primary" id="saveFAS0304">저장</button>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </form>

                                                            </div> 

                                                        </div>  

                                                        <div class="col-lg-1"></div>
                                                        
                                                        <!--자동합계--------------------------------------------------------->
                                                        <div class="col-lg-3">
                                                            
                                                            <div class="panel">
                                                                <div class="panel-heading">
                                                                    <h3 class="panel-title">자동 합계(단위 : <span name="amtUnitNm"/>)</h3>
                                                                </div>

                                                                <form id="demo-bvd-notempty" action="#" class="form-horizontal">
                                                                    <div class="panel-body">
                                                                        
                                                                        <table class="table table-striped">
                                                                            <thead>
                                                                                <tr>
                                                                                    <td>항목</td>
                                                                                    <td>합계</td>
                                                                                </tr>
                                                                            </thead>
                                                                            <tbody>
                                                                                <tr>
                                                                                    <td>법인세 차감전 순이익</td>
                                                                                    <td><span id="AddValueTotal_FAS030401"/></td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td>인건비</td>
                                                                                    <td><span id="AddValueTotal_FAS030402"/></td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td>금융비용</td>
                                                                                    <td><span id="AddValueTotal_FAS030403"/></td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td>임차료</td>
                                                                                    <td><span id="AddValueTotal_FAS030404"/></td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td>조세공과(법인세제외)</td>
                                                                                    <td><span id="AddValueTotal_FAS030405"/></td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td>감가상각비</td>
                                                                                    <td><span id="AddValueTotal_FAS030406"/></td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td>부가가치합계</td>
                                                                                    <td><span id="AddValueTotal_FAS0304"/></td>
                                                                                </tr>
                                                                            </tbody>
                                                                        </table>
                                                                    </div>
                                                                </form>
                                                            </div>
                                                            
                                                        </div>
                                                        <!--//자동합계--------------------------------------------------------->                                                  

                                                    </div>

                                                </div>

					                        </div>
					                    </div>
                                        
					                    <!--Footer buttons-->
					                    <div class="pull-right pad-rgt mar-btm">
					                        <button type="button" class="previous btn btn-default">Previous</button>
					                        <button type="button" class="next btn btn-default">Next</button>
					                        <button type="button" class="finish btn btn-primary" id="onSave01" disabled>Finish</button>
					                    </div>
					                </form>
					            </div>
					            <!--===================================================-->
					            <!-- End of Main Form Wizard -->
					
					        </div>
					    </div>
					</div>					
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
    <!--Form Wizard [ SAMPLE ]-->
<script src="/bootstrap/thema/fico2000/js/demo/form-wizard.js"></script>
<script src="/bootstrap/thema/fico2000/js/app/fin/FIN02002M00Component.js"></script>   