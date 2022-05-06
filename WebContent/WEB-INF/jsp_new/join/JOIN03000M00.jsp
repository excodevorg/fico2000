<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<%@include file="/inc/common.jsp" %>

<!--CONTENT CONTAINER-->
            <!--===================================================-->
            <div id="content-container">

                <!--Page Title-->
                <!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
                <div id="page-title">
                    <h2 class="text-overflow">주문/결제</h2>
                </div>
                <!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
                <!--End page title-->

                <!--Page content-->
                <!--===================================================-->
                <div id="page-content" style="margin-bottom: 130px;">

                    <div class="row">
                        <div class="col-xs-12 col-md-10 col-lg-10">
                            <!-- panel -->
                            <!--===================================================-->
                            <div class="panel">
                                <div class="panel-body">
                                    <!--결제 Process-->
                                    <div class="flex-container space-between register-header margin-top-20">
                                        <div class="text-center px-20">
                                            <i class="fa fa-shopping-basket icon-large color-blue"></i>
                                            <br/>
                                            <small class="color-blue">신청 상품 선택</small>
                                        </div>
                                        <i class="fa fa-angle-right icon-large light-grey-text"></i>
                                        <div class="text-center">
                                            <i class="fa fa-credit-card icon-large light-grey-text"></i>
                                            <br/>
                                            <small>결제 수단 선택</small>
                                        </div>
                                        <i class="fa fa-angle-right icon-large light-grey-text"></i>
                                        <div class="text-center">
                                            <i class="fa fa-check-square-o icon-large light-grey-text"></i>
                                            <br/>
                                            <small>결제완료</small>
                                        </div>
                                    </div>
                                    <!--End 결제 Process-->

                                    <!--상품선택테이블-->
                                    <table class="table margin-top-20 bord-btm" style="color:#000;text-align: center;">
                                        <thead class="bg-color-light">
                                        <tr style="color:#000;text-align: center;">
                                            <td><b>상품명</b></td>
                                            <td><b>만기일</b></td>
                                            <td><b>기간/비용</b></td>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <tr>
                                            <td>
                                                재무진단엔진
                                            </td>
                                            <td>
                                                2019-12-31
                                            </td>
                                            <td>
                                                <select class="form-control">
                                                    <option>기본재무컨설팅 - 2만원/월 자동결제</option>
                                                    <option>프리미엄재무컨설팅 - 10만원/월 자동결제</option>
                                                </select>
                                            </td>
                                        </tr>
                                        </tbody>
                                    </table>
                                    <!--End 상품선택테이블-->

                                    <!--상품설명-->
                                    <div class="pad-all bg-color-light margin-top-20" style="color:#000;">
                                        <h4 class="color-dark-blue">다양한 요금제</h4>
                                        <div class="flex-container border-top-gray border-bottom-gray">
                                            <div class="bg-color-dark-blue2 pad-all" style="width: 170px;">
                                                <b style="font-size: 15px;">기본재무컨설팅</b><br/>
                                                <small>월 2만원</small>
                                            </div>
                                            <div class="pre-line mx10 pad-all">II. 기업재무현황
                                                III. 기업재무진단평가
                                                IV. 기업종합검진종합평가
                                                총34개 항목
                                            </div>
                                        </div>
                                        <div class="flex-container border-bottom-gray">
                                            <div class="bg-color-dark-blue pad-all" style="width: 170px;flex:0 0 170px;">
                                                <b style="font-size: 15px;">프리미엄재무컨설팅</b><br/>
                                                <small>월 10만원</small>
                                            </div>
                                            <div class="pre-line mx10 pad-all">II. 기업재무현황
                                                III. 기업재무진단평가
                                                IV. 기업종합검진종합평가
                                                총 54개 항목
                                            </div>
                                            <div class="pre-line  pad-all">V. 비즈니스모델에 의한 현금흐름 컨설팅
                                                VI. 재무·투자활동에 의한 현금흐름 컨설팅
                                            </div>
                                        </div>

                                        <br/>
                                        <h4 class="color-dark-blue">언제든 간편 해지</h4>
                                        <p class="mb0">언제든지 클릭 한번으로 간편 해지</p>
                                        <p class="mb0">해지예약을 신청해도 기존 이용기간까지 이용 가능</p>
                                    </div>
                                    <!--End 상품설명-->

                                    <div class="text-center margin-top-20">
                                        <button class="mt20 btn btn-primary btn-lg btn-rounded" onclick="toMove('JOIN03001M00')">다음 단계 <i class="fa fa-angle-right"></i></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!--===================================================-->
                <!--End page content-->
            </div>
            <!--===================================================-->
            <!--END CONTENT CONTAINER-->
            
 <script src="/bootstrap/thema/fico2000_new/js/app/join/JOIN03000M00Component.js"></script>