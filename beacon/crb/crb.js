// function textFlip(sectionID, sectionKind, cost1, cost2, price1, price2){
// $('#'+ sectionID + sectionKind).on( "mouseenter", function() {
// $( '#'+ sectionID + ' .spread1' ).text(price1);
// $( '#'+ sectionID + ' .spread2' ).text(price2);}).on("mouseleave", function() {
// $( '#'+ sectionID + ' .spread1' ).text(cost1);
// $( '#'+ sectionID + ' .spread2' ).text(cost2); 
// });

// }

function textFlipPrice(sectionID, sectionKind, price1, price2) {
    $('#' + sectionID + ' .spread1').text(price1);
    $('#' + sectionID + ' .spread2').text(price2);

}

function textFlipCost(sectionID, sectionKind, cost1, cost2) {
    $('#' + sectionID + ' .spread1').text(cost1);
    $('#' + sectionID + ' .spread2').text(cost2);

}





function triggerDropDown(dropTitleID, titleOfUl) {
    $('#' + titleOfUl + ' li').show();

    $('#' + titleOfUl).on('mouseleave', function() {
        $('#' + titleOfUl + ' li').hide();

    });

    $('#' + titleOfUl + ' .field1').click(function() {
        var inputText = $(this).text();
        $('#' + dropTitleID + '').text(inputText);
        $('#' + titleOfUl + ' li').hide();
    });

    $('#' + titleOfUl + ' .field2').click(function() {
        var inputText = $(this).text();
        $('#' + dropTitleID + '').text(inputText);
        $('#' + titleOfUl + ' li').hide();
    });

    $('#' + titleOfUl + ' .field3').click(function() {
        var inputText = $(this).text();
        $('#' + dropTitleID + '').text(inputText);
        $('#' + titleOfUl + ' li').hide();
    });

    $('#' + titleOfUl + ' .field4').click(function() {
        var inputText = $(this).text();
        $('#' + dropTitleID + '').text(inputText);
        $('#' + titleOfUl + ' li').hide();
    });

    $('#' + titleOfUl + ' .field5').click(function() {
        var inputText = $(this).text();
        $('#' + dropTitleID + '').text(inputText);
        $('#' + titleOfUl + ' li').hide();
    });

    $('#' + titleOfUl + ' .field6').click(function() {
        var inputText = $(this).text();
        $('#' + dropTitleID + '').text(inputText);
        $('#' + titleOfUl + ' li').hide();
    });




    ;
}




var myID;

var controlPressed = false;
var priceCostToggleBoolean = false;
var priceCostToggleBooleanEmea = false;
var pricerSideToggleBoolean = false;
var buySellBooleanEmea = false;

$(document).ready(function() {
        $('#colorKeyList').hide();

        $('#popUpBackground').hide();
        $('#popUpBackground2').hide();
        $('#popUp2').hide();
        $('#popUpUrgencyDropDown li').hide();
        $('#popUpFollowDropDown li').hide();
        $('#pricerToolBackground').hide();
        $('#pricerToolBackgroundEmea').hide();
        $('#pricerDrawer').hide();

        $('#backgroundRestrictions').hide();
        $('#popUpRestrictionsDropDown li').hide();
        $('#popUpMarketDropDown li').hide();
        $('#popUpMissedDropDown li').hide();


        $('#wrapperRestrictions').hide();
        $('#wrapperHistory').hide();

        // $('#priceCostToggle').on('click', function(){
        // 
        priceCostToggleBoolean = !priceCostToggleBoolean;
        // 
        if (priceCostToggleBoolean) {
            // 
            console.log('checked');
            // 
        }
        // 
        else { console.log('not checked'); }
        // })


        $('#priceCostToggleInput').on('click', function() {
            priceCostToggleBoolean = !priceCostToggleBoolean;
            if (priceCostToggleBoolean) {
                console.log('checked');
                textFlipPrice('buy400', '.buySection', 160.345, 160.365);
                textFlipPrice('buy200', '.buySection', 160.335, 160.364);
                textFlipPrice('buy100', '.buySection', 160.325, 160.363);
                textFlipPrice('buy50', '.buySection', 160.315, 160.361);

                textFlipPrice('sell400', '.sellSection', 160.345, 160.365);
                textFlipPrice('sell200', '.sellSection', 160.335, 160.364);
                textFlipPrice('sell100', '.sellSection', 160.325, 160.363);
                textFlipPrice('sell50', '.sellSection', 160.315, 160.361);
            } else {
                console.log('not checked');
                textFlipCost('buy400', '.buySection', .345, .365);
                textFlipCost('buy200', '.buySection', .335, .364);
                textFlipCost('buy100', '.buySection', .325, .363);
                textFlipCost('buy50', '.buySection', .315, .361);

                textFlipCost('sell400', '.sellSection', .345, .365);
                textFlipCost('sell200', '.sellSection', .335, .364);
                textFlipCost('sell100', '.sellSection', .325, .363);
                textFlipCost('sell50', '.sellSection', .315, .361);
            }
        })

        var pricerBuySell;
        $('#pricerSideToggleInput').on('click', function() {
            pricerSideToggleBoolean = !pricerSideToggleBoolean;
            if (pricerSideToggleBoolean) {
                pricerBuySell = "sell";
                $('#pricerSideToggle span').removeClass('selectedSide');
                $('#pricerSell').addClass('selectedSide');
            } else {
                pricerBuySell = "buy";
                $('#pricerSideToggle span').removeClass('selectedSide');
                $('#pricerBuy').addClass('selectedSide');
            }
            console.log(pricerBuySell);
        })

        // $('#pricerToolSide').on('click', function(event){
        // 
        if ($(this).val() == "Buy") {
            // 
            $(this).val("Sell");
            // 
        }
        // 
        else { $(this).val("Buy") }
        // 
        console.log($(this).val())
            // })
            ///// EMEA  //////

        $('#priceCostToggleInputEmea').on('click', function() {
            priceCostToggleBooleanEmea = !priceCostToggleBooleanEmea;
            if (priceCostToggleBooleanEmea) {
                console.log('checked');
                textFlipCost('buySell100', '.buySellSectionEmea', .32, .36);
                textFlipCost('buySell200', '.buySellSectionEmea', .33, .36);
                textFlipCost('buySell400', '.buySellSectionEmea', .34, .36);
            } else {
                console.log('not checked');
                textFlipPrice('buySell100', '.buySellSectionEmea', 445.22, 445.22);
                textFlipPrice('buySell200', '.buySellSectionEmea', 445.22, 445.39);
                textFlipPrice('buySell400', '.buySellSectionEmea', 445.22, 445.51);


            }
        })


        $('#TCA').click(function() {
            $('#wrapperRestrictions').hide();
            $('#wrapperHistory').hide();
            $('.navigation span').removeClass('selected');
            $(this).addClass('selected');

        })

        $('#Restrictions').click(function() {
            $('#wrapperRestrictions').show();
            $('.navigation span').removeClass('selected');
            $(this).addClass('selected');

        })


        $('#History').click(function() {
            $('#wrapperHistory').show();
            $('#wrapperRestrictions').hide();
            $('.navigation span').removeClass('selected');
            $(this).addClass('selected');

        })



        $('#pricerIconButton').on('click', function() {
            $('#pricerToolBackground').show();
        });

        $('#pricerIconButtonEmea').on('click', function() {
            $('#pricerToolBackgroundEmea').show();
        });



        $('#sellSideVersion').on('click', function() {
            $('#buySideVersion').removeClass('selectedSide');
            $('#sellSideVersion').addClass('selectedSide');
            $('#buySellDoorway').text('S');
            $('#buySellDoorway').addClass('redText');
            $('.buySection').removeClass('textGreen');
            $('.buySection.selected .band').removeClass('bandWhite');
            $('.buySection').removeClass('selected');
            $('.quantitySection').removeClass('buyGreen');
            $('#sell200').addClass('selected');
            // $('.quantitySection').removeClass('buyGreen');

            $('#spreadWrapper').on('click', '.spreadRow', function(event) {

                $('.spreadRow').removeClass('selectedRow');
                $(this).addClass('selectedRow');
                myID = this.id;
            })

            changeRowSell(myID);


            console.log(myID);


        });



        $('#buySideVersion').on('click', function() {
            $('#sellSideVersion').removeClass('selectedSide');
            $('#buySideVersion').addClass('selectedSide');
            $('#buySellDoorway').text('B');
            $('#buySellDoorway').removeClass('redText');
            $('.sellSection').removeClass('redText');

            $('.sellSection.selected .band').removeClass('bandWhite');
            $('.sellSection').removeClass('selected');
            $('.quantitySection').removeClass('sellRed');

            $('#spreadWrapper').on('click', '.spreadRow', function(event) {

                $('.spreadRow').removeClass('selectedRow');
                $(this).addClass('selectedRow');
                myID = this.id;
            })

            changeRowBuy(myID);

        })

        console.log(buySellBooleanEmea);

        $('#buySellDoorwayEmea').on('click', function() {
            buySellBooleanEmea = !buySellBooleanEmea;
            if (buySellBooleanEmea) {
                console.log('now sell');
                $('#buySideVersion').removeClass('selectedSide');
                $('#sellSideVersion').addClass('selectedSide');
                $('#buySellDoorwayEmea').text('S');
                $('#buySellDoorwayEmea').addClass('redText');
                $('.buySellSectionEmea').removeClass('textGreen');
                $('.buySellSectionEmea').addClass('redText');
                $('.buySellSectionEmea.selectedBuy .band, .buySellSectionEmea.selectedSell .band').removeClass('bandWhite');
                $('.buySellSectionEmea').removeClass('selectedBuy');
                $('.quantitySectionEmea').removeClass('selectedBuy');
                $('#row100 quantitySectionEmea').addClass('selectedSell');
                $('#row100 buySellSectionEmea').addClass('selectedSell');
                // $('.quantitySection').removeClass('buyGreen');
                myID = 'row100';

                $('#spreadWrapperEmea').on('click', '.spreadRow', function(event) {

                    $('.spreadRow').removeClass('selectedRow');
                    $(this).addClass('selectedRow');
                    myID = this.id;
                })

                changeRowSellEmea(myID);


                console.log(myID);
            } else {
                console.log('now buy');
                $('#buySideVersion').removeClass('selectedSide');
                $('#sellSideVersion').addClass('selectedSide');
                $('#buySellDoorwayEmea').text('B');
                $('#buySellDoorwayEmea').removeClass('redText');
                // $('#buySellDoorwayEmea').addClass('textGreen');
                $('.buySellSectionEmea').removeClass('redText');
                $('.buySellSectionEmea').addClass('textGreen');
                $('.buySellSectionEmea.selectedBuy .band, .buySellSectionEmea.selectedSell .band').removeClass('bandWhite');
                $('.buySellSectionEmea').removeClass('selectedSell');
                $('.quantitySectionEmea').removeClass('selectedSell');
                $('#buySell100').addClass('selectedBuy');
                // $('.quantitySection').removeClass('buyGreen');

                $('#spreadWrapperEmea').on('click', '.spreadRow', function(event) {

                    $('.spreadRow').removeClass('selectedRow');
                    $(this).addClass('selectedRow');
                    myID = this.id;
                })

                changeRowBuyEmea(myID);


                console.log(myID);
            }
        });

        $('#spreadWrapperEmea').on('click', '.spreadRow', function(event) {

            $('.spreadRow').removeClass('selectedRow');
            $(this).addClass('selectedRow');
            myID = this.id;
            if (!buySellBooleanEmea) {
                changeRowBuyEmea(myID);
            } else if (buySellBooleanEmea) {
                changeRowSellEmea(myID);
            }


            console.log(myID);

            // myID = this.id;
            // $(myID).addClass('buyGreen');
        });

        $('#quantityInput2').on('focus', function() {
            if (!buySellBooleanEmea) {
                $('#quantityInput2').addClass('focusBuy');
            } else if (buySellBooleanEmea) {
                $('#quantityInput2').addClass('focusSell');
            }
        });


        function changeRowBuyEmea(someID) {

            $('.buySellSectionEmea.selectedBuy .bandEmea, .buySellSectionEmea.selectedSell .bandEmea').removeClass('bandWhite');
            $('.buySellSectionEmea').removeClass('selectedSell');
            $('.buySellSectionEmea').removeClass('selectedBuy');
            $('.quantitySectionEmea').removeClass('selectedBuy');
            $('.quantitySectionEmea').removeClass('selectedSell');
            $('.buySellSectionEmea').addClass('textGreen');
            $('#' + someID + ' .buySellSectionEmea').addClass('selectedBuy');
            $('#' + someID + ' .buySellSectionEmea .bandEmea').addClass('bandWhite');
            $('#' + someID + ' .quantitySectionEmea').addClass('selectedBuy');
        }

        function changeRowSellEmea(someID) {

            $('.buySellSectionEmea.selectedBuy .bandEmea, .buySellSectionEmea.selectedSell .bandEmea').removeClass('bandWhite');
            $('.buySellSectionEmea').removeClass('selectedSell');
            $('.buySellSectionEmea').removeClass('selectedBuy');
            $('.quantitySectionEmea').removeClass('selectedBuy');
            $('.quantitySectionEmea').removeClass('selectedSell');
            $('.buySellSectionEmea').addClass('redText');
            $('#' + someID + ' .buySellSectionEmea').addClass('selectedSell');
            $('#' + someID + ' .buySellSectionEmea .bandEmea').addClass('bandWhite');
            $('#' + someID + ' .quantitySectionEmea').addClass('selectedSell');
        }

        // textFlip('buy400', '.buySection', .345, .365, 160.345, 160.365);
        // textFlip('buy200', '.buySection', .335, .364, 160.335, 160.364);
        // textFlip('buy100', '.buySection', .325, .363, 160.325, 160.363);
        // textFlip('buy50', '.buySection', .315, .361, 160.315, 160.361);

        // textFlip('sell400', '.sellSection', .345, .365, 160.345, 160.365);
        // textFlip('sell200', '.sellSection', .335, .364, 160.335, 160.364);
        // textFlip('sell100', '.sellSection', .325, .363, 160.325, 160.363);
        // textFlip('sell50', '.sellSection', .315, .361, 160.315, 160.361);


        $('#orderID').on("mouseenter", function() {
            $('#orderIDHover').show();
        }).on("mouseleave", function() {
            $('#orderIDHover').hide();
        });


        $('#rowEnterQty input').on("mouseenter", function() {
            $('#sellMisc .spread1').text(160.321);
            $('#sellMisc .spread2').text(160.362);
            $('#buyMisc .spread1').text(160.321);
            $('#buyMisc .spread2').text(160.362);
        }).on("mouseleave", function() {
            $('#sellMisc .spread1').text('');
            $('#sellMisc .spread2').text('');
            $('#buyMisc .spread1').text('');
            $('#buyMisc .spread2').text('');
        });



        $('#acceptButton').on('click', function() {
            $('#popUpBackground').show();
            $('#popUp1').show();
        });

        $('#notTraded').on('click', function() {
            $('#popUpBackground2').show();
            $('#popUp3').show();
        });





        function changeRowBuy(someID) {

            $('.buySection.selected .band').removeClass('bandWhite');
            $('.buySection').removeClass('selected');
            $('.quantitySection').removeClass('buyGreen');
            $('.buySection').addClass('textGreen');
            $('#' + someID + ' .buySection').addClass('selected');
            $('#' + someID + ' .buySection .band').addClass('bandWhite');
            $('#' + someID + ' .quantitySection').addClass('buyGreen');
        }

        function changeRowSell(someID) {

            $('.sellSection.selected .band').removeClass('bandWhite');
            $('.sellSection').removeClass('selected');
            $('.quantitySection').removeClass('sellRed');
            $('.sellSection').addClass('redText');
            $('#' + someID + ' .sellSection').addClass('selected');
            $('#' + someID + ' .sellSection .band').addClass('bandWhite');
            $('#' + someID + ' .quantitySection').addClass('sellRed');
        }

        $('#spreadWrapper').on('click', '.spreadRow', function(event) {

            $('.spreadRow').removeClass('selectedRow');
            $(this).addClass('selectedRow');
            myID = this.id;
            if ($('#buySideVersion').hasClass('selectedSide')) {
                changeRowBuy(myID);
            } else if ($('#sellSideVersion').hasClass('selectedSide')) {
                changeRowSell(myID);
            }


            console.log(myID);

            // myID = this.id;
            // $(myID).addClass('buyGreen');
        });






        ///////////////pop up 1////////////////

        $('#popUpClose').on('click', function() { $('#popUpBackground').hide(); });

        $('#executeButton').on('click', function() {
            $('#popUp1').hide();
            console.log('yo');
            $('#popUp2').show();

        });



        ///////////////pop up 2////////////////


        $('#popUpCloseMissed').on('click', function() { $('#popUpBackground2').hide(); });

        $('#popUpCloseRestrictions').on('click', function() { $('#backgroundRestrictions').hide(); });

        // triggerDropDown(dropTitleID, titleOfUl)

        // $('#urgencyDropTitle.popUpdropDown').click(function(){
        //   triggerDropDown('urgencyDropTitle', 'popUpUrgencyDropDown');


        // });




        // $('#followDropTitle.popUpdropDown').click(function(){
        //   triggerDropDown('followDropTitle', 'popUpFollowDropDown');


        // });







        $('#doneButton').on('click', function() {
            $('#popUpBackground').hide();
            $('#popUp1').hide();
            $('#popUp2').hide();
        });
        $('#doneButtonMissed').on('click', function() {
            $('#popUpBackground2').hide();
            // $('#popUp3').hide();
        });


        ////// StockList//////////



        var stockListIOI = [
            { ticker: "amzn", classification: "regular" },
            { ticker: "orcl", classification: "off" },
            { ticker: "chlkf", classification: "regular" },
            { ticker: "aapl", classification: "regular" },
            { ticker: "abev", classification: "regular" },
            { ticker: "amtr", classification: "off" },
            { ticker: "nppxf", classification: "regular" },
            { ticker: "dcm", classification: "regular" },
            { ticker: "dtegf", classification: "off" },
            { ticker: "kddiy", classification: "regular" },


            { ticker: "sngnf", classification: "regular" },
            { ticker: "fcx", classification: "wayOff" },
            { ticker: "ge", classification: "regular" },
            { ticker: "cuz", classification: "regular" },
            { ticker: "dva", classification: "regular" },
            { ticker: "tu", classification: "off" },
            { ticker: "fcau", classification: "wayOff" },
            { ticker: "twtr", classification: "regular" },
            { ticker: "dzn", classification: "regular" },
            { ticker: "ggb", classification: "regular" },


            { ticker: "lvlt", classification: "regular" },
            { ticker: "rad", classification: "regular" },
            { ticker: "rig", classification: "off" },
            { ticker: "twlo", classification: "regular" },
            { ticker: "ego", classification: "off" },
            { ticker: "xom", classification: "regular" },
            { ticker: "zbh", classification: "regular" },
            { ticker: "auy", classification: "regular" },
            { ticker: "baba", classification: "regular" },
            { ticker: "bhi", classification: "wayOff" },


            { ticker: "ptx", classification: "regular" },
            { ticker: "zfgn", classification: "regular" },
            { ticker: "pcrx", classification: "off" },
            { ticker: "qtnt", classification: "regular" },
            { ticker: "cemp", classification: "regular" },
            { ticker: "avgr", classification: "off" },
            { ticker: "smrt", classification: "wayOff" },
            { ticker: "apen", classification: "regular" },
            { ticker: "orex", classification: "off" },
            { ticker: "icui", classification: "regular" },

            { ticker: "ftr", classification: "regular" },
            { ticker: "fb", classification: "off" },
            { ticker: "siri", classification: "regular" },
            { ticker: "qqq", classification: "regular" },
            { ticker: "msft", classification: "regular" },
            { ticker: "nvda", classification: "off" },
            { ticker: "mu", classification: "regular" },
            { ticker: "csco", classification: "regular" },
            { ticker: "intc", classification: "off" },
            { ticker: "xiv", classification: "regular" }

        ];


        function makeTickerTile(name, classification) {

            var newTicker = $('<div class="tile ' + classification + '">' + name + '</div>');

            $('#tickerZone').append(newTicker);

        };



        function iterateDisplay(arr) {
            for (i = 0; i < arr.length; i++) {
                makeTickerTile(arr[i].ticker, arr[i].classification);

            }
        };

        iterateDisplay(stockListIOI);



        $('#searchTicker').on('change', function() {
            var inputTick = $(this).val();
            inputTick.toUpperCase();
            console.log(inputTick);

            function findATicker(arr, myInput) {

                for (i = 0; i < arr.length; i++) {
                    var myString = arr[i].ticker;
                    if (myString.charAt(0) == myInput || myString.charAt(0) == myInput.toLowerCase()) {

                        console.log(arr[i].ticker);
                    }
                }
            };

            findATicker(stockListIOI, inputTick);
        })





        $('#pricerToolTicker, #pricerToolTickerEmea').on('keypress', function() {
            var inputTick = $(this).val();
            inputTick.toUpperCase();
            console.log(inputTick);

            function findATicker(arr, myInput) {

                var myRestrictionColor;

                for (var i = 0; i < arr.length; i++) {
                    function returnRestrictionColor(classification) {
                        if (classification == "off") {

                            myRestrictionColor = "NBBOsell";

                        } else if (classification == "wayOff") {

                            myRestrictionColor = "NBBOsell";

                        } else if (classification == "regular") {

                            myRestrictionColor = "liColorPlain";
                        }


                        return myRestrictionColor;

                    }
                    // returnRestrictionColor(arr[i].classification);
                    var myString = arr[i].ticker;
                    if (myString.charAt(0) == myInput || myString.charAt(0) == myInput.toLowerCase()) {

                        $('#pricerToolTickerMenu ul, #pricerToolTickerMenuEmea ul').append("<li class=" + returnRestrictionColor(arr[i].classification) + ">" + arr[i].ticker + "</li>");

                        console.log(arr[i].ticker);

                    }
                }
            };

            findATicker(stockListIOI, inputTick);
            $('#pricerToolTickerMenu ul li, #pricerToolTickerMenuEmea ul li').on('click', function() {
                var inputText = $(this).text();
                console.log(this);
                newClass = $(this).attr("class");
                $('#pricerToolTicker, #pricerToolTickerEmea').val(inputText);
                $('#pricerToolTicker, #pricerToolTickerEmea').addClass(newClass);
                $('#pricerToolTickerMenu ul li, #pricerToolTickerMenuEmea ul li').hide();
            })


            $('#pricerToolTickerMenu ul, #pricerToolTickerMenuEmea ul').on('mouseleave', function() {
                $('#pricerToolTickerMenu ul li, #pricerToolTickerMenuEmea ul li').hide();

            });
        });


        // returnElapsedColor(arr[i].days)

        // var class = $("img").attr("class");
        //  console.log(class);

        $('#pricerButton').on('click', function() {
            $('#pricerToolBackground').hide();
            $('#pricerToolTicker').val('');
            $('#pricerToolQuantity').val('');
            $('#pricerToolClient').val('');
        });

        $('#pricerToolTickerEmea').on('click', function() {
            $('#pricerDrawer').show();
            $('#pricerToolEmea').addClass('drawer');
        });

        $('.qtyButtonEmea').on('click', function() {
            $('#pricerToolTickerEmea').val('');
            $('#pricerToolClientEmea').val('');
            $('#pricerDrawer').hide();
            $('#pricerToolEmea').removeClass('drawer');
            $('#pricerToolBackgroundEmea').hide();
        })

        $('#pricerTool .mdi-close').on('click', function() {
            $('#pricerToolBackground').hide();
            $('#pricerToolTicker').val('');
            $('#pricerToolQuantity').val('');
            $('#pricerToolClient').val('');
        });
        $('#pricerToolEmea .mdi-close').on('click', function() {
            $('#pricerToolTickerEmea').val('');
            $('#pricerToolClientEmea').val('');
            $('#pricerDrawer').hide();
            $('#pricerToolEmea').removeClass('drawer');
            $('#pricerToolBackgroundEmea').hide();
        });


        $(window).keydown(function(event) {
            if (event.which == 17 || event.which == 91) {
                controlPressed = true;
                console.log(controlPressed);
            }
        }).keyup(function(event) {
            if (event.which == 17 || event.which == 91) {
                controlPressed = false;
                if (selectedItems.length > 0) {

                    $('#backgroundRestrictions').show();
                    selectedItems = [];
                }
                console.log(controlPressed);
            }
        })

        selectedItems = [];

        $('.tile').on('click', function(event) {
            if ($(this).hasClass('regular')) {
                $(this).addClass('off');
                $(this).removeClass('regular');
                if (controlPressed == true) {
                    selectedItems.push(event);
                } else {
                    $('#backgroundRestrictions').show();
                }
            } else if ($(this).hasClass('off')) {
                $(this).addClass('regular');
                $(this).removeClass('off');
            }

        })



        $('#colorKey').on('click', function() {
            $('#colorKeyList').show();
        })


        $('#popUpCloseColorKey').on('click', function() {
            $('#colorKeyList').hide();
        })
        $('#colorKeyList').on('mouseleave', function() {
            $('#colorKeyList').hide();
        })


        // function triggerDropDown(dropTitleID, titleOfUl)


        $('#turnOffDropTitle.popUpdropDown').click(function() {
            triggerDropDown('turnOffDropTitle', 'popUpRestrictionsDropDown');


        });

        $('#missedDropTitle.popUpdropDown').click(function() {
            triggerDropDown('missedDropTitle', 'popUpMissedDropDown');


        });

        $('#stockListSort.restrictionsDropDown').click(function() {
            triggerDropDown('stockListSort', 'popUpMarketDropDown');


        });


        $('#okButton').on('click', function() {
            $('#backgroundRestrictions').hide();
        })




        function getDate() {
            console.log('the time is ' + Date());
        }

        getDate();



        var twelveMinutes = 60 * 12;


        function startTimer(duration, display) {

            var timer = duration;
            var minutes;
            var seconds;

            setInterval(function() {
                // parseInt the second parameter is base 10 format
                minutes = parseInt(timer / 60, 10);
                seconds = parseInt(timer % 60, 10);

                //if minutes is less than 10 show a 0 in front
                minutes = minutes < 10 ? "0" + minutes : minutes;
                seconds = seconds < 10 ? "0" + seconds : seconds;

                display.textContent = minutes + ":" + seconds + ":00";


                if (--timer < 0) {
                    timer = duration;
                }
            }, 1000);
        }




        var display_2 = document.getElementById('currentTime');
        startTimer(twelveMinutes, display_2);






        var d = new Date();

        console.log(d.toLocaleTimeString());


    })
    // end docready
