<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<%@include file="/inc/common.jsp" %>

<div id="content-container">

    <!--Page Title-->
    <!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
    <div id="page-title">
        <h1 class="page-header text-overflow">Welcome To Fico2000!</h1>
    </div>

    <!--Page content-->
    <!--==================================================-->
    <div id="page-content">   
         <!-- row Start --->
        <div class="row">

            <div class="col-lg-7">      
                
                  <!--Network Line Chart-->
					        <!--===================================================-->
					        <div class="panel">
					            <div class="panel-heading">
					                <div class="panel-control">
					                    <button id="demo-panel-network-refresh" data-toggle="panel-overlay" data-target="#demo-panel-network" class="btn"></button>
					                    <div class="btn-group">
					                    </div>
					                </div>
					                <h3 class="panel-title">
                                        <table width="100%">
                                            <tr>
                                                <td>Business Platform</td>
                                                <td align="right"><button type="button" class="btn btn-info" onClick="goBizPlate()">비지니스 Platform 업무범위코드</button></td>
                                            </tr>
                                        </table>
                                    </h3>
					            </div>
					
					            <!--Chart information-->
					            <div class="panel-body">
					                <div class="nano" style="height:630px">

                                        <div class="nano-content pad-all">
					                        <ul class="list-unstyled media-block">
					                            <li class="mar-btm">
					                                <div class="media-left">
					                                    <img src="/bootstrap/thema/fico2000/img/profile-photos/fico.jpg" class="img-circle img-sm" alt="Profile Picture">
					                                </div>
					                                <div class="media-body pad-hor">
					                                    <div class="speech">
					                                        <a href="#" class="media-heading">Fico2000</a>
					                                        <p class="text-lg">당신의 Business 고민을 말씀해 주세요. 전문가를 연결해 드리겠습니다.</p>
                                                            <p class="text-lg">- 100자 이내로 목적, 규모 등 명확히 제시해 주시면 신속하게 진행할 수 있습니다.</p>
                                                            <p class="text-lg">- 비즈니스 Platform 업무범위의 코드를 활용하시면 더욱 신속히 처리할 수 있습니다.</p> 
					                                    </div>
					                                </div>
					                            </li>
					                            <li class="mar-btm">
					                                <div class="media-right">
					                                	<img src="/bootstrap/thema/fico2000/img/profile-photos/<%=imgUrl%>" class="img-circle img-sm" alt="Profile Picture">					                                    
					                                </div>
					                                <div class="media-body pad-hor speech-right">
					                                    <div class="speech">
                                                            <form class="form-horizontal">
                                                                <div class="panel-body">
                                                                    
                                                                    <div class="row">
                                                                        <div class="col-md-4 mar-btm col-xs-12">
                                                                            <input type="text" class="form-control" name="name" id="name" placeholder="Name" value="<%=loginText%>" readonly>
                                                                        </div>
                                                                        <div class="col-md-4 mar-btm col-xs-12">
                                                                            <input type="email" class="form-control" name="userId" id="userId" placeholder="Email" value="<%=loginUserId%>" readonly>
                                                                        </div>
                                                                        <div class="col-md-4 mar-btm col-xs-12">
                                                                            <input type="number" class="form-control" name="hpno" id="hpno" placeholder="Phone Number">
                                                                        </div>
                                                                    </div>
																	
                                                                    <div class="row">
                                                                        <div class="col-md-12 mar-btm col-xs-12">
                                                                            <input type="text" class="form-control" name="title" id="title" placeholder="title">
                                                                        </div>
                                                                    </div>
                                                                    
                                                                    <div class="row">
                                                                        <div class="col-md-12 mar-btm col-xs-12" style="text-align:left">
                                                                    		<div id="summernote"></div>
                                                                    	</div>
                                                                    </div>
                                                                </div>
                                                                <div class="text-center">
                                                                    <button class="btn btn-default" type="button" id="sendMessage">Send message</button>
                                                                </div>
                                                            </form> 
					                                    </div>
					                                </div>
					                            </li>
					                        </ul>
					                    </div>
					                </div>

					            </div>

					        </div>
					        <!--===================================================-->
					        <!--End network line chart-->

                            <div class="panel">
                            <!-- Header --->
                            <div class="panel-heading">
                                <div class="panel-control">
                                    <div class="btn-group">
                                        <button class="btn btn-info" onClick="goNavi('4')">+ more</button>
                                    </div>
                                </div>
                                <h3 class="panel-title">공지 및 News</h3>
                            </div>
                            
                            <!--Data Table-->
                            <!--===================================================-->
                            <div class="panel-body">
                                <!-- form-inline end -->
                                <!--===================================================-->
                                <div class="table-responsive">

                                    <table id="notiBoard" class="table table-striped">
                                        <thead>
                                            <tr>
                                                <th class="text-center" width="70%">Title</th>
                                                <th class="text-center" width="30%">Date</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                        </tbody>
                                    </table>

                                </div>

                            </div>
                            <!--Data Table End -->
                            <!--===================================================-->

                        </div>  
                            

            </div> 


            <div class="col-lg-5">

                <div class="row">
               
                   <!-- 문의하기 -->
                    <div class="col-sm-12 col-lg-12">
                        <div class="panel panel-warning panel-colorful">       
                            <div class="pad-all" style="cursor: pointer">
					            <p class="text-lg text-semibold"><i class="demo-pli-data-storage icon-fw"></i>비즈니스 plate 진행절차</p>
					            <p class="mar-no">
					            </p>
					            <div class="pad-all text-left">
                                    <ul class="list-group">
                                        <li class="list-group-item active">기업이 원하는 프로젝트을 100자로 기술한다.(이하 프로젝트라 함)</li>
                                        <li class="list-group-item">ASIAPE에서 프로젝트에 대해 기업과 상담한다.</li>
                                        <li class="list-group-item">ASIAPE에서 성공가능 타당성을 검토한다.</li>
                                        <li class="list-group-item">1차미팅실시:  프로젝트 성공가능성 범위를 정한다. (미팅 수수료 수납 후 진행)</li>
                                        <li class="list-group-item">2차미팅: 프로젝트에 맞는 최적의 전문가를 구성 (ASIAPE는 국내 최대의 IB전문가 풀을 구성하고 있습니다.)</li>
                                        <li class="list-group-item">ASIAPE와 기업이 프로젝트에 대해 계약을 한다.</li>
                                        <li class="list-group-item">세부적 진행사항을 검토한다.</li>
                                        <li class="list-group-item">실행 Action </li>
                                        <li class="list-group-item">결과 진행 보고 </li>
                                        <li class="list-group-item">성공 완료 보고 </li>
                                    </ul>
					            </div>
					        </div>       
                        </div>  
                    </div>

                    <div class="col-sm-12 col-lg-12">

                        <div class="panel">    

                            <div class="panel-heading">
                                <div class="panel-control">
                                    <div class="btn-group">
                                        <!--button class="btn btn-info">+ more</button-->
                                    </div>
                                </div>
                                <h3 class="panel-title">Link Site</h3>
                            </div>                    

                            <div class="panel-body">

                                <div class="col-sm-6 col-lg-6">
                                    <div class="table-responsive">

                                        <ul class="list-group">
                                            <li class="list-group-item active">[ 은행 및 증권 ]</li>
                                            <li class="list-group-item"><a href="https://www.ibk.co.kr/" target="_blank">기업은행</a></li>
                                            <li class="list-group-item"><a href="https://www.miraeassetdaewoo.com" target="_blank">미래에셋</a></li>
                                            <li class="list-group-item"><a href="https://www.nhqv.com/" target="_blank">NH투자증권</a> </li>
                                            <li class="list-group-item"><a href="http://finance.daum.net/quote/index.daum?nil_profile=stockgnb&nil_menu=sise_top" target="_blank">증권시세정보</a> </li>
                                            <li class="list-group-item"><a href="http://finance.daum.net/quote/allpanel.daum?stype=P&type=U" target="_blank">코스피시세정보</a> </li>
                                        </ul>

                                    </div>
                                </div>

                                <div class="col-sm-6 col-lg-6">
                                    <div class="table-responsive">

                                        <ul class="list-group">
                                            <li class="list-group-item active">[ 기업 및 세계경제 정보 검색 ]</li>
                                            <li class="list-group-item"><a href="http://dart.fss.or.kr" target="_blank">기업 및 공시 검색(DART)</a></li>
                                            <li class="list-group-item"><a href="http://www.fss.or.kr/fss/kr/main.html" target="_blank">금융감독원</a></li>
                                            <li class="list-group-item"><a href="http://www.kcif.or.kr/main.do" target="_blank">국제금융센타</a></li>
                                            <li class="list-group-item"><a href="http://ecos.bok.or.kr/flex/Key100Stat_k.html" target="_blank">한국은행경제통계시스템(ECOS)</a></li>
                                            <li class="list-group-item"><a href="http://www.mna.or.kr/skin_mw/" target="_blank">한국M&A협회</a></li>
                                        </ul>

                                    </div>
                                </div>

                                <div class="col-sm-6 col-lg-6">
                                    <div class="table-responsive">

                                        <ul class="list-group">
                                            <li class="list-group-item active">[ 글로벌 PE ]</li>
                                            <li class="list-group-item"><a href="http://www.goldmansachs.com/" target="_blank">골드만삭스</a></li>
                                            <li class="list-group-item"><a href="http://www.kkr.com/ko/" target="_blank">KKR</a></li>
                                        </ul>

                                    </div>
                                </div>

                                <div class="col-sm-6 col-lg-6">
                                    <div class="table-responsive">

                                        <ul class="list-group">
                                            <li class="list-group-item active">[ 벤처기관 ]</li>
                                            <li class="list-group-item"><a href="https://www.k-vic.co.kr/index.do" target="_blank">한국벤처투자㈜</a></li>
                                            <li class="list-group-item"><a href="http://www.kvca.or.kr/index.html" target="_blank">한국벤처캐피탈협회</a></li>
                                        </ul>

                                    </div>
                                </div>

                                <div class="col-sm-6 col-lg-6">
                                    <div class="table-responsive">

                                        <ul class="list-group">
                                            <li class="list-group-item active">[ 일반 정보검색 ]</li>
                                            <li class="list-group-item"><a href="https://ko.wikipedia.org" target="_blank">위키백과</a></li>
                                        </ul>

                                    </div>
                                </div>

                            </div>

                        </div>

                    </div>

                    <div class="col-sm-12 col-lg-12">

                        

                    </div>

            </div>    

        </div>
        <!-- row End -->  
    </div> 

</div>
 
 <script src="/bootstrap/thema/fico2000/js/app/com/board.services.js"></script>
 <script src="/bootstrap/thema/fico2000/js/app/main/MAIN00000M00Component.js"></script>




 