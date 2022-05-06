var CMU03000M00 = new CMU03000M00Component();

var boardCode = 'FAS900205';

var boardMngService = new BoardMngService(true);

function CMU03000M00Component() {

};

CMU03000M00Component.prototype.ngOnInit = function () {
    $("#grid-list").bootgrid();
    CMU03000M00.onSearch();
};

CMU03000M00Component.prototype.onSearch = function () {
    
    $(".alert.alert-danger").hide(true);

    $("#grid-list").bootgrid('destroy');

    $("#grid-list").bootgrid({
        ajax: true,
        ajaxSettings: {
            method: "POST",
            cache: false,
            contentType: "application/json;charset=utf-8",
            async:true,
			error:function(e) {
                console.log(e);
                overlay.hide();
                bootbox.alert('[ERROR] 시스템 오류 발생('+e.status+' '+e.statusText+')');
    	    },
        },
        requestHandler:function(request) {

            console.log(request);

            pageNo = request.current;
            limit = request.rowCount;

            if (limit < 0) {
                limit = 100000; 
                pageNo = 1;
            } 

            var params = {
                title : request.searchPhrase,
                code : boardCode,
                page : pageNo,
                limit : limit
            }

            return JSON.stringify(params);
        },
        responseHandler:function(response)
        {

            console.log("response : " , response);
            console.log("board ajax >>> " , response.data);

            var boardData = {
                "current": response.data.pageNum1,
                "rowCount": limit,
                "rows": response.data.list1,
                "total": response.data.list1Size
            };

            /* To accumulate custom parameter with the request object */
            return boardData;
        },
        url: "/com/BoardUserList.do",
        selection: true,
        multiSelect: true,
        rowSelect: true,
        keepSelection: true,
        labels: {
            search: '제목을 입력하세요.'
        },
        formatters: {
            "fileTypeRenderer": function(column, row)
            {
                console.log(row.flapMngmNo);
                var flag = ''
                if (row.flapMngmNo != null) {
                    if (row.flapMngmNo != '') flag = '파일첨부';
                }

                return flag;
            },
            "titleTypeRenderer": function(column, row)
            {
                console.log(row.mainNo);
                console.log(row.relNo);
                var title = row.title;
                if (row.mainNo != row.relNo) {
                    title = "&nbsp;<img src='/bootstrap/thema/fico2000/img/reply_arrow.png' width='16' height='16'/>&nbsp;" + title
                } 

                return title;
            }
        }
    }).on("click.rs.jquery.bootgrid", function(e, columns, rows){
        console.log('click >> ', rows.mainNo);
        var params = '"code='+boardCode+'*mainNo='+rows.mainNo+'"';
        toMove('CMU03000M02',params);
    }); 
};


CMU03000M00Component.prototype.goBizPlate = function() {

        var title = '비즈니스 plate 업무범위 코드';
        var message = '<div class="panel">';

        message += '<div class="panel-body">';

        message += '<div class="nano" style="height:630px">'

        message += '<div class="nano-content pad-all">'

        //1) 재무컨설팅
        message += '<ul class="list-group">';
        message += '<li class="list-group-item active">1. 재무컨설팅</li>';
        message += '<li class="list-group-item">';
        message += '<p>';
        message += '자산은 『체격』, 손익은 『 체력』, 현금흐름은 『혈액』이다. ';
        message += '기업이 과거, 현재 그리고 미래의 성장 동력을 파악해주는 컨설팅.';
        message += '사회공헌차원에서 마련한  본 홈페이지에서 귀사의 재무컨설팅을 ';
        message += '해보시기 바랍니다. ';
        message += '그리고 세밀한 재무컨설팅이 필요하시면 문의 바랍니다.';
        message += '</p>';
        message += '</li>';
        message += '</ul>';

        //2) 기업 매도
        message += '<ul class="list-group">';
        message += '<li class="list-group-item active">2. 기업매도</li>';
        message += '<li class="list-group-item">&nbsp;&nbsp;2-1) 기업을 단순히 매도하고자 하는 경우</li>';
        message += '<li class="list-group-item">&nbsp;&nbsp;2-2) 제2세 경영자가 있는 경우 제2세 경영자에게 물려주고자 하는 경우 </li>';
        message += '<li class="list-group-item">&nbsp;&nbsp;2-3) 승계 경영자가 없어 기업은퇴를 원하는 경영자 </li>';
        message += '<li class="list-group-item">&nbsp;&nbsp;2-4) 지분을 매도하고자 하는 경우 </li>';
        message += '<li class="list-group-item">&nbsp;&nbsp;2-5) 기타 </li>';
        message += '</ul>';

        //3) 기업 인수
        message += '<ul class="list-group">';
        message += '<li class="list-group-item active">3. 기업인수</li>';
        message += '<li class="list-group-item">&nbsp;&nbsp;3-1) 기업의 성장을 목적으로 기업을 인수하고자 하는 경영자</li>';
        message += '</ul>';

        //4) 기업투자자금조달
        message += '<ul class="list-group">';
        message += '<li class="list-group-item active">4. 기업투자자금조달</li>';
        message += '<li class="list-group-item">&nbsp;&nbsp;4-1) 기업가치성장을 위해 투자를 원하는 기업</li>';
        message += '<li class="list-group-item">&nbsp;&nbsp;4-2) IPO를 위해 투자를 원하는 기업 </li>';
        message += '<li class="list-group-item">&nbsp;&nbsp;4-3) 기타 </li>';
        message += '<li class="list-group-item">&nbsp;&nbsp;(투자재원은 PEF이므로 창업 및 벤처투자는 본 업무에 포함되지 않습니다.) </li>';
        message += '</ul>';

        //5) 기업인수자금(M&A financing)
        message += '<ul class="list-group">';
        message += '<li class="list-group-item active">5. 기업인수자금(M&A financing)</li>';
        message += '<li class="list-group-item">&nbsp;&nbsp;5-1) 기업인수 시 자금이 필요한 경우 </li>';
        message += '</ul>';

        //6) 경영자2세 컨설팅
        message += '<ul class="list-group">';
        message += '<li class="list-group-item active">6. 경영자2세 컨설팅</li>';
        message += '<li class="list-group-item">&nbsp;&nbsp;6-1) 경영자2세가 1명인 경우 순조로이 경영권을 이양 받기 위한 경영자2세 소양을 코칭 함 </li>';
        message += '</ul>';

        //7) IR
        message += '<ul class="list-group">';
        message += '<li class="list-group-item active">7. IR</li>';
        message += '<li class="list-group-item">&nbsp;&nbsp;7-1) 단순 기업홍보(기업이미지 메이킹) </li>';
        message += '<li class="list-group-item">&nbsp;&nbsp;7-2) 기업홍보를 통한 자금조달 컨설팅 </li>';
        message += '<li class="list-group-item">&nbsp;&nbsp;7-3) 기타 </li>';
        message += '</ul>';

        //8) 기업가치평가
        message += '<ul class="list-group">';
        message += '<li class="list-group-item active">8. 기업가치평가</li>';
        message += '<li class="list-group-item">&nbsp;&nbsp;8-1) 성과업적평가를 위한 가치평가 </li>';
        message += '<li class="list-group-item">&nbsp;&nbsp;8-2) 목표경영을 위한 가치평가 </li>';
        message += '<li class="list-group-item">&nbsp;&nbsp;8-3) 우리기업의 미래 가치평가 </li>';
        message += '<li class="list-group-item">&nbsp;&nbsp;8-4) 미래방향을 설정하기 위한 가치평가 </li>';
        message += '<li class="list-group-item">&nbsp;&nbsp;8-5) 기업가치평가를 통한 과거에서 현재까지의 기업의 상대평가 </li>';
        message += '<li class="list-group-item">&nbsp;&nbsp;8-6) 기타 </li>';
        message += '</ul>';

        //9) 기업실사(due diligence)
        message += '<ul class="list-group">';
        message += '<li class="list-group-item active">9. 기업실사(due diligence)</li>';
        message += '<li class="list-group-item">';
        message += '<p>';
        message += '기업실사는 회계감사와 성격이 다른 기업의 병이나 성장요소를 파악하여'; 
        message += '미래의 기업 모습을 알아보는 특별한 행동적재무방법 입니다. ';
        message += '</p>';
        message += '</li>';
        message += '<li class="list-group-item">&nbsp;&nbsp;9-1) 투자를 받기 위한 기업실사 </li>';
        message += '<li class="list-group-item">&nbsp;&nbsp;9-2) 투자를 하기 위한 기업실사 </li>';
        message += '<li class="list-group-item">&nbsp;&nbsp;9-3) 정확한 기업의 상황을 파악하기 위한 기업실사 </li>';
        message += '<li class="list-group-item">&nbsp;&nbsp;9-4) 기타 </li>';
        message += '</ul>';

        //10) 사주경영
        message += '<ul class="list-group">';
        message += '<li class="list-group-item active">10. 사주경영</li>';
        message += '<li class="list-group-item">&nbsp;&nbsp;10-1) 자료실 참조 (별도문의) </li>';
        message += '</ul>';

        //11) 기타
        message += '<ul class="list-group">';
        message += '<li class="list-group-item active">11. 기타</li>';
        message += '<li class="list-group-item">&nbsp;&nbsp;11-1) 기업에서 일어나는 재무 및 경영권 사항, 직원 교육 등</li>';
        message += '<li class="list-group-item">&nbsp;&nbsp;11-2) ERP 등 경영내부통제 시스템 전산구축 업무 전반 등</li>';
        message += '</ul>';

        message += '</div>'

        message += '</div>'

        message += '</div>'

        message += '</div>';


        var options = {
            title : title,
            message: message,
            buttons: {
                main: {
                    label: "Close",
                    className: "btn-primary"
                }
            }
        };

        bootbox.dialog(options);
};

$(document).ready(function() {

    $(".alert.alert-danger").hide(true);

    $("link[href*='/bootstrap/thema/fico2000/assets/plugins/sky-forms-pro/skyforms/css/sky-forms.css']").remove();
    $("link[href*='/bootstrap/thema/fico2000/assets/plugins/sky-forms-pro/skyforms/custom/custom-sky-forms.css']").remove();
    $("link[href*='/bootstrap/thema/fico2000/assets/css/admin/custom-admin.css']").remove();
    $("link[href*='/bootstrap/thema/fico2000/js/app/adm/ADM01000M00Component.css']").remove();
    
    $('head').append( $('<link rel="stylesheet" type="text/css" />').attr('href', '/bootstrap/thema/fico2000/assets/css/admin/custom-admin.css') );  

    CMU03000M00.ngOnInit();

    $("#onWrite").click(function(){
        toMove('CMU03000M01');
    });

    $("#goBizPlate").click(function(){
        CMU03000M00.goBizPlate();
    });

});
