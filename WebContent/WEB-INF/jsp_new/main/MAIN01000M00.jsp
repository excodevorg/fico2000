<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<%@include file="/inc/common.jsp" %>
<%

String publicKeyModulus = (String) request.getAttribute("publicKeyModulus");
String publicKeyExponent = (String) request.getAttribute("publicKeyExponent");

%>
 <!-- BACKGROUND IMAGE -->
<!--===================================================-->
<div id="bg-overlay" style='background-image: url("/bootstrap/thema/fico2000_new/img/bg-img/16.jpg");' class="bg-img"></div>

<!-- LOGIN FORM -->
<!--===================================================-->
<div class="cls-content">
    <div class="cls-content-sm panel">
        <div class="panel-body">
            <div class="mar-ver pad-btm">
                <h3 class="h4 mar-no" style="text-align:center;">로그인</h3>
                <p class="text-muted"></p>
            </div>
            
            <form name="ngForm" method="POST" id="ngForm">
                <div class="form-group">
                    <input type="text" class="form-control" name="userId" id="userId" required placeholder="이메일을 입력하세요">
                </div>
                <div class="form-group">
                    <input type="password" class="form-control" name="userPwd" id="userPwd" required placeholder="비밀번호를 입력하세요">
                </div>
                
                <input type='hidden' class="form-control" name="publicKeyModulus" value="<%=publicKeyModulus%>">
                <input type='hidden' class="form-control" name="publicKeyExponent" value="<%=publicKeyExponent%>">

                <input type='hidden' class="form-control" name="secureUserId">
                <input type='hidden' class="form-control" name="secureUserPwd">

            </form>
            <button class="btn btn-primary btn-lg btn-block" id="btnLogin">로그인</button>
            <br>
            <div class="margin-bottom-20"></div>
                <div class="alert alert-danger fade in" role="alert">
                    <span id="errMsg"></span>
                </div>
            </div>
                    
            <div class="pad-all" style="text-align:center;">
                <a onClick="toMove('MAIN04000M00')" class="btn-link mar-rgt" style="cursor:pointer">비밀번호를 잊으셨나요 ?</a>
                <a onClick="toMove('MAIN03000M00')" class="btn-link mar-lft" style="cursor:pointer">회원 가입하기</a>
                <div class="media pad-top bord-top">
                    <div class="pull-right">
                        <a class="pad-rgt" onClick="onLoginSocial('facebook')" style="cursor:pointer;"><i class="demo-psi-facebook icon-lg text-primary"></i></a>
                        <a class="pad-rgt" onClick="onLoginSocial('twitter')" style="cursor:pointer;"><i class="demo-psi-twitter icon-lg text-info" ></i></a>
                        <a class="pad-rgt" onClick="onLoginSocial('google')" style="cursor:pointer;"><i class="demo-psi-google-plus icon-lg text-danger" ></i></a>
                        <a class="pad-rgt" onClick="onLoginSocial('kakao')" style="cursor:pointer;"><img src="/bootstrap/thema/fico2000/img/icon/kakaoIcon.png"/></a>
                    </div>
                <div class="media-body text-left">
                    Login with
                </div>
            
            </div>
        </div>
    </div>
</div>
<!--===================================================-->

<script src="/bootstrap/thema/fico2000/js/app/main/MAIN01000M00Component.js"></script>

 <script type="text/javascript">

    function onLoginSocial(socialId) {
        MAIN01000M00.loginSocialFn(socialId);
    }

 </script>

 <script>

    $(document).ready(function() {

        $(".alert").hide(true);

    	$('#summernote').summernote({
        	height:150,
        	toolbar:false,
        	placeholder: '당신의 Business 고민을 말씀해 주세요',
        });

        $("#btnLogin").click(function() {
            MAIN01000M00.formValidate();
            MAIN01000M00.onLogin();
        });
        
    });

  </script>