<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<%@include file="/inc/common.jsp" %>

            <!--CONTENT CONTAINER-->
            <!--===================================================-->
            <div id="content-container">

                <!--Page Title-->
                <!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
                <div id="page-title">
                    <h1 class="page-header text-overflow">교육과정목록(상세)</h1>

                    <!--Searchbox-->
                    <div class="searchbox">
                        <div class="input-group custom-search-form">
                            <ul class="pull-right breadcrumb">
                                <li><a href="index.html">Home</a></li>
                                <li>교육과정</li>
                                <li class="active">교육과정목록(상세)</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
                <!--End page title-->

                 <!--Page content-->
                <!--===================================================-->
                <div id="page-content">
                        <!-- 선택강의상세정보 -->
						<!--===================================================-->
						<div class="panel panel-info">
							<div class="panel-heading">
                                <div class="panel-control">
                                    <ul class="pager pager-rounded">
                                    <% if (loginCls) { %>                                        
                                        <li><a id="goEduApply" style="cursor:pointer" >수강신청</a></li>
                                    <% } %>
                                        <li><a id="goEduView" style="cursor:pointer">목록보기</a></li>
                                    </ul>
                                </div>
								<h3 class="panel-title lectureTitle">
                                    <span id="lcteNm"></span>
                                </h3>
                                
							</div>
							<div class="panel-body">
                                <div class="row well well-l">
                                    <style>
                                        .dl4lecture dt{}
                                        .dl4lecture dd{color: #555;}
                                    </style>
                                    <dl class="dl-horizontal text-lg dl4lecture" style="margin:0;">
                                        <dt>강의 기간</dt>
                                        <dd class="lectureDate"><span id="lcteYmd"/></dd>
                                        <dt>강의 장소</dt>
                                        <dd class="classRoom"><span id="lctePlac"/></dd>
                                        <dt>수강 가능 인원</dt>
                                        <dd><span id="atlcNmprCnt"/>명</dd>
                                    </dl>
                                </div>

                                <div class="alert alert-danger" role="alert">
                                    <span id="errMsg"></span>
                                </div> 

                                <hr class="new-section-sm bord-no">
                                
                                <div class="row">
                                    <style>
                                        .tab-base .nav li{border: 1px solid #e9e9e9; border-left:0 none;border-bottom: 0 none;}
                                        .tab-base .nav li:first-child{border-left: 1px solid #e9e9e9;}
                                        .tab-base .tab-content{border: 1px solid #e9e9e9;}
                                        .nav-tabs>li>a{border: 0 none;margin-right: 0;}
                                    </style>
                                    <div class="tab-base">
                                        <!--Nav Tabs-->
                                        <ul class="nav nav-tabs">
                                            <li class="active">
                                                <a data-toggle="tab" href="#demo-lft-tab-1">강의 개요 및 내용</a>
                                            </li>                                            
                                        </ul>                                        <!--Tabs Content-->
                                        <div class="tab-content">
                                            <div id="demo-lft-tab-1" class="tab-pane fade active in">
                                                <div class="well well-lg">
                                                    <span id="lcteCon"/>    
                                                </div>
                                                
                                                <table id="grid-file-list" class="table table-bordered table-hover">
                                                    <thead>
                                                        <tr>
                                                            <th data-column-id="flapMngmNo" data-align="center" data-visible="false">파일련번호</th>
                                                            <th data-column-id="flapDtlSrn" data-align="center"  data-visible="false">파일상세일련번호</th>
                                                            <th data-column-id="flapMngFileNm" data-align="center"  data-visible="false">파일명</th>
                                                            <th data-width="100%" data-column-id="flapMngFileOrgNm" data-header-align="center" data-align="left" data-sortable="true" ><center>강의자료</center></th>
                                                            <th data-column-id="delYn" data-align="center"  data-visible="false">삭제여부</th>
                                                        </tr>
                                                    </thead>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                    
                                </div>
                            </div>
						</div>
						<!--===================================================-->
						<!-- 선택강의상세정보 -->
                    <!--===================================================-->
                <!--End page content--> 
                </div>              

            </div>

<script src="/bootstrap/thema/fico2000/js/app/edu/edu.service.js"></script>
<script src="/bootstrap/thema/fico2000/js/app/com/file.services.js"></script>
<script src="/bootstrap/thema/fico2000/js/app/edu/EDU02001M00Component.js"></script>            