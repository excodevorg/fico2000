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
                                            <i class="fa fa-credit-card icon-large color-blue"></i>
                                            <br/>
                                            <small class="color-blue">결제 수단 선택</small>
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
                                    <h3 class="mb0">주문 정보</h3>
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
                                    <!--End 상품선택테이블-->

                                    <h3>결제 방법</h3>
                                    <table class="table mt10 bord-btm" style="color:#000;text-align: center;">
                                        <tr>
                                            <td class="bg-color-light color-black"><b>결제 금액</b></td>
                                            <td  id="td-product-price"></td>
                                        </tr>
                                        <tr>
                                            <td class="bg-color-light color-black"><b>결제 수단</b></td>
                                            <td>
                                                <div class="flex-container px-10">

                                                    <input id="radio1" type="radio" name="pay" value="0" checked>
                                                    <label for="radio1" class="px-5 pt2">신용카드</label>

                                                    <span class="px-10"></span>

                                                    <input id="radio3" type="radio" name="pay" value="1">
                                                    <label for="radio3" class="px-5 pt2">무통장 입금(가상계좌)</label>
                                                </div>
                                            </td>
                                        </tr>
                                    </table>

                                    <div class="text-center margin-top-20">
                                        <p>결제하기 버튼은 한번만 클릭하시고 결제가 완료될 때까지 잠시만 기다려 주세요</p>

                                        <button class="mar-rgt mt20 btn btn-default btn-lg btn-rounded"  id="btn_prev_move"><i class="fa fa-angle-left"></i> 이전 단계</button>
                                        <button class="mt20 btn btn-primary btn-lg btn-rounded" id="btn_settlement">결제하기</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!--===================================================-->
                <!--End page content-->
            </div>
            <div id="productId" value="<%=params%>" />
            <div id="useStartYmd" value="" />
            <div id="useEndYmd" value="" />
            <form name="popSettleForm">
            	<input type="hidden" name="SERVICE_ID"/>
				<input type="hidden" name="ORDER_ID"/>
				<input type="hidden" name="ORDER_DATE"/>
				<input type="hidden" name="ITEM_NAME"/>
				<input type="hidden" name="ITEM_CODE"/>
				<input type="hidden" name="USER_NAME"/>
				<input type="hidden" name="USER_EMAIL"/>
				<input type="hidden" name="USER_ID"/>
				<input type="hidden" name="AMOUNT"/>
				<input type="hidden" name="QUOTA" value="1"/>
				<input type="hidden" name="INSTALLMENT_PERIOD" valeu="0"/>
				<input type="hidden" name="DIRECT_USE" value="0001"/>
				<input type="hidden" name="RETURN_URL"/>
            </form>
            
            <!--===================================================-->
            <!--END CONTENT CONTAINER-->
            
 <script src="/bootstrap/thema/fico2000_new/js/app/join/JOIN03001M00Component.js"></script>
 <script src="/bootstrap/thema/fico2000_new/js/app/join/join.services.js"></script>  