$(document).ready(function(){

  // $('select').material_select();
	$('#readershipWrapper').hide();
	$('#touchpointWrapper').hide();
	$('#securitiesWrapper').hide();
	$('#meetingsWrapper').hide();
  $('#editContactWrapper').hide();
  $('#scheduleMeetingWrapper').hide();
  $('#sendResearchWrapper').hide();
  $('#callNotesWrapper').hide();
  $('.voiceDropChoose li').hide();
  $('.moreChoose').hide();
  $('#popUpDiv').hide();

	$('#bottomBarCall').show(); 
	$('#bottomBarEnd').hide();
	
	$('.callButton').click(function(){
		$('#bottomBarCall').hide(); 
		$('#bottomBarEnd').show();
	});

	$('.endCallButton').click(function(){
		$('#bottomBarCall').show(); 
		$('#bottomBarEnd').hide();
	});

  

  ///////////////Bottom Bar Voicedrop////////////////

  var $dropThis = $('.ulTitle');
  var mydefault = $('#mydefault');
  var standard = $('#standard');
  var deluxe = $('#deluxe');
  var hypo = $('#hypo');
	
  $dropThis.click(function(){
    $('.voiceDropChoose li').show();

       standard.click(function(){
          var inputText = $(this).text();
          $dropThis.text(inputText);
          $('.voiceDropChoose li').hide();
       }); 

       mydefault.click(function(){
          var inputText = $(this).text();
          $dropThis.text(inputText);
          $('.voiceDropChoose li').hide();
       }); 
       
       deluxe.click(function(){
          var inputText = $(this).text();
          $dropThis.text(inputText);
          $('.voiceDropChoose li').hide();
       }); 

       hypo.click(function(){
          var inputText = $(this).text();
          $dropThis.text(inputText);
          $('.voiceDropChoose li').hide();
       }); 


  });
  $('.leaveVoiceDrop').mouseover(function(){
    $('.ulTitle').addClass('blueSelection');
  });

  $('.leaveVoiceDrop').mouseleave(function(){
    $('.ulTitle').removeClass('blueSelection');
  });
  
//////readership///////
	$('.readership').click(function(event){
      event.preventDefault();
      $('#readershipWrapper').show(); 
 });

	$('#readershipWrapper .mdi-close').click(function(event){
      event.preventDefault();
      $('#readershipWrapper').hide(); 
 });


//////touchpoints///////
	$('.touchpoints').click(function(event){
      event.preventDefault();
      $('#touchpointWrapper').show(); 
 });

	$('#touchpointWrapper .mdi-close').click(function(event){
      event.preventDefault();
      $('#touchpointWrapper').hide(); 
 });


//////securities///////
	$('.securities').click(function(event){
      event.preventDefault();
      $('#securitiesWrapper').show(); 
 });

	$('#securitiesWrapper .mdi-close').click(function(event){
      event.preventDefault();
      $('#securitiesWrapper').hide(); 
 });


//////meetings///////
	$('.meetings').click(function(event){
      event.preventDefault();
      $('#meetingsWrapper').show(); 
 });

	$('#meetingsWrapper .mdi-close').click(function(event){
      event.preventDefault();
      $('#meetingsWrapper').hide(); 
 });


	



//////INVITE TO EVENTS///////
	$("#eventWrapper").hide();
	$("#searchEvent").hide();
	$("#chooseTime").hide();
   $("#confirmTime").hide();
   $("#confirmTime2").hide();
    
    $("#bottomBarEvent").hide();
    // $("#bottomBar2Event").hide();
    $("#bottomBar3Event").hide();
    $(".addMe").hide();
    
    var $bar1 = $('.bar1Event');
    var $eventCalendar = $('.mdi-calendar-check');
    var $cancelButton = $(".cancelButton");
    var $bookButton = $(".book");
    var $bar2 = $('.bar2Event');
    var $bar3 = $('.bar3Event');
    var $timeButton = $(".timeButton.active");
    // var $timeButtonGreen = $(".timeButton.active.green");
 
    var $chevron2 = $('.bar2Event.mdi-chevron-left');
    var $confirmButton = $('.confirmButton');

 
    
    $eventCalendar.click(function(){
    	$("#eventWrapper").show();
    	$("#searchEvent").show();
    	$bar1.show();
    });
    
    $cancelButton.click(function(){
    	$("#eventWrapper").hide();
    	$("#searchEvent").hide();
    	$("#chooseTime").hide(); 
    	$bar1.hide();
    	$bar2.hide();
      $bar3.hide();
    	$("#bottomBar3Event").hide();
    	$("#bottomBarEvent").hide();
    	$timeButton.removeClass( 'teal');
      $timeButton.removeClass('lightBlue');
    });
    

    $bar1.click(function(){
    	$("#eventWrapper").hide();
    	$("#searchEvent").hide();
    });

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
      $bar3.hide();
      $("#bottomBarEvent").hide();
      $("#bottomBar3Event").hide();
      $(".addMe").hide();
      // $timeButton.removeClass( 'teal');
      // $timeButton.removeClass('lightBlue');

    });

    $bar3.click(function(event){
      event.preventDefault();
      $("#searchEvent").hide();
      $("#chooseTime").show();
      $("#confirmTime").hide();
      
      $bar1.hide();
      $bar2.show();
      $bar3.hide();
      $("#bottomBarEvent").hide();
      $("#bottomBar3Event").hide();
      // $("#confirmTime2").hide();
      // $(".addMe").hide();
      // $timeButton.removeClass( 'teal');
      // $timeButton.removeClass('lightBlue');

    });
    
    $timeButton.click(function(event){
      event.preventDefault();
      $(".addMe").show();
      $("#bottomBarEvent").hide();
      $("#chooseTime").hide();
      $("#confirmTime").show();
      $("#bottomBar2Event").hide();
      $("#bottomBar3Event").show();
      $bar2.hide();
      $bar3.show();
      
      // $timeButton.removeClass( 'teal');
      // $timeButton.addClass('lightBlue'); 
      // $(this).addClass( 'teal');  
      
      

    });

    // $("#confirmMe").click(function(){
    //   $("#confirmTime").hide();
    //   $("#confirmTime2").show();
    // });

    

//////////////////// MORE /////////

$('.mdi-dots-horizontal').click(function(){
  $('.moreChoose').show();
});

    $('.moreChoose #goToEditContact').on('click', function(){
      $('#editContactWrapper').show();
      $('.moreChoose').hide();
    });

    $('.moreChoose #incomingCallPopUps').on('click', function(){
      $('#popUpDiv').show();
      $('.moreChoose').hide();
    });
//////////////////// CONTACT BAR /////////

$('#bottomBarEditContact .cancelButton').click(function(){
  $('#editContactWrapper').hide();
});

$('.editContactBar .mdi-close').click(function(){
  $('#editContactWrapper').hide();
});




//////////////////// call notes/////////

$('.mdi-border-color').click(function(){
  $('#callNotesWrapper').show();
});

$('#bottomBarCallNotes .cancelButton').click(function(){
  $('#callNotesWrapper').hide();
});

$('.callNotesBar .mdi-close').click(function(){
  $('#callNotesWrapper').hide();
});


//////////////////// send readership/////////

$('.mdi-library-books').click(function(){
  $('#sendResearchWrapper').show();
});

$('#bottomBarSendResearch .cancelButton').click(function(){
  $('#sendResearchWrapper').hide();
});

$('.sendResearchBar .mdi-close').click(function(){
  $('#sendResearchWrapper').hide();
});



//////////////////// schedule mtg/////////



$('.mdi-calendar').click(function(){
  $('#scheduleMeetingWrapper').show();
});

$('#bottomBarScheduleMeeting .cancelButton').click(function(){
  $('#scheduleMeetingWrapper').hide();
});

$('.scheduleMeetingBar .mdi-close').click(function(){
  $('#scheduleMeetingWrapper').hide();
});

 

  var selectHourTotal = $('.selectHourTotal');
  var selectHour = $('.selectHour');
  var selectHourMenu = $('#selectHourMenu li');
  var one = $('#one');
  var two = $('#two');
  var three = $('#three');
  var four = $('#four');
  var five = $('#five');
  var six = $('#six');
  var seven = $('#seven');
  var eight = $('#eight');
  var nine = $('#nine');
  var ten = $('#ten');
  var eleven = $('#eleven');
  var twelve = $('#twelve');

  selectHourMenu.hide();

  $('.datepicker').pickadate({
    selectMonths: true, // Creates a dropdown to control month
    selectYears: 15 // Creates a dropdown of 15 years to control year
  });

  // $('#dateSchedule').on('click', function(){
  //   $('.angular_calendar').show();
  // });

  // $('.angular_calendar').on('click', function(){
  //   $('.angular_calendar').hide();
  // });

  
  selectHourTotal.click(function(){
    selectHourMenu.show();

       one.click(function(){
          var inputText = $(this).text();
          selectHour.text(inputText);
          // selectHour.addClass$('.afterHour');
          selectHourMenu.hide();
       }); 

       two.click(function(){
          var inputText = $(this).text();
          selectHour.text(inputText);
          selectHourMenu.hide();
       }); 

       three.click(function(){
          var inputText = $(this).text();
          selectHour.text(inputText);
          selectHourMenu.hide();
       }); 

       four.click(function(){
          var inputText = $(this).text();
          selectHour.text(inputText);
          selectHourMenu.hide();
       }); 

       five.click(function(){
          var inputText = $(this).text();
          selectHour.text(inputText);
          selectHourMenu.hide();
       }); 

       six.click(function(){
          var inputText = $(this).text();
          selectHour.text(inputText);
          selectHourMenu.hide();
       }); 

       seven.click(function(){
          var inputText = $(this).text();
          selectHour.text(inputText);
          selectHourMenu.hide();
       }); 
       
       eight.click(function(){
          var inputText = $(this).text();
          selectHour.text(inputText);
          selectHourMenu.hide();
       }); 

       nine.click(function(){
          var inputText = $(this).text();
          selectHour.text(inputText);
          selectHourMenu.hide();
       }); 

       ten.click(function(){
          var inputText = $(this).text();
          selectHour.text(inputText);
          selectHourMenu.hide();
       }); 

       eleven.click(function(){
          var inputText = $(this).text();
          selectHour.text(inputText);
          selectHourMenu.hide();
       }); 

       twelve.click(function(){
          var inputText = $(this).text();
          selectHour.text(inputText);
          selectHourMenu.hide();
       }); 
  });



  var selectTitleTotal = $('.selectTitleTotal');
  var selectDriverTotal = $('.selectDriverTotal');
  var selectTitle = $('.selectTitle');
  var selectDriver = $('.selectDriver');
  var selectMenu = $('#selectMenu li');
  var selectDriverMenu = $('#selectDriverMenu li');
  var option1 = $('#selectMenu #option1');
  var option2 = $('#selectMenu #option2');
  var option3 = $('#selectMenu #option3');
  

  selectMenu.hide();
  
  selectTitleTotal.click(function(){
    selectMenu.show();

       option1.on('click', function(){
          var inputText = $(this).text();
          selectTitle.text(inputText);
          selectMenu.hide();
       }); 

       option2.click(function(){
          var inputText = $(this).text();
          selectTitle.text(inputText);
          selectMenu.hide();
       }); 
       
       option3.click(function(){
          var inputText = $(this).text();
          selectTitle.text(inputText);
          selectMenu.hide();
       }); 

       
  });

selectDriverMenu.hide();
  
  selectDriver.click(function(){
    selectDriverMenu.show();

       $('#optionA').on('click', function(){
          var inputText = $(this).text();
          selectDriver.text(inputText);
          selectDriverMenu.hide();
       }); 

       $('#optionB').click(function(){
          var inputText = $(this).text();
          selectDriver.text(inputText);
          selectDriverMenu.hide();
       }); 
       
       $('#optionC').click(function(){
          var inputText = $(this).text();
          selectDriver.text(inputText);
          selectDriverMenu.hide();
       }); 

       $('#optionD').click(function(){
          var inputText = $(this).text();
          selectDriver.text(inputText);
          selectDriverMenu.hide();
       }); 
  });





// $( "#screen1").on('click', function() {
//   $( "#screen1" ).animate({ "left": "+=150px" }, 1000 );
// });


// $( "#screen2").on('click', function() {
//   $( "#screen2" ).animate({ "top": "+=150px" }, 5000 );
// });



// $( "#screen1").on('click', function() {
//   $( "#screen1" ).addClass( 'rubberBand' );
//   setTimeout(
//     function(){
//       $( "#screen1" ).removeClass( 'rubberBand' );
//     }, 
//     1000
//   );
// });


// var date = new Date();


Date.prototype.mmddyyyy = function () {
  var yyyy = this.getFullYear().toString();
  var mm = (this.getMonth()+1).toString(); // getMonth() is zero-based
  var dd  = this.getDate().toString();
  return (mm[1]?mm:"0"+mm[0]) + "/" + (dd[1]?dd:"0"+dd[0]) + "/" +  yyyy; // padding
};

var date = new Date();
console.log( date.mmddyyyy() ); // Assuming you have an open console


    


$("#date").text(date.mmddyyyy());
$("#date2").text(date.mmddyyyy());


});
// end of the javascripting