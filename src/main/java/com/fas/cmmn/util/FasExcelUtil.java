package com.fas.cmmn.util;

import java.io.*;
import java.util.*;

import org.apache.poi.hssf.usermodel.*;
import org.apache.poi.xssf.usermodel.*;
import org.hsqldb.lib.StringUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.fas.web.cmmn.util.ComConst;

@Component("FasExcelUtil")
public class FasExcelUtil {
	
	@Autowired
	private ComConst comConst;
	
	//1) FileNames
	private String fileName;
	
	//2) ColumnDefs
	private String columnDefs[];
	
	private int colLen = 0;
	
	private int rowStart = 1;
	
	//3) Result
	private List<Map> resultList;
	
	
	//1) fileName: 파일명
	//2) columDefs: 컬럼명, 없을경우 a1 a2....
	//3) type : 컬럼명 구분자 
	public List<Map> transExcelToList(String fileName, String columDef, int rowStart) throws Exception {
		
		this.fileName = fileName;
		if (columDef != null) {
			this.columnDefs = columDef.split(",");
			colLen = this.columnDefs.length;
		}
		
		if (rowStart == 0) this.rowStart = 1;
		
		if (StringUtil.isEmpty(this.fileName)) {
			return null;
		}
		
		int len = this.fileName.indexOf(".");
		
		String ext = this.fileName.substring(len);
		
		if (ext != null) {
			if (ext.toLowerCase().trim().equals(".xls")) {
				ExcelXls();
			} else if (ext.toLowerCase().trim().equals(".xlsx")) {
				ExcelXlsx();
			}
		}
		
		return this.resultList;
	}
	
	private void ExcelXls() throws Exception {
		
		FileInputStream fis=new FileInputStream(comConst.getExcelUploadPath() + this.fileName);
		HSSFWorkbook workbook=new HSSFWorkbook(fis);
		int rowindex=0;
		int columnindex=0;
		
		Map resultMap = null;
		
		this.resultList = new ArrayList<Map>();
		
		//시트 수 (첫번째에만 존재하므로 0을 준다)
		//만약 각 시트를 읽기위해서는 FOR문을 한번더 돌려준다
		HSSFSheet sheet=workbook.getSheetAt(0);
		//행의 수
		int rows=sheet.getPhysicalNumberOfRows();
		for(rowindex=rowStart;rowindex<rows;rowindex++){
		    //행을 읽는다
		    HSSFRow row=sheet.getRow(rowindex);
		    if(row !=null){
		        //셀의 수
		        int cells=row.getPhysicalNumberOfCells();
		        
		        resultMap = new HashMap();
		        
		        for(columnindex=0;columnindex<=cells;columnindex++){
		            //셀값을 읽는다
		            HSSFCell cell=row.getCell(columnindex);
		            String value="";
		            //셀이 빈값일경우를 위한 널체크
		            if(cell==null){
		                continue;
		            }else{
		                //타입별로 내용 읽기
		                switch (cell.getCellType()){
		                case HSSFCell.CELL_TYPE_FORMULA:
		                    value=cell.getCellFormula();
		                    break;
		                case HSSFCell.CELL_TYPE_NUMERIC:
		                    value=cell.getNumericCellValue()+"";
		                    break;
		                case HSSFCell.CELL_TYPE_STRING:
		                    value=cell.getStringCellValue()+"";
		                    break;
		                case HSSFCell.CELL_TYPE_BLANK:
		                    value=cell.getBooleanCellValue()+"";
		                    break;
		                case HSSFCell.CELL_TYPE_ERROR:
		                    value=cell.getErrorCellValue()+"";
		                    break;
		                }
		            }
		            
		            
		            
		            String key = "";
		            
		            if (colLen != 0) {
			            if (columnindex < colLen) {
			            	key = this.columnDefs[columnindex];
			            }
		            } else {
		            	key = "a" +columnindex; 
		            }
		            
		            System.out.println("각 셀 내용 :"+value + " : " + key);
		            
		            resultMap.put(key, value);
		            
		        	}
		        
		        	resultList.add(resultMap);
		        }
		}
	}
	
	private void ExcelXlsx() throws Exception {
		
		FileInputStream fis=new FileInputStream(comConst.getExcelUploadPath() + this.fileName);
		XSSFWorkbook workbook=new XSSFWorkbook(fis);
		int rowindex=0;
		int columnindex=0;
		
		Map resultMap = null;
		
		this.resultList = new ArrayList<Map>();
		//시트 수 (첫번째에만 존재하므로 0을 준다)
		//만약 각 시트를 읽기위해서는 FOR문을 한번더 돌려준다
		XSSFSheet sheet=workbook.getSheetAt(0);
		//행의 수
		int rows=sheet.getPhysicalNumberOfRows();
		for(rowindex=rowStart;rowindex<rows;rowindex++){
		    //행을읽는다
		    XSSFRow row=sheet.getRow(rowindex);
		    if(row !=null){
		        //셀의 수
		        resultMap = new HashMap();
		        int cells=row.getPhysicalNumberOfCells();
		        for(columnindex=0;columnindex<=cells;columnindex++){
		            //셀값을 읽는다
		            XSSFCell cell=row.getCell(columnindex);
		            String value="";
		            //셀이 빈값일경우를 위한 널체크
		            if(cell==null){
		                continue;
		            }else{
		                //타입별로 내용 읽기
		                switch (cell.getCellType()){
		                case XSSFCell.CELL_TYPE_FORMULA:
		                    value=cell.getCellFormula();
		                    break;
		                case XSSFCell.CELL_TYPE_NUMERIC:
		                    value=cell.getNumericCellValue()+"";
		                    break;
		                case XSSFCell.CELL_TYPE_STRING:
		                    value=cell.getStringCellValue()+"";
		                    break;
		                case XSSFCell.CELL_TYPE_BLANK:
		                    value=cell.getBooleanCellValue()+"";
		                    break;
		                case XSSFCell.CELL_TYPE_ERROR:
		                    value=cell.getErrorCellValue()+"";
		                    break;
		                }
		            }
		            
		            String key = "";
		            
		            if (colLen != 0) {
			            if (columnindex < colLen) {
			            	key = this.columnDefs[columnindex];
			            }
		            } else {
		            	key = "a" +columnindex; 
		            }
		            
		            System.out.println("각 셀 내용 :"+value + " : " + key);
		            
		            resultMap.put(key, value);
		            
		        	}
		        
		        	resultList.add(resultMap);
		    }
		}
		
	}
	
}
