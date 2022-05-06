$(document).ready(function() {

    $(".alert.alert-danger").hide(true);

    $("link[href*='/bootstrap/thema/fico2000/assets/plugins/sky-forms-pro/skyforms/css/sky-forms.css']").remove();
    $("link[href*='/bootstrap/thema/fico2000/assets/plugins/sky-forms-pro/skyforms/custom/custom-sky-forms.css']").remove();
    $("link[href*='/bootstrap/thema/fico2000/assets/css/admin/custom-admin.css']").remove();
    $("link[href*='/bootstrap/thema/fico2000/js/app/adm/ADM01000M00Component.css']").remove();

    $('head').append( $('<link rel="stylesheet" type="text/css" />').attr('href', '/bootstrap/thema/fico2000/assets/css/admin/custom-admin.css') );
    
    jQuery('.progress').each(function () {
			        jQuery(this).appear(function() {
			          	jQuery(this).animate({opacity:1,left:"0px"},800);
			          	var b = jQuery(this).find(".progress-bar").attr("data-height");
			          	jQuery(this).find(".progress-bar").animate({
			            	height: b + "%"
			          	
                    }, 100, "linear");
			        }); 
			    }); 
});