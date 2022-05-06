
// 매출패턴
// ====================================================================


 $(document).ready(function() {

    Morris.Area({
        element: 'salesPattern',
        data: [{
            period: '30일내 회수',
            dl: 22,
            up: 50
            }, {
            period: '60일내 회수',
            dl: 90,
            up: 58
            }, {
            period: '90일내 회수',
            dl: 15,
            up: 46
            }],
        gridEnabled: false,
        gridLineColor: 'transparent',
        behaveLikeLine: true,
        xkey: 'period',
        ykeys: ['dl', 'up'],
        labels: ['회수율', '매출채권'],
        lineColors: ['#045d97'],
        pointSize: 0,
        pointStrokeColors : ['#045d97'],
        lineWidth: 0,
        resize:true,
        hideHover: 'auto',
        fillOpacity: 0.7,
        parseTime:false
    });
}); 
