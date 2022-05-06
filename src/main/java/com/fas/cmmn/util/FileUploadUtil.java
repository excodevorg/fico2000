package com.fas.cmmn.util;

import java.io.File;
import java.io.IOException;
import java.math.BigDecimal;
import java.util.*;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.multipart.MultipartHttpServletRequest;

import com.fas.web.cmmn.util.ComConst;

public class FileUploadUtil {
	
	@Autowired
	private ComConst comConst;
	
	public List<String> fileUpload(MultipartHttpServletRequest mRequest) {

		boolean isSuccess = false;

		String uploadPath = comConst.getFileUploadPath();

		File dir = new File(uploadPath);

		if (!dir.isDirectory()) { 
			dir.mkdirs();
		}
		
		List<String> fileNameList = new ArrayList<String>();

		Iterator<String> iter = mRequest.getFileNames();
		
		while(iter.hasNext()) {

			String uploadFileName = iter.next();
			
			System.out.println(uploadFileName);

			MultipartFile mFile = mRequest.getFile(uploadFileName);

			String originalFileName = mFile.getOriginalFilename();
			
			int le = originalFileName.indexOf(".");
			
			String fileName01 = originalFileName.substring(0,  le);
			
			String ext = originalFileName.substring(le);

			String fileNameNew = KeyGenerator.getUUID();		
			
			String saveFileName = fileNameNew + ext;			

			if(saveFileName != null && !saveFileName.equals("")) {

				if(new File(uploadPath + saveFileName).exists()) {
					saveFileName = fileNameNew + "_" + System.currentTimeMillis() + ext;
				}
				
				try {

					mFile.transferTo(new File(uploadPath + saveFileName));

					isSuccess = true;				

				} catch (IllegalStateException e) {

					e.printStackTrace();

					isSuccess = false;

				} catch (IOException e) {

					e.printStackTrace();

					isSuccess = false;

				}
				
				fileNameList.add(saveFileName);

			} // if end

		} // while end

		return fileNameList;

	} // fileUpload end
	
	public Map fileUpload(MultipartFile mfile) {
		
		boolean isSuccess = false;
		
		Map resultMap = new HashMap();
		
		String originalFileName = mfile.getOriginalFilename();
		
		int le = originalFileName.indexOf(".");
		
		String fileName01 = originalFileName.substring(0,  le);
		
		String ext = originalFileName.substring(le);

		String fileNameNew = KeyGenerator.getUUID();		
		
		String saveFileName = fileNameNew + ext;	

		if(saveFileName != null && !saveFileName.equals("")) {

			if(new File(comConst.getFileUploadPath() + saveFileName).exists()) {
				saveFileName = fileNameNew + "_" + System.currentTimeMillis() + ext;
			}

			try {
				mfile.transferTo(new File(comConst.getFileUploadPath() + saveFileName));
				
				BigDecimal fileSizeByte = new BigDecimal(mfile.getSize());
				resultMap.put("saveFileSize", fileSizeByte);
				isSuccess = true;
			} catch (IllegalStateException e) {
				e.printStackTrace();
				isSuccess = false;
			} catch (IOException e) {
				e.printStackTrace();
				isSuccess = false;
			}
		
			resultMap.put("originalFileName", originalFileName);
			resultMap.put("saveFileName", saveFileName);
			if (isSuccess) {
				resultMap.put("uploadYn", "Y");
			} else {
				resultMap.put("uploadYn", "N");
			}
			
			if (resultMap.get("saveFileSize") == null) resultMap.put("saveFileSize", BigDecimal.ZERO);
			
			System.out.println("originalFileName >>>> " + originalFileName);
			System.out.println("saveFileName >>>> " + saveFileName);
			
		}
		
		return resultMap;
	}
	
	public Map imgFileUpload(MultipartFile mfile) {
		
		boolean isSuccess = false;
		
		Map resultMap = new HashMap();
		
		String originalFileName = mfile.getOriginalFilename();
		
		int le = originalFileName.indexOf(".");
		
		String fileName01 = originalFileName.substring(0,  le);
		
		String ext = originalFileName.substring(le);

		String fileNameNew = KeyGenerator.getUUID();		
		
		String saveFileName = fileNameNew + ext;	

		if(saveFileName != null && !saveFileName.equals("")) {

			if(new File(comConst.getImgFileUploadPath() + saveFileName).exists()) {
				saveFileName = fileNameNew + "_" + System.currentTimeMillis() + ext;
			}

			try {
				mfile.transferTo(new File(comConst.getImgFileUploadPath() + saveFileName));
				isSuccess = true;
			} catch (IllegalStateException e) {
				e.printStackTrace();
				isSuccess = false;
			} catch (IOException e) {
				e.printStackTrace();
				isSuccess = false;
			}
		
			resultMap.put("originalFileName", originalFileName);
			resultMap.put("saveFileName", saveFileName);
			if (isSuccess) {
				resultMap.put("uploadYn", "Y");
			} else {
				resultMap.put("uploadYn", "N");
			}
			
			System.out.println("originalFileName >>>> " + originalFileName);
			System.out.println("saveFileName >>>> " + saveFileName);
			
		}
		
		return resultMap;
	}
	
}
