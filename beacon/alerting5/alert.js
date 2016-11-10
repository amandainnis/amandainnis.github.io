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

    });



    $('#client').click(function() {
        $('.typeStockClient span').removeClass('selected');
        $(this).addClass('selected');
        $('#cockpit').hide();
        $('#stockpit').hide();
        $('#clientpit').show();

    });

    var tickerBoxArrayMaster = [
     		{ticker: "AAPL", number: "41", redDot: true},
     		{ticker: "ABEV", number: "73", redDot: false},
     		{ticker: "AMZN", number: "18", redDot: false},
     		{ticker: "AUY", number: "38", redDot: false},
     		{ticker: "BABA", number: "46", redDot: false},
     		{ticker: "BHI", number: "51", redDot: false},
     		{ticker: "CAH", number: "21", redDot: false},
     		{ticker: "CUZ", number: "35", redDot: true},
     		{ticker: "DVA", number: "96", redDot: false},
     		{ticker: "DZN", number: "16", redDot: false},

			{ticker: "ECA", number: "14", redDot: false},
     		{ticker: "EGO", number: "37", redDot: false},
     		{ticker: "EW", number: "18", redDot: false},
     		{ticker: "FCAU", number: "38", redDot: true},
     		{ticker: "FCX", number: "46", redDot: false},
     		{ticker: "GE", number: "51", redDot: true},
     		{ticker: "GGB", number: "21", redDot: false},
     		{ticker: "HAL", number: "16", redDot: false},
     		{ticker: "HOG", number: "35", redDot: false},
     		{ticker: "ITUB", number: "96", redDot: true},
     		  

     		{ticker: "LUV", number: "41", redDot: true},
     		{ticker: "LVLT", number: "73", redDot: false},
     		{ticker: "ORCL", number: "18", redDot: false},
     		{ticker: "PBR", number: "38", redDot: true},
     		{ticker: "RAD", number: "46", redDot: false},
     		{ticker: "RIG", number: "51", redDot: false},
     		{ticker: "TWLO", number: "21", redDot: false},
     		{ticker: "TWTR", number: "35", redDot: true},
     		{ticker: "XOM", number: "96", redDot: true},
     		{ticker: "ZBH", number: "16", redDot: false}   		
     	];


        // var filterFn = function (someArray) {
        //     var tempoArray = [];
        //     for (var i=0; i < someArray.length ; i++){
        //         if (someArray[i].redDot == true){
        //             // console.log("has red d0t "+ someArray[i]);
        //             tempoArray.push(someArray[i])
        //         }
        //         // else {
        //         //     console.log("has not red d0t "+ someArray[i]);
        //         // }
        //     }
        //     return tempoArray;
        //     console.log(tempoArray);
        // }

        // var filterFn = function (tickerBoxArrayMaster) {
        //     var tempoArray = [];
        //     for (var i=0; i < tickerBoxArrayMaster.length ; i++){
        //         if (tickerBoxArrayMaster[i].redDot == true){
        //             // console.log("has red d0t "+ someArray[i]);
        //             tempoArray.push(tickerBoxArrayMaster[i])
        //         }
        //         // else {
        //         //     console.log("has not red d0t "+ someArray[i]);
        //         // }
        //     }
        //     return tempoArray;
            
        // }
        // console.log(filterFn);




        // var critArray;

        //  function filterFn(someArray, tempoArray) {
        //     var tempoArray = [];
        //     for (var i=0; i < someArray.length ; i++){
        //         if (someArray[i].redDot == true){
        //             // console.log("has red d0t "+ someArray[i]);
        //             tempoArray.push(someArray[i])
        //         }
        //         // else {
        //         //     console.log("has not red d0t "+ someArray[i]);
        //         // }
        //     }
        //     return tempoArray;
            
        // }

        // filterFn(tickerBoxArrayMaster, critArray);

        // console.log(critArray);












    
     var tickerCounter = 0;

     $('#stockChevronRight').on('click', function() {
		tickerCounter += 1;
		console.log(tickerCounter);
	 });

	 $('#stockChevronLeft').on('click', function() {
		tickerCounter -= 1;
		console.log(tickerCounter);
	 });


     var tickerBoxArray = [];

     tickerBoxArray = tickerBoxArrayMaster.slice(0,10);
     



 function makeTickerBox(name, alertCount, crit) {
       
   		var newTicker = $('<div class="summaryBoxStock"><div class="summaryBoxLeft"><div class="stockBoxTitle">'+ name +'</div><div class="numberSummaryBoxStock">'+ alertCount +'</div></div></div>');
   		if (crit) {
   			
   			newTicker.append($('<div class="stockBorderCritical"></div>'));
            
            // $("stockBorder").css( "background-color", "red" );
   		}
        else {newTicker.append($('<div class="stockBorder"></div>'));}
   		$('#tickerZone').append(newTicker);
   		console.log(newTicker);
   };



// //the function that yields the critArray

//     var critArray = [];
    
//     tickerBoxArrayMaster.forEach(function(item, index){
//         if (tickerBoxArrayMaster[index].redDot) {
//             critArray.push(item);
//         }
//      });

//      console.log(critArray);


// the function that iterates through and displays the tickers


    function iterateDisplay(arr) {
       for (i = 0; i < arr.length; i++) {
       makeTickerBox(arr[i].ticker, arr[i].number, arr[i].redDot);
        
     }};


   
  
  //  navigation on smart and az
    $('#az').on('click', function(){
        $('#smart').removeClass('azSmartSelected');
        $('#az').addClass('azSmartSelected');
        $('#tickerZone').children().remove();
        console.log('click');
        iterateDisplay(tickerBoxArray);
        console.log('norm');
        // iterateDisplay(tickerBoxArray);
        
     });


     $('#smart').on('click', function(){
        $('#az').removeClass('azSmartSelected');
        $('#smart').addClass('azSmartSelected');
        $('#tickerZone').children().remove();
        console.log('click');
        //the function that yields the critArray

                var critArray = [];
                
                tickerBoxArrayMaster.forEach(function(item, index){
                    if (tickerBoxArrayMaster[index].redDot) {
                        critArray.push(item);
                    }
                 });

        console.log(critArray);

         iterateDisplay(critArray);
         console.log('crit');
        // iterateDisplay(critArray);
        
       

     });
   

      
$('#az').click();  

















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

    });

    
   
    $('#outage').click(function() {
        $('.summary .numbers').removeClass('selectedNumbers');
        $('#outage').addClass('selectedNumbers');
        addNumber(outageSummaryBoxTotals);
        
    });

    
  
    $('#critical').click(function() {
        $('.summary .numbers').removeClass('selectedNumbers');
        $('#critical').addClass('selectedNumbers');
        addNumber(criticalSummaryBoxTotals);
        
    });
    
    $('#urgent').click(function() {
        $('.summary .numbers').removeClass('selectedNumbers');
        $('#urgent').addClass('selectedNumbers');
        addNumber(urgentSummaryBoxTotals);
        
    });
   
    $('#commentary').click(function() {
        $('.summary .numbers').removeClass('selectedNumbers');
        $('#commentary').addClass('selectedNumbers');
        addNumber(commentarySummaryBoxTotals);
        
    });
    
    $('#proAct').click(function() {
        $('.summary .numbers').removeClass('selectedNumbers');
        $('#proAct').addClass('selectedNumbers');
        addNumber(proActSummaryBoxTotals);
        
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
