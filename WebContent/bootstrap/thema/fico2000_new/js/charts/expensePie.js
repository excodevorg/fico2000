
// 현금지출
// ====================================================================


 $(document).ready(function() {

     //'#8465d4'
    $('#expensePie').easyPieChart({
        barColor :'#8465d4',
        scaleColor: false,
        trackColor : '#eee',
        lineCap : 'round',
        lineWidth :8,
        onStep: function(from, to, percent) {
            $(this.el).find('.pie-value').text(Math.round(percent) + '%');
        }
    });
    
}); 
