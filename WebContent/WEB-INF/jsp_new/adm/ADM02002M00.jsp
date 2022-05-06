<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<%@include file="/inc/common.jsp" %>

            <!--CONTENT CONTAINER-->
            <!--===================================================-->
            <div id="content-container">

                <!--Page Title-->
                <!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
                <div id="page-title">
                    <h1 class="page-header text-overflow">메뉴권한생성</h1>

                    <!--Searchbox-->
                    <div class="searchbox">
                        <div class="input-group custom-search-form">
                            <ul class="pull-right breadcrumb">
                                <li>시스템관리</li>
								<li>메뉴관리</li>
                                <li class="active">메뉴권한생성</li>
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
                            <h3 class="panel-title">메뉴목록</h3>
                        </div>

                        <div class="panel-body">

                            <form class="form-horizontal" role="form">
                            <div class="alert alert-primary">
                                <dl class="dl-horizontal text-lg" style="margin:0;">
                                <dt style="padding-top:5px;">권한</dt>
                                <dd>
                                    <section class="col-xs-10">
                                        <label class="input" style="width:100%">
                                            <select class="form-control" name="rolecode" id="rolecode">
                                                <option value="">☞ 권한을 선택하세요</option> 
                                            </select>
                                        </label>
								    </section>
                                </dd>
                                </dl>
                            </div>
                            </form>                           

                            <div class="alert alert-danger" role="alert">
                                <span id="errMsg"></span>
                            </div>

                            <div class="row"> 

                                <table id="grid-keep-selection" class="table table-condensed table-hover table-striped">
                                    <thead>
                                        <tr>
                                            <th data-column-id="menuId" data-type="numeric" data-identifier="true">메뉴ID</th>
                                            <th data-column-id="menuNm">메뉴명</th>
                                            <th data-column-id="upperMenuId" data-visible="false">상위메뉴ID</th>
                                            <th data-column-id="upperMenuNm">상위메뉴명</th>
                                            <th data-column-id="menuPath" data-visible="false">경로</th>
                                            <th data-column-id="menuOrder">순서</th>
                                            <th data-column-id="menuType">메뉴유형</th>
                                            <th data-column-id="menuCon" data-visible="false">메뉴설명</th>
                                            <th data-column-id="useYn" data-formatter="useYn">사용여부</th>
                                            <th data-column-id="menuLevel">메뉴Level</th>
                                        </tr>
                                    </thead>
                                </table>
                        
                                <div class="margin-bottom-20"></div>

                            </div> 

                             <div class="row">
                                    <div style="float:right;margin-bottom:10px;margin-right:10px;">
                                            <button class="btn btn-primary" type="button" id="onAddMenuAuth">권한등록</button>
                                    </div>
                            </div>                                                   

                        </div>

                    </div>

                 </div>


            </div>

<script src="/bootstrap/thema/fico2000/js/app/adm/codeMng.service.js"></script>
<script src="/bootstrap/thema/fico2000/js/app/adm/menu.service.js"></script>
<script src="/bootstrap/thema/fico2000/js/app/adm/ADM02002M00Component.js"></script>