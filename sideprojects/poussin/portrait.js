// /usr/local/bin
// http://localhost:8080/

// var img;  // Declare variable 'img'.
var eyeX;
speed = 1;

function setup() {
  var canvasThree = createCanvas(180, 200);
  canvasThree.parent('portParent');
  eyeX = 78;
  // img = loadImage("poussinPortrait.jpg");  // Load the image
}

function draw() {
  // Displays the image at its actual size at point (0,0)
  // image(img, 0, 0);
  // Displays the image at point (0, height/2) at half size
  // image(img, 0, height/2, img.width/2, img.height/2);
  noStroke();
  fill(255);
  ellipse(81, 85, 13, 7);
  fill(0);
  ellipse(eyeX, 85, 5, 5);

frameRate(10);

eyeX = eyeX + speed;

  if (eyeX < 79) {
  	speed = 1;
  }
 else if (eyeX > 84) {
 	speed = -1;
 };


}
//end of draw function