
var speed;
var ballX;
var squareX;
var on;



function setup() {
  var canvasTwo = createCanvas(580, 580);
  canvasTwo.parent('myParent'); 
  speed = 1;
  squareX = 0;
  var on = false;
  // var c1 = fill(255, r, 100);
  // var c2 = fill(255);
  

 
}



function draw() {
  noStroke();
  var r = map(squareX, 0, width, 140, 100);
  var g = map(squareX, 0, width, 100, 140);
  if(on) {
  	background(r, g, 100);
  } else {background(200, r, 170);}

  stroke(255);
  strokeWeight(4);
  noFill();
  rect(100, 200, 20, 20);
  noStroke();
  if(mouseX > 100 && mouseX < 120 && mouseY > 200 && mouseY < 220) {
  	fill(255, 0, 200);
  	rect(100, 200, 20, 20);
  }


  var g = map(squareX, 0, width, 0, 150);
  // fill(190, g, 170);
  fill(111, 87, 93);  //now the back ellipse is dark pink gray


  stroke(100, 90, 100, 150);
  strokeWeight(3);
  ellipse(290, 290, 240, 240);

  noStroke();
  fill(38, 24, 21); //dark color
  quad(243, 179, 290, 190, 260, 220, 220, 220); //upper left facet
  fill(255, 118, 143); //brighter pink red
  quad(337, 179, 290, 190, 320, 220, 360, 220);  //upper right facet
  quad(243, 400, 290, 390, 260, 360, 220, 360);  // bottom left facet
  quad(337, 400, 290, 390, 320, 360, 360, 360);  // bottom right facet
  quad(180, 243, 190, 290, 220, 260, 220, 220);	//top middle left facet
  quad(400, 243, 390, 290, 360, 260, 360, 220); //top middle right facet
  fill(223, 153, 165); //medium pink
  quad(180, 336, 190, 290, 220, 320, 220, 360); //bottom middle left facet
  quad(400, 336, 390, 290, 360, 320, 360, 360); //bottom middle right facet

  

   
 //   beginShape();
	// vertex(290,182); //center top
	// vertex(200,222); // left top
	// vertex(185,285); //far left middle
	// vertex(200,350); //left bottom
	// vertex(290,395); //center bottom
	// vertex(380,350); //right bottom
	// vertex(395,285); //far right middle
	// vertex(380,222); //right top
	// endShape(CLOSE);

	
  
  fill (255, 255, 255);
  // fill(255, 118, 143); //brighter pink red
  
  push(); //start a new drawing state
  translate(width*0.5, height*0.5);
  rotate(frameCount / 50.0);
  star(0, 0, 60, 120, 8);  //star(x center, y center, inner ring radius, outer ring radius, # of spokes)
  pop(); //restore previous state

  
 
  // stroke(255, 255, 255, 150);
  stroke(100, 90, 100, 150);
  strokeWeight(1);
  noFill();
  // fill('rgba(120, 120, 120, .65)'); //lighter gray
  // quad(290, 250, 330, 290, 290, 330, 250, 290);
  quad(290, 190, 390, 290, 290, 390, 190, 290);
  rect(220, 220, 140, 140);
  
  line(290, 171, 290, 409); //vertical line from quad
  line(171, 290, 409, 290); //horizontal line from quad
  line(206, 206, 374, 374); //forward slash line from rect
  // line(220, 220, 360, 360);
  line(206, 374, 374, 206); //backward slash line from rect
  // line(220, 360, 360, 220);

  
  line(243, 179, 290, 190); //top left dot to quad
  line(243, 179, 220, 220); //top left dot to rect

  line(337, 179, 290, 190);	//top right dot to quad
  line(337, 179, 360, 220); //top right dot to rect

  line(243, 400, 290, 390); //bottom left dot to quad
  line(243, 400, 220, 360); //bottom left dot to rect

  line(337, 400, 290, 390);	//bottom right dot to quad
  line(337, 400, 360, 360); //bottom right dot to rect


  line(180, 243, 190, 290); //top middle left dot to quad
  line(180, 243, 220, 220); //top middle left dot to rect

  line(400, 243, 390, 290); //top middle right dot to quad
  line(400, 243, 360, 220); //top middle right dot to rect

  line(180, 336, 190, 290); //bottom middle left dot to quad
  line(180, 336, 220, 360); //bottom middle left dot to rect

  line(400, 336, 390, 290); //bottom middle right dot to quad
  line(400, 336, 360, 360); //bottom middle right dot to rect


  noStroke();
  
  

  fill(random(255), 238, 227);  // little dots on the diamond
  // frameRate(10);
  ellipse(243, 179, 10, 10);
  ellipse(337, 179, 10, 10);
  ellipse(243, 400, 10, 10);
  ellipse(337, 400, 10, 10);

  fill(232, r, 106);
  ellipse(180, 243, 10, 10);
  ellipse(400, 243, 10, 10);
  ellipse(180, 336, 10, 10);
  ellipse(400, 336, 10, 10);//

  
  fill(255);
  triangle(243, 179, 290, 190, 290, 171);
  fill(80, 21, 16, 90); //dark red gray
  triangle(243, 179, 220, 220, 206, 206);
  fill(255, 255, 255); //white
  triangle(180, 243, 220, 220, 206, 206);
  fill(192, 126, 136); //medium pink
  triangle(180, 243, 190, 290, 171, 290);
  fill(38, 24, 21); //dark color
  triangle(180, 336, 190, 290, 171, 290);
  fill(130, 106, 110); //a mid lite gray
  triangle(180, 336, 206, 374, 220, 360);
  fill(255);
  triangle(243, 400, 206, 374, 220, 360);


//upper facets

  fill(255, 118, 143); //brighter pink red
  quad(290, 290, 290, 220, 260, 220, 240, 240);
  fill(111, 87, 93);  //darker gray
  quad(240, 240, 220, 260, 220, 290, 290, 290);
  fill(38, 21, 22); //dark color
  quad(220, 320, 220, 290, 290, 290, 240, 340);
  fill(192, 126, 136); //medium pink
  quad(290, 290, 240, 340, 260, 360, 290, 360);

  stroke(130, 106, 110); //a mid lite gray
  strokeWeight(3);
  line(220, 320, 289, 290);  //white line on dark facet

  stroke(221, 64, 83); //bright red
  line(290, 290, 260, 220);



  fill(221, 64, 83, 40); //bright red
  strokeWeight(2);
  ellipse(290, 290, 240, 240);


  noStroke();
  fill(255, 255, 255); //white
  triangle(180, 243, 220, 220, 206, 206);

  
  fill(255, r, 100);
  ellipse(squareX, 500, 20, 20); //moving ball

  squareX = squareX + speed;

  if (squareX < 0) {
  	speed = 1;
  }
 else if (squareX > width) {
 	speed = -1;
 };
  
 

}
  //  end of draw function
 




 //BOOOOOOLEAN VARIABLES

  function mousePressed(evt) {
  	evt.preventDefault();       //this prevents the html image from being highlighted
  	on = !on;					//this is for toggling off and on
  	// if (on) {
  	// 	on = false;
  	// } else {
  	// 	on = true;
  	// }
  }


  function star(x, y, radius1, radius2, npoints) {
  var angle = TWO_PI / npoints;
  var halfAngle = angle/2.0;
  beginShape();
  for (var a = 0; a < TWO_PI; a += angle) {
    var sx = x + cos(a) * radius2;
    var sy = y + sin(a) * radius2;
    vertex(sx, sy);
    sx = x + cos(a+halfAngle) * radius1;
    sy = y + sin(a+halfAngle) * radius1;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}

//angleMode(DEGREES); 
//arc (x, y, width, height, angle start, angle stop)