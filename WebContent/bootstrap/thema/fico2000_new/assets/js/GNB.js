var GNB = function( mmenu, smenu, tmenu ) {
    
    $.getJSON( "assets/js/menus.json", readData);
    
    function readData( data ) 
    {
        gnbDataLoaded( data, mmenu, smenu, tmenu );
    }
};
function gnbDataLoaded( data, activeMmenu, activeSmenu, activeTmenu ) {
    
    var utilMenus = "";
    var topMenus = "";
    var cnt = 0;
    var utilCnt = 0;
    
    $.each( data, function( key, val ) {
        
        if(key == "Home")
        {            
            $(".header .logo").attr("href", val);
        }
        
        if(key == "util") 
        {            
            utilMenus += '<ul class="loginbar pull-right">';
            for(var key in val) {
                utilMenus += '<li><a href="' + val[key] + '" >' + key + '</a></li>';
                if(utilCnt < 2) utilMenus += '<li class="topbar-devider"></li>';
                
                utilCnt++;
            }
            utilMenus += '</ul>';
            
            $(".header .topbar").append( utilMenus );
        }
        
        if(key == "GNB") 
        {            
            topMenus += '<ul class="nav navbar-nav">';
            
            for(var key in val) {
                
                if( typeof val[key] != "object" ) {
                    //topMenus += '<li class="depth1">' + key + " " + val[key];  
                    topMenus += '<li class="depth2"><a href="' + val[key] + '">' + key + '</a></li>';
                } else {
                    topMenus += '<li class="dropdown depth1"><a href="javascript:void(0);" class="dropdown-toggle" data-toggle="dropdown">' + key + '</a>'
                    
                    var val2 = val[key];
                    topMenus += '<ul class="dropdown-menu">';
                    for(var key in val2) {                    

                        if( typeof val2[key] != "object" ) {                
                            topMenus += '<li class="depth2"><a href="' + val2[key] + '">' + key + '</a></li>';
                        } else {
                            topMenus += '<li class="dropdown-submenu depth2"><a href="javascript:void(0);">' + key + '</a>';
                            
                            var val3 = val2[key];
                            topMenus += '<ul class="dropdown-menu">';
                            for(var key in val3) {
                                topMenus += '<li class="depth3"><a href="' + val3[key] + '">' + key + '</a></li>';
                            }
                            topMenus += '</ul>';
                        }
                    }
                    topMenus += '</li></ul>';
                }
            }
            topMenus += '</ul>';
        }
    });
    
    $(".header #topnavi").append( topMenus );
    
    //activate GNB with active_page_num
    if(activeMmenu >= 0)
        $(".nav .depth1").eq(activeMmenu).addClass("active");
    
    if(activeSmenu >= 0)
        $(".nav .depth1").eq(activeMmenu).find(".depth2").eq(activeSmenu).addClass("active");
    
    if(this.activeTmenu >= 0)
        $(".nav .depth1").eq(activeMmenu).find(".depth2").eq(activeSmenu).find(".depth3").eq(activeTmenu).addClass("active");
}