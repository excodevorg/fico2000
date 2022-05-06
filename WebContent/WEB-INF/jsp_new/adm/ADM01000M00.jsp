<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<%@include file="/inc/common.jsp" %>
            <!--CONTENT CONTAINER-->
            <!--===================================================-->
            <div id="content-container">

                <!--Page Title-->
                <!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
                <div id="page-title">
                    <h1 class="page-header text-overflow">회원관리</h1>

                    <!--Searchbox-->
                    <div class="searchbox">
                        <div class="input-group custom-search-form">
                            <ul class="pull-right breadcrumb">
                                <li><a href="/">Home</a></li>
                                <li>시스템관리</li>
                                <li class="active">회원관리</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
                <!--End page title-->

                 <div id="page-content">
                    <!--===================================================-->
                    <div class="panel">

                        <div class="panel-heading">
                            <h3 class="panel-title">회원관리</h3>
                        </div>
                        <div class="panel-body">
                            <div class="alert alert-danger fade in" role="alert">
                                <span id="errMsg"></span>
                            </div>
                            <div class="row">

                                <table id="grid-keep-selection" class="table table-condensed table-hover table-striped">
                                    <thead>
                                        <tr>
                                            <th data-column-id="userId" data-identifier="true">아이디</th>
                                            <th data-column-id="userNm">성명</th>
                                            <th data-width="15%" data-column-id="joinYmd">가입일</th>
                                            <th data-width="10%" data-formatter="useYn" data-column-id="useYn">활동상태</th>
                                        </tr>
                                    </thead>
                                </table>

                                <div class="margin-bottom-20"></div>

                                <div style="float:right;margin-bottom:10px;margin-right:10px;">
                                        <button class="btn btn-primary" type="button" id="onStartUser">회원활성화</button>
                                        <button class="btn btn-primary" type="button" id="onStopUser">회원중지</button>
                                        <button class="btn btn-darkgray" type="button" id="onDropUser">회원탈퇴</button>
                                        <button class="btn btn-default" type="button" id="onInitialPwd">비밀번호 초기화</button>
                                </div>


                          </div>


                        </div>

                    </div>

    <!--- grid plugin ---->
<script src="/bootstrap/thema/fico2000/js/app/adm/userMng.service.js"></script>
<script src="/bootstrap/thema/fico2000/js/app/adm/ADM01000M00Component.js"></script>
