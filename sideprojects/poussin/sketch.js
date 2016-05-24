//puts vars here

var horseX;
var speed;
var cloudX;
var r = 0;
var b = 255;



// var img;
// function preload() {
//   img = loadImage('ovalblur.png');
// }

function setup() {
  var canvasTwo = createCanvas(580, 580);
  canvasTwo.parent('myParent');
  horseX = 480;
  speed = -1;
  cloudX = 0;

}

function draw() {
 // background (213,228,231); 
  //light slate blue
  noStroke();

 
  fill(122, 141, 144);
  quad(300, 180, 400, 80, 420, 85, 500, 180);
  //triangle(300, 180, 400, 80, 500, 180);  //mountain
  fill(149, 159, 152);
  triangle(300, 180, 400, 80, 350, 180);  //light side of mountain

  fill(159, 144, 97);
  rect (0, 200, 580, 380);  //foreground

  fill(144, 180, 179);
  ellipse(300, 310, 550, 120);
  ellipse(300, 320, 550, 120);//lake

  


  

  fill(228, 227, 190);
  ellipse(250, 55, 30, 40);  //cloud
  ellipse(270, 55, 30, 30);
  ellipse(255, 60, 80, 30);
  
  

  

  fill(116, 124, 114);  //below mountain
  rect(0, 180, 600, 60);

  // fill(116, 114, 114);
  // rect(0, 180, 600, 20);

  fill(155, 133, 84);  //hill
  triangle(290, 225, 450, 175, 550, 225);

  fill(71, 77, 43);  //far away trees
  for(treeX = 30; treeX < width; treeX +=40) {
  ellipse(treeX, 200, 30, 60);};
  
  rect(0, 230, 600, 10); //background grren bar

  for(treeX = 30; treeX < width; treeX +=40) {
  ellipse(treeX, 280, 30, 60);};
  

  //fill(115, 121, 103); //shadow building
  //rect(230, 180, 60, 60);
  
 // fill(132, 134, 109);
  rect(180, 180, 80, 60);

  fill(197, 175, 115); //yellow bright building
  rect(80, 180, 180, 60);
   //REFLECTION
   rect(80, 250, 180, 50);


  fill(190, 170, 113);  // slightly different yellow
  rect(140, 160, 60, 80); //higher part of building

  //REFLECTION
  rect(140, 250, 60, 80);

  fill(148, 145, 118);  //shadow roof color
  //rect(80, 170, 210, 10);
  quad(80, 180, 100, 160, 120, 160, 140, 180);
  quad(140, 160, 160, 140, 180, 140, 200, 160);
  quad(200, 180, 220, 160, 240, 160, 260, 180);


  //REFLECTION
  quad(80, 300, 100, 320, 120, 320, 140, 300);
  quad(140, 330, 160, 350, 180, 350, 200, 330);
  quad(200, 300, 220, 320, 240, 320, 260, 300);
  //quad(140, 160, 160, 140, 180, 140, 200, 160);
  //quad(200, 180, 220, 160, 240, 160, 260, 180);


//windows go here
  for (windowY = 190; windowY < 240; windowY += 25) {
  for(windowX = 10; windowX < 180; windowX +=30) {
  rect(80 + windowX, windowY, 8, 12);}
  };


  rect(150, 165, 8, 12);
  rect(180, 165, 8, 12);

//REFLECTION
  for (windowY = 250; windowY < 300; windowY += 25) {
  for(windowX = 10; windowX < 180; windowX +=30) {
  rect(80 + windowX, windowY, 8, 12);}
  };

  rect(150, 305, 8, 12);
  rect(180, 305, 8, 12);

  fill(122, 128, 100);  //bushes green
  angleMode(DEGREES);
  for(bushX = 0; bushX < width + 20; bushX +=20) {
 	 arc(bushX, 245, 20, 20, 180, 0); } // arc (x, y, width, height, angle start, angle stop)


   

  fill(159, 144, 97);  //foreground paste
  rect(0, 250, 580, 10); 
  triangle(0, 260, 210, 260, 0, 300);
  rect(0, 280, 25, 60);
  triangle(width, 260, width - 210, 260, width, 300);



  fill(115, 118, 80);  //bushes green
  angleMode(DEGREES);
  for(bushX = 0; bushX < width + 20; bushX +=20) {
   arc(bushX + 5, 255, 20, 20, 180, 0); } // arc (x, y, width, height, angle start, angle stop)


   fill(115, 118, 47);  //bushes green
  angleMode(DEGREES);
  for(bushX = 0; bushX < 170; bushX +=20) {
   arc(bushX + 3, 265, 20, 20, 180, 0); } // arc (x, y, width, height, angle start, angle stop)
   for(bushX = 390; bushX < width + 20; bushX +=20) {
   arc(bushX + 3, 265, 20, 20, 180, 0); } // arc (x, y, width, height, angle start, angle stop)

   // fill(115, 110, 47);
   // for(bushX = 0; bushX < 110; bushX +=20) {
   // arc(bushX + 1, 275, 20, 20, 180, 0); } 
   for(bushX = 440; bushX < width + 20; bushX +=20) {
   arc(bushX + 1, 275, 20, 20, 180, 0); } 

   // strokeWeight(3);
   // stroke(115, 110, 47);
   // line(19, 294, 210, 260);
   // line(213, 259, 380, 259);

   noStroke();
   angleMode(DEGREES);
   arc(22, 297, 20, 20, 170, 348);
   arc(43, 292, 20, 20, 170, 348);  //angle bushes along lake
   arc(65, 288, 20, 20, 170, 348);
   arc(87, 283, 20, 20, 170, 348);
   arc(108, 279, 20, 20, 170, 348);
   arc(130, 275, 20, 20, 170, 348);  // arc (x, y, width, height, angle start, angle stop)
   arc(153, 271, 20, 20, 170, 348);
   arc(176, 266, 20, 18, 170, 348);
   arc(197, 262, 20, 18, 170, 348);

   for(bushX = 214; bushX < 390; bushX +=16) {
    arc(bushX, 260, 18, 16, 180, 0);} 
   


   fill(117, 95, 47);
  // for(bushX = 0; bushX < 80; bushX +=20) {
  //  arc(bushX + 1, 285, 20, 20, 180, 0); } // arc (x, y, width, height, angle start, angle stop)
   for(bushX = 490; bushX < width + 20; bushX +=20) {
   arc(bushX + 1, 285, 20, 20, 180, 0); } // arc (x, y, width, height, angle start, angle stop)


   //bezier(x1,y1,x2,y2,x3,y3,x4,y4)
  noFill();
  stroke(117, 95, 47);
  strokeWeight(5); 
  bezier(0, 354, 488, 452, 250, 514, width, 500);

   
// beginShape();
// vertex(105,362);
// vertex(20,402);
// vertex(17,441);
// vertex(118,460);
// vertex(161,447);
// vertex(183,437);
// vertex(150,377);
// endShape(CLOSE);
  
  


//   // Draw the image at its default size
// image(getImage("cute/CharacterBoy"), 100, 100);

// // Draw a smaller image
// image(getImage("cute/CharacterBoy"), 100, 100, 40, 80);
  //grass
stroke(132, 122, 61);
strokeWeight(1);
for (var grassY = 0; grassY < 200; grassY +=10) {
for (var grassX =0; grassX < width; grassX +=5) {
line(0 + grassX, 400 + grassY, 3 + grassX, 390 +grassY);
}};

  noStroke();

var r = map(cloudX, 0, width, 100, 140);
var b = map(cloudX, 0, width, 85, 50);
fill(100, r, b);

  //rect(x,y,w,h,[tl],[tr],[br],[bl])

  rect(400, 382, 90, 40, 82, 64, 10, 10);
  
  rect(20, 362, 90, 80, 62, 46, 30, 30);  //big old bush
  ellipse(45, 377, 40, 30);
  ellipse(55, 367, 40, 30);
  ellipse(75, 370, 50, 40);
  ellipse(93, 387, 40, 30);
  ellipse(25, 402, 30, 50);
  ellipse(99, 410, 30, 50);

  var r = map(cloudX, 0, width, 100, 140);
  var b = map(cloudX, 0, width, 85, 50);
  fill(120, r, b);  
  
  // for (leafY = 362; leafY < 462; leafY += 7) {
  // for(leafX = 40; leafX < 110; leafX += 7) {
  // ellipse(leafX, leafY, 5, 5);}
  
  // };


  // for(leafX = 20; leafX < 130; leafX += 5) {   //this will make things go in a diagonal
  //   ellipse(leafX, 382 + leafX, 5, 5);
  // };

 
  fill(62, 46, 24);
  rect(42 + horseX, 456, 33, 26, 22);//body 1
  rect(60 + horseX, 458, 47, 26, 22); //body 2
  

  //rect(42 + horseX, 356, 66, 26, 22);//body with round edges
  ellipse(101 + horseX, 475, 25, 33); //butt
  

  ellipse(35 + horseX, 447, 17, 16); //big head
  triangle(39 + horseX, 441, 28 + horseX, 435, 30 + horseX, 441); //ear
  quad(59 + horseX, 456, 42 + horseX, 442, 39 + horseX, 456, 43 + horseX, 465); //neck
  triangle(45+ horseX, 445, 83 + horseX, 464, 52 + horseX, 475); //2cd neck
 
  quad(45 + horseX, 449, 27 + horseX, 444, 21 + horseX, 461, 28 + horseX, 466);  //face part
  ellipse(25 + horseX, 462, 9, 9);//mouth
  
  
  quad(45 + horseX, 471, 30 + horseX, 483, 38 + horseX, 485, 55 + horseX, 477); //left upper leg
  quad(30 + horseX, 483, 32 + horseX, 499, 38 + horseX, 499, 37 + horseX, 483);//left fore leg
  quad(37 + horseX, 508, 32 + horseX, 499, 39 + horseX, 499, 43 + horseX, 504); //hoof 

  quad(57 + horseX, 477, 42 + horseX, 489, 50 + horseX, 491, 67 + horseX, 482); //2cdleft upper leg
  quad(42 + horseX, 489, 46 + horseX, 505, 52 + horseX, 505, 49 + horseX, 489);//2cd left fore leg
  quad(51 + horseX, 511, 45 + horseX, 502, 52 + horseX, 502, 57 + horseX, 507); //2cd hoof 


  fill(42, 46, 28);

  quad(86 + horseX, 484, 93 + horseX, 484, 107 + horseX, 495, 97 + horseX, 500); // right upperleg
  quad(101 + horseX, 490, 92 + horseX, 512, 97 + horseX, 514, 108 + horseX, 494); // right fore leg
  quad(98 + horseX, 519, 98 + horseX, 510, 93 + horseX, 510, 90 + horseX, 517); //hoof

  
  fill(62, 46, 24);
 
  quad(97 + horseX, 494, 95 + horseX, 486, 105 + horseX, 484, 107 + horseX, 494);
  quad(96 + horseX, 493, 109 + horseX, 483, 126 + horseX, 495, 123 + horseX, 500); //far right upperleg
  quad(119 + horseX, 497, 124 + horseX, 518, 129 + horseX, 514, 126 + horseX, 494); // far right fore leg
  quad(127 + horseX, 521, 123 + horseX, 514, 128 + horseX, 512, 132 + horseX, 517); //hoof


   var r = map(cloudX, 0, width, 0, 255);
  var b = map(cloudX, 0, width, 255, 0);
  fill(r, 227, b);
  ellipse(cloudX, 550, 20, 20);   //the moving ball
  //ellipse(r, 570, 20, 20);
  
  cloudX = cloudX + speed;
      if (cloudX < 1) {
        speed = 1;
      }
      else if (cloudX > width) {
        speed = -1
      };  

var tailY = random(-10, 10);
noFill();
var r = map(cloudX, 0, width, 100, 200);
stroke(r, 46, r);
//stroke(0);
strokeWeight(8);
  beginShape();
  vertex(horseX + 113, 464);
  bezierVertex(horseX + 122, 452, horseX + 140, 487, horseX + 150, 477 + tailY);
  endShape();



noStroke();

fill(100, r, 119);
ellipse(0, 300, 10, 15);
ellipse(10, 310, 30, 20);





ellipse(550, 350, 10, 5);


fill(77, 77, 48);
ellipse(0, 550, 60, 80);
ellipse(5, 555, 80, 80);
ellipse(10, 560, 80, 60);
ellipse(33, 537, 45, 25);
ellipse(30, 568, 180, 60);


ellipse(580, 550, 60, 80);
ellipse(575, 555, 80, 80);
ellipse(570, 560, 80, 60);
ellipse(547, 537, 45, 25);
ellipse(540, 568, 180, 60);



//this is HOW THINGS TAKE AN ANGLE, somehow they always have to have TRANSLATE
// translate(500, 400);  
// angleMode(DEGREES);
// rotate(70);
// rect(20, 50, 52, 52, 10);
// arc(20, 20, 20, 20, 180, 0);
// ellipse(500, 400, 20, 10)

  //fill(horseX, 46, horseX - 60);
  //fill(r, 46, r);
  //ellipse(118 + horseX, 466, 14, 10); //TAIL closest to butt
  //ellipse(120 + horseX, 468, 14, 10);
  //ellipse(122 + horseX, 470, 14, 10);
   //ellipse(124 + horseX, 472, 14, 10);
  //ellipse(133 + horseX, 477, 26, 12); //widest furthest tail
 
  
  

  horseX = horseX - 1;
  		if (horseX > width + 20) {
  			speed = - 1;
  		}
  		else if (horseX == -120) {
  			horseX = width +600;
  		};


// image(img, mouseX, mouseY);

 
}; //end of draw function