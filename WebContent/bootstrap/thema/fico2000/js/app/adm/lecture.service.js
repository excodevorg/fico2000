"use strict";
/**
 * 메뉴 관련 javascript 
 */

var async = true;

var lectureService = new LectureService(false);

function LectureService(isAsync) {
	this.async = isAsync;
};

LectureService.prototype.getLectures = function (lcteNm, page, callback) {
	if (callback) {
		this.async = true;
	} else {
		this.async = false;
	}
	return ajaxSend('/adm/LcteInfoInq.do', JSON.stringify({ lcteNm: lcteNm, page: page }),'POST',this.async,callback);
};

LectureService.prototype.getAllLectures = function (page, callback) {
	if (callback) {
		this.async = true;
	} else {
		this.async = false;
	}
	return ajaxSend('/adm/LcteInfoAllInq.do', JSON.stringify({ lcteNm: '', page: page }),'POST',this.async,callback);	
};

LectureService.prototype.addLecture = function (lecture, callback) {
	if (callback) {
		this.async = true;
	} else {
		this.async = false;
	}
	return ajaxSend('/adm/LcteInfoRgsn.do', JSON.stringify(lecture),'POST',this.async,callback);	
};

LectureService.prototype.updLecture = function (lecture, callback) {
	if (callback) {
		this.async = true;
	} else {
		this.async = false;
	}	
	return ajaxSend('/adm/LcteInfoMdfc.do', JSON.stringify(lecture),'POST',this.async,callback);	
};

LectureService.prototype.delLecture = function (lecture, callback) {
	if (callback) {
		this.async = true;
	} else {
		this.async = false;
	}
	return ajaxSend('/adm/LcteInfoDel.do', JSON.stringify(lecture),'POST',this.async,callback);	
};

LectureService.prototype.getApplyLctes = function (lcteUnqId, callback) {
	if (callback) {
		this.async = true;
	} else {
		this.async = false;
	}	
	return ajaxSend('/adm/ApplyLcteList.do', JSON.stringify({ lcteUnqId: lcteUnqId }),'POST',this.async,callback);	
};

LectureService.prototype.activePrgsScd = function (applys, callback) {
	if (callback) {
		this.async = true;
	} else {
		this.async = false;
	}
	return ajaxSend('/adm/ApplyPrgScdMdfc.do', JSON.stringify(applys),'POST',this.async,callback);	
};

LectureService.prototype.activeComplete = function (applys, callback) {
	if (callback) {
		this.async = true;
	} else {
		this.async = false;
	}	
	return ajaxSend('/adm/ApplyCompleteMdfc.do', JSON.stringify(applys),'POST',this.async,callback);	
};

LectureService.prototype.delApply = function (applys, callback) {
	if (callback) {
		this.async = true;
	} else {
		this.async = false;
	}	
	return ajaxSend('/adm/ApplyDel.do', JSON.stringify(applys),'POST',this.async,callback);	
};