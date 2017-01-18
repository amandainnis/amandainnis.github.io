
// function textFlip(sectionID, sectionKind, cost1, cost2, price1, price2){
// 	$('#'+ sectionID + sectionKind).on( "mouseenter", function() {
// 		$( '#'+ sectionID + ' .spread1' ).text(price1);
// 		$( '#'+ sectionID + ' .spread2' ).text(price2);}).on("mouseleave", function() {
// 			$( '#'+ sectionID + ' .spread1' ).text(cost1);
// 			$( '#'+ sectionID + ' .spread2' ).text(cost2); 
// 		});

// }

function textFlipPrice(sectionID, sectionKind, price1, price2){
	
		$( '#'+ sectionID + ' .spread1' ).text(price1);
		$( '#'+ sectionID + ' .spread2' ).text(price2);

}

function textFlipCost(sectionID, sectionKind, cost1, cost2){
	
		$( '#'+ sectionID + ' .spread1' ).text(cost1);
		$( '#'+ sectionID + ' .spread2' ).text(cost2);

}

	


	


 function triggerDropDown(dropTitleID, titleOfUl){
    $('#'+ titleOfUl +' li').show();

    $('#'+ titleOfUl).on('mouseleave', function(){
    	$('#'+ titleOfUl +' li').hide();
    	
    });

       $('#'+ titleOfUl +' .field1').click(function(){
          var inputText = $(this).text();
          $('#' + dropTitleID + '').text(inputText);
          $('#'+ titleOfUl +' li').hide();
       }); 

       $('#'+ titleOfUl +' .field2').click(function(){
          var inputText = $(this).text();
          $('#' + dropTitleID + '').text(inputText);
          $('#'+ titleOfUl +' li').hide();
       }); 
       
       $('#'+ titleOfUl +' .field3').click(function(){
          var inputText = $(this).text();
          $('#' + dropTitleID + '').text(inputText);
          $('#'+ titleOfUl +' li').hide();
       }); 

       $('#'+ titleOfUl +' .field4').click(function(){
          var inputText = $(this).text();
          $('#' + dropTitleID + '').text(inputText);
          $('#'+ titleOfUl +' li').hide();
       }); 

       $('#'+ titleOfUl +' .field5').click(function(){
          var inputText = $(this).text();
          $('#' + dropTitleID + '').text(inputText);
          $('#'+ titleOfUl +' li').hide();
       }); 

       $('#'+ titleOfUl +' .field6').click(function(){
          var inputText = $(this).text();
          $('#' + dropTitleID + '').text(inputText);
          $('#'+ titleOfUl +' li').hide();
       }); 
       

       
    	
 ;}




var myID;

var controlPressed = false;
var priceCostToggleBoolean = false;


$(document).ready(function(){

	$('#popUpBackground').hide();
	$('#popUp2').hide();
	$('#popUpUrgencyDropDown li').hide();
	$('#popUpFollowDropDown li').hide();
	$('#pricerToolBackground').hide();

	$('#backgroundRestrictions').hide();
	$('#popUpRestrictionsDropDown li').hide();
	$('#popUpMarketDropDown li').hide();
	


	$('#wrapperRestrictions').hide();

	// $('#priceCostToggle').on('click', function(){
	// 	priceCostToggleBoolean = !priceCostToggleBoolean;
	// 	if(priceCostToggleBoolean){
	// 		console.log('checked');
	// 	}
	// 	else{console.log('not checked');}
	// })


	$('#priceCostToggleInput').on('click', function(){
		priceCostToggleBoolean = !priceCostToggleBoolean;
		if(priceCostToggleBoolean){
			console.log('checked');
				textFlipPrice('buy400', '.buySection', 160.345, 160.365);
			 	textFlipPrice('buy200', '.buySection', 160.335, 160.364);
			 	textFlipPrice('buy100', '.buySection', 160.325, 160.363);
			 	textFlipPrice('buy50', '.buySection', 160.315, 160.361);

			 	textFlipPrice('sell400', '.sellSection', 160.345, 160.365);
			 	textFlipPrice('sell200', '.sellSection', 160.335, 160.364);
			 	textFlipPrice('sell100', '.sellSection', 160.325, 160.363);
			 	textFlipPrice('sell50', '.sellSection', 160.315, 160.361);
		}
		else{
			console.log('not checked');
				textFlipCost('buy400', '.buySection', .345, .365);
			 	textFlipCost('buy200', '.buySection', .335, .364);
			 	textFlipCost('buy100', '.buySection', .325, .363);
			 	textFlipCost('buy50', '.buySection', .315, .361);

			 	textFlipCost('sell400', '.sellSection', .345, .365);
			 	textFlipCost('sell200', '.sellSection', .335, .364);
			 	textFlipCost('sell100', '.sellSection', .325, .363);
			 	textFlipCost('sell50', '.sellSection', .315, .361);}
	})



	$('#TCA').click( function(){
		$('#wrapperRestrictions').hide();
		$('.navigation span').removeClass('selected');
		$(this).addClass('selected');

	})

	$('#Restrictions').click( function(){
		$('#wrapperRestrictions').show();
		$('.navigation span').removeClass('selected');
		$(this).addClass('selected');

	})


	$('#pricerIconButton').on('click', function(){
		$('#pricerToolBackground').show();
		
	});

	$('#pricerTool .mdi-close').on('click', function(){
		$('#pricerToolBackground').hide();
		
	});


	$('#sellSideVersion').on('click', function(){
		$('#buySideVersion').removeClass('selectedSide');
		$('#sellSideVersion').addClass('selectedSide');
		$('#buySellDoorway').text('S');
		$('#buySellDoorway').addClass('redText');
		$('.buySection').removeClass('textGreen');
		
		$('.buySection.selected .band').removeClass('bandWhite');
		$('.buySection').removeClass('selected');
		$('.quantitySection').removeClass('buyGreen');
		// $('.quantitySection').removeClass('buyGreen');
		

		$('#spreadWrapper').on('click', '.spreadRow', function(event) {

			    $('.spreadRow').removeClass('selectedRow');
			    $(this).addClass('selectedRow');
			    myID = this.id;
				})
	    
		changeRowSell(myID);
	    
	    
	    console.log(myID);

	    
	});


	

	$('#buySideVersion').on('click', function(){
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

 	// textFlip('buy400', '.buySection', .345, .365, 160.345, 160.365);
 	// textFlip('buy200', '.buySection', .335, .364, 160.335, 160.364);
 	// textFlip('buy100', '.buySection', .325, .363, 160.325, 160.363);
 	// textFlip('buy50', '.buySection', .315, .361, 160.315, 160.361);

 	// textFlip('sell400', '.sellSection', .345, .365, 160.345, 160.365);
 	// textFlip('sell200', '.sellSection', .335, .364, 160.335, 160.364);
 	// textFlip('sell100', '.sellSection', .325, .363, 160.325, 160.363);
 	// textFlip('sell50', '.sellSection', .315, .361, 160.315, 160.361);


 	$('#orderID').on( "mouseenter", function() {
		$( '#orderIDHover' ).show();
		}).on("mouseleave", function() {
			$( '#orderIDHover' ).hide();
	});


	$('#rowEnterQty input').on( "mouseenter", function() {
		$( '#sellMisc .spread1' ).text(160.321);
		$( '#sellMisc .spread2' ).text(160.362);
		$( '#buyMisc .spread1' ).text(160.321);
		$( '#buyMisc .spread2' ).text(160.362);
		}).on("mouseleave", function() {
			$( '#sellMisc .spread1' ).text('');
			$( '#sellMisc .spread2' ).text('');
			$( '#buyMisc .spread1' ).text('');
			$( '#buyMisc .spread2' ).text('');
	});



	$('#acceptButton').on('click', function(){
		$('#popUpBackground').show();
		$('#popUp1').show();
	});



	function changeRowBuy(someID){
	    	$('.buySection.selected .band').removeClass('bandWhite');
			$('.buySection').removeClass('selected');
			$('.quantitySection').removeClass('buyGreen');
			$('.buySection').addClass('textGreen');
			$('#' + someID + ' .buySection').addClass('selected');
			$('#' + someID + ' .buySection .band').addClass('bandWhite');
			$('#' + someID + ' .quantitySection').addClass('buyGreen');
			
		}

	function changeRowSell(someID){
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
		}
		else if ($('#sellSideVersion').hasClass('selectedSide')) {
			changeRowSell(myID);
		}
	    
	    
	    console.log(myID);

	    // myID = this.id;
	    // $(myID).addClass('buyGreen');
	});


	


	

	
	


///////////////pop up 1////////////////

	$('#popUpClose').on('click', function(){$('#popUpBackground').hide();});

	$('#executeButton').on('click', function(){
		$('#popUp1').hide();
		console.log('yo');
		$('#popUp2').show();

	});



  ///////////////pop up 2////////////////





 // triggerDropDown(dropTitleID, titleOfUl)
  
	
  // $('#urgencyDropTitle.popUpdropDown').click(function(){
  //   triggerDropDown('urgencyDropTitle', 'popUpUrgencyDropDown');


  // });




  // $('#followDropTitle.popUpdropDown').click(function(){
  //   triggerDropDown('followDropTitle', 'popUpFollowDropDown');


  // });



  



	$('#doneButton').on('click', function(){
		$('#popUpBackground').hide();
		$('#popUp1').hide();
		$('#popUp2').hide();
	});
	

	
	
	

	////// StockList//////////


		
	

    var stockListIOI = [
            {ticker: "amzn", classification: "regular"},
            {ticker: "orcl", classification: "off"},
            {ticker: "chlkf", classification: "regular"},
     		{ticker: "aapl", classification: "regular"},
     		{ticker: "abev", classification: "regular"},
     		{ticker: "amtr", classification: "off"},
            {ticker: "nppxf", classification: "regular"},
            {ticker: "dcm", classification: "regular"},
            {ticker: "dtegf", classification: "off"},
     		{ticker: "kddiy", classification: "regular"},
     		

			{ticker: "sngnf", classification: "regular"},
     		{ticker: "fcx", classification: "wayOff"},
     		{ticker: "ge", classification: "regular"},
            {ticker: "cuz", classification: "regular"},
            {ticker: "dva", classification: "regular"},
            {ticker: "tu", classification: "off"},
            {ticker: "fcau", classification: "wayOff"},
            {ticker: "twtr", classification: "regular"},
            {ticker: "dzn", classification: "regular"},
     		{ticker: "ggb", classification: "regular"},
     		
     		  
     		{ticker: "lvlt", classification: "regular" },
     		{ticker: "rad", classification: "regular"},
     		{ticker: "rig", classification: "off"},
     		{ticker: "twlo", classification: "regular"},
            {ticker: "ego", classification: "off"},
     		{ticker: "xom", classification: "regular"},
     		{ticker: "zbh", classification: "regular"},
            {ticker: "auy", classification: "regular"},
            {ticker: "baba", classification: "regular"},
            {ticker: "bhi", classification: "wayOff"}, 


          	{ticker: "ptx", classification: "regular" },
     		{ticker: "zfgn", classification: "regular"},
     		{ticker: "pcrx", classification: "off"},
     		{ticker: "qtnt", classification: "regular"},
            {ticker: "cemp", classification: "regular"},
            {ticker: "avgr", classification: "off"},
            {ticker: "smrt", classification: "wayOff"},
            {ticker: "apen", classification: "regular"},
            {ticker: "orex", classification: "off"},
     		{ticker: "icui", classification: "regular"},

     		{ticker: "ftr", classification: "regular"},
            {ticker: "fb", classification: "off"},
            {ticker: "siri", classification: "regular"},
     		{ticker: "qqq", classification: "regular"},
     		{ticker: "msft", classification: "regular"},
     		{ticker: "nvda", classification: "off"},
            {ticker: "mu", classification: "regular"},
            {ticker: "csco", classification: "regular"},
            {ticker: "intc", classification: "off"},
     		{ticker: "xiv", classification: "regular"}
     		
     	];


function makeTickerTile(name, classification) {
       
   		var newTicker = $('<div class="tile ' + classification + '">'+ name +'</div>');
   		
   		$('#tickerZone').append(newTicker);
   		
   };



function iterateDisplay(arr) {
	for (i = 0; i < arr.length; i++) {
       makeTickerTile(arr[i].ticker, arr[i].classification);
        
     }};

iterateDisplay(stockListIOI);



$('#searchTicker').on('change', function(){
	var inputTick = $(this).val();
	
	inputTick.toUpperCase();
	console.log(inputTick);

	 function findATicker(arr, myInput) {

		for (i = 0; i < arr.length; i++) {
			var myString = arr[i].ticker;
	       if (myString.charAt(0) == myInput || myString.charAt(0) == myInput.toLowerCase() ){
	       	console.log(arr[i].ticker);
	       }  
	     }};

     findATicker(stockListIOI, inputTick);
	
})





$('#pricerToolTicker').on('change', function(){
	var inputTick = $(this).val();
	inputTick.toUpperCase();
	console.log(inputTick);
	
	 function findATicker(arr, myInput) {

	 	var myRestrictionColor;

		for (var i = 0; i < arr.length; i++) {
			function returnRestrictionColor(classification){
				if (classification == "off") {
		   			myRestrictionColor = "NBBOsell";
		   		}
		   		else if (classification == "wayOff") {
		   			myRestrictionColor = "NBBOsell";
		   		}
		   		else if (classification == "regular"){
		   			myRestrictionColor = "liColorPlain";}

		   		return myRestrictionColor;
		   		
		}
		// returnRestrictionColor(arr[i].classification);
			var myString = arr[i].ticker;
	       if (myString.charAt(0) == myInput || myString.charAt(0) == myInput.toLowerCase() ){
	       	$('#pricerToolTickerMenu ul').append("<li class=" + returnRestrictionColor(arr[i].classification) + ">" + arr[i].ticker + "</li>");
	       	console.log(arr[i].ticker);
	       	
	       }  
	     }};

     findATicker(stockListIOI, inputTick);
     $('#pricerToolTickerMenu ul li').on('click', function(){
		var inputText = $(this).text();
		console.log(this);
		$('#pricerToolTicker').val(inputText);
		$('#pricerToolTickerMenu ul li').hide();
	})


     $('#pricerToolTickerMenu ul').on('mouseleave', function(){
    	$('#pricerToolTickerMenu ul li').hide();
    
    });
	
});


// returnElapsedColor(arr[i].days)



$('#pricerButton').on('click', function(){
		$('#pricerToolBackground').hide();
		
	});



    $(window).keydown(function(event){
		if(event.which == 17 || event.which == 91) {
			controlPressed = true;
			console.log(controlPressed);
		}
	}).keyup(function(event){
		if(event.which == 17 || event.which == 91) {
			controlPressed = false;
				if(selectedItems.length>0){

					$('#backgroundRestrictions').show();
					selectedItems=[];
				}
			console.log(controlPressed);
		}
	})

	
	selectedItems = [];

	
	$('.tile').on('click', function(event){
		if($(this).hasClass('regular')) {
			$(this).addClass('off');
			$(this).removeClass('regular');
			if (controlPressed == true){
				selectedItems.push(event);
			}
			else
			{
				$('#backgroundRestrictions').show();
			}
			
			
			
		}
		else if($(this).hasClass('off')) {
			$(this).addClass('regular');
			$(this).removeClass('off');
		}

		
		
	})






$('#pricerToolSide').on('click', function(event){
		if($(this).val() == "Buy"){
			$(this).val("Sell");
		}
		
		else{$(this).val("Buy")}
		
		console.log($(this).val())
	})

	
	// function triggerDropDown(dropTitleID, titleOfUl)


	$('#turnOffDropTitle.popUpdropDown').click(function(){
    triggerDropDown('turnOffDropTitle', 'popUpRestrictionsDropDown');


  });

	$('#stockListSort.restrictionsDropDown').click(function(){
    triggerDropDown('stockListSort', 'popUpMarketDropDown');


  });


	$('#okButton').on('click', function(){
			$('#backgroundRestrictions').hide();
	})









function startTimer(duration, display) {
    var timer = duration;
    setInterval(function () {
    	// parseInt the second parameter is base 10 format
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        //if minutes is less than 10 show a 0 in front
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            timer = duration;
        }
    }, 1000);
}

window.onload = function () {
    var twelveMinutes = 60 * 12,
        display = document.querySelector('#time');
        display2 = document.querySelector('#currentTime');
    startTimer(twelveMinutes, display);
    startTimer(twelveMinutes, display2);
};


// function myTimer() {
//     var d = new Date();
//     document.getElementById("currentTime").innerHTML = d.toLocaleTimeString();
// }

// setInterval(myTimer, 1000);






})
// end docready