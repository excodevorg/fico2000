/* Write here your custom javascript codes */
var resultData;
var overlay = new Overlay();

var eduCom = {};

var finCom = {};

var finAplyCom = {};

var loginData = {};

var fourthMenus = "";

function Overlay() {

}

Overlay.prototype.show=function() {
    $("#overlay").fadeIn();
}

Overlay.prototype.hide=function() {
    $("#overlay").fadeOut();
}

function ajaxSend(url, datas, methodType, async, callback) {
	
	//async 여부
	if (async) { //aync
		
		$.ajax({
			type:methodType,
			url:url,
			data:datas,
            contentType: "application/json;charset=utf-8",
			success:callback,
			error:errorCallBack
		});
	
	} else { //sync
		
		$.ajax({
			type:methodType,
			url:url,
			data:datas,
			async:false,
            contentType: "application/json;charset=utf-8",
			success:function(data) {
                if (data != null) {
                    console.log("board ajax >>> " , data);
                    resultData = JSON.parse(data);
                }
            },
			error:errorCallBack
		});		
	}

    return resultData;
	
}


function ajaxMultiPartSend(url, datas, methodType, async, callback) {
	
	//async 여부
	if (async) { //aync
		
		$.ajax({
			type:methodType,
			url:url,
			data:datas,
            contentType: "multipart/form-data",
			success:callback,
			error:errorCallBack
		});
	
	} else { //sync
		
		$.ajax({
			type:methodType,
			url:url,
			data:datas,
			async:false,
            contentType: "multipart/form-data",
			success:function(data) {
                if (data != null) {
                    console.log("board ajax >>> " , data);
                    resultData = JSON.parse(data);
                }
            },
			error:errorCallBack
		});		
	}

    return resultData;
	
}

function nvl(data) {
    if (data == undefined || data == null) {
        return '';
    }

    return data;
}

var activeMmenu;
var activeSmenu;
var activeTmenu;

var GNB = function( mmenu, smenu, tmenu ) {

	this.activeMmenu = mmenu;
	this.activeSmenu = smenu;
	this.activeTmenu = tmenu;

	ajaxSend('/cmmn/MenuList.do', '', 'post', true, gnbDataLoaded);

}

function gnbDataLoaded(data) {

	  var iconClass = ["fa fa-building",  //회사소개
		  "fa fa-user-md",           //Fico소개
		  "fa fa-briefcase",             //비즈니스상담플랫폼
		  "fa fa-graduation-cap",              //교육과정
		  "fa fa-exclamation-circle",          //재무진단엔진이용
		  "fa fa-line-chart",          //재무컨설팅
		  "fa fa-folder",              //자료실
		  "fa fa-group",             //커뮤니티
		  "fa fa-gear"];             //시스템관리
		  
	  var responseData = JSON.parse(data);

	  var size = responseData.data.list1.length;

	  var menuItr = []; //회사소개
      var menuPres = []; //Fico 소개
      var menuAdv = []; //Business 상담 플랫폼
      var menuJoin = []; //가입
	  var menuEdu = [];
      var menuFin = [];
      var menuDta = [];
      var menuCmu = [];
      var menuAdm = [];

	  for (var i = 0; i < size; i++) {
		if(responseData.data.list1[i].topMenuId == '10000'){
        	menuItr.push(responseData.data.list1[i]);
        }
        if(responseData.data.list1[i].topMenuId == '20000'){
        	menuPres.push(responseData.data.list1[i]);
		}
        else if(responseData.data.list1[i].topMenuId == '30000'){
        	menuAdv.push(responseData.data.list1[i]);
        }
        else if(responseData.data.list1[i].topMenuId == '40000'){
        	menuJoin.push(responseData.data.list1[i]);
		}
        else if(responseData.data.list1[i].topMenuId == '50000'){
        	menuEdu.push(responseData.data.list1[i]);
        } 
        else if(responseData.data.list1[i].topMenuId == '60000'){
        	menuFin.push(responseData.data.list1[i]);
        } 
        else if(responseData.data.list1[i].topMenuId == '70000'){
        	menuDta.push(responseData.data.list1[i]);
        }
        else if(responseData.data.list1[i].topMenuId == '80000'){
        	menuCmu.push(responseData.data.list1[i]);
        } 
        else if(responseData.data.list1[i].topMenuId == '90000'){
        	menuAdm.push(responseData.data.list1[i]);
        }    
	  }

      console.log('menuFin >>', menuFin);
      
	  var ficonavi = '<ul id="mainnav-menu" class="list-group">';

	  //1) 소개
	  if (menuItr.length > 0) {
		  ficonavi += '<li class="depth1"><a href="#"><i class="'+ iconClass[0] +'"></i><span class="menu-title"><strong>회사소개</strong></span><i class="arrow"></i></a>';
		  ficonavi += menuCreate(menuItr);
		  ficonavi += '</li>';
	  }

      //2) Fico 소개
	  if (menuPres.length > 0) {
		  ficonavi += '<li class="depth1"><a href="#"><i class="'+ iconClass[1] +'"></i><span class="menu-title"><strong>Fico소개</strong></span><i class="arrow"></i></a>';
		  ficonavi += menuCreate(menuPres);
		  ficonavi += '</li>';
	  }

      //3) 비즈니스상담플랫폼
      if (menuAdv.length > 0) {
		  ficonavi += '<li class="depth1"><a href="#"><i class="'+ iconClass[2] +'"></i><span class="menu-title"><strong>비즈니스상담플랫폼</strong></span><i class="arrow"></i></a>';
		  ficonavi += menuCreate(menuAdv);
		  ficonavi += '</li>';
	  }

      	  //5) 교육
	  if (menuEdu.length > 0) {
        ficonavi += '<li class="depth1"><a href="#"><i class="'+ iconClass[3] +'"></i><span class="menu-title"><strong>교육과정</strong></span><i class="arrow"></i></a>';
        ficonavi += menuCreate(menuEdu);
        ficonavi += '</li>';
      }

      //4) 가입하기 - 재무진단엔진 신청
      if (menuJoin.length > 0) {
		  ficonavi += '<li class="depth1"><a href="#"><i class="'+ iconClass[4] +'"></i><span class="menu-title"><strong>재무진단엔진 이용</strong></span><i class="arrow"></i></a>';
		  ficonavi += menuCreate(menuJoin);
		  ficonavi += '</li>';
	  }

	  //6) 재무
	  if (menuFin.length > 0) {
		  ficonavi += '<li class="depth1"><a href="#"><i class="'+ iconClass[5] +'"></i><span class="menu-title"><strong>재무컨설팅</strong></span><i class="arrow"></i></a>';
		  ficonavi += menuCreate(menuFin);
		  ficonavi += '</li>';
	  }

	  //7) 자료실
	  if (menuDta.length > 0) {
		  ficonavi += '<li class="depth1"><a href="#"><i class="'+ iconClass[6] +'"></i><span class="menu-title"><strong>자료실</strong></span><i class="arrow"></i></a>';
		  ficonavi += menuCreate(menuDta);
		  ficonavi += '</li>';
	  }

	  //8) 커뮤니티
	  if (menuCmu.length > 0) {
		  ficonavi += '<li class="depth1"><a href="#"><i class="'+ iconClass[7] +'"></i><span class="menu-title"><strong>커뮤니티</strong></span><i class="arrow"></i></a>';
		  ficonavi += menuCreate(menuCmu);
		  ficonavi += '</li>';
	  }

	  //9) 시스템관리
	  if (menuAdm.length > 0) {
		  ficonavi += '<li class="depth1"><a href="#"><i class="'+ iconClass[8] +'"></i><span class="menu-title"><strong>시스템관리</strong></span><i class="arrow"></i></a>';
		  ficonavi += menuCreate(menuAdm);
		  ficonavi += '</li>';
	  }

	  ficonavi += '</ul>';

      console.log('ficonavi >> ', ficonavi);

      console.log('fourthMenus11111 >> ' , fourthMenus);

      // ficonavi += fourthMenus;

	  $("#ficonavi").append( ficonavi );
	  $("#ficonavi").append( fourthMenus );

	  console.log('fourthMenus')

	  //activate GNB with active_page_num
     if(activeMmenu >= 0) {
        $("#ficonavi .depth1").eq(activeMmenu).addClass("active-sub");
        $("#ficonavi .depth1").eq(activeMmenu).addClass("active");
     }
    
     if(activeSmenu >= 0) {
        $("#ficonavi .depth1").eq(activeMmenu).find(".depth2").eq(activeSmenu).addClass("active-link");
     }
    
     if(this.activeTmenu >= 0) {
        $("#ficonavi .depth1").eq(activeMmenu).find(".depth2").eq(activeSmenu).find(".depth3").eq(activeTmenu).addClass("active-link");
     }
	
	 $(document).trigger('nifty.ready');

}
function onGoHome() {
    
    overlay.show();

    window.location.href="/";
}
function toMove(menuId, obj) {
	
	window.scrollTo(0,0);

    overlay.show();

    var subMenuId = menuId.substring(0,4);
    var path = '';
    if (subMenuId.indexOf("MAIN") > -1) path = 'main';
    if (subMenuId.indexOf("INTR") > -1) path = 'intr';
    if (subMenuId.indexOf("CMU") > -1) path = 'cmu';
    if (subMenuId.indexOf("COM") > -1) path = 'com';
    if (subMenuId.indexOf("ADM") > -1) path = 'adm';
    if (subMenuId.indexOf("DTA") > -1) path = 'dta';
    if (subMenuId.indexOf("FIN") > -1) path = 'fin';
    if (subMenuId.indexOf("EDU") > -1) path = 'edu';
    if (subMenuId.indexOf("PRES") > -1) path = 'pres';
    if (subMenuId.indexOf("ADVI") > -1) path = 'advi';
    if (subMenuId.indexOf("JOIN") > -1) path = 'join';
    if (subMenuId.indexOf("KOLB") > -1) path = 'kolb';

    console.log('toMove >>>> ', menuId, obj)
    console.log('obj >>>> ' , obj);

    $("#ficoContent").load("/"+path+"/pageMove.do?menuCode="+menuId+"&params="+obj, function() {
        overlay.hide();
    });
}
function menuCreate(menus) {

    console.log('menus', menus);

	var cnt = 0;
    var cnt1 = 0; 
    var cnt2 = 0;   
    var cnt3 = 0, cnt4 = 0; //   
	var navi = '';
        navi += '<ul>';
    
	for (var i = 0 ; i < menus.length; i++) {

        console.log('menus[i] >>>> ', menus[i]);

		if (menus[i].menuLevel == '2') {
            if (cnt1 > 0) {
                navi += '</ul>';
                cnt1 = 0;
            }
			if (cnt > 0)  navi += '</li>';
            cnt = 0;
            if (cnt == 0) {
                if (menus[i].menuPath != null && menus[i].menuPath != '') {
                    navi += '<li class="depth2"><a href="#" onClick=toMove("'+menus[i].menuPath+'")>' + menus[i].menuNm;
                } else {
                    navi += '<li class="depth2"><a href="#">' + menus[i].menuNm;
                }
            }

            var idx = i + 1;
            if (idx <= (menus.length - 1)) {
                if (menus[idx].menuLevel == '3') {
                    navi += '<i class="arrow"></i>' + '</a>';
                } else {
                    navi += '</a>';
                }
            } else {
                navi += '</a>';
            }
		} 
		
		if (menus[i].menuLevel == '3') {
			if (cnt1 == 0) {
                navi += '<ul class="collapse">';
                cnt1 = cnt1 + 1;
            }
            if (cnt2 > 0) {
                cnt2 = 0;
                fourthMenus += '</ul></div>';
            }
            if (menus[i].menuPath != null && menus[i].menuPath != '') {
			    navi += '<li class="depth3"><a href="#" onClick=toMove("'+menus[i].menuPath+'")>' + menus[i].menuNm + '</a></li>';
            } else {
            	navi += '<li id="thirdMenu'+ menus[i].menuId +'" class="depth3" onmouseover="onThirdMenuOver( event, ' + menus[i].menuId +')" onmouseout="onThirdMenuOut( event, ' + menus[i].menuId +')"><a href="#">' + menus[i].menuNm + '<i class="arrow"></i></a></li>';
            	
            }
		}
		
		
        if (menus[i].menuLevel == '4') {
            console.log('menuLevel >> ' , menus[i].menuLevel);
            if (cnt2 == 0) {
                fourthMenus += '<div id="fourthMenu'+ menus[i].upperMenuId +'" class="fourthMenu" onmouseover="onFourthMenuOver(event)" onmouseout="onFourthMenuOut(event)"><ul>';
                cnt2 = cnt2 + 1;
            }

            fourthMenus += '<li><a href="#" onClick=toMove("'+menus[i].menuPath+'") class="fourthMenuA">' + menus[i].menuNm + '</a></li>';
        }

        cnt = cnt + 1;
        
        
        console.log('cnt', cnt)
        console.log('cnt1', cnt1)
        console.log('cnt2', cnt2)
        console.log('i', i, 'menus[i].menuLevel', menus[i].menuLevel)
        console.log('navi', navi)
        console.log('fourthMenus', fourthMenus)
	}

	if (cnt1 > 0)  navi += '</ul>';
    if (cnt > 0) navi += '</li>';

	navi += '</ul>';

    //navi += fourthMenus;
		  
	 return navi;
}

var currentOverID = -1;
var oldOverID = -1;

function onThirdMenuOver( e, idx ) {
	
	var parentID = e.target.parentElement.getAttribute('id')
    currentOverID = parentID.substring(9, parentID.length);

    var menuY = 0;
    var layerHeight = $('#fourthMenu'+currentOverID).height();
    var layerY = e.pageY + layerHeight - $(window).scrollTop();

    if(layerY > window.innerHeight) {//메뉴 오버시 메뉴 높이가 화면 밖으로 벗어나면 팝업 메뉴를 위로 향하게 띄운다
        menuY = $("#"+e.target.parentElement.id).offset().top - layerHeight + $("#"+parentID).height() - $(window).scrollTop() - 10;
    } else {
        menuY = $("#"+e.target.parentElement.id).offset().top + 10 - $(window).scrollTop() - 10;
    }

    if(oldOverID != -1 && oldOverID != currentOverID) {
        $('#fourthMenu'+oldOverID).css({display: 'none'});
    }
    $('#fourthMenu'+currentOverID).css({display: 'block', top: menuY, left: 210});

    thirdMenuOn(currentOverID);
    
    oldOverID = currentOverID;
}

function onThirdMenuOut( e, idx ) {
    $('#fourthMenu'+currentOverID).css({display: 'none'});
    thirdMenuOut(currentOverID);
}

function onFourthMenuOver( e ) {
    $('#fourthMenu'+currentOverID).css({display: 'block'});
    e.target.style.color = '#fff';
    
    thirdMenuOn(currentOverID);
}

function onFourthMenuOut( e ) {
    $('#fourthMenu'+currentOverID).css({display: 'none'});
    e.target.style.color = '#a7bacb';
    
    thirdMenuOut(currentOverID);
}

function thirdMenuOn( id ) {
	$('#thirdMenu'+id+' a').css({color: '#fff', backgroundColor: '#2b3a48'});
}
function thirdMenuOut( id ) {
	$('#thirdMenu'+id+' a').css({color: '#a7bacb', backgroundColor: '#212d38'});
}


function goBizPlate() {

    var title = '비즈니스 Platform 업무범위 코드';
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
}

jQuery.fn.serializeObject = function() {

    var obj = null;

    try {

    // this[0].tagName이 form tag일 경우

    if(this[0].tagName && this[0].tagName.toUpperCase() == "FORM" ) {

    var arr = this.serializeArray();

    if(arr){

    obj = {};    

    jQuery.each(arr, function() {

    // obj의 key값은 arr의 name, obj의 value는 value값

    obj[this.name] = this.value;

    });				

    }

    }

    }catch(e) {

    alert(e.message);

    }finally  {}

    return obj;

};

function onlyNumber(obj) {
    $(obj).keyup(function(){
         $(this).val($(this).val().replace(/[^0-9]/g,""));
    }); 
}



