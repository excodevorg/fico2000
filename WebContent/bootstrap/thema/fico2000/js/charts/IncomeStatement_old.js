
// IncomeStatement_chart
// ====================================================================


 $(document).ready(function() {

    // =================================================================
    // IncomeStatement연도별그래프
    // =================================================================

    var iasset0 = [[2014, 20], [2015, 50], [2016, 70]];
    var iasset1 = [[2014, 5], [2015, 80], [2016, 20]];

    var iplot = $.plot("#incomeLine", [
            {
                label: '매출원가',
                data: iasset0,
                lines: {
                    show: true,
                    lineWidth:2,
                    fill: true,
                    fillColor: {
                        colors: [{opacity: 0.2}, {opacity: 0.2}]
                    }
                },
                points: {
                    show: true,
                    radius: 4
                }
            },
            {
                label: '매출총손익',
                data: iasset1,
                lines: {
                    show: true,
                    lineWidth:2,
                    fill: true,
                    fillColor: {
                        colors: [{opacity: 0.2}, {opacity: 0.2}]
                    }
                },
                points: {
                    show: true,
                    radius: 4
                }
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
        colors: ['#ffa31c', '#00bcd4', "#a6c600"],
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


    $("#incomeLine").bind("plothover", function (event, pos, item) {

        if (item) {
            var x = item.datapoint[0].toFixed(2),  y = item.datapoint[1];
            $("#demo-flot-tooltip").html("<p class='h4'>" + item.series.label + "</p>" + y)
                .css({top: item.pageY+5, left: item.pageX+5})
                .fadeIn(200);
        } else {
            $("#demo-flot-tooltip").hide();
        }

    });
     
     
    
    // =================================================================
    // Balance Sheet > 부채및자본구성비그래프
    // =================================================================
    var idataSet = [
        { label: "유동부채", data: 4119630000, color: "#ffa31c" },
        { label: "비유동부채", data: 1012960000, color: "#00bcd4" },
        { label: "자본", data: 727080000, color: "#a6c600" }
    ];

    $.plot('#incomeDonut', idataSet, {
        series: {
            pie: {
                show: true,
                combine: {
                color: '#777',
                threshold: 0.1
                }
            }
        },
        legend: {
        show: false
        }
    });
     
     
     
     
     
     
     
    // =================================================================
    // 부채 및 자본 구성비 (연도별/전체 항목)
    // =================================================================

    var iasset2_3 = [[2014, 20], [2015, 50], [2016, 70]];
    var iasset2_4 = [[2014, 5], [2015, 80], [2016, 20]];
    var iasset2_5 = [[2014, 25], [2015, 10], [2016, 30]];
    var iasset2_6 = [[2014, 0], [2015, 0], [2016, 0]];
    var iasset2_7 = [[2014, 5], [2015, 0], [2016, 20]];
    var iasset2_8 = [[2014, 25], [2015, 10], [2016, 30]];
    var iasset2_9 = [[2014, 0], [2015, 0], [2016, 70]];
    var iasset2_10 = [[2014, 5], [2015, 0], [2016, 20]];
    var iasset2_11 = [[2014, 25], [2015, 10], [2016, 0]];
    var iasset2_12 = [[2014, 0], [2015, 20], [2016, 0]];
    var iasset2_13 = [[2014, 5], [2015, 0], [2016, 20]];
    var iasset2_14 = [[2014, 25], [2015, 10], [2016, 30]];
    var iasset2_15 = [[2014, 0], [2015, 50], [2016, 70]];
    var iasset2_16 = [[2014, 5], [2015, 0], [2016, 0]];
    var iasset2_17 = [[2014, 0], [2015, 10], [2016, 30]];
    var iasset2_18 = [[2014, 20], [2015, 0], [2016, 70]];
    var iasset2_19 = [[2014, 5], [2015, 0], [2016, 20]];
    var iasset2_20 = [[2014, 25], [2015, 10], [2016, 30]];
    var iasset2_21 = [[2014, 20], [2015, 5], [2016, 3]];
    var iasset2_22 = [[2014, 5], [2015, 0], [2016, 0]];
    

    var iplot2 = $.plot("#incomeLine2", [
            {
                label: '매입채무',
                data: iasset2_3,
                lines: {show: true,lineWidth:2,fill: true,fillColor: {colors: [{opacity: 0.2}, {opacity: 0.2}]}},
                points: {show: true,radius: 4}
            },
            {
                label: '단기금융기관차입금',
                data: iasset2_4,
                lines: {show: true,lineWidth:2,fill: true,fillColor: {colors: [{opacity: 0.2}, {opacity: 0.2}]}},
                points: {show: true,radius: 4}
            },
            {
                label: '미지급금',
                data: iasset2_5,
                lines: {show: true,lineWidth:2,fill: true,fillColor: {colors: [{opacity: 0.2}, {opacity: 0.2}]}},
                points: {show: true,radius: 4}
            },
            {
                label: '선수금',
                data: iasset2_6,
                lines: {show: true,lineWidth:2,fill: true,fillColor: {colors: [{opacity: 0.2}, {opacity: 0.2}]}},
                points: {show: true,radius: 4}
            },
            {
                label: '예수금',
                data: iasset2_7,
                lines: {show: true,lineWidth:2,fill: true,fillColor: {colors: [{opacity: 0.2}, {opacity: 0.2}]}},
                points: {show: true,radius: 4}
            },
            {
                label: '미지급비용',
                data: iasset2_8,
                lines: {show: true,lineWidth:2,fill: true,fillColor: {colors: [{opacity: 0.2}, {opacity: 0.2}]}},
                points: {show: true,radius: 4}
            },
            {
                label: '유동성장기부채',
                data: iasset2_9,
                lines: {show: true,lineWidth:2,fill: true,fillColor: {colors: [{opacity: 0.2}, {opacity: 0.2}]}},
                points: {show: true,radius: 4}
            },
            {
                label: '선수수익',
                data: iasset2_10,
                lines: {show: true,lineWidth:2,fill: true,fillColor: {colors: [{opacity: 0.2}, {opacity: 0.2}]}},
                points: {show: true,radius: 4}
            },
            {
                label: '부채성충당금',
                data: iasset2_11,
                lines: {show: true,lineWidth:2,fill: true,fillColor: {colors: [{opacity: 0.2}, {opacity: 0.2}]}},
                points: {show: true,radius: 4}
            },
            {
                label: '미지급법인세',
                data: iasset2_12,
                lines: {show: true,lineWidth:2,fill: true,fillColor: {colors: [{opacity: 0.2}, {opacity: 0.2}]}},
                points: {show: true,radius: 4}
            },
            {
                label: '기타유동부채',
                data: iasset2_13,
                lines: {show: true,lineWidth:2,fill: true,fillColor: {colors: [{opacity: 0.2}, {opacity: 0.2}]}},
                points: {show: true,radius: 4}
            },
            {
                label: '회사채',
                data: iasset2_14,
                lines: {show: true,lineWidth:2,fill: true,fillColor: {colors: [{opacity: 0.2}, {opacity: 0.2}]}},
                points: {show: true,radius: 4}
            },
            {
                label: '장기금융기관차입금',
                data: iasset2_15,
                lines: {show: true,lineWidth:2,fill: true,fillColor: {colors: [{opacity: 0.2}, {opacity: 0.2}]}},
                points: {show: true,radius: 4}
            },
            {
                label: '기타장기차입금',
                data: iasset2_16,
                lines: {show: true,lineWidth:2,fill: true,fillColor: {colors: [{opacity: 0.2}, {opacity: 0.2}]}},
                points: {show: true,radius: 4}
            },
            {
                label: '퇴직금충당금',
                data: iasset2_17,
                lines: {show: true,lineWidth:2,fill: true,fillColor: {colors: [{opacity: 0.2}, {opacity: 0.2}]}},
                points: {show: true,radius: 4}
            },
            {
                label: '기타고정부채',
                data: iasset2_18,
                lines: {show: true,lineWidth:2,fill: true,fillColor: {colors: [{opacity: 0.2}, {opacity: 0.2}]}},
                points: {show: true,radius: 4}
            },
            {
                label: '자본금',
                data: iasset2_19,
                lines: {show: true,lineWidth:2,fill: true,fillColor: {colors: [{opacity: 0.2}, {opacity: 0.2}]}},
                points: {show: true,radius: 4}
            },
            {
                label: '자본잉여금',
                data: iasset2_20,
                lines: {show: true,lineWidth:2,fill: true,fillColor: {colors: [{opacity: 0.2}, {opacity: 0.2}]}},
                points: {show: true,radius: 4}
            },
            {
                label: '이익잉여금',
                data: iasset2_21,
                lines: {show: true,lineWidth:2,fill: true,fillColor: {colors: [{opacity: 0.2}, {opacity: 0.2}]}},
                points: {show: true,radius: 4}
            },
            {
                label: '자본조정',
                data: iasset2_22,
                lines: {show: true,lineWidth:2,fill: true,fillColor: {colors: [{opacity: 0.2}, {opacity: 0.2}]}},
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
        colors: ['#ffa31c', '#ffa31c','#ffa31c','#ffa31c','#ffa31c','#ffa31c','#ffa31c','#ffa31c','#ffa31c','#ffa31c','#ffa31c','#00bcd4', '#00bcd4', '#00bcd4', '#00bcd4', '#00bcd4', "#a6c600", "#a6c600", "#a6c600", "#a6c600"],
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


    $("#incomeLine2").bind("plothover", function (event, pos, item) {

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
