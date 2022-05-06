var AdminLNB = function( mmenu, smenu, tmenu ) {
    
    $.getJSON( "assets/js/Admin_LNB.json", readData);
    
    function readData( data ) 
    {
        adminLnbDataLoaded( data, mmenu, smenu, tmenu );
    }
};
function adminLnbDataLoaded( data, activeMmenu, activeSmenu, activeTmenu ) {
    
    var menus = "";
    var cnt = 0;
    
    var closingID = -1;
    
    $.each( data, function( key, val ) {
        
        if(key == "LNB") 
        {            
            menus += '<ul class="list-group sidebar-nav-v1" id="sidebar-nav">';
            
            for(var key in val) {
                
                if( typeof val[key] != "object" ) {
                    //menus += '<li class="depth1 list-group-item list-toggle2"><a data-toggle="collapse" data-parent="#sidebar-nav" href="javascript:goURL(\'' + val[key] + '\')">' + key + '</a></li>';
                    menus += '<li class="depth1 list-group-item list-toggle2"><a data-toggle="collapse" data-parent="#sidebar-nav" href="javascript:void(0);" onclick="goMenuPage(\'' + val[key] + '\')">' + key + '</a></li>';
                } else {
                    
                    closingID = Math.round(Math.random()*100);
                    
                    menus += '<li class="depth1 list-group-item list-toggle open"><a data-toggle="collapse" data-parent="#sidebar-nav" href="#collapse-' + closingID + '">' + key + '</a>'
                    
                    var val2 = val[key];
                    menus += '<ul id="collapse-' + closingID + '" class="collapse in">';
                    for(var key in val2) {

                        if( typeof val2[key] != "object" ) {                
                            menus += '<li class="depth2"><a href="' + val2[key] + '"><i class="fa fa-chevron-circle-right"></i> ' + key + '</a></li>';
                        } else {
                            menus += '<li class="depth2"><a href="javascript:void(0);"><i class="fa fa-chevron-circle-right"></i> ' + key + '</a>';
                            
                            var val3 = val2[key];
                            menus += '<ul id="collapse-icons">';
                            for(var key in val3) {
                                menus += '<li class="depth3"><a href="' + val3[key] + '">' + key + '</a></li>';
                            }
                            menus += '</ul>';
                        }
                    }
                    menus += '</li></ul>';
                }
            }
            menus += '</ul>';
        }
    });
    
    $("#AdminLNB").append( menus );
    
    //activate GNB with active_page_num
    if(activeMmenu >= 0) {
        $("#AdminLNB .depth1").eq(activeMmenu).addClass("activate");
        $("#AdminLNB .depth1").eq(activeMmenu).prop("onclick", null);
    }       
    
    if(activeSmenu >= 0) {
        $("#AdminLNB .depth1").eq(activeMmenu).find(".depth2").eq(activeSmenu).addClass("activate");
        $("#AdminLNB .depth1").eq(activeMmenu).find(".depth2").eq(activeSmenu).prop("onclick", null);
    }
        
    if(this.activeTmenu >= 0)
        $("#AdminLNB .depth1").eq(activeMmenu).find(".depth2").eq(activeSmenu).find(".depth3").eq(activeTmenu).addClass("activate");
}
function goMenuPage( val ) {
    
    location.href = val;
}