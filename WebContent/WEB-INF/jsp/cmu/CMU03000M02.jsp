<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<%@include file="/inc/common.jsp" %>
            <!--CONTENT CONTAINER-->
            <!--===================================================-->
            <div id="content-container">

                <!--Page Title-->
                <!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
                <div id="page-title">
                    <h1 class="page-header text-overflow">Business Platform</h1>

                    <!--Searchbox-->
                    <div class="searchbox">
                        <div class="input-group custom-search-form">
                            <ul class="pull-right breadcrumb">
                                <li>HOME</li>
								<li>커뮤니티</li>
                                <li class="active">Business Platform</li>
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
                            <h3 class="panel-title">Business Platform 등록</h3>
                        </div>

                        <div class="panel-body">

                            <!-- Search Well -->
                            <div class="row">
                                <div class="col-lg-12">
                                    
                                    <div class="alert alert-danger" role="alert">
                                                <span id="errRegMsg"></span>
                                    </div>
                                    <div class="margin-bottom-20"></div>

                                    <form role="form" class="form-horizontal" id="selectViewForm">

                                        <input type="hidden" class="form-control" id="code" name="code" value='<%=paramMap.get("code")%>'>
                                        <input type="hidden" class="form-control" id="mainNo" name="mainNo" value='<%=paramMap.get("mainNo")%>'>
                                        <input type="hidden" class="form-control" name="replyNo" value=0>
                                        <input type="hidden" class="form-control" name="relNo">

                                        <div class="mar-btm pad-btm bord-btm">
                                            <h4 class="text-overflow"><span name='title'/></h4>
                                        </div>

                                        <div class="row">

                                            <div class="col-sm-12">

                                                <!--Sender Information-->
                                                <div class="media">
                                                    <span class="media-left">
                                                        <img src="/bootstrap/thema/fico2000/img/profile-photos/<%=imgUrl%>" class="img-circle img-sm" alt="Profile Picture">
                                                    </span>
                                                    <div class="media-body">
                                                        <div class="text-bold"><span name='name'/> 님</div>
                                                            <small class="text-muted"><span name='userId'/></small>
                                                    </div>
                                                </div>

                                                <hr class="hr-sm visible-xs">
                                                
                                                <div class="col-sm-12 clearfix">
                                                    <!--Details Information-->
                                                    <div class="pull-right text-right">
                                                        <p class="mar-no"><small class="text-muted"><span name='writeDate'/></small></p>
                                                    </div>
                                                </div>

                                            </div>

                                        </div>

                                        <div class="row pad-ver">
                                        
                                            <div class="col-xs-12">
                                                <div class="pull-right">
                                                    <!--Mail toolbar-->
                                                    <div class="btn-group btn-group">
                                                        <a class="btn btn-sm btn-default" id="onModify" style="cursor: Pointer;"><i class="demo-pli-information"></i> 수정</a>
                                                        <a class="btn btn-sm btn-default" id="onDelete" style="cursor: Pointer;"><i class="demo-pli-recycling"></i> 삭제</a>
                                                        <a class="btn btn-sm btn-primary" id="onListView" style="cursor: Pointer;">목록보기</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <!--Message-->
                                        <!--===================================================-->
                                        <div class="pad-ver bord-ver">
                                            <span name="content"></span>
                                        </div>
                                        <!--===================================================-->
                                        <!--End Message-->
                                       
                                    </form>

                                </div>
                                
                                <!-- /.col-lg-12 --> 
                                
                            </div>
                            <!-- /.row -->
                        </div>

                    </div>

                 </div>

            </div>

<script src="/bootstrap/thema/fico2000/js/app/com/board.services.js"></script>
<script src="/bootstrap/thema/fico2000/js/app/com/file.services.js"></script>
<script src="/bootstrap/thema/fico2000/js/app/cmu/CMU03000M02Component.js"></script>   
