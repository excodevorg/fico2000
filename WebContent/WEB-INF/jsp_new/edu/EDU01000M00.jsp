<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<%@include file="/inc/common.jsp" %>

<!--CONTENT CONTAINER-->
<!--===================================================-->
<div id="content-container">

<!--Page Title-->
    <!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
    <div id="page-title">
        <h1 class="page-header text-overflow">교육과정소개</h1>

        <!--Searchbox-->
        <div class="searchbox">
            <div class="input-group custom-search-form">
                <ul class="pull-right breadcrumb">
                    <li><a href="index.html">Home</a></li>
                    <li>교육과정</li>
                    <li class="active">교육과정 소개</li>
                </ul>
            </div>
        </div>
    </div>
    <!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
    <!--End page title-->

     <div id="page-content">
        
        <div class="row">
            <div class="col-lg-12 mar-btm eduMainBanner">
                <!-- <img class="img-ms eduMainImg" src="/bootstrap/thema/fico2000_new/assets/img/ccMain.jpg" style="width:100%" /> -->
            	<p class="eduMainTxt">
            	재무 분석 및 기업 가치 평가에 최고를 넘어 열정과 능력을 갖춘 인재 양성<br/>성공적인 직무 능력 향상을 통해 기업의 발전을 응원합니다.<br/><br/>-이중완 대표
            	</p>
            </div>
            <div class="col-lg-12 text-center">
                <a id="goEduView" class="btn btn-lg btn-primary btn-rounded mr10">교육과정 보러가기</a>
                <% if (loginCls) { %>
                <a id="goMyclass" class="btn btn-lg btn-primary btn-rounded ">나의 강의실</a>
                <% } %>
            </div>
        </div>
        <!--===================================================-->
    <!--End page content-->
    </div>


</div>

<script src="/bootstrap/thema/fico2000/js/app/edu/EDU01000M00Component.js"></script>
            