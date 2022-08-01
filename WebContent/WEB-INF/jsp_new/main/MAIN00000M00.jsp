<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<%@include file="/inc/common.jsp" %>

<div id="content-container">

    <!--Page Title-->
    <!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    <div id="page-title">
        <h1 class="page-header text-overflow">Welcome To Fico2000!</h1>
    </div>
-->

    <!--Page content-->
    <!--===================================================-->
    <div id="page-content" class="MAIN00000M00" style="margin-bottom: 130px;padding:0;">

        <!-- row Start -->
        <div class="row">
            <div class="col-lg-12">
                <div class="panel">
                    <div class="panel-body no-padding">
                        <img src="/bootstrap/thema/fico2000_new/assets/img/renewal2019/fico_main_bg.jpg"  class="mainBannerImg img-responsive" />
                    
	                    <div class="mainBannerTxt">
	                    	<img src="/bootstrap/thema/fico2000_new/assets/img/renewal2019/title.png" class="img-responsive" />
	                    </div>
	                    
	                    <!-- PC에서 나오는 재무진단엔진배너 -->
                    	<a href="javascript:void(0);" onClick="toMove('JOIN01000M00')" class="showOnPC main-engine-banner mainBanner">
                    		<img src="/bootstrap/thema/fico2000_new/assets/img/renewal2019/engine_banner.jpg" />
                    		<!-- <img src="/bootstrap/thema/fico2000_new/assets/img/renewal2019/engine_banner.jpg" class="engine_off" /> -->
                    		<!-- <img src="/bootstrap/thema/fico2000_new/assets/img/renewal2019/engine_banner_on.jpg" class="engine_on" /> -->
                    	</a>
                    	
                    	<!-- 태블릿에서 나오는 재무진단엔진배너 -->
                    	<div class="showOnTablet">
                    		<a href="javascript:void(0);" onClick="toMove('JOIN01000M00')">
				     			<img src="/bootstrap/thema/fico2000_new/assets/img/renewal2019/engine_banner_mobile.jpg" class="img-responsive" />	
				        	</a>
				        </div>

                        <% if (loginCls) { %>

                            <!-- PC에서 나오는 Kolb 배너 -->
                            <a href="javascript:void(0);" onClick="toMove('JOIN09000M00KOLB')" class="showOnPC main-kolb-banner mainBanner">
                                <img src="/bootstrap/thema/fico2000_new/assets/img/renewal2019/kolb-banner.jpg" class="" />
                                <!-- <img src="/bootstrap/thema/fico2000_new/assets/img/renewal2019/kolb-banner.jpg" class="engine_on" /> -->
                            </a>

                            <!-- 태블릿에서 나오는 Kolb 배너 -->
                            <div class="showOnTablet">
                                <a href="javascript:void(0);" onClick="toMove('JOIN09000M00KOLB')">
                                    <img src="/bootstrap/thema/fico2000_new/assets/img/renewal2019/kolb-banner-mobile.jpg" class="img-responsive" />
                                </a>
                            </div>

                            <!-- 모바일에서 나오는 Kolb 배너 -->
                            <div class="showOnMobile">
                                <a href="https://test.fico2000.com/bootstrap/thema/fico2000_new/kolb/index.html" target="_self">
                                    <img src="/bootstrap/thema/fico2000_new/assets/img/renewal2019/kolb-banner-mobile.jpg" class="img-responsive" />
                                </a>
                            </div>

                        <% } %>

                    </div>
                </div>
            </div>
        </div>
        <!-- row End -->
       
        <!-- row Start -->
        <div class="row mb20" style="padding:0 15px;">
            <div class="col-lg-4">
                <div class="panel">
                    <div class="panel-heading">
                        <div class="panel-control">
                            <div class="btn-group">
                                <button class="btn" onClick="goNavi('4')"><h2 class="mt0 pt2">+</h2></button>
                            </div>
                        </div>
                        <h3 class="panel-title">교육 및 공지사항</h3>
                    </div>
                    <div class="panel-body" id="notiBoard">
                    </div>
                </div>
            </div>

            <div class="col-lg-4">
                <div class="panel">
                    <div class="panel-heading">
                        <div class="panel-control">
                            <div class="btn-group">
                                <button class="btn" ><h2 class="mt0 pt2"></h2></button>
                            </div>
                        </div>
                        <h3 class="panel-title">정보 Link Site</h3>
                    </div>
                    <div class="panel-body linkSite">
                        <div class="col-sm-6 col-lg-6">
                            <ul class="list-group v2">
                                <li class="list-group-item active">은행 및 증권</li>
                                <li class="list-group-item"><a href="https://www.ibk.co.kr/" target="_blank">기업은행</a></li>
                                <li class="list-group-item"><a href="https://www.miraeassetdaewoo.com" target="_blank">미래에셋</a></li>
                                <li class="list-group-item"><a href="https://www.nhqv.com/" target="_blank">NH투자증권</a> </li>
                                <li class="list-group-item"><a href="http://finance.daum.net/quote/index.daum?nil_profile=stockgnb&nil_menu=sise_top" target="_blank">증권시세정보</a> </li>
                                <li class="list-group-item"><a href="http://finance.daum.net/quote/allpanel.daum?stype=P&type=U" target="_blank">코스피시세정보</a> </li>
                            </ul>
                        </div>

                        <div class="col-sm-6 col-lg-6">
                           <ul class="list-group v2">
                               <li class="list-group-item active">기업 및 세계경제 정보 검색</li>
                               <li class="list-group-item"><a href="http://dart.fss.or.kr" target="_blank">기업 및 공시 검색(DART)</a></li>
                               <li class="list-group-item"><a href="http://www.fss.or.kr/fss/kr/main.html" target="_blank">금융감독원</a></li>
                               <li class="list-group-item"><a href="http://www.kcif.or.kr/main.do" target="_blank">국제금융센타</a></li>
                               <li class="list-group-item"><a href="http://ecos.bok.or.kr/flex/Key100Stat_k.html" target="_blank">한국은행경제통계시스템(ECOS)</a></li>
                               <li class="list-group-item"><a href="http://www.mna.or.kr/skin_mw/" target="_blank">한국M&A협회</a></li>
                           </ul>
                        </div>

                        <div class="col-sm-6 col-lg-6">
                           <ul class="list-group v2">
                               <li class="list-group-item active">글로벌 PE</li>
                               <li class="list-group-item"><a href="http://www.goldmansachs.com/" target="_blank">골드만삭스</a></li>
                               <li class="list-group-item"><a href="http://www.kkr.com/ko/" target="_blank">KKR</a></li>
                           </ul>
                        </div>

                        <div class="col-sm-6 col-lg-6">
                           <ul class="list-group v2">
                               <li class="list-group-item active">벤처기관</li>
                               <li class="list-group-item"><a href="https://www.k-vic.co.kr/index.do" target="_blank">한국벤처투자㈜</a></li>
                               <li class="list-group-item"><a href="http://www.kvca.or.kr/index.html" target="_blank">한국벤처캐피탈협회</a></li>
                           </ul>
                        </div>

                        <div class="col-sm-6 col-lg-6">
                           <ul class="list-group v2">
                               <li class="list-group-item active">일반 정보검색</li>
                               <li class="list-group-item"><a href="https://ko.wikipedia.org" target="_blank">위키백과</a></li>
                           </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div class="col-lg-4">
                <div class="panel">
                    <div class="panel-heading">
                        <div class="panel-control">
                            <div class="btn-group">
                                <button class="btn"><h2 class="mt0 pt2">+</h2></button>
                            </div>
                        </div>
                        <h3 class="panel-title">전문가 집단소개 <small class="pl16 light-grey-text">(준비중입니다)</small></h3>
                    </div>
                    <div class="panel-body">
                        <img src="/bootstrap/thema/fico2000_new/assets/img/renewal2019/main_banner.jpg" style="width:100%;height:120px;" />
                    </div>
                </div>
            </div>


        </div>
        <!-- row End -->

    </div>
    <!--===================================================-->
    <!--End page content-->

</div>
 
 <script src="/bootstrap/thema/fico2000_new/js/app/com/board.services.js"></script>
 <script src="/bootstrap/thema/fico2000_new/js/app/main/MAIN00000M00Component.js"></script>


 