<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<%@include file="/inc/common.jsp" %>

<!--CONTENT CONTAINER-->
<!--===================================================-->
<div id="content-container" class="FIN01002M00">

  <!--Page Title-->
  <!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
  <div id="page-title">
      <h1 class="page-header text-overflow">기업 재무 정보 등록 및 조회</h1>
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
                      <h3 class="panel-title">기업 재무 정보 등록</h3>
                  </div>                             

                  <div class="panel-body">

                      <div class="alert alert-danger margin-bottom-20" role="alert" style="display:none">
                          <span id="errMsg"></span>
                      </div>
                      
                      <form class="sky-form" role="form" name="ngForm" id="ngForm">
                          <input type="hidden" name="userid" id="userid">
                          <input type="hidden" name="bzn" id="bzn">
                          <input type="hidden" name="name" id="name">
                          <input type="hidden" name="enslDcd" id="enslDcd">
                          <input type="hidden" name="tpbsClsfDcd" id="tpbsClsfDcd">
                          <input type="hidden" name="amtUnit" id="amtUnit">
                          <input type="hidden" name="amtUnitDis" id="amtUnitDis">
                          <fieldset>
                              <p class="mb0">* 기업재무정보 숫자 입력시 처음 입력한 단위를 지속적으로 유지하시기 바랍니다. 예) 백만원이면 백만원으로 계산하여 주시기 바랍니다.</p>
                              <p class="mb0">* 기업 재무 정보 등록은 등록된 기업을 클릭 후 진행 됩니다.</p>
                              <p class="mb0">* 기업 재무 정보 변경은 해당 재무 정보를 클릭 후 진행 됩니다.</p>

                              <div>
                                  <button class="btn btn-primary pull-right" type="button" id="onFinReg">기업재무정보신규등록</button>
						      </div>
                          </fieldset>
                      </form>

                      <table id="grid-fin-list" class="table table-bordered table-hover table-striped">
                          <thead>
                              <tr>
                                  <th data-width="10%" data-column-id="numRow" data-header-align="center" data-align="center">번호</th>
                                  <th data-width="15%" data-column-id="bznDis" data-header-align="center"  data-align="center">사업자번호</th>
                                  <th data-width="25%" data-column-id="name" data-header-align="center">기업명</th>
                                  <th data-width="15%" data-column-id="finTitle" data-header-align="center" data-align="center">내용</th>
                                  <th data-width="15%" data-column-id="stacYy" data-header-align="center" data-align="center">결산년</th>                                                    
                                  <th data-column-id="userid" data-header-align="center" data-align="center" data-visible="false">사용자ID</th>
                                  <th data-column-id="bzn" data-header-align="center"  data-align="center" data-visible="false">사업자번호</th>
                              </tr>
                          </thead>
                      </table>

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

                      <div class="margin-bottom-20"></div>
                      
                      <table id="grid-list" class="table table-bordered table-hover table-striped">
                          <thead>
                              <tr>
                                  <th data-width="5%" data-column-id="numRow" data-header-align="center" data-align="center">번호</th>
                                  <th data-width="15%" data-column-id="bznDis" data-header-align="center"  data-align="center">사업자번호</th>
                                  <th data-column-id="bzn" data-header-align="center" data-align="center" data-visible="false">사업자번호</th>
                                  <th data-width="20%" data-column-id="name" data-header-align="center">기업명</th>
                                  <th data-width="15%" data-column-id="frrgTs" data-header-align="center" data-align="center">등록일</th>
                                  <th data-width="10%" data-column-id="enslDcd" data-header-align="center" data-align="center" data-formatter="enslDcdTypeRenderer">기업규모</th>
                                  <th data-column-id="tpbsClsfDcd" data-header-align="center" data-align="center" data-visible="false">업종분류</th>
                                  <th data-width="15%" data-column-id="tpbsClsfDcdDis" data-header-align="center" data-align="center">업종분류</th>
                                  <th data-column-id="amtUnit" data-header-align="center" data-align="center" data-visible="false">재무정보단위</th>
                                  <th data-width="10%" data-column-id="amtUnitDis" data-header-align="center" data-align="center">재무정보단위</th>
                                  <th data-width="10%" data-column-id="userid" data-header-align="center" data-align="center">등록ID</th>
                              </tr>
                          </thead>
                      </table>
                  </div>    
              </div>
          </div>
      </div>
  </div>

</div>

<script src="/bootstrap/thema/fico2000_new/js/app/adm/codeMng.service.js"></script>
<script src="/bootstrap/thema/fico2000_new/js/app/fin/fin.services.js"></script>
<script src="/bootstrap/thema/fico2000_new/js/app/fin/FIN01002M00Component.js"></script>   
            