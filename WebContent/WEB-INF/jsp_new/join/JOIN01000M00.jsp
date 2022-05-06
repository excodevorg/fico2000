<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<%@include file="/inc/common.jsp" %>

<!--CONTENT CONTAINER-->
<!--===================================================-->
<div id="content-container">
    
<!--Page Title-->
<!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
<div id="page-title">
    <h1 class="page-header text-overflow">재무진단엔진 이용 신청</h1>
</div>
<!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
<!--End page title-->


<!--Page content-->
<!--===================================================-->
<div id="page-content">
    <!-- <div class="row">
        <div class="col-xs-12 col-md-12 col-lg-11"> -->
            <div class="row payCard">
               <!-- <div class="col-xs-12 col-sm-4"> --> 
                    <div class="panel panel-warning border-top-primary payInfo">
                        <div class="panel-body text-center">
                            <div class="row">
                                <h4>기본재무컨설팅</h4>
                                <h1 class="inline-block">2만원</h1><h3 class="inline-block grey--text">/월</h3>

								<% if (!loginCls) { %>
                                   	<button type="button" id="basicUseLoginBtn" class="btn btn-primary btn-rounded btn-lg mt20"><b>이용하기</b></button>
                                <% } else { %>
                                 	<button type="button" id="basicUseBtn" class="btn btn-primary btn-rounded btn-lg mt20"><b>이용하기</b></button>
                                <%} %>
                                 
                                <div class="mt10 box0">
                                    <small>등록 범위</small>
                                    <br/>
                                    <div class="text-center">신규기업등록 1개</div>
                                </div>

                                <div class="mt10 box1">
                                    <small>기본컨설팅 범위</small><br/>
                                    <div class="text-left pre-line px-30 mb20">II. 기업재무현황
                                        III. 기업재무진단평가
                                        IV. 기업종합검진종합평가
                                                                                          총34개 항목
                                    </div>
                                </div>

                                <div class="mt10 box2">
                                    <small>프리미엄 컨설팅 범위<br class="show-sm-and-down"/>(시나리오분석 영역)</small><br/>
                                    <div class="text-center">없음</div>
                                </div>

                                <div class="mt10 box3">
                                    <small>활용(예)</small><br/>
                                    <ul class="text-left">
                                        <li>- 세무사 또는 경영지도사가 기업 1개당 기본 컨설팅만 할 경우</li>
                                        <li>- 중소기업: 재무를 반영한 자금조달을 받고자 할 경우 등</li>
                                        <li>- 활용대상자가 업무영역을 높이고자 할 때</li>
                                    </ul>
                                </div>
                                <div class="box5">
                                 <small>활용대상</small><br/>
                                 <div class="text-left">중소기업경영자, CFO, CRO, 창업자, 세무사, 회계사, 경영지도사, 기술지도사, 재무전문가, 벤처캐피탈리스트, 사모펀드전문가, 가치투자자, 재무전공 학생 등</div>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                <!-- </div>
                <div class="col-xs-12 col-sm-4"> -->
                    <div class="panel panel-warning border-top-gold payInfo">
                        <div class="panel-body text-center">
                            <div class="row">
                                <h4>프리미엄재무컨설팅</h4>
                                <h1 class="inline-block">10만원</h1><h3 class="inline-block grey--text">/월</h3>

								<% if (!loginCls) { %>
                                    <button type="button" id="premiumUseLoginBtn" class="btn btn-primary btn-rounded btn-lg mt20"><b>이용하기</b></button>
                                <% } else {%>
                                    <button type="button" id="premiumUseBtn" class="btn btn-primary btn-rounded btn-lg mt20"><b>이용하기</b></button>
                                <% } %>
                                
                                <div class="mt10 box0">
                                    <small>등록 범위</small><br/>
                                    <div class="text-left pre-line px-30">1. 신규기업등록 5개 등록분석
                                        2. 시나리오 5개 등록분석
                                    </div>
                                </div>

                                <div class="mt10 box1">
                                    <small>기본컨설팅 범위</small><br/>
                                    <div class="text-left pre-line px-30 mb20">II. 기업재무현황
                                        III. 기업재무진단평가
                                        IV. 기업종합검진종합평가
                                        총 54개 항목
                                    </div>
                                </div>

                                <div class="mt10 box2">
                                    <small>프리미엄 컨설팅 범위<br class="show-sm-and-down"/>(시나리오분석 영역)</small><br/>
                                    <div class="text-left pre-line mb20">V. 비즈니스모델에 의한 현금흐름 컨설팅
                                        VI. 재무·투자활동에 의한 현금흐름 컨설팅
                                    </div>
                                </div>

                                <div class="mt10 box3">
                                    <small>활용(예)</small><br/>
                                    <ul class="text-left">
                                        <li>- 세무사, 경영지도사 등 재무전문가가 가 정밀재무컨설팅을 하고자 할 경우</li>
                                        <li>- M&A, 투자안 검토시 ; 경영·재무리스크를 반영한 다양한민감도 분석 시</li>
                                        <li>- 활용대상자가 업무영역을 높이고자 할 때</li>
                                        <li>- 새로운 비즈니스 또는 프로젝트 투자검토 시</li>
                                    </ul>
                                </div>
                                <div class="box5">
                                 <small>활용대상</small><br/>
                                 <div class="text-left">중소기업경영자, CFO, CRO, 창업자, 세무사, 회계사, 경영지도사, 기술지도사, 재무전문가, 벤처캐피탈리스트, 사모펀드전문가, 가치투자자, 재무전공 학생 등</div>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                <!-- </div>
                <div class="col-xs-12 col-sm-4"> -->
                    <div class="panel panel-warning border-top-skyblue payInfo">
                        <div class="panel-body text-center">
                            <div class="row">
                                <h4 class="title">비즈니스상담</h4>
                                
                                <% if (!loginCls) { %>
                                    <button type="button" id="loginBtn" class="btn btn-primary btn-rounded btn-lg mt20"><b>로그인하기</b></button>
                                <% } %>
                                
                                <div class="show-sm-and-down"><br/></div><br/>

                                <div class="round mb20" style="max-width: 300px;margin:0 auto;">
                                    <img src="bootstrap/thema/fico2000/assets/img/renewal2019/sub02/consulting.jpg" class="img-rounded img-responsive"/>
                                </div>

                                <div class="mt20 box4">
                                    <small>상담 Platform에서 문의사항</small><br/>
                                    <ol class="text-left">
                                        <li>정밀한 재무컨설팅</li>
                                        <li>가치투자 또는 M&A</li>
                                        <li>기타 재무비즈니스 사항을 자세히 알고자 하는 기업 (비즈니스 Platform 업무범위 참조)</li>
                                    </ol>
                                </div>
                                <div class="box5">
                                 <small>활용대상</small><br/>
                                 <div class="text-left">중소기업경영자, CFO, CRO, 창업자, 세무사, 회계사, 경영지도사, 기술지도사, 재무전문가, 벤처캐피탈리스트, 사모펀드전문가, 가치투자자, 재무전공 학생 등</div>
                                </div>
                                
                                       </div>
                                   </div>
                               </div>
                           </div>
                       <!-- </div>
                   </div>
               </div> -->

	<div id="apcProductId" value=""/>
           <!--End page content-->
    </div>
</div>
<!--===================================================-->
<!--END CONTENT CONTAINER-->


        
<script src="/bootstrap/thema/fico2000_new/js/app/join/JOIN01000M00Component.js"></script>
<script src="/bootstrap/thema/fico2000_new/js/app/join/join.services.js"></script>