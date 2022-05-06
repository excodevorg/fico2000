"use strict";

"use strict";
/**
 * 메뉴 관련 javascript 
 */

var async = true;

var fileService = new FileService(false);

var fileDtlInfos = [];

function FileService(isAsync) {
	    this.async = isAsync;
};

FileService.prototype.getFileList = function (flapMngmNo, callback) {
    var res = ajaxSend('/cmmn/fileList.do', JSON.stringify({ fileBscNo: flapMngmNo }), 'POST', this.async, callback); 
        return res;
};

FileService.prototype.getShowProgressBar = function (obj) {

    if (obj) {
        obj.reset();
        
        var data = {}
        var fileMap = {}

        for (var i = 0; i < fileDtlInfos.length; i++) {

                fileMap = {};
                data = {};
                
                fileMap = {
                     originalFileName:fileDtlInfos[i].flapMngFileOrgNm
                    ,saveFileName:fileDtlInfos[i].flapMngFileNm
                    ,saveFileSize:fileDtlInfos[i].flapMngFileSzie                    
                    ,uploadYn:'Y'
                };
                
                data = {
                    data:{
                        fileMap:fileMap
                    }
                }

                console.log("data >>>>>>>>>>>>>>>>>>> " , data);

                obj.createProgress(fileDtlInfos[i].flapMngFileOrgNm, '', fileDtlInfos[i].flapMngFileSzie, data);
        }
    }
};

FileService.prototype.sendFile = function (inputValue, callback) {
    var formData = new FormData();
    formData.append("name", "Name");
    formData.append("file", inputValue.files[0]);
    return ajaxMultiPartSend('/cmmn/uploadFile.do', formData, 'POST', this.async, callback);
};

FileService.prototype.sendExcelFile = function (excelFileName, columDef, rowStart, callback) {
    return ajaxSend('/cmmn/excelImport.do', JSON.stringify({ excelFileName: excelFileName, columDef: columDef, rowStart: rowStart }), 'POST', this.async, callback);    
};

FileService.prototype.getFileDtlInfos = function() {
    return fileDtlInfos;
}

FileService.prototype.setFileDtlInfos = function(list) {

    fileDtlInfos = [];

    for (var i = 0; i < list.length; i++) {
        fileDtlInfos.push({
                                flapMngmNo: list[i].flapMngmNo,
                                flapDtlSrn: list[i].flapDtlSrn,
                                flapMngFileNm: list[i].flapMngFileNm,
                                flapMngFileOrgNm: list[i].flapMngFileOrgNm,
                                flapMngFileSzie: list[i].flapMngFileSzie,
                                delYn: list[i].delYn
                            });
    }

    return fileDtlInfos;
}

FileService.prototype.reset = function() {
    fileDtlInfos = [];
}

FileService.prototype.uploadFile = function(id) {
  return $("#"+id).uploadFile({
                        url: "/cmmn/uploadFile.do",
                        dragDrop: true,
                        fileName: "file",
                        returnType: "json",
                        showDelete: true,
                        showDownload:true,
                        statusBarWidth:600,
                        dragdropWidth:600,
                        deleteCallback: function (res, pd) {
                            console.log("deleteCallback >>> " , res);
                            console.log("deleteCallback >>> " , this.responses);
                            console.log("deleteCallback >>> " , this);
                            console.log("pd >>> " , pd);
                            var files = [];
                            for (var i = 0; i < fileDtlInfos.length; i++) {
                                if (fileDtlInfos[i].flapMngFileNm != res.data.fileMap.saveFileName) {
                                    files.push(fileDtlInfos[i]);
                                }
                            }

                            fileDtlInfos = [];
                            fileDtlInfos = files;

                            console.log("fileDtlInfos >>> ", fileDtlInfos);

                            pd.statusbar.hide(); //You choice.

                        },
                        downloadCallback:function(res,pd)
                        {
                            console.log("filename >>> " , res);
                            console.log("filename >>> " , pd);

                            if ((res.data.fileMap.flapMngmNo != null) && (res.data.fileMap.flapMngmNo != '')) {
                                if (res.data.fileMap.flapDtlSrn > 0) {
                                    window.location.href='/cmmn/fileDownload.do?fileBscNo='+res.data.fileMap.flapMngmNo+'&fileDtlNo='+res.data.fileMap.flapDtlSrn;
                                } else {
                                    if ((res.data.fileMap.saveFileName != null) && (res.data.fileMap.saveFileName != '')) {
                                        window.location.href='/cmmn/fileNameDownload.do?fileName='+res.data.fileMap.saveFileName;
                                    }
                                }
                            } else {
                                if ((res.data.fileMap.saveFileName != null) && (res.data.fileMap.saveFileName != '')) {
                                    window.location.href='/cmmn/fileNameDownload.do?fileName='+res.data.fileMap.saveFileName;
                                }
                            }
                        },
                        onSuccess:function(files,data,xhr,pd)
                        {

                            var res = data;
                            fileDtlInfos.push({
                                flapMngmNo: '',
                                flapDtlSrn: 0,
                                flapMngFileNm: res.data.fileMap.saveFileName,
                                flapMngFileOrgNm: res.data.fileMap.originalFileName,
                                flapMngFileSzie: res.data.fileMap.saveFileSize,
                                delYn: 'N'
                            });

                            console.log("fileDtlInfos >>>> ", fileDtlInfos);

                        },
                        onError: function(files,status,errMsg,pd)
                        {
                            console.log('error ' + status + errMsg);
                            bootbox.alert('파일 업로드 중 오류가 발생하였습니다.');
                        }
                     });
}

FileService.prototype.setAsync = function (isAsync) {
    this.async = isAsync;
};