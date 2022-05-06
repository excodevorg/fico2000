<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<%@include file="/inc/common.jsp" %>

            <!--CONTENT CONTAINER-->
            <!--===================================================-->
            <div id="content-container">
 
                 <!--Page Title-->
                <!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
                <div id="page-title">
                    <h1 class="page-header text-overflow">재무투자분석 > 분석 내용 조회</h1>

                    <!--Searchbox-->
                    <div class="searchbox">
                        <div class="input-group custom-search-form">
                            <ul class="pull-right breadcrumb">
                                <li><a href="index.html">Home</a></li>
                                <li>재무투자분석</li>
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
                        <ul  id="myTab" class="nav nav-tabs">
                            <li><a href="#sheet1" data-toggle="tab" class="text-lg" style="cursor: pointer">경영컨설팅설문지</a></li>
                            <li><a href="#sheet2" data-toggle="tab" class="text-lg" style="cursor: pointer">시설운전자금공급계획</a></li>
                            <li><a href="#sheet3" data-toggle="tab" class="text-lg" style="cursor: pointer">현금 수입</a></li>
                            <li><a href="#sheet4" data-toggle="tab" class="text-lg" style="cursor: pointer">현금 지출</a></li>
                            <li><a href="#sheet5" data-toggle="tab" class="text-lg" style="cursor: pointer">현금 예산</a></li>
                            <li><a href="#result" data-toggle="tab" class="text-lg" style="cursor: pointer">최종 결과</a></li>
                        </ul>

                        <!-- Tabs Content -->
                        <form id="resultForm" class="form-horizontal" action="#" method="post">
                            <div class="tab-content">
                                
                                <!--★설문지★---------------------------------------------------------------->
                                <div class="tab-pane pad-btm fade" id="sheet1">

                                    <div class="row" *ngIf="arrlength > 0">
                                        <!-- 설문지 -->
                                        <div class="panel">
                                            <div class="panel-heading">
                                                <h3 class="panel-title">경영 컨설팅 설문지</h3>
                                            </div>
                                            <div class="panel-body">

                                                       <style>
                                                            .qnul li{margin: 5px 0;}
                                                            .qn{border:1px solid #eaeaea;/*border:0 none;border-bottom: 1px solid #000;background-color:rgba(255,255,255,0);*/}
                                                        </style>
                                                        <ol class="qnol">
                                                            <li class="mar-btm">
                                                                기존차입금의 상환 계획은?<br/><br/>
                                                                
                                                                1-1 운전자금 내입 부문 (단위 : 천원)
                                                                <table width="100%" class="table table-condensed">
                                                                    <thead>
                                                                        <tr class="text-center">
                                                                            <th width="10%" style="text-align: center;">종류</th>
                                                                            <th width="15%" style="text-align: center;">1 월</th>
                                                                            <th width="15%" style="text-align: center;">2 월</th>
                                                                            <th width="15%" style="text-align: center;">3 월</th>
                                                                            <th width="15%" style="text-align: center;">4 월</th>
                                                                            <th width="15%" style="text-align: center;">5 월</th>
                                                                            <th width="15%" style="text-align: center;">6 월</th>
                                                                        </tr>
                                                                    </thead>
                                                                    <tbody>
                                                                        <tr>
                                                                            <td align="center"><input type="text" class="qn" id="qsrtNo11_kindNm" style="width: 100%"/></td>
                                                                            <td align="center"><input type="number" class="qn" id="qsrtNo11_monthAmt1" style="text-align: right; width: 100%"/></td>
                                                                            <td align="center"><input type="number" class="qn" id="qsrtNo11_monthAmt2" style="text-align: right; width: 100%"/></td>
                                                                            <td align="center"><input type="number" class="qn" id="qsrtNo11_monthAmt3" style="text-align: right; width: 100%"/></td>
                                                                            <td align="center"><input type="number" class="qn" id="qsrtNo11_monthAmt4" style="text-align: right; width: 100%"/></td>
                                                                            <td align="center"><input type="number" class="qn" id="qsrtNo11_monthAmt5" style="text-align: right; width: 100%"/></td>
                                                                            <td align="center"><input type="number" class="qn" id="qsrtNo11_monthAmt6" style="text-align: right; width: 100%"/></td>
                                                                        </tr>
                                                                    </tbody>
                                                                </table> <br>

                                                                <table width="100%" class="table table-striped">
                                                                    <thead>
                                                                        <tr class="text-center">
                                                                            <th width="10%" style="text-align: center;">&nbsp;</th>
                                                                            <th width="15%" style="text-align: center;">7 월</th>
                                                                            <th width="15%" style="text-align: center;">8 월</th>
                                                                            <th width="15%" style="text-align: center;">9 월</th>
                                                                            <th width="15%" style="text-align: center;">10 월</th>
                                                                            <th width="15%" style="text-align: center;">11 월</th>
                                                                            <th width="15%" style="text-align: center;">12 월</th>
                                                                        </tr>
                                                                    </thead>
                                                                    <tbody>
                                                                        <tr>
                                                                            <td align="center"></td>
                                                                            <td align="center"><input type="number" class="qn" id="qsrtNo11_monthAmt7" style="text-align: right; width: 100%"/></td>
                                                                            <td align="center"><input type="number" class="qn" id="qsrtNo11_monthAmt8" style="text-align: right; width: 100%"/></td>
                                                                            <td align="center"><input type="number" class="qn" id="qsrtNo11_monthAmt9" style="text-align: right; width: 100%"/></td>
                                                                            <td align="center"><input type="number" class="qn" id="qsrtNo11_monthAmt10" style="text-align: right; width: 100%"/></td>
                                                                            <td align="center"><input type="number" class="qn" id="qsrtNo11_monthAmt11" style="text-align: right; width: 100%"/></td>
                                                                            <td align="center"><input type="number" class="qn" id="qsrtNo11_monthAmt12" style="text-align: right; width: 100%"/></td>
                                                                        </tr>
                                                                    </tbody>
                                                                </table>

                                                                <div class="pull-right pad-rgt mar-btm">
                                                                    <button type="button" class="btn btn-default" id="onInit11">다시 입력하기</button>
                                                                    <button type="button" class="finish btn btn-primary" id="onSave11">등록</button>
                                                                    <button type="button" class="finish btn btn-success" id="onDel11">삭제</button>
                                                                </div>

                                                                <table id="grid-list11" class="table table-bordered table-hover table-striped">
                                                                    <thead>
                                                                        <tr>
                                                                            <th data-width="16%" data-column-id="kindNm" data-header-align="center" data-align="center">종류</th>
                                                                            <th data-width="7%" data-column-id="monthAmt1" data-header-align="center" data-align="center">1월</th>
                                                                            <th data-width="7%" data-column-id="monthAmt2" data-header-align="center" data-align="center">2월</th>
                                                                            <th data-width="7%" data-column-id="monthAmt3" data-header-align="center" data-align="center">3월</th>
                                                                            <th data-width="7%" data-column-id="monthAmt4" data-header-align="center" data-align="center">4월</th>
                                                                            <th data-width="7%" data-column-id="monthAmt5" data-header-align="center" data-align="center">5월</th>
                                                                            <th data-width="7%" data-column-id="monthAmt6" data-header-align="center" data-align="center">6월</th>
                                                                            <th data-width="7%" data-column-id="monthAmt7" data-header-align="center" data-align="center">7월</th>
                                                                            <th data-width="7%" data-column-id="monthAmt8" data-header-align="center" data-align="center">8월</th>
                                                                            <th data-width="7%" data-column-id="monthAmt9" data-header-align="center" data-align="center">9월</th>
                                                                            <th data-width="7%" data-column-id="monthAmt10" data-header-align="center" data-align="center">10월</th>
                                                                            <th data-width="7%" data-column-id="monthAmt11" data-header-align="center" data-align="center">11월</th>
                                                                            <th data-width="7%" data-column-id="monthAmt12" data-header-align="center" data-align="center">12월</th>
                                                                            <th data-column-id="idx" data-header-align="center" data-align="center" data-visible="false">index</th>
                                                                        </tr>
                                                                    </thead>
                                                                </table>

                                                                <input type="hidden" id="qsrtNo11_idx"/>

                                                                <br/><br/>
                                                                1-2 시설자금 상환스케쥴
                                                                <table width="100%" class="table table-condensed">
                                                                    <thead>
                                                                        <tr class="text-center">
                                                                            <th width="10%" style="text-align: center;">종류</th>
                                                                            <th width="15%" style="text-align: center;">1 월</th>
                                                                            <th width="15%" style="text-align: center;">2 월</th>
                                                                            <th width="15%" style="text-align: center;">3 월</th>
                                                                            <th width="15%" style="text-align: center;">4 월</th>
                                                                            <th width="15%" style="text-align: center;">5 월</th>
                                                                            <th width="15%" style="text-align: center;">6 월</th>
                                                                        </tr>
                                                                    </thead>
                                                                    <tbody>
                                                                        <tr>
                                                                            <td align="center"><input type="text" class="qn" id="qsrtNo12_kindNm" style="width: 100%"/></td>
                                                                            <td align="center"><input type="number" class="qn" id="qsrtNo12_monthAmt1" style="text-align: right; width: 100%"/></td>
                                                                            <td align="center"><input type="number" class="qn" id="qsrtNo12_monthAmt2" style="text-align: right; width: 100%"/></td>
                                                                            <td align="center"><input type="number" class="qn" id="qsrtNo12_monthAmt3" style="text-align: right; width: 100%"/></td>
                                                                            <td align="center"><input type="number" class="qn" id="qsrtNo12_monthAmt4" style="text-align: right; width: 100%"/></td>
                                                                            <td align="center"><input type="number" class="qn" id="qsrtNo12_monthAmt5" style="text-align: right; width: 100%"/></td>
                                                                            <td align="center"><input type="number" class="qn" id="qsrtNo12_monthAmt6" style="text-align: right; width: 100%"/></td>
                                                                        </tr>
                                                                    </tbody>
                                                                </table> <br>

                                                                <table width="100%" class="table table-striped">
                                                                    <thead>
                                                                        <tr class="text-center">
                                                                            <th width="10%" style="text-align: center;">&nbsp;</th>
                                                                            <th width="15%" style="text-align: center;">7 월</th>
                                                                            <th width="15%" style="text-align: center;">8 월</th>
                                                                            <th width="15%" style="text-align: center;">9 월</th>
                                                                            <th width="15%" style="text-align: center;">10 월</th>
                                                                            <th width="15%" style="text-align: center;">11 월</th>
                                                                            <th width="15%" style="text-align: center;">12 월</th>
                                                                        </tr>
                                                                    </thead>
                                                                    <tbody>
                                                                        <tr>
                                                                            <td align="center"></td>
                                                                            <td align="center"><input type="number" class="qn" id="qsrtNo12_monthAmt7" style="text-align: right; width: 100%"/></td>
                                                                            <td align="center"><input type="number" class="qn" id="qsrtNo12_monthAmt8" style="text-align: right; width: 100%"/></td>
                                                                            <td align="center"><input type="number" class="qn" id="qsrtNo12_monthAmt9" style="text-align: right; width: 100%"/></td>
                                                                            <td align="center"><input type="number" class="qn" id="qsrtNo12_monthAmt10" style="text-align: right; width: 100%"/></td>
                                                                            <td align="center"><input type="number" class="qn" id="qsrtNo12_monthAmt11" style="text-align: right; width: 100%"/></td>
                                                                            <td align="center"><input type="number" class="qn" id="qsrtNo12_monthAmt12" style="text-align: right; width: 100%"/></td>
                                                                        </tr>
                                                                    </tbody>
                                                                </table>

                                                                <div class="pull-right pad-rgt mar-btm">
                                                                    <button type="button" class="btn btn-default" id="onInit12">다시 입력하기</button>
                                                                    <button type="button" class="finish btn btn-primary" id="onSave12">등록</button>
                                                                    <button type="button" class="finish btn btn-success" id="onDel12">삭제</button>
                                                                </div>


                                                                <table id="grid-list12" class="table table-bordered table-hover table-striped">
                                                                    <thead>
                                                                        <tr>
                                                                            <th data-width="16%" data-column-id="kindNm" data-header-align="center" data-align="center">종류</th>
                                                                            <th data-width="7%" data-column-id="monthAmt1" data-header-align="center" data-align="center">1월</th>
                                                                            <th data-width="7%" data-column-id="monthAmt2" data-header-align="center" data-align="center">2월</th>
                                                                            <th data-width="7%" data-column-id="monthAmt3" data-header-align="center" data-align="center">3월</th>
                                                                            <th data-width="7%" data-column-id="monthAmt4" data-header-align="center" data-align="center">4월</th>
                                                                            <th data-width="7%" data-column-id="monthAmt5" data-header-align="center" data-align="center">5월</th>
                                                                            <th data-width="7%" data-column-id="monthAmt6" data-header-align="center" data-align="center">6월</th>
                                                                            <th data-width="7%" data-column-id="monthAmt7" data-header-align="center" data-align="center">7월</th>
                                                                            <th data-width="7%" data-column-id="monthAmt8" data-header-align="center" data-align="center">8월</th>
                                                                            <th data-width="7%" data-column-id="monthAmt9" data-header-align="center" data-align="center">9월</th>
                                                                            <th data-width="7%" data-column-id="monthAmt10" data-header-align="center" data-align="center">10월</th>
                                                                            <th data-width="7%" data-column-id="monthAmt11" data-header-align="center" data-align="center">11월</th>
                                                                            <th data-width="7%" data-column-id="monthAmt12" data-header-align="center" data-align="center">12월</th>
                                                                            <th data-column-id="idx" data-header-align="center" data-align="center" data-visible="false">index</th>
                                                                        </tr>
                                                                    </thead>
                                                                </table>

                                                                <input type="hidden" id="qsrtNo12_idx"/>

                                                            </li>
                                                            <li class="mar-btm">
                                                                자본금 증자 계획은?<br/>
                                                                자본금 증자 계획이 있으시다면 언제, 어느정도 증자하실 계획이십니까?<br/>
                                                                <input type="text" size="12" class="qn" id="qsrtNo21_month"/>월&nbsp;&nbsp;<input type="number" size="20" class="qn" id="qsrtNo21_monthAmt" style="text-align: right;"/>천원 

                                                                <div class="pull-right pad-rgt mar-btm">
                                                                    <button type="button" class="btn btn-default" id="onInit21">다시 입력하기</button>
                                                                    <button type="button" class="finish btn btn-primary" id="onSave21">등록</button>
                                                                    <button type="button" class="finish btn btn-success" id="onDel21">삭제</button>
                                                                </div>

                                                                <table id="grid-list21" class="table table-bordered table-hover table-striped">
                                                                    <thead>
                                                                        <tr>
                                                                            <th data-width="20%" data-column-id="month" data-header-align="center" data-align="center">월</th>
                                                                            <th data-width="80%" data-column-id="monthAmt" data-header-align="center" data-align="right">금액</th>                                                                            
                                                                            <th data-column-id="idx" data-header-align="center" data-align="center" data-visible="false">index</th>
                                                                        </tr>
                                                                    </thead>
                                                                </table>

                                                                <input type="hidden" id="qsrtNo21_idx"/>
                                                                
                                                            </li>
                                                            <li class="mar-btm">
                                                                기술 개발에 따른 R&D비용을 투입할 예정이신지?<br/>
                                                                3-1. 투입시기는 <input type="text" size="12" class="qn" id="qsrtNo31_month"/>월<br/>
                                                                3-2. 투입비용규모 <input type="number" size="20" class="qn" id="qsrtNo31_monthAmt" style="text-align: right;"/>천원

                                                                <div class="pull-right pad-rgt mar-btm">
                                                                    <button type="button" class="btn btn-default" id="onInit31">다시 입력하기</button>
                                                                    <button type="button" class="finish btn btn-primary" id="onSave31">등록</button>
                                                                    <button type="button" class="finish btn btn-success" id="onDel31">삭제</button>
                                                                </div>

                                                                <table id="grid-list31" class="table table-bordered table-hover table-striped">
                                                                    <thead>
                                                                        <tr>
                                                                            <th data-width="20%" data-column-id="month" data-header-align="center" data-align="center">투입시기(월)</th>
                                                                            <th data-width="80%" data-column-id="monthAmt" data-header-align="center" data-align="right">투입비용</th>
                                                                            <th data-column-id="idx" data-header-align="center" data-align="center" data-visible="false">index</th>
                                                                        </tr>
                                                                    </thead>
                                                                </table>

                                                                <input type="hidden" id="qsrtNo31_idx"/>
                                                                
                                                            </li>
                                                            <li class="mar-btm">
                                                                생산 능력 확대 계획은? 생산능력 확대에 따른 고정자산 시설 증대 계획은?<br/>
                                                                <input type="text" size="12" id="qsrtNo41_kindNm" class="qn" />&nbsp;&nbsp;<input type="text" size="12" id="qsrtNo41_month" class="qn" />월&nbsp;&nbsp;<input type="number" size="20" class="qn" id="qsrtNo41_monthAmt" style="text-align: right;"/>천원<br/>
                                                                
                                                                <div class="pull-right pad-rgt mar-btm">
                                                                    <button type="button" class="btn btn-default" id="onInit41">다시 입력하기</button>
                                                                    <button type="button" class="finish btn btn-primary" id="onSave41">등록</button>
                                                                    <button type="button" class="finish btn btn-success" id="onDel41">삭제</button>
                                                                </div>

                                                                <table id="grid-list41" class="table table-bordered table-hover table-striped">
                                                                    <thead>
                                                                        <tr>
                                                                            <th data-width="45%" data-column-id="kindNm" data-header-align="center" data-align="center">시설종류</th>
                                                                            <th data-width="20%" data-column-id="month" data-header-align="center" data-align="center">월</th>
                                                                            <th data-width="35%" data-column-id="monthAmt" data-header-align="center" data-align="right">금액</th>
                                                                            <th data-column-id="idx" data-header-align="center" data-align="center" data-visible="false">index</th>
                                                                        </tr>
                                                                    </thead>
                                                                </table>

                                                                <input type="hidden" id="qsrtNo41_idx"/>

                                                            </li>
                                                            <li class="mar-btm">
                                                                현재 시설 매각 계획은? 고정자산 시설 처분 계획은?<br/>
                                                                <input type="text" size="12" class="qn" id="qsrtNo51_kindNm"/>&nbsp;&nbsp;<input type="text" size="12" class="qn" id="qsrtNo51_month"/>월&nbsp;&nbsp;<input type="number" size="20" class="qn" id="qsrtNo51_monthAmt" style="text-align: right;"/>천원<br/>
                                                                
                                                                <div class="pull-right pad-rgt mar-btm">
                                                                    <button type="button" class="btn btn-default" id="onInit51">다시 입력하기</button>
                                                                    <button type="button" class="finish btn btn-primary" id="onSave51">등록</button>
                                                                    <button type="button" class="finish btn btn-success" id="onDel51">삭제</button>
                                                                </div>

                                                                <table id="grid-list51" class="table table-bordered table-hover table-striped">
                                                                    <thead>
                                                                        <tr>
                                                                            <th data-width="45%" data-column-id="kindNm" data-header-align="center" data-align="center">시설종류</th>
                                                                            <th data-width="20%" data-column-id="month" data-header-align="center" data-align="center">월</th>
                                                                            <th data-width="35%" data-column-id="monthAmt" data-header-align="center" data-align="right">금액</th>
                                                                            <th data-column-id="idx" data-header-align="center" data-align="center" data-visible="false">index</th>
                                                                        </tr>
                                                                    </thead>
                                                                </table>

                                                                 <input type="hidden" id="qsrtNo51_idx"/>
                                                            </li>
                                                            <li class="mar-btm">
                                                                회사채로 자금 조달 계획이 있으신지 또는 상환 계획이 있으신지?<br/>
                                                                6-1.회사채로 자금조달 계획이 있으시다면 언제 어느 정도 발행하실 계획이십니까?<br/>
                                                                <input type="text" size="12" class="qn" id="qsrtNo61_month"/>월&nbsp;&nbsp;<input type="number" size="20" class="qn" id="qsrtNo61_monthAmt" style="text-align: right;"/>천원 

                                                                <div class="pull-right pad-rgt mar-btm">
                                                                    <button type="button" class="btn btn-default" id="onInit61">다시 입력하기</button>
                                                                    <button type="button" class="finish btn btn-primary" id="onSave61">등록</button>
                                                                    <button type="button" class="finish btn btn-success" id="onDel61">삭제</button>
                                                                </div>

                                                                <table id="grid-list61" class="table table-bordered table-hover table-striped">
                                                                    <thead>
                                                                        <tr>
                                                                            <th data-width="20%" data-column-id="month" data-header-align="center" data-align="center">월</th>
                                                                            <th data-width="80%" data-column-id="monthAmt" data-header-align="center" data-align="right">조달금액</th>
                                                                            <th data-column-id="idx" data-header-align="center" data-align="center" data-visible="false">index</th>
                                                                        </tr>
                                                                    </thead>
                                                                </table>
                                                                <input type="hidden" id="qsrtNo61_idx"/>

                                                                6-2.회사채의 상환 계획이 있으시다면 언제 어느 정도 상환하실 계획이십니까?<br/>
                                                                <input type="text" size="12" class="qn" id="qsrtNo62_month"/>월&nbsp;&nbsp;<input type="number" size="20" class="qn" id="qsrtNo62_monthAmt" style="text-align: right;"/>천원 

                                                                <div class="pull-right pad-rgt mar-btm">
                                                                    <button type="button" class="btn btn-default" id="onInit62">다시 입력하기</button>
                                                                    <button type="button" class="finish btn btn-primary" id="onSave62">등록</button>
                                                                    <button type="button" class="finish btn btn-success" id="onDel62">삭제</button>
                                                                </div>

                                                                <table id="grid-list62" class="table table-bordered table-hover table-striped">
                                                                    <thead>
                                                                        <tr>
                                                                            <th data-width="20%" data-column-id="month" data-header-align="center" data-align="center">월</th>
                                                                            <th data-width="80%" data-column-id="monthAmt" data-header-align="center" data-align="right">상환금액</th>
                                                                            <th data-column-id="idx" data-header-align="center" data-align="center" data-visible="false">index</th>
                                                                        </tr>
                                                                    </thead>
                                                                </table>    

                                                                <input type="hidden" id="qsrtNo62_idx"/>                                                            
                                                            </li>
                                                            <li class="mar-btm">
                                                                우리나라 경기변동 및 동사아이템의 생산과 판매 시스템으로 보아 금년도 말의 재고자산 수준은 작년말과 비교 하여 증가 또는 감소하실 것으로 보입니까?<br/>
                                                                재고자산이 전년도에 비해 <input type="number" size="20" class="qn" id="qsrtInfo_qsrtNo7_no1_rsltVl" style="text-align: right;"/>천원 정도 증가할 것이다<br/>
                                                                재고자산이 전년도에 비해 <input type="number" size="20" class="qn" id="qsrtInfo_qsrtNo7_no2_rsltVl" style="text-align: right;"/>천원 정도 감소할 것이다
                                                            </li>
                                                            <li class="mar-btm">
                                                                평균 이자율 <input type="text" size="20" class="qn" id="qsrtInfo_qsrtNo11_no1_rsltVl" style="text-align: right;"/> %<br/>
                                                            </li>
                                                        </ol>

                                            </div>
                                        </div>
                                        <!-- //설문지 -->
                                        
                                    </div>
                                    
                                    <div class="alert alert-danger" role="alert">
                                        <span id="errMsg"/>
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


                                </div>
                                <!--//★설문지★---------------------------------------------------------------->

                                 <!--★시설 운전 자금 공급 계획★---------------------------------------------------------------->
                                <div class="tab-pane pad-btm fade" id="sheet2" >

                                    <div class="row" *ngIf="arrlength > 0">
                                        <!-- 매출패턴 -->
                                        <div class="panel">
                                            <div class="panel-heading">
                                                <h3 class="panel-title">시설 운전자금 공급계획</h3>
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
                                                                            <th width="15%" style="text-align: center;">사용한도(천원)</th>
                                                                            <th width="15%" style="text-align: center;">지원예정(월)</th>
                                                                        </tr>
                                                                    </thead>
                                                                    <tbody>
                                                                        <tr>
                                                                            <td align="center"><input type="text" class="qn" id="qsrtNo81_kindNm" style="width: 100%"/></td>
                                                                            <td align="center"><input type="text" class="qn" id="qsrtNo81_etcNm" style="width: 100%"/></td>
                                                                            <td align="center"><input type="text" class="qn" id="qsrtNo81_trmDsncNm" style="width: 100%"/></td>
                                                                            <td align="center"><input type="number" class="qn" id="qsrtNo81_etcIrt" style="width: 80%"/>%</td>
                                                                            <td align="center"><input type="number" class="qn" id="qsrtNo81_rsltVl" style="text-align: right; width: 100%"/></td>
                                                                            <td align="center"><input type="number" class="qn" id="qsrtNo81_baseYm" style="width: 100%"/></td>                                                                        
                                                                        </tr>
                                                                    </tbody>
                                                                </table><br/>
                                                                <input type="hidden" id="qsrtNo81_idx"/> 

                                                                <div class="pull-right pad-rgt mar-btm">
                                                                    <button type="button" class="btn btn-default" id="onInit81">다시 입력하기</button>
                                                                    <button type="button" class="finish btn btn-primary" id="onSave81">등록</button>
                                                                    <button type="button" class="finish btn btn-success" id="onDel81">삭제</button>
                                                                </div>

                                                                <table id="grid-list71" class="table table-bordered table-hover table-striped">
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
                                                            시설자금<br/><br/>
                                                            <table width="100%" class="table table-condensed">
                                                                    <thead>
                                                                        <tr class="text-center">
                                                                            <th width="25%" style="text-align: center;">구분</th>
                                                                            <th width="15%" style="text-align: center;">운용</th>
                                                                            <th width="15%" style="text-align: center;">기간</th>
                                                                            <th width="15%" style="text-align: center;">이율</th>
                                                                            <th width="15%" style="text-align: center;">사용한도(천원)</th>
                                                                            <th width="15%" style="text-align: center;">지원예정(월)</th>
                                                                        </tr>
                                                                    </thead>
                                                                    <tbody>
                                                                        <tr>
                                                                            <td align="center"><input type="text" class="qn" id="qsrtNo91_kindNm" style="width: 100%"/></td>
                                                                            <td align="center"><input type="text" class="qn" id="qsrtNo91_etcNm" style="width: 100%"/></td>
                                                                            <td align="center"><input type="text" class="qn" id="qsrtNo91_trmDsncNm" style="width: 100%"/></td>
                                                                            <td align="center"><input type="number" class="qn" id="qsrtNo91_etcIrt" style="width: 80%"/>%</td>
                                                                            <td align="center"><input type="number" class="qn" id="qsrtNo91_rsltVl" style="text-align: right; width: 100%"/></td>
                                                                            <td align="center"><input type="number" class="qn" id="qsrtNo91_baseYm" style="width: 100%"/></td>
                                                                        </tr>
                                                                    </tbody>
                                                                </table><br/>

                                                                <div class="pull-right pad-rgt mar-btm">
                                                                    <button type="button" class="btn btn-default" id="onInit91">다시 입력하기</button>
                                                                    <button type="button" class="finish btn btn-primary" id="onSave91">등록</button>
                                                                    <button type="button" class="finish btn btn-success" id="onDel91">삭제</button>
                                                                </div>

                                                                <table id="grid-list72" class="table table-bordered table-hover table-striped">
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
                                                                            <td align="center"><input type="text" class="qn" id="qsrtNo101_kindNm" style="width: 100%"/></td>
                                                                            <td align="center"><input type="text" class="qn" id="qsrtNo101_etcNm" style="width: 100%"/></td>
                                                                            <td align="center"><input type="text" class="qn" id="qsrtNo101_trmDsncNm" style="width: 100%"/></td>
                                                                            <td align="center"><input type="number" class="qn" id="qsrtNo101_etcIrt" style="width: 80%"/>%</td>
                                                                        </tr>
                                                                    </tbody>
                                                                </table><br/>

                                                                <div class="pull-right pad-rgt mar-btm">
                                                                    <button type="button" class="btn btn-default" id="onInit101">다시 입력하기</button>
                                                                    <button type="button" class="finish btn btn-primary" id="onSave101">등록</button>
                                                                    <button type="button" class="finish btn btn-success" id="onDel101">삭제</button>
                                                                </div>
                                                                
                                                                <table id="grid-list73" class="table table-bordered table-hover table-striped">
                                                                    <thead>
                                                                        <tr>
                                                                            <th data-width="25%" data-column-id="kindNm" data-header-align="center" data-align="center">구분</th>
                                                                            <th data-width="30%" data-column-id="etcNm" data-header-align="center" data-align="center">명칭</th>
                                                                            <th data-width="20%" data-column-id="trmDsncNm" data-header-align="center" data-align="center">기간</th>
                                                                            <th data-width="15%" data-column-id="etcIrt" data-header-align="center" data-align="center">수익율</th>
                                                                            <th data-column-id="amt" data-header-align="center" data-visible="false">결과값</th>
                                                                            <th data-column-id="baseYm" data-header-align="center" data-visible="false">분석월</th>
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
                                    <!--★시설 운전 자금 공급 계획★---------------------------------------------------------------->
                                </div>    

                                <!--★현금수입★---------------------------------------------------------------->
                                <div class="tab-pane pad-btm fade" id="sheet3">

                                    <div class="row">
                                        <div class="col-lg-12">
                                            <div class="panel">
                                                <div class="panel-heading">
                                                    <h3 class="panel-title">현금수입</h3>
                                                </div>
                                                <span id="fincashIncomeTable"/>
                                            </div>
                                        </div>
                                    </div>
                                                                        
                                </div>
                                <!--//★현금수입★---------------------------------------------------------------->
                                
                                <!--★현금지출★---------------------------------------------------------------->
                                <div class="tab-pane pad-btm fade" id="sheet4">

                                    <div class="row">
                                        <div class="col-lg-12">
                                            <div class="panel">
                                                <div class="panel-heading">
                                                    <h3 class="panel-title">현금지출</h3>
                                                </div>
                                                <span id="fincashOutcomeTable"/>
                                            </div>
                                        </div>
                                    </div>
                                                                        
                                </div>
                                <!--//★현금지출★---------------------------------------------------------------->
                                
                                <!--★현금예산★---------------------------------------------------------------->
                                <div class="tab-pane pad-btm fade" id="sheet5">

                                    <div class="row">
                                        <div class="col-lg-12">
                                            <div class="panel">
                                                <div class="panel-heading">
                                                    <h3 class="panel-title">현금예산</h3>
                                                </div>
                                                <span id="fincashBdgtAmtTable"/>                                                
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <!--//★현금예산★---------------------------------------------------------------->

                                <!--★최종결과★---------------------------------------------------------------->
                                <div class="tab-pane pad-btm fade in active" id="result">
                                    <span id="fincashFlowResultTable"/>

                                    <hr class="new-section-sm bord-no">
                                </div>
                                <!--//★최종결과★---------------------------------------------------------------->


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
<script src="/bootstrap/thema/fico2000/js/app/fin/FIN04003M00Component.js"></script>   