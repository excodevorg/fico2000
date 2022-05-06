<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<%@include file="/inc/common.jsp" %>

            <!--CONTENT CONTAINER-->
            <!--===================================================-->
            <div id="content-container">

                <!--Page Title-->
                <!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
                <div id="page-title">
                    <h1 class="page-header text-overflow">공지사항</h1>

                    <!--Searchbox-->
                    <div class="searchbox">
                        <div class="input-group custom-search-form">
                            <ul class="pull-right breadcrumb">
                                <li>시스템관리</li>
								<li>게시판관리</li>
                                <li class="active">공지사항</li>
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
                            <h3 class="panel-title">공지사항 목록</h3>
                        </div>

                        <div class="panel-body">

                            <div class="alert alert-danger fade in" role="alert">
                                <span id="errMsg"></span>
                            </div>
                            <div class="row">
                                <div style="float:right;margin-bottom:10px;margin-right:10px;">
                                    <button class="btn btn-primary" type="button" id="onWrite">글쓰기</button>
                                </div>
                            </div>
                            <div class="margin-bottom-20"></div>
                            
                            <table id="grid-list" class="table table-condensed table-hover table-striped">
                                        <thead>
                                            <tr>
                                                <th data-column-id="code" data-visible="false">게시판코드</th>
                                                <th data-column-id="mainNo" data-visible="false">게시판번호</th>
                                                <th data-column-id="numRow">순번</th>
                                                <th data-column-id="title">제 목</th>
                                                <th data-column-id="name">글쓴이</th>
                                                <th data-column-id="writeDate">작성일</th>
                                                <th data-column-id="flapMngmNo" data-formatter="fileTypeRenderer">첨부파일</th>
                                                <th data-column-id="count">hit</th>
                                            </tr>
                                        </thead>
                            </table>

                        </div>

                    </div>

                 </div>

            </div>

<script src="/bootstrap/thema/fico2000/js/app/com/board.services.js"></script>
<script src="/bootstrap/thema/fico2000/js/app/adm/ADM05001M00Component.js"></script>   