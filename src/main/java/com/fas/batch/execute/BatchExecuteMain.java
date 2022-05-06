package com.fas.batch.execute;

import com.fas.batch.com.AbstractBatchFramework;

public class BatchExecuteMain extends AbstractBatchFramework {

	public static void main(String args[]) throws Exception {
		
		try {
			resultCode = run(args);
		} catch(Throwable t) {
			t.printStackTrace();
			resultCode = -1;
		} finally {
			if (resultCode != -1) {
				resultCode = 0;
			}
			
			System.exit(resultCode);
		}
		
	}
	
}
