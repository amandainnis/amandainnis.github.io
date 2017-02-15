var riskSummary = $('#riskSummary');
var tradeSummary = $('#tradeSummary');
var stratSummary = $('#stratSummary');
var salesSummary = $('#salesSummary');
var perfSummary = $('#perfSummary');
var prTrdSummary = $('#prTrdSummary');
var systmSummary = $('#systmSummary');
var mrktSummary = $('#mrktSummary');



$(document).ready(function() {
    $('#stockpit').show();
    $('#stock').click();


    $('#clientpit').hide();
    $('.toast').hide();

     


    $('#stock').click(function() {
        $('.typeStockClient #client').removeClass('selected');
        $(this).addClass('selected');
        $('#clientpit').hide();

        $('#stockpit').show();

        $('#tickerZone').children().remove();
        iterateDisplay(tickerBoxArray, 'number');
        $('#urgentSummary').text(urgentNumStock);
        $('#totalSummary').text(totNumStock);


       


    });



    $('#client').click(function() {
        $('.typeStockClient #stock').removeClass('selected');
        $(this).addClass('selected');

        $('#stockpit').hide();
        $('#clientpit').show();
        $('#clientZone').children().remove();
        iterateDisplayClient(clientBoxArray, 'number');
        $('#urgentSummary').text(urgentNumClient);
        $('#totalSummary').text(totNumClient);

    });



    var tickerBoxArrayMaster = [
        { ticker: "AAPL", number: "41", urgent: "4"},
        { ticker: "PBR", number: "38", urgent: "13"},
        { ticker: "HOG", number: "35", urgent: "4"},
        { ticker: "ITUB", number: "96", urgent: "11"},
        { ticker: "GE", number: "51", urgent: "9"},
        { ticker: "CUZ", number: "35", urgent: "30"},
        { ticker: "DVA", number: "96", urgent: "1"},
        { ticker: "FCAU", number: "38", urgent: "14"},
        { ticker: "TWTR", number: "35", urgent: "9"},
        { ticker: "XOM", number: "96", urgent: "8"},
        { ticker: "JLUV", number: "41", urgent: "8"},
        { ticker: "FLOM", number: "96", urgent: "27"},
        { ticker: "LUV", number: "41", urgent: "17"},
        { ticker: "LVLT", number: "73", urgent: "22"},
        { ticker: "ORCL", number: "18", urgent: "3"},

        { ticker: "ABEV", number: "73", urgent: "11"},
        { ticker: "AMZN", number: "18", urgent: "4"},
        { ticker: "HAL", number: "16", urgent: "28"},
        { ticker: "CAH", number: "21", urgent: "22"},
        { ticker: "ECA", number: "14", urgent: "0"},
        { ticker: "FCX", number: "46", urgent: "0"},


        { ticker: "EW", number: "18", urgent: "0"},

        { ticker: "DZN", number: "16", urgent: "0"},
        { ticker: "GGB", number: "21", urgent: "0"},



        { ticker: "RAD", number: "46", urgent: "0"},
        { ticker: "RIG", number: "51", urgent: "0"},
        { ticker: "TWLO", number: "21", urgent: "0"},
        { ticker: "EGO", number: "37", urgent: "0"},

        { ticker: "ZBH", number: "16", urgent: "0"},
        { ticker: "AUY", number: "38", urgent: "0"},
        { ticker: "BABA", number: "46", urgent: "0"},
        { ticker: "BHI", number: "51", urgent: "0"},


        { ticker: "SCAD", number: "46", urgent: "0"},
        { ticker: "GRIG", number: "51", urgent: "0"},
        { ticker: "WLTO", number: "21", urgent: "0"},
        { ticker: "LEGO", number: "37", urgent: "0"},

        { ticker: "ZYBH", number: "16", urgent: "0"},
        { ticker: "APUY", number: "38", urgent: "0"},
        { ticker: "DADA", number: "46", urgent: "0"},
        { ticker: "CHILO", number: "51", urgent: "0"}
    ];


    var tickerBoxArray = [];

    tickerBoxArray = tickerBoxArrayMaster;

    // tickerBoxArray = tickerBoxArrayMaster.slice(0,10);




    var clientBoxArrayMaster = [
        { ticker: "Alambicx", number: "41", urgent: "3"},
        { ticker: "balyasnyx", number: "35", urgent: "30"},
        { ticker: "caerusx", number: "14", urgent: "11"},
        { ticker: "chlmnms", number: "38", urgent: "6"},
        { ticker: "deshdma", number: "51", urgent: "9"},
        { ticker: "grahamx", number: "96", urgent: "21"},
        { ticker: "hwcmdsa", number: "41", urgent: "16"},
        { ticker: "jonedsa", number: "18", urgent: "2"},

        { ticker: "mbicxgen", number: "41", urgent: "3"},
        { ticker: "cgpyasnyx", number: "35", urgent: "7"},
        { ticker: "rrrterusx", number: "14", urgent: "13"},
        { ticker: "shlmnms", number: "38", urgent: "6"},
        { ticker: "deshdma", number: "51", urgent: "9"},
        { ticker: "slaahamx", number: "96", urgent: "18"},
        { ticker: "fonedsa", number: "18", urgent: "2"},
        { ticker: "oocmdsa", number: "41", urgent: "9"},
        { ticker: "alkdsa", number: "73", urgent: "19"},
        { ticker: "allipwst", number: "18", urgent: "24"},
        { ticker: "alydarx", number: "38", urgent: "0"},
        { ticker: "amcedsa", number: "46", urgent: "0"},
        { ticker: "aqrpropx5", number: "51", urgent: "0"},
        { ticker: "arrowgrtx", number: "21", urgent: "0"},


        { ticker: "brockst", number: "96", urgent: "0"},
        { ticker: "btigdsa", number: "16", urgent: "0"},

        { ticker: "canteshx", number: "37", urgent: "0"},
        { ticker: "cantustp", number: "18", urgent: "0"},

        { ticker: "deepbltsx", number: "46", urgent: "0"},


        { ticker: "everpnt", number: "21", urgent: "0"},
        { ticker: "flowbvx6", number: "16", urgent: "0"},
        { ticker: "govlanex", number: "35", urgent: "0"},

        { ticker: "janexno", number: "73", urgent: "0"},

        { ticker: "RIGTWLO", number: "51", urgent: "0"},

        { ticker: "dalkdsa", number: "73", urgent: "0"},
        { ticker: "ollipwst", number: "18", urgent: "0"},
        { ticker: "yilydarx", number: "38", urgent: "0"},
        { ticker: "scrmcedsa", number: "46", urgent: "0"},
        { ticker: "ghrpropx5", number: "51", urgent: "0"},
        { ticker: "rowowgrt", number: "21", urgent: "0"},


        { ticker: "ochakst", number: "96", urgent: "0"},
        { ticker: "qwgdsa", number: "16", urgent: "0"},

        { ticker: "ganteshx", number: "37", urgent: "0"},
        { ticker: "nantustp", number: "18", urgent: "0"},

        { ticker: "deepbltsx", number: "46", urgent: "0"},


        { ticker: "ppverpnt", number: "21", urgent: "0"},
        { ticker: "blowbvx6", number: "16", urgent: "0"},
        { ticker: "shovlanex", number: "35", urgent: "0"},

        { ticker: "danexno", number: "73", urgent: "0"},

        { ticker: "vIGTWLO", number: "51", urgent: "0"}

    ];

    var clientBoxArray = [];

    clientBoxArray = clientBoxArrayMaster;

    var alertArray = [
        { time: "2:00pm", client: "Alambicx", ticker: "AAPL", title: "price limit", urgent: "1", },
         { time: "2:00pm", client: "Alambicx", ticker: "PBR", title: "order reject", urgent: "1", message: "Lorem ipsum dolor ahmet."},
          { time: "2:00pm", client: "Alambicx", ticker: "HOG", title: "order quantity", urgent: "1", message: "Lorem ipsum dolor ahmet."},
        { time: "2:00pm", client: "balyasnyx", ticker: "ITUB", title: "aggregate volume", urgent: "1", message: "Lorem ipsum dolor ahmet."},
        { time: "2:00pm", client: "caerusx", ticker: "GE", title: "aggregate volume", urgent: "1", message: "Lorem ipsum dolor ahmet."},
        { time: "2:00pm", client: "caerusx", ticker: "CUZ", title: "price limit", urgent: "1", message: "Lorem ipsum dolor ahmet."},
        { time: "2:00pm", client: "caerusx", ticker: "DVA", title: "order quantity", urgent: "1", message: "Lorem ipsum dolor ahmet."},
        { time: "2:00pm", client: "chlmnms", ticker: "FCAU", title: "volume limit", urgent: "1", message: "Lorem ipsum dolor ahmet."},
        { time: "2:00pm", client: "deshdma", ticker: "TWTR", title: "aggregate volume", urgent: "1", message: "Lorem ipsum dolor ahmet."},
        { time: "2:00pm", client: "deshdma", ticker: "XOM", title: "order quantity", urgent: "1", message: "Lorem ipsum dolor ahmet."},
        { time: "2:00pm", client: "deshdma", ticker: "JLUV", title: "price limit", urgent: "1", message: "Lorem ipsum dolor ahmet."},
        { time: "2:00pm", client: "grahamx", ticker: "FLOM", title: "price limit", urgent: "1", message: "Lorem ipsum dolor ahmet."},
        { time: "2:00pm", client: "hwcmdsa", ticker: "LUV", title: "order reject", urgent: "1", message: "Lorem ipsum dolor ahmet."},
        { time: "2:00pm", client: "jonedsa", ticker: "LVLT", title: "order reject", urgent: "1", message: "Lorem ipsum dolor ahmet."},

        { time: "2:00pm", client: "mbicxgen", ticker: "ORCL", title: "price notional", urgent: "1", message: "Lorem ipsum dolor ahmet."},
        { time: "2:00pm", client: "cgpyasnyx", ticker: "ABEV", title: "aggregate volume", urgent: "1", message: "Lorem ipsum dolor ahmet."},
        { time: "2:00pm", client: "rrrterusx", ticker: "AMZN", title: "aggregate volume", urgent: "1", message: "Lorem ipsum dolor ahmet."},
        { time: "2:00pm", client: "shlmnms", ticker: "HAL", title: "order quantity", urgent: "1", message: "Lorem ipsum dolor ahmet."},
        { time: "2:00pm", client: "deshdma", ticker: "CAH", title: "price notional", urgent: "1", message: "Lorem ipsum dolor ahmet."},
        { time: "2:00pm", client: "slaahamx", ticker: "ECA", title: "price limit", urgent: "1", message: "Lorem ipsum dolor ahmet."},
        { time: "2:00pm", client: "fonedsa", ticker: "FCX", title: "order reject", urgent: "1", message: "Lorem ipsum dolor ahmet."},
        { time: "2:00pm", client: "oocmdsa", title: "volume limit", urgent: "1", message: "Lorem ipsum dolor ahmet."},
        { time: "2:00pm", client: "alkdsa", title: "volume limit", urgent: "1", message: "Lorem ipsum dolor ahmet."},
        { time: "2:00pm", client: "allipwst", title: "order reject", urgent: "1", message: "Lorem ipsum dolor ahmet."},
        { time: "2:00pm", client: "alydarx", title: "order quantity", urgent: "0", message: "Lorem ipsum dolor ahmet."},
        { time: "2:00pm", client: "amcedsa", title: "price notional", urgent: "0", message: "Lorem ipsum dolor ahmet."},
        { time: "2:00pm", client: "aqrpropx5", title: "price notional", urgent: "0", message: "Lorem ipsum dolor ahmet."},
        { time: "2:00pm", client: "arrowgrtx", title: "volume limit", urgent: "0", message: "Lorem ipsum dolor ahmet."},


        { time: "2:00pm", client: "brockst", title: "price limit", urgent: "0", message: "Lorem ipsum dolor ahmet."},
        { time: "2:00pm", client: "btigdsa", title: "aggregate volume", urgent: "0", message: "Lorem ipsum dolor ahmet."},

        { time: "2:00pm", client: "canteshx", title: "price limit", urgent: "0", message: "Lorem ipsum dolor ahmet."},
        { time: "2:00pm", client: "cantustp", title: "order reject", urgent: "0", message: "Lorem ipsum dolor ahmet."},

        { time: "2:00pm", client: "deepbltsx", title: "price notional", urgent: "0", message: "Lorem ipsum dolor ahmet."},


        { time: "2:00pm", client: "everpnt", title: "volume limit", urgent: "0", message: "Lorem ipsum dolor ahmet."},
        { time: "2:00pm", client: "flowbvx6", title: "aggregate volume", urgent: "0", message: "Lorem ipsum dolor ahmet."},
        { time: "2:00pm", client: "govlanex", title: "aggregate volume", urgent: "0", message: "Lorem ipsum dolor ahmet."},

        { time: "2:00pm", client: "janexno", title: "volume limit", urgent: "0", message: "Lorem ipsum dolor ahmet."},

        { time: "2:00pm", client: "RIGTWLO", title: "price notional", urgent: "0", message: "Lorem ipsum dolor ahmet."},

        { time: "2:00pm", client: "dalkdsa", title: "volume limit", urgent: "0", message: "Lorem ipsum dolor ahmet."},
        { time: "2:00pm", client: "ollipwst", title: "order reject", urgent: "0", message: "Lorem ipsum dolor ahmet."},
        { time: "2:00pm", client: "yilydarx", title: "order quantity", urgent: "0", message: "Lorem ipsum dolor ahmet."},
        { time: "2:00pm", client: "scrmcedsa", title: "price notional", urgent: "0", message: "Lorem ipsum dolor ahmet."},
        { time: "2:00pm", client: "ghrpropx5", title: "price notional", urgent: "0", message: "Lorem ipsum dolor ahmet."},
        { time: "2:00pm", client: "rowowgrt", title: "volume limit", urgent: "0", message: "Lorem ipsum dolor ahmet."},


        { time: "2:00pm", client: "ochakst", title: "price limit", urgent: "0", message: "Lorem ipsum dolor ahmet."},
        { time: "2:00pm", client: "qwgdsa", title: "aggregate volume", urgent: "0", message: "Lorem ipsum dolor ahmet."},

        { time: "2:00pm", client: "ganteshx", title: "price limit", urgent: "0", message: "Lorem ipsum dolor ahmet."},
        { time: "2:00pm", client: "nantustp", title: "order reject", urgent: "0", message: "Lorem ipsum dolor ahmet."},

        { time: "2:00pm", client: "deepbltsx", title: "price notional", urgent: "0", message: "Lorem ipsum dolor ahmet."},


        { time: "2:00pm", client: "ppverpnt", title: "volume limit", urgent: "0", message: "Lorem ipsum dolor ahmet."},
        { time: "2:00pm", client: "blowbvx6", title: "aggregate volume", urgent: "0", message: "Lorem ipsum dolor ahmet."},
        { time: "2:00pm", client: "shovlanex", title: "aggregate volume", urgent: "0", message: "Lorem ipsum dolor ahmet."},

        { time: "2:00pm", client: "danexno", title: "volume limit", urgent: "0", message: "Lorem ipsum dolor ahmet."},

        { time: "2:00pm", client: "vIGTWLO", title: "price notional", urgent: "0", message: "Lorem ipsum dolor ahmet."}

    ];


    // function makeTickerBox1(name, alertCount, urgency) {

    //     var newTicker;
    //     newTicker = $('<div class="summaryBoxStock" data-urgent=' + urgency + ' ><div class="stockBoxTitle">' + name + '</div><div class="numberSummaryBoxStock">' + alertCount + '</div></div>');
    //     var urgNum = newTicker.data('urgent');
    //     if (urgency == 0) {
    //         newTicker.addClass('notUrgent');

    //     } else if (urgency <= 8) {
    //         newTicker.addClass('urgentLight');

    //     } else if (urgency <= 18) {
    //         newTicker.addClass('urgent');
            
    //     } else if (urgency > 18) {
    //         newTicker.addClass('urgentExtreme');
            
    //     }


    //     $('#tickerZone').append(newTicker);

    // };

function makeTickerBox1(name, alertCount, urgency) {

        var newTicker;
        newTicker = $('<div class="summaryBoxStock" data-urgent=' + urgency + ' ><div class="stockBoxTitle">' + name + '</div><div class="numberSummaryBoxStock">' + alertCount + '</div></div>');
        var urgNum = newTicker.data('urgent');
        if (urgency == 0) {
            newTicker.addClass('notUrgent');

        } else {
            newTicker.addClass('urgent');
            
        }


        $('#tickerZone').append(newTicker);

    };
    
   


    function sortOrder(arr) {
        arr.sort(function(obj1, obj2) {
        return obj2.urgent - obj1.urgent;
        });
    }



   sortOrder(tickerBoxArray);
   sortOrder(clientBoxArray);

    // function makeClientBox1(name, alertCount, urgency) {

    //     var newClient;
    //     newClient = $('<div class="summaryBoxStock" data-urgent=' + urgency + ' ><div class="clientBoxTitle">' + name + '</div><div class="numberSummaryBoxClient">' + alertCount + '</div></div>');
    //     var urgNum = newClient.data('urgent');
    //     if (urgency == 0) {
    //         newClient.addClass('notUrgent');

    //     } else if (urgency <= 8) {
    //         newClient.addClass('urgentLight');

    //     } else if (urgency <= 18) {
    //         newClient.addClass('urgent');
            
    //     } else if (urgency > 18) {
    //         newClient.addClass('urgentExtreme');
            
    //     }

    //     $('#clientZone').append(newClient);



    // };

    function makeClientBox1(name, alertCount, urgency) {

        var newClient;
        newClient = $('<div class="summaryBoxStock" data-urgent=' + urgency + ' ><div class="clientBoxTitle">' + name + '</div><div class="numberSummaryBoxClient">' + alertCount + '</div></div>');
        var urgNum = newClient.data('urgent');
        if (urgency == 0) {
            newClient.addClass('notUrgent');

        } else {
            newClient.addClass('urgent');
            
        }

        $('#clientZone').append(newClient);



    };




var myIDred;

    var previousIteration;

    // function iterateDisplay(arr) {
    //     for (i = 0; i < arr.length; i++) {
            
    //         makeTickerBox1(arr[i].ticker, arr[i].number, arr[i].urgent);
            
    //     }
    // };

 function iterateDisplay(arr) {
        for (i = 0; i < arr.length; i++) {
            
            
            makeTickerBox1(arr[i].ticker, arr[i].number, arr[i].urgent);
           
           

        }
    };



// tooltip on hover

    


    // $('#tickerZone, #clientZone').on('mouseenter', '.summaryBoxStock', function(event) {
    //     console.log($(this).data('urgent'));
    //     var urgNum = $(this).data('urgent');
    //     if (urgNum > 0) {
    //         $(this).append('<div class="toolTip">' + urgNum + ' </div>');
    //     }
    // }).on('mouseleave', '.summaryBoxStock', function(event) {
    //     $(this).find('.toolTip').remove();

    // })


$('#tickerZone, #clientZone').on('click', '.summaryBoxStock', function(){
    $(this).toggleClass('tileClicked');
})

$('#cockpit').on('click', '.typeRow', function(){
    $(this).toggleClass('typeClicked');
})


// $('.typeRow').on('click', function(){
//     $(this).toggleClass('typeClicked');
// })






    var urgentNumStock = 0;

    for (i = 0; i < tickerBoxArray.length; i++) {
        urgentNumStock += parseInt(tickerBoxArray[i].urgent);
    }

    console.log(urgentNumStock);

    var totNumStock = 0;

    for (i = 0; i < tickerBoxArray.length; i++) {
        totNumStock += parseInt(tickerBoxArray[i].number);
    }

    // $('#urgentSummary').text(urgentNumStock);



    // function iterateDisplayClient(arr) {
    //     for (i = 0; i < arr.length; i++) {
            
    //         makeClientBox1(arr[i].ticker, arr[i].number, arr[i].urgent);
    //     }
    // };


     function iterateDisplayClient(arr) {
        for (i = 0; i < arr.length; i++) {
            
           
            
            makeClientBox1(arr[i].ticker, arr[i].number, arr[i].urgent);
            if (myIDlayout == 'fVersion') {
                moreAlerts();
            } else if (myIDlayout == 'gVersion') {
                fewerAlerts();
            }

            


        }
    };










    var urgentNumClient = 0;

    for (i = 0; i < clientBoxArray.length; i++) {
        urgentNumClient += parseInt(clientBoxArray[i].urgent);
    }

    console.log(urgentNumClient);

    // $('#urgentSummary').text(urgentNumClient);

    var totNumClient = 0;

    for (i = 0; i < clientBoxArray.length; i++) {
        totNumClient += parseInt(clientBoxArray[i].number);
    }

    $('#totalSummary2').text(totNumStock);
     $('#urgentSummary2').text(urgentNumStock);
     $('#totalSummary3').text(totNumClient);
     $('#urgentSummary3').text(urgentNumClient);

   
   

   


// , 'border-right': '2px solid #364373' 

    // naviagtion on buttons
    var myID;
    var myIDlayout;
    var myIDleft;

   

   



// toasts


    $('#iVersion').on('click', function() {
        $('#iVersion').toggleClass('selectedSide');
        $('.toast').toggle();

    });



    function moreAlerts() {
        $('#stockpit, #clientpit').css('width', '489px');
        $('.summaryBoxStock').css('margin-right', '7px');
    }

    function fewerAlerts() {
        $('#stockpit, #clientpit').css('width', '469px');
        $('.summaryBoxStock').css('margin-right', '19px');
    }

    

    // red4mono
     $('#kVersion').on('click', function() {
        $('.flipSideButton2').removeClass('selectedSide');
        $(this).addClass('selectedSide');
        myIDred = this.id;
        console.log(myIDred);
        red4mono();
        
    });
   


    function startTimer(duration, display) {
        var timer = 0;
        setInterval(function() {
            // parseInt the second parameter is base 10 format
            minutes = parseInt(timer / 60, 10);
            seconds = parseInt(timer % 60, 10);

            //if minutes is less than 10 show a 0 in front
            minutes = minutes < 10 ? "0" + minutes : minutes;
            seconds = seconds < 10 ? "0" + seconds : seconds;

            display.textContent = minutes + ":" + seconds;

            if (++timer == duration) {
                timer = 0;
            }
        }, 1000);
    }

    function loadTimer() {
        var twelveMinutes = 60 * 2,
            display = document.querySelector('#timer1');
        startTimer(twelveMinutes, display);
    };

    loadTimer();

    $('#client').click();
  
});
// end of doc ready
