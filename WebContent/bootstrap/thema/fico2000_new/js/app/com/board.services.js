/**
 * 게시판 관련 javascript 
 */

var async = true;

function BoardMngService(isAsync) {
	    this.async = isAsync;
};

BoardMngService.prototype.getBoardNewsAndLcteList=function(code,title,page,callback) {
    if (callback) {
		this.async = true;
	} else {
		this.async = false;
	}

console.log('getBoardNewsAndLcteList start');

	return ajaxSend('/com/BoardNewsAndLcteList.do', JSON.stringify({ code: code, title: title, page: page }), 'POST', this.async, callback);
};

BoardMngService.prototype.getBoardList=function(code,title,page,callback) {
    if (callback) {
		this.async = true;
	} else {
		this.async = false;
	}
	return ajaxSend('/com/BoardList.do', JSON.stringify({ code: code, title: title, page: page }), 'POST', this.async, callback);
};

BoardMngService.prototype.getBoardMngList = function (code, title, page, callback) {
    if (callback) {
		this.async = true;
	} else {
		this.async = false;
	}
	ajaxSend('/adm/BoardMngList.do', JSON.stringify({ code: code, title: title, page: page }), 'POST', this.async, callback);
};
BoardMngService.prototype.getBoardReplyMngList = function (code, mainNo, callback) {
    if (callback) {
		this.async = true;
	} else {
		this.async = false;
	}
	ajaxSend('/adm/BoardReplyMngList.do', JSON.stringify({ code: code, mainNo: mainNo }), 'POST', this.async, callback);
};
BoardMngService.prototype.getBoardMngLcteList = function (code, lcteUnqId, page, callback) {
    if (callback) {
		this.async = true;
	} else {
		this.async = false;
	}
	ajaxSend('/adm/BoardMngLcteList.do', JSON.stringify({ code: code, lcteUnqId: lcteUnqId, page: page }), 'POST', this.async, callback);
};
BoardMngService.prototype.getBoardMngInfo = function (code, mainNo,callback) {
    if (callback) {
		this.async = true;
	} else {
		this.async = false;
	}
	ajaxSend('/adm/BoardDtl.do', JSON.stringify({ code: code, mainNo: mainNo }), 'POST', this.async, callback);
};
BoardMngService.prototype.saveBoardMng = function (board, callback) {
    if (callback) {
		this.async = true;
	} else {
		this.async = false;
	}
	ajaxSend('/adm/BoardRgsn.do', JSON.stringify(board), 'POST', this.async, callback);
};
BoardMngService.prototype.updBoardMng = function (board, callback) {
    if (callback) {
		this.async = true;
	} else {
		this.async = false;
	}
	ajaxSend('/adm/BoardMdfc.do', JSON.stringify(board), 'POST', this.async, callback);
};
BoardMngService.prototype.delBoardMng = function (board, callback) {
    if (callback) {
		this.async = true;
	} else {
		this.async = false;
	}
	ajaxSend('/adm/BoardDel.do', JSON.stringify(board), 'POST', this.async, callback);
};
BoardMngService.prototype.getBoardList01 = function (code, title, page, limit, callback) {
    if (callback) {
		this.async = true;
	} else {
		this.async = false;
	}
	ajaxSend('/com/BoardList.do', JSON.stringify({ code: code, title: title, page: page, limit: limit }), 'POST', this.async, callback);
};
BoardMngService.prototype.getBoardReplyList = function (code, mainNo, callback) {
    if (callback) {
		this.async = true;
	} else {
		this.async = false;
	}
	ajaxSend('/com/BoardReplyList.do', JSON.stringify({ code: code, mainNo: mainNo }), 'POST', this.async, callback);
};
BoardMngService.prototype.getBoardUserList = function (code, title, callback) {
    if (callback) {
		this.async = true;
	} else {
		this.async = false;
	}
	ajaxSend('/com/BoardUserList.do', JSON.stringify({ code: code, title: title }), 'POST', this.async, callback);
};
BoardMngService.prototype.getBoardAllList = function (code, title, page, callback) {
    if (callback) {
		this.async = true;
	} else {
		this.async = false;
	}
	ajaxSend('/com/BoardAllList.do', JSON.stringify({ code: code, title: title }), 'POST', this.async, callback);
};
BoardMngService.prototype.getBoardInfo = function (code, mainNo, callback) {
    if (callback) {
		this.async = true;
	} else {
		this.async = false;
	}

	console.log(this.async);

	ajaxSend('/com/BoardDtl.do', JSON.stringify({ code: code, mainNo: mainNo }), 'POST', this.async, callback);
};
BoardMngService.prototype.getBoardLcteList = function (code, lcteUnqId, callback) {
    if (callback) {
		this.async = true;
	} else {
		this.async = false;
	}
	ajaxSend('/com/BoardLcteAllList.do', JSON.stringify({ code: code, lcteUnqId: lcteUnqId }), 'POST', this.async, callback);
};
BoardMngService.prototype.getBoardLcteUserList = function (code, lcteUnqId, callback) {
    if (callback) {
		this.async = true;
	} else {
		this.async = false;
	}
	ajaxSend('/com/BoardLcteUserAllList.do', JSON.stringify({ code: code, lcteUnqId: lcteUnqId }), 'POST', this.async, callback);
};
BoardMngService.prototype.saveBoard = function (board, callback) {
    if (callback) {
		this.async = true;
	} else {
		this.async = false;
	}
	ajaxSend('/com/BoardRgsn.do', JSON.stringify(board), 'POST', this.async, callback);
};
BoardMngService.prototype.updBoard = function (board, callback) {
    if (callback) {
		this.async = true;
	} else {
		this.async = false;
	}
	ajaxSend('/com/BoardMdfc.do', JSON.stringify(board), 'POST', this.async, callback);
};
BoardMngService.prototype.delBoard = function (board, callback) {
    if (callback) {
		this.async = true;
	} else {
		this.async = false;
	}

console.log('/com/BoardDel.do');

	ajaxSend('/com/BoardDel.do', JSON.stringify(board), 'POST', this.async, callback);
};
BoardMngService.prototype.getPopUpContent = function (boardMessage, imgUrl) {
    var message = '';
    var fileList = boardMessage.fileList;
    message += '<div class="row">';
    message += '<div class="col-sm-12">';
    message += '<div class="media">';
    //이미지 사진
    message += '<span class="media-left">';
	if (imgUrl) {
	message += '<img src="/bootstrap/thema/fico2000/img/profile-photos/"'+imgUrl+' class="img-circle img-sm" alt="Profile Picture">';
	} else { 
    message += '<img src="/bootstrap/thema/fico2000/img/profile-photos/8.png" class="img-circle img-sm" alt="Profile Picture">';
	}
    message += '</span>';
    //글쓴이
    message += '<div class="media-body">';
    message += '<div class="text-bold">' + boardMessage.name + ' 님</div>';
    message += '<small class="text-muted">' + boardMessage.userId + '</small>';
    message += '</div>';
    message += '</div>';
    message += '</div>';
    message += '<hr class="hr-sm visible-xs">';
    message += '<div class="col-sm-5 clearfix">';
    message += '<div class="pull-right text-right">';
    //글쓴일자
    message += '<p class="mar-no"><small class="text-muted">' + boardMessage.writeDate + '</small></p>';
    //첨부파일
    if (fileList != null && fileList.length > 0) {
        for (var i = 0; i < fileList.length; i++) {
            console.log('Message File >> ', fileList[i]);
            var fileUrl = '/cmmn/fileDownload.do?fileBscNo=' + fileList[i].flapMngmNo + '&fileDtlNo=' + fileList[i].flapDtlSrn;
            if (i != 0) message += ", "
            message += '<a href="' + fileUrl + '">';
            message += fileList[i].flapMngFileOrgNm;
            message += '</a>';
        }
    }
    if (fileList != null && fileList.length > 0) {
        message += '<i class="demo-psi-paperclip icon-fw"></i>';
    }
    message += '</div>';
    message += '</div>';
    message += '</div>';
    message += '<div class="pad-ver bord-ver">';
    //내용
    message += boardMessage.content;
    message += '<br/>';
    message += '</div>';
    var messageMap = {
        title: boardMessage.title,
        message: message
    };
    return messageMap;
};


function boardCallBack(data) {

	try {

		var responseData = JSON.parse(data);
		//console.log(responseData);
				
		if (responseData.success) {
			var size = responseData.data.list1.length;
			for (var i = 0; i < size; i++) {
				var board = responseData.data.list1[i];
				console.log(i, board);
							
				var txt = "<tr><td><a onClick=\"goNavi(4)\" class=\"btn-link\">"+board.title+"</a></td><td><span class=\"text-muted\"><i class=\"fa fa-clock-o\"></i>"+board.writeDate+"</span></td></tr>";
							
				$("#notiBoard tbody").append(txt);
			}
		}  
	
	} catch(e) {
		
	}

}



