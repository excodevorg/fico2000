<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<%@include file="/inc/common.jsp" %>

            <!--CONTENT CONTAINER-->
            <!--===================================================-->
            <div id="content-container">
                
                <!--Page Title-->
                <!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
                <div id="page-title">
                    <h1 class="page-header text-overflow"> 기업재무진단평가 > 총자산 투자수익률진단(ROA)</h1>

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
                        <div class="row" style="margin-top:10px;">
                            <div class="col-lg-9">
                                기업이 소유하고 있는 총자산 운용의 효율성을 나타내는 지표로서 법인세차감전순이익(이하 세전순이익)의 총자산에 대한 비율로서 측정한다.<br/>
                                한편, 이 비율의 변동요인을 구체적으로 파악하기 위해서는 동 지표를 매출액 세전순이익률과 총자산회전율의 곱으로 분해하여 볼 수 있다.<br/>
                                예를 들어 매출액세전순이익률은 높으나 총자산회전율이 낮았다면 판매마진은 개선된 반면, 기업의 판매활동은 부진함을 의미한다. (한국은행 기업경영분석의 해석참조)
                                <br/><br/>
                                ROA는 좋은 기업을 한눈에 알아보는 법이다.<br/>
                                회사가 주주의 돈과 부채를 활용하여 높은 수익을 올리고 있는가를 알아볼 수 있다.<br/>
                                전년도과 동일하게 또는 더 높은 수익을 올리는가를 살펴보는 지표이다.<br/>
                                ROA의 수치가 매년 높아질수록 좋은 것이다.
                            </div>
                            <div class="col-lg-3">
                                <img src="/bootstrap/thema/fico2000_new/assets/img/renewal2019/roa2.jpg" class="img-responsive pull-right" style="height: 240px;" />
                            </div>
                        </div>


                        <div class="row">
                            <div class="col-lg-6">
                                <div class="panel">
                                    <div class="panel-heading">
                                        <h3 class="panel-title">총자산 투자수익율 (ROA) 추세분석 (단위 : <span name="amtUnitNm"></span>)</h3>
                                    </div>
                                    <div class="panel-body">
                                        <div class="row">
                                        <div class="col-lg-12">
                                        <table class="table table-condense" style="margin-bottom: 0;" >
                                            <thead>
                                            <tr class="active">
                                                <td>년도</td>
                                                <td class="text-center">매출액</td>
                                                <td class="text-center">영업외수익</td>
                                                <td class="text-center">매출원가</td>
                                                <td class="text-center">판매비와관리비</td>
                                                <td class="text-center">영업외비용</td>
                                                <td class="text-center">법인세비용</td>
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
                                                <td class="text-center">총수익</td>
                                                <td class="text-center">총비용</td>
                                                <td class="text-center">당기순이익</td>
                                                <td class="text-center">총자산</td>
                                                <td class="text-center">매출액순이익율(%)</td>
                                                <td class="text-center">총자산회전율(%)</td>
                                            </tr>
                                            </thead>
                                            <tbody id="tb_debt">
                                            

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
                                        <h3 class="panel-title">총자산 투자수익율(ROA) 추세분석</h3>
                                    </div>
                                    <div class="panel-body">
                                        <div id="roaTable"></div>
    
                                        <div class="panel" style="margin-bottom: 0;">
                                            <!--ROE그래프-->
                                            <div id="RoaGraph" style="width:100%;height:447px"></div>
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
                 <script src="/bootstrap/thema/fico2000_new/js/app/fin/FIN03103M00Component.js"></script>   

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

                        FIN03103M00.onSearch();
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

