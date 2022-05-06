package com.fas.model.fin.alys.exam;

import com.fas.cmmn.util.FasNumberUtil;

public class FinExam707 extends FinExam {

	@Override
	public boolean cal() {
		// TODO Auto-generated method stub
		boolean re = false;
		try {
			re = FasNumberUtil.isFirstGreater(this.finBokRatio , this.finRatio);
		} catch(Exception ex) {
			
		}
		return re;
	}

}
