
// 순현금흐름그래프

 $(document).ready(function() {

    var day_data = [
        {"elapsed": "1", "value": 34000},
        {"elapsed": "2", "value": 34000},
        {"elapsed": "3", "value": 30000},
        {"elapsed": "4", "value": 120000},
        {"elapsed": "5", "value": 130000},
        {"elapsed": "6", "value": 220000},
        {"elapsed": "7", "value": 50000},
        {"elapsed": "8", "value": 260000},
        {"elapsed": "9", "value": 1200000},
        {"elapsed": "10", "value": 19000},
        {"elapsed": "11", "value": 1900000},
        {"elapsed": "12", "value": 190000}
    ];
    Morris.Line({
        element: 'cashGraph',
        data: day_data,
        xkey: 'elapsed',
        ykeys: ['value'],
        labels: ['value'],
        gridEnabled: false,
        gridLineColor: 'transparent',
        lineColors: ['#045d97'],
        lineWidth: 2,
        parseTime: false,
        resize:true,
        hideHover: 'auto'
    });

});
