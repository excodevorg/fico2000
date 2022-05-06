<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<%@include file="/inc/common.jsp" %>

            <!--CONTENT CONTAINER-->
            <!--===================================================-->
            <div id="content-container">
                
                <!--Page Title-->
                <!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
               <div id="page-title">
                    <h1 class="page-header text-overflow">분석 관리</h1>

                    <!--Searchbox-->
                    <div class="searchbox">
                        <div class="input-group custom-search-form">
                            <ul class="pull-right breadcrumb">
                                <li><a href="index.html">Home</a></li>
                                <li>재무분석</li>
                                <li class="active">분석 관리</li>
                            </ul>
                        </div>
                    </div>
                </div>

                 <!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
                

                <!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
                <!--End page title-->


                <!--Page content-->
                <!--===================================================-->
                <div id="page-content">
                    
                     <div class="row">
                        <div class="col-lg-6">                                        
                            <!-- 분석 선택 -->
                            <!--===================================================-->
                            <div class="panel">
                                <div class="panel-heading">
                                    <h3 class="panel-title">기업 정보</h3>
                                </div>
                                <div class="panel-body">
                                    <table id="grid-list" class="table table-bordered table-hover table-striped">
                                            <thead>
                                                <tr>
                                                    <th data-width="10%" data-column-id="numRow" data-header-align="center" data-align="center">번호</th>
                                                    <th data-width="20%" data-column-id="bznDis" data-header-align="center"  data-align="center">사업자번호</th>
                                                    <th data-column-id="bzn" data-header-align="center" data-align="center" data-visible="false">사업자번호</th>
                                                    <th data-width="50%" data-column-id="name" data-header-align="center">기업명</th>
                                                    <th data-width="20%" data-column-id="frrgTs" data-header-align="center" data-align="center">등록일</th>
                                                    <th data-column-id="userid" data-header-align="center" data-align="center" data-visible="false">사용자ID</th>
                                                </tr>
                                            </thead>
                                        </table>
                                    
                                    <hr class="new-section-sm bord-no">

                                    <a class="btn btn-block btn-primary btn-lg" style="color:#fff;" id="onMovePage">기업 신규 등록</a>

                                </div>
                            </div>
                            <!--===================================================-->
                        </div>

                        <div class="col-lg-6">

                             <div class="alert alert-danger" role="alert">
                                            <span id="errRegMsg"></span>
                            </div> 

                            <!-- 등록기업조회 -->
                            <!--===================================================-->
                            <div class="panel">
                                <div class="panel-heading">
                                    <h3 class="panel-title">신규 분석 등록</h3>
                                </div>
                                <div class="panel-body">

                                    <table id="grid-aly-list" class="table table-bordered table-hover table-striped">
                                            <thead>
                                                <tr>
                                                    <th data-width="10%" data-column-id="numRow" data-header-align="center" data-align="center">번호</th>
                                                    <th data-width="30%" data-column-id="name" data-header-align="center">기업명</th>
                                                    <th data-width="45%" data-column-id="alycon" data-header-align="center">분석명</th>                                                    
                                                    <th data-width="15%" data-column-id="frrgTs" data-header-align="center" data-align="center">등록일</th>
                                                    <th data-column-id="bzn" data-header-align="center" data-align="center" data-visible="false">사업자번호</th>
                                                    <th data-column-id="alyid" data-header-align="center" data-align="center" data-visible="false">분석ID</th>
                                                    <th data-column-id="userid" data-header-align="center" data-align="center" data-visible="false">사용자ID</th>
                                                </tr>
                                            </thead>
                                        </table>
                                    
                                    <!--===================================================-->

                                    <hr class="new-section-sm bord-no">
                                    

                                    <p class="text-main text-bold">분석명</p>

                                    <!-- 기업명 -->
                                    <!--===================================================-->
                                    <input type="text" class="form-control" id="alycon" name="alycon" style="height: 40px;">
                                    <!--===================================================-->
                                    
                                    <hr class="new-section-sm bord-no">

                                    <p class="text-main text-bold">분석 대상 재무정보</p>
                                    
                                    <div class="row">
                                        <div class="col-xs-5">
                                            <select name="from[]" id="from"  class="multiselect form-control text-lg" size="8" multiple="multiple" data-right="#multiselect_to_1" data-right-all="#right_All_1" data-right-selected="#right_Selected_1" data-left-all="#left_All_1" data-left-selected="#left_Selected_1">
                                            </select>
                                        </div>

                                        <div class="col-xs-2">
                                            <button type="button" id="right_All_1" class="btn btn-block btn-primary"><i class="glyphicon glyphicon-forward"></i></button>
                                            <button type="button" id="right_Selected_1" class="btn btn-block btn-primary"><i class="glyphicon glyphicon-chevron-right"></i></button>
                                            <button type="button" id="left_Selected_1" class="btn btn-block btn-primary"><i class="glyphicon glyphicon-chevron-left"></i></button>
                                            <button type="button" id="left_All_1" class="btn btn-block btn-primary"><i class="glyphicon glyphicon-backward"></i></button>
                                        </div>

                                        <div class="col-xs-5">
                                            <select name="to[]" id="multiselect_to_1" class="form-control text-lg" size="8" multiple="multiple">                                                
                                            </select>
                                        </div>
                                    </div>
                                    
                                    <hr class="bord-no" style="margin:5px 0;min-height:1px;">
                                    <div class="row">
                                    
                                        <div style="float:right;margin-bottom:10px;margin-right:10px;">
                                                    <button class="btn-u btn-u-aqua" type="button" id="onFirst">초기화</button>
                                                    <button class="btn-u btn-u-yellow" type="button" id="onAdd">등록</button>
                                                    <button class="btn-u btn-u-red" type="button" id="onUpd" style="display:none">변경</button>
                                                    <button class="btn-u btn-u-aqua" type="button" id="onDel" style="display:none">삭제</button>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <!--===================================================-->  
                               
                        </div>
                        
                        <input type="hidden" class="form-control" id="alyid" style="height: 40px;">
                        <input type="hidden" class="form-control" id="userid" style="height: 40px;">
                        <input type="hidden" class="form-control" id="bzn" style="height: 40px;">
					
                    </div>
                </div>
                <!--===================================================-->
                <!--End page content-->

            </div>
            <!--===================================================-->
            <!--END CONTENT CONTAINER-->
<script src="/bootstrap/thema/fico2000/js/app/adm/codeMng.service.js"></script>
<script src="/bootstrap/thema/fico2000/js/app/fin/fin.services.js"></script>
<!--Demo script [ DEMONSTRATION ]-->
<script src="/bootstrap/thema/fico2000/js/demo/nifty-demo.min.js"></script>
    <!--Form Wizard [ SAMPLE ]-->
<script src="/bootstrap/thema/fico2000/js/demo/form-wizard.js"></script>
<script src="/bootstrap/thema/fico2000/js/app/fin/FIN05001M00Component.js"></script>   