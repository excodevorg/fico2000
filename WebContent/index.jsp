<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<!DOCTYPE html>
<html lang="en">
<%@include file="/inc/common.jsp" %>
<%


java.util.Map socialMap = null;

boolean socialLoginErr = false;
String socialLoginErrMsg = "";


System.out.println("loginYn >>> " + loginYn);

if (!loginYn) {
	if (session.getAttribute("socialMap") != null) {
		socialMap = (java.util.Map) session.getAttribute("socialMap");
		
		if (socialMap.get("errMsg") != null) {
			socialLoginErr = true;
			socialLoginErrMsg = (String) socialMap.get("errMsg");
		}
	}
} 

session.setAttribute("socialMap", null);

String activeSuccess = null;

activeSuccess = (String) request.getAttribute("activeSuccess");



%>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Fico2000 - 기업분석 및 비즈니스의 모든 것 </title>

<meta property="og:title" content="Fico2000"/>
<meta property="og:type" content="website"/>
<meta property="og:url" content="http://www.fico2000.com/"/>
<meta property="og:description" content="기업분석 및 비즈니스의 모든 것"/>
<meta property="og:image" content="http://test.fico2000.com/bootstrap/thema/fico2000_new/assets/img/renewal2019/fico2000_ogtag_center.jpg"/>
<meta property="og:image:width" content="800" />
<meta property="og:image:height" content="400" />

<link rel="icon" type="image/png" sizes="16x16" href="/bootstrap/thema/fico2000_new/img/favicon-16x16.png">

	<!--Open Sans Font [ OPTIONAL ]-->
	<link href="https://fonts.googleapis.com/css?family=Noto+Sans+KR&display=swap" rel="stylesheet">

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
           width : 700px;/*auto;*/
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
        .Pstyle .content iframe { width:650px; height:700px;}

		 .Pstyle .panel hr {margin:5px 0;}
        canvas {
                -moz-user-select: none;
                -webkit-user-select: none;
                -ms-user-select: none;
            }
            .chart-container {
                position: relative;
                width: 100%;
                margin:0 auto;
            }
        </style>
        
        
    <!-- CSS Implementing Plugins -->
    <link rel="stylesheet" href="/bootstrap/thema/fico2000_new/assets/plugins/animate.css">
    <link rel="stylesheet" href="/bootstrap/thema/fico2000_new/assets/plugins/line-icons/line-icons.css">
    <link rel="stylesheet" href="/bootstrap/thema/fico2000_new/assets/plugins/font-awesome/css/font-awesome.min.css">
    <link rel="stylesheet" href="/bootstrap/thema/fico2000_new/assets/plugins/parallax-slider/css/parallax-slider.css">
    <link rel="stylesheet" href="/bootstrap/thema/fico2000_new/assets/plugins/owl-carousel/owl-carousel/owl.carousel.css">

    <!-- radar Chart head 안에 넣을 부분 -->
    <script src="/bootstrap/thema/fico2000_new/plugins/chartjs2019/Chart.min.js"></script>
    <script src="/bootstrap/thema/fico2000_new/plugins/chartjs2019/utils.js"></script>
        

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

             <!--RENEWAL2019 CSS [ REQUIRED ] -->
    <link href="/bootstrap/thema/fico2000_new/assets/css/renewal2019_1.css" rel="stylesheet">

    


    <script type="text/javascript">
    var fnSubMove;
    	function load() {
            var navi = new GNB(-1,-1,-1);
            <% if (activeSuccess != null) { %>
                alert('<%=activeSuccess%>')
            <% } %>

            console.log("socialLoginErr >>>" , "<%=socialLoginErr%>");
            <% if (socialMap != null) { %>
            console.log("errMsg >>>" , '<%=socialMap.get("errMsg")%>');
            <% } %>
            
            <% if (socialLoginErr) { %>
            	
            bootbox.alert("<%=socialLoginErrMsg%>");
            
            <% } %>
            
            toMove("MAIN00000M00");
    	}    	
    		
    	function successCallback(data) {
            console.log(data);
    	}
    	
    	function errorCallBack(e) {
            console.log(e);
            overlay.hide();
    		bootbox.alert('[ERROR] 시스템 오류 발생('+e.status+' '+e.statusText+')');
    	}

        fnSubMove = function(menuId) {
            toMove(menuId);
        }

        function getFinAplyCom() {
            return finAplyCom;
        }

    </script>


</head>
<body onLoad="load()">

    <div id="container" class="effect aside-float aside-bright mainnav-lg navbar-fixed mainnav-fixed">

        <!--NAVBAR-->
        <!--===================================================-->
        <header id="navbar">
            <div id="navbar-container" class="boxed">

                <div class="navbar-header">

                    <a onClick="onGoHome()" class="navbar-brand" style="cursor:pointer;">
                            <img src="/bootstrap/thema/fico2000_new/img/logo.png" class="brand-icon">
                            <div class="brand-title">
                                <span class="brand-text">Fico2000</span>
                            </div>
                    </a>

                </div>

            </div>

            <!--================================-->
            <!--End brand logo & name-->
            <!--Navbar Dropdown-->
            <!--================================-->
            <div id="ficoTopNav" class="navbar-content clearfix">
				<div class="navWrap">
                    <ul class="nav navbar-top-links pull-left">
                        <!--Navigation toogle button-->
                        <!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
                        <li class="tgl-menu-btn">
                            <a class="mainnav-toggle" href="#">
                                <i class="fa fa-navicon"></i>
                            </a>
                        </li>
                    </ul>                        
                    <% if (!loginCls) { %>
                    <ul class="nav navbar-top-links pull-right">
                        <li>
                        	<img src="/bootstrap/thema/fico2000_new/assets/img/renewal2019/asiape_logo_black.png" class="asiapeLogoImg">
                        	<img src="/bootstrap/thema/fico2000_new/assets/img/renewal2019/asiape_logo_black_mobile.png" class="asiapeLogoImgMobile">
                        </li>
                        <li><a onClick="toMove('MAIN01000M00')" style="cursor:Pointer">로그인</a></li>
                        <li><a onClick="toMove('MAIN03000M00')" style="cursor:Pointer">회원가입</a></li>
                    </ul>                 
                    <% } else {  %>

					<ul class="nav navbar-top-links pull-right">
						 <!--User dropdown-->
                        <!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
                        <li>
                        	<img src="/bootstrap/thema/fico2000_new/assets/img/renewal2019/asiape_logo_black.png" class="asiapeLogoImg">
                        	<img src="/bootstrap/thema/fico2000_new/assets/img/renewal2019/asiape_logo_black_mobile.png" class="asiapeLogoImgMobile">
                        </li>
                        <li id="dropdown-user" class="dropdown">
							<a href="#" data-toggle="dropdown" class="dropdown-toggle text-right">
                                <span class="pull-right">
                                   <i class="demo-pli-male ic-user"></i>
                                </span>
                                <div class="username hidden-xs"><%=loginText%> 님</div>
                            </a>

							<div class="dropdown-menu dropdown-menu-md dropdown-menu-right panel-default">
								 <!-- Dropdown heading  -->
                                <div class="pad-all bord-btm">
                                    <p class="text-main mar-btm"><span class="text-bold"><%=authCodeNm%></span></p>
                                </div>
                               
							    <!-- User dropdown menu -->
                                <ul class="head-list">
									<li>
                                        <a onClick="onViewProfile()" style="cursor: Pointer;">
                                            <i class="demo-pli-male icon-lg icon-fw"></i> View Profile
                                        </a>
                                    </li>
									<li>
                                        <a onClick="onLogout()" style="cursor: Pointer;">
                                            <i class="demo-pli-mail icon-lg icon-fw"></i> Logout
                                        </a>
                                    </li>
                                </ul>
									
							</div>

                        </li>
					</ul>


                    <% } %>       

				</div>
            </div>

        </header>

		<!--===================================================-->
        <!--END NAVBAR-->
        <!--CONTENT CONTAINER-->
        <!--===================================================-->
        
        <div class="boxed">
        
            <!--CONTENT CONTAINER-->
            <!--===================================================-->
            <div id="ficoContent"></div>
            
            <!--MAIN NAVIGATION-->
            <!--===================================================-->
            
            <nav id="mainnav-container">
                <div id="mainnav">
                    <!--Menu-->
                    <!--================================-->
                    
                    <div id="mainnav-menu-wrap">
                        <div class="nano">
                            <div id="ficonavi" class="nano-content">
                                
                                <% if (loginCls) { %>
                                <!--Profile Widget-->
                                <!--================================-->
                                <div id="mainnav-profile" class="mainnav-profile">
                                    <div class="profile-wrap">
                                        <div class="pad-btm">
                                            <span class="label <%=authCodeLabel%> pull-right"><%=authCodeNm%></span>
                                            <img class="img-circle img-sm img-border" src="/bootstrap/thema/fico2000_new/img/profile-photos/<%=imgUrl%>" alt="Profile Picture">
                                        </div>
                                        <a href="#profile-nav" class="box-block" data-toggle="collapse" aria-expanded="false">
                                            <span class="pull-right dropdown-toggle">
                                                <i class="dropdown-caret"></i>
                                            </span>
                                            <p class="mnp-name"><%=loginText%></p>
                                            <span class="mnp-desc"><%=loginUserId%></span>
                                        </a>
                                    </div>
                                    <div id="profile-nav" class="collapse list-group bg-trans">
                                        <a class="list-group-item" onClick="onViewProfile()" style="cursor: Pointer;">
                                            <i class="demo-pli-male icon-lg icon-fw"></i> View Profile
                                        </a>
                                        <a class="list-group-item" onClick="onLogout()" style="cursor: Pointer;">
                                            <i class="demo-pli-unlock icon-lg icon-fw"></i> Logout
                                        </a>
                                    </div>
                                </div>
                                <% } %>

                            </div>
                        </div>
                    </div>
                    
                    
                </div>
            </nav> 
 			
 			
        </div>

        <!-- FOOTER -->
        <!--===================================================-->

        <footer id="footer">

            <!-- Visible when footer positions are fixed -->
            <!-- ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ -->
            <div class="show-fixed pull-right">
                You have <a href="#" class="text-bold text-main"><span class="label label-danger">3</span> pending action.</a>
            </div>

            <!-- Visible when footer positions are static -->
            <!-- ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ -->
            <div class="hide-fixed pull-right pad-rgt">
                <strong>powered by IBK System</strong>
            </div>

            <!-- ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ -->
            <!-- Remove the class "show-fixed" and "hide-fixed" to make the content always appears. -->
            <!-- ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ -->

            <p class="pad-lft">&#0169; 2016 Fico2000</p>
        </footer>
        <!--===================================================-->
        <!-- END FOOTER -->

        <!-- SCROLL PAGE BUTTON -->
        <!--===================================================-->
        <button class="scroll-top btn">
            <i class="pci-chevron chevron-up"></i>
        </button>
        <!--===================================================-->		

        <div id="overlay" style="display:none">
            <img src="/bootstrap/thema/fico2000_new/img/loader.gif" alt="Loading" /><br/>
            Loading....
        </div>        

    </div>


<script type="text/javascript">
function onLogout() {
	
    var service = new UserService(false);
 
    overlay.show();

    var responseData = service.getLogOut();

    if (responseData.success) {
        window.location.href="/";
    }

}

function onViewProfile() {
    toMove('MAIN02000M00')
}
</script>

</body>
</html>