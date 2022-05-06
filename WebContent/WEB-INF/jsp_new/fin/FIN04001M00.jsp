<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<%@include file="/inc/common.jsp" %>

            <!--CONTENT CONTAINER-->
            <!--===================================================-->
            <div id="content-container">
                
                <!--Page Title-->
                <!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
                <div id="page-title">
                    <h1 class="page-header text-overflow">재무투자분석</h1>
                </div>
                <!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
                <!--End page title-->
        

                <!--Page content-->
                <!--===================================================-->
                <div id="page-content">
                    
                    <div class="row">
                        <div class="col-lg-6">                                        
                            <!-- 분석기업추가 -->
                            <!--===================================================-->
                            <div class="panel">
                                <div class="panel-heading">
                                    <h3 class="panel-title">분석 정보</h3>
                                </div>
                                <div class="panel-body">

                                    <table id="grid-list" class="table table-bordered table-hover table-striped">
                                            <thead>
                                                <tr>
                                                    <th data-width="10%" data-column-id="numRow" data-header-align="center" data-align="center">번호</th>
                                                    <th data-width="30%" data-column-id="name" data-header-align="center">기업명</th>
                                                    <th data-width="45%" data-column-id="alycon" data-header-align="center">분석명</th>
                                                    <th data-width="15%" data-column-id="frrgTs" data-header-align="center" data-align="center">등록일</th>
                                                    <th data-column-id="bzn" data-header-align="center" data-align="center" data-visible="false">사업자번호</th>
                                                    <th data-column-id="alyid" data-header-align="center" data-align="center" data-visible="false">분석ID</th>
                                                    <th data-column-id="userid" data-header-align="center" data-align="center" data-visible="false">사용자ID</th>
                                                    <th data-column-id="amtUnit" data-header-align="center" data-align="center" data-visible="false">단위</th>
                                                    <th data-column-id="amtUnitNm" data-header-align="center" data-align="center" data-visible="false">단위명</th>
                                                </tr>
                                            </thead>
                                    </table>
                                    
                                    <hr class="new-section-sm bord-no">

                                    <div class="alert alert-danger" role="alert">
                                        <span id="errMsg"></span>
                                    </div>  
                                    
                                    <a id="onNewAlyReg" target="_self" class="btn btn-block btn-primary btn-lg" style="color:#fff;cursor:Pointer;">신규 분석 등록 ></a>
                                </div>
                            </div>
                            <!--===================================================-->
                        </div>

                        <div class="col-lg-6">

                            <!-- 등록기업조회 -->
                            <!--===================================================-->
                            <div class="panel">
                                <div class="panel-heading">
                                    <h3 class="panel-title">재무투자분석</h3>
                                </div>
                                <div class="panel-body">
                                    
                                    <p class="text-main text-bold">분석명</p>

                                    <!-- 분석명 -->
                                    <!--===================================================-->
                                    <input id="alycon" type="text" class="form-control" name="alycon" style="height: 40px;">
                                    <!--===================================================-->
                                    <br>

                                    <p class="text-main text-bold">기업명</p>
                                    <!-- 기업명 -->
                                    <!--===================================================-->
                                    <input id="name" type="text" class="form-control" name="name" style="height: 40px;">
                                    <!--===================================================-->
                                    
                                    <hr class="new-section-sm bord-no">

                                    <!--===================================================-->
                                    
                                    <a id="onFinResult" target="_self" class="btn btn-block btn-primary btn-lg" style="color:#fff;">재무 투자 분석 결과보기 ></a>
                                </div>
                            <!--===================================================-->                                        
                            </div>
                                    
                        </div>
					
					
                    </div>
                    <!--===================================================-->
                <!--End page content-->
                </div>
            </div>
            <!--===================================================-->
            <!--END CONTENT CONTAINER-->

            <!--END CONTENT CONTAINER-->
<script src="/bootstrap/thema/fico2000/js/app/adm/codeMng.service.js"></script>
<script src="/bootstrap/thema/fico2000/js/app/fin/fin.services.js"></script>
<!--Demo script [ DEMONSTRATION ]-->
<script src="/bootstrap/thema/fico2000/js/demo/nifty-demo.min.js"></script>
    <!--Form Wizard [ SAMPLE ]-->
<script src="/bootstrap/thema/fico2000/js/demo/form-wizard.js"></script>
<script src="/bootstrap/thema/fico2000/js/app/fin/FIN04001M00Component.js"></script>   
