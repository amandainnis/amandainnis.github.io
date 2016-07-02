
  fg = color(77, 68, 24);	//foreground
  b2 = color(131, 127, 68); //light hill on upper right
  // c1 = color(204, 102, 0);
  // c2 = color(0, 102, 153);

  //  from = color(255, 0, 0, 0.2 * 255);
  // to = color(0, 0, 255, 0.2 * 255);
  var lerp1;
  var lerp2;
  var lerp3;
  var lerp4;
  var lerp5;
  var lerp6;
  var lerp7;
  var lerp8;
  var lerp9;
  var lerp10;
  var lerp11;


var img;
var goatBody;
var goatTail;
var goatHead;




function preload() {
  img = loadImage('plantGroup.png');
  goatBody = loadImage('goatBody.png');
  goatHead = loadImage('goatHead.png');
  var screenshotButton = $('#screenshot');
   screenshotButton.on('click', function() {
    alert("you got it");
    save('#myParent.png');
});
}

function setup() {
  var canvasTwo = createCanvas(580, 580);
  canvasTwo.parent('myParent');
  
  
  // var hillArray = [lerp1, lerp2, lerp3, lerp4, lerp5, lerp6, lerp7, lerp8, lerp9, lerp10, lerp11];

}

function draw() {
background (135,167,170); 
noStroke();

fill(77, 68, 24);
rect(0, 85, 580, 500); //foreground

angleMode(DEGREES);
fill(101, 102, 46);  // the lighter arc on top left
arc(0, 85, 520, 100, 0, 180);  // arc (x, y, width, height, angle start, angle stop)

fill(77, 68, 24);
arc(380, 135, 320, 150, 180, 0);  // arc (x, y, width, height, angle start, angle stop)

fill(131, 127, 68);
arc(610, 95, 320, 100, 180, 0);  //light hill on upper right

// for(i = 0; i < 1; i += 0.1) {
// 	var lerp1 = lerpColor(b2, fg, per + i);}
// 	fill(lerp1);
// 	rect(450, lerpY + i * 10, 200, 10);
fg = color(77, 68, 24);	//foreground
  b2 = color(131, 127, 68); //light hill on upper right
  
  // lerp1 = lerpColor(fg, b2, .33);
  // lerpOther = lerpColor(fg, b2, .66);
  // var per = .03;
  // var lerpY = 90;
  lerp1 = lerpColor(b2, fg, .03);
  lerp2 = lerpColor(b2, fg, .13);
  lerp3 = lerpColor(b2, fg, .23);
  lerp4 = lerpColor(b2, fg, .33);
  lerp5 = lerpColor(b2, fg, .43);
  lerp6 = lerpColor(b2, fg, .53);
  lerp7 = lerpColor(b2, fg, .63);
  lerp8 = lerpColor(b2, fg, .73);
  lerp9 = lerpColor(b2, fg, .83);
  lerp10 = lerpColor(b2, fg, .93);
  lerp11 = lerpColor(b2, fg, .99);
  var hillArray = [lerp1, lerp2, lerp3, lerp4, lerp5, lerp6, lerp7, lerp8, lerp9, lerp10, lerp11];



for(i = 0; i < 11; i += 1) {
fill(hillArray[i]);
rect(450, 90 + i * 10, 200, 10);
}

fill(fg);
triangle(190, 120, 255, 90, 250, 120); //triangle to negotiate hilltop

fill(53, 48, 27);
ellipse(450, 140, 80, 120); //bush

fill(120, 91, 50);
triangle(0, 180, 580, 230, 580, 300);

fill(210, 192, 139);
// beginShape();
// vertex(136,398);
// vertex(138,369);
// vertex(152,347);
// vertex(174,353);
// vertex(185,363);
// vertex(196,369);
// vertex(220,372);
// vertex(234,366);
// vertex(259,369);
// vertex(309,373);
// vertex(353,366);
// vertex(388,363);
// vertex(415,369);
// vertex(419,373);
// vertex(431,376);
// vertex(457,375);
// vertex(457,378);
// vertex(427,382);
// vertex(432,394);
// vertex(429,428);
// vertex(426,439);
// vertex(436,469);
// vertex(432,488);
// vertex(436,509);
// vertex(434,525);
// vertex(409,527);
// vertex(412,517);
// vertex(418,507);
// vertex(417,479);
// vertex(411,480);
// vertex(406,503);
// vertex(400,517);
// vertex(400,525);
// vertex(380,526);
// vertex(373,517);
// vertex(383,513);
// vertex(386,482);
// vertex(378,470);
// vertex(371,476);//
// vertex(312,479);
// vertex(268,467);
// vertex(268,501);
// vertex(267,512);
// vertex(261,521);
// vertex(243,522);
// vertex(249,504);
// vertex(231,518);
// vertex(229,523);
// vertex(214,521);
// vertex(211,510);
// vertex(219,502);
// vertex(221,488);
// vertex(214,462);
// vertex(213,439);
// vertex(210,423);
// vertex(171,407);
// vertex(153,414);
// vertex(147,422);
// vertex(130,413);
// endShape(CLOSE);

image(goatBody, 200, 320);

stroke(210, 192, 139);
strokeWeight(12);
frameRate(10)
line(397, 335, random(417, 422), random(308, 312));
image(goatHead, 117, 265);

noFill();
stroke(255, 0, 255);
strokeWeight(2);
ellipse(207, 345, 180, 180);
ellipse(207, 345, 5, 5);

stroke(255, 0, 255);
line(207, 345, 138, 286);

stroke(255, 255, 0);  //yellow
line(207, 345, 117, 345); // FLAT horizontal radius to left

stroke(0, 255, 255); //aquamarine
line(207, 345, 207, 435);  // vertical line 




image(img, 80, 30);

}
//end of draw function