"use strict";
var async = true;
var joinService = new JoinService(false);

function JoinService(isAsync) {
	this.async = isAsync;
};

JoinService.prototype.joinStatusCheck = function(product, callback){
    if (callback) {
        this.async = true;
    } else {
        this.async = false;
    }
    return ajaxSend('/join/JoinStatusCheck.do', JSON.stringify(product),'POST',this.async,callback);
};

JoinService.prototype.acceptTheTerms = function(product, callback){
    if (callback) {
        this.async = true;
    } else {
        this.async = false;
    }
    return ajaxSend('/join/acceptTheTerms.do', JSON.stringify(product),'POST',this.async,callback);
};

JoinService.prototype.selectApcInfo = function(product, callback){
    if (callback) {
        this.async = true;
    } else {
        this.async = false;
    }
    return ajaxSend('/join/selectApcInfo.do', JSON.stringify(product),'POST',this.async,callback);
};

JoinService.prototype.saveApcInfo = function(apcInfo, callback){
    if (callback) {
        this.async = true;
    } else {
        this.async = false;
    }
    return ajaxSend('/join/saveApcInfo.do', JSON.stringify(apcInfo),'POST',this.async,callback);
};

JoinService.prototype.saveApcInfoComplete = function(apcInfo, callback){
    if (callback) {
        this.async = true;
    } else {
        this.async = false;
    }
    return ajaxSend('/join/saveApcInfoComplete.do', JSON.stringify(apcInfo),'POST',this.async,callback);
};

JoinService.prototype.getAuthCode = function(apcInfo, callback){
    if (callback) {
        this.async = true;
    } else {
        this.async = false;
    }
    return ajaxSend('/join/getAuthCode.do', JSON.stringify(apcInfo),'POST',this.async,callback);
};

JoinService.prototype.selectApcProduct = function(param, callback){
    if (callback) {
        this.async = true;
    } else {
        this.async = false;
    }
    return ajaxSend('/join/selectApcProduct.do', JSON.stringify(param),'POST',this.async,callback);
};

JoinService.prototype.selectSettlHistory = function(param, callback){
    if (callback) {
        this.async = true;
    } else {
        this.async = false;
    }
    return ajaxSend('/join/selectSettlHistory.do', JSON.stringify(param),'POST',this.async,callback);
};

JoinService.prototype.prepareSettlement = function(param, callback){
    if (callback) {
        this.async = true;
    } else {
        this.async = false;
    }
    return ajaxSend('/join/prepareSettlement.do', JSON.stringify(param),'POST',this.async,callback);
};

JoinService.prototype.saveSettlResult = function(param, callback){
    if (callback) {
        this.async = true;
    } else {
        this.async = false;
    }
    return ajaxSend('/join/saveSettlResult.do', JSON.stringify(param),'POST',this.async,callback);
};

JoinService.prototype.selectSettlement = function(param, callback){
    if (callback) {
        this.async = true;
    } else {
        this.async = false;
    }
    return ajaxSend('/join/selectSettlement.do', JSON.stringify(param),'POST',this.async,callback);
};