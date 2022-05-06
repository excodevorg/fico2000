package com.fas.web.cmmn.util;

import java.net.URLEncoder;
import java.util.HashMap;
import java.util.Map;
import java.util.Enumeration;

import javax.servlet.ServletOutputStream;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import net.sf.jxls.transformer.XLSTransformer;

import org.apache.commons.lang.StringUtils;
import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.apache.poi.hssf.usermodel.HSSFCell;
import org.apache.poi.hssf.usermodel.HSSFRow;
import org.apache.poi.hssf.usermodel.HSSFSheet;
import org.apache.poi.hssf.usermodel.HSSFWorkbook;
import org.apache.poi.ss.usermodel.Workbook;
import org.springframework.core.io.Resource;
import org.springframework.web.servlet.view.InternalResourceView;

public class JxlsView extends InternalResourceView {
	
	private Log log = LogFactory.getLog(this.getClass());
	
	/** The content type for an Excel response */
	private static final String CONTENT_TYPE = "application/vnd.ms-excel";

	/** The extension to look for existing templates */
	private static final String EXTENSION = ".xls";


	private String url;

	private boolean existFile = false;
	
	private Resource resource;
	
	
	public Resource getResource() {
		return resource;
	}

	public void setResource(Resource resource) {
		this.resource = resource;
	}

	/**
	 * Default Constructor.
	 * Sets the content type of the view to "application/vnd.ms-excel".
	 */
	public JxlsView() {
		setContentType(CONTENT_TYPE);
	}

	@Override
	protected boolean generatesDownloadContent() {
		return true;
	}
	
	
	
	public void setExistFile(boolean existFile) {
		this.existFile = existFile;
	}

	public boolean isExistFile() {
		return existFile;
	}

	@Override
	protected void renderMergedOutputModel(Map<String, Object> model, HttpServletRequest request,
			HttpServletResponse response) throws Exception {
		// Determine which request handle to expose to the RequestDispatcher.
				HttpServletRequest requestToExpose = getRequestToExpose(request);

		// Expose the model object as request attributes.
		exposeModelAsRequestAttributes(model, requestToExpose);
		
		Map<String, Object> map =  exposeRequestAttributesAsMap(request);
		String contentDisposition = "attachment; filename=";
		if(StringUtils.isNotEmpty((String)map.get("filename"))) {
			
			contentDisposition +=  URLEncoder.encode((String)map.get("filename"),"UTF-8");
		} else {
			contentDisposition +=  this.getResource().getFilename();
		}
		
		response.setHeader("Content-Disposition", contentDisposition);
		 
		if(log.isDebugEnabled()) {
			log.debug("URL ="+url);
		}
		Workbook workbook;
		if (resource != null) {
			workbook = new XLSTransformer().transformXLS(this.resource.getInputStream(),map);
		}
		else {
			workbook = new HSSFWorkbook();
			logger.debug("Created Excel Workbook from scratch");
		}

		buildExcelDocument(model, workbook, request, response);

		// Set the content type.
		response.setContentType(getContentType());

		// Should we set the content length here?
		// response.setContentLength(workbook.getBytes().length);

		// Flush byte array to servlet output stream.
		ServletOutputStream out = response.getOutputStream();
		workbook.write(out);
		 
		out.flush();
	}
	
	protected Map<String, Object> exposeRequestAttributesAsMap(HttpServletRequest request) throws Exception {
		Map<String, Object> map = new HashMap<String, Object>();

		for (Enumeration e = request.getAttributeNames() ; e.hasMoreElements() ;) {
			String name = (String) e.nextElement();
			map.put(name,request.getAttribute(name));
	     }
		return map;
	}

	/**
	 * Subclasses must implement this method to create an Excel HSSFWorkbook document,
	 * given the model.
	 * @param model the model Map
	 * @param workbook the Excel workbook to complete
	 * @param request in case we need locale etc. Shouldn't look at attributes.
	 * @param response in case we need to set cookies. Shouldn't write to it.
	 */
	protected void buildExcelDocument(
			Map model, Workbook workbook, HttpServletRequest request, HttpServletResponse response)
			throws Exception {
		
	}


	/**
	 * Convenient method to obtain the cell in the given sheet, row and column.
	 * Creates the row and the cell if they still doesn't already exist.
	 * Thus, the column can be passed as an int, the method making the needed downcasts.
	 * @param sheet a sheet object. The first sheet is usually obtained by workbook.getSheetAt(0)
	 * @param row thr row number
	 * @param col the column number
	 * @return the HSSFCell
	 */
	protected HSSFCell getCell(HSSFSheet sheet, int row, int col) {
		HSSFRow sheetRow = sheet.getRow(row);
		if (sheetRow == null) {
			sheetRow = sheet.createRow(row);
		}
		HSSFCell cell = sheetRow.getCell(col);
		if (cell == null) {
			cell = sheetRow.createCell(col);
		}
		return cell;
	}

	/**
	 * Convenient method to set a String as text content in a cell.
	 * @param cell the cell in which the text must be put
	 * @param text the text to put in the cell
	 */
	protected void setText(HSSFCell cell, String text) {
		cell.setCellType(HSSFCell.CELL_TYPE_STRING);
		cell.setCellValue(text);
	}
	
}