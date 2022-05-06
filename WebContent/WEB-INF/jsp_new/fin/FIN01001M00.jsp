<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<%@include file="/inc/common.jsp" %>

<!--CONTENT CONTAINER-->
<!--===================================================-->
<div id="content-container">

    <!--Page Title-->
    <!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
    <div id="page-title">
        <h1 class="page-header text-overflow">기업 기본정보 등록 및 조회</h1>
    </div>
    <!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
    <!--End page title-->

    <!--Page content-->
    <!--===================================================-->
    <div id="page-content">

        <div class="row">
            <div class="col-lg-12"> 

               <!-- 분석기업추가 -->
               <!--===================================================-->
               <div class="panel">                                

                   <div class="panel-heading">
                       <h3 class="panel-title">기업 정보 등록</h3>
                   </div>
                   <div class="panel-body">

                       <div class="alert alert-danger margin-bottom-20" role="alert" style="display:none">
                           <span id="errMsg"></span>
                       </div>  
                       
                       <form class="sky-form" role="form" name="ngForm" id="ngForm">
                           <input type="hidden" name="userid" id="userid">

                           <fieldset>
                               <div class="row">                
				    <div class="col-xs-12 col-md-6">
				        <div class="col-xs-4">
                                        <h4>기업명</h4>
                                    </div>
   									<div class="col-xs-8">
                                        <label class="input">
                                            <input type="text" class="form-control"  id="name"  size="50" name="name" placeholder="기업명" required>
                                        </label>
                                    </div>
                                   </div>
                                   <div class="col-xs-12 col-md-6">
                                    <div class="col-xs-4">
                                        <h4>기업규모</h4>
                                    </div>
   									<div class="col-xs-8">
                                        <label class="input">
                                            <select class="form-control" id="enslDcd" name="enslDcd">
                                                <option value=''>기업규모를 선택하세요</option>
                                            </select>
                                        </label>
                                    </div>
                                   </div>
                                <div class="col-xs-12 col-md-6">
                                    <div class="col-xs-4">
                                        <h4>업종분류</h4>
                                    </div>
                                    <div class="col-xs-8">
                                        <label class="input">
                                            <select class="form-control" id="tpbsClsfDcd" name="tpbsClsfDcd">
                                                <option value=''>업종분류를 선택하세요</option>                                                                
                                            </select>
                                        </label>
                                    </div>                                                                              
                                </div>
					<div class="col-xs-12 col-md-6">                                              
                                    <div class="col-xs-4">
                                        <h4>사업자번호</h4>
                                    </div>
                                    <div class="col-xs-8">
                                        <label class="input">
                                            <input type="text" class="form-control"  id="bzn"  size="50" name="bzn" onkeydown="onlyNumber(this)" placeholder="사업자번호 - 없이 등록" required>
                                        </label>
                                    </div>
                                </div>
                                   <div class="col-xs-12 col-md-6">                                              
                                    <div class="col-xs-4">
                                        <h4>재무정보 단위</h4>
                                    </div>
                                   	<div class="col-xs-8">
                                        <label class="input">
                                            <select class="form-control" id="amtUnit" name="amtUnit">
                                                <option value=''>재무정보단위를 선택하세요</option>                                                                
                                            </select>
                                        </label>
                                   	</div>  
                                  	 </div>
                               </div>

                               <div class="row">                                                
                                   <div style="margin:5px 16px 5px;">
                                       * 기업재무정보 숫자 입력시 처음 입력한 단위를 지속적으로 유지하시기 바랍니다. 예) 백만원이면 백만원으로 계산하여 주시기 바랍니다.
                                   </div>
                               </div>                                                                                                    
                               
                               <div class="row">
                                   <div style="margin-top:10px;text-align:center;">
                                   <button class="btn btn-primary" type="button" id="onReg">기업등록</button>
                                   <button class="btn btn-primary" type="button" id="onMdfc">기업변경</button>
                                   <button class="btn btn-darkgray" type="button" id="onDel">삭제</button>
                                   <button class="btn btn-default" type="button" id="onCancel">취소</button>
                                   </div>
							   </div>
                           </fieldset>

                       </form>

                   </div>    
               </div>

            </div>
        </div>

        <div class="row">
            <div class="col-lg-12"> 

                    <!-- 분석기업추가 -->
                    <!--===================================================-->
                    <div class="panel">                                

                        <div class="panel-heading">
                            <h3 class="panel-title">기업 정보 목록</h3>
                        </div>
                        <div class="panel-body">
                            <!--
                            <div class="row">
                                <div style="float:right;margin-bottom:10px;margin-right:10px;">
                                    <button class="btn-u btn-u-yellow" type="button" id="onRegEntp">신규기업등록</button>
                               </div>
                            </div>
                            -->
                            <div class="margin-bottom-20"></div>
                            
                            <table id="grid-list" class="table table-bordered table-hover table-striped">
                                <thead>
                                    <tr>
                                        <th data-width="7%" data-column-id="numRow" data-header-align="center" data-align="center">번호</th>
                                        <th data-width="15%" data-column-id="bznDis" data-header-align="center"  data-align="center">사업자번호</th>
                                        <th data-column-id="bzn" data-header-align="center" data-align="center" data-visible="false">사업자번호</th>
                                        <th  data-column-id="name" data-header-align="center">기업명</th>
                                        <th data-width="15%" data-column-id="frrgTs" data-header-align="center" data-align="center">등록일</th>
                                        
                                        <th data-width="10%" data-column-id="enslDcd" data-header-align="center" data-align="center" data-formatter="enslDcdTypeRenderer">기업규모</th>
                                        <th data-column-id="tpbsClsfDcd" data-header-align="center" data-align="center" data-visible="false">업종분류</th>
                                        <th data-width="15%" data-column-id="tpbsClsfDcdDis" data-header-align="center" data-align="center">업종분류</th>
                                        <th data-column-id="amtUnit" data-header-align="center" data-align="center" data-visible="false">재무정보단위</th>
                                        <th data-width="15%" data-column-id="amtUnitDis" data-header-align="center" data-align="center">재무정보단위</th>
                                        <th data-column-id="userid" data-header-align="center" data-align="center">등록ID</th>
                                    </tr>
                                </thead>
                            </table>
                            <!--
                            <div class="row">
                                <div style="float:left;margin-bottom:10px;margin-right:10px;">
                                    * 기업 재무 정보 등록 및 기업정보 변경은 등록된 기업을 클릭 후 진행 됩니다.
                               </div>
                            </div>-->

                        </div>    
                    </div>

            </div>
        </div>



    </div>



</div>

<script src="/bootstrap/thema/fico2000_new/js/app/adm/codeMng.service.js"></script>
<script src="/bootstrap/thema/fico2000_new/js/app/fin/fin.services.js"></script>
<script src="/bootstrap/thema/fico2000_new/js/app/fin/FIN01001M00Component.js"></script>   
            