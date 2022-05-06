<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<%@include file="/inc/common.jsp" %>

            <!--CONTENT CONTAINER-->
        <!--===================================================-->
        <div id="content-container">

            <!--Page Title-->
            <!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
            <div id="page-title">
                <h1 class="page-header text-overflow">결제 및 업그레이드<a href="javascript:void(0);" class="btn btn-xs btn-rounded btn-default ml16 pad-lft pad-rgt" onClick="toMove('JOIN01000M00')">재무진단엔진 이용방법?</a></h1>
            </div>
            <!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
            <!--End page title-->


            <!--Page content-->
            <!--===================================================-->
            <div id="page-content">

                <div class="row">
                    <div class="col-xs-12">
                        <ul class="mypage_snb">
                            <li id="tabMenu0" class="active"><a><i class="fa fa-check mr5"></i>신청 및 이용내역</a></li>
                            <li id="tabMenu1" ><a><i class="fa fa-credit-card mr5"></i>결제 내역</a></li>
                        </ul>
                    </div>
                </div>

                <div class="row">
                    <div class="col-xs-12">

                        <!-- panel -->
                        <!--===================================================-->
                        <!-- 신청 내역 -------------------------------------------->
                        <div class="panel tabDetail" id="tab0">
                            <div class="panel-body">
                                <h3 class="mt10 color-black">이용 신청한 프리미엄 서비스</h3>
                                
                                <div class="row mt5 use-apc-info">
                                    <div id="use-apc-info-content"/>
                                </div>

                                <div class="row mt5 text-center no-use-apc-info">
                                    <br/>
                                    <i class="fa fa-exclamation-triangle color-light-gray icon-4x"></i>
                                    <h4 class="text-center mt10 mb20 grey--text">신청 내역이 없습니다</h4>
                                    <br/><br/>
                                    <button class="btn btn-primary btn-rounded btn-lg mb20" onclick="toMove('JOIN01000M00')"><strong>재무진단엔진 이용신청</strong></button>
                                </div>
 
                            </div>
                        </div>

                        <!-- 전체 구매 내역 -------------------------------------------->
                        <div class="panel tabDetail" id="tab1">
                            <div class="panel-body">
                                <h3 class="mt10 color-black">전체 결제 내역</h3>

                                <div class="row mt5 settle-history">
                                </div>

                                <div class="row mt5 no-settle-history">
                                    <div class="row mt5 text-center">
                                        <br/>
                                        <i class="fa fa-exclamation-triangle color-light-gray icon-4x"></i>
                                        <h4 class="text-center mt10 mb20 grey--text">결제 내역이 없습니다</h4>
                                        <br/><br/>
                                        <button class="btn btn-primary btn-rounded btn-lg mb20" onclick="toMove('JOIN01000M00')"><strong>재무진단엔진 이용신청</strong></button>
                                    </div>
                                </div>

                            </div>
                        </div>

                       <!-- 주문정보상세 정보 팝업 -->
                        <div id="payDim"></div>
                        <div id="paydetail" class="pad-all bord-all">
                            <div class="flex-container border-bottom-gray">
                                <h2 class="mt0">주문 상세</h2>
                                <div class="spacer"></div>
                                <i class="fa fa-times-circle fa-2x color-grey cursor-pointer" onclick="hideDetailSettlement()"></i>
                            </div>
                            
                            <h4 class="mb0">주문 정보</h4>
                            <table class="table mt10 bord-btm lh2Table">
                                <thead class="bg-color-light">
                                <tr style="color:#000;text-align: center;">
                                    <td><b>주문번호</b></td>
                                    <td><b>상품명</b></td>
                                    <td><b>이용기간</b></td>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td id="detail-orderId"/>
                                    <td id="detail-product-name"/>
                                    <td id="detail-product-period"/>
                                </tr>
                                </tbody>
                            </table>
                            <h4 class="mb0">결제 정보</h4>
                            <!--결제 수단을 신용 카드로 선택한 경우 -->
                            <table class="table mt10 bord-btm">
                                <tr>
                                    <td class="bg-color-light color-black text-center"><b>결제 수단</b></td>
                                    <td id="td-detail-method"/>
                                </tr>
                                <tr>
                                    <td class="bg-color-light color-black text-center"><b>거래번호</b></td>
                                    <td id="td-detail-trxNo"/>
                                </tr>
                                <tr>
                                    <td class="bg-color-light color-black text-center"><b>승인번호</b></td>
                                    <td id="td-detail-apvNo"/>
                                </tr>
                                <tr>
                                    <td class="bg-color-light color-black text-center"><b>승인일시</b></td>
                                    <td id="td-detail-apvYmd"/>
                                </tr>
                                <tr>
                                    <td class="bg-color-light color-black text-center"><b>결제 금액</b></td>
                                    <td id="td-detail-amt"/>
                                </tr>
                            </table>
                        </div>

                    </div>
                </div>
            </div>
        </div>
        <!--===================================================-->
        <!--END CONTENT CONTAINER-->

            
 <script src="/bootstrap/thema/fico2000_new/js/app/join/JOIN02000M00Component.js"></script>
 <script src="/bootstrap/thema/fico2000_new/js/app/join/join.services.js"></script> 
        
