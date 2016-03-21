var color = {
	r : random(255),
	g : random(255),
	b : random(255)
};

//var r = random(255);
//var g = random(255);
//var b = random(255);
var canvasOne;
var waveX;
var speed;
// var circleX = 60;

function setup() {
  var canvasOne = createCanvas(480, 480);
  canvasOne.parent('canvasOneContainer');
  stroke(0); 
  waveX = 10;
  speed = 1;
  color.r = 155;
  color.b = 200;
  }

function draw() {
  noStroke ();	
  background(waveX, 255, 244, 155);
  // Draw a triangle
  fill(229, 225, 244);
  triangle(37, 456, 217, 50, 455, 456); //217, 50 is apex

  fill(205, 200, 223);
  triangle(77, 456, 218, 53, 455, 456);

  fill(171, 165, 195);
  triangle(277, 456, 218, 53, 455, 456);

  
 //color.r = map(waveX, 0, width, 0, 255);   
 //color.b = map(waveX, 0, width, 0, 255); //this changes it so the moon color changes without click
  
  stroke(color.r, waveX, color.b);
  fill(color.r, waveX, color.b, 127);
  ellipse(360, 200, 200, 200);

     fill (waveX, 188, 177);//little ball
     stroke(waveX, 188, 177); 
 	 ellipse(waveX, 430, 30, 30);
      //curve(10, 330, 10 + 20, 450, 10 + 80, 450, 10 + 100, 330);
	 
	 //bezier(waveX, 330, waveX + 20, 450, waveX + 80, 450, waveX + 100, 330);  CURVE CANT ANIMATE
	  
	 if (waveX > width) {
	 speed = -1;}

	 else if (waveX < 0) {  //the VARIABLE SPEED needs to change for the DURATION of backwards and forwards
	 	speed = 1;}
	 
	 waveX = waveX + speed;   //REPLACES waveX = waveX + 1;

	

	}//end of draw function



// When the user clicks the mouse
function mousePressed(evt) {
  evt.preventDefault();
  // Check if mouse is inside the circle
  var d = dist(mouseX, mouseY, 360, 200);
  if (d < 100) {
    // Pick new random color values
    color.r = random(255);
    color.g = random(255);
   	color.b = random(255);
  }



}
//end of mousepresses function





