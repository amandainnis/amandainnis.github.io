$(document).ready(function(){
	$('#readershipWrapper').hide();
	$('#touchpointWrapper').hide();
	$('#securitiesWrapper').hide();
	$('#meetingsWrapper').hide();

	$('#bottomBarCall').show(); 
	$('#bottomBarEnd').hide();
	
	$('#bottomBarCall').click(function(){
		$('#bottomBarCall').hide(); 
		$('#bottomBarEnd').show();
	});

	$('#bottomBarEnd').click(function(){
		$('#bottomBarCall').show(); 
		$('#bottomBarEnd').hide();
	});
	

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


//////meetings///////
	$('.meetings').click(function(event){
      event.preventDefault();
      $('#meetingsWrapper').show(); 
 });

	$('#meetingsWrapper .mdi-chevron-left').click(function(event){
      event.preventDefault();
      $('#meetingsWrapper').hide(); 
 });


	



//////INVITE TO EVENTS///////
	$("#eventWrapper").hide();
	$("#searchEvent").hide();
	$("#chooseTime").hide();
    
    $("#bottomBar2Event").hide();
    $(".addMe").hide();
    
    var $bar1 = $('.bar1Event');
    var $eventCalendar = $('.mdi-calendar-check');
    var $cancelButton = $(".cancelButton");
    var $bookButton = $(".book");
    var $bar2 = $('.bar2Event');
    var $timeButton = $(".timeButton.active");
    // var $timeButtonGreen = $(".timeButton.active.green");
    var $bar3 = $('.bar3');
    var $chevron2 = $('.bar2Event.mdi-chevron-left');
    var $confirmButton = $('.confirmButton');

  
    
    $eventCalendar.click(function(){
    	$("#eventWrapper").show();
    	$("#searchEvent").show();
    	$bar1.show();
    })
    
    $cancelButton.click(function(){
    	$("#eventWrapper").hide();
    	$("#searchEvent").hide();
    	$("#chooseTime").hide(); 
    	$bar1.hide();
    	$bar2.hide();
    	$("#bottomBar2Event").hide();
    	$timeButton.removeClass( 'teal');
    })
    

    $bar1.click(function(){
    	$("#eventWrapper").hide();
    	$("#searchEvent").hide();
    })

    $bookButton.click(function(event){
      event.preventDefault();
      $("#searchEvent").hide();
      $("#chooseTime").show(); 
      
      $bar1.hide();
      $bar2.show();
      $("#bottomBarEvent").show();
      // $("#bottomBar2Event").show();

    });

//////////////SCREEN TWO//////////////////

    $bar2.click(function(event){
      event.preventDefault();
      $("#searchEvent").show();
      $("#chooseTime").hide();
      
      $bar1.show();
      $bar2.hide();
      $("#bottomBar2Event").hide();
      $(".addMe").hide();
      $("#bottomBarEvent").show();
      $timeButton.removeClass( 'teal');

    });
    
    $timeButton.click(function(event){
      event.preventDefault();
      $(".addMe").show();
      $("#bottomBarEvent").hide();
      $("#bottomBar2Event").show();
      $timeButton.removeClass( 'teal');
      $(this).addClass( 'teal');

      
  });










});
// end of the javascripting