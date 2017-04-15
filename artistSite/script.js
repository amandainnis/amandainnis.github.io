$(document).ready(function(){
	$('nav').hide();
	$('#menu').on('click', function(){
		$('nav').show();
	})
	$('#navBar .mdi-close').on('click', function(){
		$('nav').hide();
	})

	$('nav').on('mouseleave', function(){
		$('nav').hide('slow');
	})

});

// end doc ready