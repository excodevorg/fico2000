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
                                            <i class="fa fa-certificate icon-2x icon-large light-grey-text"></i>
                                            <br/>
                                            <small>회사정보 입력</small>
                                        </div>
                                        <i class="fa fa-angle-right icon-2x icon-large light-grey-text"></i>
                                        <div class="text-center">
                                            <i class="fa fa fa-pencil-square icon-2x icon-large color-blue"></i>
                                            <br/>
                                            <small color="color-blue">회원 인증</small>
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

                                    <div class="panel customPanel mb100 pad-all">

                                            <div class="panel-body">
                                                <fieldset>

                                                        <div class="row margin-bottom-5">
                                                            <label class="col-sm-2 control-label">이름</label>
                                                            <div class="col-sm-6">
                                                                <input type="text" class="form-control" name="username" placeholder="이름">
                                                                <small class="error-text no-username">이름을 입력해 주세요</small>
                                                            </div>
                                                        </div>

                                                        <div class="row">
                                                            <label class="col-sm-2 control-label">이메일</label>
                                                            <div class="col-sm-6">
                                                                <input type="text" class="form-control" name="email" placeholder="fico2000@abc.com">
                                                                <small class="error-text no-email">이메일 주소를 입력해 주세요</small>
                                                            </div>
                                                        </div>

                                                        <div class="row margin-bottom-5">
                                                            <div class="col-sm-10 col-sm-offset-2">
                                                                <div class="flex-container py10 termChk">
                                                                    <input id="chk-email" class="magic-checkbox" type="checkbox" name="sameasmaster">
                                                                    <label for="chk-email" class="pa0 noselect ml10"> 이메일을 통한 서비스 및 상품 안내, 이벤트, 공지 등의 정보 수신에 동의합니다. (선택)</label>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div class="row">
                                                            <label class="col-sm-2 control-label">휴대전화</label>
                                                        <div class="col-sm-4">
                                                            <input type="text" class="form-control" name="phone" placeholder="010-0000-0000">
                                                            <small class="error-text no-phone">가입 신청자 휴대폰 번호를 입력해 주세요</small>
                                                            <small class="error-text err-phonetype">휴대폰 번호를 형식에 맞게 입력해 주세요</small>
                                                        </div>
                                                        </div>

                                                        <div class="row margin-bottom-5">
                                                            <div class="col-sm-10 col-sm-offset-2">
                                                                <div class="flex-container py10 termChk">
                                                                    <input id="chk-sms" class="magic-checkbox mr10" type="checkbox" name="sameasmaster">
                                                                    <label for="chk-sms" class="pa0 noselect ml10"> 문자(SMS)를 통한 서비스 및 상품 안내, 이벤트, 공지 등의 정보 수신에 동의합니다. (선택)</label>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div class="row margin-bottom-5 privateType">
                                                            <label class="col-sm-2 control-label">회원인증</label>
                                                            <div class="col-sm-10">
                                                                상기 입력하신 휴대전화번호로 인증합니다.
                                                                <button class="btn btn-default btn-sm btn-rounded" id="authCodeBtn">인증번호받기</button>
                                                            </div>
		                                                </div>
		                                                
		                                                <div class="row authCode">
                                                            <label class="col-sm-2 control-label">인증번호</label>
                                                        <div class="col-sm-4">
                                                            <input type="text" class="form-control" name="authcode" >
                                                            <small class="error-text authcode-timeout">남은시간 <span id="timer"></span></small>
                                                            <small class="error-text authcode-timeout-msg">인증시간이 초과하였습니다. 다시 인증해주시기 바랍니다.</small>
                                                            <small class="error-text no-authcode">인증번호를 입력해 주세요</small>
                                                        </div>
                                                        </div>

                                                        <div class="row mt10 privateType" id="join_certification" style="background-color: #efefef;margin:0;">
                                                            <label class="col-sm-2 control-label ma0"></label>
                                                            <div class="col-sm-10 mt10">
                                                                <span class="mt10 mr10">인증번호 입력</span><input type="text" /> <button class="btn btn-default btn-rounded btn-sm">확인</button>

                                                                <!--이메일 선택한 경우-->
                                                                <ul class="no-list-style margin-bottom-10" id="email_info_text">
                                                                    <li>- 수신번호를 입력 후 확인버튼을 클릭 합니다.</li>
                                                                    <li>- 인증번호가 수신되지 않는 경우 새로운 인증번호를 받으시기 바랍니다.</li>
                                                                </ul>

                                                                <!--핸드폰 선택한 경우-->
                                                                <ul class="no-list-style margin-bottom-10" id="phone_info_text">
                                                                    <li>- 수신번호를 입력 후 확인버튼을 클릭 합니다.</li>
                                                                    <li>- 인증번호가 수신되지 않는 경우 새로운 인증번호를 받으시기 바랍니다.</li>
                                                                    <li>- 인증번호 발송은 하루 3번까지만 가능합니다.</li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </fieldset>
                                            </div>
                                        
                                        <div class="text-center">
                                        	<button class="mt20 btn btn-primary btn-lg btn-rounded"  id="join">신청완료</button>
                                    	</div>
                                    </div>

                              
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!--===================================================-->
                <!--End page content-->
            </div>
            <div id="productId" value="<%=params %>"/>
            <!--===================================================-->
            <!--END CONTENT CONTAINER-->

 <script src="/bootstrap/thema/fico2000_new/js/app/join/JOIN01003M00Component.js"></script>
 <script src="/bootstrap/thema/fico2000_new/js/app/join/join.services.js"></script>   