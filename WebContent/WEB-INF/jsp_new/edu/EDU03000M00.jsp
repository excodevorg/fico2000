<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<%@include file="/inc/common.jsp" %>

            <!--CONTENT CONTAINER-->
            <!--===================================================-->
            <div id="content-container">
                
                <!--Page Title-->
                <!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
                <div id="page-title">
                    <h1 class="page-header text-overflow">나의강의실</h1>

                    <!--Searchbox-->
                    <div class="searchbox">
                        <div class="input-group custom-search-form">
                            <ul class="pull-right breadcrumb">
                                <li><a href="index.html">Home</a></li>
                                <li>교육과정</li>
                                <li class="active">나의강의실</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
                <!--End page title-->

                <!--Page content-->
                <!--===================================================-->
                <div id="page-content">                    
                    <div class="row">
                        <!-- 진행중인교육 -->
						<!--===================================================-->
						<div class="panel">
							<div class="panel-heading">
								<h3 class="panel-title">진행중인 교육</h3>
							</div>
							<div class="panel-body">
                                <div class="row">
                                    <div id="isProgress">
                                        <table id="table-progress" class="table table-bordered table-hover table-striped">
                                            <thead>
                                                <tr>
                                                    <th data-width="10%" data-column-id="numRow" data-header-align="center" data-align="center"  data-sortable="true">번호</th>
                                                    <th data-width="35%" data-column-id="lcteNm" data-header-align="center" data-align="center"  data-sortable="true">과정명</th>
                                                    <th data-width="25%" data-column-id="lcteYmd" data-header-align="center" data-align="center"  data-sortable="true" >강의기간</th>
                                                    <th data-width="20%" data-column-id="lctePlac" data-header-align="center" data-align="center" >강의장소</th>
                                                    <th data-width="10%" data-column-id="completeYn" data-header-align="center" data-align="center" data-visible="false">수료여부</th>
                                                    <th data-width="10%" data-column-id="completeYnDis" data-header-align="center" data-align="center" data-visible="true" data-formatter="statusFormatter">수료여부</th>
                                                    <th data-width="10%" data-column-id="applyPrgScd" data-header-align="center" data-align="center"  data-sortable="false" data-visible="false" data-formatter="prgScdRenderer">진행상태</th>
                                                    <th data-width="10%" data-column-id="lcteUnqId" data-header-align="center" data-align="center" data-visible="false">강의ID</th>
                                                    <th data-width="35%" data-column-id="lcteCon" data-header-align="center" data-align="center"  data-visible="false">강의내용</th>
                                                    <th data-width="35%" data-column-id="atlcNmprCnt" data-header-align="center" data-align="center"  data-visible="false">신청가능수</th>
                                                    <th data-width="35%" data-column-id="flapMngmNo" data-header-align="center" data-align="center"  data-visible="false">파일첨부번호</th>
                                                    <th data-width="35%" data-column-id="studyNm" data-header-align="center" data-align="center" data-visible="true" data-formatter="btnFormatter">학습하기</th>
                                                </tr>
                                            </thead>                
                                        </table>
                                    </div>
                                    <div id="notProgress" class="text-center">
                                    	<i class="fa fa-exclamation-triangle color-light-gray icon-4x"></i>
                                        <h3 class="text-center mt10 grey--text">진행중인 교육과정이 없습니다 </h3>
                                        <br/>
                                        <div class="text-center text-lg">
                                            학습이 시작 되지 않았거나 수강신청이 완료되지 않았을 수 있으므로 대기중인 과정을 확인해주세요<br/>
                                            먼저 <a href="fico-CC-list.html" class="btn-link">교육과정 목록</a> > 강좌 선택 > 수강신청을 하시면 수강하실 수 있습니다
                                        </div>
                                    </div>
                                </div>
                            </div>
						</div>
						<!--===================================================-->
						<!-- 진행중인교육 -->
                    </div>
                    
                    <div class="row">                        
                        <!-- 대기중인교육 -->
						<!--===================================================-->
						<div class="panel">
							<div class="panel-heading">
								<h3 class="panel-title">대기중인 교육</h3>
							</div>
							<div class="panel-body">
                               <div class="row">
                                    <div id="isStandBy">
                                    <table id="table-standby" class="table table-bordered table-hover table-striped">
                                        <thead>
                                            <tr>
                                                <th data-width="10%" data-column-id="numRow" data-header-align="center" data-align="center"  data-sortable="true">번호</th>
                                                <th data-width="35%" data-column-id="lcteNm" data-header-align="center" data-align="center"  data-sortable="true">과정명</th>
                                                <th data-width="25%" data-column-id="lcteYmd" data-header-align="center" data-align="center"  data-sortable="true" >강의기간</th>
                                                <th data-width="20%" data-column-id="lctePlac" data-header-align="center" data-align="center" >강의장소</th>
                                                <th data-width="10%" data-column-id="completeYn" data-header-align="center" data-align="center" data-visible="false">수료여부</th>
                                                <th data-width="10%" data-column-id="completeYnDis" data-header-align="center" data-align="center" data-visible="false" data-formatter="statusFormatter">수료여부</th>
                                                <th data-width="10%" data-column-id="applyPrgScd" data-header-align="center" data-align="center"  data-sortable="true" data-visible="true" data-formatter="prgScdRenderer">진행상태</th>
                                                <th data-width="10%" data-column-id="lcteUnqId" data-header-align="center" data-align="center" data-visible="false">강의ID</th>
                                                <th data-width="35%" data-column-id="lcteCon" data-header-align="center" data-align="center"  data-visible="false">강의내용</th>
                                                <th data-width="35%" data-column-id="atlcNmprCnt" data-header-align="center" data-align="center"  data-visible="false">신청가능수</th>
                                                <th data-width="35%" data-column-id="flapMngmNo" data-header-align="center" data-align="center"  data-visible="false">파일첨부번호</th>
                                                <th data-width="35%" data-column-id="studyNm" data-header-align="center" data-align="center" data-visible="false" data-formatter="btnFormatter">학습하기</th>
                                            </tr>
                                        </thead>
                                    </table>
                                    </div>
                                    <div id="notStandBy" class="text-center">
                                    	<i class="fa fa-exclamation-triangle color-light-gray icon-4x"></i>
                                        <h3 class="text-center mt10 grey--text"> 대기중인 교육과정이 없습니다</h3>
                                        <br/>
                                        <div class="text-center text-lg">
                                            다음 교육 시작일에 학습 시작할 교육 과정을 신청하지 않으셨습니다<br/>
                                            교육과정을 수강하시려면 <a href="fico-CC-list.html" class="btn-link">교육과정 목록</a>을 보시고 수강신청을 해주세요
                                        </div>
                                    </div>
                                </div>
                            </div>
						</div>
						<!--===================================================-->
						<!-- 대기중인교육 -->
                    </div>
                    
                    <div class="row">
                        <!-- 수강완료교육 -->
						<!--===================================================-->
						<div class="panel">
							<div class="panel-heading">
								<h3 class="panel-title">수강완료 교육</h3>
							</div>
							<div class="panel-body">
                                <div class="row">
                                    <div id="isComplete">
                                    <table id="table-complete" class="table table-bordered table-hover table-striped">
                                        <thead>
                                            <tr>
                                                <th data-width="10%" data-column-id="numRow" data-header-align="center" data-align="center"  data-sortable="true">번호</th>
                                                <th data-width="35%" data-column-id="lcteNm" data-header-align="center" data-align="center"  data-sortable="true">과정명</th>
                                                <th data-width="25%" data-column-id="lcteYmd" data-header-align="center" data-align="center"  data-sortable="true" >강의기간</th>
                                                <th data-width="20%" data-column-id="lctePlac" data-header-align="center" data-align="center" >강의장소</th>
                                                <th data-width="10%" data-column-id="completeYn" data-header-align="center" data-align="center" data-visible="false">수료여부</th>
                                                <th data-width="10%" data-column-id="completeYnDis" data-header-align="center" data-align="center" data-visible="true" data-formatter="statusFormatter">수료여부</th>
                                                <th data-width="10%" data-column-id="applyPrgScd" data-header-align="center" data-align="center"  data-sortable="true" data-visible="false" data-formatter="prgScdRenderer">진행상태</th>
                                                <th data-width="10%" data-column-id="lcteUnqId" data-header-align="center" data-align="center" data-visible="false">강의ID</th>
                                                <th data-width="35%" data-column-id="lcteCon" data-header-align="center" data-align="center"  data-visible="false">강의내용</th>
                                                <th data-width="35%" data-column-id="atlcNmprCnt" data-header-align="center" data-align="center"  data-visible="false">신청가능수</th>
                                                <th data-width="35%" data-column-id="flapMngmNo" data-header-align="center" data-align="center"  data-visible="false">파일첨부번호</th>
                                                <th data-width="35%" data-column-id="studyNm" data-header-align="center" data-align="center" data-visible="true" data-formatter="btnFormatter">복습하기</th>
                                            </tr>
                                        </thead>
                                    </table>
                                    </div>
                                    <div id="notComplete" class="text-center">
                                    	<i class="fa fa-exclamation-triangle color-light-gray icon-4x"></i>
                                        <h3 class="text-center mt10 grey--text">수강완료 교육과정이 없습니다</h3>
                                        <br/>
                                        <div class="text-center text-lg">
                                            수강 완료한 교육과정이 없습니다.<br/>
                                        </div>
                                    </div>
                                </div>
                            </div>
						</div>
						<!--===================================================-->
						<!-- 수강완료교육 -->
                    </div>
                <!--End page content-->
                </div>
            </div>
            <script>
               
            </script>
            <!--===================================================-->
            <!--END CONTENT CONTAINER-->

<script src="/bootstrap/thema/fico2000/js/app/edu/edu.service.js"></script>
<script src="/bootstrap/thema/fico2000/js/app/edu/EDU03000M00Component.js"></script>            