
// function setup() {
//   noStroke();

//   var green = color(0,200,0);
//   var yellow = color(200,200,0);
  
//   var gradientSteps = 20;//how detailed will the gradient be
//   var gradientStripWidth = width/gradientSteps;//compute how many strips of the same width we'll need to fill the sketch
  
//   for(var i = 0; i < gradientSteps; i++){//for each gradient strip
//     var t = map(i,0,gradientSteps,0.0,1.0);//compute i mapped from 0-gradientSteps to 0.0->1.0
//     //this value will plug into lerpColor which does the colour interpolation for you
//     var interpolatedColor = lerpColor(green,yellow,t);
//     //finally, use the colour and draw some boxes 
//     fill(interpolatedColor);
//     rect(i*gradientStripWidth,0,gradientStripWidth,height);
//   } 
// }




var otherBall = {
  x: 300,
  y: 200,
  xspeed: 4,
  yspeed: -3
}

// var Y_AXIS = 1;
var X_AXIS = 2;
var b1, b2, c1, c2;

function setup() {
  var canvasTwo = createCanvas(580, 580);
  canvasTwo.parent('myParent'); 
  fill(150);
 
  ellipse(otherBall.x, otherBall.y, 20, 20);

  b1 = color(255, 160, 100);
  b2 = color(160, 255, 70);
  c1 = color(204, 102, 0);
  c2 = color(0, 102, 153);
  //  from = color(255, 0, 0, 0.2 * 255);
  // to = color(0, 0, 255, 0.2 * 255);
  lerp1 = lerpColor(b1, c1, .33);
  lerp2 = lerpColor(c2, b2, .66);

  //noLoop();
 
}

function draw() {
// fill(r, 0, g);
  // ellipse(otherBall.x, otherBall.y, 20, 20);
  // if(otherBall.x > width || otherBall.x < 0) {
  //   otherBall.xspeed = otherBall.xspeed * -1;
  // }
  // if (otherBall.y > height || otherBall.y < 0) {
  //   otherBall.yspeed = otherBall.yspeed * -1;
  // }
  // otherBall.x = otherBall.x + otherBall.xspeed;
  // otherBall.y = otherBall.y + otherBall.yspeed;
background(lerp1);
  move();
  bounce();
  display();

 
lollipop(150, 200, 16, 122, 36);
setGradient(23, 300, 300, 200, b1, b2, X_AXIS);
  

  move();
  bounce();
  display();

 fill(255, 0, 255); 


fill(150);
lollipop(100, 100, 20, 150, 50);
lollipop(150, 200, 16, 122, 36);


push(); //start a new drawing state
  translate(width*0.5, height*0.5);
  rotate(frameCount / 50.0);
  star(0, 0, 60, 120, 8);  //star(x center, y center, inner ring radius, outer ring radius, # of spokes)
  pop(); //restore previous state
//rect(x,y,w,h,[tl],[tr],[br],[bl]);
// fill(0);
// rect(300, 100, 340, 170, 40, 20, 10, 15);

} //end of draw function






function setGradient(x, y, w, h, c1, c2, axis) {

  noFill();
  for (var i = x; i <= x+w; i++) {
      var inter = map(i, x, x+w, 0, 1);
      var c = lerpColor(c1, c2, inter);
      stroke(c);
      line(i, y, i, y+h);
    }
  }



noStroke();
function lollipop(x, y, w, h, diameter) {
  fill(0, 200, 255);
  rect(x-10, y, w, h);

  fill(255, 0, 200);
  ellipse(x, y, diameter, diameter);
}




function display(){
  fill(150, 0, 150);
  ellipse(otherBall.x, otherBall.y, 20, 20);
 }
 
 function move() {
  otherBall.x = otherBall.x + otherBall.xspeed;
  otherBall.y = otherBall.y + otherBall.yspeed;

 }
 
 function bounce(){
  if(otherBall.x > width || otherBall.x < 0) {
     otherBall.xspeed = otherBall.xspeed * -1;
  }
  if (otherBall.y > height || otherBall.y < 0) {
    otherBall.yspeed = otherBall.yspeed * -1;
   }

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
