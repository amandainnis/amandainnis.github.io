$(document).ready(function() {
	
        $(".hamburger").on('click', function(){
          if($('.projectMenu').css('display') === 'none'){
            $('.projectMenu').css({"display":"block"});
          }else{
            $('.projectMenu').css({"display":"none"});
          }
        });
    
});