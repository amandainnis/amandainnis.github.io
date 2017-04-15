var filterClick = false;
var counter = 0;
var myID;
var newAlertArray = [];







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


    $('#tickerZone, #clientZone').on('click', '.summaryBoxStock', function() {
        console.log(this.id);

    })

    // $('#cockpit').on('click', '.typeRow', function() {
    //     $(this).toggleClass('tileClicked');

    // })

    // if( (A && !B) || (B && !A) ) 

    $('#cockpit').on('click', function() {
       
        if ($('*').hasClass('tileClicked') || $('*').hasClass('typeClicked')){
            filterClick = true;
        }
        
        else { filterClick = false; }
        console.log(filterClick);

        if (filterClick == true) {
            $('#reset').removeClass('lowOpacity');
        } else {
            $('#reset').addClass('lowOpacity');
        }
    });

// $('.summaryBoxStock, .typeRow').on('click', function() {
//         if ($('.summaryBoxStock').hasClass('tileClicked')) {
//             filterClick = true;
//             $('#reset').removeClass('lowOpacity');
//         } 
//         else if ($('.typeRow').hasClass('tileClicked')) {
//             filterClick = true;
//             $('#reset').removeClass('lowOpacity');
//         }
//         else { 
//             filterClick = false;
//             $('#reset').addClass('lowOpacity'); }
//         console.log(filterClick);

//         // if (filterClick == true) {
//         //     $('#reset').removeClass('lowOpacity');
//         // } else {
//         //     $('#reset').addClass('lowOpacity');
//         // }
//     });


    $('#reset').on('click', function() {
        $('*').removeClass('tileClicked');
        $('*').removeClass('typeClicked');
        filterClick = false;
        console.log(filterClick);
        $('#reset').addClass('lowOpacity');
        counter = 0;
        $('#feed').children().remove();
        iterateDisplayAlert(alertArray);
        newAlertArray = [];
        console.log(counter);
        $('.alertRowNew .actionsCol .mdi-check').on('click', function() {
            $('.' + this.id + '.alertRowNew').css('background-color', 'teal').delay(100).hide(50);

        })
    })




    // $('#tickerZone, #clientZone').on('click', '.summaryBoxStock', function() {



    // allows for only one clicked tile at a time, also, acknowledging had to be reinserted here because it wasn't "heard"
    $('#cockpit').on('click', '.typeRow', function() {

        if (counter == 1 && $(this).hasClass('typeClicked')) {
            $(this).removeClass('typeClicked');
            counter -= 1;
            $('.alertRowNew .actionsCol .mdi-check').on('click', function() {
                $('.' + this.id + '.alertRowNew').css('background-color', 'teal').delay(100).hide(50);
            })
        } else if (counter == 0) {
            $(this).addClass('typeClicked');
            counter += 1;
            $('.alertRowNew .actionsCol .mdi-check').on('click', function() {
                $('.' + this.id + '.alertRowNew').css('background-color', 'teal').delay(100).hide(50);

            })
        } else if (counter == 1 && (!$(this).hasClass('typeClicked'))) {
            counter += 0;
            $('*').removeClass('tileClicked');
            $('*').removeClass('typeClicked');
            $(this).addClass('typeClicked');
            $('#feed').children().remove();
            iterateDisplayAlert(alertArray);
            $('.alertRowNew .actionsCol .mdi-check').on('click', function() {
                $('.' + this.id + '.alertRowNew').css('background-color', 'teal').delay(100).hide(50);

            })

        }
        console.log(counter);
    });



   $('#cockpit').on('click', '.summaryBoxStock', function() {

        if (counter == 1 && $(this).hasClass('tileClicked')) {
            $(this).removeClass('tileClicked');
            counter -= 1;
            $('#feed').children().remove();
            iterateDisplayAlert(alertArray);
            newAlertArray = [];
            $('.alertRowNew .actionsCol .mdi-check').on('click', function() {
                $('.' + this.id + '.alertRowNew').css('background-color', 'teal').delay(100).hide(50);
            })
        } else if (counter == 0) {
            $(this).addClass('tileClicked');
            myID = this.id;
            counter += 1;
            findATicker(alertArray, myID);
            $('#feed').children().remove();
            iterateDisplayAlert(newAlertArray);
            $('.alertRowNew .actionsCol .mdi-check').on('click', function() {
                $('.' + this.id + '.alertRowNew').css('background-color', 'teal').delay(100).hide(50);

            })
        } else if (counter == 1 && (!$(this).hasClass('tileClicked'))) {
            counter += 0;
            $('*').removeClass('tileClicked');
            $('*').removeClass('typeClicked');
            // $('.summaryBoxStock').removeClass('tileClicked');
            // $('.typeRow').removeClass('tileClicked');
            $(this).addClass('tileClicked');
            newAlertArray = [];
            myID = this.id;
            findATicker(alertArray, myID);
            $('#feed').children().remove();
            iterateDisplayAlert(newAlertArray);
            $('.alertRowNew .actionsCol .mdi-check').on('click', function() {
                $('.' + this.id + '.alertRowNew').css('background-color', 'teal').delay(100).hide(50);

            })

        }
        console.log(counter);
    });
    
    

    $('#allFeed').on('click', '#resizeButton', function() {
        console.log('hiya');


    })

    
    

   


$('#wrapper').on('mousemove', function(event){
    console.log(event.clientY)
  
});

var resizeClick = false;
var mousedownY;
var mouseupY;
var newClientY;
var heightPxstockClientPit; 
var currentHeightFeed;
var distanceTraveled;



   
  

    $('#resizeButton').on('mouseover', function(){
        $('*').css('user-select', 'none');
        
    });
    

    $('#resizeButton').on('mousedown', function(event){
            resizeClick = true;
            $('#wrapper').addClass('ns-resize');  
            mousedownY = event.clientY;
            console.log('mousedownY is ' + mousedownY); 
            heightPxstockClientPit = $('#stockpit, #clientpit').css('height');  
            heightPxstockClientPit = parseInt(heightPxstockClientPit, 10); 
            currentHeightFeed = $('#feed').css('height'); 
            currentHeightFeed = parseInt(currentHeightFeed, 10); 
            
        //remove eventlistener
    })
    
        $('#wrapper').on('mouseup', function(event){
            event.preventDefault;
            if (resizeClick == true) {
                $('#wrapper').removeClass('ns-resize');  
                mouseupY = event.clientY;
                console.log('mouseupY is ' + mouseupY); 
                console.log(resizeClick);
                console.log('mousedownY minus mouseupY is ' + (mousedownY - mouseupY));
                distanceTraveled = mousedownY - mouseupY;
                newHeightClientStock = (heightPxstockClientPit - distanceTraveled) + 'px';
                newHeightCockpit = (heightPxstockClientPit - distanceTraveled + 36) + 'px';
                newHeightFeed = (currentHeightFeed + distanceTraveled) + 'px';

                console.log('newHeightFeed is ' + newHeightFeed);
                $('#feed').css('height', newHeightFeed);
                $('#stockpit, #clientpit').css('height', newHeightClientStock);
                $('#cockpit').css('height', newHeightCockpit);
            }
            
            resizeClick = false;
            console.log(resizeClick);
      
    })
    
    

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
        { time: "14:01:33", client: "Alambicx", ticker: "AAPL", title: "price limit", urgent: "1", message: "IBCP Total Order Quantity: 9,753 - Day Vol: 7,354 - % Vol: 132.62" },
        { time: "14:01:32", client: "Alambicx", ticker: "PBR", title: "order reject", urgent: "1", message: "PendingNew Order Quantity: 2,000,000 - Last Shares: N/A" },
        { time: "14:01:31", client: "Alambicx", ticker: "HOG", title: "order quantity", urgent: "1", message: "PartiallyFilled Order Quantity: 1,618,520 -Total Notional: 13,433,716" },
        { time: "14:01:30", client: "balyasnyx", ticker: "ITUB", title: "aggregate volume", urgent: "1", message: "(Buy) Order Quantity: 300 - Reject Count: 6" },
        { time: "14:01:29", client: "caerusx", ticker: "GE", title: "aggregate volume", urgent: "1", message: "(Sell) - Rejected Order Quantity: 100 - Mkt or Limit Price: 2.34" },
        { time: "14:01:28", client: "caerusx", ticker: "CUZ", title: "price limit", urgent: "1", message: "(Buy) Order Quantity: 300 - Reject Count: 6" },
        { time: "14:01:27", client: "caerusx", ticker: "DVA", title: "order quantity", urgent: "1", message: "Partially Filled Order Quantity: 1,618,520 -Total Notional: 13,433,716" },
        { time: "14:01:26", client: "chlmnms", ticker: "FCAU", title: "volume limit", urgent: "1", message: "Total Order Quantity: 9,753 - Day Vol: 7,354 - % Vol: 132.62" },
        { time: "14:01:25", client: "deshdma", ticker: "TWTR", title: "aggregate volume", urgent: "1", message: "(Buy) - PendingNew Order Quantity: 2,000,000 - Last Shares: N/A" },
        { time: "14:01:24", client: "deshdma", ticker: "XOM", title: "order quantity", urgent: "1", message: "Lorem ipsum dolor ahmet." },
        { time: "14:01:23", client: "deshdma", ticker: "JLUV", title: "price limit", urgent: "1", message: "Lorem ipsum dolor ahmet." },
        { time: "14:01:22", client: "grahamx", ticker: "FLOM", title: "price limit", urgent: "1", message: "Lorem ipsum dolor ahmet." },
        { time: "14:01:21", client: "hwcmdsa", ticker: "LUV", title: "order reject", urgent: "1", message: "Lorem ipsum dolor ahmet." },
        { time: "14:01:20", client: "jonedsa", ticker: "LVLT", title: "order reject", urgent: "1", message: "Lorem ipsum dolor ahmet." },

        { time: "14:01:19", client: "mbicxgen", ticker: "ORCL", title: "price notional", urgent: "1", message: "Lorem ipsum dolor ahmet." },
        { time: "14:01:18", client: "cgpyasnyx", ticker: "ABEV", title: "aggregate volume", urgent: "1", message: "Lorem ipsum dolor ahmet." },
        { time: "14:01:17", client: "rrrterusx", ticker: "AMZN", title: "aggregate volume", urgent: "1", message: "Lorem ipsum dolor ahmet." },
        { time: "14:01:16", client: "shlmnms", ticker: "HAL", title: "order quantity", urgent: "1", message: "Lorem ipsum dolor ahmet." },
        { time: "14:01:15", client: "deshdma", ticker: "CAH", title: "price notional", urgent: "1", message: "Lorem ipsum dolor ahmet." },
        { time: "14:01:14", client: "slaahamx", ticker: "ECA", title: "price limit", urgent: "1", message: "Lorem ipsum dolor ahmet." },
        { time: "14:01:13", client: "fonedsa", ticker: "FCX", title: "order reject", urgent: "1", message: "Lorem ipsum dolor ahmet." },
        { time: "14:01:12", client: "oocmdsa", ticker: "EW", title: "volume limit", urgent: "1", message: "Lorem ipsum dolor ahmet." },
        { time: "14:01:11", client: "alkdsa", ticker: "DZN", title: "volume limit", urgent: "1", message: "Lorem ipsum dolor ahmet." },
        { time: "14:01:10", client: "allipwst", ticker: "GGB", title: "order reject", urgent: "1", message: "Lorem ipsum dolor ahmet." },
        { time: "14:01:09", client: "alydarx", ticker: "RAD", title: "order quantity", urgent: "0", message: "Lorem ipsum dolor ahmet." },
        { time: "14:01:08", client: "amcedsa", ticker: "RAD", title: "price notional", urgent: "0", message: "Lorem ipsum dolor ahmet." },
        { time: "14:01:07", client: "aqrpropx5", ticker: "RIG", title: "price notional", urgent: "0", message: "Lorem ipsum dolor ahmet." },
        { time: "14:01:06", client: "arrowgrtx", ticker: "TWLO", title: "volume limit", urgent: "0", message: "Lorem ipsum dolor ahmet." },


        { time: "14:01:05", client: "brockst", ticker: "EGO", title: "price limit", urgent: "0", message: "Lorem ipsum dolor ahmet." },
        { time: "14:01:04", client: "btigdsa", ticker: "ZBH", title: "aggregate volume", urgent: "0", message: "Lorem ipsum dolor ahmet." },

        { time: "14:01:03", client: "canteshx", ticker: "AUY", title: "price limit", urgent: "0", message: "Lorem ipsum dolor ahmet." },
        { time: "14:01:02", client: "cantustp", ticker: "BABA", title: "order reject", urgent: "0", message: "Lorem ipsum dolor ahmet." },

        { time: "14:01:01", client: "deepbltsx", ticker: "BHI", title: "price notional", urgent: "0", message: "Lorem ipsum dolor ahmet." },


        { time: "14:01:00", client: "everpnt", ticker: "SCAD", title: "volume limit", urgent: "0", message: "Lorem ipsum dolor ahmet." },
        { time: "14:00:59", client: "flowbvx6", ticker: "GRIG", title: "aggregate volume", urgent: "0", message: "Lorem ipsum dolor ahmet." },
        { time: "14:00:58", client: "govlanex", ticker: "WLTO", title: "aggregate volume", urgent: "0", message: "Lorem ipsum dolor ahmet." },

        { time: "14:00:57", client: "janexno", ticker: "LEGO", title: "volume limit", urgent: "0", message: "Lorem ipsum dolor ahmet." },

        { time: "14:00:56", client: "RIGTWLO", ticker: "ZYBH", title: "price notional", urgent: "0", message: "Lorem ipsum dolor ahmet." },

        { time: "14:00:55", client: "dalkdsa", ticker: "ZYBH", title: "volume limit", urgent: "0", message: "Lorem ipsum dolor ahmet." },
        { time: "14:00:54", client: "ollipwst", ticker: "APUY", title: "order reject", urgent: "0", message: "Lorem ipsum dolor ahmet." },
        { time: "14:00:53", client: "yilydarx", ticker: "DADA", title: "order quantity", urgent: "0", message: "Lorem ipsum dolor ahmet." },
        { time: "14:00:52", client: "scrmcedsa", ticker: "CHILO", title: "price notional", urgent: "0", message: "Lorem ipsum dolor ahmet." },
        { time: "14:00:51", client: "ghrpropx5", ticker: "AAPL", title: "price notional", urgent: "0", message: "Lorem ipsum dolor ahmet." },
        { time: "14:00:50", client: "rowowgrt", ticker: "AAPL", title: "volume limit", urgent: "0", message: "Lorem ipsum dolor ahmet." },


        { time: "14:00:49", client: "ochakst", ticker: "PBR", title: "price limit", urgent: "0", message: "Lorem ipsum dolor ahmet." },
        { time: "14:00:48", client: "qwgdsa", ticker: "PBR", title: "aggregate volume", urgent: "0", message: "Lorem ipsum dolor ahmet." },

        { time: "14:00:47", client: "ganteshx", ticker: "HOG", title: "price limit", urgent: "0", message: "Lorem ipsum dolor ahmet." },
        { time: "14:00:46", client: "nantustp", ticker: "HOG", title: "order reject", urgent: "0", message: "Lorem ipsum dolor ahmet." },

        { time: "14:00:45", client: "deepbltsx", ticker: "HOG", title: "price notional", urgent: "0", message: "Lorem ipsum dolor ahmet." },


        { time: "14:00:44", client: "ppverpnt", ticker: "HOG", title: "volume limit", urgent: "0", message: "Lorem ipsum dolor ahmet." },
        { time: "14:00:43", client: "blowbvx6", ticker: "HOG", title: "aggregate volume", urgent: "0", message: "Lorem ipsum dolor ahmet." },
        { time: "14:00:42", client: "shovlanex", ticker: "HOG", title: "aggregate volume", urgent: "0", message: "Lorem ipsum dolor ahmet." },

        { time: "14:00:41", client: "danexno", ticker: "HOG", title: "volume limit", urgent: "0", message: "Lorem ipsum dolor ahmet." },

        { time: "14:00:40", client: "vIGTWLO", ticker: "HOG", title: "price notional", urgent: "0", message: "Lorem ipsum dolor ahmet." }

    ];











    // makes feed and tiles

    function makeAlertFeed(time, client, ticker, title, urgent, message, myIDalert) {

        var newAlert;
        newAlert = $('<div class="alertRowNew ' + myIDalert + '"> <div class="row" data-urgent=' + urgent + ' ><div class="col alertTimeCol"><span class="timeOfAlert">' + time + '</span></div><div class="col messageCol"><span class="title">' + title + '</span><span class="clientTicker">' + client + ' - ' + ticker + ' </span> ' + message + ' </div><div class="col actionsCol"><div class="gip">GIP</div><i id= "' + myIDalert + '" class="mdi mdi-check "></i></div></div></div>');

        if (urgent > 0) {
            newAlert.addClass('urgentMarker');

        }
        $('#feed').append(newAlert);

    };


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



    // iterate/display

    function iterateDisplayAlert(arr) {
        for (i = 0; i < arr.length; i++) {
            myStringAlert = arr[i].time;
            myStringAlert = myStringAlert.replace(/\D/g, '');
            myIDalert = "id" + myStringAlert;
            makeAlertFeed(arr[i].time, arr[i].client, arr[i].ticker, arr[i].title, arr[i].urgent, arr[i].message, myIDalert);
        }

    };

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






    // sorts tiles

    function sortOrder(arr) {
        arr.sort(function(obj1, obj2) {
            return obj2.urgent - obj1.urgent;
        });
    }


    // pairs tiles with feed

    function findATicker(arr, myInput) {

        for (i = 0; i < arr.length; i++) {
            var myString1 = arr[i].ticker;
            var myString2 = arr[i].client;
            if (myString1 == myInput || myString2 == myInput) {
                console.log(arr[i]);
                newAlertArray.push(arr[i]);
            }
        }
    };



    /// functions called

    sortOrder(tickerBoxArray);
    sortOrder(clientBoxArray);
    iterateDisplayAlert(alertArray);




    // gets total number of alerts

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









    // naviagtion on buttons


    function borders1() {
        $('.tileClicked').addClass('borders1');
        $('.notUrgent').addClass('borders1');
        $('.urgent').addClass('borders1');
        $('*').removeClass('borders2');
    }

    function borders2() {
        $('.tileClicked').addClass('borders2');
        $('.notUrgent').addClass('borders2');
        $('.urgent').addClass('borders2');
        $('*').removeClass('borders1');
    }

    function bordersRemove() {
        $('*').removeClass('borders1');
        $('*').removeClass('borders2');
    }



    // new alerts

    $('#aVersion').on('click', function() {
        $('#aVersion').toggleClass('selectedSide');
        $('.notUrgent, .urgent').toggleClass('newAlert');

    });


    // toasts


    $('#iVersion').on('click', function() {
        $('#iVersion').toggleClass('selectedSide');
        $('.toast').toggle();

        // function fade(){
        //     $('.toast.fade').fadeOut();
        // };
        // setTimeout(fade, 5000);


    });






    // borders1
    $('#dVersion').on('click', function() {
        $('.flipSideButton2').removeClass('selectedSide');
        $(this).addClass('selectedSide');
        myIDred = this.id;
        console.log(myIDred);
        bordersRemove();


    });


    $('#hVersion').on('click', function() {
        $('.flipSideButton2').removeClass('selectedSide');
        $(this).addClass('selectedSide');
        myIDred = this.id;
        console.log(myIDred);
        borders2();


    });

    // creates acknowledge

    $('.alertRowNew .actionsCol .mdi-check').on('click', function() {
        // debugger;
        console.log(this.id);

        $('.' + this.id + '.alertRowNew').css('background-color', 'teal').delay(100).hide(50);

    })



    // $( function() {
    //     $( "#allFeed" ).resizable({
    //       alsoResize: "#cockpit"
    //     });
    //     $( "#cockpit" ).resizable();
    //   } );






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





// function startTimer(duration, display) {
//     var timer = 0;
//     setInterval(function() {
//         // parseInt the second parameter is base 10 format
//         minutes = parseInt(timer / 60, 10);
//         seconds = parseInt(timer % 60, 10);

//         //if minutes is less than 10 show a 0 in front
//         minutes = minutes < 10 ? "0" + minutes : minutes;
//         seconds = seconds < 10 ? "0" + seconds : seconds;

//         display.textContent = minutes + ":" + seconds;

//         if (++timer == duration) {
//             timer = 0;
//         }
//     }, 1000);
// }

// function loadTimer() {
//     var twelveMinutes = 60 * 2,
//         display = document.querySelector('#timer1');
//     startTimer(twelveMinutes, display);
// };

// loadTimer();
