// A $( document ).ready() block.
$( document ).ready(function() {

	$('.well').css('color','purple');
	//$('.well').hide();



	


	$('.lings-btn').click(function(){
		var flip = 0;

		$( ".carousel" ).toggle( flip++ % 2 === 0 )
	});



    console.log( "YES IT WORKS" );
});
