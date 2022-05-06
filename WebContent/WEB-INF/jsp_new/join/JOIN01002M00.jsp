<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<%@include file="/inc/common.jsp" %>

           <!--CONTENT CONTAINER-->
            <!--===================================================-->
            <div id="content-container">

                <!--Page Title-->
                <!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
                <div id="page-title">
                    <h2 class="text-overflow">이용신청</h2>
                </div>
                <!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
                <!--End page title-->

                <!--Page content-->
                <!--===================================================-->
                <div id="page-content" style="margin-bottom: 130px;">

                    <div class="row">
                        <div class="col-xs-12 col-md-10 col-lg-8">
                            <!-- panel -->
                            <!--===================================================-->
                            <div class="panel">
                                <div class="panel-body">
                                    <!--회원가입 Process-->
                                    <div class="flex-container space-between register-header">
                                        <div class="text-center px-20">
                                            <i class="fa fa-check-square icon-2x icon-large light-grey-text"></i>
                                            <br/>
                                            <small>약관동의</small>
                                        </div>
                                        <i class="fa fa-angle-right icon-2x icon-large light-grey-text"></i>
                                        <div class="text-center">
                                            <i class="fa fa-certificate icon-2x icon-large color-blue"></i>
                                            <br/>
                                            <small color="color-blue">회사정보 입력</small>
                                        </div>
                                        <i class="fa fa-angle-right icon-2x icon-large light-grey-text"></i>
                                        <div class="text-center">
                                            <i class="fa fa fa-pencil-square icon-2x icon-large light-grey-text"></i>
                                            <br/>
                                            <small>회원 인증</small>
                                        </div>
                                        <i class="fa fa-angle-right icon-2x icon-large light-grey-text"></i>
                                        <div class="text-center">
                                            <i class="fa fa-user icon-2x icon-large light-grey-text"></i>
                                            <br/>
                                            <small>신청 완료</small>
                                        </div>
                                    </div>
                                    <hr class="my10"/>
                                    <!--End 회원가입 Process-->

                                    <div class="panel customPanel mb100">
                                        <form id="demo-bvd-notempty" action="forms-validation.html" class="form-horizontal">
                                            <div class="bord-btm">
                                                <h3 class="panel-title">가입정보</h3>
                                            </div>

                                            <div class="panel-body">
                                                <p class="bord-btm py5 text-main text-bold">신청자 정보</p>
                                                <fieldset>
                                                    <div class="form-group px-10">
                                                        <label class="col-sm-2 control-label">신청자</label>
                                                        <div class="col-sm-4">
                                                            <input type="text" class="form-control" name="username" placeholder="이름">
                                                            <small class="error-text no-username">가입 신청자 이름을 입력해 주세요</small>
                                                        </div>
                                                        <label class="col-sm-2 control-label">휴대폰</label>
                                                        <div class="col-sm-4">
                                                            <input type="text" class="form-control" name="phone" placeholder="010-0000-0000">
                                                            <small class="error-text no-phone">가입 신청자 휴대폰 번호를 입력해 주세요</small>
                                                            <small class="error-text err-phonetype">휴대폰 번호를 형식에 맞게 입력해 주세요</small>
                                                        </div>
                                                    </div>

                                                    <p class="bord-btm py5 text-main text-bold">가입회사 정보</p>
                                                    <div class="form-group px-10">
                                                        <label class="col-lg-2 control-label">회사명</label>
                                                        <div class="col-lg-4">
                                                            <input type="text" class="form-control" name="company-name" placeholder="회사명">
                                                            <small class="error-text no-company-name">회사명을 입력해 주세요</small>
                                                        </div>
                                                        <label class="col-lg-2 control-label">대표자</label>
                                                        <div class="col-lg-4">
                                                            <input type="text" class="form-control" name="representative-name" placeholder="대표자">
                                                            <small class="error-text no-representative-name">대표자명을 입력해 주세요</small>
                                                        </div>
                                                    </div>
                                                    <div class="form-group px-10">
                                                        <label class="col-lg-2 control-label">사업자등록번호</label>
                                                        <div class="col-lg-4">
                                                            <div class="flex-container">
                                                                <input type="number" class="form-control" name="cor-number1">
                                                                <span class="mx10 padding-top-5">-</span>
                                                                <input type="number" class="form-control" name="cor-number2">
                                                                <span class="mx10 padding-top-5">-</span>
                                                                <input type="number" class="form-control" name="cor-number3">
                                                            </div>
                                                            <small class="error-text no-cor-number">사업자등록번호를 입력해 주세요</small>
                                                        </div>
                                                        <label class="col-lg-2 control-label">업태 / 종목</label>
                                                        <div class="col-lg-4">
                                                            <div class="flex-container">
                                                                <input type="text" class="form-control" name="business-conditions" placeholder="업태">
                                                                <span class="mx10 padding-top-5">/</span>
                                                                <input type="text" class="form-control" name="lines" placeholder="종목">
                                                            </div>
                                                            <small class="error-text no-business-conditions">업태/종목을 입력해 주세요</small>
                                                        </div>
                                                    </div>
                                                    <div class="form-group px-10">
                                                        <label class="col-lg-2 control-label">설립일자</label>
                                                        <div class="col-lg-4">
                                                            <input type="text" name="foundation-date" class="form-control" placeholder="2019-01-01">
                                                            <small class="error-text no-foundation-date">설립일자를 입력해 주세요</small>
                                                            <small class="error-text err-foundation-date">1999-01-01 형식으로 날자를 입력해주세요.</small>
                                                            <small class="error-text err2-foundation-date">존재하지 않은 년월일을 입력하셨습니다. 다시한번 확인해주세요</small>
                                                        </div>
                                                    </div>
                                                    <div class="form-group px-10">
                                                        <label class="col-lg-2 control-label">주소</label>
                                                        <div class="col-lg-10">
                                                            <input type="text" class="form-control" name="address" placeholder="주소">
                                                            <small class="error-text no-address">주소를 입력해 주세요</small>
                                                        </div>
                                                    </div>

                                                    <p class="bord-btm py5 text-main text-bold">세금계산서 수령 정보</p>
                                                    <div class="form-group px-10">
                                                        <label class="col-lg-2 control-label pt0"></label>
                                                        <div class="col-lg-7">
                                                            <div class="flex-container">
                                                                <input id="radio1" type="radio" name="tax" value="0">
                                                                <label for="radio1" class="px-5 pt2">회사정보와 동일</label>

                                                                <span class="px-10"></span>

                                                                <input id="radio2" type="radio" name="tax" value="1">
                                                                <label for="radio2" class="px-5 pt2">직접입력</label>

                                                                <span class="px-10"></span>

                                                                <input id="radio3" type="radio" name="tax" value="2">
                                                                <label for="radio3" class="px-5 pt2">수령하지 않음</label>
                                                            </div>
                                                            <small class="error-text no-tax">세금계산서 수령 정보를 선택해 주세요</small>
                                                        </div>
                                                    </div>

                                                    <!--세금계산서 수령 정보 '직접입력' 선택한 경우-->
                                                    <div id="direct">
                                                        <div class="form-group px-10">
                                                            <label class="col-lg-2 control-label">회사명</label>
                                                            <div class="col-lg-4">
                                                                <input type="text" class="form-control" name="company-name2" placeholder="회사명">
                                                                <small class="error-text no-company-name2">회사명을 입력해 주세요</small>
                                                            </div>
                                                            <label class="col-lg-2 control-label">대표자</label>
                                                            <div class="col-lg-4">
                                                                <input type="text" class="form-control" name="representative-name2" placeholder="대표자">
                                                                <small class="error-text no-representative-name2">대표자명을 입력해 주세요</small>
                                                            </div>
                                                        </div>
                                                        <div class="form-group px-10">
                                                            <label class="col-lg-2 control-label">사업자등록번호</label>
                                                            <div class="col-lg-4">
                                                                <div class="flex-container">
                                                                    <input type="number" class="form-control" name="cor2-number1">
                                                                    <span class="mx10 padding-top-5">-</span>
                                                                    <input type="number" class="form-control" name="cor2-number2">
                                                                    <span class="mx10 padding-top-5">-</span>
                                                                    <input type="number" class="form-control" name="cor2-number3">
                                                                </div>
                                                                <small class="error-text no-cor2-number">사업자등록번호를 입력해 주세요</small>
                                                            </div>
                                                            <label class="col-lg-2 control-label">업태 / 종목</label>
                                                            <div class="col-lg-4">
                                                                <div class="flex-container">
                                                                    <input type="text" class="form-control" name="business-conditions2" placeholder="업태">
                                                                    <span class="mx10 padding-top-5">/</span>
                                                                    <input type="text" class="form-control" name="lines2" placeholder="종목">
                                                                </div>
                                                                <small class="error-text no-business-conditions2">업태/종목을 입력해 주세요</small>
                                                            </div>
                                                        </div>
                                                        <div class="form-group px-10">
                                                            <label class="col-lg-2 control-label">설립일자</label>
                                                            <div class="col-lg-4">
                                                                <input type="text" name="foundation-date2" class="form-control" placeholder="2019-01-01">
                                                                <small class="error-text no-foundation-date2">설립일자를 입력해 주세요</small>
                                                                <small class="error-text err-foundation-date2">1999-01-01 형식으로 날자를 입력해주세요</small>
                                                                <small class="error-text err2-foundation-date2">존재하지 않은 년월일을 입력하셨습니다. 다시한번 확인해주세요</small>
                                                            </div>
                                                        </div>
                                                        <div class="form-group px-10">
                                                            <label class="col-lg-2 control-label">주소</label>
                                                            <div class="col-lg-10">
                                                                <input type="text" class="form-control" name="address2" placeholder="주소">
                                                                <small class="error-text no-address2">주소를 입력해 주세요</small>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <!--END 세금계산서 수령 정보 '직접입력' 선택한 경우-->

                                                </fieldset>
                                            </div>
                                        </form>
                                    </div>

                                    <div class="text-center">
                                        <button class="mt20 btn btn-primary btn-lg btn-rounded" id="nextStep2">다음</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!--===================================================-->
                <!--End page content-->
            </div>
            <div id="productId" value="<%=params%>"/>
            <!--===================================================-->
            <!--END CONTENT CONTAINER-->

 <script src="/bootstrap/thema/fico2000_new/js/app/join/JOIN01002M00Component.js"></script>
  <script src="/bootstrap/thema/fico2000_new/js/app/join/join.services.js"></script>          
