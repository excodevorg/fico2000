var SVY00001M00 = new SVY00001M00Component();

var finRegNewYn = true;

function SVY00001M00Component() {

};

SVY00001M00Component.prototype.ngOnInit = function () {
	//기업규모
    var res = svyService.svyItemList("20220529211621008000",SVY00001M00.callback);
    
    
    console.log(res);
	
};


SVY00001M00Component.prototype.callback = function(data) {

}


$(document).ready(function() {
	
	SVY00001M00.ngOnInit();
	
});