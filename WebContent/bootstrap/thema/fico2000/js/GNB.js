var GNB = function( mmenu, smenu, tmenu ) {
    
    $.getJSON( "/bootstrap/thema/fico2000/js/menus.json", readData);
    
    function readData( data ) 
    {
        gnbDataLoaded( data, mmenu, smenu, tmenu );
    }
};
function gnbDataLoaded( data, activeMmenu, activeSmenu, activeTmenu ) {
    $(document).trigger('nifty.ready');
}