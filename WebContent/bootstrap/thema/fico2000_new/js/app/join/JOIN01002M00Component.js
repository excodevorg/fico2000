"use strict"

var JOIN01002M00 = new JOIN01002M00Component();
var duplicateShield = false // 중복방지 

var userService = new UserService(false);

var boardService = new BoardMngService(true);

function JOIN01002M00Component() {

};


JOIN01002M00Component.prototype.afterSaving = function(data) {

    console.log('request >>' , data);

    if (data != null) {
        console.log("userPremInfo ajax >>> " , data);
        var res = JSON.parse(data);

        if (res.success==true) { 
            overlay.hide();
            console.log('성공');
            console.log(res);
            
            var productId = $('#productId').attr('value');
            toMove('JOIN01003M00', productId);
            
        } else {
            overlay.hide();
            bootbox.alert(res.msg);
        }

    } else {
        overlay.hide();
    }
};

JOIN01002M00Component.prototype.formFillOut = function(data) {

    console.log('request >>' , data);

    if (data != null) {
        console.log("userPremInfo ajax >>> " , data);
        var res = JSON.parse(data);

        if (res.success==true) { 
            overlay.hide();
            console.log('성공');
            console.log(res);

            var userPremInfo = res.data.userPremInfo;
            var userInfo = res.data.userInfo;
            
            $( 'input[name=username]' ).val(userInfo.userNm);
            
            
        } else {
            overlay.hide();
            bootbox.alert(res.msg);
        }

    } else {
        overlay.hide();
    }
};

JOIN01002M00Component.prototype.ngOnInit = function () {

	var productId = $('#productId').attr('value');
	
	var params = {
            productId: productId
    };

    var data = joinService.selectApcInfo(params, JOIN01002M00.formFillOut);
};

JOIN01002M00Component.prototype.saveApcInfo = function () {

	var productId = $('#productId').attr('value');
	var combzn = $( 'input[name=cor-number1]' ).val()+''+$( 'input[name=cor-number2]' ).val()+''+$( 'input[name=cor-number3]' ).val();
	var taxbzn = $( 'input[name=cor2-number1]' ).val()+''+$( 'input[name=cor2-number2]' ).val()+''+$( 'input[name=cor2-number3]' ).val();
	var receiptOfTaxBill = $(":input:radio[name=tax]:checked").val();
	
	var params = {
            productId: productId,
            phoneNumber: $( 'input[name=phone]' ).val(),
            receiptOfTaxBill: receiptOfTaxBill,
            companyBizNo: combzn,
            taxBillBizNo: taxbzn,
            companyNm:  $( 'input[name=company-name]' ).val(),
            representativeNm: $( 'input[name=representative-name]' ).val(),
            uptae: $( 'input[name=business-conditions]' ).val(),
            jongmok: $( 'input[name=lines]' ).val(),
            dateOfEstablishment: $( 'input[name=foundation-date]' ).val(),
            companyAddr: $( 'input[name=address]' ).val(),
            companyNm2: $( 'input[name=company-name2]' ).val(),
            representativeNm2: $( 'input[name=representative-name]' ).val(),
            uptae2: $( 'input[name=business-conditions2]' ).val(),
            jongmok2: $( 'input[name=lines2]' ).val(),
            dateOfEstablishment2: $( 'input[name=foundation-date2]' ).val(),
            companyAddr2: $( 'input[name=address2]' ).val()
    };
    var data = joinService.saveApcInfo(params, JOIN01002M00.afterSaving);
};

JOIN01002M00Component.prototype.nextStep2 = function() {
    //이메일유효성체크
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    //신청자 이름
    if( $( 'input[name=username]' ).val() == '' ) {
        $( '.no-username' ).show();
        $( 'input[name=username]' ).focus()
        return;
    } else {
        $( '.no-username' ).hide();
    }

    //신청자 휴대폰
    if( $( 'input[name=phone]' ).val() == '' ) {
        $( '.no-phone' ).show();
        $( 'input[name=phone]' ).focus();
        return;
    } else {
        $( '.no-phone' ).hide();
        var isMobile = JOIN01002M00.isMobile($( 'input[name=phone]' ).val());
        if(isMobile) {
        	$( '.err-phonetype' ).hide();
        } else {
        	$( '.err-phonetype' ).show();
        	$( 'input[name=phone]' ).focus();
            return;
        }
    }


    //가입회사 정보
    if( $( 'input[name=company-name]' ).val() == '' ) {
        $( '.no-company-name' ).show();
        $( 'input[name=company-name]' ).focus();
        return;
    } else {
        $( '.no-company-name' ).hide();
    }

    //대표자 정보
    if( $( 'input[name=representative-name]' ).val() == '' ) {
        $( '.no-representative-name' ).show();
        $( 'input[name=representative-name]' ).focus();
        return;
    } else {
        $( '.no-representative-name' ).hide();
    }

    //사업자등록번호 정보
    if( $( 'input[name=cor-number1]' ).val() == '' || $( 'input[name=cor-number2]' ).val() == '' || $( 'input[name=cor-number3]' ).val() == '' ) {
        $( '.no-cor-number' ).show();
        $( 'input[cor-number]' ).focus();
        return;
    } else {
        $( '.no-cor-number' ).hide();
    }

    //업태 / 종목 정보
    if( $( 'input[name=business-conditions]' ).val() == '' ) {
        $( '.no-business-conditions' ).show();
        $( 'input[name=business-conditions]' ).focus();
        return;
    } else {
        $( '.no-business-conditions' ).hide();
    }

    //설립일자 정보
    if( $( 'input[name=foundation-date]' ).val() == '' ) {
        $( '.no-foundation-date' ).show();
        $( 'input[name=foundation-date]' ).focus();
        return;
    } else {
        $( '.no-foundation-date' ).hide();
        if(JOIN01002M00.checkDayFormat($( 'input[name=foundation-date]' ).val()) == 1) {
        	$( '.err-foundation-date' ).show();
        	return;
        } else if (JOIN01002M00.checkDayFormat($( 'input[name=foundation-date]' ).val()) == 2) {
        	$( '.err-foundation-date' ).hide();
        	$( '.err2-foundation-date' ).show();
        	return;
        } else {
        	$( '.err-foundation-date' ).hide();
        	$( '.err2-foundation-date' ).hide();
        }
    }

    //주소 정보
    if( $( 'input[name=address]' ).val() == '' ) {
        $( '.no-address' ).show();
        $( 'input[name=address]' ).focus();
        return;
    } else {
        $( '.no-address' ).hide();
    }

    //세금계산서 체크
    if( ! $( 'input:radio[name=tax]' ).is( ':checked' ) ) {
        $( '.no-tax' ).show();
        return;
    } else {
        $( '.no-tax' ).hide();
    }


    //세금계산서 '직접입력'체크한 경우

    if( $('#radio2').is( ':checked' ) ) {
        //가입회사 정보
        if( $( 'input[name=company-name2]' ).val() == '' ) {
            $( '.no-company-name2' ).show();
            $( 'input[name=company-name2]' ).focus();
            return;
        } else {
            $( '.no-company-name2' ).hide();
        }

        //대표자 정보
        if( $( 'input[name=representative-name2]' ).val() == '' ) {
            $( '.no-representative-name2' ).show();
            $( 'input[name=representative-name2]' ).focus();
            return;
        } else {
            $( '.no-representative-name2' ).hide();
        }

        //사업자등록번호 정보
        if( $( 'input[name=cor2-number1]' ).val() == '' || $( 'input[name=cor2-number2]' ).val() == '' || $( 'input[name=cor2-number3]' ).val() == '' ) {
            $( '.no-cor2-number' ).show();
            $( 'input[cor2-number1]' ).focus();
            return;
        } else {
            $( '.no-cor2-number' ).hide();
        }

        //업태 / 종목 정보
        if( $( 'input[name=business-conditions2]' ).val() == '' ) {
            $( '.no-business-conditions2' ).show();
            $( 'input[name=business-conditions2]' ).focus();
            return;
        } else {
            $( '.no-business-conditions2' ).hide();
        }

        //설립일자 정보
        if( $( 'input[name=foundation-date2]' ).val() == '' ) {
            $( '.no-foundation-date2' ).show();
            $( 'input[name=foundation-date2]' ).focus();
            return;
        } else {
            $( '.no-foundation-date2' ).hide();
            if(JOIN01002M00.checkDayFormat($( 'input[name=foundation-date2]' ).val()) == 1) {
            	$( '.err-foundation-date2' ).show();
            	return;
            } else if (JOIN01002M00.checkDayFormat($( 'input[name=foundation-date2]' ).val()) == 2) {
            	$( '.err-foundation-date2' ).hide();
            	$( '.err2-foundation-date2' ).show();
            	return;
            } else {
            	$( '.err-foundation-date2' ).hide();
            	$( '.err2-foundation-date2' ).hide();
            }
        }

        //주소 정보
        if( $( 'input[name=address2]' ).val() == '' ) {
            $( '.no-address2' ).show();
            $( 'input[name=address2]' ).focus();
            return;
        } else {
            $( '.no-address2' ).hide();
        }
    }
    //toMove('JOIN01003M00');
    //alert("저장합니다.");
    JOIN01002M00.saveApcInfo();
}

$(document).ready(function() {

    $('#direct').hide()

    $('#radio1').on('click', (e)=> {
        $('#direct').hide()
    })
    $('#radio2').on('click', (e)=> {
        $('#direct').show()
    })
    $('#radio3').on('click', (e)=> {
        $('#direct').hide()
    })


    //폼체크
    $('.no-username').hide();
    $('.no-phone').hide();
    $('.err-phonetype').hide();
    $('.no-company-name').hide();
    $('.no-representative-name').hide();
    $('.no-cor-number').hide();
    $('.no-business-conditions').hide();
    $('.no-foundation-date').hide();
    $('.err-foundation-date').hide();
    $('.err2-foundation-date').hide();
    $('.no-address').hide();
    $('.no-masterid').hide();
    $('.no-mastername').hide();
    $('.no-masterpassword').hide();
    $('.no-masterpassword-confirm').hide();
    $('.no-master-company-phone').hide();
    $('.no-master-phone').hide();
    $('.no-master-email').hide();
    $('.no-master-email2').hide();
    $('.no-authority-name').hide();
    $('.no-authority-email').hide();
    $('.no-tax').hide();

    $('.no-company-name2').hide();
    $('.no-representative-name2').hide();
    $('.no-cor2-number').hide();
    $('.no-business-conditions2').hide();
    $('.no-foundation-date2').hide();
    $('.err-foundation-date2').hide();
    $('.err2-foundation-date2').hide();
    $('.no-address2').hide();

    //Master 신청자 정보와 동일
    $('input:checkbox[name=sameasuser]').on('click', (e)=> {

        if($('input:checkbox[name=sameasuser]').is(':checked')) {

            // $('input[name=masterid]').text(  )
            $('input[name=mastername]').val( $('input[name=username]').val() )
            // $('input[name=masterpassword]').text(  )
            // $('input[name=masterpassword-confirm]').text(  )
            // $('input[name=master-company-phone]').text(  )
            $('input[name=master-phone]').val( $('input[name=phone]').val() )
            // $('input[name=master-email]').text(  )
        }
    });

    //자료권리자 Master와 동일
    $('input:checkbox[name=sameasmaster]').on('click', (e)=> {

        if($('input:checkbox[name=sameasmaster]').is(':checked')) {
            $('input[name=authority-name]').val( $('input[name=mastername]').val() )
            $('input[name=authority-email]').val( $('input[name=master-email]').val() )
        }
    });

    $('#nextStep2').click(function(){

        JOIN01002M00.nextStep2();

    });
    
    JOIN01002M00.ngOnInit();
});

JOIN01002M00Component.prototype.checkDayFormat = function(Obj)  {

    var strValue = Obj;
    var chk1 = /^(19|20)\d{2}-([1-9]|1[012])-([1-9]|[12][0-9]|3[01])$/;
    var chk2 = /^(19|20)\d{2}\-([0][1-9]|1[012])\-(0[1-9]|[12][0-9]|3[01])$/;
    //var chk2 = /^(19|20)\d{2}-([0][1-9]|1[012])-([012][1-9]|3[01])$/;

    //-------------------------------------------------------------------------------
    // 유효성 검사- 입력형식에 맞게 들왔는지 // 예) 2000-1-1, 2000-01-01 2가지 형태 지원
    //-------------------------------------------------------------------------------
    if (chk1.test(strValue) == false && chk2.test(strValue) == false)
    { // 유효성 검사에 둘다 성공하지 못했다면
       //alert("1999-1-1 형식 또는 \r\n1999-01-01 형식으로 날자를 입력해주세요.");
       return 1;
    }

    //-------------------------------------------------------------------------------
    // 존재하는 날자(유효한 날자) 인지 체크
    //-------------------------------------------------------------------------------
    var bDateCheck = true;
    var arrDate = Obj.split("-");
    var nYear = Number(arrDate[0]);
    var nMonth = Number(arrDate[1]);
    var nDay = Number(arrDate[2]);

    if (nYear < 1900 || nYear > 3000)
    { // 사용가능 하지 않은 년도 체크
        bDateCheck = false;
    }

    if (nMonth < 1 || nMonth > 12)
    { // 사용가능 하지 않은 달 체크
        bDateCheck = false;
    }

    // 해당달의 마지막 일자 구하기
    var nMaxDay = new Date(new Date(nYear, nMonth, 1) - 86400000).getDate();
    if (nDay < 1 || nDay > nMaxDay)
    { // 사용가능 하지 않은 날자 체크
        bDateCheck = false;
    }

    if(bDateCheck == false) 
    { 
       //alert("존재하지 않은 년월일을 입력하셨습니다. 다시한번 확인해주세요");
       return 2;
    }
    
    return 0;
};

JOIN01002M00Component.prototype.isMobile = function(phoneNum)  { 
	var regExp =/(01[016789])-([1-9]{1}[0-9]{2,3})-([0-9]{4})$/;
	var myArray; 
	if(regExp.test(phoneNum)){ 
		myArray = regExp.exec(phoneNum); 
		// console.log(myArray[1]); 
		// console.log(myArray[2]); 
		// console.log(myArray[3]); 
		return true; 
	} else { 
		return false; 
	} 
};