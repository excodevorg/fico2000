<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<%@include file="/inc/common.jsp" %>

<%

String publicKeyModulus = (String) request.getAttribute("publicKeyModulus");
String publicKeyExponent = (String) request.getAttribute("publicKeyExponent");

%>

<!-- BACKGROUND IMAGE -->
            <!--===================================================-->
            <div id="bg-overlay" style='background-image: url("/bootstrap/thema/fico2000_new/img/bg-img/18.jpg");' class="bg-img"></div>

            <!-- PASSWORD RESETTING FORM -->
            <!--===================================================-->
            <div class="cls-content" style="text-align:center;">
                <div class="cls-content-sm panel">
                    <div class="panel-body">
                        <div class="pad-ver">
                            <i class="pli-mail icon-3x"></i>
                        </div>
                        <h3 class="h4 mar-no">비밀번호 찾기</h3>
                        <p class="text-muted pad-btm">이메일 인증회원 정보에 등록한 이메일 주소로 인증<br/><br/><font color="#777">이메일 주소를 입력하시면<br/>임시 비밀번호를 발급해 드립니다</font></p>
                        <form class="form-horizontal" role="form" name="ngForm" method="POST" id="ngForm">
                            <div class="form-group">
                                <input type="email" class="form-control" placeholder="Email" name="userId">
                            </div>
                            <input type='hidden' class="form-control" name="publicKeyModulus" value="<%=publicKeyModulus%>">
                            <input type='hidden' class="form-control" name="publicKeyExponent" value="<%=publicKeyExponent%>">

                            <input type='hidden' class="form-control" name="secureUserId">
                        </form><br>
                        <button class="btn btn-primary btn-block" onClick="tempPasswardMake()">임시 비밀번호 발급</button><br>
                        <div class="alert alert-danger" role="alert">
                            <span id="errMsg"></span>
                        </div>
                        <div class="pad-top">
                            <a onClick=toMove('MAIN01000M00') class="btn-link mar-rgt" style="cursor:pointer;">Back to Login</a>
                        </div>
                    </div>
                </div>
            </div>
            <!--===================================================-->

<script src="/bootstrap/thema/fico2000/js/app/main/MAIN04000M00Component.js"></script>

 <script type="text/javascript">

    function tempPasswardMake() {
        
        overlay.show();

        MAIN04000M00.tempPasswardMake();

        toMove('MAIN01000M00');
    }

 </script>

 <script>

    $(document).ready(function() {

        $(".alert").hide(true);

        
    });

  </script>            