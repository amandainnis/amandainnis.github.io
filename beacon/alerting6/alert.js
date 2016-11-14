var totals = [464, 363, 101];

var allTotalSummaryBoxTotals = [64, 86, 44, 53, 57, 69, 42, 50];
var openTotalSummaryBoxTotals = [41, 73, 18, 38, 46, 51, 21, 35];
var closedTotalSummaryBoxTotals = [23, 13, 26, 15, 11, 18, 21, 15];
var outageSummaryBoxTotals = [5, 3, 2, 9, 4, 8, 6, 5];
var criticalSummaryBoxTotals = [7, 9, 6, 3, 11, 7, 6, 8];
var urgentSummaryBoxTotals = [17, 11, 21, 19, 9, 9, 8, 36];
var commentarySummaryBoxTotals = [1, 0, 0, 1, 0, 1, 0, 0];
var proActSummaryBoxTotals = [10, 11, 3, 4, 17, 16, 5, 16];

var riskSummary = $('#riskSummary');
var tradeSummary = $('#tradeSummary');
var stratSummary = $('#stratSummary');
var salesSummary = $('#salesSummary');
var perfSummary = $('#perfSummary');
var prTrdSummary = $('#prTrdSummary');
var systmSummary = $('#systmSummary');
var mrktSummary = $('#mrktSummary');



$(document).ready(function() {
    $('#stockpit').hide();
    $('#clientpit').hide();

    ////////// global threedot/////////////////// 
    $('#threeDotContent').hide();

    $('#threeDotWhiteAlert.mdi-dots-vertical').click(function() {
        $('#threeDotContent').show();
    })

    $('#threeDotContent').mouseleave(function() {
        $('#threeDotContent').hide();
    });


    $('#type').click(function() {
        $('.typeStockClient span').removeClass('selected');
        $(this).addClass('selected');
        $('#stockpit').hide();
        $('#clientpit').hide();
        $('#cockpit').show();

    });



    $('#stock').click(function() {
        $('.typeStockClient span').removeClass('selected');
        $(this).addClass('selected');
        $('#clientpit').hide();
        $('#cockpit').hide();
        $('#stockpit').show();

        // total has to reset
        $('.summary .numbers').removeClass('selectedNumbers');
        $('#total').addClass('selectedNumbers');
        $('#tickerZone').children().remove();
        iterateDisplay(tickerBoxArray, 'number');
        $('#az').addClass('azSmartSelected');

    });



    $('#client').click(function() {
        $('.typeStockClient span').removeClass('selected');
        $(this).addClass('selected');
        $('#cockpit').hide();
        $('#stockpit').hide();
        $('#clientpit').show();

    });

    

    var tickerBoxArrayMaster = [
            {ticker: "LVLT", number: "73", outage: "0", critical: "0", urgent: "4", comm: "0", pro: "3", redDot: false},
            {ticker: "ORCL", number: "18", outage: "0", critical: "0", urgent: "4", comm: "0", pro: "3", redDot: false},
            {ticker: "PBR", number: "38", outage: "5", critical: "6", urgent: "13", comm: "0", pro: "3", redDot: true},
     		{ticker: "AAPL", number: "41", outage: "5", critical: "6", urgent: "4", comm: "0", pro: "2", redDot: true},
     		{ticker: "ABEV", number: "73", outage: "0", critical: "0", urgent: "8", comm: "0", pro: "3", redDot: false},
     		{ticker: "AMZN", number: "18", outage: "0", critical: "0", urgent: "1", comm: "0", pro: "2", redDot: false},
            {ticker: "HAL", number: "16", outage: "0", critical: "0", urgent: "3", comm: "0", pro: "6", redDot: false},
            {ticker: "HOG", number: "35", outage: "0", critical: "0", urgent: "4", comm: "0", pro: "4", redDot: false},
            {ticker: "ITUB", number: "96", outage: "5", critical: "6", urgent: "11", comm: "0", pro: "2", redDot: true},
     		{ticker: "CAH", number: "21", outage: "0", critical: "0", urgent: "2", comm: "0", pro: "4", redDot: false},
     		

			{ticker: "ECA", number: "14", outage: "0", critical: "0", urgent: "3", comm: "0", pro: "3", redDot: false},
     		{ticker: "FCX", number: "46", outage: "0", critical: "0", urgent: "2", comm: "0", pro: "2", redDot: false},
     		{ticker: "GE", number: "51", outage: "4", critical: "6", urgent: "9", comm: "0", pro: "2", redDot: true},
            {ticker: "CUZ", number: "35", outage: "4", critical: "6", urgent: "4", comm: "0", pro: "1", redDot: true},
            {ticker: "DVA", number: "96", outage: "0", critical: "0", urgent: "1", comm: "0", pro: "2", redDot: false},
            {ticker: "EW", number: "18", outage: "0", critical: "0", urgent: "1", comm: "0", pro: "4", redDot: false},
            {ticker: "FCAU", number: "38", outage: "5", critical: "7", urgent: "4", comm: "1", pro: "2", redDot: true},
            {ticker: "TWTR", number: "35", outage: "4", critical: "6", urgent: "9", comm: "0", pro: "3", redDot: true},
            {ticker: "DZN", number: "16", outage: "0", critical: "0", urgent: "1", comm: "0", pro: "2", redDot: false},
     		{ticker: "GGB", number: "21", outage: "0", critical: "0", urgent: "4", comm: "0", pro: "2", redDot: false},
     		
     		  
     		{ticker: "LUV", number: "41", outage: "4", critical: "7", urgent: "17", comm: "0", pro: "3", redDot: true},
     		{ticker: "RAD", number: "46", outage: "0", critical: "0", urgent: "4", comm: "0", pro: "3", redDot: false},
     		{ticker: "RIG", number: "51", outage: "0", critical: "0", urgent: "1", comm: "1", pro: "3", redDot: false},
     		{ticker: "TWLO", number: "21", outage: "0", critical: "0", urgent: "2", comm: "0", pro: "3", redDot: false},
            {ticker: "EGO", number: "37", outage: "0", critical: "0", urgent: "2", comm: "0", pro: "2", redDot: false},
     		{ticker: "XOM", number: "96", outage: "5", critical: "7", urgent: "8", comm: "0", pro: "3", redDot: true},
     		{ticker: "ZBH", number: "16", outage: "0", critical: "0", urgent: "1", comm: "0", pro: "3", redDot: false},
            {ticker: "AUY", number: "38", outage: "0", critical: "0", urgent: "3", comm: "0", pro: "3", redDot: false},
            {ticker: "BABA", number: "46", outage: "0", critical: "0", urgent: "4", comm: "1", pro: "2", redDot: false},
            {ticker: "BHI", number: "51", outage: "0", critical: "0", urgent: "5", comm: "0", pro: "2", redDot: false}   		
     	];



     var tickerBoxArray = [];

     tickerBoxArray = tickerBoxArrayMaster.slice(0,10);

    


var clientBoxArrayMaster = [
            {ticker: "Alambicx", number: "41", redDot: true},
            {ticker: "alkdsa", number: "73", redDot: false},
            {ticker: "allipwst", number: "18", redDot: false},
            {ticker: "alydarx", number: "38", redDot: false},
            {ticker: "amcedsa", number: "46", redDot: false},
            {ticker: "aqrpropx5", number: "51", redDot: false},
            {ticker: "arrowgrtx", number: "21", redDot: false},
            {ticker: "balyasnyx", number: "35", redDot: true},

            {ticker: "brockst", number: "96", redDot: false},
            {ticker: "btigdsa", number: "16", redDot: false},
            {ticker: "caerusx", number: "14", redDot: true},
            {ticker: "canteshx", number: "37", redDot: false},
            {ticker: "cantustp", number: "18", redDot: false},
            {ticker: "chlmnms", number: "38", redDot: true},
            {ticker: "deepbltsx", number: "46", redDot: false},
            {ticker: "deshdma", number: "51", redDot: true},

            {ticker: "everpnt", number: "21", redDot: false},
            {ticker: "flowbvx6", number: "16", redDot: false},
            {ticker: "govlanex", number: "35", redDot: false},
            {ticker: "grahamx", number: "96", redDot: true},
            {ticker: "hwcmdsa", number: "41", redDot: true},
            {ticker: "janexno", number: "73", redDot: false},
            {ticker: "jonedsa", number: "18", redDot: true},
            {ticker: "RIGTWLO", number: "51", redDot: false}
       
        ];

        var clientBoxArray = [];

        clientBoxArray = clientBoxArrayMaster.slice(0,8);

     // if (tickerCounter == 0) {
     //        tickerBoxArray = tickerBoxArrayMaster.slice(0,10);
     //    } else if (tickerCounter == 1) {
     //        tickerBoxArray = tickerBoxArrayMaster.slice(10,20);
     //    } else if (tickerCounter == 2) {
     //        tickerBoxArray = tickerBoxArrayMaster.slice(20,30);
     //    } 

      
    
     
// the functions that make tickers and client boxes


 function makeTickerBox(name, alertCount, crit) {
       
   		var newTicker = $('<div class="summaryBoxStock"><div class="summaryBoxLeft"><div class="stockBoxTitle">'+ name +'</div><div class="numberSummaryBoxStock">'+ alertCount +'</div></div></div>');
   		if (crit) {
   			newTicker.append($('<div class="stockBorderCritical"></div>'));
          
   		}
        else {newTicker.append($('<div class="stockBorder"></div>'));}
   		$('#tickerZone').append(newTicker);
   		console.log(newTicker);
   };

 function makeClientBox(name, alertCount, crit) {
       
        var newTicker = $('<div class="summaryBox"><div class="summaryBoxLeft"><div class="clientBoxTitle">'+ name +'</div><div class="numberSummaryBoxClient">'+ alertCount +'</div></div></div>');
        if (crit) {
            
            newTicker.append($('<div class="colorMarkerClientCrit"></div>'));
     
        }
        else {newTicker.append($('<div class="colorMarkerClient"></div>'));}
        $('#clientZone').append(newTicker);
        console.log(newTicker);
   };


// //the function that yields the critArray

    var critArray = [];
    
    tickerBoxArrayMaster.forEach(function(item, index){
        if (tickerBoxArrayMaster[index].redDot) {
            critArray.push(item);
        }
     });

     console.log(critArray);



// the function that iterates through and displays the tickers & checks state



var previousIteration;

      function iterateDisplay(arr, category) {
        if(typeof category == 'undefined') {
            category = previousIteration;
        }
        else { previousIteration = category;}    
        // above sets category to first one ever
       for (i = 0; i < arr.length; i++) {
       makeTickerBox(arr[i].ticker, arr[i][category], arr[i].redDot);
        
     }};


console.log(tickerBoxArray[3]['outage']);

     function iterateDisplayClient(arr) {
       for (i = 0; i < arr.length; i++) {
       makeClientBox(arr[i].ticker, arr[i].number, arr[i].redDot);
        
     }};


   
  
  //  navigation on smart and az
//     $('#az').on('click', function(){
//         $('#smart').removeClass('azSmartSelected');
//         $('#az').addClass('azSmartSelected');
//         $('.pagination').show();
//         $('#tickerZone').children().remove();
      
//         iterateDisplay(tickerBoxArray);
//         console.log('norm');
//          // total has to reset
//         $('.summary .numbers').removeClass('selectedNumbers');
//         $('#total').addClass('selectedNumbers');
        
//      });


//      $('#smart').on('click', function(){
//         $('#az').removeClass('azSmartSelected');
//         $('#smart').addClass('azSmartSelected');
//         $('.pagination').hide();
//         $('#tickerZone').children().remove();
//         console.log('click');
        
//          iterateDisplay(smartArray);
//      });
      
// $('#az').click();  


// naviagtion on carousel and the tickerCounter
    
     var tickerCounter = 0;

  
     $('#stockChevronRight').on('click', function() {
        if (tickerCounter < 2 && tickerCounter >= 0) {
            tickerCounter += 1;
        } 
        console.log(tickerCounter);
        if (tickerCounter == 0) {
            tickerBoxArray = tickerBoxArrayMaster.slice(0,10);
            $('.circle').removeClass('circleSelected');
            $('#circle1').addClass('circleSelected');
        } else if (tickerCounter == 1) {
            tickerBoxArray = tickerBoxArrayMaster.slice(10,20);
            $('.circle').removeClass('circleSelected');
            $('#circle2').addClass('circleSelected');
        } else if (tickerCounter == 2) {
            tickerBoxArray = tickerBoxArrayMaster.slice(20,30);
            $('.circle').removeClass('circleSelected');
            $('#circle3').addClass('circleSelected');
        } 
        $('#tickerZone').children().remove();
        iterateDisplay(tickerBoxArray);
        // iterateDisplay(tickerBoxArray, 'number');
     });

     $('#stockChevronLeft').on('click', function() {
        if (tickerCounter < 3 && tickerCounter > 0) {
            tickerCounter -= 1;
        } 
        
        console.log(tickerCounter);
        if (tickerCounter == 0) {
            tickerBoxArray = tickerBoxArrayMaster.slice(0,10);
            $('.circle').removeClass('circleSelected');
            $('#circle1').addClass('circleSelected');
            // $('#stockChevronLeft').hide();
            // $('#stockChevronRight').show();
        } else if (tickerCounter == 1) {
            tickerBoxArray = tickerBoxArrayMaster.slice(10,20);
            $('.circle').removeClass('circleSelected');
            $('#circle2').addClass('circleSelected');
            // $('#stockChevronLeft').show();
            // $('#stockChevronRight').show();
        } else if (tickerCounter == 2) {
            tickerBoxArray = tickerBoxArrayMaster.slice(20,30);
            $('.circle').removeClass('circleSelected');
            $('#circle3').addClass('circleSelected');
            // $('#stockChevronLeft').show();
            // $('#stockChevronRight').hide();
        }
        $('#tickerZone').children().remove();
        iterateDisplay(tickerBoxArray); 

     });
 












 function addNumber(arr) {
    	$('#riskSummary').text(arr[0]);
        $('#tradeSummary').text(arr[1]);
        $('#stratSummary').text(arr[2]);
        $('#salesSummary').text(arr[3]);
        $('#perfSummary').text(arr[4]);
        $('#prTrdSummary').text(arr[5]);
        $('#systmSummary').text(arr[6]);
        $('#mrktSummary').text(arr[7]);

    }




    // $('#allAlerts').click(function(){
    // 	$('.allOpenClosed span').removeClass('selected');
    // 	$(this).addClass('selected');
    //	addNumber(allTotalSummaryBoxTotals);
    
    // });

    // $('#openAlerts').click(function(){
    // 	$('.allOpenClosed span').removeClass('selected');
    // 	$(this).addClass('selected');
    //  addNumber(openTotalSummaryBoxTotals);
   
    // });

    //    $('#closedAlerts').click(function(){
    // 	$('.allOpenClosed span').removeClass('selected');
    // 	$(this).addClass('selected');
    //	addNumber(closedTotalSummaryBoxTotals);
    
    // });


   

   

    $('#total').click(function() {
        $('.summary .numbers').removeClass('selectedNumbers');
        $('#total').addClass('selectedNumbers');
        addNumber(openTotalSummaryBoxTotals);
        // for tickers
        $('#tickerZone').children().remove();
        iterateDisplay(tickerBoxArray, 'number');
        
        console.log(tickerBoxArray);
        
     

    });

    
   
    $('#outage').click(function() {
        $('.summary .numbers').removeClass('selectedNumbers');
        $('#outage').addClass('selectedNumbers');
        addNumber(outageSummaryBoxTotals);
         // for tickers
         $('#tickerZone').children().remove();
         iterateDisplay(tickerBoxArray, 'outage');
         // iterateDisplay(critArray);
         
         console.log(tickerBoxArray[0].outage);
         
        
    });

    
  
    $('#critical').click(function() {
        $('.summary .numbers').removeClass('selectedNumbers');
        $('#critical').addClass('selectedNumbers');
        addNumber(criticalSummaryBoxTotals);
         // for tickers
         $('#tickerZone').children().remove();
         iterateDisplay(tickerBoxArray, 'critical');
       
        
    });
    
    $('#urgent').click(function() {
        $('.summary .numbers').removeClass('selectedNumbers');
        $('#urgent').addClass('selectedNumbers');
        addNumber(urgentSummaryBoxTotals);
         // for tickers
         $('#tickerZone').children().remove();
         iterateDisplay(tickerBoxArray, 'urgent');
       
        
    });
   
    $('#commentary').click(function() {
        $('.summary .numbers').removeClass('selectedNumbers');
        $('#commentary').addClass('selectedNumbers');
        addNumber(commentarySummaryBoxTotals);
        $('#tickerZone').children().remove();
         iterateDisplay(tickerBoxArray, 'comm');
        
    });
    
    $('#proAct').click(function() {
        $('.summary .numbers').removeClass('selectedNumbers');
        $('#proAct').addClass('selectedNumbers');
        addNumber(proActSummaryBoxTotals);
        $('#tickerZone').children().remove();
         iterateDisplay(tickerBoxArray, 'pro');
        
    });












    var counter = 0;


    $('#cockpit').on('click', '.summaryBox', function(event) {

        if (counter == 1 && $(this).hasClass('summaryClick')) {
            $(this).removeClass('summaryClick');
            counter -= 1;
        } else if (counter == 0) {
            $(this).addClass('summaryClick');
            counter += 1;
        } else if (counter == 1 && (!$(this).hasClass('summaryClick'))) {
            counter += 0;
            $('.summaryBox').removeClass('summaryClick');
            $(this).addClass('summaryClick');

        }
        console.log(counter);
    });


    // function boxToFeed(boxID, feedClass) {
    // 	$('#' + boxID + '').on('click', function() {
    //     if (counter == 1 && $('#' + boxID + '').hasClass('summaryClick')) {
    //         $('.alertRow').show();
    //     } else {
    //         $('.alertRow').hide();
    //         $('.alertRow.'+ feedClass +'').show();
    //     }
    // });

    // };


    // boxToFeed(riskSummaryBox, riskFeed);

    $('#riskSummaryBox').on('click', function() {
        if (counter == 1 && $('#riskSummaryBox').hasClass('summaryClick')) {
            $('.alertRow').show();
        } else {
            $('.alertRow').hide();
            $('.alertRow.riskFeed').show();
        }
    });

    $('#tradeSummaryBox').on('click', function() {
        if (counter == 1 && $('#tradeSummaryBox').hasClass('summaryClick')) {
            $('.alertRow').show();
        } else {
            $('.alertRow').hide();
            $('.alertRow.tradeFeed').show();
        }

    });



    $('#stratSummaryBox').on('click', function() {
        if (counter == 1 && $('#stratSummaryBox').hasClass('summaryClick')) {
            $('.alertRow').show();
        } else {
            $('.alertRow').hide();
            $('.alertRow.stratFeed').show();
        }

    });

    $('#salesSummaryBox').on('click', function() {
        if (counter == 1 && $('#salesSummaryBox').hasClass('summaryClick')) {
            $('.alertRow').show();
        } else {
            $('.alertRow').hide();
            $('.alertRow.salesFeed').show();
        }

    });

    $('#perfSummaryBox').on('click', function() {
        if (counter == 1 && $('#perfSummaryBox').hasClass('summaryClick')) {
            $('.alertRow').show();
        } else {
            $('.alertRow').hide();
            $('.alertRow.perfFeed').show();
        }

    });

    $('#prTrdSummaryBox').on('click', function() {
        if (counter == 1 && $('#prTrdSummaryBox').hasClass('summaryClick')) {
            $('.alertRow').show();
        } else {
            $('.alertRow').hide();
            $('.alertRow.prTrdFeed').show();
        }

    });

    $('#systmSummaryBox').on('click', function() {
        if (counter == 1 && $('#systmSummaryBox').hasClass('summaryClick')) {
            $('.alertRow').show();
        } else {
            $('.alertRow').hide();
            $('.alertRow.sysFeed').show();
        }

    });

    $('#mrktSummaryBox').on('click', function() {
        if (counter == 1 && $('#mrktSummaryBox').hasClass('summaryClick')) {
            $('.alertRow').show();
        } else {
            $('.alertRow').hide();
            $('.alertRow.mktFeed').show();
        }

    });






    $('#clearAlerts').click(function() {
        $('.sideSearchAlerts').val("");
        // $('#filterIcon.mdi-filter').removeClass('blue');

    });

});
// end of doc ready
