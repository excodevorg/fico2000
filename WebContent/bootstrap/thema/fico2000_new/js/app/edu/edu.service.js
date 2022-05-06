var async = true;

var eduService = new EducationService(true);

function EducationService(isAsync) {
	this.async = isAsync;
};

EducationService.prototype.getEducations = function (lcteNm, callback) {
    if (callback) {
		this.async = true;
	} else {
		this.async = false;
	}
    return ajaxSend('/edu/EduInfoList.do', JSON.stringify({ lcteNm: lcteNm }),'POST',this.async,callback);
};

EducationService.prototype.getEducation = function (lcteUnqId, callback) {
    if (callback) {
		this.async = true;
	} else {
		this.async = false;
	}

    return ajaxSend('/edu/EduInfoDtl.do', JSON.stringify({ lcteUnqId: lcteUnqId }),'POST',this.async,callback);
};

EducationService.prototype.applyRgsn = function (applys, callback) {
    if (callback) {
		this.async = true;
	} else {
		this.async = false;
	}

    return ajaxSend('/edu/ApplyRgsn.do',JSON.stringify(applys),'POST',this.async,callback);    
};

EducationService.prototype.getMyEducationList = function (callback) {
    if (callback) {
		this.async = true;
	} else {
		this.async = false;
	}

    return ajaxSend('/edu/MyEduInfoPgrsList.do', JSON.stringify({ lctePgrsScd: '' }),'POST',this.async,callback);            
};

EducationService.prototype.getMyEducationUserList = function (applyPrgScd, completeYn, callback) {
    if (callback) {
		this.async = true;
	} else {
		this.async = false;
	}

    return ajaxSend('/edu/MyEduInfoPgrsUserList.do', JSON.stringify({ applyPrgScd: applyPrgScd,  completeYn: completeYn}),'POST',this.async,callback);            
};