package com.fas.model.com;

import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Component;

import com.fas.model.com.dao.ProdInfoDao;
import com.fas.model.com.dao.StoreInfoDao;
import com.fas.model.com.dao.UserCompanyInfoDao;
import com.fas.model.com.dao.UserPremInfoDao;
import com.fas.model.com.dao.UserSettleHistDao;
import com.fas.model.com.domain.ProdInfoDomain;
import com.fas.model.com.domain.StoreInfoDomain;
import com.fas.model.com.domain.UserCompanyInfoDomain;
import com.fas.model.com.domain.UserPremInfoDomain;
import com.fas.model.com.domain.UserSettleHistDomain;

@Component("JoinManager")
public class JoinManager {

	@Resource(name="UserPremInfoDao")
	private UserPremInfoDao userPremInfoDao;
	
	@Resource(name="UserCompanyInfoDao")
	private UserCompanyInfoDao userCompanyInfoDao;
	
	@Resource(name="ProdInfoDao")
	private ProdInfoDao prodInfoDao;
	
	@Resource(name="StoreInfoDao")
	private StoreInfoDao storeInfoDao;
	
	@Resource(name="UserSettleHistDao")
	private UserSettleHistDao userSettleHistDao;
	
	public UserPremInfoDomain getUserPremInfo(UserPremInfoDomain domain) throws Exception {
		return userPremInfoDao.select(domain);
	}

	public void saveUserPremInfo(UserPremInfoDomain domain) throws Exception {	
		userPremInfoDao.save(domain);
	}
	
	public UserCompanyInfoDomain getUserCompanyInfo(UserCompanyInfoDomain domain) throws Exception {
		return userCompanyInfoDao.select(domain);
	}

	public void saveUserUserCompanyInfo(UserCompanyInfoDomain domain) throws Exception {	
		userCompanyInfoDao.save(domain);
	}

	public ProdInfoDomain getProductInfo(ProdInfoDomain productInfoVo) throws Exception {
		// TODO Auto-generated method stub
		return prodInfoDao.select(productInfoVo);
	}
	
	public List<ProdInfoDomain> getProductInfoAll() throws Exception {
		// TODO Auto-generated method stub
		return prodInfoDao.selectAll();
	}
	
	public StoreInfoDomain getStoreInfo(StoreInfoDomain storeInfoVo) throws Exception {
		// TODO Auto-generated method stub
		return storeInfoDao.select(storeInfoVo);
	}
	
	public List<UserSettleHistDomain> getUserSettleHistByUserId(UserSettleHistDomain domain) throws Exception {
		String userId = domain.getUserId();
		return userSettleHistDao.selectByUserId(userId);
	}
	
	public UserSettleHistDomain getUserSettleHistByOrderId(UserSettleHistDomain domain) throws Exception {
		String storeOrderId = domain.getStoreOrderId();
		return userSettleHistDao.selectByOrderId(storeOrderId);
	}

	public void saveUserSettleHist(UserSettleHistDomain domain) throws Exception {	
		userSettleHistDao.save(domain);
	}
	
}
