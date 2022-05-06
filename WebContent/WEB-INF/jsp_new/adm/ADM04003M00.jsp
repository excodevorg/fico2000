<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<%@include file="/inc/common.jsp" %>

            <!--CONTENT CONTAINER-->
            <!--===================================================-->
            <div id="content-container">

                <!--Page Title-->
                <!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
                <div id="page-title">
                    <h1 class="page-header text-overflow">수강신청관리</h1>

                    <!--Searchbox-->
                    <div class="searchbox">
                        <div class="input-group custom-search-form">
                            <ul class="pull-right breadcrumb">
                                <li><a href="index.html">시스템관리</a></li>
                                <li>강의관리</li>
                                <li class="active">수강신청관리</li>
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
                            <h3 class="panel-title">수강신청관리</h3>
                        </div>
                        <div class="panel-body">
                            <form class="form-horizontal" role="form">
                            <!--<div class="well well-lg">-->
                            <div class="alert alert-primary">
                                <dl class="dl-horizontal text-lg" style="margin:0;">
                                <dt style="padding-top:5px;">강의명</dt>
                                <dd>
                                    <div class="col-xs-10">
                                        <!--===================================================-->
                                        <select class="form-control" name="selectLcteUnqId" id="selectLcteUnqId" data-width="100%">
                                            <option value="">☞ 강의명을 선택하세요</option> 
                                        </select>
                                        <!--===================================================-->
                                    </div>
                                </dd>
                                </dl>
                            </div>
                            </form>
                            <div class="alert alert-danger" role="alert">
                                        <span id="errMsg"></span>
                            </div>
                            <div class="row">
                                <div style="float:right;margin-bottom:10px;margin-right:10px;">
                                        <button class="btn btn-primary" type="button" id="onStartApply">승인</button>
                                        <button class="btn btn-darkgray" type="button" id="onStopApply">반려</button>
                                        <button class="btn btn-primary" type="button" id="onComplete">수료</button>
                                        <button class="btn btn-darkgray" type="button" id="onNotComplete">미수료</button>
                                </div>
                                <div class="margin-bottom-20"></div>
                                <table id="grid-list" class="table table-condensed table-hover table-striped">
                                        <thead>
                                            <tr>
                                                <th data-column-id="userId" data-identifier="true">수강신청학생ID</th>
                                                <th data-column-id="lcteUnqId" data-identifier="true" data-visible="false">강의고유ID</th>                                            
                                                <th data-column-id="userNm">수강신청학생명</th>
                                                <th data-column-id="applyYmd">수강신청일</th>
                                                <th data-column-id="applyPrgScd" data-visible="false">수강신청진행상태코드</th>
                                                <th data-column-id="applyPrgScdNm">수강신청진행상태</th>
                                                <th data-column-id="completeYn" data-formatter="completeRenderer">수료여부</th>
                                            </tr>
                                        </thead>
                                    </table>

                            </div>


                        </div>

                    </div>

<script src="/bootstrap/thema/fico2000/js/app/adm/lecture.service.js"></script>
<script src="/bootstrap/thema/fico2000/js/app/adm/ADM04003M00Component.js"></script>                       