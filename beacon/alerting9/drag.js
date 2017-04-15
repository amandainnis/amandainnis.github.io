// You want to use orginal event, not jQuery one to get/set data:

// e.originalEvent

// Fixed jsFiddle

$(document).ready(function(){

  
  $(".div").on("dragover",function(e){
    e.preventDefault();
  });
  
  $("#drag1").on("dragstart",function(e){
    e.originalEvent.dataTransfer.setData("Text",e.target.id);
  });
  
  
  $(".div").on("drop",function(e){
    e.preventDefault();
    var data=e.originalEvent.dataTransfer.getData("Text");
    e.target.appendChild(document.getElementById(data));
  });
  

  
});
