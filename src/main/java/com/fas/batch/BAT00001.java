package com.fas.batch;

import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Repository;

import com.fas.batch.execute.BatchExecute;
import com.fas.model.com.BOKManager;

@Repository("BAT00001")
public class BAT00001 extends BatchExecute{

	@Resource(name="BOKManager")
	private BOKManager bokManager;
	
	public int execute(Map map) throws Exception {
		
		bokManager.bokDataListSave();
		
		bokManager.bokFinRatioListSave();
		
		return 0;
	}
	
	
}
