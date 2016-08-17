$(document).ready(function(){

//////////top search///////////////////
	$('.dropdown-content2').hide();


	$('.topSearch').click(function(){
		$('.dropdown-content2').show();
	});

	$('.dropdown-content2').mouseleave(function(){
		$('.dropdown-content2').hide();
	});

////////// ninebox/////////////////// 
$('#nineBoxContent').hide();

$('#nineBox i').click(function(){
  $('#nineBoxContent').show();
})

$('#nineBoxContent').mouseleave(function(){
    $('#nineBoxContent').hide();
  });


////////// side search///////////////////	
	
	$('#dropdown-content').hide();


	$('h2').click(function(){
		$('#dropdown-content').show();

		$('#list1').click(function(){
          var inputText = $(this).text();
          $('h2').text(inputText);
          $('#dropdown-content').hide();
       }); 

		$('#list2').click(function(){
          var inputText = $(this).text();
          $('h2').text(inputText);
          $('#dropdown-content').hide();
       }); 

       $('#list3').click(function(){
          var inputText = $(this).text();
          $('h2').text(inputText);
          $('#dropdown-content').hide();
       }); 

       $('#list4').click(function(){
          var inputText = $(this).text();
          $('h2').text(inputText);
          $('#dropdown-content').hide();
       }); 

       $('#list5').click(function(){
          var inputText = $(this).text();
          $('h2').text(inputText);
          $('#dropdown-content').hide();
       }); 

       $('#list6').click(function(){
          var inputText = $(this).text();
          $('h2').text(inputText);
          $('#dropdown-content').hide();
       }); 

       $('#list7').click(function(){
          var inputText = $(this).text();
          $('h2').text(inputText);
          $('#dropdown-content').hide();
       }); 

       $('#list8').click(function(){
          var inputText = $(this).text();
          $('h2').text(inputText);
          $('#dropdown-content').hide();
       }); 

	});

	




});

/// end of the javascripting//////////

