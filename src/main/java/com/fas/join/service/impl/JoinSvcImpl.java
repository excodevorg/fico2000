package com.fas.join.service.impl;

import java.util.List;
import java.util.Random;

import javax.annotation.Resource;
import javax.servlet.http.HttpSession;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.apache.http.HttpResponse;
import org.apache.http.client.HttpClient;
import org.apache.http.client.ResponseHandler;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.client.methods.HttpPost;
import org.apache.http.entity.StringEntity;
import org.apache.http.impl.client.BasicResponseHandler;
import org.apache.http.impl.client.HttpClientBuilder;
import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.fas.cmmn.util.FasComUtil;
import com.fas.cmmn.util.FasDateUtil;
import com.fas.cmmn.util.KeyGenerator;
import com.fas.join.formVo.JoinFormVo;
import com.fas.join.formVo.SettlPeriodFormVo;
import com.fas.join.formVo.SettlementFormVo;
import com.fas.join.service.JoinSvc;
import com.fas.model.com.JoinManager;
import com.fas.model.com.UserInfoManager;
import com.fas.model.com.domain.ProdInfoDomain;
import com.fas.model.com.domain.StoreInfoDomain;
import com.fas.model.com.domain.UserCompanyInfoDomain;
import com.fas.model.com.domain.UserInfoDomain;
import com.fas.model.com.domain.UserPremInfoDomain;
import com.fas.model.com.domain.UserSettleHistDomain;
import com.fas.web.cmmn.dataaccess.util.JsonObjectModel;
import com.fas.web.cmmn.util.BeanUtils;
import com.fas.web.cmmn.util.HttpUtil;

@Service("JoinSvc")
public class JoinSvcImpl implements JoinSvc {

	private static Log logger = LogFactory.getLog(JoinSvcImpl.class);
	
	@Resource(name="HttpUtil")
	private HttpUtil httpUtil;
	
	@Resource(name="FasComUtil")
	private FasComUtil fasComUtil;
	
	@Autowired
	private JoinManager joinManager;
	
	@Autowired
	private UserInfoManager userInfoManager;
	
	@Override
	public JsonObjectModel checkJoinStatus(JoinFormVo param) throws Exception {
		
		//1) ??????
		BeanUtils beanUtil = new BeanUtils();
		JsonObjectModel resultMap = new JsonObjectModel();
					
		UserPremInfoDomain userPremInfoVo = (UserPremInfoDomain) beanUtil.toCopy(param, new UserPremInfoDomain());
				
		userPremInfoVo.setUserId(httpUtil.getSessionUserId());
		
		UserPremInfoDomain resultVo = joinManager.getUserPremInfo(userPremInfoVo);
		
		if (resultVo != null) {
			logger.debug(">>>>> userPrmInfo >>>>> " + resultVo.getUserId());
			resultMap.putData("userPremInfo", resultVo);
			resultMap.success();
		} else {
			//resultMap.fail("??????????????? ???????????? ???????????????.");
			resultVo = new UserPremInfoDomain();
			resultVo.setProductId(param.getProductId());
			resultMap.putData("userPremInfo", resultVo);
			resultMap.success();
		}
		return resultMap;
	}
	
	@Override
	public JsonObjectModel acceptTheTerms(JoinFormVo param) throws Exception {
		
		//1) ??????
		BeanUtils beanUtil = new BeanUtils();
		JsonObjectModel resultMap = new JsonObjectModel();
					
		UserPremInfoDomain userPremInfoVo = (UserPremInfoDomain) beanUtil.toCopy(param, new UserPremInfoDomain());
				
		userPremInfoVo.setUserId(httpUtil.getSessionUserId());

		
		UserPremInfoDomain resultVo = joinManager.getUserPremInfo(userPremInfoVo);
		
		if (resultVo != null) {
			logger.debug(">>>>> userPrmInfo >>>>> " + resultVo.getUserId());
			resultVo.setAcceptTheTerms1("Y");
			resultVo.setAcceptTheTerms2("Y");
			joinManager.saveUserPremInfo(resultVo);
			resultMap.putData("userPremInfo", resultVo);
			resultMap.success();
		} else {
			resultVo = new UserPremInfoDomain();
			resultVo.setUserId(httpUtil.getSessionUserId());
			resultVo.setProductId(param.getProductId());
			resultVo.setFrrgUserId(httpUtil.getSessionUserId());
			resultVo.setFrrgts(FasDateUtil.getCurrentDate());
			resultVo.setAcceptTheTerms1("Y");
			resultVo.setAcceptTheTerms2("Y");
			joinManager.saveUserPremInfo(resultVo);
			resultMap.putData("userPremInfo", resultVo);
			resultMap.success();
		}
		return resultMap;
	}
	
	@Override
	public JsonObjectModel selectApcInfo(JoinFormVo param) throws Exception {
		
		//1) ??????
		BeanUtils beanUtil = new BeanUtils();
		JsonObjectModel resultMap = new JsonObjectModel();
					
		UserPremInfoDomain userPremInfoVo = (UserPremInfoDomain) beanUtil.toCopy(param, new UserPremInfoDomain());
				
		userPremInfoVo.setUserId(httpUtil.getSessionUserId());

		UserPremInfoDomain resultVo = joinManager.getUserPremInfo(userPremInfoVo);
		
		UserInfoDomain userInfoVo = new UserInfoDomain();
		userInfoVo.setUserId(httpUtil.getSessionUserId());
		UserInfoDomain userInfoResultVo = userInfoManager.getUserInfo(userInfoVo);
		
		if (resultVo != null) {
			logger.debug(">>>>> userPrmInfo >>>>> " + resultVo.getUserId());
			resultMap.putData("userPremInfo", resultVo);
			resultMap.putData("userInfo", userInfoResultVo);
			resultMap.success();
		} else {
			resultMap.fail("???????????? ????????? ????????????. ???????????? ?????? ????????? ????????????.");
		}
		return resultMap;
	}
	
	@Override
	public JsonObjectModel saveApcInfo(JoinFormVo param) throws Exception {
		
		//1) ??????
		BeanUtils beanUtil = new BeanUtils();
		JsonObjectModel resultMap = new JsonObjectModel();
					
		UserPremInfoDomain userPremInfoVo = (UserPremInfoDomain) beanUtil.toCopy(param, new UserPremInfoDomain());
		userPremInfoVo.setUserId(httpUtil.getSessionUserId());
		
		UserCompanyInfoDomain userCompanyInfoVo = (UserCompanyInfoDomain) beanUtil.toCopy(param, new UserCompanyInfoDomain());

		UserPremInfoDomain resultUserVo = joinManager.getUserPremInfo(userPremInfoVo);
		UserCompanyInfoDomain resultCompanyVo = joinManager.getUserCompanyInfo(userCompanyInfoVo);
		
		if (resultUserVo != null) {
			
			//???????????? ??????
			if(resultCompanyVo == null) {
				resultCompanyVo = new UserCompanyInfoDomain();
				resultCompanyVo.setBzn(param.getCompanyBizNo());
			}
			resultCompanyVo.setCompanyAddr(param.getCompanyAddr());
			resultCompanyVo.setCompanyNm(param.getCompanyNm());
			resultCompanyVo.setRepresentativeNm(param.getRepresentativeNm());
			resultCompanyVo.setDateOfEstablishment(param.getDateOfEstablishment());
			resultCompanyVo.setJongmok(param.getJongmok());
			resultCompanyVo.setUptae(param.getUptae());
			if (param.getReceiptOfTaxBill().equals("1")) {//????????????
				userCompanyInfoVo.setBzn(param.getTaxBillBizNo());
				UserCompanyInfoDomain resultTaxVo = joinManager.getUserCompanyInfo(userCompanyInfoVo);
				if(resultTaxVo == null) {
					resultTaxVo = new UserCompanyInfoDomain();
					resultTaxVo.setBzn(param.getTaxBillBizNo());
				}
				resultTaxVo.setCompanyAddr(param.getCompanyAddr2());
				resultTaxVo.setCompanyNm(param.getCompanyNm2());
				resultTaxVo.setRepresentativeNm(param.getRepresentativeNm2());
				resultTaxVo.setDateOfEstablishment(param.getDateOfEstablishment2());
				resultTaxVo.setJongmok(param.getJongmok2());
				resultTaxVo.setUptae(param.getUptae2());
				joinManager.saveUserUserCompanyInfo(resultTaxVo);
			}
			joinManager.saveUserUserCompanyInfo(resultCompanyVo);
			
			resultUserVo.setCompanyBizNo(param.getCompanyBizNo());
			resultUserVo.setPhoneNumber(param.getPhoneNumber());
			resultUserVo.setReceiptOfTaxBill(param.getReceiptOfTaxBill());
			if(param.getReceiptOfTaxBill().equals("0")) //??????????????? ??????
				resultUserVo.setTaxBillBizNo(param.getCompanyBizNo());
			else if (param.getReceiptOfTaxBill().equals("1")) //????????????
				resultUserVo.setTaxBillBizNo(param.getTaxBillBizNo());
			else 
				resultUserVo.setTaxBillBizNo(null);
			
			joinManager.saveUserPremInfo(resultUserVo);
			resultMap.success();
		} else {
			resultMap.fail("????????? ?????????????????????. ?????? ????????? ????????????.");
		}
		return resultMap;
	}

	@Override
	public JsonObjectModel saveApcInfoComplete(JoinFormVo param) throws Exception {
		// TODO Auto-generated method stub
		BeanUtils beanUtil = new BeanUtils();
		JsonObjectModel resultMap = new JsonObjectModel();
					
		UserPremInfoDomain userPremInfoVo = (UserPremInfoDomain) beanUtil.toCopy(param, new UserPremInfoDomain());
		userPremInfoVo.setUserId(httpUtil.getSessionUserId());
		
		HttpSession session = httpUtil.getSession();
		String sessAuthCode = (String)session.getAttribute("authCode");
		String phoneCertifyYN = "N";
		
		if(sessAuthCode == null) {
			resultMap.fail("???????????? ????????? ???????????? ????????????.");
			return resultMap;
		} else {
			String authCode = param.getAuthcode();
			if(sessAuthCode.equals(authCode))
				phoneCertifyYN = "Y";
			else {
				resultMap.fail("??????????????? ????????????. ?????? ????????? ????????????.");
				return resultMap;
			}
		}
		
		UserPremInfoDomain resultUserVo = joinManager.getUserPremInfo(userPremInfoVo);
		
		String useStartYmd = FasDateUtil.getCurrentDayString();
		String useEndYmd = FasDateUtil.addDays(useStartYmd, 7);
		
		if (resultUserVo != null) {	
			resultUserVo.setPhoneCertifyYN(phoneCertifyYN);
			resultUserVo.setEmail(param.getEmail());
			resultUserVo.setMktEmailYn(param.getMarketingEmailYn());
			resultUserVo.setMktSmsYn(param.getMarketingSmsYn());
			resultUserVo.setUseStartYmd(useStartYmd);
			resultUserVo.setUseEndYmd(useEndYmd);
			joinManager.saveUserPremInfo(resultUserVo);
			resultMap.success();
		} else {
			resultMap.fail("????????? ?????????????????????. ?????? ????????? ????????????.");
		}
		return resultMap;
	}

	@SuppressWarnings("unchecked")
	@Override
	public JsonObjectModel getAuthCode(JoinFormVo formVo) throws Exception {
		// TODO Auto-generated method stub
		JsonObjectModel resultMap = new JsonObjectModel();
		
		HttpSession session = httpUtil.getSession();
		
		String phoneNumber = formVo.getPhoneNumber().replace("-","");
		String authCode = numberGen(4,1);
		String contentMessage = "FICO2000 ????????????["+authCode+"]??? ??????????????????.";
		session.setAttribute("authCode", authCode);
		
		JSONObject json = new JSONObject();
		json.put("type", "SMS");
		json.put("contentType", "COMM");
		json.put("countryCode","82");
		json.put("from", "0234076076");
		json.put("to", new JSONArray().add(phoneNumber));
		json.put("subject", "FICO2000 ??????");
		json.put("content", contentMessage);
		
		logger.info(json.toString());
		
		
		HttpClient client = HttpClientBuilder.create().build();
		HttpPost postRequest = new HttpPost("https://api-sens.ncloud.com/v1/sms/services/ncp:sms:kr:245947524685:ipatio_sms/messages"); //POST ????????? URL ?????? 
		postRequest.setHeader("Accept", "application/json");
		postRequest.setHeader("Connection", "keep-alive");
		postRequest.setHeader("Content-Type", "application/json; charset=utf-8");
		postRequest.addHeader("x-ncp-auth-key", "R30yfVLqVSYYfWf1Wfj4");
		postRequest.addHeader("x-ncp-service-secret", "1f063cdb75064f6bac396455facb0c5e");
		
		postRequest.setEntity(new StringEntity(json.toString(), "UTF-8"));

		HttpResponse response = client.execute(postRequest);

		//Response ??????
		if (response.getStatusLine().getStatusCode() >= 200 && response.getStatusLine().getStatusCode() < 300) {
			ResponseHandler<String> handler = new BasicResponseHandler();
			String body = handler.handleResponse(response);
			logger.info(body);
			resultMap.success();
		} else {
			resultMap.fail("???????????? ????????? ?????????????????????. ??????????????? ???????????????.");
			logger.info("response is error : " + response.getStatusLine().getStatusCode());
		}

		return resultMap;
	}
	
	/**
     * ????????? ??????????????? ?????? ????????? ????????????
     * @param len : ????????? ????????? ??????
     * @param dupCd : ?????? ?????? ?????? (1: ????????????, 2:????????????)
     * 
     * Created by ??????
     * http://niphyang.tistory.com
     */
    private String numberGen(int len, int dupCd ) {
        
        Random rand = new Random();
        String numStr = ""; //????????? ????????? ??????
        
        for(int i=0;i<len;i++) {
            
            //0~9 ?????? ?????? ??????
            String ran = Integer.toString(rand.nextInt(10));
            
            if(dupCd==1) {
                //?????? ????????? numStr??? append
                numStr += ran;
            }else if(dupCd==2) {
                //????????? ???????????? ????????? ????????? ?????? ????????? ????????????
                if(!numStr.contains(ran)) {
                    //????????? ?????? ????????? numStr??? append
                    numStr += ran;
                }else {
                    //????????? ????????? ???????????? ????????? ?????? ????????????
                    i-=1;
                }
            }
        }
        return numStr;
    }

	
	public void post(String requestURL, String jsonMessage) {

		try {
			HttpClient client = HttpClientBuilder.create().build(); // HttpClient ??????
			HttpPost postRequest = new HttpPost(requestURL); //POST ????????? URL ?????? 
			postRequest.setHeader("Accept", "application/json");
			postRequest.setHeader("Connection", "keep-alive");
			postRequest.setHeader("Content-Type", "application/json");
			postRequest.addHeader("x-api-key", ""); //KEY ?????? 
			//postRequest.addHeader("Authorization", token); // token ?????????

			postRequest.setEntity(new StringEntity(jsonMessage)); //json ????????? ?????? 

			HttpResponse response = client.execute(postRequest);

			//Response ??????
			if (response.getStatusLine().getStatusCode() == 200) {
				ResponseHandler<String> handler = new BasicResponseHandler();
				String body = handler.handleResponse(response);
				System.out.println(body);
			} else {
				System.out.println("response is error : " + response.getStatusLine().getStatusCode());
			}
		} catch (Exception e){
			System.err.println(e.toString());
		}
	}
	
	public void get(String requestURL) {
		try {
			HttpClient client = HttpClientBuilder.create().build(); // HttpClient ??????
			HttpGet getRequest = new HttpGet(requestURL); //GET ????????? URL ??????
			getRequest.addHeader("x-api-key", ""); //KEY ??????

			HttpResponse response = client.execute(getRequest);

			//Response ??????
			if (response.getStatusLine().getStatusCode() == 200) {
				ResponseHandler<String> handler = new BasicResponseHandler();
				String body = handler.handleResponse(response);
				System.out.println(body);
			} else {
				System.out.println("response is error : " + response.getStatusLine().getStatusCode());
			}

		} catch (Exception e){
			System.err.println(e.toString());
		}
	}

	@Override
	public JsonObjectModel selectApcProduct(JoinFormVo formVo) throws Exception {
		// TODO Auto-generated method stub
		JsonObjectModel resultMap = new JsonObjectModel();
					
		String userId = httpUtil.getSessionUserId();
		
		if(userId == null) {
			resultMap.success();
			return resultMap;
		}
		UserPremInfoDomain userPremInfoVo =  new UserPremInfoDomain();
		userPremInfoVo.setUserId(httpUtil.getSessionUserId());

		UserPremInfoDomain resultVo = joinManager.getUserPremInfo(userPremInfoVo);
		
		if (resultVo != null) {
			// ??????????????? ??????
			ProdInfoDomain productInfoVo = new ProdInfoDomain();
			productInfoVo.setProductId(resultVo.getProductId());
			ProdInfoDomain productResultVo = joinManager.getProductInfo(productInfoVo);
			
			SettlPeriodFormVo periodVo = new SettlPeriodFormVo();
			periodVo.calcUseYmdBaseToday(resultVo.getUseStartYmd(), resultVo.getUseEndYmd());
			resultMap.putData("periodInfo",periodVo);
			resultMap.putData("userPremInfo", resultVo);
			resultMap.putData("productInfo",productResultVo);
			resultMap.success();
		} else {
			// ????????? ??? ?????? ???????????? ??????
			resultMap.success();
		}
		return resultMap;
	}

	@Override
	public JsonObjectModel prepareSettlement(JoinFormVo formVo) throws Exception {
		// TODO Auto-generated method stub
		JsonObjectModel resultMap = new JsonObjectModel();
		
		String userId = httpUtil.getSessionUserId();
		
		if(userId == null) {
			resultMap.fail("????????? ??? ????????? ?????????.");
			return resultMap;
		}
		StoreInfoDomain storeInfo =  new StoreInfoDomain();
		storeInfo.setStoreName("FICO2000");
		StoreInfoDomain storeInfoVo = joinManager.getStoreInfo(storeInfo);
		
		UserInfoDomain userInfo = new UserInfoDomain();
		userInfo.setUserId(httpUtil.getSessionUserId());
		UserInfoDomain userInfoVo = userInfoManager.getUserInfo(userInfo);
		
		UserPremInfoDomain userPremInfo =  new UserPremInfoDomain();
		userPremInfo.setUserId(httpUtil.getSessionUserId());
		UserPremInfoDomain userPremInfoVo = joinManager.getUserPremInfo(userPremInfo);
		
		ProdInfoDomain prodInfo = new ProdInfoDomain();
		prodInfo.setProductId(formVo.getProductId());
		ProdInfoDomain prodInfoVo = joinManager.getProductInfo(prodInfo);
		
		if (storeInfoVo != null) {
			//0. ????????? ????????? ?????? ???????????? ??????
			boolean isLogin = loginiPatioPlatform(storeInfoVo, userInfoVo);
			logger.info("iPatio Member Login: "+isLogin);
			//1. iPatio ????????? ????????????
			if(!isLogin) {
				boolean isInit = initMemberiPatioPlatform(storeInfoVo, userInfoVo);
				if(isInit) {
					boolean isJoin = joinMemberiPatioPlatform(storeInfoVo, userInfoVo, userPremInfoVo);
					if(!isJoin) {
						resultMap.fail("?????????????????? ?????? ????????? ?????????????????????. [joinMemeber]");
						return resultMap;
					}
				}
			}
			JSONObject orderResult = orderProductiPatioPlatform(storeInfoVo, userInfoVo, prodInfoVo);
			if(orderResult != null) {
				JSONObject resultObj = (JSONObject)orderResult.get("result");
				JSONObject dataObj = (JSONObject)resultObj.get("data");
				String orderId = dataObj.get("orderId").toString();
				UserSettleHistDomain settleHistVo = new UserSettleHistDomain();
				settleHistVo.setStoreOrderId(orderId);
				settleHistVo.setProductId(prodInfo.getProductId());
				settleHistVo.setUserId(httpUtil.getSessionUserId());
				settleHistVo.setUseStartYmd(formVo.getUseStartYmd());
				settleHistVo.setUseEndYmd(formVo.getUseEndYmd());
				settleHistVo.setSettleMethod(formVo.getSettleMethod());
				settleHistVo.setCompleteYn("N"); //PG????????? ????????? ?????? Y
				settleHistVo.setSettleAmt(prodInfoVo.getPrice());
				settleHistVo.setOrderYmd(FasDateUtil.getCurrentDayString("yyyyMMddHHmmss"));
				joinManager.saveUserSettleHist(settleHistVo);
				resultMap.putData("orderInfo", dataObj);
				resultMap.putData("settlePreInfo",settleHistVo);
				resultMap.putData("productInfo", prodInfoVo);
			}
			resultMap.putData("storeInfo",storeInfoVo);
			resultMap.success();
		} else {
			// ????????? ??? ?????? ???????????? ??????
			resultMap.success();
		}
		return resultMap;
	}

	@SuppressWarnings("unchecked")
	private boolean initMemberiPatioPlatform(StoreInfoDomain storeInfoVo, UserInfoDomain userInfoVo) throws Exception {
		boolean isJoin = false;
		JSONObject json = new JSONObject();
		json.put("vendorId", storeInfoVo.getVendorId());
		json.put("appId", storeInfoVo.getAppId());
		json.put("pushReqNo", "1");
		json.put("isServiceAgreement", "1");
		json.put("isPushReceive", "1");
		
		HttpClient client = HttpClientBuilder.create().build();
		HttpPost postRequest = new HttpPost(storeInfoVo.getApiSvrUrl()+"/member/init"); //POST ????????? URL ?????? 
		postRequest.setHeader("Accept", "*/*");
		postRequest.setHeader("Connection", "keep-alive");
		postRequest.setHeader("Content-Type", "application/json; charset=utf-8");
		postRequest.setHeader("Cache-Control", "no-cache");
		
		postRequest.setEntity(new StringEntity(json.toString(), "UTF-8"));

		HttpResponse response = client.execute(postRequest);

		//Response ??????
		if (response.getStatusLine().getStatusCode() >= 200 && response.getStatusLine().getStatusCode() < 300) {
			ResponseHandler<String> handler = new BasicResponseHandler();
			String body = handler.handleResponse(response);
			logger.info(body);
			JSONParser parser = new JSONParser();
			JSONObject resultJson = (JSONObject) parser.parse(body);

			String returnCode = resultJson.get("return_code").toString();
		    
		    if("0000".equals(returnCode)) {
				HttpSession session = httpUtil.getSession();
				JSONObject resultObj = (JSONObject)resultJson.get("result");
				JSONObject dataObj = (JSONObject)resultObj.get("data");
				session.setAttribute("token", dataObj.get("token").toString());
				session.setAttribute("uId", dataObj.get("uId").toString());
				isJoin = true;
		    } else {
		    	isJoin = false;
		    }
		} else {
			isJoin = false;
			System.out.println("response is error : " + response.getStatusLine().getStatusCode());
		}
		return isJoin;
	}
	
	@SuppressWarnings("unchecked")
	private boolean joinMemberiPatioPlatform(StoreInfoDomain storeInfoVo, UserInfoDomain userInfoVo, UserPremInfoDomain userPremInfoVo) throws Exception {
		boolean isJoin = false;
		JSONObject json = new JSONObject();
		json.put("vendorId", storeInfoVo.getVendorId());
		json.put("appId", storeInfoVo.getAppId());
		json.put("loginId","fico_"+userInfoVo.getUserId());
		json.put("password", KeyGenerator.sha256(userInfoVo.getUserId()));
		json.put("mobilePhoneNumber", userPremInfoVo.getPhoneNumber().replace("-",""));
		json.put("memberName", userInfoVo.getUserNm());
		json.put("isIdentification", "1");
		json.put("email", userPremInfoVo.getEmail());
		json.put("phoneNo", userPremInfoVo.getPhoneNumber().replace("-",""));
		json.put("sexXd", "");
		json.put("firstSsn", "");
		json.put("joinPath", "");
		json.put("localeXd", "");
		json.put("isEmailReceive", "0");
		json.put("isSmsReceive", "0");
		json.put("isPushReceive", "0");
		json.put("isPrivacyPolicyAgreement", "1");
		json.put("isPrivacyInfoPrvAgr", "1");
		json.put("isServiceAgreement", "1");
		
		HttpSession session = httpUtil.getSession();
		String xAuthUid = (String)session.getAttribute("uId");
		String xAuthToken = (String)session.getAttribute("token");
		
		HttpClient client = HttpClientBuilder.create().build();
		HttpPost postRequest = new HttpPost(storeInfoVo.getApiSvrUrl()+"/member"); //POST ????????? URL ?????? 
		postRequest.setHeader("Accept", "*/*");
		postRequest.setHeader("Connection", "keep-alive");
		postRequest.setHeader("Content-Type", "application/json; charset=utf-8");
		postRequest.setHeader("X-Auth-Uid", xAuthUid);
		postRequest.setHeader("X-Auth-Token", xAuthToken);
		
		postRequest.setEntity(new StringEntity(json.toString(), "UTF-8"));

		HttpResponse response = client.execute(postRequest);

		//Response ??????
		if (response.getStatusLine().getStatusCode() >= 200 && response.getStatusLine().getStatusCode() < 300) {
			ResponseHandler<String> handler = new BasicResponseHandler();
			String body = handler.handleResponse(response);
			logger.info(body);
			JSONParser parser = new JSONParser();
			JSONObject resultJson = (JSONObject) parser.parse(body);
			String returnCode = resultJson.get("return_code").toString();
			if("0000".equals(returnCode))
				isJoin = true;
			else
				isJoin = false;
		} else {
			isJoin = false;
			System.out.println("response is error : " + response.getStatusLine().getStatusCode());
		}
		return isJoin;
	}
	
	@SuppressWarnings("unchecked")
	private boolean loginiPatioPlatform(StoreInfoDomain storeInfoVo, UserInfoDomain userInfoVo) throws Exception {
		
		boolean isLogin = false;
		JSONObject json = new JSONObject();
		json.put("vendorId", storeInfoVo.getVendorId());
		json.put("appId", storeInfoVo.getAppId());
		json.put("loginId","fico_"+userInfoVo.getUserId());
		json.put("password", KeyGenerator.sha256(userInfoVo.getUserId()));
		
		logger.info(json.toString());
		
		HttpClient client = HttpClientBuilder.create().build();
		HttpPost postRequest = new HttpPost(storeInfoVo.getApiSvrUrl()+"/member/login"); //POST ????????? URL ?????? 
		postRequest.setHeader("Accept", "*/*");
		postRequest.setHeader("Connection", "keep-alive");
		postRequest.setHeader("Content-Type", "application/json; charset=utf-8");
		postRequest.setHeader("Cache-Control", "no-cache");
		
		postRequest.setEntity(new StringEntity(json.toString(), "UTF-8"));

		HttpResponse response = client.execute(postRequest);

		//Response ??????
		if (response.getStatusLine().getStatusCode() >= 200 && response.getStatusLine().getStatusCode() < 300) {
			ResponseHandler<String> handler = new BasicResponseHandler();
			String body = handler.handleResponse(response);
			logger.info(body);
			JSONParser parser = new JSONParser();
			JSONObject resultJson = (JSONObject) parser.parse(body);
			
		    String returnCode = resultJson.get("return_code").toString();
		    
		    if("0000".equals(returnCode)) {
				HttpSession session = httpUtil.getSession();
				JSONObject resultObj = (JSONObject)resultJson.get("result");
				JSONObject dataObj = (JSONObject)resultObj.get("data");
				session.setAttribute("uId", dataObj.get("uId").toString());
				session.setAttribute("token", dataObj.get("token").toString());
				isLogin = true;
		    } else {
		    	isLogin = false;
		    }
		} else {
			isLogin = false;
			System.out.println("response is error : " + response.getStatusLine().getStatusCode());
		}
		return isLogin;
	}
	
	@SuppressWarnings("unchecked")
	private JSONObject orderProductiPatioPlatform(StoreInfoDomain storeInfoVo, UserInfoDomain userInfoVo, ProdInfoDomain productInfoVo) throws Exception {
		
		HttpSession session = httpUtil.getSession();
		String xAuthUid = (String)session.getAttribute("uId");
		String xAuthToken = (String)session.getAttribute("token");
		
		JSONObject json = new JSONObject();
		json.put("vendorId", storeInfoVo.getVendorId());
		json.put("subVendorId", "");
		json.put("uId", xAuthUid);
		json.put("appId", storeInfoVo.getAppId());
		JSONObject orderData = new JSONObject();
		json.put("orderData", orderData);
		orderData.put("orderPathXd", "2");
		orderData.put("orderTypeXd", "1");
		orderData.put("totOrderAmount", productInfoVo.getPrice().toString());
		orderData.put("totDcAmount", "0");
		orderData.put("totAddPaymentAmount", "0");
		orderData.put("totDeliveryCharge", "");
		orderData.put("paymentAmount", productInfoVo.getPrice().toString());
		orderData.put("transEvidenceXd", "");
		orderData.put("affiliateId", "");
		orderData.put("orginOrderId", "");
		orderData.put("orderProductTypeXd", "1");
		orderData.put("orderReturnXd", "10");
		orderData.put("orderProductStatusXd", "100");
		orderData.put("paymentTypeXd", "1");
		JSONObject deliveryData = new JSONObject();
		json.put("deliveryData", deliveryData);
		deliveryData.put("receiverName","");
		deliveryData.put("domesticForeignXd","I");
		deliveryData.put("postCode","");
		deliveryData.put("address","");
		deliveryData.put("detailAddress","");
		deliveryData.put("city","");
		deliveryData.put("province","");
		deliveryData.put("countryXd","KR");
		deliveryData.put("countryPhoneNo1","82");
		deliveryData.put("phoneNo1","");
		deliveryData.put("deliveryRequestDate","");
		deliveryData.put("isEachDeliveryReqXd","");
		deliveryData.put("deliveryRequestTerm","");
		deliveryData.put("giftMessage","");
		JSONObject benefitData = new JSONObject();
		json.put("benefitData", benefitData);
		benefitData.put("couponId","");
		benefitData.put("couponNo","");
		benefitData.put("benefitAmount","0");
		JSONArray productArray = new JSONArray();
		JSONObject productData = new JSONObject();
		productArray.add(productData);
		json.put("productData", productArray);
		productData.put("productId",productInfoVo.getStoreProductId());
		productData.put("unitProductId",productInfoVo.getStoreUnitProductId());
		productData.put("orderQty","1");
		
		HttpClient client = HttpClientBuilder.create().build();
		HttpPost postRequest = new HttpPost(storeInfoVo.getApiSvrUrl()+"/order"); //POST ????????? URL ?????? 
		postRequest.setHeader("Accept", "*/*");
		postRequest.setHeader("Connection", "keep-alive");
		postRequest.setHeader("Content-Type", "application/json; charset=utf-8");
		postRequest.setHeader("X-Auth-Uid", xAuthUid);
		postRequest.setHeader("X-Auth-Token", xAuthToken);
		
		postRequest.setEntity(new StringEntity(json.toString(), "UTF-8"));

		HttpResponse response = client.execute(postRequest);

		//Response ??????
		if (response.getStatusLine().getStatusCode() >= 200 && response.getStatusLine().getStatusCode() < 300) {
			ResponseHandler<String> handler = new BasicResponseHandler();
			String body = handler.handleResponse(response);
			logger.info(body);
			JSONParser parser = new JSONParser();
			JSONObject resultJson = (JSONObject) parser.parse(body);
			String returnCode = resultJson.get("return_code").toString();
			if("0000".equals(returnCode)) {
				return resultJson;
			}
			else
				return null;
		} else {
			System.out.println("response is error : " + response.getStatusLine().getStatusCode());
		}
		return null;
	}

	@Override
	public JsonObjectModel saveSettlResult(SettlementFormVo formVo) throws Exception {
		
		JsonObjectModel resultMap = new JsonObjectModel();
					
		String userId = httpUtil.getSessionUserId();
		
		if(userId == null) {
			resultMap.fail("????????? ??? ????????? ????????? ???????????????.");
			return resultMap;
		}
		UserPremInfoDomain userPremInfoVo =  new UserPremInfoDomain();
		userPremInfoVo.setUserId(httpUtil.getSessionUserId());

		UserPremInfoDomain userPremInfoResult = joinManager.getUserPremInfo(userPremInfoVo);
		
		UserSettleHistDomain userSettleHistVo = new UserSettleHistDomain();
		userSettleHistVo.setStoreOrderId(formVo.getStoreOrderId());
		
		UserSettleHistDomain userSettleHistResult = joinManager.getUserSettleHistByOrderId(userSettleHistVo);
		
		if (userSettleHistResult != null) {	
			
			StoreInfoDomain storeInfo =  new StoreInfoDomain();
			storeInfo.setStoreName("FICO2000");
			StoreInfoDomain storeInfoVo = joinManager.getStoreInfo(storeInfo);
			
			userSettleHistResult.setApvNo(formVo.getApvNo());
			userSettleHistResult.setApvYmd(formVo.getApvYmd());
			userSettleHistResult.setTrxNo(formVo.getTrxNo());
			userSettleHistResult.setCompleteYn("Y");
			userSettleHistResult.setSettleTs(FasDateUtil.getCurrentDate());
			joinManager.saveUserSettleHist(userSettleHistResult);
			userPremInfoResult.setUseStartYmd(userSettleHistResult.getUseStartYmd());
			userPremInfoResult.setUseEndYmd(userSettleHistResult.getUseEndYmd());
			joinManager.saveUserPremInfo(userPremInfoResult);
			
			JSONObject saveResultJson = saveSettlementiPatioPlatform(storeInfoVo,userSettleHistResult );
			if(!"0000".equals(saveResultJson.get("return_code")))
				resultMap.fail("???????????? ????????? ?????????????????????. ??????????????? ????????? ?????????.");
			else
				resultMap.success();
		} else {
			resultMap.fail("???????????? ????????? ?????????????????????. ??????????????? ????????? ?????????.");
		}
		return resultMap;
	}
	
	@SuppressWarnings("unchecked")
	private JSONObject saveSettlementiPatioPlatform(StoreInfoDomain storeInfoVo, UserSettleHistDomain settleInfoVo) throws Exception {
		
		HttpSession session = httpUtil.getSession();
		String xAuthUid = (String)session.getAttribute("uId");
		String xAuthToken = (String)session.getAttribute("token");
		
		JSONObject json = new JSONObject();
		json.put("SERVICE_ID", storeInfoVo.getPgServiceId());
		json.put("SERVICE_CODE", "0900");
		json.put("ORDER_DATE",settleInfoVo.getOrderYmd());
		json.put("RESPONSE_CODE", "0000");
		json.put("RESPONSE_MESSAGE", "??????");
		json.put("TRANSACTION_ID", settleInfoVo.getTrxNo());
		json.put("AUTH_AMOUNT", settleInfoVo.getSettleAmt());
		json.put("AUTH_DATE", settleInfoVo.getApvYmd());
		
		HttpClient client = HttpClientBuilder.create().build();
		HttpPost postRequest = new HttpPost(storeInfoVo.getApiSvrUrl()+"/app/order"); //POST ????????? URL ?????? 
		postRequest.setHeader("Accept", "*/*");
		postRequest.setHeader("Connection", "keep-alive");
		postRequest.setHeader("Content-Type", "application/json; charset=utf-8");
		postRequest.setHeader("X-Auth-Uid", xAuthUid);
		postRequest.setHeader("X-Auth-Token", xAuthToken);
		
		postRequest.setEntity(new StringEntity(json.toString(), "UTF-8"));

		HttpResponse response = client.execute(postRequest);

		//Response ??????
		if (response.getStatusLine().getStatusCode() >= 200 && response.getStatusLine().getStatusCode() < 300) {
			ResponseHandler<String> handler = new BasicResponseHandler();
			String body = handler.handleResponse(response);
			logger.info(body);
			JSONParser parser = new JSONParser();
			JSONObject resultJson = (JSONObject) parser.parse(body);
			String returnCode = resultJson.get("return_code").toString();
			if("0000".equals(returnCode)) {
				return resultJson;
			}
			else
				return null;
		} else {
			System.out.println("response is error : " + response.getStatusLine().getStatusCode());
		}
		return null;
	}

	@Override
	public JsonObjectModel selectSettlement(SettlementFormVo formVo) throws Exception {
		// TODO Auto-generated method stub
		JsonObjectModel resultMap = new JsonObjectModel();
		
		String userId = httpUtil.getSessionUserId();
		
		if(userId == null) {
			resultMap.fail("????????? ??? ????????? ????????? ???????????????.");
			return resultMap;
		}
		UserPremInfoDomain userPremInfoVo =  new UserPremInfoDomain();
		userPremInfoVo.setUserId(httpUtil.getSessionUserId());

		UserPremInfoDomain resultVo = joinManager.getUserPremInfo(userPremInfoVo);
		
		if (resultVo != null) {
			// ??????????????? ??????
			ProdInfoDomain productInfoVo = new ProdInfoDomain();
			productInfoVo.setProductId(resultVo.getProductId());
			ProdInfoDomain productResultVo = joinManager.getProductInfo(productInfoVo);
			
			UserSettleHistDomain userSettleHistVo = new UserSettleHistDomain();
			userSettleHistVo.setStoreOrderId(formVo.getStoreOrderId());
			UserSettleHistDomain userSettleHistResult = joinManager.getUserSettleHistByOrderId(userSettleHistVo);
			
			resultMap.putData("userPremInfo", resultVo);
			resultMap.putData("productInfo",productResultVo);
			resultMap.putData("settleInfo",userSettleHistResult);
			resultMap.success();
		} else {
			// ????????? ??? ?????? ???????????? ??????
			resultMap.fail("????????? ??? ????????? ????????? ???????????????.");
		}
		return resultMap;
	}
	
	@Override
	public JsonObjectModel selectSettlHistory(JoinFormVo formVo) throws Exception {
		// TODO Auto-generated method stub
		JsonObjectModel resultMap = new JsonObjectModel();
		
		String userId = httpUtil.getSessionUserId();
		
		if(userId == null) {
			resultMap.fail("????????? ??? ????????? ????????? ???????????????.");
			return resultMap;
		}
		UserPremInfoDomain userPremInfoVo =  new UserPremInfoDomain();
		userPremInfoVo.setUserId(httpUtil.getSessionUserId());

		UserPremInfoDomain resultVo = joinManager.getUserPremInfo(userPremInfoVo);
		
		if (resultVo != null) {
			List<ProdInfoDomain> productResultList = joinManager.getProductInfoAll();
			
			UserSettleHistDomain userSettleHistVo = new UserSettleHistDomain();
			userSettleHistVo.setUserId(httpUtil.getSessionUserId());
			List<UserSettleHistDomain> userSettleHistList = joinManager.getUserSettleHistByUserId(userSettleHistVo);
			
			logger.info(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>");
			logger.info(userSettleHistList);
			logger.info("<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<");
			
			resultMap.putData("userPremInfo", resultVo);
			resultMap.putData("productInfoList",productResultList);
			resultMap.putData("settleInfoList",userSettleHistList);
			resultMap.success();
		} else {
			// ????????? ??? ?????? ???????????? ??????
			resultMap.fail("????????? ??? ????????? ????????? ???????????????.");
		}
		return resultMap;
	}

}
