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
var priceCostToggleBoolean = false;
var pricerSideToggleBoolean = false;
var buySellBoolean = false;
var shortSellBoolean = false;

$(document).ready(function() {
        $('#colorKeyList').hide();

        $('#popUpBackground').hide();
        $('#popUpBackground2').hide();
        $('#popUp2').hide();
        $('#popUpUrgencyDropDown li').hide();
        $('#popUpFollowDropDown li').hide();
        $('#pricerToolBackground').hide();
        $('#pricerToolBackground').hide();
        $('#pricerDrawer').hide();

        $('#backgroundRestrictions').hide();
        $('#popUpRestrictionsDropDown li').hide();
        $('#popUpMarketDropDown li').hide();
        $('#popUpMissedDropDown li').hide();
        $('#IOIfieldPlace').hide();

        $('#additionalIOIs').hide();
        $('#additionalIOIs2').hide();



        $('#wrapperRestrictions').hide();
        $('#wrapperHistory').hide();
        $('#wrapperParameters').hide();

       



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


       

      

        $('#priceCostToggleInput').on('click', function() {
            priceCostToggleBoolean = !priceCostToggleBoolean;
            if (priceCostToggleBoolean) {
                console.log('checked');
                textFlipPrice('buySell100', '.buySellSection', 445.221, 445.221);
                textFlipPrice('buySell200', '.buySellSection', 445.221, 445.391);
                textFlipPrice('buySell400', '.buySellSection', 445.221, 445.511);

            } else {
                console.log('not checked');
                textFlipCost('buySell100', '.buySellSection', .321, .361);
                textFlipCost('buySell200', '.buySellSection', .331, .361);
                textFlipCost('buySell400', '.buySellSection', .341, .361);
            }
        })


        $('#TCA').click(function() {
            $('#wrapperRestrictions').hide();
            $('#wrapperHistory').hide();
            $('#wrapperParameters').hide();
            $('.navigation span').removeClass('selected');
            $(this).addClass('selected');

        })

        $('#Restrictions').click(function() {
            $('#wrapperRestrictions').show();
            $('#wrapperParameters').hide();
            $('#wrapperHistory').hide();
            $('.navigation span').removeClass('selected');
            $(this).addClass('selected');

        })


        $('#History').click(function() {
            $('#wrapperHistory').show();
            $('#wrapperParameters').hide();
            $('#wrapperRestrictions').hide();
            $('.navigation span').removeClass('selected');
            $(this).addClass('selected');
            
            var innerWrapperHistory = $('.innerWrapperHistory').height();
            var innerWrapperHistoryScroll = $('.innerWrapperHistory').prop('scrollHeight');

            console.log("innerWrapperHistory is " + innerWrapperHistory);
            console.log("innerWrapperHistoryScroll is " + innerWrapperHistoryScroll);
            if ($('.innerWrapperHistory').prop('scrollHeight') > $('.innerWrapperHistory').prop('clientHeight')){
           
                $('.columnHeaders').css('padding-right', '28px');
                console.log("i am greater")
            }

        })

        $('#Parameters').click(function() {
            $('#wrapperParameters').show();
            $('#wrapperHistory').hide();
            $('#wrapperRestrictions').hide();
            $('.navigation span').removeClass('selected');
            $(this).addClass('selected');

        })




        

       


       

        function chooseSell() {
            console.log('now sell');
           
            $('.buySellSection').removeClass('textGreen');
            $('.buySellSection').addClass('redText');
            $('.side').removeClass('selectedSide');
            $('#sellChoose').addClass('selectedSide');
            $('.minusSymbol').show();
            $('.plusSymbol').hide();
            $('#shortLocate .horizontalInfoField').text('');
            $('#shortLocate .horizontalInfoField').removeClass('redText'); 
            $('#locateIDSection').hide();
            $('.popUpSide').removeClass('textGreen');
            $('.popUpSide').addClass('redText');
            $('.popUpSide').text('S');
            buySellBoolean = true;
            shortSellBoolean = false;


        }
        $('#sellChoose').on('click', function() {

            chooseSell();
            console.log(buySellBoolean);
        });

        $("#sellChoose").keypress(function(event) {
            if (event.which == 13) {

                chooseSell();

            }
        });


        

        function chooseShort() {
            console.log('now short');
           
            $('.buySellSection').removeClass('textGreen');
            $('.buySellSection').addClass('redText');
            $('.side').removeClass('selectedSide');
            $('#shortChoose').addClass('selectedSide');
            $('.minusSymbol').show();
            $('.plusSymbol').hide();
            $('.popUpSide').removeClass('textGreen');
            $('.popUpSide').addClass('redText');
            $('.popUpSide').text('SS');
            $('#locateIDSection').show();
            if ($('#quantityInput2').val() > 1000){
               $('#shortLocate .horizontalInfoField').text('Hard to borrow'); 
               $('#shortLocate .horizontalInfoField').addClass('redText'); 

            }
            else {
                $('#shortLocate .horizontalInfoField').text('Easy to borrow');
                $('#shortLocate .horizontalInfoField').removeClass('redText'); 
                 }
            
            buySellBoolean = true;
            shortSellBoolean = true;

        }

        $('#shortChoose').on('click', function() {

            chooseShort();
            console.log(buySellBoolean);
        });

        $("#shortChoose").keypress(function(event) {
            if (event.which == 13) {

                chooseShort();

            }
        });





        function chooseBuy() {
            
            $('.buySellSection').removeClass('redText');
            $('.buySellSection').addClass('textGreen');
            $('.side').removeClass('selectedSide');
            $("#buyChoose").addClass('selectedSide');
            $('.minusSymbol').hide();
            $('.plusSymbol').show();
            $('#shortLocate .horizontalInfoField').text('');
            $('#shortLocate .horizontalInfoField').removeClass('redText'); 
            $('#locateIDSection').hide();
            $('.popUpSide').addClass('textGreen');
            $('.popUpSide').removeClass('redText');
            $('.popUpSide').text('B');
            buySellBoolean = false;
            shortSellBoolean = false;

        }

        $("#buyChoose").keypress(function(event) {
            if (event.which == 13) {

                chooseBuy();
                console.log(buySellBoolean);

            }
        });


        $('#buyChoose').on('click', function() {
            console.log('now buy');

            console.log(buySellBoolean);
            chooseBuy();

        });

        

      


        function changeRowBuy(someID) {
            $('.buySellSection.selectedBuy .band, .buySellSection.selectedSell .band').removeClass('bandWhite');
            $('.buySellSection').removeClass('selectedSell');
            $('.buySellSection').removeClass('selectedBuy');
            $('.quantitySection').removeClass('selectedBuy');
            $('.quantitySection').removeClass('selectedSell');
            $('.buySellSection').addClass('textGreen');
            $('#' + someID + ' .buySellSection').addClass('selectedBuy');
            $('#' + someID + ' .buySellSection .band').addClass('bandWhite');
            $('#' + someID + ' .quantitySection').addClass('selectedBuy');

        }

        function changeRowSell(someID) {
            $('.buySellSection.selectedBuy .band, .buySellSection.selectedSell .band').removeClass('bandWhite');
            $('.buySellSection').removeClass('selectedSell');
            $('.buySellSection').removeClass('selectedBuy');
            $('.quantitySection').removeClass('selectedBuy');
            $('.quantitySection').removeClass('selectedSell');
            $('.buySellSection').addClass('redText');
            $('#' + someID + ' .buySellSection').addClass('selectedSell');
            $('#' + someID + ' .buySellSection .band').addClass('bandWhite');
            $('#' + someID + ' .quantitySection').addClass('selectedSell');

        }

       


      

        


        $('#acceptButton').on('click', function() {
            $('#popUpBackground').show();
            $('#popUp1').show();
        });

        $('#notTraded').on('click', function() {
            $('#popUpBackground2').show();
            $('#popUp3').show();
        });
        $('#traderButton').on('click', function() {
            $('#popUpBackground').show();
            $('#popUp4').show();
        });

    




        ///////////////pop up 1////////////////

        $('#popUpClose').on('click', function() { $('#popUpBackground').hide(); });

        $('#executeButton').on('click', function() {
            $('#popUp1').hide();
            console.log('yo');
            $('#popUp2').show();

        });

        $('#executeButtonTrader').on('click', function() {
            $('#popUp1').hide();
            console.log('yo');
            $('#popUp4').show();

        });



        ///////////////pop up 2////////////////


        $('#popUpCloseMissed').on('click', function() { $('#popUpBackground2').hide(); });
        $('#popUpCloseTrader').on('click', function() { 
            $('#popUp4').hide(); 
            $('#popUpBackground').hide();
        });

        $('#popUpCloseRestrictions').on('click', function() { $('#backgroundRestrictions').hide(); });

       

        





        $('#doneButton').on('click', function() {
            $('#popUpBackground').hide();
            $('#popUp1').hide();
            $('#popUp2').hide();
        });

        $('#doneButtonMissed').on('click', function() {
            $('#popUpBackground2').hide();
            
        });

        $('#doneButtonTrader').on('click', function() {
            $('#popUpBackground').hide();
            $('#popUp1').hide();
            $('#popUp2').hide();
            $('#popUp4').hide();
            
        });






        ////// StockList//////////




        var clientList = [
            { ticker: "alambicx", company: "Dr Pepper Seven Up Inc"},
            { ticker: "balyasnyx", company: "Balyasny Asset Management" },
            { ticker: "carnmgmt", company: "Carnegie Asset Management"},
            { ticker: "chiltonny", company: "Chilton Investment"},
            { ticker: "deshaw", company: "D.E. Shaw-Deshany Inc"},
            { ticker: "grahamx", company: "Graham Company Holdings Investment LLC" },
            { ticker: "hwcmdsa", company: "Dr Pepper Seven Up Inc" },
            { ticker: "jonedsa", company: "Dr Pepper Seven Up Inc"},

            { ticker: "mbicxgen", company: "Dr Pepper Seven Up Inc"},
            { ticker: "cgpyasnyx", company: "Dr Pepper Seven Up Inc"},
            { ticker: "rrrterusx", company: "Dr Pepper Seven Up Inc"},
            { ticker: "shlmnms", company: "Dr Pepper Seven Up Inc" },
            { ticker: "deshdma", company: "Dr Pepper Seven Up Inc" },
            { ticker: "slaahamx", company: "Dr Pepper Seven Up Inc" },
            { ticker: "fonedsa", company: "Dr Pepper Seven Up Inc" },
            { ticker: "oocmdsa", company: "Dr Pepper Seven Up Inc" },
            { ticker: "alkdsa", company: "Dr Pepper Seven Up Inc" },
            { ticker: "allipwst", company: "Dr Pepper Seven Up Inc" },
            { ticker: "alydarx", company: "Dr Pepper Seven Up Inc" },
            { ticker: "amcedsa", company: "Dr Pepper Seven Up Inc" },
            { ticker: "aqrpropx5", company: "Dr Pepper Seven Up Inc" },
            { ticker: "arrowgrtx", company: "Dr Pepper Seven Up Inc" },


            { ticker: "brockst", company: "Dr Pepper Seven Up Inc" },
            { ticker: "btigdsa", company: "Dr Pepper Seven Up Inc" },

            { ticker: "canteshx", company: "Dr Pepper Seven Up Inc" },
            { ticker: "cantustp", company: "Dr Pepper Seven Up Inc" },

            { ticker: "deepbltsx", company: "Dr Pepper Seven Up Inc" },


            { ticker: "everpnt", company: "Dr Pepper Seven Up Inc" },
            { ticker: "flowbvx6", company: "Dr Pepper Seven Up Inc" },
            { ticker: "govlanex", company: "Dr Pepper Seven Up Inc" },

            { ticker: "janexno", company: "Dr Pepper Seven Up Inc" },

            { ticker: "rigtwloy", company: "Dr Pepper Seven Up Inc" },

            { ticker: "dalkdsa", company: "Dr Pepper Seven Up Inc" },
            { ticker: "ollipwst", company: "Dr Pepper Seven Up Inc" },
            { ticker: "yilydarx", company: "Dr Pepper Seven Up Inc" },
            { ticker: "scrmcedsa", company: "Dr Pepper Seven Up Inc" },
            { ticker: "ghrpropx5", company: "Dr Pepper Seven Up Inc" },
            { ticker: "rowowgrt", company: "Dr Pepper Seven Up Inc" },


            { ticker: "ochakst", company: "Dr Pepper Seven Up Inc" },
            { ticker: "qwgdsa", company: "Dr Pepper Seven Up Inc" },

            { ticker: "ganteshx", company: "Dr Pepper Seven Up Inc" },
            { ticker: "nantustp", company: "Dr Pepper Seven Up Inc" },

            { ticker: "deepbltsx", company: "Dr Pepper Seven Up Inc" },


            { ticker: "ppverpnt", company: "Dr Pepper Seven Up Inc" },
            { ticker: "blowbvx6", company: "Dr Pepper Seven Up Inc" },
            { ticker: "shovlanex", company: "Dr Pepper Seven Up Inc" },

            { ticker: "danexno", company: "Dr Pepper Seven Up Inc" },

            { ticker: "vIGTWLO", company: "Dr Pepper Seven Up Inc" }

        ];



        var stockListIOI = [
            { ticker: "amzn", company: "Amazon.Com Inc", classification: "CRB ELIGIBLE" },
            { ticker: "orcl", company: "Oracle Corp", classification: "CLAIMED BY TRADER" },
            { ticker: "chlkf", company: "China Mobile Hong Ko", classification: "CRB ELIGIBLE" },
            { ticker: "aapl", company: "Apple, Inc.", classification: "CRB ELIGIBLE" },
            { ticker: "abev", company: "Ambev S.A.", classification: "CRB ELIGIBLE" },
            { ticker: "aw-un.to", company: "A&W Revenue Royalties In", classification: "CLAIMED BY TRADER" },
            { ticker: "amswa", company: "Amer Software Inc", classification: "CRB ELIGIBLE" },
            { ticker: "dcm", company: "Ntt Docomo Inc", classification: "CRB ELIGIBLE" },
            { ticker: "dac.vn", company: "DACHA CAPITAL INC.", classification: "CLAIMED BY TRADER" },
            { ticker: "kbl-un.to", company: "K-BRO LINEN INCOME FUND", classification: "CRB ELIGIBLE" },


            { ticker: "sbn-pr-a.to", company: "S Split Corp. Pref A", classification: "CRB ELIGIBLE" },
            { ticker: "fcx", company: "Freeport-Mcmoran Inc", classification: "RESTRICTED BY CRB" },
            { ticker: "000061.SZ", company: "Shenzhen Agricultural Products Co Ltd", classification: "CRB ELIGIBLE" },
            { ticker: "cuz", company: "Cousins Properties Inc", classification: "CRB ELIGIBLE" },
            { ticker: "dva", company: "Davita Healthcare Partners Inc", classification: "CRB ELIGIBLE" },
            { ticker: "000816.SZ", company: "Jiangsu Nonghua Intelligent Agriculture Technology Co Ltd", classification: "CLAIMED BY TRADER" },
            { ticker: "fcau", company: "Fiat Chrysler Automobiles N.V.", classification: "RESTRICTED BY CRB" },
            { ticker: "twtr", company: "Twitter Inc", classification: "CRB ELIGIBLE" },
            { ticker: "daiey", company: "DAI EI INC ADR", classification: "CRB ELIGIBLE" },
            { ticker: "ggb", company: "Gerdau S.A.", classification: "CRB ELIGIBLE" },


            { ticker: "lvlt", company: "Level 3 Communications", classification: "CRB ELIGIBLE" },
            { ticker: "rad", company: "Rite Aid Corp", classification: "CRB ELIGIBLE" },
            { ticker: "rig", company: "Transocean Inc", classification: "CLAIMED BY TRADER" },
            { ticker: "twlo", company: "Twilio Symbol", classification: "CRB ELIGIBLE" },
            { ticker: "eric.o", company: "Telefonaktiebolaget LM Ericsson", classification: "CLAIMED BY TRADER" },
            { ticker: "xom", company: "Exxon Mobil Corp", classification: "CRB ELIGIBLE" },
            { ticker: "zbh", company: "Zimmer Biomet Holdings", classification: "CRB ELIGIBLE" },
            { ticker: "auy", company: "Yamana Gold", classification: "CRB ELIGIBLE" },
            { ticker: "baba", company: "Alibaba Group Holding Ltd", classification: "CRB ELIGIBLE" },
            { ticker: "brdax", company: "B. Riley Diversified Equity Fund", classification: "RESTRICTED BY CRB" },


            { ticker: "ptx", company: "Pernix Theraptcs", classification: "CRB ELIGIBLE" },
            { ticker: "zfgn", company: "Zafgen Inc", classification: "CRB ELIGIBLE" },
            { ticker: "pcrx", company: "Pacira Pharm Inc", classification: "CLAIMED BY TRADER" },
            { ticker: "qtnt", company: "Quotient Limited Ord", classification: "CRB ELIGIBLE" },
            { ticker: "cemp", company: "Cempra Inc", classification: "CRB ELIGIBLE" },
            { ticker: "avgr", company: "Avinger Inc", classification: "CLAIMED BY TRADER" },
            { ticker: "sanww", company: "S&W Seed Company", classification: "RESTRICTED BY CRB" },
            { ticker: "apen", company: "Apollo Endosurgery Inc", classification: "CRB ELIGIBLE" },
            { ticker: "orex", company: "Orexigen Therapeutic", classification: "CLAIMED BY TRADER" },
            { ticker: "icui", company: "ICU Medical Inc", classification: "CRB ELIGIBLE" },

            { ticker: "ftr", company: "Frontier Commun Cp", classification: "CRB ELIGIBLE" },
            { ticker: "fb", company: "Facebook, Inc", classification: "CLAIMED BY TRADER" },
            { ticker: "siri", company: "Sirius XM Holdings I", classification: "CRB ELIGIBLE" },
            { ticker: "qqq", company: "Nasdaq QQQ ETF", classification: "CRB ELIGIBLE" },
            { ticker: "msft", company: "Microsoft Corp", classification: "CRB ELIGIBLE" },
            { ticker: "nvda", company: "Nvidia Corporation", classification: "CLAIMED BY TRADER" },
            { ticker: "mu", company: "Micron Technology", classification: "CRB ELIGIBLE" },
            { ticker: "csco", company: "Cisco Systems Inc", classification: "CRB ELIGIBLE" },
            { ticker: "intc", company: "Intel Corp", classification: "CLAIMED BY TRADER" },
            { ticker: "xiv", company: "VS -1X VIX Short Term", classification: "CRB ELIGIBLE" },
            { ticker: "vvpr", company: "Vivopower International Plc Ordi", classification: "RESTRICTED BY CRB" },
            { ticker: "vod ln", company: "Vodafone, PLC", classification: "CRB ELIGIBLE" },
            { ticker: "vod", company: "Vodafone Grp Plc Ads", classification: "CRB ELIGIBLE" },
            { ticker: "vrtbd", company: "Vestin Realty Mortgage Ii Inc.", classification: "CRB ELIGIBLE" }



        ];

        var restrictCrb = false;
        var restrictTrader = false;
        var OnestateIOI = false;
        var FourstateIOI = false;

        $('.flipSideButton4#oneIOI').on('click', function() {

            if ((!OnestateIOI) && (!FourstateIOI)) {
                $('#additionalIOIs').show();

                $(this).addClass('selectedSide');
                OnestateIOI = true;
                

                console.log("One IOI is " + OnestateIOI);
            } else if (OnestateIOI && (!FourstateIOI)) {
                $('#additionalIOIs').hide();
                OnestateIOI = false;

                $(this).removeClass('selectedSide');

                $('#ticker').removeClass('IOIcolor');
                $('#claimText').removeClass('IOIcolor');

                console.log("One IOI is " + OnestateIOI);

            } else if ((!OnestateIOI) && FourstateIOI) {
                $('#additionalIOIs').show();
                $('#additionalIOIs2').hide();
                OnestateIOI = true;
                FourstateIOI = false;
                $(this).addClass('selectedSide');
                $('.flipSideButton4#fourIOIs').removeClass('selectedSide');
                console.log("One IOI is " + OnestateIOI);
            }

        });

        $('.flipSideButton4#fourIOIs').on('click', function() {

            if ((!OnestateIOI) && (!FourstateIOI)) {
                $('#additionalIOIs2').show();

                $(this).addClass('selectedSide');
                FourstateIOI = true;
               
            } else if (FourstateIOI && (!OnestateIOI)) {
                $('#additionalIOIs2').hide();
                FourstateIOI = false;

                $(this).removeClass('selectedSide');

                $('#ticker').removeClass('IOIcolor');
                $('#claimText').removeClass('IOIcolor');


            } else if ((!FourstateIOI) && OnestateIOI) {
                $('#additionalIOIs2').show();
                $('#additionalIOIs').hide();
                FourstateIOI = true;
                OnestateIOI = false;
                $(this).addClass('selectedSide');
                $('.flipSideButton4#oneIOI').removeClass('selectedSide');
            }

        });



        $('.flipSideButton5#restrictedCRB').on('click', function() {

            if ((!restrictCrb) && (!restrictTrader)) {
                $('#ticker').addClass('restrictCRB');
                $('#claimText').addClass('restrictCRB');
                $('#claimText').text('restricted by crb');

                $(this).addClass('selectedSide');
                restrictCrb = true;
                console.log("One IOI is " + OnestateIOI);

            } else if (restrictCrb && (!restrictTrader)) {
                $('#ticker').removeClass('restrictCRB');
                $('#claimText').removeClass('restrictCRB');
                $('#claimText').text('crb eligible');
                restrictCrb = false;
                console.log("One IOI is " + OnestateIOI);
                $(this).removeClass('selectedSide');

            } else if ((!restrictCrb) && restrictTrader) {
                $('#ticker').addClass('restrictCRB');
                $('#claimText').addClass('restrictCRB');
                $('#ticker').removeClass('restrictTrader');
                $('#claimText').removeClass('restrictTrader');
                $('#claimText').text('restricted by crb');
                restrictCrb = true;
                restrictTrader = false;
                $(this).addClass('selectedSide');
                $('.flipSideButton5#restrictedTrader').removeClass('selectedSide');
                console.log("One IOI is " + OnestateIOI);
            }

        });

        $('.flipSideButton5#restrictedTrader').on('click', function() {

            if ((!restrictCrb) && (!restrictTrader)) {
                $('#ticker').addClass('restrictTrader');
                $('#claimText').addClass('restrictTrader');
                $('#claimText').text('restricted by trader');

                $(this).addClass('selectedSide');
                restrictTrader = true;

            } else if (restrictTrader && (!restrictCrb)) {
                $('#ticker').removeClass('restrictTrader');
                $('#claimText').removeClass('restrictTrader');
                $('#claimText').text('crb eligible');
                restrictTrader = false;

                $(this).removeClass('selectedSide');
            } else if ((!restrictTrader) && restrictCrb) {
                $('#ticker').addClass('restrictTrader');
                $('#claimText').addClass('restrictTrader');
                $('#ticker').removeClass('restrictCRB');
                $('#claimText').removeClass('restrictCRB');
                $('#claimText').text('restricted by trader');
                restrictCrb = false;
                restrictTrader = true;
                $(this).addClass('selectedSide');
                $('.flipSideButton5#restrictedCRB').removeClass('selectedSide');
            }

        });






        function makeTickerTile(name, classification) {



            function returnRestrictionClass(classification) {
                if (classification == "CLAIMED BY TRADER") {
                    myRestrictionClass = "off";
                } else if (classification == "RESTRICTED BY CRB") {
                    myRestrictionClass = "wayOff";
                } else if (classification == "CRB ELIGIBLE") {
                    myRestrictionClass = "regular";
                }

                return myRestrictionClass;


            }
            var newTicker = $('<div><button class="tile ' + returnRestrictionClass(classification) + '">' + name + '</button></div>');

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


        console.log(stockListIOI[0].ticker);

        var tickerCompany;

        var tickerClick = false;

        $('#pricerToolTicker, #ticker').on('keyup', function(event) {

            var inputTick = $(this).val();
            inputTick.toUpperCase();
            console.log(inputTick);


            var myString;

            function findATicker(arr, myInput) {

                var myRestrictionColor;


                for (var i = 0; i < arr.length; i++) {
                    function returnRestrictionColor(classification) {
                        if (classification == "CLAIMED BY TRADER") {
                            myRestrictionColor = "restrictTrader";

                        } else if (classification == "RESTRICTED BY CRB") {
                            myRestrictionColor = "restrictCRB";

                        } else if (classification == "CRB ELIGIBLE") {
                            myRestrictionColor = "liColorPlain";

                        }


                        return myRestrictionColor;


                    }


                    
                    myString = arr[i].ticker;
                    company = arr[i].company;
                    classification = arr[i].classification;
                    if (myString.charAt(0) == myInput || myString.charAt(0) == myInput.toLowerCase()) {

                        $('#pricerToolTickerMenu ul').append('<li><button class=" ' + returnRestrictionColor(arr[i].classification) + ' " data-company="' + company + '" data-classification="' + classification + '" >' + arr[i].ticker + '</button></li>');
                        console.log(arr[i].ticker);
                        tickerClick = true;



                    }
                }
            };

            if (tickerClick == false) {
                findATicker(stockListIOI, inputTick);
            }


            $('#pricerToolTickerMenu ul li button, #pricerToolTickerMenu ul li button').on('click', function() {
                $('#ticker, #claimText, #tickerTitle').removeClass('restrictTrader');
                $('#ticker, #claimText, #tickerTitle').removeClass('restrictCRB');
                $('#ticker, #claimText, #tickerTitle').removeClass('liColorPlain');
               
                var inputText = $(this).text();
                console.log(this);
                newClass = $(this).attr("class");
                tickerCompany = $(this).data('company');
                classification = $(this).data('classification');
                console.log(tickerCompany);
                // if (classification == "CLAIMED BY TRADER") {
                //     restrictTrader = true;
                //     restrictCrb = false;

                // } else if (classification == "RESTRICTED BY CRB") {
                //     restrictTrader = false;
                //     restrictCrb = true;

                // } else if (classification == "CRB ELIGIBLE") {
                //     restrictTrader = false;
                //     restrictCrb = false;

                // }
                $('#ticker').val(inputText);
                $('#tickerTitle').text(tickerCompany);
                $('#claimText').text(classification);

                $('#ticker').addClass(newClass);
                $('#claimText').addClass(newClass);
                $('#tickerTitle').addClass(newClass);


                $('.NBBO .NBBOsell').text('445.221');
                $('.NBBO .NBBObuy').text('445.391');
                $('.quantity').text('114,357');
                $('#nbboA').text('7,777,000');
                $('#nbboB').text('8,000,000');
                $('#advText').text('49,661,870');
                $('#ervText').text('24,830,000');
                $('#crbMinQtyText').text('100,000');
                $('#minMaxDivider').text('/');
                $('#crbMaxQtyText').text('600,000');

                $('.popUpTicker').text(inputText);
             
                tickerClick = false;
                $('#clientForTicker').focus();
                $('#notTraded').show();
                 $('#traderButton').show(); 
                $('#acceptButton').show();

                $('#pricerToolTickerMenu ul li, #pricerToolTickerMenu ul li').hide();
            })


        });

        var clientCompany;

        var clientClick = false;
       
        $('#clientForTicker').on('keyup', function(event) {

            var inputClient = $(this).val();
            inputClient.toUpperCase();
            console.log(inputClient);

            var myString;
            $('.sideWrapper').removeClass('blinkDiv');

            function findAClient(arr, myInput) {



                for (var i = 0; i < arr.length; i++) {

                    myString = arr[i].ticker;
                    clientCompany = arr[i].company;
                    myString.toUpperCase();
                    if (myString.charAt(0) == myInput || myString.charAt(0) == myInput.toLowerCase()) {

                        $('#clientMenu ul').append('<li data-company=" ' + arr[i].company +'" data-ticker=" ' + arr[i].ticker +'"><button class="liColorPlain">'+ arr[i].ticker + '<div>' + arr[i].company + '</div></button></li>');
                        console.log(arr[i].ticker);
                        console.log(arr[i].company)
                        clientClick = true;



                    }
                }
            }

            if (clientClick == false) {
                findAClient(clientList, inputClient);
            }

            $('#clientMenu ul li').on('click', function() {
                var inputText = $(this).data('ticker');
                
                var clientCompany = $(this).data('company');
                
                $('#clientForTicker').val(inputText);
                
                $('#clientNamewrapper #clientText').text(clientCompany);
                $('#clientNamewrapper .horizontalLabel').text('Client');
                
                $('.popUpClient').text(inputText);
                
                $('#quantityInput2').focus();

                clientClick = false;
                
                $('#clientMenu ul li').hide();
            })

         
        });


// var hasSide = false;

        $('.side').on('click', function(event) {

         
            $('#spreadWrapper').show();
            $('#buySell100 .spread1').text('0.321');
            $('#buySell100 .spread2').text('0.361');
            $('#buySell200 .spread1').text('0.331');
            $('#buySell200 .spread2').text('0.361');
            $('#buySell400 .spread1').text('0.341');
            $('#buySell400 .spread2').text('0.361');
            $('#buySell100 .bip1').text('100');
            $('#buySell100 .bip2').text('105');
            $('#buySell200 .bip1').text('110');
            $('#buySell200 .bip2').text('115');
            $('#buySell400 .bip1').text('120');
            $('#buySell400 .bip2').text('125');


            // $('#row100 .quantitySection').text('114,357');
            // $('#row200 .quantitySection').text('327,428');
            // $('#row400 .quantitySection').text('457,428');
            // $('#row100 .advPercentage').text('100.23%');
            // $('#row200 .advPercentage').text('100.46%');
            // $('#row400 .advPercentage').text('100.92%');
            // $('#buySellMisc .spread1').text('0');
            // $('#buySellMisc .spread2').text('0');
            $('.percentageSection .advPercentage').text('0');

           
            
         
            $('.bottomButtonRow, .expire').show();
            $('.flipSideButton6#initialState').removeClass('selectedSide');
            // hasSide = true;
            // $('#quantityInput2').focus();
            
            
        });



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


        $('#turnOffDropTitle.dropDownTitle').click(function() {
            triggerDropDown('turnOffDropTitle', 'popUpRestrictionsDropDown');


        });

        $('#missedDropTitle.popUpdropDown').click(function() {
            triggerDropDown('missedDropTitle', 'popUpMissedDropDown');


        });

        $('#stockListSort.dropDownTitle').click(function() {
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
        var fiveMinutes = 60 * 5;
        var tenSeconds = 10;


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

        function startTimerSeconds(duration, display) {

            var timer = duration;
            
            var seconds;

            setInterval(function() {
                // parseInt the second parameter is base 10 format
                
                seconds = parseInt(timer % 60, 10);

                //if minutes is less than 10 show a 0 in front
                
                seconds = seconds < 10 ? "0" + seconds : seconds;

                display.textContent = seconds + ":00";


                if (--timer < 0) {
                    timer = duration;
                }
            }, 1000);
        }




        var display_2 = document.getElementById('currentTime');
        var display_3 = document.getElementById('currentTime2');
        startTimer(fiveMinutes, display_2);
        startTimerSeconds(tenSeconds, display_3);

        //found this as compatible for IE

        $(".clearable").each(function() {

            var myTextClear = $(this).find("input"),
                clearThis = $(this).find(".clearable__clear"),
                clearThisMenu = $(this).find('.clearableMenu ul li');

            myTextClear.on("input", function() {
                clearThis.toggle(!!this.value);
            });

            clearThis.on("touchstart click", function(e) {
                e.preventDefault();
                myTextClear.val("").trigger("input");
                clearThisMenu.hide();

                myTextClear.focus();
            });



        });

        $(".clearableClient").each(function() {

            var myTextClear = $(this).find("input"),
                clearThis = $(this).find(".clearable__clear"),
                clearThisMenu = $(this).find('.clearableMenu ul li');

            myTextClear.on("input", function() {
                clearThis.toggle(!!this.value);
            });

            clearThis.on("touchstart click", function(e) {
                e.preventDefault();
                myTextClear.val("").trigger("input");
                $('#clientNamewrapper .horizontalLabel').text(" ");
                $('#clientText').text(" ");
                clearThisMenu.hide();

                myTextClear.focus();
            });



        });


        $(".clearableQuantity").each(function() {

            var myTextClear = $(this).find("input"),
                clearThis = $(this).find(".clearable__clear");
                // clearThisMenu = $(this).find('.clearableMenu ul li');

            myTextClear.on("input", function() {
                clearThis.toggle(!!this.value);
            });

            clearThis.on("touchstart click", function(e) {
                e.preventDefault();
                myTextClear.val("").trigger("input");
                
                $('#row100 .quantitySection').text('');

                $('#row200 .quantitySection').text('');
                $('#row400 .quantitySection').text('');
                

                myTextClear.focus();
            });



        });

// $('#clientText').text(clientCompany);
        

        $(".clearableTicker").each(function() {

            var myTextClear = $(this).find("input:text"),
                clearThis = $(this).find(".clearable__clear");

            myTextClear.on("input", function() {
                clearThis.toggle(!!this.value);

            });

            clearThis.on("touchstart click", function(e) {
                e.preventDefault();
                myTextClear.val("").trigger("input");
                $('#tickerTitle').text(" ");
                $('#claimText').text(" ");
                $('#ticker, #claimText, #tickerTitle').removeClass('restrictTrader');
                $('#ticker, #claimText, #tickerTitle').removeClass('restrictCRB');
                $('#ticker, #claimText, #tickerTitle').removeClass('liColorPlain');
                myTextClear.removeClass('restrictCRB');
                myTextClear.removeClass('restrictTrader');
                $('.NBBO .NBBOsell').text(' ');
                $('.NBBO .NBBObuy').text('');
                $('.quantity').text('');
                $('#nbboA').text('');
                $('#nbboB').text('');
                $('#advText').text('');
                $('#ervText').text('');
                $('#crbMaxQtyText').text('');
                $('#minMaxDivider').text('');
                $('#pricerToolTickerMenu ul li').hide();

                myTextClear.focus();
            });
           
            $(".clearableTicker ~ ul li").hide();

        });





        var priceThis; 
        $('#quantityInput2').on('keypress', function(e){

            
            if(e.which == 13 || e.which == 9 || e.keycode == 13 || e.keycode == 9 ) {
                
               priceThis = $('#quantityInput2').val();
               $('#myQuantity').val(priceThis);
               
               console.log("My price is " + priceThis);
               // priceThisRegular = (priceThis*1).toFixed(2);
               // priceThisHalf = (priceThis/2).toFixed(2);
               // priceThisDouble = (priceThis*2).toFixed(2);
               priceThisRegular = (priceThis*1);
               priceThisHalf = (priceThis/2);
               priceThisDouble = (priceThis*2);
               
               function numbersNice(myNumber) {
                    
                    var parts = myNumber.toFixed(2).split(".");
                    var num = parts[0].replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,") + 
                        (parts[1] ? "." + parts[1] : "");
                    return num;
                     
                }
               priceThisRegular = numbersNice(priceThisRegular);
               priceThisHalf = numbersNice(priceThisHalf);
               priceThisDouble = numbersNice(priceThisDouble);


               // priceThisRegular = priceThisRegular.toLocaleString();
               // priceThisHalf = priceThisHalf.toLocaleString();
               // priceThisDouble = priceThisDouble.toLocaleString();

               
               $('#row100 .quantitySection').text(priceThisHalf);

                $('#row200 .quantitySection').text(priceThisRegular);
                $('#row400 .quantitySection').text(priceThisDouble);
                $('.popUpQty').text(priceThisRegular);
                
            }
           
        })



        



        var spreadB;


        $('.side').on('keypress', function(e){

            
            if(e.which == 13 || e.which == 9 || e.keycode == 13 || e.keycode == 9 ) {
                
                // return priceThis;
                if (buySellBoolean){
                   $('#buySellMisc .spread1').text('445.2215'); 
                   $('#buySellMisc .spread2').text('445.2350'); 
                    // $('.percentageSection .advPercentage').text('100.34%');
                }
                else if (!buySellBoolean){
                    $('#buySellMisc .spread1').text('445.3915');
                    $('#buySellMisc .spread2').text('445.4112');
                    // $('.percentageSection .advPercentage').text('100.34%');
                }
                
                
            }
           
        })

        console.log("My price is " + priceThis); 

       


        var hugeNumbers = false;

        $('.flipSideButton3#hugeNumbers').on('click', function() {

            if (!hugeNumbers) {
                $('#buySell100 .spread1').text('77,445.221');
                $('#buySell100 .spread2').text('77,445.221');
                $('#buySell200 .spread1').text('77,777.221');
                $('#buySell200 .spread2').text('77,777.391');
                $('#buySell400 .spread1').text('77,445.221');
                $('#buySell400 .spread2').text('77,445.511');
                $('.NBBO .NBBOsell').text('7,777,777.77');
                $('.NBBO .NBBObuy').text('7,777,777.77');

                $(this).addClass('selectedSide');
                hugeNumbers = true;

            } else if (hugeNumbers) {
              
                $('#buySell100 .spread1').text('0.321');
                $('#buySell100 .spread2').text('0.361');
                $('#buySell200 .spread1').text('0.331');
                $('#buySell200 .spread2').text('0.361');
                $('#buySell400 .spread1').text('0.341');
                $('#buySell400 .spread2').text('0.361');
             
                $('.NBBO .NBBOsell').text('445.221');
                $('.NBBO .NBBObuy').text('445.391');
                hugeNumbers = false;

                $(this).removeClass('selectedSide');
            }

        });


      
        var d = new Date();

        console.log(d.toLocaleTimeString());


    })
    // end docready
