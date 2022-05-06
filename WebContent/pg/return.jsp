<%@ page contentType="text/html; charset=euc-kr" %>

<%@ page import="com.galaxia.api.*"%>
<%@ page import="com.galaxia.api.merchant.* "%>
<%@ page import="com.galaxia.api.crypto.* "%> 

<%@include file="/pg/process.jsp" %>

<%
//---------------------------------------------------------------------------------------------------------------
// 가맹점 결과 처리 페이지 -- 수정 불가
//---------------------------------------------------------------------------------------------------------------
String serviceId = null ;
String serviceCode = null ;
String orderId = null ;
String orderDate = null ;
String transactionId = null ;
String responseCode = null ;
String responseMessage = null ;
String detailResponseCode = null ;
String detailResponseMessage = null ;
String authNumber = null ; 
String authDate = null ;
String message = null ;
String checkSum = null;

try{
	request.setCharacterEncoding("euc-kr");
	
	//만료된 페이지 설정
	response.setHeader("cache-control", "no-cache");
	response.setHeader("pragma", "no-cache"); 
	response.setHeader("expire", "0");
	
	//결제 정보 받아오기
	serviceId = request.getParameter("SERVICE_ID");
	serviceCode = request.getParameter("SERVICE_CODE");
	orderId = request.getParameter("ORDER_ID");
	orderDate = request.getParameter("ORDER_DATE");
	message = request.getParameter("MESSAGE");
	responseCode = request.getParameter("RESPONSE_CODE");
	responseMessage = request.getParameter("RESPONSE_MESSAGE");
	detailResponseCode = request.getParameter("DETAIL_RESPONSE_CODE");
	detailResponseMessage = request.getParameter("DETAIL_RESPONSE_MESSAGE");
	checkSum = request.getParameter("CHECK_SUM");		

	//결제 정보 session에 저장
	session.setAttribute("serviceId", serviceId);
	session.setAttribute("serviceCode", serviceCode);
	session.setAttribute("orderId", orderId);
	session.setAttribute("orderDate", orderDate);
	session.setAttribute("message", message);
	session.setAttribute("responseCode", responseCode);
	session.setAttribute("responseMessage", responseMessage);
	
	//인증 성공 시 승인 요청
	if(responseCode.equals("0000")) {
	
		//checksum
		String temp = serviceId + orderId + orderDate;
		if(ChecksumUtil.diffCheckSum(checkSum, temp) != true){
%>				
			<script type="text/javascript">
				alert("에러 코드 : 0904\n에러 메시지 : 결제정보오류(return)! 관리자에게 문의 하세요!");
				window.close();
			</script>
<%
		}	
			
		//승인요청
		Message respMsg = linkAuthProcess(session, config);

		//승인요청에 대한 응답 결과 설정
		responseCode = respMsg.get(MessageTag.RESPONSE_CODE);
		responseMessage = respMsg.get(MessageTag.RESPONSE_MESSAGE);
		detailResponseCode = respMsg.get(MessageTag.DETAIL_RESPONSE_CODE);
		detailResponseMessage = respMsg.get(MessageTag.DETAIL_RESPONSE_MESSAGE);
		transactionId = respMsg.get(MessageTag.TRANSACTION_ID);
		 
 		//승인 성공인 경우 승인번호/승인일시 처리
 		if(responseCode.equals("0000")) {
			authNumber = respMsg.get(MessageTag.AUTH_NUMBER);
			authDate = respMsg.get(MessageTag.AUTH_DATE);
		}
	}
 
//---------------------------------------------------------------------------------------------------------------
// 가맹점 결과 처리 페이지 -- 수정 불가 끝
//---------------------------------------------------------------------------------------------------------------
//---------------------------------------------------------------------------------------------------------------
// 가맹점 수정 부분 : 결제 성공 시 가맹점 처리 부분 시작
//---------------------------------------------------------------------------------------------------------------
  if(responseCode.equals("0000")) {
	  
%>
<html>
<head>
<title></title>
<meta http-equiv="Content-Type" content="text/html; charset=euc-kr">
<link href="css/css_admin.css" rel="stylesheet" type="text/css">
<link href="css/css_01.css" rel="stylesheet" type="text/css">
<link rel="stylesheet" href="http://code.jquery.com/ui/1.11.4/themes/smoothness/jquery-ui.css">
<script src="/bootstrap/thema/fico2000_new/plugins/pace/pace.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.js"></script> 
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-validate/1.17.0/jquery.validate.min.js"></script>
<script src="https://netdna.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.js"></script>
<script src="/bootstrap/thema/fico2000_new/js/nifty.min.js"></script>
<script src="/bootstrap/thema/fico2000_new/js/demo/nifty-demo.min.js"></script>
<script src="/bootstrap/thema/fico2000_new/plugins/bootstrap-select/bootstrap-select.min.js"></script>
<script src="/bootstrap/thema/fico2000_new/plugins/chosen/chosen.jquery.min.js"></script>
<script src="/bootstrap/thema/fico2000_new/plugins/select2/js/select2.min.js"></script>
<script src="/bootstrap/thema/fico2000_new/plugins/bootstrap-validator/bootstrapValidator.min.js"></script>
<script src="/bootstrap/thema/fico2000_new/plugins/bootstrap-wizard/jquery.bootstrap.wizard.min.js"></script>
<script src="/bootstrap/thema/fico2000_new/js/bootbox.min.js"></script>
<script src="/bootstrap/thema/fico2000_new/assets/js/custom.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/summernote/0.8.1/summernote.js"></script>
<script src="/bootstrap/thema/fico2000_new/js/app/main/user.services.js"></script>
<script src="/bootstrap/thema/fico2000_new/js/app/util/util.services.js"></script>
<script type="text/javascript" src="/bootstrap/thema/fico2000_new/js/rsa/jsbn.js"></script>
<script type="text/javascript" src="/bootstrap/thema/fico2000_new/js/rsa/rsa.js"></script>
<script type="text/javascript" src="/bootstrap/thema/fico2000_new/js/rsa/prng4.js"></script>
<script type="text/javascript" src="/bootstrap/thema/fico2000_new/js/rsa/rng.js"></script>
<script src="/bootstrap/thema/fico2000_new/plugins/file-uploader/vendor/jquery.ui.widget.js"></script>
<script src="/bootstrap/thema/fico2000_new/plugins/file-uploader/jquery.iframe-transport.js"></script>
<script src="/bootstrap/thema/fico2000_new/plugins/file-uploader/jquery.fileupload.js"></script>
<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jquery-bootgrid/1.3.1/jquery.bootgrid.min.js"></script>
<script src="/bootstrap/thema/fico2000_new/js/multiselect.min.js"></script>
<link href="/bootstrap/thema/fico2000_new/plugins/jquery-upload-file-master/css/uploadfile.css" rel="stylesheet">
<script src="/bootstrap/thema/fico2000_new/plugins/jquery-upload-file-master/js/jquery.uploadfile.js"></script>
<script src="/bootstrap/thema/fico2000_new/plugins/chosen/chosen.jquery.min.js"></script>
<script src="/bootstrap/thema/fico2000_new/plugins/bootstrap-validator/bootstrapValidator.min.js"></script>
<script src="/bootstrap/thema/fico2000_new/plugins/morris-js/morris.min.js"></script>
<script src="/bootstrap/thema/fico2000_new/plugins/morris-js/raphael-js/raphael.min.js"></script>
<script src="/bootstrap/thema/fico2000_new/plugins/flot-charts/jquery.flot.min.js"></script>
<script src="/bootstrap/thema/fico2000_new/plugins/flot-charts/jquery.flot.resize.min.js"></script>
<script src="/bootstrap/thema/fico2000_new/plugins/flot-charts/jquery.flot.pie.min.js"></script>
<script src="/bootstrap/thema/fico2000_new/plugins/bpopup-master/jquery.bpopup.js"></script>
<script src="/bootstrap/thema/fico2000_new/plugins/chartjs2019/Chart.min.js"></script>
<script src="/bootstrap/thema/fico2000_new/plugins/chartjs2019/utils.js"></script>
<script type="text/javascript">    		
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
<head>
<!-- 키 방어 코드 -->
<script type="text/javascript" src="./js/comm.js"></script>
</head>
<body leftmargin="0" topmargin="0" marginwidth="0" marginheight="0">	
<table width="500" border="0" cellpadding="0"	cellspacing="0">
	<tr> 
	  <td height="25" style="padding-left:10px" class="title01"> 
		# 현재위치 &gt;&gt; 신용카드 &gt; <b>Fico2000 결제 결과</b></td>
	</tr>
	<!--히스토리-->
	<!--title-->
	<tr>
		<td height="54" background="images/manager_title01.gif"
			style="padding-left: 65px; padding-top: 18px"><font size="3"><strong>Fico2000 결제 결과</strong></font></td>
	</tr>
	<!--title-->
	<tr>
		<td>&nbsp;</td>
	</tr>
	<tr>
		<td align="center"><!--본문테이블 시작--->
		<table width="450" border="0" cellpadding="4" cellspacing="1" bgcolor="#B0B0B0">	
			<tr>
				<td width="100" align="center" bgcolor="#F6F6F6"><b>가맹점 아이디</b></td>
				<td width="200" align="left" bgcolor="#FFFFFF">&nbsp; 
					<b><%=serviceId%></b>
				</td>								
			</tr>
			<tr>
				<td width="100" align="center" bgcolor="#F6F6F6"><b>서비스 코드</b></td>
				<td width="200" align="left" bgcolor="#FFFFFF">&nbsp; 
					<b><%=serviceCode%></b>
				</td>								
			</tr>
				<tr>
				<td width="100" align="center" bgcolor="#F6F6F6"><b>주문번호</b></td>
				<td width="200" align="left" bgcolor="#FFFFFF">&nbsp; 
					<b><%=orderId%></b>
				</td>								
			</tr>
			<tr>
				<td width="100" align="center" bgcolor="#F6F6F6"><b>거래번호</b></td>
				<td width="200" align="left" bgcolor="#FFFFFF">&nbsp; 
					<b><%=transactionId%></b>
				</td>								
			</tr>
			<tr>
				<td width="100" align="center" bgcolor="#F6F6F6"><b>응답코드</b></td>
				<td width="200" align="left" bgcolor="#FFFFFF">&nbsp; 
					<b><%=responseCode%></b>
				</td>								
			</tr>
			<tr>
				<td width="100" align="center" bgcolor="#F6F6F6"><b>응답메시지</b></td>
				<td width="200" align="left" bgcolor="#FFFFFF">&nbsp; 
					<b><%=responseMessage%></b>
				</td>								
			</tr>
			<tr>
				<td width="100" align="center" bgcolor="#F6F6F6"><b>상세응답코드</b></td>
				<td width="200" align="left" bgcolor="#FFFFFF">&nbsp; 
					<b><%=detailResponseCode%></b>
				</td>								
			</tr>
			<tr>
				<td width="100" align="center" bgcolor="#F6F6F6"><b>상세응답메시지</b></td>
				<td width="200" align="left" bgcolor="#FFFFFF">&nbsp; 
					<b><%=detailResponseMessage%></b>
				</td>								
			</tr>
			<tr>
				<td width="100" align="center" bgcolor="#F6F6F6"><b>승인번호</b></td>
				<td width="200" align="left" bgcolor="#FFFFFF">&nbsp; 
					<b><%=authNumber%></b>
				</td>								
			</tr>
			<tr>
				<td width="100" align="center" bgcolor="#F6F6F6"><b>승인일시</b></td>
				<td width="200" align="left" bgcolor="#FFFFFF">&nbsp; 
					<b><%=authDate%></b>
				</td>								
			</tr>
		</table>
		</td>
	</tr>
</table>
<div id="storeOrderId" value="<%=orderId%>"/>
<div id="trxNo" value="<%=transactionId%>"/>
<div id="apvNo" value="<%=authNumber%>"/>
<div id="apvYmd" value="<%=authDate%>"/>
</body>
</html>
<script src="js/CARDResultComponent.js"></script>
<script src="/bootstrap/thema/fico2000_new/js/app/join/join.services.js"></script>
<%
//---------------------------------------------------------------------------------------------------------------
// 가맹점 수정 부분 : 결제 성공 시 가맹점 처리 부분 끝
//---------------------------------------------------------------------------------------------------------------
  }
	else {
//---------------------------------------------------------------------------------------------------------------
// 가맹점 수정 부분 : 결제 실패 시  가맹점 처리 부분 시작
//---------------------------------------------------------------------------------------------------------------
%>
<html>
<head>
<title></title>
<meta http-equiv="Content-Type" content="text/html; charset=euc-kr">
<link href="css/css_admin.css" rel="stylesheet" type="text/css">
<link href="css/css_01.css" rel="stylesheet" type="text/css">
<head>
</head>
<body leftmargin="0" topmargin="0" marginwidth="0" marginheight="0">
<form name="payment" method="post" action="idQueryProcess.jsp">
<table width="500" border="0" cellpadding="0"	cellspacing="0">
	<tr> 
	  <td height="25" background="images/top_bg02.gif" style="padding-left:10px" class="title01"><img src="images/top_icon01.gif"> 
		현재위치 &gt;&gt; 신용카드 &gt; <b>Fico2000 결제 결과</b></td>
	</tr>
	<!--히스토리-->
	<!--title-->
	<tr>
		<td height="54" background="images/manager_title01.gif"
			style="padding-left: 65px; padding-top: 18px"><font size="3"><strong>Fico2000 결제 결과</strong></font></td>
	</tr>
	<!--title-->
	<tr>
		<td>&nbsp;</td>
	</tr>
	<tr>
		<td align="center"><!--본문테이블 시작--->
		<table width="450" border="0" cellpadding="4" cellspacing="1" bgcolor="#B0B0B0">	
			<tr>
				<td width="100" align="center" bgcolor="#F6F6F6"><b>가맹점 아이디</b></td>
				<td width="200" align="left" bgcolor="#FFFFFF">&nbsp; 
					<b><%=serviceId%></b>
				</td>								
			</tr>
			<tr>
				<td width="100" align="center" bgcolor="#F6F6F6"><b>서비스 코드</b></td>
				<td width="200" align="left" bgcolor="#FFFFFF">&nbsp; 
					<b><%=serviceId%></b>
				</td>								
			</tr>
				<tr>
				<td width="100" align="center" bgcolor="#F6F6F6"><b>주문번호</b></td>
				<td width="200" align="left" bgcolor="#FFFFFF">&nbsp; 
					<b><%=orderId%></b>
				</td>								
			</tr>
			<tr>
				<td width="100" align="center" bgcolor="#F6F6F6"><b>거래번호</b></td>
				<td width="200" align="left" bgcolor="#FFFFFF">&nbsp; 
					<b><%=transactionId%></b>
				</td>								
			</tr>
			<tr>
				<td width="100" align="center" bgcolor="#F6F6F6"><b>응답코드</b></td>
				<td width="200" align="left" bgcolor="#FFFFFF">&nbsp; 
					<b><%=responseCode%></b>
				</td>								
			</tr>
			<tr>
				<td width="100" align="center" bgcolor="#F6F6F6"><b>응답메시지</b></td>
				<td width="200" align="left" bgcolor="#FFFFFF">&nbsp; 
					<b><%=responseMessage%></b>
				</td>								
			</tr>
			<tr>
				<td width="100" align="center" bgcolor="#F6F6F6"><b>상세응답코드</b></td>
				<td width="200" align="left" bgcolor="#FFFFFF">&nbsp; 
					<b><%=detailResponseCode%></b>
				</td>								
			</tr>
			<tr>
				<td width="100" align="center" bgcolor="#F6F6F6"><b>상세응답메시지</b></td>
				<td width="200" align="left" bgcolor="#FFFFFF">&nbsp; 
					<b><%=detailResponseMessage%></b>
				</td>								
			</tr>
		</table>
		</td>
	</tr>
</table>
</form>
</body>
</html>
<%
//---------------------------------------------------------------------------------------------------------------
// 가맹점 수정 부분 : 결제 실패 시  가맹점 처리 끝 
//---------------------------------------------------------------------------------------------------------------
	}
}
catch(Exception ex) {
	ex.printStackTrace();
%>
	<script type="text/javascript">
	alert("에러 코드 : 0902\n에러 메시지 : 가맹점 승인요청 결과를 관리자에게 문의 하세요!");
	window.close();
	</script>
<%
}
%>