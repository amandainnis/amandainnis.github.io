
function textFlip(sectionID, cost1, cost2, price1, price2){
	$('#'+ sectionID + '.buySection').on( "mouseenter", function() {
		$( '#'+ sectionID + ' .spread1' ).text(cost1);
		$( '#'+ sectionID + ' .spread2' ).text(cost2);}).on("mouseleave", function() {
			$( '#'+ sectionID + ' .spread1' ).text(price1);
			$( '#'+ sectionID + ' .spread2' ).text(price2); 
		});

}




$(document).ready(function(){

	$('#popUpBackground').hide();
	$('#popUp2').hide();
	$('#popUpUrgencyDropDown li').hide();
	$('#wrapperRestrictions').hide();


	$('#TCA').click( function(){
		$('#wrapperRestrictions').hide();

	})

	$('#Restrictions').click( function(){
		$('#wrapperRestrictions').show();

	})


	$('#sellSideVersion').on('click', function(){
		console.log('yo yo');
		$('#buySellDoorway').text('S');
		$('#buySellDoorway').addClass('redText');
		$('.buySection').removeClass('textGreen');
		// $('#buy200').removeClass('textWhite');
		$('.buySection.selected .band').removeClass('bandWhite');
		$('.buySection').removeClass('selected');
		$('.sellSection').addClass('redText');
		$('#sell200').addClass('selected');
		$('.sellSection.selected .band').addClass('bandWhite');
		$('#row200 .quantitySection').addClass('sellRed');


	})
	

	$('#buySideVersion').on('click', function(){
		console.log('yo Buy');
		$('#buySellDoorway').text('B');
		$('#buySellDoorway').removeClass('redText');
		$('.buySection').addClass('textGreen');
		$('#buy200').addClass('selected');
		$('#buy200 .band').addClass('bandWhite');
		$('.sellSection').removeClass('redText');
		$('.sellSection.selected .band').removeClass('bandWhite');
		$('#sell200').removeClass('selected');
		$('#row200 .quantitySection').removeClass('sellRed');
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







	$('#doneButton').on('click', function(){
		$('#popUpBackground').hide();
		$('#popUp1').hide();
		$('#popUp2').hide();
	});
	

	$('#pricerIconButton').on('click', function(){alert("This is reserved for the pricer tool")});
	
	

	// $('#buy400.buySection').on( "mouseenter", function() {
	// 	$( '#buy400 .spread1' ).text(.315);
	// 	$( '#buy400 .spread2' ).text(.361);}).on("mouseleave", function() {
	// 		$( '#buy400 .spread1' ).text(160.315);
	// 		$( '#buy400 .spread2' ).text(160.361); 
	// 	});

	// $('#buy200.buySection').on( "mouseenter", function() {
	// 	$( '#buy200 .spread1' ).text(.315);
	// 	$( '#buy200 .spread2' ).text(.361);}).on("mouseleave", function() {
	// 		$( '#buy200 .spread1' ).text(160.315);
	// 		$( '#buy200 .spread2' ).text(160.361); 
	// 	});

	// $('#buy100.buySection').on( "mouseenter", function() {
	// 	$( '#buy100 .spread1' ).text(.315);
	// 	$( '#buy100 .spread2' ).text(.361);}).on("mouseleave", function() {
	// 		$( '#buy100 .spread1' ).text(160.315);
	// 		$( '#buy100 .spread2' ).text(160.361); 
	// 	});

	// $('#buy50.buySection').on( "mouseenter", function() {
	// 	$( '#buy50 .spread1' ).text(.315);
	// 	$( '#buy50 .spread2' ).text(.361);}).on("mouseleave", function() {
	// 		$( '#buy50 .spread1' ).text(160.315);
	// 		$( '#buy50 .spread2' ).text(160.361); 
	// 	});
		


})
// end docready