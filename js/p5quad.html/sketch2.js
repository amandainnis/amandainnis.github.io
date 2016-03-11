var waveX;

function setup() {
  var canvasTwo= createCanvas(580, 580);
  canvasTwo.parent('myParent');
  waveX = 10;
  waveY = 30;
}

function draw() {
  background (162,252,224); //green
  noStroke();
  fill(197,188, 68); //olive
  ellipse(60, 60, 30, 30);
  text('this is olive and the ellipse is at 30, 30', 10, 10);
  
  
  fill(179,140,175); //purple
  ellipse(160, 560, 30, 30);
  text('purple ellipse 160, 560', 10, 570);
  
  
  fill(198,128,100); //brick
  ellipse(260, 60, 30, 30);
  
  
  fill(135,139,198); //blue
  ellipse(mouseX, mouseY, 30, 30);
  text( '__' + mouseX  + '__' + mouseY, mouseX + 10, mouseY + 10);
  
  	 //waveX = 10; 
    
     fill (4, 188, 177);
     ellipse(waveX, waveY + 200, 30, 30);
      //curve(10, 330, 10 + 20, 450, 10 + 80, 450, 10 + 100, 330);
	   waveX = waveX + 1;
	   waveY= waveY +0;

  	 
  
  
}