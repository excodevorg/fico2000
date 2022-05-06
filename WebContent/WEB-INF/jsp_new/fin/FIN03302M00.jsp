<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<%@include file="/inc/common.jsp" %>

            <!--CONTENT CONTAINER-->
            <!--===================================================-->
            <div id="content-container">
                
                <!--Page Title-->
                <!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
                <div id="page-title">
                    <h1 class="page-header text-overflow"> 재무·투자활동시나리오  > 운전·시설투자 자금조달 시나리오 입력</h1>

                    <!--Searchbox-->
                    <div class="searchbox"  style="width:350px;">
                        <div class="input-group custom-search-form">
                            <ul class="pull-right breadcrumb">
                                <li><a href="index.html">Home</a></li>
                                <li>재무·투자활동현금흐름</li>
                                <li class="active">재무·투자활동시나리오</li>
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
                        <input type="hidden" size="10" class="qn" id="qsrtInfo_qsrtNo0_no2_rsltVl" style="height: 30px; text-align: center; ime-mode:active"/>
                        <div class="row" name="bsDiv" style="margin-top:10px;">
                                        <!-- 매출패턴 -->
                                        <div class="panel">
                                            <div class="panel-heading">
                                                <h3 class="panel-title">시설 운전자금 공급계획</h3>
                                            </div>
                                            <div class="panel-body">
                                                    <style>
                                                        .qnul li{margin: 5px 0;}
                                                        .qn{border:1px solid #eaeaea;/*border:0 none;border-bottom: 1px solid #000;background-color:rgba(255,255,255,0);*/}
                                                    </style>
                                                    <ol class="qnol">
                                                        <li class="mar-btm">
                                                            운전자금<br/><br/>
                                                            <table width="100%" class="table table-condensed">
                                                                    <thead>
                                                                        <tr class="text-center">
                                                                            <th width="25%" style="text-align: center;">구분</th>
                                                                            <th width="15%" style="text-align: center;">운용</th>
                                                                            <th width="15%" style="text-align: center;">기간</th>
                                                                            <th width="15%" style="text-align: center;">이율</th>
                                                                            <th width="15%" style="text-align: center;">사용한도(천원)</th>
                                                                            <th width="15%" style="text-align: center;">지원예정(월)</th>
                                                                        </tr>
                                                                    </thead>
                                                                    <tbody>
                                                                        <tr>
                                                                            <td align="center"><input type="text" class="qn" id="qsrtNo81_kindNm" style="width: 100%"/></td>
                                                                            <td align="center"><input type="text" class="qn" id="qsrtNo81_etcNm" style="width: 100%"/></td>
                                                                            <td align="center"><input type="text" class="qn" id="qsrtNo81_trmDsncNm" style="width: 100%"/></td>
                                                                            <td align="center"><input type="number" class="qn" id="qsrtNo81_etcIrt" style="width: 80%"/>%</td>
                                                                            <td align="center"><input type="number" class="qn" id="qsrtNo81_rsltVl" style="text-align: right; width: 100%"/></td>
                                                                            <td align="center"><input type="number" class="qn" id="qsrtNo81_baseYm" style="width: 100%"/></td>                                                                        
                                                                        </tr>
                                                                    </tbody>
                                                                </table><br/>
                                                                <input type="hidden" id="qsrtNo81_idx"/> 

                                                                <div class="pull-right pad-rgt mar-btm">
                                                                    <button type="button" class="btn btn-default" id="onInit81">다시 입력하기</button>
                                                                    <button type="button" class="finish btn btn-primary" id="onSave81">등록</button>
                                                                    <button type="button" class="finish btn btn-darkgray" id="onDel81">삭제</button>
                                                                </div>

                                                                <table id="grid-list71" class="table table-bordered table-hover table-striped">
                                                                    <thead>
                                                                        <tr>
                                                                            <th data-width="15%" data-column-id="kindNm" data-header-align="center" data-align="center">구분</th>
                                                                            <th data-width="15%" data-column-id="etcNm" data-header-align="center" data-align="center">운용</th>
                                                                            <th data-width="20%" data-column-id="trmDsncNm" data-header-align="center" data-align="center">기간</th>
                                                                            <th data-width="15%" data-column-id="etcIrt" data-header-align="center" data-align="center">이자율</th>
                                                                            <th data-width="20%" data-column-id="amt" data-header-align="center" data-align="center">사용한도</th>
                                                                            <th data-width="15%" data-column-id="baseYm" data-header-align="center" data-align="center">지원예정(월)</th>
                                                                            <th data-column-id="alyid" data-header-align="center" data-align="center" data-visible="false">분석ID</th>
                                                                            <th data-column-id="itemId" data-header-align="center" data-align="center" data-visible="false">아이템ID</th>
                                                                            <th data-column-id="lprbmNo" data-header-align="center" data-align="center" data-visible="false">대분류번호</th>
                                                                            <th data-column-id="sprbmNo" data-header-align="center" data-align="center" data-visible="false">소분류번호</th>
                                                                            <th data-column-id="lsqsTcd" data-header-align="center" data-align="center" data-visible="false">문서유형</th>
                                                                            <th data-column-id="qstrId" data-header-align="center" data-align="center" data-visible="false">질문ID</th>
                                                                            <th data-column-id="delYn" data-header-align="center" data-align="center" data-visible="false">삭제여부</th>
                                                                            <th data-column-id="rsltId" data-header-align="center" data-align="center" data-visible="false">결과ID</th>
                                                                            <th data-column-id="index" data-header-align="center" data-align="center" data-visible="false">idx</th>
                                                                        </tr>
                                                                    </thead>
                                                                </table>

                                                        </li> 


                                                        <li class="mar-btm">
                                                            시설자금<br/><br/>
                                                            <table width="100%" class="table table-condensed">
                                                                    <thead>
                                                                        <tr class="text-center">
                                                                            <th width="25%" style="text-align: center;">구분</th>
                                                                            <th width="15%" style="text-align: center;">운용</th>
                                                                            <th width="15%" style="text-align: center;">기간</th>
                                                                            <th width="15%" style="text-align: center;">이율</th>
                                                                            <th width="15%" style="text-align: center;">사용한도(천원)</th>
                                                                            <th width="15%" style="text-align: center;">지원예정(월)</th>
                                                                        </tr>
                                                                    </thead>
                                                                    <tbody>
                                                                        <tr>
                                                                            <td align="center"><input type="text" class="qn" id="qsrtNo91_kindNm" style="width: 100%"/></td>
                                                                            <td align="center"><input type="text" class="qn" id="qsrtNo91_etcNm" style="width: 100%"/></td>
                                                                            <td align="center"><input type="text" class="qn" id="qsrtNo91_trmDsncNm" style="width: 100%"/></td>
                                                                            <td align="center"><input type="number" class="qn" id="qsrtNo91_etcIrt" style="width: 80%"/>%</td>
                                                                            <td align="center"><input type="number" class="qn" id="qsrtNo91_rsltVl" style="text-align: right; width: 100%"/></td>
                                                                            <td align="center"><input type="number" class="qn" id="qsrtNo91_baseYm" style="width: 100%"/></td>
                                                                        </tr>
                                                                    </tbody>
                                                                </table><br/>

                                                                <div class="pull-right pad-rgt mar-btm">
                                                                    <button type="button" class="btn btn-default" id="onInit91">다시 입력하기</button>
                                                                    <button type="button" class="finish btn btn-primary" id="onSave91">등록</button>
                                                                    <button type="button" class="finish btn btn-darkgray" id="onDel91">삭제</button>
                                                                </div>

                                                                <table id="grid-list72" class="table table-bordered table-hover table-striped">
                                                                    <thead>
                                                                        <tr>
                                                                            <th data-width="15%" data-column-id="kindNm" data-header-align="center" data-align="center">구분</th>
                                                                            <th data-width="15%" data-column-id="etcNm" data-header-align="center" data-align="center">운용</th>
                                                                            <th data-width="20%" data-column-id="trmDsncNm" data-header-align="center" data-align="center">기간</th>
                                                                            <th data-width="15%" data-column-id="etcIrt" data-header-align="center" data-align="center">이자율</th>
                                                                            <th data-width="20%" data-column-id="amt" data-header-align="center" data-align="center">사용한도</th>
                                                                            <th data-width="15%" data-column-id="baseYm" data-header-align="center" data-align="center">지원예정(월)</th>
                                                                            <th data-column-id="alyid" data-header-align="center" data-align="center" data-visible="false">분석ID</th>
                                                                            <th data-column-id="itemId" data-header-align="center" data-align="center" data-visible="false">아이템ID</th>
                                                                            <th data-column-id="lprbmNo" data-header-align="center" data-align="center" data-visible="false">대분류번호</th>
                                                                            <th data-column-id="sprbmNo" data-header-align="center" data-align="center" data-visible="false">소분류번호</th>
                                                                            <th data-column-id="lsqsTcd" data-header-align="center" data-align="center" data-visible="false">문서유형</th>
                                                                            <th data-column-id="qstrId" data-header-align="center" data-align="center" data-visible="false">질문ID</th>
                                                                            <th data-column-id="delYn" data-header-align="center" data-align="center" data-visible="false">삭제여부</th>
                                                                            <th data-column-id="rsltId" data-header-align="center" data-align="center" data-visible="false">결과ID</th>
                                                                            <th data-column-id="index" data-header-align="center" data-align="center" data-visible="false">idx</th>
                                                                        </tr>
                                                                    </thead>
                                                                </table>                                                                
                                                        </li>

                                                        <li class="mar-btm">
                                                            여유자금<br/><br/>
                                                            <table width="100%" class="table table-condensed">
                                                                    <thead>
                                                                        <tr class="text-center">
                                                                            <th width="35%" style="text-align: center;">구분</th>
                                                                            <th width="20%" style="text-align: center;">명칭</th>
                                                                            <th width="20%" style="text-align: center;">기간</th>
                                                                            <th width="20%" style="text-align: center;">수익율</th>
                                                                        </tr>
                                                                    </thead>
                                                                    <tbody>
                                                                        <tr>
                                                                            <td align="center"><input type="text" class="qn" id="qsrtNo101_kindNm" style="width: 100%"/></td>
                                                                            <td align="center"><input type="text" class="qn" id="qsrtNo101_etcNm" style="width: 100%"/></td>
                                                                            <td align="center"><input type="text" class="qn" id="qsrtNo101_trmDsncNm" style="width: 100%"/></td>
                                                                            <td align="center"><input type="number" class="qn" id="qsrtNo101_etcIrt" style="width: 80%"/>%</td>
                                                                        </tr>
                                                                    </tbody>
                                                                </table><br/>

                                                                <div class="pull-right pad-rgt mar-btm">
                                                                    <button type="button" class="btn btn-default" id="onInit101">다시 입력하기</button>
                                                                    <button type="button" class="finish btn btn-primary" id="onSave101">등록</button>
                                                                    <button type="button" class="finish btn btn-darkgray" id="onDel101">삭제</button>
                                                                </div>
                                                                
                                                                <table id="grid-list73" class="table table-bordered table-hover table-striped">
                                                                    <thead>
                                                                        <tr>
                                                                            <th data-width="25%" data-column-id="kindNm" data-header-align="center" data-align="center">구분</th>
                                                                            <th data-width="30%" data-column-id="etcNm" data-header-align="center" data-align="center">명칭</th>
                                                                            <th data-width="20%" data-column-id="trmDsncNm" data-header-align="center" data-align="center">기간</th>
                                                                            <th data-width="15%" data-column-id="etcIrt" data-header-align="center" data-align="center">수익율</th>
                                                                            <th data-column-id="amt" data-header-align="center" data-visible="false">결과값</th>
                                                                            <th data-column-id="baseYm" data-header-align="center" data-visible="false">분석월</th>
                                                                            <th data-column-id="alyid" data-header-align="center" data-align="center" data-visible="false">분석ID</th>
                                                                            <th data-column-id="itemId" data-header-align="center" data-align="center" data-visible="false">아이템ID</th>
                                                                            <th data-column-id="lprbmNo" data-header-align="center" data-align="center" data-visible="false">대분류번호</th>
                                                                            <th data-column-id="sprbmNo" data-header-align="center" data-align="center" data-visible="false">소분류번호</th>
                                                                            <th data-column-id="lsqsTcd" data-header-align="center" data-align="center" data-visible="false">문서유형</th>
                                                                            <th data-column-id="qstrId" data-header-align="center" data-align="center" data-visible="false">질문ID</th>
                                                                            <th data-column-id="delYn" data-header-align="center" data-align="center" data-visible="false">삭제여부</th>
                                                                            <th data-column-id="rsltId" data-header-align="center" data-align="center" data-visible="false">결과ID</th>
                                                                            <th data-column-id="index" data-header-align="center" data-align="center" data-visible="false">idx</th>
                                                                        </tr>
                                                                    </thead>
                                                                </table>     
                                                        </li>

                                                    </ol>                                                   
                                            </div>
                                        </div>
                                        <!-- //매출패턴 -->


                        </div>
                        <div class="alert alert-danger" role="alert"  style="display:none">
                                                               <span id="errMsg"></span>
                                    </div>
                                    <div class="row" name="bsDiv" style="margin-top:10px;">
                                        <!-- 현금지출패턴 -->
                                        <div class="col-lg-12">
                                            <div class="col-lg-6 col-lg-offset-6">
                                                 <button type="button" class="btn btn-default" id="initQsrtSave01">다시 입력하기</button>
                                                 <button type="button" class="btn btn-primary" id="onQsrtSave01">저장</button>
                                            </div>
                                        </div>
                                    </div>
                                    <!--★설문지★---------------------------------------------------------------->
                        
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
                
                 <script src="/bootstrap/thema/fico2000_new/js/app/fin/FIN03302M00Component.js"></script>   

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

                        var stacYy = $("#stacYyInfo_1 option:selected").val();
                        console.log(stacYy);

                        FIN03302M00.onSearch();
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

