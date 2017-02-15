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
        $('.typeStockClient span').removeClass('selected');
        $(this).addClass('selected');
        $('#clientpit').hide();

        $('#stockpit').show();

        $('#tickerZone').children().remove();
        iterateDisplay(tickerBoxArray, 'number');
        $('#urgentSummary').text(urgentNumStock);
        $('#totalSummary').text(totNumStock);


    });



    $('#client').click(function() {
        $('.typeStockClient span').removeClass('selected');
        $(this).addClass('selected');

        $('#stockpit').hide();
        $('#clientpit').show();
        $('#clientZone').children().remove();
        iterateDisplayClient(clientBoxArray, 'number');
        $('#urgentSummary').text(urgentNumClient);
        $('#totalSummary').text(totNumClient);

    });



    var tickerBoxArrayMaster = [
        { ticker: "AAPL", number: "41", urgent: "4", redDot: true },
        { ticker: "PBR", number: "38", urgent: "13", redDot: true },
        { ticker: "HOG", number: "35", urgent: "4", redDot: true },
        { ticker: "ITUB", number: "96", urgent: "11", redDot: true },
        { ticker: "GE", number: "51", urgent: "9", redDot: true },
        { ticker: "CUZ", number: "35", urgent: "30", redDot: true },
        { ticker: "DVA", number: "96", urgent: "1", redDot: true },
        { ticker: "FCAU", number: "38", urgent: "14", redDot: true },
        { ticker: "TWTR", number: "35", urgent: "9", redDot: true },
        { ticker: "XOM", number: "96", urgent: "8", redDot: true },
        { ticker: "JLUV", number: "41", urgent: "8", redDot: true },
        { ticker: "FLOM", number: "96", urgent: "27", redDot: true },
        { ticker: "LUV", number: "41", urgent: "17", redDot: true },
        { ticker: "LVLT", number: "73", urgent: "22", redDot: true },
        { ticker: "ORCL", number: "18", urgent: "3", redDot: true },

        { ticker: "ABEV", number: "73", urgent: "11", redDot: true },
        { ticker: "AMZN", number: "18", urgent: "4", redDot: true },
        { ticker: "HAL", number: "16", urgent: "28", redDot: true },
        { ticker: "CAH", number: "21", urgent: "22", redDot: true },
        { ticker: "ECA", number: "14", urgent: "0", redDot: false },
        { ticker: "FCX", number: "46", urgent: "0", redDot: false },


        { ticker: "EW", number: "18", urgent: "0", redDot: false },

        { ticker: "DZN", number: "16", urgent: "0", redDot: false },
        { ticker: "GGB", number: "21", urgent: "0", redDot: false },



        { ticker: "RAD", number: "46", urgent: "0", redDot: false },
        { ticker: "RIG", number: "51", urgent: "0", redDot: false },
        { ticker: "TWLO", number: "21", urgent: "0", redDot: false },
        { ticker: "EGO", number: "37", urgent: "0", redDot: false },

        { ticker: "ZBH", number: "16", urgent: "0", redDot: false },
        { ticker: "AUY", number: "38", urgent: "0", redDot: false },
        { ticker: "BABA", number: "46", urgent: "0", redDot: false },
        { ticker: "BHI", number: "51", urgent: "0", redDot: false },


        { ticker: "SCAD", number: "46", urgent: "0", redDot: false },
        { ticker: "GRIG", number: "51", urgent: "0", redDot: false },
        { ticker: "WLTO", number: "21", urgent: "0", redDot: false },
        { ticker: "LEGO", number: "37", urgent: "0", redDot: false },

        { ticker: "ZYBH", number: "16", urgent: "0", redDot: false },
        { ticker: "APUY", number: "38", urgent: "0", redDot: false },
        { ticker: "DADA", number: "46", urgent: "0", redDot: false },
        { ticker: "CHILO", number: "51", urgent: "0", redDot: false }
    ];


    var tickerBoxArray = [];

    tickerBoxArray = tickerBoxArrayMaster;

    // tickerBoxArray = tickerBoxArrayMaster.slice(0,10);




    var clientBoxArrayMaster = [
        { ticker: "Alambicx", number: "41", urgent: "3", redDot: true },
        { ticker: "balyasnyx", number: "35", urgent: "30", redDot: true },
        { ticker: "caerusx", number: "14", urgent: "11", redDot: true },
        { ticker: "chlmnms", number: "38", urgent: "6", redDot: true },
        { ticker: "deshdma", number: "51", urgent: "9", redDot: true },
        { ticker: "grahamx", number: "96", urgent: "21", redDot: true },
        { ticker: "hwcmdsa", number: "41", urgent: "16", redDot: true },
        { ticker: "jonedsa", number: "18", urgent: "2", redDot: true },

        { ticker: "mbicxgen", number: "41", urgent: "3", redDot: true },
        { ticker: "cgpyasnyx", number: "35", urgent: "7", redDot: true },
        { ticker: "rrrterusx", number: "14", urgent: "13", redDot: true },
        { ticker: "shlmnms", number: "38", urgent: "6", redDot: true },
        { ticker: "deshdma", number: "51", urgent: "9", redDot: true },
        { ticker: "slaahamx", number: "96", urgent: "18", redDot: true },
        { ticker: "fonedsa", number: "18", urgent: "2", redDot: true },
        { ticker: "oocmdsa", number: "41", urgent: "9", redDot: true },
        { ticker: "alkdsa", number: "73", urgent: "0", redDot: false },
        { ticker: "allipwst", number: "18", urgent: "0", redDot: false },
        { ticker: "alydarx", number: "38", urgent: "0", redDot: false },
        { ticker: "amcedsa", number: "46", urgent: "0", redDot: false },
        { ticker: "aqrpropx5", number: "51", urgent: "0", redDot: false },
        { ticker: "arrowgrtx", number: "21", urgent: "0", redDot: false },


        { ticker: "brockst", number: "96", urgent: "0", redDot: false },
        { ticker: "btigdsa", number: "16", urgent: "0", redDot: false },

        { ticker: "canteshx", number: "37", urgent: "0", redDot: false },
        { ticker: "cantustp", number: "18", urgent: "0", redDot: false },

        { ticker: "deepbltsx", number: "46", urgent: "0", redDot: false },


        { ticker: "everpnt", number: "21", urgent: "0", redDot: false },
        { ticker: "flowbvx6", number: "16", urgent: "0", redDot: false },
        { ticker: "govlanex", number: "35", urgent: "0", redDot: false },

        { ticker: "janexno", number: "73", urgent: "0", redDot: false },

        { ticker: "RIGTWLO", number: "51", urgent: "0", redDot: false },

        { ticker: "dalkdsa", number: "73", urgent: "0", redDot: false },
        { ticker: "ollipwst", number: "18", urgent: "0", redDot: false },
        { ticker: "yilydarx", number: "38", urgent: "0", redDot: false },
        { ticker: "scrmcedsa", number: "46", urgent: "0", redDot: false },
        { ticker: "ghrpropx5", number: "51", urgent: "0", redDot: false },
        { ticker: "rowowgrtx", number: "21", urgent: "0", redDot: false },


        { ticker: "ochakst", number: "96", urgent: "0", redDot: false },
        { ticker: "qwgdsa", number: "16", urgent: "0", redDot: false },

        { ticker: "ganteshx", number: "37", urgent: "0", redDot: false },
        { ticker: "nantustp", number: "18", urgent: "0", redDot: false },

        { ticker: "deepbltsx", number: "46", urgent: "0", redDot: false },


        { ticker: "ppverpnt", number: "21", urgent: "0", redDot: false },
        { ticker: "blowbvx6", number: "16", urgent: "0", redDot: false },
        { ticker: "shovlanex", number: "35", urgent: "0", redDot: false },

        { ticker: "danexno", number: "73", urgent: "0", redDot: false },

        { ticker: "vIGTWLO", number: "51", urgent: "0", redDot: false }

    ];

    var clientBoxArray = [];

    clientBoxArray = clientBoxArrayMaster;


    function makeTickerBox1(name, alertCount, urgency) {

        var newTicker;
        newTicker = $('<div class="summaryBoxStock" data-urgent=' + urgency + ' ><div class="stockBoxTitle">' + name + '</div><div class="numberSummaryBoxStock">' + alertCount + '</div></div>');
        var urgNum = newTicker.data('urgent');
        if (urgency == 0) {
            newTicker.addClass('notUrgent');

        } else if (urgency <= 8) {
            newTicker.addClass('urgentLight');

        } else if (urgency <= 18) {
            newTicker.addClass('urgent');
            
        } else if (urgency > 18) {
            newTicker.addClass('urgentExtreme');
            
        }

        $('#tickerZone').append(newTicker);



    };


    function makeClientBox1(name, alertCount, urgency) {

        var newClient;
        newClient = $('<div class="summaryBoxStock" data-urgent=' + urgency + ' ><div class="clientBoxTitle">' + name + '</div><div class="numberSummaryBoxClient">' + alertCount + '</div></div>');
        var urgNum = newClient.data('urgent');
        if (urgency == 0) {
            newClient.addClass('notUrgent');

        } else if (urgency <= 8) {
            newClient.addClass('urgentLight');

        } else if (urgency <= 18) {
            newClient.addClass('urgent');
            
        } else if (urgency > 18) {
            newClient.addClass('urgentExtreme');
            
        }

        $('#clientZone').append(newClient);



    };






    var previousIteration;

    function iterateDisplay(arr) {
        for (i = 0; i < arr.length; i++) {
            if (myID == 'aVersion') {
                lightRed();
            } else if (myID == 'hVersion') {
                lightBlue();
            } else if (myID == 'cVersion') {
                darkBlue();
            }
            else if (myID == 'bVersion') {
                darkRed();
            }
            else if (myID == 'jVersion') {
                darkGreen();
            }
            
            makeTickerBox1(arr[i].ticker, arr[i].number, arr[i].urgent);
            
            if (myIDlayout == 'fVersion') {
                moreAlerts();
            } else if (myIDlayout == 'gVersion') {
                fewerAlerts();
            }

            if (myIDleft == 'eVersion') {
                leftAlign();
            } 

        }
    };




// tooltip on hover

    


    $('#tickerZone').on('mouseenter', '.summaryBoxStock', function(event) {
        console.log($(this).data('urgent'));
        var urgNum = $(this).data('urgent');
        if (urgNum > 0) {
            $(this).append('<div class="toolTip">' + urgNum + ' </div>');
        }
    }).on('mouseleave', '.summaryBoxStock', function(event) {
        $(this).find('.toolTip').remove();

    })









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



    function iterateDisplayClient(arr) {
        for (i = 0; i < arr.length; i++) {
            if (myID == 'aVersion') {
                lightRed();
            } else if (myID == 'hVersion') {
                lightBlue();
            } else if (myID == 'cVersion') {
                darkBlue();
            }
            else if (myID == 'bVersion') {
                darkRed();
            }
            else if (myID == 'jVersion') {
                darkGreen();
            }
            makeClientBox1(arr[i].ticker, arr[i].number, arr[i].urgent);
            if (myIDlayout == 'fVersion') {
                moreAlerts();
            } else if (myIDlayout == 'gVersion') {
                fewerAlerts();
            }

            if (myIDleft == 'eVersion') {
                leftAlign();
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



    function lightRed() {
        $('*').removeClass('darkBlue');
        $('*').removeClass('darkGreen');
        $('.urgentLight').addClass('lightRed');
        $('.urgent').addClass('lightRed');
        $('.urgentExtreme').addClass('lightRed');
        $('.stockBoxTitle, .numberSummaryBoxStock, .clientBoxTitle').addClass('lightRed');
        $('.row.urgMarker').addClass('lightRed');
        
    }

   

    function lightBlue() {
        $('*').removeClass('darkBlue');
        $('*').removeClass('lightRed');
        $('*').removeClass('darkGreen');
    }

    

    function darkBlue() {
        $('*').removeClass('lightRed');
        $('*').removeClass('darkGreen');
        $('#wrapper').addClass('darkBlue');
        $('.alertHeader, .colorKey').addClass('darkBlue');
        $('.notUrgent').addClass('darkBlue');
        $('.typeStockClient').addClass('darkBlue');
        $('.typeStockClient .selected').addClass('darkBlue');
        $('.stockBoxTitle, .numberSummaryBoxStock, .numberSummaryBoxClient, .clientBoxTitle').addClass('darkBlue');
        $('.numberSummaryBoxStock').addClass('darkBlue');
        $('.typeRow').addClass('darkBlue');
        $('.typeRow.thickBorderBottom').addClass('darkBlue');
        $('.urgentLight').addClass('darkBlue');
        $('.urgent').addClass('darkBlue');
        $('.urgentExtreme').addClass('darkBlue');
        $('.aboveColHeader').addClass('darkBlue');
        $('.row .col').addClass('darkBlue');
        $('.columnHeader, .columnHeader .col').addClass('darkBlue');
        $('.alertRowNew').addClass('darkBlue');
        $('.row.urgMarker').addClass('darkBlue');
        $('#cockpit').addClass('darkBlue');
        $('#stockpit, #clientpit, #feed').addClass('darkBlue');
    }

    function darkRed() {
        $('*').removeClass('lightRed');
        $('*').removeClass('darkBlue');
        $('*').removeClass('darkGreen');
        $('#wrapper').addClass('darkBlue');
        $('.alertHeader, .colorKey').addClass('darkBlue');
        $('.notUrgent').addClass('darkBlue');
        $('.typeStockClient').addClass('darkBlue');
        $('.typeStockClient .selected').addClass('darkBlue');
        $('.stockBoxTitle, .numberSummaryBoxStock, .numberSummaryBoxClient, .clientBoxTitle').addClass('darkBlue');
        $('.numberSummaryBoxStock').addClass('darkBlue');
        $('.typeRow').addClass('darkBlue');
        $('.typeRow.thickBorderBottom').addClass('darkBlue');
        $('.urgentLight').addClass('lightRed');
        $('.urgent').addClass('lightRed');
        $('.urgentExtreme').addClass('lightRed');
        $('.aboveColHeader').addClass('darkBlue');
        $('.row .col').addClass('darkBlue');
        $('.columnHeader, .columnHeader .col').addClass('darkBlue');
        $('.alertRowNew').addClass('darkBlue');
        $('.row.urgMarker').addClass('lightRed');
        $('#cockpit').addClass('darkBlue');
        $('#stockpit, #clientpit, #feed').addClass('darkBlue');
    }

    function darkGreen() {
        $('*').removeClass('lightRed');
        $('*').removeClass('darkBlue');
        $('#wrapper').addClass('darkBlue');
        $('.alertHeader, .colorKey').addClass('darkBlue');
        $('.notUrgent').addClass('darkBlue');
        $('.typeStockClient').addClass('darkBlue');
        $('.typeStockClient .selected').addClass('darkBlue');
        $('.stockBoxTitle, .numberSummaryBoxStock, .numberSummaryBoxClient, .clientBoxTitle').addClass('darkBlue');
        $('.numberSummaryBoxStock').addClass('darkBlue');
        $('.typeRow').addClass('darkBlue');
        $('.typeRow.thickBorderBottom').addClass('darkBlue');
        $('.urgentLight').addClass('darkGreen');
        $('.urgent').addClass('darkGreen');
        $('.urgentExtreme').addClass('darkGreen');
        $('.aboveColHeader').addClass('darkBlue');
        $('.row .col').addClass('darkBlue');
        $('.columnHeader, .columnHeader .col').addClass('darkBlue');
        $('.alertRowNew').addClass('darkBlue');
        $('#cockpit').addClass('darkBlue');
        $('#stockpit, #clientpit, #feed').addClass('darkBlue');
    }


// , 'border-right': '2px solid #364373' 

    // naviagtion on buttons
    var myID;
    var myIDlayout;
    var myIDleft;

    // light red
    $('#aVersion').on('click', function() {
        $('.flipSideButton').removeClass('selectedSide');
        $(this).addClass('selectedSide');
        myID = this.id;
        console.log(myID);
        lightRed();
    });

    //light blue
    $('#hVersion').on('click', function() {
        $('.flipSideButton').removeClass('selectedSide');
        $(this).addClass('selectedSide');
        myID = this.id;
        console.log(myID);
        lightBlue();

    });

   

    //dark blue

    $('#cVersion').on('click', function() {
        $('.flipSideButton').removeClass('selectedSide');
        $(this).addClass('selectedSide');
        myID = this.id;
        darkBlue();

    });

    //dark red

    $('#bVersion').on('click', function() {
        $('.flipSideButton').removeClass('selectedSide');
        $(this).addClass('selectedSide');
        myID = this.id;
        darkRed();

    });

     //dark green

    $('#jVersion').on('click', function() {
        $('.flipSideButton').removeClass('selectedSide');
        $(this).addClass('selectedSide');
        myID = this.id;
        darkGreen();

    });



    // $('#dVersion').on('click', function() {
    //     $('#eVersion').removeClass('selectedSide');
    //     $('#dVersion').addClass('selectedSide');
    //     $('body').css('font-family', 'Roboto');

    // });

    // $('#eVersion').on('click', function() {
    //     $('#dVersion').removeClass('selectedSide');
    //     $('#eVersion').addClass('selectedSide');
    //     $('body').css('font-family', 'Arial Narrow');

    // });

    function leftAlign(){
        $('.summaryBoxStock.urgent .stockBoxTitle, .summaryBoxStock.urgent .clientBoxTitle').addClass('leftAlign');
        $('.summaryBoxStock.urgentLight .stockBoxTitle, .summaryBoxStock.urgentLight .clientBoxTitle').addClass('leftAlign');
        $('.summaryBoxStock.urgentExtreme .stockBoxTitle, .summaryBoxStock.urgentExtreme .clientBoxTitle').addClass('leftAlign');
        $('.summaryBoxStock.urgent .numberSummaryBoxStock, .summaryBoxStock.urgent .numberSummaryBoxClient').addClass('leftAlign');
        $('.summaryBoxStock.urgentLight .numberSummaryBoxStock, .summaryBoxStock.urgentLight .numberSummaryBoxClient').addClass('leftAlign');
        $('.summaryBoxStock.urgentExtreme .numberSummaryBoxStock, .summaryBoxStock.urgentExtreme .numberSummaryBoxClient').addClass('leftAlign');
        $('.summaryBoxStock').addClass('leftAlign');
    }

    $('#dVersion').on('click', function() {
        $('.flipSideButton2').removeClass('selectedSide');
        $(this).addClass('selectedSide');
        myIDleft = this.id;
        
        console.log(myIDleft);
        
        $('*').removeClass('leftAlign');

    });

    $('#eVersion').on('click', function() {
        $('.flipSideButton2').removeClass('selectedSide');
        $(this).addClass('selectedSide');
        myIDleft = this.id;
        
        console.log(myIDleft);
        leftAlign();
        

    });







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

    // more alerts
    $('#fVersion').on('click', function() {
        $('.flipSideButton3').removeClass('selectedSide');
        $(this).addClass('selectedSide');
        myIDlayout = this.id;
        console.log(myIDlayout);
        moreAlerts();

    });

    // fewer alerts
    $('#gVersion').on('click', function() {
        $('.flipSideButton3').removeClass('selectedSide');
        $(this).addClass('selectedSide');
        myIDlayout = this.id;
        console.log(myIDlayout);
        fewerAlerts();
    });



    

    //  // urgency hover
    // $('#kVersion').on('click', function() {
    //     $('.flipSideButton5').removeClass('selectedSide');
    //     $(this).addClass('selectedSide');
        
        
        
    // });


    //  // urgency hover
    // $('#lVersion').on('click', function() {
    //     $('.flipSideButton5').removeClass('selectedSide');
    //     $(this).addClass('selectedSide');
        
       
    // });

    












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
    //  $('#' + boxID + '').on('click', function() {
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

    window.onload = function() {
        var twelveMinutes = 60 * 12,
            display = document.querySelector('#timer1');
        startTimer(twelveMinutes, display);
    };



    $('#stock').click();
  
});
// end of doc ready
