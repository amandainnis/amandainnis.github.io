var riskSummary = $('#riskSummary');
var tradeSummary = $('#tradeSummary');
var stratSummary = $('#stratSummary');
var salesSummary = $('#salesSummary');
var perfSummary = $('#perfSummary');
var prTrdSummary = $('#prTrdSummary');
var systmSummary = $('#systmSummary');
var mrktSummary = $('#mrktSummary');

var filterClick = false;
 var counter = 0;
 var myID;
 var newAlertArray = [];


$(document).ready(function() {
    $('#stockpit').show();
    $('#stock').click();


    $('#clientpit').hide();
    $('.toast').hide();

    // $('#reset').css('opacity', '.4');


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


     $('#tickerZone, #clientZone').on('click', '.summaryBoxStock', function() {
        console.log(this.id);
        
    })

    $('#cockpit').on('click', '.typeRow', function() {
        $(this).toggleClass('typeClicked');
        
    })

    $('#cockpit').on('click', function() {
        if ($('.typeRow').hasClass('typeClicked') || $('.summaryBoxStock').hasClass('tileClicked')) {
            filterClick = true;}
        else {filterClick = false}
            console.log(filterClick);

        if (filterClick == true) {
            $('#reset').removeClass('lowOpacity');
        }

        else {$('#reset').addClass('lowOpacity');
        }
    });
   

    $('#reset').on('click', function(){
        $('*').removeClass('typeClicked');
        $('*').removeClass('tileClicked');
        filterClick = false;
        console.log(filterClick);
        $('#reset').addClass('lowOpacity');
        counter = 0;
        $('#feed').children().remove();
        iterateDisplayAlert(alertArray);
        newAlertArray = []; 
        console.log(counter);
    })



    ////////////////////////////




    // $('#tickerZone, #clientZone').on('click', '.summaryBoxStock', function() {

    //     if (counter == 1 && $(this).hasClass('tileClicked')) {
    //         $(this).removeClass('tileClicked');
    //         counter -= 1;
    //     } else if (counter == 0) {
    //         $(this).addClass('tileClicked');
    //         counter += 1;
    //     } else if (counter == 1 && (!$(this).hasClass('tileClicked'))) {
    //         counter += 0;
    //         $('.summaryBoxStock').removeClass('tileClicked');
    //         $(this).addClass('tileClicked');

    //     }
    //     console.log(counter);
    // });

///////////////////////

function findATicker(arr, myInput) {

        for (i = 0; i < arr.length; i++) {
            var myString1 = arr[i].ticker;
            var myString2 = arr[i].client;
           if (myString1 == myInput || myString2 == myInput ){
            console.log(arr[i]);
            newAlertArray.push(arr[i]);
           }  
         }};

$('#tickerZone, #clientZone').on('click', '.summaryBoxStock', function() {

        if (counter == 1 && $(this).hasClass('tileClicked')) {
            $(this).removeClass('tileClicked');
            counter -= 1;
            $('#feed').children().remove();
            iterateDisplayAlert(alertArray);
            newAlertArray = []; 
        } else if (counter == 0) {
            $(this).addClass('tileClicked');
            myID = this.id;
            counter += 1;
            findATicker(alertArray, myID);
            $('#feed').children().remove();
            iterateDisplayAlert(newAlertArray); 
        } else if (counter == 1 && (!$(this).hasClass('tileClicked'))) {
            counter += 0;
            $('.summaryBoxStock').removeClass('tileClicked');
            $(this).addClass('tileClicked');
            newAlertArray = []; 
            myID = this.id;
            findATicker(alertArray, myID);
            $('#feed').children().remove();
            iterateDisplayAlert(newAlertArray); 

        }
        console.log(counter);
    });

// $('#tickerZone, #clientZone').on('click', '.summaryBoxStock', function() {
//     myID = this.id;

//      function findATicker(arr, myInput) {

//         for (i = 0; i < arr.length; i++) {
//             var myString1 = arr[i].ticker;
//             var myString2 = arr[i].client;
//            if (myString1 == myInput || myString2 == myInput ){
//             console.log(arr[i]);
//             newAlertArray.push(arr[i]);
//            }  
//          }};

//     findATicker(alertArray, myID);
//    console.log(newAlertArray);
//    $('#feed').children().remove();
//    iterateDisplayAlert(newAlertArray); 
// });

   







    var tickerBoxArray = [
        { ticker: "AAPL", number: "41", urgent: "4" },
        { ticker: "PBR", number: "38", urgent: "13" },
        { ticker: "HOG", number: "35", urgent: "4" },
        { ticker: "ITUB", number: "96", urgent: "11" },
        { ticker: "GE", number: "51", urgent: "9" },
        { ticker: "CUZ", number: "35", urgent: "30" },
        { ticker: "DVA", number: "96", urgent: "1" },
        { ticker: "FCAU", number: "38", urgent: "14" },
        { ticker: "TWTR", number: "35", urgent: "9" },
        { ticker: "XOM", number: "96", urgent: "8" },
        { ticker: "JLUV", number: "41", urgent: "8" },
        { ticker: "FLOM", number: "96", urgent: "27" },
        { ticker: "LUV", number: "41", urgent: "17" },
        { ticker: "LVLT", number: "73", urgent: "22" },
        { ticker: "ORCL", number: "18", urgent: "3" },

        { ticker: "ABEV", number: "73", urgent: "11" },
        { ticker: "AMZN", number: "18", urgent: "4" },
        { ticker: "HAL", number: "16", urgent: "28" },
        { ticker: "CAH", number: "21", urgent: "22" },
        { ticker: "ECA", number: "14", urgent: "0" },
        { ticker: "FCX", number: "46", urgent: "0" },


        { ticker: "EW", number: "18", urgent: "0" },

        { ticker: "DZN", number: "16", urgent: "0" },
        { ticker: "GGB", number: "21", urgent: "0" },



        { ticker: "RAD", number: "46", urgent: "0" },
        { ticker: "RIG", number: "51", urgent: "0" },
        { ticker: "TWLO", number: "21", urgent: "0" },
        { ticker: "EGO", number: "37", urgent: "0" },

        { ticker: "ZBH", number: "16", urgent: "0" },
        { ticker: "AUY", number: "38", urgent: "0" },
        { ticker: "BABA", number: "46", urgent: "0" },
        { ticker: "BHI", number: "51", urgent: "0" },


        { ticker: "SCAD", number: "46", urgent: "0" },
        { ticker: "GRIG", number: "51", urgent: "0" },
        { ticker: "WLTO", number: "21", urgent: "0" },
        { ticker: "LEGO", number: "37", urgent: "0" },

        { ticker: "ZYBH", number: "16", urgent: "0" },
        { ticker: "APUY", number: "38", urgent: "0" },
        { ticker: "DADA", number: "46", urgent: "0" },
        { ticker: "CHILO", number: "51", urgent: "0" }
    ];


   
    var clientBoxArray = [
        { ticker: "Alambicx", number: "41", urgent: "3" },
        { ticker: "balyasnyx", number: "35", urgent: "30" },
        { ticker: "caerusx", number: "14", urgent: "11" },
        { ticker: "chlmnms", number: "38", urgent: "6" },
        { ticker: "deshdma", number: "51", urgent: "9" },
        { ticker: "grahamx", number: "96", urgent: "21" },
        { ticker: "hwcmdsa", number: "41", urgent: "16" },
        { ticker: "jonedsa", number: "18", urgent: "2" },

        { ticker: "mbicxgen", number: "41", urgent: "3" },
        { ticker: "cgpyasnyx", number: "35", urgent: "7" },
        { ticker: "rrrterusx", number: "14", urgent: "13" },
        { ticker: "shlmnms", number: "38", urgent: "6" },
        { ticker: "deshdma", number: "51", urgent: "9" },
        { ticker: "slaahamx", number: "96", urgent: "18" },
        { ticker: "fonedsa", number: "18", urgent: "2" },
        { ticker: "oocmdsa", number: "41", urgent: "9" },
        { ticker: "alkdsa", number: "73", urgent: "19" },
        { ticker: "allipwst", number: "18", urgent: "24" },
        { ticker: "alydarx", number: "38", urgent: "0" },
        { ticker: "amcedsa", number: "46", urgent: "0" },
        { ticker: "aqrpropx5", number: "51", urgent: "0" },
        { ticker: "arrowgrtx", number: "21", urgent: "0" },


        { ticker: "brockst", number: "96", urgent: "0" },
        { ticker: "btigdsa", number: "16", urgent: "0" },

        { ticker: "canteshx", number: "37", urgent: "0" },
        { ticker: "cantustp", number: "18", urgent: "0" },

        { ticker: "deepbltsx", number: "46", urgent: "0" },


        { ticker: "everpnt", number: "21", urgent: "0" },
        { ticker: "flowbvx6", number: "16", urgent: "0" },
        { ticker: "govlanex", number: "35", urgent: "0" },

        { ticker: "janexno", number: "73", urgent: "0" },

        { ticker: "RIGTWLO", number: "51", urgent: "0" },

        { ticker: "dalkdsa", number: "73", urgent: "0" },
        { ticker: "ollipwst", number: "18", urgent: "0" },
        { ticker: "yilydarx", number: "38", urgent: "0" },
        { ticker: "scrmcedsa", number: "46", urgent: "0" },
        { ticker: "ghrpropx5", number: "51", urgent: "0" },
        { ticker: "rowowgrt", number: "21", urgent: "0" },


        { ticker: "ochakst", number: "96", urgent: "0" },
        { ticker: "qwgdsa", number: "16", urgent: "0" },

        { ticker: "ganteshx", number: "37", urgent: "0" },
        { ticker: "nantustp", number: "18", urgent: "0" },

        { ticker: "deepbltsx", number: "46", urgent: "0" },


        { ticker: "ppverpnt", number: "21", urgent: "0" },
        { ticker: "blowbvx6", number: "16", urgent: "0" },
        { ticker: "shovlanex", number: "35", urgent: "0" },

        { ticker: "danexno", number: "73", urgent: "0" },

        { ticker: "vIGTWLO", number: "51", urgent: "0" }

    ];

   
    var alertArray = [
        { time: "2:00pm", client: "Alambicx", ticker: "AAPL", title: "price limit", urgent: "1", message: "Lorem ipsum dolor ahmet." },
        { time: "2:00pm", client: "Alambicx", ticker: "PBR", title: "order reject", urgent: "1", message: "Lorem ipsum dolor ahmet." },
        { time: "2:00pm", client: "Alambicx", ticker: "HOG", title: "order quantity", urgent: "1", message: "Lorem ipsum dolor ahmet." },
        { time: "2:00pm", client: "balyasnyx", ticker: "ITUB", title: "aggregate volume", urgent: "1", message: "Lorem ipsum dolor ahmet." },
        { time: "2:00pm", client: "caerusx", ticker: "GE", title: "aggregate volume", urgent: "1", message: "Lorem ipsum dolor ahmet." },
        { time: "2:00pm", client: "caerusx", ticker: "CUZ", title: "price limit", urgent: "1", message: "Lorem ipsum dolor ahmet." },
        { time: "2:00pm", client: "caerusx", ticker: "DVA", title: "order quantity", urgent: "1", message: "Lorem ipsum dolor ahmet." },
        { time: "2:00pm", client: "chlmnms", ticker: "FCAU", title: "volume limit", urgent: "1", message: "Lorem ipsum dolor ahmet." },
        { time: "2:00pm", client: "deshdma", ticker: "TWTR", title: "aggregate volume", urgent: "1", message: "Lorem ipsum dolor ahmet." },
        { time: "2:00pm", client: "deshdma", ticker: "XOM", title: "order quantity", urgent: "1", message: "Lorem ipsum dolor ahmet." },
        { time: "2:00pm", client: "deshdma", ticker: "JLUV", title: "price limit", urgent: "1", message: "Lorem ipsum dolor ahmet." },
        { time: "2:00pm", client: "grahamx", ticker: "FLOM", title: "price limit", urgent: "1", message: "Lorem ipsum dolor ahmet." },
        { time: "2:00pm", client: "hwcmdsa", ticker: "LUV", title: "order reject", urgent: "1", message: "Lorem ipsum dolor ahmet." },
        { time: "2:00pm", client: "jonedsa", ticker: "LVLT", title: "order reject", urgent: "1", message: "Lorem ipsum dolor ahmet." },

        { time: "2:00pm", client: "mbicxgen", ticker: "ORCL", title: "price notional", urgent: "1", message: "Lorem ipsum dolor ahmet." },
        { time: "2:00pm", client: "cgpyasnyx", ticker: "ABEV", title: "aggregate volume", urgent: "1", message: "Lorem ipsum dolor ahmet." },
        { time: "2:00pm", client: "rrrterusx", ticker: "AMZN", title: "aggregate volume", urgent: "1", message: "Lorem ipsum dolor ahmet." },
        { time: "2:00pm", client: "shlmnms", ticker: "HAL", title: "order quantity", urgent: "1", message: "Lorem ipsum dolor ahmet." },
        { time: "2:00pm", client: "deshdma", ticker: "CAH", title: "price notional", urgent: "1", message: "Lorem ipsum dolor ahmet." },
        { time: "2:00pm", client: "slaahamx", ticker: "ECA", title: "price limit", urgent: "1", message: "Lorem ipsum dolor ahmet." },
        { time: "2:00pm", client: "fonedsa", ticker: "FCX", title: "order reject", urgent: "1", message: "Lorem ipsum dolor ahmet." },
        { time: "2:00pm", client: "oocmdsa", ticker: "EW", title: "volume limit", urgent: "1", message: "Lorem ipsum dolor ahmet." },
        { time: "2:00pm", client: "alkdsa", ticker: "DZN", title: "volume limit", urgent: "1", message: "Lorem ipsum dolor ahmet." },
        { time: "2:00pm", client: "allipwst", ticker: "GGB", title: "order reject", urgent: "1", message: "Lorem ipsum dolor ahmet." },
        { time: "2:00pm", client: "alydarx", ticker: "RAD", title: "order quantity", urgent: "0", message: "Lorem ipsum dolor ahmet." },
        { time: "2:00pm", client: "amcedsa", ticker: "RAD", title: "price notional", urgent: "0", message: "Lorem ipsum dolor ahmet." },
        { time: "2:00pm", client: "aqrpropx5", ticker: "RIG", title: "price notional", urgent: "0", message: "Lorem ipsum dolor ahmet." },
        { time: "2:00pm", client: "arrowgrtx", ticker: "TWLO", title: "volume limit", urgent: "0", message: "Lorem ipsum dolor ahmet." },


        { time: "2:00pm", client: "brockst", ticker: "EGO", title: "price limit", urgent: "0", message: "Lorem ipsum dolor ahmet." },
        { time: "2:00pm", client: "btigdsa", ticker: "ZBH", title: "aggregate volume", urgent: "0", message: "Lorem ipsum dolor ahmet." },

        { time: "2:00pm", client: "canteshx", ticker: "AUY", title: "price limit", urgent: "0", message: "Lorem ipsum dolor ahmet." },
        { time: "2:00pm", client: "cantustp", ticker: "BABA", title: "order reject", urgent: "0", message: "Lorem ipsum dolor ahmet." },

        { time: "2:00pm", client: "deepbltsx", ticker: "BHI", title: "price notional", urgent: "0", message: "Lorem ipsum dolor ahmet." },


        { time: "2:00pm", client: "everpnt", ticker: "SCAD", title: "volume limit", urgent: "0", message: "Lorem ipsum dolor ahmet." },
        { time: "2:00pm", client: "flowbvx6", ticker: "GRIG", title: "aggregate volume", urgent: "0", message: "Lorem ipsum dolor ahmet." },
        { time: "2:00pm", client: "govlanex", ticker: "WLTO", title: "aggregate volume", urgent: "0", message: "Lorem ipsum dolor ahmet." },

        { time: "2:00pm", client: "janexno", ticker: "LEGO", title: "volume limit", urgent: "0", message: "Lorem ipsum dolor ahmet." },

        { time: "2:00pm", client: "RIGTWLO", ticker: "ZYBH", title: "price notional", urgent: "0", message: "Lorem ipsum dolor ahmet." },

        { time: "2:00pm", client: "dalkdsa", ticker: "ZYBH", title: "volume limit", urgent: "0", message: "Lorem ipsum dolor ahmet." },
        { time: "2:00pm", client: "ollipwst", ticker: "APUY", title: "order reject", urgent: "0", message: "Lorem ipsum dolor ahmet." },
        { time: "2:00pm", client: "yilydarx", ticker: "DADA", title: "order quantity", urgent: "0", message: "Lorem ipsum dolor ahmet." },
        { time: "2:00pm", client: "scrmcedsa", ticker: "CHILO", title: "price notional", urgent: "0", message: "Lorem ipsum dolor ahmet." },
        { time: "2:00pm", client: "ghrpropx5", ticker: "AAPL", title: "price notional", urgent: "0", message: "Lorem ipsum dolor ahmet." },
        { time: "2:00pm", client: "rowowgrt", ticker: "AAPL", title: "volume limit", urgent: "0", message: "Lorem ipsum dolor ahmet." },


        { time: "2:00pm", client: "ochakst", ticker: "PBR", title: "price limit", urgent: "0", message: "Lorem ipsum dolor ahmet." },
        { time: "2:00pm", client: "qwgdsa", ticker: "PBR", title: "aggregate volume", urgent: "0", message: "Lorem ipsum dolor ahmet." },

        { time: "2:00pm", client: "ganteshx", ticker: "HOG", title: "price limit", urgent: "0", message: "Lorem ipsum dolor ahmet." },
        { time: "2:00pm", client: "nantustp", ticker: "HOG", title: "order reject", urgent: "0", message: "Lorem ipsum dolor ahmet." },

        { time: "2:00pm", client: "deepbltsx", ticker: "HOG", title: "price notional", urgent: "0", message: "Lorem ipsum dolor ahmet." },


        { time: "2:00pm", client: "ppverpnt", ticker: "HOG", title: "volume limit", urgent: "0", message: "Lorem ipsum dolor ahmet." },
        { time: "2:00pm", client: "blowbvx6", ticker: "HOG", title: "aggregate volume", urgent: "0", message: "Lorem ipsum dolor ahmet." },
        { time: "2:00pm", client: "shovlanex", ticker: "HOG", title: "aggregate volume", urgent: "0", message: "Lorem ipsum dolor ahmet." },

        { time: "2:00pm", client: "danexno", ticker: "HOG", title: "volume limit", urgent: "0", message: "Lorem ipsum dolor ahmet." },

        { time: "2:00pm", client: "vIGTWLO", ticker: "HOG", title: "price notional", urgent: "0", message: "Lorem ipsum dolor ahmet." }

    ];


    

    function makeTickerBox1(name, alertCount, urgency) {

        var newTicker;
        newTicker = $('<div id= "' + name + '" class="summaryBoxStock" data-urgent=' + urgency + ' ><div class="stockBoxTitle">' + name + '</div><div class="numberSummaryBoxStock">' + alertCount + '</div></div>');
        var urgNum = newTicker.data('urgent');
        if (urgency == 0) {
            newTicker.addClass('notUrgent');

        } else {
            newTicker.addClass('urgent');
        }

        $('#tickerZone').append(newTicker);

    };


     function makeClientBox1(name, alertCount, urgency) {

        var newClient;
        newClient = $('<div  id= "' + name + '" class="summaryBoxStock" data-urgent=' + urgency + ' ><div class="clientBoxTitle">' + name + '</div><div class="numberSummaryBoxClient">' + alertCount + '</div></div>');
        var urgNum = newClient.data('urgent');
        if (urgency == 0) {
            newClient.addClass('notUrgent');

        } else {
            newClient.addClass('urgent');
        }

        $('#clientZone').append(newClient);

    };


     function makeAlertFeed(time, client, ticker, title, urgent, message) {

        var newAlert;
        newAlert = $('<div class="alertRowNew"> <div class="row" data-urgent=' + urgent + ' ><div class="col alertTimeCol"><span class="timeOfAlert">' + time + '</span></div><div class="col messageCol"><span class="title">' + title + '</span><span class="clientTicker">' + client + ' - ' + ticker + ' </span> ' + message + ' </div><div class="col actionsCol"><div class="gip">GIP</div><i class="mdi mdi-check"></i></div></div></div>');
      
        if (urgent > 0) {
            newAlert.addClass('urgentMarker');

        } 
        $('#feed').append(newAlert);

    };








    function sortOrder(arr) {
        arr.sort(function(obj1, obj2) {
            return obj2.urgent - obj1.urgent;
        });
    }



    sortOrder(tickerBoxArray);
    sortOrder(clientBoxArray);

   

  


// $('#tickerZone, #clientZone').on('click', '.summaryBoxStock', function() {
//     myID = this.id;
//     function findID(whatever) {
//   return whatever.ticker == myID || whatever.client == myID;
// }
//     console.log(alertArray.filter(findID));
//     var thisAlert = alertArray.filter(findID);
// });







////   did not work

// var alertFilterArray = [];

// $('#tickerZone, #clientZone').on('click', '.summaryBoxStock', function() {
    
//     myID = this.id;
//     console.log(this.id);
//     findID(alertArray);
    
    
// });

// function findID(arr) {
//         for (i = 0; i < arr.length; i++) {
//         if (arr[i].ticker === myID) {
//             return arr[i];
//         } else if (arr[i].client === myID){
//             return arr[i];
//             console.log(arr[i]);
//         };
//         alertFilterArray.push(arr[i]);
//     }
    
//     console.log(alertFilterArray);
// }




    function iterateDisplay(arr) {
        for (i = 0; i < arr.length; i++) {
            makeTickerBox1(arr[i].ticker, arr[i].number, arr[i].urgent);
        }
    };

     function iterateDisplayClient(arr) {
        for (i = 0; i < arr.length; i++) {

            makeClientBox1(arr[i].ticker, arr[i].number, arr[i].urgent);
        }
    };





     function iterateDisplayAlert(arr) {
        for (i = 0; i < arr.length; i++) {

            makeAlertFeed(arr[i].time, arr[i].client, arr[i].ticker, arr[i].title, arr[i].urgent, arr[i].message);
        }
    };


   

    iterateDisplayAlert(alertArray);







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
    
   






    // toasts


    $('#iVersion').on('click', function() {
        $('#iVersion').toggleClass('selectedSide');
        $('.toast').toggle();

    });



    


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
