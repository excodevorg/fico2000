<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<%@include file="/inc/common.jsp" %>

            <!--CONTENT CONTAINER-->
            <!--===================================================-->
            <div id="content-container">

                <!--Page Title-->
                <!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
                <div id="page-title">
                    <h1 class="page-header text-overflow">강의 내용</h1>

                    <!--Searchbox-->
                    <div class="searchbox">
                        <div class="input-group custom-search-form">
                            <ul class="pull-right breadcrumb">
                                <li>시스템관리</li>
								<li>강의관리</li>
                                <li class="active">강의내용</li>
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
                            <h3 class="panel-title">강의내용</h3>
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

                            <div class="row"> 

                               <table id="grid-list" class="table table-condensed table-hover table-striped">
                                    <thead>
                                        <tr>
                                            <th data-column-id="code" data-visible="false">게시판코드</th>
                                            <th data-column-id="mainNo" data-visible="false">게시판번호</th>
                                            <th data-column-id="lcteUnqId" data-visible="false">강의ID</th>
                                            <th data-column-id="numRow">순번</th>
                                            <th data-column-id="title">제 목</th>
                                            <th data-column-id="name">글쓴이</th>
                                            <th data-column-id="writeDate">작성일</th>
                                            <th data-column-id="flapMngmNo" data-formatter="menuTypeRenderer">첨부파일</th>
                                            <th data-column-id="count">hit</th>
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
                                    <input type="hidden" class="form-control" id="lcteUnqId">
                                    <input type="hidden" class="form-control" id="code">
                                    <input type="hidden" class="form-control" id="mainNo">
                                    <fieldset>                            
                                                <div class="row">
                                                    <section class="col col-2">
                                                        <h4>제목</h4>
                                                    </section>
                                                    <section class="col col-5">
                                                        <label class="input">
                                                            <input type="text" class="form-control" id="title" size="50" placeholder="제목" required >
                                                        </label>
                                                    </section>
                                                </div>
                                                
                                                
                                                <div class="row">
                                                    <section class="col col-2">
                                                        <h4>내용</h4>
                                                    </section>
                                                    <section class="col col-9">
                                                        <label class="input">
                                                            <textarea class="form-control" rows="5" id="content" ></textarea>
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
                                                    <button class="btn btn-primary" type="button" id="onSave">등록</button>
                                                    <button class="btn btn-default" type="button" id="onModify">변경</button>
                                                    <button class="btn btn-darkgray" type="button" id="onDel">삭제</button>
                                                    </div>
                                                </div>
                    
                                            </fieldset>
                                </form>

                            </div>
                    
                    
                    
                    
                    
                    
                    </div>
                 </div>
            </div>

<script src="/bootstrap/thema/fico2000/js/app/adm/lecture.service.js"></script>
<script src="/bootstrap/thema/fico2000/js/app/com/board.services.js"></script>
<script src="/bootstrap/thema/fico2000/js/app/com/file.services.js"></script>
<script src="/bootstrap/thema/fico2000/js/app/adm/ADM04002M00Component.js"></script>            