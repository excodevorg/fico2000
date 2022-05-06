<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML4.01 Transitional//EN" "http://www.w3.org/html4/loose.dtd">
<%

String resultMsg = (String) request.getAttribute("msg");

String successYn = (String) request.getAttribute("activeSuccess");

%>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Fico2000</title>
<!-- include libraries(jQuery, bootstrap) -->
<link href="/bootstrap/thema/fico2000/css/bootstrap.css" rel="stylesheet">

<!--jQuery [ REQUIRED ]-->
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.js"></script> 

<!--BootstrapJS [ RECOMMENDED ]-->
<script src="https://netdna.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.js"></script>

<script src="/bootstrap/thema/fico2000/js/bootbox.min.js"></script>
    
<script src="/bootstrap/thema/fico2000/assets/js/custom.js"></script>

<script>
function load() {
    bootbox.alert("<%=resultMsg%>", function(){
        window.location.href="/";
    });
}
</script>
</head>
<body onLoad="load();">

</body>
</html>