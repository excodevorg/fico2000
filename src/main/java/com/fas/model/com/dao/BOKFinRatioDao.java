package com.fas.model.com.dao;

import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Repository;

import com.fas.model.com.domain.BOKFinRatioDomain;
import com.fas.model.repository.BOKFinRatioRepository;

@Repository("BOKFinRatioDao")
public class BOKFinRatioDao {

	@Resource(name="BOKFinRatioRepository")
	private BOKFinRatioRepository bOKFinRatioRepository;
	
	public BOKFinRatioDomain insert(BOKFinRatioDomain param) throws Exception {
		return bOKFinRatioRepository.saveAndFlush(param);
	}
	
	public BOKFinRatioDomain update(BOKFinRatioDomain param) throws Exception {
		return bOKFinRatioRepository.saveAndFlush(param);
	}
	
	public List<BOKFinRatioDomain> selectAll() throws Exception {
		return bOKFinRatioRepository.findAll();
	}
	
	public BOKFinRatioDomain selectRatio(BOKFinRatioDomain param) throws Exception {
		List<BOKFinRatioDomain> list = bOKFinRatioRepository.findByItemCodeAndTpbsClsfDcdAndEnslDcdAndBaseYear(param.getItemCode(), param.getTpbsClsfDcd(), param.getEnslDcd(), param.getBaseYear());
		if (list == null) return null;
		return list.get(0);
	}
	
	public List<BOKFinRatioDomain> selectLastestRatio(BOKFinRatioDomain param) throws Exception {
		List<BOKFinRatioDomain> list = bOKFinRatioRepository.findByItemCodeAndTpbsClsfDcdAndEnslDcdOrderByGroupCodeAscAndItemCodeAscBaseYearDesc(param.getItemCode(), param.getTpbsClsfDcd(), param.getEnslDcd());
		return list;		
	}
	
	public List<BOKFinRatioDomain> selectRatioList(BOKFinRatioDomain param) throws Exception {
		List<BOKFinRatioDomain> list = bOKFinRatioRepository.findByTpbsClsfDcdAndEnslDcdOrderByBaseYearAscGroupCodeAscAndItemCodeAsc(param.getTpbsClsfDcd(), param.getEnslDcd());
		return list;		
	}
	
	public List<BOKFinRatioDomain> selectBokRatioList(BOKFinRatioDomain param) throws Exception {
		List<BOKFinRatioDomain> list = bOKFinRatioRepository.findByTpbsClsfDcdAndEnslDcdBaseYearAndGroupCodeOrderByItemCodeAsc(param.getTpbsClsfDcd(), param.getEnslDcd(), param.getBaseYear(), param.getGroupCode());
		return list;		
	}
	
	public List<BOKFinRatioDomain> selectBokRatioBaseYearList(BOKFinRatioDomain param) throws Exception {
		List<BOKFinRatioDomain> list = bOKFinRatioRepository.findByBaseYearOrderByStatCodeAscItemCodeAscTpbsClsfDcdAsc( param.getBaseYear());
		return list;		
	}
}
