<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<%@include file="/inc/common.jsp" %>

            <!--CONTENT CONTAINER-->
            <!--===================================================-->
            <div id="content-container">
                
                <!--Page Title-->
                <!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
                <div id="page-title">
                    <h1 class="page-header text-overflow"> 재무·투자활동시나리오  > 경영활동 현금흐름진단 시나리오 입력</h1>

                    <!--Searchbox-->
                    <div class="searchbox"  style="width:350px;">
                        <div class="input-group custom-search-form">
                            <ul class="pull-right breadcrumb">
                                <li><a href="index.html">Home</a></li>
                                <li>재무·투자활동현금흐름</li>
                                <li class="active">재무·투자활동시나리오</li>
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
                                                                    <button type="button" class="finish btn btn-darkgray" id="onDel11">삭제</button>
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
                                                                    <button type="button" class="finish btn btn-darkgray" id="onDel12">삭제</button>
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
                                                                    <button type="button" class="finish btn btn-darkgray" id="onDel21">삭제</button>
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
                                                                    <button type="button" class="finish btn btn-darkgray" id="onDel31">삭제</button>
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
                                                                    <button type="button" class="finish btn btn-darkgray" id="onDel41">삭제</button>
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
                                                                    <button type="button" class="finish btn btn-darkgray" id="onDel51">삭제</button>
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
                                                                    <button type="button" class="finish btn btn-darkgray" id="onDel61">삭제</button>
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
                                                                    <button type="button" class="finish btn btn-darkgray" id="onDel62">삭제</button>
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
                
                 <script src="/bootstrap/thema/fico2000_new/js/app/fin/FIN03301M00Component.js"></script>   

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

                        FIN03301M00.onSearch();
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

