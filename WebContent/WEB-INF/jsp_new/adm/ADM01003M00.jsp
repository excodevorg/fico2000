<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<%@include file="/inc/common.jsp" %>

            <!--CONTENT CONTAINER-->
            <!--===================================================-->
            <div id="content-container">

                <!--Page Title-->
                <!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
                <div id="page-title">
                    <h1 class="page-header text-overflow">권한관리</h1>

                    <!--Searchbox-->
                    <div class="searchbox">
                        <div class="input-group custom-search-form">
                            <ul class="pull-right breadcrumb">
                                <li><a href="/">Home</a></li>
                                <li>시스템관리</li>
                                <li class="active">권한관리</li>
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
                            <h3 class="panel-title">회원목록</h3>
                        </div>
                        <div class="panel-body">

                            <div class="alert alert-danger fade in" role="alert">
                                <span id="errMsg"></span>
                            </div>

                            <div class="row">  

                                <table id="grid-list" class="table table-condensed table-hover table-striped">
                                    <thead>
                                        <tr>
                                            <th data-column-id="userId">아이디</th>
                                            <th data-column-id="userNm">성명</th>
                                            <th data-column-id="joinYmd">가입일</th>
                                            <th data-column-id="useYn" data-formatter="useYn">활동상태</th>
                                        </tr>
                                    </thead>
                                </table>                               

                                <div class="margin-bottom-20"></div>

                            </div>

                        </div>


                    </div>

                    <!--===================================================-->
                    <div class="panel">

                        <div class="panel-heading">
                            <h3 class="panel-title">권한목록</h3>
                        </div>
                        <div class="panel-body">

                            <div class="row"> 
                                <table id="grid-role-list" class="table table-condensed table-hover table-striped">
                                    <thead>
                                        <tr>
                                            <th data-column-id="userid">아이디</th>
                                            <th data-column-id="userNm">성명</th>
                                            <th data-column-id="rolecode">권한코드</th>
                                            <th data-column-id="rolecodeNm">권한명</th>
                                        </tr>
                                    </thead>
                                </table>                               

                            </div>

                            <div class="margin-bottom-20"></div>
                            <!-- /.panel -->
                            <div class="alert alert-danger" role="alert">
                                <span id="errRegMsg"></span>
                            </div>

                            <div class="row">

                                 <form class="sky-form" role="form" id="ngForm">
                                    <fieldset>                            
                                            <div class="row">
                                                <section class="col col-2">
                                                    <h4>아이디</h4>
                                                </section>
                                                <section class="col col-5">
                                                    <label class="input">
                                                        <input type="text" class="form-control" name="userid" id="userid" size="50" placeholder="ID" required >
                                                    </label>
                                                </section>
                                            </div>
                                            
                                            <div class="row">
                                                <section class="col col-2">
                                                    <h4>성명</h4>
                                                </section>
                                                <section class="col col-5">
                                                    <label class="input">
                                                        <input type="text" class="form-control"  name="userNm" id="userNm" size="50" placeholder="성명" required>
                                                    </label>
                                                </section>
                                            </div>
                                            
                                            <div class="row">
                                                <section class="col col-2">
                                                    <h4>권한코드</h4>
                                                </section>
                                                <section class="col col-2">
                                                    <label class="input" style="width:150px;">
                                                    <select class="form-control" name="rolecode" id="rolecode" style="width:100%"></select>
                                                    </label>
                                                </section>
                                            </div>
                                            <div class="row">
                                                <div style="float:right;margin-bottom:10px;margin-right:10px;">
                                                <button class="btn btn-primary" type="button" id="onAddRole">권한등록</button>
                                                <button class="btn btn-darkgray" type="button" id="onDelRole">권한삭제</button>
                                                </div>
                                            </div>
                
                                        </fieldset>
                                 </form>


                            </div>


                        </div>

                    </div>

                 </div>

                 

            </div>

<script src="/bootstrap/thema/fico2000/js/app/adm/userMng.service.js"></script>
<script src="/bootstrap/thema/fico2000/js/app/adm/codeMng.service.js"></script>
<script src="/bootstrap/thema/fico2000/js/app/adm/ADM01003M00Component.js"></script>