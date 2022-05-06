<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<%@include file="/inc/common.jsp" %>

            <!--CONTENT CONTAINER-->
            <!--===================================================-->
            <div id="content-container">

                <!--Page Title-->
                <!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
                <div id="page-title">
                    <h1 class="page-header text-overflow">강의 개설</h1>

                    <!--Searchbox-->
                    <div class="searchbox">
                        <div class="input-group custom-search-form">
                            <ul class="pull-right breadcrumb">
                                <li>시스템관리</li>
								<li>강의관리</li>
                                <li class="active">강의개설</li>
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
                            <h3 class="panel-title">강의목록</h3>
                        </div>

                        <div class="panel-body">

                            <div class="row"> 

                               <table id="grid-list" class="table table-condensed table-hover table-striped">
                                    <thead>
                                        <tr>
                                            <th data-column-id="lcteUnqId" data-visible="false">강의ID</th>
                                            <th data-column-id="lcteNm">강의명</th>
                                            <th data-column-id="lcteYmd">강의기간</th>
                                            <th data-column-id="lctePlac">강의장소</th>
                                            <th data-column-id="atlcNmprCnt">수강가능인원</th>
                                            <th data-column-id="flapMngmNo" data-formatter="menuTypeRenderer">첨부파일</th>
                                            <th data-column-id="lctePgrsScd" data-visible="false">강의진행상태코드</th>
                                            <th data-column-id="lctePgrsScdNm">강의진행상태</th>
                                            <th data-column-id="lcteFuncUseYn" data-visible="false">기능사용여부</th>
                                            <th data-column-id="lcteCon" data-visible="false">강의설명</th>
                                            <th data-column-id="lcteSttgYmd" data-visible="false">강의시작</th>
                                            <th data-column-id="lcteFnshYmd" data-visible="false">강의종료</th>
                                        </tr>
                                    </thead>
                                </table>

                                <div class="margin-bottom-20"></div>
                                
                            </div>

                            <div class="alert alert-danger" role="alert">
                                        <span id="errRegMsg"></span>
                            </div>

                            <div class="row">

                                <form class="sky-form" role="form" id="ngForm" name="ngForm">
                                    <input type="hidden" class="form-control" id="lcteUnqId" name="lcteUnqId">
                                    <fieldset>                            
                                                <div class="row">
                                                    <section class="col col-2">
                                                        <h4>강의명</h4>
                                                    </section>
                                                    <section class="col col-5">
                                                        <label class="input">
                                                            <input type="text" class="form-control" id="lcteNm" size="50" placeholder="강의명" name="lcteNm" required >
                                                        </label>
                                                    </section>
                                                    <section class="col col-2">
                                                        <h4>수강가능인원</h4>
                                                    </section>
                                                    <section class="col col-2">
                                                        <label class="input" style="width:150px;">
                                                            <input type="number" class="form-control" min="0" id="atlcNmprCnt" name="atlcNmprCnt" size="5" required >
                                                        </label>
                                                    </section>
                                                </div>
                                                
                                                <div class="row">
                                                    <section class="col col-2">
                                                        <h4>강의장소</h4>
                                                    </section>
                                                    <section class="col col-5">
                                                        <label class="input">
                                                            <input type="text" class="form-control"  id="lctePlac"  size="50" name="lctePlac" placeholder="강의장소" required>
                                                        </label>
                                                    </section>
                                                    <section class="col col-2">
                                                        <h4>강의진행상태</h4>
                                                    </section>
                                                    <section class="col col-2">
                                                        <label class="input" style="width:150px;">
                                                            <select class="form-control" id="lctePgrsScd" name="lctePgrsScd">
                                                                
                                                            </select>
                                                        </label>
                                                    </section>
                                                </div>
                                                
                                                <div class="row">
                                                    <section class="col col-2">
                                                        <h4>강의기간</h4>
                                                    </section>
                                                    <section class="col col-5">
                                                        <label class="input">
                                                            <input type="text" class="form-control" id="lcteSttgYmd" name="lcteSttgYmd" >
                                                            ~
                                                            <input type="text" class="form-control" id="lcteFnshYmd" name="lcteFnshYmd">
                                                        </label>
                                                    </section>
                                                    <section class="col col-2">
                                                        <h4>기능사용여부</h4>
                                                    </section>
                                                    <section class="col col-2">
                                                        <label class="input" style="width:150px;">
                                                        <select class="form-control" id="lcteFuncUseYn" name="lcteFuncUseYn">
                                                                <option value="Y">예 </option>
                                                                <option value="N">아니오 </option>
                                                            </select>
                                                        </label>
                                                    </section>
                                                </div>
                                                
                                                <div class="row">
                                                    <section class="col col-2">
                                                        <h4>강의내용</h4>
                                                    </section>
                                                    <section class="col col-9">
                                                        <label class="input">
                                                            <textarea class="form-control" id="lcteCon" name="lcteCon"></textarea>
                                                        </label>
                                                    </section>
                                                </div>   
                                                
                                                <div class="row">
                                                    <section class="col col-2">
                                                        <h4>파일첨부</h4>
                                                    </section>
                                                    <section class="col col-10">
                                                        <div id="uploadfiles"></div>
                                                    </section>
                                                </div>     

                                                <div class="row">
                                                    <div style="float:right;margin-bottom:10px;margin-right:10px;">
                                                    <button class="btn btn-primary" type="button" id="onAddLecture">강의등록</button>
                                                    <button class="btn btn-default" type="button" id="onUpdLecture">강의변경</button>
                                                    <button class="btn btn-darkgray" type="button" id="onDelLecture">강의삭제</button>
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
<script src="/bootstrap/thema/fico2000/js/app/adm/lecture.service.js"></script>
<script src="/bootstrap/thema/fico2000/js/app/com/file.services.js"></script>
<script src="/bootstrap/thema/fico2000/js/app/adm/ADM04001M00Component.js"></script>