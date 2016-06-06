$(document).ready(function(){
	$('#readershipWrapper').hide();
	$('#touchpointWrapper').hide();
	$('#securitiesWrapper').hide();


//////readership///////
	$('.readership').click(function(event){
      event.preventDefault();
      $('#readershipWrapper').show(); 
 });

	$('#readershipWrapper .mdi-chevron-left').click(function(event){
      event.preventDefault();
      $('#readershipWrapper').hide(); 
 });


//////touchpoints///////
	$('.touchpoints').click(function(event){
      event.preventDefault();
      $('#touchpointWrapper').show(); 
 });

	$('#touchpointWrapper .mdi-chevron-left').click(function(event){
      event.preventDefault();
      $('#touchpointWrapper').hide(); 
 });


//////securities///////
	$('.securities').click(function(event){
      event.preventDefault();
      $('#securitiesWrapper').show(); 
 });

	$('#securitiesWrapper .mdi-chevron-left').click(function(event){
      event.preventDefault();
      $('#securitiesWrapper').hide(); 
 });




});
// end of the javascripting