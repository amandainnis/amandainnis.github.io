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

    
   


    function sortOrder(arr) {
        arr.sort(function(obj1, obj2) {
        return obj2.urgent - obj1.urgent;
        });
    }



   sortOrder(tickerBoxArray);
   sortOrder(clientBoxArray);

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




var myIDred;

    var previousIteration;

    // function iterateDisplay(arr) {
    //     for (i = 0; i < arr.length; i++) {
            
    //         makeTickerBox1(arr[i].ticker, arr[i].number, arr[i].urgent);
            
    //     }
    // };

 function iterateDisplay(arr) {
        for (i = 0; i < arr.length; i++) {
            if (myIDred == 'cVersion') {
                red1();
            } else if (myIDred == 'dVersion') {
                red2();
            } else if (myIDred == 'eVersion') {
                red3();
            } else if (myIDred == 'hVersion') {
                orange();
            } else if (myIDred == 'jVersion') {
                red3mono();
            } else if (myIDred == 'kVersion') {
                red4mono();
            }
            
            makeTickerBox1(arr[i].ticker, arr[i].number, arr[i].urgent);
            
            if (myIDlayout == 'fVersion') {
                moreAlerts();
            } else if (myIDlayout == 'gVersion') {
                fewerAlerts();
            }

           

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

$('.typeRow').on('click', function(){
    $(this).toggleClass('typeClicked');
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



    // function iterateDisplayClient(arr) {
    //     for (i = 0; i < arr.length; i++) {
            
    //         makeClientBox1(arr[i].ticker, arr[i].number, arr[i].urgent);
    //     }
    // };


     function iterateDisplayClient(arr) {
        for (i = 0; i < arr.length; i++) {
            
            if (myIDred == 'cVersion') {
                red1();
            } else if (myIDred == 'dVersion') {
                red2();
            } else if (myIDred == 'eVersion') {
                red3();
            } else if (myIDred == 'hVersion') {
                orange();
            } else if (myIDred == 'jVersion') {
                red3mono();
            } else if (myIDred == 'kVersion') {
                red4mono();
            }
            
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

    // darker wrapper
    $('#aVersion').on('click', function() {
        $('.flipSideButton1').removeClass('selectedSide');
        $(this).addClass('selectedSide');
        myIDwrapper = this.id;
        console.log(myIDwrapper);
        $('#wrapper').removeClass('lighterWrapper');
    });

    // lighter wrapper
    $('#bVersion').on('click', function() {
        $('.flipSideButton1').removeClass('selectedSide');
        $(this).addClass('selectedSide');
        myIDwrapper = this.id;
        console.log(myIDwrapper);
        $('#wrapper').addClass('lighterWrapper');

    });

    
   
function orange() {
        $('*').removeClass('red2');
        $('*').removeClass('red3');
        $('*').removeClass('red1');
        $('*').removeClass('red3mono');
        $('.urgentLight, .urgent, .urgentExtreme, .row.urgentMarker, .urgText, .notUrgent').addClass('orange');
    }

function red2() {
        $('*').removeClass('red3');
        $('*').removeClass('red1');
        $('*').removeClass('red3mono');
        $('*').removeClass('orange');
        $('.urgentLight, .urgent, .urgentExtreme, .row.urgentMarker, .urgText, .notUrgent').addClass('red2');
}

function red3() {
        $('*').removeClass('red2');
        $('*').removeClass('red1');
        $('*').removeClass('red3mono');
        $('*').removeClass('orange');
        $('.urgentLight, .urgent, .urgentExtreme, .row.urgentMarker, .urgText').addClass('red3');

}

function red1() {
        $('*').removeClass('red2');
        $('*').removeClass('red3');
        $('*').removeClass('red3mono');
        $('*').removeClass('orange');
        $('.urgentLight, .urgent, .urgentExtreme, .row.urgentMarker, .urgText').addClass('red1');

}

function red3mono() {
        $('*').removeClass('red2');
        $('*').removeClass('red3');
        $('*').removeClass('red1');
        $('*').removeClass('orange');
        $('.urgentLight, .urgent, .urgentExtreme, .row.urgentMarker, .urgText').addClass('red3mono');

}

function red4mono() {
        $('*').removeClass('red2');
        $('*').removeClass('red3');
        $('*').removeClass('red1');
        $('*').removeClass('red3mono');
        $('*').removeClass('orange');
        // $('.urgentLight, .urgent, .urgentExtreme, .row.urgentMarker, .urgText').addClass('red4mono');

}

// darker gradation red
    $('#cVersion').on('click', function() {
        $('.flipSideButton2').removeClass('selectedSide');
        $(this).addClass('selectedSide');
        myIDred = this.id;
        console.log(myIDred);
        red1();

    });


     // pinker gradation red
     $('#eVersion').on('click', function() {
        $('.flipSideButton2').removeClass('selectedSide');
        $(this).addClass('selectedSide');
        myIDred = this.id;
        console.log(myIDred);
        red3();
        
    });


    // crb-ish one red
     $('#dVersion').on('click', function() {
        $('.flipSideButton2').removeClass('selectedSide');
        $(this).addClass('selectedSide');
        myIDred = this.id;
        console.log(myIDred);
        red2();
        
    });

     // orange one red
     $('#hVersion').on('click', function() {
        $('.flipSideButton2').removeClass('selectedSide');
        $(this).addClass('selectedSide');
        myIDred = this.id;
        console.log(myIDred);
        orange();
        
    });

      // red3mono
     $('#jVersion').on('click', function() {
        $('.flipSideButton2').removeClass('selectedSide');
        $(this).addClass('selectedSide');
        myIDred = this.id;
        console.log(myIDred);
        red3mono();
        
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
