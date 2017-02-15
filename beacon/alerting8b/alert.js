


var riskSummary = $('#riskSummary');
var tradeSummary = $('#tradeSummary');
var stratSummary = $('#stratSummary');
var salesSummary = $('#salesSummary');
var perfSummary = $('#perfSummary');
var prTrdSummary = $('#prTrdSummary');
var systmSummary = $('#systmSummary');
var mrktSummary = $('#mrktSummary');






// the functions that make tickers and client boxes

// function makeTickerBox(name, alertCount, crit) {
 

 function makeClientBox(name, alertCount, crit) {
       
        var newTicker = $('<div class="summaryBox"><div class="summaryBoxLeft"><div class="clientBoxTitle">'+ name +'</div><div class="numberSummaryBoxClient">'+ alertCount +'</div></div></div>');
        if (crit) {
            
            newTicker.append($('<div class="colorMarkerClientCrit"></div>'));
     
        }
        else {newTicker.append($('<div class="colorMarkerClient"></div>'));}
        $('#clientZone').append(newTicker);
        console.log(newTicker);
   };



// the function that iterates through and displays the tickers

    

     function iterateDisplayClient(arr) {
       for (i = 0; i < arr.length; i++) {
       makeClientBox(arr[i].ticker, arr[i].number, arr[i].redDot);
        
     }};


     // function iterateDisplay(arr) {
     //   for (i = 0; i < arr.length; i++) {
     //   makeTickerBox(arr[i].ticker, arr[i].number, arr[i].redDot);
        
     // }};

     // function iterateDisplayClient(arr) {
     //   for (i = 0; i < arr.length; i++) {
     //   makeClientBox(arr[i].ticker, arr[i].number, arr[i].redDot);
        
     // }};



$(document).ready(function() {
     $('#stockpit').show();


     function makeTickerBox(name, alertCount) {
       
        var newTicker = $('<div class="summaryBoxStock"><div class="summaryBoxLeft"><div class="stockBoxTitle">'+ name +'</div><div class="numberSummaryBoxStock">'+ alertCount +'</div></div></div>');
        // if (crit) {
        //     newTicker.append($('<div class="stockBorderCritical"></div>'));
          
        // }
        // else {newTicker.append($('<div class="stockBorder"></div>'));}
        $('#tickerZone').append(newTicker);
        console.log(newTicker);
   };


   function iterateDisplay(arr) {
       for (i = 0; i < arr.length; i++) {
       makeTickerBox(arr[i].ticker, arr[i].number);
        
     }};

     iterateDisplay(tickerBoxArray);
    $('#clientpit').hide();



    $('#stock').click(function() {
        $('.typeStockClient span').removeClass('selected');
        $(this).addClass('selected');
        $('#clientpit').hide();
       
        $('#stockpit').show();

        // total has to reset
        $('.summary .numbers').removeClass('selectedNumbers');
        $('#total').addClass('selectedNumbers');
        $('#tickerZone').children().remove();
        iterateDisplay(tickerBoxArray, 'number');
       

    });

    // $('#stock').click();

    $('#client').click(function() {
        $('.typeStockClient span').removeClass('selected');
        $(this).addClass('selected');
        
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

//DAVE search processTicker(tickerBoxArrayMaster[0])

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






    

});
// end of doc ready
