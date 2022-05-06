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
                        <div class="col-lg-7 mar-btm">
                            <img class="img-ms" src="/bootstrap/thema/fico2000/img/ccMain.jpg" style="width:100%" />
                        </div>
                        <div class="col-lg-3">
                            <a id="goEduView" class="btn btn-lg btn-primary btn-block">교육과정 보러가기 ></a>
                            <br/>
                            <% if (loginCls) { %>
                            <a id="goMyclass" class="btn btn-lg btn-primary btn-block">나의 강의실 ></a>
                            <% } %>
                        </div>
                    </div>
                    <!--===================================================-->
                <!--End page content-->
                </div>


            </div>

<script src="/bootstrap/thema/fico2000/js/app/edu/EDU01000M00Component.js"></script>
            