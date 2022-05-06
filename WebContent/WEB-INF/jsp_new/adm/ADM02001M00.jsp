<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<%@include file="/inc/common.jsp" %>

            <!--CONTENT CONTAINER-->
            <!--===================================================-->
            <div id="content-container">

                <!--Page Title-->
                <!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
                <div id="page-title">
                    <h1 class="page-header text-overflow">메뉴생성</h1>

                    <!--Searchbox-->
                    <div class="searchbox">
                        <div class="input-group custom-search-form">
                            <ul class="pull-right breadcrumb">
                                <li>시스템관리</li>
								<li>메뉴관리</li>
                                <li class="active">메뉴생성</li>
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
                            <h3 class="panel-title">메뉴목록</h3>
                        </div>

                        <div class="panel-body">

                            <div class="alert alert-danger" role="alert" *ngIf="errMsg != ''" >
                                <span id="errMsg"></span>
                            </div>

                            <div class="row"> 

								<table id="grid-list" class="table table-condensed table-hover table-striped">
                                    <thead>
                                        <tr>
                                            <th data-column-id="menuId">메뉴ID</th>
                                            <th data-column-id="menuNm">메뉴명</th>
                                            <th data-column-id="upperMenuId" data-visible="false">상위메뉴ID</th>
                                            <th data-column-id="upperMenuNm">상위메뉴명</th>
                                            <th data-column-id="menuPath" data-visible="false">경로</th>
                                            <th data-column-id="menuOrder">순서</th>
                                            <th data-column-id="menuType">메뉴유형</th>
                                            <th data-column-id="menuCon" data-visible="false">메뉴설명</th>
                                            <th data-column-id="useYn" data-formatter="useYn">사용여부</th>
                                            <th data-column-id="menuLevel">메뉴Level</th>
                                        </tr>
                                    </thead>
                                </table> 

                                <div class="margin-bottom-20"></div>

                            </div>

							<div class="row">

							<form class="sky-form" role="form" name="ngForm" id="ngForm">
							<fieldset>                            
										<div class="row">
											<section class="col col-2">
												<h4>메뉴 ID</h4>
											</section>
											<section class="col col-5">
												<label class="input">
													<input type="text" class="form-control" name="menuId" id="menuId" size="50" placeholder="ID" required >
												</label>
											</section>
											<section class="col col-2">
												<h4>순서</h4>
											</section>
											<section class="col col-2">
												<label class="input" style="width:150px;">
													<input type="number" class="form-control" min="0" name="menuOrder" id="menuOrder" size="5" required >
												</label>
											</section>
										</div>
										
										<div class="row">
											<section class="col col-2">
												<h4>메뉴명</h4>
											</section>
											<section class="col col-5">
												<label class="input">
													<input type="text" class="form-control"  name="menuNm" id="menuNm" size="50" placeholder="메뉴명" required>
												</label>
											</section>
											<section class="col col-2">
												<h4>사용여부</h4>
											</section>
											<section class="col col-2">
												<label class="input" style="width:150px;">
												<select class="form-control" name="useYn" id="useYn">
														<option value="Y">예 </option>
														<option value="N">아니오 </option>
													</select>
												</label>
											</section>
										</div>
										
										<div class="row">
											<section class="col col-2">
												<h4>상위메뉴ID</h4>
											</section>
											<section class="col col-5">
												<label class="input">
													<input type="text" class="form-control" min="0"  name="upperMenuId" id="upperMenuId" size="50" placeholder="상위메뉴ID">
												</label>
											</section>
											<section class="col col-2">
												<h4>메뉴유형</h4>
											</section>
											<section class="col col-2">
												<label class="input" style="width:150px;">
												<select class="form-control" name="menuType" id="menuType">
														<option value="F">파일</option>
														<option value="D">폴더</option>
													</select>
												</label>
											</section>
										</div>
										
										<div class="row">
											<section class="col col-2">
												<h4>상위메뉴명</h4>
											</section>
											<section class="col col-5">
												<label class="input">
													<input type="text" class="form-control" min="0"  name="upperMenuNm" id="upperMenuNm" size="50" placeholder="상위메뉴명">
												</label>
											</section>
											<section class="col col-2">
												<h4>메뉴 Level</h4>
											</section>
											<section class="col col-2">
												<label class="input" style="width:150px;">
													<input type="number" class="form-control" min="0" name="menuLevel" id="menuLevel" size="5" required >
												</label>
											</section>
										</div>    

										<div class="row">
											<section class="col col-2">
												<h4>경로</h4>
											</section>
											<section class="col col-7">
												<label class="input">
													<input type="text" class="form-control"  name="menuPath"  id="menuPath" size="100" placeholder="경로" >
												</label>
											</section>
										</div>

										<div class="row">
											<section class="col col-2">
												<h4>메뉴설명</h4>
											</section>
											<section class="col col-7">
												<label class="input">
													<input type="text" class="form-control"  name="menuCon" id="menuCon" size="100" placeholder="메뉴설명" >
												</label>
											</section>
										</div>

										<div class="row">
											<div style="float:right;margin-bottom:10px;margin-right:10px;">
											<button class="btn btn-primary" type="button" id="onAddMenu">메뉴등록</button>
											<button class="btn btn-default" type="button" id="onUpdMenu">메뉴변경</button>
											<button class="btn btn-darkgray" type="button" id="onDelMenu">메뉴삭제</button>
											</div>
										</div>
			
									</fieldset>
								</form>


							</div>

                        </div>

                    </div>

                 </div>

            </div>

<script src="/bootstrap/thema/fico2000/js/app/adm/menu.service.js"></script>
<script src="/bootstrap/thema/fico2000/js/app/adm/ADM02001M00Component.js"></script>