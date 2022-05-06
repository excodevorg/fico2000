<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<%@include file="/inc/common.jsp" %>
<!DOCTYPE html>
<html lang="en">

<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Fico2000 - 기업분석 및 비즈니스의 모든 것 </title>

    <!--Open Sans Font [ OPTIONAL ]-->
    <link href='https://fonts.googleapis.com/css?family=Open+Sans:400,300,600,700' rel='stylesheet' type='text/css'>

	<!-- include libraries(jQuery, bootstrap) -->
	<link href="/bootstrap/thema/fico2000_new/css/bootstrap.min.css" rel="stylesheet"> 

    <link href="/bootstrap/thema/fico2000_new/plugins/bootstrap-select/bootstrap-select.min.css" rel="stylesheet">

     <!--Bootstrap Table [ OPTIONAL ]-->
    <link href="/bootstrap/thema/fico2000_new/plugins/bootstrap-table/bootstrap-table.min.css" rel="stylesheet">

        
    <link href="/bootstrap/thema/fico2000_new/assets/css/style.css" rel="stylesheet" >    

    <!--Nifty Stylesheet [ REQUIRED ]-->
    <link href="/bootstrap/thema/fico2000_new/css/nifty.min.css" rel="stylesheet">

    <!--Nifty Premium Icon [ DEMONSTRATION ]-->
    <link href="/bootstrap/thema/fico2000_new/css/demo/nifty-demo-icons.min.css" rel="stylesheet">

    <!--Demo [ DEMONSTRATION ]-->
    <link href="/bootstrap/thema/fico2000_new/css/demo/nifty-demo.min.css" rel="stylesheet">

    <!--Morris.js [ OPTIONAL ]-->
    <link href="/bootstrap/thema/fico2000_new/plugins/morris-js/morris.min.css" rel="stylesheet">

    <!--Magic Checkbox [ COLOR_SCHEME ]-->
    <link href="/bootstrap/thema/fico2000_new/css/themes/type-b/theme-ocean.min.css" rel="stylesheet">
    
    <link href="/bootstrap/thema/fico2000_new/plugins/pace/pace.min.css" rel="stylesheet">

    <!-- file-uploader css -->
    <link rel="stylesheet" type="text/css" href="//blueimp.github.io/Gallery/css/blueimp-gallery.min.css">
    <!-- CSS to style the file input field as button and adjust the Bootstrap progress bars -->
    <link rel="stylesheet" href="/bootstrap/thema/fico2000_new/plugins/file-uploader/css/jquery.fileupload.css">    
    <!-- CSS adjustments for browsers with JavaScript disabled -->
    <noscript><link rel="stylesheet" href="/bootstrap/thema/fico2000_new/plugins/file-uploader/css/jquery.fileupload-noscript.css"></noscript>
    <noscript><link rel="stylesheet" href="/bootstrap/thema/fico2000_new/plugins/file-uploader/css/jquery.fileupload-ui-noscript.css"></noscript>

    <!-- CSS Implementing Plugins -->
    <!-- CSS Page Style -->
	<link rel="stylesheet" href="/assets/css/pages/shortcode_timeline2.css">
    
	<!-- CSS Theme -->
	<link rel="stylesheet" href="/assets/css/theme-colors/aqua.css" id="style_color">
	<link rel="stylesheet" href="/assets/css/theme-skins/dark.css">

	<!-- CSS Customization -->
	<link rel="stylesheet" href="/bootstrap/thema/fico2000_new/assets/css/admin/custom-admin.css">

        <!--RENEWAL2019 CSS [ REQUIRED ] -->
    <link href="/bootstrap/thema/fico2000_new/assets/css/renewal2019_1.css" rel="stylesheet">

     <!--Bootstrap Tags Input [ OPTIONAL ]-->
     <link href="/bootstrap/thema/fico2000_new/plugins//bootstrap-tagsinput/bootstrap-tagsinput.min.css" rel="stylesheet">
 
 
     <!--Chosen [ OPTIONAL ]-->
     <link href="/bootstrap/thema/fico2000_new/plugins/chosen/chosen.min.css" rel="stylesheet">
 
 
     <!--Select2 [ OPTIONAL ]-->
     <link href="/bootstrap/thema/fico2000_new/plugins/select2/css/select2.min.css" rel="stylesheet">

     <style type="text/css">
        .Pstyle {
           opacity : 0;
           display : none;
           position : relative;
           width : auto;
           border : 5px solid #fff;
           padding : 20px;
           background-color : #fff;
           
        }
        .b-close {
           position : absolute;
           right : 5px;
           top : 5px;
           padding : 0px; /* padding : 5px; */
           display : inline-block;
           cursor : pointer;
        }
        
        .Pstyle .content iframe body {background:#fff;}
        .Pstyle .content { min-width: 750px; padding:0 !important;padding-top:0;  padding-bottom:0;}
        .Pstyle .content iframe { width:100%; height:700px;}
        </style>
        
       

    <script src="/bootstrap/thema/fico2000_new/plugins/pace/pace.min.js"></script>

    <!--jQuery [ REQUIRED ]-->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.js"></script> 
    
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-validate/1.17.0/jquery.validate.min.js"></script>

    <!--BootstrapJS [ RECOMMENDED ]-->
    <script src="https://netdna.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.js"></script>


    <!--NiftyJS [ RECOMMENDED ]-->
    <script src="/bootstrap/thema/fico2000_new/js/nifty.min.js"></script>
    
    <!--Demo script [ DEMONSTRATION ]-->
    <script src="/bootstrap/thema/fico2000_new/js/demo/nifty-demo.min.js"></script>

        <!--Bootstrap Select [ OPTIONAL ]-->
        <script src="/bootstrap/thema/fico2000_new/plugins/bootstrap-select/bootstrap-select.min.js"></script>

        <!--Chosen [ OPTIONAL ]-->
        <script src="/bootstrap/thema/fico2000_new/plugins/chosen/chosen.jquery.min.js"></script>
    
    
        <!--Select2 [ OPTIONAL ]-->
        <script src="/bootstrap/thema/fico2000_new/plugins/select2/js/select2.min.js"></script>

    <!--Bootstrap Validator [ OPTIONAL ]-->
    <script src="/bootstrap/thema/fico2000_new/plugins/bootstrap-validator/bootstrapValidator.min.js"></script>

    <!--Bootstrap Wizard [ OPTIONAL ]-->
    <script src="/bootstrap/thema/fico2000_new/plugins/bootstrap-wizard/jquery.bootstrap.wizard.min.js"></script>
    
    <script src="/bootstrap/thema/fico2000_new/js/bootbox.min.js"></script>
    
    <script src="/bootstrap/thema/fico2000_new/assets/js/custom.js"></script>
    
    <link href="https://cdnjs.cloudflare.com/ajax/libs/summernote/0.8.1/summernote.css" rel="stylesheet">
    <script src="https://cdnjs.cloudflare.com/ajax/libs/summernote/0.8.1/summernote.js"></script>

    <script src="/bootstrap/thema/fico2000_new/js/app/main/user.services.js"></script>
    <script src="/bootstrap/thema/fico2000_new/js/app/util/util.services.js"></script>
    
    <script type="text/javascript" src="/bootstrap/thema/fico2000_new/js/rsa/jsbn.js"></script>
	<script type="text/javascript" src="/bootstrap/thema/fico2000_new/js/rsa/rsa.js"></script>
	<script type="text/javascript" src="/bootstrap/thema/fico2000_new/js/rsa/prng4.js"></script>
	<script type="text/javascript" src="/bootstrap/thema/fico2000_new/js/rsa/rng.js"></script>

    
    <!-- The jQuery UI widget factory, can be omitted if jQuery UI is already included -->
    <script src="/bootstrap/thema/fico2000_new/plugins/file-uploader/vendor/jquery.ui.widget.js"></script>
    <!-- The Iframe Transport is required for browsers without support for XHR file uploads -->
    <script src="/bootstrap/thema/fico2000_new/plugins/file-uploader/jquery.iframe-transport.js"></script>
    <!-- The basic File Upload plugin -->
    <script src="/bootstrap/thema/fico2000_new/plugins/file-uploader/jquery.fileupload.js"></script>

    <!--- grid plugin ---->
    <link href="https://cdnjs.cloudflare.com/ajax/libs/jquery-bootgrid/1.3.1/jquery.bootgrid.min.css" rel="stylesheet">
    <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jquery-bootgrid/1.3.1/jquery.bootgrid.min.js"></script>

    <script src="/bootstrap/thema/fico2000_new/js/multiselect.min.js"></script>

    
    <link href="/bootstrap/thema/fico2000_new/plugins/jquery-upload-file-master/css/uploadfile.css" rel="stylesheet">
    <script src="/bootstrap/thema/fico2000_new/plugins/jquery-upload-file-master/js/jquery.uploadfile.js"></script>

    <!--RENEWAL2019 CSS [ REQUIRED ] -->
    <link href="/bootstrap/thema/fico2000_new/assets/css/renewal2019_1.css" rel="stylesheet">

     <!--Chosen [ OPTIONAL ]-->
     <script src="/bootstrap/thema/fico2000_new/plugins/chosen/chosen.jquery.min.js"></script>
 
 
     <!--Bootstrap Validator [ OPTIONAL ]-->
     <script src="/bootstrap/thema/fico2000_new/plugins/bootstrap-validator/bootstrapValidator.min.js"></script>
 
     
     <!--Morris.js [ OPTIONAL ]-->
     <script src="/bootstrap/thema/fico2000_new/plugins/morris-js/morris.min.js"></script>
     <script src="/bootstrap/thema/fico2000_new/plugins/morris-js/raphael-js/raphael.min.js"></script>
 
 
     <!--Flot Chart [ OPTIONAL ]-->
     <script src="/bootstrap/thema/fico2000_new/plugins/flot-charts/jquery.flot.min.js"></script>
     <script src="/bootstrap/thema/fico2000_new/plugins/flot-charts/jquery.flot.resize.min.js"></script>
 
 
     <!--Flot Pie Chart [ OPTIONAL ]-->
     <script src="/bootstrap/thema/fico2000_new/plugins/flot-charts/jquery.flot.pie.min.js"></script>

     
     <!--bPopup-->
     <script src="/bootstrap/thema/fico2000_new/plugins/bpopup-master/jquery.bpopup.js"></script>

     <script type="text/javascript">
        function successCallback(data) {
            console.log(data);
        }
        
        function errorCallBack(e) {
            console.log(e);
            overlay.hide();
            bootbox.alert('[ERROR] 시스템 오류 발생('+e.status+' '+e.statusText+')');
        }
    </script>
</head>  
<body>

<div id="container">
            
	<div class="row" id="entpInfo">
   		<div class="col-lg-12">                                        
	       	<!-- 분석 선택 -->
	    	<!--===================================================-->
	  
		    <h3 class="panel-title pa0">
		    	<strong class="selectTitleArrow" style="background-color: #dbdbdb;padding: 10px;">Step&nbsp;<font size="6"><strong>1</strong></font></strong> 분석할 기업을 선택하세요. <small>(목록에서 대상 기업명 클릭)</small>
		    </h3>
	       
	    	<table id="grid-list" class="table table-bordered table-hover table-striped">
	        	<thead>
		            <tr>
		                <th data-width="10%" data-column-id="numRow" data-header-align="center" data-align="center">번호</th>
		                <th data-width="20%" data-column-id="bznDis" data-header-align="center"  data-align="center">사업자번호</th>
		                <th data-column-id="bzn" data-header-align="center" data-align="center" data-visible="false">사업자번호</th>
		                <th data-width="50%" data-column-id="name" data-header-align="center">기업명</th>
		                <th data-width="20%" data-column-id="frrgTs" data-header-align="center" data-align="center" data-visible="false">등록일</th>
		                <th data-column-id="userid" data-header-align="center" data-align="center" data-visible="false">사용자ID</th>
		            </tr>
		        </thead>
	    	</table>
	    	<!--===================================================-->
	    	<div class="alert alert-danger" role="alert">
			     <span id="errRegMsg"></span>
			</div> 
		</div>
	</div>

    <div class="row" id="alyInfo" style="display:none">
           <div class="col-lg-12">
               <!-- 등록기업조회 -->
               <!--===================================================-->
               <h3 class="panel-title pa0">
               	<strong class="selectTitleArrow" style="background-color: #dbdbdb;padding: 10px;">Step&nbsp;<font size="6"><strong>2</strong></font></strong> 분석할 민감도 분석 시나리오를 선택하세요. <small>(목록에서 대상 시나리오를 클릭)</small>
               </h3>
               <table id="grid-aly-list" class="table table-bordered table-hover table-striped">
                   <thead>
                       <tr>
                           <th data-width="10%" data-column-id="numRow" data-header-align="center" data-align="center">번호</th>
                           <th data-width="30%" data-column-id="name" data-header-align="center">기업명</th>
                           <th data-width="45%" data-column-id="alycon" data-header-align="center">분석명</th>                                                    
                           <th data-width="15%" data-column-id="frrgTs" data-header-align="center" data-align="center" data-visible="false">등록일</th>
                           <th data-column-id="bzn" data-header-align="center" data-align="center" data-visible="false">사업자번호</th>
                           <th data-column-id="alyid" data-header-align="center" data-align="center" data-visible="false">분석ID</th>
                           <th data-column-id="userid" data-header-align="center" data-align="center" data-visible="false">사용자ID</th>
                           <th data-column-id="amtUnit" data-header-align="center" data-align="center" data-visible="false">단위</th>
                           <th data-column-id="amtUnitNm" data-header-align="center" data-align="center" data-visible="false">단위명</th>
                       </tr>
                   </thead>
               </table>
               <div class="text-center">
                	<button type="button" class="previous btn btn-primary btn-lg" id="prevAly">이전</button>
               </div>
               <!--===================================================-->  
	           <input type="hidden" class="form-control" id="alyid" style="height: 40px;">
	           <input type="hidden" class="form-control" id="userid" style="height: 40px;">
	           <input type="hidden" class="form-control" id="bzn" style="height: 40px;">
	           <input type="hidden" class="form-control" id="entpName" style="height: 40px;">
	           <input type="hidden" class="form-control" id="alycon" style="height: 40px;">
	           <input type="hidden" class="form-control" id="amtUnit" style="height: 40px;">
	           <input type="hidden" class="form-control" id="amtUnitNm" style="height: 40px;">
       
       	</div>
   </div>
   <!--===================================================-->
   <!--End page content-->
</div>
<!--===================================================-->
<!--END CONTENT CONTAINER-->

<!--END CONTENT CONTAINER-->
<script src="/bootstrap/thema/fico2000_new/js/app/adm/codeMng.service.js"></script>
<script src="/bootstrap/thema/fico2000_new/js/app/fin/fin.services.js"></script>
<!--Demo script [ DEMONSTRATION ]-->
<script src="/bootstrap/thema/fico2000_new/js/demo/nifty-demo.min.js"></script>
    <!--Form Wizard [ SAMPLE ]-->
<script src="/bootstrap/thema/fico2000_new/js/demo/form-wizard.js"></script>
<script src="/bootstrap/thema/fico2000_new/js/app/fin/FIN02001P00Component.js"></script>   


</body>
</html>