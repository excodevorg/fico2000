<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<%@include file="/inc/common.jsp" %>

             <!--CONTENT CONTAINER-->
            <!--===================================================-->
            <div id="content-container">

                <!--Page Title-->
                <!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
                <div id="page-title">
                    <h1 class="page-header text-overflow">Business Platform</h1>

                    <!--Searchbox-->
                    <div class="searchbox">
                        <div class="input-group custom-search-form">
                            <ul class="pull-right breadcrumb">
                                <li>HOME</li>
								<li>커뮤니티</li>
                                <li class="active">Business Platform</li>
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
                            <h3 class="panel-title">
                                <table width="100%">
                                    <tr>
                                        <td>Business Platform</td>
                                        <td align="right"><button type="button" class="btn btn-info" onClick="goBizPlate()">비지니스 Platform 업무범위코드</button></td>
                                    </tr>
                                </table>
                            </h3>
                        </div>

                        <div class="panel-body">

                            <div class="alert alert-danger" role="alert">
                                <span id="errMsg"></span>
                            </div>
                            <div class="row">
                                <div style="float:right;margin-bottom:10px;margin-right:10px;">
                                    <button class="btn-u btn-u-yellow" type="button" id="onWrite">글쓰기</button>
                                </div>
                            </div>
                            <div class="margin-bottom-20"></div>
                            
                            <table id="grid-list" class="table table-bordered table-hover table-striped">
                                        <thead>
                                            <tr>
                                                <th data-column-id="code" data-header-align="center" data-visible="false">게시판코드</th>
                                                <th data-column-id="mainNo" data-header-align="center" data-visible="false">게시판번호</th>
                                                <th data-width="10%" data-column-id="numRow" data-header-align="center" data-align="center">순번</th>
                                                <th data-width="50%" data-column-id="title" data-header-align="center" data-formatter="titleTypeRenderer">제 목</th>
                                                <th data-width="10%" data-column-id="name" data-header-align="center" data-align="center">글쓴이</th>
                                                <th data-width="10%" data-column-id="writeDate" data-header-align="center" data-align="center">작성일</th>
                                                <th data-width="10%" data-column-id="flapMngmNo" data-header-align="center" data-align="center" data-formatter="fileTypeRenderer">첨부파일</th>
                                                <th data-width="10%" data-column-id="count" data-header-align="center" data-align="center">hit</th>
                                            </tr>
                                        </thead>
                            </table>

                        </div>

                    </div>

                 </div>

            </div>

<script src="/bootstrap/thema/fico2000/js/app/com/board.services.js"></script>
<script src="/bootstrap/thema/fico2000/js/app/cmu/CMU03000M00Component.js"></script>   