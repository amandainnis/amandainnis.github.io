function resizeCanvas()
{
 stageW=window.innerWidth;
 stageH=window.innerHeight;
 
 if( height*stageW/width > stageH )
 {
  stageH = stageH;
  stageW = width * stageH/height;
  stageScale = stageH/height
  stageOffestX = ( window.innerWidth -stageW )/2;
  stageOffestY = 0;
 }
 else
 {
  stageW = stageW;
  stageH = height * stageW/width;
  stageScale = stageW/width;
  stageOffestX = 0;
  stageOffestY = ( window.innerHeight -stageH )/2;;
 }
}