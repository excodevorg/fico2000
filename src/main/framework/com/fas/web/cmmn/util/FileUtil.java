package com.fas.web.cmmn.util;

import java.io.File;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.apache.commons.lang.StringUtils;

public class FileUtil {
	
	public static String FileSeparator = "/"; 
	
	public List<File> DirectoryFileList(List<File> fileList, String Path) throws Exception {
		
		File dir = new File(Path);
		File[] files = dir.listFiles();
		
		for (File file:files) {
			if (file.isFile()) {
				if ((file.getName().toLowerCase().endsWith(".jar")) || 
					(file.getName().toLowerCase().endsWith(".war")) || 
					(file.getName().toLowerCase().endsWith(".rar")) ||
					(file.getName().toLowerCase().endsWith(".ear")) || 
					(file.getName().toLowerCase().endsWith(".class")))
		        {
					fileList.add(file);
		        }
			} else if (file.isDirectory()) {
				try {
					DirectoryFileList(fileList, file.getCanonicalPath().toString());
				} catch(Exception e) {
					
				}
			}
		}
		
		return fileList;
	}
	
	public String[] currentDirectoryNameSplit(String Path) throws Exception {
		File dir = new File(Path);		
		return StringUtils.split(dir.getAbsolutePath(),File.separator);
	}
	
	public List<Map> DirectoryNameList(String Path) throws Exception {
		
		File dir = new File(Path);
		File[] files = dir.listFiles();
		List<Map> directoryList = new ArrayList<Map>();
		Map<String, String> param = null;		
		for (File file:files) {
			param = new HashMap<String, String>();
			System.out.println("FileName : " + file.getName() + "[" +file.isDirectory()+ "]" + "[" +file.isFile()+ "]");
			if (file.isDirectory()) {
				param.put("applyYN", ApplyDirectoryYN(file.getCanonicalPath().toString()));
				param.put("directoryName", file.getName());
				directoryList.add(param);
			}
		}
		return directoryList;
		
	}
	
	private String ApplyDirectoryYN(String Path) throws Exception {
		String reResult = "N";
		File dir = new File(Path);
		File[] files = dir.listFiles();
		int directoryCount = 0;
		int xmlFileCount = 0;
		
		for (File file:files) {
			if (file.isFile()) {
				if ((file.getName().toLowerCase().endsWith(".xml"))) {
					xmlFileCount++;
		        }
			} else if (file.isDirectory()) {
					directoryCount++;
			}
		}
		
		if (directoryCount == 0) {
			reResult = "E";
		} else {
			if (xmlFileCount > 0) {
				reResult = "Y";
			} else {
				reResult = "N";
			}
		}
		
		
		return reResult;
	}
	
	
	public List<Map> FileNameList(String Path) throws Exception {		
		File dir = new File(Path);
		File[] files = dir.listFiles();
		List<Map> fileList = new ArrayList<Map>();
		Map<String, String> param = null;	
		if (files != null) {
			for (File file:files) {
				System.out.println("FileName : " + file.getName() + "[" +file.isDirectory()+ "]" + "[" +file.isFile()+ "]");
				if (file.isFile()) {
					if ((file.getName().toLowerCase().endsWith(".xml"))) {
						param = new HashMap<String,String>();
						param.put("fileId", StringUtils.substring(file.getName(),0,file.getName().lastIndexOf(".")));
						param.put("fileName", file.getName());
						fileList.add(param);
					}
				}
			}
		}
		return fileList;		
	}
	
	
	
}
