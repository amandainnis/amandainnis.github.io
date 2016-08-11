$(document).ready(function(){

//////////top search///////////////////
	$('.dropdown-content2').hide();


	$('.topSearch').click(function(){
		$('.dropdown-content2').show();
	});

	$('.dropdown-content2').mouseleave(function(){
		$('.dropdown-content2').hide();
	});

////////// side search///////////////////	

	$('.dropdown-content').hide();


	$('h2').click(function(){
		$('.dropdown-content').show();
	});

	$('.dropdown-content').mouseleave(function(){
		$('.dropdown-content').hide();
	});



// var $dropThis = $('.ulTitle');
//   var mydefault = $('#mydefault');
//   var standard = $('#standard');
//   var deluxe = $('#deluxe');
//   var hypo = $('#hypo');
	
//   $dropThis.click(function(){
//     $('.voiceDropChoose li').show();

//        standard.click(function(){
//           var inputText = $(this).text();
//           $dropThis.text(inputText);
//           $('.voiceDropChoose li').hide();
//        }); 

//        mydefault.click(function(){
//           var inputText = $(this).text();
//           $dropThis.text(inputText);
//           $('.voiceDropChoose li').hide();
//        }); 
       
//        deluxe.click(function(){
//           var inputText = $(this).text();
//           $dropThis.text(inputText);
//           $('.voiceDropChoose li').hide();
//        }); 

//        hypo.click(function(){
//           var inputText = $(this).text();
//           $dropThis.text(inputText);
//           $('.voiceDropChoose li').hide();
//        }); 


//   });





});

/// end of the javascripting//////////

