


$(document).ready(function(){

	var chart;

	google.charts.load('current', {packages: ['corechart', 'bar']});
	
	google.charts.setOnLoadCallback(drawChart);
google.charts.setOnLoadCallback(drawMultSeries);

// function resize(){
// 	chart.draw(data, options)
// }
	// stack overflow responsive google charts

	function drawMultSeries() {
	      var data = google.visualization.arrayToDataTable([
	        ['Ticker', '2010 Population', '2000 Population'],
	        ['AMZN', 8175000, 8008000],
	        ['AAPL', 3792000, 3694000],
	        ['GOOG', 2695000, 2896000],
	        ['Houston, TX', 2099000, 1953000],
	        ['Philadelphia, PA', 1526000, 1517000]
	      ]);

	      var options = {
	      	backgroundColor: "#1f1f41",
	      	titleTextStyle: {color: '#ffffff'},
	      	titleStyle: {color: '#ffffff'},
	      	

	        title: 'Population of Largest U.S. Cities',
	        chartArea: {width: '50%', backgroundColor: {fill: "#1f1f41"}},
	        hAxis: {
	          title: 'Total Population',
	          minValue: 0,
	          titleTextStyle: {color: '#ffffff'},
	      	  titleStyle: {color: '#ffffff'},
	      	  textStyle: { color: '#EAEAEA', 
                   fontName: 'Roboto', 
                   fontSize: '10' }
	        },
	        vAxis: {
	          title: 'City',
	          textStyle: { color: '#EAEAEA', 
                   fontName: 'Roboto', 
                   fontSize: '10' },
	        },
	        legend: {textStyle: { color: '#EAEAEA', 
                   fontName: 'Roboto', 
                   fontSize: '10' }},
	        colors: ['#00BCD4', '#009688']    
	      };

	      var chart = new google.visualization.BarChart(document.getElementById('chart_div'));
	      chart.draw(data, options);
	    }


	    function drawChart() {
      var data = google.visualization.arrayToDataTable([
         ['Element', 'Density', { role: 'style' }],
         ['Copper', 8.94, '#b87333'],            // RGB value
         ['Silver', 10.49, 'silver'],            // English color name
         ['Gold', 19.30, 'gold'],
         ['Platinum', 21.45, 'color: #e5e4e2' ], // CSS-style declaration
      ]);


      var options = {
	        title: 'Physics of Umbrellas',
	        chartArea: {width: '50%'},
	        hAxis: {
	          title: 'Total Population',
	          minValue: 0
	        },
	        vAxis: {
	          title: 'City'
	        }
	      };

      var chart = new google.visualization.BarChart(document.getElementById('chart_div2'));
	      chart.draw(data, options);
  }

	   
		
	

    var analyticsArray = [
            {ticker: "amzn", time: "12:24:31", side: "B", qty: 12000000, client: "Blackrock", price: 130.12, adv: 345130000, vol: 1345, adtVol: 1345, orderID: "1246790", touchQty: 1200, capacity: 876597},
            {ticker: "amzn", time: "11:24:31", side: "B", qty: 190060000, client: "Blackrock", price: 127.12, adv: 345130000, vol: 1345, adtVol: 1345, orderID: "1246790", touchQty: 1200, capacity: 876597},
            {ticker: "amzn", time: "10:24:31", side: "B", qty: 1207000, client: "Blackrock", price: 140.12, adv: 345130000, vol: 1345, adtVol: 1345, orderID: "1246790", touchQty: 1200, capacity: 876597},
            {ticker: "amzn", time: "12:24:31", side: "B", qty: 125000, client: "Blackrock", price: 189.12, adv: 345130000, vol: 1345, adtVol: 1345, orderID: "1246790", touchQty: 1200, capacity: 876597},
            {ticker: "amzn", time: "12:24:31", side: "B", qty: 1200000, client: "Blackrock", price: 190.12, adv: 345130000, vol: 1345, adtVol: 1345, orderID: "1246790", touchQty: 1200, capacity: 876597},
            {ticker: "amzn", time: "12:24:31", side: "B", qty: 14000600, client: "Blackrock", price: 170.12, adv: 345130000, vol: 1345, adtVol: 1345, orderID: "1246790", touchQty: 1200, capacity: 876597}
            
     		
     	];



})
// end docready