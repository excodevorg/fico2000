<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<%@include file="/inc/common.jsp" %>

<%

String publicKeyModulus = (String) request.getAttribute("publicKeyModulus");
String publicKeyExponent = (String) request.getAttribute("publicKeyExponent");

%>


    <!-- BACKGROUND IMAGE -->
		<!--===================================================-->
		<div id="bg-overlay" style='background-image: url("/bootstrap/thema/fico2000_new/img/bg-img/17.jpg");' class="bg-img"></div>

		<!-- REGISTRATION FORM -->
		<!--===================================================-->
		<div class="cls-content">
		    <div class="cls-content-lg panel">
		        <div class="panel-body">
		            <div class="mar-ver pad-btm">
		                <h3 class="h4 mar-no">회원가입</h3>
		                <p class="text-muted"></p>
		            </div>
		            <form name="ngForm" id="ngForm" method="post">
		                <div class="row">
		                    <div class="col-sm-12">
		                        <div class="form-group">
		                            <input type="text" class="form-control" id="userNm" name="userNm" required placeholder="신분증에 기재된 이름을 입력하세요.">
		                        </div>
		                        <div class="form-group">
		                            <input type="text" class="form-control" id="userId" name="userId" required placeholder="이메일을 입력하세요">
		                        </div>
		                    </div>
		                    <div class="col-sm-12">
		                        <div class="form-group">
		                            <input type="password" class="form-control" id="userPwd" name="userPwd"  placeholder="비밀번호 8자리를 입력하세요">
		                        </div>
		                        <div class="form-group">
		                            <input type="password" class="form-control" id="userPwd2" name="userPwd2" placeholder="비밀번호를 한번더 입력하세요">
		                        </div>
		                    </div>
		                </div>
                        <div class="alert alert-danger" role="alert">
                            <span id="errMsg"></span>
                        </div>
		                <input type='hidden' class="form-control" name="facebookid" id="facebookid">
						<input type='hidden' class="form-control" name="twitterid" id="twitterid">
						<input type='hidden' class="form-control" name="googleid" id="googleid">
						<input type='hidden' class="form-control" name="kakaoid"  id="kakaoid">
						<input type='hidden' class="form-control" name="secureUserId">
                		<input type='hidden' class="form-control" name="secureUserPwd">
                		<input type='hidden' class="form-control" name="secureUserPwd2">
                        <input type='hidden' class="form-control" name="publicKeyModulus" id="publicKeyModulus" value="<%=publicKeyModulus%>">
                        <input type='hidden' class="form-control" name="publicKeyExponent" id="publicKeyExponent" value="<%=publicKeyExponent%>">
		            </form>
					<button class="btn btn-primary btn-block" id="btnReg">회원가입</button>
		        </div>
		        <div class="pad-all" style="text-align:center;">
		            이미 가입하셨나요 ? <a onClick="toMove('MAIN01000M00')" class="btn-link mar-rgt" style="cursor:pointer">로그인하기</a>
		            <div class="media pad-top bord-top">
		                <div class="pull-right">
		                    <a class="pad-rgt" onClick="onRegUserBySocial('facebook')" style="cursor:pointer;"><i class="demo-psi-facebook icon-lg text-primary"></i></a>
		                    <a class="pad-rgt" onClick="onRegUserBySocial('twitter')" style="cursor:pointer;"><i class="demo-psi-twitter icon-lg text-info"></i></a>
		                    <a class="pad-rgt" onClick="onRegUserBySocial('google')" style="cursor:pointer;"><i class="demo-psi-google-plus icon-lg text-danger"></i></a>
                            <a class="pad-rgt" onClick="onRegUserBySocial('kakao')" style="cursor:pointer;"><img src="/bootstrap/thema/fico2000/img/icon/kakaoIcon.png"/></a>
		                </div>
		                <div class="media-body text-left text-muted">
		                    <a onClick="initial()" style="cursor:pointer;">처음부터</a>
		                </div>
		            </div>
		        </div>
		    </div>
		</div>

		<Message></Message>
 <script src="/bootstrap/thema/fico2000/js/app/main/MAIN03000M00Component.js"></script>

 <script type="text/javascript">

	function initial() {
		$(".alert").hide(true);
		MAIN03000M00.initial();
	}

    function onRegUserBySocial(socialId) {
        MAIN03000M00.onRegUserBySocial(socialId);
    }

 </script> 

 <script>

    $(document).ready(function() {

        $(".alert").hide(true);

		$("#btnReg").click(function() {

			$(".alert").hide(true);
			$("#errMsg").html('');

			MAIN03000M00.onRegUser();

		});
        
    });

  </script>