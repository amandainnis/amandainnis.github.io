$(document).ready(function() {
    $("#chooseTime").hide();
    
    $("#bottomBar2").hide();
    $(".addMe").hide();
    
    var $bar1 = $('.bar1');
    var $bookButton = $(".book");
    var $bar2 = $('.bar2');
    var $timeButton = $(".timeButton.active");
    // var $timeButtonGreen = $(".timeButton.active.green");
    var $bar3 = $('.bar3');
    var $chevron2 = $('.bar2.mdi-chevron-left');
    var $confirmButton = $('.confirmButton');

  
    

    
    $bookButton.click(function(event){
      event.preventDefault();
      $("#searchEvent").hide();
      $("#chooseTime").show(); 
      
      $bar1.hide();
      $bar2.show();

    });

//////////////SCREEN TWO//////////////////

    $bar2.click(function(event){
      event.preventDefault();
      $("#searchEvent").show();
      $("#chooseTime").hide();
      
      $bar1.show();
      $bar2.hide();
      $("#bottomBar2").hide();
      $(".addMe").hide();
      $("#bottomBar").show();
      $timeButton.removeClass( 'green');

    });
    
    $timeButton.click(function(event){
      event.preventDefault();
      $(".addMe").show();
      $("#bottomBar").hide();
      $("#bottomBar2").show();
      $timeButton.removeClass( 'green');
      $(this).addClass( 'green');

      
  });

    // $confirmButton.mouseover(function(){
    //   $timeButton.addClass( 'lightBlue');
    //   // $timeButtonGreen.addClass( 'green');
    // });

    // $confirmButton.mouseover(function(){
    //   var flagbutton = $("$timeButton").hasClass('green');
    //   console.log(flagbutton)
    //   if (flagbutton == false) {
    //     console.log("if false condition")

    //   }

    //   else {
    //     console.log("if false condition")

    //   }

    //   if (!$timeButton.hasClass('green')) {
    //   $timeButton.addClass( 'lightBlue');
    // }
    // });

// $confirmButton.mouseleave(function(){
//   $timeButton.removeClass( 'lightBlue');
// })




});




