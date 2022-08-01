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
                                        <div class="text-center">
                                            <i class="fa fa-credit-card icon-large light-grey-text"></i>
                                            <br/>
                                            <small>결제 수단 선택</small>
                                        </div>
                                        <i class="fa fa-angle-right icon-large light-grey-text"></i>
                                        <div class="text-center">
                                            <i class="fa fa-check-square-o icon-large color-blue"></i>
                                            <br/>
                                            <small class="color-blue">결제완료</small>
                                        </div>
                                    </div>
                                    <!--End 결제 Process-->

                                    <div class="text-center my50 py10">
                                        <h1>결제가 완료되었습니다</h1>
                                    </div>

                                    <!--주문정보테이블-->
                                    <h3 class="mb0">결제 정보</h3>
                                    <table class="table mt10 bord-btm" style="color:#000;text-align: center;">
                                        <thead class="bg-color-light">
                                        <tr style="color:#000;text-align: center;">
                                            <td><b>상품명</b></td>
                                            <td><b>이용기간</b></td>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <tr>
                                            <td id="td-product-name"></td>
                                            <td id="td-product-period"></td>
                                        </tr>
                                        </tbody>
                                    </table>
                                    <!--End 주문정보테이블-->

                                    <h3>결제 내역</h3>
                                    
                                    <div id="VirtualAcnt">
                                    <!--결제 수단을 가상 계좌 선택한 경우 -->
                                    <!-- p style="color:red;">결제 수단 : <font size="+1">가상 계좌</font> 선택한 경우</p-->
                                    <table class="table mt10 bord-btm">
                                        <tr>
                                            <td class="bg-color-light color-black text-center"><b>결제 수단</b></td>
                                            <td>가상계좌</td>
                                        </tr>
                                        <tr>
                                            <td class="bg-color-light color-black text-center"><b>은행</b></td>
                                            <td>농협중앙회</td>
                                        </tr>
                                        <tr>
                                            <td class="bg-color-light color-black text-center"><b>입금계좌</b></td>
                                            <td>T1123456789</td>
                                        </tr>
                                        <tr>
                                            <td class="bg-color-light color-black text-center"><b>입금기한</b></td>
                                            <td>2019년 2월 2일</td>
                                        </tr>
                                        <tr>
                                            <td class="bg-color-light color-black text-center"><b>승인 시간</b></td>
                                            <td>2019년 4월 2일</td>
                                        </tr>
                                        <tr>
                                            <td class="bg-color-light color-black text-center"><b>결제 금액</b></td>
                                            <td><h3 class="ma0 pa0">28,600원 <font size="-1"><b>(부가세 포함)</b></font></h3></td>
                                        </tr>
                                    </table>
                                    </div>

									<div id="Card">
                                    <!--결제 수단을 신용 카드로 선택한 경우 -->
                                    <!-- p style="color:red;">결제 수단 : <font size="+1">신용 카드</font> 선택한 경우</p-->
                                    <table class="table mt10 bord-btm">
                                        <tr>
                                            <td class="bg-color-light color-black text-center"><b>결제 수단</b></td>
                                            <td id="td-method"></td>
                                        </tr>
                                        <tr>
                                            <td class="bg-color-light color-black text-center"><b>주문번호</b></td>
                                            <td id="td-orderId"></td>
                                        </tr>
                                        <tr>
                                            <td class="bg-color-light color-black text-center"><b>거래번호</b></td>
                                            <td id="td-trxNo"></td>
                                        </tr>
                                        <tr>
                                            <td class="bg-color-light color-black text-center"><b>승인번호</b></td>
                                            <td id="td-apvNo"></td>
                                        </tr>
                                        <tr>
                                            <td class="bg-color-light color-black text-center"><b>승인일시</b></td>
                                            <td id="td-apvYmd"></td>
                                        </tr>
                                        <tr>
                                            <td class="bg-color-light color-black text-center"><b>결제 금액</b></td>
                                            <td id="td-amt"></td>
                                        </tr>
                                    </table>
									</div>

                                    <div class="text-center margin-top-20 mb100">
                                        <button class="mar-rgt mt20 btn btn-default btn-lg btn-rounded" id="goMyPage">결제 내역 보기</button>
                                        <button class="mt20 btn btn-primary btn-lg btn-rounded" id="goHome">홈으로 가기</button>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!--===================================================-->
                <!--End page content-->
            </div>
            <div id="settleStoreOrderId" value="<%=params%>"/>
            <!--===================================================-->
            <!--END CONTENT CONTAINER-->

 <script src="/bootstrap/thema/fico2000_new/js/app/join/JOIN09000M00Component.js"></script>