package com.fas.model.fin.alys;

import java.math.BigDecimal;
import java.util.Map;

import com.fas.model.fin.EntpFinItemVo;

public class FinStatement {
	
	private Map<String, EntpFinItemVo> listMap;
	
	private EntpFinItemVo itemVo;
	
	public FinStatement(Map param) {
		listMap = param;
	}
	
	//Code Setting
	public FinStatement get(String itemCd) {
		itemVo = listMap.get(itemCd);
		return this;
	}	
	
	//Code Setting
	public void setItemCd(String itemCd) {
		itemVo = listMap.get(itemCd);
	}
	//값
	public BigDecimal getValue() {
		return itemVo.getFinAmt();
	}
	//구성비율
	public BigDecimal getCnfgRto() {
		BigDecimal totalAmt = BigDecimal.ZERO;
		BigDecimal resultAmt = BigDecimal.ZERO;
		
		//Balance
		if (itemVo.getFinSmdcd().substring(0,7).equals("FAS0301")) {
			totalAmt = totalAmt.add(listMap.get(FinBalanceItemConst.유동자산총합계).getFinAmt());
			totalAmt = totalAmt.add(listMap.get(FinBalanceItemConst.비유동자산총합계).getFinAmt());
		} else if (itemVo.getFinSmdcd().substring(0,7).equals("FAS0302")) {
		//Income
			totalAmt = totalAmt.add(listMap.get(FinIncomeItemConst.매출액).getFinAmt());
		} else if (itemVo.getFinSmdcd().substring(0,7).equals("FAS0303")) {
		//Cost
			totalAmt = BigDecimal.ZERO;
		}
		
		if (!totalAmt.equals(BigDecimal.ZERO)) {
			resultAmt = getValue().divide(totalAmt);
			resultAmt = resultAmt.multiply(new BigDecimal("100"));
			resultAmt = resultAmt.setScale(2, BigDecimal.ROUND_UP);
		}
		
		return resultAmt;
	}
	//계정명
	public String getFinSmdcdNm() {
		return itemVo.getFinSmdcdNm();
	}
	//결산년
	public String getStacYy() {
		return itemVo.getStacYy();
	}
	//구분 (자산 부채 자본 구분코드 등등등)
	public String getFinDcd() {
		return itemVo.getFinDcd();
	}
	//구분명 (자산 부채 자본 구분코드 등등등)
	public String getFinDcdNm() {
		return itemVo.getFinDcdNm();
	}
	//유동자산 등 큰 분류 코드명
	public String getFinLrdvcd() {
		return itemVo.getFinDcdNm();
	}
	//유동자산 등 (큰 분류 명)
	public String getFinLrdvcdNm() {
		return itemVo.getFinLrdvcdNm();
	}
	//당좌자산 등 중간 분류 코드명
	public String getFinMdvcd() {
		return itemVo.getFinMdvcd();
	}
	//당좌자산 등 (중간 분류 명)
	public String getFinMrdvcdNm() {
		return itemVo.getFinMdvcdNm();
	}
}
 