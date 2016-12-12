
function textFlip(sectionID, cost1, cost2, price1, price2){
	$('#'+ sectionID + '.buySection').on( "mouseenter", function() {
		$( '#'+ sectionID + ' .spread1' ).text(cost1);
		$( '#'+ sectionID + ' .spread2' ).text(cost2);}).on("mouseleave", function() {
			$( '#'+ sectionID + ' .spread1' ).text(price1);
			$( '#'+ sectionID + ' .spread2' ).text(price2); 
		});

}

// function whoIsSelected(){
// 		if($('#row400').hasClass('selectedRow')) {
// 			console.log('row400');
// 		}
// 		else if($('#row200').hasClass('selectedRow')) {
// 			console.log('row200');
// 		}
// 		else if($('#row100').hasClass('selectedRow')) {
// 			console.log('row100');
// 		}
// 		else if($('#row50').hasClass('selectedRow')) {
// 			console.log('row50');
// 		}
// 	}

var myID;

// function whoIsSelected(){
// 		if($('#row400').hasClass('selectedRow')) {
// 			return 'row400';
// 		}
// 		else if($('#row200').hasClass('selectedRow')) {
// 			return  'row200';
// 		}
// 		else if($('#row100').hasClass('selectedRow')) {
// 			return  'row100';
// 		}
// 		else if($('#row50').hasClass('selectedRow')) {
// 			return  'row50';
// 		}

// 	}


$(document).ready(function(){

	$('#popUpBackground').hide();
	$('#popUp2').hide();
	$('#popUpUrgencyDropDown li').hide();
	$('#popUpFollowDropDown li').hide();


	$('#wrapperRestrictions').hide();


	$('#TCA').click( function(){
		$('#wrapperRestrictions').hide();

	})

	$('#Restrictions').click( function(){
		$('#wrapperRestrictions').show();

	})


	// whoIsSelected();

	// console.log(whoIsSelected());


	// $('#sellSideVersion').on('click', function(){
	// 	$('#buySideVersion').removeClass('selectedSide');
	// 	$('#sellSideVersion').addClass('selectedSide');
	// 	$('#buySellDoorway').text('S');
	// 	$('#buySellDoorway').addClass('redText');
	// 	$('.buySection').removeClass('textGreen');
	// 	// $('#buy200').removeClass('textWhite');
	// 	$('.buySection.selected .band').removeClass('bandWhite');
	// 	$('.buySection').removeClass('selected');
	// 	$('.sellSection').addClass('redText');
	// 	$('.quantitySection').removeClass('buyGreen');
	// 	$('#sell200').addClass('selected');
	// 	$('.sellSection.selected .band').addClass('bandWhite');
	// 	$('#row200 .quantitySection').addClass('sellRed');


	// })

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

	    // myID = this.id;
	    // $(myID).addClass('buyGreen');
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

		// $('#buy200').addClass('selected');
		// $('#buy200 .band').addClass('bandWhite');
		// $('.sellSection').removeClass('redText');
		// $('.sellSection.selected .band').removeClass('bandWhite');
		// $('#sell200').removeClass('selected');
		// $('#row200 .quantitySection').removeClass('sellRed');
	})

 	textFlip('buy400', .345, .365, 160.345, 160.365);
 	textFlip('buy200', .335, .364, 160.335, 160.364);
 	textFlip('buy100', .325, .363, 160.325, 160.363);
 	textFlip('buy50', .315, .361, 160.315, 160.361);


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

  
  
	
  $('#urgencyDropTitle.popUpdropDown').click(function(){
    $('#popUpUrgencyDropDown li').show();

       $('#popUpUrgencyDropDown .field1').click(function(){
          var inputText = $(this).text();
          $('#urgencyDropTitle').text(inputText);
          $('#popUpUrgencyDropDown li').hide();
       }); 

       $('#popUpUrgencyDropDown .field2').click(function(){
          var inputText = $(this).text();
          $('#urgencyDropTitle').text(inputText);
          $('#popUpUrgencyDropDown li').hide();
       }); 
       
       $('#popUpUrgencyDropDown .field3').click(function(){
          var inputText = $(this).text();
          $('#urgencyDropTitle').text(inputText);
          $('#popUpUrgencyDropDown li').hide();
       }); 

       $('#popUpUrgencyDropDown .field4').click(function(){
          var inputText = $(this).text();
          $('#urgencyDropTitle').text(inputText);
          $('#popUpUrgencyDropDown li').hide();
       }); 


  });


  $('#followDropTitle.popUpdropDown').click(function(){
    $('#popUpFollowDropDown li').show();

       $('#popUpFollowDropDown .field1').click(function(){
          var inputText = $(this).text();
          $('#followDropTitle').text(inputText);
          $('#popUpFollowDropDown li').hide();
       }); 

       $('#popUpFollowDropDown .field2').click(function(){
          var inputText = $(this).text();
          $('#followDropTitle').text(inputText);
          $('#popUpFollowDropDown li').hide();
       }); 
       
       $('#popUpFollowDropDown .field3').click(function(){
          var inputText = $(this).text();
          $('#followDropTitle').text(inputText);
          $('#popUpFollowDropDown li').hide();
       }); 

       $('#popUpFollowDropDown .field4').click(function(){
          var inputText = $(this).text();
          $('#followDropTitle').text(inputText);
          $('#popUpFollowDropDown li').hide();
       }); 


  });







	$('#doneButton').on('click', function(){
		$('#popUpBackground').hide();
		$('#popUp1').hide();
		$('#popUp2').hide();
	});
	

	$('#pricerIconButton').on('click', function(){alert("This is reserved for the pricer tool")});
	
	

	////// StockList//////////


		
	// DAVE search function processTicker(ticker){
    //     ///do something with your ticker
    //     if(ticker.outgage ===1){

    //     }
    // }

    var stockListIOI = [
            {ticker: "amzn", classification: "regular"},
            {ticker: "orcl", classification: "off"},
            {ticker: "pbr", classification: "regular"},
     		{ticker: "aapl", classification: "regular"},
     		{ticker: "abev", classification: "regular"},
     		{ticker: "amtr", classification: "off"},
            {ticker: "hal", classification: "regular"},
            {ticker: "hog", classification: "regular"},
            {ticker: "itub", classification: "off"},
     		{ticker: "cah", classification: "regular"},
     		

			{ticker: "eca", classification: "regular"},
     		{ticker: "fcx", classification: "wayOff"},
     		{ticker: "ge", classification: "regular"},
            {ticker: "CUZ", classification: "regular"},
            {ticker: "DVA", classification: "regular"},
            {ticker: "EW", classification: "off"},
            {ticker: "FCAU", classification: "wayOff"},
            {ticker: "TWTR", classification: "regular"},
            {ticker: "DZN", classification: "regular"},
     		{ticker: "GGB", classification: "regular"},
     		
     		  
     		{ticker: "LUV", classification: "regular" },
     		{ticker: "RAD", classification: "regular"},
     		{ticker: "RIG", classification: "off"},
     		{ticker: "TWLO", classification: "regular"},
            {ticker: "EGO", classification: "off"},
     		{ticker: "XOM", classification: "regular"},
     		{ticker: "ZBH", classification: "regular"},
            {ticker: "AUY", classification: "regular"},
            {ticker: "BABA", classification: "regular"},
            {ticker: "BHI", classification: "wayOff"}   		
     	];

//DAVE search processTicker(tickerBoxArrayMaster[0])

// <div class="tile regular">AMZN</div>

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
	       if (myString.charAt(0) == myInput){
	       	console.log(arr[i].ticker);
	       }  
	     }};

     findATicker(stockListIOI, inputTick);
	
})



	// function findATicker(arr) {

	// for (i = 0; i < arr.length; i++) {
	// 	var myString = arr[i].ticker;
 //       if (myString.charAt(0) === 'A'){
 //       	console.log(arr[i].ticker);
 //       }  
 //     }};

 //     findATicker(stockListIOI);



    


	$('.tile.regular').on('click', function(){
		$(this).toggleClass('off');
	})





})
// end docready