<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>

<%

	String errMsg = (String) request.getAttribute("jsonString");

%>
<!--A Design by W3layouts
Author: W3layout
Author URL: http://w3layouts.com
License: Creative Commons Attribution 3.0 Unported
License URL: http://creativecommons.org/licenses/by/3.0/
-->
<!DOCTYPE HTML>
<html>
<head>
<title>Fico2000</title>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
<link href='//fonts.googleapis.com/css?family=Love+Ya+Like+A+Sister' rel='stylesheet' type='text/css'>
<style type="text/css">
body{
	/*font-family: 'Love Ya Like A Sister', cursive;*/
}
body{
	background:#eaeaea;
}	
.wrap{
	margin:0 auto;
	width:100%;
}
.logo{
	text-align:center;
	margin-top:200px;
}
.logo img{
	width:350px;
}
.logo p{
	color:#272727;
	font-size:40px;
	margin-top:1px;
}	

.sub1 {
	color:#272727;
	font-size:15px;
	margin-top:1px;
	text-align:center;
}	

.logo p span{
	color:lightgreen;
}	
.sub a{
	color:#fff;
	background:#272727;
	text-decoration:none;
	padding:10px 20px;
	font-size:13px;
	font-family: arial, serif;
	font-weight:bold;
	-webkit-border-radius:.5em;
	-moz-border-radius:.5em;
	-border-radius:.5em;
}	
.footer{
	color:black;
	position:absolute;
	right:10px;
	bottom:10px;
}	
.footer a{
	color:rgb(114, 173, 38);
}	
.errorImgWrap {
	padding:50px 10px;
}
.errorImg {max-width:600px;margin-top:0;}
@media screen and (max-width: 430px) {
	.errorImg {
		width:100%; margin-top:40px;
	}
}

</style>

<!-- include libraries(jQuery, bootstrap) -->
<link href="/bootstrap/thema/fico2000/css/bootstrap.css" rel="stylesheet">

<!--jQuery [ REQUIRED ]-->
<script src="http://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.js"></script> 

<!--BootstrapJS [ RECOMMENDED ]-->
<script src="http://netdna.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.js"></script>

<script src="/bootstrap/thema/fico2000/js/bootbox.min.js"></script>
    
<script src="/bootstrap/thema/fico2000/assets/js/custom.js"></script>

<script type="text/javascript">


function load() {
    var errMsg = '<%=errMsg%>';

    var objMsg = JSON.parse(errMsg);

    $("#sub1").html('<b>' + objMsg.msg +'</b>');

}

</script>

</head>


<body onLoad="load()">

<!---728x90--->
 <div class="wrap">
	<div  class="text-center errorImgWrap">
			<!-- <p>OOPS! - Could not Find it</p> -->
			<img src="/bootstrap/thema/fico2000_new/img/404_error.png" class="errorImg"/><br><br>
			
			<div class="sub1" id="sub1"></div><br>
<!---728x90--->
			<div class="sub">
			  <p><a href="/" class="btn btn-lg btn-primary">Back </a></p>
			</div>
	</div>
 </div>	
	
<!---728x90--->
	
	<div class="footer">
	 &copy 2017 Oops 404 . All Rights Reserved | Design by<a href="http://www.ibksystem.co.kr">IBK System</a>
	</div>
	
</body>