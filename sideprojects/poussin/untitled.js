
  fill(62, 46, 24);
  rect(42 + horseX, 356, 33, 26, 22);//body 1
  rect(60 + horseX, 358, 47, 26, 22); //body 2
  

  //rect(42 + horseX, 356, 66, 26, 22);//body with round edges
  ellipse(101 + horseX, 375, 25, 33); //butt
  
  // +100 on all the  ys
  ellipse(35 + horseX, 347, 17, 16); //big head
  triangle(39 + horseX, 341, 28 + horseX, 335, 30 + horseX, 341); //ear
  quad(59 + horseX, 356, 42 + horseX, 342, 39 + horseX, 356, 43 + horseX, 365); //neck
  triangle(45+ horseX, 345, 83 + horseX, 364, 52 + horseX, 375); //2cd neck
 
  quad(45 + horseX, 349, 27 + horseX, 344, 21 + horseX, 361, 28 + horseX, 366);  //face part
  ellipse(25 + horseX, 362, 9, 9);//mouth
  
  
  quad(45 + horseX, 371, 30 + horseX, 383, 38 + horseX, 385, 55 + horseX, 377); //left upper leg
  quad(30 + horseX, 383, 32 + horseX, 399, 38 + horseX, 399, 37 + horseX, 383);//left fore leg
  quad(37 + horseX, 408, 32 + horseX, 399, 39 + horseX, 399, 43 + horseX, 404); //hoof 

  quad(57 + horseX, 377, 42 + horseX, 389, 50 + horseX, 391, 67 + horseX, 382); //2cdleft upper leg
  quad(42 + horseX, 389, 46 + horseX, 405, 52 + horseX, 405, 49 + horseX, 389);//2cd left fore leg
  quad(51 + horseX, 411, 45 + horseX, 402, 52 + horseX, 402, 57 + horseX, 407); //2cd hoof 


  fill(42, 46, 28);

  quad(86 + horseX, 384, 93 + horseX, 384, 107 + horseX, 395, 97 + horseX, 400); // right upperleg
  quad(101 + horseX, 390, 92 + horseX, 412, 97 + horseX, 414, 108 + horseX, 394); // right fore leg
  quad(98 + horseX, 419, 98 + horseX, 410, 93 + horseX, 410, 90 + horseX, 417); //hoof

  
  fill(62, 46, 24);

  quad(97 + horseX, 394, 95 + horseX, 386, 105 + horseX, 384, 107 + horseX, 394);
  quad(96 + horseX, 393, 109 + horseX, 383, 126 + horseX, 395, 123 + horseX, 400); //far right upperleg
  quad(119 + horseX, 397, 124 + horseX, 418, 129 + horseX, 414, 126 + horseX, 394); // far right fore leg
  quad(127 + horseX, 421, 123 + horseX, 414, 128 + horseX, 412, 132 + horseX, 417); //hoof

  fill(horseX, 46, horseX - 60);
  ellipse(118 + horseX, 366, 14, 10); //TAIL closest to butt
  ellipse(120 + horseX, 368, 14, 10);
  ellipse(122 + horseX, 370, 14, 10);
   ellipse(124 + horseX, 372, 14, 10);
  ellipse(133 + horseX, 377, 26, 12); //widest furthest tail
  rotate(-130);