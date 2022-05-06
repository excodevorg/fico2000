"use strict"

var JOIN01004M00 = new JOIN01004M00Component();
var duplicateShield = false // 중복방지 

var userService = new UserService(false);

var boardService = new BoardMngService(true);

function JOIN01004M00Component() {

};

JOIN01004M00Component.prototype.ngOnInit = function () {

};

$(document).ready(function() {


});

JOIN01004M00Component.prototype.goMain = function() {
    toMove('FIN01001M00');
}

$(document).ready(function() {

    $('#goFinMain').click(function(){

        JOIN01004M00.goMain();

    });

});