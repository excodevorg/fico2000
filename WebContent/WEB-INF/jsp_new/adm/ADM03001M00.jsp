<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<%@include file="/inc/common.jsp" %>

            <!--CONTENT CONTAINER-->
            <!--===================================================-->
            <div id="content-container">
            
                <!--Page Title-->
                <!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
                <div id="page-title">
                    <h1 class="page-header text-overflow">WALL-TRANT 가중치</h1>

                    <!--Searchbox-->
                    <div class="searchbox">
                        <div class="input-group custom-search-form">
                            <ul class="pull-right breadcrumb">
								<li>지표관리</li>
                                <li class="active">WALL-TRANT 가중치</li>
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
                            <h3 class="panel-title">WALL-TRANT 가중치</h3>
                        </div>

                        <div class="panel-body">

                            <div class="alert alert-danger" role="alert">
                                        <span id="errMsg"></span>
                            </div>

                            <div class="row">

                                <div class="margin-bottom-20"></div>

                                <table id="grid-list" class="table table-condensed table-hover table-striped">
                                    <thead>
                                        <tr>
                                            <th data-column-id="itemCode" data-visible="false">코드1</th>
                                            <th data-column-id="bokItemCode" data-visible="false">코드2</th>
                                            <th data-column-id="itemNm">표준비율명</th>
                                            <th data-column-id="bokItemNm" data-visible="false">한국은행표준비율명</th>
                                            <th data-column-id="wall">WALL</th>
                                            <th data-column-id="trant">TRANT</th>
                                        </tr>
                                    </thead>
                                </table>  

                            </div>  

                            <div class="row">

                                <div class="margin-bottom-20"></div>

                                <form class="sky-form" role="form" id="ngForm" name="ngForm">

                                    <input type="hidden" class="form-control" name="itemCode" id="itemCode">
                                    <input type="hidden" class="form-control" name="bokItemCode" id="bokItemCode">
                                    <input type="hidden" class="form-control" name="bokItemNm" id="bokItemNm">

                                    <fieldset>

                                        <div class="row">
                                            <section class="col col-2">
                                                <h4>표준비율명</h4>
                                            </section>
                                            <section class="col col-5">
                                                <label class="input">
                                                    <input type="text" class="form-control" size="100" name="itemNm" id="itemNm" placeholder="표준비율명" required >
                                                </label>
                                            </section>
                                            <section class="col col-2">
                                                <h4>WALL</h4>
                                            </section>
                                            <section class="col col-2">
                                                <label class="input" style="width:150px;">
                                                    <input type="number" class="form-control" min="0" name="wall" id="wall" size="5" required >
                                                </label>
                                            </section>
                                            <section class="col col-2">
                                                <h4>TRANT</h4>
                                            </section>
                                            <section class="col col-2">
                                                <label class="input" style="width:150px;">
                                                    <input type="number" class="form-control" min="0" name="trant" id="trant" size="5" required >
                                                </label>
                                            </section>                                            
                                        </div>                                        

                                    </fieldset>

                                </form>

                            </div> 

                            <div class="row">
                                <div style="float:right;margin-bottom:10px;margin-right:10px;">
                                    <button class="btn btn-primary" type="button" id="onInit">초기화</button>
                                    <button class="btn btn-default" type="button" id="onMdfc">변경</button>
                                </div>
                            </div>                        

                        </div>

                    </div>                    

                 </div>


<script src="/bootstrap/thema/fico2000/js/app/adm/codeMng.service.js"></script>
<script src="/bootstrap/thema/fico2000/js/app/fin/fin.services.js"></script>
<script src="/bootstrap/thema/fico2000/js/app/adm/ADM03001M00Component.js"></script>