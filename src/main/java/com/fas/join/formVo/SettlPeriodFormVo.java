package com.fas.join.formVo;

import java.text.SimpleDateFormat;
import java.util.Date;

import com.fas.cmmn.formVo.CmmFormVo;
import com.fas.cmmn.util.FasDateUtil;

public class SettlPeriodFormVo  extends CmmFormVo {
	
	private static final long serialVersionUID = 3760130877203588816L;
	
	private String useStartYmd;
	private String useEndYmd;
	
	public String getUseStartYmd() {
		return useStartYmd;
	}
	public void setUseStartYmd(String useStartYmd) {
		this.useStartYmd = useStartYmd;
	}
	public String getUseEndYmd() {
		return useEndYmd;
	}
	public void setUseEndYmd(String useEndYmd) {
		this.useEndYmd = useEndYmd;
	}
	
	public void calcUseYmdBaseToday(String beforeStartYmd, String beforeEndYmd) {
		try {
			String todayString = FasDateUtil.getCurrentDayString();

			SimpleDateFormat transFormat = new SimpleDateFormat("yyyyMMdd");

			Date today = transFormat.parse(todayString);
			Date endDay = transFormat.parse(beforeEndYmd);

			if(today.compareTo(endDay) >= 0)
				this.useStartYmd = todayString;
			else
				this.useStartYmd = beforeEndYmd;
			
			this.useEndYmd = FasDateUtil.addDays(this.useStartYmd, 30);
			
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}
	
	public static void main(String[] args) throws Exception {
		String start = "20191006";
		String end = "20191013";
		
		SettlPeriodFormVo vo = new SettlPeriodFormVo();
		vo.calcUseYmdBaseToday(start, end);
		System.out.println(vo.getUseStartYmd());
		System.out.println(vo.getUseEndYmd());
	}

}
