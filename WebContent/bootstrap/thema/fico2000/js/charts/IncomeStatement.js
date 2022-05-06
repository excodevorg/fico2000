//BalanceSheet_chart

$(document).ready(function() {

    // =================================================================
    // 매출액연도별그래프
    // =================================================================

    var iasset0 = [[2014, 20], [2015, 50], [2016, 70]];
    var iasset1 = [[2014, 5], [2015, 80], [2016, 20]];
    var iasset2 = [[2014, 25], [2015, 10], [2016, 30]];
    var iasset3 = [[2014, 4], [2015, 17], [2016, 3]];
    var iasset4 = [[2014, 25], [2015, 20], [2016, 35]];

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
                label: '판매비와관리비',
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
            },
            {
                label: '영업외수익',
                data: iasset2,
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
                label: '영업외비용',
                data: iasset3,
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
                label: '법인세비용',
                data: iasset4,
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
    // Balance Sheet > 자산구성비그래프
    // =================================================================
    var dataSet = [
        { label: "매출원가", data: 4119630000, color: "#ffa31c" },
        { label: "판매비와관리비", data: 1012960000, color: "#00bcd4" },
        { label: "영업외수익", data: 727080000, color: "#a6c600" },
        { label: "영업외비용", data: 344120000, color: "#177bbb" },
        { label: "법인세비용", data: 344120000, color: "#8669CC" }
    ];

    $.plot('#incomeDonut', dataSet, {
        series: {
            pie: {
                show: true,
                combine: {
                color: '#999',
                threshold: 0.1
                }
            }
        },
        legend: {
        show: false
        }
    });
     
     
     
    // =================================================================
    // 매출액 구성비(연도별/전체 항목)
    // =================================================================

    var iasset5 = [[2014, 20], [2015, 50], [2016, 70]];
    var iasset6 = [[2014, 5], [2015, 40], [2016, 20]];
    var iasset7 = [[2014, 25], [2015, 10], [2016, 30]];
    var iasset8 = [[2014, 4], [2015, 17], [2016, 3]];
    var iasset9 = [[2014, 25], [2015, 20], [2016, 35]];
    var iasset10 = [[2014, 5], [2015, 0], [2016, 20]];
    var iasset11 = [[2014, 24], [2015, 10], [2016, 30]];
    var iasset12 = [[2014, 4], [2015, 17], [2016, 3]];
    var iasset13 = [[2014, 25], [2015, 0], [2016, 35]];
    var iasset14 = [[2014, 0], [2015, 50], [2016, 70]];
    var iasset15 = [[2014, 5], [2015, 0], [2016, 20]];
    var iasset16 = [[2014, 60], [2015, 10], [2016, 30]];
    var iasset17 = [[2014, 4], [2015, 17], [2016, 3]];
    var iasset18 = [[2014, 0], [2015, 20], [2016, 35]];
    var iasset19 = [[2014, 5], [2015, 90], [2016, 20]];
    var iasset20 = [[2014, 0], [2015, 10], [2016, 30]];
    var iasset21 = [[2014, 4], [2015, 17], [2016, 3]];
    var iasset22 = [[2014, 0], [2015, 0], [2016, 0]];
    var iasset23 = [[2014, 25], [2015, 20], [2016, 0]];
    var iasset24 = [[2014, 0], [2015, 0], [2016, 70]];
    var iasset25 = [[2014, 5], [2015, 50], [2016, 20]];
    var iasset26 = [[2014, 0], [2015, 0], [2016, 30]];
    var iasset27 = [[2014, 4], [2015, 17], [2016, 3]];
    var iasset28 = [[2014, 25], [2015, 0], [2016, 0]];
    var iasset29 = [[2014, 5], [2015, 0], [2016, 0]];
    var iasset30 = [[2014, 25], [2015, 10], [2016, 30]];
    var iasset31 = [[2014, 4], [2015, 17], [2016, 3]];
    var iasset32 = [[2014, 0], [2015, 0], [2016, 0]];
    var iasset33 = [[2014, 25], [2015, 20], [2016, 0]];
    var iasset34 = [[2014, 0], [2015, 0], [2016, 70]];
    var iasset35 = [[2014, 5], [2015, 50], [2016, 20]];
    var iasset36 = [[2014, 0], [2015, 0], [2016, 30]];
     
    var iplot2 = $.plot("#incomeLine2", [
            {
                label: '매출원가',
                data: iasset5,
                lines: {show: true,lineWidth:2,fill: true,fillColor: {colors: [{opacity: 0.2}, {opacity: 0.2}]}},
                points: {show: true,radius: 4}
            },
            {
                label: '급여',
                data: iasset6,
                lines: {show: true,lineWidth:2,fill: true,fillColor: {colors: [{opacity: 0.2}, {opacity: 0.2}]}},
                points: {show: true,radius: 4}
            },
            {
                label: '퇴직급여',
                data: iasset7,
                lines: {show: true,lineWidth:2,fill: true,fillColor: {colors: [{opacity: 0.2}, {opacity: 0.2}]}},
                points: {show: true,radius: 4}
            },
            {
                label: '복리후생비',
                data: iasset8,
                lines: {show: true,lineWidth:2,fill: true,fillColor: {colors: [{opacity: 0.2}, {opacity: 0.2}]}},
                points: {show: true,radius: 4}
            },
            {
                label: '수도광열비',
                data: iasset9,
                lines: {show: true,lineWidth:2,fill: true,fillColor: {colors: [{opacity: 0.2}, {opacity: 0.2}]}},
                points: {show: true,radius: 4}
            },
            {
                label: '세금과공과',
                data: iasset10,
                lines: {show: true,lineWidth:2,fill: true,fillColor: {colors: [{opacity: 0.2}, {opacity: 0.2}]}},
                points: {show: true,radius: 4}
            },
            {
                label: '임차료',
                data: iasset11,
                lines: {show: true,lineWidth:2,fill: true,fillColor: {colors: [{opacity: 0.2}, {opacity: 0.2}]}},
                points: {show: true,radius: 4}
            },
            {
                label: '감가상각비',
                data: iasset12,
                lines: {show: true,lineWidth:2,fill: true,fillColor: {colors: [{opacity: 0.2}, {opacity: 0.2}]}},
                points: {show: true,radius: 4}
            },
            {
                label: '무형자산상각비',
                data: iasset13,
                lines: {show: true,lineWidth:2,fill: true,fillColor: {colors: [{opacity: 0.2}, {opacity: 0.2}]}},
                points: {show: true,radius: 4}
            },
            {
                label: '통신비',
                data: iasset14,
                lines: {show: true,lineWidth:2,fill: true,fillColor: {colors: [{opacity: 0.2}, {opacity: 0.2}]}},
                points: {show: true,radius: 4}
            },
            {
                label: '접대비',
                data: iasset15,
                lines: {show: true,lineWidth:2,fill: true,fillColor: {colors: [{opacity: 0.2}, {opacity: 0.2}]}},
                points: {show: true,radius: 4}
            },
            {
                label: '광고선전비',
                data: iasset16,
                lines: {show: true,lineWidth:2,fill: true,fillColor: {colors: [{opacity: 0.2}, {opacity: 0.2}]}},
                points: {show: true,radius: 4}
            },
            {
                label: '경상연구개발비',
                data: iasset17,
                lines: {show: true,lineWidth:2,fill: true,fillColor: {colors: [{opacity: 0.2}, {opacity: 0.2}]}},
                points: {show: true,radius: 4}
            },
            {
                label: '보험료',
                data: iasset18,
                lines: {show: true,lineWidth:2,fill: true,fillColor: {colors: [{opacity: 0.2}, {opacity: 0.2}]}},
                points: {show: true,radius: 4}
            },
            {
                label: '운반·하역·보관·포장비',
                data: iasset19,
                lines: {show: true,lineWidth:2,fill: true,fillColor: {colors: [{opacity: 0.2}, {opacity: 0.2}]}},
                points: {show: true,radius: 4}
            },
            {
                label: '대손상각비',
                data: iasset20,
                lines: {show: true,lineWidth:2,fill: true,fillColor: {colors: [{opacity: 0.2}, {opacity: 0.2}]}},
                points: {show: true,radius: 4}
            },
            {
                label: '기타판매비와관리비',
                data: iasset21,
                lines: {show: true,lineWidth:2,fill: true,fillColor: {colors: [{opacity: 0.2}, {opacity: 0.2}]}},
                points: {show: true,radius: 4}
            },
            {
                label: '이자수익',
                data: iasset22,
                lines: {show: true,lineWidth:2,fill: true,fillColor: {colors: [{opacity: 0.2}, {opacity: 0.2}]}},
                points: {show: true,radius: 4}
            },
            {
                label: '배당금수익',
                data: iasset23,
                lines: {show: true,lineWidth:2,fill: true,fillColor: {colors: [{opacity: 0.2}, {opacity: 0.2}]}},
                points: {show: true,radius: 4}
            },
            {
                label: '외환차익',
                data: iasset24,
                lines: {show: true,lineWidth:2,fill: true,fillColor: {colors: [{opacity: 0.2}, {opacity: 0.2}]}},
                points: {show: true,radius: 4}
            },
            {
                label: '외화환산이익',
                data: iasset25,
                lines: {show: true,lineWidth:2,fill: true,fillColor: {colors: [{opacity: 0.2}, {opacity: 0.2}]}},
                points: {show: true,radius: 4}
            },
            {
                label: '유가증권평가이익',
                data: iasset26,
                lines: {show: true,lineWidth:2,fill: true,fillColor: {colors: [{opacity: 0.2}, {opacity: 0.2}]}},
                points: {show: true,radius: 4}
            },
            {
                label: '투자·유형자산처분이익',
                data: iasset27,
                lines: {show: true,lineWidth:2,fill: true,fillColor: {colors: [{opacity: 0.2}, {opacity: 0.2}]}},
                points: {show: true,radius: 4}
            },
            {
                label: '기타영업외수익',
                data: iasset28,
                lines: {show: true,lineWidth:2,fill: true,fillColor: {colors: [{opacity: 0.2}, {opacity: 0.2}]}},
                points: {show: true,radius: 4}
            },
            {
                label: '이자비용',
                data: iasset29,
                lines: {show: true,lineWidth:2,fill: true,fillColor: {colors: [{opacity: 0.2}, {opacity: 0.2}]}},
                points: {show: true,radius: 4}
            },
            {
                label: '외환차손',
                data: iasset30,
                lines: {show: true,lineWidth:2,fill: true,fillColor: {colors: [{opacity: 0.2}, {opacity: 0.2}]}},
                points: {show: true,radius: 4}
            },
            {
                label: '외화환산손실',
                data: iasset31,
                lines: {show: true,lineWidth:2,fill: true,fillColor: {colors: [{opacity: 0.2}, {opacity: 0.2}]}},
                points: {show: true,radius: 4}
            },
            {
                label: '이연자산상각비',
                data: iasset32,
                lines: {show: true,lineWidth:2,fill: true,fillColor: {colors: [{opacity: 0.2}, {opacity: 0.2}]}},
                points: {show: true,radius: 4}
            },
            {
                label: '유가증권평가손실',
                data: iasset33,
                lines: {show: true,lineWidth:2,fill: true,fillColor: {colors: [{opacity: 0.2}, {opacity: 0.2}]}},
                points: {show: true,radius: 4}
            },
            {
                label: '투자·유형자산처분손실',
                data: iasset34,
                lines: {show: true,lineWidth:2,fill: true,fillColor: {colors: [{opacity: 0.2}, {opacity: 0.2}]}},
                points: {show: true,radius: 4}
            },
            {
                label: '기타영업외비용',
                data: iasset35,
                lines: {show: true,lineWidth:2,fill: true,fillColor: {colors: [{opacity: 0.2}, {opacity: 0.2}]}},
                points: {show: true,radius: 4}
            },
            {
                label: '법인세비용',
                data: iasset36,
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
        colors: ['#ffa31c','#00bcd4','#00bcd4','#00bcd4', '#00bcd4','#00bcd4','#00bcd4','#00bcd4','#00bcd4','#00bcd4','#00bcd4','#00bcd4','#00bcd4','#00bcd4','#00bcd4','#00bcd4','#00bcd4',"#a6c600", "#a6c600","#a6c600","#a6c600","#a6c600","#a6c600","#a6c600", "#177bbb","#177bbb","#177bbb","#177bbb","#177bbb","#177bbb","#177bbb","#8669CC"],
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
    
    
    
    
    
    
    
    
    
    // =================================================================
    // 매출액변화(연도별/전체 항목)
    // =================================================================

    var iasset50 = [[2014, 0], [2015, 10], [2016, 30]];
    var iasset51 = [[2014, 4], [2015, 17], [2016, 3]];
    var iasset52 = [[2014, 0], [2015, 0], [2016, 0]];
    var iasset53 = [[2014, 25], [2015, 20], [2016, 0]];
    var iasset54 = [[2014, 0], [2015, 0], [2016, 70]];
    var iasset55 = [[2014, 5], [2015, 50], [2016, 20]];
    var iasset56 = [[2014, 0], [2015, 0], [2016, 30]];
    var iasset57 = [[2014, 4], [2015, 17], [2016, 3]];
    var iasset58 = [[2014, 25], [2015, 0], [2016, 0]];
    var iasset59 = [[2014, 5], [2015, 0], [2016, 0]];
    var iasset60 = [[2014, 25], [2015, 10], [2016, 30]];
    
    var iplot3 = $.plot("#incomeLine3", [
            {
                label: '매출액',
                data: iasset50,
                lines: {show: true,lineWidth:2,fill: false,fillColor: {colors: [{opacity: 0.2}, {opacity: 0.2}]}},
                points: {show: true,radius: 4}
            },
            {
                label: '매출원가',
                data: iasset51,
                lines: {show: true,lineWidth:2,fill: false,fillColor: {colors: [{opacity: 0.2}, {opacity: 0.2}]}},
                points: {show: true,radius: 4}
            },
            {
                label: '매출총손익',
                data: iasset52,
                lines: {show: true,lineWidth:2,fill: false,fillColor: {colors: [{opacity: 0.2}, {opacity: 0.2}]}},
                points: {show: true,radius: 4}
            },
            {
                label: '판매비와관리비',
                data: iasset53,
                lines: {show: true,lineWidth:2,fill: false,fillColor: {colors: [{opacity: 0.2}, {opacity: 0.2}]}},
                points: {show: true,radius: 4}
            },
            {
                label: '영업손익',
                data: iasset54,
                lines: {show: true,lineWidth:2,fill: false,fillColor: {colors: [{opacity: 0.2}, {opacity: 0.2}]}},
                points: {show: true,radius: 4}
            },
            {
                label: '영업외수익',
                data: iasset55,
                lines: {show: true,lineWidth:2,fill: false,fillColor: {colors: [{opacity: 0.2}, {opacity: 0.2}]}},
                points: {show: true,radius: 4}
            },
            {
                label: '영업외비용',
                data: iasset56,
                lines: {show: true,lineWidth:2,fill: false,fillColor: {colors: [{opacity: 0.2}, {opacity: 0.2}]}},
                points: {show: true,radius: 4}
            },
            {
                label: '법인세차감전순손익',
                data: iasset57,
                lines: {show: true,lineWidth:2,fill: false,fillColor: {colors: [{opacity: 0.2}, {opacity: 0.2}]}},
                points: {show: true,radius: 4}
            },
            {
                label: '법인세비용',
                data: iasset58,
                lines: {show: true,lineWidth:2,fill: false,fillColor: {colors: [{opacity: 0.2}, {opacity: 0.2}]}},
                points: {show: true,radius: 4}
            },
            {
                label: '당기순손익',
                data: iasset59,
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
        colors: ["#ff0000", '#ffa31c','#faa01c','#00bcd4','#b00cd4',"#a6c600","#177bbb","#8669CC"],
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


    $("#incomeLine3").bind("plothover", function (event, pos, item) {

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
