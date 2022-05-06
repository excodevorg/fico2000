<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<%@include file="/inc/common.jsp" %>

            <!--CONTENT CONTAINER-->
            <!--===================================================-->
            <div id="content-container">

                <!--Page Title-->
                <!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
                <div id="page-title">
                    <h1 class="page-header text-overflow">공통 코드 관리</h1>

                    <!--Searchbox-->
                    <div class="searchbox">
                        <div class="input-group custom-search-form">
                            <ul class="pull-right breadcrumb">
                                <li><a href="/">Home</a></li>
                                <li>시스템관리</li>
                                <li class="active">공통코드관리</li>
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
                            <h3 class="panel-title">공통코드관리</h3>
                        </div>
                        <div class="panel-body">
                            <div class="alert alert-danger fade in" role="alert">
                                <span id="errMsg"></span>
                            </div>

                            <div class="row">

                                <table id="grid-code-list" class="table table-condensed table-hover table-striped">
                                    <thead>
                                        <tr>
                                            <th data-column-id="domainCode">도메인코드</th>
                                            <th data-column-id="domainCodeNm">도메인명</th>
                                            <th data-column-id="codeNm">코드명</th>
                                            <th data-column-id="groupCode">그룹코드</th>
                                            <th data-column-id="codeCon" data-visible="false">코드설명</th>
                                            <th data-column-id="useYn" data-formatter="useYn">사용여부</th>
                                        </tr>
                                    </thead>
                                </table>   

                                <div class="margin-bottom-20"></div>
                               
                            </div>   

                            <div class="row">

                                <form name="ngForm" id="ngForm" class="sky-form" role="form" >
                                <fieldset>                            
                                            <div class="row">
                                                <section class="col col-2">
                                                    <h4>도메인코드</h4>
                                                </section>
                                                <section class="col col-5">
                                                    <label class="input">
                                                        <input type="text" class="form-control" name="domainCode" id="domainCode" size="50" placeholder="ID" required >
                                                    </label>
                                                </section>
                                                <section class="col col-2">
                                                    <h4>그룹코드</h4>
                                                </section>
                                                <section class="col col-2">
                                                    <label class="input" style="width:150px;">
                                                        <input type="text" class="form-control" name="groupCode" id="groupCode" size="5" required >
                                                    </label>
                                                </section>
                                            </div>
                                            
                                            <div class="row">
                                                <section class="col col-2">
                                                    <h4>도메인코드명</h4>
                                                </section>
                                                <section class="col col-5">
                                                    <label class="input">
                                                        <input type="text" class="form-control"  name="domainCodeNm" id="domainCodeNm" size="50" placeholder="메뉴명" required>
                                                    </label>
                                                </section>
                                                <section class="col col-2">
                                                    <h4>사용여부</h4>
                                                </section>
                                                <section class="col col-2">
                                                    <label class="input" style="width:150px;">
                                                    <select class="form-control" name="useYn" id="useYn">
                                                            <option value="Y">예 </option>
                                                            <option value="N">아니오 </option>
                                                        </select>
                                                    </label>
                                                </section>
                                            </div>
                                            
                                            <div class="row">
                                                <section class="col col-2">
                                                    <h4>코드</h4>
                                                </section>
                                                <section class="col col-5">
                                                    <label class="input">
                                                        <input type="text" class="form-control" min="0"  name="code" id="code" size="50" placeholder="코드">
                                                    </label>
                                                </section>
                                            </div>
                                            
                                            <div class="row">
                                                <section class="col col-2">
                                                    <h4>코드명</h4>
                                                </section>
                                                <section class="col col-5">
                                                    <label class="input">
                                                        <input type="text" class="form-control" min="0"  name="codeNm" id="codeNm" size="50" placeholder="코드명">
                                                    </label>
                                                </section>
                                            </div>    

                                            <div class="row">
                                                <section class="col col-2">
                                                    <h4>코드설명</h4>
                                                </section>
                                                <section class="col col-7">
                                                    <label class="input">
                                                        <input type="text" class="form-control"  name="codeCon" id="codeCon" size="100" placeholder="코드설명" >
                                                    </label>
                                                </section>
                                            </div>

                                            <div class="row">
                                                <div style="float:right;margin-bottom:10px;margin-right:10px;">
                                                <button class="btn-u btn-u-yellow" type="button" id="onAddCode">코드등록</button>
                                                <button class="btn-u btn-u-red" type="button" id="onUpdCode">코드변경</button>
                                                <button class="btn-u btn-u-aqua" type="button" id="onDelCode">코드삭제</button>
                                                </div>
                                            </div>
                
                                        </fieldset>
                            </form>

                            </div>              

                        </div>

                    </div>


                 </div>


            </div>

<script src="/bootstrap/thema/fico2000/js/app/adm/codeMng.service.js"></script>
<script src="/bootstrap/thema/fico2000/js/app/adm/ADM01002M00Component.js"></script>