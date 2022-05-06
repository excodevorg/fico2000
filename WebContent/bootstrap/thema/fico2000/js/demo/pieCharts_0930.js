
// pieCharts.js
// ====================================================================


 $(document).ready(function() {

//자산구성비~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    // =================================================================
    // 자산구성비연도별그래프
    // =================================================================

    var asset0 = [[2014, 20], [2015, 50], [2016, 70]];
    var asset1 = [[2014, 5], [2015, 80], [2016, 20]];
    var asset2 = [[2014, 25], [2015, 10], [2016, 30]];
    var asset3 = [[2014, 4], [2015, 17], [2016, 3]];
    var asset4 = [[2014, 25], [2015, 20], [2016, 35]];

    var plot = $.plot("#demo-flot-line", [
            {
                label: '당좌자산',
                data: asset0,
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
                label: '재고자산',
                data: asset1,
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
                label: '투자자산',
                data: asset2,
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
                label: '유형자산',
                data: asset3,
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
                label: '무형자산',
                data: asset4,
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


    $("#demo-flot-line").bind("plothover", function (event, pos, item) {

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
        { label: "당좌자산", data: 4119630000, color: "#ffa31c" },
        { label: "재고자산", data: 1012960000, color: "#00bcd4" },
        { label: "투자자산", data: 727080000, color: "#a6c600" },
        { label: "유형자산", data: 344120000, color: "#177bbb" },
        { label: "무형자산", data: 344120000, color: "#8669CC" }
    ];

    $.plot('#demo-flot-donut', dataSet, {
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
    // 자산 구성비(연도별/전체 항목)
    // =================================================================

    var asset5 = [[2014, 20], [2015, 50], [2016, 70]];
    var asset6 = [[2014, 5], [2015, 40], [2016, 20]];
    var asset7 = [[2014, 25], [2015, 10], [2016, 30]];
    var asset8 = [[2014, 4], [2015, 17], [2016, 3]];
    var asset9 = [[2014, 25], [2015, 20], [2016, 35]];
    var asset10 = [[2014, 5], [2015, 0], [2016, 20]];
    var asset11 = [[2014, 24], [2015, 10], [2016, 30]];
    var asset12 = [[2014, 4], [2015, 17], [2016, 3]];
    var asset13 = [[2014, 25], [2015, 0], [2016, 35]];
    var asset14 = [[2014, 0], [2015, 50], [2016, 70]];
    var asset15 = [[2014, 5], [2015, 0], [2016, 20]];
    var asset16 = [[2014, 60], [2015, 10], [2016, 30]];
    var asset17 = [[2014, 4], [2015, 17], [2016, 3]];
    var asset18 = [[2014, 0], [2015, 20], [2016, 35]];
    var asset19 = [[2014, 5], [2015, 90], [2016, 20]];
    var asset20 = [[2014, 0], [2015, 10], [2016, 30]];
    var asset21 = [[2014, 4], [2015, 17], [2016, 3]];
    var asset22 = [[2014, 0], [2015, 0], [2016, 0]];
    var asset23 = [[2014, 25], [2015, 20], [2016, 0]];
    var asset24 = [[2014, 0], [2015, 0], [2016, 70]];
    var asset25 = [[2014, 5], [2015, 50], [2016, 20]];
    var asset26 = [[2014, 0], [2015, 0], [2016, 30]];
    var asset27 = [[2014, 4], [2015, 17], [2016, 3]];
    var asset28 = [[2014, 25], [2015, 0], [2016, 0]];
    var asset29 = [[2014, 5], [2015, 0], [2016, 0]];
    var asset30 = [[2014, 25], [2015, 10], [2016, 30]];
    
     
    var plot2 = $.plot("#demo-flot-line2", [
            {
                label: '현금및현금성자산',
                data: asset5,
                lines: {show: true,lineWidth:2,fill: true,fillColor: {colors: [{opacity: 0.2}, {opacity: 0.2}]}},
                points: {show: true,radius: 4}
            },
            {
                label: '유가증권',
                data: asset6,
                lines: {show: true,lineWidth:2,fill: true,fillColor: {colors: [{opacity: 0.2}, {opacity: 0.2}]}},
                points: {show: true,radius: 4}
            },
            {
                label: '매출채권',
                data: asset7,
                lines: {show: true,lineWidth:2,fill: true,fillColor: {colors: [{opacity: 0.2}, {opacity: 0.2}]}},
                points: {show: true,radius: 4}
            },
            {
                label: '단기대여금',
                data: asset8,
                lines: {show: true,lineWidth:2,fill: true,fillColor: {colors: [{opacity: 0.2}, {opacity: 0.2}]}},
                points: {show: true,radius: 4}
            },
            {
                label: '미수금',
                data: asset9,
                lines: {show: true,lineWidth:2,fill: true,fillColor: {colors: [{opacity: 0.2}, {opacity: 0.2}]}},
                points: {show: true,radius: 4}
            },
            {
                label: '미수수익',
                data: asset10,
                lines: {show: true,lineWidth:2,fill: true,fillColor: {colors: [{opacity: 0.2}, {opacity: 0.2}]}},
                points: {show: true,radius: 4}
            },
            {
                label: '선급금',
                data: asset11,
                lines: {show: true,lineWidth:2,fill: true,fillColor: {colors: [{opacity: 0.2}, {opacity: 0.2}]}},
                points: {show: true,radius: 4}
            },
            {
                label: '선급비용',
                data: asset12,
                lines: {show: true,lineWidth:2,fill: true,fillColor: {colors: [{opacity: 0.2}, {opacity: 0.2}]}},
                points: {show: true,radius: 4}
            },
            {
                label: '기타 당좌자산',
                data: asset13,
                lines: {show: true,lineWidth:2,fill: true,fillColor: {colors: [{opacity: 0.2}, {opacity: 0.2}]}},
                points: {show: true,radius: 4}
            },
            {
                label: '상(제)품및반제품',
                data: asset14,
                lines: {show: true,lineWidth:2,fill: true,fillColor: {colors: [{opacity: 0.2}, {opacity: 0.2}]}},
                points: {show: true,radius: 4}
            },
            {
                label: '원재료',
                data: asset15,
                lines: {show: true,lineWidth:2,fill: true,fillColor: {colors: [{opacity: 0.2}, {opacity: 0.2}]}},
                points: {show: true,radius: 4}
            },
            {
                label: '기타 재고자산',
                data: asset16,
                lines: {show: true,lineWidth:2,fill: true,fillColor: {colors: [{opacity: 0.2}, {opacity: 0.2}]}},
                points: {show: true,radius: 4}
            },
            {
                label: '투자자산',
                data: asset17,
                lines: {show: true,lineWidth:2,fill: true,fillColor: {colors: [{opacity: 0.2}, {opacity: 0.2}]}},
                points: {show: true,radius: 4}
            },
            {
                label: '(투자유가증권)',
                data: asset18,
                lines: {show: true,lineWidth:2,fill: true,fillColor: {colors: [{opacity: 0.2}, {opacity: 0.2}]}},
                points: {show: true,radius: 4}
            },
            {
                label: '토지',
                data: asset19,
                lines: {show: true,lineWidth:2,fill: true,fillColor: {colors: [{opacity: 0.2}, {opacity: 0.2}]}},
                points: {show: true,radius: 4}
            },
            {
                label: '건물·구축물',
                data: asset20,
                lines: {show: true,lineWidth:2,fill: true,fillColor: {colors: [{opacity: 0.2}, {opacity: 0.2}]}},
                points: {show: true,radius: 4}
            },
            {
                label: '건물·구축물(감가상각비)',
                data: asset21,
                lines: {show: true,lineWidth:2,fill: true,fillColor: {colors: [{opacity: 0.2}, {opacity: 0.2}]}},
                points: {show: true,radius: 4}
            },
            {
                label: '기계장치',
                data: asset22,
                lines: {show: true,lineWidth:2,fill: true,fillColor: {colors: [{opacity: 0.2}, {opacity: 0.2}]}},
                points: {show: true,radius: 4}
            },
            {
                label: '기계장치(감가상각비)',
                data: asset23,
                lines: {show: true,lineWidth:2,fill: true,fillColor: {colors: [{opacity: 0.2}, {opacity: 0.2}]}},
                points: {show: true,radius: 4}
            },
            {
                label: '선박·차량구·운반구',
                data: asset24,
                lines: {show: true,lineWidth:2,fill: true,fillColor: {colors: [{opacity: 0.2}, {opacity: 0.2}]}},
                points: {show: true,radius: 4}
            },
            {
                label: '선박·차량구·운반구(감가상각비)',
                data: asset25,
                lines: {show: true,lineWidth:2,fill: true,fillColor: {colors: [{opacity: 0.2}, {opacity: 0.2}]}},
                points: {show: true,radius: 4}
            },
            {
                label: '건설중인자산',
                data: asset26,
                lines: {show: true,lineWidth:2,fill: true,fillColor: {colors: [{opacity: 0.2}, {opacity: 0.2}]}},
                points: {show: true,radius: 4}
            },
            {
                label: '기타유형자산',
                data: asset27,
                lines: {show: true,lineWidth:2,fill: true,fillColor: {colors: [{opacity: 0.2}, {opacity: 0.2}]}},
                points: {show: true,radius: 4}
            },
            {
                label: '개발비',
                data: asset28,
                lines: {show: true,lineWidth:2,fill: true,fillColor: {colors: [{opacity: 0.2}, {opacity: 0.2}]}},
                points: {show: true,radius: 4}
            },
            {
                label: '영업권',
                data: asset29,
                lines: {show: true,lineWidth:2,fill: true,fillColor: {colors: [{opacity: 0.2}, {opacity: 0.2}]}},
                points: {show: true,radius: 4}
            },
            {
                label: '기타 무형자산',
                data: asset30,
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
        colors: ['#ffa31c', '#ffa31c','#ffa31c','#ffa31c','#ffa31c','#ffa31c','#ffa31c','#ffa31c','#ffa31c','#00bcd4','#00bcd4','#00bcd4', "#a6c600", "#a6c600", "#177bbb","#177bbb","#177bbb","#177bbb","#177bbb","#177bbb","#177bbb","#177bbb","#177bbb","#8669CC","#8669CC","#8669CC"],
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


    $("#demo-flot-line2").bind("plothover", function (event, pos, item) {

        if (item) {
            var x = item.datapoint[0].toFixed(2),  y = item.datapoint[1];
            $("#demo-flot-tooltip").html("<p class='h4'>" + item.series.label + "</p>" + y)
                .css({top: item.pageY+5, left: item.pageX+5})
                .fadeIn(200);
        } else {
            $("#demo-flot-tooltip").hide();
        }

    });
     
     
//자산구성비~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
     
     
//부채및자본구성비~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    // =================================================================
    // 부채및자본구성비연도별그래프
    // =================================================================

    var asset2_0 = [[2014, 20], [2015, 50], [2016, 70]];
    var asset2_1 = [[2014, 5], [2015, 80], [2016, 20]];
    var asset2_2 = [[2014, 25], [2015, 10], [2016, 30]];

    var plot2_1 = $.plot("#demo-flot-line2_2", [
            {
                label: '유동부채',
                data: asset2_0,
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
                label: '비유동부채',
                data: asset2_1,
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
                label: '자본',
                data: asset2_2,
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


    $("#demo-flot-line2_2").bind("plothover", function (event, pos, item) {

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
    var dataSet2 = [
        { label: "유동부채", data: 4119630000, color: "#ffa31c" },
        { label: "비유동부채", data: 1012960000, color: "#00bcd4" },
        { label: "자본", data: 727080000, color: "#a6c600" }
    ];

    $.plot('#demo-flot-donut2_1', dataSet2, {
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

    var asset2_3 = [[2014, 20], [2015, 50], [2016, 70]];
    var asset2_4 = [[2014, 5], [2015, 80], [2016, 20]];
    var asset2_5 = [[2014, 25], [2015, 10], [2016, 30]];
    var asset2_6 = [[2014, 0], [2015, 0], [2016, 0]];
    var asset2_7 = [[2014, 5], [2015, 0], [2016, 20]];
    var asset2_8 = [[2014, 25], [2015, 10], [2016, 30]];
    var asset2_9 = [[2014, 0], [2015, 0], [2016, 70]];
    var asset2_10 = [[2014, 5], [2015, 0], [2016, 20]];
    var asset2_11 = [[2014, 25], [2015, 10], [2016, 0]];
    var asset2_12 = [[2014, 0], [2015, 20], [2016, 0]];
    var asset2_13 = [[2014, 5], [2015, 0], [2016, 20]];
    var asset2_14 = [[2014, 25], [2015, 10], [2016, 30]];
    var asset2_15 = [[2014, 0], [2015, 50], [2016, 70]];
    var asset2_16 = [[2014, 5], [2015, 0], [2016, 0]];
    var asset2_17 = [[2014, 0], [2015, 10], [2016, 30]];
    var asset2_18 = [[2014, 20], [2015, 0], [2016, 70]];
    var asset2_19 = [[2014, 5], [2015, 0], [2016, 20]];
    var asset2_20 = [[2014, 25], [2015, 10], [2016, 30]];
    var asset2_21 = [[2014, 20], [2015, 5], [2016, 3]];
    var asset2_22 = [[2014, 5], [2015, 0], [2016, 0]];
    

    var plot2_1 = $.plot("#demo-flot-line2_3", [
            {
                label: '매입채무',
                data: asset2_3,
                lines: {show: true,lineWidth:2,fill: true,fillColor: {colors: [{opacity: 0.2}, {opacity: 0.2}]}},
                points: {show: true,radius: 4}
            },
            {
                label: '단기금융기관차입금',
                data: asset2_4,
                lines: {show: true,lineWidth:2,fill: true,fillColor: {colors: [{opacity: 0.2}, {opacity: 0.2}]}},
                points: {show: true,radius: 4}
            },
            {
                label: '미지급금',
                data: asset2_5,
                lines: {show: true,lineWidth:2,fill: true,fillColor: {colors: [{opacity: 0.2}, {opacity: 0.2}]}},
                points: {show: true,radius: 4}
            },
            {
                label: '선수금',
                data: asset2_6,
                lines: {show: true,lineWidth:2,fill: true,fillColor: {colors: [{opacity: 0.2}, {opacity: 0.2}]}},
                points: {show: true,radius: 4}
            },
            {
                label: '예수금',
                data: asset2_7,
                lines: {show: true,lineWidth:2,fill: true,fillColor: {colors: [{opacity: 0.2}, {opacity: 0.2}]}},
                points: {show: true,radius: 4}
            },
            {
                label: '미지급비용',
                data: asset2_8,
                lines: {show: true,lineWidth:2,fill: true,fillColor: {colors: [{opacity: 0.2}, {opacity: 0.2}]}},
                points: {show: true,radius: 4}
            },
            {
                label: '유동성장기부채',
                data: asset2_9,
                lines: {show: true,lineWidth:2,fill: true,fillColor: {colors: [{opacity: 0.2}, {opacity: 0.2}]}},
                points: {show: true,radius: 4}
            },
            {
                label: '선수수익',
                data: asset2_10,
                lines: {show: true,lineWidth:2,fill: true,fillColor: {colors: [{opacity: 0.2}, {opacity: 0.2}]}},
                points: {show: true,radius: 4}
            },
            {
                label: '부채성충당금',
                data: asset2_11,
                lines: {show: true,lineWidth:2,fill: true,fillColor: {colors: [{opacity: 0.2}, {opacity: 0.2}]}},
                points: {show: true,radius: 4}
            },
            {
                label: '미지급법인세',
                data: asset2_12,
                lines: {show: true,lineWidth:2,fill: true,fillColor: {colors: [{opacity: 0.2}, {opacity: 0.2}]}},
                points: {show: true,radius: 4}
            },
            {
                label: '기타유동부채',
                data: asset2_13,
                lines: {show: true,lineWidth:2,fill: true,fillColor: {colors: [{opacity: 0.2}, {opacity: 0.2}]}},
                points: {show: true,radius: 4}
            },
            {
                label: '회사채',
                data: asset2_14,
                lines: {show: true,lineWidth:2,fill: true,fillColor: {colors: [{opacity: 0.2}, {opacity: 0.2}]}},
                points: {show: true,radius: 4}
            },
            {
                label: '장기금융기관차입금',
                data: asset2_15,
                lines: {show: true,lineWidth:2,fill: true,fillColor: {colors: [{opacity: 0.2}, {opacity: 0.2}]}},
                points: {show: true,radius: 4}
            },
            {
                label: '기타장기차입금',
                data: asset2_16,
                lines: {show: true,lineWidth:2,fill: true,fillColor: {colors: [{opacity: 0.2}, {opacity: 0.2}]}},
                points: {show: true,radius: 4}
            },
            {
                label: '퇴직금충당금',
                data: asset2_17,
                lines: {show: true,lineWidth:2,fill: true,fillColor: {colors: [{opacity: 0.2}, {opacity: 0.2}]}},
                points: {show: true,radius: 4}
            },
            {
                label: '기타고정부채',
                data: asset2_18,
                lines: {show: true,lineWidth:2,fill: true,fillColor: {colors: [{opacity: 0.2}, {opacity: 0.2}]}},
                points: {show: true,radius: 4}
            },
            {
                label: '자본금',
                data: asset2_19,
                lines: {show: true,lineWidth:2,fill: true,fillColor: {colors: [{opacity: 0.2}, {opacity: 0.2}]}},
                points: {show: true,radius: 4}
            },
            {
                label: '자본잉여금',
                data: asset2_20,
                lines: {show: true,lineWidth:2,fill: true,fillColor: {colors: [{opacity: 0.2}, {opacity: 0.2}]}},
                points: {show: true,radius: 4}
            },
            {
                label: '이익잉여금',
                data: asset2_21,
                lines: {show: true,lineWidth:2,fill: true,fillColor: {colors: [{opacity: 0.2}, {opacity: 0.2}]}},
                points: {show: true,radius: 4}
            },
            {
                label: '자본조정',
                data: asset2_22,
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


    $("#demo-flot-line2_3").bind("plothover", function (event, pos, item) {

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
//부채및자본구성비~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ 
     
     
     




//IncomeStatement구성비~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ 
     
   
    // =================================================================
    // IncomeStatement구성비연도별그래프
    // =================================================================

    var asset3_0 = [[2014, 20], [2015, 50], [2016, 70]];
    var asset3_1 = [[2014, 5], [2015, 80], [2016, 20]];

    var plot3_1 = $.plot("#incomeLine", [
            {
                label: '매출원가',
                data: asset3_0,
                lines: {show: true,lineWidth:2,fill: true,fillColor: {colors: [{opacity: 0.2}, {opacity: 0.2}]}},
                points: {show: true,radius: 4}
            },
            {
                label: '매출총손익',
                data: asset3_1,
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
        colors: ['#ffa31c', '#00bcd4'],
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
    // IncomeStatement원그래프
    // =================================================================
    var dataSet3 = [
        { label: "매출원가", data: 4119630000, color: "#ffa31c" },
        { label: "매출총손익", data: 1012960000, color: "#00bcd4" }
    ];

    $.plot('#incomeDonut', dataSet3, {
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
    // IncomeStatement (연도별/전체 항목)
    // =================================================================

    var asset3_3 = [[2014, 20], [2015, 50], [2016, 70]];
    var asset3_4 = [[2014, 5], [2015, 80], [2016, 20]];
    var asset3_5 = [[2014, 25], [2015, 10], [2016, 30]];
    var asset3_6 = [[2014, 0], [2015, 0], [2016, 0]];
    var asset3_7 = [[2014, 5], [2015, 0], [2016, 20]];
    var asset3_8 = [[2014, 25], [2015, 10], [2016, 30]];
    var asset3_9 = [[2014, 0], [2015, 0], [2016, 70]];
    var asset3_10 = [[2014, 5], [2015, 0], [2016, 20]];
    var asset3_11 = [[2014, 25], [2015, 10], [2016, 0]];
    var asset3_12 = [[2014, 0], [2015, 20], [2016, 0]];
    var asset3_13 = [[2014, 5], [2015, 0], [2016, 20]];
    var asset3_14 = [[2014, 25], [2015, 10], [2016, 30]];
    var asset3_15 = [[2014, 0], [2015, 50], [2016, 70]];
    var asset3_16 = [[2014, 5], [2015, 0], [2016, 0]];
    var asset3_17 = [[2014, 0], [2015, 10], [2016, 30]];
    var asset3_18 = [[2014, 20], [2015, 0], [2016, 70]];
    var asset3_19 = [[2014, 5], [2015, 0], [2016, 20]];
    var asset3_20 = [[2014, 25], [2015, 10], [2016, 30]];
    var asset3_21 = [[2014, 20], [2015, 5], [2016, 3]];
    var asset3_22 = [[2014, 5], [2015, 0], [2016, 0]];
    var asset3_23 = [[2014, 5], [2015, 0], [2016, 20]];
    var asset3_24 = [[2014, 25], [2015, 10], [2016, 30]];
    var asset3_25 = [[2014, 0], [2015, 50], [2016, 70]];
    var asset3_26 = [[2014, 5], [2015, 0], [2016, 0]];
    var asset3_27 = [[2014, 0], [2015, 10], [2016, 30]];
    var asset3_28 = [[2014, 20], [2015, 0], [2016, 70]];
    var asset3_29 = [[2014, 5], [2015, 0], [2016, 20]];
    var asset3_30 = [[2014, 25], [2015, 10], [2016, 30]];
    var asset3_31 = [[2014, 20], [2015, 5], [2016, 3]];
    var asset3_32 = [[2014, 5], [2015, 0], [2016, 0]];
    var asset3_33 = [[2014, 5], [2015, 0], [2016, 20]];
    var asset3_34 = [[2014, 25], [2015, 10], [2016, 30]];

    var plot3_3 = $.plot("#incomeLine2", [
            {
                label: '급여',
                data: asset3_3,
                lines: {show: true,lineWidth:2,fill: true,fillColor: {colors: [{opacity: 0.2}, {opacity: 0.2}]}},
                points: {show: true,radius: 4}
            },
            {
                label: '퇴직급여',
                data: asset3_4,
                lines: {show: true,lineWidth:2,fill: true,fillColor: {colors: [{opacity: 0.2}, {opacity: 0.2}]}},
                points: {show: true,radius: 4}
            },
            {
                label: '복리후생비',
                data: asset3_5,
                lines: {show: true,lineWidth:2,fill: true,fillColor: {colors: [{opacity: 0.2}, {opacity: 0.2}]}},
                points: {show: true,radius: 4}
            },
            {
                label: '수도광열비',
                data: asset3_6,
                lines: {show: true,lineWidth:2,fill: true,fillColor: {colors: [{opacity: 0.2}, {opacity: 0.2}]}},
                points: {show: true,radius: 4}
            },
            {
                label: '세금과공과',
                data: asset3_7,
                lines: {show: true,lineWidth:2,fill: true,fillColor: {colors: [{opacity: 0.2}, {opacity: 0.2}]}},
                points: {show: true,radius: 4}
            },
            {
                label: '임차료',
                data: asset3_8,
                lines: {show: true,lineWidth:2,fill: true,fillColor: {colors: [{opacity: 0.2}, {opacity: 0.2}]}},
                points: {show: true,radius: 4}
            },
            {
                label: '감가상각비',
                data: asset3_9,
                lines: {show: true,lineWidth:2,fill: true,fillColor: {colors: [{opacity: 0.2}, {opacity: 0.2}]}},
                points: {show: true,radius: 4}
            },
            {
                label: '무형자산상각비',
                data: asset3_10,
                lines: {show: true,lineWidth:2,fill: true,fillColor: {colors: [{opacity: 0.2}, {opacity: 0.2}]}},
                points: {show: true,radius: 4}
            },
            {
                label: '통신비',
                data: asset3_11,
                lines: {show: true,lineWidth:2,fill: true,fillColor: {colors: [{opacity: 0.2}, {opacity: 0.2}]}},
                points: {show: true,radius: 4}
            },
            {
                label: '접대비',
                data: asset3_12,
                lines: {show: true,lineWidth:2,fill: true,fillColor: {colors: [{opacity: 0.2}, {opacity: 0.2}]}},
                points: {show: true,radius: 4}
            },
            {
                label: '광고선전비',
                data: asset3_13,
                lines: {show: true,lineWidth:2,fill: true,fillColor: {colors: [{opacity: 0.2}, {opacity: 0.2}]}},
                points: {show: true,radius: 4}
            },
            {
                label: '경상연구개발비',
                data: asset3_14,
                lines: {show: true,lineWidth:2,fill: true,fillColor: {colors: [{opacity: 0.2}, {opacity: 0.2}]}},
                points: {show: true,radius: 4}
            },
            {
                label: '보험료',
                data: asset3_15,
                lines: {show: true,lineWidth:2,fill: true,fillColor: {colors: [{opacity: 0.2}, {opacity: 0.2}]}},
                points: {show: true,radius: 4}
            },
            {
                label: '운반·하역·보관·포장비',
                data: asset3_16,
                lines: {show: true,lineWidth:2,fill: true,fillColor: {colors: [{opacity: 0.2}, {opacity: 0.2}]}},
                points: {show: true,radius: 4}
            },
            {
                label: '퇴직금충당금',
                data: asset3_17,
                lines: {show: true,lineWidth:2,fill: true,fillColor: {colors: [{opacity: 0.2}, {opacity: 0.2}]}},
                points: {show: true,radius: 4}
            },
            {
                label: '대손상각비',
                data: asset3_18,
                lines: {show: true,lineWidth:2,fill: true,fillColor: {colors: [{opacity: 0.2}, {opacity: 0.2}]}},
                points: {show: true,radius: 4}
            },
            {
                label: '기타판매비와관리비',
                data: asset3_19,
                lines: {show: true,lineWidth:2,fill: true,fillColor: {colors: [{opacity: 0.2}, {opacity: 0.2}]}},
                points: {show: true,radius: 4}
            },
            {
                label: '이자수익',
                data: asset3_20,
                lines: {show: true,lineWidth:2,fill: true,fillColor: {colors: [{opacity: 0.2}, {opacity: 0.2}]}},
                points: {show: true,radius: 4}
            },
            {
                label: '배당금수익',
                data: asset3_21,
                lines: {show: true,lineWidth:2,fill: true,fillColor: {colors: [{opacity: 0.2}, {opacity: 0.2}]}},
                points: {show: true,radius: 4}
            },
            {
                label: '외환차익',
                data: asset3_22,
                lines: {show: true,lineWidth:2,fill: true,fillColor: {colors: [{opacity: 0.2}, {opacity: 0.2}]}},
                points: {show: true,radius: 4}
            },
            {
                label: '외화환산이익',
                data: asset3_23,
                lines: {show: true,lineWidth:2,fill: true,fillColor: {colors: [{opacity: 0.2}, {opacity: 0.2}]}},
                points: {show: true,radius: 4}
            },
            {
                label: '유가증권평가이익',
                data: asset3_24,
                lines: {show: true,lineWidth:2,fill: true,fillColor: {colors: [{opacity: 0.2}, {opacity: 0.2}]}},
                points: {show: true,radius: 4}
            },
            {
                label: '투자·유형자산처분이익',
                data: asset3_25,
                lines: {show: true,lineWidth:2,fill: true,fillColor: {colors: [{opacity: 0.2}, {opacity: 0.2}]}},
                points: {show: true,radius: 4}
            },
            {
                label: '기타영업외수익',
                data: asset3_26,
                lines: {show: true,lineWidth:2,fill: true,fillColor: {colors: [{opacity: 0.2}, {opacity: 0.2}]}},
                points: {show: true,radius: 4}
            },
            {
                label: '이자비용',
                data: asset3_27,
                lines: {show: true,lineWidth:2,fill: true,fillColor: {colors: [{opacity: 0.2}, {opacity: 0.2}]}},
                points: {show: true,radius: 4}
            },
            {
                label: '외환차손',
                data: asset3_28,
                lines: {show: true,lineWidth:2,fill: true,fillColor: {colors: [{opacity: 0.2}, {opacity: 0.2}]}},
                points: {show: true,radius: 4}
            },
            {
                label: '외화환산손실',
                data: asset3_29,
                lines: {show: true,lineWidth:2,fill: true,fillColor: {colors: [{opacity: 0.2}, {opacity: 0.2}]}},
                points: {show: true,radius: 4}
            },
            {
                label: '이연자산상각비',
                data: asset3_30,
                lines: {show: true,lineWidth:2,fill: true,fillColor: {colors: [{opacity: 0.2}, {opacity: 0.2}]}},
                points: {show: true,radius: 4}
            },
            {
                label: '유가증권평가손실',
                data: asset3_31,
                lines: {show: true,lineWidth:2,fill: true,fillColor: {colors: [{opacity: 0.2}, {opacity: 0.2}]}},
                points: {show: true,radius: 4}
            },
            {
                label: '투자·유형자산처분손실',
                data: asset3_32,
                lines: {show: true,lineWidth:2,fill: true,fillColor: {colors: [{opacity: 0.2}, {opacity: 0.2}]}},
                points: {show: true,radius: 4}
            },
            {
                label: '기타영업외비용',
                data: asset3_33,
                lines: {show: true,lineWidth:2,fill: true,fillColor: {colors: [{opacity: 0.2}, {opacity: 0.2}]}},
                points: {show: true,radius: 4}
            },
            {
                label: '법인세비용',
                data: asset3_34,
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
     
     
//매출액구성비~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ 
     
      
     
