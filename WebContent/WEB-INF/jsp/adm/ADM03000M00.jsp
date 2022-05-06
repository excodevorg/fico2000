<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<%@include file="/inc/common.jsp" %>

            <!--CONTENT CONTAINER-->
            <!--===================================================-->
            <div id="content-container">
            
                <!--Page Title-->
                <!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
                <div id="page-title">
                    <h1 class="page-header text-overflow">한국은행 산업 평균 비율</h1>

                    <!--Searchbox-->
                    <div class="searchbox">
                        <div class="input-group custom-search-form">
                            <ul class="pull-right breadcrumb">
								<li>지표관리</li>
                                <li class="active">한국은행 산업 평균 비율</li>
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
                            <h3 class="panel-title">한국은행 산업 평균 비율</h3>
                        </div>

                        <div class="panel-body">

                            <form class="form-horizontal" role="form">
                            <!--<div class="well well-lg">-->
                            <div class="alert alert-primary">
                                <dl class="dl-horizontal text-lg" style="margin:0;">
                                <dt style="padding-top:5px;"></dt>
                                <dd>
                                    <div class="col-xs-3">
                                        <!--===================================================-->
                                        <select class="form-control" name="enslDcds" id="enslDcds" data-width="100%">
                                            <option value="" selected>☞ 조회 년도를 선택하세요</option>
                                        </select>
                                        <!--===================================================-->
                                    </div>
                                    
                                    <div class="col-xs-7">
                                        <!--===================================================-->
                                        <select class="form-control" name="tpbsClsfDcds" id="tpbsClsfDcds" data-width="100%">
                                            <option value="" selected>☞ 업종을 선택하세요</option>
                                        </select>
                                        <!--===================================================-->
                                    </div>

                                    <div class="col-xs-2">
                                        <a id="onSearch" class="btn btn-default btn-rounded">&nbsp;&nbsp;검색&nbsp;&nbsp;</a>
                                    </div>

                                </dd>
                                </dl>
                            </div>
                            </form>

                            <div class="alert alert-danger" role="alert">
                                        <span id="errMsg"></span>
                            </div> 

                            <div class="row">
                                
                                <div class="col-lg-4">

                                    <div class="panel">
                                        <div class="panel-heading">
                                            <h3 class="panel-title">표준재무비율(중소기업)</h3>
                                        </div>

                                        <div class="panel-body">

                                            <table class="table  table-condensed" id="mFinRateTable">

                                                <thead>
                                                    <tr>
                                                        <th>항목</th>
                                                        <th>비율</th>
                                                    </tr>
                                                </thead>

                                                <tbody>                                               
                                                </tbody>

                                            </table>

                                        </div>

                                    </div>

                                </div>                                

                                <div class="col-lg-4">

                                    <div class="panel">
                                        <div class="panel-heading">
                                            <h3 class="panel-title">표준재무비율(대기업)</h3>
                                        </div>

                                        <div class="panel-body">

                                            <table class="table  table-condensed"  id="lFinRateTable">

                                                <thead>
                                                    <tr>
                                                        <th>항목</th>
                                                        <th>비율</th>
                                                    </tr>
                                                </thead>

                                                <tbody>
                                                                                                      
                                                </tbody>

                                            </table>

                                        </div>

                                    </div>

                                </div> 

                                <div class="col-lg-4">

                                    <div class="panel">
                                        <div class="panel-heading">
                                            <h3 class="panel-title">표준재무비율(종합)</h3>
                                        </div>

                                        <div class="panel-body">

                                            <table class="table  table-condensed" id="aFinRateTable">

                                                <thead>
                                                    <tr>
                                                        <th>항목</th>
                                                        <th>비율</th>
                                                    </tr>
                                                </thead>

                                                <tbody>
                                                                                                       
                                                </tbody>

                                            </table>

                                        </div>

                                    </div>

                                </div> 

                            </div>                            

                        </div>

                    </div>

                 </div>

            </div>

<script src="/bootstrap/thema/fico2000/js/app/adm/codeMng.service.js"></script>
<script src="/bootstrap/thema/fico2000/js/app/fin/fin.services.js"></script>
<script src="/bootstrap/thema/fico2000/js/app/adm/ADM03000M00Component.js"></script>