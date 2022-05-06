<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<%@include file="/inc/common.jsp" %>

            <!--CONTENT CONTAINER-->
            <!--===================================================-->
            <div id="content-container">

                 <!--Page Title-->
                <!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
                <div id="page-title">
                    <h1 class="page-header text-overflow">현금흐름분석 > 분석 내용 조회</h1>

                    <!--Searchbox-->
                    <div class="searchbox">
                        <div class="input-group custom-search-form">
                            <ul class="pull-right breadcrumb">
                                <li><a href="index.html">Home</a></li>
                                <li>현금흐름분석</li>
                                <li class="active">분석 내용 조회</li>
                            </ul>
                        </div>
                    </div>
                </div>                    

                <!--Page content-->
                <!--===================================================-->
                <div id="page-content">
                    
                    <h4 class="text-main pad-btm bord-btm text-center">
                        *기업명: <span class="label label-info text-lg"><span name="entpName"/></span></span>
                    </h4>
                    
                    
                    <!--분석결과보기-->
                    <!--===================================================-->
                    <div class="tab-base">
                        <!-- Nav tabs -->
                        <ul id="myTab" class="nav nav-tabs">
                            <li><a href="#sheet9" data-toggle="tab" class="text-lg">설문지</a></li>
                            <li><a href="#sheet10" data-toggle="tab" class="text-lg" style="cursor: pointer">운전자금 차입 계획</a></li>
                            <li><a href="#sheet1" data-toggle="tab" class="text-lg" style="cursor: pointer">영업활동 패턴</a></li>
                            <li><a href="#sheet2" data-toggle="tab" class="text-lg" style="cursor: pointer">매출액 예측</a></li>
                            <li><a href="#sheet3" data-toggle="tab" class="text-lg" style="cursor: pointer">현금 수입</a></li>
                            <li><a href="#sheet4" data-toggle="tab" class="text-lg" style="cursor: pointer">매출채권 예측</a></li>
                            <li><a href="#sheet5" data-toggle="tab" class="text-lg" style="cursor: pointer">현금 지출</a></li>
                            <li><a href="#sheet6" data-toggle="tab" class="text-lg" style="cursor: pointer">순현금 흐름</a></li>
                            <li><a href="#sheet7" data-toggle="tab" class="text-lg" style="cursor: pointer">자금조달 및 투자액</a></li>
                            <li><a href="#sheet8" data-toggle="tab" class="text-lg" style="cursor: pointer">현금 예산</a></li>
                            <li><a href="#result" data-toggle="tab" class="text-lg">최종 결과</a></li>
                        </ul>

                        <!-- Tabs Content -->
                        <form id="resultForm" class="form-horizontal" action="#" method="post">
                            <div class="tab-content">

                                <!--★설문지★---------------------------------------------------------------->
                                <div class="tab-pane pad-btm fade" id="sheet9" >
                                    <input type="hidden" size="10" class="qn" id="qsrtInfo_qsrtNo0_no2_rsltVl" style="height: 30px; text-align: center; ime-mode:active"/>
                                    <div class="row" *ngIf="arrlength > 0">
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
                                    <div class="row">
                                        <!-- 현금지출패턴 -->
                                        <div class="col-lg-12">
                                            <div class="col-lg-6 col-lg-offset-6">
                                                 <button type="button" class="btn btn-default" id="initQsrtSave">다시 입력하기</button>
                                                 <button type="button" class="btn btn-success" id="onQsrtSave">저장</button>
                                            </div>
                                        </div>
                                    </div>
                                    <!--★설문지★---------------------------------------------------------------->
                                </div>


                                 <!--★운전자금 차입 계획★---------------------------------------------------------------->
                                <div class="tab-pane pad-btm fade" id="sheet10" >

                                    <div class="row" *ngIf="arrlength > 0">
                                        <!-- 매출패턴 -->
                                        <div class="panel">
                                            <div class="panel-heading">
                                                <h3 class="panel-title">운전자금 차입 계획</h3>
                                            </div>
                                            <div class="panel-body">
                                                    <style>
                                                        .qnul li{margin: 5px 0;}
                                                        .qn{border:1px solid #eaeaea;/*border:0 none;border-bottom: 1px solid #000;background-color:rgba(255,255,255,0);*/}
                                                    </style>
                                                    <ol class="qnol">
                                                        <li class="mar-btm">
                                                            운전자금<br/><br/>
                                                            <table width="100%" class="table table-condensed">
                                                                    <thead>
                                                                        <tr class="text-center">
                                                                            <th width="25%" style="text-align: center;">구분</th>
                                                                            <th width="15%" style="text-align: center;">운용</th>
                                                                            <th width="15%" style="text-align: center;">기간</th>
                                                                            <th width="15%" style="text-align: center;">이율</th>
                                                                            <th width="15%" style="text-align: center;">사용한도()</th>
                                                                            <th width="15%" style="text-align: center;">지원예정(월)</th>
                                                                        </tr>
                                                                    </thead>
                                                                    <tbody>
                                                                        <tr>
                                                                            <td align="center"><input type="text" class="qn" id="qsrtNo121_kindNm" style="width: 100%"/></td>
                                                                            <td align="center"><input type="text" class="qn" id="qsrtNo121_etcNm" style="text-align: right;width: 100%"/></td>
                                                                            <td align="center"><input type="text" class="qn" id="qsrtNo121_trmDsncNm" style="text-align: right; width: 100%"/></td>
                                                                            <td align="center"><input type="number" class="qn" id="qsrtNo121_etcIrt" style="text-align: right;width: 80%"/>%</td>
                                                                            <td align="center"><input type="number" class="qn" id="qsrtNo121_rsltVl" style="text-align: right; width: 100%"/></td>
                                                                            <td align="center"><input type="number" class="qn" id="qsrtNo121_baseYm" style="text-align: right;width: 100%"/></td>
                                                                        </tr>
                                                                    </tbody>
                                                                </table><br/>
                                                                <input type="hidden" class="qn" id="qsrtNo121_index"/>
                                                                <div class="pull-right pad-rgt mar-btm">
                                                                    <button type="button" class="btn btn-default" id="onInit11">다시 입력하기</button>
                                                                    <button type="button" class="finish btn btn-primary" id="onSave11">등록</button>
                                                                    <button type="button" class="finish btn btn-success" id="onDel11">삭제</button>
                                                                </div>
                                                                
                                                                <table id="grid-list" class="table table-bordered table-hover table-striped">
                                                                    <thead>
                                                                        <tr>
                                                                            <th data-width="15%" data-column-id="kindNm" data-header-align="center" data-align="center">구분</th>
                                                                            <th data-width="15%" data-column-id="etcNm" data-header-align="center" data-align="center">운용</th>
                                                                            <th data-width="20%" data-column-id="trmDsncNm" data-header-align="center" data-align="center">기간</th>
                                                                            <th data-width="15%" data-column-id="etcIrt" data-header-align="center" data-align="center">이자율</th>
                                                                            <th data-width="20%" data-column-id="amt" data-header-align="center" data-align="center">사용한도</th>
                                                                            <th data-width="15%" data-column-id="baseYm" data-header-align="center" data-align="center">지원예정(월)</th>
                                                                            <th data-column-id="alyid" data-header-align="center" data-align="center" data-visible="false">분석ID</th>
                                                                            <th data-column-id="itemId" data-header-align="center" data-align="center" data-visible="false">아이템ID</th>
                                                                            <th data-column-id="lprbmNo" data-header-align="center" data-align="center" data-visible="false">대분류번호</th>
                                                                            <th data-column-id="sprbmNo" data-header-align="center" data-align="center" data-visible="false">소분류번호</th>
                                                                            <th data-column-id="lsqsTcd" data-header-align="center" data-align="center" data-visible="false">문서유형</th>
                                                                            <th data-column-id="qstrId" data-header-align="center" data-align="center" data-visible="false">질문ID</th>
                                                                            <th data-column-id="delYn" data-header-align="center" data-align="center" data-visible="false">삭제여부</th>
                                                                            <th data-column-id="rsltId" data-header-align="center" data-align="center" data-visible="false">결과ID</th>
                                                                            <th data-column-id="index" data-header-align="center" data-align="center" data-visible="false">idx</th>
                                                                        </tr>
                                                                    </thead>
                                                                </table>
                                                        </li> 

                                                        <li class="mar-btm">
                                                            여유자금<br/><br/>
                                                            <table width="100%" class="table table-condensed">
                                                                    <thead>
                                                                        <tr class="text-center">
                                                                            <th width="35%" style="text-align: center;">구분</th>
                                                                            <th width="20%" style="text-align: center;">명칭</th>
                                                                            <th width="20%" style="text-align: center;">기간</th>
                                                                            <th width="20%" style="text-align: center;">수익율</th>
                                                                        </tr>
                                                                    </thead>
                                                                    <tbody>
                                                                        <tr>
                                                                            <td align="center"><input type="text" class="qn" id="qsrtNo131_kindNm" style="width: 100%"/></td>
                                                                            <td align="center"><input type="text" class="qn" id="qsrtNo131_etcNm" style="width: 100%"/></td>
                                                                            <td align="center"><input type="text" class="qn" id="qsrtNo131_trmDsncNm" style="width: 100%"/></td>
                                                                            <td align="center"><input type="number" class="qn" id="qsrtNo131_etcIrt" style="text-align: right;width: 80%"/>%</td>
                                                                        </tr>
                                                                    </tbody>
                                                                </table><br/>

                                                                <div class="pull-right pad-rgt mar-btm">
                                                                    <button type="button" class="btn btn-default" id="onInit12">다시 입력하기</button>
                                                                    <button type="button" class="finish btn btn-primary" id="onSave12">등록</button>
                                                                    <button type="button" class="finish btn btn-success" id="onDel12">삭제</button>
                                                                </div>
                                                                <input type="hidden" class="qn" id="qsrtNo131_index"/>
                                                                <table id="grid-list2" class="table table-bordered table-hover table-striped">
                                                                    <thead>
                                                                        <tr>
                                                                            <th data-width="15%" data-column-id="kindNm" data-header-align="center" data-align="center">구분</th>
                                                                            <th data-width="15%" data-column-id="etcNm" data-header-align="center" data-align="center">명칭</th>
                                                                            <th data-width="20%" data-column-id="trmDsncNm" data-header-align="center" data-align="center">기간</th>
                                                                            <th data-width="15%" data-column-id="etcIrt" data-header-align="center" data-align="center">수익율</th>
                                                                            <th data-width="20%" data-column-id="amt" data-header-align="center" data-visible="false">결과값</th>
                                                                            <th data-width="15%" data-column-id="baseYm" data-header-align="center" data-visible="false">분석월</th>
                                                                            <th data-column-id="alyid" data-header-align="center" data-align="center" data-visible="false">분석ID</th>
                                                                            <th data-column-id="itemId" data-header-align="center" data-align="center" data-visible="false">아이템ID</th>
                                                                            <th data-column-id="lprbmNo" data-header-align="center" data-align="center" data-visible="false">대분류번호</th>
                                                                            <th data-column-id="sprbmNo" data-header-align="center" data-align="center" data-visible="false">소분류번호</th>
                                                                            <th data-column-id="lsqsTcd" data-header-align="center" data-align="center" data-visible="false">문서유형</th>
                                                                            <th data-column-id="qstrId" data-header-align="center" data-align="center" data-visible="false">질문ID</th>
                                                                            <th data-column-id="delYn" data-header-align="center" data-align="center" data-visible="false">삭제여부</th>
                                                                            <th data-column-id="rsltId" data-header-align="center" data-align="center" data-visible="false">결과ID</th>
                                                                            <th data-column-id="index" data-header-align="center" data-align="center" data-visible="false">idx</th>
                                                                        </tr>
                                                                    </thead>
                                                                </table>
                                                        </li>

                                                    </ol>                                                   
                                            </div>
                                        </div>
                                        <!-- //매출패턴 -->
                                    </div>
                                    <div class="alert alert-danger" role="alert">
                                                               <span id="errMsg"></span>
                                    </div>
                                    <div class="row">
                                        <!-- 현금지출패턴 -->
                                        <div class="col-lg-12">
                                            <div class="col-lg-6 col-lg-offset-6">
                                                 <button type="button" class="btn btn-default" id="initQsrtSave01">다시 입력하기</button>
                                                 <button type="button" class="btn btn-success" id="onQsrtSave01">저장</button>
                                            </div>
                                        </div>
                                    </div>
                                    <!--★운전자금 차입 계획★---------------------------------------------------------------->
                                </div>        
                            
                                <!--★영업활동패턴★---------------------------------------------------------------->
                                <div class="tab-pane fade" id="sheet1">

                                    <div class="row">
                                        <div class="col-lg-6">
                                            <!-- 매출패턴 -->
                                            <div class="panel">
                                                <div class="panel-heading">
                                                    <h3 class="panel-title">매출패턴(%)</h3>
                                                </div>
                                                <div class="panel-body">&nbsp;&nbsp;&nbsp;&nbsp;
                                                    <div id="salesPattern" style="width:100%; height:200px;"></div>
                                                </div>
                                            </div>
                                            <!-- //매출패턴 -->
                                        </div>

                                         <div class="col-lg-6">
                                            <!-- 매출패턴 -->
                                            <div class="panel">
                                                <div class="panel-heading">
                                                    <h3 class="panel-title">매출패턴(%)</h3>
                                                </div>
                                                <span  id="businessWorkPatterns"/>                                                
                                            </div>
                                            <!-- //매출패턴 -->
                                        </div>

                                    </div>
                                    <div class="row">
                                        <!-- 현금지출패턴 -->
                                        <div class="col-lg-12">
                                            <div class="panel">
                                                <div class="panel-heading">
                                                    <h3 class="panel-title">현금지출패턴</h3>
                                                </div>
                                                <div class="panel-body">
                                                    <span  id="cashComePatternsDis1"/>
                                                    <div class="col-lg-2">
                                                        <div class="panel panel-colorful">
                                                            <div class="pad-all text-center">
                                                                <p class="text-2x">현금지출</p>
                                                                <p>매출원가<br/>(원부재료비+노무비 등)<br/>= 매출액의</p>

                                                                <div id="expensePie" class="pie-title-center mar-rgt" data-percent="0">
                                                                    <span class="pie-value text-thin text-2x"></span>
                                                                </div>
                                                                <p>의 비중을 차지함</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <span  id="cashComePatternsDis2"/>
                                                </div>
                                            </div>
                                        </div>
                                        <!-- //현금지출패턴 -->
                                    </div>
                                    
                                </div>
                                <!--//★영업활동패턴★---------------------------------------------------------------->

                                <!--★매출액예측★---------------------------------------------------------------->
                                <div class="tab-pane pad-btm fade" id="sheet2">

                                    <div class="row">
                                        <div class="col-lg-12">
                                            <div class="panel">
                                                <div class="panel-heading">
                                                    <h3 class="panel-title">매출액예측</h3>
                                                </div>
                                                <div class="panel-body">
                                                    <!--매출액예측테이블-->
                                                    <span id="salesPredictTable1"/>
                                                    
                                                    <!--//매출액예측테이블 ~06 -->
                                                    <br/>

                                                    <span id="salesPredictTable2"/>
                                                     <!--매출액예측테이블 07 ~ -->
                                                </div>                                       
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div class="row">
                                        <div class="panel">
                                            <div class="panel-heading">
                                                <h3 class="panel-title">매출액예측 그래프</h3>
                                            </div>
                                            <div class="panel-body">
                                                <!--매출액예측그래프-->
                                                <div id="salesGraph" style="width:100%;height:200px"></div>
                                                <!--//매출액예측그래프-->
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <!--//★매출액예측★---------------------------------------------------------------->

                                <!--★현금수입★---------------------------------------------------------------->
                                <div class="tab-pane pad-btm fade" id="sheet3">

                                    <div class="row">
                                        <div class="col-lg-12">
                                            <div class="panel">
                                                <div class="panel-heading">
                                                    <h3 class="panel-title">현금수입</h3>
                                                </div>
                                                <span id="cashIncomeTable"/>                                       
                                            </div>
                                        </div>
                                    </div>
                                                                        
                                </div>
                                <!--//★현금수입★---------------------------------------------------------------->
                                
                                <!--★매출채권예측★---------------------------------------------------------------->
                                <div class="tab-pane pad-btm fade" id="sheet4">

                                    <div class="row">
                                        <div class="col-lg-12">
                                            <div class="panel">
                                                <div class="panel-heading">
                                                    <h3 class="panel-title">매출채권 예측</h3>
                                                </div>
                                                <span id="salesAmtListTable"/>                     
                                            </div>
                                        </div>
                                    </div>
                                                                        
                                </div>
                                <!--//★매출채권예측★---------------------------------------------------------------->
                                
                                <!--★현금지출★---------------------------------------------------------------->
                                <div class="tab-pane pad-btm fade" id="sheet5">

                                    <div class="row">
                                        <div class="col-lg-12">
                                            <div class="panel">
                                                <div class="panel-heading">
                                                    <h3 class="panel-title">현금지출</h3>
                                                </div>
                                                <span id="cashOutComeTable"/>                                       
                                            </div>
                                        </div>
                                    </div>
                                                                        
                                </div>
                                <!--//★현금지출★---------------------------------------------------------------->
                                
                                <!--★순현금흐름★---------------------------------------------------------------->
                                <div class="tab-pane pad-btm fade" id="sheet6">

                                    <div class="row">
                                        <div class="col-lg-12">
                                            <div class="panel">
                                                <div class="panel-heading">
                                                    <h3 class="panel-title">순현금흐름</h3>
                                                </div>
                                                <span id="cashNtFlowTable"/>
                                            </div>
                                        </div>
                                    </div>
                                
                                    <div class="row">
                                        <div class="panel">
                                            <div class="panel-heading">
                                                <h3 class="panel-title">순현금흐름 그래프</h3>
                                            </div>
                                            <div class="panel-body">
                                                <!--순현금흐름그래프-->
                                                <div id="cashGraph" style="width:100%;height:200px"></div>
                                                <!--//순현금흐름그래프-->
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <!--//★순현금흐름★---------------------------------------------------------------->
                                
                                <!--★자금조달및투자액★---------------------------------------------------------------->
                                <div class="tab-pane pad-btm fade" id="sheet7">

                                    <div class="row">
                                        <div class="col-lg-12">
                                            <div class="panel">
                                                <div class="panel-heading">
                                                    <h3 class="panel-title">자금조달 및 투자액</h3>
                                                </div>
                                                <span id="cashBdgtAmtTable"/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <!--//★자금조달및투자액★---------------------------------------------------------------->
                                
                                <!--★현금예산★---------------------------------------------------------------->
                                <div class="tab-pane pad-btm fade" id="sheet8">

                                    <div class="row">
                                        <div class="col-lg-12">
                                            <div class="panel">
                                                <div class="panel-heading">
                                                    <h3 class="panel-title">현금예산</h3>
                                                </div>
                                                <span id="cashBdgtAmtTable1"/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <!--//★현금예산★---------------------------------------------------------------->
                                <!--★최종결과★---------------------------------------------------------------->
                                <div class="tab-pane pad-btm fade" id="result">
                                    <span id="cashFlowResult"/>
                                <!--//★최종결과★---------------------------------------------------------------->
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

    <!--Morris.js [ OPTIONAL ]-->
<script src="/bootstrap/thema/fico2000/plugins/morris-js/morris.min.js"></script>
<script src="/bootstrap/thema/fico2000/plugins/morris-js/raphael-js/raphael.min.js"></script>

<!--Easy Pie Chart [ OPTIONAL ]-->
<script src="/bootstrap/thema/fico2000/plugins/easy-pie-chart/jquery.easypiechart.min.js"></script>

<script src="/bootstrap/thema/fico2000/js/app/adm/codeMng.service.js"></script>
<script src="/bootstrap/thema/fico2000/js/app/fin/fin.services.js"></script>
<!--Demo script [ DEMONSTRATION ]-->
<script src="/bootstrap/thema/fico2000/js/demo/nifty-demo.min.js"></script>
    <!--Form Wizard [ SAMPLE ]-->
<script src="/bootstrap/thema/fico2000/js/demo/form-wizard.js"></script>
<script src="/bootstrap/thema/fico2000/js/app/fin/FIN03003M00Component.js"></script>   
