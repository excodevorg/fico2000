var SVY00001M00 = new SVY00001M00Component();

var finRegNewYn = true;

function SVY00001M00Component() {

};

SVY00001M00Component.prototype.ngOnInit = function () {
	//기업규모
    var res = svyService.svyItemList("20220529211621008000",SVY00001M00.callback);
    
    

	
};


SVY00001M00Component.prototype.callback = function(data) {
    console.log('callback' , data);
    
    if (data != null) {
		var res = JSON.parse(data);
		
		console.log('res >> ' , res);
	}
}


$(document).ready(function() {
	
	SVY00001M00.ngOnInit();
	
});