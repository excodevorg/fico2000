package com.fas.cmmn.web;

import java.util.Map;
import java.util.HashMap;

import javax.annotation.Resource;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.servlet.view.RedirectView;

import com.fas.cmmn.formVo.OAuthFormVo;
import com.fas.cmmn.service.OAuth2Svc;
import com.fas.web.cmmn.dataaccess.util.JsonObjectModel;
import com.fas.web.cmmn.util.HttpUtil;
import com.fas.web.cmmn.util.StringUtil;

@Controller
public class OAuth2Controller {

	private static Log logger = LogFactory.getLog(OAuth2Controller.class);
	
	/**CategoryService */
	@Resource(name="GoogleOAuth2Svc")
	private OAuth2Svc googleOAuth; 
	
	@Resource(name="FacebookOAuth2Svc")
	private OAuth2Svc facebookOAuth; 
	
	@Resource(name="TwitterOAuth2Svc")
	private OAuth2Svc twitterOAuth; 
	
	@Resource(name="KakaoOAuth2Svc")
	private OAuth2Svc kakaoOAuth; 	
	
	@Autowired
	private HttpUtil httpUtil;
	
	/*
	 * Google social
	 */	
	
	@RequestMapping(value="/google/OAuth2CallUrl.do")
	@ResponseBody
	public Map GoogleOAuth2CallUrlCtl(@ModelAttribute("OAuthFormVo") OAuthFormVo param, ModelMap model) throws Exception {
		
		System.out.println("Start controller..... ");
		
		String callUrl = googleOAuth.oauth2CallUrl();
		logger.debug("callUrl >> " + callUrl);
		
		System.out.println("callUrl " + callUrl);
		
		JsonObjectModel resultMap = new JsonObjectModel();
		
		resultMap.putData("callUrl", callUrl);
		
		return resultMap.getMap();
	}
	
	@RequestMapping(value="/google/OAuth2CallUrl01.do")
	@ResponseBody
	public Map GoogleOAuth2CallUrl01Ctl(@ModelAttribute("OAuthFormVo") OAuthFormVo param, ModelMap model) throws Exception {
		
		System.out.println("Start controller..... ");
		
		String callUrl = googleOAuth.oauth2CallUrl();
		logger.debug("callUrl >> " + callUrl);
		
		System.out.println("callUrl " + callUrl);
		
		JsonObjectModel resultMap = new JsonObjectModel();
		
		httpUtil.getSession().setAttribute("returnUrl", "MAIN02000M00");
		
		resultMap.putData("callUrl", callUrl);
		
		return resultMap.getMap();
	}
	
	@RequestMapping(value="/google/OAuth2callback.do")
	public ModelAndView GoogleOAuth2callback(@RequestParam(value="code",required=false) String code, ModelMap model) throws Exception {
		System.out.println("Start Google call back....");
		Map resultMap = googleOAuth.oauth2callback(code);
		
		logger.debug(">>> resultMap >>>> " + resultMap);
		
		//model.addAttribute("socialMap", resultMap);	
		
		httpUtil.getSession().setAttribute("socialMap", resultMap);
		
		RedirectView redirect = new RedirectView("/");
	    redirect.setExposeModelAttributes(false);	
		
		return new ModelAndView(redirect);
	}
	
	@RequestMapping(value="/social/SocialLoginInfo.do")
	@ResponseBody
	public Map SocialLoginInfoCtrll(@ModelAttribute("OAuthFormVo") OAuthFormVo param, ModelMap model) throws Exception {
		
		JsonObjectModel resultMap = new JsonObjectModel();
		
		Map result = googleOAuth.socialLoginInfo();
		
		if (result != null) {
			resultMap.putData("email", StringUtil.nvl(""+result.get("email")));
			resultMap.putData("name", StringUtil.nvl(""+result.get("name")));
			resultMap.putData("id", StringUtil.nvl(""+result.get("id")));
			resultMap.putData("socialKind", StringUtil.nvl(""+result.get("socialKind")));
		} else {
			resultMap.putData("email", StringUtil.nvl(""));
			resultMap.putData("name", StringUtil.nvl(""));
			resultMap.putData("id", StringUtil.nvl(""));
			resultMap.putData("socialKind", StringUtil.nvl(""));
		}
		
		return resultMap.getMap();
	}
	
	/*
	 * Face book social
	 */
	@RequestMapping(value="/facebook/OAuth2CallUrl.do")
	@ResponseBody
	public Map FacebookOAuth2CallUrlCtl(@ModelAttribute("OAuthFormVo") OAuthFormVo param, ModelMap model) throws Exception {
		
		System.out.println("Start controller..... ");
		
		String callUrl = facebookOAuth.oauth2CallUrl();
		logger.debug("callUrl >> " + callUrl);
		
		System.out.println("callUrl " + callUrl);
		
		JsonObjectModel resultMap = new JsonObjectModel();
		
		resultMap.putData("callUrl", callUrl);
		
		return resultMap.getMap();
	}
	
	/*
	 * Face book social
	 */
	@RequestMapping(value="/facebook/OAuth2CallUrl01.do")
	@ResponseBody
	public Map FacebookOAuth2CallUrl01Ctl(@ModelAttribute("OAuthFormVo") OAuthFormVo param, ModelMap model) throws Exception {
		
		System.out.println("Start controller..... ");
		
		String callUrl = facebookOAuth.oauth2CallUrl();
		logger.debug("callUrl >> " + callUrl);
		
		System.out.println("callUrl " + callUrl);
		
		JsonObjectModel resultMap = new JsonObjectModel();
		
		httpUtil.getSession().setAttribute("returnUrl", "MAIN02000M00");
		
		resultMap.putData("callUrl", callUrl);
		
		return resultMap.getMap();
	}	
	
	@RequestMapping(value="/facebook/OAuth2callback.do")
	public ModelAndView FacebookOAuth2callback(@RequestParam(value="code",required=false) String code, ModelMap model) throws Exception {
		System.out.println("Start Google call back....");
		Map resultMap = facebookOAuth.oauth2callback(code);
		
		//model.addAttribute("socialMap", resultMap);		
		
		httpUtil.getSession().setAttribute("socialMap", resultMap);
		
		RedirectView redirect = new RedirectView("/");
	    redirect.setExposeModelAttributes(false);	
		
		return new ModelAndView(redirect);
	}	
	
	
	/*
	 * Twitter social
	 */
	@RequestMapping(value="/twitter/OAuth2CallUrl.do")
	@ResponseBody
	public Map TwitterOAuth2CallUrlCtl(@ModelAttribute("OAuthFormVo") OAuthFormVo param, ModelMap model) throws Exception {
		
		System.out.println("Start controller..... ");
		
		String callUrl = twitterOAuth.oauth2CallUrl();
		logger.debug("callUrl >> " + callUrl);
		
		System.out.println("callUrl " + callUrl);
		
		JsonObjectModel resultMap = new JsonObjectModel();
		
		resultMap.putData("callUrl", callUrl);
		
		return resultMap.getMap();
	}
	/*
	 * Twitter social
	 */
	@RequestMapping(value="/twitter/OAuth2CallUrl01.do")
	@ResponseBody
	public Map TwitterOAuth2CallUrl01Ctl(@ModelAttribute("OAuthFormVo") OAuthFormVo param, ModelMap model) throws Exception {
		
		System.out.println("Start controller..... ");
		
		String callUrl = twitterOAuth.oauth2CallUrl();
		logger.debug("callUrl >> " + callUrl);
		
		System.out.println("callUrl " + callUrl);
		
		JsonObjectModel resultMap = new JsonObjectModel();
		
		httpUtil.getSession().setAttribute("returnUrl", "MAIN02000M00");
		
		resultMap.putData("callUrl", callUrl);
		
		return resultMap.getMap();
	}	
	
	@RequestMapping(value="/twitter/OAuth2callback.do")
	public ModelAndView TwitterOAuth2callback(@RequestParam("oauth_token") String oauthToken, @RequestParam("oauth_verifier") String oauthVerifier, ModelMap model) throws Exception {
		System.out.println("Start Twitter call back....");
		
		logger.debug(">>>> ModelAndView Start twitter >>>>>");
		Map resultMap = twitterOAuth.oauth2callback(oauthToken, oauthVerifier);

		//model.addAttribute("socialMap", resultMap);
		
		httpUtil.getSession().setAttribute("socialMap", resultMap);
		
		RedirectView redirect = new RedirectView("/"); 
	    redirect.setExposeModelAttributes(false);	
	    
	    logger.debug(">>>> ModelAndView Start End >>>>>");
		
		return new ModelAndView(redirect);
	}
	
	
	/*
	 * Kakao social
	 */
	@RequestMapping(value="/kakao/OAuth2CallUrl.do")
	@ResponseBody
	public Map KakaoOAuth2CallUrlCtl(@ModelAttribute("OAuthFormVo") OAuthFormVo param, ModelMap model) throws Exception {
		
		System.out.println("Start controller..... ");
		
		String callUrl = kakaoOAuth.oauth2CallUrl();
		logger.debug("callUrl >> " + callUrl);
		
		System.out.println("callUrl " + callUrl);
		
		JsonObjectModel resultMap = new JsonObjectModel();
		
		resultMap.putData("callUrl", callUrl);
		
		return resultMap.getMap();
	}
	
	/*
	 * Kakao social
	 */
	@RequestMapping(value="/kakao/OAuth2CallUrl01.do")
	@ResponseBody
	public Map KakaoOAuth2CallUrl01Ctl(@ModelAttribute("OAuthFormVo") OAuthFormVo param, ModelMap model) throws Exception {
		
		System.out.println("Start controller..... ");
		
		String callUrl = kakaoOAuth.oauth2CallUrl();
		logger.debug("callUrl >> " + callUrl);
		
		System.out.println("callUrl " + callUrl);
		
		JsonObjectModel resultMap = new JsonObjectModel();
		
		httpUtil.getSession().setAttribute("returnUrl", "MAIN02000M00");
		
		resultMap.putData("callUrl", callUrl);
		
		return resultMap.getMap();
	}	
	
	@RequestMapping(value="/kakao/OAuth2callback.do")
	public ModelAndView KakaoOAuth2callback(@RequestParam(value="code",required=false) String code, ModelMap model) throws Exception {
		System.out.println("Start kako call back....");
		Map resultMap = kakaoOAuth.oauth2callback(code);
		
		//model.addAttribute("socialMap", resultMap);		
		
		httpUtil.getSession().setAttribute("socialMap", resultMap);
		
		RedirectView redirect = new RedirectView("/"); 
	    
		logger.debug(">>>> ModelAndView Start End >>>>> " + resultMap);
		
		return new ModelAndView(redirect);
	}	
	
	
}
