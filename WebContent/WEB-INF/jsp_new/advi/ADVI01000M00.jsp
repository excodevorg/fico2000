<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<%@include file="/inc/common.jsp" %>

            <!--CONTENT CONTAINER-->
            <!--===================================================-->
            <div id="content-container" class="ADVI01000M00">

                <!--Page content-->
                <!--===================================================-->
                <div id="page-content" style="margin-bottom: 130px;">

                    <!--Page Title-->
                    <!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
                    <div id="page-title ml0">
                        <h2 class="text-overflow">비즈니스상담플랫폼</h2>
                    </div>
                    <!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
                    <!--End page title-->

                    <!-- row Start --->
                    <div class="row mb20">

                        
                        <div class="col-lg-7">
                        
                        	<!--상담채널-->
                        	<div class="row">
                        		<div class="col-sm-12 col-lg-12">
		                        	<div class="panel">
		
		                                <!--Chart information-->
		                                <div class="panel-body">
		                                    <div class="nano" style="height:630px">
		
		                                        <div class="nano-content">
		                                            <ul class="list-unstyled media-block">
		                                                <li class="mar-btm">
		                                                    <div class="media-left">
		                                                        <img src="/bootstrap/thema/fico2000_new/img/profile-photos/fico.jpg" class="img-circle img-sm" alt="Profile Picture">
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
		                                                        <img src="/bootstrap/thema/fico2000_new/img/profile-photos/<%=imgUrl%>" class="img-circle img-sm" alt="Profile Picture">
		                                                    </div>
		                                                    <div class="media-body pad-hor speech-right">
		                                                        <div class="speech">
		                                                            <form class="form-horizontal">
		                                                                <div class="panel-body">
		
		                                                                    <div class="row">
		                                                                        <div class="col-md-4 mar-btm col-xs-12">
		                                                                            <input type="text" class="form-control" name="name" id="name" placeholder="이름" value="<%=loginText%>" readonly>
		                                                                        </div>
		                                                                        <div class="col-md-4 mar-btm col-xs-12">
		                                                                            <input type="email" class="form-control" name="userId" id="userId" placeholder="Email" value="<%=loginUserId%>" readonly>
		                                                                        </div>
		                                                                        <div class="col-md-4 mar-btm col-xs-12">
		                                                                            <input type="number" class="form-control" name="hpno" id="hpno" placeholder="전화번호">
		                                                                        </div>
		                                                                    </div>
		
		                                                                    <div class="row">
		                                                                        <div class="col-md-12 mar-btm col-xs-12">
		                                                                            <input type="text" class="form-control" name="title" id="title" placeholder="제목">
		                                                                        </div>
		                                                                    </div>
		
		                                                                    <div class="row">
		                                                                        <div class="col-md-12 mar-btm col-xs-12" style="text-align:left">
		                                                                            <div id="summernote"></div>
		                                                                        </div>
		                                                                    </div>
		                                                                </div>
		                                                                <div class="text-center">
		                                                                    <button class="btn btn-primary" type="button" id="sendMessage">Send message</button>
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
		                           
	                            </div>
                        	</div>
                        	<!--End 상담채널-->
                        
                        	<!-- 비즈니스 plate 진행절차-->
                            <div class="row mb20">
                                <div class="col-sm-12 col-lg-12">
                                    <div class="panel">
                                        <div class="panel-heading">
                                            <h3 class="panel-title">비즈니스 Plate 진행절차</h3>
                                        </div>
                                        <div class="panel-body">
                                            <img src="/bootstrap/thema/fico2000_new/assets/img/renewal2019/business-platform/business-plate.jpg" class="img-responsive" />
                                        </div>
                                    </div>
                                </div>
                            <!-- row End -->
                            
                            </div>
                        </div>
                        
                        
                         <!--비즈니스 Platform 업무범위 코드-->
                         <div class="col-lg-5">
                                <div class="panel">
                                    <div class="panel-heading">
                                        <h3 class="panel-title">비즈니스 Plate 업무범위 코드</h3>
                                    </div>
                                    <div class="panel-body">
                                        <div class="nano" style="height:1070px">
                                            <div class="nano-content">

                                                <!--//1) 재무컨설팅-->
                                                <ul class="list-group">
                                                    <li class="list-group-item active">1. 재무컨설팅</li>
                                                    <li class="list-group-item">
                                                        <p>
                                                            자산은 『체격』, 손익은 『 체력』, 현금흐름은 『혈액』이다.
                                                            기업이 과거, 현재 그리고 미래의 성장 동력을 파악해주는 컨설팅.
                                                            사회공헌차원에서 마련한 본 홈페이지에서 귀사의 재무컨설팅을
                                                            해보시기 바랍니다.
                                                            그리고 세밀한 재무컨설팅이 필요하시면 문의 바랍니다.
                                                        </p>
                                                    </li>
                                                </ul>

                                                <!--//2) 기업 매도-->
                                                <ul class="list-group">
                                                    <li class="list-group-item active">2. 기업매도</li>
                                                    <li class="list-group-item">2-1) 기업을 단순히 매도하고자 하는 경우</li>
                                                    <li class="list-group-item">2-2) 제2세 경영자가 있는 경우 제2세 경영자에게 물려주고자 하는 경우</li>
                                                    <li class="list-group-item">2-3) 승계 경영자가 없어 기업은퇴를 원하는 경영자</li>
                                                    <li class="list-group-item">2-4) 지분을 매도하고자 하는 경우</li>
                                                    <li class="list-group-item">2-5) 기타</li>
                                                </ul>

                                                <!--//3) 기업 인수-->
                                                <ul class="list-group">
                                                    <li class="list-group-item active">3. 기업인수</li>
                                                    <li class="list-group-item">3-1) 기업의 성장을 목적으로 기업을 인수하고자 하는 경영자</li>
                                                </ul>

                                                <!--//4) 기업투자자금조달-->
                                                <ul class="list-group">
                                                    <li class="list-group-item active">4. 기업투자자금조달</li>
                                                    <li class="list-group-item">4-1) 기업가치성장을 위해 투자를 원하는 기업</li>
                                                    <li class="list-group-item">4-2) IPO를 위해 투자를 원하는 기업</li>
                                                    <li class="list-group-item">4-3) 기타</li>
                                                    <li class="list-group-item">(투자재원은 PEF이므로 창업 및 벤처투자는 본 업무에 포함되지 않습니다.)</li>
                                                </ul>

                                                <!--//5) 기업인수자금(M&A financing)-->
                                                <ul class="list-group">
                                                    <li class="list-group-item active">5. 기업인수자금(M&A financing)</li>
                                                    <li class="list-group-item">5-1) 기업인수 시 자금이 필요한 경우</li>
                                                </ul>

                                                <!--//6) 경영자2세 컨설팅-->
                                                <ul class="list-group">
                                                    <li class="list-group-item active">6. 경영자2세 컨설팅</li>
                                                    <li class="list-group-item">6-1) 경영자2세가 1명인 경우 순조로이 경영권을 이양 받기 위한 경영자2세 소양을 코칭 함</li>
                                                </ul>

                                                <!--//7) IR-->
                                                <ul class="list-group">
                                                    <li class="list-group-item active">7. IR</li>
                                                    <li class="list-group-item">7-1) 단순 기업홍보(기업이미지 메이킹)</li>
                                                    <li class="list-group-item">7-2) 기업홍보를 통한 자금조달 컨설팅</li>
                                                    <li class="list-group-item">7-3) 기타</li>
                                                </ul>

                                                <!--//8) 기업가치평가-->
                                                <ul class="list-group">
                                                    <li class="list-group-item active">8. 기업가치평가</li>
                                                    <li class="list-group-item">8-1) 성과업적평가를 위한 가치평가</li>
                                                    <li class="list-group-item">8-2) 목표경영을 위한 가치평가</li>
                                                    <li class="list-group-item">8-3) 우리기업의 미래 가치평가</li>
                                                    <li class="list-group-item">8-4) 미래방향을 설정하기 위한 가치평가</li>
                                                    <li class="list-group-item">8-5) 기업가치평가를 통한 과거에서 현재까지의 기업의 상대평가</li>
                                                    <li class="list-group-item">8-6) 기타</li>
                                                </ul>

                                                <!--//9) 기업실사(due diligence)-->
                                                <ul class="list-group">
                                                    <li class="list-group-item active">9. 기업실사(due diligence)</li>
                                                    <li class="list-group-item">
                                                        <p>
                                                            기업실사는 회계감사와 성격이 다른 기업의 병이나 성장요소를
                                                            파악하여
                                                            미래의 기업 모습을 알아보는 특별한 행동적재무방법 입니다.
                                                        </p>
                                                    </li>
                                                    <li class="list-group-item">9-1) 투자를 받기 위한 기업실사</li>
                                                    <li class="list-group-item">9-2) 투자를 하기 위한 기업실사</li>
                                                    <li class="list-group-item">9-3) 정확한 기업의 상황을 파악하기 위한 기업실사</li>
                                                    <li class="list-group-item">9-4) 기타</li>
                                                </ul>

                                                <!--//10) 사주경영-->
                                                <ul class="list-group">
                                                    <li class="list-group-item active">10. 사주경영</li>
                                                    <li class="list-group-item">10-1) 자료실 참조 (별도문의)</li>
                                                </ul>

                                                <!--//11) 기타-->
                                                <ul class="list-group">
                                                    <li class="list-group-item active">11. 기타</li>
                                                    <li class="list-group-item">11-1) 기업에서 일어나는 재무 및 경영권 사항, 직원 교육 등</li>
                                                    <li class="list-group-item">11-2) ERP 등 경영내부통제 시스템 전산구축 업무 전반 등</li>
                                                </ul>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                </div>
                <!--===================================================-->
                <!--End page content-->
            </div>
            <!--===================================================-->
            <!--END CONTENT CONTAINER-->

 <script src="/bootstrap/thema/fico2000_new/js/app/com/board.services.js"></script>
 <script src="/bootstrap/thema/fico2000_new/js/app/advi/ADVI00000M00Component.js"></script>