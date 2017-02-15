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

    $('.row.columnHeader, #feed').hide(); 


    $('#summary').click(function() {
        $('.typeStockClient #feedView').removeClass('selected');
        $(this).addClass('selected');
        $('.row.columnHeader, #feed').hide(); 

        $('#cockpit').show();

    });

    $('#feedView').click(function() {
        $('.typeStockClient #summary').removeClass('selected');
        $(this).addClass('selected');
        $('.row.columnHeader, #feed').show(); 

        $('#cockpit').hide();

    });


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
    $('#bVersion').on('click', function() {
        $('.flipSideButton1').removeClass('selectedSide');
        $(this).addClass('selectedSide');
        myIDwrapper = this.id;
        console.log(myIDwrapper);
        $('#wrapper').addClass('darkerWrapper');

    });

    // lighter wrapper
    $('#aVersion').on('click', function() {
        $('.flipSideButton1').removeClass('selectedSide');
        $(this).addClass('selectedSide');
        myIDwrapper = this.id;
        console.log(myIDwrapper);
        $('#wrapper').removeClass('darkerWrapper');
    });
   
function red1() {
        $('*').removeClass('red2');
        $('*').removeClass('red3');
        $('*').removeClass('orange');
        $('*').removeClass('red3mono');
    }

function red2() {
        $('*').removeClass('red3');
        $('*').removeClass('orange');
         $('*').removeClass('red3mono');
        $('.urgentLight, .urgent, .urgentExtreme, .row.urgentMarker, .urgText, .notUrgent').addClass('red2');
}

function red3() {
        $('*').removeClass('red2');
        $('*').removeClass('orange');
         $('*').removeClass('red3mono');
        $('.urgentLight, .urgent, .urgentExtreme, .row.urgentMarker').addClass('red3');

}

function orange() {
        $('*').removeClass('red2');
        $('*').removeClass('red3');
         $('*').removeClass('red3mono');
        $('.urgentLight, .urgent, .urgentExtreme, .row.urgentMarker, .urgText').addClass('orange');

}

function red3mono() {
        $('*').removeClass('red2');
        $('*').removeClass('red3');
        $('*').removeClass('orange');
        $('.urgentLight, .urgent, .urgentExtreme, .row.urgentMarker, .urgText').addClass('red3mono');

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
        var twelveMinutes = 60 * 12,
            display = document.querySelector('#timer1');
        startTimer(twelveMinutes, display);
    };

    loadTimer();

    $('#client').click();
  
});
// end of doc ready
