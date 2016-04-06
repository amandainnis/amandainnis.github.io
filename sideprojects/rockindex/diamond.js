function draw() {
  noStroke();
  var r = map(squareX, 0, width, 140, 100);
  var g = map(squareX, 0, width, 100, 140);

fill(255);  //now the back ellipse 
  ellipse(290, 290, 237, 237);

  
  noStroke();
  fill(237, 208, 214); //LIGHTER grayish PINK
  quad(243, 179, 290, 190, 260, 220, 220, 220); //upper left facet
  fill(163, 142, 155); //LIGHTER PURPLE GRAY
  quad(337, 179, 290, 190, 320, 220, 360, 220);  //upper right facet
  fill(255, 227, 223); // PALE BRIGHT YELLOW PINKs
  quad(243, 400, 290, 390, 260, 360, 220, 360);  // bottom left facet
  fill(226, 194, 199); //EXTRA PALE PINK GRAY
  quad(337, 400, 290, 390, 320, 360, 360, 360);  // bottom right facet
  fill(202, 166, 173); //LITE PINK GRAY
  quad(180, 243, 190, 290, 220, 260, 220, 220);	//top middle left facet
  quad(400, 243, 390, 290, 360, 260, 360, 220); //top middle right facet
  
  quad(180, 336, 190, 290, 220, 320, 220, 360); //bottom middle left facet
  quad(400, 336, 390, 290, 360, 320, 360, 360); //bottom middle right facet

  

   
 

	
  
  fill(random(240, 255), 255, random(240, 255));
  // fill(255, 118, 143); //brighter pink red
  
  push(); //start a new drawing state
  translate(width*0.5, height*0.5);
  rotate(frameCount / 50.0);
  star(0, 0, 60, 120, 8);  //star(x center, y center, inner ring radius, outer ring radius, # of spokes)
  pop(); //restore previous state

  

  fill(237, 208, 214); //LIGHTER grayish PINK
  quad(243, 179, 290, 190, 260, 220, 220, 220); //upper left facet
  fill(189, 174, 182); //LIGHTER  ish PURPLE GRAY
  quad(337, 179, 290, 190, 320, 220, 360, 220);  //upper right facet
  fill(255, 227, 223); // PALE BRIGHT YELLOW PINKs
  quad(243, 400, 290, 390, 260, 360, 220, 360);  // bottom left facet
  fill(226, 194, 199); //EXTRA PALE PINK GRAY
  quad(337, 400, 290, 390, 320, 360, 360, 360);  // bottom right facet
  fill(202, 166, 173); //LITE PINK GRAY
  quad(180, 243, 190, 290, 220, 260, 220, 220);	//top middle left facet
  quad(400, 243, 390, 290, 360, 260, 360, 220); //top middle right facet
  
  quad(180, 336, 190, 290, 220, 320, 220, 360); //bottom middle left facet
  quad(400, 336, 390, 290, 360, 320, 360, 360); //bottom middle right facet

 
  // stroke(255, 255, 255, 150);
  stroke(100, 90, 100, 150);
  strokeWeight(1);
  noFill();


  //quad(290, 190, 390, 290, 290, 390, 190, 290);
  
  //rect(220, 220, 140, 140);
  
  

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
  ellipse(243, 179, 5, 5);
  ellipse(337, 179, 5, 5);
  ellipse(243, 400, 5, 5);
  ellipse(337, 400, 5, 5);

  fill(196, 104, 131);//SUBDUED MAGENTA
  ellipse(180, 243, 5, 5);
  ellipse(400, 243, 5, 5);
  ellipse(180, 336, 5, 5);
  ellipse(400, 336, 5, 5);//

  
  //peripheral facets
  fill(252, 223, 215);  //yellow pinkish
  triangle(337, 400, 290, 409, 290, 390);
  fill(250, 229, 228);  //another lightish
  triangle(360, 360, 374, 374, 337, 400);
  fill(226, 194, 199); //grayish pink
  triangle(400, 336, 360, 360, 374, 374);
  fill(250, 229, 228);  //another lite pinkish
  triangle(400, 336, 390, 290, 409, 290);
  fill(202, 166, 173); //grayish reddish
  triangle(400, 243, 390, 290, 409, 290);
  fill(254, 239, 239); //a pink
  triangle(400, 243, 360, 220, 374, 206);  //
  triangle(337, 179, 360, 220, 374, 206); 
  
  fill(254, 244, 242);  //A yellow pink
  triangle(290, 190, 290, 171, 337, 179);
  fill(255);
  triangle(243, 179, 290, 190, 290, 171);  //top left peripheral facet
  fill(202, 166, 173); //LITE PINK GRAY
  triangle(243, 179, 220, 220, 206, 206);
  fill(255, 227, 223); //VERY LITE PINK
  triangle(180, 243, 220, 220, 206, 206);
  fill(187, 170, 201); //pale purple gray
  
  triangle(180, 243, 190, 290, 171, 290);
  fill(193, 207, 242); //LITE BLUE
  triangle(180, 336, 190, 290, 171, 290); //lite blue
  //
  fill(250, 214, 215); //pinkey
  triangle(180, 336, 206, 374, 220, 360);  //the PINKEY peripheral facet bottom left
  fill(226, 194, 199); //EXTRA PALE PINK GRAY
  triangle(243, 400, 206, 374, 220, 360);
  fill(226, 194, 199); //LIGHT Pinkish GRAYish
  triangle(243, 400, 290, 390, 290, 409);  //bottom left peripheral facet

   fill(255, 255, 255); //white
  triangle(180, 243, 220, 220, 206, 206); //



//upper facets
  
  fill(116, 99, 144); //BLUE GRAY
  quad(290, 290, 290, 220, 260, 220, 240, 240);
  fill(202, 166, 173); // one of the pinks
  triangle(290, 290, 290, 220, 260, 220);
  noStroke();
  fill(244, 203, 209); //BRIGHTER LITE PINK
  quad(240, 240, 220, 260, 220, 290, 290, 290);
  fill(244, 203, 209); //BRIGHTER LITE PINK
  quad(220, 320, 220, 290, 290, 290, 240, 340);
  fill(223, 153, 165); //LIGHTER MEDIUM PINK
  quad(290, 290, 240, 340, 260, 360, 290, 360);
  fill(244, 203, 209); //BRIGHTER LITE PINK
  quad(290, 290, 290, 360, 320, 360, 339, 340);
  fill(255, 219, 221); //one of the pinks
  quad(290, 290, 360, 290, 360, 320, 340, 340);
  fill(245, 229, 240); //pale lavendar pink
  quad(340, 240, 290, 290, 360, 290, 360, 260);
  fill(226, 180, 182);
  quad(340, 240, 290, 290, 290, 220, 320, 220);

  
 

  //outer triangle facets
  
  fill(255, 252, 255);
  triangle(320, 360, 360, 360, 360, 320); //bottom right triangle
  fill(254, 239, 239); // white pink
  triangle(290, 390, 290, 361, 260, 361);  //bottom triangles
  triangle(290, 390, 290, 361, 320, 361);
  
  fill(155, 144, 153); // GRAY ish
  triangle(220, 360, 260, 360, 240, 340);   //lower left triangles
  fill(255);  //white
  triangle(240, 340, 220, 320, 220, 360);

  fill(237, 208, 214);
  triangle(190, 290, 220, 260, 220, 320);  //left middle triangle

  fill(254, 239, 239);
  triangle(220, 260, 220, 220, 260, 220);  // upper left triangle

  fill(249, 213, 221);
  triangle(260, 220, 290, 190, 320, 220); //top triangle

  fill(163, 142, 155);
  triangle(320, 220, 360, 220, 360, 260); //top right triangle

  fill(238, 197, 203);
  triangle(360, 260, 360, 320, 390, 290);  //right  middle triangle
  



  // WEIRD EXTRA TRIANGLES

  fill(163, 142, 155);  //dark triangle after the reddish line
  triangle(180, 336, 220, 320, 220, 360);
  fill(244, 203, 209); //pinkish
  triangle(180, 336, 220, 320, 200, 348);
  triangle(240, 340, 220, 340, 220, 360);
  
  fill(254, 239, 239); //pink white
  triangle(290, 290, 290, 320, 268, 312);
  fill(253, 232, 237); //I FUCKING LOVE THIS COLOR
  triangle(290, 290, 340, 360, 340, 340);

  triangle(290, 290, 240, 340, 260, 360);

  fill(237, 167, 182);
  triangle(278, 220, 302, 220, 290, 260); //PALE burgundy fleck
  fill(193, 207, 242); //LITE BLUE
  quad(290, 260, 302, 220, 320, 220, 290, 280);
  fill(255);
  quad(290, 220, 300, 230, 290, 260, 280, 230);  //white light on top
  fill(174, 117, 134);
  triangle(290, 280, 290, 290, 280, 280); // burgundy-ish triangle touching dead center from upper left facet
  
  fill(255, 158, 133);  //random orange color
  quad(220, 280, 220, 260, 280, 280, 270, 290);
  fill(253, 200, 194);  // below random orange
  triangle(220, 280, 220, 310, 270, 290);
  fill(188, 99, 127);  //red BURGUNDY
  triangle(220, 280, 220, 290, 240, 285);  //red burgundy triangle below random orange
  
  
  fill(254, 239, 239);  //WHITISH SQUARE
  quad(270, 270, 270, 290, 280, 300, 290, 290);

  fill(254, 239, 239);
  quad(290, 171, 290, 190, 300, 200, 310, 175);
  
  fill(144, 132, 149);  //GOOD GRAY
  triangle(400, 336, 360, 320, 360, 360); //ONTOP OF bottom middle right facet
  fill(255); //pinkey
  triangle(400, 336, 360, 340, 360, 360); //ONTOP OF bottom middle right facet
  fill(254, 239, 239); //pinkey
  triangle(337, 400, 320, 360, 360, 360);  // ON TOP OF bottom right facet 
  fill(245, 229, 240); //pale lavendar pink
  triangle(337, 400, 340, 360, 360, 360);
  fill(117, 109, 124);
  triangle(243, 400, 260, 360, 275, 375);
  fill(255, 219, 221);
  triangle(180, 243, 189, 282, 171, 285);
  fill(163, 142, 155);
  triangle(400, 243, 360, 260, 360, 220); // ON TOP OF top middle right fa
  fill(253, 232, 237);
  triangle(400, 243, 360, 260, 360, 280); //lavenderish highlight from top middle right dot
  fill(255, 243, 247);
  triangle(360, 220, 360, 245, 340, 240); //white highlight upper right inner facet corner
  fill(253, 200, 194);
  triangle(180, 243, 220, 260, 220, 220);	// ON TOP OF top middle left facet
  fill(252, 223, 215);
  triangle(243, 400, 290, 400, 290, 409); //ON TOP OF bottom left peripheral facet
  fill(251, 239, 232); //extra pale yellow pink
  triangle(200, 348, 206, 374, 220, 360);  //ON TOP OF the lite blue peripheral facet
  fill(204, 192, 196);
  triangle(243, 400, 216, 380, 220, 360);
  fill(255, 247, 247);
  triangle(184, 259, 220, 260, 190, 290);	//ON TOP OF ON TOP OF top middle left facet
  fill(254, 223, 218);//another pale yell pink
  triangle(228, 189, 220, 220, 206, 206); //on top of 2cd to left top peripheral facet
  fill(250, 214, 215);
  triangle(185, 316, 190, 290, 220, 320); // ON TOP OF bottom middle left facet
  fill(142, 128, 154);  //the lighter blue gray on top of the dark blue of the upper left inner facet
  triangle(250, 230, 260, 220, 286, 280);  // 
  fill(255);
  triangle(250, 230, 240, 240, 250, 250); //little white triangle also on top of blue thing

  fill(255, 247, 250);
  triangle(335, 220, 337, 179, 360, 220); //top right dot to rect
  triangle(243, 179, 290, 190, 300, 200); //top left dot to quad
  triangle(337, 179, 290, 190, 310, 210);	//top right dot to quad
  fill(202, 166, 173);
  triangle(400, 243, 360, 220, 360, 245); //top middle right dot to rect
  fill(253, 218, 221);
  //fill(253, 241, 243);
  quad(374, 206, 360, 206, 360, 220, 383, 220);  //little quad pink on upper right peripheral facets
  fill(225, 192, 198);
  quad(320, 198, 334, 198, 320, 220, 310, 210); //warmer pink ontop of upper right gray facet
  fill(174, 117, 134);
  //triangle(220, 260, 220, 220, 260, 220);  // upper left triangle
  triangle(220, 260, 220, 250, 230, 250); //little burgundy fleck ontop of upper left triangle
  fill(245, 229, 240);
  quad(220, 230, 220, 250, 230, 250, 235, 245);

  fill(233, 230, 239);
  triangle(243, 400, 232, 377, 255, 370); //bottom left dot to rect

  fill(254, 209, 184);
  triangle(409, 290, 380, 320, 405, 315); //yellowish on outer right facet near horizontal line

  fill(255);
  triangle(243, 179, 220, 220, 240, 220); //white highlight next to top left dot to rect
  fill(254, 250, 252);
  triangle(243, 179, 290, 190, 270, 210); //top left dot to quad
  fill(131, 98, 118);
  triangle(270, 210, 260, 220, 280, 220); //deep burgundy LEFT lil triangle ON TOP
  fill(223, 128, 153);
  quad(240, 240, 260, 220, 280, 220, 280, 230); //the red quad that is squaring off the left inner facet
  fill(131, 98, 118);
  triangle(310, 210, 300, 220, 320, 220); //deep burgundy RIGHT
  fill(254, 225, 223);
  triangle(320, 220, 340, 239, 310, 270);  //pink highlight HERE



  fill(223, 128, 153);
  quad(340, 239, 320, 220, 300, 220, 299, 229); //RIGHT the red quad that is squaring off the left inner facet
  fill(255, 253, 241);
  triangle(340, 239, 310, 270, 350, 260);  //highlight upper right inner facet
  fill(134, 117, 135);
  quad(305, 275, 310, 270, 350, 260, 350, 270); //gray purple underneath ABOVE highlight

  fill(247, 206, 208);
  quad(273, 174, 290, 171, 290, 180, 270, 210);

  fill(248, 207, 215);
  triangle(335, 360, 350, 360, 335, 350);
  fill(144, 132, 149);
  triangle(360, 340, 360, 350, 340, 340);
  //triangle(320, 360, 360, 360, 360, 320); //bottom right triangle

  fill(255, 245, 244);
  quad(240, 340, 245, 345, 240, 360, 220, 360);  //extra highlight on lower left triangle
  quad(280, 350, 290, 345, 290, 360, 275, 360);  //extra highlight on lower inner left facet
  fill(250, 229, 236);
  quad(279, 351, 290, 345, 290, 320, 270, 310);  //extra highlight on lower inner left facet
  
  fill(94, 66, 87); //deepER burgundy
  triangle(290, 340, 290, 360, 310, 360); //lower inner right burgundy
  fill(196, 158, 184);
  quad(290, 335, 290, 340, 310, 360, 322, 360); //purple-ish lower right
  triangle(290, 335, 318, 330, 321, 360);  //purple-ish lower right
  fill(94, 66, 87); //deepER burgundy
  triangle(318, 330, 305, 333, 319, 345);  //triangle burgundy
  fill(201, 85, 122);  //vermillion
  triangle(290, 353, 290, 360, 310, 360); //lower inner right vermillion
  triangle(318, 330, 319, 360, 332, 348);
  
  fill(235, 224, 233); //bluish
  quad(325, 313, 318, 330, 332, 348, 360, 320);
  

  fill(255, 253, 241);  //bright lovely yellowish
  quad(325, 295, 325, 309, 360, 320, 360, 305); //right lower  inner facet
  fill(94, 66, 87); //deepER burgundy
  triangle(325, 295, 325, 309, 335, 302); //surprise!  burgundy triangle next to yellow white highlight on right near middle 
  fill(253, 253, 253);
  triangle(337, 400, 290, 390, 305, 375);	// HIGHLIGHT bottom facet bottom right dot to quad
  fill(141, 124, 141); //LOWER RIGHT PURPLE GRAY
  triangle(337, 400, 320, 360, 305, 375);
  triangle(337, 400, 320, 360, 338, 380);
  fill(94, 66, 87); //deepER burgundy
  triangle(255, 295, 255, 309, 245, 302); //surprise!  burgundy triangle on the flip side LEFT
  
  fill(254, 249, 246);
  triangle(255, 295, 255, 309, 290, 290); //the whiteish highlight connected to that (ABOVE)triangle
  fill(252, 228, 236);
  triangle(290, 290, 255, 309, 255, 325); //pale pink next to the above

  fill(188, 99, 127);  //red BURGUNDY
  triangle(225, 325, 260, 315, 250, 350); //red burgundy triangle in lower left facet
  
  fill(94, 66, 87); //deepER burgundy
  triangle(230, 330, 255, 319, 240, 340); //deepER burgundy triangle inside ABOVE 
  triangle(306, 274, 306, 289, 299, 281); //  surprise 3rd triangle in upper right facet closest to center point
  //triangle(255, 295, 255, 309, 245, 302);
  fill(231, 193, 200);
  triangle(290, 290, 306, 290, 299, 281);
  fill(254, 233, 230); //pink orange on top of lite blue peripheral facet
  triangle(181, 336, 188, 300, 171, 290); //lite blue
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