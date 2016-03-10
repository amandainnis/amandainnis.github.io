
var r = random(255);
var g = random(255);
var b = random(255);
var canvasOne;

// var circleX = 60;

function setup() {
  var canvasOne = createCanvas(480, 480);
  canvasOne.parent('canvasOneContainer');
  stroke(0); 

  }

function draw() {
  noStroke ();	
  background(229, 255, 244);
  // Draw a triangle
  triangle(100, 300, 220, 50, 310, 300);
  fill(r, g, b, 127);
  ellipse(360, 200, 200, 200);
  fill(60, 120, 55);
  // ellipse(circleX, circleX, 200, 200);
  // circleX = circleX + 1;
  
}

// When the user clicks the mouse
function mousePressed() {
  // Check if mouse is inside the circle
  var d = dist(mouseX, mouseY, 360, 200);
  if (d < 100) {
    // Pick new random color values
    r = random(255);
    g = random(255);
    b = random(255);
  }
}

var canvasTwo;

function setup() {
  var canvasTwo = createCanvas(480, 480);
  canvasTwo.parent('canvasTwoContainer');
  stroke(0); 

  }

function draw() {
  noStroke ();	
  background(229, 255, 244);
  // Draw a triangle
  triangle(100, 300, 220, 50, 310, 300);
  fill(r, g, b, 127);
  ellipse(360, 200, 200, 200);
  fill(60, 120, 55);
  // ellipse(circleX, circleX, 200, 200);
  // circleX = circleX + 1;
  
}

// When the user clicks the mouse
function mousePressed() {
  // Check if mouse is inside the circle
  var d = dist(mouseX, mouseY, 360, 200);
  if (d < 100) {
    // Pick new random color values
    r = random(255);
    g = random(255);
    b = random(255);
  }
}




