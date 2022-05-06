var activeMmenu = -1;
var activeSmenu = -1;
var activeTmenu = -1;



$(document).ready(function() {
    
    $.getJSON( "assets/js/menus.json", gnbDataLoaded);
    
});

function gnbDataLoaded( data ) {
    
    var utilMenus = "";
    var topMenus = "";
    var cnt = 0;
    
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
            }
            utilMenus += '</ul>';
            
            $(".header .topbar").append( utilMenus );
        }
        
        if(key == "GNB") 
        {            
            topMenus += '<ul class="nav navbar-nav">';
            
            for(var key in val) {
                
                if( typeof val[key] != "object" ) {
                    topMenus += "<li>" + key + " " + val[key] + "</li>";                        
                } else {
                    topMenus += '<li class="dropdown"><a href="javascript:void(0);" class="dropdown-toggle" data-toggle="dropdown">' + key + '</a>'
                    
                    var val2 = val[key];
                    topMenus += '<ul class="dropdown-menu">';
                    for(var key in val2) {                    

                        if( typeof val2[key] != "object" ) {                
                            topMenus += '<li><a href="' + val2[key] + '">' + key + '</a></li>';
                        } else {
                            topMenus += '<li class="dropdown-submenu"><a href="javascript:void(0);">' + key + '</a>';
                            
                            var val3 = val2[key];
                            topMenus += '<ul class="dropdown-menu">';
                            for(var key in val3) {
                                topMenus += '<li><a href="' + val3[key] + '">' + key + '</a></li>';
                            }
                            topMenus += '</ul>';
                        }
                    }
                    topMenus += '</ul>';
                }
            }            
            topMenus += '</ul>';            
        }
        
        $(".header #topnavi").append( topMenus );
        
        $(".nav.navbar-nav li").eq(activeMmenu).addClass("active");
        
        /*
        items += "<li>" + key;
       
        items += "<ul>";
        for(var key in val) {
            //items += "<li>" + key + " " + val[key] + "</li>";
            
            if( typeof val[key] != "object" ) {
                items += "<li>" + key + " " + val[key] + "</li>";                        
            } else {
                items += "<li>" + key + "</li>";  
            }
            
            if( typeof val[key] == "object" ) {
                
                var val2 = val[key];
                items += "<ul>";
                for(var key in val2) {                    
                    
                    if( typeof val2[key] != "object" ) {
                        items += "<li>" + key + " " + val2[key] + "</li>";                        
                    } else {
                        items += "<li>" + key + "</li>";  
                    }
                    
                    if( typeof val2[key] == "object" ) {
                
                        var val3 = val2[key];
                        items += "<ul>";
                        for(var key in val3) {
                            items += "<li>" + key + " " + val3[key] + "</li>";
                        }
                        items += "</ul>";
                    }
                }
                items += "</ul>";
            }
        }
        items += "</ul>";
        
        items += "</li>";
        */
    });    
/*
    $( "<ul/>", {
    "class": "my-new-list",
    html: items,
    }).appendTo( "body" );
    */
}
