<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<%@include file="/inc/common.jsp" %>

            <!--CONTENT CONTAINER-->
            <!--===================================================-->
            <div id="content-container">
                
                <!--Page Title-->
                <!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
                <div id="page-title">
                    <h1 class="page-header text-overflow">교육과정목록</h1>

                    <!--Searchbox-->
                    <div class="searchbox">
                        <div class="input-group custom-search-form">
                            <ul class="pull-right breadcrumb">
                                <li><a href="index.html">Home</a></li>
                                <li>교육과정</li>
                                <li class="active">교육과정목록</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
                <!--End page title-->

                <!--Page content-->
                <!--===================================================-->
                <div id="page-content">
                    <!-- 교육과정목록 -->
                    <!--===================================================-->
                    <div class="panel">
                        <div class="panel-heading">
                            <h3 class="panel-title">교육과정목록</h3>
                        </div>
                        <div class="panel-body">

                            <div class="alert alert-danger" role="alert">
                                 <span id="errMsg"></span>
                            </div>    

                            <div class="row">

                                <table id="grid-list" class="table table-bordered table-hover table-striped">
                                <% if (loginCls) { %>                                        
                                    <thead>
                                        <tr>
                                            <th data-width="10%" data-column-id="numRow" data-header-align="center" data-align="center"  data-sortable="true">번호</th>
                                            <th data-width="35%" data-column-id="lcteNm" data-header-align="center" data-align="center"  data-sortable="true">과정명</th>
                                            <th data-width="25%" data-column-id="lcteYmd" data-header-align="center" data-align="center"  data-sortable="true" >강의기간</th>
                                            <th data-width="20%" data-column-id="lctePlac" data-header-align="center" data-align="center" >강의장소</th>
                                            <th data-width="10%" data-column-id="applyYn" data-header-align="center" data-align="center" data-sortable="true" >신청여부</th>
                                            <th data-width="10%" data-column-id="lcteUnqId" data-header-align="center" data-align="center" data-visible="false">강의ID</th>
                                            <th data-width="35%" data-column-id="lcteCon" data-header-align="center" data-align="center"  data-visible="false">강의내용</th>
                                            <th data-width="35%" data-column-id="atlcNmprCnt" data-header-align="center" data-align="center"  data-visible="false">신청가능수</th>
                                            <th data-width="35%" data-column-id="flapMngmNo" data-header-align="center" data-align="center"  data-visible="false">파일첨부번호</th>
                                        </tr>
                                    </thead>
                                <% } else { %>
                                    <thead>
                                        <tr>
                                            <th data-width="10%" data-column-id="numRow" data-header-align="center" data-align="center"  data-sortable="true">번호</th>
                                            <th data-width="40%" data-column-id="lcteNm" data-header-align="center" data-align="center"  data-sortable="true">과정명</th>
                                            <th data-width="30%" data-column-id="lcteYmd" data-header-align="center" data-align="center"  data-sortable="true" >강의기간</th>
                                            <th data-width="20%" data-column-id="lctePlac" data-header-align="center" data-align="center" >강의장소</th>
                                            <th data-width="10%" data-column-id="applyYn" data-header-align="center" data-align="center" data-visible="false" data-sortable="true" >신청여부</th>
                                            <th data-width="10%" data-column-id="lcteUnqId" data-header-align="center" data-align="center" data-visible="false">강의ID</th>
                                            <th data-width="35%" data-column-id="lcteCon" data-header-align="center" data-align="center"  data-visible="false">강의내용</th>
                                            <th data-width="35%" data-column-id="atlcNmprCnt" data-header-align="center" data-align="center"  data-visible="false">신청가능수</th>
                                            <th data-width="35%" data-column-id="flapMngmNo" data-header-align="center" data-align="center"  data-visible="false">파일첨부번호</th>
                                        </tr>
                                    </thead>
                                <% } %>                                    
                                </table>


                            </div>
                            
                        </div>
                    </div>
                    <!--===================================================-->
                    <!-- 교육과정목록 -->
                <!--End page content-->
                </div>
            </div>
            <!--===================================================-->
            <!--END CONTENT CONTAINER-->

<script src="/bootstrap/thema/fico2000/js/app/edu/edu.service.js"></script>
<script src="/bootstrap/thema/fico2000/js/app/edu/EDU02000M00Component.js"></script>