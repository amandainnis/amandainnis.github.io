
function textFlip(sectionID){
	$('#'+ sectionID + '.buySection').on( "mouseenter", function() {
		$( '#'+ sectionID + ' .spread1' ).text(.315);
		$( '#'+ sectionID + ' .spread2' ).text(.361);}).on("mouseleave", function() {
			$( '#'+ sectionID + ' .spread1' ).text(160.315);
			$( '#'+ sectionID + ' .spread2' ).text(160.361); 
		});

}


$(document).ready(function(){
	

 	textFlip('buy400');
 	textFlip('buy200');
 	textFlip('buy100');
 	textFlip('buy50');
	

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