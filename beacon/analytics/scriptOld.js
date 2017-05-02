$(document).ready(function() {


        $('#tableAnalytics .col.bookImbalanceCol2').text(Math.random() * 0.834568908555678996);


        var chart;

        google.charts.load('current', { packages: ['corechart', 'bar'] });
        google.charts.load('current', { 'packages': ['corechart'] });
        // google.charts.load('current', {'packages':['line']});

        // google.charts.setOnLoadCallback(drawChart);
        // google.charts.setOnLoadCallback(drawMultSeries);
        google.charts.setOnLoadCallback(drawBasic);
        google.charts.setOnLoadCallback(drawBasicNegative);

        google.charts.setOnLoadCallback(drawPieChart);
        google.charts.setOnLoadCallback(drawLineChart);

        // function resize(){
        //  chart.draw(data, options)
        // }
        // stack overflow responsive google charts

        // function drawMultSeries() {
        //     var data = google.visualization.arrayToDataTable([
        //         ['Ticker', '2017', '2016'],
        //         ['AMZN', 8175000, 8008000],
        //         ['AAPL', 3792000, 3694000],
        //         ['GOOG', 2695000, 2896000],
        //         ['WOW', 2099000, 1953000],
        //         ['GEE', 1526000, 1517000]
        //     ]);

        //     var options = {
        //         tooltip: { isHtml: true },
        //         backgroundColor: "#26264E",
        //         titleTextStyle: { color: '#ffffff' },
        //         titleStyle: { color: '#ffffff' },
        //         // lineWidth: 0.75,

        //         // title: 'Population of Largest U.S. Cities',
        //         chartArea: { top: 35, width: '62%', height: '70%', backgroundColor: { fill: "#26264E" } },
        //         hAxis: {
        //             title: 'Adv$',
        //             gridlines: { color: '#2d4088' },
        //             minValue: 0,
        //             titleTextStyle: { color: '#ffffff' },
        //             titleStyle: { color: '#ffffff' },
        //             textStyle: {
        //                 color: '#EAEAEA',
        //                 fontName: 'Roboto',
        //                 fontSize: '10'
        //             }
        //         },

        //         vAxis: {
        //             title: 'Stocks',
        //             titleTextStyle: { color: '#ffffff' },
        //             baselineColor: '#e6e6e6',
        //             gridlines: {
        //                 color: '#26264E'
        //                     // count: 9
        //             },
        //             textStyle: {
        //                 color: '#EAEAEA',
        //                 fontName: 'Roboto',
        //                 fontSize: '10'
        //             },
        //         },

        //         legend: {
        //             textStyle: {
        //                 color: '#EAEAEA',
        //                 fontName: 'Roboto',
        //                 fontSize: '12'
        //             }
        //         },
        //         colors: ['#905de8', '#813afd']
        //     };

        //     var chart = new google.visualization.BarChart(document.getElementById('chart_div'));
        //     chart.draw(data, options);
        // }







        function drawPieChart() {

            var data = google.visualization.arrayToDataTable([
                ['Stock', 'Percentage Traded'],
                ['AAPL', 11],
                ['IBM', 2],
                ['MSFT', 2],
                ['GOOG', 2],
                ['AMZN', 7]
            ]);

            var options = {
                tooltip: { isHtml: true },
                width: '90%',
                backgroundColor: "#26264E",


                titleTextStyle: { color: '#ffffff' },
                titleStyle: { color: '#26264E' },


                // title: 'Population of Largest U.S. Cities',

                chartArea: { left: 0, top: 25, width: "80%", height: "80%" },
                
                legend: {
                    left: 0,
                    top: 25,
                    textStyle: {
                        color: '#EAEAEA',
                        fontName: 'Roboto',
                        fontSize: '12'
                    }
                },
                pieSliceBorderColor: "#26264E",
                colors: ['#cdb8f2', '#a984ea', '#0069cb', '#905de8', '#8d00cb', '#B39DDB']
                // colors: ['#cdb8f2', '#9575CD', '#0069cb', '#905de8', '#8d00cb', '#B39DDB']
                

                // colors: ['#B39DDB', '#9575CD', '#905de8', '#822bfe', '#8d00cb', '#B39DDB']
            };
            var chart = new google.visualization.PieChart(document.getElementById('piechart'));

            chart.draw(data, options);
        }



        function drawLineChart() {
            var data = google.visualization.arrayToDataTable([
                ['Game', 'Pts', 'Agt'],
                [1, 21, 32],
                [2, 18, 23],
                [3, 27, 17],
                [4, 35, 24],
                [5, 23, 10],
                [6, 20, 21],
                [7, 28, 24],
                [8, 17, 21],
                [9, 22, 20],
                [10, 13, 28],
                [11, 27, 13],
                [12, 31, 28],
                [13, 23, 21],
                [14, 28, 27],
                [15, 17, 20],
                [16, 13, 17]
            ]);

            var options = {
                tooltip: { isHtml: true },
                backgroundColor: '#26264E',
                focusTarget: 'category',
                // lineWidth: '0.75',
                hAxis: {
                    gridlines: { color: '#2d4088' },
                    // color: 'none',
                    // baselineColor: 'none',
                    textStyle: {
                        color: '#EAEAEA',
                        fontName: 'Roboto',
                        fontSize: '10'
                    }
                },
                vAxis: {
                    baselineColor: 'none',
                    gridlines: {
                        color: 'none'
                    },
                    textStyle: {
                        color: '#EAEAEA',
                        fontName: 'Roboto',
                        fontSize: '10'
                    },
                },
                legend: {
                    textStyle: {
                        color: '#EAEAEA',
                        fontName: 'Roboto',
                        fontSize: '12'
                    }
                },
                curveType: 'function',
                // legend: 'none',
                pointSize: 4,
                colors: ['#cddc39', '#03a9f4'],
                crosshair: {
                    trigger: 'none'
                }
            };

            var chart = new google.visualization.LineChart(document.getElementById('chart_div_line'));
            chart.draw(data, options);
        }

        // var analyticsArray = [
        //     { ticker: "amzn", priceUS: 160.01, priceMid: 50.015, bookImbalance: 0.124568908555678996, bookImbalance2: 0.40894137334632510, bookImbalance3: 0.35566990715331636, bookImbalance4: 0.65226806066336530, medSpread: 12000000, adv$: 27546896, advShares: 3123567, adv: 345130000, volatility21: 13.45, earningUp: "2017-04-17" },
        //     { ticker: "goog", priceUS: 160.01, priceMid: 50.015, bookImbalance: 0.124568908555678996, bookImbalance2: 0.40894137334632510, bookImbalance3: 0.35566990715331636, bookImbalance4: 0.65226806066336530, medSpread: 12000000, adv$: 27546896, advShares: 3123567, adv: 345130000, volatility21: 13.45, earningUp: "2017-04-17" },
        //     { ticker: "aapl", priceUS: 160.01, priceMid: 50.015, bookImbalance: 0.124568908555678996, bookImbalance2: 0.40894137334632510, bookImbalance3: 0.35566990715331636, bookImbalance4: 0.65226806066336530, medSpread: 12000000, adv$: 27546896, advShares: 3123567, adv: 345130000, volatility21: 13.45, earningUp: "2017-04-17" },
        //     { ticker: "hog", priceUS: 160.01, priceMid: 50.015, bookImbalance: 0.124568908555678996, bookImbalance2: 0.40894137334632510, bookImbalance3: 0.35566990715331636, bookImbalance4: 0.65226806066336530, medSpread: 12000000, adv$: 27546896, advShares: 3123567, adv: 345130000, volatility21: 13.45, earningUp: "2017-04-17" },
        //     { ticker: "hal", priceUS: 160.01, priceMid: 50.015, bookImbalance: 0.124568908555678996, bookImbalance2: 0.40894137334632510, bookImbalance3: 0.35566990715331636, bookImbalance4: 0.65226806066336530, medSpread: 12000000, adv$: 27546896, advShares: 3123567, adv: 345130000, volatility21: 13.45, earningUp: "2017-04-17" },
        //     { ticker: "hog", priceUS: 160.01, priceMid: 50.015, bookImbalance: 0.124568908555678996, bookImbalance2: 0.40894137334632510, bookImbalance3: 0.35566990715331636, bookImbalance4: 0.65226806066336530, medSpread: 12000000, adv$: 27546896, advShares: 3123567, adv: 345130000, volatility21: 13.45, earningUp: "2017-04-17" },
        //     { ticker: "mzn", priceUS: 160.01, priceMid: 50.015, bookImbalance: 0.124568908555678996, bookImbalance2: 0.40894137334632510, bookImbalance3: 0.35566990715331636, bookImbalance4: 0.65226806066336530, medSpread: 12000000, adv$: 27546896, advShares: 3123567, adv: 345130000, volatility21: 13.45, earningUp: "2017-04-17" },
        //     { ticker: "msft", priceUS: 160.01, priceMid: 50.015, bookImbalance: 0.124568908555678996, bookImbalance2: 0.40894137334632510, bookImbalance3: 0.35566990715331636, bookImbalance4: 0.65226806066336530, medSpread: 12000000, adv$: 27546896, advShares: 3123567, adv: 345130000, volatility21: 13.45, earningUp: "2017-04-17" },
        //     { ticker: "wow", priceUS: 160.01, priceMid: 50.015, bookImbalance: 0.124568908555678996, bookImbalance2: 0.40894137334632510, bookImbalance3: 0.35566990715331636, bookImbalance4: 0.65226806066336530, medSpread: 12000000, adv$: 27546896, advShares: 3123567, adv: 345130000, volatility21: 13.45, earningUp: "2017-04-17" },
        //     { ticker: "chico", priceUS: 160.01, priceMid: 50.015, bookImbalance: 0.124568908555678996, bookImbalance2: 0.40894137334632510, bookImbalance3: 0.35566990715331636, bookImbalance4: 0.65226806066336530, medSpread: 12000000, adv$: 27546896, advShares: 3123567, adv: 345130000, volatility21: 13.45, earningUp: "2017-04-17" }



        // ];


        var tickerArray = [
            { ticker: "AAPL", earningUp: "2017-04-17", adv: 345130000 },
            { ticker: "PBR", earningUp: "2017-04-17", adv: 345130000 },
            { ticker: "HOG", earningUp: "2017-04-17", adv: 345130000 },
            { ticker: "ITUB", earningUp: "2017-04-17", adv: 345130000 },
            { ticker: "GE", earningUp: "2017-04-17", adv: 345130000 },
            { ticker: "CUZ", earningUp: "2017-04-17", adv: 345130000 },
            { ticker: "DVA", earningUp: "2017-04-17", adv: 345130000 },
            { ticker: "FCAU", earningUp: "2017-04-17", adv: 345130000 },
            { ticker: "TWTR", earningUp: "2017-04-17", adv: 345130000 },
            { ticker: "XOM", earningUp: "2017-04-17", adv: 345130000 },
            { ticker: "JLUV", earningUp: "2017-04-17", adv: 345130000 },
            { ticker: "FLOM", earningUp: "2017-04-17", adv: 345130000 },
            { ticker: "LUV", earningUp: "2017-04-17", adv: 345130000 },
            { ticker: "LVLT", earningUp: "2017-04-17", adv: 345130000 },
            { ticker: "ORCL", earningUp: "2017-04-17", adv: 345130000 },

            { ticker: "ABEV", earningUp: "2017-04-17", adv: 345130000 },
            { ticker: "AMZN", earningUp: "2017-04-17", adv: 345130000 },
            { ticker: "HAL", earningUp: "2017-04-17", adv: 345130000 },
            { ticker: "CAH", earningUp: "2017-04-17", adv: 345130000 },
            { ticker: "ECA", earningUp: "2017-04-17", adv: 345130000 },
            { ticker: "FCX", earningUp: "2017-04-17", adv: 345130000 },


            { ticker: "EW", earningUp: "2017-04-17", adv: 345130000 },

            { ticker: "DZN", earningUp: "2017-04-17", adv: 345130000 },
            { ticker: "GGB", earningUp: "2017-04-17", adv: 345130000 },



            { ticker: "RAD", earningUp: "2017-04-17", adv: 345130000 },
            { ticker: "RIG", earningUp: "2017-04-17", adv: 345130000 },
            { ticker: "TWLO", earningUp: "2017-04-17", adv: 345130000 },
            { ticker: "EGO", earningUp: "2017-04-17", adv: 345130000 },

            { ticker: "ZBH", earningUp: "2017-04-17", adv: 345130000 },
            { ticker: "AUY", earningUp: "2017-04-17", adv: 345130000 },
            { ticker: "BABA", earningUp: "2017-04-17", adv: 345130000 },
            { ticker: "BHI", earningUp: "2017-04-17", adv: 345130000 },


            { ticker: "SCAD", earningUp: "2017-04-17", adv: 345130000 },
            { ticker: "GRIG", earningUp: "2017-04-17", adv: 345130000 },
            { ticker: "WLTO", earningUp: "2017-04-17", adv: 345130000 },
            { ticker: "LEGO", earningUp: "2017-04-17", adv: 345130000 },

            { ticker: "ZYBH", earningUp: "2017-04-17", adv: 345130000 },
            { ticker: "APUY", earningUp: "2017-04-17", adv: 345130000 },
            { ticker: "DADA", earningUp: "2017-04-17", adv: 345130000 },
            { ticker: "CHILO", earningUp: "2017-04-17", adv: 345130000 }
        ];


        function makeAnalyticsTable(ticker, priceUS, priceMid, bookImbalance, bookImbalance2, bookImbalance3, bookImbalance4, medSpread, adv$, advShares, volatility21) {

            var rowAnalytics;
            rowAnalytics = $('<div class="rowAnalyticsFlex"><div class="col tickerCol">' + ticker + '</div><div class="col priceColUS">$' + priceUS + '</div><div class="col priceColMid">' + priceMid + '</div><div class="col bookImbalanceCol">' + bookImbalance + '</div><div class="col bookImbalanceCol2">' + bookImbalance2 + '</div><div class="col bookImbalanceCol3">' + bookImbalance3 + '</div><div class="col bookImbalanceCol4">' + bookImbalance4 + '</div><div class="col medSpread">' + medSpread + '</div><div class="col adv$">' + adv$ + '</div><div class="col advShares">' + advShares + '</div><div class="col volatility21">' + volatility21 + '</div><div class="col earningUp">2017-04-19</div></div>');


            $('#tableAnalytics').append(rowAnalytics);

        };


        var stockAdvArray = [];




        function iterateAnalyticsTable(arr) {
            for (i = 0; i < arr.length; i++) {
                var priceUS = Math.round((Math.random() * 160) * 100) / 100;

                var priceMid = Math.round((Math.random() * 50) * 1000) / 1000;
                var bookImbalance = Math.random() * 0.834568908555678996;
                var bookImbalance2 = Math.random() * 0.934568908555678996;
                var bookImbalance3 = Math.random() * 0.534568908555678996;
                var bookImbalance4 = Math.random() * 0.234568908555678996;
                var medSpread = Math.round(Math.random() * 12000000);
                var adv$ = Math.round(Math.random() * 27546896);
                var advShares = Math.round(Math.random() * 3123567);
                var volatility21 = Math.round((Math.random() * 13.45) * 100) / 100;

                // makeAnalyticsTable(arr[i].ticker, arr[i].priceUS, arr[i].priceMid, arr[i].bookImbalance, arr[i].bookImbalance2, arr[i].bookImbalance3, arr[i].bookImbalance4, arr[i].medSpread, arr[i].adv$, arr[i].advShares, arr[i].volatility21);
                makeAnalyticsTable(arr[i].ticker, priceUS, priceMid, bookImbalance, bookImbalance2, bookImbalance3, bookImbalance4, medSpread, adv$, advShares, volatility21);
                stockAdvArray.push({ ticker: arr[i].ticker, adv$key: adv$ });

            }
            console.log(stockAdvArray);

        };

        iterateAnalyticsTable(tickerArray);


        // function sortOrder(arr) {
        //         arr.sort(function(a,b) {
        //          return a.adv$key - b.adv$key;
        //          });
        //     }

        function sortOrder(arr) {
            arr.sort(function(obj1, obj2) {
                return obj1.adv$key - obj2.adv$key;
            });
        }
        sortOrder(stockAdvArray);

        console.log(stockAdvArray);



        //////// creates ARRAY for array style ////////////  

        var googleArray = [];
        var regArrayStuff;

        googleArray.push(["Stock", "Adv$"]);

        function makeArrayStuff(ticker, adv$) {
            regArrayStuff = [ticker, adv$];

            googleArray.push(regArrayStuff);

        };

        function concatGoogleArray(arr) {
            for (i = 0; i < arr.length; i++) {
                makeArrayStuff(arr[i].ticker, arr[i].adv$key);
            }

        }

        concatGoogleArray(stockAdvArray);


        console.log(googleArray);
        console.log(googleArray[3]);

        //////// END  END  creates ARRAY for array style ////////////  

        function drawBasic() {

            var data = google.visualization.arrayToDataTable(
            // [["Stock", "Adv$"],[ "CHILO" , 10793645],[ "PBR" , 2505092],[ "HOG" , 1683067],[ "ITUB" , 16190052],[ "GE" , 660189],[ "CUZ" , 27229980],[ "DVA" , 1918685],[ "FCAU" , 3738728],[ "TWTR" , 17151290],[ "XOM" , 22418809],[ "JLUV" , 1778603],[ "FLOM" , 660166],[ "LUV" , 18132531],[ "LVLT" , 13505670],[ "ORCL" , 3054587],[ "ABEV" , 19296442],[ "AMZN" , 9269630],[ "HAL" , 2855775],[ "CAH" , 18654182],[ "AAPL" , 4492782],[ "FCX" , 15730463],[ "EW" , 4580901],[ "DZN" , 4547231],[ "GGB" , 11927478],[ "RAD" , 3575018],[ "RIG" , 6638583],[ "TWLO" , 7578727],[ "EGO" , 4782115],[ "ZBH" , 12285287],[ "AUY" , 10354941],[ "BABA" , 20365788],[ "BHI" , 10832885],[ "SCAD" , 14961435],[ "GRIG" , 19776371],[ "WLTO" , 22022720],[ "LEGO" , 11970092],[ "ZYBH" , 17234297],[ "APUY" , 12232141],[ "DADA" , 8172529],[ "ECA" , 15256358] ]
            googleArray
            );

            var options = {
                tooltip: { isHtml: true },
                backgroundColor: "#26264E",
                titleTextStyle: { color: '#ffffff',
                 },
                titleStyle: { color: '#ffffff' },
                // lineWidth: 0.75,

                // title: 'Population of Largest U.S. Cities',
                chartArea: { left: 90, top: 35, width: '72%', height: '80%', backgroundColor: { fill: "#26264E" } },
                hAxis: {
                    title: 'Adv$',
                    gridlines: { color: '#2d4088' },
                    minValue: 0,
                    titleTextStyle: { color: '#ffffff' },
                    titleStyle: { color: '#ffffff' },
                    textStyle: {
                        color: '#EAEAEA',
                        fontName: 'Roboto',
                        fontSize: '10'
                    }
                },

                vAxis: {
                    title: 'Stock',
                    titleTextStyle: { color: '#ffffff' },
                    baselineColor: '#e6e6e6',
                    gridlines: {
                        color: '#26264E'
                            // count: 9
                    },
                    textStyle: {
                        color: '#EAEAEA',
                        fontName: 'Roboto',
                        fontSize: '10'
                    },
                },

                // legend: {textStyle: { color: '#EAEAEA', 
                //          fontName: 'Roboto', 
                //          fontSize: '12' }
                //        },
                legend: 'none',
                colors: ['#009688', '#813afd']
            };

            var chart = new google.visualization.BarChart(document.getElementById('chart_div3'));

            chart.draw(data, options);
        };
      

      var ImbalanceNow = (-0.04);
        var Imbalance1min = (-0.08);
        var Imbalance5min = (0.06);
        var Imbalance20min = (0.2);
         

      function drawBasicNegative() {
        

            var data = google.visualization.arrayToDataTable (

                [
                ['Imbalance', 'Average minutes', { role: 'style' }],
                ['Now', ImbalanceNow, '#905de8'],
                ['1 min', Imbalance1min, '#039be5'],
                ['5 min', Imbalance5min, '#b3c033'],
                ['20 min', Imbalance20min, '#009688']
                ]);

            var options = {
                tooltip: { isHtml: true },
                backgroundColor: "#26264E",
                titleTextStyle: { color: '#ffffff',
                 },
                titleStyle: { color: '#ffffff' },
                // lineWidth: 0.75,

                // title: 'Imbalance over time',
                chartArea: { top: 35, width: '62%', height: '70%', backgroundColor: { fill: "#26264E" } },
                hAxis: {
                    title: 'Adv$',
                    gridlines: { color: '#2d4088' },
                    minValue: 0,
                    titleTextStyle: { color: '#ffffff' },
                    titleStyle: { color: '#ffffff' },
                    textStyle: {
                        color: '#EAEAEA',
                        fontName: 'Roboto',
                        fontSize: '10'
                    }
                },

                vAxis: {
                    title: 'Stock',
                    titleTextStyle: { color: '#ffffff' },
                    baselineColor: '#e6e6e6',
                    gridlines: {
                        color: '#26264E'
                            // count: 9
                    },
                    textStyle: {
                        color: '#EAEAEA',
                        fontName: 'Roboto',
                        fontSize: '10'
                    }
                },

                // legend: {textStyle: { color: '#EAEAEA', 
                //          fontName: 'Roboto', 
                //          fontSize: '12' }
                //        },
                legend: 'none',
                colors: ['#905de8', '#039be5', '#b3c033', '#009688']
            };

            var chart = new google.visualization.BarChart(document.getElementById('chart_negative'));

            chart.draw(data, options);
        }



    })
    // end docready
