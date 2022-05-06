<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<%@include file="/inc/common.jsp" %>

            <!--CONTENT CONTAINER-->
            <!--===================================================-->
            <div id="content-container">
                
                <!--Page Title-->
                <!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
                <div id="page-title">
                    <h1 class="page-header text-overflow"> 기업재무진단평가 > 자기자본 투자수익률 진단(ROE)</h1>

                    <!--Searchbox-->
                    <div class="searchbox">
                        <div class="input-group custom-search-form">
                            <ul class="pull-right breadcrumb">
                                <li><a href="index.html">Home</a></li>
                                <li>재무컨설팅</li>
                                <li class="active">기업재무진단평가</li>
                            </ul>
                        </div>
                    </div>
                </div>   

                <!--Page content-->
                <!--===================================================-->
                <div id="page-content" id="pageContent">

                    <div class="row bord-btm">
                        <div class="col-xs-12 col-lg-8">  
                           <h4 class="text-main">
                              <span class="color-gray mr10">*기업명: <span class="marker--grey color-black" name="entpName"/></span>
                              <br class="showOnMobile"/>
                              <span class="color-gray">*분석시나리오명: <span class="marker--grey color-black" name="alycon"/></span>
                          	</h4>
                        </div>
                        <div class="col-xs-12 col-lg-4 mb10">  
                          	<div class="text-right showOnNotMobile">
                               <button type="button" class="btn btn-primary mr10" onClick="selectFinInfo()">재무정보변경</button>
                               <button type="button" class="btn btn-primary" onClick="selectAnalysis()">민감도분석시나리오선택</button>
                           </div>
                           <div class="showOnMobile row">
                               <div class="col-xs-5 col-sm-6"><button type="button" class="btn btn-primary btn-block" onClick="selectFinInfo()">재무정보변경</button></div>
                               <div class="col-xs-7 col-sm-6"><button type="button" class="btn btn-primary btn-block" onClick="selectAnalysis()">민감도분석시나리오선택</button></div>
                           </div>
                        </div>
                    </div>

                        <div class="row">
                            <div class="col-xs-12">
                                <div class="panel">
                                    <div class="panel-heading">
                                        <h3 class="panel-title">자기자본 투자수익율(ROE; Return On Equity)</h3>
                                    </div>
                                    <div class="panel-body">
                                        <div class="row">
                                            <div class="col-lg-9">
                                                기업의 돈버는 능력은 자기자본규모와 이를 얼마나 효율적으로 자기자본 규모와 이를 얼마나 효율적으로 사용하는지에 달렸다.
    
                                                ROE는 좋은기업 한눈에 알아보는 법이다.<br/>
                                                회사가 투자자의 돈으로 높은 수익을 올리고 있는가를 알아볼 수있다.<br/>
                                                여기서 투자자란 회사소유주를 말하는 데 주주라고도 한다.<br/>
                                                즉 회사가 벌어들인 새로 생긴 자본금(이익잉여금)을 가지고 전과 동일하게 또는 더 높은 수익을 올리는가를 살펴보는 지표이다.<br/>
                                                ROE의 수치가 매년 높아 질수록 좋은 것이다.<br/><br/>
    
                                                <b>좋은 기업이란? 즉 투자할 가치가 있는 기업은?</b><br/>
                                                1) ROE가 높고 꾸준하다면 그 회사 경영진은 훌륭하다.<br/>
                                                2) ROE가 높고 꾸준하다면 회사가 가치창출능력이 있다.<br/>
                                                3) 과거는 미래를 보는 거울이다.<br/>
                                                ROE가 꾸준히 높은 수준을 유지한다면 그 회사의 장기전망 역시 매력적이라 볼수 있다.<br/>
    
    
                                                ROE는 좋은기업 한눈에 알아보는 법이다.<br/>
    
                                                <br/><br/>
                                                <div class="panel pad-all panel-bordered-warning panel-colorful">
                                                    <b>- 클린서플러스 ROE</b><br/>
                                                    재무진단엔진에서는 워런버핏이 중시하는 ROE 투자분석법을 준용하여 세전순이익률을 기준으로 계산.<br/><br/>
    
                                                    <b>- 자기자본순이익률 (Net income to stockholders’equity)</b><br/>
                                                    자기자본에 대한 당기순이익의 비율로서 ROE(Return on Equity)로 널리 알려져 있다. 자본조달 특성에 따라 동일한 자산구성 하에서도 서로 다른 결과를 나타낼 수 있으므로 자본구성과의 관계도 동시에 고려해야 한다.
                                                    <br/><br/>
                                                    <b>-  자기자본세전순이익률 (Income before income taxes to stockholders’equity)</b><br/>
                                                    세전순이익의 자기자본에 대한 비율로서 출자자 또는 투자자들이 투하자본에 대한 수익성을 측정할 때 주로 이용하는 지표이다. (한국은행 기업경영분석의 해석참조)
                                                </div>
    
                                            </div>
                                            <div class="col-lg-3">
                                                <img src="/bootstrap/thema/fico2000_new/assets/img/renewal2019/roe2.jpg" class="img-responsive pull-right" style="height: 250px;" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
    
    
                        
                        <div class="row">
                            <div class="col-lg-6">
                                <div class="panel">
                                    <div class="panel-heading">
                                        <h3 class="panel-title">자기자본투자수익율(ROE) 전문분석 (단위 : <span name="amtUnitNm"></span>)</h3>
                                    </div>
                                    <div class="panel-body">
                                        <div class="row">
                                        <div class="col-lg-12">
                                        <table class="table table-condense" style="margin-bottom: 0;" >
                                            <thead>
                                            <tr class="active">
                                                <td>년도</td>
                                                <td class="text-center" >자기자본</td>
                                                <td class="text-center">자본금</td>
                                                <td class="text-center">자본잉여금</td>
                                                <td class="text-center">이익잉역금</td>
                                                <td class="text-center">자본조정</td>
                                            </tr>
                                            </thead>
                                            <tbody id="tb_bon">
                                            
                                            </tbody>
                                        </table>
                                        </div>
                                    </div>
                                    <div class="row" style="margin-top: 7px;">
                                        <div class="col-lg-12" >
                                        <table class="table table-condense" style="margin-bottom: 0;" >
                                            <thead>
                                            <tr class="active">
                                                    <td>년도</td>
                                                <td class="text-center" >타인자본</td>
                                                <td class="text-center">유동부채</td>
                                                <td class="text-center"  >비유동부채</td>
                                                <td class="text-center">총자산</td>
                                                <td class="text-center">유동자산</td>
                                                <td class="text-center">비유동자산</td>
                                            </tr>
                                            </thead>
                                            <tbody id="tb_debt">
                                            
                                            
                                            
                                            </tbody>
                                        </table>
                                         </div>
                                        </div>

                                        <div class="row" style="margin-top: 7px;">

                                            <div class="col-lg-12">
                                                <table class="table table-condense" style="margin-bottom: 0;" >
                                                    <thead>
                                                    <tr class="active">
                                                        <td>년도</td>
                                                        <td class="text-center">총 자본</td>
                                                        <td class="text-center">총 부채</td>
                                                        <td class="text-center">총 자산</td>
                                                        <td class="text-center">당기순이익</td>
                                                        <td class="text-center">총자산세전순이익률(%)</td>
                                                        <td class="text-center">자기자본비율(%)</td>
                                                    </tr>
                                                    </thead>
                                                    <tbody id="tb_income_bon">
                                                    
                                                    </tbody>
                                                </table>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-6">
                                <div class="panel">
                                    <div class="panel-heading">
                                        <h3 class="panel-title">자기자본투자수익율(ROE) 추세분석</h3>
                                    </div>
                                    <div class="panel-body">
                                        <div id="roeTable"></div>
    
                                        <div class="panel" style="margin-bottom: 0;">
                                            <!--ROE그래프-->
                                            <div id="RoeGraph" style="width:100%;height:447px"></div>
                                            <!--//ROE그래프-->
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
    
                    <!--End page content-->
                </div>

             </div> 

                <div id="popup" class="Pstyle" data-backdrop="static" data-keyboard="false">
                    <span class="b-close"><i class="demo-pli-cross"></i></span>
                    <div class="content" style="height:auto; width:auto;">
                    <iframe width="700px" height="750px" src="" scrolling="auto" frameborder="0" marginwidth="0" id="alyIfr"></iframe>
                    </div>
                 </div>


                 <div id="popup1" class="Pstyle" data-backdrop="static" data-keyboard="false">
                        <span class="b-close"><i class="demo-pli-cross"></i></span>
                        <div class="content" style="height:auto; width:auto;">
                        <iframe width="700px" height="750px" src="" scrolling="auto" frameborder="0" marginwidth="0" id="finIfr"></iframe>
                        </div>
                </div>

                 <script src="/bootstrap/thema/fico2000_new/js/app/adm/codeMng.service.js"></script>
                 <script src="/bootstrap/thema/fico2000_new/js/app/fin/fin.services.js"></script>
                 <!--Demo script [ DEMONSTRATION ]-->
                 <script src="/bootstrap/thema/fico2000_new/js/demo/nifty-demo.min.js"></script>
                     <!--Form Wizard [ SAMPLE ]-->
                 <script src="/bootstrap/thema/fico2000_new/js/demo/form-wizard.js"></script>
                 <script src="/bootstrap/thema/fico2000_new/js/app/fin/FIN03102M00Component.js"></script>   

             <script type="text/javascript">
                 
                    function returnValue(obj) {
                        console.log(obj.entpName);
                        console.log(obj.alycon);
                        console.log(obj.rightStacYyArr);
                        
                        console.log(obj.stacYys);

                        finAplyCom = {};

                        finAplyCom = {
                                    alycon : obj.alycon,
                                    alyid : obj.alyid,
                                    entpName : obj.entpName,
                                    bzn : obj.bzn,
                                    userid : obj.userid,
                                    amtUnit:obj.amtUnit,
                                    amtUnitNm:obj.amtUnitNm,
                                    rightStacYyArr: obj.rightStacYyArr,
                                    stacYys: obj.stacYys
                                };

                        

                        console.log(finAplyCom);
                        
                        

                        $("span[name='entpName']").each(function (idx) {
                            $("span[name='entpName']").eq(idx).html(obj.entpName);
                        });

                        $("span[name='alycon']").each(function (idx) {
                            $("span[name='alycon']").eq(idx).html(obj.alycon);
                        });

                        $("#popup").bPopup().close();

                        FIN03102M00.onSearch();
                    }

                    //재무정보 팝업
                    function selectFinInfo() {
            
                        $("#finIfr").attr("src","/fin/pageMove.do?menuCode=FIN02002P00&params=");

                        $("#popup1").bPopup({
                            modalClose : true
                        });
                    }

                    //분석 팝업
                    function selectAnalysis() {
            
                        $("#alyIfr").attr("src","/fin/pageMove.do?menuCode=FIN02001P00&params=");

                        $("#popup").bPopup({
                            modalClose : true
                        });
                    }
                </script>   

