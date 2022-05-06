package com.fas.model.fin.dao;

import java.util.List;

import com.fas.model.fin.domain.FinWallTrantDomain;
import com.fas.model.repository.FinWallTrantRepository;

import javax.annotation.Resource;

import org.springframework.stereotype.Repository;

@Repository("FinWallTrantDao")
public class FinWallTrantDao {

	/** Repository */  
    @Resource(name="finWallTrantRepository")
    private FinWallTrantRepository finWallTrantRepository;
        
    public List<FinWallTrantDomain> selectAllList() throws Exception {
    	return finWallTrantRepository.findAll();
    }
    
    public void updateFinWallTrant(FinWallTrantDomain domain) throws Exception {
    	finWallTrantRepository.saveAndFlush(domain);
    }
	
    public void insertFinWallTrant(FinWallTrantDomain domain) throws Exception {
    	finWallTrantRepository.saveAndFlush(domain);
    }	
}
