// Learning Processing
// Daniel Shiffman
// http://www.learningprocessing.com

// Example 1-1: stroke and fill

function setup() {
  createCanvas(480, 400);
  stroke(0); 
  fill(21, 145, 147);
}

function draw() {
  background(255);
  rect(50,50,75,100);
  background(211, 240, 217);

noStroke();
fill(66, 173, 116);
triangle(0, 0, 100, 0, 0, 400);
triangle(0, 400, 400, 300, 400, 400);

fill(117, 89, 85);
triangle(180, 110, 70, 10, 170, 160);
triangle(230, 115, 360, 210,250, 170);

fill(117, 89, 85);
triangle(150, 380, 170, 380, 190, 160);
triangle(230, 380, 260, 340, 230, 170);

//stroke(117, 89, 85);
fill(171, 183, 14); //body
ellipse(205, 198, 100, 208);

noStroke();
fill(138, 131, 130);
ellipse(170, 88, 20, 20);//ears
ellipse(225, 88, 20, 20);
ellipse(200, 116, 64, 83); //head

fill(29, 31, 31);
ellipse(188, 108, 8, 8);//eyes
ellipse(212, 108, 8, 8);

fill(123, 180, 217);
ellipse(189, 107, 2, 2);//liteeyes
ellipse(213, 107, 2, 2);

fill(125, 81, 81);
ellipse(200, 132, 34, 37);//mouthcircle

fill(29, 31, 31);
ellipse(197, 126, 4, 5);//nostrils
ellipse(205, 126, 4, 5);

fill(245, 235, 39);//smile
arc(200, 135, 30, 10, 20, 195);

stroke(155, 214, 88);
fill(245, 235, 39);//banana
arc(350, 199, 70, 25, 20, 195);
}