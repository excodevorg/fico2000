<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<%@include file="/inc/common.jsp" %>
            <!--CONTENT CONTAINER-->
            <!--===================================================-->
            <div id="content-container">

                <!--Page Title-->
                <!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
                <div id="page-title">
                    <h1 class="page-header text-overflow">강의자료</h1>

                    <!--Searchbox-->
                    <div class="searchbox">
                        <div class="input-group custom-search-form">
                            <ul class="pull-right breadcrumb">
                                <li>HOME</li>
								<li>자료실</li>
                                <li class="active">강의자료</li>
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
                            <h3 class="panel-title">강의자료 조회</h3>
                        </div>

                        <div class="panel-body">

                            <input type="hidden" class="form-control" id="code" name="code" value='<%=paramMap.get("code")%>'>
                            <input type="hidden" class="form-control" id="mainNo" name="mainNo" value='<%=paramMap.get("mainNo")%>'>

                            <div class="margin-bottom-20"></div>
                            
                            <div class="row">

                                <div class="col-sm-12">

                                    <!--Sender Information-->
                                    <div class="media">
                                        <span class="media-left">
                                            <img src="/bootstrap/thema/fico2000/img/profile-photos/<%=imgUrl%>" class="img-circle img-sm" alt="Profile Picture">
                                        </span>
                                        <div class="media-body">
                                            <div class="text-bold"><span id="name"></span> 님</div>
                                            <small class="text-muted"><span id="userId"></span></small>
                                        </div>
                                    </div>
					            </div>

                                <div class="col-sm-12 clearfix">
                                    <div class="pull-right text-right">
                                        <p class="mar-no"><small class="text-muted"><span id="writeDate"></span></small></p>
                                        <span id="flapMngFileOrgNm"></span>
                                                    
					                </div>
                                </div>

                                <div class="col-sm-12 news-v3">
                                    <div class="news-v3-in-sm no-padding">
                                        <h2><span id="title"></span></h2>	
                                        <span id="content"></span>
                                    </div>
                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

<script src="/bootstrap/thema/fico2000/js/app/com/board.services.js"></script>
<script src="/bootstrap/thema/fico2000/js/app/com/file.services.js"></script>
<script src="/bootstrap/thema/fico2000/js/app/dta/DTA01000M01Component.js"></script>   