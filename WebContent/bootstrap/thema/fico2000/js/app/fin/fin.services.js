"use strict";
var async = true;
var finService = new FinService(false);

function FinService(isAsync) {
	this.async = isAsync;
};

FinService.prototype.saveCorporation = function(corportation, callback){
    if (callback) {
        this.async = true;
    } else {
        this.async = false;
    }
    return ajaxSend('/fin/CoporationRgsn.do', JSON.stringify(corportation),'POST',this.async,callback);
};

FinService.prototype.updCorporation = function(corportation, callback){
    if (callback) {
        this.async = true;
    } else {
        this.async = false;
    }    
    return ajaxSend('/fin/CoporationMdfc.do', JSON.stringify(corportation),'POST',this.async,callback);
};

FinService.prototype.delCorporation = function(corportation, callback){
    if (callback) {
        this.async = true;
    } else {
        this.async = false;
    }    
    return ajaxSend('/fin/CoporationDel.do', JSON.stringify(corportation),'POST',this.async,callback);
};

FinService.prototype.getCorporations = function(userid, callback){
    if (callback) {
        this.async = true;
    } else {
        this.async = false;
    }    
    return ajaxSend('/fin/CoporationList.do', JSON.stringify({userid:userid}),'POST',this.async,callback);
};

FinService.prototype.getEntpFinInfoList = function(userid, bzn, callback){
    if (callback) {
        this.async = true;
    } else {
        this.async = false;
    }    
    return ajaxSend('/fin/EntpFinInfoList.do', JSON.stringify({userid:userid, bzn:bzn}),'POST',this.async,callback);
};

FinService.prototype.getEntpFinInfoModel = function(userid, callback){
    if (callback) {
        this.async = true;
    } else {
        this.async = false;
    }    
    return ajaxSend('/fin/EntpFinInfoModel.do', JSON.stringify({userid:userid}),'POST',this.async,callback);
};

FinService.prototype.getEntpFinInfoTypeMap = function(userid, bzn, stacYy, callback){
    if (callback) {
        this.async = true;
    } else {
        this.async = false;
    }    
    return ajaxSend('/fin/EntpFinInfoTypeMap.do',JSON.stringify({userid:userid, bzn:bzn, stacYy:stacYy}), 'POST',this.async,callback);
};

FinService.prototype.saveEntpFinInfo = function(entpFinInfos, callback){
    if (callback) {
        this.async = true;
    } else {
        this.async = false;
    }    
    return ajaxSend('/fin/EntpFinInfoRgsn.do',JSON.stringify(entpFinInfos), 'POST',this.async,callback);
};

FinService.prototype.getYearList = function(limit, callback){
    if (callback) {
        this.async = true;
    } else {
        this.async = false;
    }    
    return ajaxSend('/cmmn/YearList.do',JSON.stringify({limit:limit}), 'POST',this.async,callback);
};

FinService.prototype.getAnalysisConList = function(userid, bzn, callback) {
    if (callback) {
        this.async = true;
    } else {
        this.async = false;
    }    
    return ajaxSend('/fin/AnalysisConList.do',JSON.stringify({userid:userid, bzn:bzn}), 'POST',this.async,callback);
};

FinService.prototype.getAnalysisUserConList = function(userid, callback) {
    if (callback) {
        this.async = true;
    } else {
        this.async = false;
    }    
    return ajaxSend('/fin/AnalysisUserConList.do',JSON.stringify({userid:userid}), 'POST',this.async,callback);
};

FinService.prototype.saveAnalysisCon = function(analysisCon, callback) {
    if (callback) {
        this.async = true;
    } else {
        this.async = false;
    }    
    return ajaxSend('/fin/AnalysisConRgsn.do',JSON.stringify(analysisCon), 'POST',this.async,callback);   
};

FinService.prototype.updAnalysisCon = function(analysisCon, callback) {
    if (callback) {
        this.async = true;
    } else {
        this.async = false;
    }    
    return ajaxSend('/fin/AnalysisConMdfc.do',JSON.stringify(analysisCon), 'POST',this.async,callback);   
};

FinService.prototype.delAnalysisCon = function(analysisCon, callback) {
    if (callback) {
        this.async = true;
    } else {
        this.async = false;
    }    
    return ajaxSend('/fin/AnalysisConDel.do',JSON.stringify(analysisCon), 'POST',this.async,callback);      
};

FinService.prototype.getAnalysisStacYyList = function(alyid, userid, bzn, callback) {
    if (callback) {
        this.async = true;
    } else {
        this.async = false;
    }    
    return ajaxSend('/fin/AnalysisStacYyList.do',JSON.stringify({alyid:alyid, userid:userid, bzn:bzn}), 'POST',this.async,callback);  
};

FinService.prototype.getAnalysisFnamStacYyList = function(alyid, userid, bzn, callback) {
    if (callback) {
        this.async = true;
    } else {
        this.async = false;
    }    
    return ajaxSend('/fin/AnalysisFnamStacYyList.do',JSON.stringify({alyid:alyid, userid:userid, bzn:bzn}), 'POST',this.async,callback);
};

FinService.prototype.getAnalysisFinDtTypeMap = function(alyid, userid, bzn, stacYy, callback){
    if (callback) {
        this.async = true;
    } else {
        this.async = false;
    }    
    return ajaxSend('/fin/AnalysisFinDtTypeMap.do',JSON.stringify({alyid:alyid, userid:userid, bzn:bzn, stacYy:stacYy}), 'POST',this.async,callback);
};

FinService.prototype.getAnalysisFinDtTypeMaps = function(alyid, userid, bzn, stacYys, callback){
    if (callback) {
        this.async = true;
    } else {
        this.async = false;
    }    
    return ajaxSend('/fin/AnalysisFinDtTypeMaps.do',JSON.stringify({alyid:alyid, userid:userid, bzn:bzn, stacYys:stacYys}), 'POST',this.async,callback);  
};

FinService.prototype.saveAnalysisFinDt = function(analysisCons, callback){
    if (callback) {
        this.async = true;
    } else {
        this.async = false;
    }    
    return ajaxSend('/fin/AnalysisFinDtRgsn.do', JSON.stringify(analysisCons), 'POST',this.async,callback);        
};

FinService.prototype.getQsrtMngRsltInfoList = function(alyid,stacYy, callback) {
    if (callback) {
        this.async = true;
    } else {
        this.async = false;
    }    
    return ajaxSend('/fin/QsrtMngRsltInfoList.do', JSON.stringify({alyid:alyid, stacYy:stacYy}), 'POST',this.async,callback);        
};

FinService.prototype.saveQsrtMngRsltInfo = function(alyid,stacYy,qsrtInfo, callback) {
    if (callback) {
        this.async = true;
    } else {
        this.async = false;
    }    
    return ajaxSend('/fin/QsrtMngRsltInfoRgsn.do', JSON.stringify({alyid:alyid, stacYy:stacYy, qsrtInfo:qsrtInfo}), 'POST',this.async,callback);
};

FinService.prototype.getQsrtFinRsltInfoList = function(alyid,stacYy, callback) {
    if (callback) {
        this.async = true;
    } else {
        this.async = false;
    }    
    return ajaxSend('/fin/QsrtFinRsltInfoList.do', JSON.stringify({alyid:alyid, stacYy:stacYy}), 'POST',this.async,callback);  
};

FinService.prototype.saveQsrtFinRsltInfo = function(alyid,stacYy,qsrtInfo, callback) {
    if (callback) {
        this.async = true;
    } else {
        this.async = false;
    }    
    return ajaxSend('/fin/QsrtFinRsltInfoRgsn.do', JSON.stringify({alyid:alyid, stacYy:stacYy, qsrtInfo:qsrtInfo}), 'POST',this.async,callback);   
};
    /////??????????????????????????????????????????
    //1. ????????????????????????????????????
FinService.prototype.getBusinessWorkPattern = function(alyid,stacYy,qsrtInfo, callback) {
    if (callback) {
        this.async = true;
    } else {
        this.async = false;
    }    
    return ajaxSend('/fin/BusinessWorkPattern.do', JSON.stringify({alyid:alyid, stacYy:stacYy, qsrtInfo:qsrtInfo}), 'POST',this.async,callback);        
};

   //2. ??????????????? ????????????
FinService.prototype.getSalesPredictList = function(alyid,stacYy,qsrtInfo, callback) {
    if (callback) {
        this.async = true;
    } else {
        this.async = false;
    }    
    return ajaxSend('/fin/SalesPredictList.do', JSON.stringify({alyid:alyid, stacYy:stacYy, qsrtInfo:qsrtInfo}), 'POST',this.async,callback);  
};

   //3. ???????????? ????????????
FinService.prototype.getCashIncomeList = function(alyid,stacYy,qsrtInfo, callback) {
    if (callback) {
        this.async = true;
    } else {
        this.async = false;
    }    
    return ajaxSend('/fin/CashIncomeList.do', JSON.stringify({alyid:alyid, stacYy:stacYy, qsrtInfo:qsrtInfo}), 'POST',this.async,callback);   
};

    //4. ????????? ?????????
FinService.prototype.getSalesCreditPredict = function(alyid,stacYy,qsrtInfo, callback) {
    if (callback) {
        this.async = true;
    } else {
        this.async = false;
    }    
    return ajaxSend('/fin/SalesCreditPredict.do', JSON.stringify({alyid:alyid, stacYy:stacYy, qsrtInfo:qsrtInfo}), 'POST',this.async,callback);        
};

    //5. ???????????? ????????????
FinService.prototype.getCashOutCome = function(alyid,stacYy,qsrtInfo, callback) {
    if (callback) {
        this.async = true;
    } else {
        this.async = false;
    }    
    return ajaxSend('/fin/CashOutCome.do', JSON.stringify({alyid:alyid, stacYy:stacYy, qsrtInfo:qsrtInfo}), 'POST',this.async,callback); 
};

    //6. ?????? ???????????? ????????????
FinService.prototype.getCashNtFlow = function(alyid,stacYy,qsrtInfo, callback) {
    if (callback) {
        this.async = true;
    } else {
        this.async = false;
    }    
    return ajaxSend('/fin/CashNtFlow.do', JSON.stringify({alyid:alyid, stacYy:stacYy, qsrtInfo:qsrtInfo}), 'POST',this.async,callback);          
};
    
    //7. ???????????? ????????????
FinService.prototype.getCashBdgtAmt = function(alyid,stacYy,qsrtInfo, callback) {
    if (callback) {
        this.async = true;
    } else {
        this.async = false;
    }    
    return ajaxSend('/fin/CashBdgtAmt.do', JSON.stringify({alyid:alyid, stacYy:stacYy, qsrtInfo:qsrtInfo}), 'POST',this.async,callback);        
};

    //8.????????? ?????????
FinService.prototype.getEstmIs = function(alyid,stacYy,qsrtInfo, callback) {
    if (callback) {
        this.async = true;
    } else {
        this.async = false;
    }    
    return ajaxSend('/fin/EstmIs.do', JSON.stringify({alyid:alyid, stacYy:stacYy, qsrtInfo:qsrtInfo}), 'POST',this.async,callback);        
};

    //1. ??????????????????????????????-?????????????????????
FinService.prototype.getFinInvtCashIncomeModify = function(alyid,stacYy,qsrtInfo, callback) {
    if (callback) {
        this.async = true;
    } else {
        this.async = false;
    }    
    return ajaxSend('/fin/FinInvtCashIncomeModify.do', JSON.stringify({alyid:alyid, stacYy:stacYy, qsrtInfo:qsrtInfo}), 'POST',this.async,callback);        
};

    //2. ??????????????????????????????-?????????????????????
FinService.prototype.getFinInvtCashOutcomeModify = function(alyid,stacYy,qsrtInfo, callback) {
    if (callback) {
        this.async = true;
    } else {
        this.async = false;
    }    
    return ajaxSend('/fin/FinInvtCashOutcomeModify.do', JSON.stringify({alyid:alyid, stacYy:stacYy, qsrtInfo:qsrtInfo}), 'POST',this.async,callback);        
};

    //3. ??????????????????????????????-?????????????????????    
FinService.prototype.getFinCashBdgtAmt = function(alyid,stacYy,qsrtInfo, callback) {
    if (callback) {
        this.async = true;
    } else {
        this.async = false;
    }    
    return ajaxSend('/fin/FinCashBdgtAmt.do', JSON.stringify({alyid:alyid, stacYy:stacYy, qsrtInfo:qsrtInfo}), 'POST',this.async,callback);        
};

    //4. ??????????????????????????????-??????????????????
FinService.prototype.getFinEstmls = function(alyid,stacYy,qsrtInfo, callback) {
    if (callback) {
        this.async = true;
    } else {
        this.async = false;
    }    
    return ajaxSend('/fin/FinEstmls.do', JSON.stringify({alyid:alyid, stacYy:stacYy, qsrtInfo:qsrtInfo}), 'POST',this.async,callback); 
};

    //??????????????????????????????
FinService.prototype.getFinRatio = function(alyid, userid, bzn, lastestYn, enslDcd, callback) {
    if (callback) {
        this.async = true;
    } else {
        this.async = false;
    }    
    return ajaxSend('/fin/AnalysisFinRatioMap.do', JSON.stringify({alyid:alyid, userid:userid, bzn:bzn, lastestYn:lastestYn,enslDcd:enslDcd}), 'POST',this.async,callback);        
};
    //??????????????????????????????
FinService.prototype.getBokFinRatio = function(tpbsClsfDcd, stacYy, callback) {
    if (callback) {
        this.async = true;
    } else {
        this.async = false;
    }    
    return ajaxSend('/fin/AnalysisBokFinRatioMap.do', JSON.stringify({tpbsClsfDcd:tpbsClsfDcd, stacYy:stacYy}), 'POST',true,callback);        
};
    //??????????????????????????????????????????
FinService.prototype.getBokFinStacYys = function(tpbsClsfDcd, callback) {
    if (callback) {
        return ajaxSend('/fin/AnalysisBokFinStacYyMap.do', JSON.stringify({tpbsClsfDcd:'ZZZ00'}), 'POST',true,callback);
    } else {
        return ajaxSend('/fin/AnalysisBokFinStacYyMap.do', JSON.stringify({tpbsClsfDcd:'ZZZ00'}), 'POST',this.async,callback);
    }         
};
    
    //WALL-TRANT
FinService.prototype.getWallTrantRatio = function(alyid, userid, bzn, lastestYn, enslDcd, callback) {
    if (callback) {
        this.async = true;
    } else {
        this.async = false;
    }
    return ajaxSend('/fin/AnalysisWallTrantMap.do', JSON.stringify({alyid:alyid, userid:userid, bzn:bzn, lastestYn:lastestYn, enslDcd:enslDcd}), 'POST',this.async,callback);
};

FinService.prototype.getWallTrantRatioList= function(callback) {
    if (callback) {
        this.async = true;
    } else {
        this.async = false;
    }    
    return ajaxSend('/fin/AnalysisWallTrantList.do', JSON.stringify({alyid:''}), 'POST',this.async,callback);    
};

FinService.prototype.getWallTrantRatioRgsn = function(walltrant,callback) {
    if (callback) {
        this.async = true;
    } else {
        this.async = false;
    }    
    return ajaxSend('/fin/AnalysisWallTrantRgsn.do', JSON.stringify(walltrant), 'POST',this.async,callback);
};

FinService.prototype.getWallTrantRatioMdfc = function(walltrant,callback) {
    if (callback) {
        this.async = true;
    } else {
        this.async = false;
    }    
    return ajaxSend('/fin/AnalysisWallTrantMdfc.do', JSON.stringify(walltrant), 'POST',true,callback);
};

    //decision
FinService.prototype.getDecisionRatio = function(alyid, userid, bzn, lastestYn, enslDcd, callback) {
    if (callback) {
        this.async = true;
    } else {
        this.async = false;
    }    
    return ajaxSend('/fin/AnalysisDecisionMap.do', JSON.stringify({alyid:alyid, userid:userid, bzn:bzn, lastestYn:lastestYn, enslDcd:enslDcd}), 'POST',this.async,callback);
};    