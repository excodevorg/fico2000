"use strict";
var async = true;
var svyService = new SvyService(false);

function SvyService(isAsync) {
	this.async = isAsync;
};


SvyService.prototype.svyItemList = function(svyId, callback){
    if (callback) {
        this.async = true;
    } else {
        this.async = false;
    }    
    return ajaxSend('/svy/SvyItemList.do',JSON.stringify({svyId:svyId}), 'POST',this.async,callback);
};