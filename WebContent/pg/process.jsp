<%@ page contentType="text/html; charset=euc-kr" %>
<%@ page import="java.util.* "%>
<%@ page import="java.sql.* "%>

<%@ page import="com.galaxia.api.* "%>
<%@ page import="com.galaxia.api.merchant.* "%>
<%@ page import="com.galaxia.api.crypto.* "%>
<%@ page import="com.galaxia.api.util.* "%>

<%
	ServletContext context = request.getServletContext();
	String absFolder = context.getRealPath("/");
	String configFilePath = absFolder + "WEB-INF/config/config.ini";
	setConfigLoad(configFilePath);
%>
<%!
	public static final String VERSION = "0100" ;	
	public  String configLoad = "/WEB-INF/conifg/config.ini";
	
	public void setConfigLoad(String configLoad) {
		this.configLoad = configLoad;
	}

	private GalaxiaCipher getCipher(String serviceId) throws Exception
	{
		GalaxiaCipher cipher = null ;
				
		String key = null ;
		String iv = null ;
    try { 
			//ConfigInfo config = new ConfigInfo(ServiceCode.CREDIT_CARD);
			//config.ini 파일 경로 지정
			ConfigInfo config = new ConfigInfo(configLoad, ServiceCode.MOBILE);

			key = config.getKey();
			iv = config.getIv();
			
			cipher = new Seed();
			cipher.setKey(key.getBytes());
			cipher.setIV(iv.getBytes());
    }
    catch(Exception e)
    {
    	throw e ;
    }	    
    return cipher;
	}
	
	public Message linkAuthProcess(HttpSession session, ServletConfig config) throws Exception 
	{
		String serviceId = (String)session.getAttribute("serviceId");
		String msg = (String)session.getAttribute("message");
		
		//메시지 Length 제거
		byte[] b = new byte[msg.getBytes().length - 4] ;
		System.arraycopy(msg.getBytes(), 4, b, 0, b.length);

		Message requestMsg = new Message(b, getCipher(serviceId)) ;
		
		Message responseMsg = null ;
		
		//ServiceBroker sb = new ServiceBroker(ServiceCode.CREDIT_CARD);
		ServiceBroker sb = new ServiceBroker(configLoad, ServiceCode.CREDIT_CARD);

		responseMsg = sb.invoke(requestMsg);
		
		return responseMsg;
	}
	
		public Message cancelProcess(HttpSession session, ServletConfig config) throws Exception 
	{
		String serviceId = (String)session.getAttribute("serviceId");
		String orderId = (String)session.getAttribute("orderId");
		String orderDate = (String)session.getAttribute("orderDate");
		String transactionId = (String)session.getAttribute("transactionId");

		Message requestMsg = new Message(VERSION, serviceId, 
				ServiceCode.CREDIT_CARD, 
				Command.CANCEL_SMS_REQUEST,
				orderId, 
				orderDate, 
				getCipher(serviceId)) ;
		Message responseMsg = null ;
		
		if(transactionId != null) requestMsg.put(MessageTag.TRANSACTION_ID, transactionId);
				
		//ServiceBroker sb = new ServiceBroker(ServiceCode.CREDIT_CARD);
		ServiceBroker sb = new ServiceBroker(configLoad, ServiceCode.CREDIT_CARD);

		responseMsg = sb.invoke(requestMsg);
		
		return responseMsg;
	}
	
	public Message networkCancelProcess(HttpSession session, ServletConfig config) throws Exception 
	{
		String serviceId = (String)session.getAttribute("serviceId");
		String orderId = (String)session.getAttribute("orderId");
		String orderDate = (String)session.getAttribute("orderDate");

		Message requestMsg = new Message(VERSION, serviceId, 
				ServiceCode.CREDIT_CARD, 
				Command.NETWORK_CANCEL_REQUEST,
				orderId, 
				orderDate, 
				getCipher(serviceId)) ;
		Message responseMsg = null ;

		//ServiceBroker sb = new ServiceBroker(ServiceCode.CREDIT_CARD);
		ServiceBroker sb = new ServiceBroker(configLoad, ServiceCode.CREDIT_CARD);

		responseMsg = sb.invoke(requestMsg);
		
		return responseMsg;
	}
%>