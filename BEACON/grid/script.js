$(document).ready(function(){

//////////top search///////////////////
	// $('.dropdown-content2').hide();


	$('.topSearch').click(function(){
		$('.dropdown-content2').show();
	});

	// $('.dropdown-content2').mouseleave(function(){
	// 	$('.dropdown-content2').hide();
	// });

////////// ninebox/////////////////// 
$('#nineBoxContent').hide();

$('#nineBox i').click(function(){
  $('#nineBoxContent').show();
})

$('#nineBoxContent').mouseleave(function(){
    $('#nineBoxContent').hide();
  });


////////// global threedot/////////////////// 
$('#threeDotContent').hide();

$('#threeDotWhite.mdi-dots-vertical').click(function(){
  $('#threeDotContent').show();
})

$('#threeDotContent').mouseleave(function(){
    $('#threeDotContent').hide();
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

	

//////////////filter/////////////////////

$('#clear').click(function(){
        $('.sideSearch').val("");
        // $('#filterIcon.mdi-filter').removeClass('blue');

      });


$('#sortMenuList').hide();

// $('#filterSortContainer').on('click', function(event){
//     event.preventDefault();
//     $('#filterSortContainer').animate({left: '378px'});
//     $('.sideSearch').addClass('bottomBorder');
//     // $('#filterIcon.mdi-filter').addClass('blue');

//     $('#clear').click(function(){
//         $('.sideSearch').val("");
//         $('#filterIcon.mdi-filter').removeClass('blue');

//       });

//   });

// $('#filterIcon.mdi-filter').on('click', function(){
//     $('#filterSortContainer').animate({left:'535px'});
// })

$('#sortSection').click(function(){
  $('#sortMenuList').show();


      $('#sort1').click(function(){
          var inputText = $(this).text();
          $('#AZ').text(inputText);
          $('#sortMenuList').hide();
       }); 

    $('#sort2').click(function(){
          var inputText = $(this).text();
          $('#AZ').text(inputText);
          $('#sortMenuList').hide();
       }); 

       $('#sort3').click(function(){
          var inputText = $(this).text();
          $('#AZ').text(inputText);
          $('#sortMenuList').hide();
       }); 

       $('#sort4').click(function(){
          var inputText = $(this).text();
          $('#AZ').text(inputText);
          $('#sortMenuList').hide();
       }); 

       $('#sort5').click(function(){
          var inputText = $(this).text();
          $('#AZ').text(inputText);
          $('#sortMenuList').hide();
       }); 
})
  
  $('.mdi-close').on('click', function(event){
    event.preventDefault();
    var slideoutMenuWidth = $('.slideout-menu').width();
    slideOutMenu.animate({left: '-300px'}, 350);

  });



});

/// end of the javascripting//////////

