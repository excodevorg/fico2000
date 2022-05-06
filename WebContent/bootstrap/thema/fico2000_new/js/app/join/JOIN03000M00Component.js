"use strict"

var JOIN03000M00 = new JOIN03000M00Component();
var duplicateShield = false // 중복방지 

var userService = new UserService(false);

var boardService = new BoardMngService(true);

function JOIN03000M00Component() {

};

JOIN03000M00Component.prototype.ngOnInit = function () {

};

$(document).ready(function() {
    
});

JOIN03000M00Component.prototype.goMain = function() {
    toMove('MAIN00000M00');
}