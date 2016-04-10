
function setup() {
  var canvasTwo = createCanvas(580, 580);
  canvasTwo.parent('myParent');
}

function draw() {
background (135,167,170); 
noStroke();

fill(77, 68, 24);
rect(0, 85, 580, 500); //foreground

angleMode(DEGREES);
fill(101, 102, 46);
arc(0, 85, 520, 100, 0, 180);  // arc (x, y, width, height, angle start, angle stop)

fill(77, 68, 24);
arc(380, 135, 320, 150, 180, 0);  // arc (x, y, width, height, angle start, angle stop)


fill(255);
beginShape();
vertex(136,398);
vertex(138,369);
vertex(152,347);
vertex(174,353);
vertex(185,363);
vertex(196,369);
vertex(220,372);
vertex(234,366);
vertex(259,369);
vertex(309,373);
vertex(353,366);
vertex(388,363);
vertex(415,369);
vertex(419,373);
vertex(431,376);
vertex(457,375);
vertex(457,378);
vertex(427,382);
vertex(432,394);
vertex(429,428);
vertex(426,439);
vertex(436,469);
vertex(432,488);
vertex(436,509);
vertex(434,525);
vertex(409,527);
vertex(412,517);
vertex(418,507);
vertex(417,479);
vertex(411,480);
vertex(406,503);
vertex(400,517);
vertex(400,525);
vertex(380,526);
vertex(373,517);
vertex(383,513);
vertex(386,482);
vertex(378,470);
vertex(371,476);//
vertex(312,479);
vertex(268,467);
vertex(268,501);
vertex(267,512);
vertex(261,521);
vertex(243,522);
vertex(249,504);
vertex(231,518);
vertex(229,523);
vertex(214,521);
vertex(211,510);
vertex(219,502);
vertex(221,488);
vertex(214,462);
vertex(213,439);
vertex(210,423);
vertex(171,407);
vertex(153,414);
vertex(147,422);
vertex(130,413);
endShape(CLOSE);

}
//end of draw function