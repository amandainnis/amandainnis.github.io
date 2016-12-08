
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
	

 	textFlip('buy400', .345, .365, 160.345, 160.365);
 	textFlip('buy200', .335, .364, 160.335, 160.364);
 	textFlip('buy100', .325, .363, 160.325, 160.363);
 	textFlip('buy50', .315, .361, 160.315, 160.361);


 	$('#orderID').on( "mouseenter", function() {
		$( '#orderIDHover' ).show();
		}).on("mouseleave", function() {
			$( '#orderIDHover' ).hide();
	});


	$('#acceptButton').on('click', function(){$('#popUpBackground').show();});

	$('#popUpClose').on('click', function(){$('#popUpBackground').hide();});

	

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