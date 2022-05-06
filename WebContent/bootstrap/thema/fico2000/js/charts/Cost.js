
// COST
// ====================================================================


 $(document).ready(function() {

    // =================================================================
    // 자산구성비연도별그래프
    // =================================================================

    var casset0 = [[2014, 20], [2015, 50], [2016, 70]];
    var casset1 = [[2014, 5], [2015, 80], [2016, 20]];
    var casset2 = [[2014, 25], [2015, 10], [2016, 30]];
    var casset3 = [[2014, 4], [2015, 17], [2016, 3]];
    var casset4 = [[2014, 4], [2015, 0], [2016, 3]];

    var cplot = $.plot("#costLine", [
            {
                label: '당기총제조비용',
                data: casset0,
                lines: {show: true,lineWidth:2,fill: false,fillColor: {colors: [{opacity: 0.2}, {opacity: 0.2}]}},
                points: {show: true,radius: 4}
            },
            {
                label: '재료비',
                data: casset1,
                lines: {show: true,lineWidth:2,fill: false,fillColor: {colors: [{opacity: 0.2}, {opacity: 0.2}]}},
                points: {show: true,radius: 4}
            },
            {
                label: '노무비',
                data: casset2,
                lines: {show: true,lineWidth:2,fill: false,fillColor: {colors: [{opacity: 0.2}, {opacity: 0.2}]}},
                points: {show: true,radius: 4}
            },
            {
                label: '경비',
                data: casset3,
                lines: {show: true,lineWidth:2,fill: false,fillColor: {colors: [{opacity: 0.2}, {opacity: 0.2}]}},
                points: {show: true,radius: 4}
            },
            {
                label: '당기제품제조원가',
                data: casset4,
                lines: {show: true,lineWidth:2,fill: false,fillColor: {colors: [{opacity: 0.2}, {opacity: 0.2}]}},
                points: {show: true,radius: 4}
            }
        ],{
        series: {
            lines: {
                show: true
            },
            points: {
                show: true
            },
            shadowSize: 0	// Drawing is faster without shadows
        },
        colors: ['#ffa31c', '#00bcd4', "#a6c600", "#177bbb", "#8669CC"],
        legend: {
            show: true,
            position: 'nw',
            margin: [15, 0]
        },
        grid: {
            borderWidth: 0,
            hoverable: true,
            clickable: true
        },
        yaxis: {
            ticks: 4, tickColor: '#eeeeee'
        },
        xaxis: {
            ticks: 2,
            tickColor: '#ffffff'
        }
    });
     
     
    // Flot tooltip
    // =================================================================
    $("<div id='demo-flot-tooltip'></div>").css({
        position: "absolute",
        display: "none",
        padding: "10px",
        color: "#999",
        "text-align":"right",
        "background-color": "#fff"
    }).appendTo("body");


    $("#costLine").bind("plothover", function (event, pos, item) {

        if (item) {
            var x = item.datapoint[0].toFixed(2),  y = item.datapoint[1];
            $("#demo-flot-tooltip").html("<p class='h4'>" + item.series.label + "</p>" + y)
                .css({top: item.pageY+5, left: item.pageX+5})
                .fadeIn(200);
        } else {
            $("#demo-flot-tooltip").hide();
        }

    });
    
}); 
