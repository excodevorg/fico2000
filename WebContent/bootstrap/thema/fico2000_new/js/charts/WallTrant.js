
// WALL-TRANT-CHART
// ====================================================================

 $(document).ready(function() {

    // MORRIS BAR CHART
    // =================================================================
    Morris.Bar({
        element: 'wallTrantBar',
        data: [
            { y: '2014', a: 100, b: 90 },
            { y: '2015', a: 75,  b: 65 },
            { y: '2016', a: 20,  b: 15 }
        ],
        xkey: 'y',
        ykeys: ['a', 'b'],
        labels: ['WALL', 'TRANT'],
        gridEnabled: false,
        gridLineColor: 'transparent',
        barColors: ['#177bbb', '#afd2f0'],
        resize:true,
        hideHover: 'auto'
    });
});
