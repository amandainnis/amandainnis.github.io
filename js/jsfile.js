$("#next").click(function(){
  if($("#slides").position().left >= -2399) {
    $("#slides").animate({left: "-=800"}, 2000);  
  }
  else {
    $("#slides").animate({left: 0}, 2000);  
  }
});